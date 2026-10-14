# 20. Treatment keyword log: Facial Treatments (`/treatments/facial-treatments`)

**Date:** 2026-10-14 · Treatment-page localisation round, same format as the pilot (`pico-laser.md`).
**Outputs:** `content/i18n/treatments/zh/facial-treatments.json`, `content/i18n/treatments/ms/facial-treatments.json` (same shape as the EN record; EN snapshot in `content/i18n/treatments/_en/facial-treatments.json`).
**Inputs:** EN record for `facial-treatments`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the translated `acne`, `enlarged-pores`, `melasma` and `pigmentation` concern pages, which all describe Hydrafacial and Silkpeel.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME = the phrase or a natural Malaysian form of it comes back without a Taiwan/HK/Indonesia skew (*dcard / 台北 / 水飞梭*; *wajah / apakah / setelah / sebaiknya / erha / zap*).
- **Decision:** KEYWORD = phrased around the real query form, EN meaning kept. DIRECT = faithful translation, no invented keyword.
- **Probes:** 74 zh and 79 ms on this page's family (shared batch with `bio-stimulator`). Raw dumps: `C:/tmp/biofac-ac-zh.json`, `C:/tmp/biofac-ac-zh2.json`, `C:/tmp/biofac-ac-ms.json`, `C:/tmp/biofac-ac-ms2.json` (not in the repo).
- **Scope:** seoTitle, seoDescription, name, section headings, FAQ questions. This record has no jumpNav, routes, variantModule or ctaMid. All body copy (section bodies, FAQ answers, captions) is a direct, faithful translation.
- **Key finding:** Malaysian Chinese users type the English word **facial** (`facial kl`, `facial cat ss2`, `做facial价钱`, `facial多久做一次`), not 面部护理, which is product-led (护理油, sabon, clarins). So headings use "Facial"; body copy uses 面部护理 / 诊所面部护理 (the concern pages' term) so it reads as Chinese. Malay users also type *facial* (`rawatan facial muka`, `berapa kerap boleh buat facial`).
- **Medical framing kept:** the EN positions these as clinic facials under a skin assessment. Nothing here says 美容院 / salon; captions keep the EN's "therapist" (治疗师 / *terapis*), and "clinician" is 医护人员 / *pengamal klinik*.
- **Untranslated by design:** `slug`, `src`, `image`, `related`, `reviewedBy`, `lastReviewed`, top-level `category`; Hydrafacial and Silkpeel stay Latin.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Facial Treatments" | 医美面部护理, 医美 facial, 面部护理, facial, 诊所 facial | `医美 facial` returns; `facial` → facial kl, facial cat ss2, facial 中文 (MY); `面部护理` product-led; `医美面部护理`, `诊所 facial` empty | KEYWORD: **医美面部护理（Facial）** (terms.ts, kept) |
| **seoTitle** "Facial Treatments Malaysia \| Hydrafacial, Silkpeel \| Kaiteki" | hydrafacial, hydrafacial 马来西亚, hydrafacial 价钱, silkpeel, 医美 facial, facial 马来西亚 | `hydrafacial` → 是什么, 中文, kl, 香港; `hydrafacial 价钱` returns; `silkpeel` → braun, adalah (EN/ID); "+马来西亚" forms empty | KEYWORD: **医美Facial：Hydrafacial \| Kaiteki** (30 chars). Hydrafacial has the stronger zh demand; Silkpeel and 马来西亚 move to the description. |
| **seoDescription** | (same family) | as above | KEYWORD: 马来西亚, 医美 Facial, Hydrafacial, Silkpeel, 免费咨询 (76 chars). 深层清洁 has demand (`深层清洁facial价钱`) but isn't used: the EN says these work at the surface. |
| sections[0].heading "What are Facial Treatments?" | facial 是什么, 什么是facial, 医美 facial | `facial 是什么` → facial是什么 (1st); `facial` → facial意思, facial 中文 | KEYWORD: **医美 Facial 是什么？** |
| sections[1].heading "How do Hydrafacial and Silkpeel work?" | hydrafacial 原理, hydrafacial 是什么, hydrafacial 过程, hydrafacial 功效 | `hydrafacial 原理` returns; `hydrafacial是什么` returns; 过程 empty; 功效 returns but reads as efficacy | KEYWORD: **Hydrafacial 和 Silkpeel 的原理是什么？** |
| sections[2].heading "When should you not have a facial?" | facial 禁忌, 不适合做facial, facial 前, 敏感肌 facial | all empty except `敏感肌 facial` (returns itself; narrower than the EN) | DIRECT: **什么情况下不适合做 Facial？** |
| sections[3].heading "What happens during a clinic facial, and is there redness afterwards?" | facial 过程, facial 步骤, 做完facial, facial 后, facial 后 泛红, facial 后脸红, facial 会红吗 | `facial 过程` returns; `做 facial 步骤`; `做完facial` → 皮肤敏感, 可以化妆吗; `facial 后` → 皮肤 敏感; redness forms empty | KEYWORD: **医美 Facial 过程是怎样的？做完会泛红吗？** (过程 + 做完 are the real forms; 泛红 is the EN meaning) |
| sections[4].heading "How often are clinic facials booked, and what changes the cost?" | facial 多久做一次, 多久做一次facial, facial 价钱, 做facial价钱, facial 多少钱 | `facial多久做一次` and `多久做一次facial` return; `facial 价钱` returns (MY 价钱); `做facial` → 价钱, 几耐一次 | KEYWORD: **Facial 多久做一次？价钱由什么决定？** |
| FAQ 1 "Difference between Hydrafacial and Silkpeel?" | hydrafacial 和, hydrafacial silkpeel, hydrafacial 和 silkpeel, hydrafacial vs | `hydrafacial silkpeel` → **silkpeel vs hydrafacial**, silkpeel dermalinfusion vs hydrafacial; Chinese 和 forms empty | KEYWORD (pattern): **Hydrafacial 和 Silkpeel 有什么区别？** (pilot FAQ 1 pattern) |
| FAQ 2 "Can facials replace treatments like Pico laser or skin boosters?" | facial 可以代替, facial 和 激光, facial 皮秒, 皮秒 facial, facial 水光针 | `facial 水光针` → 水光针 facial (a different product); the rest empty | DIRECT: **Facial 可以取代皮秒激光或水光针这类疗程吗？** |
| FAQ 3 "Is there any downtime?" | facial 恢复期, hydrafacial 恢复期, facial 后 | 恢复期 forms empty | DIRECT: **做 Facial 有恢复期吗？** (恢复期 kept for consistency with docs/18 §6) |
| FAQ 4 "How often should I get a facial?" | facial 多久做一次, 多久做一次facial, hydrafacial 多久做一次 | `facial多久做一次` and `多久做一次facial` return; hydrafacial form empty | KEYWORD: **Facial 应该多久做一次？** |

**Chinese tally (12 logged strings):** 9 KEYWORD, 3 DIRECT.

**Not usable (skewed or off-meaning):** `小气泡` / `小气泡清洁` (home gadgets, dcard, 台南), `水飞梭` (Taiwan name for hydra-dermabrasion; dcard, 台北), `hydrafacial香港`, `面部护理` (oils, sabon, clarins), `做facial好处` / `facial 好处` (benefit claims; the EN makes none), `深层清洁` (adds "deep", which the EN avoids).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Facial Treatments" | rawatan facial, rawatan facial muka, facial, facial muka, facial klinik | `rawatan facial` → muka, untuk lelaki (MY); `facial` → kuala lumpur, cheras; `facial klinik` → terdekat, natasha (ID chain) | KEYWORD: **Rawatan Facial** (terms.ts, kept) |
| **seoTitle** | hydrafacial malaysia, silk peel malaysia, rawatan facial, facial price malaysia | `hydrafacial malaysia` → price, treatment malaysia; `silk peel malaysia` → silk peel facial price malaysia; `facial price malaysia` strong | KEYWORD: **Rawatan Facial di Malaysia \| Hydrafacial, Silkpeel \| Kaiteki** (60 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: rawatan facial, klinik, Hydrafacial, Silkpeel, konsultasi percuma (157 chars) |
| sections[0].heading "What are Facial Treatments?" | apa itu facial, apa itu hydrafacial, rawatan facial | `apa itu facial` returns (skincare noise too); `apa itu hydrafacial` returns | KEYWORD: **Apa itu rawatan facial?** |
| sections[1].heading "How do Hydrafacial and Silkpeel work?" | hydrafacial untuk apa, apa itu hydrafacial, hydrafacial adalah, cara kerja | `hydrafacial untuk apa` returns, but it asks "what for", not "how"; `hydrafacial adalah` is ID | DIRECT: **Bagaimana Hydrafacial dan Silkpeel berfungsi?** |
| sections[2].heading "When should you not have a facial?" | bila tak boleh buat facial, tak boleh buat facial, facial tak sesuai, facial bahaya | all empty except `facial bahaya` → apakah facial bahaya (ID) | DIRECT: **Bila anda tidak patut buat facial?** |
| sections[3].heading "What happens during …, redness afterwards?" | proses facial, facial di klinik, selepas facial, muka merah selepas facial, facial muka merah, facial kemerahan | `facial di klinik` → berapa kali, untuk apa; `selepas facial` → kesan selepas facial muka, pantang larang selepas facial (MY); `facial muka merah` → habis / apakah setelah (ID); `proses facial` → wajah (ID) | KEYWORD (partial): **Apa yang berlaku semasa facial di klinik, dan adakah muka jadi merah selepasnya?** |
| sections[4].heading "How often …, and what changes the cost?" | berapa kerap buat facial, facial berapa kali sebulan, facial berapa kerap, kos facial, kos rawatan facial | `berapa kerap buat facial` → **berapa kerap boleh buat facial** (MY); `facial berapa kali sebulan` → sebaiknya, bagusnya (ID); `kos facial` → kos facial treatment | KEYWORD: **Berapa kerap buat facial di klinik, dan apa yang mempengaruhi kosnya?** |
| FAQ 1 "Difference between Hydrafacial and Silkpeel?" | hydrafacial vs silkpeel, silkpeel vs hydrafacial, beza hydrafacial | `hydrafacial vs silkpeel` and `silkpeel vs hydrafacial` return; `beza hydrafacial` empty | KEYWORD (pattern): **Apa beza Hydrafacial dan Silkpeel?** (pilot FAQ 1 pattern) |
| FAQ 2 "Can facials replace Pico laser or skin boosters?" | facial vs pico laser, pico laser atau facial, facial ganti laser, skin booster vs facial, skin booster atau facial, facial atau laser | `facial vs pico laser` → hydra facial vs pico laser (English); `skin booster vs facial` returns; `facial atau laser` → lebih baik … (ID-leaning); Malay "ganti" forms empty | DIRECT: **Boleh ke facial menggantikan rawatan seperti pico laser atau skin booster?** |
| FAQ 3 "Is there any downtime?" | facial downtime, hydrafacial downtime, facial ada downtime | `facial downtime` → downtime facial berapa lama / berapa hari; `hydrafacial downtime` returns; `facial ada downtime` → apakah … (ID) | KEYWORD (term): **Facial ada downtime ke?** |
| FAQ 4 "How often should I get a facial?" | berapa kerap boleh buat facial, facial berapa kali sebulan, facial kerap | `berapa kerap boleh buat facial` returns (MY); the sebulan forms are ID-leaning | KEYWORD: **Berapa kerap boleh buat facial?** |

**Malay tally (12 logged strings):** 9 KEYWORD, 3 DIRECT.

**Indonesian pollution seen and avoided:** facial wajah / proses facial wajah, facial sebaiknya / bagusnya berapa kali sebulan, apakah facial ada downtime, apakah setelah facial muka merah, habis facial muka merah, harga hydrafacial erha / zap / airin / dermaster, facial klinik natasha, perbedaan facial dan laser, hydrafacial adalah, silkpeel adalah. **Not used:** *pantang larang selepas facial* (real MY demand; the EN has no aftercare-restriction section beyond "sun protection and gentle skincare", so it isn't added).

## Terms carried over from the concern pages

| EN | zh | ms | Source |
|---|---|---|---|
| clinic facials | 诊所面部护理 | facial klinikal / facial di klinik | acne, enlarged-pores |
| exfoliation / exfoliate | 去角质 | eksfoliasi / mengeksfoliasi | acne, enlarged-pores |
| extraction | 清理毛孔 / 把毛孔里的污垢吸出 | pengekstrakan | enlarged-pores |
| congested pores | 毛孔堵塞 | liang pori tersumbat | enlarged-pores (*liang pori*, never *pori*) |
| dull / uneven tone | 暗沉、不均匀的肤色 | kusam, tidak sekata | pigmentation |
| skin booster / Pico laser | 水光针 / 皮秒激光 | skin booster / pico laser | terms.ts |
| sun protection | 防晒 | pelindung matahari | pigmentation |
| downtime | 恢复期 | downtime | docs/18 §6 |

## For the bilingual doctor-reviewer

1. **"Facial" in headings, 面部护理 in body (zh).** Autocomplete shows Malaysian Chinese type *facial*; 面部护理 is product-led. If the reviewer prefers fully Chinese headings, swap "Facial" for 面部护理 and accept the DIRECT reading.
2. **"Therapist" in captions** is kept as 治疗师 / *terapis* (EN wording). 美容师 was avoided because it implies a salon. If the photos show a nurse or doctor, adjust.
3. **"Clinician"** is 医护人员 / *pengamal klinik*. If the facials are always doctor-supervised, 医生 / *doktor* could be used instead, but only if true.
4. **"No downtime"** in the duration line is 无恢复期 / *Tiada downtime*, as the EN states. FAQ 3 keeps the EN's softer "minimal to none" (很少，甚至没有 / *sangat minimum atau tiada langsung*).
5. **"Device-based extraction and serum infusion"** is 用仪器清理毛孔和导入精华 / *pengekstrakan menggunakan peranti dan penyerapan serum*. Confirm 导入 for "infusion".
6. **zh seoTitle** keeps Hydrafacial but drops Silkpeel and 马来西亚 to fit 30 characters; both are in the description.
