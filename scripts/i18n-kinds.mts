// The page types that have locale overlays, for the i18n scripts (export,
// sync, index, validate). Each kind's translations live in
// content/i18n/<kind>/<locale>/<slug>.json, with the English snapshot each was
// made from in content/i18n/<kind>/_en/<slug>.json.
//
// Imported under bare node (--experimental-strip-types), so relative paths with
// explicit extensions only: no "@/" alias.

import { concerns } from "../content/data/concerns.ts";
import { treatments } from "../content/data/treatments.ts";

export type Kind = "concerns" | "treatments";

export const KINDS: Record<
  Kind,
  {
    records: { slug: string }[];
    /** Locale-neutral URL path, as the ledger (content/i18n/pages.ts) keys it. */
    path: (slug: string) => string;
    /** Fields injected at module load rather than authored: never copy. */
    drop: string[];
  }
> = {
  concerns: { records: concerns, path: (s) => `/concerns/${s}`, drop: ["archetype", "depth"] },
  treatments: { records: treatments, path: (s) => `/treatments/${s}`, drop: [] },
};

export const LOCALES = ["zh", "ms"] as const;

/** The English record exactly as a translator sees it. */
export function englishRecord(kind: Kind, slug: string): Record<string, unknown> | undefined {
  const r = KINDS[kind].records.find((x) => x.slug === slug);
  if (!r) return undefined;
  const record: Record<string, unknown> = JSON.parse(JSON.stringify(r));
  for (const k of KINDS[kind].drop) delete record[k];
  return record;
}

export function parseKind(arg: string | undefined): Kind {
  if (arg === "concerns" || arg === "treatments") return arg;
  throw new Error(`kind must be "concerns" or "treatments", got ${JSON.stringify(arg)}`);
}
