# 20. Treatment keyword log: Bio-stimulator (`/treatments/bio-stimulator`)

**Date:** 2026-10-14 · Treatment-page localisation round, same format as the pilot (`pico-laser.md`).
**Outputs:** `content/i18n/treatments/zh/bio-stimulator.json`, `content/i18n/treatments/ms/bio-stimulator.json` (same shape as the EN record; EN snapshot in `content/i18n/treatments/_en/bio-stimulator.json`).
**Inputs:** EN record for `bio-stimulator`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the translated `aging`, `face-lifting`, `fine-lines-wrinkles` and `dark-eye-circles` concern pages (terminology carried over, see below).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. Same reading as the pilot: HAS VOLUME = the phrase or a natural Malaysian form of it comes back without a Taiwan/HK/Indonesia skew (*dcard / ptt / 雷射*; *wajah / perawatan / apakah / adalah / harga … jakarta*).
- **Decision:** KEYWORD = phrased around the real query form, EN meaning kept. DIRECT = faithful translation, no invented keyword.
- **Probes:** 52 zh and 49 ms on this page's family (shared batch with `facial-treatments`; 126 zh and 128 ms in total). Raw dumps: `C:/tmp/biofac-ac-zh.json`, `C:/tmp/biofac-ac-zh2.json`, `C:/tmp/biofac-ac-ms.json`, `C:/tmp/biofac-ac-ms2.json` (not in the repo).
- **Scope:** seoTitle, seoDescription, name, section headings, variantModule heading, route title, ctaMid heading, FAQ questions. This record has no jumpNav and no comparison block. All body copy is a direct, faithful translation.
- **The demand problem on this page:** almost all Chinese demand sits on product street names (`童颜针` = Sculptra, `少女针` = Ellansé, `微晶瓷` = Radiesse), which name prescription devices as consumer products. None is used anywhere on the page. Where a KEYWORD is claimed below, it borrows the **question pattern** that those street-name queries show (是什么, 原理, 恢复期, 要打几次) and applies it to the neutral name 胶原蛋白刺激剂, as the pilot did with FAQ 1. Malay demand is mostly English (`sculptra malaysia`, `bio stimulator for face`).
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `reviewedBy`, `lastReviewed`, top-level `category`, the `relatedReasons` key, `device` ("Sculptra"), product `title`s (Sculptra, Radiesse, Ellansé, Deusaderm). The variant `eyebrow`s are translated where they are words (material names), with the manufacturer kept Latin.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Bio-stimulator" | 胶原蛋白刺激剂, 胶原蛋白刺激, 胶原刺激剂, 胶原蛋白增生, 胶原蛋白针, 童颜针, 少女针 | `胶原蛋白刺激` → 胶原蛋白刺激剂; `胶原刺激剂` empty; `胶原蛋白增生` → 增生剂 dcard (TW); `童颜针` → 是什么, 价格, sculptra (street name, not for display) | KEYWORD (weak): **胶原蛋白刺激剂（Bio-stimulator）** (terms.ts, kept) |
| **seoTitle** "Bio-Stimulator Malaysia \| Sculptra, Ellanse \| Kaiteki" | sculptra, sculptra 价钱, sculptra 中文, ellanse, 童颜针 马来西亚 | `sculptra` → 是什么, 中文, 副作用, 价钱; `ellanse` → 是什么, 价格, 中文; every "+马来西亚" form empty | KEYWORD: **马来西亚胶原蛋白刺激剂 Sculptra \| Kaiteki** (30 chars). Ellanse doesn't fit in 30 and moves to the description. 马来西亚 kept for the EN geo intent (pilot precedent). |
| **seoDescription** | (same family) | as above | KEYWORD: 胶原蛋白刺激剂, Sculptra, Ellanse, 免费咨询 (82 chars). The EN has "Book a free consultation", so 免费咨询 is kept. |
| sections[0].heading "What is a bio-stimulator?" | 胶原蛋白刺激剂是什么, sculptra是什么, 童颜针是什么, ellanse是什么, radiesse是什么, 胶原蛋白针是什么 | 是什么 is a top-2 modifier for every product in the class; `胶原蛋白针是什么` returns; `胶原蛋白刺激剂是什么` empty | KEYWORD (pattern): **胶原蛋白刺激剂是什么？** |
| sections[1].heading "How does a bio-stimulator work with your own collagen?" | 胶原蛋白刺激剂 原理, 童颜针原理, 刺激胶原蛋白, 刺激胶原蛋白 医美 | `童颜针原理` returns; `刺激胶原蛋白 医美` returns; `刺激胶原蛋白` → 增生 (ptt, 雷射: TW); the 刺激剂 form is empty | KEYWORD (pattern): **胶原蛋白刺激剂原理：如何刺激你自身的胶原蛋白？** (pilot used the same 原理 lead-in) |
| variantModule.heading "Sculptra, Radiesse or Ellansé: which material, and why" | radiesse, radiesse 中文, sculptra 中文, ellanse 少女针, 聚左旋乳酸, 微晶瓷 | `sculptra 中文` → **radiesse vs sculptra 中文**; `radiesse` → 中文, 是什么, 功效; `聚左旋乳酸` → 价格, 是什么 (some dcard) | KEYWORD (brand terms): **Sculptra、Radiesse 还是 Ellansé：用哪种材料，为什么** |
| routes[0].title "Gradual collagen rebuilding over months" | 刺激胶原蛋白增生, 胶原蛋白增生 医美, 胶原蛋白重建 | `刺激胶原蛋白` → 增生 forms are TW (ptt, 雷射); 增生剂 is dcard | DIRECT: **在几个月内逐步重建胶原蛋白** |
| ctaMid.heading "Not sure whether you need a filler or a bio-stimulator?" | 需要填充剂还是, 填充剂 区别, 胶原蛋白刺激剂 填充剂 | all empty | DIRECT: **不确定自己需要填充剂还是胶原蛋白刺激剂？** |
| FAQ 1 "Is a bio-stimulator the same as a dermal filler?" | 童颜针和玻尿酸, 童颜针和玻尿酸的区别, sculptra 和 玻尿酸, 玻尿酸 童颜针 区别, 胶原蛋白针和玻尿酸, 玻尿酸和 | all pair forms empty; `玻尿酸和` → 区别/差别 only for 肉毒杆菌, 胶原蛋白, prp | DIRECT: **胶原蛋白刺激剂和填充剂是一样的吗？** (kept as a yes/no so the answer's "不是" still fits) |
| FAQ 2 "Suitable for sensitive skin?" | 敏感肌可以打, 童颜针 敏感肌, 胶原蛋白针 敏感肌 | `敏感肌可以打` → **敏感肌可以打皮秒吗, 敏感肌可以打水光针吗**; product forms empty | KEYWORD (pattern): **敏感肌可以打胶原蛋白刺激剂吗？** |
| FAQ 3 "Is there any downtime?" | 童颜针恢复期, 童颜针 有恢复期吗, 胶原蛋白针 恢复期 | `童颜针恢复期` returns; others empty | KEYWORD (pattern): **打胶原蛋白刺激剂有恢复期吗？** (恢复期 per docs/18 §6) |
| FAQ 4 "How many sessions will I need?" | 童颜针要打几次, 童颜针 打几次, 童颜针多久打一次, sculptra 几次, 胶原蛋白针要打几次 | `童颜针要打几次` and `童颜针 打几次` return; the rest empty | KEYWORD (pattern): **胶原蛋白刺激剂要打几次？** |

**Chinese tally (12 logged strings):** 9 KEYWORD, 3 DIRECT. Product titles aren't counted.

**Not usable (street names or skewed):** `童颜针`, `少女针`, `微晶瓷` (strong, but street names for Sculptra / Ellansé / Radiesse); `胶原蛋白针` (returns, but bio-stimulators aren't collagen, so it would mislabel the class; only Deusaderm is collagen-based); `胶原蛋白增生剂` (dcard, TW); `童颜针 结节`, `童颜针 硬块` (real worry, already answered by the risks block, not added as a heading).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Bio-stimulator" | bio stimulator, biostimulator, bio stimulator malaysia, perangsang kolagen, suntikan kolagen, rawatan perangsang kolagen | `bio stimulator` → for face, treatment, injections (English); `perangsang kolagen` → makanan (food); `suntikan kolagen` → payudara, di wajah (ID); `bio stimulator malaysia` empty | KEYWORD: **Bio-stimulator (Perangsang Kolagen)** (terms.ts, kept) |
| **seoTitle** | sculptra malaysia, ellanse malaysia, radiesse malaysia, bio stimulator malaysia | `sculptra malaysia` → price, reviews, treatment, cost; `ellanse malaysia` → price, filler malaysia; `bio stimulator malaysia` empty | KEYWORD: **Bio-stimulator di Malaysia \| Sculptra, Ellanse \| Kaiteki** (56 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: bio-stimulator, Sculptra, Ellanse, konsultasi percuma (154 chars) |
| sections[0].heading "What is a bio-stimulator?" | apa itu bio stimulator, apa itu sculptra, bio stimulator adalah, sculptra untuk apa | `apa itu sculptra` → apa itu sculptra treatment; `sculptra untuk apa` returns; `bio stimulator adalah` → biostimulator adalah (ID) | KEYWORD (pattern): **Apa itu bio-stimulator?** |
| sections[1].heading "How does a bio-stimulator work with your own collagen?" | merangsang kolagen, rangsang kolagen, cara kerja sculptra, rawatan kolagen | `merangsang kolagen` → wajah, adalah, produksi (ID); `cara kerja sculptra` returns (ID *cara kerja*); `rawatan kolagen` → benang kolagen (threads) | DIRECT: **Bagaimana bio-stimulator berfungsi dengan kolagen anda sendiri?** |
| variantModule.heading | sculptra malaysia, radiesse malaysia, ellanse malaysia, juvelook malaysia | all three brands return MY price/filler forms | KEYWORD (brand terms): **Sculptra, Radiesse atau Ellansé: bahan yang mana, dan kenapa** |
| routes[0].title "Gradual collagen rebuilding over months" | merangsang kolagen, rawatan perangsang kolagen, suntikan perangsang kolagen | ID-led or empty | DIRECT: **Pembinaan semula kolagen secara beransur-ansur dalam beberapa bulan** (matches the ms face-lifting wording) |
| ctaMid.heading "Not sure whether you need a filler or a bio-stimulator?" | filler atau, bio stimulator vs filler | `filler atau` → botox, tanam benang (not this pair) | DIRECT: **Tak pasti sama ada anda perlukan filler atau bio-stimulator?** |
| FAQ 1 "Is a bio-stimulator the same as a dermal filler?" | bio stimulator vs filler, sculptra vs filler, filler vs sculptra, beza filler dan, beza filler dan sculptra | `bio stimulator vs filler` returns itself; `sculptra vs filler` → cost, cheeks, before and after (strong); Malay *beza* forms empty or about botox | KEYWORD: **Bio-stimulator vs dermal filler: sama ke?** |
| FAQ 2 "Suitable for sensitive skin?" | sculptra kulit sensitif, kulit sensitif boleh, bio stimulator untuk, sculptra sesuai | `kulit sensitif boleh` → skincare actives only; others empty | DIRECT: **Rawatan bio-stimulator sesuai ke untuk kulit sensitif?** |
| FAQ 3 "Is there any downtime?" | sculptra downtime, bio stimulator downtime, suntikan kolagen downtime, filler ada downtime | `sculptra downtime` → reviews, before and after (strong); `filler ada downtime` → apakah … (ID) | KEYWORD (term): **Bio-stimulator ada downtime ke?** (downtime per docs/18 §6) |
| FAQ 4 "How many sessions will I need?" | sculptra berapa sesi, sculptra berapa kali, bio stimulator berapa kali, suntikan kolagen berapa kali, sculptra berapa vial | all empty except `sculptra berapa vial` → 1 vial berapa cc (dose, not sessions) | DIRECT: **Perlu berapa sesi bio-stimulator?** |

**Malay tally (12 logged strings):** 7 KEYWORD, 5 DIRECT.

**Indonesian pollution seen and avoided:** suntikan kolagen di wajah, merangsang kolagen wajah / produksi kolagen, biostimulator adalah, cara kerja, apakah filler ada downtime, harga sculptra di indonesia / jakarta, sculptra harga. **Not used:** `sculptra tahan berapa lama` (real MY demand, but the EN has no duration question; the cannotDo line already says it isn't permanent).

## Terms carried over from the concern pages

| EN | zh | ms | Source |
|---|---|---|---|
| bio-stimulator / collagen-stimulating | 胶原蛋白刺激剂 / 刺激胶原蛋白的产品 | bio-stimulator / produk perangsang kolagen | aging, terms.ts |
| dermal filler | 填充剂 | dermal filler / filler | fine-lines-wrinkles, face-contouring |
| hyaluronic acid filler | 玻尿酸填充剂 | filler asid hialuronik | fine-lines-wrinkles, dark-eye-circles |
| can / cannot be dissolved | 可以 / 不能被溶解 | boleh / tidak boleh dilarutkan | dark-eye-circles |
| nodules | 结节 | nodul | aging |
| rare but serious vascular complications | 罕见但严重的血管并发症 | komplikasi saluran darah yang jarang berlaku tetapi serius | aging (血管栓塞 there is the occlusion itself) |
| blood-thinning medication | 血液稀释药物 | ubat pencair darah | aging |
| autoimmune / connective-tissue | 自身免疫 / 结缔组织疾病 | autoimun / tisu penghubung | aging |
| keloid / hypertrophic scarring | 蟹足肿 / 增生性疤痕 | parut keloid atau hipertrofik | acne, pico-laser |
| downtime | 恢复期 | downtime | docs/18 §6 |
| face lifting / ageing (link labels) | 提拉紧致 / 皮肤老化 | tegang & angkat muka / penuaan kulit | docs/18 §5 |
| skin booster | 水光针 | skin booster | terms.ts |

## For the bilingual doctor-reviewer

1. **No street names.** 童颜针, 少女针 and 微晶瓷 carry nearly all the Chinese demand but are not used anywhere, per `_treatment-names.md`. If compliance later allows one in doctor-reviewed body copy, the natural slot is the variant item bodies.
2. **Material names in the eyebrows** are translated: 聚左旋乳酸 / *asid poli-L-laktik*, 羟基磷灰石钙 / *kalsium hidroksilapatit*, 聚己内酯 / *polikaprolakton*. Please confirm the chemistry names; the manufacturer stays Latin.
3. **Radiesse "hands and décolletage"** is 手背和前胸 in zh and *tangan dan dada atas (décolletage)* in ms. Confirm 前胸 reads correctly for décolletage.
4. **"Reconstituted"** (Sculptra) is 调配 / *dicampurkan dengan cecair*. A more technical zh is 复溶; 调配 was chosen as plainer. Confirm.
5. **"Change is deliberately slow, which some … find frustrating"** is 有些人会觉得太慢、心急 / *ada yang rasa kecewa kerana lambat*. Neither softens or adds to the EN.
6. **永久 / kekal appear twice, both factual:** "permanent or semi-permanent implants" (a product type in avoidIf) and "It is not permanent" (negated, cannotDo). The L-03r warnings on these are expected.
7. **"Topical or local anaesthetic"** is 外用或局部麻醉 / *ubat bius topikal atau setempat*.
8. **zh FAQ 1** stays a yes/no question (no 区别 pattern) because the answer opens 不是.
9. **seoTitle (zh)** drops Ellanse to fit 30 characters; it stays in the description.
