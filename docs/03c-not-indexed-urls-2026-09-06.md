# 03c — Not-Indexed URL List (full sweep, 2026-09-06)

> Complete GSC URL-inspection sweep of all **125** URLs in `https://kaiteki.my/sitemap.xml`.
> **44 are not indexed — 35% of the site.** Every one has **never been crawled** (`last_crawled: Never`).
> Working checklist for manual "Request indexing" in GSC. Context and root-cause analysis: `docs/03b §1.9 (T0)`.
>
> `?` = **"URL is unknown to Google"** (worse than "Discovered – currently not indexed": Google has no record of it
> at all, despite it being in a sitemap downloaded 2026-09-04).
> ✅ = already requested manually by the client on 2026-09-06.

GSC allows roughly 10–15 manual requests per day, so this is about a four-day job. **Do the hubs first** — they are
the crawl entry points for the two largest clusters and may pull the rest in behind them.

---

## Priority 1 — Hubs (do these first, 2 URLs)

These gate whole sections. `/technology` is the only internal link source for 36 technology pages; `/doctors` for 21
doctor profiles. Both being uncrawled is the most likely single cause of the clusters below.

- [ ] `https://kaiteki.my/technology`
- [ ] `https://kaiteki.my/doctors` ?

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

- [x] `https://kaiteki.my/concerns/melasma` ? ✅
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
- [ ] `https://kaiteki.my/doctors/dr-say-wei-xian`
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
