# 13 — Treatment & technology media inventory / coverage

**Source:** `kaiteki-revamp-idea/kaiteki new/` — `2. treatments` (76 files) + `3. device and injectables` (125), **201 total, 37 MB**.
**Audited:** 2026-08-29 · **Scope:** `/treatments/[slug]` (19 pages) and `/technology/[slug]` (36 pages).
**Method:** same as `docs/11` — PIL dimensions on every file, prefix grouping, contact sheets for the ambiguous families, perceptual + visual dedupe against what already ships.

> **Headline: this is not the concern situation.** Concerns had 236 unused images and pages
> with nothing in them. Here **every treatment and every technology already has its image**
> (19/19 and 36/36). Most of these 201 files are the *ingredients* of what already ships.
> The gap is in-body imagery and banners, not first coverage.

---

## 1. Families and ratios

| Family | n | Ratio | Pixels | What it is | Status |
|---|--:|---|---|---|---|
| `treatment_*` | 32 | 3:2 | 900×600 (5 CN at 450×300) | **Concern nav cards, concern label burned in**, warm-taupe ground | not treatment media — §5 |
| `machine_*` | 26 | 1:1 | 600×600 | Cut-out device photography, **transparent PNG/WebP** | 20 already composited into `/images/technology` |
| `logob_*` | 23 | 1.25:1 | 250×200 | Manufacturer logos, transparent | **10 in `/images/tech`, 13 unused** |
| `treatments-*` | 22 | 2:1 | 800×400 | Stock treatment-in-progress photography | 2 already shipped, **20 new** |
| `img_onda_*` | 15 | 1:1 | 500×500 | **Scalloped die-cut body-area photos**, transparent | **entirely unused** |
| `product_*`/`product-*` | 15 | 1.23:1 | 1735×1410 | Injectable box shots, `www.KAITEKI.my` watermark | ~6 composited, rest unused |
| `boxbg_*` + `collabs/` | 36 | 1:1 | 800×800 / 150×150 | Partner/collab brand marks | **excluded** — marketing, not clinical |
| `pbanner_*` | 10 | 2.88:1 + 16:9 pair | 1920×667 / 1203×667 | Desktop banner + mobile pair | **only 4 subjects** — §4 |
| `img_*` (other) | 5 | 1:1 · 1.38:1 | 500×500 · 1100×800 | Ultherapy/skinbooster/blog explainers | unused |
| `info_*` | 4 | 2:1 | 800×400 | fotona-4d ×2, HairTransplant ×2 | unused |
| `DES-Process-01…05` | 5 | 1:1 | **156×156** | Double-eyelid procedure step icons | icon scale only |
| `services_wonderface1/2` | 2 | 0.77:1 | 1544×2000 | Portrait, Wonderface | unused |
| `logo*` (brand) | 3 | — | — | Kaiteki wordmark | excluded |

**Two ratio families are transparent cut-outs** — `machine_*` (all 26) and `img_onda_*` (all 15).
They need a light page ground, never a dark band. Same constraint as the concern `illus` family.

---

## 2. What already ships

- **19 treatments / 19 images.** All `public/images/treatments/*` are **1440×900** stock photos.
  One exception: `double-eyelid.jpg` is 1920×667 (a banner crop, not the 1440×900 set).
- **36 technologies / 36 images.** All `public/images/technology/*` are **1440×900**
  composites: a `machine_*` or `product_*` cut-out placed on a pink gradient with the
  `logob_*` mark set above it. **The source `machine_`, `logob_` and `product_` families are
  therefore already consumed** — they are the layers of the shipped composite, not new assets.
- `public/images/tech/` holds 10 raw `logob_*` logos, read by `TechnologyView.tsx:146`.

Dedupe against `treatments-*`: **2 of 22 are the exact photo already shipping**
(`treatments-Microneedling` = `microneedling.jpg`, `treatments-DoubleEyeLid` = `double-eyelid.jpg`).
The other 20 are *different* photos of the same subject — a second image per treatment,
which is precisely what an in-body figure needs.

---

