// Relative + import attribute, not the "@/" alias: the validate:* scripts load
// this module through node --experimental-strip-types, which resolves neither.
import ledger from "../config/concern-signoff.json" with { type: "json" };
// The ".ts" extension is required for the same reason: node resolves this
// specifier literally (allowImportingTsExtensions is on, and Next strips it).
import { doctorBySlug } from "../content/data/doctors.ts";
import type { Doctor } from "./types";

export type Signoff = { doctor: string; date: string };

/** The whole ledger, for `scripts/validate-concerns.mts` (Q-20). */
export const concernSignoffs = ledger.signed as Record<string, Signoff>;

export const concernSignoff = (slug: string): Signoff | undefined => concernSignoffs[slug];

/**
 * The reviewer a concern page may actually name, and the date they read it.
 *
 * `reviewedBy`/`lastReviewed` in the concern data are an editorial *intention*
 * — they were assigned in bulk when the pages were authored. This is the only
 * record of a real review, and every surface that claims one (the hero byline,
 * the ledger, the sitemap's lastmod, the MedicalWebPage schema) resolves it
 * here so they cannot disagree. Unsigned — or signed off by a slug that no
 * longer resolves to a doctor — returns undefined, and the page says so out
 * loud rather than borrowing a doctor's name for copy they have not seen.
 */
export function concernReviewer(slug: string): { doctor: Doctor; date: string } | undefined {
  const s = concernSignoff(slug);
  const doctor = s ? doctorBySlug(s.doctor) : undefined;
  return doctor && s ? { doctor, date: s.date } : undefined;
}
