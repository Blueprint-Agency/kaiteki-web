# Kaiteki — On-Page Meta-Tag & Keyword Map

**Created:** 2026-07-18 · **Owner:** SEO/build · **Status:** draft for review
**Scope:** every indexable page on `https://kaiteki.my` (non-www canonical host).
**Companion docs:** `docs/02` (SEO/AEO rules), `docs/04` (IA/URL scheme), `docs/05` (content/compliance).

## What this document is

Three parts:

1. **Best practices** — the meta-tag & technical-SEO standard every page must meet (title,
   meta description, H1–H3, canonical, OG/Twitter, robots/sitemap, URL rules, YMYL/MAB gate).
2. **Per-page meta & keyword map** — for all ~103 pages: the one primary "go-to" keyword,
   supporting keywords, a length-checked title (50–60 chars) and meta description (140–160
   chars), the H1, and the H2/H3 outline.
3. **Current implementation status & gaps** — a read-only audit of what the Next.js codebase
   already does for metadata today, and the ranked fixes needed.

**Schema/structured-data markup is deliberately out of scope here** (deferred to a later pass,
per decision) — but each page type's intended schema is noted in `docs/02 §3`.

## Keyword methodology (how the targets were chosen)

- **Google Search Console = ground-truth Malaysian demand.** Real queries + impressions
  kaiteki.my already earns, pulled `2026-01-18 → 2026-07-18` (`sc-domain:kaiteki.my`).
- **Ubersuggest = volume / difficulty / CPC / expansion** at `locId 1010274` (Kuala Lumpur, MY).
- Each page = **one primary keyword** matched to its search intent + 2–4 supporting terms.
  In the tables, `(vol/diff)` = Ubersuggest MY monthly volume / SEO difficulty; where a term
  has no distinct Ubersuggest volume, the **GSC impression** figure is shown instead.
- Comparison queries (`X vs Y`) are high-demand but **informational → routed to `/blog`**,
  not targeted on service/landing pages.

## Page inventory (103 indexable pages)

| Section | Pages | Route |
|---|---|---|
| Home + static/hubs | 7 | `/`, `/our-story`, `/concerns`, `/treatments`, `/technology`, `/skincare`, `/privacy` |
| Concerns | 14 | `/concerns/{slug}` |
| Treatments | 17 | `/treatments/{slug}` |
| Technology (devices) | 34 | `/technology/{slug}` |
| Locations | 10 | `/locations` + `/locations/{slug}` (9 branches) |
| Doctors | 21 | `/doctors` + `/doctors/{slug}` (20 profiles) |

> Note: `treatments.ts` holds 17 entries and `doctors.ts` 20 (not the ~19/~21 first estimated);
> `branches[]` is currently empty on every doctor record, so doctor-page secondary keywords use
> national scope until branch assignments are published (`docs/05 §9`).

---
## Part 1 — Meta-tag & technical-SEO best practices (the standard every page must meet)

This is the checklist. Every page type in Part 2 is drafted against it. It aligns with
and condenses `docs/02-seo-guidelines-2026.md` §1 (Technical SEO) and §4 (On-Page SEO).

### 1.1 Title tag (`<title>`)
- **Length:** 50–60 characters (~600px). Google truncates ~60. Never exceed 60.
- **One per page, unique.** No two pages share a title.
- **Primary keyword near the front**, brand suffix at the end: `Primary Keyword | Kaiteki`.
  Drop the suffix if it forces the title past 60 chars.
