# 19. Concern keyword log: Acne (`/concerns/acne`)

**Date:** 2026-10-14 · **Pilot page** for the concern-page localisation round (format for the next 15 pages).
**Outputs:** `content/i18n/concerns/zh/acne.json`, `content/i18n/concerns/ms/acne.json` (same shape as the EN record).
**Inputs:** EN record for `acne`, `docs/18-trilingual-keyword-map.md` §5 (display names) and §7 (avoid list).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, with `hl=zh-CN` for Chinese and `hl=ms` for Malay. There's no volume tool, so it works like this:
  - **HAS VOLUME:** the phrase, or a natural Malaysian form of it, shows up in autocomplete with Malaysian context, or at least without a Taiwan, HK or Indonesia skew. Signs of skew: *dcard / ptt / lihkg / 香港 / 台北* for Chinese, *bisa / karena / penyebab / obat / pria* for Malay.
  - **NO VOLUME:** nothing relevant comes back.
- **Decision:**
  - **KEYWORD:** the string is phrased around the real query form, and the English meaning is kept.
  - **DIRECT:** the string is a faithful translation with no invented keyword.
- **Probes:** 137 zh and 136 ms, in four batches. That's above the ~80 per language guideline, because I tried several natural forms for each heading. The raw JSON dumps are in the session scratchpad and are not in the repo.
- **Scope:** only search-relevant strings are logged (seoTitle, seoDescription, name/H1, section headings, variant heading and tab labels/titles, location heading, compare columns, FAQ questions, jumpNav). All body copy is a direct, faithful translation.
- **No `seeDoctor.heading` in the source.** The EN record has no such key. The heading comes from shared UI (`content/i18n/concern-ui.ts`: 什么时候应该看医生 / Bila perlu berjumpa doktor). The same goes for the risks, cost, FAQ and first-visit H2s, which live in `concern-ui.ts` and are not part of this record.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Acne" | 暗疮, 暗疮痘痘, 痘痘治疗 | `暗疮` → 暗疮是什么, 暗疮位置, 暗疮针; `暗疮痘痘` → 暗疮痘痘消除法, 暗疮痘痘药膏 | KEYWORD: **暗疮痘痘** (docs/18 §5 name confirmed; the exact compound has its own AC) |
| **seoTitle** "Acne & Acne Scar Treatment in Malaysia \| Kaiteki" | 暗疮治疗, 暗疮治疗马来西亚, 暗疮疗程, 暗疮 医美, 痘疤治疗, 痘疤激光, 暗疮 马来西亚, 痘疤 马来西亚 | `暗疮治疗` → 暗疮治疗方法, 暗疮治疗 facial (HK/中医 noise too); `痘疤治疗` → 痘疤治疗费用, 痘疤治疗方式 (some TW noise); "+马来西亚" forms return nothing | KEYWORD: **马来西亚暗疮痘痘与痘疤治疗 \| Kaiteki** (23 chars). Built on 暗疮 + 痘疤治疗; 马来西亚 kept for the EN geo intent. |
| **seoDescription** | (same family) | as above | KEYWORD: uses 暗疮痘痘, 痘疤, 疗程, 免费咨询 (77 chars) |
| sections[0].heading "What is acne?" | 暗疮是什么, 什么是暗疮 | `暗疮是什么` is the **2nd suggestion for `暗疮`** and returns itself | KEYWORD: **暗疮是什么？** |
| drivers.heading "Common causes" | 暗疮的成因, 暗疮原因, 暗疮成因, 为什么会长暗疮, 长痘痘原因, 长暗疮的原因, 暗疮的原因 | `暗疮的成因`, `暗疮原因`, `长暗疮的原因` return themselves; `长痘痘原因` → 长痘痘原因 脸; `为什么会长暗疮` nothing | KEYWORD: **暗疮的常见成因** |
| variant.heading "Which type do I have?" | 我是哪种痘痘, 暗疮类型, 暗疮种类, 痘痘类型, 痘痘种类, 暗疮种类图 | `暗疮种类`, `暗疮 类型` return; `痘痘种类` → 痘痘种类治疗方法 (some dcard); `我是哪种痘痘` nothing | KEYWORD: **暗疮种类：我属于哪一种？** |
| jumpNav "Which type do I have?" | as above | as above | KEYWORD: **暗疮种类** |
| tab "Active acne" (label/title) | (no direct probe; 炎症性暗疮 none) | no AC for an "active acne" term | DIRECT: **活跃暗疮** / **活跃暗疮（正在发作）** |
| tab "Marks" / "Post-acne marks" | 痘印, 暗疮印, 痘印和痘疤的区别 | `痘印` → 痘印怎么消, 痘印怎么去除, 痘印会自己消失吗; `暗疮印` → HK-heavy (唔退, lihkg) | KEYWORD: **痘印** / **痘印（暗疮印）** |
| tab "Scarring" / "Acne scarring" | 痘疤, 痘坑, 痘疤类型, 痘坑能修复吗 | `痘疤` → 痘疤怎么消除, 痘疤修复, 痘疤有救吗, 痘疤类型; `痘坑` → 痘坑怎么修复, 痘坑类型 | KEYWORD: **痘疤** / **痘疤与痘坑** |
| scar sub-type leads (body, but checked) | 冰锥型痘疤, 箱型痘疤, 滚动型痘疤, 增生性疤痕, 蟹足肿, 囊肿型暗疮 | all return themselves; `囊肿型暗疮` → 处理, 成因 | Terms used: 冰锥型, 箱型, 滚动型, 增生性疤痕/蟹足肿, 结节囊肿型 |
| locationBlock.heading "Where acne appears" | 暗疮长在哪里, 暗疮位置, 长痘位置, 下巴长痘, 额头长痘, 脸颊长痘, 鼻子长痘 | `暗疮位置` → 暗疮位置原因, 暗疮位置代表, 暗疮位置反映; per-zone forms (`下巴长痘是什么原因`) are strong; `暗疮长在哪里` nothing | KEYWORD: **暗疮位置：常长在哪里** (the copy debunks face-mapping, which matches the 位置代表 intent) |
| jumpNav "Where it appears" | as above | as above | KEYWORD: **暗疮位置** |
| jumpNav "Treatments" | 暗疮疗程 | returns only itself | DIRECT: **疗程** |
| jumpNav "Your first visit" | 暗疮 第一次 看诊 | nothing | DIRECT: **第一次就诊** (matches `concern-ui.ts`) |
| jumpNav "Risks" | 暗疮 疗程 风险, 痘痘风险, 激光 风险 | only eye-surgery/hair-removal noise | DIRECT: **风险** |
| jumpNav "Cost" | 暗疮费用, 暗疮治疗价钱, 痘疤 价钱, 痘疤激光价格, 皮秒价钱 | concern+price forms empty; `皮秒价钱` returns (docs/18: MY writes 价钱) | KEYWORD (term choice): **价钱** |
| jumpNav "FAQ" | 暗疮 常见问题 | nothing | DIRECT: **常见问题** |
| compare.columns "Downtime" | (docs/18 §6: 医美恢复期, 皮秒恢复期多久) | carried from docs/18 | KEYWORD: **恢复期** |
| compare.columns other three | n/a | n/a | DIRECT: 你的情况 / 常考虑的疗程 / 一般疗程安排 |
| ctaMid.heading "Not sure which one you're dealing with?" | n/a (conversion copy) | n/a | DIRECT: 不确定自己是哪一种？ |
| ctaHeading "Have a doctor look at it" | n/a (conversion copy) | n/a | DIRECT: 让医生看一看 |
| FAQ 1 "Difference between active acne and acne scars?" | 痘疤和暗疮的区别, 暗疮和痘疤, 痘印和痘疤的区别, 痘印 痘疤 区别 | only `痘印和痘疤的区别` returns | KEYWORD: **暗疮、痘印和痘疤有什么区别？** (adds 痘印, which the answer already covers) |
| FAQ 2 "Can acne scarring be treated?" | 痘疤可以治疗吗, 痘疤能修复吗, 痘坑能修复吗, 痘疤有救吗, 痘疤可以完全消除吗 | `痘坑能修复吗` and `痘疤有救吗` return; the rest are empty | KEYWORD: **痘疤、痘坑还能修复吗？** |
| FAQ 3 "Why does adult acne happen?" | 成人暗疮, 成年人长痘, 大人长痘痘原因, 为什么成年后还长痘, 成人痘, 成人痘原因 | `成人痘` → 成人痘治疗, 成人痘原因, 成人痘下巴 (some ptt); `成人痘原因` returns; 暗疮-based forms empty | KEYWORD: **成人痘：为什么成年后还会长暗疮？** |
| FAQ 4 "Will treatment make my acne worse first?" | 治疗暗疮会爆痘吗, 爆痘期 | `爆痘期` → 爆痘期多久, 爆痘期怎么办, 吃a酸 爆痘期多久 | KEYWORD: **开始治疗后，暗疮会先变严重吗（爆痘期）？** |
| FAQ 5 "How many sessions will I need?" | 暗疮疗程要做几次, 痘疤要做几次 | nothing (docs/18 has 皮秒几次有效 at treatment level) | DIRECT: **需要做几次疗程？** |
| FAQ 6 "How soon will I see a difference?" | 多久见效 痘疤, 痘疤激光多久见效, 痘疤 多久见效, 皮秒多久见效 | only the treatment-level `皮秒多久见效` returns | DIRECT: **多久能看到变化？** (见效 avoided on purpose: on a concern page it reads like a results promise) |
| FAQ 7 "Is laser safe for darker or Asian skin tones?" | 激光适合亚洲人吗, 深色皮肤 激光, 激光 深肤色, 激光 反黑, 皮秒 反黑 | skin-tone forms empty; `激光反黑` → 激光反黑怎么办; `皮秒反黑` strong (TW noise too) | KEYWORD: **肤色较深或亚洲人做激光安全吗？会反黑吗？** (the answer stays conditional, never a flat 安全) |
| FAQ 8 "Can I wear makeup after treatment?" | 激光后可以化妆吗, 激光后多久可以化妆, 激光后化妆, 皮秒后可以化妆吗, 射频微针后可以化妆吗 | only `皮秒后可以化妆吗` returns | KEYWORD (pattern): **做完疗程后可以化妆吗？** |
| FAQ 9 "Will my acne come back after treatment?" | 暗疮会复发吗, 暗疮治好会复发吗, 痘痘会复发吗 | nothing | DIRECT: **治疗后暗疮会复发吗？** |
| FAQ 10 "Do I need to stop my skincare or acne medication?" | 停用 A酸, A酸 激光, 做激光要停A酸吗, 口服a酸, 口服a酸 激光, 治疗暗疮 a酸 | `停用a酸`, `口服a酸 激光`, `口服a酸` (→ 副作用, 吃多久) return | KEYWORD: **需要停用现在的护肤品或暗疮药（如A酸）吗？** |
| FAQ 11 "Is treatment painful?" | 激光痛吗, 射频微针痛吗, 射频微针 痛, 痘疤激光痛吗, 皮秒痛吗 | only `皮秒痛吗` returns | KEYWORD (pattern): **疗程会痛吗？** (no 无痛 anywhere) |
| FAQ 12 "Can acne on my back or chest be treated?" | 背部暗疮, 背部长痘, 胸口长痘, 背部暗疮治疗, 胸口暗疮, 背部痘疤 | `背部长痘` → 背部长痘痘的治疗方法, 怎么办; `胸口长痘` → 胸口长痘痘怎么办; `背部暗疮` HK-skewed | KEYWORD: **背部、胸口长痘可以治疗吗？** |

