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
> **Progress.** Week 1: 1.1 ✅ (reviewer assignment, 20 Sep) · 1.2 ✅ + 1.2a ✅ (technology template and audit fixes, 21 Sep, merged `1db24d6`) · 2.0 ✅ (36 capsules and fact sets, pulled forward) · 1.3 ✅ (Read next row, 24 Sep) · 1.5 ✅ (baseline, 24 Sep — **it found 20 of the 34 'never-crawled' URLs already indexed; see `docs/15b` before starting week 2**). · 1.4 ✅ (hifu, skin-booster, 24 Sep). Open in week 1: 1.6 indexing requests (client).
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
| 2.1 | **Batch 1 — 13 injectables.** `profhilo · rejuran · plinest · juvelook · hydrodeluxe · botox · sculptra · ellanse · radiesse · juvederm · restylane · belotero · art-filler`. Per-page `leadAnswer` (40–60 words) and `facts`, then replace the shared six-heading tail with at least two sections from the injectables spine (`docs/16` §3): what is actually in it · is it reversible · how long it lasts and how it wears off · what it is not · where and at what depth · the in-class comparison. Headings as questions. | Content | 1.2 | 13/13 carry `leadAnswer` + `facts`; none is "mostly generic" by `check:sameness`; technology budget lowered 35 → ≤23. |
| 2.2 | **Batch 2 — 9 lifting & tightening.** `ultracel-q · lifthera · ultherapy-system · xerf · sylfirm-x · morpheus8 · potenza · btl-exilis · wonderface` (eight of nine uncrawled). Spine: what depth it reaches in millimetres · lifting vs tightening vs volume · when a lift is not the answer · which energy type and why. | Content | 1.2 | 9/9 differentiated; technology budget lowered ≤23 → ≤14. |
| 2.3 | **Treatments batch B — `microneedling`, `exosome-therapy`, `ultherapy`.** v2 blocks, prose sections deleted per R1. | Content | none | As 1.4; treatments budget lowered ≤15 → ≤12. |
| 2.0a | **The cheapest cut at sameness, found during 1.2.** Every one of the 36 pages already carries a prose section headed *Sessions & cost factors* — one of the six headings driving the score — and `costFactors` is populated on none of them. Moving that prose into the structured block and **deleting the section** fills the block, removes a generic heading and applies `docs/16` R1, all in one pass. Do this first in each batch below. | Content | 1.2 | `costFactors` on 36/36; the *Sessions & cost factors* heading gone from every page; technology budget drops accordingly. |
| 2.4 | **Cost sections, factors only.** Add `costFactors` to every treatment touched in 1.4 and 2.3: a "What affects the cost of X" heading listing area, sessions, device and combination. **No figure, no range, no `Offer` schema.** Add the lint that fails the build on any currency string inside `costFactors`. | Content + Dev | price decision ✅ | Every touched page has the section; the lint is in CI and passes. |

---

