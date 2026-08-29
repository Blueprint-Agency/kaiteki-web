# 12 — Concern page revamp: spec

**Status:** ready-for-agent · **Scope:** `/concerns/[slug]` · **Written:** 2026-08-29
**Prerequisites:** `docs/11-concern-media-inventory.md` (media ground truth),
`docs/adr/0001-before-after-imagery.md` (the compliance reversal this depends on).

---

## Problem Statement

A visitor lands on `/concerns/acne` from organic search with a problem they can see in
the mirror and no idea what to do about it. What they get is four thousand words of
uninterrupted prose in a 62ch column, one photograph in the header, and a sticky heading
gutter that leaves a third of the screen empty on desktop. Nothing on the page shows them
what acne types look like, what causes it, or what treatment has achieved for anyone else
— even though the clinic owns 236 images that do exactly that.

Thirteen of the fourteen concern pages are worse: they render roughly five of the
template's eighteen blocks, because the underlying content was never authored. Those pages
have an intro, a few paragraphs and an FAQ.

Three problems, in order of how much they cost:

1. **Unused media.** 236 owned images; the site uses 14 (one hero card per concern).
2. **The layout reads as unconventional.** The sticky 21rem heading aside and the six
   alternating tone bands were a deliberate anti-template move that overshot.
3. **Missing sections.** Measured against `kaiteki-page-structures.html`, the concern
   detail page lacks exactly two things — a results gallery and a testimonial — both of
   which were prohibited until ADR-0001 reversed the before/after policy.

## Solution

Rebuild `/concerns/[slug]` on the **Variant A "Editorial banner"** layout validated in the
prototype, wire the owned media into it through a typed contract served from R2, and author
the missing content for all fourteen concerns.

From the visitor's perspective:

- The page opens with a **full-bleed banner** whose subject sits left and whose headline
  sits in the empty right half the artwork was cut for.
- A **sticky contents rail** on the left tracks reading position, matching the blog.
- Prose runs in **one measured column** that widens for media instead of a heading gutter.
- **Illustrations show the types**, **figures show the causes**, **designed slides show the
  progression**, and a **results gallery** shows what treatment has achieved — each with
  its own container, sized to its own ratio, never upscaled past its native width.
- Four concerns with no usable media render as clean text pages, with no placeholder
  furniture advertising the absence.

---

## User Stories

1. As a visitor searching "acne scars malaysia", I want the page to open with an image of
   the concern I have, so that I know within a second I am in the right place.
2. As a visitor, I want the page headline to sit in clear space rather than over a face,
   so that I can read it without straining.
3. As a visitor on a phone, I want the banner to crop to a taller ratio that keeps the
   subject visible, so that I do not see a sliver of someone's shoulder.
4. As a visitor, I want a contents list that shows where I am as I scroll, so that I can
   tell how much is left and jump back to what I came for.
5. As a visitor on a narrow screen, I want the contents to appear once as a card rather
   than as a second sticky bar, so that my viewport is not eaten by navigation.
6. As a visitor, I want to see illustrations of each acne type beside its name, so that I
   can identify which one matches my skin without medical vocabulary.
7. As a visitor, I want the scar-type illustrations grouped separately from the active-acne
   types, so that I understand these are two different problems.
8. As a visitor, I want a diagram beside each cause, so that an abstract explanation
   becomes something I can picture.
9. As a visitor, I want the stage infographics shown whole rather than cropped, so that the
   text burned into them remains readable.
10. As a visitor, I want captions on explanatory photographs, so that I know what I am
    looking at and why it is there.
11. As a visitor, I want to see before-and-after photographs of real patients, so that I
    can judge whether treatment is worth a consultation.
12. As a visitor, I want every results image to carry a plain statement that outcomes vary
    and are not guaranteed, so that I am not misled.
13. As a visitor, I want results images displayed sharp rather than blown up, so that the
    clinic reads as careful rather than careless.
14. As a visitor, I want photographs of what happens in the room during a session, so that
    I know what I am walking into.
15. As a visitor, I want the treatment-in-progress photographs kept out of the results
    gallery, so that I am not shown a device and told it is an outcome.