**Chinese tally (33 logged strings):** 22 KEYWORD, 11 DIRECT. The 2 CTA headings are counted as DIRECT. The scar sub-type row is a body-term check and isn't counted.

**Not usable (no MY demand):** every "+马来西亚 / 吉隆坡 / 新山" acne modifier came back empty: `暗疮治疗马来西亚`, `暗疮 吉隆坡`, `暗疮 新山`, `痘疤 马来西亚`, `射频微针价钱`, `黄金微针 痘坑`. Chinese acne demand in autocomplete is symptom and cause led, not clinic led.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Acne" | jerawat, rawatan jerawat | `jerawat` → jerawat batu, jerawat di dagu, jerawat pasir; `rawatan jerawat` → rawatan jerawat batu, muka, hormon, di klinik kerajaan | KEYWORD: **Jerawat** (docs/18 §5) |
| **seoTitle** | rawatan jerawat, rawatan parut jerawat, rawatan jerawat malaysia, rawatan parut jerawat malaysia, rawatan jerawat dan parut jerawat | `rawatan parut jerawat` → rawatan parut jerawat berlubang, kos rawatan parut jerawat, rawatan laser parut jerawat; "+malaysia" forms empty | KEYWORD: **Rawatan Jerawat & Parut Jerawat di Malaysia \| Kaiteki** (53 chars) |
| **seoDescription** | (same family) + konsultasi percuma (docs/18) | as above | KEYWORD: jerawat aktif, parut jerawat, doktor, konsultasi percuma (156 chars) |
| sections[0].heading "What is acne?" | apa itu jerawat, jerawat adalah, apakah jerawat | `apa itu jerawat` → apa itu jerawat hormon, batu, pasir (MY); `apakah jerawat` is Indonesian (bisa) | KEYWORD: **Apa itu jerawat?** |
| drivers.heading "Common causes" | punca jerawat, kenapa tumbuh jerawat, sebab jerawat, punca jerawat muka | `punca jerawat` → punca jerawat di dagu, di dahi, batu, di pipi (clearly MY: *punca*) | KEYWORD: **Punca jerawat yang biasa** |
| variant.heading "Which type do I have?" | jenis jerawat, jerawat jenis apa, jenis jerawat dan cara rawat | `jenis jerawat` → jenis jerawat di muka, jenis jerawat dan punca, jenis jerawat yang susah hilang | KEYWORD: **Jenis jerawat: yang mana satu anda alami?** |
| jumpNav "Which type do I have?" | as above | as above | KEYWORD: **Jenis jerawat** |
| tab "Active acne" | jerawat aktif | `jerawat aktif` → jerawat aktif boleh pakai retinol, jerawat aktif merah (mixed MY/ID) | KEYWORD: **Jerawat aktif** |
| tab "Marks" / "Post-acne marks" | bekas jerawat, kesan jerawat, tanda jerawat merah, parut jerawat hitam, parut jerawat merah | `kesan jerawat` → kesan jerawat hitam, kesan picit jerawat (MY); `bekas jerawat` → … pakai kandungan apa (ID-leaning); `parut jerawat hitam/merah` is strong but uses *parut* (scar) for flat marks | KEYWORD: **Kesan jerawat** (see reviewer note 6) |
| tab "Scarring" / "Acne scarring" | parut jerawat, parut jerawat berlubang, jenis parut jerawat | `parut jerawat` → hitam, berlubang, merah, boleh hilang ke | KEYWORD: **Parut jerawat** |
| scar sub-type leads | parut jerawat ice pick, parut jerawat boxcar, parut jerawat rolling, keloid | `ice pick` and `boxcar` forms return themselves; `rolling` empty; `keloid` → keloid in malay | KEYWORD: English terms kept (**Ice pick, Boxcar, Rolling**); *parut timbul (hipertrofik atau keloid)* for raised scars |
| active sub-types | jerawat komedo, jerawat radang, jerawat kistik, jerawat nodul, jerawat batu | `jerawat komedo` → komedonal, tertutup; `jerawat kistik` → jerawat kistik dan nodul, batu; `jerawat batu` strong | Terms used: *Komedo*, *Meradang*, *Nodul dan kistik (jerawat batu)* |
| locationBlock.heading "Where acne appears" | lokasi jerawat, kedudukan jerawat, jerawat di mana, jerawat di dagu / dahi / pipi / hidung / belakang / dada | `kedudukan jerawat` → kedudukan jerawat dan puncanya, di muka (MY); `lokasi jerawat` → …penyebabnya (ID); per-zone forms strong | KEYWORD: **Kedudukan jerawat: di mana ia muncul** |
| jumpNav "Where it appears" | as above | as above | KEYWORD: **Kedudukan jerawat** |
| jumpNav "Treatments" | rawatan jerawat | strong | KEYWORD (term): **Rawatan** (docs/18 §2.2) |
| jumpNav "Your first visit" | n/a | n/a | DIRECT: **Lawatan pertama** |
| jumpNav "Risks" | risiko rawatan laser, risiko laser muka, kesan sampingan laser muka | nothing relevant (only eye-surgery noise) | DIRECT: **Risiko** |
| jumpNav "Cost" | kos rawatan parut jerawat, harga rawatan jerawat, kos rawatan jerawat | `kos rawatan parut jerawat` → kos rawatan laser parut jerawat | KEYWORD: **Kos** |
| jumpNav "FAQ" | soalan lazim jerawat | nothing | DIRECT: **Soalan lazim** |
| compare.columns "Downtime" | (docs/18 §6: pico laser ada downtime) | carried from docs/18 | KEYWORD: **Downtime** (kept in English) |
| compare.columns other three | n/a | n/a | DIRECT: Masalah anda / Biasa dipertimbangkan / Kursus biasa |
| ctaMid.heading | n/a | n/a | DIRECT: Tak pasti yang mana satu anda alami? |
| ctaHeading | n/a | n/a | DIRECT: Biar doktor tengok dahulu |
| FAQ 1 "Difference between active acne and acne scars?" | beza jerawat dan parut jerawat, jerawat vs parut jerawat, jerawat dan parut jerawat | only "cara hilangkan jerawat dan parut" (different intent) | DIRECT: **Apa beza jerawat aktif dan parut jerawat?** |
| FAQ 2 "Can acne scarring be treated?" | parut jerawat boleh hilang ke, parut jerawat boleh dirawat, boleh ke rawat parut jerawat, cara rawat parut jerawat | `parut jerawat boleh hilang ke` returns exactly (also in the `parut jerawat` list) | KEYWORD: **Parut jerawat boleh hilang ke? Boleh dirawat?** (the answer says "jarang dapat dipadam sama sekali") |
| FAQ 3 "Why does adult acne happen?" | jerawat dewasa, jerawat orang dewasa, kenapa dewasa masih berjerawat, punca jerawat dewasa, kenapa berjerawat | `jerawat dewasa` → pria, obat (ID); `kenapa berjerawat` → di rahang, di dagu (MY); adult-specific forms empty | KEYWORD (partial: *kenapa … berjerawat*): **Kenapa orang dewasa masih berjerawat?** |
| FAQ 4 "Will treatment make my acne worse first?" | purging jerawat, purging, jerawat makin teruk selepas rawatan, kenapa jerawat makin teruk | `purging jerawat` → berapa lama, batu; `purging` → purging in malay, purging muka; Malay "makin teruk" forms empty | KEYWORD: **Adakah jerawat jadi lebih teruk dahulu (purging) selepas mula rawatan?** |
| FAQ 5 "How many sessions?" | berapa sesi rawatan parut jerawat, laser parut jerawat berapa kali | nothing | DIRECT: **Perlu buat berapa sesi?** |
| FAQ 6 "How soon will I see a difference?" | berapa lama nampak hasil, berapa lama nampak hasil laser, hasil rawatan parut jerawat | only an Indonesian whitening-drip suggestion | DIRECT: **Berapa lama baru nampak perubahan?** |
| FAQ 7 "Is laser safe for darker or Asian skin?" | laser kulit gelap, laser untuk kulit gelap, laser selamat ke, laser sesuai untuk kulit gelap, kulit sawo matang laser | `laser kulit gelap` returns (also in docs/18) | KEYWORD: **Rawatan laser selamat ke untuk kulit gelap, sawo matang atau kulit Asia?** |
| FAQ 8 "Can I wear makeup after treatment?" | boleh pakai makeup selepas laser, makeup selepas laser, lepas laser boleh pakai makeup | nothing | DIRECT: **Boleh pakai makeup selepas rawatan?** |
| FAQ 9 "Will my acne come back?" | jerawat datang balik, jerawat datang semula, jerawat berulang, jerawat boleh datang balik | `jerawat berulang` → di dagu, ditempat yang sama | KEYWORD: **Jerawat akan datang balik atau berulang selepas rawatan?** |
| FAQ 10 "Stop skincare or acne medication?" | berhenti guna retinol sebelum laser, retinol sebelum laser, berhenti ubat jerawat, ubat jerawat oral, isotretinoin | `ubat jerawat oral` returns itself; `isotretinoin` returns English forms; the "stop" forms are empty | DIRECT: **Perlu ke berhenti guna produk penjagaan kulit atau ubat jerawat yang sedang saya ambil?** |
| FAQ 11 "Is treatment painful?" | rawatan laser sakit ke, rf microneedling sakit ke, laser muka sakit ke, laser muka sakit | only `laser muka sakit ga sih` (ID) | DIRECT: **Rawatan ini sakit ke?** |
| FAQ 12 "Back or chest acne treated?" | jerawat belakang, rawatan jerawat belakang, jerawat di dada, rawatan jerawat badan, jerawat dada rawatan | `rawatan jerawat belakang` → rawatan jerawat belakang badan; `jerawat di dada` strong | KEYWORD: **Jerawat di belakang badan atau dada boleh dirawat ke?** |

