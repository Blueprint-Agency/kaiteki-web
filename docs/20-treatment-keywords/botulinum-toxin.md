# 20. Treatment keyword log: Botulinum Toxin (`/treatments/botulinum-toxin`)

**Date:** 2026-10-14 · Follows the pilot method in `pico-laser.md`.
**Outputs:** `content/i18n/treatments/zh/botulinum-toxin.json`, `content/i18n/treatments/ms/botulinum-toxin.json` (same shape as the EN record). Snapshot: `content/i18n/treatments/_en/botulinum-toxin.json`.
**Inputs:** EN record for `botulinum-toxin`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the translated `fine-lines-wrinkles`, `face-contouring` and `excessive-sweating` concern pages (terminology carried over, see below).

## Method

- Same as the pilot: Google Autocomplete (`client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`). HAS VOLUME = Malaysian (or at least not TW/HK/ID-skewed) suggestions; NO VOLUME = nothing relevant.
- **KEYWORD:** phrased around the real query form, English meaning kept. **DIRECT:** faithful translation.
- **Probes:** 54 zh and 54 ms for this page, plus 6 ms `toksin botulinum …` pattern checks run with the filler batch. Raw dumps: `C:/tmp/bt-ac-zh.json`, `C:/tmp/bt-ac-ms.json`, `C:/tmp/df-ac-ms.json` (not in the repo).
- **Scope:** seoTitle, seoDescription, name, section headings and FAQ questions. This record has no jumpNav, routes, variantModule or ctaMid. Everything else (leadAnswer, areas, suitability lists, comparisons, pre/post-care, bodies, FAQ answers) is a direct, faithful translation.
- **The demand problem on this page:** most Malay demand, and a lot of Chinese demand, is on the brand word (`botox rahang`, `harga botox di malaysia`, `botox 中文`). That word is banned (docs/18 §7, validator L-03). Where a `botox …` query showed the *shape* of a real question, the string uses that shape with *toksin botulinum* / 肉毒杆菌素 instead, and is marked KEYWORD (pattern). 瘦脸针 is never used.
- **Untranslated by design:** `slug`, `image`, `related`, `reviewedBy`, `lastReviewed`, top-level `category`; in `comparisons`, the ms names *Skin booster* and *HIFU / Ultherapy* stay as the terms.ts fallback (English).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Botulinum Toxin" | 肉毒杆菌素, 肉毒杆菌, 肉毒 | `肉毒杆菌素` → 价格, 原理, 注射; `肉毒杆菌` → 注射, 是什么, 副作用, 后遗症 | KEYWORD: **肉毒杆菌素** (terms.ts, docs/18 §5) |
| **seoTitle** "Botulinum Toxin Injections in Malaysia \| Kaiteki" | 肉毒杆菌注射, 肉毒杆菌素注射, 肉毒杆菌 马来西亚 | `肉毒杆菌素注射` returns (also 3rd for `肉毒杆菌素`); `肉毒杆菌注射` strong; "+马来西亚" empty | KEYWORD: **马来西亚肉毒杆菌素注射 \| Kaiteki** (21 chars). 马来西亚 kept for the EN geo intent, as in the pilot. |
| **seoDescription** | 肉毒杆菌 咬肌, 肉毒杆菌 小腿, 肉毒杆菌 多汗, 肉毒杆菌 腋下 | `肉毒杆菌 小腿` → 小腿肌肉, 副作用; `肉毒杆菌 咬肌`, `肉毒杆菌 多汗` return; `肉毒杆菌 腋下` (ptt) | KEYWORD: 肉毒杆菌素, 表情纹, 咬肌, 小腿, 腋下、手掌多汗症 (76 chars). 腋下、手掌 come from the page body, added to reach length. |
| sections[0] "What is botulinum toxin?" | 肉毒杆菌是什么, 肉毒杆菌素是什么, 什么是肉毒杆菌 | `肉毒杆菌是什么` is the 4th `肉毒杆菌` suggestion; `肉毒杆菌素是什么` empty | KEYWORD (pattern): **肉毒杆菌素是什么？** (keeps the 素 of the name) |
| sections[1] "How does botulinum toxin relax a muscle or sweat gland?" | 肉毒杆菌原理, 肉毒杆菌 作用, 肉毒杆菌素 原理 | `肉毒杆菌素 原理` is the 3rd `肉毒杆菌素` suggestion; `肉毒杆菌 作用` → 作用原理, 作用机制 | KEYWORD: **肉毒杆菌素原理：如何放松肌肉或汗腺？** |
| sections[2] "What happens at a botulinum toxin appointment?" | 肉毒杆菌 过程, 打肉毒杆菌 过程, 打肉毒杆菌 | 过程 forms empty; `打肉毒杆菌` → 后遗症, 注意事项, 多久会有效果 | DIRECT: **肉毒杆菌素注射当天会怎样进行？** |
| sections[3] "What are the side effects of botulinum toxin?" | 肉毒杆菌副作用, 肉毒杆菌素副作用, 肉毒杆菌 风险, 肉毒杆菌 后遗症 | `肉毒杆菌副作用` strong (also in `肉毒杆菌` top 8); `肉毒杆菌 风险` returns; `肉毒杆菌素副作用` empty | KEYWORD: **肉毒杆菌素有什么副作用？** |
| sections[4] "How often is botulinum toxin repeated, and what affects the cost?" | 肉毒杆菌多久打一次, 肉毒杆菌 多久, 肉毒杆菌价钱, 肉毒杆菌多少钱, 肉毒杆菌价格 | `肉毒杆菌 多久` → **多久打一次** (1st); `肉毒杆菌多少钱` returns; `肉毒杆菌价格` (dcard, 爱尔丽 = TW); `肉毒杆菌价钱` empty | KEYWORD: **肉毒杆菌素多久打一次？价钱由什么决定？** (价钱 per docs/18 §6 even though this form is empty) |
| FAQ 1 "Is botulinum toxin permanent?" | 肉毒杆菌 永久, 肉毒杆菌 维持多久, 肉毒杆菌 可以维持多久 | 永久 form empty; `肉毒杆菌维持多久`, `肉毒杆菌可以维持多久` return | KEYWORD: **肉毒杆菌素的效果是永久的吗？能维持多久？** (answer opens 不是; 永久 is negated) |
| FAQ 2 "Can it help with excessive sweating?" | 肉毒杆菌 多汗, 肉毒杆菌 止汗, 多汗症 注射, 腋下多汗 注射 | `肉毒杆菌 多汗` returns; `肉毒杆菌 止汗` → 止汗价格; `多汗症 注射` is Japanese-led | KEYWORD: **肉毒杆菌素可以处理多汗症吗？** (多汗症 = terms.ts concern name) |
| FAQ 3 "Will my face look frozen or expressionless?" | 肉毒杆菌 僵硬, 打肉毒 僵, 肉毒杆菌 表情 | `打肉毒 僵` → **打肉毒 僵硬**; the others are empty | KEYWORD: **打肉毒杆菌素后，脸会变僵硬、没有表情吗？** (matches the fine-lines concern FAQ wording 变僵硬) |
| FAQ 4 "Is this the same as Botox?" | botox 中文, botox和肉毒杆菌, 肉毒杆菌 品牌 | `botox 中文` strong (→ 中文 名, 翻译); `肉毒杆菌 品牌` → 品牌比较, 品牌推荐 | DIRECT (compliance): **这和大家常说的那个品牌名称是一样的吗？** The brand word is banned; the page still answers the `botox 中文` intent because the answer names the category 肉毒杆菌素. |
| FAQ 5 "Is it the same as dermal filler?" | 肉毒杆菌和玻尿酸的区别, 肉毒杆菌 玻尿酸, 肉毒杆菌和玻尿酸 | `肉毒杆菌和玻尿酸` → **的区别**; `肉毒杆菌 玻尿酸` → 差别 (TW), vs | KEYWORD: **肉毒杆菌素和玻尿酸填充一样吗？有什么区别？** (玻尿酸填充 = terms.ts name; the answer still opens 不一样) |

