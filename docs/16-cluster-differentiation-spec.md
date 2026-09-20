# 16 — Cluster differentiation spec (2026-09-20)

> **Why this exists.** Google discovered 34 of our URLs and refused to crawl any of them. `docs/03b` T0
> (re-diagnosis, 2026-09-20) tested and eliminated sitemap discovery, internal linking and thin content. What
> survived: **the pages are the same page**. Thirty-five of 36 technology pages and 17 of 19 treatments carry six
> or seven of the same eight section headings, in the same order.
>
> This document says what to put in their place. It is the build contract for `docs/15` items 2.3, 2.5, 3.4 and
> 4.1, and `pnpm check:sameness` is its enforcement.

---

## 1. The measurement

`pnpm check:sameness` scores each cluster. A heading is **generic** when half the cluster or more already uses it
(brand names normalised away, so "What is Rejuran?" and "What is Juvéderm?" count as the same heading). A page is
**mostly generic** when 60% or more of its headings are generic.

| Cluster | Mostly-generic pages, 2026-09-20 | Target |
|---|---|---|
| technology | **35 of 36** | 0 |
| treatments | **17 of 19** | 0 |
| concerns | 0 of 14 | 0 (hold) |

The six headings doing the damage, each on 34–35 of 36 technology pages: *Suitability & who should avoid it* ·
*The session at Kaiteki* · *Downtime & aftercare* · *Risks & side effects* · *Sessions & cost factors* · *What it
may help address*. On treatments the same six, plus *How it works*.

The budgets in `scripts/check-sameness.mts` record today's numbers. **Lower them as pages are fixed; never raise
one to make the build pass.** Concerns are already at zero because they carry their content in typed blocks rather
than a prose spine, which is the pattern the other two clusters are moving toward.

**The control case.** `pico-laser` is the one treatment not built on the shared spine: two prose sections plus the
typed v2 blocks. It is crawled, indexed and ranking. Every one of the 13 injectables — the most uniform sub-group
on the site — has never been crawled.

---

## 2. Four rules

**R1 · A prose section or a typed block, never both.** This is the biggest and cheapest win. `SuitabilityBlock`,
`RisksBlock`, `SessionBlock`, `AfterSession` and `CostFactors` already render as structured components. When a page
gains the v2 block set (`docs/15` D2), **delete the prose section that duplicates it**. That is how `pico-laser`
ended up with two sections instead of nine, and it takes treatments most of the way to zero on its own.

**R2 · Headings are questions, in the page's own words.** Not *Suitability & who should avoid it* on 35 pages, but
*Who should not have Rejuran?*, *Is Sylfirm X safe on melasma-prone skin?*, *Can I have Onda if I have implants?*
This kills the duplication and satisfies `docs/02` §9.10 at the same time, so the heading earns its place twice.

**R3 · Sections a page does not need are deleted, not filled.** An eight-section page padded to length is what got
us here. Six strong sections beat eight where two are filler. Length is not the metric; the never-crawled pages
already average *more* words than the crawled ones.

**R4 · Every page answers at least two questions only it can answer.** The group spines in §3 are the menu. A page
with nothing group-specific to say is a candidate for consolidation (§5), not for padding.

---

## 3. Group spines

Keep *What is X?* and the mechanism section — those already vary. Replace the shared tail with two or more of the
following, chosen for the page, plus whatever typed blocks it has under R1.

### Injectables (13 pages — all never crawled, start here)
`profhilo · rejuran · plinest · juvelook · hydrodeluxe · botox · sculptra · ellanse · radiesse · juvederm · restylane · belotero · art-filler`

- **What is actually in it** — HA and its crosslinking, PLLA, CaHA, polynucleotide source. The single most
  differentiating fact in this group and currently absent everywhere.
- **Is it reversible?** — HA fillers dissolve with hyaluronidase; biostimulators do not. Clinically important,
  compliant, and different on almost every page.
- **How long it lasts, and what happens as it wears off.**
- **What it is not** — Rejuran is not a filler; Profhilo is not a volumiser; Botox does not add volume. Directly
  answers a real query and is different per product.
- **Where it is injected, and at what depth.**
- **X or Y?** — the in-class comparison: Juvéderm and Restylane, Rejuran and Plinest, Sculptra and Ellansé.

