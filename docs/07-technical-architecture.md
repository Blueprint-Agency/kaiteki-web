# 07 — Technical Architecture

> **Purpose.** The implementation specification for the kaiteki.my Next.js rebuild: stack, repository/app structure, typed-data model, rendering strategy, the redirect engine implementing the `docs/04 §9` map, sitemaps/robots code, analytics, CI quality gates, the blog-migration pipeline, hosting/deployment, and the **cutover + rollback plan** (owns `docs/00 §2` gaps #2 and #3).
> **Scope.** Everything between the specs (docs/02–05) and running code. Design tokens/components are `docs/06` (consumed here as CSS custom properties + Tailwind config). Content itself is produced per `docs/05`.
> **How it satisfies `docs/02`.** Implements §1 (server-rendered HTML, canonicalization, sitemaps/robots, real 404/410, one-hop redirects), §2 (CWV plumbing: `next/image`, `next/font`, Server Components), §3 (schema graph emission), §8.3 (publish-time compliance gate as CI), §12 (analytics, launch verification, RUM). Framework claims verified against Next.js **v16.2** docs (2026-07); where conventions were ambiguous the conservative choice is taken and flagged.
> **Date:** 2026-07.

---

## 1. Stack & versions

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 16.2.x** (App Router) | Pin `>=16.2.9` (or current patch) — never below the Dec-2025 RSC-CVE-patched line (`docs/00 §3`). Turbopack is the default bundler (dev + build). |
| Language | **TypeScript, `strict: true`** | `typedRoutes: true` (stable since 15.5) so internal `<Link>`s are compile-checked against the `docs/04` tree. |
| React | Version bundled with Next 16.2 | No manual override. |
| Styling | **Tailwind CSS v4** + CSS custom properties | `docs/06` tokens land as `@theme` custom properties; components consume Tailwind utilities. *(Open decision §17.3.)* |
| Content | In-repo **typed TS data + MDX** | §3. No CMS (locked decision). |
| Schema | **schema-dts** | Compile-time-typed JSON-LD (`docs/00 §4`). |
| Validation | **Zod** | One schema module validates frontmatter/typed data at build AND feeds JSON-LD + compliance rendering (§3.4). |
| Node | **Node 24 LTS** (`engines` + `.nvmrc`) | Dev machine currently on 23 — upgrade (also unblocks the tailored Impeccable CLI). |
| Package manager | **pnpm** | Lockfile discipline + speed. *(Open decision §17.2.)* |
| Runtime target | **`output: 'standalone'`** → Docker | Self-hosted (§14). Never `output: 'export'` — static export would disable `redirects()`/`proxy.ts`, which carry the migration. |

`cacheComponents` (`'use cache'`) stays **off** at launch: the site is fully build-time static (§4); the classic model is smaller surface. Revisit post-launch.

---

## 2. Repository & app structure

```
/                                # repo root (Next app lives here, per CLAUDE.md)
├─ app/
│  ├─ (site)/                    # EN route group — everything user-facing
│  │  ├─ layout.tsx              # html/body, header/footer, Organization+WebSite JSON-LD
│  │  ├─ page.tsx                # Home
│  │  ├─ about/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ promotions/page.tsx
│  │  ├─ privacy/page.tsx  terms/page.tsx
│  │  ├─ treatments/  page.tsx  [slug]/page.tsx
│  │  ├─ concerns/    page.tsx  [slug]/page.tsx        # skin/face are data rows, not routes
│  │  ├─ locations/   page.tsx  [slug]/page.tsx
│  │  ├─ doctors/     page.tsx  [slug]/page.tsx
│  │  └─ blog/        page.tsx  [slug]/page.tsx  category/[c]/page.tsx
│  ├─ sitemap.xml/route.ts       # sitemap INDEX (route handler — see §7.1)
│  ├─ sitemaps/[type].xml/route.ts  # per-type child sitemaps
│  ├─ robots.ts
│  ├─ gone/route.ts              # optional styled 410 body helper (status set in proxy)
│  ├─ not-found.tsx  error.tsx  global-error.tsx
│  └─ opengraph-image.tsx        # brand default; per-type OG images beside their routes
├─ proxy.ts                      # host/case/cn/410 rules (Next 16 rename of middleware.ts)
├─ content/
│  ├─ blog/*.mdx                 # migrated + new posts (frontmatter per §3.2)
│  └─ data/                      # typed data (TS modules validated by Zod at build)
│     ├─ treatments.ts  concerns.ts  branches.ts  doctors.ts
│     ├─ availability.ts         # treatment×branch×doctor matrix
│     ├─ compliance.ts           # entity/registration/KKLIU records
│     └─ redirects.csv           # THE redirect map (docs/04 §9, incl. blog rows + 410 list)
├─ lib/                          # loaders, schema builders (json-ld.ts), seo.ts, wa.ts (CTA links)
├─ scripts/
│  ├─ blog-export/               # §13 pipeline (docker-compose.yml, convert.mjs, rewrite-links.mjs)
│  ├─ gen-redirects.mjs          # redirects.csv → next.config entries + hurl suite + 410 set
│  └─ sitemap-diff.mjs           # URL-inventory diff (docs/00 §4)
├─ tests/redirects.hurl          # generated 301/308/410 regression suite
├─ next.config.ts  tailwind.css  .env.example  .nvmrc
└─ .github/workflows/ci.yml     # §12 (requires git init + GitHub remote — flagged)
```

**i18n readiness (docs/04 §8):** EN lives in the `(site)` route group — a *pathless* group, so URLs stay unprefixed at root. When `/zh` ships, add `app/zh/` mirroring the same page components with a `locale` prop and `alternates.languages`; **no EN file moves**, purely additive. Slugs are locale-neutral by construction (shared data modules).

---

## 3. Data model — one record, many surfaces

### 3.1 Typed data (Zod schemas in `lib/schemas.ts`, the `docs/05 §9` contract)

```ts
const Doctor = z.object({
  slug: z.string().regex(/^dr-[a-z0-9-]+$/),
  fullName: z.string(), photo: z.string(),
  qualifications: z.array(z.string()), mmcNumber: z.string(),
  apcCurrent: z.boolean(), lcpStatus: z.string().optional(),
  privilegedProcedures: z.array(z.string()), yearsInPractice: z.number(),
  branches: z.array(BranchSlug), specialInterests: z.array(z.string()),
  languages: z.array(z.string()), sameAs: z.array(z.string().url()),
})
const Branch = z.object({
  slug: BranchSlug, name: z.string(),
  streetAddress: z.string(),           // byte-identical to GBP (docs/02 §10.6)
  city: z.string(), state: z.string(), postcode: z.string(),
  geo: z.object({ lat: z.number(), lng: z.number() }),
  phone: z.string(), whatsapp: z.string(),
  hours: z.array(OpeningHours), landmarks: z.string(), parking: z.string(),
  photos: z.array(z.string()), gbpUrl: z.string().url(),
})
const Treatment = z.object({
  slug: z.string(), name: z.string(), category: NavCategory,
  concerns: z.array(ConcernSlug),      // drives the docs/04 §6 mesh
  related: z.array(z.string()),
  kkliuNumber: z.string(), kkliuExpiry: z.coerce.date(),   // ad register — required
  reviewedBy: DoctorSlug, lastReviewed: z.coerce.date(),
})
```

`availability.ts` is the `treatment × branch (× doctor)` matrix; branch pages list only treatments actually offered (anti-doorway, `docs/02 §5.6`).

### 3.2 Blog MDX frontmatter

`title, description, slug, legacyUrl?, author (DoctorSlug|staff), reviewedBy (DoctorSlug), lastReviewed, datePublished, concerns[], treatments[], references[], published: boolean` — Zod-validated at build; `published: false` excluded from build output and sitemaps. Register rule enforced: blog frontmatter has **no** KKLIU fields (educational register must not carry ad markers, `docs/05 §1.1`).

### 3.3 Content loading

Thin custom layer: `gray-matter` (frontmatter) + Zod parse + **`next-mdx-remote/rsc`** compiled in Server Components. Rationale: full control of the frontmatter→Zod→JSON-LD chain and no framework lock; `@next/mdx` dynamic-import (documented pattern with `dynamicParams = false`) is the fallback if remote-MDX friction appears. *(Open decision §17.4.)*

### 3.4 Single source of truth (docs/05 §1.6)

One `Treatment` record renders: page copy slots → `MedicalProcedure` JSON-LD → byline block (`reviewedBy` join to `Doctor`) → footer KKLIU line → sitemap entry (`lastmod = lastReviewed`) → hurl expectations. No value exists twice.

---

## 4. Rendering strategy

- **Everything SSG at build.** All five axes use `generateStaticParams()` + `dynamicParams = false` (unknown slug → real 404). Content is in-repo, so **publishing = git push = CI build = deploy**; ISR adds nothing without a CMS. *(Deliberate divergence from `docs/02 §2`'s "ISR for blog" — that guidance assumes out-of-repo publishing; revisit only if a CMS ever lands.)*
- **Server Components by default**; client islands only: mobile nav/mega-menu toggle, gallery lightbox, consent banner, `useReportWebVitals` reporter. WhatsApp CTA is a server-rendered `<a href="https://wa.me/...">` built by `lib/wa.ts` (branch/treatment-aware pre-fill, `docs/04 §4.1`).
- **404/410:** `notFound()` in every `[slug]` route (real 404, `docs/02 §1`); 410s from proxy (§6.3).
- `generateMetadata` kept static (no dynamic fetches) so title/canonical/OG prerender into the initial `<head>` — WhatsApp's scraper is HTML-only (`docs/02 §1` streaming-metadata note).

---

## 5. SEO plumbing

- **`metadataBase = new URL('https://kaiteki.my')`** in the root layout; every page sets `alternates.canonical` to its clean path — tracking params collapse via canonical, never redirects (`docs/04 §2.1`).
- **Title/meta templates** per `docs/05 §3` implemented as per-type helpers in `lib/seo.ts` (`%s | Kaiteki Skin Aesthetic Clinic` default template).
- **JSON-LD:** `lib/json-ld.ts` builds one connected `@id` graph per route with schema-dts types (`docs/04 §3` mapping): `Organization`(`MedicalBusiness`) + `WebSite` site-wide; `MedicalClinic` per branch; `Physician` per doctor; `MedicalWebPage` + `MedicalProcedure`/`MedicalCondition` with `reviewedBy`/`lastReviewed` from the typed record; `BreadcrumbList` on every deep route. Never `Review`/`AggregateRating`; `FAQPage` optional-only.
- **OG images:** `opengraph-image.tsx` per route type (1200×630, brand template from `docs/06`); absolute URLs via `metadataBase`.

---

## 6. Redirect engine (implements docs/04 §9 verbatim)

**Source of truth: `content/data/redirects.csv`** — columns `source,target,kind` (`kind ∈ permanent|gone`), containing every §9 row plus per-post blog rows from the triage (`docs/05 §7`). `scripts/gen-redirects.mjs` derives three artifacts; nothing is hand-maintained twice:

### 6.1 Static 1:1 rows → `next.config.ts redirects()`
`permanent: true` (emits **308**; Google treats 301/308 identically — documented in `docs/04 §9`). ~90–150 rows is trivial for the router (no meaningful limit at this scale; verified no low cap in 16.2 docs).

### 6.2 Host rules — one observable hop
Edge-first at **Cloudflare** (kaiteki.my zone, free plan): "Always Use HTTPS" + two dynamic redirect rules —
`www.kaiteki.my/* → https://kaiteki.my$1` and `blog.kaiteki.my/* → https://kaiteki.my/blog$1` (301, path-preserving, single hop even from `http://`).
**Origin backstop** (portable + hurl-testable): the same rules as `redirects()` entries with `has: [{ type: 'host', value: 'blog.kaiteki.my' }]` (verified supported), so behavior survives a Cloudflare-mode change. DNS prerequisite: `blog` record must point at Cloudflare/origin serving the new app at cutover (§15).

### 6.3 `proxy.ts` (Next 16 rename of `middleware.ts` — verified API)
Handles only what static rows can't, consulting generated lookup sets:
1. **410 Gone** — `redirects.csv` `kind=gone` paths → `new Response(goneHtml, { status: 410, headers: {'content-type': 'text/html'} })` (`redirects()` cannot emit 410; proxy returning a custom Response is the verified mechanism).
2. **Uppercase/mixed-case paths** → 308 to lowercased path.
3. **`/cn/*` interim mapping** — strip `/cn/` + extension, look up the legacy map → English equivalent, else `/` (`docs/04 §9.9`); re-pointed to `/zh/*` 1:1 at locale launch.
`config.matcher` excludes `_next/`, static assets, and all canonical routes so the proxy costs nothing on the hot path.

### 6.4 Regression suite
`gen-redirects.mjs` also emits `tests/redirects.hurl`: per row `HTTP 308` (or 301 from edge) + `header Location == <target>` + a follow-redirect assert `HTTP 200`; `gone` rows assert `HTTP 410`. Runs in CI against staging and post-deploy against production (`docs/00 §4`).

---

## 7. Sitemaps & robots

### 7.1 Sitemaps (docs/04 §7.1)
Next's `generateSitemaps()` emits multiple **child** sitemaps but has **no sitemap-index convention** (verified against 16.2 docs) — so both layers are plain **route handlers** rendering XML from the same typed data that renders pages:
- `app/sitemap.xml/route.ts` → index listing `/sitemaps/{pages,treatments,concerns,locations,doctors,blog,images}.xml`.
- `app/sitemaps/[type].xml/route.ts` → children; entries only for canonical, indexable, 200 URLs; `lastmod = lastReviewed`/frontmatter date (honest — no build-time bumping); no `priority`/`changefreq`; images child carries `image:loc` for treatment/branch photography.
- `noindex` pages (blog categories, legal) and every `redirects.csv` source are structurally excluded.

### 7.2 `app/robots.ts`
Emits the `docs/04 §7.2` policy (2026-07 token matrix): allow-all baseline with explicit allow rules for Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot/Perplexity-User, Claude-SearchBot, Claude-User, Applebot; training crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended, Meta-ExternalAgent, Applebot-Extended) per the standing allow decision; `disallow: /api/`; `sitemap: https://kaiteki.my/sitemap.xml`. Staging is protected by host-level auth, **never** by production robots (§14.3).

---

## 8. Analytics & measurement (docs/02 §12)

- **Prerequisite (blocker):** GSC domain property + GA4 access — currently absent (`docs/00 §6` #4; memory: no Kaiteki properties on the connected account). Create GSC **Domain** property (DNS TXT via Cloudflare) + Bing WMT import + IndexNow ping on deploy.
- **GA4 via `@next/third-parties`** loaded only after consent: Consent Mode v2 defaults **denied** (`analytics_storage`/`ad_storage`) set before the tag; consent banner (client island, reserved height for CLS) updates on grant; consent state recorded (PDPA, `docs/02 §12.13`).
- **Events:** `whatsapp_lead` (clicks matching `wa.me|api.whatsapp.com`) and `phone_call_click` (`^tel:`) fired via a tiny delegated listener with `branch` + `service` categorical params (custom dimensions; never PII/condition data). Registered as Key Events **before** launch (not retroactive).
- **RUM:** `useReportWebVitals` island → GA4 (LCP/INP/CLS + rating), per `docs/02 §12.7`.
- **AI-referral channel group** + Looker Studio dashboard per `docs/02 §12.8–12.9` (post-launch task).

---

## 9. Error handling, logging & monitoring

- `error.tsx` (per-segment) + `global-error.tsx`; `not-found.tsx` renders the branded 404 (real status). No soft-404s: unknown slugs `notFound()`, retired content 410s.
- **Server logs:** container stdout/stderr → Docker `json-file` rotation (or journald) on BPVPS1; weekly `ctx`-scripted scan of access logs for Googlebot 404/410 hits (crawl-QA, `docs/00 §4`). Reverse proxy keeps access logs ≥90 days through the migration window.
- **Uptime:** external ping on `/` + `/locations` (Uptime Kuma on the VPS or a free SaaS — open decision §17.6) alerting to WhatsApp/email.

## 10. Security

- HSTS (`max-age=31536000; includeSubDomains`; preload after cutover soak), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` minimal, CSP starting `default-src 'self'` + explicit allowances for GA/consent vendor (report-only first) — set in `next.config.ts headers()`.
- No secrets in repo; `.env.example` documents every var (§14.4). Dependency policy: Renovate/`pnpm audit` weekly; **framework CVEs patch within 48h** (the Dec-2025 RSC-CVE lesson).

---

## 11. i18n groundwork (docs/04 §8)

All routing/data is locale-neutral now: shared slug constants, `locale`-parameterized copy loaders, `alternates.languages` helper stubbed to emit nothing until `/zh` exists (partial hreflang sets are worse than none). `/cn/*` interim redirects live in proxy (§6.3) and re-point 1:1 at `/zh` launch.

---

## 12. CI/CD quality gates (`.github/workflows/ci.yml`)

> ⚠️ Repo is **not yet git-initialized** — `git init` + GitHub remote is step 0 of Phase C (`docs/00 §5`).

PR-blocking, in order (fail-fast): 1) `tsc --noEmit` · 2) ESLint · 3) **Zod content validation** — every typed record + frontmatter parses; ad pages require `kkliuNumber`/`kkliuExpiry`/promoter fields; YMYL pages require `reviewedBy`+`lastReviewed`; `kkliuExpiry` warnings at 90/60/30 days, **build failure on expiry** (`docs/05 §8.1`) · 4) **banned-words lint** (`docs/05 §2` regex seed over MDX bodies + metadata, with reviewed whitelist) · 5) build (`next build`) — includes the `docs/02 §12.2` regression: fail if any production page emits `noindex` or robots disallows `/` · 6) **hurl redirect suite** against the preview/staging build · 7) **Lighthouse CI** budgets on 5 key templates (home, treatment, concern, branch, post): LCP ≤2.5s, CLS ≤0.1, perf ≥90 · 8) **Pa11y CI** (axe runner, WCAG 2.2 AA) on the same templates · 9) linkinator over the built site (internal links + orphan smoke check).
Deploy job (main only): build `standalone` Docker image → push → SSH deploy to BPVPS1 (§14.2) → post-deploy hurl against production + sitemap-diff.

---

## 13. Blog migration pipeline (`scripts/blog-export/`, one-off)

1. `docker compose up`: `mysql:8` (mount `kaitekim_blog2.sql.gz` into `/docker-entrypoint-initdb.d/` — auto-imports) + `wordpress` + `wpcli`.
2. `wp search-replace 'blog.kaiteki.my' 'kaiteki.my/blog'` (dry-run first), then `wp export` → WXR XML.
3. `npx wordpress-export-to-markdown` (v3.x) → frontmatter Markdown + downloaded `wp-content/uploads` media.
4. `convert.mjs`: rename `.md→.mdx`, map WP fields → §3.2 frontmatter (author/reviewer left for triage), slug-lint (`docs/04 §2.2`).
5. `rewrite-links.mjs`: in-body links through the `redirects.csv` map (legacy `.html/.php` → new paths), media refs → `/public/blog/` (optimized AVIF/WebP), external links dead-link-checked.
6. Emit `blog-triage.csv` skeleton (URL, title, wordcount, date) → human triage per `docs/05 §7` → keep-set gets reviewers; per-post rows appended to `redirects.csv` (301 or `gone`).

---

## 14. Hosting & deployment

### 14.1 Decision: self-host on BPVPS1 (recommended)

| | (a) BPVPS1 + Docker (recommended) | (b) Vercel |
|---|---|---|
| Cost / vendors | RM0 marginal; infra + Cloudflare already exist (`../infrastructure`) | New vendor, ~US$20+/mo, second dashboard |
| Fit | Site is fully static SSG — a single small Node container; Cloudflare edge caches assets for SEA latency | ISR/edge-native — benefits we don't use (§4) |
| Control | Full: headers, logs (needed for crawl QA §9), blog-subdomain routing, rollback co-located with the legacy site | Log access + subdomain TLS managed but less inspectable |
| Risk | Self-managed patching (mitigated: Docker image rebuilds in CI) | Vendor lock, fewer knobs |

**Deploy flow:** CI builds `standalone` image → registry → SSH `docker compose pull && up -d` on BPVPS1 → reverse proxy (existing nginx/Caddy in `../infrastructure`) routes `kaiteki.my` + `blog.kaiteki.my` to the container → Cloudflare proxied in front (edge TLS covers apex/www/blog on the zone cert).

### 14.2 Environments
- **Production:** `kaiteki.my` (container `kaiteki-web`).
- **Staging:** `staging.kaiteki.my` — same image, **Basic-Auth at the reverse proxy** (host-level; robots never relied on, `docs/02 §1`), Cloudflare DNS-only or Access-gated. Hurl/Lighthouse/Pa11y run here pre-promote.

### 14.3 `.env.example`
`NEXT_PUBLIC_SITE_URL=https://kaiteki.my` · `NEXT_PUBLIC_GA4_ID=` · `NEXT_PUBLIC_WHATSAPP_NUMBER=60103818170` · `INDEXNOW_KEY=` — everything else is in-repo data. No secrets beyond GA/IndexNow keys; deploy credentials live in GitHub Actions secrets.

---

## 15. Cutover & rollback (owns docs/00 gaps #2/#3)

### 15.1 Pre-cutover (T-7 → T-1)
1. Content freeze on legacy site + `blog.kaiteki.my` (final `wp export` re-run; re-diff triage CSV).
2. Final legacy crawl snapshot (Screaming Frog, ≤500 URLs) archived to `docs/`.
3. Cloudflare: lower `A/CNAME` TTLs for `@`, `www`, `blog` to 300s; stage (disabled) redirect rules (§6.2).
4. Staging passes: full CI, hurl suite (all §9 rows), Lighthouse/Pa11y, schema spot-checks (validator.schema.org), `docs/05 §8` compliance sign-offs, KKLIU numbers rendered.
5. GSC domain property verified + old sitemap still submitted; baseline exports of GSC Pages report.

### 15.2 Cutover (T-0, low-traffic window)
1. Point `@`/`www` (and `blog`) records to BPVPS1/new origin; enable the Cloudflare redirect rules; keep legacy site running on its old port/vhost (dark but serveable).
2. Verify: hurl suite against production (all hosts); spot-check top-20 legacy URLs = one observable hop → 200; canonicals point to new URLs; **no staging noindex leaked** (CI gate re-run against prod); robots.txt + sitemap index live.
3. GSC: submit new sitemap index alongside old; **Change of Address** from the `blog.kaiteki.my` property (and any `www.` property) → apex, per the 2026-06-17 site-move guidance covering all host variants (`docs/04 §7.1`). *(Apex path changes need no CoA — same host.)*
4. GA4: confirm `whatsapp_lead`/`phone_call_click` firing with branch/service params; consent banner functional.
5. Update all 9 GBP website links to the new `/locations/*` URLs (`docs/00 §5` #22).

### 15.3 Rollback
- **Triggers:** sustained 5xx; redirect map materially wrong (>5% of legacy URLs mis-landing); GSC coverage collapse or `noindex` leak discovered; compliance failure (missing KKLIU on ad pages).
- **Procedure:** revert Cloudflare DNS to legacy origin + disable edge redirect rules (≤5 min at 300s TTL); legacy vhost stays intact and serveable **≥30 days** post-launch (nothing is deleted at cutover); fix forward on staging; re-cut. If only the app is bad but DNS is fine: `docker compose` rollback to the previous image tag (kept: last 5 tags).
- **Post-launch monitoring** (per `docs/00` Phase F): daily wk-1 GSC Pages/404 + access-log Googlebot scan + hurl-prod; weekly thereafter; redirects live ≥1 year.

---

## 16. Commands (copy into CLAUDE.md once scaffolded)

```bash
pnpm install            # deps
pnpm dev                # dev server (Turbopack)
pnpm build && pnpm start# production build / serve
pnpm lint               # ESLint
pnpm typecheck          # tsc --noEmit
pnpm validate:content   # Zod + banned-words + KKLIU-expiry gates
pnpm test:redirects     # hurl suite vs $TEST_BASE_URL
pnpm blog:export        # scripts/blog-export pipeline (one-off)
```

---

## 17. Open decisions & recommendations

1. **Hosting** — recommended **BPVPS1 + Docker** (§14.1); Vercel remains the documented alternative if VPS ops become a burden.
2. **pnpm** as package manager — confirm (npm acceptable, nothing depends on it).
3. **Tailwind v4** + tokens-as-custom-properties — final call rides on `docs/06`.
4. **MDX layer** — recommended thin custom loader (gray-matter + Zod + `next-mdx-remote/rsc`, §3.3); `@next/mdx` dynamic-import is the documented fallback. Decide at scaffold time after a 2-post spike.
5. **Staging domain** — `staging.kaiteki.my` (Basic-Auth) recommended; a non-guessable host is the paranoid alternative.
6. **Uptime monitoring** — Uptime Kuma on BPVPS1 (free, self-hosted) vs a SaaS free tier.
7. **`blog.kaiteki.my` TLS window** — edge redirect rule means Cloudflare's zone cert covers it with zero origin config **only while proxied (orange-cloud)**; if the record is ever set DNS-only, the origin needs the subdomain on its cert. Default: keep proxied.
8. **IndexNow** — wire into deploy (cheap, Bing-only benefit); skip if pipeline noise outweighs it.