**Chinese tally (13 logged strings):** 11 KEYWORD, 2 DIRECT.

**Not usable:** every "+马来西亚" form was empty. `肉毒杆菌价格` is TW-led (dcard, 爱尔丽). `打完肉毒` has strong aftercare demand (可以运动吗, 可以化妆吗, 多久可以躺) but this record has no aftercare heading to carry it; the postCare list covers it in direct translation. `肉毒杆菌素 偏头痛` exists; the body mentions migraine only as "assessed separately".

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Botulinum Toxin" | toksin botulinum, botulinum, botulinum toxin | `toksin botulinum` → adalah, untuk apa (ID-leaning: *obat apa, terdapat pada*, but the term is shared); `botulinum toxin` English, global | KEYWORD: **Toksin Botulinum** (terms.ts) |
| **seoTitle** | suntikan toksin botulinum, suntikan botulinum, rawatan toksin botulinum, botulinum toxin malaysia | `suntikan botulinum` → **suntikan toksin botulinum**, harga suntikan botulinum toxin; `suntikan toksin botulinum` returns; `rawatan toksin botulinum` empty | KEYWORD: **Suntikan Toksin Botulinum di Malaysia \| Kaiteki** (47 chars) |
| **seoDescription** | botox rahang, botox betis, botox ketiak, rawatan peluh berlebihan | `rawatan peluh berlebihan` returns (MY); rahang/betis/ketiak demand is on the banned word | KEYWORD (partial): toksin botulinum, otot rahang, betis, peluh berlebihan, doktor (158 chars) |
| sections[0] "What is botulinum toxin?" | apa itu toksin botulinum, apa itu botulinum toxin, toksin botulinum adalah | `apa itu toksin botulinum` returns; `… adalah` is ID | KEYWORD: **Apa itu toksin botulinum?** |
| sections[1] "How does … relax a muscle or sweat gland?" | cara toksin botulinum berfungsi, bagaimana botox berfungsi | both empty | DIRECT: **Bagaimana toksin botulinum melemaskan otot atau kelenjar peluh?** (*pelemas otot* is the face-contouring concern term) |
| sections[2] "What happens at a … appointment?" | (no MY form); *temujanji* avoided (docs/18 §7.2) | n/a | DIRECT: **Apa yang berlaku semasa sesi suntikan toksin botulinum?** |
| sections[3] "What are the side effects …?" | kesan sampingan toksin botulinum, kesan sampingan botox, risiko botox | `kesan sampingan botox` returns (MY form); the toksin form is empty | KEYWORD (pattern): **Apa kesan sampingan toksin botulinum?** |
| sections[4] "How often … repeated, and what affects the cost?" | botox berapa kali, botox berapa bulan sekali, kos botox, kos rawatan botox | `botox berapa kali` → setahun (some ID *dilakukan, maksimal*); `kos botox` → **kos rawatan botox** (MY) | KEYWORD (pattern): **Berapa kali toksin botulinum perlu diulang, dan apa yang menentukan kosnya?** *Berapa bulan sekali* not used: it implies a months figure the EN doesn't give. |
| FAQ 1 "Is botulinum toxin permanent?" | botox kekal ke, botox tahan berapa lama, toksin botulinum tahan berapa lama | `botox tahan berapa lama` strong (MY *tahan*); `kekal ke` and the toksin form are empty | KEYWORD (pattern): **Adakah kesan toksin botulinum kekal? Tahan berapa lama?** (answer opens *Tidak*) |
| FAQ 2 "Can it help with excessive sweating?" | botox peluh, botox ketiak, suntikan peluh ketiak, rawatan peluh berlebihan, hiperhidrosis rawatan, toksin botulinum peluh | `rawatan peluh berlebihan` returns; `hiperhidrosis rawatan` → rawatan hyperhidrosis; `botox ketiak` strong; `suntikan botox untuk hiperhidrosis` appears under `suntikan botox` | KEYWORD: **Boleh ke toksin botulinum bantu masalah peluh berlebihan (hiperhidrosis)?** (= terms.ts concern name) |
| FAQ 3 "Will my face look frozen?" | botox muka kaku, muka kaku | `botox muka kaku` empty; `muka kaku` is Bell's-palsy noise (*sebelah, kipas angin*) | DIRECT: **Adakah muka saya akan nampak kaku atau tiada ekspresi?** |
| FAQ 4 "Is this the same as Botox?" | botox sama dengan, jenama botox | `botox sama dengan` → *apakah … sama dengan filler* (ID); `jenama botox` empty | DIRECT (compliance): **Adakah ini sama dengan jenama yang selalu disebut orang?** |
| FAQ 5 "Is it the same as dermal filler?" | botox vs filler, beza botox dan filler, botox dan filler | `beza botox dan filler` returns (MY *beza*); `beza filler dan` → **beza filler dan botox**; `botox dan filler` is ID-led (*bedanya*) | KEYWORD (pattern): **Adakah toksin botulinum sama dengan dermal filler? Apa bezanya?** |

