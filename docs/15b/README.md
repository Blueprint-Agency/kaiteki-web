# 15b — Week-1 baseline (docs/15 item 1.5)

> Taken **2026-09-24**. Item 4.5 re-pulls the same numbers on or after 18 Oct and compares them against this.
> Data file: [`gsc-baseline-2026-09-21.csv`](gsc-baseline-2026-09-21.csv), one row per page for all 69 treatment,
> concern and technology pages. A page with no impressions still gets a row, with zeros.

## How it was pulled

| | |
|---|---|
| Source | Search Console API, property `sc-domain:kaiteki.my`, search type Web |
| Window | **25 Aug – 21 Sep 2026** (28 days). It ends 3 days before the pull, so the data has settled |
| Filter | country = Malaysia (`mys`), dimension `page` |
| `first_impression` | first date with ≥1 impression, **any country**, 1 Aug – 23 Sep. A page can only earn impressions once it is indexed, so this is a lower bound on the indexing date |
| `not_indexed_2026_09_06` / `requested_2026_09_06` | the 34 treatment, concern and technology URLs listed in `docs/03c`, and the ✅ marks there |
| `generic_headings` … `mostly_generic` | `pnpm check:sameness --csv` run the same day (flag added for this baseline) |
| `inspection_2026_09_24` | live URL Inspection. Run on the 14 pages with no impressions, plus three spot checks on pages with impressions |

To re-pull for 4.5, rerun the same query with the window moved and join it on `url`.

## Search performance by page type (Malaysia, 28 days)

| Page type | Pages | With impressions | Clicks | Impressions | CTR | Avg. position* |
|---|---|---|---|---|---|---|
| Treatments | 19 | 14 | 103 | 24,015 | 0.43% | 15.3 |
| Concerns | 14 | 12 | 30 | 27,326 | 0.11% | 14.8 |
| Technology | 36 | 28 | 88 | 12,343 | 0.71% | 16.0 |

\* Weighted by impressions.

Concerns earn the most impressions of the three types and the fewest clicks: 27k impressions, 30 clicks.
`pigmentation` alone has 8,200 impressions and 5 clicks. The same is true of `pico-laser` (8,457 impressions,
5 clicks). This is the AEO click problem from `docs/03b`, and 4.5 decides whether it warrants title work.

## Sameness (`check:sameness`, 24 Sep)

| Cluster | Mostly generic | Budget |
|---|---|---|
| Technology | 35 / 36 | 35 |
| Treatments | 17 / 19 | 17 |
| Concerns | 0 / 14 | 0 |

These are unchanged from the 20 Sep baseline. The per-page scores are in the CSV.

## Crawl status of the 34 "never crawled" URLs

**20 of the 34 are now indexed. 14 are not.**

| Status | Count | Pages | First impression |
|---|---|---|---|
| Indexed | 12 | every injectable except Juvéderm: `rejuran`, `plinest`, `juvelook`, `profhilo` (6 Sep) · `botox`, `restylane`, `sculptra`, `radiesse`, `belotero`, `hydrodeluxe`, `ellanse`, `art-filler` (7 Sep) | 6–7 Sep |
| Indexed | 4 | `sylfirm-x`, `morpheus8`, `ultherapy-system` (7 Sep) · `fractional-co2` (8 Sep) | 7–8 Sep |
| Indexed | 4 | `facial-treatments` (15 Sep) · `botulinum-toxin`, `dermal-fillers`, `laser-hair-removal` (20 Sep) | 15–20 Sep |
| **Discovered, not indexed** | 12 | treatments `double-eyelid`, `muscle-stimulation`, `microwave-contouring`, `resurfacing-laser`, `vascular-pigment-laser` · concerns `excessive-sweating`, `vascular-lesions` · technology `ultracel-q`, `fotona-sp-dynamis`, `cooltech`, `xerf`, `lifthera` | — |
| **Unknown to Google** | 2 | `technology/juvederm` (manually requested 6 Sep), `technology/wonderface` | — |

Checked with URL Inspection on 24 Sep:
- `plinest`: indexed, crawled **6 Sep 13:40**.
- `sculptra`: indexed, crawled 16 Sep.
- `botulinum-toxin`: indexed, crawled 20 Sep.
- All 14 pages without impressions: not indexed.

## ⚠ This contradicts the T0 re-diagnosis — decision needed

`docs/03b` T0 (re-diagnosed 20 Sep) and the critical path of `docs/15` rest on two claims:

1. The 13 injectables are "uncrawled without exception".
2. Template sameness is why Google won't crawl the cluster.

The live data does not support either claim.

- **Claim 1 was already out of date on 20 Sep.** Twelve of the 13 injectables were indexed by 7 Sep, and Plinest was crawled on 6 Sep. The 20 Sep table in `03b` (Rejuran, Plinest, Juvelook, Profhilo and HydroDeluxe marked "Never") appears to reuse the 6 Sep inspection data.
- **Sameness does not predict crawl status:**
  - 19 of the 20 newly indexed pages score "mostly generic", and so do 11 of the 14 still-unindexed ones. The two groups look the same on this measure.
  - The two unindexed concern pages score **0** for sameness.
  - `double-eyelid` is not generic (3 of 8 headings) and is not indexed.
- **The timing points to discovery through the hub.** The client requested `/technology` on 6 Sep. The injectables, which the hub links to, started getting impressions on 6–7 Sep. None of them had been requested individually except Rejuran and Juvéderm. `docs/03c` predicted exactly this in its "Do `/technology` first" note.

This does not make differentiation worthless. It remains the plan's answer to "these pages rank poorly and
look alike", and the injectables now being indexed makes the work *more* valuable, because it lands on pages
Google already serves. What changes is the reason for doing it, and some of the conclusions built on it:

