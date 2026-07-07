# Kaiteki design system — how to build with it

Kaiteki is a Malaysian skin & aesthetic clinic (9 branches). The look is a warm,
quiet "Warm Sanctuary": warm neutrals (espresso / mocha / sand / porcelain), a single
saturated action colour (WhatsApp green), a display grotesk + a reading serif.

## Setup — no provider needed
Components render standalone: import from the bundle (`window.Kaiteki.<Name>`) and load
`styles.css`. There is **no theme/router/i18n provider to wrap** — styling comes entirely
from `styles.css` (brand tokens + self-hosted fonts + component CSS). Put page content on
the page background and let the fonts inherit:

```jsx
<div className="bg-page text-ink-900 font-sans min-h-screen">
  <Kaiteki.SiteHeader />
  <main className="mx-auto max-w-6xl px-6 py-12">{/* … */}</main>
  <Kaiteki.SiteFooter />
</div>
```

`next/link` and `next/image` are shimmed to a plain `<a>` / `<img>` in this bundle — pass
real, reachable image URLs to card components (`image` / `photo` fields); a `/images/…`
path that can't load falls back to a warm placeholder, never a broken-image glyph.

## Styling idiom — Tailwind utilities on a custom brand theme
Style with Tailwind classes bound to brand tokens. Use these names (they exist in the
stylesheet — do not invent colour names):

| Role | Classes |
|---|---|
| Page / card surfaces | `bg-page` (warm near-white page) · `bg-surface` (white cards) · `bg-tint` (subtle warm band) |
| Accent fills (large only) | `bg-sand` · `bg-porcelain` · `bg-mocha` · `bg-espresso` (dark footer) |
| Text | `text-espresso`/`text-ink-900` (primary) · `text-ink-700` (secondary) · `text-ink-500` (muted) · `text-ink-on-dark` (on espresso) · `text-accent` (eyebrows, icons) |
| The ONE action colour | WhatsApp green — `bg-cta` / `text-cta`. Reserve it for the WhatsApp CTA; nothing else should own the brightest pixel. |
| Hairlines / borders | `border-hairline` (1px warm rule); cards lift to `hover:border-mocha` |
| Radius | `rounded-md` · `rounded-lg` · `rounded-xl` (cards) · `rounded-full` (pills/CTA) |
| Type | default sans = Schibsted Grotesk (UI/display); `font-serif` = Source Serif 4 (long-form prose); weights `font-medium` / `font-semibold` / `font-bold` |

Small text must stay on `text-ink-*` / `text-espresso` (AA-safe). `sand`/`mocha`/`porcelain`
pass contrast only as large fills, not small text.

## Conversion is WhatsApp-only
There is no booking form. Every call-to-action is `WhatsAppButton` (inline) or
`StickyWhatsApp` (floating) — a pre-filled click-to-WhatsApp link. Use them for CTAs.

## Content components read live data
`SiteHeader`, `SiteFooter`, `BranchesExplorer`, `DoctorsSlider` take no props — they render
the clinic's real nav, 9 branches, and doctor roster from bundled data. The card components
(`TreatmentCard`, `ConcernCard`, `BranchCard`, `DoctorCard`, `SeeAllCard`) take a data object;
compose them in a responsive grid.

## Where the detail lives
Read `styles.css` (and its `@import`s: `_ds_bundle.css`, `fonts/fonts.css`) for the full
token set, and each component's `<Name>.prompt.md` (usage + examples) and `<Name>.d.ts`
(props) before composing. The brand design spec is in `guidelines/`.

## Idiomatic example
```jsx
<section className="bg-page px-6 py-16">
  <Kaiteki.SectionHeading
    eyebrow="Pigment & Resurfacing"
    title="Treatments guided by qualified doctors"
    intro="Every plan begins with a consultation, so care is matched to your skin."
  />
  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <Kaiteki.TreatmentCard t={picoLaser} />
    <Kaiteki.TreatmentCard t={skinBooster} />
    <Kaiteki.SeeAllCard href="/treatments" label="View all treatments" />
  </div>
  <div className="mt-10"><Kaiteki.WhatsAppButton size="lg" /></div>
</section>
```

This is a YMYL medical brand: keep copy descriptive and compliant — no efficacy guarantees,
superlatives, before/after, or testimonials.
