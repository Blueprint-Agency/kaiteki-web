# Products & Technology + Internal-Linking IA v2 — Design

**Date:** 2026-07-18
**Status:** Approved (design) — pending spec review
**Scope:** Introduce a first-class "Products & Technology" catalog, restructure the
Concern → Treatment → Device/Product graph so relationships are authored once and
derived everywhere, remove the About page, and keep the sitemap auto-generated.

---

## 1. Goals

1. A new **Products & Technology** group: a hub page (`/technology`) that surfaces
   every device/injectable/protocol with **search + filter**, and a dedicated page
   per item (`/technology/[slug]`).
2. **Streamline the relationship mesh** so internal links are dynamic and never
   drift: each edge is authored in exactly one place; the reverse is derived.
3. Typed `.ts` data files as the single source of truth (no backend, no raw JSON) —
   validated at build by the existing `scripts/validate-content`.
4. Remove `/about` for now.
5. Sitemap continues to auto-generate from the data (now including technology items).

## 2. The model

Three levels, one graph:

```
Concern ──▶ Treatment (in a Group/Category) ──▶ Technology (device | injectable | protocol)
 Skin/Face/…        Body & Slimming → Fat Freezing        CoolSculpting, Cooltech
```

### Entities (typed `.ts` in `content/data/`)

| Entity | File | Authored (canonical) edges | Derived by helpers |
|---|---|---|---|
| Concern | `concerns.ts` | `treatments: string[]` | machines/products (via its treatments) |
| Treatment | `treatments.ts` | `related: string[]` | `concerns` ← `concern.treatments`; `technology` ← `technology.treatments` |
| **Technology** (new) | `technology.ts` | `treatments: string[]`, `group` | `concerns` (via its treatments) |

**Removed from `Treatment`:** `machineNames`, `concerns`, `parent`. All three become
derived or obsolete — this is the drift fix.

### `Technology` type (new, in `lib/types.ts`)

```ts
export type TechType = "device" | "injectable";

export interface Technology {
  slug: string;
  name: string;
  /** Reuses the treatment NavCategory taxonomy. */
  group: NavCategory;
  /** "device" (machine) or "injectable" (consumable). */
  type: TechType;
  /** Treatment slugs this powers — the ONLY authored edge. Many-to-many. */
  treatments: string[];
  image: string;
  summary: string;      // one compliant factual sentence
  /** Optional rich body — carried over for the 3 converted pages. */
  sections?: Section[];
  faqs?: Faq[];
  /** Optional device-brand logo (existing /images/tech logos). */
  device?: string;
  reviewedBy: string;
  lastReviewed: string;
}
```

### Derived-link helpers (colocated with the data)

- `technologyOfTreatment(treatmentSlug)` — `technology.filter(x => x.treatments.includes(slug))`
- `treatmentsOfTechnology(techSlug)` — map `tech.treatments` → treatment objects
- `concernsOfTreatment(treatmentSlug)` — `concerns.filter(c => c.treatments.includes(slug))`
- `technologyOfConcern(concernSlug)` — union of `technologyOfTreatment` over the concern's treatments
- `treatmentsOfConcern` — already exists (concern.treatments)

Every page renders links off these. **Add an item to `technology.ts` and it wires
itself into its treatment page, its concerns, the hub, and the sitemap — no other edits.**

## 3. Technology catalog (~34 items, validated 2026-07-18)

Validated against manufacturer/clinical sources; category alignment confirmed sound.

**Lasers**
- Pico Laser → Picosure, Fotona PQX (StarWalker), PicoCare *(device)*
- Fotona 4D → Fotona SP Dynamis / TimeWalker *(device)*
- Vascular / Pigment Laser → DermaV, Pro Yellow (Quadrostar 577nm), **M22 IPL** *(device)*
- Resurfacing Laser → Fractional CO2 *(device)*

**Lifting & Tightening**
- HIFU → Ultracel Q, Lifthera *(device)*
- Ultherapy *(its own level-2 treatment)* → Ultherapy System *(device)*
- RF Microneedling → **Sylfirm X**, Morpheus8, Potenza *(device)*
- Radiofrequency → BTL Exilis, Wonderface *(device)*

**Body & Slimming**
- Fat Freezing → CoolSculpting, Cooltech *(device)*
- Microwave Contouring → Onda Coolwaves *(device)*
- Muscle Stimulation → Schwarzy (Em-Fit) *(device)*

