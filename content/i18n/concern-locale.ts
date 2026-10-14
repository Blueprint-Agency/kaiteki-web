// Localized concern records: the English record with a locale's copy laid over
// it (lib/i18n-overlay.ts). Translations live in content/i18n/concerns/<locale>/
// <slug>.json, one per page, each mirroring the English record's shape.
//
// Read from disk at build time: every concern route is statically generated
// (dynamicParams = false), so nothing reads these files at request time.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { concernBySlug } from "@/content/data/concerns";
import { overlay } from "@/lib/i18n-overlay";
import type { NonDefaultLocale } from "@/lib/i18n";
import type { Concern } from "@/lib/types";

const dir = (locale: NonDefaultLocale) => join(process.cwd(), "content", "i18n", "concerns", locale);

/** Slugs that have a translation file for `locale`. */
export function translatedConcernSlugs(locale: NonDefaultLocale): string[] {
  const d = dir(locale);
  if (!existsSync(d)) return [];
  return readdirSync(d)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.slice(0, -".json".length))
    .filter((slug) => concernBySlug(slug) !== undefined);
}

export function localizedConcern(
  locale: NonDefaultLocale,
  slug: string,
): { c: Concern; en: Concern; missing: string[] } | undefined {
  const en = concernBySlug(slug);
  const file = join(dir(locale), `${slug}.json`);
  if (!en || !existsSync(file)) return undefined;
  const { value, missing } = overlay(en, JSON.parse(readFileSync(file, "utf8")));
  return { c: value, en, missing };
}
