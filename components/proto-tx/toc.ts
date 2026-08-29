/**
 * PROTOTYPE — throwaway. Delete with the rest of components/proto-tx/.
 *
 * The treatment page's contents, derived from the authored data — the same
 * shape `lib/concern-toc.ts` produces for concerns, so both page types feed
 * one `ArticleToc`.
 *
 * Entries are emitted in the order the page renders them, and every entry's id
 * is an anchor a block actually carries (`treatment-blocks.tsx` sets
 * `what-it-treats`, `which-device`, `suitability`, `your-session`,
 * `after-a-session`, `risks`, `sessions-cost`; `TreatmentView` sets `devices`
 * and `faq`). An entry pointing at a section the page does not render is the
 * failure mode here — in the real build this list becomes the single source the
 * QA gate checks anchors against, exactly as Q-10 does for concerns.
 *
 * Every entry is level 2: treatment sections are peers.
 */

import type { Heading } from "@/lib/blog";
import type { Treatment } from "@/lib/types";
import type { TxMedia } from "./media";

export const headingAnchor = (h: string) =>
  h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function treatmentToc(
  t: Treatment,
  m: TxMedia,
  hasTechnology: boolean,
): Heading[] {
  const h = (id: string, text: string): Heading => ({ id, text, level: 2 });

  const entries: (Heading | false | undefined | 0)[] = [
    ...(t.sections ?? []).map((s) => h(headingAnchor(s.heading), s.heading)),
    !!t.routes?.length && h("what-it-treats", `What ${t.name} is used for`),
    !!t.variantModule && h("which-device", "Which option suits you"),
    // The two media blocks this prototype adds.
    !!m.zones?.length && h("treatment-areas", "Treatment areas"),
    !!m.manufacturer?.length && h("manufacturer", "What these treatments do"),
    !!t.avoidIf?.length && h("suitability", "Suitability"),
    !!t.sessionSteps?.length && h("your-session", "The session at Kaiteki"),
    !!t.afterSession && h("after-a-session", "Downtime and aftercare"),
    !!t.risks?.cannotDo?.length && h("risks", "Risks and side effects"),
    !!t.costFactors?.factors?.length && h("sessions-cost", "Sessions and cost"),
    hasTechnology && h("devices", "Devices and technology"),
    !!t.faqs?.length && h("faq", "Common questions"),
  ];

  // Authored sections already carry these headings on most treatments; drop the
  // derived duplicate rather than listing the same section twice in the rail.
  const seen = new Set<string>();
  return entries.filter((e): e is Heading => {
    if (!e) return false;
    if (seen.has(e.id)) return false;
    seen.add(e.id);
    return true;
  });
}
