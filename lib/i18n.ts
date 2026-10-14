// Locale model (docs/04 §8, docs/15 item 4.4). English is unprefixed at the
// root; Chinese and Malay mirror it under /zh and /ms with the SAME slugs, so a
// page's locale versions differ only by prefix.
//
// The copy under each prefix is written per locale from that locale's own
// keyword research (docs/18), not translated line by line from the English.

export const locales = ["en", "zh", "ms"] as const;
export type Locale = (typeof locales)[number];
export type NonDefaultLocale = Exclude<Locale, "en">;
export const defaultLocale = "en" satisfies Locale;
export const nonDefaultLocales: NonDefaultLocale[] = ["zh", "ms"];

export const localeMeta: Record<
  Locale,
  {
    /** <html lang>. Simplified script is named so screen readers and font
     *  fallback pick Hans glyphs; Malaysian Chinese read Simplified. */
    htmlLang: string;
    /** hreflang value. Google takes ISO 639-1 + optional ISO 3166-1 region. */
    hreflang: string;
    /** og:locale */
    og: string;
    /** schema.org inLanguage (BCP 47) */
    bcp47: string;
    /** Label in the header switcher, written in its own language. */
    short: string;
    /** Full name in its own language (switcher aria/title). */
    name: string;
  }
> = {
  en: { htmlLang: "en-MY", hreflang: "en-MY", og: "en_MY", bcp47: "en-MY", short: "EN", name: "English" },
  zh: { htmlLang: "zh-Hans-MY", hreflang: "zh-MY", og: "zh_MY", bcp47: "zh-Hans-MY", short: "中文", name: "简体中文" },
  ms: { htmlLang: "ms-MY", hreflang: "ms-MY", og: "ms_MY", bcp47: "ms-MY", short: "BM", name: "Bahasa Melayu" },
};

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

/** "/treatments/hifu" → "/zh/treatments/hifu"; "/" → "/zh". English unchanged. */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Inverse of localePath: "/zh/treatments/hifu" → { locale: "zh", path: "/treatments/hifu" }. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const seg = pathname.split("/")[1] ?? "";
  if (seg !== defaultLocale && isLocale(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return { locale: seg, path: rest === "" ? "/" : rest };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}
