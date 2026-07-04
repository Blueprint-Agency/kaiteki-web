# 00 — Execution Roadmap & Verification Report

> **Purpose.** Answers four questions asked 2026-07-04: (1) what the planning docs miss, (2) what tooling to add, (3) what the docs need updated per fresh online research, (4) the step-by-step path from here to a launched, SEO-preserving rebuild.
> **Method.** Three parallel verification passes: a full gap-audit of `docs/01–04` + README, an online fact-check of every time-sensitive assumption (July 2026 sources), and a tool-stack research sweep. Findings below are the synthesis.
> **Date:** 2026-07-04.

---

## 1. Verdict on the current plan

The foundation is solid: legacy inventory (01), SEO/AEO standard (02), competitor teardown (03), and IA/URL/301 map (04) are complete, mutually reinforcing, and — per the fact-check — still overwhelmingly current. Nothing locked needs re-deciding. What's missing is **operational** work (pipelines, cutover, compliance logistics, data collection), not strategy.

---

## 2. Gaps to close (ranked by migration risk)

| # | Gap | Why it's a risk | Where it should live |
|---|---|---|---|
| 1 | **Blog extraction pipeline** — `kaitekim_blog2.sql.gz` → MDX, media migration, internal-link rewriting inside post bodies, per-post 301 inventory | Highest-risk unowned workstream; the source asset isn't referenced by any doc | New §in `docs/07` (pipeline) + `docs/05` (content triage per 02 §5.12) |
| 2 | **DNS/Cloudflare/VPS cutover plan** — Hostinger BPVPS1, separate Cloudflare account, TTLs, TLS + 301 serving for `blog.kaiteki.my` post-cutover | Zero mentions anywhere; 04 silently assumes the subdomain repoints to the new host | `docs/07` deployment section |
| 3 | **Rollback plan** — keep VPS serveable, DNS revert, launch abort criteria | "Rollback" appears in no doc | `docs/07` launch checklist |
| 4 | **KKLIU/MAB approval logistics** — submission process, ~30-day lead, 6-month validity, owner | On-page KKLIU display is mandated [P1] but the approval itself is unplanned → launch blocker | `docs/05` + start process early (see §6) |
| 5 | **Ground-truth data collection** — doctor roster + MMC numbers (legacy site has *no* doctor pages), branch geo/hours/per-branch phones | Required by 02 §3/§10 schema; no owner or storage spec | `docs/05` (collection) + `docs/07` (typed-data home) |
| 6 | **Analytics current-state audit** — existing GA/GA4/GSC properties on legacy site + blog subdomain | 02 §12 defines target stack only; migration needs the starting point | Small addendum to `docs/01` or `docs/07` |
| 7 | **Legacy asset triage** — which `well-known/` images to port vs drop | Optimization covered; selection isn't | `docs/06`/`docs/07` |
| 8 | **PDPA privacy-policy authoring** + consent copy (2024 amendments now fully in force) | Flagged for review but unowned | `docs/05` |

**Cross-doc inconsistencies to fix:**
- `CLAUDE.md` lists `blog.zip`; actual asset is `kaitekim_blog2.sql.gz` (7.9 MB WordPress SQL dump).
- `docs/03` §5/§7 still recommend `/branches/{city}` and `/en/` + `/ms/` prefixes — superseded by locked `/locations` + EN-at-root + `/zh`-next (04 §8/§10.2). Add a correction note to 03.
- `docs/02` internal tension: §1–2 assume before/after galleries (LCP, image sitemap) while §8/§13 prohibit them under MAB. Rewrite §1–2 examples to compliant imagery (clinic/device/doctor photos).
- 04 says "301" throughout; `next.config redirects()` emits **308** for permanent. Google-equivalent; state it once in 04/07.

---

## 3. Doc updates from online fact-check (July 2026)

