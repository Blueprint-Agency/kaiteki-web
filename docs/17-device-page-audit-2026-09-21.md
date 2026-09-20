# 17 — Device page audit after the template rebuild (2026-09-21)

> **What this is.** All 36 `/technology/*` pages crawled on the `feat/technology-template` branch after
> `docs/15` item 1.2, scored for SEO, AEO and GEO, and set against the three clinics that hold the Malaysian
> SERPs. Answers the question "were these changes intentional with rankings in mind".
>
> **Method.** Rendered HTML of all 36 pages fetched and parsed — titles, descriptions, canonical, heading
> hierarchy, section anchors, JSON-LD types, word counts, outbound link classes, FAQ markup. Performance from
> GSC, 20 Jun – 17 Sep 2026. Rival structure from the page reads of 2026-09-18 recorded in `docs/03d`.
> Nothing here is asserted from the source; every number came off a rendered page.

---

## 1. Verdict

1. **Structurally we now beat all three rivals.** Every page carries medical schema, a named MMC-registered
   reviewer linked to a profile, 11 section anchors, one H1, a unique title and description, and 1,826 words on
   average. No competitor has the first three on any page.
2. **The crawl problem is untouched.** The sameness score is unchanged at 35 of 36. The rebuild created the
   capacity to differentiate and spent none of it. Expect little ranking movement from this change alone.
3. **One free win is unclaimed.** Not one device page links to another device page.
4. **Two answer-engine slots are built and empty** — the lead-answer capsule and the fact rail, on 0 of 36.

## 2. Crawl results

| Signal | Result | Read |
|---|---|---|
| `MedicalWebPage` + `MedicalDevice`/`Drug` | 36/36 | Botox types as `Drug`, the other 35 as `MedicalDevice`. Fillers are Class III devices, so correct. |
| `BreadcrumbList`, `MedicalBusiness`, `Person` reviewer | 36/36 | One connected graph per page. No rival emits any of it. |
| Named reviewer + MMC + profile link | 36/36 | The ownable gap, now live everywhere. |
| Single H1 | 36/36 | Clique ships duplicate H1s on its Pico page. |
| Section anchors | 11/page (6 on botox) | Was zero before the rebuild. |
| Unique titles / descriptions | 36/36 | No duplication. |
| Average word count | 1,826 | Above Clique PicoSure (1,500) and Cleo HIFU (1,700). Botox floors at 967. |
| FAQ, answers in initial HTML | 4/page | Question-shaped and brand-specific, but shallow vs Clique's 11–30. |
| Links to treatments / concerns / branches | 8.5 / 8.4 / 9 | Strong outward routing. |
| **Links to other device pages** | **0** | Finding 1. |
| **Links to blog posts** | **0** | Pending item 1.3. |
| **Lead-answer capsule** | **0/36** | Slot built, no data. Item 2.3. |
| **Fact rail** | **0/36** | Same. |
| Question-shaped H2s | 3/page, identical across all 36 | Because they are the same three headings. |
| H2s naming the device | 2 of ~8 | `docs/16` R2. |
| Titles > 60 chars | 1 (`dermav`, 64) | Will truncate. |
| Descriptions outside 140–160 | 6 | `fotona-sp-dynamis` 163, `lifthera` 163, `hydrodeluxe` 167, `ultracel-q` 161, `potenza` 162, `sculptra` 162. |
| FAQ answers with anchor ids | 0 | Finding 4. |

## 3. Gap table — device pages specifically

