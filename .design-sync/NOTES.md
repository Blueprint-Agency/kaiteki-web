# design-sync notes — Kaiteki

Repo-specific gotchas for syncing `components/` to claude.ai/design. Read before any re-sync.

## Shape & setup

- **This is a Next.js app, not a standalone component library.** The converter runs in
  **synth-entry mode** (no `dist/`; `package.json` has no `main`/`module`/`exports`). It
  re-exports every `components/*.tsx` and discovers PascalCase value exports (~27).
- **Component source root:** `components/` (`cfg.srcDir`). `@/*` maps to repo root
  (`cfg.tsconfig` → `tsconfig.dssync.json`, which extends the app tsconfig).
- **Next-runtime shims** (`.design-sync/shims/`, committed): `next/link` → plain `<a>`,
  `next/image` → plain `<img>` (honours `fill`). Wired via `paths` in `tsconfig.dssync.json`
  so esbuild swaps them; the app is untouched.
- **CSS:** `scripts/ds-sync-css.mjs` compiles `app/globals.css` (Tailwind v4) → a static
  `.design-sync/.cache/ds-compiled.css`, pointed at by `cfg.cssEntry`. Wired as `cfg.buildCmd`
  — **run it before the converter on every (re)sync.** Tailwind auto-detects content from the
  repo root (respects `.gitignore`, so `well-known/` is excluded).
- **Fonts:** Schibsted Grotesk (display) + Source Serif 4 (serif), normally injected by
  `next/font/google` at runtime. `ds-sync-css.mjs` defines the `--font-display-face` /
  `--font-serif-face` vars the tokens reference; the actual faces are self-hosted via
  `cfg.extraFonts` (see Fonts section once resolved).

## CSS safelist (why the compiled stylesheet is large)

- The shipped `styles.css` is **static** — designs on claude.ai/design receive it as-is and
  do NOT run Tailwind JIT, so only classes present at compile time work. `ds-sync-css.mjs`
  therefore safelists a bounded set of common layout/spacing/type utilities (+ `sm/md/lg/xl`
  variants) via a generated `@source` content file, on top of the app's own classes. This
  is what lets the design agent lay out freely on-brand. Compiled CSS ≈ 114 KiB.
- To widen/narrow the toolkit, edit the `base`/`responsive` arrays in `scripts/ds-sync-css.mjs`.

## Conventions header

- `.design-sync/conventions.md` (wired via `cfg.readmeHeader`) is prepended to the README and
  read by the design agent. It names the real brand-token classes, the WhatsApp-only CTA rule,
  and which components read live data. On re-sync, re-validate its class/token/component names
  against the fresh build (don't rewrite it; report drift).

## Config overrides (grid presentation)

- Wide cards/layouts use `cfg.overrides.<Name>.cardMode`: `column` for full-width cards
  (TreatmentCard, ConcernCard, BranchCard, DoctorCard, SeeAllCard, WhatsAppButton, Container,
  Dandelion, SiteHeader) and `single` + `primaryStory: DesktopFloating` for StickyWhatsApp
  (fixed-position escape). Derived from validate's `[GRID_OVERFLOW]` `suggestedOverride`.

## Grouping

- All components land in the flat `general` group — files are flat in `components/`, no
  `@category` JSDoc, no docs tree. To improve: add `@category` JSDoc to sources, or map
  `cfg.docsMap.<Name>` to category stubs. Deferred for the first sync.

## Preview authoring notes (folded from wave 1)

- **Capture viewport** defaults to **900×700**; cells wider than ~900px are *clipped, not
  scaled*. Wide/full-layout components (SiteHeader, SiteFooter, BranchesExplorer,
  DoctorsSlider, Container) use a `cfg.overrides.<Name>` `cardMode`/`viewport` so they
  render whole (see config `overrides`).
- **Dandelion** seeds are `opacity:0` until app JS adds `.reveal-ready` (never present in
  the capture harness) — its preview scopes a small `<style>` to simulate the revealed
  state. Legitimate preview authoring, not a workaround.
- **StickyWhatsApp** renders `position:fixed` nodes; its preview establishes a containing
  block with `transform: translateZ(0)` so both the desktop FAB and mobile bar render
  inside the card. No override needed.
- **Icons** paint via `currentColor` — set `color` on a wrapping element and let the icon
  inherit. Previews show them ≥48px on a porcelain card so nothing reads as a tiny dot.
- **Card/photo images**: previews pass on-brand warm-gradient data-URIs (never `/images/…`,
  which don't resolve); the `next/image` shim also falls back to a warm placeholder on error.

## Re-sync risks (watch-list)

- **New `next/*` usage in a component** (e.g. `next/navigation`, `next/dynamic`, `next/font`
  imported inside a component) will not resolve — add a shim in `.design-sync/shims/` +
  `tsconfig.dssync.json` `paths`, or a `cfg.provider`.
- **New Tailwind utility classes** are picked up automatically by the CSS recompile, but a
  brand-token rename in `app/globals.css` (`@theme`) must stay in sync with any hard-coded
  face-var names in `ds-sync-css.mjs`.
- **Card images** use `/images/...` public paths that don't resolve outside the Next server;
  authored previews supply their own inline/placeholder imagery.
- `cfg.cssEntry` output is gitignored (`.cache/`) — a fresh clone must run `cfg.buildCmd`
  before the converter. Fonts (`.design-sync/fonts/`, from `scripts/ds-sync-fonts.mjs`) ARE
  committed, so no refetch is needed on a normal re-sync.
- **Preview `<style>` blocks tied to upstream behaviour**: Dandelion's forced-reveal and
  StickyWhatsApp's containing-block/media-state simulations mirror the components' runtime
  reveal / responsive logic. If that logic changes upstream, revisit those previews.
- **Auto-rendering composite components** (SiteHeader/Footer, BranchesExplorer,
  DoctorsSlider, Placeholder) pull live content data — a data-shape change flows straight
  into their previews; rebuild and re-grade after content edits.
