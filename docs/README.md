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
| 03 | [`03-competitor-analysis.md`](./03-competitor-analysis.md) ✅ | Teardown of `cliniccleo.com` + benchmarks (Premier, Nexus, Beverly Wilshire) + the Malaysian aesthetic SEO/AEO landscape; comparison matrix; prioritized opportunity gaps. **Benchmark set partly superseded — read `03a` first.** |
| 03c | [`03c-not-indexed-urls-2026-09-06.md`](./03c-not-indexed-urls-2026-09-06.md) ✅ | **Working checklist.** All 125 sitemap URLs individually inspected: **41 are not indexed (33%)**, every one never crawled, plus one crawled-and-declined. Grouped by priority for manual GSC "Request indexing"; copy-paste queue in [`03c-request-indexing-queue.txt`](./03c-request-indexing-queue.txt). Carries a correction notice: an earlier version listed 44 and was partly extrapolated. |
| 03d | [`03d-page-type-gap-analysis-2026-09-18.md`](./03d-page-type-gap-analysis-2026-09-18.md) ✅ | **Treatment / concern / technology pages vs Cleo, Dr Chong and Clique** (live SERPs, 2026-09-18). Price-led SERPs, blog posts ranking beside service pages, our reviewer moat built but switched off (14 concerns unsigned), 18/19 treatments on the thin template, technology pages clicking best and built worst. Deep-dive + gap table + decisions D1–D8. **Executed by `15`.** |
| 03b | [`03b-aeo-ctr-diagnosis-tickets-2026-09.md`](./03b-aeo-ctr-diagnosis-tickets-2026-09.md) ✅ | **Start here for execution.** **T0: ~half the sampled `/technology` + `/treatments` pages have NEVER been crawled by Google** — including botox, dermal fillers, melasma and the whole injectables cluster. Everything else is downstream of that. Also diagnoses the near-zero CTR as an AEO problem (AI Overviews on 5 of 6 queries), with tickets T0–T10 and a "what NOT to do" list. |
| 03a | [`03a-competitor-gap-analysis-2026-09.md`](./03a-competitor-gap-analysis-2026-09.md) ✅ | Live-SERP re-run (2026-09-06). Corrects 03's benchmark set (Nexus/Beverly Wilshire don't rank; **Dr Chong Clinic** is the real structural rival), retires the "nobody has location pages" moat, and measures JB/KK demand. Deep-dive + gap tables + decisions. |
| 04 | [`04-information-architecture.md`](./04-information-architecture.md) ✅ | New clean URL taxonomy, nav/mega-menu, breadcrumbs, **internal-linking/anchor-text plan**, per-type sitemaps + robots (AI-crawler policy + www-bug fix), hreflang plan, and the **complete 73-row 301 redirect map**. |
| 05 | [`05-content-strategy.md`](./05-content-strategy.md) ✅ | Page-by-page content & messaging specs; **E-E-A-T program** (doctors, credentials, medical-reviewer workflow); topic clusters & launch map; FAQ/AEO plan; blog-migration triage; KKLIU/PDPA compliance ops; ground-truth data collection. |
| 06 | [`06-uiux-design-system.md`](./06-uiux-design-system.md) ✅ | The **"Quiet Clinic"** design direction; tokens (color/type/space/motion — the docs/07 contract); 16-component library incl. the clinical-ledger trust system; per-template layouts; responsive; WCAG 2.2 AA; CWV budgets as design law. |
| 07 | [`07-technical-architecture.md`](./07-technical-architecture.md) ✅ | Next.js 16.2 architecture: app structure, Zod typed-data model (single source → page + JSON-LD + compliance), **redirect engine** (`redirects.csv` → config + proxy + 410s + hurl suite), sitemaps/robots, analytics + WhatsApp tracking, CI gates, blog pipeline, hosting (BPVPS1 + Docker), **cutover & rollback plan**. |

> Phase 2 docs are written on request, in order. Each should be validated against `docs/02` before implementation.