| Finding | Verdict | Doc impact |
|---|---|---|
| FAQ rich results **fully removed from Google Search 2026-05-07**; docs deleted June 2026 | CHANGED | 02/04: strengthen from "deprecated" to "gone" — keep FAQ *content* for AEO only, zero FAQPage schema effort |
| AI-crawler tokens: OAI-SearchBot / ChatGPT-User / GPTBot / PerplexityBot / Google-Extended / CCBot all current | CONFIRMED | 04 §7.2 matrix still valid, plus additions ↓ |
| **Add to ALLOW list:** Claude-SearchBot, Claude-User, Applebot. **Add to training bucket:** ClaudeBot, Meta-ExternalAgent, Applebot-Extended. Note OAI-AdsBot exists; xAI/Grok has **no** controllable token | CHANGED | Update 04 §7.2 robots matrix |
| Google published an **AI-features optimization guide (May 2026)**; clarified **llms.txt is NOT used by Google Search** (June 2026) | NEW | Add to 02 AEO section; don't ship llms.txt for Google's sake |
| Site-move guide updated 2026-06-17: use GSC **Change of Address for ALL host variants incl. www/non-www** | NEW | Add to 04/07 migration steps |
| Breadcrumb mobile-snippet removal (Jan 2025, desktop unchanged); sitemaps lastmod-honest guidance; self-hosted Review/AggregateRating prohibition; HowTo deprecation | CONFIRMED | No change |
| **Next.js: scaffold on 16.2** (stable Mar 2026). Turbopack default; `experimental.ppr` superseded by **Cache Components** (`use cache`); `middleware.ts` → **`proxy.ts`**; typedRoutes stable; Metadata API / `app/sitemap.ts` / `app/robots.ts` / `redirects()` unchanged. **Pin ≥ patched 16.x** (Dec 2025 RSC CVE, CVSS 10.0) | CHANGED | 07 must target 16.2 conventions; 04's "middleware" references become `proxy.ts` |
| MASA 1956 / MAB / KKLIU: in force, no repeal. KKLIU website-ad approval ≈ 30 days, 6-month validity | CONFIRMED | Plan the lead time (§6) |
| **MMC "Guideline on the Ethical Aspects of Aesthetic Medical Practice" (Sept 2025)** | NEW | Cite in 02/05 over the 2015 guideline |
| PDPA Amendment 2024 **fully in force since 2025-06-01**: DPO appointment, breach notification, new cross-border regime | CHANGED | 02 §12.13/05: treat as current law, not upcoming |
| Google core updates Mar/Jun/Dec 2025, Mar 2026, May–Jun 2026; AI Mode >1B users; AI Mode traffic in GSC totals | CONTEXT | No structural change to strategy |

---

## 4. Tooling additions (verified available, Windows-friendly, free)

**Adopt (minimal set):**
1. **Screaming Frog free tier** (500 URLs — enough: legacy has ~80 sitemap URLs) — legacy inventory + new-site crawl QA, list-mode re-crawls.
2. **hurl** (`winget install Orange-OpenSource.Hurl`) — scripted 301-map regression suite generated from the 04 §9 map; rerun every deploy.
3. **Docker (wordpress+mysql) + WP-CLI + wordpress-export-to-markdown** — the SQL→MDX pipeline: mount dump into `/docker-entrypoint-initdb.d`, `wp search-replace`, `wp export` → WXR, convert (v3.0.4, Apr 2025) → patch to MDX. Direct SQL parsing loses shortcodes/serialized meta — rejected.
4. **Unlighthouse** (site-wide CWV) + **Lighthouse CI** (per-PR budget asserts on key templates).
5. **Pa11y CI** (axe runner, sitemap mode) — accessibility gate.
6. **schema-dts** (v2.0.0, Google-maintained) — compile-time-typed JSON-LD. No public Rich Results API exists; validate post-launch via GSC URL-inspection (already have the MCP) + validator.schema.org.

**Nice-to-have:** linkinator (CI link checks), SerpBear on the VPS (daily rank tracking; Ubersuggest+GSC may suffice), GMB Everywhere extension (9-branch GBP audit).

**Already covered by existing stack:** keywords/backlinks/site-audit (Ubersuggest MCP), search performance (GSC MCP), analytics (GA4 MCP), browser QA/screenshots (Playwright MCP), UI design (Impeccable + frontend-design), framework docs (context7).

