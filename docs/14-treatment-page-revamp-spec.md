# 14 — Treatment page revamp: spec

**Status:** ready-for-agent · **Scope:** `/treatments/[slug]` · **Written:** 2026-08-29
**Prerequisites:** `docs/13-treatment-media-inventory.md` (media ground truth and the
14/4/1 tiering), `docs/12-concern-page-revamp-spec.md` (the pattern this follows, and the
places it deliberately diverges).

---

## Problem Statement

A visitor lands on `/treatments/pico-laser` wanting to know what the machine does to their
face. The page answers well in prose — nineteen blocks of authored copy, a device
comparison, pre/post care, an FAQ — and shows them **one photograph, at the top, and then
nothing for four thousand words.**

This is a different failure from the concern pages. Concerns were starving: 236 unused
images and pages rendering five of eighteen blocks. Treatments are the opposite — the copy
is authored, the layout was deliberately redesigned in 2026-07, and every one of the
nineteen pages already ships a 1440×900 hero. What they lack is **anything to look at below
the fold**, while 114 mapped source assets sit unused.

Three problems, in order of how much they cost:

1. **`manufacturerImages` is dead code.** The field is declared on `Treatment`
   (`lib/types.ts:117`), rendered by `ManufacturerImages` (T-14) with a four-place labelling
   rule already implemented, and **authored on zero treatments.** Twelve unused `logob_*`
   manufacturer marks exist. The block, the assets and the compliance wording are all built;
   only the data is missing.
2. **The richest media in the folder has no home.** Fifteen die-cut treatment-zone
   photographs (`img_onda_*` — double chin, love handles, jowl, thigh, upper arms) belong to
   `microwave-contouring`. The page has an `areas` block for exactly this, and
   `microwave-contouring` does not author it.
3. **`areas` is itself near-dead.** Authored on **one of nineteen** treatments
   (`botulinum-toxin`), as a bare chip list of text labels.

Underneath all three: **five of the nineteen pages have no usable media at all** and must be
kept out, or the revamp ships four pages that are a text page with one photograph in it.

## Solution

Wire the owned media into the **existing treatment spine** — not a new layout — through the
typed contract the concern revamp established, for the **14 treatments that can carry it**.
The remaining five are explicitly excluded and ship unchanged.

From the visitor's perspective:

- On `microwave-contouring`, the **treatment-areas block shows the areas** — a die-cut
  photograph per zone instead of a row of text chips.
- On `double-eyelid`, the procedure runs as a **numbered five-step sequence** with its own
  step icons, because that page's media genuinely is a sequence.
- Across the fourteen, **manufacturer devices appear beside the treatments they power**,
  labelled as manufacturer imagery in all four required places.
- **In-body figures** break the prose so no page runs more than a screen or two of
  uninterrupted text.
- Five treatments render exactly as they do today, with no empty frames and no "image
  coming soon".

---

## User Stories

1. As a visitor reading about microwave contouring, I want to see the body areas it treats
   rather than read a list of their names, so that I can tell whether mine is one of them.
2. As a visitor, I want each zone image labelled with the area it shows, so that I am not
   guessing at a cropped photograph.
3. As a visitor considering double eyelid surgery, I want the procedure shown as ordered
   steps, so that I understand what happens and in what order.
4. As a visitor, I want the step icons rendered at a size they were drawn for, so that the
   page does not look like it is displaying blurred thumbnails.
5. As a visitor, I want a photograph partway down a long treatment page, so that I can keep
   reading without losing my place in a wall of text.
6. As a visitor, I want to see the actual device or product used, so that "Profhilo" or
   "Onda" becomes a real thing rather than a brand name.
7. As a visitor, I want manufacturer imagery clearly identified as the manufacturer's, so
   that I never mistake it for a Kaiteki patient or a Kaiteki result.
8. As a visitor, I want the manufacturer logo shown whole rather than cropped to a
   rectangle, so that the page reads as made with care.
9. As a visitor on a phone, I want in-body images to sit in the reading column at a size I
   can actually see, so that they are worth the bytes.
10. As a visitor to one of the five treatments with no media, I want a clean, complete text
    page, so that I do not see empty frames advertising what is missing.
11. As a visitor, I want the page's existing structure — comparison, pre/post care, cost
    factors, FAQ — untouched, so that what already answers my question still does.