### Lifting & tightening (9 — eight never crawled)
`ultracel-q · lifthera · ultherapy-system · xerf · sylfirm-x · morpheus8 · potenza · btl-exilis · wonderface`

- **What depth it reaches** — SMAS, dermis, subcutaneous, in millimetres. Different per device, and the honest
  basis for choosing between them.
- **Lifting, tightening or volume: which problem is yours** — the distinction patients get wrong.
- **When a lift is not the answer** — heavy laxity is a surgical conversation. Cleo does this on one page and it
  reads as the most trustworthy thing there.
- **Ultrasound, monopolar RF or microneedling RF** — the energy type and why it matters.

### Lasers (7)
`picosure · fotona-pqx · fotona-sp-dynamis · dermav · pro-yellow · m22-ipl · fractional-co2`

- **Wavelengths, and what each one targets.**
- **On Asian and darker skin** — Fitzpatrick III–V, post-inflammatory hyperpigmentation risk, melasma caution.
  High value in this market and genuinely different per device.
- **Ablative or non-ablative, and what that means for your week.**
- **What the endpoint looks like** — what the clinician is watching for during the session.

### Body & slimming (4)
`coolsculpting · cooltech · onda-coolwaves · schwarzy`

- **Fat, skin or muscle: which of the three this is.**
- **What it will not do** — not weight loss, not visceral fat.
- **Cycles, applicators and how much area one session covers.**
- **How long before there is anything to see, and what keeps it.**

### Facials (2) · `hydrafacial · silkpeel`

- **The protocol, step by step.**
- **How a clinic facial differs from a spa facial** — the distinction no competitor draws, and the one a searcher
  comparing the two actually needs.

### Hair removal (1) · `alma`

- **Why hair grows back: the growth cycle and why one session cannot work.**
- **On darker skin, and on fine or pale hair.**

### Treatments (19)
Mostly solved by R1 as the D2 blocks land. Where a prose section survives, apply R2 and R4. A treatment page's
distinctive sections are usually *which device we use for this and why*, and *how this compares with the obvious
alternative*.

---

## 4. Order of work

Priority is never-crawled first, most-templated first, highest commercial value first. These agree.

| Batch | Pages | Why first | Plan item |
|---|---|---|---|
| 1 | 13 injectables | All never crawled. Most uniform group on the site. Highest commercial value (botox, fillers). If differentiation works anywhere, it shows here. | 2.3 |
| 2 | 9 lifting & tightening | Eight of nine never crawled. | 2.3 |
| 3 | 7 lasers | Mixed crawl status; `picosure` and `fotona-pqx` are indexed, so this batch tests the diagnosis against a control. | 2.3 |
| 4 | 19 treatments | Falls out of D2 via R1. | 1.5 · 2.5 · 3.4 · 4.1 |
| 5 | 7 remaining technology | Facials, body, hair removal. | 4.1 |

Batch 1 is also the honest test: if the injectables are still uncrawled four weeks after they stop looking
identical, the diagnosis in 03b T0 was wrong and we say so at `docs/15` item 4.4.

---

## 5. The consolidation question, for the client

Differentiation assumes 36 technology pages should exist. That is worth testing rather than assuming.

Four of the injectables — Juvéderm, Restylane, Belotero, Art Filler — are hyaluronic-acid fillers that differ in
crosslinking and rheology, not in what a patient experiences. Google currently treats them as one page. It may be
right.

**Option A — differentiate (this document).** Keep 36 pages, give each two things only it can say. More writing,
keeps every brand term addressable.

**Option B — consolidate.** One *HA dermal fillers* page carrying a comparison table of the four, with the brand
names as sections and anchors. Fewer, stronger pages; loses the standalone brand URLs.

Recommendation: **A for now**, because the brand terms are how people search and we already rank for several. But
if batch 1 is still uncrawled at the 4.4 measurement, B becomes the answer for the HA sub-group and should be put
to the client then. Do not decide it now.

---

## 6. What this does not fix

Sameness is the best-supported explanation for T0, not a proven one; Google does not publish crawl-demand
decisions. It earned its place by being the only hypothesis left after three were tested and failed, and by the
`pico-laser` control. `docs/15` item 4.4 is the verdict, and it can falsify this whole document. If the crawl does
not recover, the next candidates in order are domain-level authority (DA 19, organic down 42% year on year) and
the sheer ratio of published-to-crawled URLs on a small site.
