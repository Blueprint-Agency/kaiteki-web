# 04 — Information Architecture, URL Structure & Redirect Map

> **Purpose.** The authoritative information-architecture, URL, navigation, sitemap and **301 redirect** specification for the kaiteki.my Next.js (App Router) rebuild. It formalizes the agreed URL taxonomy, defines every page-type → URL pattern, fixes the legacy host/sitemap bugs, and provides a complete per-URL legacy→new redirect map that must ship before launch.
> **Scope.** Routing, slugs, canonicalization, navigation, breadcrumbs, internal-linking rules, XML sitemaps, robots policy (incl. AI crawlers), i18n/hreflang groundwork, and the full migration redirect map. This is the binding contract for `app/` route structure, `next.config` `redirects()`, `app/sitemap.ts`, and `app/robots.ts`. Implementation mechanics (exact `next.config` syntax, middleware, build gates) are deferred to `docs/07`.
> **How it satisfies `docs/02`.** Directly implements §1 (migration/redirects, rendering, canonicalization, sitemaps/robots, flat architecture, i18n groundwork, regulatory gate), §4 (one-intent-per-URL keyword map, slug/heading rules), §6 (concern↔treatment↔location cross-linking, hub-and-spoke, breadcrumbs, orphan avoidance), §9.9 (AI-crawler allowlist), and §10 (per-branch location pages + crawlable locator hub). Cross-references `docs/03` competitor IA takeaways throughout. Where general SEO advice and Malaysian medical-advertising law (MAB/KKLIU, MMC, PHFSA, PDPA) conflict, **the law wins**.
> **Date:** 2026.

---

## 1. IA principles

The architecture is built on five principles, each tied to a `docs/02` requirement and validated against the `docs/03` competitor teardown.

1. **Typed, siloed, tri-axis IA.** Four commercial/informational axes — **treatments** (device/procedure, commercial-educational intent), **concerns** (problem-oriented, informational/commercial-investigation intent), **locations** (the 9 branches, local intent), and **doctors** (E-E-A-T identity) — plus a **blog** axis. Each axis is its own route group with its own typed data and its own sitemap segment (`docs/02 §1` architecture, §4 keyword map; `docs/03` "tri-axis typed IA", validated by Premier; Cleo/Nexus have **no** concern axis, Cleo/Nexus/BW have **no** real location axis). One canonical page per intent prevents the cannibalization `docs/02 §4` warns about (one national treatment page vs nine "{treatment} {city}" clones).

2. **Crawl depth ≤ 3 clicks.** Every important page — all 9 branches, every core treatment and concern, every doctor, every cornerstone post — is reachable within 3 clicks of the homepage via real server-rendered `<a href>` links (`docs/02 §1` flat architecture, §6.6). Header nav + footer + the `/locations`, `/treatments`, `/concerns` hubs guarantee depth: Home (1) → hub (2) → leaf (3). No `concern > subcategory > treatment > branch` chains 4+ levels deep.

3. **Clean, stable, extensionless URLs.** Lowercase, hyphenated, no stop-words, no file extensions, no dates/IDs, ≤ 2 path levels (`docs/02 §4` slug rules). Slugs are **locale-neutral** and never bake geo into the slug — deliberately diverging from Cleo's `-kl`/`-kuala-lumpur` and Nexus's `-malaysia` stuffing, which hamper i18n (`docs/03` DIFFER). Slugs are **stable**: never changed post-launch without a 301.

4. **Scalability for many treatment/concern/location pages.** Dynamic segments (`/treatments/[slug]`, `/concerns/[slug]`, `/locations/[branch-slug]`, `/doctors/[doctor-slug]`, `/blog/[slug]`) are generated from in-repo typed/MDX data via `generateStaticParams()`, so adding a treatment, concern, branch, doctor, or post is a data change, not an IA change. A strict slug-lint/redirect discipline in the content pipeline prevents Cleo's duplicate legacy URLs and Nexus's `-2`/orphan/typo junk slugs (`docs/03` ADOPT/DIFFER).

5. **One enforced canonical convention.** Single host (`https://kaiteki.my`, non-www), single trailing-slash policy, self-referencing canonicals, all internal links pointing at the final 200 URL so no internal link triggers a redirect (`docs/02 §1` canonicalization/HTTPS-host-slash convention). This is the foundation the redirect map (§9) is built against and the fix for the legacy www/non-www sitemap bug (§7).

---

## 2. URL taxonomy & naming conventions

### 2.1 Canonical host, protocol, trailing-slash & case

- **Canonical host:** `https://kaiteki.my` (**non-www**). All `http://`, `www.`, and `blog.` hostnames 301 to the apex over HTTPS in **one hop** (§9). HSTS enabled.
- **Trailing slash:** **off** (`trailingSlash: false`). Canonical form is extensionless with **no** trailing slash, e.g. `https://kaiteki.my/treatments/hifu`. (Validates the `docs/03` "trailing-slash + canonical-host as one enforced convention" note — we pick *no* slash; the requirement is that exactly one policy is enforced site-wide.)
- **Case:** lowercase only. Any mixed-case or uppercase request 301s to lowercase.
- **Params:** tracking params (`utm_*`, `fbclid`, `gclid`) are stripped via canonical (built from `metadataBase`) — not redirected — so paid/social links keep working while collapsing to the clean canonical (`docs/02 §1`).