16. As a visitor, I want each treatment to say why it is offered for *my* concern, so that
    I understand the reasoning rather than reading a device catalogue.
17. As a visitor, I want to know what a first visit involves, so that booking feels like a
    known quantity.
18. As a visitor, I want to read what treatment cannot do, so that I trust what it says it
    can.
19. As a visitor, I want to know what drives the cost without being quoted a price, so that
    I can decide whether to enquire.
20. As a visitor to any of the fourteen concerns, I want the same depth of explanation, so
    that my concern does not feel like an afterthought.
21. As a visitor to a concern with no photography, I want a clean, complete text page, so
    that I do not see empty frames or "image coming soon".
22. As a visitor, I want the named doctor who reviewed the page and the date, so that I can
    weigh the medical claims.
23. As a returning visitor, I want a link to a specific section to land me on that section,
    so that I can share an answer with someone.
24. As a screen-reader user, I want the burned-in text of a designed slide available as alt
    text, so that I get the same information as a sighted reader.
25. As a screen-reader user, I want decorative figures marked decorative and their meaning
    carried in the visible caption, so that I am not read a redundant description.
26. As a keyboard user, I want every contents link and gallery item reachable in a sensible
    order, so that I can navigate without a mouse.
27. As a visitor on a slow connection, I want the banner to be the only image that loads
    eagerly, so that the page becomes readable quickly.
28. As a visitor, I want images to reserve their space before they load, so that the text I
    am reading does not jump.
29. As a content editor, I want to add a figure to a concern by adding data, so that I do
    not need a developer to change a layout.
30. As a content editor, I want the build to fail if I reference an image that will not
    exist on the CDN, so that I never ship a broken image to production.
31. As a content editor, I want the build to fail if I put concern media anywhere but R2,
    so that the storage boundary cannot silently drift.
32. As a content editor, I want to omit a media field entirely and have its section
    disappear, so that turning a block off is a data edit.
33. As a content editor, I want image filenames to describe their subject, so that they earn
    image-search traffic.
34. As a compliance reviewer, I want a single disclaimer rendered with every results
    gallery from one source, so that it cannot be edited away on one page.
35. As a compliance reviewer, I want every page to record which doctor signed off and when,
    so that unsigned pages cannot ship unnoticed.
36. As a compliance reviewer, I want the banned-language sweep to run over newly authored
    copy for all fourteen concerns, so that the volume of new writing does not smuggle in an
    outcome claim.
37. As a developer, I want the concern layout independent of the treatment layout, so that
    revamping one does not regress the other.
38. As a developer, I want the media contract expressed in the `Concern` type, so that a
    malformed figure is a type error rather than a runtime hole.
39. As a developer, I want one command to sync source media to R2, so that adding assets is
    not a manual upload ritual.
40. As a developer, I want the coverage matrix regenerated from the filesystem, so that
    `docs/11` cannot drift from the actual assets.
41. As the business, I want the concern pages to carry internal links into treatment pages,
    so that the SEO role of the concern hub is preserved.
42. As the business, I want no regression to the existing metadata, canonical URLs or
    JSON-LD, so that rankings survive the revamp.

---

## Implementation Decisions

### Layout — Variant A, forked from the treatment spine

- The concern page gets its **own layout**. `Split` — the sticky 21rem heading aside — is
  removed from concern pages and **left untouched on `/treatments`**. Revamping the
  treatment page is out of scope.
- **Banner hero.** Responsive pair: the 2.88:1 desktop asset and its 16:9 mobile sibling.
  `object-position: left` is mandatory — every `pbanner_*` places its subject hard left and
  reserves the right half for copy. A gradient scrim carries the headline's contrast.
- **Contents rail.** Reuse the blog's `ArticleToc` at `variant="sidebar"` with its existing
  scroll-spy, fed by the concern's authored jump-nav entries mapped to headings. Below the
  large breakpoint the rail is replaced by the inline card — never both.
- **The horizontal jump-nav bar is retired** from concern pages. Two navigations that do
  the same job at different breakpoints, not three sticky elements competing.