**Injectables**
- Skin Boosters → Profhilo, Rejuran, Plinest/Newest, **Restylane Skinboosters**, Hydrodeluxe *(injectable)*
- Bio-Stimulators → Sculptra, Ellanse, Radiesse *(injectable)*
- Dermal Fillers → Juvederm, **Restylane** (filler), Belotero *(injectable)*

**Facials**
- Facial Treatments → Hydrafacial, Silkpeel *(device)*

**Hair Removal**
- Laser Hair Removal → Alma (IPL + RF) *(device)*

### Research-driven modeling decisions

1. **Entity named "Products & Technology"** (not "Machines") — the catalog mixes
   devices and injectables; the `type` field labels each correctly on-page.
2. **Restylane = two nodes:** `restylane-skinbooster` (Skin Boosters, non-crosslinked)
   and `restylane` (Dermal Fillers, crosslinked). Distinct products.
3. **M22 = many-to-many:** `treatments: ["vascular-pigment-laser", "laser-hair-removal"]`.
4. **Sylfirm X:** primary treatment RF Microneedling; it also targets pigment/vascular —
   surfaced via its treatments' concerns, no special-casing needed.

## 4. Migration of the 4 old nested pages

Currently modeled as child-treatments with `parent`. New handling:

| Old (`/treatments/x/y`) | New |
|---|---|
| `ultherapy` (parent hifu) | **Stays a treatment** — drop `parent`; becomes standalone level-2 treatment. Its device = new `ultherapy-system` technology item. |
| `coolsculpting` (parent fat-freezing) | → technology item (device), `treatments: ["fat-freezing"]` |
| `onda` (parent microwave-contouring) | → technology item; **dedupe** with the "Onda Coolwaves" string. One node. |
| `dermav` (parent vascular-pigment-laser) | → technology item (device) |

The 3 converted items **keep their authored `sections`/`faqs`** (moved onto the
Technology record) — no content loss. `concern.treatments[]` entries pointing at
`ultherapy` stay valid; entries pointing at `coolsculpting`/`onda`/`dermav` are
remapped to their parent treatment (deduped).

**Deferred:** 301 redirects from the old `/treatments/x/y` URLs (user: tackle later).
Delete the `app/treatments/[category]/[machine]` route and the `parent` field.

## 5. Pages & components

- `app/technology/page.tsx` — hub. Client component `TechnologyExplorer` for search
  (name match) + filters (by group, by `type`). Reuses the photo-card pattern → new
  `TechnologyCard` (shows image, type badge, name, which treatment(s)).
- `app/technology/[slug]/page.tsx` — `generateStaticParams` over `technology`; renders
  new `TechnologyView`: photo, type badge, summary/what-it-is, **"Used in" treatment(s)**,
  **"May help with" concerns** (derived), optional sections/faqs, WhatsApp CTA, device logo.
- `components/TreatmentView.tsx` — "Devices & platforms" section now lists
  `technologyOfTreatment(t)` as **links** to `/technology/[slug]` (was plain text join).
- Concern page (`app/concerns/[slug]/page.tsx`) — after its treatments, add a derived
  "Technology used" strip from `technologyOfConcern`.
- Nav/footer: `lib/site.ts` primaryNav + `SiteHeader` + `SiteFooter` — add
  **"Products & Technology"** (link to `/technology`), remove **"About"**.
- Remove `app/about/`.

## 6. Sitemap

Add `technology.map(t => \`/technology/${t.slug}\`)` to the dynamic list in
`app/sitemap.ts`. Drop the (now-deleted) `/treatments/[category]/[machine]` children
and `/about`. Everything else already derives from data.

## 7. Non-goals (YAGNI)

- No 301 redirects yet (deferred).
- No full authored bios for all 31 items — start with one factual summary sentence +
  photo each; the 3 converted items keep their existing rich content.
- No backend / CMS / raw JSON.
- No mega-menu for Technology — the hub's own search/filter covers discovery.

## 8. Testing / validation

- `scripts/validate-content` extended to assert: every `technology.treatments` slug
  and `concern.treatments` slug resolves; every `image` file exists.
- `npx tsc --noEmit` clean.
- `next build` generates all `/technology/[slug]` pages + updated sitemap.
- Spot-check the mesh live: a treatment page links to its devices; a device page links
  back to its treatment(s) and concerns; the hub filters by group and type.
