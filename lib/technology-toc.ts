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
export function technologyToc(
  x: Technology,
  hasConcerns: boolean,
  hasTreatments: boolean,
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