## 3. Coverage matrix — 19 treatments

Counted as **net-new media only**. Device and product shots are excluded from the totals
because §2 established they are already composited into the shipping `/images/technology`
images — re-counting them would inflate every row with media the site already renders.
A logo counts only where the `logob_*` file is **not** already in `public/images/tech`.
`figure` excludes the two files that *are* the shipping hero.

**Explainer** = `figure` + `area` + `steps` — the in-body media that gives a page something
to show mid-scroll. This is the same test `docs/11` §4 applied to concerns, where
`enlarged-pores` was excluded despite holding 13 assets because none of them explained
anything.

| Treatment | banner | figure | area | steps | logo (new) | **explainer** | verdict |
|---|--:|--:|--:|--:|--:|--:|---|
| `microwave-contouring` | 2 | 1 | **15** | 0 | 0 | **16** | ✅ **GO** |
| `skin-booster` | 0 | **5** | 0 | 0 | 1 | **5** | ✅ GO |
| `double-eyelid` | 0 | 0 | 0 | **5** | 0 | **5** | ✅ GO |
| `pico-laser` | **3** | 4 | 0 | 0 | 0 | **4** | ✅ GO |
| `radiofrequency` | 0 | 3 | 0 | 0 | 1 | **3** | ✅ GO |
| `fotona-4d` | 0 | 3 | 0 | 0 | 0 | **3** | ✅ GO |
| `fat-freezing` | 0 | 2 | 0 | 0 | 0 | **2** | ✅ GO |
| `resurfacing-laser` | 0 | 2 | 0 | 0 | 0 | **2** | ✅ GO |
| `bio-stimulator` | 0 | 1 | 0 | 0 | 2 | 1 | ⚠️ GO (thin) |
| `dermal-fillers` | 0 | 1 | 0 | 0 | 2 | 1 | ⚠️ GO (thin) |
| `facial-treatments` | 0 | 1 | 0 | 0 | 2 | 1 | ⚠️ GO (thin) |
| `microneedling` | 0 | 1 | 0 | 0 | 1 | 1 | ⚠️ GO (thin) |
| `muscle-stimulation` | 0 | 1 | 0 | 0 | 1 | 1 | ⚠️ GO (thin) |
| `vascular-pigment-laser` | 0 | 1 | 0 | 0 | 1 | 1 | ⚠️ GO (thin) |
| `botulinum-toxin` | 0 | 1 | 0 | 0 | 0 | 1 | ⛔ **HOLD** |
| `exosome-therapy` | **2** | 1 | 0 | 0 | 0 | 1 | ⛔ HOLD |
| `hifu` | 0 | 1 | 0 | 0 | 0 | 1 | ⛔ HOLD |
| `ultherapy` | 0 | 1 | 0 | 0 | 0 | 1 | ⛔ HOLD |
| `laser-hair-removal` | 0 | **0** | 0 | 0 | 1 | **0** | ❌ **EXCLUDE** |

**14 GO · 4 HOLD · 1 EXCLUDE.** Split of the GO tier: **8 substantive** (2+ explainers) and
**6 thin** (1 explainer, carried by unused manufacturer logos).

**No treatment is without a hero** — unlike concerns, nothing here is bare at the top. The
gap is entirely below the fold.

### 3.1 Why the four HOLDs are held, not excluded

Each has exactly **one** net-new photograph and nothing else — no second figure, no zone
art, no unused logo. A revamped page built on that is a text page with one picture in it:
the same layout cost as `microwave-contouring` for a twentieth of the payoff.

They are **HOLD, not EXCLUDE**, because one asset is not zero — the concern precedent for
exclusion was *no* explainer media at all. They ship on the current layout, unchanged, and
re-enter the revamp the moment either a second figure or a device photo is commissioned.
`ultherapy` is the weakest: its one figure is `img_WhatCanUltherapyTreat.jpg`, an explainer
graphic rather than treatment photography, and it has no device shot at all despite
`ultherapy-system` being a `/technology` entry.

