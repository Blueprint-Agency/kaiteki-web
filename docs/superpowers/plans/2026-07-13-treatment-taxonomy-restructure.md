# Treatment & Concern Taxonomy Restructure — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the flat treatment list into a 3-tier taxonomy (menu group → category page → machine page/section) and regroup concerns into Skin/Face/Eyes/Hair & Body, with new authored pages, new cover images, and 301s for moved URLs.

**Architecture:** Content stays pure-code (typed TS data + App Router pages). A `parent` field on `Treatment` distinguishes category pages (`/treatments/[category]`) from machine pages (`/treatments/[category]/[machine]`). A shared `TreatmentView` renders both. A content-validation script guards the data invariants. No CMS, no new runtime deps.

**Tech Stack:** Next.js 16.2 (App Router) · React 19 · TypeScript 5 strict · Tailwind v4 · pnpm · Node ≥20.9.

## Global Constraints

- **Compliance (YMYL, `docs/02 §8` / `docs/05 §2`):** no efficacy/outcome/guarantee/superlative/before-after/testimonial claims. Factual device descriptions only. Every page carries `reviewedBy` (real doctor slug), `lastReviewed` (ISO date), `kkliu` + `kkliuExpiry` placeholders in the existing "(sample)" form.
- **Canonical host:** non-www `https://kaiteki.my`. Slugs locale-neutral (`/zh` reserved, not built here).
- **Nested treatment URLs:** categories at `/treatments/[category]`; machines at `/treatments/[category]/[machine]`.
- **Existing slugs preserved** where possible to avoid redirects: `microneedling` (display renamed to "RF Microneedling"), `skin-booster`, `bio-stimulator` keep their slugs.
- **Copy pattern master template:** `content/data/treatments.ts` → `pico-laser` (8 sections + 4 FAQs). New authored pages mirror its structure and register.
- **Conversion:** WhatsApp-only (`lib/wa.ts` helpers). No booking/cart.
- **Verify each task:** `pnpm typecheck` and `pnpm validate:content` (added in Task 1) must pass before commit; routing tasks additionally require `pnpm build`.

---

## Reference tables (used by multiple tasks)

**Treatment taxonomy — final state.** `group` = `Treatment.category` (menu group). `parent` set = machine (low-level).

| slug | name | group | parent | status |
|---|---|---|---|---|
| pico-laser | Pico Laser | Lasers | — | exists |
| fotona-laser | Fotona Laser | Lasers | — | NEW |
| vascular-pigment-laser | Vascular / Pigment Laser | Lasers | — | NEW |
| resurfacing-laser | Resurfacing Laser | Lasers | — | NEW |
| dermav | DermaV | Lasers | vascular-pigment-laser | exists→nest |
| hifu | HIFU | Lifting & Tightening | — | exists |
| ultherapy | Ultherapy | Lifting & Tightening | hifu | exists→nest |
| microneedling | RF Microneedling | Lifting & Tightening | — | exists, relabel |
| radiofrequency | Radiofrequency | Lifting & Tightening | — | exists |
| fat-freezing | Fat Freezing | Body & Slimming | — | exists |
| coolsculpting | CoolSculpting | Body & Slimming | fat-freezing | exists→nest |
| microwave-contouring | Microwave Contouring | Body & Slimming | — | NEW |
| onda | Onda | Body & Slimming | microwave-contouring | exists→nest |
| muscle-stimulation | Muscle Stimulation | Body & Slimming | — | NEW |
| skin-booster | Skin Boosters | Injectables | — | exists |
| bio-stimulator | Bio-Stimulators | Injectables | — | exists |
| dermal-fillers | Dermal Fillers | Injectables | — | NEW |
| facial-treatments | Facial Treatments | Facials | — | NEW |
| laser-hair-removal | Laser Hair Removal | Hair Removal | — | NEW |
| exosome-therapy | Exosome Therapy | Regenerative | — | exists |
| double-eyelid | Double Eyelid | Eyes | — | exists |

`treatmentCategories` (menu-group order): `["Lasers","Lifting & Tightening","Body & Slimming","Injectables","Facials","Hair Removal","Regenerative","Eyes"]`.

**Machine sections named inside each category** (`machineNames`, described as `sections`, NOT separate pages):
- pico-laser: Picosure, Fotona PQX (StarWalker), PicoCare
- fotona-laser: Fotona SP Dynamis / TimeWalker (4D, NightLase, LipLase, SmoothEye, TightSculpting)
- vascular-pigment-laser: Pro Yellow (Quadrostar 577nm), M22 IPL *(child page: DermaV)*
- resurfacing-laser: Fractional CO2
- hifu: Ultracel Q, Lifthera *(child page: Ultherapy)*
- microneedling: Sylfirm X, Morpheus8, Potenza
- radiofrequency: BTL Exilis, Wonderface
- fat-freezing: Cooltech *(child page: CoolSculpting)*
- microwave-contouring: *(child page: Onda)*
- muscle-stimulation: Schwarzy (Em-Fit)
- skin-booster: Profhilo, Rejuran, Plinest/Newest, Restylane Skinboosters, Hydrodeluxe
- bio-stimulator: Sculptra, Ellanse, Radiesse
- dermal-fillers: Juvederm, Restylane, Belotero
- facial-treatments: Hydrafacial, Silkpeel, Kaiteki Signature Facial
- laser-hair-removal: Alma (IPL + RF)

