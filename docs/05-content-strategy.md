# 05 — Content Strategy

> **Purpose.** The authoritative content and messaging specification for the kaiteki.my rebuild: what every page type says, who writes and medically reviews it, how the E-E-A-T program works, which topic clusters launch, how the legacy blog is triaged into `/blog`, and the compliance operations (KKLIU, publish gate, PDPA) that make it all legal.
> **Scope.** Page-by-page content specs, voice/language rules, the doctor/E-E-A-T program, topic-cluster map, FAQ/AEO plan, blog-migration triage, KKLIU/PDPA operations, ground-truth data collection, and production cadence. Copy itself (the actual page prose) is produced against these specs; design/layout is `docs/06`; implementation mechanics (frontmatter validation, CI, schema emission) are `docs/07`.
> **How it satisfies `docs/02`.** Implements §4 (one-intent keyword map, titles/headings), §5 (clusters, people-first depth, §5.9 FAQs, §5.12 blog migration), §7 (E-E-A-T program), §8 (YMYL/Malaysian compliance — the hard gate), §9 (AEO: LeadAnswer capsules, fan-out coverage, entity resolution), §10 (locally-unique branch content), §11 (compliant reputation), §12.13 (PDPA consent). Where general SEO advice and Malaysian medical-advertising law (MAB/KKLIU, MMC, PHFSA, PDPA) conflict, **the law wins**.
> **Date:** 2026-07.

---

## 1. Content principles