## Week 3 · 5–11 Oct · batch 3, the remaining devices, and three new pages

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 3.1 | **Batch 3 — 7 lasers.** `picosure · fotona-pqx · fotona-sp-dynamis · dermav · pro-yellow · m22-ipl · fractional-co2`. Spine: wavelengths and what each targets · behaviour on Asian and darker skin, PIH and melasma caution · ablative or not, and what that means for the week · what the clinician watches for. Two of these are already indexed, so this batch doubles as a control. | Content | 1.2 | 7/7 differentiated; technology budget lowered ≤14 → ≤7. |
| 3.2 | **Batch 4 — the last 7 technology pages.** `coolsculpting · cooltech · onda-coolwaves · schwarzy · hydrafacial · silkpeel · alma`, using the body, facials and hair-removal spines. The facials pair gets "how a clinic facial differs from a spa facial", which no competitor answers. | Content | 1.2 | 36/36 done; technology budget lowered ≤7 → **0**. |
| 3.3 | **New page — `/concerns/acne-scars`.** Cleo holds #1 with a 1,250-word 2024 stub that has no FAQ, no price and no scar-type map. Full v2 spine from the start: `drivers` (scar types), `variant` (ice pick / rolling / boxcar / hypertrophic), `treatmentWhy` mapping each subtype to `resurfacing-laser`, `microneedling`, `pico-laser`, `dermal-fillers`, `seeDoctor`, `risks` (PIH on darker skin), `costFactors`, `compare` table, 8 query-shaped FAQs. | Content + Dev | none | Live, in sitemap, linked from `/concerns/acne` and both treatments; lead answer says when Pico is *not* the answer. |
| 3.4 | **New page — `/concerns/skin-tags-moles`.** Confirmed offered via CO2 laser. Targets `skin tag removal` (2,900/mo; Cleo #6, Clique #9 on the broader term). Must cover: skin tag versus mole · **why a mole is assessed before removal and never taken off on sight** — the compliant and trust-building angle none of the three rivals take · the CO2 method · healing · scarring risk on darker skin · when to see a doctor urgently. Links to `/treatments/resurfacing-laser` and `/technology/fractional-co2`. | Content + Dev | none | Live with lead answer, `seeDoctor`, `risks`, `costFactors`, 6+ FAQs, linked both ways. |
| 3.5 | **New page — `/concerns/melasma`.** 720/mo, informational, currently a blog post only. Leads with the caveat that laser can worsen melasma. Full block set from the start — never ship a thin page into a cluster of lookalikes (`docs/16` R3). | Content + Dev | none | Live; the blog post links to it; `/concerns/pigmentation` lists it as related. |
| 3.6 | **Treatments batch C — `fat-freezing`, `fotona-4d`, `radiofrequency`, `bio-stimulator`, `laser-hair-removal`.** Laser hair removal is 2,900/mo, transactional, and has never been crawled. | Content | none | 5/5 carry the block set; treatments budget lowered ≤12 → ≤7. |
| 3.7 | **Two-arm ranking check (re-scoped by D2).** Compare impressions, average position and CTR on the 13 injectables before and after batch 1, against device pages not yet rewritten. The before numbers come from `docs/15b`. The question is now whether differentiation earns ranking and clicks, not whether it earns a crawl: the injectables were indexed before any rewrite shipped. | Ops | 2.1, 2.2 | Both arms recorded in `docs/15b` with windows and dates, as evidence for or against `docs/16`. |

---

## Week 4 · 12–18 Oct · finish, languages, measure

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 4.1 | **Treatments batch D — the last 8.** `botulinum-toxin · dermal-fillers · double-eyelid · vascular-pigment-laser · resurfacing-laser · microwave-contouring · muscle-stimulation · facial-treatments`. Seven of the eight are uncrawled, so this is T0 work as much as depth work. Minimum per page: `typicalSessions`, `avoidIf`, `risks`, `costFactors`, 4–6 FAQs, prose sections deleted per R1. | Content | none | 19/19 treatments done; treatments budget lowered ≤7 → **0**. |
| 4.2 | **FAQ depth pass.** Every treatment and technology page to 4–6 questions phrased the way people actually search ("does pico laser hurt", "can pico laser remove pigmentation"). No off-topic filler. FAQPage schema stays off (`docs/02` §3). | Content | none | No page below 4 FAQs; each question is an H3 with its answer in the initial HTML. |
| 4.3 | **Internal-link audit.** A script listing any page missing a link class: treatment → concerns, technologies, related treatments, 1–3 posts, reviewer; concern → treatments with `treatmentWhy`, technologies, related concerns, posts; technology → treatments, concerns, posts. | Dev | 1.3, 1.2 | Script in `scripts/`, zero rows. |
| 4.4 | **Chinese `/zh` and Bahasa Malaysia `/ms` — plumbing plus pilot.** Locale-prefixed routing per `docs/04` §8 with the same slugs, `[locale]` layout and `lang`, translated chrome, reciprocal `alternates.languages` hreflang with `x-default` → English, both locales in `sitemap.ts`, language switcher, and the `/cn/*` redirects re-pointed to `/zh/*` 1:1. A page with no signed translation gets **no** locale URL and no hreflang — never machine translation, never English under a prefix. Pilot: 8 pages per language, translated by people. Chinese — home, `treatments/pico-laser`, `concerns/pigmentation`, `technology/onda-coolwaves`, a KL location, +3 client choice. Malay — home, `technology/rejuran`, `treatments/skin-booster`, `concerns/acne`, a JB location, +3 client choice. | Dev + Content + Client | bilingual reviewers named by 12 Oct | Both prefixes resolve; every pilot page passes hreflang validation; `/cn/*` lands on `/zh/*`; a lint blocks any locale URL still in English. **Fallback:** if reviewers are not named, ship the plumbing with zero locale URLs live and move the pilot to week 5. |
| 4.5 | **Measure.** Re-pull the week-1 baseline (28 days, Malaysia). Report per page type: impressions, clicks, CTR, position. Report `check:sameness` against the 20 Sep baseline (technology 35, treatments 17). Report `costFactors` coverage (target 19/19) and `leadAnswer` coverage (target 36/36). And the two headline numbers (D3): **how many of the 14 URLs unindexed on 24 Sep are indexed now**, and **the change in position and clicks on the rewritten pages** against the `docs/15b` baseline. If the rewritten injectables have not gained ground, say so plainly and move to `docs/16` §5 option B. | Ops | 1.5 | A dated section appended here with the numbers and a one-paragraph read. Titles are not touched until this exists. |
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
| End week 2 | ≤14 | ≤12 |
| End week 3 | **0** | ≤7 |
| End week 4 | **0** | **0** |

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
