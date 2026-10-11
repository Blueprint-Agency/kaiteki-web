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
| Blog | legacy WordPress on `blog.kaiteki.my` → **now rebuilt in-repo at `/blog`** (migration of the back-catalogue ongoing) |

## Locked decisions (from project kickoff)

1. **Stack:** Next.js (App Router) + TypeScript. (Details finalized in `docs/07`.)
2. **Languages:** **English first**, but architecture must be **i18n-ready** (Chinese `/cn`→`/zh` planned later). Don't hard-code English assumptions into routing/data. *Timing update 2026-09-19:* `/zh` **and** `/ms` plumbing plus a signed pilot are scheduled for week 4 of `docs/15` (item 4.5), pending client confirmation (`docs/15a` ask 7).
3. **Blog:** migrate posts onto the main domain at **`kaiteki.my/blog`** (consolidates authority off the subdomain). Stored **in-repo as MDX**.
   *Shipped:* bodies in `content/blog/<slug>.mdx`, typed metadata in `content/data/blog.ts`, routes at `/blog`, `/blog/[slug]`, `/blog/category/[slug]`. MDX is wired via `@next/mdx` + remark-gfm + rehype-slug (`next.config.ts`), styled in `mdx-components.tsx`. **Authoring a post: `content/blog/AUTHORING.md` is the contract; `pnpm check:blog` enforces it.**
4. **Content management:** **none — pure code.** Content lives in the repo (MDX + typed data files). No headless CMS for now.
5. **Conversion:** **WhatsApp-only** (pre-filled deep-links, click-to-WhatsApp / click-to-call). No online booking engine.

> If a future request conflicts with a locked decision, surface it rather than silently diverging.

## Repo layout

- `docs/` — research, audit, specs, proposals (see `docs/README.md`). `PRODUCT.md` · `DESIGN.md` — Impeccable brand/design context (register, palette, "Warm Sanctuary").
- **`well-known/` is the OLD site, git-ignored on purpose** (~750 MB, ~20k files incl. a WordPress backup, plus `kaitekim_blog2.sql.gz` — the legacy WordPress dump that sources the `/blog` MDX migration). Treat it as **read-only reference**. Never edit it; never assume it's the new app. To track it, remove the relevant lines in `.gitignore`.
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

Package manager is **pnpm**. Node ≥20.16 (raised from 20.9 for `--env-file-if-exists`, which the media scripts use; dev machine on 24.13; target Node 24 LTS for the prod Docker image per `docs/07`).

```bash
pnpm install     # install deps
pnpm dev         # dev server (Turbopack)
pnpm build       # production build (type-checks + lints + prerenders)
pnpm start       # serve the production build
pnpm lint        # ESLint
pnpm typecheck   # tsc --noEmit
```

Content and media tooling (all in `package.json`):

```bash
pnpm validate:content    # no placeholder values in ledger-displayed content
pnpm validate:refs       # cross-refs + every card image listed in config/site-media.json
pnpm validate:concerns   # concern/treatment page rules (Q-xx); add --live to HEAD every CDN URL
pnpm test:redirects      # 301 map
pnpm check:blog          # blog authoring contract (content/blog/AUTHORING.md)
pnpm check:sameness      # cross-page sameness (docs/16)
pnpm check:cost          # cost-factor copy
pnpm audit:concern-media / audit:treatment-media   # source-folder audit (macOS: uses sips)
pnpm sync:concern-media / sync:treatment-media     # upload to R2 (--dry-run first)
pnpm blog:manifest / blog:import / blog:redirects  # legacy WordPress migration
```

**Images live in Cloudflare R2** (bucket `kaiteki-web-prod`, served from `https://cdn.kaiteki.my`), not `public/`. Only SEO-pinned files stay local: `public/brand/` (schema logo), `public/images/hero/` (site-wide OG image), app icons, and the `public/ads/` landing bundle. A new image goes up to R2 and its URL into the data file; card images also get a key in `config/site-media.json`. R2 creds are in `.env.local` (see `.env.example`).

`well-known/` is excluded in `tsconfig.json` and `turbopack.root` is pinned in `next.config.ts` (both required for a clean build).

## Git

- Branch off before substantial work; commit when the user asks.
- No AI attribution: no `Co-Authored-By: Claude` trailer in commits, no "Generated with Claude" line in PR bodies.

## Agent skills

### Issue tracker

Issues live in GitHub Issues on `Blueprint-Agency/kaiteki-web` (via the `gh` CLI). See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one root `GLOSSARY.md` (created lazily) plus `docs/adr/`. See `docs/agents/domain.md`.
