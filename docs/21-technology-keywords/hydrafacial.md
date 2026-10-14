# 21. Technology keyword log: Hydrafacial (`/technology/hydrafacial`)

**Date:** 2026-10-14 · Device & injectable localisation round, same format as the pilot (`onda-coolwaves.md`).
**Outputs:** `content/i18n/technology/zh/hydrafacial.json`, `content/i18n/technology/ms/hydrafacial.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/hydrafacial.json`.
**Inputs:** EN record for `hydrafacial`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `facial-treatments` treatment page (`docs/20-treatment-keywords/facial-treatments.md`) and the `acne`, `enlarged-pores` and `pigmentation` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, with `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME / NO VOLUME read as in the pilot (skew signs: *dcard / lihkg / 香港 / 水飞梭 / traditional characters* for Chinese; *adalah / apakah / wajah / zap / erha / menit* for Malay).
- **Decision:** KEYWORD = phrased around the real query form, EN meaning kept. DIRECT = faithful translation, no invented keyword.
- **Probes:** shared batch with `silkpeel`: 128 zh and 145 ms, two batches per language. Raw dumps: `C:/tmp/hydsilk-ac-zh.json`, `C:/tmp/hydsilk-ac-zh2.json`, `C:/tmp/hydsilk-ac-ms.json`, `C:/tmp/hydsilk-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, the seven section headings, the four FAQ questions. This record has no jumpNav, routes or ctaMid. All body copy (summary, leadAnswer, facts, section bodies and list, cost factors, FAQ answers) is a direct, faithful translation.
- **Key finding:** almost all Hydrafacial demand is the brand in English (`hydrafacial malaysia price`, `hydrafacial treatment malaysia`, `hydrafacial kl`), in both locales. Chinese adds `hydrafacial是什么`, `hydrafacial 原理`, `hydrafacial 价钱`, `hydrafacial 疗程`, `hydrafacial 副作用`; every other Chinese question about Hydrafacial is empty, so headings borrow the generic *facial* forms already used on the facial-treatments page (`facial多久做一次`, `敏感肌 facial`, `facial 去黑头`). Malay demand for Hydrafacial is English-language (*hydrafacial sensitive skin, hydrafacial how often, hydrafacial breakout, hydrafacial side effects*); only `apa itu hydrafacial` and the generic `berapa kerap boleh buat facial` / `kenapa lepas facial naik jerawat` are Malay.
- **"Facial" in zh headings, 面部护理 in zh body**, as on the facial-treatments page. Captions and "therapist" stay 治疗师 / *terapis*, as the EN says.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; Hydrafacial, Vortex-Fusion, LED.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Hydrafacial" | hydrafacial, hydra facial, hydrafacial 中文 | `hydrafacial` → hydrafacial是什么, 中文, kl, 香港; `hydra facial` → 是什么, 中文 | KEYWORD (brand): **Hydrafacial**, kept in Latin |
| **seoTitle** "Hydrafacial Device Facial Treatment Malaysia \| Kaiteki" | hydrafacial 马来西亚, hydrafacial malaysia, hydrafacial 疗程, hydrafacial 仪器, 仪器 facial, 医美 facial | `hydrafacial malaysia` → price, treatment malaysia; `hydrafacial 疗程` returns; `医美 facial` returns; `hydrafacial 马来西亚`, 仪器 forms empty | KEYWORD: **马来西亚 Hydrafacial 疗程 \| Kaiteki** (29 chars). "Device facial" moves to the description to fit 30. |
| **seoDescription** | hydrafacial 价钱, 医美 facial, facial 去黑头, hydrafacial 毛孔 | `hydrafacial 价钱` returns; `医美 facial` returns; `facial 去黑头` returns; `hydrafacial 毛孔` empty | KEYWORD: Hydrafacial, 仪器, 医美 Facial, 去角质, 清理毛孔, 导入精华, 免费咨询 (76 chars) |
| sections[0].heading "What is Hydrafacial?" | hydrafacial 是什么, hydrafacial是什么 | `hydrafacial` → **hydrafacial是什么** (2nd suggestion); `hydra facial是什么` | KEYWORD: **Hydrafacial 是什么？** |
| sections[1].heading "How the treatment steps work" | hydrafacial 原理, hydrafacial 步骤, hydrafacial 过程, 做facial | `hydrafacial 原理` returns; 步骤 / 过程 forms empty; `做facial` → 做facial步骤 | KEYWORD: **Hydrafacial 原理：疗程步骤如何进行** (pilot pattern "Onda 原理：…") |
| sections[2].heading "Device or hands: what changes with a Hydrafacial?" | hydrafacial 仪器, 仪器 facial, hydrafacial 和facial, hydrafacial 普通, 普通facial | all empty; `hydrafacial vs` → vs regular facial (English) | DIRECT: **仪器还是手工：Hydrafacial 有什么不同？** |
| sections[3].heading "When is a Hydrafacial not the right treatment?" | hydrafacial 不适合, hydrafacial 禁忌, hydrafacial 什么人 | all empty | DIRECT: **什么情况下 Hydrafacial 不是合适的疗程？** |
| sections[4].heading "Can sensitive skin have a Hydrafacial, and when should it wait?" | hydrafacial 敏感肌, 敏感肌 hydrafacial, 敏感肌 facial, 敏感肌 可以, 敏感肌可以做, facial 敏感 | Hydrafacial forms empty; `敏感肌 facial` returns; `敏感肌 可以` → 敏感肌可以打皮秒吗, 敏感肌可以做水飞梭吗 (the "敏感肌可以做 X 吗" pattern); `facial 敏感` → 皮肤 敏感 facial | KEYWORD (pattern): **敏感肌可以做 Hydrafacial 吗？什么时候要先等等？** |
| sections[5].heading "What does a Hydrafacial feel like, and how often is it repeated?" | hydrafacial 感觉, hydrafacial 痛吗, hydrafacial 多久做一次, facial 多久做一次, 多久做一次facial | Hydrafacial forms empty; `facial多久做一次` and `多久做一次facial` return | KEYWORD (pattern): **做 Hydrafacial 是什么感觉？多久做一次？** |
| sections[6].heading "Can a Hydrafacial cause a breakout or a reaction?" | hydrafacial 副作用, hydrafacial 爆痘, facial 爆痘, facial 后 爆痘, 做完facial爆痘, facial 爆, facial 过敏 | `hydrafacial 副作用` returns; 爆痘 forms empty except `facial 後 爆瘡` (HK, traditional); 过敏 forms empty | KEYWORD: **Hydrafacial 副作用：会爆痘或出现反应吗？** (pilot pattern "Onda 禁忌：…"; the section *is* the side-effects section) |
| FAQ 1 "How is Hydrafacial different from a normal facial?" | hydrafacial 和, hydrafacial 区别, hydrafacial 差别, hydrafacial 和普通facial, facial 区别 | all empty; `hydrafacial vs` → vs regular facial (English) | DIRECT: **Hydrafacial 和一般的 Facial 有什么不同？** |
| FAQ 2 "Will Hydrafacial help with my clogged pores and blackheads?" | hydrafacial 黑头, hydrafacial 毛孔, hydrafacial 粉刺, facial 黑头, facial 去黑头, facial 清黑头, 毛孔堵塞 facial | Hydrafacial forms empty; `facial 去黑头`, `facial 清黑头`, `去 黑头 facial` return | KEYWORD (partial): **Hydrafacial 可以帮助处理毛孔堵塞和去黑头吗？** |
| FAQ 3 "Can I have a Hydrafacial if my skin is sensitive or reactive?" | 皮肤敏感 facial, facial 敏感肌, 敏感肌可以做facial吗 | `皮肤敏感 facial` returns; `facial 敏感肌` → 敏感肌 facial | KEYWORD (partial): **皮肤敏感或容易起反应，可以做 Hydrafacial 吗？** |
| FAQ 4 "How often should I have a Hydrafacial?" | hydrafacial 多久做一次, hydrafacial 一个月, facial 多久做一次 | Hydrafacial forms empty; `facial多久做一次` returns | KEYWORD (pattern): **Hydrafacial 多久做一次？** (facial-treatments FAQ 4 pattern) |