**Concern taxonomy — final state.**

| slug | name | group | status |
|---|---|---|---|
| acne | Acne | Skin | exists |
| pigmentation | Pigmentation | Skin | exists |
| enlarged-pores | Enlarged Pores | Skin | exists |
| tattoo-removal | Tattoo Removal | Skin | NEW (moved from treatments) |
| aging | Aging | Skin | exists, regroup |
| birthmark | Birthmark | Skin | NEW |
| vascular-lesions | Vascular Lesions | Skin | NEW |
| excessive-sweating | Excessive Sweating | Skin | NEW |
| face-contouring | Face Contouring | Face | exists, regroup |
| face-lifting | Face Lifting | Face | exists, regroup |
| fine-lines-wrinkles | Fine Lines & Wrinkles | Face | exists, regroup |
| dark-eye-circles | Dark Eye Circles | Eyes | exists, regroup |
| hair-loss | Hair Loss | Hair & Body | exists, regroup |
| body-slimming | Body Slimming | Hair & Body | exists, regroup |

`concernGroups`: `["Skin","Face","Eyes","Hair & Body"]`. **Deferred (do NOT create):** eyebags, dermatological-problems (no cover image yet).

**Image copy map** — source dir `C:\Users\chris\Desktop\kaiteki 2026\kaiteki 2026\`.

Treatments → `public/images/treatments/<slug>.jpg`:
`pico laser`→pico-laser · `fotona laser`→fotona-laser · `vascular _ pigment laser`→vascular-pigment-laser · `resurfacing laser`→resurfacing-laser · `HIFU`→hifu · `rf microneedling`→microneedling · `radiofrequency`→radiofrequency · `fat freezing`→fat-freezing · `microwave contour`→microwave-contouring · `muscle stimulation`→muscle-stimulation · `skin booster`→skin-booster · `biostimulators`→bio-stimulator · `dermal filler`→dermal-fillers · `facial treatment`→facial-treatments · `laser hair removal`→laser-hair-removal · `exosome therapy`→exosome-therapy · `ultherapy`→ultherapy

Concerns → `public/images/concerns/<slug>.jpg`:
`acne`→acne · `pigmentation`→pigmentation · `enlarged pores`→enlarged-pores · `fine lines and wrinkles`→fine-lines-wrinkles · `dark eye circle`→dark-eye-circles · `face contouring`→face-contouring · `face lifting`→face-lifting · `aging`→aging · `body slimming`→body-slimming · `hair loss`→hair-loss · `tattoo removal`→tattoo-removal · `birthmark`→birthmark · `vascular lesion`→vascular-lesions · `excessive sweating`→excessive-sweating

**Redirects (301):** `/treatments/ultherapy`→`/treatments/hifu/ultherapy` · `/treatments/coolsculpting`→`/treatments/fat-freezing/coolsculpting` · `/treatments/onda`→`/treatments/microwave-contouring/onda` · `/treatments/dermav`→`/treatments/vascular-pigment-laser/dermav` · `/treatments/tattoo-removal`→`/concerns/tattoo-removal`.

---

## Task 1: Content-validation script (the safety gate)

Establishes the invariant check every later data task runs. Written first so it fails loudly the moment data drifts.

**Files:**
- Create: `scripts/validate-content.mts`
- Modify: `package.json` (add `"validate:content": "node --experimental-strip-types scripts/validate-content.mts"` to `scripts`)

**Interfaces:**
- Consumes: `treatments`, `treatmentBySlug` from `@/content/data/treatments`; `concerns`, `concernBySlug` from `@/content/data/concerns`; `existsSync` from `node:fs`.
- Produces: CLI that exits non-zero on any broken invariant. Later tasks rely on `pnpm validate:content`.

- [ ] **Step 1: Write the validator** (it must pass against the *current* data before any changes)

```ts
// scripts/validate-content.mts
import { existsSync } from "node:fs";
import { join } from "node:path";
import { treatments, treatmentBySlug } from "../content/data/treatments.ts";
import { concerns, concernBySlug } from "../content/data/concerns.ts";

const PUBLIC = join(process.cwd(), "public");
const errors: string[] = [];
const err = (m: string) => errors.push(m);

