# 03b — AEO/CTR Diagnosis & Ticket List (2026-09-06)

> **Purpose.** Diagnoses why Kaiteki has a large ranking footprint and a near-zero click rate, and converts the
> finding into an ordered ticket list. Follows `docs/03a`; supersedes the "rewrite the titles" hypothesis.
>
> **Method.** GSC query-level breakdown per page (`sc-domain:kaiteki.my`, 28 days to 2026-09-06) + live SERP
> feature checks via Ubersuggest (location: Malaysia, locId 2458).
> **Verdict: this is an AEO/GEO problem, not a title problem.**

---

## 1. The evidence

**AI Overviews fire on 5 of the 6 queries checked.**

| Query | AI Overview | Other features above organic | Kaiteki's real position | GSC avg pos |
|---|---|---|---|---|
| `exosome therapy` | ✅ pos 1 | video, people-also-ask | **#4 — first organic result** | 3.1 |
| `rejuran healer` | ✅ pos 1 | people-also-ask | #15 | 7.4 |
| `rejuran` | ✅ pos 1 | people-also-ask | not in top 15 | 24.1 |
| `jenis rejuran` (Malay) | ✅ pos 1 | images, video | not in snapshot | 1.1 |
| `how long do nose threads last` | ✅ pos 1 | people-also-ask, images | not in snapshot | 1.0 |
| `nose thread lift` | ❌ **none** | people-also-ask, images | not in top 16 | 4.8 |

**The decisive case is `exosome therapy`.** Kaiteki holds the **top organic slot** and still converts only 2.84%,
because an AI Overview, a video carousel and a People-Also-Ask block sit above it. There is no title rewrite that
fixes that. The click is being consumed on the SERP.

The same signature repeats across every question-shaped query in GSC — ranked at or near position 1, zero clicks:
`how long do nose threads last` (12 impr, pos 1.0, 0 clicks) · `is nose thread safe` (3, 1.0, 0) ·
`different types of rejuran` (31, 1.0, 0) · `jenis rejuran` (35, 1.1, 0) · `macam macam rejuran` (19, 1.1, 0).

**Pattern:** AIOs fire on **informational and product-name** queries. They do **not** fire on the commercial head
term `nose thread lift`. That split is what the ticket order below is built on.

### A measurement caveat that matters

GSC average position and the live SERP snapshot **disagree repeatedly** (`rejuran healer`: GSC 7.4, snapshot #15).
Neither is wrong — GSC blends devices, dates and feature appearances over 28 days; the snapshot is one crawl. Use
GSC for "what did real users experience", the snapshot for "what does this SERP look like now". **Do not plan off
GSC average position alone** — it flattered two pages here badly enough to change the diagnosis.

---

## 1.5 Correction (same day): the first pass was not country-filtered

**All figures in §1 above and in the original ticket order were global.** Kaiteki's GSC property is
`sc-domain:kaiteki.my` with no country filter, and a large share of impressions come from **Singapore, the
Philippines and the USA** — markets the clinic does not serve. Filtering to Malaysia changes several conclusions.

**Worked example — `nose thread lift`:**

| Cut | Impressions | Position | Clicks |
|---|---|---|---|
| Global, web | 2,609 | 4.8 | 1 |
| **Malaysia, web, desktop** | 639 | 3.7 | **0** |
| **Malaysia, web, mobile** | 318 | 2.7 | **0** |
| Global, **image** search | 661 | 6.6 | 2 |

Malaysia's share is 2,589 of the page's 7,456 total impressions; the flattering 4.8 average was pulled up by the
Philippines (1.6) and Singapore (3.7).

**And the page is not in the Malaysian blue links at all.** A manual check and the Ubersuggest snapshot both fail to
find it in the top 16, while GSC reports position 2.7–3.7 daily with **zero clicks from 960 impressions**. The only
reading consistent with all four sources: these are **People Also Ask** impressions — the Malaysian SERP carries a
PAA block at position 2, which matches the reported positions, is invisible unless expanded, and earns no clicks.
GSC does not label PAA impressions, so this is inference, not proof.

**Rule going forward: filter GSC to `country = mys` for every planning number.** Unfiltered totals overstate
Malaysian reality by roughly 3× on the worst-affected pages.

### Two distinct problems, not one

Separating them by Malaysian position changes what each page needs:

- **Positions 1–6 with ~0% CTR → AEO/SERP-feature problem.** The answer is consumed on the SERP. Tickets T1, T2.
- **Positions 12–42 with low CTR → an ordinary ranking problem.** Nothing exotic; these pages simply do not rank.
  `/treatments/pico-laser` (8,602 MY impressions, pos **12.8**, CTR 0.08%) · `/concerns/pigmentation` (8,201, pos
  **19.4**, 0.07%) · `/treatments` hub (6,467, pos **42.0**) · `/concerns/dark-eye-circles` (4,911, pos 8.7, 0.22%)
  · `/locations/pelangi-johor-bahru` (2,489, pos **29.4**).

These four main-site pages hold the largest Malaysian impression pools on the property. **They are a bigger prize
than the blog migration** and they need ordinary on-page and internal-linking work, not AEO work. New ticket T9.

### The one content format that still earns clicks

The best click-through rates on the entire property, Malaysia-filtered, are **comparison posts**:

| Page | MY impressions | Pos | CTR |
|---|---|---|---|
| `plinest-vs-rejuran` | 184 | 4.6 | **4.35%** |
| `plenhyage-vs-rejuran` | 185 | 7.9 | **3.24%** |
| `/technology/onda-coolwaves` | 1,619 | 6.3 | 2.84% |

Against a site-wide norm nearer 0.1–1%. Comparisons ask for a verdict, which an AI Overview answers poorly and a
searcher still wants a source for. The repo's existing direction (`onda-vs-coolsculpting`,
`picocare-vs-picosure`, `ultherapy-vs-hifu`, `wegovy-vs-mounjaro`) is **validated by the data — keep going**.