**Chinese tally (14 logged strings):** 11 KEYWORD, 3 DIRECT (sections[4], sections[5], FAQ 2, FAQ 3 and FAQ 4 borrow the generic *facial* query form).

**Not usable (skewed or a claim):** `hydrafacial香港` / `hydrafacial 香港 价钱` (HK), `水飞梭` (TW name; `敏感肌可以做水飞梭吗`), `做facial几耐一次` / `做完facial可唔可以化妆` (Cantonese), `facial 後 爆瘡` (HK), `做facial好处` / `hydrafacial 好处` / `hydrafacial 效果` (benefit or efficacy framing the EN avoids), `暗疮facial lihkg`, `做脸` (TW for facial).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Hydrafacial" | hydrafacial, hydrafacial malaysia | `hydrafacial` → price in malaysia, klcc, treatment | KEYWORD (brand): **Hydrafacial**, kept in Latin |
| **seoTitle** "Hydrafacial Device Facial Treatment Malaysia \| Kaiteki" | hydrafacial malaysia, hydrafacial treatment malaysia, hydrafacial price malaysia, rawatan hydrafacial, rawatan facial | `hydrafacial malaysia` → price, **treatment malaysia**; `hydrafacial treatment` → treatment price in malaysia; *rawatan hydrafacial* empty; `rawatan facial` → muka (facial-treatments log) | KEYWORD: **Rawatan Facial Hydrafacial di Malaysia \| Kaiteki** (48 chars). *Rawatan Facial* is the terms.ts name; "device" goes to the description. |
| **seoDescription** | (same family), liang pori tersumbat | as above; `liang pori tersumbat` returns | KEYWORD: Hydrafacial, Kaiteki, facial berasaskan peranti, eksfoliasi, kualiti kulit, konsultasi percuma (158 chars) |
| sections[0].heading "What is Hydrafacial?" | apa itu hydrafacial, hydrafacial untuk apa | `apa itu hydrafacial` → apa itu hydrafacial dan fungsinya; `hydrafacial untuk apa` returns | KEYWORD: **Apa itu Hydrafacial?** |
| sections[1].heading "How the treatment steps work" | hydrafacial langkah, hydrafacial berfungsi, cara hydrafacial berfungsi, hydrafacial steps | Malay forms empty; `hydrafacial steps` English (pdf, video) | DIRECT: **Bagaimana langkah-langkah rawatan berfungsi** |
| sections[2].heading "Device or hands: what changes with a Hydrafacial?" | facial mesin, facial tangan, facial manual, hydrafacial vs normal facial | `facial mesin` → mesin facial 7 in 1 (home gadgets); `facial manual` → manual adalah (ID), lymphatic drainage; `hydrafacial vs normal facial` English | DIRECT: **Peranti atau tangan: apa yang berbeza dengan Hydrafacial?** |
| sections[3].heading "When is a Hydrafacial not the right treatment?" | hydrafacial tidak sesuai, hydrafacial bila tidak sesuai, facial tidak sesuai | all empty | DIRECT: **Bila Hydrafacial bukan rawatan yang sesuai?** |
| sections[4].heading "Can sensitive skin have a Hydrafacial, and when should it wait?" | hydrafacial kulit sensitif, hydrafacial untuk kulit sensitif, kulit sensitif boleh facial, facial kulit sensitif, hydrafacial sensitive skin | Malay Hydrafacial forms empty; `facial kulit sensitif` → facial wash products; `kulit sensitif boleh facial` → *apakah* … (ID); `hydrafacial sensitive skin` English | DIRECT: **Bolehkah kulit sensitif buat Hydrafacial, dan bila perlu tunggu dulu?** |
| sections[5].heading "What does a Hydrafacial feel like, and how often is it repeated?" | hydrafacial rasa, hydrafacial sakit, hydrafacial berapa kerap, berapa kerap boleh buat hydrafacial, berapa kerap boleh buat facial, hydrafacial how often | Hydrafacial Malay forms empty; `berapa kerap boleh buat facial` returns (MY); `hydrafacial how often` English | KEYWORD (pattern): **Bagaimana rasanya Hydrafacial, dan berapa kerap boleh buat?** |
| sections[6].heading "Can a Hydrafacial cause a breakout or a reaction?" | hydrafacial naik jerawat, facial naik jerawat, lepas facial naik jerawat, jerawat selepas facial, hydrafacial kesan sampingan, hydrafacial breakout | `facial naik jerawat` / `lepas facial naik jerawat` → **kenapa lepas facial naik jerawat** (MY colloquial); Hydrafacial Malay forms empty; `hydrafacial breakout` English | KEYWORD (partial): **Bolehkah Hydrafacial menyebabkan naik jerawat atau reaksi kulit?** |
| FAQ 1 "How is Hydrafacial different from a normal facial?" | beza hydrafacial, beza hydrafacial dan facial biasa, hydrafacial vs facial biasa, facial biasa | Hydrafacial forms empty; `facial biasa` returns (mixed with ID *berapa menit*); `hydrafacial vs normal facial` English | KEYWORD (weak, term): **Apa beza Hydrafacial dengan facial biasa?** (pilot "Apa beza" pattern + *facial biasa*) |
| FAQ 2 "Will Hydrafacial help with my clogged pores and blackheads?" | hydrafacial liang pori, hydrafacial pori tersumbat, liang pori tersumbat, hydrafacial komedo, facial komedo, hydrafacial blackhead | `liang pori tersumbat` returns; `facial komedo` → zap, erha, adalah (ID); `hydrafacial komedo` Turkish; `hydrafacial blackhead` English | KEYWORD (partial): **Bolehkah Hydrafacial membantu liang pori tersumbat dan komedo hitam saya?** (*komedo hitam* as on the acne page) |
| FAQ 3 "Can I have a Hydrafacial if my skin is sensitive or reactive?" | (as sections[4]) | as sections[4] | DIRECT: **Bolehkah saya buat Hydrafacial jika kulit saya sensitif atau mudah bertindak balas?** |
| FAQ 4 "How often should I have a Hydrafacial?" | berapa kerap boleh buat facial, hydrafacial sebulan sekali, hydrafacial berapa kerap | `berapa kerap boleh buat facial` returns (MY); Hydrafacial forms empty | KEYWORD (pattern): **Berapa kerap boleh buat Hydrafacial?** |

