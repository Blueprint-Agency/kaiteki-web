# CLAUDE.md — Kaiteki Website Rebuild

Guidance for Claude Code (and humans) working in this repo.

## What this project is

A **ground-up rebuild** of [kaiteki.my](https://kaiteki.my) — **Kaiteki Skin Aesthetic Clinic**, a Malaysian medical-aesthetic clinic chain (9 branches) — on a modern **Next.js** stack. The old site is dated static HTML/PHP (see `docs/01-legacy-site-audit.md`).

**Goal:** out-perform aesthetic-industry competitors (benchmark: [cliniccleo.com](https://cliniccleo.com)) on **web design quality** *and* **SEO** — best-practice technical SEO, on-page SEO, internal linking, E-E-A-T, plus 2026 **AEO/GEO** (AI-search) and **local SEO**.

This is a **YMYL / medical** site: health-content accuracy, E-E-A-T, and **Malaysian medical-advertising rules** (MAB, MMC, PHFSA, PDPA) are first-class constraints, not afterthoughts.

## Brand facts (ground truth)

| | |
|---|---|
| Domain | `https://kaiteki.my` — canonical host is **non-www** |
| Branches | 9 (KL, Selangor, Johor, Sabah) — see `docs/01` §1.7 |
| Conversion | **WhatsApp-only** — pre-filled chat to **+60 10-381 8170** ("Book a FREE consultation") |
| Social | Instagram `@kaiteki.my` · Facebook `mykaiteki` |
| Blog | currently WordPress on `blog.kaiteki.my` → **migrating into `/blog`** |

## Locked decisions (from project kickoff)

1. **Stack:** Next.js (App Router) + TypeScript. (Details finalized in `docs/07`.)
2. **Languages:** **English first**, but architecture must be **i18n-ready** (Chinese `/cn`→`/zh` planned later). Don't hard-code English assumptions into routing/data.
3. **Blog:** migrate posts onto the main domain at **`kaiteki.my/blog`** (consolidates authority off the subdomain). Stored **in-repo as MDX**.
4. **Content management:** **none — pure code.** Content lives in the repo (MDX + typed data files). No headless CMS for now.
5. **Conversion:** **WhatsApp-only** (pre-filled deep-links, click-to-WhatsApp / click-to-call). No online booking engine.

> If a future request conflicts with a locked decision, surface it rather than silently diverging.

## Repo layout

```
/                         # Next.js 16.2 app root — App Router (scaffolded)
├─ app/                   # routes (App Router)
├─ public/                # static assets
├─ next.config.ts · tsconfig.json · package.json · postcss.config.mjs  # config
├─ CLAUDE.md              # this file
├─ docs/                  # research, audit, specs, proposals (see docs/README.md)
├─ PRODUCT.md · DESIGN.md # Impeccable brand/design context (register, palette, "Warm Sanctuary")
└─ well-known/            # ⚠️ LEGACY site (git-ignored) — read-only reference only (excluded in tsconfig)
   └─ kaitekim_blog2.sql.gz  # ⚠️ legacy blog WordPress SQL dump — source for the /blog MDX migration
```

- **`well-known/` is the OLD site, git-ignored on purpose** (~750 MB, ~20k files incl. a WordPress backup). Treat it as **read-only reference**. Never edit it; never assume it's the new app. To track it, remove the relevant lines in `.gitignore`.
- All new application code goes at the repo root, not inside `well-known/`.

## Documentation map

See **`docs/README.md`** for the full index. Phase status:

- ✅ **Phase 1 (done):** `01-legacy-site-audit.md`, `02-seo-guidelines-2026.md`
- ✅ **Phase 2 (done):** `03-competitor-analysis` · `04-information-architecture` · `05-content-strategy` · `06-uiux-design-system` · `07-technical-architecture`
- 🗺️ **Roadmap:** `00-execution-roadmap.md` — execution plan, gap register, and July-2026 fact-check corrections (read before starting new workstreams).

**Locked URL scheme (from `docs/04`):** clean/extensionless, non-www, `/treatments/[slug]` · `/concerns/[slug]` · `/locations/[branch-slug]` · `/doctors/[slug]` · `/blog/[slug]`; EN unprefixed at root, `/zh` reserved (locale-neutral slugs). Every legacy URL has a 301 (`docs/04` §9).

**Before proposing structure, content, UX, or tech**, read `docs/02` (the SEO/AEO rules everything must satisfy) and `docs/01` (what we're migrating from).

## Working conventions

- **Context discipline:** this session uses context-mode — prefer `ctx_*` sandbox tools for large outputs; don't flood context reading `well-known/` (use Grep/Explore agents). Raw legacy files are huge.
- **SEO is a gate, not a garnish.** Any new page type must define: clean URL, title/meta template, heading hierarchy, internal-linking role, schema type, and E-E-A-T signals. (`docs/02` is the checklist.)
- **Preserve rankings:** every legacy URL in `docs/01` §2 needs a 301 to its new home. Don't ship the rebuild without the redirect map (`docs/04`/`docs/07`).
- **Medical/YMYL caution:** don't write outcome/efficacy claims, before/after, or testimonials that breach Malaysian advertising rules — see `docs/02` §8. When unsure, flag it.
- **No secrets in repo;** use `.env.local` (git-ignored). Provide `.env.example`.

## Commands

Stack: **Next.js 16.2.10 · React 19.2 · TypeScript 5 (strict) · Tailwind v4 · ESLint 9**, package manager **pnpm**. Node ≥20.9 (dev machine on 23.11; target Node 24 LTS for the prod Docker image per `docs/07`).

```bash
pnpm install     # install deps
pnpm dev         # dev server (Turbopack)
pnpm build       # production build (type-checks + lints + prerenders)
pnpm start       # serve the production build
pnpm lint        # ESLint
pnpm typecheck   # tsc --noEmit
```

Content/redirect/blog tooling (`validate:content`, `test:redirects`, `blog:export`) is specced in `docs/07 §16` and added as those scripts are built. `well-known/` is excluded in `tsconfig.json` and `turbopack.root` is pinned in `next.config.ts` (both required for a clean build).

## Git

- Branch off before substantial work; commit when the user asks.
- Commit message trailer:
  ```
  Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
  ```
