import type { Concern, Technology, Treatment } from "@/lib/types";
import { treatments, treatmentHref } from "./treatments";
import { concerns } from "./concerns";
import { technology } from "./technology";

// Derived link helpers. Kept in a dedicated module (not colocated with a single
// data file) so treatments/concerns/technology can stay free of cross-imports.
// Only two edges are authored — `concern.treatments[]` and `technology.treatments[]`;
// everything reachable below is derived from them.

/** Treatments a concern may be addressed with — the authored `concern.treatments`
 *  edge, resolved to objects. The single accessor every concern→treatment card
 *  grid reads from (no page maps the raw slug array itself). */
export function treatmentsOfConcern(concernSlug: string): Treatment[] {
  const concern = concerns.find((c) => c.slug === concernSlug);
  if (!concern) return [];
  return concern.treatments
    .map((slug) => treatments.find((t) => t.slug === slug))
    .filter((t): t is Treatment => Boolean(t));
}

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

/**
 * Other devices or injectables a reader of this one would plausibly weigh
 * against it — added 2026-09-21 (`docs/17` finding 1, the zero-sibling-links
 * hole: not one of the 36 technology pages linked to another).
 *
 * Ranked by a real edge rather than by group order: items sharing the most
 * treatments with this one come first, because sharing a treatment is what
 * makes two devices genuine alternatives (Juvéderm and Restylane both sit
 * under dermal fillers; Rejuran and Plinest both under skin boosters). Same
 * group is the fallback so a device with no shared treatment still has
 * somewhere to send a reader, and `type` is matched first within that so an
 * injectable never leads with a machine.
 */
export function relatedTechnology(techSlug: string, limit = 4): Technology[] {
  const self = technology.find((x) => x.slug === techSlug);
  if (!self) return [];
  const shares = (x: Technology) => x.treatments.filter((t) => self.treatments.includes(t)).length;

  const ranked = technology
    .filter((x) => x.slug !== self.slug)
    .map((x) => ({ x, shared: shares(x), sameGroup: x.group === self.group, sameType: x.type === self.type }))
    .filter((r) => r.shared > 0 || r.sameGroup)
    .sort(
      (a, b) =>
        b.shared - a.shared ||
        Number(b.sameType) - Number(a.sameType) ||
        Number(b.sameGroup) - Number(a.sameGroup) ||
        a.x.name.localeCompare(b.x.name),
    );

  return ranked.slice(0, limit).map((r) => r.x);
}

/** Concerns a given treatment may address (reverse of concern.treatments). */
export function concernsOfTreatment(treatmentSlug: string): Concern[] {
  return concerns.filter((c) => c.treatments.includes(treatmentSlug));
}

/** Concerns reachable from a technology item, unioned over the treatments it
 *  powers (deduped) — the derived "may help with" edge. */
export function concernsOfTechnology(techSlug: string): Concern[] {
  const tech = technology.find((x) => x.slug === techSlug);
  if (!tech) return [];
  const seen = new Set<string>();
  const out: Concern[] = [];
  for (const treatmentSlug of tech.treatments) {
    for (const c of concernsOfTreatment(treatmentSlug)) {
      if (!seen.has(c.slug)) {
        seen.add(c.slug);
        out.push(c);
      }
    }
  }
  return out;
}

/** Pages a doctor is the named medical reviewer of — the reverse of the
 *  `reviewedBy` edge. Powers the reviewer list on each doctor profile (E-E-A-T:
 *  the credential claim and the reviewed content link to each other). */
export function pagesReviewedBy(doctorSlug: string): { name: string; href: string }[] {
  return [
    ...treatments.filter((t) => t.reviewedBy === doctorSlug).map((t) => ({ name: t.name, href: treatmentHref(t) })),
    ...concerns.filter((c) => c.reviewedBy === doctorSlug).map((c) => ({ name: c.name, href: `/concerns/${c.slug}` })),
    ...technology
      .filter((x) => x.reviewedBy === doctorSlug)
      .map((x) => ({ name: x.name, href: `/technology/${x.slug}` })),
  ];
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
