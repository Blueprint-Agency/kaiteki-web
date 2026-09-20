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
| Indexing requests | Requested manually, nothing moved | **Suspended.** Not the lever. `docs/16` is. |
| Chinese + Malay | **Both go ahead** | Week 4, item 4.4. Bilingual reviewers still to be named. |
| Skin tags / moles | **Offered, via CO2 laser** | New page, item 3.4. Subcision still unanswered, stays in backlog. |

---

## Week 1 · 21–27 Sep · plumbing, and the first pages to break the pattern

The technology template moves **into week 1** from week 2: all 36 technology pages need `leadAnswer`, `facts` and
`costFactors` to exist as fields before any of them can be differentiated, so this gates weeks 2 and 3.

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 1.1 | ✅ **Reviewer assignment, done 2026-09-20.** All 69 pages redistributed evenly across the 21 doctors (six carry 4, fifteen carry 3); `config/concern-signoff.json` filled from the existing editorial dates, so all 14 concern pages now render the byline, author card and `reviewedBy` in schema, and carry a real `lastmod` in the sitemap. Data-file headers rewritten to describe the offline-review process rather than calling the values placeholders. | — | — | ✅ `validate:concerns` 0 failures; 69/69 pages name a reviewer. |
| 1.2 | **Technology template upgrade.** `components/TechnologyView.tsx`: `LeadAnswer` capsule, `FactRail`, heading anchors + `ArticleToc`, `AuthorCard`, closing CTA in the treatment style, keep the standing `Disclaimer`. Extend `Technology` in `lib/types.ts` with `leadAnswer`, `facts`, `costFactors`. **No `availableAt`** — cancelled. | Dev | none | Every block renders conditionally; typecheck passes across all 36 entries; screenshots at 1900/1100/400 in the PR. |
| 1.3 | **`relatedPosts` on all three templates.** A "Read next" row of up to 3 blog cards, resolved from the tag arrays already on `content/data/blog.ts`. | Dev | none | Any page with ≥1 tagged post shows the row as real `<a href="/blog/…">`; pages without a match render nothing. |
| 1.4 | **Treatments batch A — `hifu`, `skin-booster`.** Full v2 block set (`typicalSessions`, `suitableFor`, `notSuitableFor`, `avoidIf`, `sessionSteps`, `afterSession`, `risks`, `costFactors`, one `comparisons` table), **then delete the prose sections those blocks replace** (`docs/16` R1). This is the move that took `pico-laser` from nine sections to two. | Content | none | Both pages ≤4 prose sections; all blocks render; `check:sameness` treatments budget lowered 17 → ≤15. |
| 1.5 | **Baseline snapshot.** GSC page-level export for the three page types, 28 days, Malaysia filter, committed as a dated CSV. Record the `check:sameness` numbers alongside it. | Ops | none | File on `main`; this is what 4.5 compares against. |

---

## Week 2 · 28 Sep – 4 Oct · batch 1 and 2 — the never-crawled clusters

The heart of the plan. Per `docs/16` §4, injectables first: all 13 are uncrawled, they are the most uniform group
on the site, and they are the highest-value commercial cluster.

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 2.1 | **Batch 1 — 13 injectables.** `profhilo · rejuran · plinest · juvelook · hydrodeluxe · botox · sculptra · ellanse · radiesse · juvederm · restylane · belotero · art-filler`. Per-page `leadAnswer` (40–60 words) and `facts`, then replace the shared six-heading tail with at least two sections from the injectables spine (`docs/16` §3): what is actually in it · is it reversible · how long it lasts and how it wears off · what it is not · where and at what depth · the in-class comparison. Headings as questions. | Content | 1.2 | 13/13 carry `leadAnswer` + `facts`; none is "mostly generic" by `check:sameness`; technology budget lowered 35 → ≤23. |
| 2.2 | **Batch 2 — 9 lifting & tightening.** `ultracel-q · lifthera · ultherapy-system · xerf · sylfirm-x · morpheus8 · potenza · btl-exilis · wonderface` (eight of nine uncrawled). Spine: what depth it reaches in millimetres · lifting vs tightening vs volume · when a lift is not the answer · which energy type and why. | Content | 1.2 | 9/9 differentiated; technology budget lowered ≤23 → ≤14. |
| 2.3 | **Treatments batch B — `microneedling`, `exosome-therapy`, `ultherapy`.** v2 blocks, prose sections deleted per R1. | Content | none | As 1.4; treatments budget lowered ≤15 → ≤12. |
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
| 3.7 | **T0 two-arm re-check.** Re-inspect 10 URLs: five that received batch-1 or batch-2 work, five that have not been touched yet. The question is whether differentiation earns the crawl. **No further manual indexing requests.** | Ops | 2.1, 2.2 | Both arms recorded in `docs/03c` with dates, as evidence for or against `docs/16`. |

