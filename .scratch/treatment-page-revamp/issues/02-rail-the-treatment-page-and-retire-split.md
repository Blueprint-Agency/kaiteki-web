# 02 — Rail the treatment page, fork it off `Split`, and add the media contract

**What to build:** One contents rail running the full length of every treatment page, the
media fields the pages will author into, and the removal of the primitive that made the two
incompatible.

The page today has no contents navigation that works — `JumpNav` is a horizontal bar most
treatments never author, so on most pages it renders nothing at all. It gets the **same
sticky rail as concerns**: `ArticleToc` at `variant="sidebar"`, fed from a derived heading
list, with the inline card below `lg` and never both. `JumpNav` retires, for the reason
`docs/12` retired it — two navigations doing one job.

**The rail wraps the entire scrollable body, and that is the hard part.** `Split` is a 21rem
sticky *heading* gutter. A page cannot carry that and a 15rem contents rail; they are two
left columns. The prototype's first pass proved it — rail over the prose, then a second wider
gutter arriving unannounced halfway down, which the client rejected on sight.

**There are 13 `Split` call sites, not 7.** Seven live in `treatment-blocks.tsx` as exported
blocks — `RoutingModule`, `SuitabilityBlock` (both branches), `SessionBlock`, `AfterSession`,
`RisksBlock`, `CostFactors`, `ManufacturerImages`. Six more are inline in `TreatmentView.tsx`
and are easy to miss because they render null on most treatments:

| `TreatmentView.tsx` | Block | Renders when |
|---|---|---|
| ~194 | Concerns this treatment addresses | `routes` absent and related concerns exist |
| ~235 | Treatment areas | `areas` authored — **1 of 19 today**, and the zone gallery replaces this |
| ~252 | *X* vs other options | `comparisons` authored |
| ~285 | Pre and post treatment care | `preCare`/`postCare` authored |
| ~332 | Common questions | `faqs` authored |
| ~343 | Where to go next | related treatments or concerns exist |

**The prototype did not render four of these** (concerns-addressed, comparisons, pre/post
care, where-to-go-next) — both prototype hosts author almost none of those fields, so their
absence never showed. Do not treat `components/proto-tx/VariantA.tsx` as a complete
inventory of the page; it is the layout reference, and `TreatmentView.tsx` is the inventory.

**Test on `botulinum-toxin`.** It is the *only* treatment authoring `comparisons`, `preCare`,
`postCare` or `areas` — all four, and nothing else authors any of them. It is also a **HOLD**
treatment, so it receives no media in ticket 03 and is easy to skip while testing. Railing it
correctly is nonetheless this ticket's job: HOLD means no media fields, not no layout. If the
comparison table or the pre/post care rows regress, this is the one page that shows it.

All 13 fork: heading and intro flow inline at the top of each section. Same data, same
wording, same compliance rules.

After that fork **`Split` has no callers left** — verified 2026-08-29: concerns are already
fully off it (`concern-blocks.tsx` references it only in a comment). Delete it in this change
rather than leaving a dead primitive that reads as supported.

Tone bands become inset panels: a full-bleed band inside a railed column has to break the
grid and leaves the rail floating over it. The 2026-07 rule that exactly three bands each
mean one thing survives; only their bleed does not.

The **media contract** is the second half. `figures` is shared with `Concern` verbatim rather
than redeclared. `areas` widens from `string[]` to a union so a zone can be a labelled image
instead of a text chip — one concept, one field, every existing authored value still valid.
`steps` is new and carries a 156px native ceiling. `manufacturerImages` already exists and is
authored nowhere; **its container is the bug to fix before anything authors into it** — it
renders `aspect-[4/3] object-cover` on `bg-tint`, and every `logob_*` is a 250×200 transparent
PNG at 1.25:1, so as written it crops twelve logos and puts a warm panel behind marks meant
to sit on the page ground. The four-place labelling rule (R-07) stays exactly as implemented.

Layout reference is `components/proto-tx/VariantA.tsx` — Variant A "Inline", chosen
2026-08-29. Read it, then rewrite it properly; it was built under prototype constraints.

**Blocked by:** 01 — the media types reference CDN URLs the manifest has to define first.

- [ ] Every treatment page renders one contents rail, sticky beside the whole scrollable body
- [ ] The rail is `ArticleToc` at `variant="sidebar"`; the inline card renders below `lg` and
      never alongside it
- [ ] Below the three-heading threshold there is no rail and no reserved gutter
- [ ] `JumpNav` no longer renders on treatment pages
- [ ] No rail entry points at a section the page does not render (Q-24)
- [ ] All 13 `Split` call sites render their heading and intro inline — the 7 exported blocks
      **and** the 6 inline in `TreatmentView.tsx`
- [ ] `botulinum-toxin` — the only page authoring `comparisons`, `preCare`, `postCare` and
      `areas` — renders all four railed, with the comparison table still scrollable on narrow
      screens. It is a HOLD treatment; it still gets the layout
- [ ] `Split` is deleted and nothing imports it
- [ ] Tone bands render as inset panels; the conversion, safety-notice and compliance
      surfaces each still appear exactly once
- [ ] `figures` is the shared type, not a second declaration
- [ ] `areas` accepts both a string and a labelled image; every currently authored value
      still renders as a chip
- [ ] `steps` exists, and a step cell never exceeds its 156px native width (Q-19)
- [ ] `manufacturerImages` renders contained on page ground at the source ratio — a
      transparent logo is neither cropped nor backed by a tint panel
- [ ] The four-place labelling rule still holds, and a treatment cannot ship manufacturer
      images without the disclaimer (Q-21)
- [ ] Q-20 fails a treatment mixing strings and objects in one `areas` array
- [ ] Q-23 fails a treatment declaring more than `floor(sections / 2)` figures
- [ ] Metadata, canonical URLs and JSON-LD are unchanged
