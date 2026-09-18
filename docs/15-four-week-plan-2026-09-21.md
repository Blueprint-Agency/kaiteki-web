# 15 — Four-week plan: close the page-type gaps (21 Sep – 18 Oct 2026)

> **What this is.** The execution plan for `docs/03d` (treatment / concern / technology gap analysis, 2026-09-18).
> Eight decisions D1–D8 plus the two 03b tickets that gate them (T0 never-crawled, T2 Cloudflare bot block),
> laid out week by week with an owner, a dependency and a definition of done per item.
> Tick boxes as work lands; keep the dates. If a client input slips, the item moves to the next week, not off the
> plan.
>
> **Lanes.** `Client` = Kaiteki (doctors, ops, Cloudflare login) · `Content` = authoring in `content/data/*.ts` and
> MDX · `Dev` = templates, schema, tooling · `Ops` = GSC, Cloudflare, indexing requests.
>
> **Rule for every content item:** it is not done until `pnpm typecheck`, `pnpm lint` and the content validators
> pass, the page has been previewed on localhost, and the change is on `main`.

---

## Day 1 · Thu 18 – Fri 19 Sep · unblock everything

One message to the client with the four asks from `03d §5`. Nothing in weeks 2–4 that depends on them starts
until the answers land, so send it first.

- [ ] **A1 · Doctor sign-off** for 14 concerns and 36 technologies. Which doctor reviews which page; one line per
      slug. Feeds D1. `Client`
- [ ] **A2 · Branch × device matrix.** Which of the 36 machines/injectables is available at which of the 9
      branches. Feeds D3. `Client`
- [ ] **A3 · Price decision.** (a) publish Kaiteki's own price list, or (b) indicative market ranges only, or (c)
      cost-factors sections with no figures. Feeds D4. `Client`
- [ ] **A4 · Service scope.** Are skin-tag/mole removal and subcision offered? Feeds D6 scope. `Client`
- [ ] **A5 · Cloudflare.** Disable Managed robots.txt / AI Crawl Control for `kaiteki.my` (03b T2 step 1).
      `Client` → verify with `curl -s https://kaiteki.my/robots.txt` showing only the repo's rules. `Ops`
- [ ] **A6 · Request indexing** for the 22 never-crawled URLs in `03c-request-indexing-queue.txt`, in the order
      given (03b T0). `Ops`

---

## Week 1 · 21–27 Sep · switch on what is already built

