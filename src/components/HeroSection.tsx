import { useEffect, useRef, useState } from "react";
import { ChevronRight, Link as LinkIcon, Play, TrendingUp, Eye, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/context/LanguageContext";

const marqueeImages = [
  { label: "Product Videos", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=750&fit=crop&q=85" },
  { label: "Commercials", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=750&fit=crop&q=85" },
  { label: "Social Content", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=750&fit=crop&q=85" },
  { label: "Testimonials", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=750&fit=crop&q=85" },
  { label: "Explainers", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=750&fit=crop&q=85" },
  { label: "Event Coverage", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=750&fit=crop&q=85" },
  { label: "Animations", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=750&fit=crop&q=85" },
];

const heroAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
];

const HeroSection = () => {
  const { t } = useTranslation();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const getStep = () => {
      const firstCard = slider.children[0] as HTMLElement | undefined;
      if (!firstCard) return 1;
      const gap = parseFloat(getComputedStyle(slider).columnGap || getComputedStyle(slider).gap || "0");
      return firstCard.getBoundingClientRect().width + gap;
    };

    const onScroll = () => {
      const step = getStep();
      const nextIndex = Math.max(0, Math.min(marqueeImages.length - 1, Math.round(slider.scrollLeft / step)));
      setActiveSlide(nextIndex);
    };

    onScroll();
    slider.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      slider.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const firstCard = slider.children[0] as HTMLElement | undefined;
    if (!firstCard) return;
    const gap = parseFloat(getComputedStyle(slider).columnGap || getComputedStyle(slider).gap || "0");
    const step = firstCard.getBoundingClientRect().width + gap;

    slider.scrollTo({ left: step * index, behavior: "smooth" });
    setActiveSlide(index);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || !window.matchMedia("(max-width: 767px)").matches) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => {
        const next = (current + 1) % marqueeImages.length;
        const firstCard = slider.children[0] as HTMLElement | undefined;
        if (!firstCard) return current;

        const gap = parseFloat(getComputedStyle(slider).columnGap || getComputedStyle(slider).gap || "0");
        const step = firstCard.getBoundingClientRect().width + gap;
        slider.scrollTo({ left: step * next, behavior: "smooth" });

        return next;
      });
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-neutral-950 pt-24 text-white md:pt-32"
      data-switcher-surface="dark"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-36 top-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[130px]" />
        <div className="absolute -right-20 top-20 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-neutral-950/70 to-white" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-5 text-[2.45rem] font-heading font-800 leading-[1.06] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]">
            {t("AI videos made for your business.")}
            <span className="block">
              <span className="text-gradient">{t("From idea to final video.")}</span>
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-[1.06rem] leading-relaxed text-white/70 md:mb-10 md:text-lg">
            {t(
              "Tell us what you need. Our team will plan, script, create, and deliver AI-generated videos for ads, social media, product launches, explainers, and brand content.",
            )}
          </p>

          <div className="mx-auto mb-4 w-full max-w-xl md:mb-5">
            <div className="flex justify-center">
              <Button
                type="button"
                className="group h-16 w-full overflow-hidden rounded-xl border border-cyan-300/45 bg-black p-0 text-white shadow-[0_18px_40px_-14px_rgba(42,77,255,0.85)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-14px_rgba(42,77,255,0.95)] sm:w-auto"
              >
                <span className="flex h-full w-16 items-center justify-center bg-gradient-to-br from-[#14a6ff] via-[#3b82f6] to-[#5b3df5] transition-all duration-300 group-hover:brightness-110">
                  <ChevronRight className="h-8 w-8" />
                </span>
                <span className="bg-gradient-to-r from-[#0f1118] via-[#171a28] to-[#1d1230] px-8 text-sm font-extrabold uppercase tracking-[0.12em] leading-[4rem]">
                  {t("Get Started")}
                </span>
              </Button>
            </div>
            <p className="mt-3 text-xs text-white/55">
              {t("No complicated tools • No production team needed • Fast delivery")}
            </p>
          </div>

          <div className="mb-12 flex flex-col items-center justify-center gap-3 text-center text-[11px] md:mb-14 md:text-xs">
            <div className="flex -space-x-2">
              {heroAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-7 w-7 rounded-full border-2 border-neutral-950 object-cover md:h-8 md:w-8"
                  loading="eager"
                />
              ))}
            </div>
            <p className="max-w-xl font-semibold leading-snug text-white/90">
              {t("Created for brands, startups, marketers, and product-based businesses")}
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute -inset-8 rounded-[40px] bg-hero-gradient-soft blur-2xl" />

          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-neutral-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] md:rounded-[28px]">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--pink))]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--warm))]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
              </div>
              <div className="ml-3 flex-1">
                <div className="mx-auto flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-black/35 px-2.5 py-0.5 text-[10px] font-medium text-white/65 sm:gap-2 sm:px-3 sm:py-1 sm:text-xs">
                  <LinkIcon className="h-3 w-3" />
                  {t("catalyst.ai / studio / preview")}
                </div>
              </div>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary sm:px-2.5 sm:text-[10px]">
                {t("Live")}
              </span>
            </div>

            <div className="relative w-full bg-black">
              <div className="relative w-full" style={{ padding: "56.25% 0 0 0" }}>
                <iframe
                  title={t("hf_20260504_121600_d7cf8e52-accf-4587-ac88-b016d5582946")}
                  src="https://player.vimeo.com/video/1191428392?badge=0&autopause=0&player_id=0&app_id=58479"
                  className="absolute left-0 top-0 z-0 h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="eager"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/30" />

              <div className="pointer-events-none absolute left-2.5 top-2.5 z-10 flex items-center gap-1.5 rounded-xl border border-white/15 bg-black/55 px-2 py-1 backdrop-blur-md sm:left-6 sm:top-6 sm:gap-2 sm:px-3 sm:py-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/90 sm:h-7 sm:w-7">
                  <Eye className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-heading text-xs font-800 leading-none text-white sm:text-sm">1.2M</div>
                  <div className="text-[9px] text-white/75 sm:text-[10px]">{t("views · this week")}</div>
                </div>
              </div>

              <div className="pointer-events-none absolute right-2.5 top-2.5 z-10 flex items-center gap-1.5 rounded-xl border border-white/15 bg-black/55 px-2 py-1 backdrop-blur-md sm:right-6 sm:top-6 sm:gap-2 sm:px-3 sm:py-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[hsl(var(--warm))]/90 sm:h-7 sm:w-7">
                  <TrendingUp className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="font-heading text-xs font-800 leading-none text-white sm:text-sm">+273%</div>
                  <div className="text-[9px] text-white/75 sm:text-[10px]">{t("ROAS vs. baseline")}</div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/60 px-2.5 py-1.5 backdrop-blur-md sm:bottom-6 sm:gap-3 sm:px-4 sm:py-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-md sm:h-9 sm:w-9">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-black sm:h-4 sm:w-4" />
                </span>
                <div className="hidden sm:block h-1 w-48 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[35%] rounded-full bg-hero-gradient" />
                </div>
                <div className="hidden items-center gap-1.5 text-xs font-medium text-white/85 sm:flex">
                  <Clock className="h-3 w-3" />
                  {t("0:03 / 0:08")}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
              {[
                { label: "Hook retention", value: "94%", tone: "text-gradient-primary" },
                { label: "CTR", value: "6.8%", tone: "text-gradient-accent" },
                { label: "CPA", value: "–42%", tone: "text-gradient-warm" },
                { label: "Variants live", value: "24", tone: "text-gradient" },
              ].map((s) => (
                <div key={s.label} className="bg-neutral-900 p-3 text-center sm:p-4">
                  <div className={`font-heading text-[1.8rem] font-800 leading-none sm:text-2xl ${s.tone}`}>{s.value}</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-white/60 sm:mt-1.5 sm:text-[11px] sm:tracking-wider">
                    {t(s.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 w-full md:mt-20">
          <div ref={sliderRef} className="scrollbar-none -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 md:hidden">
            {marqueeImages.map((img) => (
              <div
                key={img.label}
                className="group relative h-[180px] w-[82vw] max-w-[320px] flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={img.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute bottom-0 left-0 z-10 p-5 font-heading text-sm font-700 text-white drop-shadow-md">
                  {t(img.label)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
            {marqueeImages.map((img, index) => (
              <button
                key={`${img.label}-dot`}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={t(`Go to ${img.label}`)}
                aria-current={activeSlide === index}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === index ? "w-6 bg-white" : "w-2 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <div className="hidden w-full overflow-hidden mask-fade-x md:block">
            <div className="flex w-max gap-4 lg:animate-marquee">
              {[...marqueeImages, ...marqueeImages].map((img, i) => (
                <div
                  key={`${img.label}-${i}`}
                  className="group relative h-[220px] w-[340px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={img.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-md">
                      <Play className="ml-0.5 h-5 w-5 fill-neutral-900 text-neutral-900" />
                    </span>
                  </div>
                  <span className="absolute bottom-0 left-0 z-10 p-5 font-heading text-base font-700 text-white drop-shadow-md">
                    {t(img.label)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 md:h-24" />
    </section>
  );
};

export default HeroSection;
