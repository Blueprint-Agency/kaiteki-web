# 03c — Not-Indexed URL List (full sweep, 2026-09-06)

> **CORRECTED 2026-09-06.** An earlier version of this file claimed a complete sweep of all 125 URLs. It was not:
> roughly 40 URLs had been inspected and the rest of the list was extrapolated from the pattern. The sweep has since
> been completed properly, and **two entries were wrong**:
>
> | Was listed as not indexed | Actually |
> |---|---|
> | `https://kaiteki.my/doctors` | **Indexed**, crawled 2026-09-06. Removed. |
> | `https://kaiteki.my/concerns/melasma` | **404 — the page does not exist.** Removed. |
>
> Both were requested by the client before the error was caught; that quota is spent.
>
> Now genuinely complete: **all 125 sitemap URLs individually inspected. 41 are not indexed** (33% of the site),
> plus one page crawled-and-declined. Every not-indexed URL returns 200 and is in the sitemap.
> Root-cause analysis: `docs/03b §1.9 (T0)`. Copy-paste queue: `docs/03c-request-indexing-queue.txt`.
>
> `?` = **"URL is unknown to Google"** (worse than "Discovered – currently not indexed").
> ✅ = already requested by the client on 2026-09-06.

**Sections fully indexed, nothing to do:** all 10 locations · all 18 blog posts bar one · 12 of 14 concerns ·
14 of 20 doctors · every hub except `/technology` · products, our-story, privacy, home.

GSC allows roughly 10–15 manual requests per day, so the remaining 37 are about a three-day job.
**Do `/technology` first** — it is the only internal link source for 36 technology pages, 23 of which are uncrawled.

---

## Priority 1 — Hub (do this first, 1 URL)

`/technology` is the only internal link source for 36 technology pages, 23 of which are uncrawled. Its own
uncrawled state is the most likely single cause of that cluster.

- [ ] `https://kaiteki.my/technology`

*(`/doctors` was previously listed here in error. It is indexed and crawled 2026-09-06.)*

---

## Priority 2 — Treatments (9 URLs)

Highest commercial value on the list.

- [x] `https://kaiteki.my/treatments/botulinum-toxin` ✅
- [x] `https://kaiteki.my/treatments/dermal-fillers` ✅
- [ ] `https://kaiteki.my/treatments/double-eyelid`
- [ ] `https://kaiteki.my/treatments/facial-treatments`
- [ ] `https://kaiteki.my/treatments/laser-hair-removal` ?
- [ ] `https://kaiteki.my/treatments/muscle-stimulation` ?
- [ ] `https://kaiteki.my/treatments/microwave-contouring`
- [ ] `https://kaiteki.my/treatments/resurfacing-laser`
- [ ] `https://kaiteki.my/treatments/vascular-pigment-laser`

---

## Priority 3 — Concerns (3 URLs)

- [~] ~~`https://kaiteki.my/concerns/melasma`~~ — **404, page does not exist.** Requested in error; build the page instead.
- [ ] `https://kaiteki.my/concerns/excessive-sweating` ?
- [ ] `https://kaiteki.my/concerns/vascular-lesions`

---

## Priority 4 — Technology: injectables (13 URLs)

The entire injectables cluster. Commercially the most valuable group after treatments.

- [x] `https://kaiteki.my/technology/rejuran` ✅
- [x] `https://kaiteki.my/technology/juvederm` ✅
- [ ] `https://kaiteki.my/technology/botox`
- [ ] `https://kaiteki.my/technology/restylane`
- [ ] `https://kaiteki.my/technology/sculptra`
- [ ] `https://kaiteki.my/technology/radiesse`
- [ ] `https://kaiteki.my/technology/belotero`
- [ ] `https://kaiteki.my/technology/profhilo`
- [ ] `https://kaiteki.my/technology/juvelook`
- [ ] `https://kaiteki.my/technology/plinest`
- [ ] `https://kaiteki.my/technology/hydrodeluxe`
- [ ] `https://kaiteki.my/technology/ellanse` ?
- [ ] `https://kaiteki.my/technology/art-filler` ?

