import { useCallback, useLayoutEffect, useRef, useState, type RefObject } from "react";
import { ChevronDown, Check, Languages, Loader2 } from "lucide-react";
import { useTranslation, SITE_LANGUAGES, type SiteLanguage } from "@/context/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export type LanguageSwitcherVariant = "navbar" | "floating";

export type FloatingSwitcherSurface = "light" | "dark";

function useFloatingSwitcherSurface(hostRef: RefObject<HTMLElement | null>): FloatingSwitcherSurface {
  const [surface, setSurface] = useState<FloatingSwitcherSurface>("dark");

  const readSurface = useCallback(() => {
    const host = hostRef.current;
    if (!host) return;
    const r = host.getBoundingClientRect();
    const cx = Math.min(window.innerWidth - 1, Math.max(0, r.left + r.width / 2));
    const cy = Math.min(window.innerHeight - 1, Math.max(0, r.top + r.height / 2));
    const stack = document.elementsFromPoint(cx, cy);
    for (const el of stack) {
      if (host.contains(el)) continue;
      let node: Element | null = el;
      while (node) {
        const attr = node instanceof HTMLElement ? node.dataset.switcherSurface : undefined;
        if (attr === "light" || attr === "dark") {
          setSurface(attr);
          return;
        }
        node = node.parentElement;
      }
    }
    setSurface("light");
  }, [hostRef]);

  useLayoutEffect(() => {
    readSurface();
    let raf = 0;
    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(readSurface);
    };
    window.addEventListener("scroll", onScrollOrResize, { passive: true, capture: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize, { capture: true });
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [readSurface]);

  return surface;
}

type LanguageSwitcherProps = {
  className?: string;
  /** `floating` = glass pill (navbar-style) for bottom-corner placement. */
  variant?: LanguageSwitcherVariant;
  /** When the floating control sits over a light section, use dark foreground. */
  floatingSurface?: FloatingSwitcherSurface;
};

export function LanguageSwitcher({
  className,
  variant = "floating",
  floatingSurface = "dark",
}: LanguageSwitcherProps) {
  const { language, setLanguage, t, isTranslating, translateError, isDetectingLocale } = useTranslation();

  const current = SITE_LANGUAGES.find((l) => l.code === language) ?? SITE_LANGUAGES[0];
  const code = current.code.toUpperCase();

  const onLight = variant === "floating" && floatingSurface === "light";

  const triggerFloating = isDetectingLocale ? (
    <>
      <Loader2
        className={cn("h-4 w-4 shrink-0 animate-spin", onLight ? "text-neutral-600" : "text-white/80")}
        aria-hidden
      />
      <span className={cn("text-xs font-medium", onLight ? "text-neutral-600" : "text-white/75")}>
        {t("Detecting…")}
      </span>
    </>
  ) : (
    <>
      <span
        className={cn("font-bold tracking-wide", onLight ? "text-neutral-900" : "text-white/95")}
      >
        {code}
      </span>
      <span className="text-base leading-none" aria-hidden>
        {current.flag}
      </span>
      <span
        className={cn("h-3 w-px", onLight ? "bg-neutral-300" : "bg-white/25")}
        aria-hidden
      />
      <span
        className={cn("font-semibold tracking-wide", onLight ? "text-neutral-800" : "text-white/85")}
      >
        {current.labelNative}
      </span>
      <ChevronDown
        className={cn("h-3.5 w-3.5 shrink-0", onLight ? "text-neutral-600" : "text-white/70")}
      />
    </>
  );

  const triggerNavbar = isDetectingLocale ? (
    <>
      <Loader2 className="h-4 w-4 shrink-0 animate-spin opacity-80" aria-hidden />
      <span className="text-xs text-white/75">{t("Detecting…")}</span>
    </>
  ) : (
    <>
      <Languages className="h-4 w-4 shrink-0 opacity-80" />
      <span className="hidden sm:inline">
        <span className="mr-1.5" aria-hidden>
          {current.flag}
        </span>
        {current.labelNative}
      </span>
      <span className="sm:hidden" aria-hidden>
        {current.flag}
      </span>
      <ChevronDown className="h-3.5 w-3.5 opacity-70" />
    </>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        className={cn(
          variant === "floating" &&
            (onLight
              ? "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/85 px-3.5 py-2 text-sm font-medium text-neutral-900 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-colors hover:border-black/18 hover:bg-white active:scale-[0.98]"
              : "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-medium text-white/90 shadow-[0_10px_35px_-18px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-colors hover:border-white/30 hover:bg-white/15 hover:text-white active:scale-[0.98]"),
          variant === "navbar" &&
            "inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white",
          className,
        )}
        aria-label="Language"
      >
        {variant === "floating" ? triggerFloating : triggerNavbar}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={variant === "floating" ? "top" : "bottom"}
        align="end"
        sideOffset={variant === "floating" ? 10 : 4}
        className={cn(
          "z-[200] min-w-[220px] border-white/10 bg-neutral-950 text-white",
          variant === "floating" && "rounded-xl border-neutral-700 shadow-xl",
        )}
      >
        {SITE_LANGUAGES.map((opt) => (
          <DropdownMenuItem
            key={opt.code}
            className="cursor-pointer gap-2 text-white focus:bg-white/10 focus:text-white"
            onClick={() => setLanguage(opt.code as SiteLanguage)}
          >
            <span className="text-lg" aria-hidden>
              {opt.flag}
            </span>
            <span className="flex-1">{opt.labelNative}</span>
            {language === opt.code ? <Check className="h-4 w-4 text-primary" /> : null}
          </DropdownMenuItem>
        ))}
        {(isTranslating || translateError) && (
          <div className="border-t border-white/10 px-2 py-2 text-xs text-white/60">
            {translateError ? <span className="text-red-300">{translateError}</span> : "Translating…"}
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** Fixed bottom-right language control (use once inside the router tree). */
export function FloatingLanguageSwitcher() {
  const hostRef = useRef<HTMLDivElement>(null);
  const floatingSurface = useFloatingSwitcherSurface(hostRef);

  return (
    <div
      ref={hostRef}
      data-language-switcher
      className="fixed bottom-4 right-4 z-[100] md:bottom-6 md:right-6"
      role="navigation"
      aria-label="Language selection"
    >
      <LanguageSwitcher variant="floating" floatingSurface={floatingSurface} />
    </div>
  );
}
