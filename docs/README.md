# Kaiteki Rebuild — Documentation

Research, audit, and design docs for rebuilding [kaiteki.my](https://kaiteki.my) on Next.js with best-in-class SEO/AEO. Read top-to-bottom; later docs assume earlier ones.

## Locked project decisions

| Decision | Choice |
|---|---|
| Stack | Next.js (App Router) + TypeScript |
| Languages | **English first**, i18n-ready (Chinese later) |
| Blog | Migrate WordPress → in-repo **MDX** at `kaiteki.my/blog` |
| Content mgmt | **None — pure code** (MDX + typed data, no CMS) |
| Conversion | **WhatsApp-only** (pre-filled deep-links) |

## Document index

### Cross-cutting
| # | Doc | What it is |
|---|-----|-----------|
| 00 | [`00-execution-roadmap.md`](./00-execution-roadmap.md) | **Execution roadmap & verification report** (2026-07): gap register, fact-check corrections to 02–04, tooling additions, and the phased plan to launch. |

### Phase 1 — Audit & Standards ✅
| # | Doc | What it is |
|---|-----|-----------|
| 01 | [`01-legacy-site-audit.md`](./01-legacy-site-audit.md) | The **old** site: full page/URL inventory, redirects, conversion model, SEO debt, and a draft 301 migration map. |
| 02 | [`02-seo-guidelines-2026.md`](./02-seo-guidelines-2026.md) | **Pure SEO/AEO best-practice reference** — technical, performance/CWV, schema, on-page, content, internal linking/anchor text, E-E-A-T, YMYL/medical (incl. Malaysia rules), AEO/GEO, local & multi-location, reputation, measurement. The standard everything else must meet. |

### Phase 2 — Proposals & Design ✅ (03–07 done)
| # | Doc | What it covers |
|---|-----|-----------|
| 03 | [`03-competitor-analysis.md`](./03-competitor-analysis.md) ✅ | Teardown of `cliniccleo.com` + benchmarks (Premier, Nexus, Beverly Wilshire) + the Malaysian aesthetic SEO/AEO landscape; comparison matrix; prioritized opportunity gaps. |
| 04 | [`04-information-architecture.md`](./04-information-architecture.md) ✅ | New clean URL taxonomy, nav/mega-menu, breadcrumbs, **internal-linking/anchor-text plan**, per-type sitemaps + robots (AI-crawler policy + www-bug fix), hreflang plan, and the **complete 73-row 301 redirect map**. |
| 05 | [`05-content-strategy.md`](./05-content-strategy.md) ✅ | Page-by-page content & messaging specs; **E-E-A-T program** (doctors, credentials, medical-reviewer workflow); topic clusters & launch map; FAQ/AEO plan; blog-migration triage; KKLIU/PDPA compliance ops; ground-truth data collection. |
| 06 | [`06-uiux-design-system.md`](./06-uiux-design-system.md) ✅ | The **"Quiet Clinic"** design direction; tokens (color/type/space/motion — the docs/07 contract); 16-component library incl. the clinical-ledger trust system; per-template layouts; responsive; WCAG 2.2 AA; CWV budgets as design law. |
| 07 | [`07-technical-architecture.md`](./07-technical-architecture.md) ✅ | Next.js 16.2 architecture: app structure, Zod typed-data model (single source → page + JSON-LD + compliance), **redirect engine** (`redirects.csv` → config + proxy + 410s + hurl suite), sitemaps/robots, analytics + WhatsApp tracking, CI gates, blog pipeline, hosting (BPVPS1 + Docker), **cutover & rollback plan**. |

> Phase 2 docs are written on request, in order. Each should be validated against `docs/02` before implementation.

## Conventions

- Docs are numbered for reading order; cross-reference by number/section (e.g. "see `docs/02` §9").
- `docs/02` uses priority labels **[P1] / [P2] / [P3]** (do-first → nice-to-have) and *Kaiteki application* callouts.
- The legacy site lives (git-ignored) in `../well-known/` — reference only.