### 2.2 Slug rules

- lowercase, `a–z 0–9 -` only; words hyphen-separated; **no** underscores, spaces, or `%`-encoding.
- no file extensions (`.html`/`.php` are legacy and all redirect).
- no stop-words (`the`, `and`, `of`, `for`), no dates, no post IDs, no geo tokens in the slug.
- keyword near the start; ≤ 2 path levels deep (axis hub + leaf).
- stable forever; renaming a published slug requires a 301 from the old slug (§1 principle 3, `docs/02 §4`).

### 2.3 The full tree

```
kaiteki.my
├─ /                                   Home
├─ /about                              Brand story → links to /doctors
├─ /doctors                            Doctor hub (E-E-A-T roster)
│  └─ /doctors/[doctor-slug]           e.g. /doctors/dr-jane-tan
├─ /treatments                         Treatments hub
│  └─ /treatments/[slug]               e.g. /treatments/hifu
│                                           /treatments/pico-laser
│                                           /treatments/coolsculpting
├─ /concerns                           Concerns hub
│  ├─ /concerns/[slug]                 e.g. /concerns/acne
│  │                                        /concerns/pigmentation
│  ├─ /concerns/skin                   category page (broad)
│  └─ /concerns/face                   category page (broad)
├─ /locations                          Branch locator hub
│  └─ /locations/[branch-slug]         e.g. /locations/mont-kiara
│                                           /locations/bukit-jalil
│                                           /locations/southkey-johor-bahru
├─ /promotions                         Current promos / anniversary
├─ /blog                               Blog index (hub)
│  ├─ /blog/[slug]                     migrated posts (1:1 from blog.kaiteki.my)
│  └─ /blog/category/[c]               OPTIONAL category hubs (see §10) — noindex,follow
├─ /contact                            Contact + all-branch WhatsApp/NAP
├─ /privacy                            Privacy policy (PDPA)
├─ /terms                              Terms of use
└─ System
   ├─ /sitemap.xml                      sitemap index
   ├─ /sitemaps/[type].xml              per-type sitemaps (pages, treatments, concerns, locations, doctors, blog, images)
   ├─ /robots.txt
   └─ 404                               custom not-found (real 404 status)
Reserved (future i18n): /zh/** mirror (English stays unprefixed at root). See §8.
```

### 2.4 Canonical leaf slugs (agreed scheme, refined)

- **Treatments** (`/treatments/[slug]`): `hifu`, `ultherapy`, `pico-laser`, `coolsculpting`, `fat-freezing`, `fotona-4d`, `onda`, `microneedling`, `radiofrequency`, `dermav`, `bio-stimulator`, `skin-booster`, `exosome-therapy`, `tattoo-removal`, `double-eyelid`. *(Flags: `coolsculpting`/`fat-freezing` and `exosome-therapy`/`tattoo-removal` slug placement discussed in §10.)*
- **Concerns** (`/concerns/[slug]`): `acne`, `aging`, `pigmentation`, `enlarged-pores`, `dark-eye-circles`, `face-contouring`, `face-lifting`, `fine-lines-wrinkles`, `body-slimming`, `hair-loss`. Category pages: `/concerns/skin`, `/concerns/face`.
- **Locations** (`/locations/[branch-slug]`): `mont-kiara`, `cheras`, `bukit-jalil`, `four-seasons-kl`, `petaling-jaya`, `kota-kemuning`, `southkey-johor-bahru`, `pelangi-johor-bahru`, `kota-kinabalu`. *(All flagged as decisions in §10.)*
- **Doctors** (`/doctors/[doctor-slug]`): `dr-firstname-lastname` (e.g. `dr-jane-tan`), lowercase, hyphenated, `dr-` prefix, no credentials in slug.

---

## 3. Page-type templates → URL patterns

Each row maps a page type to its URL pattern, purpose, parent, breadcrumb trail, and primary JSON-LD (cross-ref `docs/02 §3`). Schema is wired into one `@id` graph per route; **no** self-hosted `Review`/`AggregateRating` and **no** reliance on `FAQPage`/`HowTo` rich results (`docs/02 §3` — Review/AggregateRating prohibited; FAQ rich results **fully removed from Google Search 2026-05**, HowTo deprecated since 2023; keep FAQ *content* for AEO).