---

## Week 4 · 12–18 Oct · finish, languages, measure

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 4.1 | **Treatments batch D — the last 8.** `botulinum-toxin · dermal-fillers · double-eyelid · vascular-pigment-laser · resurfacing-laser · microwave-contouring · muscle-stimulation · facial-treatments`. Seven of the eight are uncrawled, so this is T0 work as much as depth work. Minimum per page: `typicalSessions`, `avoidIf`, `risks`, `costFactors`, 4–6 FAQs, prose sections deleted per R1. | Content | none | 19/19 treatments done; treatments budget lowered ≤7 → **0**. |
| 4.2 | **FAQ depth pass.** Every treatment and technology page to 4–6 questions phrased the way people actually search ("does pico laser hurt", "can pico laser remove pigmentation"). No off-topic filler. FAQPage schema stays off (`docs/02` §3). | Content | none | No page below 4 FAQs; each question is an H3 with its answer in the initial HTML. |
| 4.3 | **Internal-link audit.** A script listing any page missing a link class: treatment → concerns, technologies, related treatments, 1–3 posts, reviewer; concern → treatments with `treatmentWhy`, technologies, related concerns, posts; technology → treatments, concerns, posts. | Dev | 1.3, 1.2 | Script in `scripts/`, zero rows. |
| 4.4 | **Chinese `/zh` and Bahasa Malaysia `/ms` — plumbing plus pilot.** Locale-prefixed routing per `docs/04` §8 with the same slugs, `[locale]` layout and `lang`, translated chrome, reciprocal `alternates.languages` hreflang with `x-default` → English, both locales in `sitemap.ts`, language switcher, and the `/cn/*` redirects re-pointed to `/zh/*` 1:1. A page with no signed translation gets **no** locale URL and no hreflang — never machine translation, never English under a prefix. Pilot: 8 pages per language, translated by people. Chinese — home, `treatments/pico-laser`, `concerns/pigmentation`, `technology/onda-coolwaves`, a KL location, +3 client choice. Malay — home, `technology/rejuran`, `treatments/skin-booster`, `concerns/acne`, a JB location, +3 client choice. | Dev + Content + Client | bilingual reviewers named by 12 Oct | Both prefixes resolve; every pilot page passes hreflang validation; `/cn/*` lands on `/zh/*`; a lint blocks any locale URL still in English. **Fallback:** if reviewers are not named, ship the plumbing with zero locale URLs live and move the pilot to week 5. |
| 4.5 | **Measure.** Re-pull the week-1 baseline (28 days, Malaysia). Report per page type: impressions, clicks, CTR, position. Report `check:sameness` against the 20 Sep baseline (technology 35, treatments 17). Report `costFactors` coverage (target 19/19) and `leadAnswer` coverage (target 36/36). And the headline number: **how many of the 34 never-crawled URLs have been crawled since.** If the injectables are still uncrawled, say so plainly and move to `docs/16` §5 option B. | Ops | 1.5 | A dated section appended here with the numbers and a one-paragraph read. Titles are not touched until this exists. |
| 4.6 | **Handover.** What shipped, the crawl-recovery read, what still needs client input (subcision; bilingual reviewers if 4.4 fell back; whether to revisit the no-price decision now depth has shipped), and the week-5 backlog. | Content | all | Sent; copy filed in `docs/`. |

---

## The sameness ratchet

The one number that tracks the critical path. Lower the budgets in `scripts/check-sameness.mts` as each batch
lands; never raise one to make the build pass.

| Milestone | technology | treatments |
|---|---|---|
| Baseline, 20 Sep | 35 / 36 | 17 / 19 |
| End week 1 | 35 | ≤15 |
| End week 2 | ≤14 | ≤12 |
| End week 3 | **0** | ≤7 |
| End week 4 | **0** | **0** |

---

## Not in this plan, on purpose

- FAQPage or HowTo schema; hidden `Product`/`Offer` prices; celebrity or testimonial video; Google-reviews widgets
  with schema; machine-translated language copies.
- **Any price, range or `Offer` schema**, and **any branch→device availability** — both settled client decisions.
- **Further manual indexing requests.** They moved nothing and the cause is elsewhere.
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
