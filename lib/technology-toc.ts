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

export function technologyToc(
  x: Technology,
  hasConcerns: boolean,
  hasTreatments: boolean,
  hasSiblings = false,
): Heading[] {
  const h = (id: string, text: string): Heading => ({ id, text, level: 2 });

  // Most pages already carry an authored "what it may help address" section, so
  // the derived card shelf is named for what it actually is — a route into the
  // concern pages — rather than paraphrasing the section above it.
  const typeWord = x.type === "injectable" ? "injectable" : "device";

  const entries: (Heading | false | undefined)[] = [
    ...(x.sections ?? []).map((s) => h(headingAnchor(s.heading), s.heading)),
    hasConcerns && h("may-help-with", `Concerns this ${typeWord} addresses`),
    hasTreatments && h("used-in", `Treatments that use ${x.name}`),
    !!x.costFactors && h("sessions-cost", "What affects the number of sessions, and the cost"),
    hasSiblings && h("alternatives", alternativesHeading(x)),
    !!x.faqs?.length && h("faq", "Common questions"),
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