- **Tone bands drop from six to three**, each meaning one thing: the conversion moment, the
  technology comparison, the safety notice.
- Prose holds a ~70ch measure; structural blocks and the results gallery break to the full
  container width.

### Two figure components, not one

The `info_*` assets share a prefix and a ratio but behave differently, so they get separate
components rather than one component with a branch:

- **Figure** — a 2:1 photograph with its subject left and right half empty. Renders the
  image beside its caption, image `object-cover object-left`, `alt=""` because the caption
  carries the meaning.
- **Slide** — a 2:1 finished infographic with Kaiteki branding, a headline and body copy
  already in the artwork. Renders full width, `object-contain` so nothing crops, **no
  caption**, and its `alt` transcribes the burned-in text.

### Results gallery

- Assets are **pre-composited**: each file already contains before and after side by side.
  The two-panel comparator described in `kaiteki-page-structures.html` §E is **not built**.
- The gallery is a grid of single images with per-image captions.
- Each entry declares its **native width**, and its cell is capped at that width. 74 of 111
  source files are under 700px; upscaling them is the failure mode this prevents.
- Entries also declare their **aspect ratio** (1:1, 5:4 or 1.71:1) so the cell reserves
  space and nothing shifts on load.
- One disclaimer string, defined once and rendered with every gallery.

### Data contract

New optional fields on `Concern`, each nullable so a block turns off by omission — matching
the existing template convention exactly:

```ts
/** C-01 responsive banner pair. Subject sits left in every source asset;
 *  the hero sets object-position:left and puts the H1 in the right half. */
banner?: { src: string; sm: string; alt: string };

/** 2:1 photo, subject left. The caption carries the meaning, so alt is "". */
figures?: { src: string; caption: string }[];

/** 2:1 designed infographic — headline and body already in the artwork.
 *  No caption (it would double-label); alt transcribes the burned-in text. */
slides?: { src: string; alt: string }[];

/** 1:1 transparent PNG, scalloped die-cut. Page ground only, never a tint band. */
illustrations?: { src: string; label: string; sub: string; group?: string }[];

/** Pre-composited before+after in one file — NOT a two-panel comparator.
 *  `nativeWidth` caps the cell: 74 of 111 sources are under 700px (docs/11 §1.2). */
results?: { src: string; caption: string; nativeWidth: number; ratio: "1/1" | "5/4" | "1.71/1" }[];

/** Treatment-in-progress photography for the first-visit block. Deliberately
 *  separate from `results` so a device photo is never shown as an outcome. */
visitImages?: { src: string; caption: string }[];
```

*(Shape validated in the prototype's `components/proto/media.ts`; the prototype hardcoded
it for acne, this promotes it to the type.)*

`group` on `illustrations` exists so acne can separate active-acne types from scar types
without a second field.

### Media delivery

- Concern media serves from **`https://cdn.kaiteki.my/concerns/<concern-slug>/<name>.<ext>`**
  (bucket `kaiteki-web-prod`, prefix `concerns/`), mirroring the blog's model.
- `images.remotePatterns` widens from the blog prefix to cover the concerns prefix.
- **Divergence from `content/blog/AUTHORING.md` §3, recorded in ADR-0001:** blog stages
  binaries in the repo and lets the deploy workflow sync them. Concern media does **not**
  enter git — 44 MB of source is permanent repo weight. A committed **manifest** maps source
  path to R2 key, and a sync script uploads from the local source folder using the R2
  credentials already in `.env`.
- **Filenames are renamed on upload** to concern-scoped kebab-case. The manifest preserves
  the original-to-new mapping so provenance survives.
- The existing 14 hero images stay in `public/` — they are already-migrated legacy media,
  which is the boundary the blog rule actually draws.

### Content authoring

- Thirteen concerns need roughly ninety authored fields — causes, type variants, first
  visit, risks, cost factors, comparison, per-treatment rationale.
- Drafted from the legacy site, the page-structures document, and the media filenames
  themselves, which encode the required subheadings.
- **`reviewedBy` remains provisional.** The data file already states these are not confirmed
  sign-offs. A tracking file records signed versus unsigned per concern; unsigned pages must
  not ship.