---

## 1.9 ⛔ T0 — **A large share of the site has never been crawled** · P0, above everything else

Found while investigating T4 on 2026-09-06, by URL-inspecting a 40-URL sample of the 125-URL sitemap.
**Roughly half of the sampled `/technology` and `/treatments` pages have never been fetched by Google.**

### Never crawled (22 confirmed)

| Section | URLs |
|---|---|
| **Treatments** | `botulinum-toxin` · `dermal-fillers` · `double-eyelid` · `facial-treatments` · `laser-hair-removal`* · `muscle-stimulation`* |
| **Technology — injectables** | `rejuran` · `plinest` · `juvelook` · `profhilo` · `hydrodeluxe` · `botox` · `juvederm` · `restylane` · `sculptra` · `radiesse` · `belotero` · `ellanse`* · `art-filler`* |
| **Technology — devices** | `morpheus8` · `lifthera`* |
| **Concerns** | `melasma`* |

`*` = **"URL is unknown to Google"** — worse than "Discovered"; the rest are "Discovered – currently not indexed".

**These include the highest-value commercial pages on the site**: botulinum toxin (botox), dermal fillers, melasma,
and the entire injectables cluster.

### Crawled and indexed (control — 18 confirmed)
`pico-laser` · `skin-booster` · `exosome-therapy` · `hifu` · `ultherapy` · `microneedling` · `fat-freezing` ·
`bio-stimulator` · `radiofrequency` · `onda-coolwaves` · `schwarzy` · `hydrafacial` · `dermav` · `pro-yellow` ·
`concerns/acne` · `concerns/hair-loss` · `concerns/aging` · both sampled locations · `products` · a doctor · a blog post.

### What it is not

- **Not a sitemap fault.** `sitemap.xml` is submitted, last downloaded **2026-09-04**, 122 URLs, **0 errors,
  0 warnings**. Every affected URL is present in it, with a valid `lastmod`. Verified against the data files —
  nothing missing.
- **Not a page fault.** Affected pages return 200, carry a self-referential canonical, have no `noindex`, and are
  linked with real rendered `<a href>` from both `/treatments/skin-booster` and the `/technology` hub.
- **Not age.** `double-eyelid` (uncrawled) shipped **2026-07-05** — the same day as `pico-laser`, `hifu`,
  `microneedling` and `fat-freezing`, all of which are indexed and crawled within the last week.

### Most consistent explanation

**Crawl-budget rationing on a low-authority domain (DA 19)** — Google is fetching a subset and deprioritising the
rest. Two aggravating factors we control:

1. **`blog.kaiteki.my/sitemap_index.xml` is submitted to the same GSC property** — **215 URLs**, last downloaded
   2026-09-03. We are actively asking Google to spend crawl budget on 215 subdomain URLs while 22+ main-domain
   pages go unfetched, and the subdomain already ranks for the topics the uncrawled pages target.
