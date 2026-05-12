import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
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

const LS_LANG = "video-impact-studio:language";
const LS_SOURCE = "video-impact-studio:language-source";

type LangSource = "manual" | "auto";

type NonEnglish = GoogleTranslateTarget;

type TranslationCache = Partial<Record<NonEnglish, Record<string, string>>>;

type IpWhoPayload = {
  success?: boolean;
  country_code?: string;
  region?: string;
  region_code?: string;
};

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (lang: SiteLanguage) => void;
  /** Translate a visible English string for the current language (cached). */
  t: (source: string) => string;
  isTranslating: boolean;
  translateError: string | null;
  /** True while resolving locale from IP on first visit (no saved preference). */
  isDetectingLocale: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isSiteLanguage(value: string | null): value is SiteLanguage {
  return value === "en" || value === "de" || value === "es" || value === "fr" || value === "it";
}

function readStoredPreference(): { lang: SiteLanguage; source: LangSource } | null {
  try {
    const source = localStorage.getItem(LS_SOURCE) as LangSource | null;
    const lang = localStorage.getItem(LS_LANG);
    if ((source === "manual" || source === "auto") && lang && isSiteLanguage(lang)) {
      return { lang, source };
    }
  } catch {
    /* ignore */
  }
  return null;
}

function writeStoredPreference(lang: SiteLanguage, source: LangSource) {
  try {
    localStorage.setItem(LS_LANG, lang);
    localStorage.setItem(LS_SOURCE, source);
  } catch {
    /* ignore */
  }
}

/**
 * Map IP geolocation (ipwho.is) to a supported site language.
 * @see https://ipwho.is/
 */
export function mapCountryToSiteLanguage(
  countryCode: string,
  region?: string,
  regionCode?: string,
): SiteLanguage {
  const cc = countryCode.trim().toUpperCase();
  const rc = (regionCode ?? "").trim().toUpperCase();
  const rn = (region ?? "").trim().toLowerCase();

  if (cc === "CA") {
    if (rn.includes("quebec") || rc === "QC") return "fr";
    return "en";
  }

  if (cc === "CH") {
    if (rc === "TI" || rn.includes("ticino")) return "it";
    const frMajorityCantons = new Set(["GE", "VD", "NE", "JU", "VS"]);
    if (frMajorityCantons.has(rc)) return "fr";
    return "de";
  }

  const germanic = new Set(["DE", "AT"]);
  const spanish = new Set(["ES", "MX", "AR", "CO", "CL", "PE"]);
  const french = new Set(["FR", "BE"]);
  const italian = new Set(["IT"]);

  if (germanic.has(cc)) return "de";
  if (spanish.has(cc)) return "es";
  if (french.has(cc)) return "fr";
  if (italian.has(cc)) return "it";

  return "en";
}

async function fetchCountryFromIpWho(): Promise<{ country_code: string; region?: string; region_code?: string }> {
  const res = await fetch("https://ipwho.is/", {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`ipwho.is HTTP ${res.status}`);
  const data = (await res.json()) as IpWhoPayload;
  if (!data.success || !data.country_code) {
    throw new Error(data.success === false ? "ipwho.is lookup failed" : "Missing country_code");
  }
  return {
    country_code: data.country_code,
    region: data.region,
    region_code: data.region_code,
  };
}

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
  const [language, setLanguageState] = useState<SiteLanguage>("en");
  const [cache, setCache] = useState<TranslationCache>({});
  const [isTranslating, setIsTranslating] = useState(false);
  const [translateError, setTranslateError] = useState<string | null>(null);
  const [scanTick, setScanTick] = useState(0);
  const [isDetectingLocale, setIsDetectingLocale] = useState(true);

  const usedStringsRef = useRef(new Set<string>());
  const skipGeoApplyRef = useRef(false);
  const requestGeneration = useRef(0);
  const cacheRef = useRef<TranslationCache>(cache);
  cacheRef.current = cache;

  const setLanguage = useCallback((lang: SiteLanguage) => {
    skipGeoApplyRef.current = true;
    writeStoredPreference(lang, "manual");
    setLanguageState(lang);
    setIsDetectingLocale(false);
  }, []);

  useLayoutEffect(() => {
    const stored = readStoredPreference();
    if (stored) {
      setLanguageState(stored.lang);
      setIsDetectingLocale(false);
      return;
    }

    let cancelled = false;
    setIsDetectingLocale(true);

    fetchCountryFromIpWho()
      .then((geo) => {
        if (cancelled || skipGeoApplyRef.current) return;
        const next = mapCountryToSiteLanguage(geo.country_code, geo.region, geo.region_code);
        writeStoredPreference(next, "auto");
        setLanguageState(next);
      })
      .catch(() => {
        if (cancelled || skipGeoApplyRef.current) return;
        writeStoredPreference("en", "auto");
        setLanguageState("en");
      })
      .finally(() => {
        if (!cancelled) setIsDetectingLocale(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

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
      isDetectingLocale,
    }),
    [language, setLanguage, t, isTranslating, translateError, isDetectingLocale],
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