| Page type | URL pattern | Purpose / intent | Parent | Breadcrumb | Primary schema (`docs/02 §3`) |
|---|---|---|---|---|---|
| Home | `/` | Brand entry, routes to all axes | — | (none) | `Organization`(typed `MedicalBusiness`) + `WebSite` (no `SearchAction`) |
| About | `/about` | Brand story, trust, links to `/doctors` | `/` | Home › About | `AboutPage` / `MedicalWebPage`; references `Organization` |
| Doctor hub | `/doctors` | E-E-A-T roster, links every profile | `/` | Home › Doctors | `CollectionPage` + `ItemList` of `Physician` |
| Doctor profile | `/doctors/[doctor-slug]` | Credentialed bio (MMC reg, LCP, branches) | `/doctors` | Home › Doctors › Dr Name | `Physician` (`sameAs`, `worksFor`→branches) |
| Treatments hub | `/treatments` | Lists all treatments (pillar index) | `/` | Home › Treatments | `CollectionPage` + `ItemList` |
| Treatment | `/treatments/[slug]` | Commercial-educational device/procedure page | `/treatments` | Home › Treatments › Treatment | `MedicalWebPage` + `MedicalProcedure`/`Service` (`reviewedBy`/`lastReviewed`) |
| Concerns hub | `/concerns` | Lists all concerns (pillar index) | `/` | Home › Concerns | `CollectionPage` + `ItemList` |
| Concern | `/concerns/[slug]` | Problem-oriented pillar (info/commercial-investigation) | `/concerns` | Home › Concerns › Concern | `MedicalWebPage` + `MedicalCondition` (`reviewedBy`/`lastReviewed`) |
| Concern category | `/concerns/skin`, `/concerns/face` | Broad grouping pillar over sub-concerns | `/concerns` | Home › Concerns › Skin | `MedicalWebPage` + `CollectionPage` |
| Locations hub | `/locations` | Crawlable store-locator → all 9 branches (`docs/02 §10.5`) | `/` | Home › Locations | `CollectionPage` + `ItemList` of `MedicalClinic` |
| Location (branch) | `/locations/[branch-slug]` | Unique per-branch local page (NAP/geo/hours/doctors) | `/locations` | Home › Locations › Branch | `MedicalClinic` (`parentOrganization`, `geo`, `openingHoursSpecification`) |
| Promotions | `/promotions` | Current compliant offers | `/` | Home › Promotions | `MedicalWebPage` (+ `Offer` only if MAB-compliant) |
| Blog index | `/blog` | Blog hub, links recent + cluster posts | `/` | Home › Blog | `Blog` / `CollectionPage` |
| Blog post | `/blog/[slug]` | Informational long-tail, AEO surface | `/blog` | Home › Blog › Post Title | `BlogPosting`/`Article` (author `Physician`, `BreadcrumbList`, `dateModified`) |
| Blog category | `/blog/category/[c]` | Optional thin archive (see §10) | `/blog` | Home › Blog › Category | `CollectionPage` — emit `noindex,follow` |
| Contact | `/contact` | All-branch WhatsApp/NAP, no booking form needed | `/` | Home › Contact | `ContactPage`; references `Organization` |
| Privacy | `/privacy` | PDPA privacy policy | `/` | Home › Privacy Policy | `WebPage` (`noindex,follow` optional) |
| Terms | `/terms` | Terms of use | `/` | Home › Terms | `WebPage` (`noindex,follow` optional) |
| 404 | (any unmatched) | Custom not-found, **real 404 status** | — | Home › Not Found | none (must not soft-404) |

Every page also emits a self-referencing canonical from `metadataBase`, `isPartOf` → the site `WebSite` node, and (where deep) a `BreadcrumbList` (§5). All primary content + headings + internal links are in the **server HTML** (SSG/ISR), never behind client-only JS (`docs/02 §1` rendering, §9.9).

---

## 4. Global navigation

### 4.1 Header

A **mega-menu** is justified for Treatments and Concerns (many leaves), but scoped to avoid the `docs/02 §6.11` warning against listing all treatments × all branches (hundreds of site-wide links). Locations get a simple link to the hub, **not** a cross-product in the menu (`docs/02 §6.11` Kaiteki note: "show branches on a dedicated Locations hub rather than cross-multiplying treatments × branches").

Header structure (left→right), all real `<a href>` (`docs/02 §6.1`):

- **Treatments** (mega-menu) — grouped by category column: *Lifting & Tightening* (HIFU, Ultherapy, Fotona 4D, Onda, Radiofrequency), *Pigment & Resurfacing* (Pico Laser, Microneedling, Tattoo Removal), *Body Contouring* (CoolSculpting, Fat Freezing, body slimming), *Regenerative & Injectables* (Skin Booster, Bio-stimulator, Exosome Therapy, DermaV), *Eyes* (Double Eyelid). Footer of the panel: **"View all treatments →"** to `/treatments`.
- **Concerns** (mega-menu) — two columns by category: *Skin* (Acne, Pigmentation, Enlarged Pores, Fine Lines & Wrinkles, Dark Eye Circles) and *Face & Body* (Face Contouring, Face Lifting, Aging, Body Slimming, Hair Loss). Panel links to `/concerns/skin`, `/concerns/face`, and **"View all concerns →"** `/concerns`.
- **Locations** — single link to `/locations` (the locator hub). The hub itself lists all 9 branches with city-specific anchors (`docs/02 §10.5`); we do not expand 9 branches in the header.
- **Doctors** — single link to `/doctors`.
- **About**, **Blog** — single links.
- **Sticky WhatsApp CTA** — a persistent, server-rendered `<a href="https://wa.me/60103818170?text=...">` (branch/treatment-aware pre-fill), **not** a full-screen interstitial (`docs/02 §2`, §1 rendering; `docs/03` DIFFER — Cleo omits WhatsApp, BW clutters with 3+ numbers). This is a conversion deep link, not an internal link, and passes no equity (`docs/02 §6.1`).

The mega-menu must keep total nav links lean (§6.11): show **core** treatments/concerns in the panels, not every long-tail leaf.

### 4.2 Footer

Four-column link architecture (discovery aid, not the only path — `docs/02 §6.8`):

