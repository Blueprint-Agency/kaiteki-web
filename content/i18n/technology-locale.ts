// Localized device/injectable records: the English record with a locale's copy
// laid over it (lib/i18n-overlay.ts). Same mechanism as concern-locale.ts:
// translations in content/i18n/technology/<locale>/<slug>.json, bundled through
// the generated index (pnpm i18n:index).

import { technologyBySlug } from "@/content/data/technology";
import { translations } from "@/content/i18n/technology";
import { overlay } from "@/lib/i18n-overlay";
import type { NonDefaultLocale } from "@/lib/i18n";
import type { Technology } from "@/lib/types";

/** Slugs that have a translation file for `locale`. */
export function translatedTechnologySlugs(locale: NonDefaultLocale): string[] {
  return Object.keys(translations[locale]).filter((slug) => technologyBySlug(slug) !== undefined);
}

export function localizedTechnology(
  locale: NonDefaultLocale,
  slug: string,
): { x: Technology; en: Technology; missing: string[] } | undefined {
  const en = technologyBySlug(slug);
  const tr = translations[locale][slug];
  if (!en || !tr) return undefined;
  const { value, missing } = overlay(en, tr);
  return { x: value, en, missing };
}
