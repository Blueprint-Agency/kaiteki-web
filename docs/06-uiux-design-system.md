# 06 — UI/UX & Design System

> **Purpose.** The binding design specification for the kaiteki.my rebuild: the aesthetic direction, design tokens, component library, page-template layouts, responsive rules, accessibility standard, and motion system. It exists so that `docs/07` can implement design as code (tokens → Tailwind/CSS variables) and so every page ships looking like one deliberate product — visibly better than the competitor set in `docs/03`.
> **Scope.** Design direction & rationale, foundations (color/type/space/elevation/iconography/photography), motion, component specs, per-template layouts, responsive behavior, WCAG 2.2 AA accessibility, and performance-as-design guardrails. Copy rules live in `docs/05 §2`; nav structure and page inventory are locked in `docs/04 §3–§4`; implementation mechanics (Tailwind config, font loading, CI gates) are `docs/07`.
> **How it satisfies `docs/02`.** §2 CWV constraints are encoded as design rules (one preloaded LCP hero, aspect-ratio reservations, ≤2 font families via `next/font`, CLS-reserved embeds, sticky-not-interstitial WhatsApp CTA); §6/§7 internal-linking and E-E-A-T furniture (bylines, credentials, breadcrumbs) are first-class components; §8 compliance constraints (no before/after, no testimonials, KKLIU/MMC footer) are designed in, not bolted on. Where design ambition and Malaysian medical-advertising law conflict, **the law wins**.
> **Date:** 2026-07.

---

## 1. Design direction

### 1.1 The brief in one line

A design that reads **clinical trust + calm modernity** — premium enough to justify aesthetic-medicine prices, medical enough to feel governed, and calmer than every competitor. Mobile-first: Malaysian aesthetic-treatment research is overwhelmingly mobile, and the single conversion is a WhatsApp tap.

### 1.2 Primary direction — **"Warm Sanctuary"** (warm-luxury-spa)

> **Direction confirmed by the client 2026-07** (register: brand; picked "warm luxury spa" over the earlier evergreen "Quiet Clinic" proposal). This section supersedes that proposal: the *ideas* survive (space-as-luxury, the clinical-ledger trust system, evidence-over-aspiration, one-green-CTA) but the palette is now the client's **warm neutrals** (§2.1) and the register is warmer and more indulgent. Captured in `PRODUCT.md` / `DESIGN.md`. Anti-references: salon-glam, sterile-hospital, generic-SaaS, cluttered-competitor.

*Kaiteki* (快適) is Japanese for **comfort**. "Warm Sanctuary" takes the brand's own name seriously: the calm of a considered treatment room in warm daylight — espresso and taupe neutrals, generous space, boutique-spa care — fused with **verifiable medicine** (credentials, registrations, and review dates treated as design objects, not fine print). Reference feel: Aesop / Tatcha material restraint + boutique-hotel warmth; never salon-glam.

