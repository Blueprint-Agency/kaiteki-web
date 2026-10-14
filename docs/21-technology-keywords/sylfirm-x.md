# 21. Technology keyword log: Sylfirm X (`/technology/sylfirm-x`)

**Date:** 2026-10-14 · Device & injectable localisation round (format: `onda-coolwaves.md`).
**Outputs:** `content/i18n/technology/zh/sylfirm-x.json`, `content/i18n/technology/ms/sylfirm-x.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/sylfirm-x.json`.
**Inputs:** EN record for `sylfirm-x`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `microneedling` treatment page (`docs/20-treatment-keywords/microneedling.md`) and the `melasma`, `acne-scars`, `enlarged-pores` concern pages (`docs/19-concern-keywords/melasma.md` FAQ 6 is reused verbatim).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`, read as in the pilot.
- **Probes (shared batch with oligio, morpheus8, potenza):** 24 + 9 zh and 22 + 2 ms for this device. Raw dumps: `C:/tmp/rfdev-ac-zh.json`, `C:/tmp/rfdev-ac-zh2.json`, `C:/tmp/rfdev-ac-ms.json`, `C:/tmp/rfdev-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, the seven section headings, the four FAQ questions. All body copy is a direct, faithful translation.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; Sylfirm X, Viol, the manufacturer's term *Selective Regional Regeneration* (glossed once in zh as 选择性区域再生), CW / PW.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Sylfirm X" | sylfirm x, sylfirm 是什么 | `sylfirm x` → sylfirm x是什么, 功效, 几耐做一次 / 香港价钱 / 好唔好 (HK Cantonese) | KEYWORD (brand): **Sylfirm X** |
| **seoTitle** "Sylfirm X RF Microneedling Treatment Malaysia \| Kaiteki" | sylfirm x 马来西亚, sylfirm x 黄金微针, sylfirm 黄金微针 | `sylfirm x 黄金微针` returns; `sylfirm 黄金微针` → sylfirm 黄金微针 potenza; `黄金微针 马来西亚` → 价钱 (microneedling.md); `sylfirm x 马来西亚` empty | KEYWORD: **马来西亚 Sylfirm X 黄金微针 \| Kaiteki** (29 chars) |
| **seoDescription** | sylfirm x 功效, sylfirm x 毛孔 | both return | KEYWORD: Sylfirm X, 双模式, 射频微针（黄金微针）, 色素, 血管性泛红, 肤质, 免费咨询 (75 chars) |
| sections[0].heading "What is Sylfirm X?" | sylfirm x 是什么 | returns (also 1st suggestion under `sylfirm x`) | KEYWORD: **Sylfirm X 是什么？** |
| sections[1].heading "How pulsed and continuous wave modes work" | sylfirm x 原理, sylfirm x 模式, sylfirm x 脉冲 | `原理` and `模式` return; `脉冲` empty | KEYWORD: **Sylfirm X 原理：脉冲波和连续波模式如何运作** |
| sections[2].heading "Is Sylfirm X for tightening, or for pigment and redness?" | sylfirm x 紧致, sylfirm x 色斑, sylfirm x 泛红, sylfirm x 功效 | only `功效` returns (not the question asked) | DIRECT: **Sylfirm X 是用来紧致，还是处理色素和泛红？** |
| sections[3].heading "Why does melasma need a course of Sylfirm X, not one session?" | sylfirm x 黄褐斑, sylfirm 黄褐斑, 黄金微针 黄褐斑, sylfirm x 几次 | all empty | DIRECT: **为什么黄褐斑要做一个疗程的 Sylfirm X，而不是只做一次？** |
| sections[4].heading "Who should postpone or avoid Sylfirm X?" | sylfirm x 禁忌, sylfirm x 适合 | empty | DIRECT: **哪些人应该延后或避免做 Sylfirm X？** |
| sections[5].heading "How long does a session take, and how long does the redness last?" | sylfirm x 恢复期, sylfirm x 泛红, sylfirm x 多久 | `sylfirm x 恢复期` returns; `sylfirm x 多久` → 多久做一次 (spacing, not duration); `泛红` empty | KEYWORD: **做一次 Sylfirm X 要多久？泛红（恢复期）会持续多久？** |
| sections[6].heading "Can Sylfirm X cause pigment change or scarring?" | sylfirm x 副作用, sylfirm x 反黑 | both return | KEYWORD: **Sylfirm X 有什么副作用？会引起色素变化（反黑）或留疤吗？** |
| FAQ 1 "How is Sylfirm X different from other RF microneedling devices?" | sylfirm x 区别, sylfirm x 和, sylfirm x vs, sylfirm x 黄金微针 | 区别/和 empty; `vs` → potenza, morpheus8 (English, global); `sylfirm x 黄金微针` returns | KEYWORD (weak): **Sylfirm X 和其他射频微针（黄金微针）仪器有什么分别？** |
| FAQ 2 "Can Sylfirm X be used for melasma on Asian skin?" | sylfirm x 黄褐斑 | empty | DIRECT: **Sylfirm X 可以用来处理亚洲人皮肤上的黄褐斑吗？** (identical to melasma FAQ 6) |
| FAQ 3 "Does Sylfirm X hurt, and how long does the redness last?" | sylfirm x 痛吗, sylfirm x 痛, sylfirm x 恢复期 | `痛吗` and `恢复期` return | KEYWORD: **Sylfirm X 痛吗？泛红会持续多久？** (answer: numbing first, "warm prickling"; nothing says painless) |
| FAQ 4 "Is there anything that would rule me out of Sylfirm X?" | sylfirm x 禁忌, sylfirm x 适合 | empty | DIRECT: **有什么情况会让我不适合做 Sylfirm X？** |

