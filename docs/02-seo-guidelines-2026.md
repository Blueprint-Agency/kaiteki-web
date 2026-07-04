# Kaiteki SEO & AEO Guidelines (2026)

> **Purpose.** An evergreen-leaning, pure best-practice reference for search (SEO) and answer-engine (AEO) optimization, written to guide the Next.js rebuild of kaiteki.my. This is a *standing reference*, not a rebuild proposal or project plan: it captures the principles and standards the site should be measured against, with concrete *Kaiteki application* notes for context. **Scope.** Technical, on-page, content, E-E-A-T, YMYL/medical, AEO/GEO, local/multi-location, off-page, and measurement practice for an English-first, i18n-ready, WhatsApp-conversion medical-aesthetic site. **Last reviewed:** 2026-07 (key claims fact-checked against July 2026 sources — see `docs/00` §3). *Caveat:* AEO / AI-search guidance evolves quickly — treat Section 9 and AI-related notes as the fastest-moving material here and re-verify before relying on them.

## How to use this guide

Each practice carries a **priority label**:

- **[P1]** — Foundational or compliance-critical. Do these first; the rebuild should not launch without them.
- **[P2]** — High-value. Schedule these into the launch or the first iteration after launch.
- **[P3]** — Refinement and optimization. Worthwhile once P1/P2 are in place.

Throughout, ***Kaiteki application*** callouts translate a general best practice into the specific situation of Kaiteki Skin Aesthetic Clinic — 9 Malaysian branches, WhatsApp-only conversion, a WordPress→/blog migration, in-repo MDX/typed content, and binding Malaysian medical-advertising rules (MAB/KKLIU, MMC, PDPA). Where general SEO advice and Malaysian medical-advertising law conflict, **the law wins**.

## Table of Contents