**Malay tally (33 logged strings):** 21 KEYWORD, 12 DIRECT. CTA headings are counted as DIRECT. The two sub-type term rows aren't counted.

**Indonesian pollution seen and avoided:** apakah jerawat (bisa), lokasi jerawat (penyebabnya), jerawat dewasa (pria, obat), bekas jerawat (pakai kandungan apa), laser muka sakit (ga sih), laser jerawat (erha).

## For the bilingual doctor-reviewer

1. **玫瑰痤疮（酒糟）** is used for rosacea. Malaysian readers may know 酒糟鼻 better, but that only covers the nose. Please confirm.
2. **痤疮丙酸杆菌** is used for *Cutibacterium acnes*, with the Latin name in brackets. It's the standard Chinese name, carried over from the older genus *Propionibacterium*. Confirm, or replace it with 痤疮杆菌 if the reviewer prefers.
3. **A酸 / 维A酸** is used for retinoids in FAQ 10 (zh). The FAQ question now names A酸 because that is how people search. It's a drug-class name, not a product, but please confirm it's acceptable under drug-advertising rules. Malay uses *retinoid*.
4. **Isotretinoin is never named.** EN says "oral acne medication", and both locales keep that (口服暗疮药 / ubat jerawat oral). AC shows heavy demand for `口服a酸` and `isotretinoin malaysia`, but naming a prescription drug on a concern page is a compliance call for the doctor or client, not for us.
5. **"Jerawat batu"** is used as the colloquial gloss for nodulocystic acne. In everyday Malaysian usage it often just means any hard, painful pimple, so please confirm the gloss isn't too broad.
6. **Flat marks in Malay.** Malaysians often say *parut jerawat hitam / merah* for flat marks, but *parut* means scar, and this page's whole point is marks vs scars. We used **kesan jerawat** (AC-backed) for marks and **parut jerawat** only for texture scars. Is it worth one line explaining that "parut jerawat hitam" is usually a mark?
7. **Clinical terms:** 炎症后色素沉着（反黑） and 炎症后红斑; *hiperpigmentasi pasca-radang* and *eritema pasca-radang*; 增生性疤痕 / 蟹足肿; *herpes bibir (cold sore)* for cold sores; 唇疱疹 in zh.
8. **"Permanent scarring" wording.** It was rendered as 难以逆转的疤痕 / *parut yang sukar dipulihkan*, to keep 永久 and *kekal* out of the copy for the banned-word lint. The meaning is unchanged. Please confirm the clinical nuance is still right.
9. **Before/after captions** are kept as 疗程之前与之后 / *sebelum dan selepas* (ADR-0001 allows B/A on concern pages under conditions). 前后对比 is not used.
10. **FAQ 7 (safety for darker skin)** begins 可以，前提是… / *Ya, jika…*. This mirrors the conditional EN. Neither locale says "safe" without the condition.
11. **The FAQ 1 zh question is broader than EN.** It adds 痘印 (marks), because `痘印和痘疤的区别` is the only form with AC demand. The answer already covers all three.
12. **Exosome therapy** (外泌体 is not used in the copy; the treatment is described as 再生疗法 / *pendekatan regeneratif*, as EN does). Its MY regulatory status should be checked before the treatment page is localised.

