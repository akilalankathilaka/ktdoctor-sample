"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

interface LangApi {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<LangApi | null>(null);
const STORAGE_KEY = "kt-lang";

export function useLang(): LangApi {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLang must be used within <LanguageProvider>");
  return v;
}

/** Pick a string for the current language. */
export function tr(lang: Lang, en: string, es: string): string {
  return lang === "es" ? es : en;
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  // Server + first client render use "en" so hydration matches; the real
  // preference (saved choice, else the patient's browser/OS language) is
  // resolved right after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let resolved: Lang | null = null;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") resolved = saved;
    } catch {
      /* ignore */
    }
    if (!resolved) {
      const langs = navigator.languages?.length
        ? navigator.languages
        : [navigator.language];
      resolved = langs.some((l) => l.toLowerCase().startsWith("es")) ? "es" : "en";
    }
    setLangState(resolved);
  }, []);

  // keep <html lang> in sync for accessibility / SEO
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const api = useMemo<LangApi>(() => ({ lang, setLang }), [lang, setLang]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

/** Inline translated text — usable inside server components too. */
export function T({ en, es }: { en: string; es: string }) {
  const { lang } = useLang();
  return <>{tr(lang, en, es)}</>;
}
