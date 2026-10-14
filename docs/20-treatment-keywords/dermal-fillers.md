# 20. Treatment keyword log: Dermal Fillers (`/treatments/dermal-fillers`)

**Date:** 2026-10-14 · Follows the pilot method in `pico-laser.md`.
**Outputs:** `content/i18n/treatments/zh/dermal-fillers.json`, `content/i18n/treatments/ms/dermal-fillers.json` (same shape as the EN record). Snapshot: `content/i18n/treatments/_en/dermal-fillers.json`.
**Inputs:** EN record for `dermal-fillers`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the translated `fine-lines-wrinkles`, `face-contouring`, `dark-eye-circles`, `face-lifting` and `aging` concern pages.

## Method

- Same as the pilot: Google Autocomplete (`client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`). HAS VOLUME = Malaysian (or at least not TW/HK/ID-skewed) suggestions; NO VOLUME = nothing relevant.
- **KEYWORD:** phrased around the real query form, English meaning kept. **DIRECT:** faithful translation.
- **Probes:** 56 zh and 54 ms. Raw dumps: `C:/tmp/df-ac-zh.json`, `C:/tmp/df-ac-ms.json` (not in the repo).
- **Scope:** seoTitle, seoDescription, name, section headings and FAQ questions. This record has no jumpNav, routes, variantModule or ctaMid. Everything else is a direct, faithful translation.
- **Product names stay Latin** exactly where the EN names them: Juvederm, Restylane, Belotero, Art Filler, Laboratoires Fillmed. No product is named anywhere the EN doesn't name it.
- **Untranslated by design:** `slug`, `image`, `related`, `reviewedBy`, `lastReviewed`, top-level `category`.

## The filler term (zh)

