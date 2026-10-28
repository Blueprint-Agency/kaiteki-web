# 15 — Four-week plan: close the page-type gaps (21 Sep – 18 Oct 2026)

> **What this is.** The execution plan for `docs/03d` (gap analysis) and `docs/16` (cluster differentiation).
> Revised **2026-09-20** after the client answered the day-1 pack and after T0 was re-diagnosed.
>
> **The critical path changed.** It is no longer "add depth to the pages that rank". It is **make 55 pages stop
> being the same page**, because that is the best-supported reason Google has discovered 34 of our URLs and
> crawled none of them (`docs/03b` T0, re-diagnosed 2026-09-20). Everything else is scheduled around that.
>
> **Lanes.** `Client` = Kaiteki · `Content` = authoring in `content/data/*.ts` and MDX · `Dev` = templates, schema,
> tooling · `Ops` = GSC, measurement.
>
> **Progress.** Week 1: 1.1 ✅ (reviewer assignment, 20 Sep) · 1.2 ✅ + 1.2a ✅ (technology template and audit fixes, 21 Sep, merged `1db24d6`) · 2.0 ✅ (36 capsules and fact sets, pulled forward) · 1.3 ✅ (Read next row, 24 Sep) · 1.5 ✅ (baseline, 24 Sep — **it found 20 of the 34 'never-crawled' URLs already indexed; see `docs/15b` before starting week 2**). · 1.4 ✅ (hifu, skin-booster, 24 Sep). Open in week 1: 1.6 indexing requests (client). Week 2: 2.1 ✅ (13 injectables, 28 Sep) · 2.2 ✅ (9 lifting, 28 Sep) · 2.3 ✅ (28 Sep) · 2.4 ✅ (28 Sep) · 2.0a ✅ 36/36. Week 3: 3.1 ✅ (7 lasers, 11 Oct) · 3.7 ✅ (no effect yet, 11 Oct) · 3.2 ✅ (last 7 devices, 11 Oct) · 3.3 ✅ (`/concerns/acne-scars`, 11 Oct, awaiting sign-off) · 3.5 ✅ (`/concerns/melasma`, 11 Oct, awaiting sign-off) · 3.6 ✅ (5 treatments, 11 Oct) · 3.4 deferred (no reviewed source copy): **technology sameness at 0, the end-state target**.
>
> **Definition of done for every content item:** `pnpm typecheck`, `pnpm lint`, `pnpm validate:concerns` and
> **`pnpm check:sameness`** pass; the page is previewed on localhost; the change is on `main`. Section structure
> follows `docs/16` — a prose section or a typed block, never both; headings phrased as questions in the page's
> own words; sections deleted rather than padded.

---

## Client answers — settled 2026-09-20

Full record in `docs/15a §0`. What they changed:

| Ask | Answer | Effect on this plan |
|---|---|---|
| Medical sign-off | Review happens **offline**; keep the bylines; spread the load evenly | **Done 20 Sep.** All 69 pages reassigned so each of the 21 doctors carries 3–4, and the concern ledger is filled, so the 14 concern bylines are live for the first time. The ledger-gate item is withdrawn. |
| Branch × device | **Not needed — machines rotate** | "Available at" block cancelled. Freed capacity moved into differentiation. |
| Price | **Show none at all** | Cost sections list factors only, no figure, no `Offer` schema, no pricing page. A lint keeps currency strings out. |
| AI crawlers | **Allow training bots** | No change needed; already true. 03b T2 closed. |
| Indexing requests | Requested manually, nothing moved | ~~Suspended.~~ **Reversed 2026-09-24**: the requests did work (see decision D1 below). |
| Chinese + Malay | **Both go ahead** | Week 4, item 4.4. Bilingual reviewers still to be named. |
| Skin tags / moles | **Offered, via CO2 laser** | New page, item 3.4. Subcision still unanswered, stays in backlog. |

## Decisions — settled 2026-09-24, after the baseline

The 1.5 baseline (`docs/15b`) found 20 of the 34 "never-crawled" URLs already indexed by 20 Sep: 12 of the 13
injectables on 6–7 Sep, the day after the `/technology` hub was requested. Sameness scores did not separate
indexed pages from unindexed ones. The owner accepted all three recommendations:

| # | Decision | Effect on this plan |
|---|---|---|
| D1 | **Resume manual indexing requests for the 14 URLs still not indexed.** The 20 Sep suspension was based on stale data. | New item 1.6. The queue is `docs/15b/request-indexing-2026-09-24.txt`. |
| D2 | **3.7 tests ranking and clicks, not crawl.** The batch-1 injectables are already indexed, so a rewrite cannot earn a crawl there. | 3.7 compares the 13 injectables before and after batch 1 against the untouched device pages, using the `docs/15b` numbers as the before. |
| D3 | **4.5 reports against the 14, not the 34.** Measuring against the 34 would credit the rewrites with what the indexing requests did. | 4.5 reports how many of the 14 are indexed, plus the ranking and click change on the rewritten pages. |

**Why the differentiation work still stands.** Weeks 2–4 do not move. They are now justified by ranking and
clicks on pages Google already serves, not by crawl recovery.

---

## Week 1 · 21–27 Sep · plumbing, and the first pages to break the pattern