`laser-hair-removal` is the single **EXCLUDE**: zero net-new photography of any kind. Its
only unused asset is one manufacturer logo.

### 3.3 There is no before/after media here

Folder `4. before after` is keyed by **concern**, not treatment. Neither source folder in
this audit contains a results image. **The MAB/PDPA compliance decision recorded in
`docs/adr/0001` does not recur for `/treatments`** unless results are re-cut by treatment —
which nobody has asked for. Flag it if that changes.

---

## 4. The banner gap is the real finding

Variant A — the layout the client chose for concerns — is built on a `pbanner_` hero with
the H1 set into the empty right half. Concerns had **16 banners for 14 pages**.

Treatments have **4 banner subjects for 19 pages**: `picolaser` (+CN +`_sm`), `exosome` (+`_sm`),
`onda` (+`-sm`), `hairtransplant` (+`_sm`) — and hair transplant has no page.

**Copying Variant A to treatments does not work with the media that exists.** Either the
treatment layout takes a different hero (the 1440×900 photo already shipping is a natural
fit), or 15 banners get commissioned. Decide this before prototyping, not after.

---

## 5. `treatment_*` (32 files) belong to `/concerns`, not here

Despite living in `2. treatments`, all 32 are **concern nav cards** — a 900×600 portrait on
warm taupe with the concern name typeset into the image ("Birthmark", "Excessive Sweating",
"Enlarged & Open Pores", "Vascular Lesions", "Hair Loss", "Acne & Acne Scar"…).

Two consequences:

1. **`docs/11` §4 needs a footnote.** The four concerns it excluded as under-covered —
   `enlarged-pores`, `vascular-lesions`, `birthmark`, `excessive-sweating` — each have a card
   image here. It is *card art for the concerns hub*, not in-body imagery, so **the §4
   exclusion still stands for `/concerns/[slug]`**. But the hub — declared out of scope in
   decision 1 — could be fully illustrated today.
2. **The burned-in label blocks i18n and blocks reuse.** Five CN variants exist at 450×300
   for exactly this reason. Treat the family as hub cards or not at all; never as a generic photo.

---

## 6. Genuinely new media, ranked by value

1. **`img_onda_*` — 15 die-cut treatment-area photos.** Bra fat, double chin, love handles,
   inner thigh, upper arms, knees, heavy jowl, sagging jawline, nasolabial, skin laxity, dull
   skin. This is a ready-made **"areas treated" gallery for `microwave-contouring`** and
   `onda-coolwaves`, and the `kaiteki-page-structures.html` treatment page asks for exactly
   that zone section. Nothing else in the repo comes close. **Highest-value asset in the folder.**
2. **13 unused `logob_*` manufacturer logos** — `almalasers`, `density`, `ellanse`,
   `hydrafacial`, `juvaderm`, `oligio`, `plinest`, `quadrostar`, `radiesse`, `restylane`,
   `schwazy`, `silkpeel`, `sylfirm`. `manufacturerImages` is declared on both `Treatment` and
   `Concern` (`lib/types.ts:117`, `:286`), rendered by `ManufacturerImages`, and **authored
   nowhere**. These logos are what that field was for.
3. **20 second-photo `treatments-*` figures** at a clean 2:1 — in-body figures for treatments
   whose only image is the hero.
4. **6 `machine_*` devices with no `/technology` entry at all** — `DensityRF`, `HIFU` (generic),
   `fillers` (generic), `morexel`, `picoplus`, `skinbooster` (generic). Two are generic
   category art; four suggest devices the clinic runs that the taxonomy doesn't list. Worth
   asking about — a missing `/technology` page is a missing ranking page.
5. **Unmatched `product_*`** — `gouri`, `cromasaypha`, `DeusadermLido` have no technology entry.
   Same question as above, for injectables.

## 7. Media with no page to live on