- **Treatments** — top ~8 treatments + "All treatments".
- **Concerns** — top concerns + "All concerns".
- **Locations** — all **9 branches** linked by city anchor (`docs/02 §1` flat architecture, §10.5 — every branch reachable from the footer) + "All locations".
- **Company** — About, Doctors, Blog, Promotions, Contact, Privacy, Terms.

Footer also carries NAP for the brand, current **KKLIU reference** and **MMC** registration line (`docs/02 §1` regulatory gate, §7; `docs/03` P1 compliance — beat BW's expired KKLIU), and `sameAs` social/GBP links.

---

## 5. Breadcrumbs (BreadcrumbList JSON-LD)

Visible breadcrumbs **and** matching `BreadcrumbList` JSON-LD on every deep route (`docs/02 §6.9` — keep the schema even though Google dropped breadcrumb trails from mobile snippets on 2025-01-23). Trails mirror the URL hierarchy exactly; the leaf is plain text (not a link). Breadcrumbs are an extra hierarchical crawl path and push equity upward.

| Page type | Visible breadcrumb / `BreadcrumbList` items |
|---|---|
| Home | none (root) |
| About | Home › About |
| Doctor hub | Home › Doctors |
| Doctor profile | Home › Doctors › Dr {Name} |
| Treatments hub | Home › Treatments |
| Treatment | Home › Treatments › {Treatment} |
| Concerns hub | Home › Concerns |
| Concern | Home › Concerns › {Concern} |
| Concern category | Home › Concerns › {Skin\|Face} |
| Locations hub | Home › Locations |
| Location (branch) | Home › Locations › {Branch} |
| Promotions | Home › Promotions |
| Blog index | Home › Blog |
| Blog post | Home › Blog › {Post Title} |
| Blog category | Home › Blog › {Category} |
| Contact / Privacy / Terms | Home › {Page} |

Each `BreadcrumbList` item uses the absolute canonical URL (matching canonical, sitemap, and future hreflang — `docs/02 §1`). Breadcrumbs are not nested deeper than 3 levels because the IA is ≤ 2 path levels (§1 principle 2).

---

## 6. Internal linking & anchor-text plan

Implements `docs/02 §6` (the concern ↔ treatment ↔ location ↔ doctor ↔ blog mesh) and §5.1 (pillar-and-spoke clusters). All links are real `<a href>` via Next.js `<Link>` (`docs/02 §6.1`).

### 6.1 Hub-and-spoke clusters (`docs/02 §6.4`, §5.1)

- **Concern pillars are the hubs.** Each `/concerns/[slug]` links OUT to every treatment that addresses it and to related blog spokes; each treatment and post links BACK to the concern pillar. Concern category pages (`/concerns/skin`, `/concerns/face`) sit above sub-concerns. *(The concern axis is a competitive gap — Cleo and Nexus have none; `docs/03` P2 #6.)*
- **Treatments are both spokes (of concerns) and mini-hubs** linking down to the branches that offer them and across to related treatments.

### 6.2 The concern ↔ treatment ↔ location ↔ doctor ↔ blog mesh (`docs/02 §6.5`)

- **Concern → Treatment:** concern pillar lists the treatments that resolve it (e.g. `/concerns/aging` → `/treatments/hifu`, `/treatments/ultherapy`, `/treatments/skin-booster`).
- **Treatment → Location:** each treatment page links to the branch pages that offer it with localized anchors (e.g. "HIFU at our Mont Kiara branch" → `/locations/mont-kiara`). We cross-link treatment → **branch availability** rather than building a `{treatment}×{branch}` cross-product (`docs/02 §4`/§5.6; `docs/03` ADOPT — avoids BW cannibalization + doorway risk).
- **Location → Treatment/Doctor/Blog:** each branch page links to the treatments actually offered there, the doctors at that branch, and localized concern/blog content.
- **Doctor ↔ Treatment/Blog:** doctor profiles link to the treatments they perform and the posts they authored/reviewed; every treatment/concern/blog page carries a byline linking to the doctor profile (`docs/02 §7.1`, §5.4 — named MMC-credentialed author/reviewer; `docs/03` P1 #2, the durable moat).
- **Blog → up to pillar:** every migrated post links up to its relevant concern/treatment pillar and back (`docs/02 §5.12`, §6.4).
- **Homepage + footer → all 9 branches** so location pages get prominence comparable to service pages (`docs/02 §6.5`, §6.6).

### 6.3 Related-content modules (`docs/02 §6.10`)

Deterministic "Related treatments" / "Related concerns" / "Related articles" modules driven by typed frontmatter tags (concern/treatment relatedness), **not** random or date-only "latest posts". This is the structural orphan-prevention safety net.

### 6.4 Anchor-text guidance (`docs/02 §6.2`, §6.3)

- Descriptive, intent-rich anchors describing the destination ("acne scar treatment in Johor Bahru", "how Pico laser works"), never "click here"/"read more"/bare URLs.
- Vary anchors naturally (exact, partial, branded, natural-phrase); don't point dozens of internal links at one page with one identical keyword anchor (no internal over-optimization anxiety, but vary for clarity).
- **No superlatives or comparative/guarantee claims** in anchor text or link context (MAB — `docs/02 §6`, §5; "best/No.1/cheapest" are prohibited).
- Linked image thumbnails: set `alt` to treatment name + intent (Google uses `img alt` as the anchor — `docs/02 §6.2`).

### 6.5 Orphan avoidance (`docs/02 §6.7`)

Every page has ≥ 1 internal link. The biggest risk is migrated blog posts losing inbound links — each migrated post must be linked from (a) a relevant concern/treatment pillar, (b) the blog index/category hub, and (c) a related-posts module. A post-migration crawl (Screaming Frog/Ahrefs) runs immediately after launch and quarterly to surface orphans, broken links, redirect chains, and excessive click depth (`docs/02 §6.13`). In-body contextual links are preferred over boilerplate footer/nav links (`docs/02 §6.8`).

---

## 7. XML sitemaps & robots

### 7.1 Sitemaps (`docs/02 §1` sitemaps)

- A **sitemap index** at `/sitemap.xml` referencing **per-type** child sitemaps (mirrors the typed route groups + `docs/03` "per-segment sitemaps", validated by Premier):
  - `/sitemaps/pages.xml` — Home, About, Contact, Promotions, Privacy, Terms, the hub pages (`/treatments`, `/concerns`, `/locations`, `/doctors`, `/blog`).
  - `/sitemaps/treatments.xml`
  - `/sitemaps/concerns.xml` (incl. `/concerns/skin`, `/concerns/face`)
  - `/sitemaps/locations.xml` (all 9 branches)
  - `/sitemaps/doctors.xml`
  - `/sitemaps/blog.xml`
  - `/sitemaps/images.xml` — image sitemap for treatment/branch/clinic photos (`docs/02 §1` — image sitemap matters here).
- Include **only** canonical, indexable, 200 URLs. **Exclude** `noindex` pages (blog category archives, legal pages if noindexed), redirected legacy URLs, and 404/410 targets.
- `lastmod` honest — set only on material change (no auto-bumping; `docs/02 §1`, §4 freshness). Omit `priority`/`changefreq` (Google ignores them).
- Generated via `app/sitemap.ts` from the same typed data that renders pages, so sitemap entries never drift from canonicals. Well under the 50k-URL/50MB limit, but the index + per-type split keeps each segment auditable in GSC.
- **Migration:** submit **both** the old and new sitemaps during transition so GSC shows the old index shrinking and the new one growing (`docs/02 §1`). File GSC **Change of Address** from the `blog.kaiteki.my` property (and any legacy `www.` property) to the apex — Google's updated site-move guidance (2026-06-17) says to use it for **all** host variants, incl. www/non-www.

### 7.2 Robots policy (`docs/02 §1` robots, §9.9 AI crawlers)

`app/robots.ts` generates one minimal `robots.txt`:

- **Allow** crawling of all content + JS/CSS/image assets (blocking assets breaks rendering).
- **Disallow** only true noise: `/api/`, internal-search/filter endpoints, and any preview/staging (blocked at the **host** level, not via production robots).
- **Never `Disallow` a URL we want de-indexed** — use `noindex` meta instead (blog category archives, legal pages) so Google can see the directive (`docs/02 §1`).
- **AI crawlers (`docs/02 §9.9`; `docs/03` P2 #7 — copy Premier's allowlist; token names re-verified 2026-07):** explicitly **allow** the search/live-retrieval agents — **Googlebot**, **Bingbot**, **OAI-SearchBot**, **ChatGPT-User**, **PerplexityBot**/**Perplexity-User**, **Claude-SearchBot**, **Claude-User**, and **Applebot** — so Kaiteki can be cited. Treat training-only crawlers (**GPTBot**, **ClaudeBot**, **CCBot**, **Google-Extended**, **Meta-ExternalAgent**, **Applebot-Extended**) as a separate, documented, dated decision (default: allow, to maximize citation/grounding; re-verify token names at launch — they change; **OAI-AdsBot** also exists for ChatGPT-ads compliance). Caveats: xAI/Grok publishes **no** robots-controllable token, and Cloudflare documented Perplexity fetching via undeclared crawlers (2025-08) — robots.txt is a policy signal, not enforcement. Keep the **GSC generative-AI opt-out toggle OFF**. Do **not** copy a bloated "block all AI bots" list. Truly sensitive/PDPA paths are gated behind auth, not robots.
- **Sitemap reference:** `robots.txt` references **`https://kaiteki.my/sitemap.xml`** (apex, non-www, HTTPS).

### 7.3 FIX: legacy www/non-www sitemap bug

The legacy `robots.txt` referenced a **`www.` sitemap** URL while the canonical host is non-www, splitting signals across hosts. **Fix:** the new `robots.txt` references the apex `https://kaiteki.my/sitemap.xml` only; the `www.` host 301s to the apex (§9), so any cached `www.` sitemap request resolves to the canonical apex sitemap in one hop. All `<loc>` entries in every sitemap use absolute `https://kaiteki.my/...` URLs — never `www.`, never `http://`, never trailing-slash variants — keeping canonical, internal link, sitemap entry, and (future) hreflang on the identical URL (`docs/02 §1`).

---

## 8. i18n routing & hreflang plan

- **English-first, unprefixed at root** (canonical, preserves existing equity): `https://kaiteki.my/treatments/hifu` is the English (`en-MY`) page. We do **not** prefix English with `/en/` at launch — keeping equity on the existing root paths and avoiding a mass redirect of the very pages we just migrated.
- **Chinese later under `/zh/`**: `https://kaiteki.my/zh/treatments/hifu`, a 1:1 mirror of the English tree with the **same slugs** (locale-neutral slugs make this purely additive — `docs/03` DIFFER; no geo/locale baked into slugs).
- **Reciprocal hreflang** when `/zh/` ships: each page emits `alternates.languages` with `en-MY` (self, the root URL), `zh-MY` (the `/zh/` URL), and one **`x-default`** pointing to the English root. Every page in a cluster lists all siblings **and** itself; missing return tags make Google drop the set; hreflang URLs must be the canonical 200 URLs (`docs/02 §1` i18n).
- **`/cn/*` legacy → `/zh/*` 1:1** when the Chinese locale ships (the legacy site ran a full `/cn/` mirror). Until `/zh/` launches, `/cn/*` 301s to the **English** equivalent (§9) so no legacy Chinese URL 404s in the interim, then is re-pointed 1:1 to `/zh/*` at locale launch.
- **Future BM (`/ms/`)** is reserved by the same pattern (`docs/02 §1`, §5; `docs/03` P3 #10 — capture Malay terms like *jerawat*, *rawatan melasma*, *harga*). Not in the launch scope but the routing scheme anticipates it.

---

## 9. FULL 301 REDIRECT MAP

**Conventions.** Every legacy URL maps to its single best new destination via a server-side **301** (`permanent: true`) in one hop to a 200 URL (no chains/loops — `docs/02 §1`). Paths shown are absolute paths on the host; **all** non-canonical hosts (`http://`, `www.`, `blog.`) are first canonicalized to `https://kaiteki.my` (rows in §9.1) so a `www.` legacy `.html` resolves to its new path in a single observed hop after host normalization is collapsed into the path rule. **410 Gone** is used for content with no equivalent (never a styled 200). Keep all redirects live ≥ 1 year. Implementation: `next.config.js` `redirects()` for static 1:1 maps; the request-interceptor file (`middleware.ts`, renamed **`proxy.ts`** in Next 16) only for host/case/param normalization and the `/cn/*` and `blog.` pattern rules — details deferred to `docs/07`. Note: Next's `redirects({ permanent: true })` emits **308** — equivalent to 301 for Google (both permanent, equity-passing); "301" in the tables below means *permanent redirect*.

### 9.1 Host & protocol canonicalization

| Legacy (any path) | New | Type |
|---|---|---|
| `http://kaiteki.my/*` | `https://kaiteki.my/*` | 301 |
| `http://www.kaiteki.my/*` | `https://kaiteki.my/*` | 301 |
| `https://www.kaiteki.my/*` | `https://kaiteki.my/*` | 301 |
| `http://blog.kaiteki.my/*` | `https://kaiteki.my/blog/*` | 301 |
| `https://blog.kaiteki.my/*` | `https://kaiteki.my/blog/*` | 301 |
| Any uppercase/mixed-case path | lowercased path | 301 |
| Any path with `?utm_*`/`?fbclid`/`?gclid` | canonicalized via `rel=canonical` (not redirected) | — |

### 9.2 Core / global pages

| Legacy path | New path | Type |
|---|---|---|
| `/` | `/` | 200 (canonical home) |
| `/index.html` | `/` | 301 |
| `/aboutus.html` | `/about` | 301 |
| `/about-us` | `/about` | 301 |
| `/our-clinics.php` | `/locations` | 301 |
| `/services.html` | `/treatments` | 301 |
| `/skin-care` | `/skincare` | 301 |
| `/promo.html` | `/promotions` | 301 |
| `/privacy.html` | `/privacy` | 301 |

### 9.3 Hub / category pages

| Legacy path | New path | Type |
|---|---|---|
| `/skincare.html` | `/skincare` | 301 |
| `/skin.html` | `/concerns/skin` | 301 |
| `/skin` | `/concerns/skin` | 301 |
| `/facial-treatment-malaysia.html` | `/concerns/face` | 301 |
| `/hair.html` | `/concerns/hair-loss` | 301 |

> **Correction (2026-07):** `/skincare.html` is **not** a "Skin" concern landing — it is the
> **Kaiteki® Cosmeceuticals product catalogue** (retail, WhatsApp ordering). It now maps to the
> dedicated products hub `/skincare`, not `/concerns/skin`. Its legacy pretty alias `/skin-care`
> follows the same target. (`/skin.html` remains the genuine Skin concern hub → `/concerns/skin`.)

### 9.4 Concern pages

| Legacy path | New path | Type |
|---|---|---|
| `/acne.html` | `/concerns/acne` | 301 |
| `/aging.html` | `/concerns/aging` | 301 |
| `/pigmentation.html` | `/concerns/pigmentation` | 301 |
| `/pores.html` | `/concerns/enlarged-pores` | 301 |
| `/dark-eye-circle-treatment.html` | `/concerns/dark-eye-circles` | 301 |
| `/face-contour-treatment.html` | `/concerns/face-contouring` | 301 |
| `/face-lifting-treatment.html` | `/concerns/face-lifting` | 301 |
| `/fine-lines-and-wrinkles-treatment.html` | `/concerns/fine-lines-wrinkles` | 301 |
| `/slimming-treatment.html` | `/concerns/body-slimming` | 301 |

### 9.5 Treatment pages

| Legacy path | New path | Type |
|---|---|---|
| `/hifu.html` | `/treatments/hifu` | 301 |
| `/ultherapy.html` | `/treatments/ultherapy` | 301 |
| `/pico-laser-treatment.html` | `/treatments/pico-laser` | 301 |
| `/coolsculpting.html` | `/treatments/coolsculpting` | 301 |
| `/fat-freezing.html` | `/treatments/fat-freezing` | 301 |
| `/fotona-4d.html` | `/treatments/fotona-4d` | 301 |
| `/onda.html` | `/treatments/onda` | 301 |
| `/microneedling.html` | `/treatments/microneedling` | 301 |
| `/radiofrequency.html` | `/treatments/radiofrequency` | 301 |
| `/dermav.html` | `/treatments/dermav` | 301 |
| `/bio-stimulator.html` | `/treatments/bio-stimulator` | 301 |
| `/skinbooster.html` | `/treatments/skin-booster` | 301 |
| `/exosome-therapy.html` | `/treatments/exosome-therapy` | 301 |
| `/tattoo-removal.html` | `/treatments/tattoo-removal` | 301 |

### 9.6 Location / branch pages

| Legacy path | New path | Type |
|---|---|---|
| `/mont-kiara.php` | `/locations/mont-kiara` | 301 |
| `/cheras.php` | `/locations/cheras` | 301 |
| `/kuala-lumpur.php` | `/locations/bukit-jalil` | 301 |
| `/kuala-lumpur` | `/locations/bukit-jalil` | 301 |
| `/fourseasons-kl.php` | `/locations/four-seasons-kl` | 301 |
| `/petaling-jaya.php` | `/locations/petaling-jaya` | 301 |
| `/shah-alam.php` | `/locations/kota-kemuning` | 301 |
| `/johor.php` | `/locations/southkey-johor-bahru` | 301 |
| `/johor-pelangi-avenue.php` | `/locations/pelangi-johor-bahru` | 301 |
| `/kota-kinabalu.php` | `/locations/kota-kinabalu` | 301 |

### 9.7 Campaign / promo pages

| Legacy path | New path | Type |
|---|---|---|
| `/anniversary.html` | `/promotions` | 301 |
| `/6th-anniversary.html` | `/promotions` | 301 |
| `/6th-anniversary2.html` | `/promotions` | 301 |

### 9.8 Blog subdomain → subfolder

| Legacy | New | Type |
|---|---|---|
| `blog.kaiteki.my/` | `/blog` | 301 |
| `blog.kaiteki.my/<post-slug>` | `/blog/<post-slug>` | 301 (1:1 per post) |
| `blog.kaiteki.my/category/<c>` | `/blog/category/<c>` *(or `/blog` if categories retired — §10)* | 301 |
| `blog.kaiteki.my/<thin/duplicate/testimonial post>` | nearest pillar/post **or** `410` | 301 / 410 (audit per `docs/02 §5.12`) |

> A complete 1:1 row is produced per migrated post from the live `blog.kaiteki.my` URL inventory + GSC Pages report (`docs/02 §1`/§5.12). Posts with no equivalent and any legacy testimonial/before-after posts that breach MAB return **410** (or 301 to nearest match) — never a soft-404.

### 9.9 `/cn/*` (Chinese mirror — reserve `/zh/*`)

| Legacy path | New path (interim, pre-`/zh/`) | New path (at `/zh/` launch) | Type |
|---|---|---|---|
| `/cn/` | `/` | `/zh` | 301 |
| `/cn/aboutus.html` | `/about` | `/zh/about` | 301 |
| `/cn/<concern>.html` | English concern equivalent | `/zh/concerns/<slug>` | 301 |
| `/cn/<treatment>.html` | English treatment equivalent | `/zh/treatments/<slug>` | 301 |
| `/cn/<branch>.php` | English branch equivalent | `/zh/locations/<branch-slug>` | 301 |
| `/cn/double-eyelid-suture-treatment.html` | `/treatments/double-eyelid` | `/zh/treatments/double-eyelid` | 301 |
| `/cn/*` (any other) | English equivalent (else `/`) | `/zh/*` 1:1 | 301 |

### 9.10 `/sg/*` (Singapore — separate entity, out of scope)

| Legacy path | New path | Type |
|---|---|---|
| `/sg/` | `/` (redirect-to-home) **or** `410` | 301 / 410 — see §10 recommendation |
| `/sg/*` (any) | `/` **or** `410` | 301 / 410 — see §10 recommendation |

### 9.11 Retire / 410 (no equivalent)

| Legacy path | Action | Type |
|---|---|---|
| `/component-colors.html` | internal/dev artifact — remove from index | **410** |
| `/6th-anniversary2.html` | (alt: 410 if no promo equity) — default 301 to `/promotions` (§9.7) | 301 (410 if pruned) |
| Any legacy testimonial / before-after post | retire under MAB | **410** |

---

## 10. Open decisions & recommendations

1. **Branch slugs (agreed scheme — confirm).** The legacy `/kuala-lumpur.php` actually serves the **Bukit Jalil** branch — a mismatch that *must* be fixed at migration. **Recommendation: adopt the recommended slugs** — `mont-kiara`, `cheras`, `bukit-jalil`, `four-seasons-kl`, `petaling-jaya`, `kota-kemuning`, `southkey-johor-bahru`, `pelangi-johor-bahru`, `kota-kinabalu` — and 301 `/kuala-lumpur(.php)` → `/locations/bukit-jalil` (already an existing pretty-301 to honor). They use the locally-recognized place name (Bukit Jalil, Kota Kemuning) over the legacy administrative label (kuala-lumpur, shah-alam), which matches how patients search locally (`docs/02 §10.3` geo keyword relevance). *Flag:* the two Johor slugs (`southkey-johor-bahru`, `pelangi-johor-bahru`) are longer than the ≤2-word ideal but justified — both are in Johor Bahru, so the slug must disambiguate Southkey vs Pelangi; keep them.

2. **`/locations` vs `/branches`.** `docs/02 §10` and `docs/03` both reference `/branches/{city}`; the **agreed scheme** uses **`/locations`**. **Recommendation: keep `/locations`** (the agreed top-level scheme is authoritative and `docs/02 §10.5` itself says "`/branches` (or `/locations`)"). Both are equally clean; `/locations` reads more naturally for a patient-facing locator and pairs with the "Locations" nav label. No SEO difference. *Flag raised so downstream docs align on `/locations`.*

3. **Concern-vs-treatment edge cases.**
   - **`exosome-therapy`** — it is a *modality/procedure*, not a patient problem. **Recommendation: keep it a treatment** (`/treatments/exosome-therapy`), surfaced from relevant concern pillars (aging, hair-loss, skin). The legacy `/exosome-therapy.html` 301s there (§9.5).
   - **`tattoo-removal`** — borderline: it reads as both a goal and a procedure. The actual device is the Pico laser. **Recommendation: keep `tattoo-removal` as a treatment page** (`/treatments/tattoo-removal`) cross-linked to `/treatments/pico-laser`, rather than a concern — patients search "tattoo removal" transactionally, and a concern page would cannibalize the treatment page (`docs/02 §4`). Reconsider only if a `/concerns/tattoo` information need emerges.
   - **`double-eyelid`** — a procedure (the legacy `/cn/double-eyelid-suture-treatment.html` confirms surgical/suture framing). **Recommendation: treatment page** `/treatments/double-eyelid`. *Compliance flag: confirm this falls within the clinic's MOH scope-of-practice and MAB advertising limits before publishing (`docs/02 §1` regulatory gate).*
   - **`coolsculpting` vs `fat-freezing`** — `CoolSculpting` is a *brand* of `fat-freezing` (cryolipolysis); the legacy site has **both** `/coolsculpting.html` and `/fat-freezing.html`. **Recommendation: make `/treatments/coolsculpting` the canonical device page and `/treatments/fat-freezing` a sibling that targets the generic-term intent**, each with genuinely distinct copy (brand vs generic), bidirectionally cross-linked — or, if copy would be near-duplicate, **consolidate** `fat-freezing` into `coolsculpting` with a 301 to avoid cannibalization (`docs/02 §4`). Decision pending real content depth; both 301 rows are in §9.5 pointing to distinct pages by default.

4. **`/sg/*` handling.** Singapore is a **separate entity, out of scope**. **Recommendation: 301 `/sg/*` → `/` (home)** rather than 410, to recover any residual link equity/branded traffic to the live site, *unless* the `/sg` pages carry SG-specific NAP/claims that would mislead MY visitors — in which case **410** is cleaner. Default to 301-to-home; switch to 410 if compliance/UX review flags misleading SG content. (Listed both ways in §9.10.)

5. **`/cn/*` handling.** **Recommendation: reserve `/zh/*` and 301 `/cn/*` to the English equivalent in the interim** (so no legacy Chinese URL 404s), then re-point 1:1 to `/zh/*` when the Chinese locale ships (§8, §9.9). Do **not** 410 the `/cn/` mirror — it has indexed equity and a clear future home.

6. **`/blog/category/[c]`.** Category archives are thin and risk index bloat (`docs/02 §1` index hygiene, §4). **Recommendation: ship category pages as a UX/navigation aid but `noindex,follow`** (so they pass equity to posts without competing for rankings), and prefer the concern/treatment **pillars** as the primary topical hubs (`docs/02 §6.4`). If a category has genuinely unique editorial value, it can be promoted to indexable later. Retain the `blog.kaiteki.my/category/<c>` → `/blog/category/<c>` 301 (§9.8); if categories are retired entirely, redirect those to `/blog`.

---

### Validation against `docs/03` competitor takeaways

- **Tri-axis typed IA + per-segment sitemaps** — implemented (§1, §3, §7) exactly as Premier validates; we add the concern + location axes Cleo/Nexus lack.
- **Shallow ≤3-level, one intent per URL, no `{treatment}×{branch}` cross-product** — implemented (§1, §6.2) — avoids BW cannibalization/doorway risk.
- **Concern→treatment→branch bidirectional clusters** — implemented (§6) — the competitive gap.
- **`/blog/{slug}` on-domain with a real hub + 1:1 301 from subdomain** — implemented (§3, §9.8) — consolidates authority.
- **Locale-neutral slugs, no geo-in-slug, `/zh` (and future `/ms`) by prefix** — implemented (§2, §8) — deliberately differs from Cleo/Nexus.
- **WhatsApp-first server-rendered `<a>` CTA, sticky not interstitial** — specified in nav (§4.1).
- **Slug-lint + canonical/redirect discipline** — enforced (§2.2, §9) — avoids Cleo dupes / Nexus junk slugs.