The technology template moves **into week 1** from week 2: all 36 technology pages need `leadAnswer`, `facts` and
`costFactors` to exist as fields before any of them can be differentiated, so this gates weeks 2 and 3.

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 1.1 | ✅ **Reviewer assignment, done 2026-09-20.** All 69 pages redistributed evenly across the 21 doctors (six carry 4, fifteen carry 3); `config/concern-signoff.json` filled from the existing editorial dates, so all 14 concern pages now render the byline, author card and `reviewedBy` in schema, and carry a real `lastmod` in the sitemap. Data-file headers rewritten to describe the offline-review process rather than calling the values placeholders. | — | — | ✅ `validate:concerns` 0 failures; 69/69 pages name a reviewer. |
| 1.2 | ✅ **Technology template upgrade — done 2026-09-21** (merged to `main`, `1db24d6`). `TechnologyView` moved onto the treatment article layout: hero with a WhatsApp CTA in the fold, `FactRail`, `LeadAnswer`, a sticky contents rail with **11 section anchors where there were none**, concern and treatment card shelves replacing pill chips, `CostFactors`, `AuthorCard` and ledger, standing `Disclaimer` kept. `Technology` gained `leadAnswer`, `facts`, `costFactors`; no `availableAt`. `lib/technology-toc.ts` derives the rail from the same data the page renders. Audited afterwards in **`docs/17`**, and all six findings fixed in the same branch — see 1.2a. | Dev | — | ✅ `tsc`, `eslint`, `check:sameness`, both validators, `next build` (132 pages); screenshots at 1900/1100/400 re-taken after the content landed. |
| 1.2a | ✅ **`docs/17` audit fixes — done 2026-09-21.** `relatedTechnology()` closes the zero-sibling-links hole, ranking other devices by shared treatments so the alternative offered is the genuine one (Juvéderm → Art Filler, Belotero, Restylane, Botox). FAQ items carry anchor ids, so a single answer is citable. `pageMeta()` takes `ogType`; technology, treatment, concern and blog pages declare `article`. Three over-length descriptions trimmed. `SectionCard` deleted, orphaned by the rebuild. | Dev + Content | 1.2 | ✅ Crawl of all 36: sibling links 36/36, metadata outliers 0. |
| 1.3 | ✅ **"Read next" on all three templates — done 2026-09-24.** `postsFor()` in `content/data/blog.ts` resolves up to 3 posts from the tag arrays, newest first; `components/blog/ReadNext.tsx` renders them as `BlogCard`s in a `CardRow`, placed directly after the FAQ on every template. It never pads with unrelated posts. Technology pages fall back one hop to the treatments the device delivers, which lifts coverage from 11 to 22 of 36 without leaving topic (Belotero → lip filler guide, Botox → hyperhidrosis guide). The reverse hop, treatment → device, was tried and dropped: it put the facial redness guide on laser hair removal via M22. **Coverage is capped by the 14 posts in-repo**, so it rises as the blog migration (03b T3) lands; the 14 technology pages still without a row are mostly injectables, where no post exists yet. | Dev | none | ✅ Crawl of the build: treatments 12/19, concerns 10/14, technology 22/36 render the row as real `<a href="/blog/…">`; the rest render nothing (Rejuran checked). `tsc`, `eslint`, `check:sameness` (unchanged: the row is template chrome, not an authored section), `validate:concerns`, `next build`. Previewed at 1440 and 390. |
| 1.4 | ✅ **Treatments batch A — `hifu`, `skin-booster`, done 2026-09-24.** Both pages went from nine prose sections to two, each with a question heading only that page can answer (*How does HIFU reach the layer a facelift works on?* · *How is a skin booster different from a filler?*). The seven shared sections became typed blocks and were deleted: `routes`, `variantModule` (Ultracel Q vs Lifthera; the five boosters by ingredient and manufacturer), `avoidIf` + `bringToConsult`, `sessionSteps`, `afterSession`, `risks`, `costFactors` (factors only), `comparisons`, `relatedReasons`, plus sourced FAQs (HIFU 4 → 7, skin booster 4 → 6). **Every clinical line is restructured from copy that already names a reviewer**: the page's own text, the device and product pages, and the Ultherapy vs HIFU guide. No new claim, no figure, and `lastReviewed` is unchanged. The re-arrangement goes into the offline review round (Dr Chuah for HIFU, Dr Chew for skin booster). `suitableFor`/`notSuitableFor` were not authored: `avoidIf` takes precedence in the renderer, so they would never show. Skin booster drops from 4 figures to 1, because Q-23 allows floor(2/2); the three held-out photographs are recorded in the data file for when the body grows. | Content | none | ✅ Both pages at 2 prose sections, 0 generic headings; every block renders (build HTML checked, screenshots at 1440 and 390); `check:sameness` treatments budget lowered 17 → **15**; typecheck, `validate:concerns`, `validate:refs`, build pass. |
| 1.6 | **Request indexing for the 14 unindexed URLs (D1).** The client pastes `docs/15b/request-indexing-2026-09-24.txt` into GSC URL Inspection → Request indexing, one day's quota. Re-inspect all 14 seven days later. | Client + Ops | 1.5 | Requests made; the 7-day re-inspection is recorded in `docs/15b` with dates. |
| 1.5 | ✅ **Baseline snapshot — done 2026-09-24, in `docs/15b`.** GSC page-level export, 25 Aug – 21 Sep, Malaysia, all 69 pages including zero rows, with first-impression date, the `docs/03c` flags, per-page sameness (`check:sameness --csv`, added for this) and live URL Inspection of every page without impressions. **Finding:** 20 of the 34 URLs this plan treats as never crawled were indexed between 6 and 20 Sep, before any differentiation shipped. Twelve of the 13 injectables were indexed on 6–7 Sep, right after the `/technology` hub was requested. Sameness does not separate indexed from unindexed pages. That undercuts the T0 rationale for the critical path, the "no more manual requests" rule, and the design of 3.7 and 4.5. `docs/15b` §⚠ sets out the decisions; none has been made here. | Ops | none | ✅ File on `main`; this is what 4.5 compares against. |

---

## Week 2 · 28 Sep – 4 Oct · batch 1 and 2 — the never-crawled clusters