12. As a screen-reader user, I want each zone image's area name carried in text, so that I
    get the same list a sighted reader gets.
13. As a screen-reader user, I want decorative in-body figures marked decorative with their
    meaning in the visible caption, so that I am not read a redundant description.
14. As a visitor on a slow connection, I want only the hero to load eagerly, so that the
    page becomes readable quickly.
15. As a visitor, I want every image to reserve its space before it loads, so that the text
    I am reading does not jump.
16. As a content editor, I want to add a figure to a treatment by adding data, so that I do
    not need a developer to change a layout.
17. As a content editor, I want to omit a media field entirely and have its section
    disappear, so that turning a block off is a data edit.
18. As a content editor, I want the build to fail if I reference an image that will not
    exist on the CDN, so that I never ship a broken image to production.
19. As a content editor, I want the build to fail if I put treatment media anywhere but R2,
    so that the storage boundary cannot silently drift.
20. As a content editor, I want image filenames to describe their subject, so that they earn
    image-search traffic.
21. As a compliance reviewer, I want manufacturer imagery labelled in all four places on
    every page that uses it, so that the rule cannot be half-applied.
22. As a compliance reviewer, I want the build to refuse a treatment that ships manufacturer
    images without the disclaimer, so that the wording cannot be edited away on one page.
23. As a developer, I want the treatment layout to keep its 2026-07 editorial spine, so that
    a deliberate design decision is not silently reversed by copying the concern layout.
24. As a developer, I want the media contract shared with `Concern` rather than duplicated,
    so that two types cannot drift apart.
25. As a developer, I want the treatment media checks to reuse the concern validator's rules,
    so that one implementation covers both page types.
26. As a developer, I want one command to sync treatment media to R2, so that adding assets
    is not a manual upload ritual.
27. As a developer, I want the coverage matrix regenerated from the filesystem, so that
    `docs/13` cannot drift from the actual assets.
28. As the business, I want no regression to existing metadata, canonical URLs or JSON-LD,
    so that rankings survive the revamp.
29. As the business, I want the excluded treatments to remain fully indexed and linked, so
    that holding them back costs no traffic.

---

## Implementation Decisions

### Layout — keep the treatment spine. Do **not** port the concern layout.

This is the sharpest divergence from `docs/12`, and it is deliberate.

> **Naming.** `docs/12`'s chosen concern layout is also called "Variant A". Everywhere below,
> **"the concern layout"** means that one, and **"Variant A"** means the treatment
> prototype's A, chosen in the next section. They are unrelated.

- `components/treatment-blocks.tsx` (top comment) records a **2026-07 redesign** that moved
  this page *away* from "a single 768px column of ~14 identical bordered cards" toward an
  editorial spine: three meaningful tone bands, a 62–68ch prose measure, full-width
  structural blocks, Fraunces display headings. The concern layout partially returns to what
  that redesign rejected. **Reversing it by copy-paste is not a decision anyone has made.**
- **The media does not support it anyway.** The concern layout's hero is a 2.88:1 `pbanner_`
  with the H1 in its empty right half. `docs/13` §4: **four banner subjects exist for
  nineteen pages**, and one of the four (hair transplant) has no page. Fourteen pages would
  need a hero the assets cannot provide.
- **Therefore:** treatments keep their current hero (the 1440×900 photo already shipping)
  and their existing block order. This revamp adds media *into* the spine and changes no
  section's position.

#### 2026-08 amendment — the *furnishing* converges, the layout does not

The section above holds: the hero, the block order and the reading column are unchanged, and
the concern banner is still not portable. What changed is everything below the structure.
Reading a concern page and a treatment page back to back, they read as two sites, and none of
the four differences was carrying its weight:

| | Was | Now |
|---|---|---|
| Section surfaces | tint panel (device comparison), porcelain panel (safety notice), espresso panel (CTA) | **one** surface: the espresso CTA, full-bleed, exactly as `/concerns` renders it. Everything else on page ground |
| Reviewer byline | stacked inside the hero's left column | its own band under the hero, plus `AuthorCard` above the ledger at the foot |
| Closing CTA | tint band, two-up, generated motif on the right | centred on page ground under a hairline, as `ConcernView` closes |
| Standing disclaimer | `<Disclaimer />` under the ledger | removed from `/treatments`. `RisksBlock` already carries the per-treatment risk copy, and every page states that a doctor assesses suitability; a fourth generic restatement was noise. Still rendered on `/blog`, `/products` and `/technology` |