**Note:** Cloudflare Bulk Redirects free tier ≈ 20 rules — the hundreds of 301s belong in Next.js `redirects()`/`proxy.ts`, as 04 assumed.

---

## 5. Step-by-step execution plan

**Phase A — Doc corrections & remaining specs (now)**
1. Apply §2 inconsistency fixes + §3 fact-check updates to CLAUDE.md, 02, 03, 04.
2. Write `docs/05-content-strategy` (incl. blog-post triage per 02 §5.12, doctor/E-E-A-T content plan, PDPA privacy content, KKLIU workflow).
3. Write `docs/06-uiux-design-system` (Impeccable-driven; compliant imagery strategy).
4. Write `docs/07-technical-architecture` (Next 16.2, data model, redirect implementation incl. 308 note + `proxy.ts`, sitemaps/robots code, GA4 + WhatsApp-click tracking, **cutover + rollback plan**, staging with noindex).

**Phase B — Long-lead & data collection (start in parallel, see §6)**
5. Collect ground truth: doctor roster + MMC numbers, branch NAP/geo/hours/phones, treatment↔branch↔doctor availability matrix → typed data files.
6. Kick off KKLIU approval process for planned page copy (≈30-day lead).
7. Audit current GA/GA4/GSC properties (legacy + blog subdomain); confirm GSC access to all host variants.

**Phase C — Build**
8. Scaffold Next.js 16.2 + TypeScript at repo root; wire quality gates: TS strict, ESLint, schema-dts, Lighthouse CI, Pa11y CI in CI.
9. Implement design system + page templates per 06 (Impeccable for design iteration; Playwright for visual QA).
10. Implement the five axes from typed data/MDX with `generateStaticParams()`; JSON-LD `@id` graph; breadcrumbs; internal-link mesh per 04 §6.
11. Run the blog pipeline (Docker WP → WXR → MDX), rewrite in-body internal links, migrate media, produce the per-post 301 inventory (live URL list + GSC Pages).

**Phase D — Migration QA (pre-launch)**
12. Implement full redirect map (`redirects()` + `proxy.ts` host/case/`/cn/`/blog rules); generate hurl suite from the map; all green.
13. Screaming Frog crawl of staging: no orphans, no chains, depth ≤ 3; sitemap-vs-crawl diff clean; Unlighthouse + Pa11y pass; validator.schema.org spot-checks.
14. Compliance gate: doctor review of medical copy, KKLIU numbers in hand, MAB checklist (no testimonials/before-after/superlatives), PDPA privacy live.
15. Staging blocked at host level (auth), not robots.

**Phase E — Cutover**
16. Freeze legacy content; final crawl snapshot of live site.
17. DNS: lower TTLs ahead; point apex + `blog.` per 07 cutover plan; keep VPS serveable for rollback.
18. Launch checks (02 §12.2): spot-check top legacy URLs → one-hop 301 → 200; correct canonicals; robots/sitemap live.
19. GSC: submit new sitemap index alongside old; **Change of Address for all host variants** (June 2026 guidance); keep GSC AI opt-out OFF.

**Phase F — Post-launch (weeks 1–12)**
20. Daily first week: GSC coverage + 404 report, VPS access logs for Googlebot 404s (ctx script), hurl suite against production.
21. Weekly: rank tracking (Ubersuggest/SerpBear), GA4 WhatsApp-click conversions, AI-citation spot checks.
22. Quarterly crawl (orphans/chains/depth); keep redirects ≥ 1 year; update 9 GBP profiles to new `/locations` URLs immediately at launch.

---

## 6. Long-lead items — start now regardless of build progress

1. **KKLIU approval** (~30 days + iteration; 6-month validity — time the submission so approval covers launch).
2. **Doctor roster + MMC data** (needs clinic-side cooperation; blocks /doctors axis, E-E-A-T bylines, schema).
3. **Branch ground truth** (geo/hours/phones; blocks /locations + GBP alignment).
4. **GSC/GA4 access audit** (blocks migration monitoring; needs account owner).
5. **Cloudflare account access** for kaiteki.my (separate account — confirm credentials before cutover week).
