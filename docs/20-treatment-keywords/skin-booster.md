# 20. Treatment keyword log: Skin Booster (`/treatments/skin-booster`)

**Date:** 2026-10-14 · Follows the pilot method in `pico-laser.md`.
**Outputs:** `content/i18n/treatments/zh/skin-booster.json`, `content/i18n/treatments/ms/skin-booster.json` (same shape as the EN record; snapshot in `content/i18n/treatments/_en/skin-booster.json`).
**Inputs:** EN record for `skin-booster`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the translated `aging`, `fine-lines-wrinkles`, `enlarged-pores`, `dark-eye-circles` and `acne` concern pages (terminology carried over, see below).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME / NO VOLUME read exactly as in `pico-laser.md` (skew signs: *dcard / ptt / 香港 / 韩国* for Chinese, *apakah / ga / saat / aman / cocok / perbedaan / wajah / erha / natasha* for Malay).
- **Probes:** 72 zh and 60 ms, shared batch with `exosome-therapy`. Raw dumps: `C:/tmp/sbex-zh-ac.json`, `C:/tmp/sbex2-zh-ac.json`, `C:/tmp/sbex-ms-ac.json`, `C:/tmp/sbex2-ms-ac.json` (not in the repo).
- **Scope:** search-relevant strings only (seoTitle, seoDescription, name/H1, section headings, variantModule heading, route titles, FAQ questions). This record has no `jumpNav` and no `ctaMid`. All body copy is a direct, faithful translation.
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `reviewedBy`, `lastReviewed`, top-level `category`, `relatedReasons` keys, `device` ("Profhilo"), product `title`s (Rejuran, Plinest / Newest, Profhilo, Hydrodeluxe, Juvelook) and the manufacturer names in each `eyebrow` (the ingredient and country in the eyebrow are translated).
- **Comparison table names** use the agreed `terms.ts` names (水光针 / 玻尿酸填充 / 肉毒杆菌素; Skin booster / Dermal filler / Toksin botulinum); HIFU / Ultherapy stays Latin. Not counted.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Skin Booster" | 水光针, skin booster, skin booster 中文 | `水光针` → 英文, 副作用, 效果, 功效, 多少钱, 多久打一次; `skin booster` → 是什么, 中文 | KEYWORD: **水光针（Skin Booster）** (terms.ts, kept) |
| **seoTitle** "Skin Booster Malaysia \| Rejuran, Profhilo & Juvelook" | 水光针 马来西亚, skin booster 马来西亚, rejuran, profhilo, juvelook | `水光针 马来西亚` → **水光针马来西亚价格**; `skin booster 马来西亚` empty; `rejuran` → rejuran malaysia (plus re 居然 skincare); `profhilo` → 是什么, 中文, 效果; `juvelook` → 是什么, 水光针 | KEYWORD: **水光针 Rejuran、Profhilo \| Kaiteki** (30 chars). The 30-char cap can't hold 马来西亚 plus three product names plus the brand; the two most-searched product names won, and 马来西亚 and Juvelook move to the description. |
| **seoDescription** | (same family) | as above | KEYWORD: 马来西亚水光针（Skin Booster）, Rejuran, Profhilo, Juvelook, 补水, 肤质, 免费咨询 (84 chars; EN has the consultation line) |
| sections[0].heading "What is a skin booster?" | 水光针是什么, skin booster 是什么 | `水光针是什么` returns (→ 医美 水光针是什么); `skin booster是什么` is the 1st `skin booster` suggestion | KEYWORD: **水光针是什么？** |
| sections[1].heading "How is a skin booster different from a filler?" | 水光针和填充的区别, 水光针 填充, 水光针和玻尿酸的区别, 水光针 玻尿酸 差别 | `水光针和玻尿酸的区别` and `水光针 玻尿酸 差别` return; `水光针 填充` returns itself; `水光针和填充的区别` empty | KEYWORD: **水光针和玻尿酸填充有什么区别？** 玻尿酸填充 is the agreed name for dermal fillers (terms.ts), so it matches both the query and the site taxonomy. |
| variantModule.heading "Which skin booster, and what is in it" | 水光针 种类, 水光针 成分, 水光针 区别, 水光针 牌子 | `水光针 种类`, `水光针 成分` return; `水光针牌子` returns; `水光针 区别` empty | KEYWORD: **水光针种类与成分：选哪一种，里面有什么** (牌子 not used: the EN is about ingredients, not brands) |
| routes[0].title "Dull, dry or dehydrated-looking skin" | 水光针 暗沉, 水光针 细纹, 水光针 干燥 | `水光针 暗沉` empty; `水光针 细纹` returns (细纹 belongs to the body, not the title) | DIRECT: **暗沉、干燥或缺水的皮肤** |
| routes[1].title "Sensitised, acne-affected or post-treatment skin" | 水光针 敏感肌, 水光针 敏感, 水光针 暗疮, 水光针 痘痘 | `水光针 敏感` → 水光针 敏感肌; `水光针 痘痘` → **水光针 痘痘肌**; `水光针 暗疮` empty | KEYWORD: **敏感肌、痘痘肌或疗程后的皮肤** |
| routes[2].title "Texture, pores and the under-eye area" | 水光针 毛孔, 水光针 眼下, 水光针 黑眼圈 | `水光针 毛孔` → 水光针 毛孔粗大 (plus dcard); `水光针 眼下` → 眼下细纹; `水光针 黑眼圈` returns | KEYWORD: **纹理、毛孔粗大与眼下部位** (毛孔粗大 is also the concern name) |
| FAQ 1 "Suitable for sensitive or acne-prone skin?" | 水光针 敏感肌, 水光针 痘痘肌, 水光针适合什么人, 水光针 适合 | `水光针 敏感肌`, `水光针 痘痘肌` return; 适合 forms empty | KEYWORD: **敏感肌或痘痘肌适合打水光针吗？** |
| FAQ 2 "Is there any downtime?" | 水光针恢复期, 水光针 肿, 水光针后 | `水光针恢复期` → 恢复期多久; `水光针 肿` → 肿多久 | KEYWORD: **打水光针有恢复期吗？** |
| FAQ 3 "How many sessions will I need?" | 水光针要打几次, 水光针 打几次, 水光针多久打一次, 水光针 疗程 | `水光针要打几次` and `水光针 打几次` return; `水光针多久打一次` is a top `水光针` suggestion; `水光针疗程` → 疗程多久 | KEYWORD: **水光针要打几次？多久打一次？** (the answer covers spacing: 相隔几个星期) |
| FAQ 4 "Difference between Rejuran and Profhilo?" | rejuran 和 profhilo, rejuran profhilo | `rejuran 和 profhilo` empty; `rejuran profhilo` → rejuran vs profhilo, rejuran healer vs profhilo | KEYWORD (pattern): **Rejuran 和 Profhilo 有什么区别？** |
| FAQ 5 "Allergic to fish?" | 水光针 过敏, 水光针 鱼, rejuran 过敏, 三文鱼针 过敏 | `水光针 过敏` → 水光针过敏; `rejuran 过敏` returns itself; fish forms empty | KEYWORD (partial): **对鱼类过敏可以打水光针吗？** |

