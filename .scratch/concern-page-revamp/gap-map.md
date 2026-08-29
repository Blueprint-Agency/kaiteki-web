# What is absent on each of the fourteen concern pages

Read from the shipped data, not from memory: `content/data/concerns.ts`,
`config/concerns.json` (depth), `config/concern-media.json` (what exists on R2) and
`config/concern-signoff.json`, at commit `a654939` (29 Aug 2026). Every page in the table
below builds and renders — this is a map of what is *not on* them.

## Legend

| Tag | Meaning |
|---|---|
| **blocked** | The asset does not exist. Needs commissioning or a shoot before anything can be authored. |
| **available** | The asset is already on R2 and passes the manifest, but no page references it. Authorable today. |
| **by design** | Absent on purpose — a rule or a decision says so. Not a gap. |
| **unwritten** | No asset needed. Copy that has not been written. |

Two rules generate most of the "by design" rows:

- **lite depth has no comparison table** (QA gate Q-02). `body-slimming`, `hair-loss`,
  `tattoo-removal`, `birthmark`, `vascular-lesions`, `excessive-sweating` are lite.
- **acne is the pillar showcase** (`docs/06` §5.3). It is the only page carrying the full
  block set; illustrations and stage slides were only ever produced for it.

`ConcernView` renders nothing for a block whose data is absent, so none of this shows as a
placeholder or a hole — an incomplete page reads as a shorter page.

---

## Summary

| # | Concern | Depth | FAQs | State |
|---|---|---|---|---|
| 1 | acne | full | 12 | Complete. The template reference. |
| 2 | pigmentation | full | 12 | Complete bar cause figures |
| 3 | fine-lines-wrinkles | full | 12 | Complete bar results |
| 4 | dark-eye-circles | full | 12 | Complete |
| 5 | face-contouring | full | 12 | Complete |
| 6 | face-lifting | full | 12 | Complete |
| 7 | aging | full | 12 | Complete bar cause figures |
| 8 | body-slimming | lite | 8 | Complete |
| 9 | hair-loss | lite | 8 | Complete bar cause figures |
| 10 | tattoo-removal | lite | 8 | Complete bar cause figures |
| 11 | **enlarged-pores** | full | 3 | **Stub** — assets exist, page unwritten |
| 12 | **birthmark** | lite | 3 | **Stub** — blocked on assets |
| 13 | **vascular-lesions** | lite | 3 | **Stub** — part-blocked |
| 14 | **excessive-sweating** | lite | 3 | **Stub** — blocked on assets |

**All fourteen are unsigned.** `config/concern-signoff.json` is empty, so every page renders
"Awaiting medical review" instead of a doctor byline and asserts no reviewer in schema.
Nothing here is a code task — it needs the named doctors to actually read the pages.

---

## The ten authored pages

### 1. acne
Nothing absent. Banner pair, 3 facts, 7-item jump nav, causes with 4 figures, 8
illustrations in two groups, 3 stage slides, comparison table, 16 results, 3 first-visit
photographs, risks, cost factors, 3 related concerns, 12 FAQs.

### 2. pigmentation
- **cause figures** — *blocked.* Q-19 pairs figures to causes by position and the available
  photographs (`agespot`, `sun-induced-aging`, `sun-damaged`, `unevenskintone`) do not map
  one-to-one onto the authored causes. Wiring them would re-caption a photograph to mean
  something it does not show.
- illustrations — *by design.* Acne only.
- first-visit photographs — *unwritten.* See the note under §4 below.

Has: banner, 5 stage slides, 14 results, comparison table, everything else.

### 3. fine-lines-wrinkles
- **results** — *blocked.* The one candidate file reads as a supplier demonstration rather
  than a Kaiteki patient (`docs/11` §3), so it cannot be shown as a result.
- stage slides — *blocked.* None exist for this concern.
- illustrations, first-visit photographs — *by design / unwritten.*

Has: banner, 7 cause figures (the richest figure set after acne), comparison table.

### 4. dark-eye-circles
- stage slides — *blocked.* None exist.
- illustrations, first-visit photographs — *by design / unwritten.*