**Malay tally (13 logged strings):** 9 KEYWORD, 4 DIRECT.

**Indonesian pollution seen and avoided:** toksin botulinum adalah / obat apa / terdapat pada, botox wajah, botox berapa bulan sekali (*harus, minimal, bagusnya*), botox dan filler bedanya, botox menyusui, botox betis jakarta / butuh berapa unit, botox ketiak zap.

## Terms carried over from the concern pages

| EN | zh | ms | Source |
|---|---|---|---|
| botulinum toxin (body) | 肉毒杆菌素 | toksin botulinum | terms.ts. The concern pages say 放松肌肉的注射 / *suntikan pelemas otot* (they avoid the drug name); this page names it because the EN does. |
| dermal fillers (cross-reference) | 玻尿酸填充 / 玻尿酸填充剂 | dermal filler | terms.ts, fine-lines-wrinkles |
| expression / dynamic lines | 表情纹 / 动态表情纹, 动态纹 | garis ekspresi / garis dinamik | fine-lines-wrinkles |
| crow's feet / frown lines / forehead | 鱼尾纹 / 眉间纹 / 额头 | garis tepi mata (crow's feet) / garis kerutan antara kening / dahi | fine-lines-wrinkles |
| jaw muscle bulk | 咬肌 | otot rahang | face-contouring |
| excessive sweating | 多汗 / 多汗症 | peluh berlebihan (hiperhidrosis) | excessive-sweating |
| antiperspirant | 止汗剂 | antiperspirant | excessive-sweating |
| underarms, palms, soles | 腋下、手掌、脚底 | ketiak, tapak tangan, tapak kaki | excessive-sweating |
| blood thinners | 抗凝血药 | ubat pencair darah | fine-lines-wrinkles |
| neuromuscular condition | 神经肌肉疾病 | masalah neuromuskular | fine-lines-wrinkles |
| cold sore | 唇疱疹 | herpes bibir (cold sore) | pico-laser pilot |
| skin booster / HIFU | 水光针（Skin Booster）/ HIFU 超声波提拉 | Skin booster / HIFU | terms.ts |

