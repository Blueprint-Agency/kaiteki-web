# 15 — Four-week plan: close the page-type gaps (21 Sep – 18 Oct 2026)

> **What this is.** The execution plan for `docs/03d` (treatment / concern / technology gap analysis, 2026-09-18).
> Eight decisions D1–D8 plus the two 03b tickets that gate them (T0 never-crawled, T2 Cloudflare bot block),
> laid out week by week with an owner, a dependency and a definition of done per item.
> **2026-09-19:** week-4 item 4.5 adds Chinese and Bahasa Malaysia (plumbing + pilot). This brings both locales
> forward from "later" in `docs/04 §8` and the locked decisions in `CLAUDE.md`; recorded there as a timing change,
> not a change of scheme, and confirmed with the client through day-1 ask A7.
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

**Answered 2026-09-20.** Full record in `docs/15a §0`.

- [x] **A1 · Doctor sign-off** for all 69 pages. **Message sent; client reports the sign-off done.** Blocked only
      on the returned Sheet A landing in `docs/15a/`. `Client`
- [x] **A2 · Branch × device matrix.** **Cancelled by the client: the machines rotate between branches**, so there
      is no stable matrix to publish. Kills the "Available at" block (was items 2.2 and 2.4). See §"Cancelled". `Client`
- [x] **A3 · Price decision.** **Option (c): show no price at all.** No Kaiteki price list, no indicative market
      range. Cost sections carry factors only, never a figure. Rule R-03 stands unchanged; no ADR needed. `Client`
- [ ] **A4 · Service scope.** **Still unanswered** — are skin-tag/mole removal and subcision offered? Feeds D6
      scope and item 3.7 only, so it does not block anything before 11 Oct. `Client`
- [x] **A5 · Cloudflare.** Verified clear on 2026-09-18: the live file is the repo's own (one `User-agent: *`
      group, six retrieval agents allowed, no Cloudflare block). `Ops`