- **"Stop manual indexing requests"** was drawn from the wrong data. The requested hub appears to have worked,
  and 14 pages remain. Resuming requests for those 14 is cheap: about one day of quota.
- **Item 3.7, the two-arm re-check, cannot test sameness as designed.** Most of the batch-1 injectables are
  already indexed before batch 1 lands, so there is nothing left for it to cause.
- **Item 4.5's headline number** ("how many of the 34 have been crawled since") now reads 20 before any
  differentiation has shipped. Report it against this baseline, not against 34.

**Decided 2026-09-24:** all three recommendations accepted, recorded as D1–D3 in `docs/15`. The request queue
is [`request-indexing-2026-09-24.txt`](request-indexing-2026-09-24.txt).

---

## 3.7 · Ranking check, 2026-10-11 (re-scoped by D2)

> Data file: [`ranking-check-2026-10-11.csv`](ranking-check-2026-10-11.csv), one row per technology page with its
> arm, its last-crawled date from live URL Inspection on 11 Oct, and both windows.

**Verdict: no measurable effect yet, in either direction.** The rewrite has not visibly helped or hurt
ranking. Ten days of data on pages with a handful of clicks each cannot separate a real effect from noise.
Re-run at 4.5 with a 28-day after-window.

### How it was pulled

| | |
|---|---|
| Source | Search Console API, `sc-domain:kaiteki.my`, Web, country = Malaysia, dimension `page` |
| Before | **18–27 Sep** (10 days). Starts after the injectables were indexed on 6–7 Sep, so indexing does not contaminate it |
| After | **29 Sep – 8 Oct** (10 days). 8 Oct was the latest date with data on 11 Oct |
| Rewrite live | 28 Sep, injectables 05:42 UTC and lifting 06:04 UTC (deploy runs for `a136ec8`, `91c8849`) |

### The design changed once the data was in

The plan compared "rewritten" against "not yet rewritten". That turned out to be the wrong cut: **Google had
re-read only some of the rewritten pages**. A page Google has not re-crawled is still being ranked on its
old text, so it cannot show an effect of the new one. URL Inspection gave each page's last crawl date, and
the rewritten pages split into three groups:

| Arm | Pages | Clicks | Impressions | Impression-weighted position | Median position change per page |
|---|---|---|---|---|---|
| **A · rewritten, re-crawled since 28 Sep** | 12: profhilo, juvelook, hydrodeluxe, botox, ellanse, restylane, belotero, art-filler, sylfirm-x, morpheus8, potenza, btl-exilis | 10 → 11 | 1,507 → 1,918 (+27%) | 11.8 → 11.7 | −1.3 |
| B · rewritten, not re-crawled | 5: rejuran, plinest, sculptra, radiesse (re-crawled 9 Oct, after the window), ultherapy-system | 3 → 1 | 702 → 337 (−52%) | 19.8 → 45.3 | −3.7 |
| **C · control, untouched until 11 Oct** | 14: the 7 lasers, 4 body devices, 2 facials, alma | 39 → 35 | 2,507 → 2,992 (+19%) | 11.8 → 16.3 | −1.3 |
| C without onda-coolwaves | 13 (onda is 27 of the 39 control clicks) | 12 → 13 | 1,841 → 2,312 (+26%) | 14.2 → 19.5 | −2.5 |

Five rewritten pages are in no arm because Google has never crawled them: juvederm, ultracel-q, lifthera, xerf
(all *Discovered – currently not indexed*) and wonderface (*URL is unknown to Google*).

### Reading it

- **Impressions rose in both A and C by about the same amount.** That points to a site-wide or seasonal lift,
  not to the rewrite.
- **The weighted position favours A** (held at 11.7 while C slipped to 16.3). But the median per-page change is
  identical (−1.3), so the weighted gap comes from which pages happened to gain impressions at low positions
  (fractional-co2 alone added 347 impressions at position 24), not from the rewrite.
- **One page moved sharply:** ellansé, re-crawled 5 Oct, went from 69 impressions at position 24.7 to 284 at
  7.4. One page is an anecdote, not evidence.
- **Arm B's fall has nothing to do with the rewrite.** Google never saw the new text on those pages. Rejuran and
  Plinest both collapsed on **26 Sep, two days before the rewrite shipped**; see below.

### Three things found on the way, more useful than the test

1. **Plinest has been dropped from the index.** On 24 Sep it was indexed; on 11 Oct it reads *Crawled –
   currently not indexed*, last crawled 6 Sep. Google dropped it without re-reading it. Added to the request
   queue below.
2. **The legacy blog owns the injectable brand searches.** For queries containing "rejuran", 25 Aug – 8 Oct,
   the results are almost entirely `blog.kaiteki.my` posts: *rejuran healer* 4,099 impressions, *plinest vs
   rejuran* about 1,300 spread across one post's anchor URLs, *juvelook vs rejuran* 213. `/technology/rejuran`
   barely appears. The new technology pages are competing with the old subdomain for the same queries.
   **This is the strongest argument yet for finishing the blog migration (03b T3) with 301s from the
   subdomain**, so that authority consolidates on one URL per topic.
3. **1.6 has not worked.** Of the 7 technology URLs queued on 24 Sep, juvederm, ultracel-q, lifthera and
   xerf are still *Discovered – currently not indexed* and wonderface is still unknown to Google. Either the
   requests were not made, or Google has not acted on them. To confirm with the client.

Side note: Google reports a failing *Product snippets* rich result on `/technology/botox`. The page declares
schema.org `Drug`, correctly for a prescription medicine, and Google treats `Drug` as a kind of Product, then
fails it for having no price or review. No issue is listed and it does not affect ranking; no change made.