**Chinese tally (14 logged strings):** 9 KEYWORD, 5 DIRECT (FAQ 1 weak).

**Not usable:** HK Cantonese forms (`几耐做一次`, `好唔好`, `边间好`, `香港 价钱`). `sylfirm x 收毛孔` returns, but 收毛孔 promises a result the EN doesn't.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Sylfirm X" | sylfirm x | → treatment, reviews, before and after (English) | KEYWORD (brand): **Sylfirm X** |
| **seoTitle** | sylfirm x malaysia, sylfirm x treatment, rawatan sylfirm x, sylfirm x di malaysia | `sylfirm x malaysia` → malaysia price, treatment price malaysia; *rawatan* and *di malaysia* forms empty | KEYWORD: **Rawatan RF Microneedling Sylfirm X di Malaysia \| Kaiteki** (56 chars), same pattern as the microneedling page |
| **seoDescription** | sylfirm x pigmentation, sylfirm x redness | both return (English) | KEYWORD: Sylfirm X, RF microneedling, dwi-mod, pigmen, vaskular, tekstur, konsultasi percuma (159 chars) |
| sections[0].heading "What is Sylfirm X?" | apa itu sylfirm x | **returns itself** | KEYWORD: **Apa itu Sylfirm X?** |
| sections[1].heading | sylfirm x pulsed wave, sylfirm x how it works | English only / empty | DIRECT: **Bagaimana mod gelombang berdenyut dan berterusan berfungsi** |
| sections[2].heading | sylfirm x tightening, sylfirm x pigmentation, sylfirm x redness | English only | DIRECT: **Sylfirm X untuk menegangkan kulit, atau untuk pigmen dan kemerahan?** |
| sections[3].heading | sylfirm x jeragat, sylfirm x melasma, rf microneedling jeragat | Malay empty; `sylfirm x melasma` English | DIRECT: **Kenapa jeragat memerlukan satu kursus Sylfirm X, bukan satu sesi?** |
| sections[4].heading | sylfirm x contraindications, sylfirm x pregnancy | English only | DIRECT: **Siapa yang patut menangguhkan atau mengelak Sylfirm X?** |
| sections[5].heading | sylfirm x downtime, rf microneedling downtime | English only | DIRECT: **Berapa lama satu sesi Sylfirm X, dan berapa lama kemerahan bertahan?** |
| sections[6].heading | sylfirm x kesan sampingan, sylfirm x side effects | Malay empty; English strong | DIRECT: **Boleh ke Sylfirm X menyebabkan perubahan pigmen atau parut?** |
| FAQ 1 | sylfirm x vs | English, global | DIRECT: **Apa beza Sylfirm X dengan mesin RF microneedling lain?** |
| FAQ 2 | sylfirm x jeragat | empty | DIRECT: **Boleh ke Sylfirm X digunakan untuk jeragat pada kulit Asia?** (identical to melasma FAQ 6) |
| FAQ 3 | sylfirm x sakit, sylfirm x pain | *sakit* empty; `sylfirm x pain level` English | DIRECT: **Sylfirm X sakit tak, dan berapa lama kemerahan bertahan?** |
| FAQ 4 | sylfirm x contraindications | English only | DIRECT: **Ada apa-apa yang menyebabkan saya tidak sesuai untuk Sylfirm X?** |

**Malay tally (14 logged strings):** 4 KEYWORD, 10 DIRECT.

**Indonesian pollution seen and avoided:** `sylfirm x treatment adalah`.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| RF microneedling | 射频微针（黄金微针） | RF microneedling | microneedling, docs/18 §5 |
| pulsed / continuous wave | 脉冲波 / 连续波 | gelombang berdenyut / berterusan | microneedling variant module |
| melasma | 黄褐斑 | jeragat (melasma) | melasma, docs/18 §5 |
| post-inflammatory hyperpigmentation (PIH) | 炎症后色素沉着（PIH） | hiperpigmentasi pasca-radang (PIH) | microneedling, acne-scars |
| rolling scars | 滚动型痘疤 | parut rolling | acne-scars, microneedling |
| enlarged pores | 毛孔粗大 | liang pori besar | enlarged-pores |
| numbing cream | 麻药膏 | krim kebas | microneedling |
| faint grid pattern | 淡淡格子纹 | corak grid yang samar | microneedling |
| pinpoint bruising or scabbing | 针点状瘀青或结痂 | lebam atau kuping sebesar titik | microneedling |
| oral isotretinoin | 口服异维A酸 | isotretinoin oral | microneedling |
| single-use consumable needle tips | 一次性使用的针头耗材 | hujung jarum pakai buang | microneedling |

## For the bilingual doctor-reviewer

1. **黄金微针 in the zh title and FAQ 1.** For Sylfirm X it is literally apt: the EN says the needles are non-insulated gold. It also matches the microneedling page.
2. **反黑 in sections[6].heading** glosses "pigment change". The EN covers darkening and lightening; 反黑 is darkening only, so the heading keeps 色素变化 first and 反黑 in brackets. Confirm this reads right.
3. **"Selective Regional Regeneration"** stays in English as the manufacturer's marketing term, glossed 选择性区域再生 in zh. The text keeps "the manufacturer describes / markets" (制造商描述 / 推广为; *digambarkan / dipasarkan oleh pengeluar*).
4. **"Vascular"** in the zh description is 血管性泛红, to stay readable for patients. The ms version keeps *vaskular*.