| Asset(s) | Subject |
|---|---|
| `pbanner_hairtransplant{,_sm}`, `info_HairTransplant_BaldSpot`, `info_HairTransplant_IncreasedShredding`, `treatment_body_HairTransplant` | **Hair transplant** — 5 assets, banner included. No treatment page. |
| `treatment_body_VaginalRejuvenation`, `img_vaginalrejuvenation` | Vaginal rejuvenation |
| `treatment_body_PlasticReconstructive` | Plastic & reconstructive surgery |
| `treatment_skin_dulldrylips` | Dull/dry lips |

Hair transplant is the notable one: it has more banner coverage than 15 of the 19 shipping
treatments. Whether it's a service Kaiteki still offers is a client question.

---

## 8. Exclusions

- **`collabs/` + `boxbg_*` (36 files)** — partner brand marks (ChapterJu, Fondest, GummyClub,
  LilinCo, Olelesco, Regis, SISClub, Shandon, Terrae, WanderlustCo, Anjoe, BHB) in two
  treatments: bare mark and mark-on-tinted-box. Marketing collateral, no clinical page. Out.
- **Kaiteki brand logos (3)** — already in the design system.
- **CN duplicates (6)** — `pbanner_picolaserCN`, `treatment_facial_*CN` ×4,
  `treatment_skin_doubleeyelidsutureCN`. Park for `/zh`; do not ship on EN routes.
- **`machine_co2laser` png+webp, `info_fotona-4d`/`info_fotona4d`** — same asset twice.

---

## 9. Revamp decision — 14 in, 5 out

Mirrors `docs/11` §4. The exclusion rule is the same one the concern revamp used: a page
with no explainer media gets **no media fields and no placeholder component** — blocks
return null and it renders as clean text on the layout it already has.

| Tier | n | Treatments | What they get |
|---|--:|---|---|
| **GO — substantive** | 8 | `microwave-contouring`, `skin-booster`, `double-eyelid`, `pico-laser`, `radiofrequency`, `fotona-4d`, `fat-freezing`, `resurfacing-laser` | Full media wiring: figures, and the zone gallery / step sequence where they apply |
| **GO — thin** | 6 | `bio-stimulator`, `dermal-fillers`, `facial-treatments`, `microneedling`, `muscle-stimulation`, `vascular-pigment-laser` | One figure + `manufacturerImages`. Carried by the logos, not the photography |
| **HOLD** | 4 | `botulinum-toxin`, `exosome-therapy`, `hifu`, `ultherapy` | Nothing. Current layout, unchanged. Re-enter on a second asset |
| **EXCLUDE** | 1 | `laser-hair-removal` | Nothing. Zero net-new photography |

> **2026-08 — four of the five re-entered.** The HOLD/EXCLUDE reasoning was that one asset did
> not justify the layout work. The layout shipped, so wiring is now data-only, and the
> alternative to "one photograph" turned out to be a generated motif rather than clean text.
> `hifu`, `botulinum-toxin` and `exosome-therapy` render their one session photograph;
> `laser-hair-removal` renders the Alma Lasers mark its own lead answer names. **Only
> `ultherapy` stays held** — `img_WhatCanUltherapyTreat.jpg` carries "ideal for prevention in
> your 30s" burned into the artwork, a promotional claim no caption can walk back — and
> `scripts/validate-concerns.mts` `NO_MEDIA` is now that one slug. Also corrected:
> `treatments-ProYellowLaser2.jpg` was assigned to `pico-laser` by filename; Pro Yellow is the
> QuadroStar 577nm and belongs to `vascular-pigment-laser`, where the figure and its CDN key
> now sit. Full reasoning, including the three assets re-reviewed and still held, in `docs/14`
> §Scope. See also §11 on running the audit off macOS.

**Three moves carry almost all of the value:**

1. **The zone gallery on `microwave-contouring`.** 15 die-cut area photos, already the right
   shape, and the structures doc already asks for the section. One page, self-contained,
   the single highest-value item in this audit.
2. **`manufacturerImages` across the GO tier.** The field is declared on `Treatment`
   (`lib/types.ts:117`), rendered by `ManufacturerImages`, and authored nowhere — while 12
   `logob_*` marks sit unused. Data-only; no component work. This is what makes the six thin
   pages worth touching at all.