**Malay tally (14 logged strings):** 9 KEYWORD, 5 DIRECT.

**Indonesian pollution seen and avoided:** hydrafacial adalah / treatment adalah, apakah kulit sensitif boleh facial, facial biasanya berapa menit / berapa bulan sekali, facial komedo zap / erha / adalah, buang komedo secara alami / di wajah, perbedaan facial dan laser. Bare *harga hydrafacial* is never used; the cost line says *Harga dibincangkan semasa konsultasi*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| device-based facial | 用仪器进行的面部护理 | facial berasaskan peranti | facial-treatments |
| facial treatments (facts value) | 医美面部护理 | Rawatan Facial | terms.ts |
| exfoliate / extract / infuse | 去角质 / 清理毛孔 / 导入 | mengeksfoliasi / mengekstrak / menyerapkan | facial-treatments |
| handpiece | 手柄 | alat pegang tangan | onda-coolwaves |
| spiral tip | 螺旋形探头 | hujung berpilin (spiral tip) | new |
| vacuum suction | 真空吸引 | sedutan vakum | new (吸引手柄 in facial-treatments captions) |
| microdermabrasion | 微晶磨皮 | mikrodermabrasi | new (AC `微晶磨皮` returns) |
| lymphatic drainage | 淋巴引流 | saliran limfa | new |
| serum boosters | 加强精华（booster） | serum booster | new |
| waste canister | 废液罐 | bekas sisa | new |
| congested pores / blackheads | 毛孔堵塞 / 黑头 | liang pori tersumbat / komedo hitam | enlarged-pores, acne |
| inflammatory acne | 发炎型暗疮 | jerawat meradang | acne |
| T-zone | T字部位 | zon T | enlarged-pores |
| retinoids / isotretinoin | A酸类（维A酸）/ 异维A酸（口服暗疮药） | retinoid / isotretinoin | acne |
| rosacea / eczema / cold sores | 玫瑰痤疮（酒糟）/ 湿疹 / 唇疱疹 | rosacea / ekzema / herpes bibir (cold sore) | concern pages |
| therapist / doctor | 治疗师 / 医生 | terapis / doktor | facial-treatments |
| downtime | 恢复期 | downtime | docs/18 §6 |