The heart of the plan. Per `docs/16` §4, injectables first: all 13 are uncrawled, they are the most uniform group
on the site, and they are the highest-value commercial cluster.

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 2.0 | ✅ **Capsules and facts, landed early 2026-09-21.** `docs/17` found both answer-engine slots rendering empty on all 36, so this was pulled forward from the batch work. A 41-to-56 word `leadAnswer` and a three-fact rail authored for **all 36**, each derived from that page's own already-reviewed body text — no new clinical claim, no figure, no superlative. Facts are material or wavelength, manufacturer and origin, and the Kaiteki treatment it sits within: verifiable, and different on every page. | Content | — | ✅ Capsule 36/36, fact rail 36/36, verified on the rendered pages. |
| 2.1 | ✅ **Done 2026-09-28** (branch `content/tech-batch1-injectables`). Twelve pages went from nine prose sections to seven: *What is X?* and the mechanism section kept; two spine sections added per page (what it is for and is not, with the concern list moved in; how long it lasts and whether it can be dissolved; where each gel goes; the in-class comparison: Rejuran or Plinest, Hydrodeluxe or Profhilo, Ellansé against Sculptra, Restylane against other HA ranges); suitability, visit-plus-downtime and risks re-headed as questions only that page can ask. Botox was already at 0/3 and only gained `costFactors`. **Every paragraph is existing reviewed copy**, moved byte-for-byte or with a sentence moved out; cross-page comparisons use the sibling page's reviewed FAQ. No new claim, FAQs untouched, `lastReviewed` unchanged; the rearrangement joins the offline review round (each page's own reviewer). Scores: 12 pages 1/7, plinest 0/7, botox 0/3 (ellansé read 0/7 until the 28 Sep accent fix to the measure). Rendered HTML checked on all 13; screenshot at 1440 and 390. ~~**Batch 1 — 13 injectables.** `profhilo · rejuran · plinest · juvelook · hydrodeluxe · botox · sculptra · ellanse · radiesse · juvederm · restylane · belotero · art-filler`. Per-page `leadAnswer` (40–60 words) and `facts`, then replace the shared six-heading tail with at least two sections from the injectables spine (`docs/16` §3): what is actually in it · is it reversible · how long it lasts and how it wears off · what it is not · where and at what depth · the in-class comparison. Headings as questions. | Content | 1.2 | 13/13 carry `leadAnswer` + `facts`; none is "mostly generic" by `check:sameness`; technology budget lowered 35 → ≤23.~~ | ✅ 13/13 not mostly generic; technology budget lowered 35 → **23**; typecheck, lint, `validate:concerns`, `validate:refs`, build pass. |
| 2.2 | ✅ **Done 2026-09-28** (branch `content/tech-batch2-lifting`). Same method as 2.1: nine sections to seven; two spine sections per page (which layer or depth it reaches, with millimetres only where the page already stated them: Ultherapy 1.5/3.0/4.5 mm, Morpheus8 about 8 mm; and whether it is a facelift or when a lift is not the answer, reworded from each page's own surgery caveat, the HIFU page's `cannotDo` and the Ultherapy vs HIFU post), plus the energy-type comparison where the page had one (Lifthera line vs dot vs imaging; XERF vs RF microneedling; Exilis reaching fat). Sylfirm X and Potenza are honestly pigment and scar devices, so their spine says so. Scores: 8 pages 1/7, ultherapy-system 0/7. Measure fixed the same day; see below the ratchet table. ~~**Batch 2 — 9 lifting & tightening.** `ultracel-q · lifthera · ultherapy-system · xerf · sylfirm-x · morpheus8 · potenza · btl-exilis · wonderface` (eight of nine uncrawled). Spine: what depth it reaches in millimetres · lifting vs tightening vs volume · when a lift is not the answer · which energy type and why. | Content | 1.2 | 9/9 differentiated; technology budget lowered ≤23 → ≤14.~~ | ✅ 9/9 differentiated; budget 14; checks and build pass. |
| 2.3 | ✅ **Done 2026-09-28** (branch `content/treatments-batch-b`). All three went from nine prose sections to two, each with a question heading only that page can ask (*How does Ultherapy see the layer it treats?* · *How does RF microneedling treat several depths in one session?* · *Why is exosome therapy applied after another procedure?*). The rest became typed blocks: facts, routes (worded from the concern pages' reviewed `treatmentWhy` lines), a variant module (Ultherapy or HIFU; Morpheus8, Sylfirm X or Potenza, the latter replacing microneedling's *Devices & technology* section), ctaMid, avoidIf, sessionSteps, afterSession, risks with 3–4 `cannotDo` each and a pigment note on both energy-based pages, costFactors, relatedReasons, and HIFU's comparison rows on Ultherapy. Exosome therapy has no variant module: its archetype asks for an evidence-status comparison and no reviewed copy states one, so it was left out rather than written. Every line is restructured from reviewed copy (the page, the Ultherapy System, Morpheus8, Sylfirm X and Potenza pages, the HIFU page, the Ultherapy vs HIFU post); no new claim, FAQs unchanged, `lastReviewed` unchanged; the arrangement goes to Dr Gan, Dr Say and Dr Yap in the offline round. ~~**Treatments batch B — `microneedling`, `exosome-therapy`, `ultherapy`.** v2 blocks, prose sections deleted per R1. | Content | none | As 1.4; treatments budget lowered ≤15 → ≤12.~~ | ✅ All three at 0/2; treatments budget 15 → **12**; `check:cost` 38 blocks; typecheck, lint, both validators, build pass; blocks verified in the built HTML, screenshot of microneedling at 1440. |
| 2.0a | ✅ **Done 36/36, 2026-10-11** (with 2.1, 2.2, 3.1, 3.2; botox had no prose cost section and got the block directly). **The cheapest cut at sameness, found during 1.2.** Every one of the 36 pages already carries a prose section headed *Sessions & cost factors* — one of the six headings driving the score — and `costFactors` is populated on none of them. Moving that prose into the structured block and **deleting the section** fills the block, removes a generic heading and applies `docs/16` R1, all in one pass. Do this first in each batch below. | Content | 1.2 | `costFactors` on 36/36; the *Sessions & cost factors* heading gone from every page; technology budget drops accordingly. |
| 2.4 | **Lint done 2026-09-28** (`pnpm check:cost`, `scripts/check-cost-factors.mts`): fails on any RM, MYR, ringgit, sen, currency code or symbol in the intro, factors or outro of every `costFactors` block on technology, treatment and concern pages, with self-tests on its own patterns. 35 blocks pass; a planted "from RM800" failed it with the page and field named. It runs in `content-check.yml` beside `check:sameness`, which was never in CI before. **Not in `pnpm build`**: the production image is `node:20-alpine`, which cannot run `--experimental-strip-types`, so chaining it there would break every deploy; it moves into the build with the Node 24 image upgrade (`docs/07`). Because work merges to `main` directly and `content-check.yml` runs only on pull requests, **`deploy-prod.yml` gained a `guards` job** (Node 24) running `check:cost` and `check:sameness`; the image build waits on it, so a failure stops the production deploy and the live site stays as it was (owner's choice, option A, 28 Sep). Staging is not gated. The content half landed with 2.3: all five treatments touched in 1.4 and 2.3 carry `costFactors`. **Cost sections, factors only.** Add `costFactors` to every treatment touched in 1.4 and 2.3: a "What affects the cost of X" heading listing area, sessions, device and combination. **No figure, no range, no `Offer` schema.** Add the lint that fails the build on any currency string inside `costFactors`. | Content + Dev | price decision ✅ | Every touched page has the section; the lint is in CI and passes. |

---

## Week 3 · 5–11 Oct · batch 3, the remaining devices, and three new pages

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 3.1 | ✅ **Done 2026-10-11** (branch `content/tech-batch3-lasers`). Same method as 2.1 and 2.2: nine sections to seven per page. Spine sections: which wavelength does what (PicoSure's per-wavelength indications, PQX 1064 vs 532nm, SP Dynamis 2940nm surface vs 1064nm deep, DermaV 595 + 1064nm, Pro Yellow 577nm and when it is not the right wavelength, M22 IPL as filtered broadband rather than a laser); on Asian and darker skin, reworded from each page's own skin-tone paragraph (755nm melanin absorption, PQX test patches, conservative CO2 settings and priming, IPL on tanned skin); and ablative or not, for SP Dynamis and fractional CO2. The "endpoint" spine is carried by the visit headings (why pigment darkens first, why tattoo ink frosts, why vessels look grey). Every paragraph is existing reviewed copy, moved verbatim or with a sentence moved out; no new claim, FAQs and `lastReviewed` unchanged. Scores: 3 pages 1/7, 4 pages 0/7. ~~**Batch 3 — 7 lasers.** `picosure · fotona-pqx · fotona-sp-dynamis · dermav · pro-yellow · m22-ipl · fractional-co2`. Spine: wavelengths and what each targets · behaviour on Asian and darker skin, PIH and melasma caution · ablative or not, and what that means for the week · what the clinician watches for. Two of these are already indexed, so this batch doubles as a control. | Content | 1.2 | 7/7 differentiated; technology budget lowered ≤14 → ≤7.~~ | ✅ 7/7; technology budget 14 → **7**; `check:cost` 45 blocks; checks and build pass; screenshot of fractional-co2. |
| 3.2 | ✅ **Done 2026-10-11** (branch `content/tech-batch4-remaining`). Same method. Body pages: what it acts on (fat, skin or muscle) and what it will not do (not weight loss, not with a fat layer over the muscle), plus applicators (CoolSculpting areas; Cooltech's simultaneous applicators). Facials: Hydrafacial *Device or hands*, Silkpeel against a hydra-type facial, and when each is not the right treatment or starting point. The plan's "clinic vs spa facial" angle is carried as device vs manual facial, because that is what the reviewed copy says; "spa" appears nowhere in it. Alma: why hair grows back and why one session cannot work; darker skin and fine or pale hair. Every paragraph is existing reviewed copy; no new claim, FAQs and `lastReviewed` unchanged. All seven at 1/7 or 0/7. ~~**Batch 4 — the last 7 technology pages.** `coolsculpting · cooltech · onda-coolwaves · schwarzy · hydrafacial · silkpeel · alma`, using the body, facials and hair-removal spines. The facials pair gets "how a clinic facial differs from a spa facial", which no competitor answers. | Content | 1.2 | 36/36 done; technology budget lowered ≤7 → **0**.~~ | ✅ 36/36; technology budget **0**; `check:cost` 52 blocks; no *Sessions & cost factors* heading left on any technology page (2.0a closed); checks and build pass; screenshot of hydrafacial. |
| 3.3 | ✅ **Built 2026-10-11** (branch `content/concern-acne-scars`). Archetype A, full depth: drivers (what makes acne scar), a three-tab type selector (depressed: ice pick, boxcar, rolling · raised · marks, not scars), the four scar die-cuts, seeDoctor, `treatmentWhy` for microneedling, resurfacing-laser, pico-laser and exosome-therapy (unique lines, Q-03), compare table, firstVisit, risks with the ice-pick limit and the Malaysian-skin PIH paragraph, costFactors, 12 FAQs. The lead answer says Pico is for flat marks, not the dips. Banner is the unused acne-scar banner already in the media manifest; card image cropped from it, not upscaled. **Every clinical line is lifted from reviewed copy** (the acne page's scarring material, the PicoSure, fractional CO2 and microneedling pages); no new claim. **Not signed off:** absent from `concern-signoff.json`, so it renders no byline and its schema names no reviewer; proposed reviewer Dr Hong Peiyi (3 pages, keeps the even spread). **Left out on purpose:** `dermal-fillers` and subcision. No reviewed copy covers either for acne scars, and subcision is still an open client question. The "scar refinement" image in the manifest was not used: it reads as an implied before-and-after. ~~**New page — `/concerns/acne-scars`.** Cleo holds #1 with a 1,250-word 2024 stub that has no FAQ, no price and no scar-type map. Full v2 spine from the start: `drivers` (scar types), `variant` (ice pick / rolling / boxcar / hypertrophic), `treatmentWhy` mapping each subtype to `resurfacing-laser`, `microneedling`, `pico-laser`, `dermal-fillers`, `seeDoctor`, `risks` (PIH on darker skin), `costFactors`, `compare` table, 8 query-shaped FAQs. | Content + Dev | none | Live, in sitemap, linked from `/concerns/acne` and both treatments; lead answer says when Pico is *not* the answer.~~ | ✅ In the build and sitemap; linked from `/concerns`, `/concerns/acne`, and the microneedling, resurfacing-laser and pico-laser pages; `validate:concerns` 0 failures (one expected warning: unsigned); concerns sameness 0/15. |
| 3.4 | **New page — `/concerns/skin-tags-moles`.** Confirmed offered via CO2 laser. Targets `skin tag removal` (2,900/mo; Cleo #6, Clique #9 on the broader term). Must cover: skin tag versus mole · **why a mole is assessed before removal and never taken off on sight** — the compliant and trust-building angle none of the three rivals take · the CO2 method · healing · scarring risk on darker skin · when to see a doctor urgently. Links to `/treatments/resurfacing-laser` and `/technology/fractional-co2`. | Content + Dev | none | Live with lead answer, `seeDoctor`, `risks`, `costFactors`, 6+ FAQs, linked both ways. |
| 3.5 | ✅ **Built 2026-10-11** (branch `content/concern-melasma`). Archetype A, lite depth (three treatments: pico-laser, microneedling for Sylfirm X's pulsed mode, facial-treatments): drivers, a depth selector (epidermal · dermal · mixed), where it appears with a redness differential, seeDoctor, `treatmentWhy`, firstVisit, risks (rebound, PIH, sun protection, what treatment cannot do), costFactors, 8 FAQs. **The lead answer opens with the laser caveat.** Built from Dr Joaan Kong's melasma post, the pigmentation page and the Sylfirm X page. **Left out of the post on purpose:** prescription drug names and doses, timeframes to a result (R-01), and the "combinations outperform" line (R-02). The post now links to the page (one navigational sentence added) and is tagged to it, so it shows in the page's Read next row; pigmentation lists it as related. Not signed off: no byline until a doctor signs; proposed reviewer Dr Joaan Kong. Banner and card image: an AI-generated illustrative photograph (Higgsfield Soul 2.0, outpainted with FLUX.2 Pro to banner shape), approved by the owner 11 Oct; alt text says it is illustrative. Uploaded to the CDN by hand (`concerns/melasma/banner.jpg`, `banner-sm.jpg`); sources `pbanner_melasma.jpg` / `pbanner_melasma_sm.jpg` belong in the media export folder so the next full media sync still finds them. ~~**New page — `/concerns/melasma`.** 720/mo, informational, currently a blog post only. Leads with the caveat that laser can worsen melasma. Full block set from the start — never ship a thin page into a cluster of lookalikes (`docs/16` R3). | Content + Dev | none | Live; the blog post links to it; `/concerns/pigmentation` lists it as related.~~ | ✅ In the build and sitemap; linked from `/concerns`, pigmentation, the blog post, pico-laser and microneedling; `validate:concerns` 0 failures (one expected warning: unsigned); `check:blog` passes. |
| 3.6 | ✅ **Done 2026-10-11** (branch `content/treatments-batch-c`). As 2.3: nine prose sections to two per page, each with a question heading (*Why does cooling affect fat and not the skin around it?* · *Why does Fotona 4D work from inside the mouth?* · *How does radiofrequency warm the skin without needles?* · *How does a bio-stimulator work with your own collagen?* · *Why does hair removal need a course of sessions?*). Typed blocks: facts, routes from the concern pages' `treatmentWhy` lines (none for laser-hair-removal, which no concern links to), variant modules (Cooltech or CoolSculpting · the four Fotona modes · Exilis, Wonderface or XERF · Sculptra, Radiesse, Ellansé or Deusaderm), ctaMid, avoidIf, sessionSteps, afterSession, risks with three `cannotDo` each and a pigment note on the energy-based pages, costFactors, relatedReasons. Every kept or lifted prose sentence is checked by script against the page or a device page. Fotona 4D drops its second photograph (Q-23: two sections render one). No new claim, FAQs and `lastReviewed` unchanged. ~~**Treatments batch C — `fat-freezing`, `fotona-4d`, `radiofrequency`, `bio-stimulator`, `laser-hair-removal`.** Laser hair removal is 2,900/mo, transactional, and has never been crawled. | Content | none | 5/5 carry the block set; treatments budget lowered ≤12 → ≤7.~~ | ✅ 5/5 at 0/2; treatments budget 12 → **7**; `check:cost` 58 blocks; validators and build pass; screenshot of fotona-4d. |
| 3.7 | ✅ **Done 2026-10-11, in `docs/15b` §3.7. Verdict: no measurable effect yet.** Ten-day windows either side of the 28 Sep rewrite (Malaysia). The arms had to be redrawn by crawl date: Google had re-read only 12 of the 22 rewritten pages. Those 12 and the untouched control both gained about a fifth in impressions, with the same median position change (−1.3), so the lift is site-wide, not the rewrite. Re-run at 4.5 on 28 days. Found on the way: **Plinest dropped from the index** (added to the 1.6 queue); **the legacy `blog.kaiteki.my` posts take the injectable brand searches** ("rejuran healer" 4,099 impressions), the strongest case yet for finishing the blog migration with 301s; and **1.6 has not worked**: four queued technology URLs are still not indexed and one is still unknown. ~~**Two-arm ranking check (re-scoped by D2).** Compare impressions, average position and CTR on the 13 injectables before and after batch 1, against device pages not yet rewritten. The before numbers come from `docs/15b`. The question is now whether differentiation earns ranking and clicks, not whether it earns a crawl: the injectables were indexed before any rewrite shipped. | Ops | 2.1, 2.2 | Both arms recorded in `docs/15b` with windows and dates, as evidence for or against `docs/16`.~~ | ✅ Three arms recorded with windows, deploy times and per-page crawl dates; `docs/15b/ranking-check-2026-10-11.csv`. |

---

## Week 4 · 12–18 Oct · finish, languages, measure

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 4.1 | **Treatments batch D — the last 8.** `botulinum-toxin · dermal-fillers · double-eyelid · vascular-pigment-laser · resurfacing-laser · microwave-contouring · muscle-stimulation · facial-treatments`. Seven of the eight are uncrawled, so this is T0 work as much as depth work. Minimum per page: `typicalSessions`, `avoidIf`, `risks`, `costFactors`, 4–6 FAQs, prose sections deleted per R1. | Content | none | 19/19 treatments done; treatments budget lowered ≤7 → **0**. |
| 4.2 | **FAQ depth pass.** Every treatment and technology page to 4–6 questions phrased the way people actually search ("does pico laser hurt", "can pico laser remove pigmentation"). No off-topic filler. FAQPage schema stays off (`docs/02` §3). | Content | none | No page below 4 FAQs; each question is an H3 with its answer in the initial HTML. |
| 4.3 | **Internal-link audit.** A script listing any page missing a link class: treatment → concerns, technologies, related treatments, 1–3 posts, reviewer; concern → treatments with `treatmentWhy`, technologies, related concerns, posts; technology → treatments, concerns, posts. | Dev | 1.3, 1.2 | Script in `scripts/`, zero rows. |
| 4.4 | **Chinese `/zh` and Bahasa Malaysia `/ms` — plumbing plus pilot.** Locale-prefixed routing per `docs/04` §8 with the same slugs, `[locale]` layout and `lang`, translated chrome, reciprocal `alternates.languages` hreflang with `x-default` → English, both locales in `sitemap.ts`, language switcher, and the `/cn/*` redirects re-pointed to `/zh/*` 1:1. A page with no signed translation gets **no** locale URL and no hreflang — never machine translation, never English under a prefix. Pilot: 8 pages per language, translated by people. Chinese — home, `treatments/pico-laser`, `concerns/pigmentation`, `technology/onda-coolwaves`, a KL location, +3 client choice. Malay — home, `technology/rejuran`, `treatments/skin-booster`, `concerns/acne`, a JB location, +3 client choice. | Dev + Content + Client | bilingual reviewers named by 12 Oct | Both prefixes resolve; every pilot page passes hreflang validation; `/cn/*` lands on `/zh/*`; a lint blocks any locale URL still in English. **Fallback:** if reviewers are not named, ship the plumbing with zero locale URLs live and move the pilot to week 5. |
| 4.5 | **Measure.** Re-pull the week-1 baseline (28 days, Malaysia). Report per page type: impressions, clicks, CTR, position. Report `check:sameness` against the 20 Sep baseline (technology 35, treatments 17). Report `costFactors` coverage (target 19/19) and `leadAnswer` coverage (target 36/36). And the two headline numbers (D3): **how many of the 14 URLs unindexed on 24 Sep are indexed now**, and **the change in position and clicks on the rewritten pages** against the `docs/15b` baseline. If the rewritten injectables have not gained ground, say so plainly and move to `docs/16` §5 option B. **Also decide on a paragraph-level sameness check** (backlogged 28 Sep): `check:sameness` reads headings only, and the rewritten pages still share boilerplate paragraphs verbatim (the injectable risks paragraph on profhilo, rejuran, plinest and hydrodeluxe; the HA-filler risks and aftercare copy). If the rewritten pages gained ground, headings were enough and this stays parked; if not, a check that flags any paragraph repeated on 3+ pages is the next hypothesis to test, at the cost of rewriting reviewed clinical copy. | Ops | 1.5 | A dated section appended here with the numbers and a one-paragraph read. Titles are not touched until this exists. |
| 4.6 | **Handover.** What shipped, the crawl-recovery read, what still needs client input (subcision; bilingual reviewers if 4.4 fell back; whether to revisit the no-price decision now depth has shipped), and the week-5 backlog. | Content | all | Sent; copy filed in `docs/`. |

---

## The sameness ratchet

The one number that tracks the critical path. Lower the budgets in `scripts/check-sameness.mts` as each batch
lands; never raise one to make the build pass.

| Milestone | technology | treatments |
|---|---|---|
| Baseline, 20 Sep | 35 / 36 | 17 / 19 |
| **Actual, 21 Sep** after 1.2, 1.2a, 2.0 | **35 — unchanged, as expected** | 17 |
| **Actual, 24 Sep** after 1.4 | 35 | **15** |
| End week 1 | 35 | ≤15 |
| **Actual, 28 Sep** after 2.1 | **23** | 15 |
| **Actual, 28 Sep** after 2.2 | **14** (after the measure fix below) | 15 |
| **Actual, 28 Sep** after 2.3 | 14 | **12** |
| **Actual, 11 Oct** after 3.1 | **7** | 12 |
| **Actual, 11 Oct** after 3.2 | **0** | 12 |
| **Actual, 11 Oct** after 3.6 | 0 | **7** |
| End week 2 | ≤14 | ≤12 |
| End week 3 | **0** | ≤7 |
| End week 4 | **0** | **0** |

**Measure fixed, 28 Sep.** A heading used to count as generic only when half the cluster (18 of 36) used it. With 22 pages rewritten, the six template headings survived on 14 pages, below that line, so the script reported 0 while those 14 were still identical to each other. `check:sameness` now calls a heading generic when **five or more pages** carry it. Any fixed count from 3 to 8 flagged exactly the same pages on the day of the change (technology 14, treatments 15, concerns 0), so the budgets did not move and the 20 Sep baseline reads the same under either rule. The same day, accents are stripped before brand names are matched: "What is Ellansé?" had escaped the brand list and scored as unique. **Known blind spot:** the script reads headings only, so identical paragraphs under different headings pass (the shared injectable risks paragraph, for one). A paragraph-level check is backlogged to 4.5.

---

## Not in this plan, on purpose

- FAQPage or HowTo schema; hidden `Product`/`Offer` prices; celebrity or testimonial video; Google-reviews widgets
  with schema; machine-translated language copies.
- **Any price, range or `Offer` schema**, and **any branch→device availability** — both settled client decisions.
- Title and meta rewrites. The click problem is AEO, not titles; 4.5 decides whether any title work is warranted.
- The blog migration (03b T3), which continues on its own track; 1.3 links to whatever posts are in-repo.
- Full translation of all 69 pages. Week 4 ships plumbing plus a 16-page pilot; the rest is week 5+.
- Consolidating the four HA filler pages into one (`docs/16` §5 option B). Only on the table if 4.5 shows batch 1
  is still uncrawled.

## Capacity

| Lane | Load |
|---|---|
| Dev | ≈3 days (1.2, 1.3, 2.4 lint, 4.3) plus ≈3 days locale plumbing in 4.4 |
| Content | ≈14 days — 36 technology pages differentiated, 19 treatment block sets, 3 new concern pages, FAQ pass |
| Client | 30 min/week medical review; name the two bilingual reviewers before 12 Oct |
| Ops | ≈half a day a week |
| Translation | Separate budget, 16 pilot pages, human translators |

If content capacity is one person, drop **3.4** (skin tags) first and **4.1** second into week 5. Weeks 1 and 2
do not move: they are the crawl-recovery path and everything else depends on them.

---

## 4.5 Measure — 2026-10-28

> Data file: [`15b/gsc-measure-2026-10-28.csv`](15b/gsc-measure-2026-10-28.csv), one row per treatment, concern and
> technology page (72, zeros included), with both windows, the rewrite batch, today's `check:sameness` score and
> today's URL Inspection where it was run.

**Verdict: the rewritten pages have not gained ground, and none of the 14 is indexed.** Clicks on the 22 pages
rewritten on 28 Sep went from 15 to 28, but their position got worse, not better. Per D3 and the 4.5 row, the plan
moves to `docs/16` §5 option B, and the paragraph-level sameness check becomes the next hypothesis.

### How it was pulled

| | |
|---|---|
| Source | Search Console API, `sc-domain:kaiteki.my`, Web, country = Malaysia, dimension `page`, as in `docs/15b` |
| Baseline | **25 Aug – 21 Sep 2026** (28 days). Re-pulled today; it matches `gsc-baseline-2026-09-21.csv` on all 69 rows |
| Measure | **28 Sep – 25 Oct 2026** (28 days). Ends 3 days before the pull, as the baseline did. 27 Oct was partial on the day; 26 Oct is left out to keep the 3-day rule. It starts on the day batches 2.1 to 2.3 went live |
| Arms | before **31 Aug – 27 Sep** (28 days, ends the day before the rewrite) · halves **28 Sep – 10 Oct** and **13 – 25 Oct** (13 days each) |
| Indexing | live URL Inspection, 28 Oct, on the 14, Plinest, Oligio and 11 rewritten technology pages |

### What changed on the site during the measure window

These overlap the window and make any before/after reading weaker:

- **12 Oct, blog migration.** 152 legacy posts moved to `/blog`, and `blog.kaiteki.my` now 301s to `kaiteki.my/blog`
  (checked today). Brand queries that went to the subdomain posts can now land on `/blog` instead.
- **12 Oct, trim of concern and treatment pages** (`30ca38e`, `74de4bf`): sections simplified, media cut, hero
  images swapped. Every concern and treatment page changed, so neither type has an untouched control.
- **11 Oct, batches 3.1, 3.2 and 3.6** went live. The 3.7 control arm is rewritten from day 14 of the window.
- **14 Oct onward, `/zh` and `/ms`.** No `/zh` or `/ms` URL earned a single impression from 14 to 26 Oct, in any
  country, so they do not appear in the numbers. The English pages did gain hreflang alternates from 14 Oct.
- 26 Oct, before/after results on concern and treatment pages (`c27050a`): after the window, no effect here.

### Headline 1 · the 14 URLs unindexed on 24 Sep (D3)

**0 of 14 are indexed.** Six have been crawled for the first time, which is movement, but not indexing.

| Status on 28 Oct | Count | Pages |
|---|---|---|
| Indexed | **0** | none |
| Crawled, currently not indexed (all crawled 21 Oct) | 6 | treatments `double-eyelid`, `vascular-pigment-laser`, `microwave-contouring`, `muscle-stimulation` · concerns `vascular-lesions`, `excessive-sweating` |
| Discovered, currently not indexed (never crawled) | 7 | technology `juvederm`, `ultracel-q`, `lifthera`, `xerf`, `cooltech`, `fotona-sp-dynamis`, `wonderface` |
| URL is unknown to Google | 1 | treatments `resurfacing-laser` |

- `wonderface` moved from *unknown* to *discovered*. `resurfacing-laser` moved the other way, from *discovered* to
  *unknown*, although it returns 200 and is in the sitemap.
- **Plinest is back in the index**, crawled 26 Oct, after being dropped on 11 Oct.
- `technology/oligio`, new on 11 Oct, is *Discovered, currently not indexed*.
- Whether the client made the 1.6 requests is still unconfirmed. Nothing on the inspected pages shows that they did.

### Headline 2 · the rewritten pages against the 15b baseline

Baseline 25 Aug – 21 Sep against measure 28 Sep – 25 Oct.

| Group | Pages (with impressions) | Clicks | Impressions | Impression-weighted position | Median position change per page |
|---|---|---|---|---|---|
| **2.1 injectables**, live 28 Sep | 13 (12 → 12) | 9 → 12 | 2,198 → 3,688 (+68%) | 16.7 → 18.6 | **+3.3** (worse) |
| 2.2 lifting, live 28 Sep | 9 (4 → 5) | 6 → 16 | 1,188 → 2,380 (+100%) | 25.9 → 26.0 | −7.2 (n = 4) |
| **2.1 + 2.2** | 22 (16 → 17) | **15 → 28** | 3,386 → 6,068 (+79%) | **19.9 → 21.5** | **+2.4** (worse) |
| 3.1 + 3.2, live 11 Oct | 14 (12 → 11) | 73 → 71 | 8,957 → 8,552 (−5%) | 14.5 → 19.6 | −0.4 |
| Treatments 1.4 + 2.3 | 5 (5 → 5) | 85 → 68 | 12,638 → 11,252 (−11%) | 14.4 → 13.5 | +0.5 |
| Treatments 3.6, live 11 Oct | 5 (5 → 5) | 12 → 3 | 2,862 → 2,852 (0%) | 25.7 → 27.6 | +2.7 |

A plus sign means a higher position number, so a worse ranking. The injectables' impression gain is partly
mechanical: 12 of the 13 were first indexed on 6–7 Sep, 12 days into the baseline window. Position is the fairer
measure, and it got worse.

Per page, two injectables improved: `ellanse` (31.5 → 14.3, 1 → 3 clicks) and `belotero` (12.3 → 10.5).
`restylane` (6.2 → 8.0) and `radiesse` (8.4 → 10.0) roughly held. The rest fell: `rejuran` (21.5 → 35.2, 250 → 53
impressions), `sculptra` (18.4 → 28.1), `botox` (10.9 → 20.2), `juvelook` (9.8 → 13.3), `plinest` (18.3 → 21.3,
out of the index for part of the window), and `art-filler` and `hydrodeluxe` on small numbers. In lifting,
`sylfirm-x` (27.5 → 14.1, 1 → 4 clicks) and `potenza` (13.0 → 9.8, 5 → 11 clicks) gained; `ultherapy-system`
stays past 60.

### 3.7 arms on 28 days

The 3.7 arms (`15b` §3.7) re-run with 28-day windows either side of the 28 Sep rewrite.

| Arm | Pages | Clicks | Impressions | Impression-weighted position | Median position change per page |
|---|---|---|---|---|---|
| **A · rewritten, re-crawled by 11 Oct** | 12 | 18 → 27 | 2,934 → 4,085 (+39%) | 14.3 → 14.2 | +1.0 |
| B · rewritten, not re-crawled by 11 Oct | 5 | 6 → 1 | 1,743 → 1,983 (+14%) | 24.9 → 36.5 | +4.9 |
| **C · control, rewritten 11 Oct** (mid-window) | 14 | 86 → 71 | 8,614 → 8,552 (−1%) | 14.2 → 19.6 | −0.1 |
| C without onda-coolwaves | 13 | 25 → 26 | 6,782 → 6,567 (−3%) | 16.5 → 23.9 | +0.5 |

**There is no clean control on a 28-day window.** C was rewritten on 11 Oct, so half its after-window is treated.
The B pages have all been re-crawled since (rejuran 22 Oct, sculptra 27 Oct, radiesse 17 Oct, ultherapy-system
21 Oct, plinest 26 Oct), so B no longer means "Google has not seen the new text", only "Google saw it late".

The rewrite dates allow one more cut. Batches 2.1 and 2.2 were live in both halves of the window; batches 3.1 and
3.2 went live between them. If a rewrite lifts ranking, the second group should improve against the first.

| Group, 28 Sep – 10 Oct → 13 – 25 Oct | Pages | Clicks | Impressions | Impression-weighted position | Median position change per page |
|---|---|---|---|---|---|
| A + B, rewritten before both halves | 17 | 16 → 12 | 2,824 → 2,961 (+5%) | 15.9 → 27.7 | +2.6 |
| C, rewritten between the halves | 14 | 41 → 28 | 3,772 → 4,243 (+12%) | 15.4 → 24.2 | +4.8 |
| C without onda-coolwaves | 13 | 18 → 7 | 2,894 → 3,277 (+13%) | 18.4 → 29.9 | +5.3 |

Both groups lost position in the second half, the newly rewritten one slightly more. The fall coincides with the
12–14 Oct deploys, not with either rewrite.

### Search performance by page type (Malaysia, 28 days)

Baseline → measure. Technology, treatments and concerns are detail pages only, as in `15b`; their hubs are in
"Other" with the home page, doctors, products, Our Story and legacy `.php` and `www` URLs.

| Page type | Pages with impressions | Clicks | Impressions | CTR | Avg. position* |
|---|---|---|---|---|---|
| Technology | 28 → 28 | 88 → 99 (+13%) | 12,343 → 14,620 (+18%) | 0.71% → 0.68% | 16.0 → 20.4 |
| Treatments | 14 → 14 | 103 → 76 (−26%) | 24,015 → 21,747 (−9%) | 0.43% → 0.35% | 15.3 → 15.9 |
| Concerns | 12 → 14 | 30 → 30 (0%) | 27,326 → 22,218 (−19%) | 0.11% → 0.14% | 14.8 → 13.9 |
| Locations | 10 → 10 | 216 → 211 (−2%) | 25,800 → 25,198 (−2%) | 0.84% → 0.84% | 11.2 → 10.3 |
| Blog, `kaiteki.my/blog` | 20 → 237 | 15 → 157 | 3,144 → 34,212 | 0.48% → 0.46% | 8.4 → 9.8 |
| Legacy blog, `blog.kaiteki.my` | 286 → 299 | 84 → 31 (−63%) | 45,793 → 30,240 (−34%) | 0.18% → 0.10% | 21.5 → 23.2 |
| Other | 32 → 31 | 314 → 270 (−14%) | 25,273 → 25,014 (−1%) | 1.24% → 1.08% | 18.1 → 21.9 |
| **Total** | 402 → 633 | **850 → 874 (+3%)** | 163,694 → 173,249 (+6%) | 0.52% → 0.50% | 16.7 → 16.1 |

\* Weighted by impressions.

- **The blog is the one clear gain.** Both hosts together went from 99 to 188 clicks and from 48,937 to 64,452
  impressions, at a better position (20.7 → 16.1). That is the 12 Oct migration, with only two weeks of it in the
  window. 106 of the 237 `/blog` rows are `#anchor` URLs, which Search Console counts separately: 4,862
  impressions, 0 clicks.
- Treatments lost a quarter of their clicks, mostly on `exosome-therapy` (61 → 45, though its position improved
  7.7 → 5.8) and `skin-booster` (9 → 2).
- Concerns still convert worst: 22,218 impressions for 30 clicks.

### Sameness and coverage

| Measure | 20 Sep baseline | 28 Oct | Target |
|---|---|---|---|
| `check:sameness`, technology | 35 / 36 | **0 / 37** | 0 |
| `check:sameness`, treatments | 17 / 19 | **0 / 19** | 0 |
| `check:sameness`, concerns | 0 / 14 | 0 / 16 | 0 |
| `leadAnswer`, technology | 0 / 36 | **37 / 37** | 36 / 36 |
| `costFactors`, treatments | 1 / 19 | **11 / 19** (19 / 19 after 4.1, same day) | 19 / 19 |

- The ratchet reached its end state on both clusters. Technology now has 37 pages, with `oligio` added 11 Oct.
- **Treatments reached 0 without 4.1.** The eight batch-D pages (`botulinum-toxin`, `dermal-fillers`,
  `double-eyelid`, `vascular-pigment-laser`, `resurfacing-laser`, `microwave-contouring`, `muscle-stimulation`,
  `facial-treatments`) carry no generic heading, but they also have no `costFactors` block. They are the eight
  missing from 19/19 at measurement. 4.1 shipped later the same day (commit `3666c89`), which brings it to
  19/19; none of that is in these numbers. Five of the eight are among the 14 unindexed URLs.
- `costFactors` is also on 37/37 technology and 16/16 concern pages; `leadAnswer` on 19/19 treatments.

### Reading it

Heading-level sameness went from 35 to 0 on technology pages and from 17 to 0 on treatments, and in the same
period the rewritten technology pages lost ground. The 22 pages rewritten on 28 Sep earned 13 more clicks over
28 days, but their median position worsened by 2.4 places, the injectables by 3.3. Against the 28-day arms, the
rewritten-and-recrawled pages held their weighted position while the control slipped, but the median per-page
change does not separate them (+1.0 against −0.1). When the control was itself rewritten mid-window, it did not
improve against the pages rewritten earlier; both fell after the 12–14 Oct deploys. On crawl, none of the 14 is
indexed, though six were crawled for the first time on 21 Oct. Nothing here shows the rewrite helped ranking.
It also does not show it hurt: the October changes to the blog, the trim of the concern and treatment pages and
the hreflang rollout all landed inside the window, and the pages involved have one to a dozen clicks each. The
blog migration is the only change in the window with a clear gain.

### Decisions this section makes

1. **Option B goes to the client** (`docs/16` §5). The rewritten injectables have not gained ground, so the plan
   moves to consolidation for the HA sub-group: one *HA dermal fillers* page with Juvéderm, Restylane, Belotero and
   Art Filler as sections and anchors, and 301s from the four brand URLs. Juvéderm has never been crawled; the other
   three have 71 to 225 impressions each and two clicks or fewer. `docs/16` worded the trigger as "batch 1 still
   uncrawled", which is no longer the case (12 of 13 are indexed). The 4.5 row's trigger, "has not gained ground",
   is met. It is the client's call.
2. **Paragraph-level sameness becomes the next hypothesis to test.** Unique headings were not enough. The check
   that flags any paragraph repeated on 3+ pages (the shared injectable risks paragraph, the HA-filler risks and
   aftercare copy) is the next thing to build. The cost is rewriting reviewed clinical copy, which goes back into
   the offline review round. Build the check first and count the repeats before committing to the rewrite.
3. **The 14 stay on the request queue, with `oligio` added.** Confirm with the client whether the 1.6 requests
   were ever made.
4. **Titles.** Concerns are at 0.14% CTR on 22k impressions, so the click problem is unchanged. This section exists,
   so title work is no longer blocked; it is not decided here.

### Not measured

- **No technology control on 28 days.** Every technology page was rewritten by 11 Oct.
- **No first re-crawl date after a rewrite.** URL Inspection gives only the latest crawl.
- **Pages with impressions in other countries** are not in these numbers, by design, as in `15b`.
- **`/zh` and `/ms`**: no impressions yet, so nothing to measure.
