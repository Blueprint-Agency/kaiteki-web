# 03 — Competitor & Industry Analysis

> **Purpose.** A decision-useful teardown of the Malaysian medical-aesthetic competitive set, written to steer the Kaiteki (kaiteki.my) Next.js rebuild — what to **copy**, what to **beat**, and what to **avoid**. It exists to feed two downstream docs: the information architecture (`docs/04`) and the content/build backlog. Every recommendation is constrained by `docs/02-seo-guidelines-2026.md` (the SEO/AEO + Malaysian medical-advertising standard) — where a competitor tactic conflicts with MAB/MMC/PHFSA/PDPA rules, **the law wins** and the tactic goes in the "avoid" column.
> **Scope.** Primary subject = **Clinic Cleo** (the named benchmark). Secondary benchmarks = **Premier Clinic**, **Nexus Clinic**, **Beverly Wilshire Medical Centre**. Plus the wider Malaysian aesthetic SEO/AEO landscape (clinic competitors + the aggregators that own high-intent SERPs). **Date:** 2026.
>
> **⚠️ Superseded IA details (2026-07).** The IA/i18n recommendations in §5/§7 predate `docs/04`, which locks the final scheme: **`/locations/[branch-slug]`** (not `/branches/{city}`), **English unprefixed at the root** (no `/en/`), **`/zh` reserved next**, `/ms` a later reserve. Read any `/branches`, `/en/`, or `/ms/` mention through `docs/04 §2/§8/§10`. The copy/beat/avoid analysis itself stands.

---

## 1. Executive summary — what to copy, beat, avoid