1. **The law is the gate, not a reviewer note.** Every page classifies as either **advertisement** (treatments, locations, promotions, home) or **educational** (blog, concern guides in informational register) before a word is written (`docs/02 §8.3`). Advertisement pages carry KKLIU + promoter details and pass MAB screening; educational pages carry references, disclaimer, and **no price/offer/booking pressure**. No testimonials, no before/after, no superlatives, no outcome guarantees — anywhere (`docs/02 §8.1`).
2. **One intent per URL.** Concern pages own informational/commercial-investigation intent; treatment pages own commercial-transactional intent; branch pages own local intent; blog owns long-tail questions (`docs/02 §4`). Content that chases another page's intent gets cut or moved — this is the anti-cannibalization rule.
3. **Answer-first, extraction-ready.** Every answerable section opens with a 40–60-word self-contained, MAB-safe capsule (the `<LeadAnswer>` convention, `docs/02 §9.3`) followed by depth: lists, tables, question-form H2/H3s. FAQ rich results are gone (2026-05) — FAQ content exists for AI extraction and PAA, not SERP chrome.
4. **Named clinicians on everything YMYL.** Every treatment/concern/blog page carries a real author and/or "Medically reviewed by Dr {Name}, MMC {reg}, {date}" — the moat no Malaysian competitor has wired (`docs/03` P1 #2, `docs/02 §7`). No SEO-account bylines, ever.
5. **Depth over volume, uniqueness over templating.** Fewer, deeper, reviewer-bylined pages; typed data enforces per-page unique fields so 9 branches × 15 treatments never becomes a doorway farm (`docs/02 §5.6`).
6. **Written once, structured for reuse.** One typed record per doctor/branch/treatment powers page copy, bylines, schema, and the footer compliance line — content and structured data share one source of truth (`docs/02 §8.3`).

---

## 2. Voice, tone & compliant language

- **Voice:** calm, clinical, plain-language Malaysian English. Warm but factual — "consultation-room explanation", not ad copy. Second person for guidance ("you may notice mild redness"), first-person-plural for clinic process ("at Kaiteki we assess…").
- **Reading level:** target ~grade 8–10 for body copy; clinical precision where it matters (device names, contraindications). Define jargon on first use.
- **Localisms:** RM for prices (if ever shown), Malaysian place spellings, `en-MY` conventions. Capture future BM terms (jerawat, rawatan melasma, harga) as frontmatter `keywords` now so the `/zh`→`/ms` future inherits them.
- **Compliant phrasing patterns** (`docs/02 §8.1` — enforce via lint):

| Prohibited (lint-fail) | Compliant replacement |
|---|---|
| "best / No.1 / leading / award-winning clinic" | "an MOH-licensed clinic with 9 branches across Malaysia" |
| "guaranteed results / 100% effective / permanent" | "results vary between individuals" |
| "painless / risk-free / no downtime" | "discomfort and downtime vary; risks are explained during consultation" |
| "removes wrinkles / cures acne" | "may help reduce the appearance of…" |
| "better than {competitor/treatment}" | neutral factual comparison of mechanisms only, no winner |
| "before & after gallery", patient quotes | clinic/device/team photography, doctor-explained procedure walkthroughs |

- **Prohibited-words lint seed** (regex over MDX bodies **and** titles/descriptions, `docs/02 §8.1`): `best|no\.? ?1|number one|leading|top|cheapest|guaranteed?|100%|permanent(ly)?|painless|risk[- ]free|no side effects|instant results?|miracle|cure[sd]?|testimonial|before.{0,4}after` — plus a whitelist mechanism for legitimate uses ("do **not** expect permanent results" passes on human review). Final list is a `docs/07` config artifact.

---

## 3. Page-by-page content specs

Global rules: title template `%s | Kaiteki Skin Aesthetic Clinic` (homepage uses the default); one H1 per page; unique meta description (~150–160 chars) naming the page's distinct subject + a soft WhatsApp value prop; every page ends within its template's internal-link slots (no orphan sections). Schema per page type is already fixed in `docs/04 §3`.

### 3.1 Treatment page (`/treatments/[slug]`) — the master template

**Register:** advertisement (KKLIU + promoter details + disclaimer). **Intent:** commercial-educational, "{treatment} Malaysia".

| Element | Spec |
|---|---|
| Title | `{Treatment} in Malaysia — What It Involves, Suitability & Branches` (never "Best {treatment}") |
| H1 | `{Treatment} at Kaiteki` or `{Treatment}: How It Works & What to Expect` |
| LeadAnswer | 40–60 words: what it is, what it addresses, session expectations — conservative, no efficacy claims. E.g. "HIFU (high-intensity focused ultrasound) is a non-surgical treatment that delivers focused ultrasound energy to deeper skin layers. It is commonly used for skin-lifting concerns. A consultation is required to assess suitability; results vary between individuals." |
| H2 outline | What is {treatment}? · How it works · What concerns it may address (→ concern links) · Suitability & who should avoid it · The procedure at Kaiteki (first-hand, doctor-voiced) · Downtime & aftercare · Risks & side effects · Sessions & cost factors (see §11.1) · FAQs (3–6) · References |
| Byline block | "Medically reviewed by Dr {Name}, MMC {reg} — {date}" + author where distinct |
| Internal-link slots | ≥2 concern pillars (contextual, in-body) · branch availability list ("HIFU is available at our {Branch} branch" → `/locations/*`) · 2–3 related treatments · 1–2 blog spokes |
| CTA | Sticky + end-of-page WhatsApp: pre-fill `Hi Kaiteki, I'd like a free consultation about {Treatment}.` + PDPA notice line (§8.3) |
| Compliance footer | KKLIU no. + expiry, promoter name/address/phone, device registration statement where applicable, standing medical disclaimer |

### 3.2 Concern page (`/concerns/[slug]`) — the pillar

**Register:** educational-leaning (verify per-page with compliance whether concern pages fall in KKLIU scope once copy exists — they link to commercial pages but should read as patient education). **Intent:** informational/commercial-investigation, "{concern} treatment / causes".

- Title: `{Concern}: Causes, Types & Treatment Options`; H1 similar.
- LeadAnswer: define the concern + the reassurance that assessment determines treatment.
- H2 outline: What is {concern}? · Common causes · Types/grades (tables where real) · Treatment options at Kaiteki (→ every relevant treatment, the hub role, `docs/04 §6.1`) · Prevention & self-care · When to see a doctor · FAQs · References.
- Links: OUT to every treatment that addresses it + 3–5 blog spokes + its category page (`/concerns/skin` or `/concerns/face`); every spoke links back.
- CTA: softer — "Not sure what's causing it? Message us on WhatsApp for a free consultation."

### 3.3 Branch page (`/locations/[branch-slug]`)

**Register:** advertisement. **Intent:** local — "aesthetic clinic {area}". The anti-doorway rule (`docs/02 §5.6, §10.3`) is enforced by required unique fields; a branch page cannot build without them:

- Unique intro (hand-written, names the neighbourhood), exact NAP byte-identical to GBP, embedded map + written directions, parking/transport, landmarks, opening hours, **doctors at this branch** (→ profiles), **treatments actually offered here** (→ treatment pages), branch photos (original), 2–3 branch FAQs ("Is parking available at {branch}?"), branch-specific WhatsApp pre-fill: `Hi Kaiteki {Branch}, I'd like to book a free consultation.`
- Title: `Aesthetic Clinic in {Area} — Kaiteki {Branch}`; H1: `Kaiteki {Branch/Area}`.

### 3.4 Doctor profile (`/doctors/[doctor-slug]`)

**Register:** factual/credential (no service promotion beyond fact). Fields (also the typed-data spec, §9): full name + photo, qualifications (MBBS/MD etc.), **MMC registration number**, APC status, LCP credentialing + privileged procedures, years in practice, branches (→ links), special interests, languages spoken, authored/reviewed content (auto-listed), `sameAs` (verifiable profiles). Bio voice: factual third person; zero superlatives; no fabricated boards (`docs/02 §8.2`).

### 3.5 Hubs & remaining pages (compact spec)

| Page | Intent / register | Content spec | Key links |
|---|---|---|---|
| Home `/` | brand/navigational | Positioning line (factual: "MOH-licensed skin & aesthetic clinic, 9 branches across Malaysia"), concern entry points, top treatments, branch strip, doctor trust block, latest guides | all five axes |
| `/treatments` hub | index | Grouped by the 5 nav categories (`docs/04 §4.1`), 1-sentence compliant descriptor each | every treatment |
| `/concerns` hub | index | Grouped Skin / Face & Body; question-led framing ("What brings you in?") | every concern + 2 categories |
| `/concerns/skin`, `/concerns/face` | broad category pillar | Overview + sub-concern cards + how assessment works | sub-concerns, top treatments |
| `/locations` hub | local locator | All 9 branches with city-specific anchors, region grouping (Klang Valley / Johor / Sabah), map | every branch |
| `/doctors` hub | E-E-A-T roster | Full roster with credentials summary; the "who is behind this site" page | every profile |
| `/about` | trust | Brand story, operating entity + registration no., mission, medical team link, facility licensing (PHFSA), memberships/awards (substantiated only) | doctors, locations |
| `/promotions` | advertisement (strictest) | Only MAB-compliant offers: accurate, complete, no fake urgency/was-now games (`docs/02 §8.3`); each promo carries its own KKLIU scope check | relevant treatments |
| Blog post `/blog/[slug]` | informational | LeadAnswer, question H2s, references, author + reviewer, **no price/offer, no hard booking CTA** — one soft end-link to the relevant pillar | up to pillar + 2–3 related posts |
| `/contact` | navigational | All-branch NAP + WhatsApp; PDPA notice; no stored-data form at launch | locations, privacy |
| `/privacy`, `/terms` | legal | §8.3 PDPA content set | footer only |

---

## 4. E-E-A-T program

### 4.1 Roles & workflow (every YMYL page)

1. **Drafter** (agency/writer, AI-assisted allowed per `docs/02 §5.7`) produces copy against the §3 spec.
2. **Clinician input**: a Kaiteki doctor adds first-hand procedure detail ("in our practice we typically…") — the Experience signal that survives MAB limits (`docs/02 §7.7`).
3. **Medical reviewer** (named, MMC-registered, LCP-credentialed **for the procedures discussed** — `docs/02 §7.2`) reviews, corrects, and signs off. Reviewer ≠ drafter.
4. **Compliance screen** (MAB checklist, §8.2) — may be the same doctor if MAB-experienced, else the compliance advisor.
5. Frontmatter records it: `author`, `reviewedBy`, `lastReviewed`, `signedOffBy` — rendered as the byline block and mirrored into `MedicalWebPage.reviewedBy/lastReviewed` (schema emission in `docs/07`).

### 4.2 Trust elements (site furniture)

- **Footer, every page:** operating entity + company registration, current KKLIU reference, MMC line, PDPA/privacy link, `sameAs` socials (Instagram `@kaiteki.my`, Facebook `mykaiteki`), GBP links.
- **Credentials presentation rules:** only substantiated, verifiable facts (licenses under PHFSA, device registrations under the Medical Device Act 2012, real memberships). Kill the legacy "Multi-Awards Winning / 16,000 patients" claims unless individually substantiated and MAB-cleared (`docs/03` §1 AVOID).
- **Citations:** every substantive health claim links a primary source (MOH CPG, MMC — cite the **Sept 2025 Guideline on the Ethical Aspects of Aesthetic Medical Practice**, PubMed, WHO); references stored in frontmatter, rendered as a References block (`docs/02 §7.5`).
- **Disclaimer component** on every treatment/concern/blog page: general information, not medical advice, results vary, risks discussed at consultation.

---

## 5. Topic clusters & launch content map

Concern pillars are the hubs (`docs/04 §6.1`). Initial cluster map — spoke topics are **proposed**, to be validated against Ubersuggest/GSC/PAA and real WhatsApp enquiries before drafting:

| Concern pillar | Treatments (spokes) | Blog spokes (launch candidates) |
|---|---|---|
| `acne` | pico-laser, microneedling, exosome-therapy | Acne scar types explained · Is pico laser suitable for acne scars? · Microneedling downtime & aftercare · Why adult acne happens |
| `pigmentation` | pico-laser, skin-booster | Melasma vs sun spots vs PIH · Pico laser on Asian skin tones (Fitzpatrick III–V) · Why pigmentation recurs · Sunscreen habits that matter in Malaysia |
| `aging` | hifu, ultherapy, fotona-4d, bio-stimulator, skin-booster | HIFU vs Ultherapy: how they differ · What collagen stimulation actually does · Skin boosters: what to expect · Bio-stimulators explained |
| `fine-lines-wrinkles` | hifu, ultherapy, skin-booster, microneedling | Expression lines vs static wrinkles · When to consider energy-based treatments |
| `face-lifting` | hifu, ultherapy, fotona-4d, onda | Non-surgical lifting options compared (neutral) · What "downtime" really means |
| `face-contouring` | hifu, radiofrequency, coolsculpting | Face vs body contouring: different tools · Double chin: causes & options |
| `enlarged-pores` | microneedling, pico-laser, radiofrequency | Do pores open and close? Myths vs physiology · Oil control & pore appearance |
| `dark-eye-circles` | skin-booster, dermav, radiofrequency | Types of dark eye circles (pigment vs vascular vs structural) · Sleep, screens & under-eyes |
| `body-slimming` | coolsculpting, fat-freezing, onda | How fat freezing (cryolipolysis) works · Fat reduction vs weight loss · CoolSculpting vs generic fat freezing (brand vs method, factual) |
| `hair-loss` | exosome-therapy | Male vs female pattern hair loss · When hair shedding is normal · Exosome therapy for hair: current evidence |

- `tattoo-removal` and `double-eyelid` are transactional treatment pages outside the concern mesh (cross-linked from pico-laser and face pillars respectively, per `docs/04 §10.3`).
- Comparison spokes ("X vs Y") are the SERP gap `docs/03 §4` identified — write them as neutral mechanism comparisons, never "which is better" verdicts.

**Launch priority (P0 = must exist at cutover, because a 301 lands on it):** all 15 treatment pages, all 10 concerns + 2 category pages, all 9 branch pages, home, about, contact, promotions, privacy — these are `docs/04 §9` redirect targets and cannot 404. **P1 (launch or fast-follow ≤4 weeks):** doctors hub + available profiles, terms, top ~10 blog spokes (one per pillar), migrated keep-set posts. **P2 (quarters 1–2):** remaining spokes, comparison guides, category depth.

---

## 6. FAQ / AEO content plan

- **Sourcing:** real WhatsApp enquiries (mine the clinic's chat history — client action, §9), People-Also-Ask for each priority query, Ubersuggest question reports, and the fan-out set per treatment: cost factors, safety, downtime, candidacy, alternatives, aftercare, results timeline (`docs/02 §9.4`).
- **Format:** question-form H3 exactly as patients phrase it ("Is HIFU painful?", "How many pico laser sessions will I need?"); answer opens with the 40–60-word standalone capsule; 3–6 FAQs per treatment/branch page, more on pillars. Malaysian-specific angles (halal/ingredient concerns, Asian skin suitability, RM cost factors) are first-class questions (`docs/02 §5.9`).
- **Markup:** `FAQPage` JSON-LD optional (entity/extraction signal only — rich results removed 2026-05). Zero engineering effort on rich-result eligibility.
- **Baseline audit:** before launch, from Malaysian IPs, log ~20–30 priority queries per language: AIO present? who's cited? is cliniccleo cited? Re-run quarterly as the AEO scoreboard (`docs/02 §9.10`).

---

## 7. Blog migration triage (`blog.kaiteki.my` → `/blog`)

**Source:** `kaitekim_blog2.sql.gz` (WordPress SQL dump, repo root) via the `docs/00 §4` pipeline (Docker WP → `wp export` WXR → MDX + media). Triage happens on the extracted inventory joined with GSC Pages + Ubersuggest backlink data.

**Decision tree (per post, in order):**
1. **MAB screen:** testimonial/before-after/superlative-led post? → **retire (410)** unless the underlying topic is salvageable by full rewrite → treat as new draft, old URL 301s to the rewrite.
2. **Equity check** (GSC clicks/impressions 12mo, backlinks, current rankings): high-equity → **keep + update** (medical review, LeadAnswer added, links rewritten, frontmatter completed).
3. **Thin/duplicate/overlapping** with a stronger post or pillar → **merge** (fold unique content in; 301 old → merged target).
4. **Off-topic/no equity/no fit** → **410**.
5. Every **kept** post: assign cluster (`concerns`/`treatments` frontmatter tags), author + reviewer, rewrite internal links, add to related-posts graph.

**Output artifacts (blocking for `docs/07` implementation):**
- `blog-triage.csv` — columns: legacy URL · title · decision (keep/update/merge/rewrite/410) · target URL · cluster tags · reviewer · notes.
- Per-post 301/410 rows appended to the `docs/04 §9.8` map.

**Internal-link rewrite rules:** `blog.kaiteki.my/*` → `/blog/*`; any legacy `kaiteki.my/*.html|.php` body link → its `docs/04 §9` target; strip tracking params; download and re-home `wp-content/uploads` media referenced in kept posts (optimize per `docs/02 §2`); external links pass a dead-link check.

---

## 8. Compliance operations

### 8.1 KKLIU workflow (start now — long-lead, `docs/00 §6`)

1. **Scope:** advertisement pages need MAB approval — treatments, locations, promotions, home (and any ad-register page). Confirm the exact page set with the MAB-experienced advisor; blog/educational pages stay outside the approval scope by design (`docs/02 §8.3`).
2. **Process per submission:** compliant draft → internal medical + compliance sign-off → submit to MAB → **~30-day processing** → KKLIU number issued → record `kkliuNumber` + `kkliuExpiry` in frontmatter → footer renders it.
3. **Validity:** sources conflict (~6 months per current MOH pharmacy guidance vs "commonly ~2 years" in `docs/02 §8.1`) — **take the expiry from each approval letter as ground truth**; the CI gate reads `kkliuExpiry`, warns at 90/60/30 days, fails the build on expiry (beats Beverly Wilshire's expired-KKLIU lapse, `docs/03`).
4. **Owner:** client-side (clinic manager + compliance advisor) — named owner TBD (§11.6). Timing: submit so approval covers the launch window.

### 8.2 Publish-time compliance gate (`docs/02 §8.3` — implemented in `docs/07`)

- **PR checklist (human):** register classified (ad/educational) · KKLIU present + unexpired (ad pages) · no testimonials/before-after · lint clean · disclaimer present · references present · author + reviewer set · PDPA notice on any data touchpoint.
- **CI (automated):** banned-word regex over MDX + metadata; frontmatter schema validation (ad pages require `kkliuNumber`/`kkliuExpiry` + promoter fields; YMYL pages require `reviewedBy` + `lastReviewed`); build fails on violation.
- **Human sign-off field** (`signedOffBy`) required before `published: true`.

### 8.3 PDPA content set (amendments fully in force since 2025-06-01)

- **Privacy policy must cover:** controller identity + registration; **DPO name and contact** (mandatory since Jun 2025 — appointment is a client action, §9); data categories incl. sensitive health data volunteered via WhatsApp; purposes (consultation booking, follow-up, marketing **named separately**); consent basis + withdrawal; retention; processors/disclosures (WhatsApp/Meta, Google Analytics); cross-border transfers under the post-2025 "substantially similar protection" regime; data-subject rights + exercise channel; breach-notification commitment; cookies/consent-mode explanation.
- **WhatsApp CTA notice (near every CTA):** "By messaging us you agree to our Privacy Policy; we'll reply via WhatsApp." — WhatsApp named specifically as channel and purpose (`docs/02 §8.1`).
- **Consent banner copy:** granular (analytics separate from marketing), no pre-ticked boxes, consent not a condition of service, links the policy; reviewed against current JPDP guidance before launch (`docs/02 §12.13`).
- **No stored-data forms at launch** — the wa.me deep-link pattern keeps the site itself nearly data-free.

---

## 9. Ground-truth data collection (owner: client — blocks build)

Fillable specs; field names are the `docs/07` typed-data contract. Nothing in this table can be invented — every value comes from the clinic.

| Dataset | Fields (per record) | Status |
|---|---|---|
| **Doctors** (`doctors`) | `slug` (dr-first-last) · `fullName` · `photo` (original) · `qualifications[]` · `mmcNumber` · `apcCurrent` (y/n) · `lcpStatus` + `privilegedProcedures[]` · `yearsInPractice` · `branches[]` · `specialInterests[]` · `languages[]` · `bio` facts · `sameAs[]` | ☐ roster not yet inventoried (legacy site has no doctor pages) |
| **Branches** (`branches`) | `slug` (per `docs/04 §2.4`) · `name` · `streetAddress` (byte-identical to GBP) · `city/state/postcode` · `geo{lat,lng}` · `phone` · `whatsapp` · `hours[]` (+ holiday rules) · `landmarks/parking/transport` notes · `photos[]` (original) · `gbpUrl` · `doctors[]` | ☐ NAP/geo/hours unverified |
| **Availability matrix** | `treatment × branch` (offered? device model on site?) · `treatment × doctor` (who performs) | ☐ not collected |
| **Compliance** | operating entity name + registration no. · PHFSA facility licences per branch · device registrations · current KKLIU numbers/letters · DPO name + contact | ☐ not collected |
| **Raw material** | WhatsApp enquiry themes/top questions · any substantiated awards/memberships · existing GA4/GSC access | ☐ requested |

---

## 10. Production cadence & governance

- **Refresh schedule** (`docs/02 §5.10`, tied to real reviewer re-review, never date-bumping): treatment pages every 3–6 months; concern guides ~6 months; evergreen (about/doctors) annually; promotions per campaign with KKLIU scope check.
- **Content inventory:** one tracked sheet (or typed index) of every page with `lastReviewed`, next-review date, register, KKLIU expiry — the quarterly audit input (`docs/02 §12.11`).
- **AI-assist rule:** AI may outline/draft; a clinician adds first-hand detail; a named doctor reviews; compliance signs off. Disclose automation where a reader would reasonably ask (`docs/02 §5.7, §7.10`).

---

## 11. Open decisions & recommendations

1. **Pricing on-page vs WhatsApp-only.** Tension between `docs/02 §8.3` ("consider keeping prices out of indexed pages — simplifies MAB scope") and `docs/03` P2 #8 (price-range content intercepts the dominant Malaysian intent). **Recommendation: launch without RM figures** — treatment pages carry a qualitative "Sessions & cost factors" section ("cost depends on area treated, sessions required…") + WhatsApp for quotes. Revisit compliant RM-range content **with the MAB advisor** in the first post-launch iteration; if approved, ranges live on treatment pages (ad register), never the blog.
2. **Concern pages' regulatory register.** Written as patient education, but they link to commercial pages. **Recommendation:** draft in educational register, then have the MAB advisor classify per-page; budget for them possibly needing KKLIU.
3. **Blog categories.** Reaffirm `docs/04 §10.6`: ship as `noindex,follow` UX aids; pillars are the topical hubs.
4. **Launch blog size.** **Recommendation:** migrate only the triage keep-set (expect a minority of legacy posts) + 10 new pillar spokes, rather than porting the archive wholesale — `docs/02 §5.12` depth-over-volume.
5. **Doctor participation depth.** The whole E-E-A-T program assumes doctors will lend names, credentials, and review time. **Needs client confirmation:** which doctors, how much review bandwidth per month, who is the designated medical reviewer(s). This is the single biggest content-schedule risk.
6. **Named owners:** KKLIU submissions (client + advisor), DPO appointment (client, legally required since Jun 2025), WhatsApp-enquiry mining (client shares export). All flagged in `docs/00 §6`.
7. **Tone calibration sample.** Before mass drafting, produce one full treatment page (recommend `pico-laser` — highest search value, `docs/03 §4`) + one concern pillar (`acne`) as the style-approval sample for the client and compliance advisor.

---

### Validation against `docs/02` (spot-map)

- §4 one-intent map → §1.2, §3 specs · §5.1/5.8 clusters + depth → §5 · §5.9 FAQs → §6 · §5.12 migration → §7 · §7 E-E-A-T → §4 · §8.1 hard rules → §2, §8 · §8.3 register split + publish gate → §1.1, §8.2 · §9.3 LeadAnswer → §1.3, §3.1 · §9.4 fan-out → §6 · §10.3 branch uniqueness → §3.3 · §12.13 PDPA → §8.3.
