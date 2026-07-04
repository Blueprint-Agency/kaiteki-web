# Design

Visual system for kaiteki.my. Source of truth for tokens is `app/globals.css` (`@theme`); this file is the human-readable rationale. Full spec: `docs/06-uiux-design-system.md`.

## Theme

**"Warm Sanctuary"** — a warm-luxury-spa direction (client-chosen, 2026-07; evolves the earlier "Quiet Clinic" proposal in `docs/06` toward more warmth and indulgence while keeping its restraint and its trust-as-design idea). The feeling is a considered treatment room in warm daylight: espresso and taupe neutrals, generous space, one calm green path to WhatsApp. Light only — no dark mode at launch. Color strategy: **committed** — espresso carries real surface area (footer, accents, deep sections), warm neutrals hold the body, and exactly one saturated colour (WhatsApp green) appears per view.

Reference feel: Aesop / Tatcha material restraint and boutique-hotel warmth. Explicitly **not** salon-glam, sterile-hospital, generic-SaaS, or cluttered-competitor (see PRODUCT.md anti-references).

## Color

Client-supplied brand palette (warm neutrals) + derived text inks + the single action green. Contrast-verified; warm mids fail small-text AA and are surface/accent-only.

| Token | Hex | Role |
|---|---|---|
| `--color-espresso` | `#493628` | Primary ink, display headings, footer/deep-section surface |
| `--color-ink-700` | `#5B4636` | Secondary text |
| `--color-ink-500` | `#6F5647` | Muted text, ledger values |
| `--color-ink-on-dark` | `#F1EBE6` | Text on espresso |
| `--color-mocha` | `#AB886D` | Large accents, borders, icons — **never body text** (3.25:1) |
| `--color-accent` | `#8A6A4F` | Smallest AA-safe warm (eyebrows/small icons) |
| `--color-sand` | `#D6C0B3` | Section bands, chips, strong dividers |
| `--color-porcelain` | `#E4E0E1` | Stronger alternating band / LeadAnswer bg |
| `--color-page` | `#FCFBFA` | Warm near-white page |
| `--color-tint` | `#F4F0ED` | Subtle alternating band |
| `--color-hairline` | `#E7DED6` | 1px warm rules, card borders |
| `--color-cta` / `--color-cta-hover` | `#0E7A55` / `#0A5F43` | WhatsApp CTA — the one saturated colour |

Rule: body text only on `page`/`surface`/`tint`; `sand`/`mocha`/`porcelain` are backgrounds/accents; the green is reserved for the conversion action.

## Typography

Two variable families via `next/font` (self-hosted, latin subset), paired on a contrast axis:

- **Schibsted Grotesk** — display, headings, nav, UI, tables, labels. A clean Scandinavian grotesk: refined without the SaaS-Inter default or salon-script cliché.
- **Source Serif 4** — long-form article/treatment/concern body prose only (`.prose`). Journal-like credibility for YMYL medical reading.
- **System mono** (`ui-monospace`) — the "ledger" (MMC/KKLIU numbers, NAP, dates). Zero download; reads like a record.

Neither is on Impeccable's reflex-reject list. Scale is fluid `clamp()`, ≥1.25 steps (`docs/06 §2.2`). Body measure ≤68ch. May be revisited when the full landing page is crafted.

## Spacing, radius, elevation

- 4px base scale; sections separated by generous 64–96px (desktop) — whitespace is part of the luxury.
- Radius: `--radius-s` 4px (inputs/chips), `--radius-m` 10px (cards/images), `--radius-pill` (WhatsApp CTA + chips only).
- Hairline-first: default separation is a 1px warm border, not a shadow. Two shadows only (scrolled header; overlays/lightbox). Cards never lift on hover.

## Components (see docs/06 §4 for full specs)

Header + two mega-menus, mobile drawer, 4-column footer with an espresso **compliance band**, sticky WhatsApp CTA (server-rendered `<a>`, branch/treatment-aware), the **clinical ledger** (byline / branch record / compliance / device variants — the signature trust element), LeadAnswer capsule, disclaimer block, breadcrumbs, treatment/concern/branch/doctor/post cards, FAQ accordion (answers always in server HTML), tables, gallery/lightbox, CLS-reserved map + consent banner, 404.

## Imagery

Original photography only — no stock, **no patient before/after or testimonials** (MAB). Clinics (natural light, uncluttered), devices in context (treatment-page heroes), consistent doctor portraits (3:4), calm material b-roll (water/stone/linen), minimal mechanism line-diagrams. Every slot declares `aspect-ratio`. Commissioning across 9 branches + doctors is a launch dependency.

## Motion

Restrained: durations 120/200/350ms, one ease-out curve; animate only `opacity`/`transform`. Link underlines, accordion chevrons, menu/drawer open, one hero fade-up. No carousels, parallax, image-zoom, counters. `prefers-reduced-motion` collapses all to instant — mandatory.

## Accessibility

WCAG 2.2 AA (Pa11y/axe CI gate). `:focus-visible` = 2px espresso ring + 2px offset on every interactive element. Targets ≥24px (primary CTA/nav ≥44px). Landmarks, one `<h1>`, no skipped heading levels. `lang="en-MY"`.