### Phase 3 — Implementation references
| # | Doc | What it covers |
|---|-----|-----------|
| 08 | [`08-legacy-redirect-map.md`](./08-legacy-redirect-map.md) | The shipped 301 map from legacy URLs to their new homes. |
| 09 | [`09-analytics-migration.md`](./09-analytics-migration.md) | GA4/GSC continuity across the cutover. |
| 10 | [`10-onpage-meta-keyword-map.md`](./10-onpage-meta-keyword-map.md) | Per-page title/meta templates and the keyword map behind them. |
| 11 | [`11-concern-media-inventory.md`](./11-concern-media-inventory.md) | **Concern media ground truth**: the five source families and their ratios, the 14-concern coverage matrix, the four under-covered concerns excluded from media wiring, and the R2 delivery model. |
| 12 | [`12-concern-page-revamp-spec.md`](./12-concern-page-revamp-spec.md) | The `/concerns/[slug]` revamp: chosen layout, the six media fields, delivery, testing decisions, and what is out of scope. |
| 13 | [`13-treatment-media-inventory.md`](./13-treatment-media-inventory.md) | **Treatment/technology media ground truth**: the 201 source files in `2. treatments` + `3. device and injectables`, what already ships (19/19 treatments, 36/36 technologies), the 19-treatment coverage matrix, the banner gap that blocks copying the concern layout, and the media with no page to live on. |
| 14 | [`14-treatment-page-revamp-spec.md`](./14-treatment-page-revamp-spec.md) | The `/treatments/[slug]` revamp: 14 treatments in, 5 excluded, why the concern layout is **not** ported, the `areas` union, the `manufacturerImages` container fix, and the shared media contract. |
| 15 | [`15-four-week-plan-2026-09-21.md`](./15-four-week-plan-2026-09-21.md) | **Four-week execution plan (21 Sep – 18 Oct 2026)** for `03d`: day-1 client asks, then week by week — sign-offs and blog links, technology template upgrade with per-branch availability, acne-scars and melasma pages plus the remaining treatment block sets, FAQ depth, **Chinese + Bahasa Malaysia locale plumbing with a signed pilot per language**, and a measured comparison against the week-1 baseline. Owner, dependency and done-criteria per item. |
| 17 | [`17-device-page-audit-2026-09-21.md`](./17-device-page-audit-2026-09-21.md) | **Post-rebuild audit of all 36 device pages.** Every `/technology/*` page crawled after `docs/15` item 1.2 and scored for SEO, AEO and GEO, then set against Cleo, Dr Chong and Clique. We now beat all three on schema, named reviewer and anchors; we are last on sibling links (zero), shallowest on FAQ depth, and the two answer-engine slots are built but empty. Sameness unchanged at 35/36, so the rebuild is capacity, not the ranking move. |
| 16 | [`16-cluster-differentiation-spec.md`](./16-cluster-differentiation-spec.md) | **Why 34 URLs were never crawled, and the fix.** After sitemap, internal linking and thin content were tested and ruled out, what remained is that 35 of 36 technology pages and 17 of 19 treatments share six of their eight section headings. Four rules (block-or-prose never both; question-shaped headings; delete rather than pad; two page-only sections each), per-group section spines for injectables, lifting, lasers, body, facials and hair removal, the batch order, and the consolidation question to put to the client if it does not work. Enforced by `pnpm check:sameness`. |
| 15a | [`15a/README.md`](./15a/README.md) | **Day-1 client pack** for `15`: the message to the client, Sheet A (medical sign-off for all 69 pages, CSV), Sheet B (branch × device matrix, CSV), the price options, the AI-crawler decision, the two-language pilot scope, and the indexing queue in three dated batches. Records the day-1 corrections: Cloudflare block already clear; treatment reviewers are placeholders too. |

## Decision records

Numbered ADRs in [`adr/`](./adr) record decisions that **reverse** something the numbered
docs assert. A doc and an ADR that disagree are not a bug in the doc — read the ADR.

| ADR | Decision |
|---|---|
| [0001](./adr/0001-before-after-imagery.md) | Before/after imagery **is** published on concern pages, under stated conditions. Reverses `docs/02` §8.1, `docs/05` §1, `docs/06` §5, `docs/00` §14, `DESIGN.md` "Imagery", and the `notSuitableFor` comment in `lib/types.ts`. Also records why concern media skips the blog's staged-in-repo rule. |

## Conventions

- Docs are numbered for reading order; cross-reference by number/section (e.g. "see `docs/02` §9").
- Imagery that belongs to a doc goes in a dated folder under [`screenshots/`](./screenshots), never at the repo root: `.gitignore` treats a root `*.png` as a scratch export.
- `docs/02` uses priority labels **[P1] / [P2] / [P3]** (do-first → nice-to-have) and *Kaiteki application* callouts.
- The legacy site lives (git-ignored) in `../well-known/` — reference only.