- **Warmth is the luxury; space is the restraint.** Competitors signal "premium" with gold foil and density (Cleo, BW). Kaiteki signals it with warm materials and room to breathe: warm-neutral surfaces, wide margins, one idea per section, hairline dividers instead of boxes and shadows. Espresso carries real surface area (footers, deep sections) so the palette reads *committed*, not timid beige.
- **The signature element: the clinical ledger.** Every *verifiable fact* — "Medically reviewed by Dr {Name} · MMC {reg} · {date}", KKLIU number + expiry, branch NAP + hours, device registrations — renders in one consistent, mono-spaced, labeled "record" style (§4.6). Compliance furniture becomes the brand: the site *looks* audited. No competitor design treats trust as a visual system (`docs/03 §6` P1 #2/#4).
- **One saturated color on the page: the WhatsApp green CTA.** The palette (§2.1) is warm neutrals precisely so the single conversion action owns the only saturated pixel on every screen — and green pops *harder* against warm browns than against evergreen. Nothing competes with it.
- **Evidence over aspiration.** With before/after galleries and testimonials prohibited (`docs/02 §8.1`), the imagery system (§2.5) is built on what *is* allowed: real clinics, real devices, real doctors, and calm material textures — original photography, no stock (`docs/03 §5` Kaiteki target row).

**Why this beats the set:** Cleo is "premium but dated" (Elementor density, heavy DOM); Premier is polished-but-template; Nexus is modern but generically SaaS-clean; BW is glossy but cluttered and non-compliant (`docs/03 §2–§3`). Nothing in the Malaysian set looks *warm and governed*. "Warm Sanctuary" is a look competitors cannot copy quickly because it is made of their weaknesses: warmth with restraint, compliance-as-design, and performance.

### 1.3 Rejected alternatives (recorded so we don't re-litigate)

1. **Rose-gold beauty glamour** (blush + gold + script accents) — the industry default; codes *salon*, not *clinic*; drags imagery toward aspirational-results territory that MAB restricts; indistinguishable from a dozen KL competitors.
2. **Dark luxury** (near-black + one acid accent) — poor long-form readability for medical content, heavier perceived weight on mobile, and it is a recognizable AI-generated-design cliché; wrong register for YMYL trust.

---

## 2. Foundations (design tokens — the `docs/07` contract)

Token names below are normative; `docs/07` maps them to CSS custom properties / Tailwind theme keys. Values are proposals pending the brand-color confirmation in §10.1.

### 2.1 Color — warm-neutral brand palette (client-confirmed 2026-07)

The brand palette is four warm neutrals supplied by the client, and it harmonises with the existing Kaiteki wordmark (a taupe/mocha logo). Page background is a **warm near-white**; sand/porcelain are alternating section tints, never the whole page. Exactly one component uses `cta` green — the WhatsApp CTA — which pops even harder against warm neutrals.

**Brand anchors (verbatim client swatches):** porcelain `#E4E0E1` · sand `#D6C0B3` · mocha `#AB886D` · espresso `#493628`.

> ⚠️ **Contrast reality of a warm palette:** mocha (`#AB886D`, 3.25:1 on white), sand, and porcelain **fail small-text AA** — they are surface / large-accent / border colours only. Body text uses espresso and the two derived darker browns below. Enforced by the Pa11y/axe gate (§7).

| Token | Hex | Role | Contrast |
|---|---|---|---|
| `--color-espresso` (`ink-900`) | `#493628` | Primary text, display headings, footer bg | ~11:1 on page ✅ |
| `--color-ink-700` | `#5B4636` | Secondary text (derived) | ~8.8:1 ✅ |
| `--color-ink-500` | `#6F5647` | Muted text, captions, ledger values (derived) | ~6.8:1 ✅ AA |
| `--color-ink-on-dark` | `#F1EBE6` | Text on the espresso footer | ~10:1 on espresso ✅ |
| `--color-mocha` | `#AB886D` | Large accents, borders, icons — **not body text** | 3.25:1 (large/UI only) |
| `--color-accent` | `#8A6A4F` | Eyebrows, small icons (derived caramel) | 4.9:1 ✅ AA small |
| `--color-sand` | `#D6C0B3` | Section bands, chips, strong dividers | bg only |
| `--color-porcelain` | `#E4E0E1` | Stronger alternating band / LeadAnswer bg | bg only |
| `--color-page` | `#FCFBFA` | Warm near-white page background | — |
| `--color-tint` | `#F4F0ED` | Subtle alternating section band | bg only |
| `--color-hairline` | `#E7DED6` | 1px rules, card borders, dividers | decorative |
| `--color-cta` | `#0E7A55` | WhatsApp CTA fill (harmonises with wa.me green) | white text ~5.6:1 ✅ |
| `--color-cta-hover` | `#0A5F43` | CTA hover/pressed | white text ~7.9:1 ✅ |
| `--color-success` / `--color-warn` / `--color-error` | `#1A7F4E` / `#8A5A00` / `#B3261E` | Feedback only (rare, form-less) | all ≥4.5:1 ✅ |

Rules: body text sits only on `page`/`surface`/`tint` (never on `sand`/`mocha`); `mocha` is large accents/borders/icons only, never body text; `accent` (caramel) is the smallest warm colour that passes small-text AA, for eyebrows; gradients are banned except a ≤4% espresso tint on hero photo overlays for legibility. Tokens are implemented in **`app/globals.css`** (`@theme`) — docs and code share one source of truth.

> **Token migration note.** Earlier sections of this doc were drafted against evergreen names — read them mapped to the warm palette: `evergreen-600/800` → `espresso` (or `mocha` for accent borders/hover), `washi-50` → `tint`/`porcelain`, `brass-600` → `accent`. §2.1 and `app/globals.css` are authoritative.

### 2.2 Typography

**Two downloaded families, both variable, both OFL via `next/font` (self-hosted, `latin` subset — `docs/02 §2` CLS/fonts):**

| Role | Face | Usage | Weights (variable axis) |
|---|---|---|---|
| Display & UI | **Schibsted Grotesk** | H1–H4, nav, buttons, cards, tables, labels | 400 / 500 / 700 |
| Long-form body | **Source Serif 4** | Article/treatment/concern body prose only | 400 / 600 (+ italics) |
| Ledger (utility mono) | `ui-monospace` system stack (SF Mono/Cascadia/Consolas) | MMC/KKLIU numbers, dates, hours, NAP, `§4.6` ledger | system — **zero download** |

Rationale: a characterful grotesk display avoids both the industry's glamour-serif cliché and the generic-SaaS look of the modern competitor (Nexus); **serif body prose** is the deliberate inversion — journal-like reading credibility for YMYL long-form, rare in this industry. The system-mono ledger costs 0 bytes and *reads* like a record system. Future `/zh`: pair Noto Sans TC (display+UI) / Noto Serif TC (body), loaded only under the `/zh` tree (`docs/02 §2` — English pages never ship CJK glyphs).

**Type scale (fluid `clamp()`, rem):**

| Token | Size (mobile → desktop) | LH | Face/weight |
|---|---|---|---|
| `--type-display` | 2.25 → 3.25rem | 1.12 | Schibsted 700, tracking −1% |
| `--type-h1` | 1.875 → 2.5rem | 1.15 | Schibsted 700 |
| `--type-h2` | 1.375 → 1.75rem | 1.25 | Schibsted 700 |
| `--type-h3` | 1.125 → 1.25rem | 1.3 | Schibsted 500 |
| `--type-body` | 1 → 1.0625rem | 1.65 | Source Serif 4 400 (articles) / Schibsted 400 (UI) |
| `--type-small` | 0.875rem | 1.5 | Schibsted 400 |
| `--type-eyebrow` | 0.75rem, letterspaced +8%, uppercase | 1.2 | Schibsted 500, `brass-600` |
| `--type-ledger` | 0.75–0.8125rem | 1.5 | ui-monospace, `ink-500` |

Measure: body text max **68ch**. One H1 per page (`docs/02 §4`); heading hierarchy mirrors the docs/05 §3 content specs exactly.

### 2.3 Spacing, radius, elevation

- **Space scale (4px base):** `--space-1..16` = 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Sections separate by `--space-12/16` (64/96px desktop, 48/64 mobile) — the whitespace *is* the direction.
- **Radius:** `--radius-s` 4px (inputs, chips), `--radius-m` 10px (cards, images, LeadAnswer), `--radius-pill` 999px (**WhatsApp CTA and filter chips only** — over-rounding everywhere is a generic-AI tell and dilutes the CTA's shape signature).
- **Elevation — hairline-first.** Default separation is a 1px `--color-hairline` border, not a shadow. Only two shadows exist: `--shadow-1` `0 1px 2px rgb(28 36 34 / .08)` (sticky header once scrolled) and `--shadow-2` `0 8px 24px rgb(28 36 34 / .12)` (open mega-menu, mobile drawer, lightbox). Cards never lift on hover (§3).

### 2.4 Iconography

One outline set (Lucide), 1.5px stroke, 20/24px grid, `ink-700` default / `evergreen-600` interactive. The WhatsApp glyph is the official mark, used only inside the CTA components. No emoji in UI, no filled/duotone mixing.

### 2.5 Photography & art direction (compliance-constrained)

Original photography only — no stock, no patient imagery of any kind (`docs/02 §8.1`, `docs/03` Kaiteki target). The shot list is a launch dependency (§10.4):

1. **Clinics** — natural light, uncluttered, straight verticals; one establishing + two detail shots per branch (branch-page uniqueness, `docs/05 §3.3`).
2. **Devices in context** — the actual HIFU/Pico/CoolSculpting units on site, treatment-room framing; these are the treatment-page heroes.
3. **Doctors** — consistent 3:4 portraits, same neutral backdrop tone across all doctors, natural expression, clinical attire (roster coherence = trust).
4. **Calm material b-roll** — water, stone, linen, light-on-wall textures for concern pages and section breaks (the *kaiteki* register without making claims).
5. **Grade:** neutral-warm, low saturation, no beauty filters, no lens flares. Every image slot declares `aspect-ratio` (§8): treatments 4:3, branches 3:2, doctors 3:4, blog 16:9.
6. **Mechanism diagrams** — where physiology can't be photographed (how HIFU layers work), minimal line illustrations: 1.5px `ink-700` stroke on `washi-50`, labeled in Schibsted small caps. Never cartoons, never 3D-render slop.

---

## 3. Motion

Restraint is the system. Motion confirms; it never decorates.

| Token | Value | Used for |
|---|---|---|
| `--dur-1` | 120ms | Hover/focus (color, underline) |
| `--dur-2` | 200ms | Menus, accordion, drawer |
| `--dur-3` | 350ms | Once-per-page hero reveal |
| `--ease-out` | `cubic-bezier(0.2, 0, 0, 1)` | Everything |

- **Animate only `opacity` and `transform`.** Never width/height/top (layout thrash → CLS/INP).
- **What animates:** link underline slide-in, card border-color, chevron rotation, menu/drawer open, a single hero fade-up (8px rise, once, on load — not scroll-triggered cascades).
- **What never animates:** carousels (none exist), parallax, image zoom-on-hover, counters, marquees, scroll-jacking, skeleton shimmer on static pages.
- **`prefers-reduced-motion: reduce`** collapses all transitions to instant state changes — mandatory, tested in the Pa11y gate (`docs/00 §4`).

---

## 4. Component library

All components are Server Components unless marked ⚡ (client). Interactive components ship full keyboard support and visible focus (§7). Internal links are real `<a href>` via `<Link>` (`docs/02 §6.1`).

| # | Component | Spec |
|---|---|---|
| 4.1 | **Header** | 72px (64 mobile), white, 1px hairline bottom; `--shadow-1` + slight compaction after 8px scroll. Left: wordmark (SVG, `ink-900`). Center-right: Treatments ▾, Concerns ▾, Locations, Doctors, About, Blog (`docs/04 §4.1`). Right: compact WhatsApp button (pill, `cta-600`). Skip-link first in DOM. |
| 4.2 | **Mega-menus** ⚡ | Two panels only (Treatments: 5 category columns ×3–5 links + "View all treatments →"; Concerns: 2 columns + category links — exact contents `docs/04 §4.1`). Full-width panel, white, `--shadow-2`, links grouped under `--type-eyebrow` headers. Opens on click/Enter (hover-intent on desktop), closes on Esc/blur-out; arrow-key navigable. Links are server-rendered `<a>` lists (crawlable — the panel is progressive disclosure, not JS-only content). |
| 4.3 | **Mobile drawer** ⚡ | Full-screen sheet from right, `--dur-2`; accordion groups mirroring the two mega-menus + flat links; WhatsApp bar pinned at sheet bottom; body-scroll-lock; focus-trapped; closes on Esc/overlay tap. |
| 4.4 | **Footer** | `washi-50`. 4 columns per `docs/04 §4.2` (Treatments top-8 / Concerns / all 9 branch anchors / Company). Below: the **compliance band** (§4.6 ledger style): operating entity + reg no · KKLIU {no} EXP {date} · MMC statement · PDPA/Privacy · `sameAs` socials. |
| 4.5 | **WhatsApp CTA** | The only `cta-600` element. Desktop: bottom-right pill, 56px height, WhatsApp glyph + "WhatsApp — free consultation". Mobile: full-width bottom bar (56px + `env(safe-area-inset-bottom)`), content padding-bottom reserved so nothing is obscured (CLS-safe). Server-rendered `<a href="https://wa.me/60103818170?text={prefill}">` with branch/treatment-aware pre-fill (`docs/05 §3`); PDPA notice line adjacent on first viewport occurrence (`docs/05 §8.3`). **Never** an interstitial (`docs/02 §2`). |
| 4.6 | **Clinical ledger** *(signature)* | A definition-list block: `--type-eyebrow` label + `--type-ledger` mono value, hairline rules between rows. Variants: **byline** ("MEDICALLY REVIEWED BY / Dr {Name} · MMC {reg} · {date}" + 40px portrait), **branch record** (NAP, hours, phone — byte-identical to GBP), **compliance band** (KKLIU/entity/MMC), **device record** (registration statement). One component, four variants — the trust system of §1.2. |
| 4.7 | **LeadAnswer capsule** | First element under H1 on every treatment/concern/blog page: `washi-50` bg, `--radius-m`, 1px hairline, eyebrow "IN BRIEF" (`brass-600`), 40–60-word answer in `--type-h3`-sized Source Serif. Identical everywhere — recognizable, extractable (`docs/05 §1.3`, `docs/02 §9.3`). Plain HTML in the server payload. |
| 4.8 | **Disclaimer block** | Small `ink-500` text on hairline-topped strip: general-information/not-medical-advice/results-vary (`docs/05 §4.2`). Sits above the footer on YMYL pages. |
| 4.9 | **Breadcrumbs** | `--type-small`, `ink-500`, "›" separators, current page plain text (`docs/04 §5`); middle-truncates on mobile. Paired `BreadcrumbList` JSON-LD comes from the same data (07). |
| 4.10 | **Cards** (treatment/concern/branch/doctor/post) | White, 1px hairline, `--radius-m`; image slot with locked aspect-ratio (§2.5) + `alt` = destination name + intent (`docs/02 §6.2`); Schibsted 500 title; one-line compliant descriptor; hover/focus = border→`evergreen-600` + title underline. **No lift, no zoom, no shadow.** |
| 4.11 | **FAQ accordion** ⚡ | `<h3>` question + button (`aria-expanded`), chevron rotates `--dur-2`. **Answers are always in the server HTML/DOM** (visibility toggled, never lazy-fetched) — crawlable and extractable (`docs/02 §9`). 3–6 items per page (`docs/05 §6`). |
| 4.12 | **Tables** | Hairline rules, `washi-50` zebra, header row Schibsted 500, numerals tabular; mobile: horizontal-scroll wrapper with edge-fade affordance. Used for comparison/mechanism tables (`docs/03 §4` comparison-query gap). |
| 4.13 | **Gallery/lightbox** ⚡ | Branch/clinic photos only. Grid of aspect-locked thumbs; lightbox is `next/dynamic` imported (`docs/02 §2`), focus-trapped, Esc closes, arrows navigate. |
| 4.14 | **Map embed** | Static map image in a reserved 4:3 slot + "Open in Google Maps" link; interactive iframe loads only on explicit tap (CLS + INP + PDPA-friendly; `docs/02 §2` CLS offenders). |
| 4.15 | **Consent banner** ⚡ | Bottom overlay sheet (does not insert into layout → zero CLS), `washi-50`, granular toggles per `docs/05 §8.3`, no pre-ticked boxes; blocks GA4/GTM until consent (`docs/02 §12.13`). |
| 4.16 | **404** | Calm: "This page doesn't exist." + search-free recovery — links to the five hubs + WhatsApp. Real 404 status (`docs/04 §3`). |

---

## 5. Page templates

Layouts mirror the docs/05 §3 content specs section-for-section; container 1200px max, 12-col grid, gutters 24px (16 mobile). Alternating white/`washi-50` bands with hairline separators; every template's LCP element is its single preloaded hero image (§8).

### 5.1 Home

```
[Header]
[HERO  white  ────────────────────────────────────────────]
[ H1 + positioning line (docs/05 §3.5) | clinic photo 5:7 ]
[ "MOH-licensed · 9 branches · WhatsApp CTA + PDPA line"  ]  ← ledger-style proof row, not badges
[CONCERN ENTRY  washi  "What brings you in?" — 6–8 concern cards]
[TREATMENTS  white  top-8 treatment cards + View all →]
[DOCTOR TRUST  washi  2–3 portraits + roster ledger + link /doctors]
[BRANCH STRIP  white  9 branches, region-grouped anchors → /locations]
[LATEST GUIDES  washi  3 post cards]
[Footer + compliance band]
```

### 5.2 Treatment page (`/treatments/[slug]`) — master template

```
[Breadcrumbs]
[H1 + LeadAnswer capsule]                       ← answer-first, docs/05 §3.1
[Byline ledger (reviewed by · MMC · date)]
[Hero: device-in-context photo 4:3, preloaded]  ← the LCP element
[Body: two-col ≥1024px — 8-col Source Serif prose + 4-col sticky rail]
  prose: What is → How it works (diagram §2.5.6) → Concerns it may
         address → Suitability → Procedure at Kaiteki → Downtime →
         Risks → Sessions & cost factors → FAQs (accordion) → References
  rail:  availability ledger ("Available at: {branches}") · related
         treatments · WhatsApp CTA card
[Related content modules (docs/04 §6.3)]
[Disclaimer · Compliance band ledger (KKLIU etc.) · Footer]
```

### 5.3 Remaining templates (compact)

| Template | Layout essence |
|---|---|
| **Concern** (`/concerns/[slug]`) | Same skeleton as 5.2, calm-texture hero instead of device; "Treatment options at Kaiteki" is a card grid (the hub role, `docs/04 §6.1`); softer CTA copy (`docs/05 §3.2`). |
| **Concern category** (`/concerns/skin\|face`) | Intro + sub-concern card grid + "how assessment works" band. |
| **Branch** (`/locations/[slug]`) | H1 + unique intro; **branch record ledger** (NAP/hours/phone) top-right; map component; gallery; doctors-here portraits; treatments-here card grid; branch FAQs; branch-prefilled CTA (`docs/05 §3.3`). |
| **Doctor** (`/doctors/[slug]`) | 3:4 portrait left; credential ledger right (MMC, quals, APC, LCP, branches, languages); special interests; auto-listed authored/reviewed content (`docs/05 §3.4`). No promotional copy. |
| **Hubs** (treatments/concerns/locations/doctors/blog) | Eyebrow + H1 + one-paragraph intro; grouped card grids per `docs/05 §3.5`; zero filler content. |
| **Blog post** | Single 68ch column; H1 + byline ledger + LeadAnswer; serif prose; references block; one soft end-link to its pillar; related posts (`docs/05 §3.5`). No price, no hard CTA. |
| **Promotions** | Offer cards with full-terms ledger per card (accuracy/completeness, `docs/05 §3.5`); strictest MAB register. |
| **Contact** | All-branch record ledgers + WhatsApp; PDPA notice; no form at launch. |

---

## 6. Responsive rules

- **Breakpoints:** 360 (design floor) / 480 / 768 / 1024 / 1280 (container max 1200). Mobile-first CSS; test at 360×800 first, not last.
- **Nav:** ≥1024px mega-menus; <1024px drawer (§4.3).
- **CTA:** desktop floating pill → mobile full-width bottom bar (§4.5); thumb-reach is the point.
- **Two-col article layout** collapses at <1024px: rail content re-slots inline (availability ledger after "Procedure", related cards after FAQs) — order defined per template, not left to chance.
- **Tables** scroll horizontally in their own wrapper (never the page body); cards go 4→2→1 columns; hero pairs stack image-under-text.
- **Type** uses the fluid clamp scale (§2.2) — no breakpoint font jumps.

---

## 7. Accessibility — WCAG 2.2 AA (Pa11y CI gate, `docs/00 §4`)

- **Contrast:** all token text pairs ≥4.5:1 (§2.1 table is pre-checked; CI re-verifies via axe).
- **Focus:** `:focus-visible` = 2px `evergreen-600` ring, 2px offset, on *every* interactive element; never `outline: none` without replacement. Focus not obscured by sticky header/CTA (WCAG 2.4.11/12).
- **Targets:** ≥24×24px minimum (2.5.8); primary CTA and nav items ≥44×44.
- **Structure:** landmarks (`header/nav/main/footer`), one `<h1>`, no skipped heading levels (mirrors `docs/02 §4` hierarchy), skip-link, `lang="en-MY"` (later `zh-MY` per subtree).
- **Components:** accordion = button + `aria-expanded` + content in DOM; menus follow the disclosure pattern with Esc/arrow support; drawer and lightbox focus-trap and restore focus on close.
- **Media:** alt discipline per `docs/02 §6.2`/`docs/05` (decorative → `alt=""`); diagrams get text alternatives in prose.
- **Motion:** `prefers-reduced-motion` respected (§3); no autoplaying anything.

---

## 8. Performance guardrails (design rules, not engineering afterthoughts)

| Rule | Budget / requirement |
|---|---|
| One LCP hero per template, `priority`/`preload`-marked, never lazy | AVIF, 1600w max, **≤100KB**; every other image lazy (`docs/02 §2`) |
| Every media slot declares `aspect-ratio` | CLS contribution 0 from media; template CLS ≤ **0.05** |
| Downloaded fonts | **2 variable families**, latin subset, `next/font` self-host; ledger mono = system stack (0KB) |
| No carousels, no autoplay video, no parallax | hero is a static image + text, full stop |
| Client JS is the exception | ⚡ components only (§4); gallery/map/lightbox `next/dynamic`; everything else RSC (`docs/02 §2` INP) |
| Section styling via bg-color + hairlines | no decorative section images, no giant SVG backgrounds |
| Per-template CWV budget (internal, stricter than the pass bar) | LCP ≤ 2.0s · INP ≤ 200ms · CLS ≤ 0.05 at p75; enforced via Lighthouse CI budgets + Unlighthouse sweeps (`docs/00 §4`) |
| Third-party on page | GA4 (consent-gated, `lazyOnload`) and the on-demand map. Nothing else — beat Nexus by *not* shipping a CRM widget (`docs/03 §6` P3 #9) |

---

## 9. Design-QA workflow

1. Tokens land in code first (`docs/07`); no component may use a raw hex/px value — lint enforces token usage.
2. Each template gets a Playwright visual snapshot at 360/768/1280 (the screenshots double as the review artifact per iteration).
3. Every PR touching UI runs: axe/Pa11y (§7), Lighthouse CI budgets (§8), and a reduced-motion smoke check.
4. The **style-approval sample** (`docs/05 §11.7`): build `/treatments/pico-laser` + `/concerns/acne` first, on real copy and real photography, and get client + compliance sign-off on the *rendered pages* before mass production.

---

## 10. Open decisions & recommendations

1. **Brand palette vs. existing logo — ✅ RESOLVED (2026-07).** The client supplied a **warm-neutral palette** (porcelain `#E4E0E1` · sand `#D6C0B3` · mocha `#AB886D` · espresso `#493628`), now the authoritative §2.1 tokens (in `app/globals.css`) and the "Warm Sanctuary" direction (§1.2). It harmonises with the existing Kaiteki wordmark (taupe/mocha), so **no logo recolor needed** — logo (`public/brand/kaiteki-logo.png`, 400×139) + favicon are kept as-is as brand elements. The evergreen proposal is retired. *Remaining check:* the logo is a dark wordmark for light surfaces — commission a light/reversed version for use on espresso sections/footers.
2. **Font pairing sign-off.** Schibsted Grotesk + Source Serif 4 are both OFL (no licensing risk) — confirm brand fit on the style sample; the `/zh` Noto pairing needs its own review at locale launch (§2.2).
3. **Dark mode.** **Recommendation: no at launch** — a medical trust site in this market gains nothing and risks contrast/QA surface doubling. Tokens are semantic, so adding it later is additive.
4. **Photography commissioning (schedule risk).** Original shoots across 9 branches + all doctors are a launch dependency for branch/doctor pages (§2.5). **Recommendation:** brief a single photographer with the §2.5 shot list for consistency; interim launch may use the best legacy-site photos *only* if they meet the no-patient/no-before-after bar — flag each through the `docs/05 §8.2` gate.
5. **Mechanism-diagram scope.** Start with 5 diagrams (HIFU, Pico, CoolSculpting/fat-freezing, RF, microneedling) — the treatments where physics-in-layers is the differentiating explanation; expand by demand.
6. **Per-treatment hero art.** Device-in-context photo vs. calm texture varies by treatment (some devices photograph poorly). Settle on the pico-laser style sample (§9.4) and codify.

---

### Validation spot-map

- `docs/02 §2` CWV → §8 budgets, §4.5 CTA (sticky, no interstitial), §4.14–4.15 CLS reservations, §2.2 `next/font` rules · `docs/02 §6/§7` E-E-A-T/link furniture → §4.6 ledger, §4.9–4.10, §5 link slots · `docs/02 §8` compliance → §1.2 evidence-over-aspiration, §2.5 imagery rules, §4.6/4.8 · `docs/03` beat-the-set → §1.2 rationale, §8 third-party rule · `docs/04 §3–§5` IA/nav/breadcrumbs → §4.1–4.3, §4.9, §5 · `docs/05 §1–§6` content specs → §4.7 LeadAnswer, §5 template orders, §4.11 FAQ · `docs/00 §4` tooling gates → §7, §8, §9.