2. **Near-duplicate signals** — the five polynucleotide/HA injectable pages describe themselves near-identically
   and overlap `/treatments/skin-booster`, which *is* indexed.

### Actions, in order

1. **Migrate the blog and retire the subdomain sitemap** (T3). This is now the single highest-leverage action in
   the entire plan: it frees crawl budget *and* removes the duplicate topical coverage suppressing these pages.
2. **Manually request indexing** in GSC for the highest-value uncrawled URLs — `botulinum-toxin`,
   `dermal-fillers`, `melasma`, `rejuran`, `juvederm` first. (~10–15/day; the Indexing API does not cover these
   page types.)
3. **Strengthen internal links into the uncrawled set from pages Google *does* crawl** — `concerns/acne`,
   `concerns/aging`, `concerns/hair-loss`, `pico-laser`, `hifu` are all fetched within the last week and are the
   cheapest crawl paths available.
4. **Differentiate the injectable pages' copy** so they stop reading as near-duplicates of each other.
5. **Re-inspect in two weeks.** If the set is unchanged, the constraint is domain authority and the answer is
   external links, not on-page work.

> **Everything else in this document is downstream of T0.** There is no point optimising titles, schema, answer
> blocks or CTR on pages Google has never fetched.

---

## 2. Tickets, in order

### T1 — ⚠️ **MOSTLY ALREADY BUILT — audited 2026-09-06** · revised to P2

**This ticket was written without checking the repo first. Most of it is already shipped.** Audit results:

| Prescribed | Actual state |
|---|---|
| Answer-first extractable block | ✅ `leadAnswer` on **all 18 treatments and all 14 concerns** |
| `reviewedBy` + `lastReviewed` | ✅ on all, and **emitted in live JSON-LD** |
| `MedicalWebPage` | ✅ live on treatment and concern pages |
| `Physician` typing | ✅ `personNode()` emits `additionalType: schema.org/Physician` + MMC + `worksFor` |
| `MedicalProcedure` / `MedicalCondition` / `MedicalTherapy` | ✅ live |
| Internal linking treatment↔concern↔technology | ✅ derived graph in `content/data/relations.ts` |
| No `Review`/`AggregateRating`, no `FAQPage` | ✅ deliberately omitted per `docs/02` |

**Corollary: `docs/03a`'s "medical schema is our ownable wedge, nobody has it" is only half right.** No competitor
has it — *and Kaiteki already built it*. It is a shipped asset, not a to-do. The wedge exists; it simply has not
paid out yet, because of the two external blockers (T2 Cloudflare, GBP).

**What genuinely remains under T1 — small:**
- `jumpNav` and `facts` exist on only **2 of 18** treatments. UX/structure, not AEO. Low priority.
- Give AIO-affected pages something an AI Overview cannot supply — RM ranges, candidacy, branch availability. This
  is the one substantive piece still open, and it is a content/compliance decision, not a template change.

<details><summary>Original ticket text (superseded)</summary>

### T1 — Reframe informational pages for **citation**, not clicks · content+template
On AIO queries the click is largely gone. Win the citation instead, and make the residual click worth something the
AI cannot supply.
- Add a **40–60 word direct answer** immediately under each question-shaped H2 (extractable block).
- Ship `MedicalWebPage` + `reviewedBy` + `lastReviewed`, and `Physician` for the reviewer (per `docs/02 §3`).
- Named MMC-credentialed reviewer byline on every YMYL page.
- Give the page a reason to be visited that an AIO cannot satisfy: **RM price ranges, candidacy/suitability,
  branch availability, doctor consult**. Definitions are already lost; do not compete on them.