The Malaysian aesthetic SERP is a two-tier fight: **clinic sites** (treatment-led pages + cost-guide blogs) and **aggregators** ([erufucare](https://www.erufucare.com/clinics/pico-laser/kuala-lumpur), [bookimed](https://us-uk.bookimed.com/), [whatclinic](https://www.whatclinic.com/), trustedmalaysia) that own most "best clinic" and "price guide" real estate. Almost no one combines **a concise, extractable answer** with **verifiable named-clinician authorship** — that gap is Kaiteki's wedge.

**COPY (proven patterns worth replicating):**
- **Premier's typed IA** — distinct route groups + sitemaps for treatments, concerns, locations, doctors ([sitemap_index](https://premier-clinic.com/sitemap_index.xml)); a real treatment × concern matrix.
- **The answer-first treatment template** (Premier + Nexus): *What is / How it works / Benefits / Suitable for / Procedure / Downtime / Side effects / Cost / FAQ / References* — ship as one reusable MDX layout.
- **Nexus's price transparency** — real RM range tables + "what affects pricing" explainers capture the dominant price-led intent ([Botox MY](https://www.nexus-clinic.com/face/botox-malaysia/)).
- **Premier's AI-crawler allowlist** in `robots.txt` (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) + "Key Takeaways" answer blocks ([robots.txt](https://www.premier-clinic.com/robots.txt)).
- **Cleo/BW/Nexus named-doctor E-E-A-T depth** — credentialed bios, LCP/MOH accreditation, KKLIU footer reference (kept *current*).

**BEAT (where every competitor is weak):**
- **Structured data** — Cleo has *zero* medical schema (Yoast defaults only); Premier/Nexus/BW omit `Physician` and `MedicalWebPage` with `reviewedBy`/`lastReviewed`. Ship full medical JSON-LD site-wide (cf. `docs/02 §3`). Cheapest, biggest win.
- **Per-article medical authorship** — Cleo publishes YMYL blog under an SEO account ("seo seo", `/author/seoaccess247/`); no competitor wires a named MMC-credentialed reviewer per page. This is the durable YMYL moat (`docs/02 §5.4, §7`).
- **Local architecture** — Cleo (4 branches) and Nexus (1) have **no location pages**. Kaiteki's **9 branches** across KL/Selangor/Johor/Sabah with per-branch `MedicalClinic` schema is a structural moat for local-pack + "near me" + AI local answers (`docs/02 §10`).
- **Performance** — beat WordPress/Elementor stacks (Cleo, Premier, BW) on Core Web Vitals by default with Next.js App Router + disciplined images (`docs/02 §2`); match Nexus (also Next.js) and beat it by dropping its third-party CRM widget.

**AVOID (tactics that are non-compliant, harmful, or low-quality):**
- **MAB-prohibited tactics** the leaders lean on — superlatives ("No.1 / strongest / best"), patient testimonials, before/after galleries, price/package *comparisons* (Cleo, NextMed, BW). Also drop Kaiteki's own legacy "Multi-Awards Winning / 16,000 patients" claims (`docs/02 §3, §5, §1 regulatory gate`).
- **Self-hosted `Review`/`AggregateRating` schema** (no SEO upside + legal risk — `docs/02 §3`).
- **Blog sprawl / AI-templated thin content** — Premier's 376+ celebrity posts, Nexus's batch-generated `-2` duplicates and junk slugs (`/blogs/25597-2/`, typo `/fraqtional-laser-resurfacing/`). Publish fewer, deeper, reviewer-bylined MDX.
- **Conversion clutter & expired compliance** — BW's 3+ duplicate service numbers and *expired* KKLIU (1598/EXP31.12.2025); Cleo's WhatsApp-omitting fragmented funnel (Appointlet + Linktr.ee + form).

**How Kaiteki wins (thesis):** *Be the most trustworthy, most extractable, most local source.* Out-cover competitors on compliant **depth** (full treatment × concern × 9-branch matrix), out-trust them on **named-clinician authorship + medical schema** (YMYL E-E-A-T no one else wires up), out-rank them locally in JB and Kota Kinabalu (thin competition, zero competitor location pages), and out-perform them technically (Next.js CWV) — all routed to a single frictionless **WhatsApp-first** CTA (+60 10-381 8170) that the WordPress incumbents bury.

---

## 2. Clinic Cleo (cliniccleo.com) — deep teardown

**Snapshot.** WordPress + Astra + Elementor 4.0.3, Yoast SEO, Cloudflare. 4 branches (Sri Hartamas, Subang Jaya, Kepong, Cheras) — all Klang Valley. Treatment-led IA, strong clinic-level authority, **technically and structurally a generation behind**. This is the named benchmark and the easiest to beat on the dimensions that matter most.

### URL structure & IA/nav
- **Nav** (mirrored in footer): Our Clinic, Our Doctors, Blog, Conditions, Contact Us + a **Treatments mega-dropdown**. Content grouped by **treatment/modality**, not patient **concern** — there is **no concern/condition page type** (the "Conditions" label folds into Treatments).
- **Treatments** sit in one flat folder: `/aesthetic-treatments/{slug}/` — e.g. [`/aesthetic-treatments/pico-laser-treatment-kuala-lumpur/`](https://cliniccleo.com/aesthetic-treatments/pico-laser-treatment-kuala-lumpur/), `/hifu-facelift/`, `/dermal-fillers-kl/`, `/finasteride-minoxidil-hair-loss-treatment-kl/`. Slugs are **keyword-stuffed with city/intent** (`-kl`, `-kuala-lumpur`). Hub at [`/aesthetic-treatments/`](https://cliniccleo.com/aesthetic-treatments/).
- **Doctors** at **root**: `/dr-famey-lee/`, `/dr-seok-wye-kitt/`, plus roster [`/our-doctor/`](https://cliniccleo.com/our-doctor/).
- **Blog posts at root with no `/blog/` hub** — e.g. [`/why-nose-thread-lifts-sometimes-need-adjustments/`](https://cliniccleo.com/why-nose-thread-lifts-sometimes-need-adjustments/); taxonomy split inconsistently: `/category/blog/{topic}/` for some, but `/category/weight-loss-treatments/` and `/category/uncategorized/` sit **outside** `/blog/`.
- **No per-location URLs** — 4 branches share one site (locations only in footer + form dropdown).
- **Legacy debt:** duplicate URLs resolve (`/pico-laser-treatment/` **and** `/aesthetic-treatments/pico-laser-treatment-kuala-lumpur/`); author/tag sitemaps stale (2020); duplicate marketing pages (`/medical-aesthetics-treatments-copy/`); body-copy typos ("agaist", "infomation").

### Page types
Home · Treatment `/aesthetic-treatments/{slug}/` · Treatments hub · Doctor roster + root `/dr-{name}/` · Blog (root + `/category/blog/{topic}/`) · Contact (multi-branch form) · Marketing landing pages · Legal. **External booking** via Linktr.ee + Appointlet.

### Content & E-E-A-T
- **Content approach:** treatment-led long-form prose written for keywords more than readers — benefit-led H1, bulleted indications, device pitch (StarWalker PQX, Juvederm, Teoxane), multiple H2/H3 per indication, embedded form, doctor roster, social proof. ~110+ blog posts, topically categorised. **Minimal answer-first formatting; no concern-first architecture.**
- **E-E-A-T — strong on clinician identity, catastrophic on editorial accountability:**
  - *Present:* named doctors with qualifications + MOH/LCP accreditation, each a branch Clinical Director (Dr Tan Choy Ling founder, Dr Raimie Rahmad, Dr Famey Lee, etc.); KKLIU 1875/EXP31.12.2026 in footer; MOH-accredited language; Google 5-star + partner logos.
  - *Absent/broken:* **blog authored by "seo seo" (`/author/seoaccess247/`)** — no medical reviewer, no "reviewed by", no MMC numbers, no last-reviewed dates, no citations, no editorial policy. Net: good clinic-level authority, **poor article-level trust** — a YMYL liability.

### Schema, design/UX, conversion, performance, AEO
- **Schema:** Yoast defaults only — `WebPage`, `WebSite` (with retired `SearchAction` searchbox), generic `Organization` (not `MedicalBusiness`), `BreadcrumbList`, `ImageObject`, `Article` (author "seo seo"), `Person` stub. **Missing: `MedicalClinic`/`LocalBusiness`, `Physician`, `MedicalProcedure`/`Service`, `Offer`, `FAQPage`, `MedicalWebPage`.**
- **Design/UX:** premium-styled but dated; treatment tiles, repeated "Book Free Consultation", lead form with branch selector, full-NAP footer.
- **Conversion:** multi-path and **fragmented** — Appointlet calendar + Linktr.ee + per-branch phone + web form, but **NO WhatsApp tap-to-chat** (real friction in the MY market). Free-consultation hook + RM400 Phototherapy incentive.
- **Performance:** Elementor 4.0.3 (3000+ markers) + Astra + GTM + legacy 2019 raster (non-WebP) imagery → heavy DOM, **Core Web Vitals-vulnerable on mobile**. robots.txt clean; sitemap well-formed.
- **AEO:** **weak/absent** — no `FAQPage`, no Q&A blocks, no answer-first summaries, no `MedicalWebPage`/`HowTo`/`speakable`. Long marketing prose only. **Wide-open AEO opening for Kaiteki.**

### Verdict
| | |
|---|---|
| **Strengths** | Named-doctor credential depth; visible KKLIU/MOH compliance; keyword-intent slugs; deep device-specific copy; sizeable categorised blog; clean Yoast technical baseline; free-consult incentive; social proof. |
| **Weaknesses** | Zero medical schema; blog authored by an SEO account (no medical reviewer/dates); no FAQ/AEO; no location pages or Geo schema; **no WhatsApp conversion**; aging Elementor/Astra CWV risk; duplicate/legacy URLs + stale sitemaps; no i18n; thin Conditions. |
| **What to beat** | (1) Ship full medical JSON-LD — Cleo has none. (2) Named MMC reviewer + last-reviewed date on every YMYL page. (3) Answer-first + FAQ on every treatment/concern. (4) `/locations/{branch}/` for all 9 branches with `LocalBusiness` schema. (5) Clean `/blog/{slug}` + `/treatments/{slug}` + `/concerns/{slug}` taxonomy, no stuffed/duplicate slugs. (6) WhatsApp-first CTA. (7) Next.js CWV. |

---

## 3. Benchmark clinics

### 3.1 Premier Clinic ([premier-clinic.com](https://www.premier-clinic.com)) — the IA & AEO role model
**Stack:** WordPress + Yoast + WooCommerce. **The most mature IA in the set.**
- **Key patterns to copy:** Typed custom-post-types each with their own sitemap — treatments `/our-services/{slug}/`, concerns `/skin-and-body-problems/{slug}/` (slug template `condition-causes-symptoms-treatments`), locations `/our-clinics/{branch}/`, doctors `/our-doctors/{name}/`, blog `/blog/{slug}/`. Clean **treatment × concern matrix** with strong interlinking. Tri-lingual i18n via clean subfolders (`/zh/`, `/ms/`) with hreflang.
- **Answer-first template** (~1300 words, rigidly consistent): *What is / How it works / Benefits / What problems / Video / Precautions / Side effects / Downtime / How much does it cost / Where can I go / Before & After / FAQ / Reference.* Rich JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`, `HealthAndBeautyBusiness`, `PostalAddress`, `OpeningHoursSpecification`, `Person`. **Deliberate AEO:** robots.txt allowlists GPTBot/ClaudeBot/PerplexityBot/Google-Extended; "Key Takeaways" blog summaries; references section.
- **Strengths:** 9 credentialed doctors (degrees/universities, SAAARM/MSAM memberships); 18 awards; price transparency; WhatsApp + form + phone; KKLIU 2632/EXP31.12.2026.
- **Gaps to beat:** **no `Physician`/`Person` medicalSpecialty schema on doctor pages**; **no per-article "medically reviewed by Dr X" byline/date**; WooCommerce + plugin weight → slower CWV than Next.js; **blog sprawl** (376+ posts, many thin celebrity "X tried Y"); 5 branches, **all Klang Valley — no Johor/East Malaysia** (Kaiteki's coverage advantage).

### 3.2 Nexus Clinic ([www.nexus-clinic.com](https://www.nexus-clinic.com)) — the stack & AEO benchmark
**Stack:** **Next.js (App Router)** + `next/image` — the same stack Kaiteki is building on, so a near-perfect structural benchmark. (Note: the brief's `nexusclinic.com.my` does **not** resolve; the live domain is the hyphenated `www.nexus-clinic.com`.)
- **Key patterns to copy:** Category hubs `/face/`, `/skin/`, `/hair/`, `/weight-loss/`, `/regenerative/` with treatments nested `/{category}/{treatment}-malaysia/` (e.g. [`/face/botox-malaysia/`](https://www.nexus-clinic.com/face/botox-malaysia/)). Doctors `/doctors/{firstname-lastname}/`. Consistent trailing slashes. **Best-in-class answer-first treatment page:** empathetic hook → plain-language definition ("Botox is the brand name for onabotulinumtoxinA…") → mechanism → transparent **pricing table** (selling vs promo, units, RM588–800/area, packages) → contraindications → long standalone-answer FAQ → **inline external authority citation** (ISAPS 2024 with a specific stat) — exactly the AEO pattern AI Overviews reward (`docs/02 §9`).
- **Strengths:** 3 named doctors with verifiable LinkedIn/Instagram + LCP/MOH language; radical price transparency; dual-rail conversion (booking widget + `wa.me` deep links + RM100 voucher hook); modern fast build; fresh 2026-dated blog targeting cost/comparison/"best clinic KL" queries.
- **Gaps to beat:** **single clinic (one KL location), zero location pages** — Kaiteki's biggest structural advantage; **no concern/condition taxonomy** (symptom intent only via blog); thin reviewer attribution (generic "Important Clinical Note", no per-page reviewer byline/schema); **editorial-QA failures to avoid** — duplicate `-2` posts, orphan `/blogs/25597-2/`, typo money-slug `/fraqtional-laser-resurfacing/`, off-topic medical posts; geo baked into every slug (`-malaysia`) hampers clean i18n; heavy third-party LeadConnector/GoHighLevel CRM (JS + PDPA consideration).

### 3.3 Beverly Wilshire Medical Centre ([beverlywilshiremedical.com](https://www.beverlywilshiremedical.com)) — E-E-A-T depth, IA cautionary tale
**Stack:** WordPress + Elementor (legacy). SGX-listed, ~14 yrs, surgery + aesthetics + medical tourism.
- **Key patterns to copy:** **Gold-standard named-doctor roster** — 10+ doctors grouped by specialty, each `/doctors/{slug}/` with real registrations (e.g. [Dato' Dr Abdul Jalil](https://www.beverlywilshiremedical.com/doctors/dato-dr-abdul-jalil-jidon/): "MD (UKM), M.Ch, …, Registered with the National Specialist Register, Academy of Medicine of Malaysia"). **True concern-vs-treatment taxonomy** in the Aesthetic mega-menu (Face/Skin/Body condition pages distinct from device pages). Education-led treatment pages with question-style H2/H3 + named device entities (PicoWay Zoom/Resolve, Ultherapy, Thermage). Clean `/doctors/` and `/location/` hubs.
- **Strengths:** deep credentialed medical team; strong brand/award signals; multi-branch WhatsApp deep-linking; carries a KKLIU reference (correct practice).
- **Gaps & cautions to beat/avoid:** **inconsistent legacy URLs** — duplicate flat (`/pico-laser-malaysia/`) vs nested (`/face/medical-facials/pico-laser/`) treatment pages (cannibalization); blog has **no `/blog/` prefix** (scattered root + `/news/` + `/category/blog/`); near-duplicate promo `/landing-page/` variants (incl. `-bm`/`-cn`); **expired KKLIU 1598/EXP31.12.2025** (a compliance lapse); generic Yoast schema only (no `Physician`/`FAQPage`/`MedicalProcedure`); answers **not** front-loaded, no FAQ accordions; per-branch pages are thin "contact-us-{city}" stubs; **heavily uses MAB-prohibited tactics** (testimonials, before/after, superlatives, price comparisons) — **do NOT copy these.**

---

## 4. Malaysian aesthetic SEO/AEO landscape

**Top players (clinics):** CLEO (benchmark), [Premier](https://www.premier-clinic.com), [Nexus](https://www.nexus-clinic.com), **NextMed** ([price-guide engine](https://www.nextmedclinic.com.my/pico-laser-price-in-malaysia/) — ranks for nearly every "{treatment} price Malaysia" via dedicated cost pages; "No.1" framing), **Dr Chong Clinic** ([clean `/our-treatments/{cat}/{treatment}/` + `/blog/`](https://www.drchongclinic.com/blog/ultherapy-vs-hifu-in-malaysia/), wins comparison queries), **Her Clinic** (`/blogs/{topic}-price-in-malaysia` engine), **Beverly Wilshire Clinic**, plus mid-tier Glojas / RJ / Clique / Millennium / Dr Jane / Dr K / Dr Kyo / Dr Soma each winning specific treatment/concern queries.

**Aggregators own most high-intent SERP real estate:** [erufucare](https://www.erufucare.com/clinics/pico-laser/kuala-lumpur) (programmatic `/clinics/{treatment}/{city}` "N Best … Price Guide & Reviews"), [bookimed](https://us-uk.bookimed.com/), [mymeditravel](https://www.mymeditravel.com/), [whatclinic](https://www.whatclinic.com/), fresha, doctoroncall, plus listicles [trustedmalaysia](https://www.trustedmalaysia.com/best-aesthetic-clinics-kl/) and 24local.

**Ranking-query notes.** High-intent queries are overwhelmingly **price- and location-led**: "{treatment} price/cost Malaysia", "{treatment} KL/{city}", "best aesthetic clinic KL". SERPs split between **aggregators/listicles** (top "best/price guide" slots) and **clinic treatment pages + cost-guide blogs**. **Comparison/decision** queries (Ultherapy vs HIFU, filler vs thread lift) are won by **clinic blogs** with tables. **Safety/informational** queries pull device-specific, **Fitzpatrick-aware** detail. Recurring ranking entities: Pico (StarWalker PQX, PicoWay, Fotona), HIFU vs Ultherapy/Thermage, Profhilo/Rejuran/Plinest, Juvederm/Radiesse/Ellanse, Onda/CoolSculpting. *Kaiteki's legacy `aging.html` already ranked for "HIFU Malaysia price" — equity to preserve via 301 migration (`docs/02 §1, §5.12`).*

**AI-citation notes.** For these queries Google surfaces **AI Overviews** that synthesize **RM price ranges + cost factors + safety caveats**, drawn from clinic blog guides (NextMed, Her Clinic, Dr Chong, Nexus, Glojas) and aggregator price-guides — **not** from terse landing pages. Consistently cited passages are the **extractable, structured** ones: numeric ranges, "3–6 sessions", "downtime resolves within 24–48h", "safe for Fitzpatrick III–V", "only LCP-licensed doctors may operate medical-grade lasers". **Two exploitable patterns:** (1) answer engines reward concise lead answers + question headers + tables + named clinical sourcing (`docs/02 §4, §9`); (2) **almost none of the currently-cited sources carry verifiable named-clinician authorship or MMC credentials** — a compliant, clinician-attributed, entity-rich Kaiteki article becomes the more trustworthy citable source. *Caveat: live AI-engine output was inferred from SERP composition — re-verify with live checks.*

**Common URL/IA patterns.** Two dominant models: **(1) Clinic sites** — flat/shallow treatment silos (`/aesthetic-treatments/{treatment}-{city}/`, `/our-services/{slug}/`, `/our-treatments/{cat}/{treatment}/`, `/{category}/{treatment}-malaysia/`) with a `/blog/` for guides; slugs append geo/intent tokens (`-kl`, `-malaysia`, `-price-malaysia`, `-2026`); concern entry-points common. **(2) Aggregators** — programmatic geo × treatment matrices (`/clinics/{treatment}/{city}`). Kaiteki's **current** site is legacy `.html`/`.php` (`pico-laser-treatment.html`, `our-clinics.php`, `cheras.php`) with blog on subdomain `blog.kaiteki.my`; rebuild target is clean `/treatments/{slug}`, `/concerns/{slug}`, `/branches/{city}`, `/blog/{slug}`.

---

## 5. Comparison matrix

| Dimension | Clinic Cleo | Premier Clinic | Nexus Clinic | Beverly Wilshire | **Kaiteki target** |
|---|---|---|---|---|---|
| **Stack** | WP + Elementor 4.0.3/Astra | WP + WooCommerce | **Next.js (App Router)** | WP + Elementor (legacy) | **Next.js App Router + in-repo MDX** |
| **URL structure** | Flat `/aesthetic-treatments/{slug}/`, stuffed slugs, duplicates | Typed CPTs, clean subfolders, i18n | `/{category}/{treatment}-malaysia/`, geo-in-slug, some junk slugs | Inconsistent flat **vs** nested dupes | `/treatments/{slug}` · `/concerns/{slug}` · `/branches/{city}` · `/blog/{slug}`; locale-neutral slugs, `/en/` `/ms/` |
| **IA / nav** | Treatment-only; no concern type | Treatment × concern matrix (best) | Treatment-category only; no concern/location | Hybrid surgery + treatment + concern | **Treatment × concern × location** tri-axis, interlinked |
| **Page types** | Home/treatment/doctor/blog/contact | + concern + location + doctor + offers | + category hub; no concern/location | + concern + location stubs + tourism | Home/treatment/concern/branch×9/doctor/blog |
| **Doctors / E-E-A-T** | Strong bios; **blog by "seo seo"** | 9 credentialed; **no per-article reviewer** | 3 named, verifiable; thin reviewer | 10+ NSR-registered; **no per-page reviewer** | Named authors **+ "Medically reviewed by Dr X, MMC reg, {date}"** per page |
| **Schema** | Yoast defaults only (no medical) | `Service`+`FAQPage`+`HealthAndBeautyBusiness`; **no `Physician`** | Likely partial (unconfirmed) | Generic Yoast only | **`MedicalBusiness` + per-branch `MedicalClinic` + `Physician` + `MedicalWebPage`(reviewedBy/lastReviewed) + `Service`/`MedicalProcedure` + `BreadcrumbList`**; FAQ content not rich-result chasing |
| **Design / UX** | Premium but dated, heavy DOM | Polished, conventional, template-driven | **Modern, mobile-first, fast** | Polished but image-heavy/popups | Modern, fast, accessible; original clinic media (no stock) |
| **Conversion** | **No WhatsApp**; Appointlet/Linktr.ee/form | WhatsApp + form + phone | Booking widget + WhatsApp + voucher | WhatsApp + form + phone (cluttered) | **WhatsApp-first** single pre-filled `wa.me` (+60 10-381 8170), branch-aware, server-rendered `<a>` |
| **Blog** | ~110 posts, root URLs, no `/blog/`, SEO-authored | 376+, sprawl/thin celebrity posts | High-volume, junk slugs, off-topic | Scattered root + `/news/`, no `/blog/` | Curated, evergreen, **reviewer-bylined MDX** at `/blog/{slug}`; prune on migration |
| **AEO** | **Absent** | **Strong** (FAQ + AI-crawler allowlist + Key Takeaways) | **Strong** (answer-first + citations + pricing) | Partial (Q-style H2, no front-loaded answers) | **Best-in-class**: inverted-pyramid answers, Q-headers, tables, RM ranges, **clinician-attributed**, AI-crawler allowlist |
| **Local / branches** | 4 KL, **no location pages** | 5 KL, location pages | **1 KL, no location pages** | 4–5, **thin** stubs | **9 branches** (KL/Selangor/JB×2/Sabah), genuinely unique per-branch pages + `LocalBusiness` schema |
| **Compliance** | KKLIU current; but uses superlatives | KKLIU current | LCP/MOH language | **Expired KKLIU**; uses prohibited tactics | **Compliant-by-design**: current KKLIU, MMC reg, no superlatives/testimonials/before-after, PDPA-clean |

---

## 6. Opportunity gaps for Kaiteki (prioritized)

**P1 — do first (foundational / highest-leverage, mostly cheap relative to impact):**
1. **Medical structured data site-wide** *(technical/AEO — `docs/02 §3`)*: emit `Organization`/`MedicalBusiness`, per-branch `MedicalClinic` (×9, with NAP/geo/hours), `Physician` per doctor (MMC reg), `Service`/`MedicalProcedure`+`Offer` on treatments, `MedicalWebPage` (with `reviewedBy`/`lastReviewed`), `BreadcrumbList`, wired in one `@id` graph. **Cleo has none; Premier/Nexus/BW omit `Physician`+`MedicalWebPage`.** Biggest cheapest win. *(Skip self-hosted `Review`/`AggregateRating` and don't chase FAQ rich results — `docs/02 §3`.)*
2. **Per-article named medical authorship** *(E-E-A-T/YMYL — `docs/02 §5.4, §7`)*: every treatment/concern/blog page carries a named doctor author **and** "Medically reviewed by Dr {name}, MMC {reg}, {date}" + `Physician`/`Person` schema. **No competitor does this** — the durable moat. Never publish under an SEO account (Cleo's fatal flaw).
3. **Per-location architecture** *(local — `docs/02 §10, §5.11`)*: `/branches/{city}` for all 9 (Mont Kiara, Cheras, Bukit Jalil, Four Seasons KL, PJ/SS2, Kota Kemuning, Southkey JB, Pelangi JB, Kota Kinabalu) — unique NAP, doctors, devices, landmarks, local FAQ, branch `LocalBusiness` schema, branch-specific WhatsApp CTA. **Owns JB + Kota Kinabalu where competition is thin.** Avoid the doorway/template trap — enforce unique fields via typed data (`docs/02 §5.6`).
4. **Compliant-by-design content governance** *(content/compliance — `docs/02 §1 regulatory gate, §5`)*: no superlatives, testimonials, before/after, or price comparisons; current KKLIU + MMC reg in footer (beat BW's expired one); human medical-review gate before publish. **A durable ranking advantage** (lower spam-update/manual-action risk + people-first alignment) that drops Kaiteki's own legacy "16,000 patients/Multi-Awards" claims.

**P2 — launch / first iteration:**
5. **Answer-first AEO wedge** *(AEO — `docs/02 §4, §9`)*: every treatment/concern page leads with a 40–60-word direct answer, question-style H2/H3, comparison tables, **compliant RM price RANGES + cost factors** (no "cheapest"/comparison claims), single source of truth in MDX frontmatter so prices never drift (avoid Nexus's drift risk). **Pair extractable answers WITH clinician authorship — the combination no competitor has.**
6. **Concern-pillar topic clusters** *(content/internal linking — `docs/02 §5.1, §6`)*: build `/concerns/{slug}` (melasma, acne scars, pigmentation, hair loss, skin laxity, vagina laxity) → treatment spokes → branch availability, bidirectionally linked. **Nexus and Cleo lack a concern axis entirely.**
7. **AI-crawler allowlist + reusable treatment template** *(AEO/technical)*: copy Premier's `robots.txt` allowlist (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) and ship the answer-first template as one MDX layout for consistency.
8. **Price-transparency content (within MAB limits)** *(content/AEO)*: compliant RM-range + cost-factor explainers intercept the dominant "{treatment} price Malaysia" intent and the AI Overviews built on it (currently owned by NextMed/Her Clinic/aggregators).

**P3 — refinement:**
9. **Performance as a deliberate differentiator** *(technical — `docs/02 §2`)*: Next.js + AVIF/WebP + RSC beats Cleo/Premier/BW WordPress stacks on CWV; beat Nexus by avoiding its third-party CRM widget (keep booking first-party for INP + PDPA).
10. **Bilingual / Malay-term coverage** *(content — `docs/02 §1 i18n, §5`)*: `/en/` + `/ms/` to capture Malay high-intent terms (jerawat, rawatan melasma, harga) that English-only competitors and aggregators rarely target. (Kaiteki currently runs EN + 中文 — add BM.)
11. **Authority-consolidating blog migration** *(technical/content — `docs/02 §1, §5.12`)*: 1:1 301 `blog.kaiteki.my/{slug}` → `kaiteki.my/blog/{slug}`, prune/consolidate thin posts, retire any legacy testimonial/before-after posts, wire into clusters. Moving off the subdomain onto the main domain is itself an authority win.

---

## 7. Implications for Information Architecture (feeds docs/04)

Recommended URL/IA patterns for `docs/04`, with the competitor reason for each decision:

**ADOPT (validated by Premier; absent or broken in Cleo/Nexus/BW):**
- **Tri-axis typed IA with distinct route groups:** `/treatments/{slug}`, `/concerns/{slug}`, `/branches/{city}`, `/doctors/{name}`, `/blog/{slug}`, each with its own typed data and sitemap segment. *Why:* Premier's typed CPT model is the cleanest, holds rankings, and supports the treatment × concern matrix. Cleo and Nexus have no concern axis; Cleo, Nexus, BW have weak/no location axis.
- **Shallow 2–3 level hierarchy, one canonical page per intent:** treatment pages = commercial/educational ("{treatment} Malaysia"); branch pages = local ("aesthetic clinic {city}"); cross-link treatment → branch availability rather than building a full {treatment}×{branch} cross-product (`docs/02 §4 keyword map, §5.6`). *Why:* avoids the cannibalization BW created with flat-vs-nested dupes and the doorway risk of templated city pages.
- **`/blog/{slug}` on the main domain with a real hub** (not at root, not on a subdomain). *Why:* Cleo and BW scatter posts at root with no `/blog/` hub and inconsistent `/category/` splits — poor information scent; Kaiteki's subdomain→`/blog` migration consolidates authority.
- **Reusable answer-first treatment MDX layout** (What is / How it works / Benefits / Suitability / Procedure / Downtime / Side effects / Cost / FAQ / References). *Why:* Premier + Nexus prove this is the AEO-winning, consistency-enforcing pattern.

**DIFFER (deliberately diverge from the competitive norm):**
- **Locale-neutral slugs + `/en/` `/ms/` prefixes — do NOT bake geo into slugs.** *Why:* Cleo (`-kl`, `-kuala-lumpur`) and Nexus (`-malaysia` on every slug) hamper clean i18n; locale prefixes keep slugs portable and additive when BM launches (`docs/02 §1 i18n`).
- **WhatsApp-first single CTA**, server-rendered `wa.me` `<a href>`, branch- and treatment-aware pre-filled message, sticky button — not full-screen interstitials. *Why:* Cleo omits WhatsApp entirely (friction); BW clutters with 3+ numbers; keep one frictionless path (`docs/02 §1 rendering, §2`).
- **No keyword-stuffed or duplicate slugs; strict slug linting + canonical/redirect discipline** in the in-repo MDX pipeline. *Why:* directly avoids Cleo's duplicate legacy URLs and Nexus's `-2`/orphan/typo junk slugs.
- **Compliance + medical-schema baked into the templates, not bolted on.** *Why:* every competitor under-invests here; making `Physician`/`MedicalClinic`/`reviewedBy`+`lastReviewed` and the KKLIU/MMC footer structural guarantees the moat is consistent across all 9 branches and every page.

**Net IA target:** `kaiteki.my/{treatments|concerns|locations|doctors|blog}/{slug}`, English-first **unprefixed at root** with `/zh` (then `/ms`) reserved *(final scheme locked in `docs/04` — supersedes the `/branches` + `/en/` drafts above)*, flat (≤3 clicks, all real `<a href>`), one intent per URL, concern→treatment→branch internal-linking clusters, and a medical-schema + named-reviewer layer on every page.

---

*Sources: competitor teardowns of [cliniccleo.com](https://cliniccleo.com), [premier-clinic.com](https://www.premier-clinic.com), [nexus-clinic.com](https://www.nexus-clinic.com), [beverlywilshiremedical.com](https://www.beverlywilshiremedical.com); Malaysian SERP/AEO landscape review; and the Kaiteki standard in `docs/02-seo-guidelines-2026.md`. AI-citation observations were inferred from SERP composition and source types — re-verify with live AI-engine checks before relying on specific citation claims.*