"Three meaningful tone surfaces" was the 2026-07 argument for the panels. In practice each one
meant "this section is different", which the headings already say — and the porcelain notice
in particular read as an alert card the redesign had explicitly set out to avoid.

**"Available at" went with them.** No treatment ever authored `availableAt`, so
`LocationsBlock` listed all nine branches on all nineteen pages: nine identical outbound links
saying nothing about the treatment. The component, its call, and the `availableAt` field on
`Treatment` are all removed; the branch list lives on `/locations` and in the footer.

**T-06's fallback became cards.** `concerns-addressed` — the block a treatment renders when it
has not authored `routes` — was a row of bare pills. It is the one thing on the page that moves
a visitor who arrived on a device name to the page that answers their actual question, and two
pills carried none of that weight. It now renders `ConcernCard` in a `CardRow`: the same shelf
the "Devices used at Kaiteki" section immediately below it already uses.

With that, the tail's **"Related concerns" chip row is gone from every treatment page.** It had
been a third presentation of a list the page already made twice: a `routes` page routes to its
concerns in prose with a reason per group, and every other page now renders them as cards
further up. "Where to go next" is treatments only, closing on a single "Back to all treatments"
link. `ChipList` and its `chip` class retired with it — every browse-sideways list on the page
is a card shelf now, and `AreasBlock` keeps its own chips because those are labels, not links.

**T-17's related-treatment list became cards too.** It was a hairline-divided list of names and
arrows, which is what the block looks like on the eighteen pages that author no
`relatedReasons` — a name, an arrow, and nothing else. It now renders `TreatmentCard` in a
`CardRow`, so the page's three "go here next" blocks — concerns, devices, treatments — are one
shape rather than three.

`TreatmentCard` takes an optional **`reason`** prop for this. T-17's authored sentence is framed
around what the *current* treatment does not do, which is the whole value of the link, so where
one exists it takes the card's body slot in place of the generic summary. Only `pico-laser`
authors them today; every other page falls back to the target treatment's own summary, which is
still more than the bare name it replaced.

**No generated motifs anywhere on the page.** `TreatmentMotif` filled the hero fallback, the
`SessionBlock` companion column, the `VariantModule` device covers and the closing CTA. Only
the first was ever conditional; the other two were unconditional decoration standing in for
photography that does not exist — the same placeholder furniture this document refuses two
sections down. Every frame is now conditional on a real image, and the section reflows without
one. `TreatmentMotif` survives only on the card grids (`TreatmentCard`, `TreatmentsMenu`).

### Media placement — Variant A "Inline", chosen from the prototype

Three variants were built on the real route behind `?variant=`, on two hosts (one per GO
tier). All three shared the hero, fact rail, lead answer, contents rail and tail, so the only
thing that differed was where media entered. **Client chose A on 2026-08-29.**

- **A — Inline** ✅ **chosen.** Media sits inside the reading column between prose sections,
  at the width of the text it belongs to. Zone gallery is a grid in the column.
- **B — Wide.** Prose holds a strict 68ch measure; media breaks past it to the full column
  width, zones five across.
- **C — Paired.** Three columns — contents, argument, evidence — with each section's figure
  beside the paragraph it explains. Rejected: below `xl` the evidence column collapses and C
  becomes A, which is the same reason concern Variant B lost.

**One known limitation of A, accepted.** It places one figure per two prose sections, so a
treatment with more figures than section-slots silently drops the surplus (`skin-booster`
renders 4 of 5). Authoring must not exceed `floor(sections / 2)` figures per treatment, and
the QA gate enforces it rather than leaving it to be noticed.

### The contents rail, and what it costs `Split`

Treatments get the **same sticky contents rail as concerns** — `ArticleToc` at
`variant="sidebar"`, fed from a derived heading list, inline card below `lg`, never both.
`JumpNav` is retired for the same reason `docs/12` retired it: two navigations doing one job.
It costs almost nothing today — most treatments do not author `jumpNav`, so the bar already
renders null on them.

