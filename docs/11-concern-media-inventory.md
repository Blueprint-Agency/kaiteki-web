# 11 — Concern media inventory & coverage

**Source:** `kaiteki-revamp-idea/kaiteki new/` — `1. concerns` (125 files) + `4. before after` (111 files), 236 total, 44 MB.
**Audited:** 2026-08-29 · **Scope:** the `/concerns/[slug]` revamp.
**Status:** ground truth for which concern pages can carry imagery and which cannot.

Counts here are measured, not estimated. Regenerate with `pnpm audit:concern-media` (§6).

---

## 1. Five media families, one ratio each

Every source file belongs to exactly one family, and **each family is internally
consistent**. There is no per-image ratio problem to solve; there is a per-family
container to build.

| Family | Ratio | Pixels | n | What it is | Container |
|---|---|---|--:|---|---|
| `banner` — `pbanner_*` | **2.88:1** | 1920×667 | 16 | Desktop page banner | Hero, `object-left` |
| `banner` — `*_sm` | **16:9** | 1203×667 | 16 | Mobile pair of the above | Hero, below `sm` |
| `figure` — `info_*` | **2:1** | 800×400 | 35 | Photo, subject left, right half empty | `<Figure>`, caption beside |
| `slide` — `info-*-stage*` | **2:1** | 800×400 | 16 | Finished infographic; Kaiteki branding, headline and body copy burned in | `<Slide>`, full width, no caption |
| `illus` — `img_acne_*` | **1:1** | 500×500 | 8 | Scalloped die-cut, **transparent PNG** | Square grid, page ground only |
| `photo` — `skin-*`, `mp_service_*` | 3:2 · 5:4 | 2400×1597 · 1735×1410 | 16 | Stock/model photography | Card, tile |
| `results` — `4. before after` | 1:1 · 1.71:1 | 564×330 → 1415×1410 | 111 | **Pre-composited** before+after in one file | Square grid, capped at native width |

Two ratio exceptions, both benign: `info-acne-stage1/2/3.jpg` (1000×640) are duplicates
of the hyphenated `info-acne-stage-1/-2/-3.jpg` (800×400) — use the hyphenated set;
`ba_darkeyecircles` mixes 564×330 and 498×396.

### 1.1 Three consequences for the build

1. **Banners are a text-overlay design, not a photograph.** All 16 place the subject hard
   left with the entire right half empty — they were cut for headline copy the legacy
   site never rendered. Centre-cropping destroys them. Use `object-position: left` and
   set the H1 into the void.
2. **`info_*` is two families sharing one prefix.** `figure` needs a caption set beside
   it; `slide` already carries its own headline and body, so a caption double-labels it.
   Two components, not one branching component.
3. **Results imagery is already composited.** Each file holds before *and* after side by
   side. The `[Before] [After]` two-panel comparator in `kaiteki-page-structures.html` §E
   **does not apply** — this is a single-image gallery with a caption. Only 10 of 111 are
   true `a`/`b` pairs.

### 1.2 Resolution ceiling

**74 of 111 results files are under 700px wide** (`ba_*` at 564×330, `img_ba_*` at
600×600). Sharp at native size, visibly soft stretched to a 1200px column. Grid cells
must not exceed the source width. Only `mp_service_beforeafter*` (1415px) and
`ba_facelifting/facetightening` (1080px) survive full-width display.

---

## 2. Coverage matrix

After the visual reclassification in §3.

