import type { Technology } from "@/lib/types";
import type { Heading } from "@/lib/blog";
import { headingAnchor } from "@/lib/treatment-toc";

/**
 * The technology page's contents, derived from the authored data — the third
 * sibling of `lib/treatment-toc.ts` and `lib/concern-toc.ts`.
 *
 * Same contract as the other two: **the order is the page's render order**,
 * because the rail's scroll-spy walks it top to bottom, and each `text` is the
 * rendered `h2` verbatim. An entry pointing at a section the page does not
 * render is the failure mode, so every derived entry below is guarded by the
 * same condition the view uses to render it.
 *
 * Why a technology page needs one at all: until 2026-09-20 these 36 pages had
 * no anchors, so no section of a device page could be linked or cited
 * separately. That matters more here than anywhere else on the site — these
 * pages earn the best click-through rates we have (3-5% on brand-name queries)
 * and they are the cluster Google has refused to crawl (`docs/03b` T0).
 */
/**
 * Heading for the sibling-devices shelf, written per group rather than
 * assembled from the group name — "Other body & slimming we work with" is what
 * the generic version produced. Six distinct headings across 36 pages also
 * keeps this section out of the generic bucket `pnpm check:sameness` counts.
 * One source, read by both the rail and the page.
 */
export function alternativesHeading(x: Technology): string {
  switch (x.group) {
    case "Injectables":
      return "Other injectables we use";
    case "Lasers":
      return "Other lasers we work with";
    case "Lifting & Tightening":
      return "Other lifting and tightening devices";
    case "Body & Slimming":
      return "Other body and slimming devices";
    case "Facials":
      return "Other facial devices we use";
    case "Hair Removal":
      return "Other hair-removal devices";
    default:
      return "Other devices we work with";
  }
}

/** Fixed section titles; English by default, a locale page passes its own
 *  ("{type}" the type word, "{name}" the device name). */
export type TechnologyTocLabels = {
  concernsHeading: string;
  usedInHeading: string;
  costHeading: string;
  faqHeading: string;
  typeWord: { device: string; injectable: string };
  alternatives?: string;
};

const EN_LABELS: TechnologyTocLabels = {
  concernsHeading: "Concerns this {type} addresses",
  usedInHeading: "Treatments that use {name}",
  costHeading: "What affects the number of sessions, and the cost",
  faqHeading: "Common questions",
  typeWord: { device: "device", injectable: "injectable" },
};

/** Section anchors from the English headings (anchorSource): headingAnchor
 *  keeps only [a-z0-9], so a translated heading would slug to nothing. */
export const technologySectionAnchors = (x: Technology, anchorSource: Technology = x) =>
  (x.sections ?? []).map((_, i) => headingAnchor(anchorSource.sections?.[i]?.heading ?? ""));

export function technologyToc(
  x: Technology,
  hasConcerns: boolean,
  hasTreatments: boolean,
  hasSiblings = false,
  labels: TechnologyTocLabels = EN_LABELS,
  anchorSource: Technology = x,
): Heading[] {
  const h = (id: string, text: string): Heading => ({ id, text, level: 2 });
  const L = labels;
  // Most pages already carry an authored "what it may help address" section, so
  // the derived card shelf is named for what it actually is — a route into the
  // concern pages — rather than paraphrasing the section above it.
  const typeWord = L.typeWord[x.type === "injectable" ? "injectable" : "device"];
  const anchors = technologySectionAnchors(x, anchorSource);

  const entries: (Heading | false | undefined)[] = [
    ...(x.sections ?? []).map((s, i) => h(anchors[i], s.heading)),
    hasConcerns && h("may-help-with", L.concernsHeading.replace("{type}", typeWord)),
    hasTreatments && h("used-in", L.usedInHeading.replace("{name}", x.name)),
    !!x.costFactors && h("sessions-cost", L.costHeading),
    hasSiblings && h("alternatives", L.alternatives ?? alternativesHeading(x)),
    !!x.faqs?.length && h("faq", L.faqHeading),
  ];

  // An authored section can already carry one of the derived headings, and the
  // rail must not list the same anchor twice.
  const seen = new Set<string>();
  return entries.filter((e): e is Heading => {
    if (!e || seen.has(e.id)) return false;
    seen.add(e.id);
    return true;
  });
}