- Written for humans (it's the blue SERP link) — descriptive, no keyword stuffing, no ALL CAPS.
- In Next.js App Router: set via `metadata.title` / `generateMetadata`, with a root
  `title.template` of `"%s | Kaiteki"` in `app/layout.tsx` and `title.default` for the home page.

### 1.2 Meta description
- **Length:** 140–160 characters. <120 wastes SERP real estate; >160 truncates.
- **One per page, unique.** Include the primary keyword once, naturally.
- It's a **click-through pitch, not a ranking factor** — lead with the value + a CTA verb
  ("Book a free consultation on WhatsApp"). Match search intent for the page.
- Google may rewrite it; write the best version anyway.

### 1.3 Heading hierarchy (H1–H3)
- **Exactly ONE `<h1>` per page.** It states the page's subject and contains the primary
  keyword. It can read more naturally than the title tag (they need not be identical).
- **H2s** segment the main sections; **H3s** nest under H2s only — never skip a level
  (no H1→H3). Screen readers and Google both read the outline.
- Keep headings keyword-relevant but human. Don't stuff every heading with the keyword.
- One logical outline per page; don't use headings purely for styling (use CSS for that).

### 1.4 Canonical tag (`rel="canonical"`)
- **Self-referencing, absolute, non-www, no trailing slash, no query params:**
  `https://kaiteki.my/treatments/pico-laser`.
- Every indexable page declares its own canonical. Paginated/filtered variants point to the
  canonical base. Prevents duplicate-content dilution.
- In Next.js: `alternates: { canonical: '/path' }` with `metadataBase = new URL('https://kaiteki.my')`
  set once in `app/layout.tsx` so relative canonicals resolve to the non-www absolute host.

### 1.5 Open Graph & Twitter cards (social/share + some AI surfaces)
- `og:title`, `og:description`, `og:url` (canonical), `og:type`, `og:image`
  (1200×630, <8MB), `og:site_name`, `og:locale` (`en_MY`).
- `twitter:card = summary_large_image`, plus title/description/image.
- Set defaults in the root layout; override per page. Missing OG images = ugly shares.

### 1.6 Robots & indexability
- Indexable pages: `robots: { index: true, follow: true }` (the default — don't fight it).
- **noindex** only utility/thin pages (e.g. `/privacy` is borderline — usually keep indexable
  but low priority; internal search results, thank-you pages → noindex).
- `app/robots.ts` must allow crawl + point to `https://kaiteki.my/sitemap.xml`.
- `app/sitemap.ts` lists every indexable URL with the **non-www** host, `lastModified`, and
  sensible `changeFrequency`/`priority`. Keep it in sync with the data files.

### 1.7 URL conventions (locked, from docs/04)
- Clean/extensionless, lowercase, hyphenated, **non-www**, no trailing slash.
- `/treatments/[slug]` · `/concerns/[slug]` · `/technology/[slug]` · `/locations/[slug]` ·
  `/doctors/[slug]` · `/blog/[slug]`. EN unprefixed at root; `/zh` reserved (locale-neutral slugs).
- Every legacy URL needs a 301 (`docs/08-legacy-redirect-map.md`).

### 1.8 Other on-page fundamentals (supporting the above)
- **Lang & hreflang:** `<html lang="en">`; reserve `hreflang` for when `/zh` ships.
- **Image `alt`:** descriptive alt on every content image (accessibility + image SEO).
- **Internal linking:** every page ≥1 inbound contextual link; hub↔spoke↔location
  cross-links (docs/02 §6). No orphans.
- **Breadcrumbs:** visible + `BreadcrumbList` JSON-LD (schema deferred, but plan the markup).
- **Core Web Vitals:** LCP <2.5s, INP <200ms, CLS <0.1 (docs/02 §2) — meta tags don't help
  if the page is slow.
- **Schema/structured data:** deferred to a later pass (per user) — but every page type's
  intended schema is noted in docs/02 §3 (MedicalClinic, Physician, FAQPage, Article, etc.).

### 1.9 YMYL / MAB compliance gate (Malaysia)
Because this is a medical site, titles & descriptions must avoid: efficacy/outcome
guarantees, superlatives ("best", "#1", "guaranteed"), "cure", before/after language, and
price promises. Use "treatment", "consultation", "assessment", "may help address".
"Free consultation" is permitted (it's the genuine offer). See docs/02 §8 / docs/05 §2.

### 1.10 Keyword methodology used in Part 2
- **GSC (Search Console) = ground-truth Malaysian demand** — what kaiteki.my already ranks
  for and its true impression volume (pulled 2026-01-18 → 2026-07-18).
- **Ubersuggest = volume, difficulty, CPC, expansion** (locId 1010274 = Kuala Lumpur, MY).
- Each page gets **one primary "go-to" keyword** (matched to the page's search intent) plus
  2–4 supporting keywords. Comparison queries ("X vs Y") are routed to `/blog`, not service pages.
---

## Part 2 — Per-page meta & keyword map

Each section below is one page group. Every row: **Path · Primary keyword (vol/diff) ·
Secondary keywords · Title (char count) · Meta description (char count) · H1**. Below each
table, the per-page **H2/H3 outline**. All titles are 50–60 chars and descriptions 140–160
(privacy/utility excepted); all comply with the MAB gate (no efficacy claims, superlatives,
guarantees, before/after, or price promises).
## Static + Hub pages

| Path | Page | Primary keyword (MY vol / diff) | Secondary keywords | Title (chars) | Meta description (chars) | H1 |
|---|---|---|---|---|---|---|
| `/` | Homepage | kaiteki clinic (260/36) + aesthetic clinic malaysia (90/27) | kaiteki, kaiteki skin aesthetic clinic (GSC: 659 impr), aesthetic clinic (GSC: 8000 impr) | Kaiteki Skin Aesthetic Clinic — Doctor-Led Care in Malaysia (59) | Kaiteki Skin Aesthetic Clinic — MOH-licensed, doctor-led skin and aesthetic care at 9 branches across Malaysia. Book a free consultation on WhatsApp. (149) | Considered skin & aesthetic care, across Malaysia. |
| `/our-story` | About / Our Story (route renamed from `/about`) | about kaiteki (n/a, GSC: brand-only, no dedicated volume) | kaiteki clinic (260/36), doctor-led clinic malaysia, kaiteki history | About Kaiteki — A Doctor-Led Skin Clinic in Malaysia (52) | Kaiteki is a doctor-led, Japanese-inspired skin and aesthetic clinic, grown from one PJ clinic to nine across Malaysia. Book a free consultation on WhatsApp. (157) | Kaiteki means comfortable. |
| `/concerns` | Concerns hub | skin concerns (20/20) | aesthetic treatments by concern (n/a, GSC: 0 direct — "concern" queries near-zero), dark eye circle treatment (GSC: 6113 impr, feeds hub via concern pages), ageing concerns malaysia | Skin, Ageing & Body Concerns Guide | Kaiteki Clinic (51) | Explore skin, ageing and body concerns with doctor-reviewed guides from Kaiteki Clinic. Understand your options first — book a free consultation on WhatsApp. (157) | What brings you in? |
| `/treatments` | Treatments hub | aesthetic clinic (GSC: 8000 impr; "aesthetic treatments malaysia" = 0 vol in Ubersuggest, use GSC proxy) | non-surgical treatments malaysia, laser treatment (GSC blended, e.g. "laser treatment for pigmentation" 2745 impr), doctor-led aesthetic treatments | Non-Surgical Aesthetic Treatments Malaysia | Kaiteki (52) | Browse non-surgical, doctor-led aesthetic treatments at Kaiteki Clinic, across 9 branches in Malaysia. Book a free consultation on WhatsApp to get started. (155) | Treatments |
| `/technology` | Products & Technology hub | aesthetic technology (10/18) | onda technology (GSC: 19 impr), pico laser technology (GSC: 1 impr), aesthetic devices malaysia, injectables & devices | Devices & Technology Behind Our Treatments | Kaiteki (52) | See the devices and injectables behind Kaiteki's doctor-led treatments, by category and type. Ask about any platform — book a free consultation on WhatsApp. (156) | Products & Technology |
| `/skincare` | Skincare | skincare products malaysia (50/43) | aesthetic skincare malaysia (GSC: 208 impr), skincare clinic near me (GSC: 78 impr), kaiteki cosmeceuticals | Kaiteki Skincare — Cosmeceutical Products | Kaiteki (51) | Kaiteki Cosmeceuticals — medical-grade skincare and partner brands used in clinic. Order any product or book a free consultation on WhatsApp. (141) | Skincare |
| `/privacy` | Privacy Policy | n/a (utility, noindex candidate — already `robots: {index:false}` in code) | n/a | Privacy Policy | Kaiteki (24) | n/a (utility page, noindex) | Privacy Policy |

### `/`
- **H2:** What brings you in? (concerns mosaic) → H3: Skin, Ageing, Body (concern groups)
- **H2:** Treatments menu → H3: by category (injectables, laser/devices, body)
- **H2:** Meet our doctors (E-E-A-T) → H3: featured doctor profiles
- **H2:** Why Kaiteki → H3: doctor-led, MOH-licensed, omotenashi
- **H2:** Recognition & press
- **H2:** Find your branch → H3: 9 locations across KL, Selangor, Johor, Sabah

### `/our-story` (was `/about`)
- **H2:** Our journey (2020 → today) → H3: Petaling Jaya founding, incorporation, expansion, today
- **H2:** The founders → H3: Dr Jessie Lim, Dr Chew Yuhhui
- **H2:** Omotenashi — our philosophy
- **H2:** Recognition & partner awards
- **H2:** In the press → H3: featured coverage
- **H2:** What we hold to → H3: comfort first, doctor-led medicine, honest guidance

### `/concerns`
- **H2:** Skin concerns → H3: acne, pigmentation, dark eye circles, pores
- **H2:** Ageing concerns → H3: fine lines & wrinkles, skin laxity, volume loss
- **H2:** Hair & body concerns → H3: hair loss, body contouring, slimming
- **H2:** How to choose the right consultation

### `/treatments`
- **H2:** Injectables → H3: fillers, biostimulators, exosomes
- **H2:** Laser & light-based → H3: pico laser, pigmentation lasers
- **H2:** Skin-tightening & body devices → H3: HIFU/RF, fat freezing
- **H2:** Doctor-led consultation process

### `/technology`
- **H2:** Devices → H3: laser platforms, RF/HIFU, body-contouring machines
- **H2:** Injectables → H3: fillers, biostimulators, skinboosters
- **H2:** How we choose our technology (safety/registration framing)

### `/skincare`
- **H2:** Kaiteki Cosmeceuticals (own range) → H3: cleanse, treat, protect
- **H2:** Partner brands used in clinic
- **H2:** How to order → H3: WhatsApp ordering, pricing note
- **H2:** Skincare vs. clinical treatment (disclaimer framing)

### `/privacy`
- **H2:** PDPA notice (verbatim legacy copy — no SEO-driven restructuring; utility page)
## Concerns

| Path | Page | Primary keyword (MY vol / diff) | Secondary keywords | Title (chars) | Meta description (chars) | H1 |
|---|---|---|---|---|---|---|
| /concerns/acne | Acne | acne treatment malaysia (n/a — GSC: 153 impr) | acne scar treatment malaysia (GSC: 2461 impr), acne scars (GSC: 517 impr), acne treatment near me (GSC: 32 impr) | Acne Treatment & Scarring Care in Malaysia \| Kaiteki (52) | Acne and acne scarring have different causes. A doctor-led acne treatment plan in Malaysia starts with assessment — book a free consultation with Kaiteki. (154) | Acne & Acne Scarring Treatment |
| /concerns/pigmentation | Pigmentation | pigmentation treatment (70 / 47) | pigmentation treatment malaysia (20 / 41), laser treatment for pigmentation (GSC: 2745 impr), pigmentation removal (GSC: 1270 impr), hyperpigmentation treatment malaysia (GSC: 242 impr) | Pigmentation Treatment Options in Malaysia \| Kaiteki (52) | Melasma, sun spots and post-inflammatory marks need different care. A doctor assesses your pigmentation before any treatment — book a free consultation. (152) | Pigmentation Treatment |
| /concerns/enlarged-pores | Enlarged Pores | enlarged pores treatment (20 / 44) | open pores treatment (GSC: 945 impr), pores treatment (GSC: 472 impr), pore treatment (GSC: 339 impr), minimize pores (GSC: 127 impr) | Enlarged Pores Treatment & Assessment in Malaysia \| Kaiteki (59) | Pore appearance is shaped by oil, texture, sun exposure and age. A doctor assesses your skin before an enlarged pores treatment — book a free consultation. (155) | Enlarged Pores Treatment |
| /concerns/fine-lines-wrinkles | Fine Lines & Wrinkles | fine lines and wrinkles treatment (10 / 27) | face wrinkle treatment (GSC: 137 impr), face wrinkles treatment (GSC: 124 impr), best face treatment for wrinkles malaysia (GSC: 262 impr), facial wrinkle treatment selangor (GSC: 88 impr) | Fine Lines & Wrinkles Treatment in Malaysia \| Kaiteki (53) | Expression lines and static wrinkles are approached differently. A consultation identifies the right fine lines and wrinkles treatment — book a free session. (157) | Fine Lines & Wrinkles Treatment |
| /concerns/dark-eye-circles | Dark Eye Circles | dark eye circle treatment (50 / 32) | dark circle treatment (GSC: 2689 impr), dark circles treatment (GSC: 3508 impr), dark circle treatment malaysia (GSC: 1009 impr), laser treatment for dark circles (GSC: 1253 impr) | Dark Eye Circle Treatment Assessment in Malaysia \| Kaiteki (58) | Dark eye circles can be pigment, vascular or structural in cause. A doctor assesses yours before recommending treatment — book a free consultation with Kaiteki. (160) | Dark Eye Circle Treatment |
| /concerns/face-contouring | Face Contouring | face contouring treatment (10 / 38) | facial contouring treatment (GSC: 26 impr), contour face treatment (GSC: 4 impr), face contour treatment for jawline & chin definition | Face Contouring Treatment & Assessment in Malaysia \| Kaiteki (60) | Jawline and chin definition are assessed individually before any face contouring treatment is suggested. Book a free consultation with a Kaiteki doctor. (152) | Face Contouring Treatment |
| /concerns/face-lifting | Face Lifting | face lifting treatment (70 / 42) | onda face lifting (GSC: 271 impr), face lift facial treatment (GSC: 76 impr), face lift treatment (GSC: 51 impr), non-surgical face lift | Non-Surgical Face Lifting Treatment in Malaysia \| Kaiteki (57) | Firmness and skin laxity are assessed before any non-surgical face lifting treatment is discussed. Book a free consultation to find what may suit you. (150) | Face Lifting Treatment (Non-Surgical) |
| /concerns/aging | Aging | anti aging treatment (n/a — GSC: 615 impr for "anti aging treatment in kl") | anti aging treatment malaysia (GSC: 33 impr), anti aging treatment clinic (GSC: 61 impr), anti aging clinic kota kemuning (GSC: 65 impr), kuala lumpur anti aging treatment for fine lines and wrinkles (GSC: 737 impr) | Skin Ageing & Anti-Ageing Treatment in Malaysia \| Kaiteki (57) | Skin ageing involves firmness, texture and volume changes over time. A consultation helps map an anti-ageing treatment plan — book a free session with Kaiteki. (159) | Skin Ageing Treatment |
| /concerns/body-slimming | Body Slimming | slimming treatment (70 / 44) | body slimming treatment (10 / 35, GSC: 1247 impr), body slimming malaysia (GSC: 424 impr), body slimming treatments (GSC: 136 impr), onda slimming (GSC: 135 impr) | Body Slimming Treatment & Assessment in Malaysia \| Kaiteki (58) | Localised fat pockets are assessed individually — body slimming is not a weight-loss treatment. Book a free consultation to discuss suitable options today. (155) | Body Slimming Treatment |
| /concerns/hair-loss | Hair Loss | hair loss treatment (720 / 23) | exosome treatment for hair loss malaysia (GSC: 1243 impr), hair loss treatment petaling jaya (GSC: 152 impr), hair loss treatment near me (GSC: 58 impr), hair loss clinic (GSC: 11 impr) | Hair Loss Treatment & Assessment in Malaysia \| Kaiteki (54) | Hair loss has several patterns and causes, and a doctor identifies yours before any treatment. Book a free hair loss consultation with Kaiteki today. (149) | Hair Loss Treatment |
| /concerns/tattoo-removal | Tattoo Removal | tattoo removal malaysia (40 / 42) | laser tattoo removal (GSC: 1289 impr), tattoo removal near me (GSC: 617 impr), pico laser tattoo removal (GSC: 493 impr), tattoo removal malaysia price (GSC: 414 impr) | Laser Tattoo Removal Assessment in Malaysia \| Kaiteki (53) | Ink type, colour, depth and skin type affect tattoo removal suitability and session count. A doctor assesses your tattoo — book a free consultation today. (154) | Tattoo Removal Treatment |
| /concerns/birthmark | Birthmark | birthmark removal (20 / 47) | birthmark removal malaysia (GSC: 61 impr), eye birthmark removal (GSC: 86 impr), birthmarks removal (GSC: 14 impr), birthmark laser removal near me (GSC: 3 impr) | Birthmark Removal Assessment in Malaysia \| Kaiteki (50) | Birthmarks vary widely in type and cause, and most are harmless. A doctor examines yours before discussing birthmark removal — book a free consultation. (152) | Birthmark Removal |
| /concerns/vascular-lesions | Vascular Lesions | facial thread veins treatment (n/a — GSC: 1 impr) | facial redness treatment (10 / 44), spider veins treatment (n/a — 0 MY vol), rosacea-related redness treatment, thread vein removal | Vascular Lesions & Facial Redness Care in Malaysia \| Kaiteki (60) | Thread veins, spider veins and persistent redness have several causes. A doctor assesses the type before any treatment — book a free consultation today. (152) | Vascular Lesions Treatment |
| /concerns/excessive-sweating | Excessive Sweating | excessive sweating treatment (140 / 35) | hyperhidrosis treatment (n/a — 0 MY vol; GSC: "sweat treatment near me" 1 impr), underarm sweating treatment, botox for excessive sweating | Excessive Sweating Treatment & Assessment \| Kaiteki (51) | Hyperhidrosis goes beyond normal temperature regulation and has several possible causes. A consultation helps assess your situation — book a free session today. (160) | Excessive Sweating Treatment |

Canonical URLs are `https://kaiteki.my<path>` (non-www, no trailing slash, no query params) for every row above.

---

### /concerns/acne
- **H2:** What is acne? → H3: Common causes, Hormonal & lifestyle factors
- **H2:** Types of acne & scarring → H3: Active acne vs acne scarring, Scar types (rolling, boxcar, ice-pick)
- **H2:** Treatment options considered at consultation → H3: Pico laser, Microneedling, Exosome therapy
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/pigmentation
- **H2:** What is pigmentation?
- **H2:** What causes it → H3: Sun & UV exposure, Hormonal changes, Inflammation or injury, Genetics
- **H2:** Types of pigmentation → H3: Hyperpigmentation, Hypopigmentation, Post-inflammatory hyperpigmentation (PIH)
- **H2:** Treatment options considered → H3: Pico laser, Skin booster, Vascular-pigment laser
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/enlarged-pores
- **H2:** What are enlarged pores?
- **H2:** What makes pores look larger → H3: Oil & sebum production, Build-up & impurities, Sun exposure, Age
- **H2:** Types of pores → H3: Sebaceous (oil) pores, Sweat pores
- **H2:** Treatment options considered → H3: Microneedling, Pico laser, Radiofrequency
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/fine-lines-wrinkles
- **H2:** What are fine lines and wrinkles?
- **H2:** What causes them → H3: Repeated expressions, Intrinsic ageing, Sun exposure
- **H2:** Types of wrinkles → H3: Expression lines, Static wrinkles, Glabellar & marionette lines
- **H2:** Treatment options considered → H3: HIFU, Ultherapy, Skin booster, Microneedling
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/dark-eye-circles
- **H2:** What causes dark eye circles?
- **H2:** Common contributing factors → H3: Genetics, Lifestyle factors, Ageing, Sun exposure
- **H2:** Types of dark eye circles → H3: Pigmentation circles, Vascular circles, Structural circles
- **H2:** Treatment options considered → H3: Skin booster, Vascular-pigment laser, Radiofrequency
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/face-contouring
- **H2:** What is face contouring?
- **H2:** What influences facial contour → H3: Bone structure, Volume loss, Skin laxity, Fat distribution
- **H2:** How contour concerns are approached → H3: HIFU, Fat freezing, Radiofrequency
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/face-lifting
- **H2:** What is face lifting (as a concern)?
- **H2:** What causes facial sagging → H3: Collagen loss, Reduced elasticity, Gravity, Volume loss
- **H2:** How lifting concerns are approached → H3: HIFU, Ultherapy, Fotona 4D, Microwave contouring
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/aging
- **H2:** What is skin ageing?
- **H2:** What causes it → H3: Intrinsic (genetic) ageing, Extrinsic ageing & sun exposure
- **H2:** The stages of skin ageing
- **H2:** Treatment options considered → H3: HIFU, Ultherapy, Skin booster, Bio-stimulator
- **H2:** Caring for ageing skin & when to see a doctor
- **H2:** FAQs

### /concerns/body-slimming
- **H2:** What is body slimming / contouring?
- **H2:** What it addresses → H3: Localised fat pockets, Muscle tone, Skin firmness
- **H2:** How it differs from weight loss
- **H2:** Treatment options considered → H3: Fat freezing, Microwave contouring
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/hair-loss
- **H2:** Understanding hair loss
- **H2:** The hair-growth cycle
- **H2:** Common causes → H3: Genetics, Hormonal changes, Stress, Scalp conditions
- **H2:** Treatment options considered → H3: Exosome therapy
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/tattoo-removal
- **H2:** What is laser tattoo removal?
- **H2:** What affects the number of sessions → H3: Ink colour, Depth, Size, Location
- **H2:** Types of ink & response
- **H2:** Treatment approach → H3: Pico laser
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/birthmark
- **H2:** What is a birthmark?
- **H2:** Types of birthmarks → H3: Pigmented (café-au-lait, Mongolian spots, moles), Vascular (salmon patches, port-wine stains, haemangiomas)
- **H2:** Treatment options considered → H3: Pico laser, Vascular-pigment laser
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/vascular-lesions
- **H2:** What are vascular lesions?
- **H2:** Common types & causes → H3: Facial thread veins, Spider veins, Persistent redness/rosacea
- **H2:** Treatment options considered → H3: Vascular-pigment laser
- **H2:** When to see a doctor
- **H2:** FAQs

### /concerns/excessive-sweating
- **H2:** What is excessive sweating?
- **H2:** Possible causes → H3: Primary focal hyperhidrosis, Hormonal changes, Anxiety/stress, Medications & underlying conditions
- **H2:** When to see a doctor
- **H2:** FAQs
## Treatments

| Path | Page | Primary keyword (MY vol / diff) | Secondary keywords | Title (chars) | Meta description (chars) | H1 |
|---|---|---|---|---|---|---|
| /treatments/pico-laser | Pico Laser | pico laser malaysia (70/27) | pico laser jb (GSC:417impr), tattoo removal malaysia (GSC:3756impr), pigmentation treatment malaysia (GSC:2284impr), picosure vs pico laser (GSC:245impr) | Pico Laser Malaysia \| Pigmentation & Tattoo \| Kaiteki (53) | Pico laser treatment for pigmentation, dull skin tone and tattoo removal in Malaysia. Book a free consultation with a Kaiteki doctor to assess suitability. (155) | Pico Laser Treatment in Malaysia |
| /treatments/hifu | HIFU | hifu malaysia (10/26) | hifu price (GSC:298impr), hifu treatment near me (GSC:410impr), hifu kota kinabalu (GSC:126impr), skin tightening malaysia (GSC:338impr) | HIFU Malaysia \| Non-Surgical Lifting Treatment \| Kaiteki (56) | HIFU treatment in Malaysia for non-surgical skin lifting and tightening concerns. Book a free consultation with a Kaiteki doctor to check suitability. (150) | HIFU Treatment in Malaysia |
| /treatments/ultherapy | Ultherapy | ultherapy malaysia (110/43) | ultherapy johor bahru (GSC:591impr), hifu vs ultherapy (GSC:n/a, see onda vs ultherapy 1099impr as category signal), ultherapy price | Ultherapy Malaysia \| Non-Surgical Face Lifting \| Kaiteki (56) | Ultherapy treatment in Malaysia using focused ultrasound for non-surgical lifting and tightening. Book a free consultation to assess suitability at Kaiteki. (156) | Ultherapy in Malaysia |
| /treatments/radiofrequency | Radiofrequency | radiofrequency treatment malaysia (n/a, GSC: skin tightening treatment malaysia 1182impr) | rf skin tightening (n/a vol), skin tightening malaysia (GSC:338impr), radiofrequency facial malaysia, microneedling radiofrequency (GSC:195impr) | Radiofrequency Treatment Malaysia \| Skin Firmness \| Kaiteki (59) | Radiofrequency (RF) treatment in Malaysia to support skin firmness and texture concerns. Book a free consultation with a Kaiteki doctor to assess suitability. (158) | Radiofrequency (RF) Skin Treatments in Malaysia |
| /treatments/microneedling | RF Microneedling | rf microneedling malaysia (10/43) | rf microneedling (GSC:1481impr), sylfirm x malaysia (GSC:864impr), potenza rf microneedling (GSC:499impr), morpheus8 malaysia (GSC:40impr) | RF Microneedling Malaysia \| Potenza, Morpheus8 \| Kaiteki (56) | RF microneedling in Malaysia for texture, acne scarring and pore concerns using Potenza, Morpheus8 or Sylfirm X. Book a free consultation at Kaiteki. (149) | RF Microneedling in Malaysia |
| /treatments/fat-freezing | Fat Freezing | fat freezing malaysia (10/13) | fat freezing treatment (GSC:3740impr), coolsculpting kl (GSC:1172impr), cryo fat freezing (GSC:685impr), fat freezing kl (GSC:485impr) | Fat Freezing Malaysia \| Cryolipolysis Treatment \| Kaiteki (57) | Fat freezing (cryolipolysis) in Malaysia for localised fat pockets, not weight loss. Book a free consultation with a Kaiteki doctor to check suitability. (153) | Fat Freezing (Cryolipolysis) in Malaysia |
| /treatments/skin-booster | Skin Booster | skin booster malaysia (10/39) | rejuran healer (GSC:34338impr), rejuran (GSC:49452impr), juvelook skin booster (GSC:2570impr), profhilo vs juvelook (GSC:2403impr) | Skin Booster Malaysia \| Rejuran, Profhilo & Juvelook (52) | Injectable skin boosters in Malaysia, including Rejuran, Profhilo and Juvelook, for skin hydration and quality. Book a free consultation at Kaiteki. (148) | Skin Boosters in Malaysia |
| /treatments/bio-stimulator | Bio-stimulator | sculptra malaysia (30/18) | ellanse vs sculptra (GSC:3605impr), ellanse malaysia (GSC:1535impr), ellanse price malaysia (GSC:394impr), radiesse fillers cost (GSC:2impr) | Bio-Stimulator Malaysia \| Sculptra, Ellanse \| Kaiteki (53) | Bio-stimulator injectables in Malaysia, including Sculptra and Ellanse, to support the skin's structural renewal. Book a free consultation at Kaiteki. (150) | Bio-Stimulator Treatments in Malaysia |
| /treatments/exosome-therapy | Exosome Therapy | exosome therapy malaysia (20/37) | exosome (GSC:7557impr), exosome treatment (GSC:1983impr), exosome malaysia (GSC:709impr), exosomes (GSC:1599impr) | Exosome Therapy Malaysia \| Regenerative Treatment \| Kaiteki (59) | Exosome therapy in Malaysia, a regenerative approach for skin and scalp concerns. Book a free consultation with a Kaiteki doctor to assess suitability. (151) | Exosome Therapy in Malaysia |
| /treatments/double-eyelid | Double Eyelid | double eyelid surgery malaysia (n/a, GSC: double eyelid suture 768impr) | double eyelid suture (GSC:768impr), dst double eyelid (GSC:42impr) | Double Eyelid Surgery Malaysia \| Crease Procedure \| Kaiteki (59) | Double-eyelid procedure in Malaysia to create or refine an upper-eyelid crease. Book a free consultation with a Kaiteki doctor to assess suitability. (149) | Double Eyelid Treatment in Malaysia |
| /treatments/vascular-pigment-laser | Vascular / Pigment Laser | pigmentation laser treatment malaysia (10/5) | m22 laser (GSC:1867impr), pro yellow laser (GSC:1135impr), laser treatment for pigmentation (GSC:2745impr), dermav laser (GSC:199impr) | Pigmentation & Vascular Laser Malaysia \| Kaiteki (48) | Laser treatment in Malaysia for pigmentation, redness and visible vessels using M22 IPL, Pro Yellow and DermaV. Book a free consultation at Kaiteki. (148) | Vascular & Pigment Laser Treatment in Malaysia |
| /treatments/resurfacing-laser | Resurfacing Laser | acne scar treatment malaysia (n/a, GSC: 2461impr) | co2 laser jb (GSC:2impr), acne scars (GSC:517impr), pico laser vs fractional co2 (GSC:6impr), pigmentation treatment malaysia (secondary overlap, GSC:2284impr) | CO2 Resurfacing Laser Malaysia \| Kaiteki (40) | Fractional CO2 resurfacing laser in Malaysia for skin texture, acne scarring and pores. Book a free consultation with a Kaiteki doctor to assess suitability. (157) | CO2 Resurfacing Laser in Malaysia |
| /treatments/microwave-contouring | Microwave Contouring | onda treatment malaysia (10/38) | onda (GSC:3784impr), onda malaysia (GSC:374impr), onda pro jb (GSC:261impr), slimming treatment (GSC:4553impr) | Onda Microwave Contouring Malaysia \| Kaiteki (44) | Onda microwave contouring in Malaysia for localised fat, cellulite appearance and firmness. Book a free consultation with a Kaiteki doctor to check suitability. (160) | Microwave Contouring (Onda) in Malaysia |
| /treatments/muscle-stimulation | Muscle Stimulation | muscle stimulation treatment malaysia (n/a, GSC: schwarzy treatment 160impr) | emsculpt malaysia (Ubersuggest:20/47 — category-demand signal only, Kaiteki device is Schwarzy not Emsculpt), schwarzy (GSC:53impr), body toning malaysia | Muscle Stimulation Treatment Malaysia \| Kaiteki (47) | Electromagnetic muscle-stimulation treatment in Malaysia for body-toning concerns as part of an individual plan. Book a free consultation at Kaiteki. (149) | Muscle Stimulation Treatment in Malaysia |
| /treatments/dermal-fillers | Dermal Fillers | dermal filler malaysia (20/21) | belotero revive (GSC:959impr), juvederm filler price in malaysia (GSC:278impr), ellanse filler price (GSC:812impr), lip filler johor bahru (GSC:43impr) | Dermal Fillers Malaysia \| Juvederm, Restylane \| Kaiteki (55) | Dermal filler treatment in Malaysia using Juvederm, Restylane and Belotero to support facial volume and contour. Book a free consultation at Kaiteki. (149) | Dermal Fillers in Malaysia |
| /treatments/facial-treatments | Facial Treatments | hydrafacial malaysia (20/32) | facial clinic (GSC:1028impr), facial kota kemuning (GSC:1071impr), facial bukit jalil (GSC:1058impr), silkpeel (n/a vol) | Facial Treatments Malaysia \| Hydrafacial, Silkpeel \| Kaiteki (60) | Clinic facial treatments in Malaysia, including Hydrafacial and Silkpeel, to support skin cleansing and quality. Book a free consultation at Kaiteki. (149) | Facial Treatments in Malaysia |
| /treatments/laser-hair-removal | Laser Hair Removal | laser hair removal malaysia (40/33) | laser hair removal near me (GSC:47impr), laser hair removal kota kemuning (GSC:103impr), laser hair removal kota kinabalu (GSC:31impr) | Laser Hair Removal Malaysia \| IPL & RF Treatment \| Kaiteki (58) | Laser hair removal in Malaysia using IPL and radiofrequency over a course of sessions. Book a free consultation with a Kaiteki doctor to assess suitability. (156) | Laser Hair Removal in Malaysia |

### /treatments/pico-laser
- **H2:** What is Pico laser? → H3: How it works
- **H2:** What it may help address → H3: Pigmentation & uneven tone, Tattoo removal, Skin-tone refinement
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks & side effects
- **H2:** Sessions & cost factors

### /treatments/hifu
- **H2:** What is HIFU? → H3: How it works
- **H2:** HIFU vs Ultherapy: the difference
- **H2:** What it may help address → H3: Jawline & jowls, Loss of firmness, Facial contour
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors

### /treatments/ultherapy
- **H2:** What is Ultherapy? → H3: How it works
- **H2:** What it may help address → H3: Brow, cheeks & jawline, Neck laxity
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks & side effects
- **H2:** Sessions & cost factors

### /treatments/radiofrequency
- **H2:** What is radiofrequency (RF) treatment? → H3: How it works, Devices: BTL Exilis & Wonderface
- **H2:** What it may help address → H3: Laxity & sagging, Facial contour, Texture
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors

### /treatments/microneedling
- **H2:** What is RF microneedling? → H3: How it works
- **H2:** Devices & technology → H3: Morpheus8, Sylfirm X, Potenza
- **H2:** What it may help address → H3: Acne scarring, Enlarged pores, Pigmentation & redness
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors

### /treatments/fat-freezing
- **H2:** What is fat freezing? → H3: How cryolipolysis works
- **H2:** Devices we use → H3: Cooltech, CoolSculpting (see separate page)
- **H2:** What it may help address → H3: Abdomen, Flanks, Thighs, Under-chin
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors

### /treatments/skin-booster
- **H2:** What is a skin booster? → H3: How it works
- **H2:** Types of skin booster → H3: Rejuran, Profhilo, Juvelook, Plinest/Newest, Restylane, Hydrodeluxe
- **H2:** What it may help address → H3: Dull/dehydrated skin, Fine lines, Texture & pores
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors

### /treatments/bio-stimulator
- **H2:** What is a bio-stimulator? → H3: How it works
- **H2:** Types of bio-stimulator → H3: Sculptra, Radiesse, Ellansé, Deusaderm
- **H2:** What it may help address → H3: Firmness & elasticity, Early laxity
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors

### /treatments/exosome-therapy
- **H2:** What is exosome therapy? → H3: How it works
- **H2:** What it may help address
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors

### /treatments/double-eyelid
- **H2:** What is double-eyelid treatment?
- **H2:** Methods → H3: Suture (embedding), Incisional
- **H2:** What it may help with
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki procedure → H3: Downtime & aftercare
- **H2:** Risks & side effects

### /treatments/vascular-pigment-laser
- **H2:** What is Vascular / Pigment Laser treatment? → H3: How it works
- **H2:** Devices & technology → H3: Pro Yellow (577nm), M22 IPL, DermaV
- **H2:** What it may help address → H3: Redness & vessels, Pigmentation
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors

### /treatments/resurfacing-laser
- **H2:** What is Resurfacing Laser treatment? → H3: How it works
- **H2:** What it may help address → H3: Texture, Acne scarring, Enlarged pores
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors

### /treatments/microwave-contouring
- **H2:** What is Microwave Contouring? → H3: The Onda (Coolwaves®) platform
- **H2:** How it works
- **H2:** What it may help address → H3: Localised fat, Cellulite appearance, Skin firmness
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors

### /treatments/muscle-stimulation
- **H2:** What is Muscle Stimulation? → H3: The Schwarzy (Em-Fit) platform
- **H2:** How it works
- **H2:** What it may help address → H3: Abdomen, Thighs, Buttocks
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Sessions & cost factors

### /treatments/dermal-fillers
- **H2:** What are dermal fillers? → H3: How it works
- **H2:** Filler ranges used at Kaiteki → H3: Juvederm, Restylane, Belotero
- **H2:** What it may help address
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors

### /treatments/facial-treatments
- **H2:** What are Facial Treatments? → H3: Hydrafacial, Silkpeel
- **H2:** How it works
- **H2:** What it may help address
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Sessions & cost factors

### /treatments/laser-hair-removal
- **H2:** What is Laser Hair Removal? → H3: The Alma (IPL + RF) platform
- **H2:** How it works
- **H2:** What it may help address → H3: Underarms, Legs & arms, Face
- **H2:** Suitability & who should avoid it
- **H2:** The Kaiteki session → H3: Downtime & aftercare
- **H2:** Risks, sessions & cost factors
## Technology (Devices)

| Path | Page | Primary keyword (MY vol / diff) | Secondary keywords | Title (chars) | Meta description (chars) | H1 |
|---|---|---|---|---|---|---|
| /technology/picosure | picosure | picosure malaysia (10/18) | picosure laser malaysia, pico laser malaysia (70/27), picosure pigmentation treatment | PicoSure Picosecond Laser Treatment Malaysia | Kaiteki (54) | PicoSure is a picosecond laser used within Pico Laser treatment for pigmentation, uneven tone and tattoo ink. Book a free consultation to check suitability. (156) | PicoSure Picosecond Laser in Malaysia |
| /technology/fotona-pqx | fotona-pqx | fotona pqx laser malaysia — n/a (GSC: 373 impr "fotona pqx laser") | fotona starwalker malaysia, fotona starwalker pico laser, pico laser vs fotona | Fotona PQX (StarWalker) Laser Treatment Malaysia | Kaiteki (58) | Fotona PQX, also known as StarWalker, is a picosecond laser used within Pico Laser treatment for pigment and tattoo concerns. Book a free consultation today. (157) | Fotona PQX (StarWalker) Picosecond Laser |
| /technology/picocare | picocare | picocare malaysia — n/a (GSC: no distinct query; category "pico laser malaysia" 5,546 impr) | picocare laser malaysia, picosecond laser malaysia, pico laser tattoo removal | PicoCare Picosecond Laser Treatment Malaysia | Kaiteki (54) | PicoCare is a picosecond laser used within Pico Laser treatment for pigmentation and tattoo removal concerns. Book a free consultation to check suitability. (156) | PicoCare Picosecond Laser Device |
| /technology/fotona-sp-dynamis | fotona-sp-dynamis | fotona 4d malaysia (10/13) | fotona sp dynamis, timewalker laser malaysia, fotona 4d facelift malaysia | Fotona SP Dynamis (TimeWalker) Laser Malaysia | Kaiteki (55) | Fotona SP Dynamis, also called TimeWalker, is the laser platform behind Kaiteki's Fotona 4D facial protocol. Book a free consultation to check if it suits you. (159) | Fotona SP Dynamis / TimeWalker Laser Platform |
| /technology/dermav | dermav | dermav laser malaysia — n/a (category: vascular-pigment laser) | dermav vascular laser malaysia, facial redness laser treatment, dermav pigment laser | DermaV Vascular & Pigment Laser Treatment Malaysia | Kaiteki (60) | DermaV is a dual-wavelength laser used at Kaiteki for facial redness, visible vessels and pigment concerns. Book a free consultation to check your suitability. (159) | DermaV Dual-Wavelength Vascular & Pigment Laser |
| /technology/pro-yellow | pro-yellow | pro yellow laser malaysia — n/a | quadrostar 577nm laser, yellow light laser malaysia, vascular laser treatment malaysia | Pro Yellow 577nm Vascular Laser Malaysia | Kaiteki (50) | Pro Yellow (Quadrostar 577nm) is a yellow-light laser used at Kaiteki for facial redness and visible vessels. Book a free consultation to assess suitability. (157) | Pro Yellow (Quadrostar 577nm) Vascular Laser |
| /technology/m22-ipl | m22-ipl | m22 laser malaysia (10/13) | m22 ipl malaysia, lumenis m22 laser, ipl hair reduction malaysia | M22 IPL Laser Treatment Price in Malaysia | Kaiteki (51) | M22 IPL is an intense pulsed light platform used at Kaiteki for vascular, pigment and hair-reduction concerns. Book a free consultation to find what suits you. (159) | M22 IPL: Vascular, Pigment & Hair Reduction |
| /technology/fractional-co2 | fractional-co2 | fractional co2 laser malaysia — n/a | co2 laser resurfacing malaysia, co2 laser scar treatment, fractional laser malaysia | Fractional CO2 Laser Resurfacing Malaysia | Kaiteki (51) | Fractional CO2 is a resurfacing laser used within Kaiteki's resurfacing-laser treatment for texture and scarring concerns. Book a free consultation today. (154) | Fractional CO2 Resurfacing Laser |
| /technology/ultracel-q | ultracel-q | ultracel q malaysia — n/a (category: HIFU) | hifu malaysia, ultracel q price malaysia, non-surgical face lift malaysia | Ultracel Q HIFU Skin-Lifting Treatment Malaysia | Kaiteki (57) | Ultracel Q is a HIFU device used at Kaiteki for non-surgical skin-lifting and tightening concerns. Book a free consultation to check if it suits your skin. (155) | Ultracel Q High-Intensity Focused Ultrasound |
| /technology/lifthera | lifthera | lifthera hifu malaysia — n/a | lifthera price malaysia, hifu skin lifting malaysia, focused ultrasound facelift | Lifthera HIFU Skin-Lifting Treatment Malaysia | Kaiteki (55) | Lifthera is a focused-ultrasound device used within Kaiteki's HIFU treatment for skin-lifting and tightening concerns. Book a free consultation to learn more. (158) | Lifthera Focused-Ultrasound Lifting Device |
| /technology/ultherapy-system | ultherapy-system | ultherapy malaysia — n/a (GSC: onda vs ultherapy 1,099 impr, comparison) | ultherapy price malaysia, micro-focused ultrasound facelift, ultherapy vs onda | Ultherapy System Non-Surgical Lifting Malaysia | Kaiteki (56) | The Ultherapy System uses micro-focused ultrasound with built-in imaging for non-surgical face and neck lifting. Book a free consultation to learn more. (152) | Ultherapy: Micro-Focused Ultrasound Lifting |
| /technology/sylfirm-x | sylfirm-x | sylfirm x malaysia (20/38) | sylfirm x price malaysia, rf microneedling malaysia, sylfirm x treatment price | Sylfirm X RF Microneedling Treatment Malaysia | Kaiteki (55) | Sylfirm X is a radiofrequency microneedling device used at Kaiteki for pigment, vascular and texture concerns. Book a free consultation to check suitability. (157) | Sylfirm X Radiofrequency Microneedling |
| /technology/morpheus8 | morpheus8 | morpheus8 malaysia (10/43) | morpheus8 price malaysia, rf microneedling treatment malaysia, morpheus8 skin tightening | Morpheus8 RF Microneedling Treatment Malaysia | Kaiteki (55) | Morpheus8 is a radiofrequency microneedling device offering deeper penetration, used at Kaiteki for skin-tightening and texture. Book a free consultation today. (160) | Morpheus8 Deep RF Microneedling |
| /technology/potenza | potenza | potenza rf microneedling malaysia — n/a (GSC: potenza vs sylfirm x 20 impr, comparison) | potenza price malaysia, rf microneedling for scars, potenza acne scar treatment | Potenza RF Microneedling Treatment Malaysia | Kaiteki (53) | Potenza is a radiofrequency microneedling device with adjustable depth used at Kaiteki for scarring and pore concerns. Book a free consultation to learn more. (158) | Potenza Radiofrequency Microneedling |
| /technology/btl-exilis | btl-exilis | btl exilis malaysia — n/a | exilis skin tightening malaysia, monopolar rf treatment malaysia, exilis face firming | BTL Exilis Radiofrequency Skin Firming Malaysia | Kaiteki (57) | BTL Exilis is a monopolar radiofrequency device that delivers deep, uniform heating for skin-firmness and texture at Kaiteki. Book a free consultation today. (157) | BTL Exilis Monopolar Radiofrequency |
| /technology/wonderface | wonderface | wonderface rf treatment malaysia — n/a | wonderface price malaysia, radiofrequency face contouring, skin firmness treatment malaysia | Wonderface Radiofrequency Treatment Malaysia | Kaiteki (54) | Wonderface is a radiofrequency platform with precise energy control used at Kaiteki for skin-firmness and facial contour. Book a free consultation today. (153) | Wonderface Precision Radiofrequency |
| /technology/coolsculpting | coolsculpting | coolsculpting malaysia (30/45) | coolsculpting price malaysia, fat freezing malaysia, cryolipolysis treatment kl | CoolSculpting Fat-Freezing Treatment Malaysia | Kaiteki (55) | CoolSculpting is a cryolipolysis device using controlled cooling to target pockets of localised fat. Book a free consultation at Kaiteki to check suitability. (158) | CoolSculpting: Cryolipolysis Fat-Freezing |
| /technology/cooltech | cooltech | cooltech fat freezing malaysia — n/a | cryolipolysis malaysia, cooltech price malaysia, fat freezing treatment kl | Cooltech Cryolipolysis Fat-Freezing Malaysia | Kaiteki (54) | Cooltech is a cryolipolysis device that uses controlled cooling to target pockets of localised fat at Kaiteki. Book a free consultation to check suitability. (157) | Cooltech Fat-Freezing Device |
| /technology/onda-coolwaves | onda-coolwaves | onda malaysia (10/37) | onda coolwaves price malaysia, onda pro malaysia, onda body contouring | Onda Coolwaves Body & Face Treatment Malaysia | Kaiteki (55) | Onda uses microwave-based Coolwaves technology at Kaiteki for localised fat, cellulite appearance and facial firmness. Book a free consultation to learn more. (158) | Onda Coolwaves: Microwave Body & Face Contouring |
| /technology/schwarzy | schwarzy | schwarzy em-fit malaysia — n/a | em-fit muscle stimulation malaysia, muscle toning treatment malaysia, electromagnetic body toning | Schwarzy (Em-Fit) Muscle-Toning Treatment Malaysia | Kaiteki (60) | Schwarzy (Em-Fit) is an electromagnetic muscle-stimulation device used at Kaiteki to induce contractions for body-toning concerns. Book a free consultation. (156) | Schwarzy (Em-Fit) Electromagnetic Muscle Stimulation |
| /technology/profhilo | profhilo | profhilo malaysia (20/33) | profhilo price malaysia, profhilo skin booster, profhilo treatment malaysia | Profhilo Skin Booster Treatment in Malaysia | Kaiteki (53) | Profhilo is a high-concentration hyaluronic acid injectable used within Kaiteki's skin-booster treatment for hydration. Book a free consultation to learn more. (159) | Profhilo Hyaluronic Acid Skin Booster |
| /technology/rejuran | rejuran | rejuran malaysia (140/49) | rejuran healer malaysia, rejuran price malaysia, rejuran skin booster | Rejuran Skin Booster Injectable Treatment Malaysia | Kaiteki (60) | Rejuran is a polynucleotide injectable used within Kaiteki's skin-booster treatment to support the skin barrier. Book a free consultation to check suitability. (159) | Rejuran: Polynucleotide Skin Booster |
| /technology/plinest | plinest | plinest newest malaysia — n/a (GSC: plinest vs profhilo 662 impr, comparison) | plinest skin booster price malaysia, polynucleotide injectable malaysia, plinest treatment malaysia | Plinest/Newest Skin Booster Injectable Malaysia | Kaiteki (57) | Plinest/Newest is a polynucleotide-based injectable used within Kaiteki's skin-booster treatment for regeneration and elasticity. Book a free consultation. (155) | Plinest/Newest Polynucleotide Skin Booster |
| /technology/restylane-skinbooster | restylane-skinbooster | restylane skinboosters malaysia — n/a | restylane skin booster price malaysia, hyaluronic acid skin booster malaysia, skin hydration injectable | Restylane Skinboosters Treatment Malaysia | Kaiteki (51) | Restylane Skinboosters is a hyaluronic-acid range used within Kaiteki's skin-booster treatment to support hydration and skin quality. Book a free consultation. (159) | Restylane Skinboosters: Hyaluronic Acid Range |
| /technology/hydrodeluxe | hydrodeluxe | hydrodeluxe skin booster malaysia — n/a (GSC: neauvia hydro deluxe vs profhilo 25 impr, comparison) | hydrating injectable malaysia, skin moisture booster treatment, neauvia hydrodeluxe malaysia | Hydrodeluxe Hydrating Skin Booster Malaysia | Kaiteki (53) | Hydrodeluxe is a hydrating injectable formulation used within Kaiteki's skin-booster treatment to support moisture and skin quality. Book a free consultation. (158) | Hydrodeluxe Hydrating Injectable |
| /technology/sculptra | sculptra | sculptra malaysia (30/18) | sculptra price malaysia, poly-l-lactic acid injectable, biostimulator treatment malaysia | Sculptra Bio-Stimulator Treatment Malaysia | Kaiteki (52) | Sculptra is a poly-L-lactic acid injectable used within Kaiteki's bio-stimulator treatment to support gradual structural renewal. Book a free consultation. (155) | Sculptra: Poly-L-Lactic Acid Bio-Stimulator |
| /technology/ellanse | ellanse | ellanse malaysia (10/37) | ellanse price malaysia, ellanse filler malaysia, pcl injectable malaysia | Ellanse Bio-Stimulator Treatment Malaysia | Kaiteki (51) | Ellanse is a polycaprolactone injectable used within Kaiteki's bio-stimulator treatment as a collagen-supporting option. Book a free consultation to learn more. (160) | Ellanse: Polycaprolactone Bio-Stimulator |
| /technology/radiesse | radiesse | radiesse malaysia — n/a (GSC: radiesse vs ellanse 1 impr, comparison) | radiesse price malaysia, calcium hydroxylapatite filler, bio-stimulator injectable malaysia | Radiesse Bio-Stimulator Treatment Malaysia | Kaiteki (52) | Radiesse is a calcium hydroxylapatite injectable used within Kaiteki's bio-stimulator treatment with collagen-supporting properties. Book a free consultation. (158) | Radiesse: Calcium Hydroxylapatite Bio-Stimulator |
| /technology/juvederm | juvederm | juvederm malaysia (10/35) | juvederm filler malaysia, juvederm price malaysia, dermal filler treatment malaysia | Juvederm Dermal Filler Treatment in Malaysia | Kaiteki (54) | Juvederm is a hyaluronic-acid dermal filler range used at Kaiteki to add volume and support facial contour. Book a free consultation to check suitability. (154) | Juvederm Hyaluronic Acid Dermal Fillers |
| /technology/restylane | restylane | restylane malaysia (10/18) | restylane filler price malaysia, hyaluronic acid filler malaysia, restylane dermal filler | Restylane Dermal Filler Treatment Malaysia | Kaiteki (52) | Restylane is a hyaluronic-acid dermal filler range used at Kaiteki to add volume and support facial contour. Book a free consultation to learn more. (148) | Restylane Hyaluronic Acid Dermal Fillers |
| /technology/belotero | belotero | belotero malaysia — n/a | belotero filler price malaysia, hyaluronic acid filler malaysia, belotero dermal filler | Belotero Dermal Filler Treatment in Malaysia | Kaiteki (54) | Belotero is a hyaluronic-acid dermal filler range used at Kaiteki to add volume and soften static lines. Book a free consultation to check suitability. (151) | Belotero Hyaluronic Acid Dermal Fillers |
| /technology/hydrafacial | hydrafacial | hydrafacial malaysia (20/32) | hydrafacial price malaysia, hydrafacial treatment kl, device-based facial malaysia | Hydrafacial Device-Based Facial Treatment Malaysia | Kaiteki (60) | Hydrafacial is a device-based facial that cleanses, exfoliates and infuses serums to support skin quality at Kaiteki. Book a free consultation to learn more. (157) | Hydrafacial: Device-Based Facial Treatment |
| /technology/silkpeel | silkpeel | silkpeel facial malaysia — n/a | silkpeel dermalinfusion price malaysia, exfoliation infusion facial, silkpeel treatment malaysia | Silkpeel Dermalinfusion Facial Treatment Malaysia | Kaiteki (59) | Silkpeel is a device-based facial combining exfoliation with infusion of topical solutions at Kaiteki. Book a free consultation to check what suits your skin. (158) | Silkpeel: Exfoliation & Infusion Facial |
| /technology/alma | alma | alma ipl rf hair removal malaysia — n/a | laser hair removal malaysia, ipl rf hair reduction, alma laser price malaysia | Alma IPL + RF Hair Removal Treatment Malaysia | Kaiteki (55) | Alma combines IPL and radiofrequency energy at Kaiteki to target hair follicles over a course of sessions. Book a free consultation to discuss your goals. (154) | Alma: IPL + RF Hair Removal Platform |

### /technology/picosure
- **H2:** What Is PicoSure? → H3: Picosecond laser technology, How it differs from traditional lasers
- **H2:** What It May Help Address → H3: Pigmentation & uneven tone, Tattoo ink
- **H2:** Suitability & Consultation → H3: Skin assessment, Who should avoid it
- **H2:** Sessions & Aftercare → H3: What to expect, Downtime

### /technology/fotona-pqx
- **H2:** What Is Fotona PQX / StarWalker?
- **H2:** How the Picosecond Platform Works
- **H2:** What It May Help Address → H3: Pigment concerns, Tattoo ink
- **H2:** Suitability & Who Should Avoid It
- **H2:** Sessions & Aftercare

### /technology/picocare
- **H2:** What Is PicoCare?
- **H2:** What It May Help Address → H3: Pigmentation, Tattoo removal
- **H2:** Suitability & Consultation
- **H2:** Sessions & Aftercare

### /technology/fotona-sp-dynamis
- **H2:** What Is Fotona SP Dynamis?
- **H2:** How the Nd:YAG & Er:YAG Platform Works
- **H2:** The Fotona 4D Protocol → H3: What each of the 4 steps targets
- **H2:** Suitability & Aftercare

### /technology/dermav
- **H2:** What Is DermaV?
- **H2:** How It Works — Dual Wavelengths → H3: 595nm vascular, 1064nm pigment
- **H2:** What It May Help Address → H3: Facial redness & rosacea-type flushing, Brown spots & PIH
- **H2:** Suitability & Who Should Avoid It
- **H2:** The Session, Downtime & Risks

### /technology/pro-yellow
- **H2:** What Is Pro Yellow?
- **H2:** How 577nm Yellow Light Works
- **H2:** What It May Help Address → H3: Facial redness, Visible vessels
- **H2:** Suitability & Aftercare

### /technology/m22-ipl
- **H2:** What Is M22 IPL?
- **H2:** How the Filtered Wavelengths Work
- **H2:** What It May Help Address → H3: Vascular & pigment concerns, Hair reduction
- **H2:** Suitability & Sessions

### /technology/fractional-co2
- **H2:** What Is Fractional CO2?
- **H2:** How Controlled Micro-Injury Works
- **H2:** What It May Help Address → H3: Texture, Scarring
- **H2:** Downtime & Aftercare

### /technology/ultracel-q
- **H2:** What Is Ultracel Q?
- **H2:** How HIFU Energy Works
- **H2:** What It May Help Address → H3: Skin laxity, Jawline & neck contour
- **H2:** Suitability & Sessions

### /technology/lifthera
- **H2:** What Is Lifthera?
- **H2:** How Focused Ultrasound Works
- **H2:** What It May Help Address
- **H2:** Suitability & Aftercare

### /technology/ultherapy-system
- **H2:** What Is the Ultherapy System?
- **H2:** How Micro-Focused Ultrasound Imaging Works
- **H2:** What It May Help Address → H3: Brow, chin & neck laxity
- **H2:** Suitability & Sessions

### /technology/sylfirm-x
- **H2:** What Is Sylfirm X?
- **H2:** Pulsed vs Continuous RF Modes
- **H2:** What It May Help Address → H3: Pigment & vascular concerns, Texture & pores
- **H2:** Suitability & Sessions

### /technology/morpheus8
- **H2:** What Is Morpheus8?
- **H2:** How Deeper RF Penetration Works
- **H2:** What It May Help Address → H3: Skin tightening, Texture
- **H2:** Suitability & Sessions

### /technology/potenza
- **H2:** What Is Potenza?
- **H2:** Adjustable Depth & Monopolar/Bipolar Modes
- **H2:** What It May Help Address → H3: Scarring, Pores
- **H2:** Suitability & Sessions

### /technology/btl-exilis
- **H2:** What Is BTL Exilis?
- **H2:** How Monopolar RF Heating Works
- **H2:** What It May Help Address → H3: Skin firmness, Texture
- **H2:** Suitability & Sessions

### /technology/wonderface
- **H2:** What Is Wonderface?
- **H2:** How Precise RF Energy Control Works
- **H2:** What It May Help Address → H3: Facial firmness, Contour
- **H2:** Suitability & Sessions

### /technology/coolsculpting
- **H2:** What Is CoolSculpting?
- **H2:** How Cryolipolysis Works
- **H2:** What It May Help Address → H3: Abdomen & flanks, Thighs, arms & chin
- **H2:** Suitability & Who Should Avoid It
- **H2:** The Session, Downtime & Risks
- **H2:** Sessions & Cost Factors

### /technology/cooltech
- **H2:** What Is Cooltech?
- **H2:** How Controlled Cooling Works
- **H2:** What It May Help Address
- **H2:** Suitability & Aftercare

### /technology/onda-coolwaves
- **H2:** What Is Onda? → H3: Onda for Body vs Onda for Face
- **H2:** How Coolwaves Technology Works
- **H2:** What It May Help Address — Body & Face → H3: Body: fat & cellulite appearance, Face: jawline & jowl firmness
- **H2:** Suitability & Who Should Avoid It
- **H2:** The Session, Downtime & Risks
- **H2:** Sessions & Cost Factors

### /technology/schwarzy
- **H2:** What Is Schwarzy (Em-Fit)?
- **H2:** How Electromagnetic Stimulation Works
- **H2:** What It May Help Address → H3: Body toning
- **H2:** Suitability & Sessions

### /technology/profhilo
- **H2:** What Is Profhilo?
- **H2:** How High-Concentration HA Works
- **H2:** What It May Help Address → H3: Hydration, Skin remodelling
- **H2:** Suitability & Sessions

### /technology/rejuran
- **H2:** What Is Rejuran?
- **H2:** How Polynucleotides Support the Skin Barrier
- **H2:** What It May Help Address → H3: Skin barrier support, Overall skin quality
- **H2:** Suitability & Sessions

### /technology/plinest
- **H2:** What Is Plinest/Newest?
- **H2:** How Polynucleotides Support Regeneration
- **H2:** What It May Help Address
- **H2:** Suitability & Sessions

### /technology/restylane-skinbooster
- **H2:** What Is Restylane Skinboosters?
- **H2:** How the HA Range Supports Hydration
- **H2:** What It May Help Address
- **H2:** Suitability & Sessions

### /technology/hydrodeluxe
- **H2:** What Is Hydrodeluxe?
- **H2:** How the Hydrating Formulation Works
- **H2:** What It May Help Address
- **H2:** Suitability & Sessions

### /technology/sculptra
- **H2:** What Is Sculptra?
- **H2:** How Poly-L-Lactic Acid Works Gradually
- **H2:** What It May Help Address → H3: Gradual structural renewal
- **H2:** Suitability & Sessions

### /technology/ellanse
- **H2:** What Is Ellanse?
- **H2:** How Polycaprolactone (PCL) Works
- **H2:** What It May Help Address
- **H2:** Suitability & Sessions

### /technology/radiesse
- **H2:** What Is Radiesse?
- **H2:** How Calcium Hydroxylapatite (CaHA) Works
- **H2:** What It May Help Address
- **H2:** Suitability & Sessions

### /technology/juvederm
- **H2:** What Is Juvederm?
- **H2:** How Hyaluronic Acid Fillers Add Volume
- **H2:** What It May Help Address → H3: Volume, Facial contour
- **H2:** Suitability & Sessions

### /technology/restylane
- **H2:** What Is Restylane?
- **H2:** How Hyaluronic Acid Fillers Add Volume
- **H2:** What It May Help Address
- **H2:** Suitability & Sessions

### /technology/belotero
- **H2:** What Is Belotero?
- **H2:** How Hyaluronic Acid Fillers Soften Lines
- **H2:** What It May Help Address
- **H2:** Suitability & Sessions

### /technology/hydrafacial
- **H2:** What Is Hydrafacial?
- **H2:** How Cleanse, Exfoliate & Infuse Works
- **H2:** What It May Help Address
- **H2:** Suitability & Sessions

### /technology/silkpeel
- **H2:** What Is Silkpeel?
- **H2:** How Simultaneous Exfoliation & Infusion Works
- **H2:** What It May Help Address
- **H2:** Suitability & Sessions

### /technology/alma
- **H2:** What Is Alma (IPL + RF)?
- **H2:** How Combined IPL & RF Energy Works
- **H2:** What It May Help Address → H3: Hair reduction over a course of sessions
- **H2:** Suitability & Sessions
## Locations (hub + 9 branch pages)

| Path | Page | Primary keyword (MY vol / diff) | Secondary keywords | Title (chars) | Meta description (chars) | H1 |
|---|---|---|---|---|---|---|
| /locations | Locations hub | kaiteki locations — n/a (GSC: 0 impr, brand nav term) | aesthetic clinic near me (590/27), kaiteki branches, skin clinic malaysia | Kaiteki Aesthetic Clinic Locations Across Malaysia (50) | Find your nearest Kaiteki aesthetic clinic across Klang Valley, Johor & Sabah. Compare branches, hours & treatments. Book a free consultation on WhatsApp. (154) | Kaiteki Clinic Locations |
| /locations/mont-kiara | Mont Kiara | aesthetic clinic mont kiara (20/36; GSC: 1158 impr) | kaiteki mont kiara (GSC: 1320 impr), facial mont kiara (GSC: 295 impr), dermatologist mont kiara (GSC: 232 impr) | Aesthetic Clinic in Mont Kiara, Kuala Lumpur \| Kaiteki (54) | Kaiteki's aesthetic clinic in Mont Kiara offers pico laser, HIFU & skin boosters. See hours, address & doctors. Book a free consultation via WhatsApp. (150) | Kaiteki Aesthetic Clinic, Mont Kiara |
| /locations/cheras | Cheras | aesthetic clinic cheras (50/32; GSC: 798 impr) | kaiteki cheras (GSC: 1475 impr), skin clinic cheras (GSC: 449 impr), skin specialist cheras (GSC: 1078 impr) | Aesthetic Clinic in Cheras, Kuala Lumpur \| Kaiteki (50) | Visit Kaiteki's aesthetic clinic in Cheras for pico laser, HIFU & skin booster consultations. Check address, hours & doctors. Book free via WhatsApp. (149) | Kaiteki Aesthetic Clinic, Cheras |
| /locations/bukit-jalil | Bukit Jalil | aesthetic clinic bukit jalil (50/25; GSC: 675 impr) | kaiteki bukit jalil (GSC: 1425 impr), facial bukit jalil (GSC: 1058 impr), skin specialist bukit jalil (GSC: 528 impr) | Aesthetic Clinic in Bukit Jalil, Kuala Lumpur \| Kaiteki (55) | Kaiteki's aesthetic clinic in Bukit Jalil offers pico laser, Fotona 4D & microneedling assessments. See address, hours & doctors. Book free on WhatsApp. (152) | Kaiteki Aesthetic Clinic, Bukit Jalil |
| /locations/four-seasons-kl | Four Seasons KL | aesthetic clinic ampang — n/a (GSC: 58 impr) | skin specialist ampang (GSC: 120 impr), kaiteki four seasons (GSC: 28 impr "four seasons clinic"), aesthetic clinic klcc (GSC: 1 impr) | Aesthetic Clinic Near KLCC, Ampang & Four Seasons \| Kaiteki (59) | Kaiteki's clinic at Four Seasons Place serves KLCC, Ampang & Bukit Bintang with Ultherapy, HIFU & skin booster consultations. Book free on WhatsApp. (148) | Kaiteki Aesthetic Clinic, Four Seasons KL |
| /locations/petaling-jaya | Petaling Jaya | aesthetic clinic petaling jaya (30/16; GSC: 2610 impr) | kaiteki ss2 petaling jaya (GSC: 266 impr), facial petaling jaya (GSC: 1421 impr), facial treatment petaling jaya (GSC: 1064 impr) | Aesthetic Clinic in Petaling Jaya, Selangor \| Kaiteki (53) | Kaiteki's aesthetic clinic in Petaling Jaya (SS2) offers pico laser, CoolSculpting & Onda consultations. See hours & doctors. Book free via WhatsApp. (149) | Kaiteki Aesthetic Clinic, Petaling Jaya |
| /locations/kota-kemuning | Kota Kemuning | aesthetic clinic kota kemuning — n/a (GSC: 867 impr) | kaiteki kota kemuning (GSC: 900 impr), facial kota kemuning (10/38; GSC: 1071 impr), skin clinic kota kemuning (GSC: 380 impr) | Aesthetic Clinic in Kota Kemuning, Shah Alam \| Kaiteki (54) | Kaiteki's aesthetic clinic in Kota Kemuning, Shah Alam offers facials, pico laser & HIFU consultations. See address & hours. Book free via WhatsApp. (148) | Kaiteki Aesthetic Clinic, Kota Kemuning |
| /locations/southkey-johor-bahru | Southkey, JB | aesthetic clinic southkey — n/a (GSC: 113 impr "mid valley southkey aesthetic clinic") | kaiteki southkey (GSC: 528 impr), aesthetic clinic johor bahru (50/33; GSC: 2212 impr), southkey clinic (GSC: 122 impr) | Aesthetic Clinic in Southkey, Johor Bahru \| Kaiteki (51) | Kaiteki's aesthetic clinic at Southkey, Johor Bahru offers pico laser, HIFU & CoolSculpting consultations. See hours & doctors. Book free on WhatsApp. (150) | Kaiteki Aesthetic Clinic, Southkey Johor Bahru |
| /locations/pelangi-johor-bahru | Pelangi, JB | aesthetic clinic taman pelangi — n/a (GSC: 307 impr "clinic pelangi") | kaiteki pelangi (GSC: 1273 impr), aesthetic clinic johor bahru (50/33; GSC: 2212 impr), clinic taman pelangi (GSC: 114 impr) | Aesthetic Clinic in Taman Pelangi, Johor Bahru \| Kaiteki (56) | Kaiteki's aesthetic clinic in Taman Pelangi, Johor Bahru offers pico laser & skin booster consultations. See address & hours. Book free via WhatsApp. (149) | Kaiteki Aesthetic Clinic, Pelangi Johor Bahru |
| /locations/kota-kinabalu | Kota Kinabalu | aesthetic clinic kota kinabalu (10/16; GSC: 565 impr) | kaiteki kota kinabalu (GSC: 280 impr), facial kota kinabalu (GSC: 916 impr), skin clinic kota kinabalu (GSC: 574 impr) | Aesthetic Clinic in Kota Kinabalu, Sabah \| Kaiteki (50) | Kaiteki's aesthetic clinic in Kota Kinabalu (Imago) offers pico laser, HIFU & Fotona 4D consultations. See hours & doctors. Book free via WhatsApp. (147) | Kaiteki Aesthetic Clinic, Kota Kinabalu |

Canonical URLs (self-referencing, non-www, no trailing slash):
`https://kaiteki.my/locations`, `/locations/mont-kiara`, `/locations/cheras`, `/locations/bukit-jalil`, `/locations/four-seasons-kl`, `/locations/petaling-jaya`, `/locations/kota-kemuning`, `/locations/southkey-johor-bahru`, `/locations/pelangi-johor-bahru`, `/locations/kota-kinabalu`.

### /locations
- **H2:** Find a Kaiteki Clinic Near You → H3: Klang Valley branches, Johor branches, Sabah branch
- **H2:** Why Choose Kaiteki
- **H2:** Treatments Available at Every Branch
- **H2:** Book a Free Consultation on WhatsApp

### /locations/mont-kiara
- **H2:** Address, Hours & Contact
- **H2:** Treatments Offered at Kaiteki Mont Kiara → H3: Pico Laser, HIFU, Ultherapy, CoolSculpting
- **H2:** Doctors at This Branch
- **H2:** Getting Here → H3: Parking at Arcoris Plaza
- **H2:** Book a Free Consultation on WhatsApp

### /locations/cheras
- **H2:** Address, Hours & Contact
- **H2:** Treatments Offered at Kaiteki Cheras → H3: Pico Laser, HIFU, Skin Boosters
- **H2:** Doctors at This Branch
- **H2:** Getting Here → H3: Parking near Wisma Aman Elite
- **H2:** Book a Free Consultation on WhatsApp

### /locations/bukit-jalil
- **H2:** Address, Hours & Contact
- **H2:** Treatments Offered at Kaiteki Bukit Jalil → H3: Pico Laser, Fotona 4D, Microneedling
- **H2:** Doctors at This Branch
- **H2:** Getting Here → H3: Parking at Jalil Link
- **H2:** Book a Free Consultation on WhatsApp

### /locations/four-seasons-kl
- **H2:** Address, Hours & Contact → H3: Closed Thursdays
- **H2:** Treatments Offered at Kaiteki Four Seasons KL → H3: Ultherapy, HIFU, Skin Boosters
- **H2:** Doctors at This Branch
- **H2:** Getting Here from KLCC, Ampang & Bukit Bintang → H3: Valet & mall parking
- **H2:** Book a Free Consultation on WhatsApp

### /locations/petaling-jaya
- **H2:** Address, Hours & Contact
- **H2:** Treatments Offered at Kaiteki Petaling Jaya → H3: Pico Laser, CoolSculpting, Onda
- **H2:** Doctors at This Branch
- **H2:** Getting Here → H3: Parking at The Hub SS2
- **H2:** Book a Free Consultation on WhatsApp

### /locations/kota-kemuning
- **H2:** Address, Hours & Contact
- **H2:** Treatments Offered at Kaiteki Kota Kemuning → H3: Pico Laser, HIFU, Microneedling
- **H2:** Doctors at This Branch
- **H2:** Getting Here → H3: On-street parking
- **H2:** Book a Free Consultation on WhatsApp

### /locations/southkey-johor-bahru
- **H2:** Address, Hours & Contact
- **H2:** Treatments Offered at Kaiteki Southkey → H3: Pico Laser, HIFU, CoolSculpting
- **H2:** Doctors at This Branch
- **H2:** Getting Here → H3: Parking near Mid Valley Southkey
- **H2:** Book a Free Consultation on WhatsApp

### /locations/pelangi-johor-bahru
- **H2:** Address, Hours & Contact
- **H2:** Treatments Offered at Kaiteki Pelangi → H3: Pico Laser, Skin Boosters
- **H2:** Doctors at This Branch
- **H2:** Getting Here → H3: Parking around Pusat Komersial Pelangi
- **H2:** Book a Free Consultation on WhatsApp

### /locations/kota-kinabalu
- **H2:** Address, Hours & Contact → H3: Open daily
- **H2:** Treatments Offered at Kaiteki Kota Kinabalu → H3: Pico Laser, HIFU, Fotona 4D
- **H2:** Doctors at This Branch
- **H2:** Getting Here → H3: Mall parking at Imago / KK Times Square
- **H2:** Book a Free Consultation on WhatsApp
## Doctors

Canonical note: every path below is `https://kaiteki.my<path>` (non-www, no trailing slash). Data gap: `content/data/doctors.ts` has `branches: []` for all 20 doctors — branch/city assignment is not yet published, so doctor-page secondary keywords use "malaysia" scope rather than per-branch city terms until that data lands (flagging per CLAUDE.md). Doctor-name search volume is ~0 in Ubersuggest for all names — checked GSC branded queries instead ("dr jessie" 14 impr) per brief's guidance not to burn calls on 21 individual name lookups; these are branded/E-E-A-T pages, not volume plays. Only 20 doctor entries exist in doctors.ts (not 21).

| Path | Page | Primary keyword (MY vol / diff) | Secondary keywords | Title (chars) | Meta description (chars) | H1 |
|---|---|---|---|---|---|---|
| /doctors | Doctors hub | "aesthetic doctors malaysia" (n/a — GSC: 331 impr, related "aesthetic doctor" 956 impr) | aesthetic doctor kl (n/a — GSC: 51 impr); skin specialist malaysia (10/mo, diff 22); aesthetic physician | Meet Our Aesthetic Doctors Across Malaysia | Kaiteki (52) | Meet Kaiteki's aesthetic physicians across Malaysia, their credentials and focus areas. Book a free WhatsApp consultation with a doctor near you. (145) | Meet Our Aesthetic Doctors |
| /doctors/dr-jessie-lim | Dr Jessie Lim profile | "dr jessie lim" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; injectables & aesthetic lasers | Dr Jessie Lim — Founder & CEO, Aesthetic Physician | Kaiteki (60) | Dr Jessie Lim (LCP), Kaiteki aesthetic physician, focuses on injectables & aesthetic lasers. Review credentials, then book a free WhatsApp consultation. (152) | Dr Jessie Lim — Founder & CEO, Aesthetic Physician |
| /doctors/dr-chew-yuhhui | Dr Chew Yuhhui profile | "dr chew yuhhui" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; lasers & injectables | Dr Chew Yuhhui — Senior Medical Director | Kaiteki (50) | Dr Chew Yuhhui (MBBS, LCP), Kaiteki aesthetic physician, focuses on lasers & injectables. Review credentials, then book a free WhatsApp consultation. (149) | Dr Chew Yuhhui — Co-Founder & Senior Medical Director |
| /doctors/dr-yeong-bin | Dr Yeong Bin profile | "dr yeong bin" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; minimally invasive treatments | Dr Yeong Bin, Senior Medical Director — Kaiteki Clinic (54) | Dr Yeong Bin (MBBS, MAC), Kaiteki aesthetic physician, focuses on minimally invasive treatments. Review credentials, then book a free WhatsApp consultation. (156) | Dr Yeong Bin — Co-Founder & Senior Medical Director |
| /doctors/dr-william-yap | Dr William Yap profile | "dr william yap" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; Rejuran injectables | Dr William Yap — Partner, Aesthetic Physician | Kaiteki (55) | Dr William Yap (MD, LCP), Kaiteki aesthetic physician, focuses on Rejuran injectables. Review credentials, then book a free WhatsApp consultation. (146) | Dr William Yap — Partner, Aesthetic Physician |
| /doctors/dr-lim-xiao-chien | Dr Lim Xiao Chien profile | "dr lim xiao chien" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; minimally invasive treatments | Dr Lim Xiao Chien — Partner, Aesthetic Physician | Kaiteki (58) | Dr Lim Xiao Chien (MBBS, MAC) practises minimally invasive treatments at Kaiteki. Review credentials and branch info, then book a free WhatsApp consultation. (157) | Dr Lim Xiao Chien — Partner, Aesthetic Physician |
| /doctors/dr-jeremy-low | Dr Jeremy Low profile | "dr jeremy low" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; acne, rosacea & pigmentation | Dr Jeremy Low — Partner, Aesthetic Physician | Kaiteki (54) | Dr Jeremy Low (MBBS, MAC), Kaiteki aesthetic physician, focuses on acne, rosacea & pigmentation. Review credentials, then book a free WhatsApp consultation. (156) | Dr Jeremy Low — Partner, Aesthetic Physician |
| /doctors/dr-chang-chee-seong | Dr Chang Chee Seong profile | "dr chang chee seong" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; hair restoration | Dr Chang Chee Seong — Wellness Physician | Kaiteki (50) | Dr Chang Chee Seong (MD, MAC), Kaiteki aesthetic physician, focuses on hair restoration. Review credentials, then book a free WhatsApp consultation. (148) | Dr Chang Chee Seong — Wellness Physician |
| /doctors/dr-jacqueline-tan | Dr Jacqueline Tan profile | "dr jacqueline tan" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; healthy-aging aesthetics | Dr Jacqueline Tan, Aesthetic Physician — Kaiteki Clinic (55) | Dr Jacqueline Tan (MBBS, MSc), Kaiteki aesthetic physician, focuses on healthy-aging aesthetics. Review credentials, then book a free WhatsApp consultation. (156) | Dr Jacqueline Tan — Aesthetic Physician |
| /doctors/dr-joaan-kong | Dr Joaan Kong profile | "dr joaan kong" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; paediatric-trained injectables | Dr Joaan Kong, Aesthetic Physician — Kaiteki Clinic (51) | Dr Joaan Kong (MBBS, LCP), Kaiteki aesthetic physician, focuses on paediatric-trained injectables. Review credentials, then book a free WhatsApp consultation. (158) | Dr Joaan Kong — Aesthetic Physician |
| /doctors/dr-tim-chua | Dr Tim Chua profile | "dr tim chua" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; personalised aesthetic treatments | Dr Tim Chua — Aesthetic Physician | Kaiteki Clinic (50) | Dr Tim Chua (MBBS, MAC), Kaiteki aesthetic physician, focuses on personalised aesthetic treatments. Review credentials, then book a free WhatsApp consultation. (159) | Dr Tim Chua — Aesthetic Physician |
| /doctors/dr-calvin-tan | Dr Calvin Tan profile | "dr calvin tan" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; facial contouring | Dr Calvin Tan, Aesthetic Physician — Kaiteki Clinic (51) | Dr Calvin Tan (MD, MAC), Kaiteki aesthetic physician, focuses on facial contouring. Review credentials, then book a free WhatsApp consultation. (143) | Dr Calvin Tan — Aesthetic Physician |
| /doctors/dr-lucas-chew | Dr Lucas Chew profile | "dr lucas chew" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; evidence-based skin treatments | Dr Lucas Chew, Aesthetic Physician — Kaiteki Clinic (51) | Dr Lucas Chew (MBBS), Kaiteki aesthetic physician, focuses on evidence-based skin treatments. Review credentials, then book a free WhatsApp consultation. (153) | Dr Lucas Chew — Aesthetic Physician |
| /doctors/dr-jade | Dr Jade profile | "dr jade" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; anti-aging & holistic care | Dr Jade, MBBS, LCP — Aesthetic Physician | Kaiteki (50) | Dr Jade (MBBS, LCP), Kaiteki aesthetic physician, focuses on anti-aging & holistic care. Review credentials, then book a free WhatsApp consultation. (148) | Dr Jade — Aesthetic Physician |
| /doctors/dr-teresa-tan | Dr Teresa Tan profile | "dr teresa tan" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; skin rejuvenation | Dr Teresa Tan, Aesthetic Physician — Kaiteki Clinic (51) | Dr Teresa Tan (MD, MAC), Kaiteki aesthetic physician, focuses on skin rejuvenation. Review credentials, then book a free WhatsApp consultation. (143) | Dr Teresa Tan — Aesthetic Physician |
| /doctors/dr-chin-wei-horng | Dr Chin Wei Horng profile | "dr chin wei horng" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; general aesthetic medicine | Dr Chin Wei Horng, Aesthetic Physician — Kaiteki Clinic (55) | Dr Chin Wei Horng (MD, GCFM, MAC) practises general aesthetic medicine at Kaiteki. Review credentials and branch info, then book a free WhatsApp consultation. (158) | Dr Chin Wei Horng — Aesthetic Physician |
| /doctors/dr-yvonne-chuah | Dr Yvonne Chuah profile | "dr yvonne chuah" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; skin health & natural results | Dr Yvonne Chuah, Aesthetic Physician — Kaiteki Clinic (53) | Dr Yvonne Chuah (MD, MAC), Kaiteki aesthetic physician, focuses on skin health & natural results. Review credentials, then book a free WhatsApp consultation. (157) | Dr Yvonne Chuah — Aesthetic Physician |
| /doctors/dr-jamie-gan | Dr Jamie Gan profile | "dr jamie gan" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; facial harmony & enhancement | Dr Jamie Gan, Aesthetic Physician — Kaiteki Clinic (50) | Dr Jamie Gan (MD, PDAM), Kaiteki aesthetic physician, focuses on facial harmony & enhancement. Review credentials, then book a free WhatsApp consultation. (154) | Dr Jamie Gan — Aesthetic Physician |
| /doctors/dr-jen-meng | Dr Jen Meng profile | "dr jen meng" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; facial anatomy & medical skincare | Dr Jen Meng — Aesthetic Physician | Kaiteki Clinic (50) | Dr Jen Meng (MBBS, MAC), Kaiteki aesthetic physician, focuses on facial anatomy & medical skincare. Review credentials, then book a free WhatsApp consultation. (159) | Dr Jen Meng — Aesthetic Physician |
| /doctors/dr-chloe-wan | Dr Chloe Wan profile | "dr chloe wan" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; skin rejuvenation & lasers | Dr Chloe Wan, Aesthetic Physician — Kaiteki Clinic (50) | Dr Chloe Wan (MBBS, MAC), Kaiteki aesthetic physician, focuses on skin rejuvenation & lasers. Review credentials, then book a free WhatsApp consultation. (153) | Dr Chloe Wan — Aesthetic Physician |
| /doctors/dr-say-wei-xian | Dr Say Wei Xian profile | "dr say wei xian" (branded/E-E-A-T; n/a MY vol, long-tail — GSC: 0-14 impr, e.g. "dr jessie" 14 impr) | aesthetic doctor malaysia (n/a — GSC: 331 impr); aesthetic physician kaiteki; precise, natural-balanced results | Dr Say Wei Xian, Aesthetic Physician — Kaiteki Clinic (53) | Dr Say Wei Xian (MBBS, MAC) practises precise, natural-balanced results at Kaiteki. Review credentials and branch info, then book a free WhatsApp consultation. (159) | Dr Say Wei Xian — Aesthetic Physician |

### /doctors
- **H2:** Meet Our Aesthetic Doctors → H3: Founders & Medical Directors, Partners, Aesthetic Physicians
- **H2:** Credentials We Look For → H3: MMC/board registration, MAC/LCP certification, continuing education
- **H2:** Our Clinics → H3: 9 branches across KL, Selangor, Johor, Sabah (links to /locations)
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-jessie-lim
- **H2:** Credentials & Qualifications → H3: Medical degree, LCP
- **H2:** Areas of Focus → H3: Injectables & aesthetic lasers
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-chew-yuhhui
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS, LCP
- **H2:** Areas of Focus → H3: Lasers & injectables
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-yeong-bin
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS, MAC
- **H2:** Areas of Focus → H3: Minimally invasive treatments
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-william-yap
- **H2:** Credentials & Qualifications → H3: Medical degree, MD, LCP
- **H2:** Areas of Focus → H3: Rejuran injectables
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-lim-xiao-chien
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS, MAC
- **H2:** Areas of Focus → H3: Minimally invasive treatments
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-jeremy-low
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS, MAC
- **H2:** Areas of Focus → H3: Acne, rosacea & pigmentation
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-chang-chee-seong
- **H2:** Credentials & Qualifications → H3: Medical degree, MD, MAC
- **H2:** Areas of Focus → H3: Hair restoration
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-jacqueline-tan
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS, MSc
- **H2:** Areas of Focus → H3: Healthy-aging aesthetics
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-joaan-kong
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS, LCP
- **H2:** Areas of Focus → H3: Paediatric-trained injectables
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-tim-chua
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS, MAC
- **H2:** Areas of Focus → H3: Personalised aesthetic treatments
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-calvin-tan
- **H2:** Credentials & Qualifications → H3: Medical degree, MD, MAC
- **H2:** Areas of Focus → H3: Facial contouring
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-lucas-chew
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS
- **H2:** Areas of Focus → H3: Evidence-based skin treatments
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-jade
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS, LCP
- **H2:** Areas of Focus → H3: Anti-aging & holistic care
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-teresa-tan
- **H2:** Credentials & Qualifications → H3: Medical degree, MD, MAC
- **H2:** Areas of Focus → H3: Skin rejuvenation
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-chin-wei-horng
- **H2:** Credentials & Qualifications → H3: Medical degree, MD, GCFM, MAC
- **H2:** Areas of Focus → H3: General aesthetic medicine
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-yvonne-chuah
- **H2:** Credentials & Qualifications → H3: Medical degree, MD, MAC
- **H2:** Areas of Focus → H3: Skin health & natural results
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-jamie-gan
- **H2:** Credentials & Qualifications → H3: Medical degree, MD, PDAM
- **H2:** Areas of Focus → H3: Facial harmony & enhancement
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-jen-meng
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS, MAC
- **H2:** Areas of Focus → H3: Facial anatomy & medical skincare
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-chloe-wan
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS, MAC
- **H2:** Areas of Focus → H3: Skin rejuvenation & lasers
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

### /doctors/dr-say-wei-xian
- **H2:** Credentials & Qualifications → H3: Medical degree, MBBS, MAC
- **H2:** Areas of Focus → H3: Precise, natural-balanced results
- **H2:** Practising at Kaiteki → H3: Branch(es) — *data gap: `branches` is empty in doctors.ts, not yet assigned (docs/05 §9)*
- **H2:** Book a Free Consultation → H3: WhatsApp booking

---

## Part 3 — Current implementation status & gaps (read-only audit, 2026-07-18)

How the Next.js App Router codebase already implements the Part 1 fundamentals today, and the
ranked fixes to close the gap. **Headline:** the foundation is solid (non-www `metadataBase`,
correct `robots.ts`/`sitemap.ts`, self-referencing canonicals on every route except `/`,
exactly one `<h1>` per page, `/privacy` noindexed) — the two real gaps are **zero Open
Graph/Twitter tags site-wide** and **a missing canonical on the homepage**.

Audited: 2026-07-18. All paths relative to repo root.

## Root config

**`app/layout.tsx`** — static `metadata` export. Sets `metadataBase: new URL("https://kaiteki.my")` (non-www, correct), a title `template: "%s | Kaiteki Skin Aesthetic Clinic"` with `default: "Kaiteki Skin Aesthetic Clinic"`, and a site-wide `description`. **No `openGraph`, no `twitter`, no default `alternates.canonical`, no `robots` block** at the root. `<html lang="en-MY">` is set (good for locale signalling). No OG/Twitter image asset referenced anywhere in the codebase (`grep -rn "openGraph|twitter"` across `app/`, `components/`, `lib/` → zero hits).

**`next.config.ts`** — no `trailingSlash` set (Next defaults to no trailing slash, consistent with locked URL scheme). Non-www → apex redirect is handled via a `redirects()` host-matcher rule (`www.kaiteki.my` → `https://kaiteki.my`, permanent), not `next.config` canonicalization — correct mechanism, confirmed present. Large legacy 301 map present and looks complete per `docs/01`/`docs/04`. `/blog` currently temp-redirects (307/`permanent:false`) to `blog.kaiteki.my` — expected, matches "not yet migrated" state.

**`lib/site.ts`** — `site.url = "https://kaiteki.my"` (non-www, no trailing slash) — the single source of truth used by canonicals/JSON-LD.

## Per-route table

| Route | Title | Description | Canonical | OG/Twitter | Metadata method | Single H1? | Notes |
|---|---|---|---|---|---|---|---|
| `/` (`app/page.tsx`) | inherits default from layout | own `description` | **none** | none | static `metadata` | Yes | Home has a description override but **no `alternates.canonical`** — only page besides not-found without one |
| `/about` | "About Kaiteki" | yes | `/about` | none | static | Yes | Fully wired |
| `/concerns` | "Concerns" | yes | `/concerns` | none | static | Yes | OK |
| `/concerns/[slug]` | templated per concern | yes (from data) | `/concerns/{slug}` | none | `generateMetadata` (async) | Yes | Falls back to `{}` if slug not found (pre-notFound) — fine |
| `/treatments` | "Treatments" | yes | `/treatments` | none | static | Yes | OK |
| `/treatments/[category]` | templated | yes | `/treatments/{slug}` | none | `generateMetadata` | Yes (via `TreatmentView`) | OK |
| `/technology` | "Products & Technology — Devices & Injectables We Use" | yes | `/technology` | none | static | Yes | OK |
| `/technology/[slug]` | templated | yes | `/technology/{slug}` | none | `generateMetadata` | Yes (via `TechnologyView`) | OK |
| `/locations` | "Our Locations" | yes | `/locations` | none | static | Yes | OK |
| `/locations/[slug]` | templated | yes | `/locations/{slug}` | none | `generateMetadata` | Yes | Has `MedicalClinic` JSON-LD (good E-E-A-T/local-SEO signal) |
| `/doctors` | "Our Doctors" | yes | `/doctors` | none | static | Yes | OK |
| `/doctors/[slug]` | templated | yes | `/doctors/{slug}` | none | `generateMetadata` | Yes | Has `Physician` JSON-LD |
| `/skincare` | "Skincare — Kaiteki® Cosmeceuticals" | yes | `/skincare` | none | static | Yes | Has `ItemList`/`Product` JSON-LD |
| `/privacy` | "Privacy Policy" | **none** (title only) | `/privacy` | none | static | Yes | **Only route with explicit `robots: { index:false, follow:true }`** — correct for a legal/utility page |
| `/not-found.tsx` | inherits default | inherits default | none (expected — 404 shouldn't have one) | none | none (no `metadata` export) | Yes | No explicit `robots: {index:false}` — Next.js serves 404s with a 404 HTTP status automatically via `notFound()`, so noindex via meta isn't strictly required, but there's no belt-and-suspenders `robots` meta either |
| `app/robots.ts` | — | — | — | — | — | — | Exists, correct: `allow: "/"`, points `sitemap` and `host` at `site.url` (non-www) |
| `app/sitemap.ts` | — | — | — | — | — | — | Exists, correct: static + dynamic paths (treatments, doctors, concerns, branches, technology) built from same data as pages, uses `site.url`. **No `lastModified`, `changeFrequency`, or `priority` fields set** on any entry |

Every `[slug]`/`[category]` dynamic route uses `dynamicParams = false` + `generateStaticParams` (fully static-rendered, good for crawl budget) and returns `{}` from `generateMetadata` when the slug isn't found (page then calls `notFound()` — no metadata leak for 404s under dynamic routes).

**H1 check:** every single page/component checked (`page.tsx` files plus the two shared view components `TreatmentView.tsx` and `TechnologyView.tsx` that dynamic routes render into) has **exactly one `<h1>`**. No 0-H1 or multi-H1 pages found.

## Gaps & fixes needed (ranked)

1. **No Open Graph / Twitter Card metadata anywhere** (root layout or any page) — zero `openGraph`/`twitter` keys in the whole codebase. Social shares (WhatsApp link previews especially, given WhatsApp-only conversion) will render with no image/title/description card. **Highest priority** — add a root-level `openGraph`/`twitter` default in `layout.tsx` (site name, default OG image, `type: website`) plus per-route overrides on treatments/concerns/doctors/locations pages using their existing hero images.
2. **Home page (`/`) has no `alternates.canonical`** — every other indexable route sets one explicitly; home relies on nothing (not even inherited from layout, since layout sets no default `alternates`). Add `alternates: { canonical: "/" }` to `app/page.tsx` (or a layout-level default that pages override).
3. **No root-level default `alternates.canonical` or `robots` block in `layout.tsx`** — each page currently must remember to set its own canonical; there's no safety net for a future page that forgets one (as `/` already demonstrates).
4. **`/privacy` has no meta `description`** (title only) — minor, but every other route has one; SERPs will auto-generate a snippet instead.
5. **`sitemap.ts` entries omit `lastModified`/`changeFrequency`/`priority`** — not blocking, but `lastModified` in particular is a low-cost, high-value addition (ties to each item's `lastReviewed`/data update for treatments/concerns, aiding recrawl signals for a YMYL site).
6. **`not-found.tsx` has no explicit `robots: {index:false}` meta** — low priority since the route returns HTTP 404 via `notFound()`, but an explicit meta is a defensive best practice some crawlers still key off of.