| Concern | banner | figure | slide | illus | photo | results | total | verdict |
|---|--:|--:|--:|--:|--:|--:|--:|---|
| `acne` | 4 | 6 | 6 | 8 | 4 | 17 | 45 | ok |
| `pigmentation` | 2 | 2 | 5 | 0 | 8 | 14 | 31 | ok |
| `face-lifting` | 2 | 6 | 0 | 0 | 0 | 17 | 25 | ok |
| `face-contouring` | 2 | 2 | 0 | 0 | 4 | 13 | 21 | ok |
| `dark-eye-circles` | 4 | 3 | 0 | 0 | 0 | 9 | 16 | ok |
| `tattoo-removal` | 2 | 1 | 0 | 0 | 2 | 10 | 15 | ok |
| `body-slimming` | 4 | 4 | 0 | 0 | 0 | 5 | 13 | ok |
| `fine-lines-wrinkles` | 2 | 7 | 0 | 0 | 1 | 1 | 11 | ok |
| `hair-loss` | 2 | 2 | 0 | 0 | 3 | 5 | 12 | ok |
| `aging` | 2 | 0 | 5 | 0 | 1 | 2 | 10 | ok |
| **`enlarged-pores`** | 2 | 0 | 0 | 0 | 5 | 6 | 13 | ⚠️ no explainers |
| **`vascular-lesions`** | **0** | 0 | 0 | 0 | 1 | 4 | 5 | ⚠️ no explainers, no banner |
| **`birthmark`** | **0** | 0 | 0 | 0 | 1 | **0** | 1 | ❌ **bare** |
| **`excessive-sweating`** | **0** | 0 | 0 | 0 | 2 | **0** | 2 | ❌ **bare** |
| `~first-visit` | 0 | 0 | 0 | 0 | 0 | 3 | 3 | reassigned, see §3 |
| `~parked` | 4 | 0 | 0 | 0 | 0 | 2 | 6 | no concern page wants these |
| `~unassigned` | 0 | 1 | 0 | 0 | 3 | 3 | 7 | unresolved |

**10 of 14 concerns are well covered. 4 are not** (down from 5 before reclassification —
`fine-lines-wrinkles` gained its first results image in §3).

---

## 3. Visual reclassification

36 files carried no concern in their filename. 20 were classified by opening them:

| File | → | Basis |
|---|---|---|
| `mp_service_beforeafter1,4,6` | `face-contouring` | jawline / neck slimming |
| `mp_service_beforeafter2` | `aging` | overall tone and texture |
| `mp_service_beforeafter3` | `enlarged-pores` | forehead + cheek texture |
| `mp_service_beforeafter5` | `fine-lines-wrinkles` | Caucasian subject, arrow annotation — reads as a supplier demo, not a Kaiteki patient |
| `mp_service_beforeafter7`, `mp_service_other1,2` | `acne` | scarring / texture |
| **`mp_service_beforeafter8,9,10`** | **not results** | device handpiece visible in frame — these are treatment-in-progress shots. Reassigned to the "your first visit" block |
| `ba_dermatological-problem_01`, `img_ba_skin_01,03` | `acne` | scarring |
| `ba_dermatological-problem_02` | `dark-eye-circles` | |
| `ba_dermatological-problem_03`, `img_ba_skin_02` | `vascular-lesions` | cheek redness |
| `img_unevenskintexture` | `enlarged-pores` | |
| `img_unevenskintone` | `pigmentation` | |
| `main_feature_skin`, `main_feature_skin2`, `info_Scar_refinement` | `acne` | stock concept, not results |

**Parked** — no concern page exists for them: `pbanner-DoubleEyelidSuture{,_sm}`,
`pbanner-FacialTreatment{,_sm}`, `ba_doubleeyelidsuture_01`,
`img_ba_doubleeyelidsuture_01`. Double eyelid is a treatment, not one of the 14 concerns.

**Unresolved (7):** `Kaiteki-Clinic-Bukit-Jalil-Laser-Facial--750x500`, `skin-derma`,
`skin-doubleeyelid`, `info_NoDowntime` (stock traveller shot — a treatment benefit, not a
concern), and 3 results files (`img_ba_noseenhancement_01/_02`, `img_ba_lipfillers_01` —
nose and lip enhancement are treatments, not one of the 14 concerns).

### 3.1 Asset-ownership flag

`mp_service_other1.jpg` carries a **`DRJESSIE.AESTHETIC` watermark** — a doctor's personal
account, not Kaiteki branding. Ownership of that asset is unconfirmed. This is separate
from the advertising-compliance question recorded in `docs/adr/0001-before-after-imagery.md`.

---

## 4. Under-covered concerns — decision

**`enlarged-pores`, `vascular-lesions`, `birthmark`, `excessive-sweating` are excluded
from the media wiring.** Their pages ship text-only.

No placeholder component is built. `ConcernView` already returns `null` for every block
whose data is absent, so a concern with no `figures` field simply renders no figure
section — a clean text page, not a gap. An "image coming soon" placeholder would be
worse than the absence: it advertises incompleteness on a page whose job is to look
authoritative.

