# Treatment & Concern Taxonomy Restructure — Design

**Date:** 2026-07-13
**Source of truth:** `Kaiteki-Website-Structure-Report.docx` (July 2026 IA proposal) + kickoff decisions in this session.
**Status:** Approved for spec review.

## 1. Problem

Treatment pages currently mix three levels at one rank: concerns, treatment **categories** (Pico Laser, HIFU), and specific **machines** (Ultherapy, CoolSculpting). Machines sit as siblings of the very categories they belong to (HIFU beside Ultherapy; Fat Freezing beside CoolSculpting). We introduce a real **Category → Machine** hierarchy and clean up the concern grouping.

## 2. Decisions (locked this session)

1. **Scope:** full taxonomy build with **authored, compliance-checked copy** for every new page.
2. **URL scheme:** nested. Categories at `/treatments/[category]`; machines at `/treatments/[category]/[machine]` (e.g. `/treatments/hifu/ultherapy`).
3. **Tattoo Removal:** move from treatment → **concern** (`/concerns/tattoo-removal`), treated-by → Pico Laser. 301 the old URL.
4. **Eyes:** keep an **Eyes** group in *both* taxonomies. Concerns → Eyes = Dark Eye Circle (Eyebags deferred). Treatments → Eyes = Double Eyelid (8th menu group, kept).
5. **Machine pages:** a machine gets its own page **only with real brand-search demand**; otherwise it is a **section inside its category page**. Morpheus8 & Hydrafacial stay as sections (not pages).
6. **Deferred (no cover image / no copy yet):** Eyebags concern, Dermatological Problems concern. Note and skip; add when assets arrive.

## 3. Data model changes (`lib/types.ts`)

```ts
export type NavCategory =
  | "Lasers"
  | "Lifting & Tightening"
  | "Body & Slimming"
  | "Injectables"
  | "Facials"
  | "Hair Removal"
  | "Regenerative"
  | "Eyes";

export interface Treatment {
  // ...existing fields...
  /** Category slug this machine belongs to. Absent = this IS a category (high-level) page. */
  parent?: string;
  /** Named devices described as sections on a category page ("we use Picosure, PQX, PicoCare"). */
  machineNames?: string[];
}

export interface Concern {
  // ...existing fields...
  group: "Skin" | "Face" | "Eyes" | "Hair & Body";  // was "Skin" | "Face & Body"
}
```

- `category: NavCategory` on a Treatment = its **menu group** (unchanged field, expanded union).
- `parent` distinguishes category (high-level) from machine (low-level).
- Helper additions in `content/data/treatments.ts`: `categoryTreatments()` (parent === undefined), `machinesOf(categorySlug)`, and a `treatmentByPath(category, machine?)` lookup. `treatmentsByCategory(navGroup)` keeps returning category-level pages only for the hub.

## 4. Treatment taxonomy (16 categories + 4 machine pages + Double Eyelid)

Menu group → **Category page** (slug) → *machine child pages* / §sections.

**Lasers**
- **Pico Laser** (`pico-laser`, exists) — §Picosure, §Fotona PQX (StarWalker), §PicoCare
- **Fotona Laser** (`fotona-laser`, NEW) — §Fotona SP Dynamis / TimeWalker (4D, NightLase, LipLase, SmoothEye, TightSculpting)
- **Vascular / Pigment Laser** (`vascular-pigment-laser`, NEW) — child: `dermav`; §Pro Yellow (Quadrostar 577nm), §M22 IPL
- **Resurfacing Laser** (`resurfacing-laser`, NEW) — §Fractional CO2

**Lifting & Tightening**
- **HIFU** (`hifu`, exists) — child: `ultherapy`; §Ultracel Q, §Lifthera
- **RF Microneedling** (`microneedling`, exists — slug kept, display renamed) — §Sylfirm X, §Morpheus8, §Potenza
- **Radiofrequency** (`radiofrequency`, exists) — §BTL Exilis, §Wonderface

**Body & Slimming**
- **Fat Freezing** (`fat-freezing`, exists) — child: `coolsculpting`; §Cooltech
- **Microwave Contouring** (`microwave-contouring`, NEW) — child: `onda`
- **Muscle Stimulation** (`muscle-stimulation`, NEW) — §Schwarzy (Em-Fit)

**Injectables**
- **Skin Boosters** (`skin-booster`, exists) — §Profhilo, §Rejuran, §Plinest/Newest, §Restylane Skinboosters, §Hydrodeluxe
- **Bio-Stimulators** (`bio-stimulator`, exists) — §Sculptra, §Ellanse, §Radiesse
- **Dermal Fillers** (`dermal-fillers`, NEW) — §Juvederm, §Restylane, §Belotero

**Facials**
- **Facial Treatments** (`facial-treatments`, NEW) — §Hydrafacial, §Silkpeel, §Kaiteki Signature Facial

**Hair Removal**
- **Laser Hair Removal** (`laser-hair-removal`, NEW) — §Alma (IPL + RF)

**Regenerative**
- **Exosome Therapy** (`exosome-therapy`, exists) — no machine

**Eyes**
- **Double Eyelid** (`double-eyelid`, exists) — kept

**Machine child pages** (nested, `parent` set): `ultherapy`→hifu, `coolsculpting`→fat-freezing, `onda`→microwave-contouring, `dermav`→vascular-pigment-laser.