Has: banner, 3 cause figures, 9 results, comparison table.

### 5. face-contouring
Same three absences as dark-eye-circles. Has banner, 2 cause figures, 13 results,
comparison table.

### 6. face-lifting
Same three absences. Has banner, 4 cause figures, 17 results (the largest set),
comparison table.

### 7. aging
- **cause figures** — *blocked.* Same position-pairing problem as pigmentation; the
  manifest holds only banners, stage art and results for this concern.
- illustrations, first-visit photographs — *by design / unwritten.*

Has: banner, 5 stage slides, 2 results, comparison table.

### 8. body-slimming
- comparison table — *by design.* Lite depth.
- stage slides — *blocked.* None exist.
- illustrations, first-visit photographs — *by design / unwritten.*

Has: banner, 4 cause figures, 5 results.

### 9. hair-loss
- comparison table — *by design.* Lite depth.
- **cause figures** — *blocked.* Position-pairing, as above.
- stage slides — *blocked.*
- illustrations, first-visit photographs — *by design / unwritten.*

Has: banner, 5 results.

### 10. tattoo-removal
Identical shape to hair-loss: no comparison table (lite), no cause figures (pairing), no
stage slides. Has banner and 10 results.

---

## The four stubs

Each ships a compliant summary, a lead answer and three explanatory sections only. Absent
on all four: banner pair, fact rail, jump nav, causes and cause figures, first-visit
block, risks, cost factors, related concerns, illustrations, stage slides — and the FAQ
count is 3 against a quota of 12 (full) or 8 (lite). None carry a per-treatment "why this
treatment for this concern" line, which is the nine standing QA-gate warnings.

### 11. enlarged-pores — *the one that is not blocked*
Thirteen assets already sit on R2 and pass the manifest, and none of them are referenced:

```
banner.jpg (1920×667) + banner-sm.jpg (1203×667)   ← a complete banner pair
sebaceous.jpg, sweat.jpg (1203×667)                ← usable as cause figures
unevenskintexture.png (500×400)
photo.jpg, photo-2.jpg
before-after-01…06.jpg                             ← six results
```

This page is short on **copy, not pictures**. It needs the full authoring pass — 12 FAQs,
5 treatment rationales, causes, risks, cost factors, comparison table — after which the
media wires straight in. `docs/11` §4 lists it as needing "2–3 cause figures"; the three
above may already satisfy that, subject to a look at whether they pair to the causes.

### 12. birthmark — blocked
One asset exists: `photo.jpg` (1735×1410). Needs a banner pair, 2–3 type figures at 2:1,
and results before the page can carry the template.

### 13. vascular-lesions — part-blocked
Five assets exist: `telengectasia.jpg` plus **four results**. Needs a banner pair and 2–3
type figures. Results and copy could be authored ahead of the banner.

### 14. excessive-sweating — blocked
Two assets exist, both generic photographs. Needs a banner pair, 2–3 cause/area figures
and results.

---

## First-visit photographs, specifically

The three first-visit images are a shared, concern-neutral set
(`concerns/first-visit/treatment-in-progress-0{1,2,3}.jpg`) and only acne references them.
No asset blocks any other page from carrying the same block — it is an authoring decision,
not a media gap, and the cheapest single upgrade available to the other nine authored
pages if the block is wanted beyond the pillar.

---

## What to do next, in cost order

1. **Sign-off** — fourteen pages of medical copy, zero doctors on record. Code side is done;
   this is a scheduling problem.
2. **enlarged-pores** — the only stub whose media already exists. One authoring pass ships it.
3. **First-visit block** on the nine other authored pages — assets exist, no commissioning.
4. **Commission** the birthmark / excessive-sweating / vascular-lesions banners and figures
   (`docs/11` §4 has the list). Audit the treatment and device libraries first; some of it
   may already exist under a treatment name.
5. **Cause figures** for pigmentation, aging, hair-loss, tattoo-removal — needs either new
   photographs that map to the authored causes, or a decision to re-author the causes
   around the photographs that exist.
