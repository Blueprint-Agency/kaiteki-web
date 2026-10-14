// Localized treatment records: the English record with a locale's copy laid
// over it (lib/i18n-overlay.ts). Same mechanism as concern-locale.ts:
// translations in content/i18n/treatments/<locale>/<slug>.json, bundled through
// the generated index (pnpm i18n:index).

import { treatmentBySlug } from "@/content/data/treatments";
import { translations } from "@/content/i18n/treatments";
import { overlay } from "@/lib/i18n-overlay";
import type { NonDefaultLocale } from "@/lib/i18n";
import type { Treatment } from "@/lib/types";

/** Slugs that have a translation file for `locale`. */
export function translatedTreatmentSlugs(locale: NonDefaultLocale): string[] {
  return Object.keys(translations[locale]).filter((slug) => treatmentBySlug(slug) !== undefined);
}

export function localizedTreatment(
  locale: NonDefaultLocale,
  slug: string,
): { t: Treatment; en: Treatment; missing: string[] } | undefined {
  const en = treatmentBySlug(slug);
  const tr = translations[locale][slug];
  if (!en || !tr) return undefined;
  const { value, missing } = overlay(en, tr);
  return { t: value, en, missing };
}