## For the bilingual doctor-reviewer

1. **The brand word in the EN.** The EN body (sections[0] para 3) and FAQ 4 name "Botox". Both locales replace it with "one brand's name / 那个品牌名称 / *jenama yang selalu disebut orang*", because the validator fails on the word and docs/18 §7 bans it. FAQ 4 now reads "Is this the same as the brand name people often say?". Please confirm this reads naturally, or decide whether FAQ 4 should be dropped from the localized pages.
2. **Lambert-Eaton syndrome** is 兰伯特-伊顿综合征（Lambert-Eaton syndrome） / *sindrom Lambert-Eaton*; myasthenia gravis is 重症肌无力 / *myasthenia gravis*. Confirm.
3. **"Unit potency"** is 单位效价 / *potensi unit*. Confirm.
4. **Acetylcholine / Clostridium botulinum:** 乙酰胆碱, 肉毒梭菌（Clostridium botulinum） / *asetilkolin*, *Clostridium botulinum*.
5. **"Drooping" in postCare** is left general (出现下垂 / *ada bahagian yang nampak jatuh*), as the EN is. The side-effects section names brow heaviness and eyelid drooping specifically.
6. **"Stay upright for about four hours"** is 保持坐直或站立约四小时 / *duduk atau berdiri tegak*. The Malay avoids *kekal tegak* because *kekal* is a permanence word on the review list.
7. **永久 / kekal appear only negated:** "它不是永久的" / "*Kesannya tidak kekal*", and in FAQ 1's question, which the answer opens with 不是 / *Tidak*. The lint warns (L-03r), as expected.
8. **"Cannot be quoted or sold as a package"** is 不能报价，也不能以配套形式出售 / *harganya tidak boleh disebut atau dijual sebagai pakej*. 配套 is the Malaysian Chinese word for a package deal.
