# Content schedule: Kaiteki

The monthly plan, from November 2026. The SEO client tracker reads this file on every push, the
same way it reads every other client's schedule. It replaces `docs/15-four-week-plan-2026-09-21.md`
as the tracker's source; docs/15 stays as the record of how the October weeks were planned.

**Every month: 10 new pieces and 5 improvements to existing pages.** Every piece ships in all
three languages, English, 中文 and BM, whether or not each language has measured search volume, so
10 pieces is 30 pages.

- **Type** gives the page type and the **primary language**, the one the primary keyword is
  researched in: `Concern · EN`, `Blog · ZH`, `Blog · BM`. The other two languages are versions
  of the same piece, each on its own keyword, never a literal translation.
- **Status**: Not started, In progress, Blocked, Built (on a branch, not yet on main), Live (on
  main, which deploys to kaiteki.my), Dropped. A piece is Live once all three language pages are.
- Keep the ID column. It is how the tracker matches rows. A new row needs a new, unused ID.

## Month 1: October four-week plan

October 2026. The 21 Sep – 18 Oct plan in docs/15, one row per item; the Evidence column says which
week. Rows with no language are dev, ops or client tasks, not content pieces. Still open on 19 Oct (all but kt1.6 live by 28 Oct):
kt4.1–kt4.6 and kt1.6, to be finished alongside Month 2

| ID | Piece | Primary keyword | Type | Slug | Status | Evidence |
|---|---|---|---|---|---|---|
| kt1.1 | Reviewer assignment across the 21 doctors |  | Client + Content |  | Live | Week 1 |
| kt1.2 | Technology template upgrade |  | Dev |  | Live | Week 1 |
| kt1.2a | docs/17 audit fixes |  | Dev + Content |  | Live | Week 1 |
| kt1.3 | "Read next" row on all three templates |  | Dev |  | Live | Week 1 |
| kt1.4 | Treatments batch A: hifu, skin-booster |  | Content · EN |  | Live | Week 1 |
| kt1.6 | Request indexing for the 14 unindexed URLs (D1) |  | Client + Ops |  | Blocked | Week 1. Still blocked 28 Oct: 0 of the 14 indexed (docs/15 §4.5); 6 first crawled 21 Oct. Client to confirm whether the requests in docs/15b/request-indexing-2026-09-24.txt were ever made (docs/15c §3.4) |
| kt1.5 | Baseline snapshot (docs/15b) |  | Ops |  | Live | Week 1 |
| kt2.0 | Capsules and fact rails on all 36 technology pages |  | Content · EN |  | Live | Week 2 |
| kt2.1 | Batch 1: 13 injectables differentiated |  | Content · EN |  | Live | Week 2 |
| kt2.2 | Batch 2: 9 lifting & tightening devices differentiated |  | Content · EN |  | Live | Week 2 |
| kt2.3 | Treatments batch B: microneedling, exosome-therapy, ultherapy |  | Content · EN |  | Live | Week 2 |
| kt2.0a | costFactors on all 36 technology pages |  | Content · EN |  | Live | Week 2. 22/36 as of 28 Sep |
| kt2.4 | Cost sections, factors only + check:cost lint |  | Content + Dev |  | Live | Week 2. Marked ✅ in the plan’s progress line (28 Sep), but the row itself has no ✅ |
| kt3.1 | Batch 3: 7 lasers |  | Content · EN |  | Live | Week 3. Technology sameness budget ≤14 → ≤7 |
| kt3.2 | Batch 4: the last 7 technology pages |  | Content · EN |  | Live | Week 3. Technology sameness budget ≤7 → 0 |
| kt3.3 | New page: /concerns/acne-scars | acne scars | Content + Dev · EN | acne-scars | Live | Week 3 |
| kt3.4 | New page: /concerns/skin-tags-moles | skin tag removal | Content + Dev · EN | skin-tags-moles | Dropped | Week 3. Moved to Month 2 as kt101. 2,900/mo. First to drop to week 5 if content capacity is one person |
| kt3.5 | New page: /concerns/melasma | melasma | Content + Dev · EN | melasma | Live | Week 3. 720/mo |
| kt3.6 | Treatments batch C: fat-freezing, fotona-4d, radiofrequency, bio-stimulator, laser-hair-removal |  | Content · EN |  | Live | Week 3. Treatments sameness budget ≤12 → ≤7 |
| kt3.7 | Two-arm ranking check on the injectables (D2) |  | Ops |  | Live | Week 3 |
| kt4.1 | Treatments batch D: the last 8 |  | Content · EN |  | Live | Week 4. Live 28 Oct: 19/19 treatments carry the minimum. One new clinical line (microwave contouring pigment note) awaits Dr Jacqueline Tan (docs/15c §3.3) |
| kt4.2 | FAQ depth pass: 4–6 questions per page |  | Content · EN |  | Live | Week 4. Live 28 Oct: every treatment and technology page at 4–6 FAQs |
| kt4.3 | Internal-link audit script |  | Dev |  | Live | Week 4. scripts/check-links.mts (pnpm check:links): 0 rows, 7 reasoned exemptions waiting on pages that do not exist |
| kt4.4 | Chinese /zh and Malay /ms: plumbing + 16-page pilot |  | Dev + Content + Client |  | Live | Week 4. Live 28 Oct: 220 zh/ms pages signed and published (110 per locale), hreflang and sitemap; /cn redirects land on /zh. On 20 of them (10 treatments) about 225 strings per locale are Claude drafts no doctor has read yet (docs/15c §3.2). Blog routes for /zh and /ms carried to Month 2 (needed for kt105–kt110) |
| kt4.5 | Measure against the docs/15b baseline |  | Ops |  | Live | Week 4. docs/15 §4.5 and docs/15b/gsc-measure-2026-10-28.csv: rewritten pages gained impressions, not position; 0/14 indexed; option B and the paragraph check go to the client |
| kt4.6 | Handover |  | Content · EN |  | Live | Week 4. docs/15c-handover-2026-10-28.md, on main; not yet sent to the client |