for (const t of treatments) {
  if (!existsSync(join(PUBLIC, t.image))) err(`treatment ${t.slug}: image missing ${t.image}`);
  // a machine's parent must be an existing CATEGORY (parent-less) treatment
  if ("parent" in t && (t as { parent?: string }).parent) {
    const p = treatmentBySlug((t as { parent: string }).parent);
    if (!p) err(`treatment ${t.slug}: parent '${(t as { parent: string }).parent}' not found`);
    else if ((p as { parent?: string }).parent) err(`treatment ${t.slug}: parent '${p.slug}' is itself a machine`);
  }
  for (const c of t.concerns) if (!concernBySlug(c)) err(`treatment ${t.slug}: concern '${c}' not found`);
  for (const r of t.related) if (!treatmentBySlug(r)) err(`treatment ${t.slug}: related '${r}' not found`);
}
for (const c of concerns) {
  if (!existsSync(join(PUBLIC, c.image))) err(`concern ${c.slug}: image missing ${c.image}`);
  for (const tr of c.treatments) if (!treatmentBySlug(tr)) err(`concern ${c.slug}: treatment '${tr}' not found`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} content error(s):\n` + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log(`✓ content OK — ${treatments.length} treatments, ${concerns.length} concerns`);
```

- [ ] **Step 2: Add the script to package.json** — insert into `"scripts"`:

```json
"validate:content": "node --experimental-strip-types scripts/validate-content.mts",
```

- [ ] **Step 3: Run against current data**

Run: `pnpm validate:content`
Expected: PASS — `✓ content OK — 14 treatments, 10 concerns` (image paths for current `.png`/`.webp`/`.jpg` all resolve).
> If Node < 20.19 rejects `--experimental-strip-types`, fall back to `"tsx scripts/validate-content.mts"` only if `tsx` is already a dev dep; otherwise compile inline. Do not add a new dependency (ponytail).

- [ ] **Step 4: Commit**

```bash
git add scripts/validate-content.mts package.json
git commit -m "chore: add content-validation script (image + reference integrity)"
```

---

## Task 2: Data model — types, unions, helpers, reclassification

The one cohesive schema change. Typecheck stays red until every existing entry is remapped, so remap is part of this task.

**Files:**
- Modify: `lib/types.ts` (NavCategory union; `Treatment.parent`, `Treatment.machineNames`; `Concern.group` union)
- Modify: `content/data/treatments.ts` (remap 14 `category` values; add `parent` to 4 machines; `machineNames` on categories; rewrite `treatmentCategories`; add helpers)
- Modify: `content/data/concerns.ts` (regroup 10 `group` values; rewrite `concernGroups`)

**Interfaces:**
- Produces:
  - `Treatment.parent?: string`, `Treatment.machineNames?: string[]`
  - `Concern.group: "Skin" | "Face" | "Eyes" | "Hair & Body"`
  - `categoryTreatments(): Treatment[]` — parent-less, in `treatments` order
  - `machinesOf(categorySlug: string): Treatment[]`
  - `treatmentByPath(category: string, machine?: string): Treatment | undefined`
  - `treatmentHref(t: Treatment): string` — `/treatments/${t.parent}/${t.slug}` if machine, else `/treatments/${t.slug}`
  - Existing `treatmentBySlug`, `treatmentsByCategory`, `concernBySlug`, `concernsByGroup`, `treatmentCategories`, `concernGroups` keep their signatures.

- [ ] **Step 1: Update `lib/types.ts`**

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
```
In `interface Treatment`, after `device?: string;` add:
```ts
  /** Category slug this machine sits under. Absent = this IS a category (high-level) page. */
  parent?: string;
  /** Devices described as sections on a category page (drives the "we use …" line). */
  machineNames?: string[];
```
In `interface Concern`, change:
```ts
  group: "Skin" | "Face" | "Eyes" | "Hair & Body";
```

- [ ] **Step 2: Remap `content/data/treatments.ts` category values** — per the reference table. e.g. `pico-laser` `category: "Pigment & Resurfacing"` → `"Lasers"`; `hifu`/`ultherapy`/`radiofrequency` → `"Lifting & Tightening"`; `microneedling` → `"Lifting & Tightening"` + `name: "RF Microneedling"`; `onda` → `"Body & Slimming"`; `fat-freezing`/`coolsculpting` → `"Body & Slimming"`; `skin-booster`/`bio-stimulator` → `"Injectables"`; `exosome-therapy`/`dermav`… wait `dermav` → `"Lasers"`; `double-eyelid` → `"Eyes"`. (Full target values in the reference table.)

- [ ] **Step 3: Add `parent` to the 4 existing machines** — `ultherapy` → `parent: "hifu"`; `coolsculpting` → `parent: "fat-freezing"`; `onda` → `parent: "microwave-contouring"`; `dermav` → `parent: "vascular-pigment-laser"`. (The NEW category parents `microwave-contouring` / `vascular-pigment-laser` are added in Task 8; validator is allowed to fail between Task 2 and Task 8 — see Step 7 note.)

- [ ] **Step 4: Add `machineNames` to existing categories** — e.g. `pico-laser` → `machineNames: ["Picosure", "Fotona PQX (StarWalker)", "PicoCare"]`, per the machine-sections table (only for the 8 existing categories in this task).

- [ ] **Step 5: Rewrite `treatmentCategories` + add helpers** at the bottom of `treatments.ts`:

```ts
export const treatmentCategories: Treatment["category"][] = [
  "Lasers",
  "Lifting & Tightening",
  "Body & Slimming",
  "Injectables",
  "Facials",
  "Hair Removal",
  "Regenerative",
  "Eyes",
];

export function treatmentBySlug(slug: string) {
  return treatments.find((t) => t.slug === slug);
}

/** Category (high-level) pages only, in source order. */
export function categoryTreatments() {
  return treatments.filter((t) => !t.parent);
}

/** Machine (low-level) pages that sit under a category. */
export function machinesOf(categorySlug: string) {
  return treatments.filter((t) => t.parent === categorySlug);
}

/** Resolve a nested path. `machine` undefined → a category page. */
export function treatmentByPath(category: string, machine?: string) {
  if (machine) {
    const m = treatments.find((t) => t.slug === machine);
    return m && m.parent === category ? m : undefined;
  }
  const c = treatments.find((t) => t.slug === category);
  return c && !c.parent ? c : undefined;
}

/** Correct URL for any treatment (category or machine). */
export function treatmentHref(t: Treatment) {
  return t.parent ? `/treatments/${t.parent}/${t.slug}` : `/treatments/${t.slug}`;
}

/** Categories filtered to one menu group (hub + nav use this — categories only). */
export function treatmentsByCategory(category: Treatment["category"]) {
  return treatments.filter((t) => t.category === category && !t.parent);
}
```
(`treatmentsByCategory` now excludes machines so hubs/menus list categories only.) Ensure `import type { Treatment }` is present.

- [ ] **Step 6: Regroup `content/data/concerns.ts`** — set each `group` per the concern table (`aging`→"Skin", `fine-lines-wrinkles`→"Face", `dark-eye-circles`→"Eyes", `hair-loss`/`body-slimming`→"Hair & Body", `face-contouring`/`face-lifting`→"Face"). Rewrite the constant:

```ts
export const concernGroups: Concern["group"][] = ["Skin", "Face", "Eyes", "Hair & Body"];
```

- [ ] **Step 7: Typecheck**

Run: `pnpm typecheck`
Expected: PASS (union + fields consistent). `pnpm validate:content` will still report the 2 dangling parents (`microwave-contouring`, `vascular-pigment-laser`) — that is expected and resolved in Task 8. Do not "fix" it by removing the parents.

- [ ] **Step 8: Commit**

```bash
git add lib/types.ts content/data/treatments.ts content/data/concerns.ts
git commit -m "feat(taxonomy): category/machine data model + 8 menu groups, 4 concern groups"
```

---

## Task 3: Copy & wire the new cover images

**Files:**
- Create: `public/images/treatments/*.jpg` (17), `public/images/concerns/*.jpg` (14)
- Modify: `content/data/treatments.ts` (`image:` fields → `.jpg`), `content/data/concerns.ts` (`image:` fields → `.jpg` where renamed)
- Delete: orphaned old covers (`pico-laser.webp`, `hifu.png`, `ultherapy.png`, `onda.png`, `radiofrequency.png`, `microneedling.png`, `dermav.png`, `coolsculpting.png`, and any others replaced)

- [ ] **Step 1: Copy + rename via a throwaway shell loop** (Git Bash). Source has spaces; quote carefully.

```bash
SRC="/c/Users/chris/Desktop/kaiteki 2026/kaiteki 2026"
DST="/c/Users/chris/Desktop/blueprint/kaiteki/public/images"
# treatments
declare -A T=( ["pico laser"]=pico-laser ["fotona laser"]=fotona-laser ["vascular _ pigment laser"]=vascular-pigment-laser ["resurfacing laser"]=resurfacing-laser ["HIFU"]=hifu ["rf microneedling"]=microneedling ["radiofrequency"]=radiofrequency ["fat freezing"]=fat-freezing ["microwave contour"]=microwave-contouring ["muscle stimulation"]=muscle-stimulation ["skin booster"]=skin-booster ["biostimulators"]=bio-stimulator ["dermal filler"]=dermal-fillers ["facial treatment"]=facial-treatments ["laser hair removal"]=laser-hair-removal ["exosome therapy"]=exosome-therapy ["ultherapy"]=ultherapy )
for k in "${!T[@]}"; do cp "$SRC/treatments/$k.jpg" "$DST/treatments/${T[$k]}.jpg"; done
# concerns
declare -A C=( ["acne"]=acne ["pigmentation"]=pigmentation ["enlarged pores"]=enlarged-pores ["fine lines and wrinkles"]=fine-lines-wrinkles ["dark eye circle"]=dark-eye-circles ["face contouring"]=face-contouring ["face lifting"]=face-lifting ["aging"]=aging ["body slimming"]=body-slimming ["hair loss"]=hair-loss ["tattoo removal"]=tattoo-removal ["birthmark"]=birthmark ["vascular lesion"]=vascular-lesions ["excessive sweating"]=excessive-sweating )
for k in "${!C[@]}"; do cp "$SRC/concerns/$k.jpg" "$DST/concerns/${C[$k]}.jpg"; done
```

- [ ] **Step 2: Point `image:` fields at the `.jpg` files** — in `treatments.ts`, set every category + ultherapy `image` to `/images/treatments/<slug>.jpg`. In `concerns.ts`, set renamed ones to `/images/concerns/<slug>.jpg`. (coolsculpting/onda/dermav/double-eyelid keep existing covers unless replaced.)

- [ ] **Step 3: Delete orphaned old covers** for any `image` you repointed.

```bash
cd /c/Users/chris/Desktop/blueprint/kaiteki/public/images/treatments
rm -f pico-laser.webp hifu.png ultherapy.png radiofrequency.png microneedling.png
```
(Only remove files no longer referenced — grep first: `grep -r "hifu.png" ../../../content`.)

- [ ] **Step 4: Validate**

Run: `pnpm validate:content`
Expected: image errors gone for renamed covers (still 2 dangling-parent errors until Task 8).

- [ ] **Step 5: Commit**

```bash
git add public/images content/data/treatments.ts content/data/concerns.ts
git commit -m "feat(taxonomy): new concern + category cover images"
```

---

## Task 4: Nested routing + shared TreatmentView

**Files:**
- Create: `components/TreatmentView.tsx` (extracted body of current `[slug]/page.tsx`)
- Create: `app/treatments/[category]/page.tsx`
- Create: `app/treatments/[category]/[machine]/page.tsx`
- Delete: `app/treatments/[slug]/page.tsx`

**Interfaces:**
- Consumes: `categoryTreatments`, `machinesOf`, `treatmentByPath`, `treatmentHref` (Task 2).
- Produces: `<TreatmentView t={t} trail={[…]} />` where `trail` is the breadcrumb array; renders sections/rail exactly as today plus a "Machines / devices" block linking `machinesOf(t.slug)`.

- [ ] **Step 1: Extract `TreatmentView`** — move the render body (lines ~51–213 of current `[slug]/page.tsx`) into `components/TreatmentView.tsx` as `export function TreatmentView({ t, trail }: { t: Treatment; trail: { label: string; href?: string }[] })`. Replace the hard-coded `Breadcrumbs items={[…]}` with `items={trail}`. Change related links + any machine links to use `treatmentHref(r)` instead of `/treatments/${r.slug}`. After the sections, when `machinesOf(t.slug).length`, render a list linking each machine via `treatmentHref`.

- [ ] **Step 2: Category route** `app/treatments/[category]/page.tsx`

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TreatmentView } from "@/components/TreatmentView";
import { categoryTreatments, treatmentByPath } from "@/content/data/treatments";

export const dynamicParams = false;
export function generateStaticParams() {
  return categoryTreatments().map((t) => ({ category: t.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const t = treatmentByPath(category);
  if (!t) return {};
  return { title: `${t.name} in Malaysia — What It Involves, Suitability & Branches`, description: t.summary, alternates: { canonical: `/treatments/${t.slug}` } };
}
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const t = treatmentByPath(category);
  if (!t) notFound();
  return <TreatmentView t={t} trail={[{ label: "Treatments", href: "/treatments" }, { label: t.name }]} />;
}
```

- [ ] **Step 3: Machine route** `app/treatments/[category]/[machine]/page.tsx`

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TreatmentView } from "@/components/TreatmentView";
import { treatments, treatmentByPath, treatmentBySlug } from "@/content/data/treatments";

export const dynamicParams = false;
export function generateStaticParams() {
  return treatments.filter((t) => t.parent).map((t) => ({ category: t.parent!, machine: t.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ category: string; machine: string }> }): Promise<Metadata> {
  const { category, machine } = await params;
  const t = treatmentByPath(category, machine);
  if (!t) return {};
  return { title: `${t.name} in Malaysia — What It Involves, Suitability & Branches`, description: t.summary, alternates: { canonical: `/treatments/${category}/${t.slug}` } };
}
export default async function MachinePage({ params }: { params: Promise<{ category: string; machine: string }> }) {
  const { category, machine } = await params;
  const t = treatmentByPath(category, machine);
  if (!t) notFound();
  const parent = treatmentBySlug(category)!;
  return <TreatmentView t={t} trail={[{ label: "Treatments", href: "/treatments" }, { label: parent.name, href: `/treatments/${parent.slug}` }, { label: t.name }]} />;
}
```

- [ ] **Step 4: Delete old route** — `rm app/treatments/[slug]/page.tsx` (and remove the now-empty `[slug]` dir).

- [ ] **Step 5: Build**

Run: `pnpm build`
Expected: PASS. Static params include `/treatments/hifu/ultherapy`, `/treatments/fat-freezing/coolsculpting`, `/treatments/microwave-contouring/onda`, `/treatments/vascular-pigment-laser/dermav` (last two only after Task 8; until then those machines' parents don't exist as categories → they will 404 by design, acceptable mid-plan). Prefer running this task's build **after Task 8**, or temporarily comment the two not-yet-created parents. Note the ordering in the commit message.

- [ ] **Step 6: Commit**

```bash
git add app/treatments components/TreatmentView.tsx
git commit -m "feat(taxonomy): nested category/machine routes + shared TreatmentView"
```

---

## Task 5: Redirects for moved URLs

**Files:**
- Modify: `next.config.ts` (add `redirects()`)
- Create: `scripts/test-redirects.mts` (asserts the map)
- Modify: `package.json` (`"test:redirects"`)

- [ ] **Step 1: Add `redirects()` to `next.config.ts`** — merge with any existing config:

```ts
async redirects() {
  return [
    { source: "/treatments/ultherapy", destination: "/treatments/hifu/ultherapy", permanent: true },
    { source: "/treatments/coolsculpting", destination: "/treatments/fat-freezing/coolsculpting", permanent: true },
    { source: "/treatments/onda", destination: "/treatments/microwave-contouring/onda", permanent: true },
    { source: "/treatments/dermav", destination: "/treatments/vascular-pigment-laser/dermav", permanent: true },
    { source: "/treatments/tattoo-removal", destination: "/concerns/tattoo-removal", permanent: true },
  ];
},
```

- [ ] **Step 2: Redirect assertion test** `scripts/test-redirects.mts`

```ts
import config from "../next.config.ts";
const want: Record<string, string> = {
  "/treatments/ultherapy": "/treatments/hifu/ultherapy",
  "/treatments/coolsculpting": "/treatments/fat-freezing/coolsculpting",
  "/treatments/onda": "/treatments/microwave-contouring/onda",
  "/treatments/dermav": "/treatments/vascular-pigment-laser/dermav",
  "/treatments/tattoo-removal": "/concerns/tattoo-removal",
};
const rules = await (config as { redirects: () => Promise<{ source: string; destination: string; permanent: boolean }[]> }).redirects();
const errs: string[] = [];
for (const [source, destination] of Object.entries(want)) {
  const r = rules.find((x) => x.source === source);
  if (!r) errs.push(`missing redirect ${source}`);
  else if (r.destination !== destination) errs.push(`${source} → ${r.destination} (want ${destination})`);
  else if (!r.permanent) errs.push(`${source} not permanent (301)`);
}
if (errs.length) { console.error("✗ redirects:\n" + errs.map((e) => "  - " + e).join("\n")); process.exit(1); }
console.log(`✓ ${Object.keys(want).length} redirects OK`);
```
Add to `package.json`: `"test:redirects": "node --experimental-strip-types scripts/test-redirects.mts",`

- [ ] **Step 3: Run**

Run: `pnpm test:redirects`
Expected: `✓ 5 redirects OK`

- [ ] **Step 4: Commit**

```bash
git add next.config.ts scripts/test-redirects.mts package.json
git commit -m "feat(taxonomy): 301s for moved treatment URLs"
```

---

## Task 6: Nav, cards & concern group hubs for the new structure

**Files:**
- Modify: `components/cards.tsx` (`TreatmentCard` href → `treatmentHref(t)`)
- Modify: `components/SiteHeader.tsx` (mega + mobile: nested treatment links via `treatmentHref`; concern `groupHref` for 4 groups; category links only, machines indented under category)
- Modify: `components/TreatmentsMenu.tsx` (`href={treatmentHref(t)}`)
- Modify: `app/treatments/page.tsx` (already category-only via `treatmentsByCategory`; verify machines excluded, add machine sub-links under each category card if desired)
- Modify: `app/concerns/page.tsx` (`groupHref` for 4 groups)
- Modify: `app/concerns/skin/page.tsx`, `app/concerns/face/page.tsx` (unchanged logic; confirm still compile)
- Create: `app/concerns/eyes/page.tsx`, `app/concerns/hair-body/page.tsx`

- [ ] **Step 1: `cards.tsx`** — import `treatmentHref`; change both `href={`/treatments/${t.slug}`}` occurrences in `TreatmentCard` to `href={treatmentHref(t)}`.

- [ ] **Step 2: `TreatmentsMenu.tsx`** — import `treatmentHref`; change `href={`/treatments/${t.slug}`}` to `href={treatmentHref(t)}`. (Still shows first 6 categories — `treatments.slice(0,6)` now yields categories since machines still in array; change to `categoryTreatments().slice(0, 6)`.)

- [ ] **Step 3: `SiteHeader.tsx`** — update `groupHref`:

```ts
const groupHref: Record<string, string> = {
  Skin: "/concerns/skin",
  Face: "/concerns/face",
  Eyes: "/concerns/eyes",
  "Hair & Body": "/concerns/hair-body",
};
```
In both mega and mobile treatment lists, `treatmentsByCategory(cat)` now returns categories only — render each category link with `href={treatmentHref(t)}` (categories → `/treatments/[slug]`), and under each, optionally `machinesOf(t.slug).map(m => …)` indented with `href={treatmentHref(m)}`. Import `machinesOf`, `treatmentHref`.

- [ ] **Step 4: `app/concerns/page.tsx`** — replace the 2-entry `groupHref` with the 4-entry map from Step 3.

- [ ] **Step 5: Create `app/concerns/eyes/page.tsx`** (mirror `skin/page.tsx`, group "Eyes"):

```tsx
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConcernCard } from "@/components/cards";
import { concernsByGroup } from "@/content/data/concerns";

export const metadata: Metadata = {
  title: "Eye Concerns",
  description: "Doctor-reviewed guides to concerns around the eyes, such as dark eye circles.",
  alternates: { canonical: "/concerns/eyes" },
};

export default function EyesCategory() {
  return (
    <Container className="py-10 sm:py-12">
      <Breadcrumbs items={[{ label: "Concerns", href: "/concerns" }, { label: "Eyes" }]} />
      <div className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-espresso sm:text-4xl">Eye concerns</h1>
        <p className="prose mt-4 text-lg leading-relaxed text-ink-700">
          Concerns around the delicate eye area, explained in plain language and reviewed by a doctor.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {concernsByGroup("Eyes").map((c) => (
          <ConcernCard key={c.slug} c={c} />
        ))}
      </div>
    </Container>
  );
}
```

- [ ] **Step 6: Create `app/concerns/hair-body/page.tsx`** — same as Step 5 with `title: "Hair & Body Concerns"`, canonical `/concerns/hair-body`, heading "Hair & body concerns", `concernsByGroup("Hair & Body")`, breadcrumb label "Hair & Body".

- [ ] **Step 7: Build**

Run: `pnpm build`
Expected: PASS; `/concerns/eyes` and `/concerns/hair-body` in the route list; nav renders nested treatment links.

- [ ] **Step 8: Commit**

```bash
git add components app/concerns app/treatments/page.tsx
git commit -m "feat(taxonomy): nav, cards & concern hubs for 8 groups + nested links"
```

---

## Task 7: Move Tattoo Removal treatment → concern

**Files:**
- Modify: `content/data/treatments.ts` (remove the `tattoo-removal` treatment entry; drop it from any `related`/`concerns` arrays that reference it)
- Modify: `content/data/concerns.ts` (add `tattoo-removal` concern)

- [ ] **Step 1: Remove the `tattoo-removal` treatment** entry (slug `tattoo-removal`, currently category Pigment & Resurfacing). Grep for `"tattoo-removal"` across `content/data` and remove it from `related:`/`concerns:` lists (e.g. pico-laser's `related` includes it — replace with a still-valid slug or drop).

- [ ] **Step 2: Add the concern** to `concerns.ts` (group "Skin"), authored to the concern template (see Task 9 for the concern skeleton). Minimum fields:

```ts
{
  slug: "tattoo-removal",
  name: "Tattoo Removal",
  group: "Skin",
  image: "/images/concerns/tattoo-removal.jpg",
  summary: "Fading or removing unwanted tattoo ink, assessed by a doctor before any treatment.",
  leadAnswer: "Tattoo removal is the gradual fading of tattoo ink using laser energy that breaks pigment into smaller particles the body may clear over time. Ink type, colour, depth and skin type all affect suitability and the number of sessions, which a doctor assesses at consultation.",
  treatments: ["pico-laser"],
  reviewedBy: "dr-chew-yuhhui",
  lastReviewed: "2026-07-13",
  // sections + faqs authored per the concern template (Task 9)
}
```

- [ ] **Step 3: Validate + typecheck**

Run: `pnpm validate:content && pnpm typecheck`
Expected: PASS (no dangling `tattoo-removal` treatment references; concern resolves; redirect from Task 5 covers the old URL).

- [ ] **Step 4: Commit**

```bash
git add content/data/treatments.ts content/data/concerns.ts
git commit -m "feat(taxonomy): move tattoo removal from treatment to concern"
```

---

## Task 8: Author the 8 new category pages

Each is a new `Treatment` entry (parent-less) authored to the `pico-laser` template: `summary`, `leadAnswer` (40–60 words), 6–8 `sections`, 3–4 `faqs`, `machineNames`, `concerns`, `related`, compliance fields. This task creates `microwave-contouring` and `vascular-pigment-laser`, which resolves the two dangling parents from Task 2.

**Files:** Modify `content/data/treatments.ts` (append 8 entries).

**Section template** (mirror pico-laser headings, adapt): *What is {name}?* · *How it works* · *What it may help address* (with `list`) · *Suitability & who should avoid it* · *The session at Kaiteki* · *Downtime & aftercare* · *Risks & side effects* · *Sessions & cost factors*. Name the devices from the machine-sections table inside "How it works"/"The session".

- [ ] **Step 1: `fotona-laser`** — group "Lasers", image `/images/treatments/fotona-laser.jpg`, machineNames `["Fotona SP Dynamis / TimeWalker (4D, NightLase, LipLase, SmoothEye, TightSculpting)"]`, concerns e.g. `["fine-lines-wrinkles","aging","face-lifting"]`, related `["pico-laser","hifu"]`. Distinguish clearly from Fotona PQX (which is a Pico laser). Compliance per Global Constraints.

- [ ] **Step 2: `vascular-pigment-laser`** — group "Lasers", image `…/vascular-pigment-laser.jpg`, machineNames `["Pro Yellow (Quadrostar 577nm)","M22 IPL"]`, concerns `["vascular-lesions","pigmentation"]` *(vascular-lesions created in Task 9 — author Task 9 first or accept transient validator error)*, related `["pico-laser","dermav"]`. This is the **parent of `dermav`**.

- [ ] **Step 3: `resurfacing-laser`** — group "Lasers", image `…/resurfacing-laser.jpg`, machineNames `["Fractional CO2"]`, concerns `["enlarged-pores","fine-lines-wrinkles","acne"]`, related `["pico-laser","microneedling"]`.

- [ ] **Step 4: `microwave-contouring`** — group "Body & Slimming", image `…/microwave-contouring.jpg`, machineNames `["Onda Coolwaves"]`, concerns `["body-slimming"]`, related `["fat-freezing","muscle-stimulation"]`. **Parent of `onda`.**

- [ ] **Step 5: `muscle-stimulation`** — group "Body & Slimming", image `…/muscle-stimulation.jpg`, machineNames `["Schwarzy (Em-Fit)"]`, concerns `["body-slimming"]`, related `["fat-freezing","microwave-contouring"]`.

- [ ] **Step 6: `dermal-fillers`** — group "Injectables", image `…/dermal-fillers.jpg`, machineNames `["Juvederm","Restylane","Belotero"]` (HA fillers only — Radiesse/Ellanse live on bio-stimulator), concerns `["face-contouring","fine-lines-wrinkles"]`, related `["skin-booster","bio-stimulator"]`.

- [ ] **Step 7: `facial-treatments`** — group "Facials", image `…/facial-treatments.jpg`, machineNames `["Hydrafacial","Silkpeel","Kaiteki Signature Facial"]`, concerns `["acne","enlarged-pores","pigmentation"]`, related `["pico-laser","skin-booster"]`.

- [ ] **Step 8: `laser-hair-removal`** — group "Hair Removal", image `…/laser-hair-removal.jpg`, machineNames `["Alma (IPL + RF)"]`, concerns `[]` (no matching concern) — set `concerns: []`, related `["exosome-therapy"]` or nearest.

- [ ] **Step 9: Validate + typecheck + build**

Run: `pnpm validate:content && pnpm typecheck && pnpm build`
Expected: `✓ content OK — 21 treatments` (14 −1 tattoo +8 new = 21), zero dangling parents, all category + machine routes prerender including `/treatments/microwave-contouring/onda` and `/treatments/vascular-pigment-laser/dermav`.

- [ ] **Step 10: Commit**

```bash
git add content/data/treatments.ts
git commit -m "feat(content): author 8 new treatment category pages"
```

---

## Task 9: Author the 3 new concern pages

**Files:** Modify `content/data/concerns.ts` (append `birthmark`, `vascular-lesions`, `excessive-sweating`; tattoo-removal already added in Task 7).

**Concern template** (mirror existing concerns, e.g. `hair-loss`): `summary`, `leadAnswer`, `sections` (*What is …* · *Common causes*/*Types* · *When to see a doctor* · *How it may be assessed/approached*), 3 `faqs`, `treatments` list, `reviewedBy`, `lastReviewed`. Concern copy has **no** kkliu field (see `Concern` type).