## Re-sync 2026-10-14 (English rewrite)

The English page was rewritten upstream; the sync tool kept every unchanged translation and blanked 33 strings per locale. Only one blank is search-relevant (`seoTitle`); the rest are body copy.

### Chinese

| English | Probes | Evidence | Decision |
|---|---|---|---|
| **seoTitle** "Acne Treatment in Malaysia: Types & Causes \| Kaiteki" | 暗疮治疗, 暗疮种类, 暗疮成因, 暗疮种类和成因 | `暗疮治疗` → 暗疮治疗方法, 暗疮 治疗 (plus facial / 香港 / 中医 noise); `暗疮种类` and `暗疮成因` return themselves (same as the earlier variant and drivers rows); the combined form is empty | KEYWORD: **马来西亚暗疮痘痘治疗：种类与成因 \| Kaiteki** (26 chars). Reuses the 暗疮种类 / 暗疮的成因 decisions above and keeps the 暗疮痘痘 display name. |

**Body blanks translated directly:** 32 (leadAnswer, banner alt, fact 3, drivers intro, tab bodies, location cards, seeDoctor intro/outro, treatments intro and two treatment notes, compare intro, first-visit intro and step 3, risk 2, cost intro, 11 FAQ answers). Most are shortened EN sentences, so the existing translations were trimmed to match rather than rewritten.

### Malay

| English | Probes | Evidence | Decision |
|---|---|---|---|
| **seoTitle** | rawatan jerawat, jenis jerawat dan punca, punca jerawat | `rawatan jerawat` → batu, muka, hormon, near me; `jenis jerawat dan punca` returns itself (+ "di muka dan punca"); `punca jerawat` → di dagu, di dahi, batu (MY) | KEYWORD: **Rawatan Jerawat di Malaysia: Jenis & Punca \| Kaiteki** (52 chars) |

**Body blanks translated directly:** 32 (same set as Chinese).

### Reviewer notes

1. "Permanent change" (seeDoctor outro) stays 难以逆转的改变 / *perubahan yang sukar dipulihkan*, as in the pilot.
2. Fact 3 "Medical first" is 先做医学治疗 / *Rawatan perubatan dahulu*; the label names topical or oral treatment generically, no drug named.
3. FAQ answers dropped their EN closing lines (e.g. "anyone who predicts the full course should be treated with caution"); the translations follow, so nothing extra remains in zh/ms.
4. Step 3 "with no obligation to proceed" is 你没有义务一定要进行疗程 / *tanpa sebarang kewajipan untuk meneruskan*.
