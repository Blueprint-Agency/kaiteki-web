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
