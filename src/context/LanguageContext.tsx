import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useTranslate } from "@/hooks/useTranslate";
import type { GoogleTranslateTarget } from "@/hooks/useTranslate";

export type SiteLanguage = "en" | GoogleTranslateTarget;

export const SITE_LANGUAGES: {
  code: SiteLanguage;
  flag: string;
  /** English name for UI */
  labelEn: string;
  /** Native label for dropdown */
  labelNative: string;
}[] = [
  { code: "en", flag: "🇬🇧", labelEn: "English", labelNative: "English" },
  { code: "de", flag: "🇩🇪", labelEn: "German", labelNative: "Deutsch" },
  { code: "es", flag: "🇪🇸", labelEn: "Spanish", labelNative: "Español" },
  { code: "fr", flag: "🇫🇷", labelEn: "French", labelNative: "Français" },
  { code: "it", flag: "🇮🇹", labelEn: "Italian", labelNative: "Italiano" },
];

type NonEnglish = GoogleTranslateTarget;

type TranslationCache = Partial<Record<NonEnglish, Record<string, string>>>;

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (lang: SiteLanguage) => void;
  /** Translate a visible English string for the current language (cached). */
  t: (source: string) => string;
  isTranslating: boolean;
  translateError: string | null;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

let rescanScheduled = false;
function scheduleRescan(setScan: React.Dispatch<React.SetStateAction<number>>) {
  if (rescanScheduled) return;
  rescanScheduled = true;
  queueMicrotask(() => {
    rescanScheduled = false;
    setScan((n) => n + 1);
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { translateBatch, hasApiKey } = useTranslate();
  const [language, setLanguage] = useState<SiteLanguage>("en");
  const [cache, setCache] = useState<TranslationCache>({});
  const [isTranslating, setIsTranslating] = useState(false);
  const [translateError, setTranslateError] = useState<string | null>(null);
  const [scanTick, setScanTick] = useState(0);

  const usedStringsRef = useRef(new Set<string>());
  const requestGeneration = useRef(0);
  const cacheRef = useRef<TranslationCache>(cache);
  cacheRef.current = cache;

  const t = useCallback(
    (source: string) => {
      if (!usedStringsRef.current.has(source)) {
        usedStringsRef.current.add(source);
        scheduleRescan(setScanTick);
      }
      if (language === "en") return source;
      return cache[language]?.[source] ?? source;
    },
    [language, cache],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t,
      isTranslating,
      translateError,
    }),
    [language, t, isTranslating, translateError],
  );

  useEffect(() => {
    if (language === "en") {
      setIsTranslating(false);
      setTranslateError(null);
      return;
    }

    if (!hasApiKey) {
      setTranslateError("Missing VITE_GOOGLE_TRANSLATE_API_KEY.");
      setIsTranslating(false);
      return;
    }

    const target = language as GoogleTranslateTarget;
    const all = Array.from(usedStringsRef.current);
    const missing = all.filter((s) => !cacheRef.current[target]?.[s]);

    if (missing.length === 0) {
      setIsTranslating(false);
      setTranslateError(null);
      return;
    }

    const gen = ++requestGeneration.current;
    setIsTranslating(true);
    setTranslateError(null);

    const unique = [...new Set(missing)];

    translateBatch(unique, target)
      .then((translated) => {
        if (requestGeneration.current !== gen) return;
        const pairs: Record<string, string> = {};
        unique.forEach((src, i) => {
          pairs[src] = translated[i] ?? src;
        });
        setCache((prev) => ({
          ...prev,
          [target]: { ...prev[target], ...pairs },
        }));
      })
      .catch((err: unknown) => {
        if (requestGeneration.current !== gen) return;
        const message = err instanceof Error ? err.message : "Translation failed.";
        setTranslateError(message);
      })
      .finally(() => {
        if (requestGeneration.current !== gen) return;
        setIsTranslating(false);
      });
  }, [language, scanTick, hasApiKey, translateBatch]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within a LanguageProvider.");
  }
  return ctx;
}