**New category pages to author (8):** fotona-laser, vascular-pigment-laser, resurfacing-laser, microwave-contouring, muscle-stimulation, dermal-fillers, facial-treatments, laser-hair-removal.

**Bio-Stimulators vs Fillers overlap:** Radiesse & Ellanse are assigned **one home each** — Bio-Stimulators (they are collagen stimulators). Fillers page lists HA products only (Juvederm, Restylane, Belotero).

## 5. Concern taxonomy (14 pages, 4 groups)

- **Skin:** acne, pigmentation, enlarged-pores, tattoo-removal *(moved in)*, aging, birthmark *(NEW)*, vascular-lesions *(NEW)*, excessive-sweating *(NEW)*
- **Face:** face-contouring, face-lifting, fine-lines-wrinkles
- **Eyes:** dark-eye-circles *(moved out of Face)*
- **Hair & Body:** hair-loss, body-slimming

**New concern pages to author (3) + 1 converted:** birthmark, vascular-lesions, excessive-sweating; tattoo-removal (convert from treatment).
**Deferred:** dermatological-problems (no image), eyebags (no image).

Each concern lists the treatments that address it; each treatment lists the concerns it solves (cross-linked mesh, existing pattern).

## 6. Routing

- `app/treatments/page.tsx` — hub; group by the 8 menu groups; render **category cards only**.
- `app/treatments/[category]/page.tsx` — replaces `app/treatments/[slug]/`. High-level page. `generateStaticParams` = categories (parent undefined). Breadcrumb `Treatments › {Category}`. Renders machine sections + links to machine child pages.
- `app/treatments/[category]/[machine]/page.tsx` — low-level page. Params = machines (parent set). Breadcrumb `Treatments › {Category} › {Machine}`. 404 if `machine.parent !== category`.
- Shared render extracted into one `TreatmentView` component reused by both routes.
- **Concerns:** existing literal group hubs `app/concerns/skin`, `app/concerns/face`. Add `app/concerns/eyes`, `app/concerns/hair-body`. Refactor all four onto one shared `ConcernGroupHub` component. `[slug]` route unchanged.

## 7. Images

Copy from `C:\Users\chris\Desktop\kaiteki 2026\kaiteki 2026\` into `public/images/`, renamed to `slug.jpg`. Update each entry's `image:` field to `.jpg` (orphaned old `.png`/`.webp` covers removed).

**Treatments (17 files → 16 categories + ultherapy machine):** pico laser→pico-laser, fotona laser→fotona-laser, `vascular _ pigment laser`→vascular-pigment-laser, resurfacing laser→resurfacing-laser, HIFU→hifu, rf microneedling→microneedling, radiofrequency→radiofrequency, fat freezing→fat-freezing, microwave contour→microwave-contouring, muscle stimulation→muscle-stimulation, skin booster→skin-booster, biostimulators→bio-stimulator, dermal filler→dermal-fillers, facial treatment→facial-treatments, laser hair removal→laser-hair-removal, exosome therapy→exosome-therapy, ultherapy→ultherapy.

**Concerns (14 files):** acne, pigmentation, enlarged pores→enlarged-pores, fine lines and wrinkles→fine-lines-wrinkles, dark eye circle→dark-eye-circles, face contouring→face-contouring, face lifting→face-lifting, aging, body slimming→body-slimming, hair loss→hair-loss, tattoo removal→tattoo-removal, birthmark, vascular lesion→vascular-lesions, excessive sweating→excessive-sweating.

Machines other than ultherapy (coolsculpting, onda, dermav) and Double Eyelid keep their existing covers.

## 8. Redirects (`next.config.ts`, 301)

- `/treatments/ultherapy` → `/treatments/hifu/ultherapy`
- `/treatments/coolsculpting` → `/treatments/fat-freezing/coolsculpting`
- `/treatments/onda` → `/treatments/microwave-contouring/onda`
- `/treatments/dermav` → `/treatments/vascular-pigment-laser/dermav`
- `/treatments/tattoo-removal` → `/concerns/tattoo-removal`

## 9. Navigation & schema

- `components/TreatmentsMenu.tsx` — regroup into the 8 menu groups; list categories (machines shown nested/indented under their category where the menu supports it).
- `components/SiteHeader.tsx` / footer — reflect the Concerns Skin/Face/Eyes/Hair & Body split.
- Breadcrumb JSON-LD already emitted per page; verify machine pages emit the 3-level trail.
- Update `sitemap.xml` generation: category hubs higher priority than machine leaves.

## 10. Compliance (YMYL — `docs/02 §8`)

All new copy: no efficacy/outcome/before-after/testimonial claims; factual device descriptions only; `reviewedBy` (doctor slug), `lastReviewed` ISO date, `kkliu`/`kkliuExpiry` placeholders mirroring existing entries. Flag anything uncertain rather than asserting.

## 11. Out of scope / deferred

- `/zh` mirror (locale-neutral slugs already reserved; content sync later).
- Eyebags & Dermatological Problems concern pages (await image + copy).
- Morpheus8 / Hydrafacial standalone pages (sections for now).
- Any `.zh` copy authoring.

## 12. Verification

- `pnpm typecheck` + `pnpm build` clean (static params for both nested routes resolve).
- Every moved URL returns 301 to its new home (`test:redirects` if wired, else manual).
- Every category page renders its machine sections; every machine page breadcrumbs to its parent.
- All 14 concern + 16 category covers present and non-404.
