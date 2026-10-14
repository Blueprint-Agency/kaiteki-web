// Which locale URLs exist right now. Every surface that points at a locale page
// (hreflang, the sitemap, the header switcher, in-page links) asks here, so a
// page cannot be linked in one place and missing in another.

import { localePages } from "@/content/i18n/pages";
import { doctorBySlug } from "@/content/data/doctors";
import {
  defaultLocale,
  localeMeta,
  localePath,
  locales,
  nonDefaultLocales,
  type Locale,
  type NonDefaultLocale,
} from "@/lib/i18n";

/** Drafts are visible in dev and on the noindexed staging host, never on production.
 *  Reads the env directly rather than NOINDEX_SITE: lib/seo imports this module. */
export const LOCALE_PREVIEW =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_NOINDEX === "1";

/** Is `path` live in `locale`? English is the source tree and always is. */
export function isLive(locale: Locale, path: string): boolean {
  if (locale === defaultLocale) return true;
  const entry = localePages[locale][path];
  if (!entry) return false;
  if (entry.status === "signed") return doctorBySlug(entry.doctor) !== undefined;
  return LOCALE_PREVIEW;
}

/** Live locale paths, for the client-side switcher. */
export function liveLocalePaths(): Record<NonDefaultLocale, string[]> {
  return Object.fromEntries(
    nonDefaultLocales.map((l) => [l, Object.keys(localePages[l]).filter((p) => isLive(l, p))]),
  ) as Record<NonDefaultLocale, string[]>;
}

/** Every live non-English (locale, path) pair for the sitemap, with the date
 *  its doctor signed it (drafts have none). */
export function liveLocaleEntries(): { locale: NonDefaultLocale; path: string; signed?: string }[] {
  return nonDefaultLocales.flatMap((locale) =>
    Object.entries(localePages[locale])
      .filter(([path]) => isLive(locale, path))
      .map(([path, e]) => ({ locale, path, signed: e.status === "signed" ? e.date : undefined })),
  );
}

/**
 * Reciprocal hreflang set for a locale-neutral path, or undefined while only
 * English exists (a set of one is noise, and a partial set is worse than none:
 * every member must list every sibling and itself, plus one x-default).
 */
export function hreflangFor(path: string): Record<string, string> | undefined {
  const live = locales.filter((l) => isLive(l, path));
  if (live.length < 2) return undefined;
  return {
    ...Object.fromEntries(live.map((l) => [localeMeta[l].hreflang, localePath(l, path)])),
    "x-default": localePath(defaultLocale, path),
  };
}

/** The doctor who signed a locale page, and when. Drafts have none, so a draft
 *  never shows a reviewer byline. */
export function localeReviewer(locale: NonDefaultLocale, path: string) {
  const entry = localePages[locale][path];
  if (entry?.status !== "signed") return undefined;
  const doctor = doctorBySlug(entry.doctor);
  return doctor ? { doctor, date: entry.date } : undefined;
}

/** Internal link from a `locale` page: the locale version when it is live, else English. */
export function lhref(locale: Locale, path: string): string {
  return isLive(locale, path) ? localePath(locale, path) : path;
}