**This reverses the "Split stays" position stated earlier in this spec's own drafting.**
`Split` is a 21rem sticky *heading* gutter. A page cannot carry that and a 15rem contents
rail — they are two left columns, and the prototype's first pass showed exactly that: the
rail covering the prose, then a second, wider gutter arriving unannounced halfway down. The
client rejected it on sight.

So **the rail wraps the entire scrollable body**, and the seven blocks built on `Split`
(`RoutingModule`, `SuitabilityBlock`, `SessionBlock`, `AfterSession`, `RisksBlock`,
`CostFactors`, `ManufacturerImages`) fork away from it — heading and intro flowing inline at
the top of each section. Same data, same wording, same compliance rules; only the gutter
goes. This is the fork `concern-blocks.tsx` already performed for concerns.

**Consequence: after this ticket `Split` has no callers and is deleted.** `docs/12` forked
concerns off it; this forks treatments off it; nothing else imports it. Delete it in the same
change rather than leaving a dead primitive that reads as still-supported.

**Consequence: tone bands become inset panels.** A full-bleed band inside a railed column
would have to break the grid and leave the rail floating over it. The three surfaces keep
their meanings — conversion moment, safety notice, compliance record — as rounded panels in
the column. The 2026-07 redesign's "exactly three bands, each meaning something" rule
survives; only their bleed does not.

### Scope — 14 treatments, 5 excluded

Per `docs/13` §9, on the exclusion rule `docs/11` §4 established for concerns:

- **GO, substantive (8)** — `microwave-contouring`, `skin-booster`, `double-eyelid`,
  `pico-laser`, `radiofrequency`, `fotona-4d`, `fat-freezing`, `resurfacing-laser`.
- **GO, thin (6)** — `bio-stimulator`, `dermal-fillers`, `facial-treatments`,
  `microneedling`, `muscle-stimulation`, `vascular-pigment-laser`. One figure plus
  `manufacturerImages`; the logos are what make these worth touching.
- **HOLD (4)** — `botulinum-toxin`, `exosome-therapy`, `hifu`, `ultherapy`. Exactly one
  net-new photograph each. **No media fields, no placeholder component.**
- **EXCLUDE (1)** — `laser-hair-removal`. Zero net-new photography.

The five receive no media fields and render as they do today. **No placeholder component is
built** — same reasoning as `docs/12`: an empty frame advertises incompleteness on a page
whose job is authority. They re-enter when assets exist.

#### 2026-08 amendment — four of the five re-enter

The HOLD reasoning was "one photograph does not justify the layout cost". The layout has since
shipped, so wiring an asset is a data-only edit, and the alternative was never the clean text
this section describes — it was a generated motif in the closing CTA. Four of the five now
render the asset that was already staged for them:

| Page | Asset | Why it is safe to render |
|---|---|---|
| `hifu` | `hifu/hifu.jpg` | Session photograph: an ultrasound handpiece along the jaw. No copy in the artwork |
| `botulinum-toxin` | `botulinum-toxin/face-muscle-relax.png` | Session photograph: a needle at the outer eye |
| `exosome-therapy` | `exosome-therapy/prp.jpg` | Session photograph of a PRP preparation. **Captioned as PRP**, which is what it shows — the page's own copy names PRP as a treatment exosomes are combined with |
| `laser-hair-removal` | `laser-hair-removal/logo-alma-lasers.png` | The manufacturer mark for the platform the page's lead answer names. Labelled in all four R-07 places |

**`ultherapy` stays held**, and the gate now enforces exactly that one page. Its only candidate,
`img_WhatCanUltherapyTreat.jpg`, is a Kaiteki-branded indication diagram whose burned-in copy
includes *"Early signs of aging — ideal for prevention in your 30s"*. That is a promotional
claim inside the artwork, which no caption or alt text can walk back (`docs/02` §8, rule R-01).
It re-enters on treatment photography, not on this file.

Three further unused assets were reviewed and stay out, on the same test:

- `vascular-pigment-laser/vascular-lesions.png` — a magnified split circle of a treated and an
  untreated leg. A before/after in all but name (§3.3, ADR-0001).
- `fat-freezing/body-slimming.jpg` — a tape measure at the waist on pink sparkle art. Implies
  size reduction as an outcome (R-01).