- **Applies first to:** `/treatments/exosome-therapy` (best case — already #1 organic).

</details>

### T-audit — what the repo actually still needs · reference

Verified 2026-09-06. **The repo-side technical and content SEO is in good shape.** Shipped and working: the medical
schema graph, answer-first blocks site-wide, named reviewers, the derived internal-link graph, and every legacy
redirect (`.php`, `.html`, `www`→non-www — all resolve correctly).

**The two things actually holding traffic back are both outside this repo:**

1. **Cloudflare is blocking the AI crawlers** (T2) — an infra toggle, not code.
2. **Kaiteki is absent from the local pack** (`docs/03a §6`) — a 9-branch GBP program, not code.

**Genuinely open build work, in order:** T4 `/treatments/rejuran` · T10 more device-vs-device comparisons ·
T3 blog migration (12 of 162) · T9(d) diagnose `/concerns/dark-eye-circles` · T1 residue (`jumpNav`/`facts`,
price/candidacy content).

**Do not re-ticket the schema, the answer blocks, the reviewers, the internal links or the redirects.** All were
checked against the live site on 2026-09-06 and all are correct.

### T2 — AI **retrieval**-bot allowlist · P0 · ⚠️ **blocked on a Cloudflare dashboard change**

**Found 2026-09-06: the repo does not control `/robots.txt`.** `app/robots.ts` emits only
`User-agent: * / Allow: /`, but Cloudflare **prepends a "Managed robots.txt" block** to the live response — the
identical block found on Dr Chong's site. Kaiteki is currently:

- **blocking** `GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended`, `Applebot-Extended`, `Bytespider`, `Amazonbot`,
  `meta-externalagent`, `CloudflareBrowserRenderingCrawler`;
- emitting `Content-Signal: search=yes, ai-train=no, use=reference`;
- serving **two conflicting `User-agent: *` groups** in one file.

We are blocking AI crawlers by default while the entire strategy (T1) depends on being cited by them.

**Sequence — the code change alone does nothing:**
1. **Cloudflare dashboard** (infra/client): disable Managed robots.txt / AI Crawl Control blocking for
   `kaiteki.my`. Until this happens the allowlist below is inert and the file stays self-contradictory.
2. **Repo (done):** `app/robots.ts` now names the retrieval agents explicitly — `OAI-SearchBot`, `ChatGPT-User`,
   `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Applebot` — with the Cloudflare conflict documented inline.
3. **Decide the training bucket** (`GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended`, `Applebot-Extended`,
   `Meta-ExternalAgent`): a business call, not a Cloudflare default. Note `Google-Extended` does **not** control
   AI Overviews (those use Googlebot) — it governs Gemini grounding and training.

Token list per `docs/00 §3`.

### T3 — Migrate the blog · **P0** (restored — see T4) · content ops
**12 of 162 posts done.** I briefly downgraded this to P1 on the grounds that the subdomain's *Malaysian* traffic
is small. That reasoning was incomplete: per **T4**, the subdomain is holding five main-domain pages out of
Google's index entirely. The cost is suppression, not the subdomain's own traffic.

**Migrate these four first — they are the ones competing with uncrawled main-domain pages:**
`rejuran-healer` · `plinest-vs-rejuran` · `plenhyage-vs-rejuran` · `juvelook-skin-booster`.

Then continue by Malaysian impressions:

**Corrected order (Malaysia only, 28 days) — the original global ordering was wrong:**

| Post | MY impressions | Pos | CTR |
|---|---|---|---|
| `accutane-malaysia` | 1,656 | 7.6 | 0.66% |
| `sylfirm-x-price-malaysia` | 727 | 9.8 | 1.65% |
| `oligio-x-malaysia` | 612 | 9.2 | 1.31% |
| `plenhyage-vs-rejuran` | 185 | 7.9 | 3.24% |
| `plinest-vs-rejuran` | 184 | 4.6 | 4.35% |

**`rejuran-healer` and `nose-thread-lift` — the two originally ranked first — do not appear in Malaysia's top 30
pages at all.** Their volume was Singapore, the Philippines, the USA and PAA impressions. Migrate them for
tidiness, not for traffic.

### T4 — ⛔ **DO NOT BUILD `/treatments/rejuran`** — it already exists, and it is uncrawled · P0

**Corrected 2026-09-06.** The original ticket was wrong twice over.

**1. The page exists.** `/technology/rejuran` is a full, MAB-compliant page (~2,000 words: what it is, mechanism,
suitability, session, risks, four FAQs, its own `seoTitle`). Rejuran is also covered inside
`/treatments/skin-booster`. The IA is deliberate — **products live under `/technology`, procedures under
`/treatments`**. Adding `/treatments/rejuran` would duplicate it and recreate exactly the two-parallel-trees
cannibalisation `docs/03a` flags on Dr Chong's site. Kaiteki also holds real Rejuran E-E-A-T
(Elite Platinum Award, Platinum Partner 2026, a certified Authorised Injector — `content/data/awards.ts`,
`doctors.ts`).

**2. The actual defect: Google has never crawled it.**

| URL | Coverage state | Last crawled |
|---|---|---|
| `/technology/rejuran` | Discovered – currently not indexed | **Never** |
| `/technology/plinest` | Discovered – currently not indexed | **Never** |
| `/technology/juvelook` | Discovered – currently not indexed | **Never** |
| `/technology/profhilo` | Discovered – currently not indexed | **Never** |
| `/technology/hydrodeluxe` | Discovered – currently not indexed | **Never** |
| `/technology/onda-coolwaves` *(control)* | Submitted and indexed | 2026-09-05 |
| `/treatments/skin-booster` *(control)* | Submitted and indexed | 2026-09-02 |

**Every injectable page is uncrawled. Every device page is fine.** All were added in the same commit
(`175d3d7`, 2026-07-18) — seven weeks — so "too new" does not explain it.

**Ruled out:** 200 OK · self-canonical · no `noindex` · present in `sitemap.xml` · real `<a href>` links rendered
from both `/treatments/skin-booster` and the `/technology` hub · `treatments: ["skin-booster"]` edge present. There
is **no technical defect** — the crawler is choosing not to fetch these pages.

**Leading hypothesis: the subdomain blog is suppressing them.** `blog.kaiteki.my` holds *indexed, ranking* pages on
exactly these topics — `rejuran-healer`, `plinest-vs-rejuran`, `plenhyage-vs-rejuran`, `juvelook-skin-booster`.
Google already has Kaiteki content answering these queries and sees no reason to fetch five more near-duplicate
pages on the main domain. Note all five say "used within Kaiteki's skin-booster treatment", which adds a
near-duplicate signal between themselves.

**This makes T3 the P0 it originally was — for a reason I got wrong the first time.** The cost of the un-migrated
subdomain is not its own modest Malaysian traffic; it is that **it is holding main-domain pages out of the index**.
That is precisely what locked decision #3 ("consolidates authority off the subdomain") was meant to prevent.

**Actions:**
1. Migrate + 301 the four competing subdomain posts into the main domain, pointing at `/technology/{slug}`.
2. Request indexing for the five URLs in GSC (manual — the Indexing API covers only JobPosting/BroadcastEvent).
3. Differentiate the five pages' copy so they are not near-duplicates of each other or of `/treatments/skin-booster`.
4. Re-inspect coverage after two weeks; if still "Never", escalate to a crawl-budget review.

### T5 — Drop the `rejuran` head term · P2 · decision, no build
2,528 impressions at position 24.1 looks like an opportunity and is not. The SERP is **retail**: Watsons #2 (1,841
clicks), the official brand site, Instagram, Shopee, Olive Young. A clinic page does not belong there and will not
rank. **Recorded so it is not re-proposed.**

