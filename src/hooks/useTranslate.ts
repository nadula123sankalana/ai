import { useCallback } from "react";

/** Batch size for Google Translate v2 `q` array (stay under API limits). */
const CHUNK_SIZE = 100;

export type GoogleTranslateTarget = "de" | "es" | "fr" | "it";

export type GoogleTranslateResponse = {
  data?: {
    translations?: { translatedText?: string }[];
  };
  error?: { message?: string };
};

/**
 * Calls Google Cloud Translation API v2 (POST).
 * @see https://cloud.google.com/translate/docs/reference/rest/v2/translate
 */
export async function translateWithGoogle(
  texts: string[],
  target: GoogleTranslateTarget,
  apiKey: string,
): Promise<string[]> {
  if (texts.length === 0) return [];

  const out: string[] = [];

  for (let i = 0; i < texts.length; i += CHUNK_SIZE) {
    const chunk = texts.slice(i, i + CHUNK_SIZE);
    const url = `https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(apiKey)}`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: chunk,
        target,
        source: "en",
        format: "text",
      }),
    });

    const json = (await res.json()) as GoogleTranslateResponse;

    if (!res.ok) {
      const msg = json.error?.message ?? res.statusText;
      throw new Error(`Google Translate API error: ${msg}`);
    }

    const batch = json.data?.translations?.map((t) => t.translatedText ?? "") ?? [];
    if (batch.length !== chunk.length) {
      throw new Error("Google Translate API returned an unexpected number of segments.");
    }
    out.push(...batch);
  }

  return out;
}

/**
 * Hook that exposes a memoized batch translator using `VITE_GOOGLE_TRANSLATE_API_KEY`.
 */
export function useTranslate() {
  const apiKey = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY as string | undefined;

  const translateBatch = useCallback(
    async (texts: string[], target: GoogleTranslateTarget) => {
      if (!apiKey?.trim()) {
        throw new Error("Missing VITE_GOOGLE_TRANSLATE_API_KEY in environment.");
      }
      return translateWithGoogle(texts, target, apiKey.trim());
    },
    [apiKey],
  );

  return { translateBatch, hasApiKey: Boolean(apiKey?.trim()) };
}