1. [Technical SEO Foundations](#1-technical-seo-foundations)
2. [Site Performance & Core Web Vitals](#2-site-performance--core-web-vitals)
3. [Structured Data & Schema Markup](#3-structured-data--schema-markup)
4. [On-Page SEO](#4-on-page-seo)
5. [Content Strategy & Topical Authority](#5-content-strategy--topical-authority)
6. [Internal Linking & Anchor Text](#6-internal-linking--anchor-text)
7. [E-E-A-T (Experience, Expertise, Authoritativeness, Trust)](#7-e-e-a-t-experience-expertise-authoritativeness-trust)
8. [YMYL & Medical/Aesthetic-Specific SEO](#8-ymyl--medicalaesthetic-specific-seo)
9. [AEO / GEO - AI Search & Answer Engines](#9-aeo--geo---ai-search--answer-engines)
10. [Local & Multi-Location SEO](#10-local--multi-location-seo)
11. [Reviews, Reputation & Off-Page Authority](#11-reviews-reputation--off-page-authority)
12. [Measurement, Analytics & SEO Operations](#12-measurement-analytics--seo-operations)

## 1. Technical SEO Foundations

This section covers the load-bearing technical layer for a Next.js (App Router) YMYL/medical site: crawlable server-rendered HTML, a clean WordPress-to-`/blog` migration, correct canonicalization/sitemaps/robots, and a flat architecture. These foundations decide whether content is indexed at all and whether the replatform preserves existing rankings — the highest-risk event in the rebuild.

### Migration & redirects (highest-risk work)

- **Build a complete 1:1 301 redirect map for every indexed legacy URL before launch.** [P1] Inventory every currently-indexed URL (Search Console *Pages* report + old sitemap + a Screaming Frog/Ahrefs crawl) and map each to its single best new destination via a server-side 301/308 in `next.config.js` `redirects()` (`permanent: true`) or at the host (`vercel.json`/Nginx). Submit BOTH old and new sitemaps during transition. 301/308 preserve PageRank; keep redirects live at least ~1 year (longer is fine) ([Google site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [301 redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects)).
  - **Do** map each old URL to its closest equivalent and verify the destination is itself a 200. **Avoid** funneling many old URLs into one hub page, and avoid 301→another-redirect.
  - *Kaiteki application:* This is the single highest-risk task. 301 each WordPress subdomain post (e.g. `blog.kaiteki.my/<slug>`) to `kaiteki.my/blog/<slug>`, and 301 old service/branch pages 1:1. Old posts with no equivalent should return **410** (or 301 to the nearest match), never a styled 200 "not found".
- **Eliminate redirect chains and loops — redirect straight to the final 200 URL in one hop.** [P1] Googlebot follows up to ~10 hops but recommends single-hop; keep any unavoidable chain under 3. Watch the classic stacked chain after a replatform: `http → https → non-www → trailing-slash → new path`. Collapse it into one rule and enforce a single host/protocol/slash convention so internal links never trigger a redirect ([source](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)).
  - *Kaiteki application:* Lock the canonical host (www vs non-www) and trailing-slash policy (Next.js `trailingSlash`) up front, then build the redirect map against that single canonical form.

### Rendering & indexability

- **Serve content as server-rendered HTML (SSG/ISR/SSR) — never client-only.** [P1] Google renders JS in a two-wave model: HTML is indexed immediately; JS-dependent content is queued and can lag seconds to weeks. Use SSG (build-time) for evergreen pages (home, treatments, branches, About), ISR (`revalidate`) for the blog, and SSR only where data must be per-request. Use `generateStaticParams()` for dynamic blog/treatment routes. Keep primary content, headings, and internal links in the server HTML — not behind `useEffect`/client fetches ([JS SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)).
  - *Kaiteki application:* In-repo MDX/typed data is ideal for SSG/ISR. Statically generate all treatment and branch pages; use ISR for `/blog`. Critically, render the WhatsApp CTA as a real `<a href="https://wa.me/...">` anchor in server HTML — not a JS-only `onClick` — so the conversion path is in the crawlable DOM.
- **Design for mobile-first indexing parity.** [P2] Google indexes the mobile rendering, so the mobile DOM must contain the SAME primary content, headings, internal links, structured data, and metadata as desktop. Use the single responsive Next.js codebase; verify with URL Inspection ([source](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)).
  - *Kaiteki application:* Mobile is the dominant device for Malaysian users reaching WhatsApp. **Avoid** collapsing full treatment descriptions or branch info into JS-only accordions that omit content from the DOM.

### Canonicalization, sitemaps & robots

- **Set a self-referencing canonical on every indexable page.** [P1] Set `metadataBase` once in `app/layout.tsx` (`new URL('https://kaiteki.my')`) and add `alternates: { canonical: '/path' }` per page. Canonical signal strength: redirects > `rel=canonical` > sitemap inclusion — keep canonical, internal links, sitemap entry, and (future) hreflang pointing to the SAME absolute URL ([consolidate duplicates](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)).
  - *Kaiteki application:* Absolute canonicals built from `metadataBase` collapse tracking params (`?utm_*`, `?fbclid=`) onto the clean page. Each post self-canonicals to `kaiteki.my/blog/<slug>`.
- **Generate XML sitemap(s) including an image sitemap; keep `lastmod` honest.** [P2] Use `app/sitemap.ts`. Limits: ≤50,000 URLs / ≤50MB per file (shard above that). Include only canonical, indexable, 200 URLs. Set accurate `lastmod` only on material change — fake/auto-bumped `lastmod` makes Google ignore the signal. Drop `priority`/`changefreq` (Google ignores them). Add `image:image`/`image:loc` entries for treatment and clinic photos ([build sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [image sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps)).
  - *Kaiteki application:* Well under 50k URLs, so one sitemap suffices. An image sitemap matters here — treatment and result photos are key. During migration, submit both old and new sitemaps so GSC shows the old index shrinking and the new one growing.
- **Author a minimal `robots.txt` via `app/robots.ts`; allow content + assets, block only true noise.** [P2] Allow Googlebot to crawl JS/CSS/image assets (blocking them breaks rendering). Disallow only worthless paths (internal search, filter endpoints, `/api/` utilities). Reference the sitemap URL. Add explicit AI-crawler rules (e.g. `GPTBot`) as a deliberate visibility decision ([robots intro](https://developers.google.com/search/docs/crawling-indexing/robots/intro), [2025 robots refresher](https://developers.google.com/search/blog/2025/03/robots-refresher-page-level)).
  - **Avoid** the most damaging mistake: do NOT `Disallow` a URL you want de-indexed — if it is blocked, Google can't see the `noindex` and may still index it from external links. To de-index, leave the page crawlable and use a `noindex` meta/header instead.
  - *Kaiteki application:* Crawl budget is not a constraint for a 9-branch site — keep robots minimal. Block staging/preview deployments at the host level, not via production `robots.txt`.
- **Use the robots meta / `X-Robots-Tag` for indexation control, with correct HTTP status codes.** [P2] Control indexing per page with Next.js `robots` metadata (`index`/`follow`, `max-image-preview:large`, `max-snippet:-1`). Use `noindex,follow` on thin/utility pages (tag archives, thank-you pages). Return real 404 (call `notFound()`) or 410 for removed content — never a soft 404 (a not-found message served with 200). **Avoid** `noindex`-ing a URL you are also 301-redirecting (conflicting signals) ([block indexing](https://developers.google.com/search/docs/crawling-indexing/block-indexing)).
  - *Kaiteki application:* Use `notFound()` in `[slug]` routes so unknown posts emit a real 404.

### Architecture & URL conventions

- **Keep architecture flat: every important page reachable within 3 clicks via crawlable `<a>` links.** [P2] Use a topic-cluster/pillar model (treatment pillar pages link to supporting posts and back). Put primary nav and footer links to all 9 branch pages and core treatments in server-rendered anchors with descriptive text. Add breadcrumbs (with `BreadcrumbList` schema — see §3). Click depth correlates with crawl frequency and perceived importance ([crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)).
  - *Kaiteki application:* After the WP→`/blog` migration, audit for orphaned posts and re-link them from pillar/treatment pages and the blog index.
- **Treat HTTPS, canonical host, and trailing-slash as one enforced convention.** [P2] Serve everything over HTTPS with HSTS; 301 all `http → https`. Pick one host and one trailing-slash policy (set Next.js `trailingSlash` accordingly) so no internal link triggers a redirect ([enable HTTPS](https://web.dev/articles/enable-https)).
- **Ensure key-page metadata is in the rendered `<head>` (mind Next.js streaming metadata).** [P3] Next.js streaming metadata can append `<title>`/meta tags to `<body>` for JS-capable bots (Googlebot reads these fine), but HTML-limited bots (`facebookexternalhit`, some social/AI scrapers) only read `<head>`. For the homepage, treatment pages, and blog posts, keep `generateMetadata` non-dynamic so title/description/canonical/OpenGraph are prerendered into the initial `<head>` ([generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)).
  - *Kaiteki application:* Conversion is WhatsApp-share-driven, so accurate OG previews must render even for HTML-only scrapers. Metadata comes from in-repo MDX/typed data, so it can be static.

### i18n & index hygiene

- **Lay i18n-ready hreflang groundwork now, even while English-first.** [P3] hreflang isn't needed for one language, but plan a subdirectory scheme (`/en/`, `/ms/`) so it's a later config switch. When locales launch, emit reciprocal hreflang via `alternates.languages` plus a self-entry and one `x-default`. Every page in a cluster must list all siblings and itself; missing return tags make Google drop the whole set; hreflang URLs must be the canonical 200 URLs ([localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)).
  - *Kaiteki application:* Likely future pair is `en` + `ms` (Bahasa Malaysia). Choose `/en/` and `/ms/` now; keep slugs and canonicals consistent so adding hreflang is purely additive.
- **Prevent index bloat from parameter/faceted and pagination URLs.** [P3] Strip/canonicalize tracking params (`utm`, `fbclid`) to the clean URL. For blog pagination, let each paginated page self-canonicalize (do NOT canonical them all to page 1) and link next/prev so deeper posts stay discoverable. Google's old URL Parameters tool is retired (April 2022) — handle this via canonicals, robots, and clean linking ([source](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)).
  - *Kaiteki application:* No e-commerce facets here — the real cases are blog category/tag archives, pagination, and UTM/WhatsApp params. `noindex,follow` thin tag archives that offer no unique value.

### Regulatory gate (Malaysia)

- **Keep all indexed/advertised content compliant with Malaysian healthcare advertising rules.** [P3] A clinic website counts as advertising under Malaysian law, governed by MOH's *Advertising Guidelines for Healthcare Facilities and Services* (MAB 3/2023) under the Medicines (Advertisement and Sale) Act 1956, plus the MMA Code of Medical Ethics. Avoid prohibited claims (guarantees, "best/No.1", cure claims); handle before/after imagery and testimonials per the guidelines; confirm whether content needs MAB approval (KKLIU reference where applicable). Re-verify current requirements against the latest MOH/MAB documents ([MAB guidelines](https://pharmacy.moh.gov.my/sites/default/files/document-upload/advertising-guidelines-healthcare-facilities-and-services-mab-3.2023.pdf), [MAB policy](https://pharmacy.moh.gov.my/en/documents/medicine-advertisements-board-mab-guidelines-and-policy.html)).
  - *Kaiteki application:* Treat this as a content-governance gate before indexing treatment/result pages. It also feeds E-E-A-T (see §7): surface author/medical-reviewer attribution and the 9 branches' registration details — both compliant and SEO-positive.

---

## 2. Site Performance & Core Web Vitals

This section covers Core Web Vitals (CWV) and the Next.js levers that hit them. CWV are real but secondary ranking signals (a page-experience tie-breaker); for a YMYL clinic site their bigger value is protecting UX, the WhatsApp conversion path, and crawl/index quality. **As of 2026 the three CWV and their thresholds are unchanged** — no new metric has been added ([web.dev Vitals](https://web.dev/articles/vitals), [thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)).

### Targets & measurement

- **Hit the three CWV at the 75th percentile: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.** [P1] INP replaced FID on **12 March 2024**. "Needs improvement" runs to LCP 4.0s / INP 500ms / CLS 0.25; all three must be "good" at p75 to pass. Treat these as hard pass/fail gates **per template** (home, branch, treatment, blog), not just the homepage, because CrUX/Search Console group URLs by similar experience ([core-web-vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)).
  - *Kaiteki application:* Define a CWV budget per route template and bake it into migration acceptance criteria. The migrated WP blog is the biggest risk — heavy WordPress images/embeds historically inflate LCP/CLS, so the blog must pass before launch.
- **Optimize against FIELD data (CrUX), not lab/Lighthouse scores.** [P1] Ranking uses real-user CrUX field data (trailing 28-day window, p75) shown in Search Console's CWV report and PageSpeed Insights "field data". Use Lighthouse/PSI lab data only to diagnose causes. INP can only be fully measured in the field, so add RUM via the `web-vitals` library or Next.js `useReportWebVitals` ([lab vs field](https://web.dev/articles/lab-and-field-data-differences), [PSI CrUX](https://developer.chrome.com/docs/crux/guides/pagespeed-insights)).
  - *Kaiteki application:* Wire `useReportWebVitals` to send INP/LCP/CLS to GA4 per branch page. Low-traffic branch pages may not appear in CrUX, so RUM is the only way to verify them.
- **Treat CWV as a page-experience tie-breaker, not a primary YMYL rank lever.** [P2] Provide overall good page experience (good CWV, HTTPS, mobile-friendly, no intrusive interstitials, clear main content) rather than micro-optimizing one metric while neglecting medical content quality ([page experience](https://developers.google.com/search/docs/appearance/page-experience)).
  - **Avoid** full-screen WhatsApp interstitials that block content on mobile (they hurt page experience). **Do** use a persistent sticky WhatsApp button instead.

### LCP & images

- **Prioritize the LCP image with `next/image` and never lazy-load it.** [P1] Identify each template's LCP element (usually the hero/treatment/branch photo) and mark exactly one per viewport high priority: the `priority` prop in Next.js ≤15 (emits `fetchpriority="high"` + preload), or the renamed `preload` prop in Next.js 16 (Oct 2025) — verify the installed version. Set `loading="lazy"` on below-the-fold images but NEVER on the LCP image. Always pass explicit `width`/`height` (or `fill` + a sized container). `fetchpriority="high"` on the hero has cut LCP ~0.7s in Google's tests ([next/image](https://nextjs.org/docs/app/api-reference/components/image), [prioritize LCP](https://unlighthouse.dev/learn-lighthouse/lcp/prioritize-lcp-image)).
- **Serve AVIF/WebP with responsive sizes and correct quality.** [P1] Enable `images.formats = ['image/avif','image/webp']` in `next.config` (AVIF is ~50% smaller than JPEG, ~20-30% smaller than WebP). Set a correct `sizes` attribute so mobile downloads appropriately small images; compress photos to ~quality 70-80 ([next/image](https://nextjs.org/docs/app/api-reference/components/image), [image optimization 2025](https://www.frontendtools.tech/blog/modern-image-optimization-techniques-2025)).
  - *Kaiteki application:* Clinic, device, doctor, and branch galleries are image-heavy — enable AVIF and set per-context `sizes` so a 400px card never downloads a 2000px source. This is the main LCP fix for the migrated blog. (No before/after galleries — prohibited under MAB; see §8.1.)
- **Optimize the critical request path: preconnect, preload, minimize render-blocking resources.** [P2] LCP = TTFB + load delay + load time + render delay. Add `preconnect` for any required cross-origin (image CDN); preload the LCP image and primary font; inline critical CSS and avoid synchronous scripts in `<head>` ([optimize LCP](https://web.dev/articles/optimize-lcp)).
  - *Kaiteki application:* If images come from an external bucket/CDN, `preconnect` to it. Self-hosting fonts via `next/font` removes any need to preconnect to Google Fonts.

### CLS & fonts

- **Eliminate font-driven CLS with `next/font` self-hosting and metric-matched fallbacks.** [P1] Load all fonts via `next/font` — it self-hosts at build time (zero Google requests), applies `font-display: swap`, and auto-generates `size-adjust`/`ascent-override` fallback metrics so the fallback occupies the same space, preventing swap shift. Subset to needed scripts (`subsets: ['latin']`) and preload the primary font. Web fonts cause ~25% of layout shifts ([next/font](https://nextjs.org/docs/app/api-reference/components/font), [optimize CLS](https://web.dev/articles/optimize-cls)).
  - *Kaiteki application:* For i18n (English-first, future BM/Chinese), subset only the scripts rendered per locale so English pages never ship CJK glyphs. Self-hosting also avoids PDPA concerns about leaking visitor IPs to Google Fonts.
- **Reserve space for all media, ads, embeds, and dynamic content (CLS ≤ 0.1).** [P1] Set explicit `width`/`height` (or CSS `aspect-ratio`) on every image, video, iframe, and map, and a fixed `min-height` for late-loading widgets. Insert banners/notices into already-reserved space. Images without dimensions cause ~60% of shifts; async-injected content ~15% ([optimize CLS](https://web.dev/articles/optimize-cls), [reserve space](https://speedvitals.com/blog/reserve-space-prevent-layout-shift/)).
  - *Kaiteki application:* The PDPA/cookie banner, embedded Google Maps on branch pages, and Google review widgets are classic CLS offenders — give each a fixed reserved height/placeholder.

### INP, JS & caching

- **Use React Server Components and streaming to cut client JS and protect INP.** [P1] Default to Server Components; mark only genuinely interactive leaves `'use client'`. Server Components ship zero JS, cutting the hydration/main-thread work that drives INP. Stream with `Suspense`/`loading.tsx` so the static shell paints fast. (Partial Prerendering remains experimental/version-gated — verify before relying on it.) ([patterns.dev](https://www.patterns.dev/react/nextjs-vitals/), [long tasks](https://web.dev/articles/optimize-long-tasks)).
  - *Kaiteki application:* A mostly read-only medical/marketing site should keep nearly everything as Server Components and reserve client JS for the WhatsApp CTA, nav menu, and gallery/lightbox — yielding strong INP with minimal effort.
- **Discipline third-party scripts; break up long tasks and yield to the main thread.** [P2] Audit every tag (GA4/GTM, Meta Pixel, chat/review widgets). Load non-critical scripts with `next/script` `strategy="afterInteractive"` or `"lazyOnload"`. Keep tasks under 50ms; yield with `scheduler.yield()` (provide a `setTimeout` fallback — support is still growing). Avoid synchronous third-party scripts in `<head>` ([long tasks](https://web.dev/articles/optimize-long-tasks), [yield to main thread](https://www.corewebvitals.io/pagespeed/yield-to-main-thread)).
  - *Kaiteki application:* Gate GTM/Meta Pixel behind PDPA consent and load `lazyOnload` — this improves INP and aligns with Malaysian data-consent expectations on a medical site.
- **Cut JS/CSS: code-split, tree-shake, ship critical CSS only.** [P2] Use `next/dynamic` for heavy client-only components (lightbox, maps, carousels); run `@next/bundle-analyzer` to trim large dependencies; prefer Tailwind/CSS Modules so only used CSS ships ([Next.js performance guide](https://blazity.com/whitepapers/the-expert-guide-to-nextjs-performance-optimization)).
  - *Kaiteki application:* Dynamically import the branch photo gallery/lightbox and Google Maps embed so branch pages aren't penalized for minority-use features; keep the homepage bundle especially lean.
- **Cache aggressively: static/ISR pages behind a CDN with correct headers.** [P2] Render marketing/info pages SSG and the blog with ISR. Ensure the CDN respects `s-maxage` and `stale-while-revalidate`; when using on-demand revalidation, also **purge the CDN** (revalidating the Next.js cache alone won't update edge copies until TTL expires). Lower TTFB flows straight into LCP ([CDN caching](https://nextjs.org/docs/app/guides/cdn-caching)).
  - *Kaiteki application:* Choose a host/CDN with a Singapore/SEA edge POP for low latency to Malaysian visitors. Branch/treatment pages are near-static (SSG); the blog uses ISR so editors publish without a full rebuild.

### Monitoring

- **Continuously monitor CWV in Search Console and set performance budgets in CI.** [P3] Watch the Search Console CWV report (mobile + desktop) after each release; add a Lighthouse-CI or PSI/CrUX-API check that fails the build when budgets break (e.g. lab LCP > 2.5s or JS bundle over threshold). CrUX recalculates over a trailing 28-day window, so regressions surface gradually ([CWV tools](https://web.dev/vitals-tools/)).
  - *Kaiteki application:* After migrating the WP blog into `/blog`, watch Search Console closely (replatformed content commonly regresses CWV/indexing first) and add a regression gate so a heavy new blog template can't silently break the blog URL group.

---

## 3. Structured Data & Schema Markup

This section covers JSON-LD structured data, which feeds rich results, the knowledge panel, and AI-answer extraction. Use one schema graph per route (nodes wired by stable `@id`), mark up only visible content, and validate every template. Three 2024-2026 shifts plus Malaysian medical law materially change what Kaiteki should emit.

### Identity & location

- **Emit a site-wide `Organization` typed `MedicalBusiness` on the homepage.** [P1] Include `name`, `url`, `logo`, `image`, `telephone`, `address` (`addressCountry: "MY"`), and `sameAs` (official profiles). No properties are strictly required since Nov 2023, but a stable `@id` is needed so other nodes reference it. This feeds the knowledge panel and controls which logo/profiles show — a core E-E-A-T identity signal ([Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)).
  - *Kaiteki application:* This is the parent brand entity; each of the 9 branches references it via `parentOrganization`.
- **Add a per-branch `LocalBusiness` (`MedicalClinic`) with NAP, geo, and hours.** [P1] Each branch gets a unique `@id`, `PostalAddress` (`addressCountry: "MY"`), `geo`, `telephone`, `url`, `image`, `priceRange`, and `openingHoursSpecification`, with a unique address. Unique per-location NAP + geo matches location queries and populates Maps/local packs ([LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business)).
  - *Kaiteki application:* Generate all 9 branch nodes from the typed in-repo branch data; each links back to the brand `Organization` via `parentOrganization`.
- **Emit a `WebSite` node for the site name; drop `SearchAction`.** [P2] The Sitelinks Searchbox was retired **21 Nov 2024**, so `SearchAction` now renders nothing — do not add it. Keep a `WebSite` node (`name`, `alternateName`, `url`, `@id`) referenced by pages via `isPartOf`; it still influences the displayed site name ([Sitelinks searchbox retirement](https://developers.google.com/search/blog/2024/10/sitelinks-search-box)).
  - *Kaiteki application:* Emit `WebSite` ("Kaiteki Skin Aesthetic Clinic") once in the root layout.

### Content & article markup

- **Use `Article`/`BlogPosting` per post with a credentialed `Physician` author, in one graph, validated.** [P1] Include `headline` (≤110 chars), `image` (provide 3 `ImageObject` aspect ratios), `datePublished`/`dateModified` (ISO 8601), `publisher`, and an `author` typed `Physician` with MMC credentials. Add `BreadcrumbList` on deep pages and wire everything by `@id`. Validate every template with the Rich Results Test, and mark up only visible content ([Article](https://developers.google.com/search/docs/appearance/structured-data/article), [SD policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)).
  - *Kaiteki application:* The author must be a real Kaiteki doctor (`Physician`, MMC credentials) — a strong YMYL E-E-A-T signal (see §7). Use clinic/editorial images only; no before/after photos in markup. Pair treatment pages with `MedicalWebPage`/`MedicalProcedure` and concern pages with `MedicalCondition` where applicable (see §4 entity optimization).

### What NOT to mark up

- **Do NOT mark up self-hosted `Review` or `AggregateRating`.** [P1] Own-site reviews are self-serving, so `LocalBusiness`/`Organization` pages get no review stars from them — and Malaysian healthcare advertising rules ban public testimonials and before/after photos. Omit `Review` and `AggregateRating` entirely; there is no SEO upside and real manual-action and legal risk ([review snippet policy](https://developers.google.com/search/docs/appearance/structured-data/review-snippet), [Malaysia advertising rules](https://www.laingbuissonnews.com/imtj/news-imtj/out-dated-advertising-rules-affect-malaysia/)).
  - *Kaiteki application:* Keep ratings on the Google Business Profile and link out to it (see §10, §11) rather than embedding review schema on-site.
- **Treat `FAQPage` and `HowTo` as deprecated for rich results.** [P2] `HowTo` rich results were removed in 2024; **FAQ rich results were fully removed (rollout 7 May 2026)**, with Search Console/Test/API support phasing out through Aug 2026 — and the former gov/health exception is gone. Both schema types still parse with no ranking penalty, so keep FAQ content for users and AI extraction, but do NOT design pages to earn FAQ/HowTo SERP real estate ([FAQPage](https://developers.google.com/search/docs/appearance/structured-data/faqpage), [SEJ: FAQ removal](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)).
  - *Kaiteki application:* Keep FAQ accordions (safety, downtime, pricing) for UX and AEO/PAA (see §4, §9); skip `HowTo` markup. As a health site, Kaiteki kept FAQ rich results after the 2023 restriction, but the May 2026 removal ends that — don't spend engineering effort chasing it.

---

## 4. On-Page SEO

This section covers per-page optimization: titles, descriptions, headings, URLs, images, social tags, freshness, and the entity/AEO layer. The 2025-2026 shifts that matter here: titles/descriptions are judged on pixel width and frequently rewritten when vague or boilerplate; "fake freshness" no longer helps and can hurt; and entity-rich, extractable structure now drives AI-Overview citation for the majority of health queries.

### Titles & descriptions

- **Write unique, descriptive titles under ~60 chars / ~600px; template via Next.js `title.template`.** [P1] Google truncates by pixel width (~600px), so wide characters truncate sooner; put the most distinctive term first, brand last. Set `{ title: { template: '%s | Kaiteki Skin Aesthetic Clinic', default: 'Kaiteki Skin Aesthetic Clinic' } }` in the root layout, then per-page titles via `generateMetadata`. Patterns: Treatment = `<Treatment> in Malaysia: <Benefit>`; Concern = `<Concern> Treatment & Causes`; Location = `<Treatment/Clinic> in <City> | Kaiteki <Branch>`; Blog = `<Specific Article Topic>`. Google rewrites vague ("Home"), stuffed, or boilerplate titles, costing you SERP control and CTR ([title link](https://developers.google.com/search/docs/appearance/title-link), [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)).
  - *Kaiteki application:* With 9 branches, the template must inject the specific city/branch and treatment so titles are genuinely distinct. **Avoid** "Best Aesthetic Clinic" on every page (boilerplate, and a Malaysian compliance issue — see §1); reserve a site-level title for the homepage only.
- **Author unique, accurate meta descriptions (~150-160 chars) per page; never duplicate.** [P1] Treat it as ad copy previewing real on-page content, with a soft WhatsApp value prop ("Book a consultation via WhatsApp"). Use site-level descriptions only on the homepage. Set via `metadata.description`/`openGraph.description`; cap snippet length with `max-snippet` and exclude boilerplate (pricing disclaimers) with `data-nosnippet` if needed. Google ultimately chooses the snippet, so this is influence, not control ([snippet docs](https://developers.google.com/search/docs/appearance/snippet)).
  - *Kaiteki application:* **Avoid** one boilerplate description across 9 branch pages; each should name the city and a couple of locally relevant treatments.

### Keyword mapping, URLs & headings

- **Build a one-keyword/one-intent-per-URL map across the 4 page archetypes to prevent cannibalization.** [P1] Map by intent: Concern pages = informational/commercial-investigation ("acne scars causes"); Treatment pages = commercial/transactional ("pico laser"); Location pages = local ("aesthetic clinic <city>"); Blog = informational long-tail/questions. When pages compete, consolidate the weaker into the stronger (merge + 301) or differentiate by long-tail intent; use `rel=canonical` only for near-duplicates that must coexist ([keyword cannibalization](https://searchengineland.com/guide/keyword-cannibalization), [keyword intent](https://seoboost.com/blog/keyword-intent/)).
  - *Kaiteki application:* The highest cannibalization risk is one national treatment page vs 9 per-branch versions all targeting "`<treatment>` Malaysia". Give treatment pages the generic/educational intent and branch pages the "in `<city>`" local intent; cross-link treatment pages to branch availability rather than duplicating treatment copy on every branch.
- **Use short, lowercase, hyphenated, evergreen slugs with a shallow 2-3 level hierarchy.** [P1] Hyphens (not underscores), keyword near the start, no dates/post IDs so URLs stay updatable. Structure: `kaiteki.my/treatments/<slug>`, `/concerns/<slug>`, `/branches/<city>`, `/blog/<article-slug>`. When migrating the WordPress blog from the subdomain, 301-redirect every old URL to its new slug and drop WP date/category cruft ([slug guide](https://yoast.com/slug/)).
  - *Kaiteki application:* The subdomain→`/blog` migration must ship a complete old→new 301 map before launch (see §1) — losing the WP blog's ranking equity is the single biggest migration risk. Keep slugs English-first but design `/ms/` routing so localized slugs don't collide.
- **Enforce exactly one `<h1>` and a logical, gap-free H2/H3 outline per page.** [P2] One `<h1>` stating the core subject in plain language (distinct from the `<title>`); H2s for main sections, H3s for subsections; never skip levels (no H2→H4); style with CSS, not heading choice. Reusable treatment outline: H1 = treatment; H2s = What it treats / How it works / Suitability / What to expect / Downtime & aftercare / Pricing & consultation / FAQs. Clean structure aids accessibility (WCAG) and featured-snippet/PAA/AI-Overview extraction ([headings](https://yoast.com/how-to-use-headings-on-your-site/), [heading tags](https://www.semrush.com/blog/heading-tags/)).
  - *Kaiteki application:* Create a typed MDX outline so all treatments and 9 branches share a consistent, accessible heading structure.

### Images & social previews

- **Give every meaningful image a descriptive filename, real alt text, and contextual caption.** [P2] Filenames: `pico-laser-acne-scar-treatment.jpg`, not `IMG_7489.jpg`. Alt text: concise, accurate (~80-125 chars), keywords used naturally — decorative images get `alt=""`. Use real `<img>`/`next/image` (Google does not index CSS background images); serve WebP/AVIF, lazy-load below the fold, and include images in an image sitemap (see §1) ([Google Images](https://developers.google.com/search/docs/appearance/google-images), [alt text best practices](https://alttext.ai/blog/image-alt-text-seo-best-practices)).
  - *Kaiteki application:* Procedure, device, and clinic photos must have medically accurate, non-misleading alt text/captions — this doubles as Malaysian medical-advertising compliance (no implied guaranteed results) and E-E-A-T evidence. (Patient before/after photos are prohibited outright — §8.1.)
- **Add complete Open Graph + Twitter/X card metadata with a 1200×630 image via `metadata.openGraph`.** [P2] Provide `og:title`, `og:description`, `og:image` (absolute HTTPS URL), `og:url` (canonical), `og:type` (`website`/`article`), `og:locale`; add `twitter:card="summary_large_image"`. Use a single 1200×630 JPG/PNG (<1MB) with text/logo in the center safe zone; Next.js auto-derives most Twitter tags from OG, and per-route images can use the `opengraph-image` convention ([Next.js metadata & OG](https://nextjs.org/docs/app/getting-started/metadata-and-og-images), [OG image sizes](https://www.krumzi.com/blog/open-graph-image-sizes-for-social-media-the-complete-2026-guide)).
  - *Kaiteki application:* Since conversion is WhatsApp/social sharing, verify previews render in WhatsApp specifically (it uses OG tags and caches aggressively). A missing/relative `og:image` breaks previews. Branded per-treatment/per-branch OG images make patient-chat shares look professional.

### Freshness, entities & AEO

- **Use genuine "last updated" dates only after substantive edits; keep YMYL content materially fresh.** [P2] Show published + last-updated dates and mirror them in `Article`/`MedicalWebPage` schema (`datePublished`/`dateModified`). Do NOT bump dates without real changes — Google now distinguishes genuine updates from "fake freshness" and discounts date-only changes, while substantive updates correlate with better performance (winning pages averaged ~393 vs 500 days of content freshness in analysis of the Dec 2025 core update) ([content refresh](https://www.contentgrip.com/content-refresh-strategy/), [Dec 2025 core update](https://raptive.com/blog/what-googles-december-2025-core-update-tells-us-about-quality/)).
  - *Kaiteki application:* Store published + updated dates in MDX/typed frontmatter. Establish a medical-review cadence (e.g. annual) where a named clinician actually reviews and updates each treatment/concern page, then update `dateModified` — serving both freshness and YMYL medical-review E-E-A-T (see §7).
- **Optimize for entities and semantic topical authority, not just keywords.** [P2] For each treatment/concern, cover the relevant medical entities and relationships: condition, causes, recognized treatment names (pico laser, microneedling, HIFU), ingredients, body areas, contraindications, related concerns. Interlink concern→treatment→branch in a topic cluster (see §6); add `MedicalWebPage`/`MedicalProcedure`/`MedicalCondition`, `MedicalClinic`, and `Physician` schema with `sameAs` to authoritative references. Entity-rich coverage materially boosts AI-Overview citation probability (the "15+ entities → ~4.8× selection" figure is a single industry study — directional, not Google-confirmed) ([entity SEO](https://mrs.digital/blog/entity-seo/), [semantic SEO](https://squin.org/semantic-seo/)).
  - *Kaiteki application:* Connecting treatments to named, credentialed Kaiteki practitioners (`Physician` schema, bylines) is doubly valuable — an entity/AEO signal AND core YMYL E-E-A-T. Keep entity-rich copy within Malaysian advertising rules (no prohibited/exaggerated claims).
- **Structure content for Answer Engine Optimization (AEO) since most health queries trigger AI Overviews.** [P2] Lead each section with a concise, directly quotable answer (1-3 sentences) before elaborating (inverted pyramid). Use question-style H2/H3s, short paragraphs, lists, comparison tables, and a definitions/FAQ block; provide citable facts with author/medical-reviewer attribution; keep the key answer near the top. (The ~78% YMYL AI-Overview trigger rate is from a legal-vertical study — verify for medical/Malaysia.) ([AEO best practices](https://greenflagdigital.com/aeo-best-practices/), [AEO guide](https://www.airops.com/blog/aeo-answer-engine-optimization)).
  - *Kaiteki application:* The blog is the main AEO surface — answer real patient questions ("Is pico laser safe?", "How much does HIFU cost in Malaysia?") with an upfront answer plus clinician attribution. Because conversion is WhatsApp-only, AEO's goal is brand citation/visibility that drives a later WhatsApp inquiry, not on-page conversion (see §9).

### Quality & SERP enhancements

- **Eliminate thin and duplicate content across templated location and treatment pages.** [P2] Every page must carry unique value — avoid near-identical location pages differing only by city name (Google's doorway/boilerplate risk). Add genuinely local content to branch pages (address, map, hours, branch-specific practitioners/photos, services offered, parking/transport). Set self-referencing canonicals; only create a page if it has its own intent in the keyword map ([title link / quality](https://developers.google.com/search/docs/appearance/title-link), [cannibalization](https://www.compose.ly/content-strategy/keyword-cannibalization)).
  - *Kaiteki application:* The 9 branches are the main thin/duplicate trap. Differentiate each with real local details and branch-specific staff rather than swapping a city token into one template — this strengthens local E-E-A-T (see §10) and Malaysian compliance.
- **Add a table of contents with anchor jump links on long treatment and blog pages.** [P3] On pages over ~1,000 words, add an in-page ToC linking to section anchors (`id` on H2/H3, e.g. `#how-it-works`) with descriptive anchor text; ensure smooth-scroll and correct `scroll-margin` so anchored headings aren't hidden under a sticky header. This can surface "jump to" sublinks in the SERP (at Google's discretion) and aids AI section-level extraction ([jump links](https://aioseo.com/how-to-create-jump-links-in-wordpress/), [ToC for SEO](https://zenbrief.com/blog/table-of-contents-for-seo/)).
  - *Kaiteki application:* Auto-generate the ToC from MDX headings so it stays in sync; especially useful on long treatment pages where patients want to jump straight to cost or aftercare.
- **Keep FAQ content for users and AI, but stop relying on FAQ schema for SERP rich results.** [P3] Google fully removed FAQ rich results (7 May 2026; see §3), so structure FAQs as clean question H3s with concise answers near the top, optimized for People-Also-Ask, featured snippets, and AI-Overview extraction rather than SERP real estate ([SEJ: FAQ removal](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/), [FAQPage](https://developers.google.com/search/docs/appearance/structured-data/faqpage)).
  - *Kaiteki application:* Treat clinic FAQs (safety, downtime, pricing) as AEO/PAA assets, not rich-result bait — don't waste engineering effort chasing FAQ rich snippets.

## 5. Content Strategy & Topical Authority

This section governs what Kaiteki publishes and how that content earns durable rankings and AI-answer citations. For a YMYL medical-aesthetic site, authority comes from comprehensive, entity-based topical coverage and demonstrable trust — not keyword-chasing — and every templated page must be genuinely unique to avoid Google's scaled-content/doorway penalties. A hard constraint overrides generic aesthetic-SEO advice throughout: Malaysia's Medicine Advertisements Board guidelines (MAB 1/2023 for clinics, MAB 3/2023 for facilities/services) prohibit patient testimonials, before/after patient photos, price/package comparisons, comparisons between facilities, superlatives, and celebrity endorsements ([MAB 3/2023](https://pharmacy.moh.gov.my/sites/default/files/document-upload/advertising-guidelines-healthcare-facilities-and-services-mab-3.2023.pdf)). Re-verify exact clauses with the clinic's compliance advisor before publishing anything promotional.

### 5.1 Build pillar-and-spoke topic clusters [P1]

Modern SEO is entity- and topic-based: Google rewards sites that cover a subject thoroughly, consistently, and credibly, and topic clusters hold rankings longer than scattered keyword pages ([Search Engine Land](https://searchengineland.com/guide/topic-clusters)).

- Create a comprehensive **pillar page** for each broad topic (e.g. `/treatments/acne-treatment`, `/concerns/melasma`) covering it end-to-end, then link bidirectionally to narrower **spoke pages** (sub-types, modalities, aftercare, candidacy, cost factors, FAQs).
- Use a consistent silo URL structure (`/treatments/{treatment}`, `/concerns/{concern}`) with dense contextual internal linking and descriptive anchors (see §6).
- Each spoke addresses one specific intent and links back to the pillar; the pillar links out to every spoke.
- **Do** keep clusters tight to the real niche (medical aesthetics). **Avoid** wandering into unrelated wellness topics that dilute the entity.

*Kaiteki application:* Map clusters to the actual service menu — pillars for major categories (acne, pigmentation/melasma, skin laxity/lifting, hair, body contouring), spokes for each device/modality, plus concern-based pillars matching how patients search (including Malay terms like 'jerawat', 'rawatan melasma'). The in-repo MDX/typed-data model is ideal for enforcing a clean silo.

### 5.2 Match content format to search intent [P1]

Serving the wrong format (e.g. a sales page for an informational query) fails the SERP and suppresses rankings regardless of quality ([Single Grain](https://www.singlegrain.com/content-marketing-strategy-2/how-to-match-content-with-search-intent/)).

- Classify every target query as **informational** (blog explainers/concern guides), **commercial-investigation** (treatment pages with candidacy, what-to-expect, options, FAQ), **navigational** (branded branch/doctor pages), or **transactional** (the treatment/branch page with the pre-filled WhatsApp CTA).
- Inspect the live SERP for each query and mirror the dominant content type and depth before writing.

*Kaiteki application:* Because conversion is WhatsApp-only, funnel intent — informational blog/concern pages educate and internally link **down** to the commercial treatment page, which carries the pre-filled WhatsApp CTA. **Avoid** putting a hard "book now" as the primary goal of an informational article; it mismatches intent and the regulatory tone.

### 5.3 Apply Google's people-first self-assessment to every page [P1]

The Helpful Content System is now baked into Google's core ranking systems (no standalone HCU since the March 2024 core update), so "helpfulness" is assessed as part of core updates and search-engine-first patterns get demoted sitewide ([Google](https://developers.google.com/search/blog/2024/03/core-update-spam-policies)).

- Run each page against Google's published questions: original information/analysis, substantial comprehensive coverage, insight beyond the obvious, a descriptive (non-clickbait) title, "would you bookmark this?", does the reader leave without needing to search again ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **Avoid** the search-engine-first warning signs Google lists: content made mainly to attract search visits, mass-producing across many topics, extensive automation, summarizing others without added value, and writing to a target word count (Google: "No, we don't" have a preferred word count).

*Kaiteki application:* The litmus test — would this page help a real prospective patient in KL/JB/Sabah decide and prepare, even if they arrived directly? **Avoid** spinning up near-duplicate pages just to capture '{treatment} {city}' permutations (a classic doorway signal; see §5.6).

### 5.4 Answer "Who, How, Why" and make Trust explicit [P1]

Health content is YMYL, where Google's systems weight E-E-A-T most heavily and state "trust is most important." Named, credentialed medical authorship/review and verifiable trust signals are the core lever for ranking health content and being cited by AI answer engines (see §7 for full implementation).

- **WHO:** named author + medical reviewer with credentials linking to a verifiable profile (e.g. Malaysian Medical Council / MMC registration).
- **HOW:** clinical sourcing — references to MOH/peer-reviewed sources; an AI/automation disclosure where a reader might reasonably ask how content was made.
- **WHY:** to help patients, not to rank.
- Add bylines, "Medically reviewed by Dr. X (MMC reg.)", last-reviewed date, citations, and clear About/contact/credential pages.

*Kaiteki application:* Doctors across 9 branches are an asset — real doctor profile pages (qualifications, MMC registration, special interests, branches) that author/review medical content and are internally linked from every treatment page. This is the compliant way to build authority where testimonials/before-after are restricted.

### 5.5 Demonstrate first-hand Experience with ORIGINAL media — within Malaysian limits [P1]

Google rewards first-hand experience evidenced by original photos/video the author took themselves and specific real-world observations ([SEJ](https://www.searchenginejournal.com/google-recommends-original-photos-for-product-reviews/437050/)). The standard aesthetic play — before/after galleries and testimonials — is **largely off-limits** in Malaysia.

- **Do** commission original photography of the 9 branches, devices/technology in use, treatment-room walkthroughs, and (consented) procedure shots; have doctors describe procedures first-hand.
- **Do** replace stock images everywhere — stock photos add no experience signal.
- **Avoid** patient before/after galleries and testimonial sections (prohibited under MAB 1/2023 & 3/2023). Confirm against the official MAB text and obtain compliance sign-off before any gallery.

*Kaiteki application:* This is a CRITICAL boundary — do not default to the patient-results tactics competitors abroad use. Build the experience signal through clinic/process imagery and clinician-authored procedure detail instead.

### 5.6 Make templated pages genuinely unique — avoid the doorway/scaled-content trap [P1]

Google's March 2024 scaled-content-abuse policy and the August 2025 spam update explicitly demote mass-produced/templated location pages "using the same template across dozens of cities" and doorway pages; the policy is intent-based and "applies whether automation or humans are involved" ([Google](https://developers.google.com/search/blog/2024/03/core-update-spam-policies), [SEO Sherpa](https://seosherpa.com/googles-august-2025-spam-update/)).

- Sharing one template across 9 branches and many treatments is fine, but each instance must carry substantial unique content: per-branch NAP, branch-specific doctors, parking/landmarks, branch photos, treatments actually offered there, local FAQs; per-treatment unique candidacy, process, downtime, risks, doctor commentary.
- **Avoid** publishing near-duplicate '{treatment} in {city}' pages that differ only by find-and-replace of the city name ([Sterling Sky](https://www.sterlingsky.ca/how-to-create-unique-and-helpful-service-area-pages-for-local-businesses/)).

*Kaiteki application:* With 9 branches × many treatments, Kaiteki is structurally exposed. Use the typed-data model to **enforce** unique fields per branch/treatment (don't let the template auto-fill identical paragraphs). Only create a {treatment}×{branch} page where there's genuinely unique value; otherwise keep one strong treatment pillar + branch pages, not a full cross-product matrix.

### 5.7 Use AI as an aid, never as a scaled generation engine [P1]

Google penalizes content created primarily to manipulate rankings, "no matter whether content is produced through automation, human efforts, or some combination"; unedited AI medical content is high-risk on a YMYL site ([Google](https://developers.google.com/search/blog/2024/03/core-update-spam-policies)).

- **Do** treat AI as a drafting/research aid only; every page must add original expertise, be fact-checked by a clinician, and reviewed by a named medical reviewer. Disclose AI/automation where a reader would reasonably ask.
- **Avoid** auto-generating at scale across topics or branches.

*Kaiteki application:* Set an editorial rule for the in-repo pipeline — AI may outline/draft, but a clinician must add first-hand procedure detail and a named doctor must medically review before publish. Given YMYL + Malaysian medical-ad rules, the human review step is also the compliance gate.

### 5.8 Cover topics comprehensively — depth beats word count [P2]

Comprehensiveness is a direct people-first quality signal and maximizes surface area for long-tail and AI-citation queries; thin pages that send users back to search are demoted ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).

- For each treatment/concern, cover: what it is, who it's for/candidacy, how it works/how it's done, what to expect, recovery/downtime, risks/side effects, alternatives, cost factors (within MAB limits), and FAQs.
- Use clear, descriptive H2/H3 headers that map to real sub-questions.
- **Avoid** padding to a word count — Google has no preferred length.

*Kaiteki application:* Build a standard treatment-page content spec/checklist into the typed schema so every treatment page covers the same complete question set with real clinical depth, and missing sections are visible.

### 5.9 Add question-based FAQs with FAQPage structured data for AEO [P2]

Question-format + FAQ-schema content is cited disproportionately by AI Overviews, ChatGPT, and Perplexity (third-party studies suggest much of the first ~30% of page content drives citations — treat as directional) ([Frase](https://www.frase.io/blog/faq-schema-ai-search-geo-aeo)).

- Append genuine patient-question FAQs using question-form H2/H3 headers, concise ~40–60-word direct answers up top, then detail; `FAQPage` JSON-LD is optional (entity/extraction signal only).
- Note (updated 2026-07): Google **fully removed FAQ rich results from Search on 2026-05-07** (structured-data docs deleted June 2026; Rich Results Test / GSC support withdrawn Jun–Aug 2026). No FAQ SERP snippet is available to anyone — the value of FAQ content is AI-engine extraction and PAA coverage, not rich results. Spend zero effort on FAQ rich-result eligibility.

*Kaiteki application:* Mine real WhatsApp enquiries and "People Also Ask" for actual patient questions (pain, downtime, suitability for Asian skin, halal/ingredient concerns) and answer them concisely. Keep claims MAB-compliant (no comparative/superlative claims). See §9 for broader AEO guidance.

### 5.10 Run a substantive content-refresh cadence by type [P2]

Scheduled substantive refreshes sustain rankings and YMYL accuracy/freshness; vendor figures (e.g. quarterly refreshes ~42% better than annual) are directional, not Google-published ([Animalz](https://www.animalz.co/blog/content-refresh)).

- Cadence by page type: competitive treatment/pricing-adjacent pages every 3–6 months; how-to/concern guides ~every 6 months; foundational evergreen pages annually; stats/data pages more often.
- Make **substantive** updates (new clinical info, new modalities, refreshed FAQs/photos), then update the visible "last updated / medically reviewed" date. Track a content inventory with last-reviewed dates.
- **Avoid** changing dates cosmetically to look fresh — Google explicitly says this won't help.

*Kaiteki application:* Tie "medically reviewed" dates to an actual clinician re-review, which doubles as periodic compliance re-checking against current MAB rules.

### 5.11 Make branch pages locally specific and tie them to a local entity [P2]

Localized specificity builds trust and dodges the templated-location-page demotion ([BrightLocal](https://www.brightlocal.com/learn/service-area-pages/)).

- Each branch page: exact NAP matching Google Business Profile, embedded map, nearby landmarks/parking/transport, branch-specific doctors and treatments offered there, branch photos, branch FAQs, hours, and a branch-specific pre-filled WhatsApp CTA.
- Add `LocalBusiness`/`MedicalClinic` structured data per branch (see §3, §10).
- **Avoid** identical intro/closing paragraphs across branch pages.

*Kaiteki application:* Across KL/Selangor/Johor/Sabah, lean into real regional differences (which doctors, which devices, local landmarks). Ensure NAP across all 9 pages matches each Google Business Profile exactly.

### 5.12 Treat the WordPress → /blog migration as an authority upgrade [P2]

A structured migration + audit preserves equity and upgrades topical authority instead of porting thin legacy content.

- 1:1 301-redirect every old URL; audit each post — consolidate/merge thin or overlapping posts into stronger spokes, prune low-quality legacy posts, map every post into the treatment/concern taxonomy, and add internal links up to the relevant pillar (and back).
- Re-author/medically-review posts touching health claims for E-E-A-T and MAB compliance before they go live.

*Kaiteki application:* This is the moment to retire any old testimonial/before-after posts that may breach MAB, deduplicate, and wire posts into the new clusters to channel authority to commercial pages. Consolidating onto the main domain (vs. a subdomain) is itself an authority win (see §7.11).

### 5.13 Differentiate via depth and compliant authority — not copied tactics [P3]

Topical authority is comparative: Google rewards the most helpful, comprehensive, trustworthy result for each query. Out-covering and out-trusting competitors is the durable advantage.

- Audit the top competitor (cliniccleo.com) and Malaysian SERPs for content gaps: thinly-covered treatments/concerns, unanswered questions, missing doctor-expertise signals.
- Win on depth, named-clinician authorship, original clinic media, comprehensive FAQs, and bilingual (EN-first, i18n-ready) coverage of how patients search (English + Malay terms).
- **Avoid** copying any non-compliant tactic (before/after, testimonials, "best/cheapest" superlatives) even if a competitor appears to get away with it — verify each against MAB first.

*Kaiteki application:* Plan localized Malay variants for high-intent concern/treatment terms early in the taxonomy. Benchmark treatment-page depth and doctor signals against cliniccleo.com and close gaps compliantly.

## 6. Internal Linking & Anchor Text

Internal linking is how Kaiteki distributes crawl access and link equity (PageRank) across a 9-branch, multi-treatment, multi-blog site, and how it signals topical relevance to Google and AI Overviews/LLMs. The highest-leverage move is a deliberate concern ↔ treatment ↔ location cross-linking model with descriptive, varied, natural anchors and zero orphan pages — all respecting Malaysian medical-advertising rules (no superlative/comparative claims in anchor text or link context).

### 6.1 Use only crawlable `<a href>` links [P1]

Google reliably crawls a link only when it is an `<a>` element with a resolvable `href`; it does NOT reliably extract links from `<span>` onclick, JS button handlers, or router directives without an href ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)).

- In Next.js App Router, use the `<Link href>` component (which renders a real `<a href>`) for all internal links — never `onClick` navigation.
- **Avoid** relying on JS-only navigation for treatment cards, branch selectors, mega-menu items, or "related posts" tiles.

*Kaiteki application:* Audit that every treatment card, branch selector, mega-menu item, and blog "related posts" tile renders a real `<a href>`. WhatsApp CTAs are conversion deep links (`wa.me`), not internal links — they pass no internal equity, so the internal architecture must stand independently of them.

### 6.2 Write descriptive, concise, relevant anchor text [P1]

Anchor text is a primary relevance signal Google uses to understand the target and even to generate SERP title links ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)).

- **Do** describe the destination: 'acne scar treatment in Johor Bahru', 'how Pico laser works'.
- **Avoid** generic anchors ('click here', 'read more', 'this page') and bare URLs.
- For **image links** (treatment thumbnails), Google uses the `img alt` attribute as the anchor — set alt to the treatment name + intent.

*Kaiteki application:* Set descriptive alt text on every linked treatment thumbnail; use intent-rich phrases in body links rather than "learn more".

### 6.3 Vary anchor text naturally; avoid exact-match over-optimization [P2]

Uniform exact-match anchoring is a pattern Google's spam/Penguin-lineage systems associate with manipulation; varied natural anchors reinforce topical relevance without tripping it. Note: specific ratio figures (e.g. exact-match under ~10%, branded the largest share) are industry heuristics, not Google-published numbers, and apply mainly to **external** backlink profiles — Google has indicated there is **no over-optimization penalty for internal linking** ([Wielded](https://www.wielded.com/blog/exact-vs-varied-anchor-text), [The Links Guy](https://thelinksguy.com/anchor-text-ratio/)).

- Mix exact-match, partial-match, branded, and natural-phrase variants so the anchor profile reads like natural editorial language.
- **Avoid** pointing dozens of internal links at one page with the identical keyword anchor.

*Kaiteki application:* For the acne-scar treatment page, vary internal anchors across the site: 'acne scar removal', 'treating acne scarring', 'our acne scar solutions', 'subcision for acne scars'. Don't anchor every blog post with the same 'acne scar treatment Malaysia' phrase. Internal anchors can be varied freely for clarity without ratio anxiety.

### 6.4 Adopt a hub-and-spoke / pillar-cluster architecture [P1]

Topic clusters concentrate and circulate link equity within a theme and signal the topical authority/E-E-A-T a YMYL site needs; a backlink to any spoke also lifts the hub via internal links ([Search Engine Land](https://searchengineland.com/guide/topic-clusters), [SEO Kreativ](https://www.seo-kreativ.de/en/blog/hub-and-spoke-model/)).

- Create pillar/hub pages for broad concerns ('Acne & Acne Scars', 'Pigmentation', 'Anti-Aging') that link OUT to every cluster page (treatments, sub-concerns, related blog posts); each cluster page links BACK to the pillar.
- Build dense, bidirectional, contextually-linked clusters around each entity (mirrors the content model in §5.1).

*Kaiteki application:* Pillars = skin concerns; spokes = individual treatments + supporting blog articles. Migrated WordPress posts become spokes that must link up to the relevant concern/treatment pillar, not float as orphans.

### 6.5 Implement concern ↔ treatment ↔ location cross-linking [P1]

A three-way mesh distributes equity to deep, under-linked location pages, supports local-pack relevance, and prevents keyword cannibalization across branches ([Backlinko](https://backlinko.com/multi-location-seo), [Stackmatix](https://www.stackmatix.com/blog/local-seo-for-multiple-locations)).

- Concern hubs link to the treatments that address them.
- Each treatment page links to the branch pages that offer it, using localized anchors ('Pico laser at our Mont Kiara branch').
- Each of the 9 location pages links to the treatments available there and to localized blog/concern content.
- Link location pages from the homepage and main nav so they get prominence comparable to service pages.

*Kaiteki application:* Build a treatment-×-branch matrix so 'acne scar treatment' resolves to the correct branch page. Give each branch unique local content to avoid cannibalization (see §5.6); cross-link nearby branches sparingly and only where genuinely relevant.

### 6.6 Keep a flat architecture — important pages within ~3 clicks [P2]

Crawl frequency and perceived importance correlate with shallow click depth; flatter structures index faster and rank better ([ClickRank](https://www.clickrank.ai/crawl-depth-in-seo/), [Design in DC](https://designindc.com/blog/why-flat-site-structures-outperform-deep-navigation-for-seo/)).

- Every important treatment, branch, and cornerstone blog post should be reachable within 2–3 clicks of the homepage.
- Use mega-menu/category navigation and contextual links instead of deeply nested hierarchies.
- **Avoid** burying treatments under concern > subcategory > treatment > branch chains 4+ levels deep.

*Kaiteki application:* Surface top treatments and all 9 branches from the global nav/footer so depth stays shallow.

### 6.7 Eliminate orphan pages — every page needs ≥1 internal link [P1]

Google's guidance: "Every page you care about should have a link from at least one other page on your site." Orphan pages are poorly discovered, receive no internal equity, and may not be indexed even via sitemap — a common failure mode after a blog migration ([Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)).

- Run periodic crawls (Screaming Frog, Ahrefs/Semrush Site Audit) to surface orphans and link them in from a relevant hub, related-content module, or breadcrumb.

*Kaiteki application:* After migrating the blog into kaiteki.my/blog, the biggest orphan risk is old posts losing inbound links. Ensure every migrated post is linked from a category/tag hub, the relevant treatment/concern pillar, AND a related-posts module.

### 6.8 Prioritize contextual in-body links over boilerplate [P2]

Editorially-placed in-content links carry more topical/relevance weight per link than repeated footer/sidebar boilerplate; AI/LLM systems also extract richer meaning from in-body contextual links. (Google has not stated an explicit footer-link penalty — the documented difference is contextual relevance and PageRank dilution.) ([ClickRank](https://www.clickrank.ai/internal-links-in-seo/), [Uprankd](https://uprankd.com/news/guides/how-google-interprets-internal-links-beyond-simple-page-rank-flow))

- Add genuine in-context links within paragraphs (e.g. within a paragraph on acne scar types, link to the relevant treatment).
- **Avoid** relying solely on the global footer's treatment list to surface pages.

*Kaiteki application:* Use in-context links in blog posts and treatment copy to connect related concerns, treatments, and articles; treat footer/nav links as discovery aids, not the only path.

### 6.9 Implement breadcrumbs with BreadcrumbList JSON-LD [P2]

Breadcrumbs give crawlers an extra hierarchical path to deep pages, distribute equity upward, and improve UX. Note: Google removed breadcrumb trails from **mobile** search snippets on 2025-01-23 (domain-only display; desktop still shows them), but the `BreadcrumbList` schema is still read by crawlers and retains value — keep it ([Google](https://developers.google.com/search/blog/2025/01/simplifying-breadcrumbs), [Sitebulb](https://sitebulb.com/resources/guides/breadcrumbs-in-seo-what-googles-mobile-change-actually-means/)).

- Add visible breadcrumbs (Home > Treatments > Treatment, or Home > Locations > Branch) plus `BreadcrumbList` JSON-LD on treatment, concern, branch, and blog pages.
- **Avoid** dropping the schema just because mobile snippets no longer show the trail.

*Kaiteki application:* Emit breadcrumbs and matching `BreadcrumbList` JSON-LD on every route in the Next.js app.

### 6.10 Add related-content modules to circulate equity and de-orphan [P2]

Related modules add multiple contextual links, strengthen clusters, and reliably ensure newer/deeper posts receive inbound links ([Emplibot](https://emplibot.com/internal-links-seo-best-practices-2025)).

- Curate 'Related treatments' / 'Related articles' modules by entity/topic relatedness — not random or purely date-based 'latest posts'.
- Keep the link set focused so equity isn't over-diluted.

*Kaiteki application:* Since content is in-repo (MDX/typed data, no CMS), define relatedness via typed frontmatter (concern/treatment tags) so the related module is deterministic and curated — this doubles as the orphan-prevention safety net.

### 6.11 Use a reasonable number of links per page [P3]

Link equity is finite per page; a link is worth more as 1 of 5 than 1 of 50, so concentrating internal links on priority pages raises their relative authority ([Uprankd](https://uprankd.com/news/guides/how-google-interprets-internal-links-beyond-simple-page-rank-flow), [Semrush](https://www.semrush.com/blog/how-do-you-use-internal-linking-for-seo/)).

- Keep navigation lean; prioritize the most important destinations.
- **Avoid** mega-menus that list all treatments × all branches, creating hundreds of site-wide links that drown out high-value pages.

*Kaiteki application:* Scope the menu — e.g. show branches on a dedicated Locations hub rather than cross-multiplying treatments × branches in the global nav.

### 6.12 Qualify outbound links; keep medical citations followed [P3]

Correct `rel` attributes keep Google's link graph clean; citing authoritative medical sources with normal followed links supports YMYL trust ([Google](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)).

- Use `rel="sponsored"` for paid/affiliate links, `rel="ugc"` for user-generated content (comments/reviews), and `rel="nofollow"` only when you don't endorse a source.
- **Do** keep legitimate medical/clinical references (PubMed, MOH/KKM, journals) as normal followed links with descriptive anchors.
- **Avoid** blanket-nofollowing all external links.

*Kaiteki application:* Reserve nofollow/sponsored for partner/promotional outbound links. Ensure link context and anchors avoid superlatives/guarantees that breach Malaysian medical-advertising rules.

### 6.13 Run scheduled internal-link audits [P2]

Internal link health degrades over time (deleted pages, migrations, new content); regular audits maintain crawlability and equity distribution ([Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/tutorials/internal-linking-audit-with-the-seo-spider/), [Inflow](https://www.goinflow.com/blog/audit-internal-links-for-seo/)).

- Crawl regularly to flag orphans, broken links, redirect chains, excessive click depth, under-linked priority pages, and over-optimized/duplicate anchors. Fix redirect chains so equity flows cleanly.
- Use Search Console's internal-links report to confirm top-linked pages match business priorities.

*Kaiteki application:* Schedule a crawl immediately after the blog migration to catch orphaned/broken posts, then quarterly. Verify GSC's "top linked pages" surfaces priority treatments and branch pages — not just the homepage/footer-linked utility pages.

## 7. E-E-A-T (Experience, Expertise, Authoritativeness, Trust)

E-E-A-T is Google's framework for assessing content quality, with **Trust the single most important component** (Experience, Expertise, and Authoritativeness all feed into Trust). It is not a direct ranking factor but a conceptual model Google's systems approximate via many signals, and Google "gives even more weight" to strong E-E-A-T on YMYL topics — which medical-aesthetic content squarely is. For Kaiteki, build E-E-A-T through credentials, transparency, evidence-based education, and off-site Google reviews rather than the testimonial/before-after tactics common in unregulated markets — those are prohibited under Malaysian law (see §7.6). The Search Quality Rater Guidelines were updated Sept 11, 2025 (a minor update adding AI Overview rating examples and an expanded YMYL "Government, Civics & Society" category) ([Google SQRG](https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf), [Search Engine Land](https://searchengineland.com/google-updates-search-quality-raters-guidelines-adding-ai-overview-examples-ymyl-definitions-461908)).

### 7.1 Add author bylines linking to credentialed doctor profiles — the "Who" [P1]

Google "strongly encourage[s] adding accurate authorship information, such as bylines"; clear authorship is the most direct Expertise/Experience signal and drives AI-Overview citation priority ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).

- Carry a visible byline (e.g. 'By Dr. [Name], MBBS, LCP') linking to a dedicated doctor profile page.
- Each profile lists full name, photo, MMC (Malaysian Medical Council) registration, Annual Practising Certificate status, LCP credentialing (and the specific aesthetic procedures privileged), qualifications, years of experience, and branch.

*Kaiteki application:* Build a typed `doctors` data structure in-repo so each branch doctor has a canonical profile reused across treatment pages and bylines. Surface MMC reg number and LCP status prominently — verifiable Malaysian credentials are a uniquely strong YMYL trust signal competitors often omit.

### 7.2 Add visible "Medically reviewed by Dr. [Name]" attribution [P1]

YMYL medical content is held to the highest E-E-A-T bar; a reviewer attribution signals clinician verification and improves Trust and AI-citation likelihood ([Rise](https://rise.co/blog/ranking-for-trust-how-googles-e-e-a-t-updates-are-changing-healthcare-seo)).

- For any article written/assisted by non-clinical staff, add "Medically reviewed by Dr. [Name], [qualification]" near the byline, with review date and a link to the profile.
- Keep writer and reviewer as distinct, real, named people; re-review and re-date when guidance changes.

*Kaiteki application:* Encode `reviewer` + `reviewDate` as MDX frontmatter fields rendered by a consistent component. Ensure the named reviewer actually holds LCP for the procedures discussed — Malaysian case law has penalised practitioners acting beyond their credentialing ([RDS Law Partners](https://www.rdslawpartners.com/post/aesthetic-medicine-in-malaysia-navigating-the-legal-regulatory-framework)).

### 7.3 Mark up authors, reviewers, and the org with schema [P1]

Schema makes author credentials, medical-reviewer relationships, and organizational identity machine-readable — the fields Google and AI systems use to assess E-E-A-T and decide citations ([Google Organization schema](https://developers.google.com/search/docs/appearance/structured-data/organization), [schema.org/MedicalWebPage](https://schema.org/MedicalWebPage)).

- Use `Article`/`MedicalWebPage` with `author` referencing a `Person`/`Physician` node (name, jobTitle, `sameAs` to verifiable profiles) and `reviewedBy` referencing the medical reviewer.
- Add `Organization`/`MedicalClinic` with name, logo, url, telephone, address, and `sameAs`; per-branch `LocalBusiness`/`MedicalClinic` markup (see §3, §10).
- **Avoid** listing any credential the doctor doesn't actually hold — credentials in schema must match reality.

*Kaiteki application:* In Next.js App Router, emit JSON-LD per route (org-level in root layout; `Physician`/`MedicalWebPage` on doctor and article routes; branch `MedicalClinic` on each branch page). Keep one canonical `Person` node per doctor and reference it by `@id` to avoid duplication across 9 branches.

### 7.4 Build authoritative About / credentials / branch pages [P1]

Google's rater guidance evaluates the reputation and transparency of the business behind YMYL content; a clear About page and verifiable real-world identity are core Trust signals ([Google SQRG](https://services.google.com/fh/files/misc/hsw-sqrg.pdf), [Brand Vision](https://www.brandvm.com/post/e-e-a-t-20-trust-signals-website)).

- **About page:** clinic history, ownership/operating entity, mission, the medical team.
- **Credentials page:** facility licenses (Private Healthcare Facilities & Services Act), medical-device registrations (Medical Device Act 2012) where relevant, professional memberships (e.g. MSAM), awards.
- **Each of 9 branch pages:** real street address, Google Maps embed, phone, and the credentialed doctors at that location.

*Kaiteki application:* Nine real branches across KL/Selangor/Johor/Sabah is a genuine E-E-A-T asset competitors can't fake — surface every address, phone, and license, and cite the operating company name and registration for ownership transparency.

### 7.5 Cite authoritative medical sources for factual claims [P1]

"Evidence of the expertise involved" is an explicit Google Expertise question; authoritative citations strengthen YMYL Trust and materially raise the odds of AI-answer citation ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [MedlinePlus](https://medlineplus.gov/about/using/citation/)).

- Link each substantive claim to a specific primary/authoritative source — PubMed/PMC, NIH/MedlinePlus, peer-reviewed journals, Malaysian MOH/CPG guidelines, device/drug regulators — not vague "studies show".
- Prefer recent sources (~last 5 years); date references; add a References section or inline citations.
- **Avoid** citing competitor or commercial pages as "authority".

*Kaiteki application:* Standardise a citations component in MDX. For Malaysia-specific topics, cite MOH Clinical Practice Guidelines and MOH Aesthetic Medical Practice Guidelines — this doubles as local relevance and demonstrates compliance literacy.

### 7.6 Comply with Malaysian medical-advertising law — the governing constraint [P1]

Under the Medicines (Advertisement & Sale) Act 1956 and MMC/MOH ethics guidelines: **no** before/after patient images, **no** patient testimonials, **no** exaggerated/comparative or "best clinic" claims, **no** inducement-style promotions of regulated procedures ([MOH MAB](https://pharmacy.moh.gov.my/en/documents/medicine-advertisements-board-mab-guidelines-and-policy.html), [RDS Law Partners](https://www.rdslawpartners.com/post/aesthetic-medicine-in-malaysia-navigating-the-legal-regulatory-framework)). These are legal/ethical obligations, not options.

- **Permitted, trust-building content:** doctor names and qualifications, MMC registration, LCP credentialing, services offered, branch locations, contact details, evidence-based education. Include the Medical Device Act 2012 registration statement/number where devices are advertised.
- Working within these limits forces a credential- and education-led E-E-A-T strategy that is more durable for YMYL anyway.

*Kaiteki application:* This shapes the entire content model — Kaiteki cannot copy testimonial/before-after tactics from less-regulated competitors. Have a clinician/compliance reviewer sign off content before publish (the same gate as §5.7). Re-verify current MAB/MMC wording before publishing any promotional content.

### 7.7 Demonstrate first-hand "Experience" within advertising limits [P2]

Experience (added Dec 2022) is increasingly weighted; Google rewards original photos and process detail "that only someone who owned and used the product could possess" ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [41 North Digital](https://www.41northdigital.com/blog/showcasing-first-hand-experience-mastering-googles-e-e-a-t-in-2025)).

- Show genuine clinical experience: how a treatment is actually performed at Kaiteki (steps, device names/models, downtime, what to expect), original clinic/equipment/team photos, and doctor commentary ("In our practice we typically see...").
- **Avoid** before/after patient photos and patient testimonials (prohibited; see §7.6). Substitute facility/equipment/team imagery and factual procedure walkthroughs.

*Kaiteki application:* This mirrors §5.5 — first-hand experience is shown through compliant clinic/process media and clinician-authored explanations, not patient results.

### 7.8 Establish technical/on-site Trust signals (HTTPS, policies, real NAP) [P1]

These are baseline Trust signals raters and users look for; their absence is a YMYL credibility red flag ([Brand Vision](https://www.brandvm.com/post/e-e-a-t-20-trust-signals-website), [Local Dominator](https://localdominator.co/eeat-for-local-seo/)).

- Serve the entire site over HTTPS; publish clearly linked Privacy Policy and Terms (footer).
- Provide an easy-to-find Contact page with real address(es), phone(s) with country code, and a map; display consistent NAP site-wide; show the operating entity/registration.

*Kaiteki application:* Since conversion is WhatsApp-only, the WhatsApp number is the de-facto primary contact — ensure it matches the NAP used in schema and Google Business Profiles **exactly** across all 9 branches to avoid trust-eroding inconsistency.

### 7.9 Cultivate off-site reputation via Google Business Profile reviews [P2]

Google's rater process evaluates a business's off-site reputation; third-party reviews are "reputation proof" precisely because they live off-site ([Internet Reputation](https://www.internetreputation.com/the-e-e-a-t-audit-how-google-scores-your-credibility-and-what-most-people-get-wrong/), [Local Dominator](https://localdominator.co/eeat-for-local-seo/)).

- Maintain a verified, complete Google Business Profile for each of the 9 branches (categories, hours, address, photos, services); gather and respond professionally to genuine reviews.
- **Avoid** republishing patient testimonials on kaiteki.my (prohibited) and **never** incentivise or fake reviews.

*Kaiteki application:* GBP reviews are off-site and patient-initiated, making them a compliant way to surface social proof that on-site testimonials cannot. Let reviews live on Google (see §11 for reputation operations).

### 7.10 Make "Why" people-first and disclose AI/automation [P2]

Google calls "Why" "perhaps the most important question": content made primarily to help people aligns with what core systems reward, while AI content made primarily to manipulate rankings violates spam policies ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Google AI-content policy](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content)).

- Produce decision-grade information (treatments, risks, candidacy, aftercare) to help patients, not to chase rankings.
- If AI substantially generates content, disclose it where readers would reasonably expect to know how it was made; never mass-produce thin AI pages across 9 branches (see §5.7).

*Kaiteki application:* Keep clinician authorship/review central even when drafting is AI-assisted, and differentiate branch pages with genuine local detail.

### 7.11 Run a topical-authority hub anchored to credentialed clinicians [P2]

Google's Authoritativeness questions ask whether the site is "widely-recognized as an authority on its topic"; depth + consistent expert authorship builds entity-level authority and favours AI-Overview citation ([Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Surfer](https://surferseo.com/blog/eeat-in-ymyl/)).

- Organise content into comprehensive treatment/condition clusters (pillar + supporting articles; see §5.1, §6.4) authored/reviewed by the relevant credentialed doctors, with internal links to treatment pages and doctor profiles.
- Provide substantial, comprehensive coverage and keep it current/re-dated.

*Kaiteki application:* Migrating the WordPress blog into kaiteki.my/blog consolidates authority onto the main domain (vs. a separate subdomain) — a meaningful E-E-A-T/consolidation win. Preserve URLs with 301s and re-attribute legacy posts to real credentialed authors/reviewers.

### 7.12 Treat E-E-A-T as the AI-search citation foundation — verify the framing [P2]

Following E-E-A-T principles strongly helps content get cited in AI Overviews/AI search; verified author credentials and original data correlate with higher citation rates ([Bliss Drive](https://www.blissdrive.com/blog-ai-visibility/eeat-how-google-and-ai-platforms-evaluate-trust-and-authority/), [Wellows](https://wellows.com/blog/google-ai-overviews-ranking-factors/)). **Caveat:** the popular claim that E-E-A-T acts as a binary "citation pre-filter that runs before other factors" is an SEO-vendor narrative, not confirmed by Google — Google states there are no special requirements or optimizations to appear in AI Overviews/AI Mode, and that E-E-A-T is a conceptual quality framework, not a direct computational signal ([Google AI features](https://developers.google.com/search/docs/appearance/ai-features)). Treat it as a plausible heuristic.

- Optimise the entity layer so AI systems can verify and cite you: clear author entities with `sameAs` links, consistent organization identity, original data/specifics, authoritative citations, and structured FAQ/Q&A content (see §5.9, §9).

*Kaiteki application:* The underlying actions (credentials, schema, citations, entity clarity) are low-regret regardless of how AI ranking evolves — implement them for their own sake, not on the strength of unverified vendor statistics.

## 8. YMYL & Medical/Aesthetic-Specific SEO

This section governs how Kaiteki publishes health content at the intersection of Google's strictest quality bar (Your Money or Your Life) and Malaysian medical-advertising law. The two layers reinforce each other, but the legal layer is the harder constraint: a page can be excellent SEO and still be illegal. Treat Malaysian regulation (MAB/KKLIU, MMC ethics, PDPA) as a gate that overrides any generic aesthetic-SEO playbook — including anything the competitor cliniccleo.com does. Key MMC references: the *Dissemination of Information* guideline (Sept 2025, cited in §8.1) and the **Guideline on the Ethical Aspects of Aesthetic Medical Practice** ([MMC, Sept 2025](https://mmc.gov.my/wp-content/uploads/2025/09/Guideline-on-The-Ethical-Aspects-of-Aesthetic-Medical-Practice.pdf)) — cite these over pre-2025 MMC editions.

### 8.1 Hard compliance rules (legal first, SEO second)

- **No patient testimonials, reviews, or identifiable before/after photos on the medical site. [P1]** MMC ethical guidelines and the MAB Advertising Guidelines for Healthcare Facilities (3/2023) prohibit patient testimonials, before/after patient photographs, identifiable patients, celebrity endorsement, and anything creating an "unjustified expectation of beneficial treatment" ([Medical Protection MY](https://www.medicalprotection.org/malaysia/casebook-resources/factsheets/factsheets/mal-practice-promotion), [MMC dissemination guideline, Sept 2025](https://mmc.gov.my/wp-content/uploads/2025/09/The-Dissemination-of-Information-by-Medical-Profesionals-Including-on-Social-Media.pdf)). The 2025 MMC reissue extends this to social media.
  - **Do** keep factual non-patient signals: doctor qualifications, substantiated accreditations/awards, years operating, number of branches.
  - **Avoid** embedded Google review stars, quote cards, written testimonials, or before/after galleries on treatment/service pages — and do **not** add `Review`/`AggregateRating` schema to medical pages (it both marks up prohibited content and breaches Google's self-serving-review policy; see §11.1).
  - *Kaiteki application:* Do not migrate any testimonial section or before/after gallery from the current WordPress site. Off-site Google Business Profile reviews (user-generated, on Google's platform) are a separate matter and remain fine — the prohibition is on Kaiteki publishing/curating testimonials in its own advertising. Do not copy cliniccleo.com here; matching a competitor's non-compliant tactic exposes Kaiteki to enforcement.

- **Ban superlatives, guarantees, and outcome claims; enforce a prohibited-words lint. [P1]** No "No.1/best/leading/only", no "guaranteed/100% effective/permanent cure/no side effects/painless/risk-free/instant results", and no comparative claims against other clinics unless fully substantiated and balanced ([MAB 3/2023](https://pharmacy.moh.gov.my/sites/default/files/document-upload/advertising-guidelines-healthcare-facilities-and-services-mab-3.2023.pdf), [MAB services policy, 15 May 2025](https://pharmacy.moh.gov.my/sites/default/files/document-upload/15.5.2025-mab-policy-and-decision-services.pdf)). Replace with compliant patterns: "may help reduce the appearance of…", "results vary between individuals", "a consultation is required to assess suitability", "treatment carries risks explained during consultation".
  - *Kaiteki application:* Encode the banned-word list as a shared repo lint config (regex over MDX/typed content **and** meta titles/descriptions) so every article, treatment page, and tag is checked. The common SEO title "Best [treatment] in KL" is non-compliant; use neutral descriptive titles like "[Treatment] at Kaiteki — What It Involves, Suitability & Branches".

- **Display the MAB/KKLIU approval number + promoter details on every advertisement page. [P1]** Under the Medicines (Advertisement & Sale) Act 1956, advertising medical/aesthetic services requires MAB approval, and the KKLIU number must be clearly displayed alongside the promoter's name, contact number, and address ([MOH FAQ on aesthetic advertising](https://www.pharmacy.gov.my/v2/en/faq/advertisement-aesthetic-services-allowed.html), [MAB overview](https://pharmacy.moh.gov.my/en/content/medicine-advertisements-board.html)). Approvals are time-limited (commonly ~2 years) and per-advertisement.
  - *Kaiteki application:* Store `kkliuNumber` + `kkliuExpiry` in frontmatter for each treatment/branch advertisement page, render it visibly (e.g. page footer), and add a CI check that fails the build if an advertisement page is missing or has an expired KKLIU number. Maintain a dashboard of upcoming expiries across the 9 branches so approvals are renewed before pages silently fall out of compliance ([practitioner guide](https://disruptive-doctors.com/kkliu-advertising-guidelines-malaysia/)).

- **Make the WhatsApp CTA and any forms PDPA-compliant. [P1]** Health information is "sensitive personal data" under the PDPA. The PDP (Amendment) Act 2024 phased into force across 2025, raising maximum fines to **RM1,000,000** and 3 years imprisonment, renaming "data users" to "data controllers", and adding mandatory DPO and breach-notification duties ([JPDP](https://www.pdp.gov.my/ppdpv1/en/akta/personal-data-protection-amendment-act-2024/), [Mayer Brown](https://www.mayerbrown.com/en/insights/publications/2025/07/from-legislative-reform-to-practical-guidance-key-amendments-to-malaysias-pdpa-and-the-launch-of-cross-border-transfer-guidelines)). The penalty increase took effect 1 April 2025; DPO + breach-notification duties on 1 June 2025.
  - **Do** name WhatsApp specifically as a channel and marketing/follow-up as a purpose in any consent — a generic "we may contact you" is insufficient under the amendments, and consent cannot be a condition of service ([WhatsApp/PDPA guidance](https://raiontech.io/blog/pdpa-compliance-whatsapp-marketing-malaysia)).
  - **Avoid** on-page forms that store personal data unless gated behind an explicit, unbundled consent checkbox; avoid third-party marketing/analytics that exfiltrate health-intent data without a lawful basis.
  - *Kaiteki application:* Because conversion is WhatsApp-only, the cleanest pattern is **no on-page form that stores data** — just a `wa.me` deep link plus a short PDPA notice near the CTA ("By messaging us you agree to our Privacy Policy; we'll reply via WhatsApp"). Link a Privacy Policy / PDPA notice (purpose, retention, DPO contact, data-subject rights) in the footer and at the point of collection. If a lead form is ever added, gate it behind the explicit consent checkbox.

### 8.2 E-E-A-T and trust signals for health content

- **Named, credentialed medical authors + a "medically reviewed by" byline. [P1]** Every blog/treatment page gets author name + qualifications (MBBS/MD, MMC registration, aesthetic training), a real photo, and a linked bio describing experience (the "Experience" the Sept 2025 Search Quality Rater Guidelines now emphasise alongside formal credentials). Add a visible "Medically reviewed by Dr X on [date]" line plus a "Last updated / last reviewed" date ([SQRG PDF](https://services.google.com/fh/files/misc/hsw-sqrg.pdf), [Helpful Content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). The Sept 2025 SQRG was a minor 181→182-page clarification update — directionally reaffirming Experience + Trust for YMYL rather than changing ranking guidance ([Search Engine Land](https://searchengineland.com/google-updates-search-quality-raters-guidelines-adding-ai-overview-examples-ymyl-definitions-461908)).
  - *Kaiteki application:* Reuse the doctor data already needed for the facility-licence/promoter info: one typed `doctor` record per practitioner powers the author byline, the reviewer line, `Physician` schema, and branch staff listings — one source of truth in-repo. The reviewer must be a real MMC-registered doctor; do not fabricate a "medical board".

- **Standing medical disclaimer + "consult a doctor" framing on all health content. [P2]** Include a clear, visible disclaimer (general information only, not a substitute for professional advice, results vary, treatments carry risks discussed at consultation) near the content — not buried in T&Cs — linking to a full Medical Disclaimer page. Pair every treatment description with "suitability is assessed during consultation" rather than an invitation to self-diagnose ([Healthcare AEO trust guidance](https://www.maximuslabs.ai/answer-engine-optimizations/healthcare-aeo-trust-winning-patient-queries-ymyl)).
  - *Kaiteki application:* Build a reusable Disclaimer MDX component injected at the foot of every blog/treatment template so it can't be forgotten on a new page; make the wording itself part of the compliance-reviewed copy.

- **Cite authoritative sources; keep content accurate and current. [P2]** For each health claim, link a primary source (Malaysian MOH/MMC, peer-reviewed journals, WHO, recognised dermatology/aesthetic bodies) and render a References section; avoid vague "studies show" without a link. Re-review YMYL articles at least annually and update `lastReviewed`. Well-referenced, institution-grade health content is among the strongest predictors of AI-Overview citation ([YMYL playbook](https://upgrowth.in/ymyl-playbook-healthcare-brands-win-ai-search-trust/)).
  - *Kaiteki application:* Store references in typed frontmatter so a References block renders consistently and a stale-content check can surface articles past their review date during the WordPress→MDX migration.

### 8.3 Schema, architecture, and the publish gate

- **Use `MedicalWebPage` / `Physician` / `MedicalClinic` schema correctly — skip Review markup. [P2]** Apply `MedicalWebPage` to health/treatment articles with `lastReviewed`, `reviewedBy` (the reviewing physician with credentials), and `about` (the `MedicalCondition`/`MedicalProcedure`). Use `Physician` for doctor pages and `MedicalClinic` per branch (name, address, geo, telephone, openingHours, contact). Mark up the brand with `Organization` + `sameAs`. Keep schema consistent with visible content ([schema.org medical types](https://schema.org/docs/meddocs.html), [MedicalWebPage](https://schema.org/MedicalWebPage)).
  - *Kaiteki application:* In the Next.js App Router, emit JSON-LD via a server component per route, generated from the same branch/article data that renders the page, so byline and schema never drift. (Branch `MedicalClinic`/`LocalBusiness` details are covered further in §10.4.)

- **Separate the educational blog from MAB-approved advertisement pages in the IA. [P2]** Malaysian rules apply most strictly to *advertisements* (promotion of services, prices, offers, booking CTAs). Keep promotional treatment/pricing pages (which need MAB approval + KKLIU) distinct from neutral, informational blog content.
  - *Kaiteki application:* Use distinct route groups/templates: `/blog/*` = educational (informational tone, references, disclaimer, **no** price/offer); `/treatments/*` and `/branches/*` = advertisement (KKLIU number, promoter details, WhatsApp CTA). The WordPress→MDX migration is the moment to draw this line cleanly, letting the blog chase top-of-funnel AEO visibility while ad pages stay compliant.

- **Keep pricing/promotions honest, complete, and substantiable. [P3]** If prices or promotions appear they must be accurate and complete (no hidden material conditions, no bait "from RM X", no fake urgency or inflated was/now pricing); MAB can reject misleading wording or visuals ([MAB services policy](https://pharmacy.moh.gov.my/sites/default/files/document-upload/15.5.2025-mab-policy-and-decision-services.pdf)).
  - *Kaiteki application:* Consider keeping prices out of indexed pages entirely and surfacing them only via WhatsApp consultation — this simplifies MAB approval scope and avoids stale/misleading pricing across 9 branches.

- **Implement a publish-time compliance gate in the repo. [P2]** Because content is in-repo (typed MDX, no CMS), encode compliance as code: (1) a PR checklist (KKLIU present + unexpired, no testimonials/before-after, no banned terms, disclaimer present, references present, author + medical reviewer set, PDPA notice on any data collection); (2) automated CI (banned-word regex lint; Zod frontmatter validation requiring non-expired `kkliuNumber` + promoter details on ad pages and `reviewedBy` + `lastReviewed` on `MedicalWebPage` articles); (3) a human medical/compliance sign-off field required before a page can be marked published.
  - *Kaiteki application:* Schema-validate frontmatter at build and fail the build on missing KKLIU/disclaimer/reviewer fields. The same validation feeds JSON-LD generation, so compliance and structured data share one source of truth.

- **Meet the elevated YMYL quality bar: depth, accuracy, people-first intent. [P2]** Cover topics with genuine clinical depth (not thin AI-spun summaries), answer the real patient question, avoid sensationalism, and disclose who is behind the site (clear About, branch addresses, real practitioners, registration details). Scaled low-value content is a YMYL liability ([SQRG](https://services.google.com/fh/files/misc/hsw-sqrg.pdf), [YMYL overview](https://searchengineland.com/guide/ymyl)).
  - *Kaiteki application:* Prioritise a smaller set of genuinely authoritative, doctor-reviewed treatment/condition guides over high-volume thin posts. In the migration, prune/merge low-value legacy posts rather than carrying them all over, and 301-redirect retired URLs (see §12.1).

---

## 9. AEO / GEO — AI Search & Answer Engines

Health and medical informational queries now trigger Google AI Overviews very frequently — there is no single clean headline figure, but the rate is genuinely high and query-class-dependent: roughly half of all U.S. health queries trigger an AI Overview (~51.6% in WebFX's July 2025 study), rising to ~89% of healthcare keywords by Dec 2025, with clinical symptom/treatment queries near-saturated at ~93–100%, while local "near me" health queries have dropped to roughly 0% AIO presence ([WebFX](https://www.webfx.com/blog/healthcare/ai-overviews-in-healthcare/), [BrightEdge](https://www.brightedge.com/resources/weekly-ai-search-insights/healthcare-ai-evolution-google-2023-2025)). For Kaiteki the strategic read is leverage, not novelty: the same E-E-A-T, schema, freshness, and local signals that win classic search are the gatekeeping criteria AI platforms apply before citing health content — so most AEO work *is* the §7/§8/§10 work, restructured for machine extraction and measured at the WhatsApp conversion, not the click. *Caveat:* this is the fastest-moving material in the guide — almost every percentage, user-agent token, and product behaviour below is volatile and US-centric; re-verify against Malaysian SERPs and primary vendor docs before relying on it.

### 9.1 Know the AI-search landscape and how each engine retrieves

- **Map the surfaces you are optimizing for, because they share the same inputs. [P1]** The surfaces that matter for a Malaysian clinic are Google **AI Overviews** and the conversational **AI Mode** (both grounded in Google's own crawl/index via Googlebot), **ChatGPT search** (OpenAI's `OAI-SearchBot` against a largely Bing-derived index), **Perplexity**, **Gemini**, and **Microsoft Copilot** (the Bing index; no separate Copilot crawler). All of them run "query fan-out" retrieval — decomposing one question into many parallel sub-queries, retrieving candidate passages, reranking, then synthesizing an answer with citations — rather than returning ranked links ([Cheers](https://www.cheers.tech/geo-academy/what-is-query-fan-out-google-ai-mode), [Leapd](https://www.leapd.ai/blog/ai-visibility/how-chatgpt-google-ai-overviews-and-perplexity-source-information-in-2026)).
  - **Why:** because Gemini, AI Mode, and AI Overviews reuse Google's index, and ChatGPT cites Google top-ranked pages far more often than pages outside the top 20, a single well-optimized page can earn visibility across multiple engines at once — the work compounds rather than fragments.
  - *Kaiteki application:* Prioritize the **ChatGPT + Google (Gemini/AI Mode/AI Overviews)** surfaces first — they carry the bulk of reach and share the same on-ramp — then treat Perplexity/Copilot as high-intent bonuses. For a single-country, local-intent clinic the Google surface is likely the biggest real-world driver, so do not over-rotate into ChatGPT-only tactics.

### 9.2 Treat AI Overviews as a zero-click brand/citation surface, not a traffic channel

- **Move the success metric to the WhatsApp event, not organic CTR. [P1]** On informational/medical queries, assume an AI Overview absorbs most of the click: Pew's primary study (900 U.S. adults, March 2025 browsing data, published 22 Jul 2025) found users click an organic link in only 8% of visits when an AI summary is present vs 15% without (~47% relative drop), and click the in-summary citation links in just ~1% of visits ([Pew](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/), [Search Engine Land](https://searchengineland.com/google-ai-overviews-hurting-clicks-study-459434)). Re-anchor reporting on bottom-funnel conversion (WhatsApp click-to-chat opens, branch directions), not sessions or impressions.
  - **Why:** if roughly half of organic clicks disappear on AIO-triggered queries and citation clicks are negligible, optimizing for clicks on YMYL queries is a losing game; the defensible value of appearing in an AIO is brand exposure and being cited as the authority, which converts later via branded search and direct WhatsApp contact.
  - *Kaiteki application:* Kaiteki's WhatsApp-only funnel is structurally well-suited to a zero-click world — capture demand in the AIO, convert it in WhatsApp. Give each of the 9 branches a UTM-tagged `wa.me` link and a GA4 `whatsapp_lead` key event (§12.3) so you can see which content/branch drives chats even though GSC won't isolate AIO clicks (§9.11, §12.8). Note the Pew figures are US-only — directional for Malaysia, not a measured local rate (§9.10).

### 9.3 Structure content for passage-level extraction

- **Lead every answerable section with a 40–60 word self-contained answer. [P1]** Open each question-shaped H2/H3 with a direct, factually dense answer in the first 1–2 sentences — no "as mentioned above", no pronouns referring upward — then expand with detail, lists, and a comparison table. This "inverted-pyramid + capsule" unit is the single most consistently rewarded pattern across ChatGPT, Perplexity, Gemini, and AI Overviews because all of them lift a short, quotable passage to synthesize their answer ([Loudface](https://www.loudface.co/blog/how-to-structure-content-for-ai-extraction), [CXL](https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide/)). Front-loading matters: a large 2026 study of ChatGPT citations found ~44% are drawn from the first 30% of a page's content ([Search Engine Land](https://searchengineland.com/mastering-generative-engine-optimization-in-2026-full-guide-469142)).
  - **Do** keep one question = one heading = one self-contained answer, phrased to survive extraction in isolation. **Avoid** burying the answer three paragraphs below the heading or under marketing preamble.
  - *Kaiteki application:* Build an MDX convention (e.g. a `<LeadAnswer>` first-paragraph rule) so every treatment and blog page opens with a quotable answer block (e.g. "Pico laser typically requires 3–6 sessions spaced ~4 weeks apart"). Because AI reproduces the capsule verbatim, the sentence must be conservative and MAB-compliant — no efficacy guarantees, no comparative or before/after claims (§8.1). This is the same answer-first structure recommended in §4 and §5.9.

### 9.4 Optimize for query fan-out with full sub-topic coverage

- **Cover the whole cluster around each treatment, not just the head term. [P2]** AI Mode and AIO decompose one question into many sub-queries (cost, safety, downtime, candidacy, alternatives, comparisons, aftercare, results timeline) and synthesize from the sources that best cover those facets — citations frequently go to the page with the best adjacent-sub-topic coverage rather than the single #1 result ([Wellows](https://wellows.com/blog/how-to-optimize-for-ai-query-fan-out/), [White Peak](https://whitepeak.io/how-googles-ai-overviews-select-sources/)). Build each treatment as a pillar plus a tight, interlinked cluster (§5.1, §6.4) that answers the predictable fan-out, and add an FAQ block of those exact sub-questions with concise, standalone answers.
  - **Why:** comprehensive, well-interlinked clusters raise the probability that at least one fan-out sub-query resolves to your content; a single thin page can only satisfy one facet.
  - *Kaiteki application:* For each service (acne-scar treatment, pigmentation/melasma, fillers) publish a pillar + FAQ covering price ranges, downtime, candidacy, and safety — phrased neutrally within MAB/MMC limits. Mine real WhatsApp enquiries and People-Also-Ask for the actual fan-out questions (including future Malay variants like "rawatan melasma") so EN and BM versions both cover it once i18n launches.

### 9.5 Enforce healthcare E-E-A-T — the citation gate for YMYL answers

- **Put a named, credentialed author and a "medically reviewed by" line on every YMYL page. [P1]** Surface a visible byline (real doctor, MMC registration), a separate "Medically reviewed by Dr [Name], [MMC reg] on [date]" line, and detailed clinician bio pages linked to verifiable profiles — and mirror this in `MedicalWebPage` `reviewedBy`/`lastReviewed` plus `Physician` schema (§7.1–§7.3, §8.2). Health/YMYL is held to the strictest trust bar, and authority sites retain AIO citations even as overall traffic drops; clear author attribution measurably raises citation likelihood ([iPullRank](https://ipullrank.com/eeat-ymyl-ai-search), [BrightEdge](https://www.brightedge.com/resources/weekly-ai-search-insights/healthcare-ai-evolution-google-2023-2025)).
  - **Note on a refuted stat:** do **not** publish or rely on the widely-circulated "~96% of AI Overview citations come from strong-E-E-A-T sources" claim — it traces to an unsourced vendor blog, and E-E-A-T is a Google Quality-Rater concept, not a directly measurable signal, so the precise percentage cannot be substantiated. What measured data does show (BrightEdge, 2025–2026) is that only ~17% of AIO-cited sources rank in the organic top 10 (~53% in the top 100), and citation likelihood rises with clear author attribution, earned-media mentions, structured content, and demonstrated topical authority — particularly for YMYL/healthcare ([BrightEdge rank overlap](https://www.brightedge.com/resources/weekly-ai-search-insights/rank-overlap-after-16-months-of-aio), [Google Helpful Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
  - *Kaiteki application:* Kaiteki's real doctors across 9 branches are the moat. A `/doctors` section with MMC-verifiable credentials plus per-article reviewer lines simultaneously earns AIO trust and satisfies the MMC/MAB requirement that medical content be attributable to a registered practitioner — a genuine advantage over cliniccleo.com if their content is unattributed. Keep bios factual (no superlatives/outcome claims) per §8.1.

### 9.6 Ship machine-readable schema: medical + per-branch local JSON-LD

- **Emit a connected schema graph: `MedicalClinic`/`MedicalBusiness` + `Physician` + `MedicalWebPage` + `FAQPage` + per-branch `LocalBusiness`. [P2]** In the Next.js App Router, render JSON-LD from a server component using the same typed data that renders the page, so byline/NAP/geo never drift (§3, §8.3, §10.4). Wire nodes by stable `@id` (the brand `Organization` referenced by each branch via `parentOrganization`, by authors via `worksFor`, and by articles via `publisher`) so the graph behaves like a small internal knowledge graph and AI doesn't have to guess who owns the content. LLMs tokenize JSON-LD to resolve entities, authorship, and locations, and structured data correlates with higher AIO selection and local presence ([Search Engine Land](https://searchengineland.com/schema-markup-ai-search-no-hype-472339), [Recomaze](https://recomaze.ai/how-google-gemini-selects-sources-for-ai-answers)).
  - **Avoid** injecting any claim into schema that isn't visible on the page, and **avoid** `Review`/`AggregateRating` markup on medical pages (it marks up MAB-prohibited content and breaches Google's self-serving-review policy — see §8.1, §11.1). Treat `FAQPage` as an AI-extraction/entity signal, not a rich-result play (FAQ rich results were removed in 2026 — §3).
  - **Skip `llms.txt` for Google:** Google confirmed (June 2026) that Search does **not** use `llms.txt`. See also Google's **AI-features optimization guide** (May 2026) — the confirmed levers are the ones in this section: extractable answers, entity clarity, server-rendered content.
  - *Kaiteki application:* Generate all 9 branch `LocalBusiness`/`MedicalClinic` nodes from the in-repo branch dataset and mirror each NAP to its Google Business Profile. "Aesthetic clinic near [area]" is a high-intent local query where AIO/AI Mode and the local pack overlap — schema + GBP is how Kaiteki shows up (§10.4, §10.12).

### 9.7 Resolve "Kaiteki" to ONE prominent entity

- **Make the brand an unambiguous, corroborated entity across the web. [P2]** AI engines identify entities in a query, look up the most prominent associated entities, and build the answer from those — a brand not resolved to a single clean entity is excluded regardless of content quality. Lock one canonical brand string ("Kaiteki Skin Aesthetic Clinic") everywhere; emit `Organization` + `sameAs` to authoritative profiles (and ideally a Wikidata Q-ID, a primary Knowledge Graph input); and force byte-identical NAP across the site, every GBP, social, and directories ([Ahrefs](https://ahrefs.com/blog/google-knowledge-graph/), [Digital Applied](https://www.digitalapplied.com/blog/entity-seo-knowledge-graph-optimization-guide-2026), [White Peak](https://whitepeak.io/how-googles-ai-overviews-select-sources/)).
  - **Why:** source selection weighs entity authority and corroboration across the web, not just on-site content; with 9 branches, one stray address typo or old phone number per directory badly fragments resolution and can drop you from local AI answers.
  - *Kaiteki application:* Keep one typed in-repo source of truth for all 9 branches' NAP feeding the site, JSON-LD, and a directory checklist, so a change propagates from one place (§10.6). A Wikidata item (if Kaiteki meets notability) is a one-time, high-leverage task. Never let "Kaiteki Clinic" / "Kaiteki Skin" / "Kaiteki Aesthetic" drift across pages or schema.

### 9.8 Earn third-party validation and citations off-site

- **Build the entity/Knowledge-Graph corroboration AI Mode draws on. [P2]** A large share of AI citations come from *off* your own domain — AI Mode reportedly cites the majority of its sources from outside the organic SERP, and engines lean on Wikipedia, reputable directories, news, community discussion, and Knowledge Graph signals. Build and keep consistent: complete Google Business Profiles (with Q&A and reviews), reputable Malaysian health/aesthetic directories, earned mentions from credible local media or professional bodies, and educational explainer content (e.g. a YouTube channel). Brand mentions and multi-source corroboration are among the strongest predictors of AI citation ([Oltre](https://www.oltre.ai/blog/how-to-get-cited-by-gemini/), [CMSWire](https://www.cmswire.com/digital-marketing/reddits-rise-in-ai-citations-what-marketers-must-know-about-aeo-strategy/), [Cheers](https://www.cheers.tech/geo-academy/what-is-query-fan-out-google-ai-mode)).
  - **Avoid** astroturfing communities like Reddit (engines and users penalize it) and **avoid** any off-site tactic that breaches MAB/MMC rules — no incentivized/fabricated testimonials, no before/after, no inducement or comparative claims. Favor neutral, factual listings and educational content (§8.1, §11.8–§11.9).
  - *Kaiteki application:* This is the highest-ROI off-page lever vs cliniccleo.com — whoever owns the credible "best aesthetic clinic in [KL/PJ/Penang]" roundups and accurate local listings wins the AI recommendation. Pitch Kaiteki's doctors as quotable experts to Malaysian health/lifestyle media; have compliance sign off on anything published (§11.6).

### 9.9 Keep AI crawlers unblocked and content server-rendered

- **Allow the AI search/retrieval bots and serve answer text in the initial HTML. [P1]** You cannot be cited by an engine whose retrieval bot you block, and a client-only page can't be read. In `app/robots.ts` explicitly allow the search/live-retrieval agents — **Googlebot** (powers AI Overviews/AI Mode/Gemini), **Bingbot** (powers Bing + Copilot), **OAI-SearchBot** and **ChatGPT-User** (OpenAI), and **PerplexityBot** — and decide *separately* on training-only crawlers **GPTBot** (OpenAI training), **CCBot** (Common Crawl), and **Google-Extended** (a robots.txt control token, not a crawler, that governs only Gemini training/grounding and has no effect on Google Search or AIO eligibility). Critically, render all treatment/branch/blog (MDX) content via SSG/SSR so the answer is present in the initial HTML, not behind JS-only tabs/accordions or consent walls ([blog.google](https://blog.google/products-and-platforms/products/search/new-controls-website-owners/), [Anagram](https://www.anagram.ai/blog/ai-crawlers-explained-gptbot-claudebot-perplexitybot-and-how-to-let-them-in-2026), [nohacks](https://nohacks.co/blog/ai-user-agents-landscape-2026)).
  - **Do** treat training-vs-search as two independent decisions (you can appear in ChatGPT/Perplexity search while opting out of model training), keep the GSC AI opt-out toggle **OFF**, and verify every token against each vendor's primary docs before shipping — names and versions change (e.g. `ChatGPT-User` advanced to `/2.0`; the legacy `anthropic-ai`/`claude-web` tokens are deprecated). **Avoid** copy-pasting a bloated "block all AI bots" list, blocking citation crawlers wholesale, or relying on `robots.txt` for confidentiality — some user-triggered fetchers (e.g. `Perplexity-User`) ignore it, so gate truly sensitive/PDPA paths behind auth (§8.1).
  - *Kaiteki application:* The Next.js rebuild is the moment to lock this in — generate `robots.txt` from one config so all 9-branch and i18n routes are consistent, confirm the host/CDN/WAF isn't silently blocking these agents, and document the GSC opt-out and Google-Extended as deliberate, dated decisions to re-verify at launch (§1 robots guidance).

### 9.10 Cover conversational, long-tail queries — and verify behaviour for Malaysia

- **Phrase headings as real patient questions and confirm what actually triggers AIO locally. [P2]** Use natural-language, conversational headings that mirror how patients ask AI assistants ("Is HIFU safe for the face?", "How much does Pico laser cost in Malaysia?", "Which Kaiteki branch is nearest [area]?"), each with its complete answer immediately beneath, so the engine can map a prompt directly to a passage ([Frase](https://www.frase.io/blog/what-is-generative-engine-optimization-geo), [HubSpot](https://www.hubspot.com/products/marketing/aeo-guide)). But most published trigger-rate and CTR stats are US-centric, AI Mode behaviour and language handling differ by region (with EU/EEA carve-outs), so sample Kaiteki's real target queries from Malaysian IPs/devices in both English and BM before committing the plan ([Search Engine Land — AI Mode 180+ countries](https://searchengineland.com/google-launches-ai-mode-in-180-countries-and-territories-461040)).
  - **Why:** acting on US trigger/CTR figures risks over- or under-investing for a market where behaviour differs; direct observation of the local SERP is the only reliable signal for a single-market clinic — and clinical/treatment queries are AIO-saturated while local "near me"/branded queries see far lower AIO presence, so branded and local intent remains the strongest organic-click path ([WebFX](https://www.webfx.com/blog/healthcare/ai-overviews-in-healthcare/)).
  - *Kaiteki application:* Run a manual audit from Malaysia for ~20–30 priority queries per language and log: AIO present? who's cited? is cliniccleo.com cited? This baseline validates the strategy and becomes a competitive scoreboard you re-check quarterly (§9.12).

### 9.11 Keep medical content fresh with genuine, dated updates

- **Show and maintain real "last updated / reviewed" dates on a refresh cadence. [P2]** Display visible "Published" and "Last updated / Reviewed [month year]" dates, keep `datePublished`/`dateModified` accurate in schema, and actually refresh pricing/treatment/safety content on a schedule (e.g. competitive treatment pages every 3–6 months — see §5.10) tied to real changes (new device, updated pricing, new branch). AI answer engines weight freshness in retrieval and cite content meaningfully fresher than typical organic results ([White Peak](https://whitepeak.io/how-googles-ai-overviews-select-sources/), [Oltre](https://www.oltre.ai/blog/how-to-get-cited-by-gemini/)). Original, citable facts help too — anonymized, aggregated, PDPA-safe clinic data ("across 9 branches we performed X treatments in 2025") presented as a standalone figure + timeframe is the kind of statement AI prefers to cite ([ZipTie](https://ziptie.dev/blog/how-original-research-wins-ai-citations/)).
  - **Avoid** cosmetic date-bumping without substantive change — Google distinguishes genuine updates from "fake freshness" and discounts date-only edits (§4 freshness), and any published clinic statistic must be truthful, non-misleading, aggregate-only, and free of outcome guarantees barred by MAB.
  - *Kaiteki application:* Bake `publishDate`, `updatedDate`, and `reviewedBy` into the MDX frontmatter schema for `kaiteki.my/blog` from day one so freshness and the medical-reviewer line are data-driven (feeding both the page and `MedicalWebPage` schema), not manually re-added each edit (§8.2, §8.3).

### 9.12 Measure AI visibility and referrals (mind the AIO measurement gap)

- **Use the new GSC AI insights for visibility, but attribute conversion in GA4 — you cannot cleanly isolate AIO clicks yet. [P1]** As of Google's June 2026 announcement, Search Console is rolling out a generative-AI opt-out toggle (leave it **off**) plus new "insights" showing impressions and which pages appear in AI responses — adopt these once they reach your property/region — but click-level isolation and API export for AIO/AI Mode remain limited/in rollout, and historically these clicks were folded into aggregate Web Search totals ([blog.google](https://blog.google/products-and-platforms/products/search/new-controls-website-owners/), [Search Engine Land](https://searchengineland.com/google-ai-mode-traffic-data-search-console-457076), [PPC Land](https://ppc.land/google-finally-gives-search-console-its-own-generative-ai-visibility-reports/)). For assistant referrals, build a GA4 custom channel group with a Source-matches-regex rule (`chatgpt.com|chat.openai.com|perplexity.ai|gemini.google.com|copilot.microsoft.com|claude.ai|...`) ordered **above** Referral, alongside GA4's native "AI Assistant" channel (which misses Perplexity/Copilot and isn't retroactive) ([OrganikPI](https://organikpi.com/blog/technical-seo/ga4-ai-search-referral-attribution/)).
  - **Why:** the measurement gap (AIO/AI Mode clicks bucketed into Organic) is the biggest reason AIO ROI is hard to prove; misreading the new GSC insights as full click attribution will drive wrong decisions. Cross-reference AI-channel sessions with the `whatsapp_lead` event to see whether AI visitors actually enquire — that is the proof-of-value metric for AEO content (§12.8).
  - *Kaiteki application:* Also periodically prompt ChatGPT, Perplexity, Gemini, and AIO with Kaiteki's priority queries and log whether the clinic is mentioned, cited, and described accurately; claim the Google Knowledge Panel early so you can submit corrections. Treat AEO visibility as partly proxied by organic-impression growth on question queries in GSC, and re-check the regex quarterly as new assistants launch (§12.8).

### 9.13 Treat AEO as a layer on top of classic SEO, not a replacement

- **AEO complements SEO; it never substitutes for it. [P1]** A page must first be crawled, indexed, and judged relevant before its content can be extracted into an answer, so the technical foundations remain essential: crawlable server-rendered HTML, fast Core Web Vitals, clean canonicals, internal linking, indexable (not JS-only) content, an XML sitemap, and the i18n/hreflang groundwork (§1, §2, §6). Win Google organic for your target questions because it is the shared on-ramp that feeds Gemini, AI Mode, and AI Overviews — and AIO/AI Mode clicks land in GA4 as ordinary Google organic, so do not write off organic as "dying" ([ALM Corp](https://almcorp.com/chatgpt-retrieval-fanout-google-serps-citations/), [SEO Sherpa](https://seosherpa.com/answer-engine-optimization/), [Digital Agency Network](https://digitalagencynetwork.com/aeo-vs-seo-vs-geo/)).
  - **Why:** the 2026 consensus is SEO + AEO + GEO as complementary layers (SEO = baseline visibility, AEO = answer accessibility, GEO = trusted reference material), and organic still drives the majority of web traffic — so AEO is highest-leverage when it sits on a solid SEO base, not instead of one.
  - *Kaiteki application:* The Next.js App Router rebuild with statically rendered in-repo MDX is an ideal SEO+AEO foundation — server-rendered, fast, fully indexable. Ensure answer content is in the server HTML (not hidden behind client-only accordions some crawlers won't expand), wire hreflang for the future `/ms/` locale, and 301-redirect old blog URLs to `kaiteki.my/blog` to preserve equity during migration (§1, §5.12, §12.1).

**Bottom line:** AEO is not separate work — it is the §7 E-E-A-T, §8 YMYL/compliance, §3 schema, and §10 local work, restructured for passage-level extraction and entity resolution and shipped on a crawlable, server-rendered Next.js base. Lead with self-contained answers, surface credentialed authorship and genuine review dates, resolve "Kaiteki" to one corroborated entity, keep the AI crawlers unblocked, and measure success at the WhatsApp conversion rather than chasing AIO clicks you cannot isolate. Do all of it within Malaysian advertising-law limits, and Kaiteki becomes the cited, recommended Malaysian aesthetic clinic in AI answers while still outranking cliniccleo.com in classic search.

---

## 10. Local & Multi-Location SEO

Local visibility for a 9-branch chain is won on two surfaces: the Google Maps/Local Pack (Google Business Profile + reviews + proximity) and local-organic + AI search (per-location pages + links + citations). Per the **2026 Whitespark/BrightLocal Local Search Ranking Factors** survey, grouped Local Pack weights are GBP 32%, Reviews 20%, On-page 15%, Behavioral 9%, Links 8%, Citations 6%, Personalization 6%, Social 4%; local-organic flips to On-page 33%, Links 24%, Behavioral 10%, Personalization 8%, GBP 7%, Citations 7%, Reviews 6%, Social 5% ([BrightLocal](https://www.brightlocal.com/learn/google-local-algorithm-and-ranking-factors/)). Google's three pillars are relevance, distance, and prominence — and ranking cannot be bought ([GBP Help](https://support.google.com/business/answer/7091?hl=en)). Every tactic below is filtered through the Malaysian medical-advertising rules in §8.1.

### 10.1 Set the correct primary GBP category per branch; add ~4 secondary categories. [P1]
Primary category is the single highest-impact Local Pack factor. Set the most specific available primary (e.g. "Skin care clinic" / "Medical spa" / "Aesthetic clinic" per Malaysian availability) plus up to ~4 secondaries ("Dermatologist", "Laser hair removal service", "Facial spa"). An *incorrect* primary category is a negative factor.
- *Kaiteki application:* Use the same primary + secondary set across all 9 branches so each ranks in its own city for the same services. Confirm chosen categories fit Malaysia's aesthetic-medical scope-of-practice rules.

### 10.2 Verify and fully complete each of the 9 GBPs. [P1]
Verify every profile and complete every field: exact NAP, regular + holiday hours, full service list, business description, health-relevant attributes ("Appointment required", "Wheelchair accessible", payment methods), and real current photos (exterior for navigation, interior, treatment rooms, team).
- **Avoid** wasting effort gaming the description with keywords or geo-tagging photos — both are confirmed **not** to move Local Pack rankings ([BrightLocal](https://www.brightlocal.com/learn/google-local-algorithm-and-ranking-factors/)). Write the description for humans/conversion.
- *Kaiteki application:* Since conversion is WhatsApp-only, add the WhatsApp/phone number consistently and route GBP phone/messaging to the same number; don't rely on Google's online-booking field.

### 10.3 Build one unique, server-rendered location page per branch. [P1]
Create `kaiteki.my/branches/<city-branch>` for each branch as real SSG/SSR HTML (never client-only JS or iframe-only). Each needs genuinely unique content: branch intro, the named doctors at that branch, exact address + neighbourhood, embedded map, written directions, parking/transport notes, hours, services offered there, and branch photos. Target a distinct, non-overlapping geo keyword set per page ("aesthetic clinic Mont Kiara" vs "aesthetic clinic Johor Bahru") — "dedicated page per service" and "geographic keyword relevance" are the #1/#2 local-organic factors ([SEJ](https://www.searchenginejournal.com/the-complete-guide-to-local-seo-for-multiple-locations/578080/)).
- **Avoid** shipping 9 near-identical templated pages — duplicates get suppressed.
- *Kaiteki application:* Store pages as typed/MDX data in-repo and generate each body from branch fields + hand-written local copy. Naming the registered doctor per branch also supports YMYL E-E-A-T (§8.2).

### 10.4 Add unique `MedicalClinic`/`LocalBusiness` JSON-LD on every branch page. [P1]
Emit per-branch JSON-LD using `MedicalClinic` (more specific than generic `LocalBusiness` for a YMYL clinic) with that branch's unique name, full `PostalAddress` (with `addressCountry: MY`), `geo`, `telephone`, `openingHoursSpecification`, `url`, `image`, and `medicalSpecialty`/`availableService`. Optionally model the chain as a parent `MedicalOrganization` with branches as departments. Validate in the Rich Results Test ([Schema App](https://www.schemaapp.com/schema-markup/how-to-do-schema-markup-for-local-business/), [Halcy medical guide](https://www.halcy.ai/learn/medical-schema-markup-guide)).
- **Avoid** copying one schema block across pages (duplicate structured data is suppressed like duplicate text) and **avoid** `aggregateRating`/`review` markup unless legally cleared under Malaysian testimonial rules — generally, don't add it (see §8.1, §11.1).
- *Kaiteki application:* Generate schema programmatically from the same typed branch data that renders the page so geo/NAP can never drift.

### 10.5 Build a crawlable hub store-locator linking to all 9 branch pages. [P1]
Put the locator at `kaiteki.my/branches` (or `/locations`) on the **main domain** — not a subdomain, not iframe/JS-only. List every branch with city-specific anchor text ("Kaiteki Mont Kiara", "Kaiteki Johor Bahru"); each branch page links back (hub-and-spoke). Use clean URLs (`/branches/mont-kiara`), add filter-by-city and "open now", and include all 9 in the XML sitemap ([Ad Firm](https://www.theadfirm.net/store-locator-seo-best-practices-for-location-pages-internal-links/)).
- *Kaiteki application:* In App Router, generate the locator and all branch routes with `generateStaticParams` so they are pre-rendered HTML; keep any prior branch URLs 301-redirected (§12.1).

### 10.6 Enforce strict NAP consistency everywhere. [P1]
Pick one canonical Name/Address/Phone per branch and use it byte-for-byte across website, GBP, social, and every directory — even "Jalan vs Jln", "Unit vs Lot", or "+60 vs 0" confuses Google. Consistent NAP makes a business ~40% more likely to appear in the Local Pack ([BrightLocal](https://www.brightlocal.com/learn/google-local-algorithm-and-ranking-factors/)); rising citation weight for AI visibility makes this more important, not less.
- *Kaiteki application:* Keep one typed in-repo source of truth for all 9 branches' NAP that feeds the site, the JSON-LD, and a citation spreadsheet, so any change propagates from one place.

### 10.7 Drive a steady, recent stream of native Google reviews per branch and reply to all. [P1]
Reviews are now ~20% of Local Pack weight (up from 16% in 2023). What matters: star rating, number of reviews **with text**, and recency/steady velocity (both top-15 individual factors). A profile with fresh reviews over 12 months can outrank a higher-total but stale competitor. Reply to every review within ~48h (an engagement signal; 97% of users read replies) — but keywords in replies do **not** affect rankings, so write for patients ([Sterling Sky](https://www.sterlingsky.ca/number-of-reviews-impact-ranking/)). Full review-program and compliance detail is in §11.
- *Kaiteki application:* Ask satisfied patients post-visit via the existing WhatsApp flow with a per-branch Google review link; set realistic per-branch velocity targets (Sabah/Johor branches likely lower volume). Never incentivise reviews and never reuse patient testimonials on-site (§8.1, §11.3).

### 10.8 List on Malaysian-priority and global directories + data aggregators. [P2]
Beyond GBP, claim NAP-consistent listings on Bing Places, Apple Business Connect, Waze; Malaysian directories (Yellow Pages Malaysia, Foursquare, Hotfrog Malaysia, Fave, relevant health directories); Facebook/TripAdvisor where relevant; and aggregators (Foursquare, Data Axle, Neustar Localeze). Citations are ~6% of Local Pack but ~13% of AI search visibility ([SEO Agency MY](https://www.seo-agency.com.my/blog/local-seo-citations-malaysia/), [listing sites](https://seolinkworld.com/malaysia-business-listing-sites/)).
- *Kaiteki application:* Waze and Apple Maps matter for Malaysian drivers; create a listing per branch (not one chain listing) so each is independently discoverable across KL, Selangor, Johor, and Sabah.

### 10.9 Manage 9 profiles via a chain location group. [P2]
Use a GBP location group to manage all 9 branches under one account with shared permissions and bulk actions, segmented by region if useful (Klang Valley / Johor / Sabah). Bulk/chain verification is available for **10+** same-brand locations ([GBP bulk verification](https://support.google.com/business/answer/4490296?hl=en)).
- *Kaiteki application:* At 9 branches Kaiteki is just below the 10-location bulk threshold, so plan for some individual verification while still using one location group for unified control. Assign a staff owner per branch to monitor messaging/reviews.

### 10.10 Use Posts, Q&A, Services, Messaging for conversion (not ranking). [P3]
Post per branch and seed Q&A with accurate consultation/hours/service answers, and enable Messaging — but post **quantity** and Q&A **quantity** do **not** move Local Pack rankings ([BrightLocal](https://www.brightlocal.com/learn/google-local-algorithm-and-ranking-factors/)). Treat them as conversion/engagement tools whose resulting clicks/calls feed behavioral signals.
- *Kaiteki application:* Configure GBP messaging to hand off to WhatsApp/phone, and keep all Post/Q&A copy compliant (no guaranteed results, no comparative claims; §8.1).

### 10.11 Keep the GBP business name to the real brand name — never keyword-stuff. [P2]
Keywords in the GBP title is a real factor (#3 for Local Pack), but Google prohibits adding keywords/locations not in the actual name; stuffing risks suspension and competitor reporting (common in aesthetics).
- **Avoid** "Kaiteki — Botox/Filler KL". **Do** use the consistent brand + city descriptor matching signage and site, and earn relevance through categories, services, and on-page content.

### 10.12 Optimise for AI search visibility. [P2]
The 2026 AI Search Visibility factor set ranks On-page 24%, Reviews 16%, Citations 13%, Links 13%, GBP 12%. Improving classic local SEO largely improves AI visibility because the systems share data sources; the deltas are that third-party "best clinic in [city]" mentions and structured data carry more weight for AI ([BrightLocal AI & local](https://www.brightlocal.com/learn/ai-and-local-search-tips/)).
- *Kaiteki application:* Pitch for inclusion in Malaysian "best aesthetic clinic" roundups and reputable health directories, and structure each service+branch page to directly answer common patient questions (§9.1) so it can be cited by AI — within advertising-law limits.

### 10.13 Filter every local-SEO asset through Malaysian medical-advertising compliance. [P1]
Aesthetic advertising in Malaysia is governed by the MAB ([MAB 3/2023](https://pharmacy.moh.gov.my/sites/default/files/document-upload/advertising-guidelines-healthcare-facilities-and-services-mab-3.2023.pdf)), the Private Healthcare Facilities and Services Act 1998 framework, and the MMC [Guideline on the Ethical Aspects of Aesthetic Medical Practice (Sept 2025)](https://mmc.gov.my/wp-content/uploads/2025/09/Guideline-on-The-Ethical-Aspects-of-Aesthetic-Medical-Practice.pdf), which restrict testimonials, before/after imagery, guaranteed results, and comparative/superlative claims. This constrains reviews, schema, posts, and result-based copy across all local assets ([RDS Law](https://www.rdslawpartners.com/post/aesthetic-medicine-in-malaysia-navigating-the-legal-regulatory-framework)).
- *Kaiteki application:* Get legal/medical sign-off before publishing review schema, on-page testimonials, before/after photos, or comparative claims. Differentiate from cliniccleo.com with factual, educational content and named registered doctors — not promotional results claims.

---

## 11. Reviews, Reputation & Off-Page Authority

Off-page authority for Kaiteki rests on three pillars: per-branch Google review programs (where recency and velocity now outweigh raw volume), brand/entity signals (NAP consistency, unlinked mentions, digital PR) that increasingly feed both classic rankings and AI citations, and a heavy compliance layer. The most important single on-site fact: since 2019 Google does **not** show self-serving review stars for a clinic marking up its own reviews — so don't waste schema on that, and never fabricate ratings.

### 11.1 Don't rely on self-serving review schema; never fabricate `AggregateRating`. [P1]
Since Google's Sept 2019 change, `LocalBusiness` and `Organization` schema (and subtypes) are **ineligible** for review-star rich results when the entity controls the reviews about itself — whether hand-coded or via an embedded third-party widget. Stars are only generated for types like `Product`/`Service`/`Recipe`/`Event` where the reviewing site is independent ([Google review-snippet docs](https://developers.google.com/search/docs/appearance/structured-data/review-snippet), [2019 announcement](https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful)). Fabricated review structured data is a spam/structured-data violation that can trigger a manual action.
- **Do** ship clean `Organization`/`MedicalClinic`/`LocalBusiness` schema per branch for entity recognition (§10.4).
- **Avoid** bolting `aggregateRating` onto it expecting stars, and **never** invent `ratingValue`/`ratingCount` ([BrightLocal](https://www.brightlocal.com/learn/review-schema/)).
- *Kaiteki application:* You may still **visually** display genuine Google reviews for conversion (§11.5) — just don't expect rich-result stars, and clear it against Malaysian testimonial rules first.

### 11.2 Run a per-branch review-velocity program (recency beats raw volume). [P1]
Google weighs review volume, quality, recency, and velocity, with rising 2025 emphasis on recency/velocity — a steady drip signals an active, currently-relevant business ([Local Falcon](https://www.localfalcon.com/blog/what-is-google-review-velocity-and-why-does-it-matter-for-businesses), [Adam Collins](https://www.adamcollins.co.uk/review-recency-vs-review-volume-gbp-rankings/)). Set a per-branch monthly cadence scaled to patient volume rather than a one-time blitz (which looks unnatural and risks filtering). Each of the 9 branches has its own GBP and its own review corpus.
- *Kaiteki application:* Build a WhatsApp-native ask flow — after a confirmed visit, the front desk sends a thank-you WhatsApp with that branch's `g.page/r/...` short-link. Track velocity per branch on a dashboard (§12.9).

### 11.3 Never gate, incentivize, or buy reviews. [P1]
Review gating (soliciting only happy customers, routing unhappy ones private) violates Google policy and can remove **all** your reviews, not just the gated ones; Google began targeting gating tools in 2025. Separately, the US FTC Consumer Reviews and Testimonials Rule (16 CFR Part 465; effective 21 Oct 2024) bans fake/incentivized/experience-less reviews with penalties up to ~US$53,088 per violation, and issued its first warning letters in Dec 2025 ([FTC final rule](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials), [SocialPilot on gating](https://www.socialpilot.co/reviews/blogs/review-gating)).
- **Do** ask **every** patient neutrally ("How was your visit? Leave a Google review here").
- **Avoid** branching happy-vs-unhappy patients, offering discounts/gifts for positive reviews, or buying/writing reviews — Google's global policy and Malaysian medical-ethics norms make these equally dangerous regardless of FTC jurisdiction.

### 11.4 Respond to every review fast and privacy-safe — never confirm someone is a patient. [P1]
Owner responses support ranking and conversion. Respond within ~24–72h to positive and negative reviews, but a medical entity's reply must **not** confirm the reviewer was a patient or reference any treatment/diagnosis/date — even if the reviewer disclosed it. Use a generic, empathetic template and move specifics offline. A US clinic was fined US$30,000 for disclosing patient information in a review reply ([Bass Berry](https://www.bassberry.com/news/how-can-healthcare-providers-respond-to-online-patient-reviews-without-violating-hipaa/), [AMA](https://www.ama-assn.org/practice-management/hipaa/are-physicians-prohibited-responding-online-patient-reviews)).
- *Kaiteki application:* Malaysia's PDPA + MMC confidentiality duties parallel the HIPAA principle. Build a vetted response template into each branch's SOP (not the website), train each branch's GBP manager, and route any clinical specifics to a private WhatsApp/phone channel.

### 11.5 Display genuine third-party reviews on-site for conversion — decoupled from rich-result expectations. [P2]
Even without Google stars, surfacing real Google/Facebook reviews on branch pages lifts trust and WhatsApp-CTA conversion on a YMYL site. Pull reviews via the Places/Business Profile data (attributed to Google), show reviewer first-name + star + date, and link out to the real GBP page. Display a representative mix (don't cherry-pick only 5-stars). Cache as typed data at build/ISR — **avoid** heavy third-party widgets that hurt INP/LCP ([BrightLocal](https://www.brightlocal.com/learn/showcase-reviews-off-site/)).
- *Kaiteki application:* In App Router, fetch reviews server-side (route handler + `revalidate`) into typed data rendered by a lightweight component. Display real text only — **never** patient before/after photos or clinical testimonials that breach Malaysian rules (§11.6).

### 11.6 Comply with Malaysian medical-advertising rules in all reputation assets. [P1]
The MAB 3/2023 guidelines plus the PHFSA 586 and Medicines (Advertisement & Sale) Act 1956 framework restrict patient testimonials, before/after photos, superlatives ("best", "No.1", "safest"), and facility-vs-facility comparison; promotions have specific allowed formats ([MAB 3/2023](https://pharmacy.moh.gov.my/sites/default/files/document-upload/advertising-guidelines-healthcare-facilities-and-services-mab-3.2023.pdf), [Medical Protection MY](https://www.medicalprotection.org/malaysia/casebook-resources/factsheets/factsheets/mal-practice-promotion), [Medical (Amendment) Act 2024](https://mmc.gov.my/wp-content/uploads/2025/08/Medical-Amendment-Act-2024.pdf)).
- *Kaiteki application:* Prefer linking out to independent Google reviews and showing star/volume signals over publishing curated testimonials or before/after galleries. Have an MAB-experienced reviewer clear the reviews module, treatment pages, and promo copy before launch. (Same constraint as §8.1/§10.13 — verify current Act text before launch.)

### 11.7 Build brand/entity signals: consistent NAP + `sameAs` + per-branch structured data. [P1]
Knowledge Graph / Knowledge Panel eligibility is driven by consistent NAP, authoritative mentions, and structured data. Use exact-match name/address/phone for each branch across website, GBP, social, and directories; add `Organization` schema (one parent brand) with `sameAs` to all official social/GBP URLs, plus per-branch `LocalBusiness`/`MedicalClinic` entries ([Headline Consultants](https://www.headlineconsultants.com/using-entity-seo-to-get-your-brand-recognized-in-knowledge-graphs/), [Search Engine Land](https://searchengineland.com/links-brand-signals-seo-authority-model-475968)).
- *Kaiteki application:* Generate per-branch JSON-LD from the typed branch data (§10.6) so NAP can never drift between copy and schema. Audit existing WordPress-era + directory citations for stale data during migration.

### 11.8 Invest in earned digital PR and local/health-directory links, not bought links. [P2]
Durable off-page wins for a YMYL brand: local Malaysian press, reputable health/beauty publications, professional-association/accreditation listings, legitimate local directories, and partnership mentions earned via expert-led content (doctor commentary, treatment explainers, data pieces) ([Outreach Monks](https://outreachmonks.com/link-building-for-healthcare-websites/), [Straton Oakland](https://stratonoakland.com/building-high-quality-backlinks-for-medical-websites-in-2025/)).
- **Avoid** paid links, link exchanges, and PBNs — they violate Google's link-spam policy and trigger hard-to-recover manual actions. Any genuinely sponsored placement must carry `rel="sponsored"` (and `nofollow` where appropriate).
- *Kaiteki application:* Position Kaiteki's doctors as quotable experts and pitch KL/Johor/Sabah press for openings or community events; steer clear of cheap "guaranteed backlink" vendors targeting this niche.

### 11.9 Cultivate unlinked brand mentions — they feed classic SEO and AI Overviews. [P2]
Unlinked brand mentions (your name in trusted content without a hyperlink) increasingly correlate with AI-Overview citations and trigger Knowledge Panels, making mentions a first-class goal alongside links ([SearchAtlas](https://searchatlas.com/blog/backlinks-to-mentions-evolution-off-page-signals-2026/), [Growth Partners](https://growthpartners.online/backlinks/brand-mentions-for-seo)). Note the AI-citation correlation evidence is correlational, not causal — pursue mentions as one signal among several.
- *Kaiteki application:* Standardise on "Kaiteki Skin Aesthetic Clinic" so mentions resolve to one entity; monitor unlinked mentions and request a link where appropriate, but the mention already carries value for AI visibility where Kaiteki wants to outrank Cleo.

### 11.10 Keep social profiles complete, consistent, and linked via `sameAs`. [P3]
Maintain claimed, active profiles on Instagram/Facebook/TikTok with matching NAP/name/logo and a link to `kaiteki.my`, all referenced in the `Organization` `sameAs` array — corroborating the entity and seeding mentions ([BrightLocal social reviews](https://www.brightlocal.com/learn/reviews-on-social-media/)).
- *Kaiteki application:* Manage Facebook recommendations (which function like reviews) with the same privacy-safe response policy as Google reviews (§11.4).

### 11.11 Treat the disavow tool as a last resort. [P3]
Google states most sites never need disavow — "if you weren't buying links, don't disavow." Use it only for an actual/expected manual action on unnatural links you can't get removed; misuse can strip value from legitimate links ([disavow help](https://support.google.com/webmasters/answer/2648487?hl=en), [Safari Digital](https://www.safaridigital.com.au/blog/disavowing-toxic-and-spammy-links/)).
- *Kaiteki application:* Audit the inherited backlink profile once during migration; only consider disavow if the legacy blog accumulated paid/spammy links **and** a manual action appears in Search Console.

### 11.12 Migrate cleanly so review/citation signals carry over. [P2]
Preserve off-page equity during the rebuild: 301-redirect all old URLs (including the blog subdomain), keep each branch's GBP "website" field pointing to the correct **new branch URL** (not just the homepage), and re-verify GBPs if needed ([301 docs](https://developers.google.com/search/docs/crawling-indexing/301-redirects)). (Migration mechanics are detailed in §12.1–§12.2.)
- *Kaiteki application:* Map every old WordPress blog URL to its `/blog` equivalent with 301s, update all 9 GBP website fields, and spot-check that high-value inbound links/citations still resolve post-launch.

---

## 12. Measurement, Analytics & SEO Operations

For a WhatsApp-only, multi-location clinic, measurement must center on the only real conversion signal you have — outbound clicks to `wa.me`/`tel:` links, captured as GA4 key events and segmented per branch and per service. The stack: GA4 (key events + Enhanced Measurement) + GTM + Google Search Console (domain property) + Bing Webmaster Tools + a free Looker Studio dashboard joining GSC and GA4. The single biggest operational risk is the Next.js rebuild plus WordPress-blog-to-`/blog` migration — a "site move with URL changes" that demands disciplined redirects and monitoring.

### 12.1 Treat the rebuild + blog migration as a Google "site move with URL changes": full 1:1 server-side 301/308 redirect map. [P1]
Before launch, crawl the current site + blog subdomain (Screaming Frog/Sitebulb), export every indexed URL, and build a 1:1 mapping from each old URL (incl. `blog.kaiteki.my/... → kaiteki.my/blog/...`) to its closest new URL. Implement **server-side** permanent redirects, not client-side/JS or meta-refresh — in Next.js, `redirects()` in `next.config.js` emits 308, which Google treats identically to 301 ([Google site-move guide](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [301/308 docs](https://developers.google.com/search/docs/crawling-indexing/301-redirects)). Avoid redirect chains/loops (one hop, old→final). Keep redirects live **at least a year**.
- **Avoid** mass-redirecting old blog posts to the homepage or a generic `/blog` index — that collapses topical signals and can be treated as soft-404. Redirect each post to its migrated equivalent or nearest topical match.
- *Kaiteki application:* Highest-risk item in the project — the subdomain consolidation **and** framework rebuild are two simultaneous URL-affecting moves; do both in one mapping spreadsheet. Also verify every migrated page's `wa.me` CTA still carries the correct branch + pre-filled text after migration.

### 12.2 Launch-day & post-launch indexation verification checklist. [P1]
At cutover: (1) every new URL has a self-referencing `rel=canonical` pointing to the **new** URL; (2) remove any staging `noindex`; (3) submit **both** the new-URL and (temporarily) old-URL XML sitemaps in GSC so Google discovers redirects; (4) use the Change of Address tool only if the host/domain changes (not for same-domain path changes); (5) test redirects with URL Inspection + a bulk crawl. Then monitor Page Indexing: old-URL indexed count should fall while new rises — check daily for the first two weeks, then weekly for months ([Google site-move guide](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [Change of Address](https://support.google.com/webmasters/answer/9370220)).
- *Kaiteki application:* Add a deploy-pipeline check that **fails the build** if any production page emits `noindex` or robots.txt disallows `/`. Spot-check each of the 9 branch pages and top treatment pages as individually "Indexed" within 2 weeks.

### 12.3 Make WhatsApp (`wa.me`) clicks the primary GA4 key event, with per-branch/per-service parameters. [P1]
GA4 Enhanced Measurement auto-fires outbound `click` events carrying `link_url`. Create a derived event `whatsapp_lead` (event_name=`click` AND `link_url` contains `wa.me`, also covering `api.whatsapp.com`/`web.whatsapp.com`) and toggle it ON as a **Key Event**. For richer attribution, fire a GTM event attaching `branch`, `service`, and `page_location` params registered as custom dimensions. Key-event data is **not retroactive** — set this up before/at launch ([WhatsApp tracking guide](https://ezygodigi.in/blog/track-whatsapp-clicks-ga4-guide), [GA4 key events](https://analytify.io/ga4-key-events/)).
- *Kaiteki application:* Pre-fill each `wa.me` link's text to encode branch + service so the WhatsApp message itself is a backup attribution channel. Build a GA4 Exploration of key events by Landing Page and branch to rank which treatment pages and branches generate the most enquiries.

### 12.4 Track `tel:` click-to-call as a second, distinct key event. [P1]
Create `phone_call_click` (click where `link_url` begins with `tel:`, or a GTM Click-URL trigger matching `^tel:`), attach the same branch/service params, and mark it a key event — kept separate from `whatsapp_lead` so you can see the WhatsApp-vs-call mix per branch ([tel: tracking](https://martech.zone/track-tel-clicks-in-google-analytics-events-google-tag-manager/)).
- *Kaiteki application:* Each branch has its own number — pass the dialed number as a parameter so the event resolves to a branch. Label dashboards clearly: a `tel:` click is a proxy, not proof a call connected. Some older/Sabah/Johor audiences may prefer calling.

### 12.5 Use a GSC **Domain** property + import the site into Bing Webmaster Tools. [P2]
Set up GSC as a Domain property (DNS TXT) so it captures http/https, www/non-www, and all subdomains in one view — valuable because the migration consolidates `blog.kaiteki.my` into `kaiteki.my`. In Bing, "Import from Google Search Console" auto-verifies and pulls sitemaps. Enable IndexNow to push new/updated blog URLs ([Bing import](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools), [IndexNow FAQ](https://www.indexnow.org/faq)).
- *Kaiteki application:* Wire IndexNow into the Next.js publish pipeline so new posts ping Bing on deploy; submit only changed URLs.

### 12.6 Monitor Core Web Vitals as FIELD/RUM data — INP, not FID. [P2]
Since March 2024 INP replaced FID. p75 targets: LCP ≤2.5s (poor >4.0s), INP ≤200ms (poor >500ms), CLS ≤0.1 (poor >0.25). Google ranks on **field** data (CrUX), so monitor the GSC Core Web Vitals report + PageSpeed Insights field section, not just Lighthouse. CrUX stays Chrome-only even though Firefox 144 (Oct 2025) and Safari 26.2 (Dec 2025) added INP support ([web.dev thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds), [Core Web Vitals 2026](https://www.corewebvitals.io/core-web-vitals)). Group fixes by URL template since CrUX buckets by page group.
- *Kaiteki application:* Image-heavy galleries are the LCP risk — use `next/image` with `priority` on the hero and reserved dimensions to protect CLS. INP risk comes from heavy hydration on interactive components (branch selector, lightbox); keep client components small.

### 12.7 Stream real-user CWV from Next.js into GA4 via `useReportWebVitals`. [P3]
CrUX only reports page-groups with enough Chrome traffic and lags ~28 days. Supplement with first-party RUM: isolate `useReportWebVitals` in a small client component and forward LCP/INP/CLS/FCP/TTFB to GA4 via `gtag` (multiply CLS by 1000; send metric `id` and `rating`) for near-real-time per-page, per-device data ([Next.js docs](https://nextjs.org/docs/pages/api-reference/functions/use-report-web-vitals)).
- *Kaiteki application:* Keep the reporting component tiny so you don't push the whole layout client-side. Watch INP on mobile, where most Malaysian clinic traffic lives and hydration cost bites.

### 12.8 Create a GA4 AI-referral channel group ordered ABOVE Referral. [P2]
In GA4 Admin → Data display → Channel groups, add an "AI Traffic" channel (Source matches regex e.g. `chatgpt\.com|chat\.openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com|...`) and drag it **above** Referral (GA4 evaluates top-down; regex is case-sensitive). ChatGPT is ~87% of AI referrals; note 35–70% of AI sessions arrive with no referrer and fall into Direct, so treat AI numbers as a floor. Google AI Overviews clicks remain inside Organic Search and can't be cleanly isolated ([Orbit Media](https://www.orbitmedia.com/blog/track-ai-traffic-ga4/), [Loves Data](https://www.lovesdata.com/blog/how-to-track-ai-traffic-ga4/)).
- *Kaiteki application:* Cross-reference AI sessions with `whatsapp_lead` to see whether AI visitors actually enquire — this is the proof-of-value metric for AEO content (§9). Re-check the regex quarterly as new assistants appear.

### 12.9 Build a free Looker Studio dashboard joining GSC + GA4 with role-segmented views. [P2]
Connect GSC + GA4 and build three views: (1) **Executive** — leads (`whatsapp_lead` + `phone_call_click`), lead rate, organic sessions, top converting pages, MoM trend; (2) **SEO ops** — clicks/impressions/position by query & page, indexation status, CWV pass rate, top movers; (3) **Local** — performance by branch/city. Track branded vs non-branded query split (the non-brand line proves SEO works) ([Search Engine Land](https://searchengineland.com/ultimate-looker-studio-seo-campaign-dashboard-456319)).
- *Kaiteki application:* Make "leads per branch" a hero tile so regional managers (KL/Selangor/Johor/Sabah) see their own performance.

### 12.10 Track local map-pack visibility per branch with geo-grid rank tracking. [P2]
Standard trackers report one position; for 9 branches use geo-grid tracking (Local Falcon/BrightLocal/Rankability) that samples Maps + Local Pack rank across a grid around each branch, since proximity dominates and rank varies block-by-block. Track a per-branch service+city keyword set ("botox petaling jaya", "pico laser johor bahru") with brand-wide rollup, paired with GBP Insights (calls, direction requests, profile clicks) per location ([geo-grid guide](https://gmbmantra.ai/blogs/what-is-geo-grid-rank-tracking-multi-location-business)).
- *Kaiteki application:* This is where a chain most often beats competitors like Cleo — branch-level local dominance, not just the homepage ranking.

### 12.11 Establish an audit & reporting cadence: weekly ops, monthly exec, quarterly strategic + technical audit. [P2]
**Weekly** — GSC crawl/index errors, manual actions, broken redirects, ranking movers, leads trend (daily for the first 2 weeks post-launch). **Monthly** — exec review of leads, lead rate, organic vs target, CWV pass rate (SEO effects lag 2–8 weeks, so monthly fits the signal). **Quarterly** — full technical audit (broken links, redirect chains, orphan pages, duplicate canonicals, schema validity), content-decay review, backlink + competitor gap analysis, and re-verification that no `noindex`/robots regressions shipped ([cadence guidance](https://www.searcle.ai/insights/seo-reporting-dashboard)).
- *Kaiteki application:* Because content ships in-repo (MDX) on every deploy, fold a lightweight SEO regression check into CI/CD (`noindex`, canonical, broken internal links, sitemap freshness) so the weekly manual audit is a safety net. The quarterly audit re-validates `MedicalClinic` and other medical schema for YMYL compliance.

### 12.12 Validate structured data in GSC and keep a per-type sitemap index. [P3]
Use GSC Enhancements / Rich Results reports to confirm schema (`MedicalClinic`/`LocalBusiness`, `BreadcrumbList`, `Article`) is valid after migration; fix errors weekly. (FAQ reporting was withdrawn when Google removed FAQ rich results in 2026.) Generate XML sitemaps in Next.js split by type (pages, blog, branches) under a sitemap index (each child ≤50,000 URLs / 50MB, UTF-8, HTTPS, canonical indexable URLs only — never redirected/noindexed URLs) so you can monitor indexation per content type ([large sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps), [build a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)).
- *Kaiteki application:* Auto-generate the sitemap from in-repo MDX/typed data so it's fresh on every deploy, exclude draft/noindex posts, and keep all 9 branch pages in their own child sitemap to confirm indexation at a glance.

### 12.13 Implement consent-aware analytics for the amended PDPA. [P2]
The PDPA (Amendment) Act 2024 commenced in phases through 2025 (administrative provisions 1 Jan; data-controller rename + RM300k→RM1m fines and 2→3-year imprisonment 1 Apr; mandatory DPO + breach notification 1 Jun), tightening consent to granular/specific/withdrawable ([Mayer Brown](https://www.mayerbrown.com/en/insights/publications/2025/07/from-legislative-reform-to-practical-guidance-key-amendments-to-malaysias-pdpa-and-the-launch-of-cross-border-transfer-guidelines), [InCorp](https://malaysia.incorp.asia/guides/pdpa-compliance-malaysia-complete-guide/)). Load GA4/GTM behind a consent mechanism, honor Google Consent Mode v2 (`analytics_storage`/`ad_storage`), don't fire identifiable tracking before consent, and keep a consent record.
- *Kaiteki application:* **Never** encode a patient's selected treatment/condition as PII in analytics. Aggregate `branch`+`service` params on `whatsapp_lead` are fine as categorical data, but never attach name/phone/condition. Have the consent-banner copy reviewed against current JPDP guidance before launch (ties to §8.1).

## 13. Master Implementation Checklist

A consolidated, de-duplicated, priority-ordered checklist drawn from every section's practice index. Work top to bottom: clear all **[P1]** items before launch, schedule **[P2]** into launch or the first post-launch iteration, and treat **[P3]** as ongoing refinement. Grouped by theme for use as a launch / audit checklist.

### Migration & Indexation (launch-blocking)

- [ ] **[P1]** Treat the rebuild + WordPress→/blog move as a Google "site move with URL changes": build a full **1:1 server-side 301/308 redirect map** for every indexed legacy URL before launch.
- [ ] **[P1]** Eliminate redirect chains and loops; redirect straight to the final 200 URL.
- [ ] **[P1]** Serve all content as server-rendered HTML (SSG/ISR/SSR), never client-only, so it indexes in wave one.
- [ ] **[P1]** Set a self-referencing canonical on every indexable page via Next.js `metadata.alternates`.
- [ ] **[P1]** Enforce one URL convention: HTTPS, single canonical host, consistent trailing-slash.
- [ ] **[P1]** Run a launch-day & post-launch indexation verification checklist (canonicals, sitemaps, Change of Address tool, monitoring cadence).
- [ ] **[P1]** Ensure review/citation signals carry over: preserve GBP-to-site mapping and the 301s on launch.
- [ ] **[P2]** Generate XML sitemaps (incl. an image sitemap), keep `lastmod` honest, and maintain a sitemap-index per content type.
- [ ] **[P2]** Author `robots.txt` to allow crawling of content + assets, block only true noise, and never disallow `noindex` pages.
- [ ] **[P2]** Use the robots meta tag / `X-Robots-Tag` for indexation control, with correct HTTP status codes.
- [ ] **[P2]** Prevent index bloat from parameter/faceted and pagination URLs.
- [ ] **[P3]** Lay i18n-ready hreflang groundwork while English-first.

### Architecture & Crawlability

- [ ] **[P1]** Keep architecture flat: every important page reachable within ~3 clicks via crawlable `<a href>` internal links.
- [ ] **[P1]** Use only crawlable `<a href>` links; never rely on JS `onclick` / router-only navigation.
- [ ] **[P2]** Eliminate orphan pages — every page needs ≥1 internal link.
- [ ] **[P2]** Adopt a hub-and-spoke / pillar-cluster topic architecture.
- [ ] **[P2]** Implement explicit concern ↔ treatment ↔ location cross-linking.
- [ ] **[P2]** Implement breadcrumbs with `BreadcrumbList` JSON-LD.
- [ ] **[P3]** Add related-content modules to circulate equity and de-orphan blog posts.
- [ ] **[P3]** Prioritize contextual in-body links over boilerplate footer/nav links; use a reasonable number of links per page.

### Performance & Core Web Vitals

- [ ] **[P1]** Meet the three CWV at the 75th percentile: **LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1**.
- [ ] **[P1]** Prioritize the LCP image with `next/image` (`priority` / preload); never lazy-load it.
- [ ] **[P1]** Eliminate font-driven CLS with `next/font` self-hosting and metric-matched fallbacks; reserve space for all media, ads, embeds, and dynamic content.
- [ ] **[P2]** Optimize against FIELD data (CrUX), not lab/Lighthouse scores; understand CWV as a page-experience tie-breaker, not a primary YMYL rank lever.
- [ ] **[P2]** Serve AVIF/WebP with responsive sizes and correct quality.
- [ ] **[P2]** Use React Server Components and streaming to cut client JS and protect INP; discipline third-party scripts and break up long tasks.
- [ ] **[P2]** Cache aggressively: static/ISR pages behind a CDN with correct headers.
- [ ] **[P3]** Cut JS/CSS (code-split, tree-shake, critical CSS only) and optimize the critical request path (preconnect, preload, minimize render-blocking).
- [ ] **[P3]** Continuously monitor CWV in Search Console and set performance budgets in CI.

### Structured Data & Schema

- [ ] **[P1]** Add a site-wide `Organization` / `MedicalBusiness` identity block on the homepage.
- [ ] **[P1]** Add per-branch `LocalBusiness` (`MedicalClinic`) schema with NAP, geo, and hours on every branch page.
- [ ] **[P1]** Do **not** mark up self-hosted `Review` or `AggregateRating`; never fabricate ratings.
- [ ] **[P2]** Mark up authors/reviewers and the org (`Physician`, `MedicalClinic`, `reviewedBy`); use `MedicalWebPage` correctly.
- [ ] **[P2]** Publish `Article`/`BlogPosting` with a credentialed `Physician` author in one validated schema graph.
- [ ] **[P2]** Validate structured-data enhancements in GSC.
- [ ] **[P3]** FAQ rich results are **gone** (fully removed 2026-05) and `HowTo` deprecated since 2023 — keep FAQ *content* for AEO and treat `FAQPage` markup as optional; drop `WebSite` `SearchAction` but keep `WebSite` for site name.

### Compliance — YMYL / Malaysian Medical Advertising (non-negotiable)

- [ ] **[P1]** Do **not** publish patient testimonials, reviews, or identifiable patient before/after photos on the medical site.
- [ ] **[P1]** Ban superlatives, guarantees, comparative claims, and outcome claims; enforce a prohibited-words lint list.
- [ ] **[P1]** Display the MAB/KKLIU approval number and promoter details on every advertisement page.
- [ ] **[P1]** Keep all indexed/advertised content compliant with Malaysian healthcare advertising rules (MAB/KKLIU, MMC).
- [ ] **[P1]** Add a standing medical disclaimer and "consult a doctor" framing on all health content.
- [ ] **[P1]** Make the WhatsApp CTA and any contact/enquiry forms PDPA-compliant.
- [ ] **[P1]** Separate educational blog content from MAB-approved "advertisement" pages in the IA.
- [ ] **[P1]** Implement a publish-time compliance gate (checklist + automated checks) in the repo.
- [ ] **[P2]** Keep promotional claims, pricing, and offers honest, complete, and substantiable.
- [ ] **[P2]** Filter every local-SEO and off-page asset through Malaysian medical-advertising compliance.

### E-E-A-T & Trust

- [ ] **[P1]** Add author bylines that link to credentialed doctor profile pages (the "Who").
- [ ] **[P1]** Add a visible "Medically reviewed by Dr. [Name]" attribution on health content.
- [ ] **[P1]** Establish on-site Trust signals: HTTPS, privacy policy, real NAP.
- [ ] **[P2]** Build authoritative About / clinic-credentials / branch pages (entity + ownership transparency).
- [ ] **[P2]** Cite authoritative medical sources for factual health claims; keep citations followed.
- [ ] **[P2]** Run a topical-authority content hub anchored to credentialed clinicians.
- [ ] **[P2]** Treat E-E-A-T as the AI Overview / AI-search citation filter (2025–2026).
- [ ] **[P3]** Demonstrate first-hand Experience with original media, within Malaysian advertising limits.
- [ ] **[P3]** Make "Why" people-first and disclose any AI/automation in content production.

### Content Strategy & Topical Authority

- [ ] **[P1]** Make templated treatment/branch/doctor pages genuinely unique — avoid the doorway/scaled-content trap and thin/duplicate content.
- [ ] **[P2]** Build pillar-and-spoke topic clusters per treatment and concern, not isolated keyword pages.
- [ ] **[P2]** Match content format to the four search intents across page archetypes.
- [ ] **[P2]** Apply Google's people-first self-assessment to every page; cover topics comprehensively (depth beats word count).
- [ ] **[P2]** Make location/branch pages locally specific and tie them to a clear local entity.
- [ ] **[P2]** Treat the WordPress→/blog migration as a content-quality and topical-authority opportunity.
- [ ] **[P3]** Run a content-refresh cadence by content type, with substantive (not cosmetic) updates and genuine "last updated" dates.
- [ ] **[P3]** Use AI for assistance only, never for primary low-value generation; disclose where expected.
- [ ] **[P3]** Differentiate from competitors with depth and compliant authority, not copied tactics.

### On-Page SEO

- [ ] **[P1]** Enforce exactly one H1 and a logical, gap-free H2/H3 outline per page.
- [ ] **[P1]** Build a one-keyword/one-intent-per-URL keyword map across the 4 page archetypes to prevent cannibalization.
- [ ] **[P2]** Write unique, descriptive titles (~60 chars / ~600px) via `title.template`; unique, accurate meta descriptions (~150–160 chars) per page.
- [ ] **[P2]** Use short, lowercase, hyphenated, evergreen slugs with shallow 2–3 level hierarchy.
- [ ] **[P2]** Give every meaningful image a descriptive filename, real alt text, and contextual caption.
- [ ] **[P2]** Add complete Open Graph + Twitter/X card metadata with a 1200×630 image via `metadata.openGraph`.
- [ ] **[P2]** Ensure key-page metadata is in the rendered `<head>` (mind Next.js streaming metadata).
- [ ] **[P3]** Add a table of contents with anchor jump links on long treatment and blog pages.
- [ ] **[P3]** Optimize for entities and semantic topical authority, not just keywords.

### AEO / GEO — AI Search

- [ ] **[P2]** Structure content for Answer Engine Optimization since most health queries trigger AI Overviews.
- [ ] **[P2]** Keep question-based FAQ content for users and AI, but stop relying on FAQ schema for SERP rich results.
- [ ] **[P2]** Cultivate unlinked brand mentions — they now feed both classic SEO and AI Overviews/AI Mode citations.
- [ ] **[P3]** Optimise local AI-search visibility (AI Overviews / AI Mode) via on-page + citations + reviews.

### Local & Multi-Location SEO (9 branches)

- [ ] **[P1]** Verify and fully complete each of the 9 GBPs (NAP, hours, services, attributes, photos).
- [ ] **[P1]** Build one unique, server-rendered location page per branch (no template duplication), each with unique `MedicalClinic`/`LocalBusiness` JSON-LD.
- [ ] **[P1]** Enforce strict NAP consistency across website, GBP, and all citations.
- [ ] **[P1]** Keep each GBP business name to the real legal/brand name — never keyword-stuff it.
- [ ] **[P2]** Set the correct primary GBP category per branch plus ~4 relevant secondary categories.
- [ ] **[P2]** Build a crawlable hub store-locator on the main domain linking to all 9 branch pages.
- [ ] **[P2]** Manage the 9 profiles at scale via a chain location group + (optional) bulk verification.
- [ ] **[P3]** List on Malaysian-priority and global directories + data aggregators.
- [ ] **[P3]** Use Google Posts, Q&A, Services, and Messaging for conversion signals (not ranking).

### Reviews, Reputation & Off-Page Authority

- [ ] **[P1]** Never gate, incentivize, or buy reviews — it violates Google policy AND the FTC Consumer Review Rule.
- [ ] **[P1]** Respond to every review fast, in a HIPAA-style privacy-safe way (never confirm someone is a patient).
- [ ] **[P2]** Run a per-branch GBP review-velocity program (recency now beats raw volume) and reply to all.
- [ ] **[P2]** Build brand/entity signals: consistent NAP everywhere + `sameAs` + per-branch structured data.
- [ ] **[P2]** Display genuine third-party reviews on-site for conversion (UGC), decoupled from rich-result expectations.
- [ ] **[P3]** Invest in earned digital PR and local/health-directory links instead of buying links; keep social profiles complete and linked via `sameAs`.
- [ ] **[P3]** Treat the disavow tool as a last resort, not routine hygiene.

### Measurement, Analytics & SEO Operations

- [ ] **[P1]** Make WhatsApp (`wa.me`) clicks the primary GA4 key event, with per-branch and per-service parameters.
- [ ] **[P1]** Implement consent-aware analytics to comply with Malaysia's amended PDPA (YMYL/medical data sensitivity).
- [ ] **[P2]** Track `tel:` click-to-call as a second, distinct key event.
- [ ] **[P2]** Use a GSC Domain property + import the verified site into Bing Webmaster Tools.
- [ ] **[P2]** Monitor CWV as FIELD/RUM data (CrUX), with INP — not FID — as the responsiveness metric; stream real-user CWV from Next.js into GA4 via `useReportWebVitals`.
- [ ] **[P2]** Create a GA4 AI-referral channel group ordered ABOVE Referral, and watch for AI-to-Direct undercount.
- [ ] **[P3]** Build a free Looker Studio dashboard joining GSC + GA4 (three audience views + lead-gen KPIs).
- [ ] **[P3]** Track local map-pack/Maps visibility per branch with geo-grid rank tracking.
- [ ] **[P3]** Establish an audit & reporting cadence: weekly ops, monthly exec, quarterly strategic + technical audit.

## 14. Glossary

- **E-E-A-T** — Experience, Expertise, Authoritativeness, and Trust: the qualities Google's Search Quality Rater Guidelines use to assess content quality, with Trust at the center. Especially decisive for YMYL and as a filter for AI-search citations.
- **YMYL** — "Your Money or Your Life": topics (health, finance, safety, legal) that can materially affect a person's wellbeing, held to an elevated quality and accuracy bar. A medical-aesthetic clinic site is YMYL.
- **AEO** — Answer Engine Optimization: optimizing content to be surfaced and cited directly by answer engines (AI Overviews, AI Mode, chat assistants) rather than only ranked in a traditional list.
- **GEO** — Generative Engine Optimization: closely related to AEO; optimizing for inclusion and citation within generative AI search results.
- **INP** — Interaction to Next Paint: a Core Web Vital measuring responsiveness to user interactions; target ≤ 200ms at the 75th percentile. Replaced FID in 2024.
- **LCP** — Largest Contentful Paint: a Core Web Vital measuring loading performance (time to render the largest visible element); target ≤ 2.5s.
- **CLS** — Cumulative Layout Shift: a Core Web Vital measuring visual stability (unexpected layout movement); target ≤ 0.1.
- **CrUX** — Chrome User Experience Report: Google's dataset of real-world (field) performance from opted-in Chrome users; the source of record for Core Web Vitals assessment.
- **NAP** — Name, Address, Phone: a business's core contact identity; consistency across the site, GBP, and citations is a key local-SEO signal.
- **SERP** — Search Engine Results Page: the page of results returned for a query, increasingly including AI Overviews, map packs, and other features alongside organic links.
- **JSON-LD / schema** — Structured data, expressed as JSON-LD using the schema.org vocabulary, that describes a page's entities (organization, clinic, author, article) to search and answer engines.
- **hreflang** — An annotation that tells search engines which language/region variant of a page to serve, preventing duplicate-content issues across localized versions.
- **canonical** — The `rel="canonical"` signal designating the preferred URL among duplicate or similar pages, consolidating ranking signals to one address.
- **SSR / SSG / ISR** — Server-Side Rendering (HTML built per request), Static Site Generation (HTML built at deploy time), and Incremental Static Regeneration (static pages revalidated on a schedule): Next.js rendering modes that all produce indexable server-rendered HTML.
- **map pack** — The local "3-pack" of business listings with a map that Google shows for local-intent queries; visibility here is driven by GBP, proximity, relevance, and reviews.
- **MAB** — Medicine Advertisements Board (Malaysia): the authority that approves healthcare/medicine advertisements; approval is evidenced by a KKLIU number that must appear on advertisement material.

## 15. Sources & References

### Google Search Central — Crawling, Indexing & Migrations

- [Site Moves With URL Changes - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [How to Use Redirects - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Understand JavaScript SEO Basics - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Specify a Canonical with rel=canonical - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [What is URL Canonicalization - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/canonicalization)
- [Build and Submit a Sitemap - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Image Sitemaps - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps)
- [Manage Sitemaps With Sitemap Index Files - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps)
- [Robots.txt Introduction - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Robots Refresher: page-level granularity - Google Search Central Blog (Mar 2025)](https://developers.google.com/search/blog/2025/03/robots-refresher-page-level)
- [Block Search Indexing with noindex - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- [Mobile-First Indexing Best Practices - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)
- [Localized Versions of Your Pages (hreflang) - Google Search Central](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [SEO Link Best Practices for Google - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Qualify Outbound Links to Google - Google Search Central](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)

### Google Search Central — Appearance, Structured Data & Content

- [Influencing Your Title Links in Search Results - Google Search Central](https://developers.google.com/search/docs/appearance/title-link)
- [Control Your Snippets in Search Results - Google Search Central](https://developers.google.com/search/docs/appearance/snippet)
- [Image SEO Best Practices - Google Search Central](https://developers.google.com/search/docs/appearance/google-images)
- [FAQ (FAQPage) Structured Data - Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Organization Structured Data - Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Breadcrumb (BreadcrumbList) Structured Data - Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Local Business Structured Data - Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Review Snippet (Review, AggregateRating) Structured Data - Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- [Making Review Rich Results More Helpful - Google Search Central Blog (Sept 2019)](https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful)
- [Understanding Page Experience in Google Search Results - Google Search Central](https://developers.google.com/search/docs/appearance/page-experience)
- [Understanding Core Web Vitals and Google Search Results - Google Search Central](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Creating Helpful, Reliable, People-First Content - Google Search Central](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Write High Quality Reviews - Google Search Central](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews)
- [What Web Creators Should Know About the March 2024 Core Update and New Spam Policies - Google Search Central Blog](https://developers.google.com/search/blog/2024/03/core-update-spam-policies)
- [How Google Search Views AI-Generated Content - Google Search Central Blog](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content)

### Google Search Quality Rater Guidelines

- [Search Quality Rater Guidelines: An Overview (Google)](https://services.google.com/fh/files/misc/hsw-sqrg.pdf)
- [General Guidelines (Search Quality Rater Guidelines), Sept 11, 2025](https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf)
- [Google Updates Quality Rater Guidelines: AI & YMYL (Sept 2025) - Stan Ventures](https://www.stanventures.com/news/google-updates-search-quality-raters-guidelines-ai-overviews-clearer-ymyl-definitions-4360/)

### Search Console & Webmaster Tools

- [Core Web Vitals Report - Search Console Help](https://support.google.com/webmasters/answer/9205520)
- [Change of Address Tool - Search Console Help](https://support.google.com/webmasters/answer/9370220)
- [Sitemaps Report - Search Console Help](https://support.google.com/webmasters/answer/7451001?hl=en)
- [Disavow Links to Your Site - Google Search Console Help](https://support.google.com/webmasters/answer/2648487?hl=en)
- [Import Sites From Search Console to Bing Webmaster Tools - Bing Blog](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)
- [IndexNow FAQ - IndexNow.org](https://www.indexnow.org/faq)

### Core Web Vitals & Web Performance (web.dev / Chrome)

- [Web Vitals - web.dev](https://web.dev/articles/vitals)
- [Interaction to Next Paint (INP) - web.dev](https://web.dev/articles/inp)
- [How the Core Web Vitals Metric Thresholds Were Defined - web.dev](https://web.dev/articles/defining-core-web-vitals-thresholds)
- [Why Lab and Field Data Can Be Different - web.dev](https://web.dev/articles/lab-and-field-data-differences)
- [How to View Chrome UX Report Data on PageSpeed Insights - Chrome for Developers](https://developer.chrome.com/docs/crux/guides/pagespeed-insights)
- [Optimize Cumulative Layout Shift - web.dev](https://web.dev/articles/optimize-cls)
- [Optimize Largest Contentful Paint - web.dev](https://web.dev/articles/optimize-lcp)
- [Optimize Long Tasks - web.dev](https://web.dev/articles/optimize-long-tasks)
- [Enable HTTPS - web.dev](https://web.dev/articles/enable-https)
- [Core Web Vitals Workflows With Google Tools - web.dev](https://web.dev/vitals-tools/)

### Next.js & Implementation

- [generateMetadata - Next.js (updated March 2026, v16.x)](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Metadata and OG Images - Next.js](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Image Component (next/image) - Next.js docs](https://nextjs.org/docs/app/api-reference/components/image)
- [Font Component (next/font) - Next.js docs](https://nextjs.org/docs/app/api-reference/components/font)
- [Font Optimization Getting Started - Next.js docs](https://nextjs.org/docs/app/getting-started/fonts)
- [CDN Caching Guide - Next.js docs](https://nextjs.org/docs/app/guides/cdn-caching)
- [useReportWebVitals - Next.js](https://nextjs.org/docs/pages/api-reference/functions/use-report-web-vitals)
- [Optimize Next.js Apps for the Core Web Vitals - patterns.dev](https://www.patterns.dev/react/nextjs-vitals/)
- [Next.js Image Optimization: the next/image Component - DebugBear](https://www.debugbear.com/blog/nextjs-image-optimization)
- [The Expert Guide to Next.js Performance Optimization - Blazity](https://blazity.com/whitepapers/the-expert-guide-to-nextjs-performance-optimization)
- [How To Permanently Redirect (301, 308) with Next.js - Robert Marshall](https://robertmarshall.dev/blog/how-to-permanently-redirect-301-308-with-next-js/)

### Performance — Independent Guides

- [Preload & Prioritize Your LCP Image - Unlighthouse](https://unlighthouse.dev/learn-lighthouse/lcp/prioritize-lcp-image)
- [Image Optimization 2025: WebP, AVIF & Best Practices - FrontendTools](https://www.frontendtools.tech/blog/modern-image-optimization-techniques-2025)
- [How to Reserve Space to Prevent Layout Shift - SpeedVitals](https://speedvitals.com/blog/reserve-space-prevent-layout-shift/)
- [How to Yield to the Main Thread to Improve INP - corewebvitals.io](https://www.corewebvitals.io/pagespeed/yield-to-main-thread)
- [What Are the Core Web Vitals? LCP, INP & CLS Explained (2026) - corewebvitals.io](https://www.corewebvitals.io/core-web-vitals)
- [Core Web Vitals 2026: INP, LCP & CLS Optimization - Digital Applied](https://www.digitalapplied.com/blog/core-web-vitals-2026-inp-lcp-cls-optimization-guide)

### On-Page, Headings, Slugs & Cannibalization

- [How to Use Headings on Your Site - Yoast](https://yoast.com/how-to-use-headings-on-your-site/)
- [Heading Tags for SEO - Semrush](https://www.semrush.com/blog/heading-tags/)
- [What Is a Slug and How to Optimize It - Yoast](https://yoast.com/slug/)
- [URL Slug for SEO - Conductor](https://www.conductor.com/academy/urls/faq/slug/)
- [Fix Keyword Cannibalization - Search Engine Land](https://searchengineland.com/guide/keyword-cannibalization)
- [Keyword and Content Cannibalization - Yoast](https://yoast.com/keyword-cannibalization/)
- [What Is Keyword Intent in SEO - SEOBoost](https://seoboost.com/blog/keyword-intent/)
- [Faceted Navigation in SEO - Search Engine Land](https://searchengineland.com/guide/faceted-navigation)
- [Alt Text SEO Best Practices: Rules for 2026 - AltText.ai](https://alttext.ai/blog/image-alt-text-seo-best-practices)
- [Open Graph Image Sizes 2026 (1200x630) - Krumzi](https://www.krumzi.com/blog/open-graph-image-sizes-for-social-media-the-complete-2026-guide)
- [Ultimate Guide to Social Meta Tags: Open Graph and X Cards - Everywhere Marketer](https://www.everywheremarketer.com/blog/ultimate-guide-to-social-meta-tags-open-graph-and-twitter-cards)
- [How to Create Jump Links - AIOSEO](https://aioseo.com/how-to-create-jump-links-in-wordpress/)
- [Table of Contents: How to Do It Right for SEO - ZenBrief](https://zenbrief.com/blog/table-of-contents-for-seo/)

### Content Strategy, Topic Clusters & Search Intent

- [The Complete Guide to Topic Clusters and Pillar Pages for SEO - Search Engine Land](https://searchengineland.com/guide/topic-clusters)
- [SEO Topic Clusters: The Key to Website Rankings in 2025 - SEO.ai](https://seo.ai/blog/topic-clusters)
- [Hub-and-Spoke SEO Model: Build Topical Authority with Content Clusters - SEO-Kreativ](https://www.seo-kreativ.de/en/blog/hub-and-spoke-model/)
- [Search Intent Types in SEO: A Practical Guide (2026) - Incremys](https://www.incremys.com/en/resources/blog/search-intent-types)
- [How to Match Content with Search Intent - Single Grain](https://www.singlegrain.com/content-marketing-strategy-2/how-to-match-content-with-search-intent/)
- [How to Create Unique and Helpful Service Area Pages - Sterling Sky](https://www.sterlingsky.ca/how-to-create-unique-and-helpful-service-area-pages-for-local-businesses/)
- [How to Do Service Area Page SEO - BrightLocal](https://www.brightlocal.com/learn/service-area-pages/)
- [Local SEO: The Definitive Guide - Backlinko](https://backlinko.com/local-seo-guide)
- [Content Refresh Strategy: Update Old Content for SEO and AI Search - Animalz](https://www.animalz.co/blog/content-refresh)
- [How to Refresh Old Content for SEO - ContentGrip](https://www.contentgrip.com/content-refresh-strategy/)
- [Why Content Refresh Cadence Matters by Niche - Hashmeta](https://hashmeta.com/blog/why-content-refresh-cadence-matters-by-niche-the-complete-guide-to-update-frequency/)

### Core & Spam Updates, Quality

- [What Google's December 2025 Core Update Tells Us About Quality - Raptive](https://raptive.com/blog/what-googles-december-2025-core-update-tells-us-about-quality/)
- [Google's August 2025 Spam Update - SEO Sherpa](https://seosherpa.com/googles-august-2025-spam-update/)
- [An In-Depth Look At Google Spam Policies Updates - Search Engine Journal](https://www.searchenginejournal.com/in-depth-look-at-google-spam-policies-updates/511005/)
- [Google Recommends Original Photos For Product Reviews - Search Engine Journal](https://www.searchenginejournal.com/google-recommends-original-photos-for-product-reviews/437050/)
- [Google Drops FAQ Rich Results From Search - Search Engine Journal](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)

### Entity SEO, AEO / GEO & AI Search

- [Entity SEO Explained: Boost Visibility in AI Search - MRS Digital](https://mrs.digital/blog/entity-seo/)
- [Semantic SEO Guide: Entities, Topical Authority & Schema (2026) - Squin](https://squin.org/semantic-seo/)
- [AI Answer Engine Optimization (AEO) Best Practices 2026 - Green Flag Digital](https://greenflagdigital.com/aeo-best-practices/)
- [Answer Engine Optimization (AEO): Complete Guide 2026 - AirOps](https://www.airops.com/blog/aeo-answer-engine-optimization)
- [Are FAQ Schemas Important for AI Search, GEO & AEO? - Frase](https://www.frase.io/blog/faq-schema-ai-search-geo-aeo)
- [How to Optimize for AI Overviews: Best Practices for 2026 - Boral Agency](https://www.boralagency.com/optimize-for-ai-overviews-answer-engines/)
- [GEO for Healthcare: Getting Medical Content Cited in AI Health Answers - Over The Top SEO](https://www.overthetopseo.com/geo-for-healthcare-getting-medical-content-cited-in-ai-health-answers-2/)
- [Healthcare AEO: Building Trust and Winning Patient Queries in YMYL Content - Maximus Labs](https://www.maximuslabs.ai/answer-engine-optimizations/healthcare-aeo-trust-winning-patient-queries-ymyl)
- [The YMYL Playbook for Healthcare AI Search - upGrowth](https://upgrowth.in/ymyl-playbook-healthcare-brands-win-ai-search-trust/)
- [Google AI Overviews Ranking Factors: 2026 Guide to Winning Citations - Wellows](https://wellows.com/blog/google-ai-overviews-ranking-factors/)

### Internal Linking, Anchor Text & Site Architecture

- [How Google Really Interprets Internal Links (Beyond PageRank) - UpRankd](https://uprankd.com/news/guides/how-google-interprets-internal-links-beyond-simple-page-rank-flow)
- [Powerful Internal Links Strategy to Boost Rankings - ClickRank](https://www.clickrank.ai/internal-links-in-seo/)
- [Crawl Depth Guide - Technical SEO - ClickRank](https://www.clickrank.ai/crawl-depth-in-seo/)
- [Why Flat Site Structures Outperform Deep Navigation for SEO - Design in DC](https://designindc.com/blog/why-flat-site-structures-outperform-deep-navigation-for-seo/)
- [SEO Breadcrumbs: Structure, Benefits & Best Practices - Search Engine Land](https://searchengineland.com/guide/seo-breadcrumbs)
- [Breadcrumbs in SEO: What Google's Mobile Change Actually Means - Sitebulb](https://sitebulb.com/resources/guides/breadcrumbs-in-seo-what-googles-mobile-change-actually-means/)
- [Exact-Match vs. Varied Anchor Text: A 2025 Guide - Wielded](https://www.wielded.com/blog/exact-vs-varied-anchor-text)
- [Internal Link Anchor Text Optimization - iBeam Consulting](https://www.ibeamconsulting.com/blog/seo-internal-link-anchor-text-optimization/)
- [Internal Linking Audit With the SEO Spider - Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/tutorials/internal-linking-audit-with-the-seo-spider/)
- [How to Run an Internal Link Audit to Improve SEO - Inflow](https://www.goinflow.com/blog/audit-internal-links-for-seo/)
- [Internal Links SEO: Best Practices 2025 - Emplibot](https://emplibot.com/internal-links-seo-best-practices-2025)
- [How Do You Use Internal Linking for SEO? - Semrush](https://www.semrush.com/blog/how-do-you-use-internal-linking-for-seo/)

### E-E-A-T & YMYL

- [MedicalWebPage - Schema.org Type](https://schema.org/MedicalWebPage)
- [Health and Medical Types - Schema.org](https://schema.org/docs/meddocs.html)
- [Medical Webpage Schema: A Complete Implementation Guide - MedicallyReviewed](https://medicallyreviewed.com/medical-schema-markup/)
- [Citing MedlinePlus (NIH/NLM)](https://medlineplus.gov/about/using/citation/)
- [What is YMYL? Google's High-Stakes Content Category - Search Engine Land](https://searchengineland.com/guide/ymyl)
- [Healthcare Content Strategy for E-E-A-T & YMYL Criteria - Hill Web Creations](https://www.hillwebcreations.com/healthcare-sites-content-strategy-e-a-t-criteria/)
- [E-E-A-T and YMYL in 2025: SEO for Finance & Healthcare - Algo Digital](https://algodigital.co.uk/eat-and-ymyl-in-2025-a-guide-for-finance-and-healthcare-websites/)
- [Ranking for Trust: How Google's E-E-A-T Updates Are Changing Healthcare SEO in 2025 - Rise](https://rise.co/blog/ranking-for-trust-how-googles-e-e-a-t-updates-are-changing-healthcare-seo)
- [Mastering E-E-A-T in YMYL Sites - Surfer](https://surferseo.com/blog/eeat-in-ymyl/)
- [E-E-A-T in Practice: 20 Trust Signals You Can Add to Any Website - Brand Vision](https://www.brandvm.com/post/e-e-a-t-20-trust-signals-website)
- [E-E-A-T for Local SEO: The Ultimate Checklist - Local Dominator](https://localdominator.co/eeat-for-local-seo/)
- [The E-E-A-T Audit: How Google Scores Your Credibility - Internet Reputation](https://www.internetreputation.com/the-e-e-a-t-audit-how-google-scores-your-credibility-and-what-most-people-get-wrong/)
- [Showcasing First-Hand Experience - Mastering Google's E-E-A-T in 2025 - 41 North Digital](https://www.41northdigital.com/blog/showcasing-first-hand-experience-mastering-googles-e-e-a-t-in-2025)
- [E-E-A-T in 2026: How Google and AI Platforms Evaluate Trust and Authority - Bliss Drive](https://www.blissdrive.com/blog-ai-visibility/eeat-how-google-and-ai-platforms-evaluate-trust-and-authority/)
- [Google's Search Quality Rater Guidelines and YMYL in the Age of AI Search - iPullRank](https://ipullrank.com/eeat-ymyl-ai-search)

### Malaysian Medical Advertising, Regulatory & PDPA

- [Advertising Guidelines for Healthcare Facilities and Services (MAB 3/2023) - MOH Malaysia](https://pharmacy.moh.gov.my/sites/default/files/document-upload/advertising-guidelines-healthcare-facilities-and-services-mab-3.2023.pdf)
- [Medicine Advertisements Board (MAB) Guidelines and Policy - MOH Pharmaceutical Services](https://pharmacy.moh.gov.my/en/documents/medicine-advertisements-board-mab-guidelines-and-policy.html)
- [Medicine Advertisements Board (MAB) - MOH Pharmaceutical Services](https://pharmacy.moh.gov.my/en/content/medicine-advertisements-board.html)
- [Is Advertisement on Aesthetic Services Allowed? - MOH Pharmaceutical Services](https://www.pharmacy.gov.my/v2/en/faq/advertisement-aesthetic-services-allowed.html)
- [MAB Policy and Decision (Services), 15 May 2025 - MOH](https://pharmacy.moh.gov.my/sites/default/files/document-upload/15.5.2025-mab-policy-and-decision-services.pdf)
- [Clinic Medical Advertising Guideline MAB 1/2023 (Malaysia) - Scribd](https://www.scribd.com/document/966621357/Clinic-Medical-Advertising-Guideline-Mab-1-2023)
- [KKLIU Regulations: A Doctor's Guide to Ethical Healthcare Marketing in Malaysia (Jun 2025) - Disruptive Doctors](https://disruptive-doctors.com/kkliu-advertising-guidelines-malaysia/)
- [MMC Guideline on Dissemination of Information by Medical Professionals (incl. social media), Sept 2025](https://mmc.gov.my/wp-content/uploads/2025/09/The-Dissemination-of-Information-by-Medical-Profesionals-Including-on-Social-Media.pdf)
- [MMC Guideline on the Ethical Aspects of Aesthetic Medical Practice (2025)](https://mmc.gov.my/wp-content/uploads/2025/09/Guideline-on-The-Ethical-Aspects-of-Aesthetic-Medical-Practice.pdf)
- [Medical (Amendment) Act 2024 (Act A1729) - Malaysian Medical Council](https://mmc.gov.my/wp-content/uploads/2025/08/Medical-Amendment-Act-2024.pdf)
- [Practice Promotion - Medical Protection (Malaysia)](https://www.medicalprotection.org/malaysia/casebook-resources/factsheets/factsheets/mal-practice-promotion)
- [Aesthetic Medicine in Malaysia: Navigating the Legal & Regulatory Framework - RDS Law Partners](https://www.rdslawpartners.com/post/aesthetic-medicine-in-malaysia-navigating-the-legal-regulatory-framework)
- [LCP Guidelines - Medical Aesthetic Certification (MAC) Program](https://www.aestheticmedicalcertification.org.my/lcp-guidelines/)
- [Out-dated Advertising Rules Affect Malaysia - IMTJ](https://www.laingbuissonnews.com/imtj/news-imtj/out-dated-advertising-rules-affect-malaysia/)
- [Personal Data Protection (Amendment) Act 2024 - JPDP](https://www.pdp.gov.my/ppdpv1/en/akta/personal-data-protection-amendment-act-2024/)
- [Important Changes to Malaysia's Data Protection Laws - Sidley Austin](https://www.sidley.com/en/insights/newsupdates/2024/08/important-changes-to-malaysias-data-protection-laws)
- [Key Amendments to Malaysia's PDPA and 2025 Guidelines - Mayer Brown](https://www.mayerbrown.com/en/insights/publications/2025/07/from-legislative-reform-to-practical-guidance-key-amendments-to-malaysias-pdpa-and-the-launch-of-cross-border-transfer-guidelines)
- [PDPA Compliance Malaysia 2025: Complete Guide - InCorp](https://malaysia.incorp.asia/guides/pdpa-compliance-malaysia-complete-guide/)
- [PDPA Compliance for WhatsApp Marketing in Malaysia - Raion Tech](https://raiontech.io/blog/pdpa-compliance-whatsapp-marketing-malaysia)

### Local & Multi-Location SEO

- [Tips to Improve Your Local Ranking on Google - Google Business Profile Help](https://support.google.com/business/answer/7091?hl=en)
- [Google's Local Algorithm and Local Ranking Factors - BrightLocal](https://www.brightlocal.com/learn/google-local-algorithm-and-ranking-factors/)
- [Verify Business Profiles in Bulk - Google Business Profile Help](https://support.google.com/business/answer/4490296?hl=en)
- [Manage Locations at Scale - Google Business Profile APIs](https://developers.google.com/my-business/content/manage-locations)
- [Verifying a Multi-Location Business on Google - BrightLocal](https://www.brightlocal.com/learn/verifying-google-business-profile-for-multiple-locations/)
- [The Complete Guide To Local SEO For Multiple Locations - Search Engine Journal](https://www.searchenginejournal.com/the-complete-guide-to-local-seo-for-multiple-locations/578080/)
- [Multi-Location SEO: How to Scale Without the Chaos - Backlinko](https://backlinko.com/multi-location-seo)
- [Local SEO for Multiple Locations: How to Scale Without Cannibalizing - Stackmatix](https://www.stackmatix.com/blog/local-seo-for-multiple-locations)
- [Store Locator SEO: Best Practices for Location Pages & Internal Links - The Ad Firm](https://www.theadfirm.net/store-locator-seo-best-practices-for-location-pages-internal-links/)
- [UX Best Practices: Store Locator Pages - Partoo](https://www.partoo.co/en/blog/ux-best-practices-store-locator-pages-for-online-businesses/)
- [How-to Guide for LocalBusiness Schema Markup - Schema App](https://www.schemaapp.com/schema-markup/how-to-do-schema-markup-for-local-business/)
- [Medical Schema Markup: Copy-Paste Code for Clinics - Halcy](https://www.halcy.ai/learn/medical-schema-markup-guide)
- [Local Business Schema Markup for Multiple Locations - GMBAPI](https://gmbapi.com/news/local-business-schema-markup-for-multiple-locations/)
- [Local SEO Citations Malaysia - SEO Agency Malaysia](https://www.seo-agency.com.my/blog/local-seo-citations-malaysia/)
- [Top Malaysia Business Listing Sites (2026) - SEO Link World](https://seolinkworld.com/malaysia-business-listing-sites/)
- [How to Rank in the Map Pack: Local SEO 2025 - NEXTFLY](https://nextflywebdesign.com/blog/rank-in-the-map-pack/)

### Reviews, Reputation & Off-Page Authority

- [Can Local Businesses Use Review Schema? Google's Rules Explained - BrightLocal](https://www.brightlocal.com/learn/review-schema/)
- [What Is Google Review Velocity and Why Does It Matter - Local Falcon](https://www.localfalcon.com/blog/what-is-google-review-velocity-and-why-does-it-matter-for-businesses)
- [Why Review Recency Matters More Than Volume for GBP Rankings - Adam Collins](https://www.adamcollins.co.uk/review-recency-vs-review-volume-gbp-rankings/)
- [Does the Number of Google Reviews Impact Ranking? [Case Study] - Sterling Sky](https://www.sterlingsky.ca/number-of-reviews-impact-ranking/)
- [Google Review Statistics 2025 - Shapo](https://shapo.io/blog/google-review-statistics/)
- [Google Business Profile Local Ranking Factors in 2025 - Colling Media](https://collingmedia.com/search-engine-optimization-seo/google-my-business-local-ranking-factors/)
- [FTC Announces Final Rule Banning Fake Reviews and Testimonials - FTC](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials)
- [Review Gating: Risks, Google Policy & Ethical Alternatives - SocialPilot](https://www.socialpilot.co/reviews/blogs/review-gating)
- [Tempted to Buy Reviews on Google? Do This Instead - Birdeye](https://birdeye.com/blog/buy-reviews-on-google/)
- [Are Physicians Prohibited From Responding to Online Patient Reviews? - AMA](https://www.ama-assn.org/practice-management/hipaa/are-physicians-prohibited-responding-online-patient-reviews)
- [How Can Healthcare Providers Respond to Online Patient Reviews Without Violating HIPAA - Bass, Berry & Sims](https://www.bassberry.com/news/how-can-healthcare-providers-respond-to-online-patient-reviews-without-violating-hipaa/)
- [Responding to Online Reviews - BrightLocal](https://www.brightlocal.com/learn/responding-to-online-reviews/)
- [Showcase Reviews Off-site - BrightLocal](https://www.brightlocal.com/learn/showcase-reviews-off-site/)
- [Link Building for Healthcare Websites: Top Strategies 2025 - Outreach Monks](https://outreachmonks.com/link-building-for-healthcare-websites/)
- [Building High-Quality Backlinks for Medical Websites in 2025 - Straton Oakland](https://stratonoakland.com/building-high-quality-backlinks-for-medical-websites-in-2025/)
- [Disavowing Toxic & Spammy Links - Is It Worth Your Time? - Safari Digital](https://www.safaridigital.com.au/blog/disavowing-toxic-and-spammy-links/)
- [From Links to Brand Signals: The New SEO Authority Model - Search Engine Land](https://searchengineland.com/links-brand-signals-seo-authority-model-475968)
- [Backlinks vs Brand Mentions: Off-Page SEO Evolution - SearchAtlas](https://searchatlas.com/blog/backlinks-to-mentions-evolution-off-page-signals-2026/)
- [Using Entity SEO to Get Your Brand Recognized in Knowledge Graphs - Headline Consultants](https://www.headlineconsultants.com/using-entity-seo-to-get-your-brand-recognized-in-knowledge-graphs/)

### Measurement, Analytics & GA4

- [GA4 Key Events (Explained 2025) - Analytify](https://analytify.io/ga4-key-events/)
- [How to Track WhatsApp Clicks in GA4 (2026 Guide) - Ezygo Digi](https://ezygodigi.in/blog/track-whatsapp-clicks-ga4-guide)
- [Track Tel Clicks as Key Events in GA4 via GTM - Martech Zone](https://martech.zone/track-tel-clicks-in-google-analytics-events-google-tag-manager/)
- [Where to Find Outbound Click Data in GA4 - Analytics Mania](https://www.analyticsmania.com/post/where-to-find-outbound-click-data-in-google-analytics-4/)
- [How to Track AI Referral Traffic (and Leads) in GA4 - Orbit Media](https://www.orbitmedia.com/blog/track-ai-traffic-ga4/)
- [How to Track AI Traffic in GA4 - Loves Data](https://www.lovesdata.com/blog/how-to-track-ai-traffic-ga4/)
- [The Agency Guide to Tracking AI Traffic in GA4 - Swydo](https://www.swydo.com/blog/track-ai-traffic-in-ga4/)
- [The Ultimate Looker Studio SEO Campaign Dashboard for 2025 - Search Engine Land](https://searchengineland.com/ultimate-looker-studio-seo-campaign-dashboard-456319)
- [SEO Reporting Dashboard Guide 2025 - Searcle](https://www.searcle.ai/insights/seo-reporting-dashboard)
- [What Is Geo-Grid Rank Tracking? Guide for Multi-Location Businesses - GMBMantra](https://gmbmantra.ai/blogs/what-is-geo-grid-rank-tracking-multi-location-business)