**Chinese tally (14 logged strings):** 13 KEYWORD, 1 DIRECT.

**Not usable:** `三文鱼针` / `鲑鱼针` (salmon injection) have strong demand, but they name a prescription injectable as a consumer product (same reasoning as 婴儿针 in docs/18 §5) and 鲑鱼针 is Taiwan-led (dcard). Body copy says 三文鱼多核苷酸. `水光针效果`, `水光针打完多久有效果`, `水光针维持多久` have demand but are outcome questions the EN does not ask. `水光针价钱` exists (香港 / 韩国 skew), but the EN has no cost FAQ, so none is added.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Skin Booster" | skin booster, rawatan skin booster, suntikan skin booster | `skin booster` → injection, treatment, dna salmon untuk apa, pdrn (and *paling bagus*, not used); `rawatan skin booster` returns | KEYWORD: **Skin Booster** (terms.ts / docs/18) |
| **seoTitle** | skin booster malaysia, rejuran malaysia, rejuran vs profhilo, juvelook | `skin booster malaysia` → price, rejuran skin booster malaysia, juvelook skin booster malaysia price; `rejuran malaysia` → price, clinic | KEYWORD: **Skin Booster di Malaysia \| Rejuran, Profhilo \| Kaiteki** (54 chars). Juvelook moves to the description to fit 60. |
| **seoDescription** | suntikan skin booster | `suntikan skin booster` returns (MY *suntikan*, not ID *suntik*) | KEYWORD: suntikan skin booster, Malaysia, Rejuran, Profhilo, Juvelook, konsultasi percuma (149 chars) |
| sections[0].heading "What is a skin booster?" | apa itu skin booster | returns (+ dna salmon, nctf variants) | KEYWORD: **Apa itu skin booster?** |
| sections[1].heading "Different from a filler?" | skin booster vs filler, beza skin booster dan filler, skin booster dan filler, filler vs skin booster | `skin booster vs filler` and `filler vs skin booster` return (English); `beza …` empty; `skin booster dan filler` → *perbedaan* (ID) | KEYWORD (pattern): **Apa beza skin booster dan filler?** (same *Apa beza X dan Y* pattern as the pilot FAQ 1) |
| variantModule.heading | jenis skin booster, skin booster jenis | `jenis skin booster` → jenis skin booster rejuran, dna salmon (and *yang bagus*, not used) | KEYWORD: **Jenis skin booster, dan apa kandungannya** |
| routes[0].title | skin booster kulit kusam, skin booster kulit kering | both → **skin booster untuk kulit kering dan kusam** | KEYWORD: **Kulit kering dan kusam, atau nampak kurang lembap** |
| routes[1].title | skin booster kulit sensitif, skin booster untuk kulit berjerawat, skin booster jerawat | `skin booster untuk kulit sensitif` returns; `skin booster untuk kulit berjerawat` returns (ID *cocok / aman* variants below it); `skin booster jerawat` → *bekas jerawat* (ID-leaning) | KEYWORD: **Kulit sensitif, berjerawat atau selepas rawatan** |
| routes[2].title | skin booster bawah mata, skin booster liang pori | `skin booster bawah mata` returns; liang pori empty | KEYWORD (partial): **Tekstur, liang pori dan kawasan bawah mata** |
| FAQ 1 "Sensitive or acne-prone skin?" | as routes[1] | as above | KEYWORD: **Skin booster sesuai ke untuk kulit sensitif atau berjerawat?** |
| FAQ 2 "Is there any downtime?" | skin booster downtime, skin booster ada downtime | `skin booster downtime` → **downtime berapa lama**; `skin booster ada downtime` → *apakah* (ID) | KEYWORD: **Skin booster ada downtime ke? Berapa lama?** (the answer gives the durations) |
| FAQ 3 "How many sessions?" | skin booster berapa kali | → berapa kali sebulan, boleh dilakukan berapa kali | KEYWORD: **Perlu buat skin booster berapa kali?** |
| FAQ 4 "Rejuran vs Profhilo?" | rejuran vs profhilo, beza rejuran dan profhilo | `rejuran vs profhilo` strong (English); *beza* empty | KEYWORD (pattern): **Apa beza Rejuran dan Profhilo?** |
| FAQ 5 "Allergic to fish?" | skin booster alahan, skin booster alergi, rejuran alahan, alahan ikan | treatment + allergy forms empty or ID (*alergi*); `alahan ikan` returns only food (bilis, tongkol) | DIRECT: **Boleh ke buat skin booster kalau saya alah pada ikan?** |