| Element | Cleo | Dr Chong | Clique | Us after rebuild | Meaning |
|---|---|---|---|---|---|
| Dedicated device pages | ⚠️ named inside treatment pages | ❌ none, brand never named | ✅ ~70 | ✅ 36 | Only Clique competes. Dr Chong has ceded the brand-term cluster entirely. |
| Per-page medical schema | ❌ | ❌ `Product`+`Offer` | ⚠️ 1 of 4 | ✅ 36/36 | Uncontested. |
| Named reviewer + MMC + link | ❌ | ❌ admin author | ❌ | ✅ 36/36 | Uncontested, now live. |
| Section anchors | ❌ | ❌ | ⚠️ accordion self-anchors | ✅ 11/page | Lets an answer engine cite a section. |
| Answer-first capsule | ❌ | ❌ | ❌ | ❌ 0/36 | Nobody has it; still ours to take. |
| **Sibling device links** | ✅ 6–8 | n/a | ✅ 12 on its best page | **❌ 0** | **We are last.** |
| Visible FAQ depth | 5 | 5 | 11–30 | 4 | Shallowest of the four. |
| Price shown | ✅ | ⚠️ hidden in schema | ⚠️ 1 of 4 | ❌ by decision | Settled 2026-09-20. |
| Superlatives / unverifiable claims | heavy | heavy | heaviest | none | All three carry exposure we do not. |
| Word count | 1,500–2,900 | 1,100–1,500 | 1,100–2,200 | 1,826 avg | Length is not the lever. |

**Strategic read.** Dr Chong ranks #3 for HIFU and #2 for Pico with no device pages and no brand names at all.
Clique built ~70 device pages; its strongest, Sylfirm X, carries a price, a session count, five short comparisons
and a 12-link related block. That page is the bar. We clear it on schema, reviewer and anchors; we fall short on
comparisons, sibling links and FAQ depth.

## 4. Findings, worst first

1. **No device page links to another device page.** Zero across 36. Equity arrives and never circulates. The
   in-class comparison section `docs/16` §3 already prescribes carries the link naturally — Juvéderm to
   Restylane, Rejuran to Plinest, Sculptra to Ellansé — fixing the heading sameness and the link hole together.
2. **Both answer-engine slots are empty.** The capsule and fact rail are the surfaces an AI answer lifts, and no
   rival has either. Until they carry data the advantage is theoretical. Item 2.3.
3. **Three question-shaped headings per page, the same three.** Only two headings per page name the device.
   Sameness unchanged at 35/36 — by design, but it is the reason the cluster is uncrawled.
4. **FAQ answers have no anchor ids.** The questions are good and the answers are in the initial HTML, but the
   page is the smallest citable unit where an answer could be. A few lines to fix.
5. **Seven metadata outliers.** One over-long title, six off-spec descriptions. Listed in §2.
6. **`og:type` is `website`** on pages that carry an author, a review date and a schema reviewer. `article` is
   more accurate.
7. **Seven pages still have zero impressions** — `fotona-sp-dynamis`, `ultracel-q`, `lifthera`, `xerf`,
   `wonderface`, `cooltech`, `juvederm`. All in the never-crawled set; differentiation is the only lever left.

## 5. Were the changes intentional with rankings in mind?

**Yes, with an honest qualifier: the rebuild was plumbing.** It fixed every structural deficit measurable on a
page and, on those dimensions, the pages now beat all three rivals — two of the advantages held by nobody else.

**It deliberately did not touch differentiation**, the diagnosed reason 23 of these 36 have never been crawled.
The sameness score is identical before and after. Expected ranking movement from this change alone is small, and
a flat result in October is not evidence against the `docs/03b` T0 diagnosis.

**What compounds is the sequence.** The template had to exist before the fields could carry content, and the
content is what earns the crawl. Batch 1 — the 13 injectables — is the test.

## 6. Recommended now

Inside the current branch, under an hour together:

- Anchor ids on FAQ items, so an individual answer becomes citable (finding 4).
- The seven metadata outliers (finding 5).
- `og:type` to `article` on reviewed medical pages (finding 6).

The sibling-link hole is better solved inside the differentiation work than bolted on: a group-based "related
devices" row would stamp the same block onto 36 pages and make the sameness worse. The in-class comparison
carries the link and the differentiation together.