### Excluded concerns

`enlarged-pores`, `vascular-lesions`, `birthmark` and `excessive-sweating` receive **no
media fields**. Their blocks return null and the pages render as clean text. **No
placeholder component is built** — an "image coming soon" frame advertises incompleteness
on a page whose job is authority. They re-enter when assets exist; `docs/11` §4 carries the
commission list.

### Documentation reconciliation

ADR-0001 records the before/after reversal and the amendments it forces on `docs/02` §8.1,
`docs/05` §1, `docs/06` §5, `docs/00` §14, `DESIGN.md`, and the `notSuitableFor` comment in
the `Treatment` type — all of which currently assert that before/after photography is never
used anywhere on the site.

### Non-goals for the data model

No CMS. No image-processing pipeline — Next's image optimisation handles resizing from the
R2 originals. No new asset abstraction beyond the six fields above.

---

## Testing Decisions

**What makes a good test here:** it asserts something a reviewer would otherwise have to
catch by eye, and it fails on authored *data*, not on rendering internals. Nothing asserts
class names, DOM structure or component trees — those are exactly the details this revamp
changes.

**The seam is `scripts/validate-concerns.mts`.** It is already the project's concern-page
QA gate, with numbered rules Q-02 through Q-13 and a non-zero exit. Media rules become new
numbered checks in the same file rather than a new test surface. Prior art is the file
itself: `Q-04`'s banned-language sweep and `Q-10`'s anchor-resolution check are the pattern
— walk the authored data, collect failures, exit non-zero.

New checks:

- **Q-14** Every media URL sits on the concerns CDN prefix. A `public/` path or any other
  host fails.
- **Q-15** Every media URL resolves to an entry in the manifest, so nothing can reference an
  object that will never upload.
- **Q-16** Every results entry declares a native width and a ratio, and the width matches the
  manifest's recorded source width — the guard against silent upscaling.
- **Q-17** Slides carry alt text and no caption; figures carry a caption. Enforces the
  two-component split at the data layer.
- **Q-18** A concern declaring results also renders the shared disclaimer — the compliance
  string cannot be omitted per page.
- **Q-04 (existing)** now runs across thirteen concerns of newly authored copy. Expected to
  catch real violations; that is the point.

The sync script is verified by a dry-run mode that prints the planned uploads without
writing, plus a post-upload existence check. The coverage audit script is verified by
regenerating `docs/11` §2 and diffing against the committed table.

---

## Out of Scope

- The `/treatments` page and the shared `Split` primitive. Untouched.
- The `/concerns` hub — sticky category tabs and the trust bar are a separate, smaller job.
- The concern-hub micro-survey and the treatment-comparison work in
  `kaiteki-page-structures.html`.
- Any two-panel before/after comparator. The assets are pre-composited; it does not apply.
- Commissioning photography for the four excluded concerns.
- Re-cutting the scalloped illustrations to rectangles.
- Migrating the existing 14 hero images out of `public/`.
- Chinese-language routing. The layout must not hard-code English assumptions, but no `/zh`
  work happens here.

---

## Further Notes

**The prototype is the primary source for the layout decision.** Three structurally
different variants were built on the real route behind a search param — A "Editorial
banner", B "Clinical dossier" (media in a persistent right-hand evidence column), C "Guided
path" (stepper, media-dominant, one step mounted at a time). A won. The prototype and both
losing variants belong on a throwaway branch, not in main; the switcher, the variant
components and the staged prototype media must all be removed as part of this work.

**Asset-ownership flag.** One results file carries a third-party watermark from a doctor's
personal account rather than Kaiteki branding. Ownership is unconfirmed. This is separate
from the advertising-compliance question and is recorded in `docs/11` §3.1.

**The compliance reversal is the riskiest thing in this spec.** Publishing patient
before/after photography contradicts four project documents and the Malaysian
medical-advertising position they encode. It proceeds on explicit instruction, recorded in
ADR-0001. The engineering work is straightforward; the exposure is not, and the ADR — not
this spec — is where that decision lives.