These four re-enter the build when assets exist. Commission list:

| Concern | Needs |
|---|---|
| `birthmark` | banner pair (2.88:1 + 16:9), 2–3 type figures (2:1), results |
| `excessive-sweating` | banner pair, 2–3 cause/area figures, results |
| `vascular-lesions` | banner pair, 2–3 type figures (has 4 results already) |
| `enlarged-pores` | 2–3 cause figures (has banner + 6 results already) |

Before commissioning, audit `2. treatments` and `3. device and injectables` — some of
this may already exist under a treatment name.

---

## 5. Delivery

Concern media follows the blog's R2 model (`content/blog/AUTHORING.md` §3) with one
deliberate divergence, recorded in the ADR:

- **Serves from** `https://cdn.kaiteki.my/concerns/<concern-slug>/<descriptive-name>.<ext>`
  (bucket `kaiteki-web-prod`, prefix `concerns/`).
- **`next.config.ts`** `images.remotePatterns` widened from `/blog/**` to cover
  `/concerns/**`.
- **Divergence:** the 44 MB of source binaries are **not** committed to the repo (blog
  stages files under `content/blog/media/` and lets the deploy workflow sync them).
  Concern media uploads directly from the local source folder via
  `scripts/sync-media.mjs concerns`, driven by a committed manifest
  (`config/concern-media.json`) mapping source path → R2 key. `validate-concerns.mts` will
  check authored URLs against the manifest (rules Q-14 to Q-18, **not yet written** — issue
  02), giving the same build-time guarantee as `check-blog.mts` without the permanent git
  weight.
- **Renaming:** filenames are image SEO. Originals are mixed-case with underscores
  (`info_FineLine_GlabellarLines.jpg`); R2 keys are concern-scoped kebab-case
  (`concerns/fine-lines-wrinkles/line-glabellar.jpg`). The manifest preserves the
  original → new mapping, plus each source's pixel dimensions for the Q-16 width check.
  Files belonging to no concern page get a `parked/` key instead, and never upload; the
  watermarked `mp_service_other1.jpg` (§3.1) carries a `hold` for the same reason.
- **Uploading:** `pnpm sync:concern-media --dry-run` prints every planned upload and writes
  nothing; without the flag it stages the renamed tree and runs one `aws s3 sync`, then
  counts the objects under the prefix. Credentials come from `.env.local`, never the repo.

---

## 6. Regenerating

`scripts/media-audit.mjs` reads the source folders, applies the §3 reclassification table
from `scripts/media/concerns.mjs`, and re-emits §2. The same engine serves `/treatments`
(`docs/13` §3) from a second config; the concern facts — folders, the 14 slugs, the
classified-by-eye override table — live in that config module, not in the engine. Run it
after any change to the source media:

```bash
pnpm audit:concern-media            # prints the matrix
pnpm audit:concern-media --write    # rewrites §2 of this file
pnpm audit:concern-media --manifest # rewrites config/concern-media.json
```

Source folders are found via `CONCERN_MEDIA_SOURCE` (see `.env.example`); dimensions come
from macOS `sips`, so this is designer/dev tooling and does not run in CI.

The first machine run of the audit corrected three rows the hand-count of 2026-08-29 had
split differently: `info_DarkEye_PigmentationDarkCircle` is a dark-circle *type* explainer,
not a pigmentation one (dark-eye-circles 2→3 figures, pigmentation 3→2), and
`info_NoDowntime` is a generic stock traveller shot belonging to no concern
(fine-lines-wrinkles 8→7, `~unassigned` 0→1). §2 is now generated, not transcribed.

---

## 7. Related

- `docs/adr/0001-before-after-imagery.md` — the decision to publish before/after imagery,
  which reverses `docs/02` §8.1, `docs/05` §1, `docs/06` §5, `docs/00` §14, `DESIGN.md`
  "Imagery", and the `notSuitableFor` comment in `lib/types.ts`.
- `content/blog/AUTHORING.md` §3 — the R2 model this mirrors.
- `kaiteki-revamp-idea/kaiteki-page-structures.html` — the target page structure. Its §E
  before/after comparator is superseded by §1.1 above.