Theme: the moat we own is off; turn it on. Zero new page types this week.

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 1.1 | **D1 · Sign the 14 concerns.** Fill `config/concern-signoff.json` from A1. | Content | A1 | All 14 `/concerns/*` render the ReviewByline + AuthorCard; `MedicalWebPage.reviewedBy`/`lastReviewed` present in JSON-LD; sitemap `lastmod` populated for concerns. |
| 1.2 | **D1 · Real technology sign-offs.** Replace the placeholder `reviewedBy`/`lastReviewed` on 36 entries in `content/data/technology.ts` (header comment at line 8 flags them). | Content | A1 | No entry carries the sample reviewer; header comment removed; dates are the real review dates. |
| 1.3 | **D7 / T2 · Verify robots.** After A5, confirm the live file matches `app/robots.ts` and decide the training bucket (GPTBot, ClaudeBot, CCBot, Google-Extended) as a recorded client call. | Ops | A5 | `curl` shows one `User-agent: *` group and the six retrieval agents allowed; decision noted in 03b T2. |
| 1.4 | **D5 · `relatedPosts` slot on all three templates.** Add a "Read next" row of up to 3 blog cards to `TreatmentView`, `ConcernView`, `TechnologyView`, resolved from `content/data/blog.ts` tags (`treatments`, `concerns`, `technology` arrays already exist on posts). | Dev | none | Every treatment/concern/technology page with ≥1 tagged post shows the row; rendered `<a href="/blog/…">` present in HTML; no page without a match renders an empty block. |
| 1.5 | **D2 · Author the v2 block set for `hifu` and `skin-booster`.** `typicalSessions`, `suitableFor`, `notSuitableFor`, `avoidIf`, `sessionSteps`, `afterSession`, `risks`, `costFactors`, one `comparisons` table. Use `pico-laser` as the worked example; no "from RM", no outcome claims. | Content | none (review by 1.1's signer before merge) | Both pages render SuitabilityBlock, SessionBlock, AfterSession, RisksBlock, CostFactors and the comparison table; signer has approved the medical copy. |
| 1.6 | **Baseline snapshot.** Export GSC page-level for `/treatments/`, `/concerns/`, `/technology/` (28 days, MY filter) into `docs/screenshots/` or a dated CSV in `docs/`. | Ops | none | File committed; this is what week 4 compares against. |

---

## Week 2 · 28 Sep – 4 Oct · the technology template

Theme: the surface that already clicks gets the template it deserves. One PR touches 36 pages.

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 2.1 | **D3 · Technology template upgrade** in `components/TechnologyView.tsx`: `LeadAnswer` capsule, `FactRail`, heading anchors + `ArticleToc` (reuse `lib/treatment-toc.ts` pattern), `AuthorCard`, closing CTA in the treatment style, standing `Disclaimer` kept. Extend the `Technology` type in `lib/types.ts` with `leadAnswer`, `facts`, `costFactors`, `availableAt` (branch slugs). | Dev | none | Template renders every block conditionally; typecheck passes with all 36 entries; screenshots at 1900/1100/400 in the PR. |
| 2.2 | **D3 · "Available at" block.** Render `availableAt` as a branch-card row linking to `/locations/[slug]`; emit `availableAtOrService`-style linkage in JSON-LD only if `docs/02 §3` permits, else plain links. | Dev | A2 | Block shows on every technology page with data; each branch link resolves; branch pages gain a reciprocal "Devices here" list if cheap (stretch). |
| 2.3 | **D3 · Author `leadAnswer` + `facts` for the 12 technology pages with impressions** (onda-coolwaves, coolsculpting, dermav, m22-ipl, potenza, hydrafacial, plinest, silkpeel, fotona-pqx, picosure, juvelook, sylfirm-x). 40–60 words each, question-shaped where the query is a question. | Content | 2.1 | 12 entries carry both fields; remaining 24 fall back cleanly. |
| 2.4 | **D3 · Fill `availableAt` for all 36** from A2. | Content | A2 | No technology entry without `availableAt`; validator rejects unknown branch slugs. |
| 2.5 | **D2 · Author the v2 block set for `microneedling`, `exosome-therapy`, `ultherapy`.** | Content | signer | As 1.5. |
| 2.6 | **D4 · Cost section, compliant form.** Add `costFactors` to the 7 treatment pages touched in 1.5/2.5 plus `pico-laser` (already has it) using the factors-table pattern; if A3 = (b), add the indicative-range line with a source note; if A3 = (a), open a separate ticket for a `/pricing` page and `Offer` schema **visible on-page** (no hidden schema prices). | Content | A3 | Every touched treatment page has a "What affects the cost" H2; copy passes the prohibited-words lint. |

---

## Week 3 · 5–11 Oct · new pages and the remaining treatments

Theme: fill the three page-level holes, once T0 is clear for those slugs.

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 3.1 | **T0 check.** URL-inspect the 22 never-crawled URLs from A6. Anything still "unknown to Google" gets a second request and an internal link from a crawled page (the `/treatments` hub or `skin-booster`). | Ops | A6 | Inspection results recorded in 03c; laser-hair-removal and melasma confirmed crawled before 3.3/3.4 ship. |
| 3.2 | **D6 · `/concerns/acne-scars`.** New concern entry with the v2 spine: `drivers` (scar types), `variant` (ice pick / rolling / boxcar / hypertrophic), `treatmentWhy` mapping each subtype to `resurfacing-laser`, `microneedling`, `pico-laser`, `dermal-fillers`, `seeDoctor`, `risks` (PIH on Asian skin), `costFactors`, 8 FAQs phrased as queries, `compare` table. Reviewer assigned from A1. Add to `relations.ts`; add a redirect only if a legacy acne-scar URL exists in `docs/08`. | Content + Dev | A1 | Page live, in sitemap, linked from `/concerns/acne`, `/treatments/resurfacing-laser` and `/treatments/microneedling`; lead answer states when Pico is *not* the answer. |
| 3.3 | **D6 · `/concerns/melasma`.** Same spine; leads with the caveat (laser can worsen melasma; sun and hormones as drivers). Link from the existing melasma blog post and from `/concerns/pigmentation`. | Content + Dev | 3.1, A1 | Page live and crawled; blog post links to it; pigmentation page's related-concerns includes it. |
| 3.4 | **D6 · Laser hair removal to v2.** Apply the D2 block set to `laser-hair-removal`; add `availableAt` via its technology entry (`alma`). | Content | 3.1 | Page crawled and carries the full block set; GSC shows first impressions by week 4 (or a note that it hasn't). |
| 3.5 | **D2 · Remaining treatments with impressions:** `fat-freezing`, `fotona-4d`, `radiofrequency`, `bio-stimulator`. | Content | signer | As 1.5. |
| 3.6 | **D8 · Contraindication pass.** For every treatment now carrying `avoidIf`/`notSuitableFor`, cross-check against the concern pages' `seeDoctor` so the two never disagree. | Content | 1.5, 2.5, 3.5 | One reviewer sign-off note per page; no contradictions between a treatment's `avoidIf` and its linked concerns' red flags. |
| 3.7 | **A4 outcome.** If skin-tag/mole removal or subcision is offered, open entries as **week 5 backlog** with the SERP evidence from 03d; do not start them this month. | Content | A4 | Backlog entries written with target query, volume and rival page. |

---

## Week 4 · 12–18 Oct · depth, FAQs, measurement

Theme: finish the treatment set, deepen FAQs where the surface is shallowest, measure against the week-1 baseline.

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 4.1 | **D2 · Remaining nine treatments** (`botulinum-toxin`, `dermal-fillers`, `double-eyelid`, `vascular-pigment-laser`, `resurfacing-laser`, `microwave-contouring`, `muscle-stimulation`, `facial-treatments`, plus any straggler). Minimum: `typicalSessions`, `avoidIf`, `risks`, `costFactors`, 4–6 FAQs. | Content | signer; T0 for the never-crawled ones | 19/19 treatments carry at least the minimum set; `pnpm check` scripts pass. |
| 4.2 | **FAQ depth pass.** Bring every treatment and technology page to 4–6 FAQs phrased as the real query (pull from GSC query lists: "does pico laser hurt", "can pico laser remove pigmentation", "how does pico laser work on pigmentation"). No off-topic questions. FAQPage schema stays off (docs/02 §3). | Content | none | No treatment/technology page below 4 FAQs; every question appears as an H3 in the DOM with the answer in the initial HTML. |
| 4.3 | **Internal-link audit.** Each treatment → its concerns, technologies, related treatments, 1–3 posts, reviewer. Each concern → treatments (with `treatmentWhy`), technologies, related concerns, posts. Each technology → treatments, concerns, branches, posts. | Dev | 1.4, 2.1 | A script in `scripts/` lists pages missing any link class; zero rows. |
| 4.4 | **Measure.** Re-pull the week-1 baseline (28 days, MY filter). Compare impressions, clicks, CTR and position per page type; count pages with a reviewer in schema (target 69/69), pages with `costFactors` (target 19/19 treatments), technology pages with `availableAt` (36/36). | Ops | 1.6 | A dated section appended to this doc with the numbers and a one-paragraph read; titles are **not** touched until this exists (03d §6). |
| 4.5 | **Handover note to the client.** What shipped, what needs their next input (BM decision 03b T7, price list if A3 = a), and the week-5 backlog from 3.7. | Content | all | Sent; copy filed in `docs/`. |

---

## Not in this plan, on purpose

- FAQPage or HowTo schema; hidden `Product`/`Offer` prices; celebrity or testimonial video; Google-reviews widgets with schema; GTranslate-style language copies (03d "What to skip").
- Title and meta rewrites. 03b showed the click problem is AEO, not titles; 4.4 decides whether any title work is warranted after depth ships.
- The blog migration (03b T3) and the `/zh` build. Both continue on their own tracks; 1.4 links to whatever posts are in-repo at the time.
- Bahasa Malaysia page types. 03b T7 escalation stays open; if the client wants BM this quarter it enters as a week-5+ workstream, not a week-4 squeeze.

## Capacity check

Roughly: Dev ≈ 4 days (1.4, 2.1, 2.2, 4.3 + reviews). Content ≈ 12–14 days across the four weeks (18 treatment
block sets, 2 new concern pages, 12 technology lead answers, 36 `availableAt`, FAQ pass). Client ≈ 2 hours on
day 1 and 30 minutes a week for medical review. Ops ≈ half a day a week. If content capacity is one person, 4.1
is the item to push to week 5; everything in weeks 1–3 stays.