- [x] **A7 · Two languages in week 4.** **Confirmed: Chinese and Bahasa Malaysia both go ahead**, closing 03b T7.
      Still needed before 12 Oct: the names of one Chinese-reading and one Malay-reading doctor to sign the pilot
      pages (see 4.5's fallback). `Client`
- [x] **A6 · Request indexing.** **Stop requesting.** The client has been requesting manually with no movement.
      Re-diagnosed 2026-09-20 (03b T0 update): it is not discovery, not linking, not thin content — it is
      cluster-level template sameness. Manual requests cannot fix it; items 1.5, 2.3, 2.5 and 4.1 are the fix. `Ops`

---

## Week 1 · 21–27 Sep · switch on what is already built

Theme: the moat we own is off; turn it on. Zero new page types this week.

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 1.1 | **D1 · Sign the 14 concerns.** Fill `config/concern-signoff.json` from A1. | Content | A1 | All 14 `/concerns/*` render the ReviewByline + AuthorCard; `MedicalWebPage.reviewedBy`/`lastReviewed` present in JSON-LD; sitemap `lastmod` populated for concerns. |
| 1.2 | **D1 · Real technology and treatment sign-offs.** Replace the placeholder `reviewedBy`/`lastReviewed` on 36 entries in `content/data/technology.ts` (header at line 8) **and 19 in `content/data/treatments.ts`** (header at line 3) from Sheet A. Where a doctor has not yet signed by end of week 1, the honest interim is to gate treatments and technologies through the same ledger pattern as concerns (`lib/signoff.ts`) so the page says "awaiting medical review" rather than naming someone. | Content + Dev | A1 | No entry carries a sample reviewer; header comments removed; every byline on the site is backed by a signed date or is absent. |
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
| ~~2.2~~ | ~~**D3 · "Available at" block.**~~ **Cancelled 2026-09-20 (A2):** the machines rotate between branches, so there is no stable branch→device fact to publish. Do not add `availableAt` to the `Technology` type. The freed dev day goes to 2.1. A one-line honest alternative ("our devices move between clinics; message us to confirm where this one is") is **proposed, not scheduled** — it needs the client's word on how they want rotation described. | — | — | — |
| 2.3 | **D3 · Author `leadAnswer` + `facts` for technology pages.** **Scope raised 2026-09-20 from 12 pages to all 36**, using the capacity freed by cancelling 2.2 and 2.4. This is now the primary fix for T0 (see the 03b T0 update): a distinct 40–60 word lead answer and a distinct fact set per page is what breaks the cluster sameness that is suppressing the crawl. Start with the 12 that have impressions (onda-coolwaves, coolsculpting, dermav, m22-ipl, potenza, hydrafacial, plinest, silkpeel, fotona-pqx, picosure, juvelook, sylfirm-x), then the 13 injectables (all never crawled), then the rest. | Content | 2.1 | All 36 carry both fields; no two lead answers share a sentence shape; the 13 injectables done before 2.5. |
| ~~2.4~~ | ~~**D3 · Fill `availableAt` for all 36.**~~ **Cancelled 2026-09-20 (A2)** — machines rotate. Capacity redirected to 2.3 and 2.5. | — | — | — |
| 2.5 | **D2 · Author the v2 block set for `microneedling`, `exosome-therapy`, `ultherapy`.** | Content | signer | As 1.5. |
| 2.6 | **D4 · Cost section, factors only.** **A3 answered: option (c), no price anywhere.** Add `costFactors` to the treatment pages touched in 1.5/2.5 plus `pico-laser` (already has it): a "What affects the cost of X" H2 listing the factors (area, sessions, device, combination), with **no Ringgit figure, no range, no `Offer` schema, no `/pricing` page**. This is the plan's one deliberate concession on the most-rewarded SERP element; the compensating move is D8's specificity (contraindications, session length, interval, device names). | Content | A3 ✅ | Every touched treatment page has a "What affects the cost" H2; a lint fails the build on any `RM` or digit-currency string in `costFactors`. |

---

## Week 3 · 5–11 Oct · new pages and the remaining treatments

Theme: fill the three page-level holes. **T0 is no longer treated as a gate** — see the 2026-09-20 re-diagnosis in
03b T0: the never-crawled pages are not blocked by anything technical, so shipping differentiated depth on them is
the way to earn the crawl, not something to do after it.

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 3.1 | **T0 re-check, not re-request.** Re-inspect a 10-URL sample split between pages that received the week 1–2 depth work and pages that did not. The question is no longer "did the request work" but "does differentiated depth earn the crawl". Record both arms in 03c. **Do not submit more manual indexing requests** (A6). | Ops | 1.5, 2.3, 2.5 | Both arms recorded with dates; the comparison written up in 03c as evidence for or against the 2026-09-20 diagnosis. |
| 3.2 | **D6 · `/concerns/acne-scars`.** New concern entry with the v2 spine: `drivers` (scar types), `variant` (ice pick / rolling / boxcar / hypertrophic), `treatmentWhy` mapping each subtype to `resurfacing-laser`, `microneedling`, `pico-laser`, `dermal-fillers`, `seeDoctor`, `risks` (PIH on Asian skin), `costFactors`, 8 FAQs phrased as queries, `compare` table. Reviewer assigned from A1. Add to `relations.ts`; add a redirect only if a legacy acne-scar URL exists in `docs/08`. | Content + Dev | A1 | Page live, in sitemap, linked from `/concerns/acne`, `/treatments/resurfacing-laser` and `/treatments/microneedling`; lead answer states when Pico is *not* the answer. |
| 3.3 | **D6 · `/concerns/melasma`.** Same spine; leads with the caveat (laser can worsen melasma; sun and hormones as drivers). Link from the existing melasma blog post and from `/concerns/pigmentation`. Ship it with the full block set from the start rather than a thin first version — a new URL joining a cluster of lookalikes is the exact profile that does not get crawled. | Content + Dev | A1 | Page live; blog post links to it; pigmentation page's related-concerns includes it; crawl status recorded at 4.4 rather than treated as a launch gate. |
| 3.4 | **D6 · Laser hair removal to v2.** Apply the D2 block set to `laser-hair-removal` (2,900/mo, transactional, currently zero impressions and never crawled). Link it from `/technology/alma` and from `/concerns/*` where relevant. No `availableAt` (A2 cancelled). | Content | none | Page carries the full block set and reads unlike its siblings; crawl status recorded at 4.4. |
| 3.5 | **D2 · Remaining treatments with impressions:** `fat-freezing`, `fotona-4d`, `radiofrequency`, `bio-stimulator`. | Content | signer | As 1.5. |
| 3.6 | **D8 · Contraindication pass.** For every treatment now carrying `avoidIf`/`notSuitableFor`, cross-check against the concern pages' `seeDoctor` so the two never disagree. | Content | 1.5, 2.5, 3.5 | One reviewer sign-off note per page; no contradictions between a treatment's `avoidIf` and its linked concerns' red flags. |
| 3.7 | **A4 outcome.** If skin-tag/mole removal or subcision is offered, open entries as **week 5 backlog** with the SERP evidence from 03d; do not start them this month. | Content | A4 | Backlog entries written with target query, volume and rival page. |

---

## Week 4 · 12–18 Oct · depth, FAQs, measurement

Theme: finish the treatment set, deepen FAQs where the surface is shallowest, measure against the week-1 baseline.

| # | Item | Lane | Depends on | Done when |
|---|---|---|---|---|
| 4.1 | **D2 · Remaining nine treatments** (`botulinum-toxin`, `dermal-fillers`, `double-eyelid`, `vascular-pigment-laser`, `resurfacing-laser`, `microwave-contouring`, `muscle-stimulation`, `facial-treatments`, plus any straggler). Minimum: `typicalSessions`, `avoidIf`, `risks`, `costFactors`, 4–6 FAQs. **Eight of these nine are in the never-crawled set**, so this is T0 work as much as depth work. | Content | signer | 19/19 treatments carry at least the minimum set; `pnpm check` scripts pass; no two treatment pages share their full section-heading sequence. |
| 4.2 | **FAQ depth pass.** Bring every treatment and technology page to 4–6 FAQs phrased as the real query (pull from GSC query lists: "does pico laser hurt", "can pico laser remove pigmentation", "how does pico laser work on pigmentation"). No off-topic questions. FAQPage schema stays off (docs/02 §3). | Content | none | No treatment/technology page below 4 FAQs; every question appears as an H3 in the DOM with the answer in the initial HTML. |
| 4.3 | **Internal-link audit.** Each treatment → its concerns, technologies, related treatments, 1–3 posts, reviewer. Each concern → treatments (with `treatmentWhy`), technologies, related concerns, posts. Each technology → treatments, concerns, branches, posts. | Dev | 1.4, 2.1 | A script in `scripts/` lists pages missing any link class; zero rows. |
| 4.4 | **Measure.** Re-pull the week-1 baseline (28 days, MY filter). Compare impressions, clicks, CTR and position per page type; count pages with a reviewer in schema (target 69/69), pages with `costFactors` (target 19/19 treatments), technology pages with a distinct `leadAnswer` (target 36/36), **and how many of the 34 never-crawled URLs have been crawled since** — the primary read on the 2026-09-20 T0 diagnosis. | Ops | 1.6 | A dated section appended to this doc with the numbers and a one-paragraph read; titles are **not** touched until this exists (03d §6). |
| 4.5 | **Multilingual: Chinese `/zh` and Bahasa Malaysia `/ms`, plumbing + pilot.** Added 2026-09-19. Resolves 03b T7 by doing both, on a pilot footprint. **Build (Dev):** locale-prefixed routing per `docs/04 §8` (`/zh/**`, `/ms/**`, English unprefixed; same locale-neutral slugs), a `[locale]` layout with `lang` attribute, translated site chrome (nav, footer, CTA strings, breadcrumbs), reciprocal `alternates.languages` hreflang with `x-default` → English on every page that has a sibling, both locales in `sitemap.ts`, language switcher, and the `/cn/*` redirect flip from English-interim to `/zh/*` 1:1 (`docs/04 §9.9`). Pages with no translation yet emit **no** hreflang and no `/zh` or `/ms` URL (never a machine-translated or English-under-a-prefix page). **Content (pilot, 8 pages × 2 locales):** home, one location page, and the highest-impression treatment, concern and technology page per language, plus three by client choice. Chinese: `treatments/pico-laser`, `concerns/pigmentation`, `technology/onda-coolwaves`, a KL location. Malay: `technology/rejuran`, `treatments/skin-booster`, `concerns/acne`, a JB location (captures the `jenis rejuran` / `jerawat` / `harga` demand 03b T7 and 03d name). Translated by people, not a model; the medical body copy of each translated page is **signed by a doctor who reads that language** and recorded in the ledger with a locale key. | Dev + Content + Client | A7 (client confirms both locales and names bilingual reviewers); D1 ledger; 2.1 | Both prefixes resolve; every pilot page passes hreflang validation (each sibling lists all siblings and itself); `/cn/*` legacy URLs land on `/zh/*`; sitemap lists locale URLs; a lint blocks any locale URL whose body is still English; pilot pages signed in-language. |
| 4.6 | **Handover note to the client.** What shipped, the crawl-recovery read from 4.4, what still needs their input (A4 service scope; bilingual reviewers if 4.5 fell back; whether to revisit the no-price decision once depth has shipped), and the week-5 backlog from 3.7. | Content | all | Sent; copy filed in `docs/`. |

---

## Not in this plan, on purpose

- FAQPage or HowTo schema; hidden `Product`/`Offer` prices; celebrity or testimonial video; Google-reviews widgets with schema; GTranslate-style language copies (03d "What to skip").
- **Any price, range or `Offer` schema** (A3, 2026-09-20). Also **no branch→device availability** (A2) — the machines rotate.
- **Further manual indexing requests** (A6). They have not moved anything and the cause is elsewhere.
- Title and meta rewrites. 03b showed the click problem is AEO, not titles; 4.4 decides whether any title work is warranted after depth ships.
- The blog migration (03b T3) continues on its own track; 1.4 links to whatever posts are in-repo at the time.
- **Full translation of all 69 medical pages into Chinese and Malay.** Week 4 (item 4.5) ships the locale plumbing and a signed 8-page pilot per language; the remaining pages are the week-5+ workstream, paced by bilingual doctor sign-off, not by translation speed.

## Capacity check

Roughly: Dev ≈ 3 days (1.4, 2.1, 4.3 + reviews — 2.2 cancelled) **plus ≈ 3 days for the locale plumbing in 4.5**.
Content ≈ 12–14 days across the four weeks (18 treatment block sets, 2 new concern pages, **36** technology lead
answers, FAQ pass; the 36 `availableAt` rows are cancelled and that capacity moved into the lead answers). Client ≈ 2 hours on
day 1 and 30 minutes a week for medical review. Ops ≈ half a day a week. Translation for 4.5 is a separate
budget (16 pilot pages, human translators) and does not come out of the content lane. If content capacity is one
person, 4.1 is the item to push to week 5; everything in weeks 1–3 stays. If the bilingual sign-off in A7 has not
landed by 12 Oct, 4.5 ships the plumbing with **zero** locale URLs live and the pilot follows in week 5.