---

## Priority 5 — Technology: devices (10 URLs)

- [ ] `https://kaiteki.my/technology/sylfirm-x`
- [ ] `https://kaiteki.my/technology/morpheus8`
- [ ] `https://kaiteki.my/technology/ultherapy-system`
- [ ] `https://kaiteki.my/technology/ultracel-q`
- [ ] `https://kaiteki.my/technology/fractional-co2`
- [ ] `https://kaiteki.my/technology/fotona-sp-dynamis`
- [ ] `https://kaiteki.my/technology/cooltech`
- [ ] `https://kaiteki.my/technology/wonderface`
- [ ] `https://kaiteki.my/technology/xerf`
- [ ] `https://kaiteki.my/technology/lifthera` ?

---

## Priority 6 — Doctors (6 URLs)

**`dr-chew-yuhhui` matters more than the others**: that doctor is the named `reviewedBy` on treatment pages, so an
unindexed profile weakens the E-E-A-T signal the schema is trying to carry.

- [ ] `https://kaiteki.my/doctors/dr-chew-yuhhui`
- [ ] `https://kaiteki.my/doctors/dr-jeremy-low`
- [ ] `https://kaiteki.my/doctors/dr-jessie-lim`
- [~] ~~`https://kaiteki.my/doctors/dr-say-wei-xian`~~ — **do not request.** "Crawled - currently not indexed"
  (crawled 2026-09-06): Google fetched it and declined. That is a content signal, most likely too similar to the
  other 19 bios. Fix the page; re-requesting will not move it.
- [ ] `https://kaiteki.my/doctors/dr-tim-chua`
- [ ] `https://kaiteki.my/doctors/dr-yeong-bin`

---

## Priority 7 — Blog (1 URL)

- [ ] `https://kaiteki.my/blog/how-to-reduce-facial-redness-causes-treatment`

---

## Healthy — do not request (81 URLs)

All indexed and crawled within the last ~3 weeks: homepage · `/treatments` · `/concerns` · `/locations` · `/blog` ·
`/our-story` · `/products` · **all 10 location pages** · 11 of 14 concerns · 9 of 18 treatments · 13 of 36
technology · 15 of 21 doctors · 16 of 17 blog posts · all 5 blog categories.

`https://kaiteki.my/privacy` is **"Excluded by 'noindex' tag"** — intentional, crawled 2026-08-22. Not a fault, do
not request.

---

## Section scorecard

| Section | Indexed | Not indexed | % missing |
|---|---:|---:|---:|
| **Technology** | 13 | **24** (incl. hub) | **65%** |
| **Treatments** | 10 | **9** | **47%** |
| **Doctors** | 15 | **7** (incl. hub) | **32%** |
| **Concerns** | 12 | **3** | 20% |
| **Blog** | 22 | 1 | 4% |
| **Locations** | 10 | 0 | **0%** |
| Other | 4 | 0 | 0% |

**Locations are perfect; `/technology` is two-thirds missing.** The gradient tracks internal-link depth and hub
health, not page quality — every affected page returns 200, is canonical, indexable, sitemapped and linked.

---

## After requesting

Manual requests are a one-off unblock, not a fix. The underlying constraint is crawl budget on a DA 19 domain
(`docs/03b §1.9`). Without the structural work these pages can drop out again:

1. **Migrate the blog and retire `blog.kaiteki.my/sitemap_index.xml`** — 215 subdomain URLs currently compete for
   the same crawl budget (T3).
2. **Link the uncrawled pages from pages Google actually crawls** — the location pages are crawled every few days
   and are the strongest crawl paths available; the `/technology` hub is not.
3. **Differentiate the injectable pages' copy** so they stop reading as near-duplicates of each other.
4. **Re-inspect in two weeks.** If pages that were requested have slipped back, the constraint is domain authority
   and the answer is external links.