## Month 2: Comparisons, aftercare and the pages that already rank

November 2026. Drafted 19 Oct 2026 from the keyword maps (docs/18–22) and the gap and CTR docs
(docs/03a, 03b, 03d, 10, 15b), against the pages that already exist in content/data and
content/blog. ⚑ kt105–kt110 lead in 中文 or BM, and /zh and /ms have no blog routes yet: blog
locale plumbing comes first. Every 中文 and BM page needs a doctor's signed entry in
content/i18n/pages.ts. 中文 and BM keywords come from autocomplete and have no measured volume;
recheck in Search Console once live. ⚑ kt103 and kt101 need the client (see their rows)

| ID | Piece | Primary keyword | Type | Slug | Status | Evidence |
|---|---|---|---|---|---|---|
| kt101 | Skin tags and moles: why a mole is assessed before removal, and CO2 laser removal | skin tag removal | Concern · EN | /concerns/skin-tags-moles | Not started | 2,900/mo · October item kt3.4, never built + docs/03d §5. 中文 激光点痣 · BM buang tahi lalat laser (docs/19 birthmark.md). ⚑ Needs clinician input; the legacy /blog/skin-tag-removal-malaysia should link to it |
| kt102 | Ice pick scars: what they are and which treatments reach them | ice pick scars | Blog · EN | /blog/ice-pick-scars | Not started | 880/mo, Clique #2 via a blog post · docs/03d §5 D6. Spoke of /concerns/acne-scars. 中文 冰锥型痘疤 · BM parut jerawat ice pick (docs/19 acne-scars.md) |
| kt103 | Nose thread lift: how it works, suitability and downtime | nose thread lift | Treatment · EN | /treatments/nose-thread-lift | Not started | No MY volume in docs. 2,589 MY impressions, 0 clicks, not in top 16 · docs/03b T6 + §1.5. ⚑ Thread lift is not in content/data/treatments.ts: client to confirm it is offered and who reviews it |
| kt104 | Sculptra vs Radiesse: how the two bio-stimulators differ | sculptra vs radiesse | Blog · EN | /blog/sculptra-vs-radiesse | Not started | Comparison demand (autocomplete) · docs/21 sculptra.md. Comparisons earn 3–4.4% CTR vs a 0.1–1% norm · docs/03b T10. 中文 radiesse 和 sculptra |
| kt105 | Pantang Selepas Laser Muka: Apa yang Perlu Dielakkan (What to avoid after a facial laser treatment) | pantang selepas laser muka | Blog · BM | /blog/after-facial-laser-aftercare | Not started | Autocomplete, no volume; a Malaysian framing with clear demand · docs/18 §6 Q7. 中文 医美恢复期, 激光祛斑多久恢复 (docs/18 §6) |
| kt106 | Jeragat vs Pigmentasi: Apa Bezanya? (Melasma vs other pigmentation: what's the difference?) | jeragat vs pigmentasi | Blog · BM | /blog/melasma-vs-pigmentation | Not started | Head term jeragat 5,400/mo; a competitor's (Cleo) BM post ranks · docs/03d §3. Pair from autocomplete · docs/19 melasma.md. 中文 黄褐斑, 色斑 (docs/18 §5.1) |
| kt107 | 激光反黑怎么办？(Darkening after laser: why it happens on Asian skin and what to do) | 激光反黑怎么办 | Blog · ZH | /blog/darkening-after-laser | Not started | Autocomplete, no volume: 激光反黑 → 激光反黑怎么办 · docs/19 acne.md, pigmentation.md; 打斑后反黑 · docs/18 §6 Q4. BM laser kulit gelap |
| kt108 | 法令纹可以消除吗？成因与非手术改善选择 (Nasolabial folds: causes and non-surgical options) | 法令纹怎么消除 | Blog · ZH | /blog/nasolabial-folds | Not started | Autocomplete, no volume: 法令纹 → 法令纹怎么消除 · docs/18 §5.1, docs/19 fine-lines-wrinkles.md. BM cara hilangkan garis senyuman. Spoke of fine-lines-wrinkles |
| kt109 | 冷冻溶脂后注意事项 (Aftercare after fat freezing: what is normal and when to call) | 冷冻溶脂后注意事项 | Blog · ZH | /blog/fat-freezing-aftercare | Not started | Autocomplete, strong (also 冷冻溶脂后遗症); no EN heading carries it · docs/20 fat-freezing.md. BM not mapped yet. Spoke of /treatments/fat-freezing |
| kt110 | 水光针和微针的区别 (Skin booster vs microneedling: how they differ) | 水光针和微针的区别 | Blog · ZH | /blog/skin-booster-vs-microneedling | Not started | Autocomplete, no volume · docs/18 §6 Q9. Comparison format per docs/03b T10. Links the skin-booster and microneedling treatments. BM not mapped yet |
| kt111 | Laser hair removal page: indexing push, FAQ depth to 4–6 and inbound links from concern and location pages | laser hair removal malaysia | Treatment · EN | /treatments/laser-hair-removal | Not started | Improvement. Head term 2,900/mo (docs/03d) vs 5 MY impressions, pos 9.4 · docs/15b. 中文 激光脱毛 · BM laser buang bulu. Do with kt4.2 (FAQ pass) |
| kt112 | Pico laser page: close the ranking gap (depth, a cost-factors heading for the price query, links from pigmentation and branches) | pico laser malaysia | Treatment · EN | /treatments/pico-laser | Not started | Improvement. 70/mo · docs/10. 8,457 MY impressions, pos 13.3, CTR 0.06% · docs/15b. T9c gap · docs/03b. Price query 110/mo · docs/03d §6. 中文 皮秒激光 · BM rawatan pico laser |
| kt113 | Dark eye circles page: run the T9d query and SERP diagnosis, then fix what it finds | dark eye circle treatment | Concern · EN | /concerns/dark-eye-circles | Not started | Improvement. 50/mo · docs/10. 5,834 MY impressions, pos 6.8, CTR 0.27% · docs/15b. T9d never diagnosed · docs/03b. 中文 黑眼圈治疗 · BM rawatan lingkaran gelap bawah mata |
| kt114 | Hair loss page: depth, and more treatment and blog links for the highest-volume concern term | hair loss treatment | Concern · EN | /concerns/hair-loss | Not started | Improvement. 720/mo, highest concern term · docs/10. 389 MY impressions, pos 15.8, 0 clicks · docs/15b. Only one treatment spoke · docs/05 §5. 中文 脱发治疗 · BM rawatan rambut gugur |
| kt115 | Pelangi JB branch page: lift it from page 3 (unique local copy, internal links, JB intent) | aesthetic clinic taman pelangi | Location · EN | /locations/pelangi-johor-bahru | Not started | Improvement. GSC 307 impressions, no Ubersuggest volume · docs/10. 2,489 MY impressions at pos 29.4 · docs/03b §1.5. JB market 480/mo · docs/03a. 中文 新山医美诊所 · BM klinik kecantikan johor bahru |