- `microwave-contouring/area-*-2.png` (×4) — second shots of zones the gallery already covers.

**One mis-assignment corrected.** `treatments-ProYellowLaser2.jpg` was filed under `pico-laser`
by the first media pass because the filename says "Laser". Pro Yellow is the QuadroStar 577nm,
which `content/data/technology.ts` places under `vascular-pigment-laser`; the figure now lives
there, and the CDN key moved with it. **This needs `pnpm sync:treatment-media` before the page
is deployed** — the old key still holds the object.

`pico-laser/lasers.jpg` is staged but deliberately unauthored: pico-laser runs two prose
sections, and Variant A renders `floor(sections / 2)` = 1 figure, so a second would be dropped
silently (Q-23). It lands when a third section is written.

### Fix `ManufacturerImages` before authoring into it

The block exists and is correct about compliance, but its container is built for
photography and **will damage the assets it is about to receive**:

- It renders `aspect-[4/3]` with `object-cover`. Every `logob_*` is a **250×200 transparent
  PNG at 1.25:1**. `object-cover` in a 4:3 box crops it; `bg-tint` behind a transparent PNG
  puts a warm panel behind a mark meant to sit on the page ground.
- **Fix:** `object-contain`, the source ratio, page ground rather than `bg-tint`. This is the
  same class of defect as the concern image-fit bug (`docs/11`: one field forced into four
  ratios) and it is the reason to fix the container *before* authoring 12 logos into it.
- The four-place labelling rule (R-07 — heading paragraph, every caption, every alt, closing
  disclaimer) is already implemented and stays exactly as written.

### The zone gallery is an upgrade to `areas`, not a new block