- [ ] **Step 1: `birthmark`** — group "Skin", image `/images/concerns/birthmark.jpg`, treatments `["pico-laser","vascular-pigment-laser"]`. Factual, no removal guarantee.

- [ ] **Step 2: `vascular-lesions`** — group "Skin", image `…/vascular-lesions.jpg`, treatments `["vascular-pigment-laser","dermav"]`.

- [ ] **Step 3: `excessive-sweating`** — group "Skin", image `…/excessive-sweating.jpg`, treatments `[]` or nearest offered (no dedicated treatment page — set `treatments: []`). Explain it's assessed at consultation.

- [ ] **Step 4: Validate + typecheck**

Run: `pnpm validate:content && pnpm typecheck`
Expected: `✓ content OK` — 14 concerns, all images resolve, all treatment refs resolve.

- [ ] **Step 5: Commit**

```bash
git add content/data/concerns.ts
git commit -m "feat(content): author birthmark, vascular lesions & excessive sweating concerns"
```

---

## Task 10: Author machine sections for existing categories + final verification

Enrich the existing category pages so the named machines actually appear as sections (SEO + patient clarity), and run the full gate.

**Files:** Modify `content/data/treatments.ts` (add/extend `sections` on `hifu`, `fat-freezing`, `radiofrequency`, `microneedling`, `skin-booster`, `bio-stimulator` to describe their `machineNames` as `§` sections; `pico-laser` already deep).

