// Localized concern records: the English record with a locale's copy laid over
// it (lib/i18n-overlay.ts). Translations live in content/i18n/concerns/<locale>/
// <slug>.json, one per page, each mirroring the English record's shape.
//
// They are bundled through the generated static index (content/i18n/concerns/
// index.ts, `pnpm i18n:index`) rather than read with fs at render time: the
// bundler then tracks every file, so an edited translation hot-reloads in dev
// and nothing touches the filesystem when a page renders.

import { concernBySlug } from "@/content/data/concerns";
import { concernTranslations } from "@/content/i18n/concerns";
import { overlay } from "@/lib/i18n-overlay";
import type { NonDefaultLocale } from "@/lib/i18n";
import type { Concern } from "@/lib/types";

/** Slugs that have a translation file for `locale`. */
export function translatedConcernSlugs(locale: NonDefaultLocale): string[] {
  return Object.keys(concernTranslations[locale]).filter((slug) => concernBySlug(slug) !== undefined);
}

export function localizedConcern(
  locale: NonDefaultLocale,
  slug: string,
): { c: Concern; en: Concern; missing: string[] } | undefined {
  const en = concernBySlug(slug);
  const tr = concernTranslations[locale][slug];
  if (!en || !tr) return undefined;
  const { value, missing } = overlay(en, tr);
  return { c: value, en, missing };
}