The concern pages and terms.ts disagree: terms.ts names the treatment **玻尿酸填充**; the concern pages say **填充剂** in body copy (about 7 uses across dark-eye-circles, face-contouring, face-lifting, fine-lines-wrinkles, plus 填充 / 注射填充) and 玻尿酸填充剂 once. Decision on this page:
- `name` and the search-facing strings use **玻尿酸填充** (terms.ts; AC `玻尿酸填充` → 副作用, 价格, 可以维持多久, 法令纹). Bare `填充剂` autocompletes to industrial fillers (橡胶, 塑胶), so it isn't search-facing.
- Body copy says **玻尿酸填充剂** at first mention in a paragraph and **填充剂** after that, which matches the concern pages' majority usage and stays accurate (the EN says "HA fillers").

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Dermal Fillers" | 玻尿酸填充, 玻尿酸, 填充剂, 打玻尿酸 | `玻尿酸填充` → 副作用, 泪沟, 法令纹, 价格, 可以维持多久; `填充剂` → 橡胶, 塑胶 (industrial) | KEYWORD: **玻尿酸填充** (terms.ts) |
| **seoTitle** "Dermal Fillers Malaysia \| Juvederm, Restylane \| Kaiteki" | 玻尿酸 马来西亚, 玻尿酸填充 马来西亚, juvederm, juvederm 中文, restylane | `玻尿酸 马来西亚` → 价格 马来西亚, 马来西亚 打 玻尿酸 多少 钱 (a real MY signal); `玻尿酸填充 马来西亚` empty; `juvederm 中文` returns | KEYWORD: **马来西亚玻尿酸填充 \| Kaiteki** (19 chars). The two brand names don't fit the 30-char limit (40 with both), so they moved to the description. |
| **seoDescription** | belotero, art filler, 玻尿酸 品牌 | `belotero` → 价钱 (MY/HK form); `art filler` is Turkish/Russian-led; `玻尿酸 品牌` → 比较, 推荐 | KEYWORD: 马来西亚, 玻尿酸填充, the four product names, 免费咨询 (the EN has "Book a free consultation") (85 chars) |
| sections[0] "What are dermal fillers?" | 玻尿酸是什么, 玻尿酸填充是什么, 什么是玻尿酸填充 | `玻尿酸是什么` strong; the 填充 forms are empty | KEYWORD (pattern): **玻尿酸填充是什么？** |
| sections[1] "How does a hyaluronic acid gel add volume?" | 玻尿酸 原理, 玻尿酸填充原理 | `玻尿酸 原理` → **玻尿酸 填充 原理** (2nd), 注射 原理 | KEYWORD: **玻尿酸填充原理：玻尿酸凝胶如何增加容量？** |
| sections[2] "Who should not have dermal fillers?" | 玻尿酸 不适合, 玻尿酸 禁忌, 玻尿酸填充 禁忌, 玻尿酸 孕妇 | `玻尿酸 禁忌` → 禁忌症, **注射 禁忌**, 打 玻尿酸 禁忌; `玻尿酸 孕妇` → 孕妇 可以 打 玻尿酸 吗; 不适合 empty | KEYWORD: **玻尿酸填充的禁忌：哪些人不适合？** |
| sections[3] "What happens at a filler appointment, and how long does swelling last?" | 玻尿酸填充 过程, 打玻尿酸 过程, 玻尿酸 肿多久, 打玻尿酸 肿 | 过程 forms empty; `玻尿酸肿多久` returns; `打玻尿酸 肿` → 肿几天, 肿胀 | KEYWORD: **做玻尿酸填充时会怎样进行？打完肿多久？** |
| sections[4] "What are the risks of dermal fillers?" | 玻尿酸 风险, 玻尿酸填充 风险, 玻尿酸 副作用, 玻尿酸填充 副作用 | `玻尿酸风险` returns; `玻尿酸填充副作用` is the 2nd `玻尿酸填充` suggestion | KEYWORD: **玻尿酸填充有什么风险和副作用？** (副作用 added: the section's first paragraph is the common temporary effects) |
| sections[5] "What decides how much filler you need, and the cost?" | 玻尿酸 几cc, 玻尿酸 用量, 打玻尿酸 多少钱, 玻尿酸填充 价格, 玻尿酸 价钱 | `玻尿酸 几cc` → 一支 几cc, 苹果肌/法令纹 几cc; `打玻尿酸多少钱` returns; `玻尿酸 价钱` (HK/TW noise) | KEYWORD: **需要多少玻尿酸（几cc）和价钱，由什么决定？** |
| FAQ 1 "Difference between dermal fillers and bio-stimulators?" | 玻尿酸和, 玻尿酸 胶原蛋白刺激剂, 玻尿酸 童颜针 | `玻尿酸和` → 和胶原蛋白的差别, 和肉毒杆菌的区别; `玻尿酸 童颜针` → 差别, vs (童颜针 is a device street name, not usable) | KEYWORD (pattern): **玻尿酸填充和胶原蛋白刺激剂有什么区别？** (胶原蛋白刺激剂 = terms.ts) |
| FAQ 2 "How long do dermal fillers last?" | 玻尿酸填充 维持多久, 玻尿酸可以维持多久 | `玻尿酸填充可以维持多久` is in the `玻尿酸填充` top 8; both forms return | KEYWORD: **玻尿酸填充可以维持多久？** |
| FAQ 3 "Is there any downtime?" | 玻尿酸 恢复期, 玻尿酸填充 恢复期 | `玻尿酸恢复期` returns (some dcard); the 填充 form is empty | KEYWORD: **玻尿酸填充有恢复期吗？** |
| FAQ 4 "Are dermal fillers reversible?" | 玻尿酸 溶解, 玻尿酸 溶解酶, 玻尿酸可以溶解吗 | `玻尿酸 溶解` → **玻尿酸溶解酶** (1st), 溶解 针; `可以溶解吗` empty | KEYWORD: **玻尿酸填充可以溶解（逆转）吗？** Body says 溶解剂 (EN: "dissolving agent"), not 溶解酶; see reviewer note 1. |

**Chinese tally (13 logged strings):** 13 KEYWORD, 0 DIRECT.

**Not usable:** `玻尿酸 价钱` and `玻尿酸 维持多久` carry HK/TW noise (香港, 台湾, 乔 雅登, dcard). Area forms (`玻尿酸 苹果肌 / 下巴 / 鼻子 / 嘴唇`) are strong but dcard-led and often failure-framed (失败, 后遗症, 变宽); the page names those areas only in the body list, as the EN does. `玻尿酸填充 马来西亚`, `玻尿酸填充是什么`, `玻尿酸填充 过程`, `玻尿酸填充 适合` are empty.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Dermal Fillers" | dermal filler, filler, filler muka | `dermal filler` → harga, malaysia price, side effects; bare `filler` is hardware (*filler dinding*) | KEYWORD: **Dermal Filler** (terms.ts) |
| **seoTitle** | dermal filler malaysia, filler malaysia, juvederm malaysia, restylane malaysia | `dermal filler malaysia` → price; `juvederm malaysia` → price, filler malaysia; `restylane malaysia` → price | KEYWORD: **Dermal Filler di Malaysia \| Juvederm, Restylane \| Kaiteki** (57 chars) |
| **seoDescription** | rawatan filler, belotero malaysia | `rawatan filler` → muka, mata (MY *rawatan*); `belotero malaysia` returns | KEYWORD: rawatan dermal filler, Malaysia, the four product names, *konsultasi percuma* (160 chars) |
| sections[0] "What are dermal fillers?" | apa itu dermal filler, apa itu filler, filler adalah | `apa itu dermal filler` returns; `apa itu filler` and `filler adalah` are anime/ID noise | KEYWORD: **Apa itu dermal filler?** |
| sections[1] "How does a hyaluronic acid gel add volume?" | filler asid hialuronik, asid hialuronik, filler hyaluronic acid | `asid hialuronik` autocorrects to *asid hyaluronik* (skincare); `filler hyaluronic acid` is English, global; the Malay filler form is empty | DIRECT: **Bagaimana gel asid hialuronik menambah isi muka?** (*hialuronik* kept, as on the fine-lines concern page) |
| sections[2] "Who should not have dermal fillers?" | filler tidak sesuai, filler hamil, filler menyusu | all empty or noise (*hamilton*, Turkish *hamilelik*, ID *menyusui*) | DIRECT: **Siapa yang tidak sesuai buat dermal filler?** |
| sections[3] "What happens at a filler appointment, and how long does swelling last?" | filler bengkak berapa lama, bengkak selepas filler, filler downtime | `filler bengkak berapa lama` returns (some ID *setelah*); `bengkak selepas filler` empty | KEYWORD: **Apa yang berlaku semasa sesi filler, dan bengkak berapa lama?** |
| sections[4] "What are the risks of dermal fillers?" | risiko filler, kesan sampingan filler, filler bahaya, keburukan filler muka | `risiko filler` and `kesan sampingan filler` return; `keburukan filler muka` returns (MY); `filler bahaya` is ID (*ga*) | KEYWORD: **Apa risiko dan kesan sampingan dermal filler?** |
| sections[5] "What decides how much filler you need, and the cost?" | kos filler, kos rawatan filler, filler berapa cc, filler berapa ml, harga filler malaysia | `kos rawatan filler` returns (also under `rawatan filler`); `filler berapa cc` is ID (*butuh*); `harga filler malaysia` → hidung, bibir | KEYWORD: **Berapa banyak filler yang diperlukan, dan apa yang menentukan kos rawatan filler?** |
| FAQ 1 "Difference between dermal fillers and bio-stimulators?" | filler vs bio stimulator, beza filler dan | `filler vs bio stimulator` → **bio stimulator vs filler**; `beza filler dan` → botox, nose thread, implan (MY *beza*) | KEYWORD (pattern): **Apa beza dermal filler dan bio-stimulator?** |
| FAQ 2 "How long do dermal fillers last?" | filler tahan berapa lama, filler muka tahan berapa lama, dermal filler tahan berapa lama | `filler muka` → **filler muka tahan berapa lama**; `filler tahan berapa lama` strong; the dermal form is empty | KEYWORD: **Dermal filler (filler muka) tahan berapa lama?** |
| FAQ 3 "Is there any downtime?" | filler downtime, selepas filler | `filler downtime` returns (English); `selepas filler` → pantang larang selepas filler | KEYWORD: **Ada downtime tak selepas filler?** |
| FAQ 4 "Are dermal fillers reversible?" | filler boleh dibuang, filler boleh larut, larutkan filler, buang filler | `buang filler` → di muka, dagu, bibir (MY); the *larut* forms are empty | KEYWORD (partial): **Boleh ke dermal filler dilarutkan atau dibuang?** |

**Malay tally (13 logged strings):** 11 KEYWORD, 2 DIRECT.

**Indonesian pollution seen and avoided:** filler adalah, apa itu filler wajah, filler bahaya ga, filler berapa cc (*butuh*), bertahan berapa lama, bengkak setelah filler, filler bawah mata apakah aman, filler saat menyusui, filler hidung mancung / terdekat. *Filler muka* (MY) is used, never *filler wajah*.

## Terms carried over from the concern pages

| EN | zh | ms | Source |
|---|---|---|---|
| dermal filler (body) | 玻尿酸填充剂 / 填充剂 | filler / dermal filler | fine-lines-wrinkles, face-contouring, dark-eye-circles |
| hyaluronic acid (HA) | 玻尿酸（透明质酸，HA） | asid hialuronik (HA) | fine-lines-wrinkles |
| bio-stimulator | 胶原蛋白刺激剂 | bio-stimulator | terms.ts |
| volume loss | 容量流失 | kehilangan isi | fine-lines-wrinkles |
| nasolabial folds / marionette lines | 法令纹 / 木偶纹 | lipatan nasolabial / garis marionette | fine-lines-wrinkles |
| static lines | 静态纹 | garis statik | fine-lines-wrinkles |
| jawline / chin / nose bridge / temples | 下颚线 / 下巴 / 鼻梁 / 太阳穴 | garis rahang / dagu / batang hidung / pelipis | face-contouring |
| topical numbing | 表面麻药 | krim kebas | fine-lines-wrinkles (填充剂通常含有局部麻醉成分) |
| swelling / bruising / tenderness | 肿胀 / 瘀青 / 酸痛 | bengkak / lebam / rasa sengal | fine-lines-wrinkles |

## For the bilingual doctor-reviewer

1. **"Dissolving agent"** is 溶解剂 / *agen pelarut*, as generic as the EN. People search 玻尿酸溶解酶 (hyaluronidase), but that names a prescription drug the EN deliberately doesn't name, so it's only in the FAQ question as the verb 溶解. Use 溶解酶 only if the reviewer wants it named.
2. **"How much filler" heading uses 几cc.** That's how Malaysian Chinese ask (`玻尿酸 几cc`). The body doesn't give any cc figure. Drop the bracket if it reads as a dosing promise.
3. **"Lumpiness"** is 摸起来有小硬块 / *ketulan*. Confirm.
4. **seoTitle (zh) drops the product names** (length). They're in the zh description and in the body. The ms title keeps Juvederm and Restylane, as the EN does.
5. **"Placed into the face … product, plane or plan"**: plane is 注射层次 / *lapisan*. Confirm.
6. **No guarantee or permanence wording** appears; the lint has no L-03r warnings on this page.