- [ ] **Step 1: Add a machine-context section** to each listed category — one `section` per category summarising the named devices (e.g. HIFU → "Devices we use" naming Ultracel Q, Lifthera, with the Ultherapy child-page link handled by the machine block in `TreatmentView`). Keep compliant, factual.

- [ ] **Step 2: Full verification gate**

Run: `pnpm validate:content && pnpm typecheck && pnpm test:redirects && pnpm build && pnpm lint`
Expected: all PASS. Manually spot-check: `/treatments` shows 8 groups with category cards only; `/treatments/hifu` links to `/treatments/hifu/ultherapy`; `/treatments/hifu/ultherapy` breadcrumbs `Treatments › HIFU › Ultherapy`; `/concerns` shows 4 groups; `/concerns/tattoo-removal` renders; old `/treatments/ultherapy` 301s.

- [ ] **Step 3: Commit**

```bash
git add content/data/treatments.ts
git commit -m "feat(content): machine-context sections on existing category pages"
```

---

## Self-review notes (author)

- **Spec coverage:** data model §3→T2; treatment taxonomy §4→T2/T7/T8/T10; concerns §5→T2/T7/T9; routing §6→T4/T6; images §7→T3; redirects §8→T5; nav/schema §9→T6 (sitemap deferred — none exists yet, noted); compliance §10→Global Constraints + every content task; deferred items §11 not built. ✓
- **Ordering caveat:** Tasks 8 & 9 have a mutual reference (vascular-pigment-laser ↔ vascular-lesions/dermav). `validate:content` may show transient dangling refs between T2 and T8/T9; the gate that must be green is **T8 Step 9 and T10 Step 2**. Do T7→T9→T8, or accept transient validator errors, whichever the executor prefers.
- **Type consistency:** `treatmentHref`, `categoryTreatments`, `machinesOf`, `treatmentByPath` names used identically in T4/T6. `treatmentsByCategory` redefined to exclude machines — all three consumers (hub, SiteHeader, TreatmentsMenu) updated in T6.
- **No new dependencies** (ponytail): validators use Node's built-in type-stripping; fall back only to an already-installed runner.