**Malay tally (14 logged strings):** 13 KEYWORD, 1 DIRECT.

**Indonesian pollution seen and avoided:** *perbedaan skin booster dan filler*, *apakah skin booster sakit / ada downtime*, *skin booster sakit ga*, *skin booster saat hamil / aman untuk ibu hamil*, *yang cocok untuk kulit berjerawat*, *bekas jerawat*, *alergi*, *harga skin booster di erha / natasha*, *hasilnya permanen*. `harga skin booster di malaysia` and `kos skin booster` are empty; no cost FAQ in the EN anyway.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| skin booster (in running text) | 水光针 | skin booster | terms.ts, aging / fine-lines-wrinkles |
| dermal fillers | 玻尿酸填充 / 填充剂 | dermal filler / filler | terms.ts, aging |
| hyaluronic acid | 玻尿酸 | asid hialuronik | aging, face-contouring |
| polynucleotide | 多核苷酸 | polinukleotida | new (AC `多核苷酸 醫美`, `pn 多核苷酸`) |
| collagen-stimulating / biostimulator | 刺激胶原蛋白 / 胶原蛋白刺激剂 | perangsang kolagen / bio-stimulator | terms.ts (bio-stimulator) |
| topical anaesthetic | 表面麻药 | krim kebas | pico-laser |
| keloid / hypertrophic scarring | 蟹足肿 / 增生性疤痕 | parut keloid atau hipertrofik | pico-laser, acne |
| pinpoint bruising | 针点状瘀青 | lebam titik halus | pico-laser |
| radiofrequency microneedling | 射频微针 | RF microneedling | terms.ts, docs/18 |
| botulinum toxin | 肉毒杆菌素 | toksin botulinum | terms.ts |
| active acne flare | 活跃的暗疮发作 | jerawat aktif / jerawat yang sedang naik | acne |

## For the bilingual doctor-reviewer

1. **seoTitle trade-off (zh):** 水光针 Rejuran、Profhilo \| Kaiteki drops 马来西亚 and Juvelook to fit 30 chars, although `水光针马来西亚价格` shows a Malaysian geo query. If the reviewer prefers geo over product names: 马来西亚水光针疗程 \| Kaiteki (19 chars).
2. **Salmon / trout:** 三文鱼 (MY usage), not 鲑鱼 (Taiwan). Trout is 鳟鱼 / *ikan trout*. The colloquial 三文鱼针 / *DNA salmon* are not used as names.
3. **Hydrodeluxe eyebrow** "Non-crosslinked HA" is 非交联玻尿酸 / *HA tidak berangkai silang*; calcium hydroxyapatite is 羟基磷灰石钙 / *kalsium hidroksiapatit*. Confirm.
4. **"Firmness"** (Profhilo) is 紧实度 / *ketegangan kulit*; "skin remodelling" is 皮肤重塑 / *pembentukan semula kulit*. Both keep the EN's "support" framing.
5. **"Not permanent"** is negated (它不是永久的 / *Ia tidak kekal*); the lint warns, as expected.
6. **Décolletage** is 胸口部位 / *dada atas*.
7. **Sensitised skin** (routes[1]) is rendered 敏感肌 / *kulit sensitif* to match the query form; "sensitised" (made sensitive, e.g. after treatment) is slightly narrower than 敏感肌. The body keeps the EN meaning.
