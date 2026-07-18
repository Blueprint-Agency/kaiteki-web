import type { Concern, Technology, Treatment } from "@/lib/types";
import { treatments } from "./treatments";
import { concerns } from "./concerns";
import { technology } from "./technology";

// Derived link helpers. Kept in a dedicated module (not colocated with a single
// data file) so treatments/concerns/technology can stay free of cross-imports.
// Only two edges are authored — `concern.treatments[]` and `technology.treatments[]`;
// everything reachable below is derived from them.

/** Technology (devices/injectables) that power a given treatment. */
export function technologyOfTreatment(treatmentSlug: string): Technology[] {
  return technology.filter((x) => x.treatments.includes(treatmentSlug));
}

/** Treatments a given technology item powers. */
export function treatmentsOfTechnology(techSlug: string): Treatment[] {
  const tech = technology.find((x) => x.slug === techSlug);
  if (!tech) return [];
  return tech.treatments
    .map((slug) => treatments.find((t) => t.slug === slug))
    .filter((t): t is Treatment => Boolean(t));
}

/** Concerns a given treatment may address (reverse of concern.treatments). */
export function concernsOfTreatment(treatmentSlug: string): Concern[] {
  return concerns.filter((c) => c.treatments.includes(treatmentSlug));
}

/** Technology reachable from a concern, unioned over its treatments (deduped). */
export function technologyOfConcern(concernSlug: string): Technology[] {
  const concern = concerns.find((c) => c.slug === concernSlug);
  if (!concern) return [];
  const seen = new Set<string>();
  const out: Technology[] = [];
  for (const treatmentSlug of concern.treatments) {
    for (const tech of technologyOfTreatment(treatmentSlug)) {
      if (!seen.has(tech.slug)) {
        seen.add(tech.slug);
        out.push(tech);
      }
    }
  }
  return out;
}
