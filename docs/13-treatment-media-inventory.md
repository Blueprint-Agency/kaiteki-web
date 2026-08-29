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

Technology media rolled up through the authored `technology.treatments[]` edge.
`hero` = already shipping. `figure` = `treatments-*` / `info_*`. `device` = `machine_*`.
`logo` = `logob_*`. `product` = `product_*`. `area` = `img_onda_*`.

| Treatment | hero | banner | figure | device | logo | product | area | verdict |
|---|:--:|--:|--:|--:|--:|--:|--:|---|
| `microwave-contouring` | ✓ | **2** | 1 | 1 | 1 | 0 | **15** | ★ richest by far |
| `skin-booster` | ✓ | 0 | 3 | 1 | 3 | 5 | 0 | ok |
| `pico-laser` | ✓ | **3** | 2 | 3 | 2 | 0 | 0 | ok |
| `bio-stimulator` | ✓ | 0 | 1 | 0 | 3 | 4 | 0 | ok |
| `dermal-fillers` | ✓ | 0 | 1 | 1 | 2 | 5 | 0 | ok |
| `radiofrequency` | ✓ | 0 | 1 | 3 | 3 | 0 | 0 | ok |
| `vascular-pigment-laser` | ✓ | 0 | 1 | 3 | 2 | 0 | 0 | ok |
| `fat-freezing` | ✓ | 0 | 2 | 2 | 1 | 0 | 0 | ok |
| `microneedling` | ✓ | 0 | 2 (1 dup) | 2 | 2 | 0 | 0 | ok |
| `fotona-4d` | ✓ | 0 | 3 | 1 | 1 | 0 | 0 | ok |
| `laser-hair-removal` | ✓ | 0 | **0** | 2 | 2 | 0 | 0 | thin |
| `facial-treatments` | ✓ | 0 | 1 | 1 | 2 | 0 | 0 | thin |
| `muscle-stimulation` | ✓ | 0 | 1 | 1 | 1 | 0 | 0 | thin |
| `resurfacing-laser` | ✓ | 0 | 1 | 1 | 0 | 0 | 0 | thin |
| `hifu` | ✓ | 0 | 1 | 2 | 0 | 0 | 0 | thin |
| `botulinum-toxin` | ✓ | 0 | 1 | 1 | 0 | 0 | 0 | thin |
| `double-eyelid` | ✓ | 0 | 1 (dup) | 0 | 0 | 0 | 0 | ⚠️ 5 × 156px step icons only |
| `exosome-therapy` | ✓ | **2** | 1 | 0 | 0 | 0 | 0 | ⚠️ no device/logo |
| `ultherapy` | ✓ | 0 | **0** | **0** | 1 | 0 | 0 | ❌ **bare** — logo + `img_WhatCanUltherapyTreat` only |

**No treatment is without a hero.** One (`ultherapy`) has nothing usable beyond it; two
(`double-eyelid`, `exosome-therapy`) are close behind.

### 3.1 There is no before/after media here

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

## 9. Recommendation

The treatment pages do **not** need the concern revamp's media-wiring work — they are not
starving. Three targeted moves cover almost all the value:

1. Wire `img_onda_*` into a zone gallery on `microwave-contouring`. Self-contained, one page,
   the media is already the right shape.
2. Author `manufacturerImages` from the 23 `logob_*` logos. The field, the component and the
   assets all already exist; only the data is missing.
3. Add `treatments-*` as an in-body figure where a treatment has a hero and nothing else.

Everything else — banners, the missing device/injectable pages, hair transplant — is a
**client question, not a build task.** Ask before scoping.

**Do not copy Variant A to treatments on autopilot.** §4 is the reason, and
`components/treatment-blocks.tsx` (top comment) documents a deliberate 2026-07 move *away*
from the layout Variant A partially returns to. That call needs to be made consciously.
