# 21. Technology keyword log: Profhilo (`/technology/profhilo`)

**Date:** 2026-10-14 · Follows the pilot format in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/profhilo.json`, `content/i18n/technology/ms/profhilo.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/profhilo.json`.
**Inputs:** EN record for `profhilo`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `skin-booster` treatment page (`docs/20-treatment-keywords/skin-booster.md`) and `bio-stimulator`.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME / NO VOLUME read as in the pilot (skew signs: *dcard / ptt / 香港 / 台湾 / 韩国* for Chinese; *adalah / suntik / sebaiknya / harus / perbedaan / zap* for Malay).
- **Decision:** KEYWORD = phrased around the real query form, EN meaning kept. DIRECT = faithful translation, no invented keyword.
- **Probes:** shared batch for the five skin-booster products (profhilo, rejuran, plinest, juvelook, hydrodeluxe): 133 zh and 145 ms. Raw dumps: `C:/tmp/sbdev-ac-zh.json`, `C:/tmp/sbdev-ac-zh2.json`, `C:/tmp/sbdev-ac-zh3.json`, `C:/tmp/sbdev-ac-ms.json`, `C:/tmp/sbdev-ac-ms2.json`, `C:/tmp/sbdev-ac-ms3.json` (not in the repo).
- **Scope:** search-relevant strings only (name, seoTitle, seoDescription, seven section headings, four FAQ questions). No jumpNav, routes or ctaMid. All body copy is a direct, faithful translation.
- **Product pages:** demand for every product in this batch is brand-led and largely English, in both languages (`profhilo price malaysia`, `profhilo side effects`, `profhilo vs filler`). Chinese adds `brand + 是什么 / 原理 / 副作用 / 疗程`; Malay adds `apa itu / untuk apa / berapa kali`.
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `device`, `reviewedBy`, `lastReviewed`; the names Profhilo, IBSA, NAHYCO®, Bio Aesthetic Points (BAP), BDDE.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Profhilo" | profhilo | → profhilo是什么, structura, 中文, 效果, 多久打一次, 副作用 | KEYWORD (brand): **Profhilo**, kept in Latin |
| **seoTitle** "Profhilo Skin Booster Treatment in Malaysia \| Kaiteki" | profhilo 水光针, profhilo 疗程, profhilo 马来西亚 | `profhilo 水光针` and `profhilo 疗程` return; `profhilo 马来西亚` empty | KEYWORD: **马来西亚 Profhilo 水光针疗程 \| Kaiteki** (29 chars). 马来西亚 kept for the EN geo intent. |
| **seoDescription** | profhilo 玻尿酸, profhilo 水光针 | `profhilo玻尿酸` returns (plus 逆时针 forms) | KEYWORD: Profhilo, IBSA, 玻尿酸, 马来西亚, 水光针, 补水, 紧实度, 免费咨询 (77 chars) |
| sections[0].heading "What is Profhilo?" | profhilo 是什么 | **profhilo是什么** is the 1st `profhilo` suggestion | KEYWORD: **Profhilo 是什么？** |
| sections[1].heading "How it works: NAHYCO hybrid complexes" | profhilo 原理 | `profhilo 原理` returns (plus 逆时针 forms) | KEYWORD: **Profhilo 原理：NAHYCO 混合复合物如何作用** |
| sections[2].heading "Is Profhilo a filler?" | profhilo 填充, profhilo 是填充吗 | `profhilo 填充` returns itself; question form empty; `juvelook 算 填充 吗` shows the pattern | KEYWORD (partial): **Profhilo 算是填充吗？** |
| sections[3].heading "Why is Profhilo given as a course, with maintenance?" | profhilo 疗程, profhilo 多久打一次, profhilo 维持多久, profhilo 要打几次 | `profhilo 疗程`, `profhilo 多久 打 一次`, `profhilo 维持 多久` return | KEYWORD: **Profhilo 疗程：为什么要分几次打，之后还要维持？** |
| sections[4].heading "When would a doctor advise against Profhilo?" | profhilo 禁忌, profhilo 适合什么人 | empty | DIRECT: **什么情况下医生会建议不打 Profhilo？** |
| sections[5].heading "What does a Profhilo visit involve, and how quickly do the bumps settle?" | profhilo 恢复期, profhilo 肿, profhilo 包 | `profhilo 恢复期` returns itself; bump forms empty | DIRECT: **打 Profhilo 的过程是怎样的？小凸起多久会平复？** (凸起 as on skin-booster) |
| sections[6].heading "What side effects can follow Profhilo?" | profhilo 副作用 | in the top `profhilo` suggestions; returns | KEYWORD: **Profhilo 可能有什么副作用？** |
| FAQ 1 "How is Profhilo different from a dermal filler?" | profhilo 填充, profhilo 和 玻尿酸 区别 | `profhilo 填充` returns; 区别 form empty | KEYWORD (pattern): **Profhilo 和玻尿酸填充有什么区别？** (玻尿酸填充 is the terms.ts name, as in skin-booster sections[1]) |
| FAQ 2 "Is Profhilo suitable for Asian skin tones?" | profhilo 亚洲 | empty | DIRECT: **Profhilo 适合亚洲人的肤色吗？** |
| FAQ 3 "Does Profhilo hurt, and will the bumps be visible?" | profhilo 痛吗, profhilo 肿 | empty | DIRECT: **打 Profhilo 会痛吗？小凸起会很明显吗？** |
| FAQ 4 "Is Profhilo permanent?" | profhilo 永久, profhilo 维持多久 | `profhilo 永久` empty; `维持多久` is a different (outcome) question | DIRECT: **Profhilo 是永久的吗？** (the answer negates it) |

**Chinese tally (14 logged strings):** 9 KEYWORD, 5 DIRECT.

**Not usable:** **逆时针** (Profhilo's China-market nickname, in `profhilo 原理 / 副作用 / 价钱 / 颈纹`): a consumer nickname for a prescription injectable, same reasoning as 婴儿针 / 三文鱼针 in `skin-booster.md`. `profhilo 价钱` is HK/TW/KR/dcard-led and the EN has no cost FAQ. `profhilo 效果` is outcome framing. **Profhilo Structura** shows up in both languages; it is a different IBSA product and the EN does not mention it.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Profhilo" | profhilo, profhilo malaysia | `profhilo malaysia` → price, supplier, injection price malaysia | KEYWORD (brand): **Profhilo** |
| **seoTitle** | profhilo malaysia, rawatan profhilo, profhilo skin booster, harga profhilo di malaysia | `profhilo malaysia` → **profhilo treatment price malaysia**; `rawatan profhilo` returns; `profhilo skin booster` returns; *harga … di malaysia* empty | KEYWORD: **Rawatan Skin Booster Profhilo di Malaysia \| Kaiteki** (51 chars) |
| **seoDescription** | suntikan profhilo, profhilo skin booster | `suntikan profhilo` returns (MY *suntikan*) | KEYWORD: suntikan, asid hialuronik, IBSA, skin booster, Kaiteki, konsultasi percuma (160 chars) |
| sections[0].heading "What is Profhilo?" | apa itu profhilo, profhilo untuk apa | `apa itu profhilo` returns (→ treatment, dan fungsinya; *suntik* variant is ID) | KEYWORD: **Apa itu Profhilo?** |
| sections[1].heading "How it works" | profhilo how it works | English only | DIRECT: **Bagaimana Profhilo berfungsi: kompleks hibrid NAHYCO** |
| sections[2].heading "Is Profhilo a filler?" | profhilo filler, profhilo vs filler | both strong (English) | KEYWORD: **Profhilo ialah filler ke?** (*filler* is the searched word, as in docs/18) |
| sections[3].heading "Why a course, with maintenance?" | profhilo berapa kali, profhilo maintenance | `profhilo berapa kali` → diulang / dilakukan berapa kali; `profhilo maintenance` English | DIRECT: **Kenapa Profhilo dibuat sebagai satu kursus, dengan penyelenggaraan?** (the heading asks why, not how many) |
| sections[4].heading "When would a doctor advise against Profhilo?" | profhilo hamil | Hamilton noise | DIRECT: **Bila doktor akan menasihatkan supaya tidak buat Profhilo?** |
| sections[5].heading "Visit and bumps" | profhilo downtime, profhilo bumps | both strong but English | DIRECT: **Apa yang berlaku semasa sesi Profhilo, dan berapa cepat bintil reda?** |
| sections[6].heading "Side effects" | profhilo kesan sampingan, profhilo side effects | Malay empty; English strong | DIRECT: **Apakah kesan sampingan selepas Profhilo?** |
| FAQ 1 "Different from a dermal filler?" | profhilo vs filler | strong (English) | KEYWORD (pattern): **Apa beza Profhilo dan dermal filler?** |
| FAQ 2 "Asian skin tones?" | profhilo asian skin | empty | DIRECT: **Profhilo sesuai ke untuk warna kulit orang Asia?** |
| FAQ 3 "Does it hurt, bumps visible?" | profhilo sakit, profhilo sakit ke, profhilo bumps | Malay empty; bumps English | DIRECT: **Profhilo sakit tak, dan adakah bintilnya akan nampak?** |
| FAQ 4 "Is Profhilo permanent?" | profhilo kekal, profhilo berapa lama, profhilo how long last | *kekal* empty; *berapa lama* → *tahan / hasil / efek* (ID-leaning); English strong | DIRECT: **Adakah Profhilo kekal?** |

**Malay tally (14 logged strings):** 6 KEYWORD, 8 DIRECT.

**Indonesian pollution seen and avoided:** *apa itu suntik profhilo*, *profhilo skin booster adalah*, *efek / hasil profhilo berapa lama*. `profhilo promotion malaysia` exists; promotions are out of scope (docs/18 §7).

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| skin booster | 水光针 | skin booster | terms.ts, skin-booster |
| dermal filler (category) | 玻尿酸填充 / 填充剂 | dermal filler / filler | terms.ts, skin-booster |
| hyaluronic acid (HA) | 玻尿酸 | asid hialuronik | skin-booster |
| firmness | 紧实度 | ketegangan kulit | skin-booster |
| skin remodelling / bio-remodelling | 皮肤重塑 / 生物重塑 | pembentukan semula kulit / bio-remodelling | skin-booster |
| décolletage | 胸口部位 | dada atas | skin-booster |
| crepey | 绉纸般 | berkerepot | aging, dark-eye-circles |
| topical anaesthetic | 表面麻药 | krim kebas | skin-booster |
| bumps (at entry points) | 凸起 | bintil | skin-booster |
| pinpoint bruising | 针点状瘀青 | lebam titik halus | skin-booster |
| cross-linking agent | 化学交联剂 | agen rangkai silang kimia | new (skin-booster: 非交联 / tidak berangkai silang) |
| vascular complications | 血管并发症 | komplikasi vaskular | skin-booster |

## For the bilingual doctor-reviewer

1. **逆时针 not used.** It is how many Chinese readers know Profhilo, but it is a marketing nickname for a prescription injectable.
2. **"Not a contour filler"** (facts) is 不是轮廓填充剂 / *Bukan filler kontur*.
3. **"Hybrid cooperative complexes"** is 混合协同复合物 / *kompleks koperatif hibrid*; the short form is 混合复合物 / *kompleks hibrid*. Confirm.
4. **Bio Aesthetic Points** keeps the English name, glossed 生物美学点 in zh.
5. **"Is Profhilo permanent?"** and "temporary and not permanent" keep the negation in both languages (L-03r warns, as expected).
6. **"So your doctor can advise safely"** describes the advice, not the treatment, as in the pilot.