### T6 — `nose thread lift`: build from zero, not from position 5 · P2 · new page
The one checked query with **no AI Overview**, so clicks still exist here. But per §1.5 Kaiteki is **not in the
Malaysian blue links at all** — the GSC position is PAA real estate. This is a greenfield build, not a rescue, and
it drops to P2 accordingly.

Still winnable: the SERP is held by DA 6–18 sites (`westwoodclinic.my` DA 6, `rjclinic.my` DA 9, `amclinic.com.my`
DA 10) under Cleo at #1 (220 clicks). Build `/treatments/nose-thread-lift` on the main domain. PAA and an image
pack sit above organic, so ship real images with proper alt text — and no before/after (MAB).

### T9 — Fix the four biggest Malaysian impression pools · P0 · on-page + internal linking
Per §1.5 these are **ranking** problems, not AEO problems, and together they are the largest addressable pool on
the property:

| Page | MY impressions | Pos | CTR |
|---|---|---|---|
| `/treatments/pico-laser` | 8,602 | 12.8 | 0.08% |
| `/concerns/pigmentation` | 8,201 | 19.4 | 0.07% |
| `/treatments` (hub) | 6,467 | **42.0** | 0.02% |
| `/concerns/dark-eye-circles` | 4,911 | 8.7 | 0.22% |

**Diagnosed 2026-09-06 — the four split into three different problems. Do not treat them as one ticket.**