3. **In-body figures** from `treatments-*` on the eight substantive pages.

Everything else — banners, the six device photos with no `/technology` page, the three
unmatched injectables, hair transplant — is a **client question, not a build task** (§6, §7).

**Do not copy Variant A to treatments on autopilot.** §4 is the reason (four banner subjects
for nineteen pages), and `components/treatment-blocks.tsx` (top comment) documents a
deliberate 2026-07 move *away* from the layout Variant A partially returns to. The
consequence is recorded in `docs/14` §Implementation Decisions: treatments keep their
editorial spine and take media into it, rather than inheriting the concern hero.

---

## 10. Delivery, and regenerating this document

Treatment media serves from **`https://cdn.kaiteki.my/treatments/<slug>/<name>.<ext>`**
(bucket `kaiteki-web-prod`, prefix `treatments/`), mirroring concerns. The 37 MB of source
binaries are **not** committed — the same divergence from `content/blog/AUTHORING.md` §3
that ADR-0001 §4 already records, for the same reason, so no new ADR. `next.config.ts`
`images.remotePatterns` fences image optimisation to `/blog/**`, `/concerns/**` and
`/treatments/**`.

**One pipeline, two page types.** `scripts/media-audit.mjs` is the engine — read the source
folders, measure every image with `sips`, emit the matrix and the manifest. The facts live
beside it in `scripts/media/treatments.mjs`: the two source folders, the 19 slugs in the
order §3 publishes them, the figure and logo assignment tables, and the bucket reasons.
`scripts/media/concerns.mjs` is its sibling. There is no second copy of either script.

```bash
pnpm audit:treatment-media            # prints the §3 matrix
pnpm audit:treatment-media --write    # rewrites §3 of this file
pnpm audit:treatment-media --manifest # rewrites config/treatment-media.json
pnpm sync:treatment-media --dry-run   # prints every planned upload, writes nothing
pnpm sync:treatment-media             # stages the renamed tree and runs one `aws s3 sync`
```

Source folders come from `MEDIA_SOURCE`; R2 credentials from `.env.local`, never
the repo. `sips` is macOS-only, so the audit is designer/dev tooling and does not run in CI.

> **`--manifest` cannot be regenerated on Windows or Linux.** `scripts/media-audit.mjs`
> reads pixel dimensions by shelling out to `sips`, so on any non-macOS machine it exits
> `spawnSync sips ENOENT` before writing anything. The 2026-08 re-key of
> `treatments-ProYellowLaser2.jpg` was therefore applied to `config/treatment-media.json`
> by hand. Small edits are safe that way — the file is JSON and the shape is one flat list
> — but a bulk change needs a Mac, or a `sips` fallback (`sharp` is already an indirect
> dependency of Next's image pipeline) if this becomes routine.

**69 of the 201 upload; 132 carry a `hold`** naming the reason, and a held asset is never
synced. The buckets, and what each records:

| Bucket | n | Why it never uploads |
|---|--:|---|
| `~devices` | 41 | `machine_*` + `product_*` — already composited into `/images/technology` (§2) |
| `~partners` | 39 | 36 partner marks + 3 brand logos (§8) |
| `~hub-cards` | 27 | `treatment_*` — concern hub cards, not treatment media (§5) |
| `~shipped` | 12 | 10 `logob_*` already in `public/images/tech`, 2 photos that *are* the hero (§2) |
| `~unassigned` | 7 | Hair transplant, vaginal rejuvenation, mesolipolysis, `logob_density` (§6–§7) |
| `~zh` | 6 | CN duplicates, parked for `/zh` (§8) |

**Filenames rename on upload** to treatment-scoped kebab-case describing the subject —
`img_onda_saggingjawline.png` → `treatments/microwave-contouring/area-sagging-jawline.png`.
The manifest preserves the original → new mapping plus each source's pixel dimensions, which
is what lets `validate-concerns.mts` Q-14/Q-15 fail the build on a URL the sync will never
put in the bucket. Those rules walk treatments and concerns from one implementation; there
is no `validate-treatments.mts`.