## For the bilingual doctor-reviewer

1. **Generic "facial" query forms.** Five zh headings and two ms headings borrow the *facial* question form (`facial多久做一次`, `敏感肌 facial`, `facial 去黑头`, `berapa kerap boleh buat facial`, `kenapa lepas facial naik jerawat`) because no Hydrafacial-specific Chinese or Malay form exists. The EN meaning is unchanged.
2. **FAQ 2 (zh) uses 去黑头** (the AC form) in the question. The answer keeps the EN hedge (常用来处理, and that congestion tends to return); nothing promises removal.
3. **zh sections[6] heading leads with 副作用** (the only Hydrafacial question form with demand). The body is a direct translation of the EN risk paragraph.
4. **"Performed by trained staff under medical supervision"** is 由受过训练的人员在医疗监督下进行 / *kakitangan terlatih di bawah penyeliaan perubatan*. Confirm this matches how sessions are actually staffed.
5. **"Gentle peel step"** is 温和的焕肤步骤 / *langkah peel yang lembut*. 焕肤 is the term the concern pages use for peels.
6. **"Isotretinoin"** in zh is 异维A酸（口服暗疮药）, glossed as the acne page glosses oral acne medication.
7. **zh seoTitle** drops "Device facial" to fit 30 characters; the description and body carry it.