`Treatment.areas` already exists as `string[]` and already has a block (T-15, "Treatment
areas"). It is authored on **one of nineteen** treatments. The 15 `img_onda_*` die-cuts are
zone photographs — the same information the chip list carries, in pictures.

- `areas` widens from `string[]` to `(string | { label: string; src: string })[]`. A string
  stays a chip; an object renders a die-cut image with its label beneath. **A union, not a
  second field** — one concept, one field, and every existing authored value keeps working.
- The die-cuts are **transparent PNGs**: page ground only, never a tint or espresso band.
  Same constraint the concern `illus` family carries.
- `microwave-contouring` authors its areas for the first time, as objects.

### Step sequence for `double-eyelid`

`DES-Process-01…05` is a genuine five-step sequence — Design, Anesthesia, Start, Suturing,
Results — and is the only media in this audit where numbered markers encode something true
rather than decorate. New optional field, one page:

```ts
/** An ordered procedure sequence. Numbered because the order is the information.
 *  Sources are 156×156 icons — the cell must not exceed native width. */
steps?: { label: string; src: string; body: string }[];
```

**The 156×156 ceiling is the constraint that matters.** These are icons, not photographs;
displayed at 300px they are visibly soft. Same failure mode as the concern results gallery
(`docs/11` §1.2, 74 of 111 under 700px), same guard.

### Data contract — reuse the concern fields verbatim

`docs/12` added six fields to `Concern`. Three apply here **unchanged**, and are lifted to a
shared type rather than redeclared:

```ts
/** 2:1 photo, subject left. The caption carries the meaning, so alt is "". */
figures?: { src: string; caption: string }[];
```

- **`figures`** — identical shape and semantics. `treatments-*` and `info_*` are the same
  2:1 family the concern `figure` container was built for.
- **`banner`** — the type is shared, but only 3 treatments can author it
  (`pico-laser`, `exosome-therapy`, `microwave-contouring` hold a complete responsive pair).
  Since the layout keeps its existing hero, **`banner` is not authored on treatments in this
  work.** The field exists; nothing fills it. Revisit only if banners get commissioned.
- **Not applicable:** `slides` (no designed infographics in these folders), `illustrations`
  (superseded by the `areas` union above), `results` and `visitImages` — see below.

Two fields are **new to `Treatment`**: `steps` (above) and the `manufacturerImages` fix
(existing field, fixed container).

### No results gallery, and no compliance reversal

`4. before after` is keyed by **concern**, not treatment. Neither source folder in this
audit contains a single results image. **ADR-0001 does not extend to `/treatments`** and
this spec creates no new before/after exposure. If results are ever re-cut by treatment,
that is a new decision and a new ADR — not an extension of this one.

### Media delivery — same model, one prefix

- Treatment media serves from
  **`https://cdn.kaiteki.my/treatments/<treatment-slug>/<name>.<ext>`** (bucket
  `kaiteki-web-prod`, prefix `treatments/`), mirroring concerns.
- `images.remotePatterns` widens **once** to cover both `concerns/` and `treatments/` —
  a single pattern edit, not a second one.
- Binaries do not enter git. A committed manifest maps source path to R2 key; the sync
  script uploads from the local source folder. Same divergence from
  `content/blog/AUTHORING.md` §3 that ADR-0001 already records — **no new ADR needed**,
  because the boundary and its reasoning are unchanged.
- **Filenames rename on upload** to treatment-scoped kebab-case.
- The 19 existing heroes stay in `public/` — already-migrated legacy media, same boundary
  concerns drew.

### What the shipped concern work already gives us

Concern tickets 01–04 are merged (`5ed4c13`, `19cc873`, `9d273d7`, `8d6fa04`). Most of this
spec is generalisation, not new machinery. Measured overlap:

| Shipped for concerns | Reuse for treatments | Verdict |
|---|---|---|
| `scripts/sync-concern-media.mjs` | Reads `bucketPrefix` + `assets[{source,key,hold}]` from a manifest path; only the path and the `*_MEDIA_SOURCE` env var are concern-specific | **Generalise** — near-zero change |
| `scripts/audit-concern-media.mjs` | The `sips` dimension read and manifest emit are generic; the folder list, slug list and classification table are not | **Generalise the machinery**, pass the concern/treatment specifics as config |
| `validate-concerns.mts` Q-14…Q-17 | Prefix + manifest checks and the caption rule are page-type-agnostic | **Widen to walk treatments** — one implementation, two data sources |
| `Concern.figures` type | Identical shape and semantics to what treatments need | **Share the type**, don't redeclare |
| `Concern.banner` type | Identical, but only 3 treatments could author one | Share the type; **author none** (see below) |
| `concern-blocks.tsx` | The precedent for forking off `Split`, not code to import | **Pattern only** |
| `lib/concern-toc.ts` | Same derived-heading shape feeding the same `ArticleToc` | **Pattern only** — `lib/treatment-toc.ts` is a sibling, not a copy |
| `config/concern-media.json` | Same manifest schema | **Same schema**, second file |

The rule throughout: **parameterise, don't copy.** Two near-identical scripts drift, and the
drift shows up as a page that 404s its own imagery.

`banner` is shared as a type but **authored on no treatment in this work.** Only three hosts
hold a complete responsive pair (`docs/13` §4) and the layout keeps its existing hero.

### Content authoring

- Fourteen treatments need captions and labels only — roughly **60 authored fields**, versus
  the ~180 the concern revamp needed. **The treatment copy is already written.** This is a
  media-wiring job, not an authoring job, and it should not grow into one.
- `microwave-contouring` additionally needs its area labels authored for the first time.
  **Eleven shipped, not fifteen** (ticket 03): `img_onda_{brafat,lovehandles,thigh,upperarms}2`
  are second die-cuts of four photographs already in the set, so shipping them would show the
  same body area twice. `docs/13` §6 names eleven subjects for the same reason. The labels name
  the body area, never the concern the filename names — a captioned grid of defects reads as an
  indication list (`docs/02` §8).
- **`reviewedBy` is untouched.** No medical claims change; existing sign-off state carries.

### Non-goals for the data model

No CMS. No image-processing pipeline — Next's image optimisation handles resizing from the
R2 originals. No third overlapping media field: `areas` widens, `manufacturerImages` is
fixed, `figures` is shared, `steps` is the only genuinely new one.

---

## Testing Decisions

**What makes a good test here:** it asserts something a reviewer would otherwise have to
catch by eye, and it fails on authored *data*, not on rendering internals. Nothing asserts
class names or component trees.

**The seam is `scripts/validate-concerns.mts`, generalised** — not a new sibling file. Its
media rules Q-14…Q-18 are page-type-agnostic in everything but the CDN prefix they check.
Widen them to walk treatments too and the count of implementations stays at one. Rules that
are genuinely treatment-only get new numbers:

- **Q-14 / Q-15 (widened)** Every treatment media URL sits on the treatments CDN prefix and
  resolves to a manifest entry.
- **Q-17 (widened)** Figures carry a caption. Same rule, second data source.
- **Q-19** Every `steps` entry declares a source no wider than its native 156px, and the
  rendered cell is capped there — the guard against upscaling icons.
- **Q-20** Every `areas` object entry has both a label and a source; a treatment mixing
  strings and objects in one array fails. Enforces the union at the data layer.
- **Q-21** A treatment declaring `manufacturerImages` renders all four labelling places.
  R-07 becomes machine-checked instead of a comment.
- **Q-22** None of the five excluded treatments declares any media field. The exclusion is
  enforced, not remembered.
- **Q-23** A treatment declares no more than `floor(sections / 2)` figures. Variant A places
  one figure per two sections and silently drops the surplus; this turns that into a build
  failure instead of a figure nobody notices is missing.
- **Q-24** No rail entry points at a section the page does not render. The treatment TOC and
  the page read the same derived list, so this is the treatment twin of concern Q-10 — and it
  is the check that would have caught the dead `devices` anchor in the prototype.

The sync script keeps its dry-run mode and post-upload existence check. The audit script is
verified by regenerating `docs/13` §3 and diffing against the committed table.

---

## Out of Scope

- **The Variant A layout port.** Treatments keep their 2026-07 spine. See Implementation
  Decisions; this is the spec's central call, not an omission.
- **The block order.** Media is added into the existing spine; no section moves.
- **The four HOLD and one EXCLUDE treatments.** No media fields, no placeholders, no
  layout change.
- **Any before/after or results gallery on treatments.** No source media exists; ADR-0001
  does not extend here.
- **Banner commissioning** for the 16 treatments without one.
- **The `/technology` pages** (36 of them) and their 1440×900 composites. Untouched.
- **The six device photos and three injectables with no `/technology` entry**
  (`docs/13` §6.4–6.5). A missing page is a client question, not a build task.
- **Hair transplant, vaginal rejuvenation, plastic & reconstructive** (`docs/13` §7) — media
  exists, pages do not. Client question.
- **`collabs/` and `boxbg_*`** — 36 partner brand marks, marketing collateral.
- **Chinese-language routing.** Six CN duplicates are parked; no `/zh` work happens here.

---

## Further Notes

**This spec is smaller than `docs/12` on purpose.** The concern revamp changed a layout,
reversed a compliance policy, and authored ~180 fields across fourteen pages. This one wires
existing assets into an existing layout for fourteen pages, and the single largest item is a
gallery on one page. Resist the pull to make it symmetrical with its predecessor — the two
page types were in genuinely different states, which `docs/13` §2 measured.

**The prototype earned its keep, against this spec's own prediction.** An earlier draft said
treatments did not need one because no layout was changing. That was wrong twice over: the
first pass shipped a rail over the prose and left `Split` owning the bottom half, which the
client rejected on sight and which no amount of reading the code would have surfaced; and it
shipped a dead `devices` anchor that only a rendered page revealed. Both were caught in the
browser, not in review. The variants lived at `components/proto-tx/` with staged assets in
`public/proto/tx/`.

**Variant A "Inline" was chosen on 2026-08-29 and the prototype is now off main** (ticket 03).
`components/proto-tx/`, `public/proto/tx/` and the `?variant=A|B|C` gate in
`app/treatments/[category]/page.tsx` are all deleted; `Split` went with the rail in ticket 02
and nothing imports it. The three variants and their staged assets are preserved on the
throwaway branch **`proto/treatment-variants-2026-08-29`** — primary source for the A
decision, so do not garbage-collect that branch.

**Two blocks were dead code before this spec and one still will be.**
`manufacturerImages` gets authored here. `areas` gets authored on a second treatment. But
`manufacturerImages` is also declared on `Concern` (`lib/types.ts:286`) and is not authored
there either — the concern revamp did not fill it and this spec does not reach it. It stays
dead on the concern side; either author it there or drop it from that type, but do not leave
a third state.

**The `DRJESSIE.AESTHETIC` ownership flag in `docs/11` §3.1 does not apply here.** That file
is concern results media. No asset in this spec's scope carries third-party branding beyond
the manufacturer marks, which are used as manufacturer marks and labelled as such.