**a) `/treatments` hub — no fault, deprioritise.** Position 42 is not a bug. It is 518 brand impressions at pos 2.1
plus a long tail of generic terms at positions 20–112 (`aesthetic treatment` 161 impr @ 17.7, `aesthetic laser`
32 @ 24.6, `aesthetic clinic mont kiara` 32 @ 83.2). Normal behaviour for a weakly-relevant hub. The only real
opportunity is `aesthetic treatment` / `aesthetic laser` at positions 17–25. **Template-fault hypothesis rejected.**

**b) `/concerns/pigmentation` — the page is fine; the local pack is the problem.** On the live
`pigmentation treatment malaysia` SERP (fresh 2026-09-06) Kaiteki is the **first organic result** — above Dr Chong,
drjaneclinic and Clique — and still converts 0.40%, because **three local-pack slots (Dr Chong Bangsar, Cleo,
Premier Bangsar) plus a PAA block sit above it**. No on-page change fixes this. **This is the strongest evidence in
the whole analysis that GBP is a P0 revenue item, not a housekeeping task** — we already win the organic result and
lose the click to the map. Route to the GBP program (`docs/03a §6`), not to content.

**c) `/treatments/pico-laser` — a genuine ranking gap.** Here Kaiteki really is 9th, behind Cleo (**1,797 clicks**),
Dr Chong and Clique, under an AI Overview at #1, PAA at #3, images at #6 and a products block at #8. The head term
`pico laser` is 1,386 MY impressions at pos 7.3, CTR 0.22%. This one earns ordinary work: depth against Cleo's
page, matched title/H1 intent, internal links from the pigmentation and location clusters, plus the T1 answer
blocks for the AIO.

**d) `/concerns/dark-eye-circles`** — 4,911 impressions at pos 8.7, not yet diagnosed. Run the same query-level
+ SERP-feature check before assigning work.

### T10 — Double down on comparison content · P1 · content
Per §1.5, comparisons are the only format on the property earning normal CTR (3–4.4% versus a 0.1–1% norm), because
they ask for a verdict that an AI Overview answers poorly. Keep commissioning them, and prefer
**device-vs-device** framing — never clinic-vs-clinic, which MAB prohibits (`docs/03a §6`).

### T7 — Escalate the Malay-vs-Chinese decision · P1 · client call
`/zh` is locked next, but the evidence now points the other way:
- Kaiteki ranks **accidentally** for Malay terms with zero Malay content (`jenis rejuran` pos 1.1, `macam macam
  rejuran` pos 1.1, `jenis jenis rejuran` pos 1.0).
- Competitors ship real Malay pages and rank: Clique Clinic **#1** (`/ms/rejuran`), Dr Chong **#8**
  (`/ms/blog/harga-rejuran-malaysia/`).
- The Malay SERP is padded with **Indonesian** content (`klinikbamed`, `erhaultimate`, `smartskin-clinic` — all
  `.co.id`) that a Malaysian clinic is well placed to displace.

This contradicts a locked decision, so it goes to the client as a question — **do not silently re-order it**
(`docs/03a §6`).

### T8 — Re-baseline quarterly · P2 · process
Re-run the AIO check on the top ~15 queries each quarter and log which engines cite whom (`docs/02 §9.10`,
`docs/05`). AIO coverage is the metric that now governs content strategy; it was never being measured.

---

## 3. What NOT to do

- **Do not rewrite titles as a traffic play on AIO queries.** Tested and rejected: on the Malaysian SERP for
  `exosome therapy`, `/treatments/exosome-therapy` is the **first organic result** and still converts in low single
  digits, because an AI Overview, a video carousel and a PAA block sit above it. A title cannot outrank a feature.
  (Titles *are* worth revisiting for the T9 pages — but those are a ranking problem, so fix position first.)
- **Do not fix the legacy `.php` redirects.** Verified working — `johor.php` → `/locations/southkey-johor-bahru`,
  `shah-alam.php` → `/locations/kota-kemuning`, www → non-www, all clean 301s. The `.php` rows in GSC are index
  decay and will fade.
- **Do not write new informational posts on AIO-saturated topics** until T1 changes the template. More pages that
  rank and are not clicked do not compound.

---

*Sources: GSC `sc-domain:kaiteki.my` query×page breakdowns, 28 days to 2026-09-06; Ubersuggest SERP analysis,
Malaysia (locId 2458), pull dates per query — `how long do nose threads last` and `jenis rejuran` fresh 2026-09-06,
`exosome therapy` 2026-09-02, `nose thread lift` 2026-08-14, `rejuran` 2026-07-14, `rejuran healer` 2026-07-03.*
