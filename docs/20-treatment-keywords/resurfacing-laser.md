# 20. Treatment keyword log: Resurfacing Laser (`/treatments/resurfacing-laser`)

**Date:** 2026-10-14 · Follows the pilot method in `pico-laser.md`.
**Outputs:** `content/i18n/treatments/zh/resurfacing-laser.json`, `content/i18n/treatments/ms/resurfacing-laser.json` (same shape as the EN record). Snapshot: `content/i18n/treatments/_en/resurfacing-laser.json`.
**Inputs:** EN record for `resurfacing-laser`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the already-translated `acne-scars`, `enlarged-pores`, `aging` and `fine-lines-wrinkles` concern pages (terminology carried over, see below).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`. Same HAS VOLUME / NO VOLUME reading and KEYWORD / DIRECT decision as `pico-laser.md`.
- **Probes:** shared run with `fotona-4d`: 172 zh and 154 ms queries (resurfacing share: about 90 zh, 80 ms). Raw dumps: `C:/tmp/fotona-resurf-ac-zh.json`, `C:/tmp/fotona-resurf-ac-zh2.json`, `C:/tmp/fotona-resurf-ac-ms.json`, `C:/tmp/fotona-resurf-ac-ms2.json` (not in the repo).
- **Scope:** only search-relevant strings are logged. This record has no `jumpNav`, routes, variantModule or ctaMid; its six section headings are all question-form H2s. All body copy is a direct, faithful translation.
- **What the data says about this page:** Chinese demand sits on 点阵激光 + 价格 / 多久做一次 / 效果 / 恢复期 / 副作用 (all in the top `点阵激光` suggestions); almost every longer 点阵激光 question form is empty. Malay demand is on *laser co2* / *co2 laser* (price, downtime, *kos rawatan co2 laser*, *penjagaan muka selepas co2 laser*, *beza pico laser dan co2 laser*); much of the rest is Indonesian (*sakit ga*, *bopeng*, *sebaiknya*, *erha*, *zap*).
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `src`, `reviewedBy`, `lastReviewed`, top-level `category`. "CO2" stays Latin (as on the concern pages).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Resurfacing Laser" | 点阵激光, 二氧化碳点阵激光, co2点阵激光, co2激光, 换肤激光, 激光换肤 | `点阵激光` → 价格, 多久做一次, 效果, 恢复期, 副作用; `二氧化碳点阵激光`, `co2点阵激光` return themselves; `co2激光` is industrial (切割机, 打标机); 换肤 forms empty | KEYWORD: **点阵激光** (terms.ts, kept) |
| **seoTitle** "CO2 Resurfacing Laser Malaysia \| Kaiteki" | co2点阵激光, co2 点阵, 点阵激光 马来西亚, co2点阵激光 马来西亚 | `co2 点阵` → co2点阵激光; every "+马来西亚" form empty | KEYWORD: **马来西亚 CO2 点阵激光疗程 \| Kaiteki** (25 chars; same shape as the pico title) |
| **seoDescription** | 点阵激光 痘坑/痘疤/毛孔, co2 痘坑, 痘坑, 毛孔粗大 激光 | the combined forms are empty; `痘坑` strong (怎么修复, 能修复吗, 治疗); `毛孔粗大 激光` returns | KEYWORD: CO2 点阵激光, 痘疤痘坑, 毛孔粗大, 免费咨询 (76 chars). 痘疤/痘坑 per docs/18 §5. |
| sections[0] "What is Resurfacing Laser treatment?" | 点阵激光是什么, 什么是点阵激光, co2激光是什么, co2 laser是什么 | `点阵激光是什么` returns; `co2 laser是什么` is the 1st `co2 laser` suggestion | KEYWORD: **点阵激光是什么？** |
| sections[1] "Why does a fractional CO2 laser heal faster than full resurfacing?" | 点阵激光原理, 点阵激光 恢复, 剥脱性点阵激光, 二氧化碳激光 原理 | `点阵激光 恢复` → 点阵激光恢复期 (used for sections[3] and FAQ 2 instead); 原理 forms empty for 点阵; `剥脱性点阵激光` returns itself | DIRECT: **为什么点阵式 CO2 激光比全面换肤恢复得快？** |
| sections[2] "Who should not have CO2 resurfacing?" | 点阵激光 适合什么人, 点阵激光 不适合, 点阵激光 禁忌, 点阵激光 孕妇 | all empty | DIRECT: **哪些人不适合做 CO2 点阵激光？** |
| sections[3] "What does the week after CO2 resurfacing look like?" | 点阵激光后, 点阵激光后注意事项, 点阵激光后几天, 点阵激光 一周, 点阵激光 恢复过程, 点阵激光恢复期, 点阵激光后脱皮, 点阵激光 结痂 | every 后 / 脱皮 / 结痂 form is empty; `点阵激光恢复期` is a top-5 `点阵激光` suggestion | KEYWORD: **点阵激光恢复期：做完后的一周会是怎样？** |
| sections[4] "Can CO2 resurfacing scar or darken the skin?" | 点阵激光副作用, 点阵激光 反黑, 点阵激光后反黑, 点阵激光 留疤, 点阵激光 疤痕, 点阵激光 风险, 激光后反黑, co2 laser 副作用 | `点阵激光副作用` (top suggestion); `激光后反黑`, `激光反黑怎么办` return; `点阵激光 疤痕` returns; `co2 laser 副作用` → fractional co2 laser 副作用 | KEYWORD: **点阵激光副作用：会留疤或反黑吗？** |
| sections[5] "Why is CO2 resurfacing priced at consultation?" | 点阵激光价格, 点阵激光 价钱, 点阵激光 多少钱, co2激光 价钱, 二氧化碳激光价钱 | `点阵激光价格` (top suggestion); `co2 激光 价钱` and `二氧化碳激光价钱` return (价钱 = MY/HK form) | KEYWORD: **为什么点阵激光的价钱要在咨询时才确定？** (价钱 per docs/18 §6) |
| FAQ 1 "Is Resurfacing Laser the same as Pico laser?" | 点阵激光和皮秒的区别, 皮秒和点阵激光, 皮秒 vs 点阵, 皮秒和点阵的区别, pico laser vs co2, co2 laser vs pico | Chinese forms all empty; `pico laser vs co2` → vs co2 laser (for acne scars, price, side effects), strong in the zh session | KEYWORD (pattern, as pilot FAQ 1): **点阵激光和皮秒激光一样吗？有什么区别？** (the answer states the difference) |
| FAQ 2 "How much downtime should I expect?" | 点阵激光恢复期, 点阵激光恢复期多久, 点阵激光 恢复 | `点阵激光恢复期` returns (top-5); `多久` form empty | KEYWORD: **点阵激光恢复期多久？** |
| FAQ 3 "Is it painful?" | 点阵激光痛吗, 点阵激光会痛吗, 点阵激光 痛, co2激光痛吗 | all empty | DIRECT: **做点阵激光会痛吗？** (subject added for clarity; no 无痛 anywhere) |
| FAQ 4 "How many sessions will I need?" | 点阵激光要做几次, 点阵激光几次, 点阵激光多久做一次 | `点阵激光多久做一次` is the 3rd `点阵激光` suggestion; 几次 forms empty | KEYWORD: **点阵激光要做几次？多久做一次？** (the answer covers "number and spacing") |

**Chinese tally (13 logged strings):** 10 KEYWORD, 3 DIRECT.

**Seen but not used:** `点阵激光效果` (top-5) reads as an efficacy claim, same call as 功效 in the pilot. `co2 激光脱疣` (wart removal) is a different procedure. `点阵激光香港` / `fotona 点阵激光` point at HK and at other devices.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Resurfacing Laser" | laser resurfacing, laser resurfacing malaysia, resurfacing laser, laser co2, co2 laser malaysia | `laser resurfacing malaysia` → price, **co2 laser resurfacing malaysia**; `laser co2` → fractional, untuk apa, harga; `co2 laser malaysia` → price, treatment malaysia | KEYWORD: **Laser Resurfacing** (terms.ts, kept) |
| **seoTitle** | co2 laser resurfacing malaysia, laser co2 malaysia, rawatan co2 laser, rawatan laser co2 | `co2 laser resurfacing malaysia` (AC); `rawatan laser co2` → rawatan co2 laser, harga/kos rawatan co2 laser (MY) | KEYWORD: **Rawatan Laser Resurfacing CO2 di Malaysia \| Kaiteki** (51 chars) |
| **seoDescription** | laser parut jerawat, laser co2 fraksional, laser co2 liang pori | `laser parut jerawat` → kos rawatan laser parut jerawat (MY); `laser co2 fraksional` returns; pori forms ID or Italian | KEYWORD: laser resurfacing CO2 fraksional, parut jerawat, liang pori, doktor, konsultasi percuma (159 chars) |
| sections[0] "What is Resurfacing Laser treatment?" | apa itu laser resurfacing, apa itu laser co2, apa itu co2 laser, laser co2 adalah | `apa itu laser resurfacing` returns itself; `apa itu laser co2` → fractional, scar; `laser co2 adalah` is ID | KEYWORD: **Apa itu rawatan laser resurfacing?** |
| sections[1] "Why does a fractional CO2 laser heal faster…?" | laser co2 fraksional, laser fraksional, fractional co2 laser, laser co2 berfungsi | `laser co2 fraksional` returns; `laser fraksional` → adalah, *biaya* (ID) | KEYWORD (term): **Kenapa laser CO2 fraksional sembuh lebih cepat berbanding resurfacing penuh?** |
| sections[2] "Who should not have CO2 resurfacing?" | laser co2 tidak sesuai, laser co2 sesuai untuk, laser co2 hamil, co2 laser hamil | empty, or Hamilton (NZ) + ID *ibu hamil* | DIRECT: **Siapa yang tidak sesuai untuk laser resurfacing CO2?** |
| sections[3] "What does the week after CO2 resurfacing look like?" | selepas laser co2, selepas co2 laser, penjagaan selepas laser co2, pantang selepas laser co2, laser co2 hari ke, laser co2 recovery | `selepas co2 laser` → **penjagaan muka selepas co2 laser** (MY); `laser co2 recovery` → day by day (English); pantang / hari ke empty | KEYWORD (partial): **Seminggu selepas laser CO2: apa yang berlaku?** |
| sections[4] "Can CO2 resurfacing scar or darken the skin?" | kesan sampingan laser co2, laser co2 kesan sampingan, laser co2 parut, laser co2 kulit gelap, co2 laser hiperpigmentasi, laser co2 bahaya | all Malay forms empty; `laser co2 bahaya` → *apakah laser co2 bahaya* (ID) | DIRECT: **Bolehkah laser resurfacing CO2 meninggalkan parut atau menggelapkan kulit?** |
| sections[5] "Why is CO2 resurfacing priced at consultation?" | kos laser co2, kos rawatan co2 laser, harga laser co2 (di malaysia), harga co2 laser | `kos laser co2` → **kos rawatan co2 laser** (MY); bare `harga laser co2` → zap, erha, natasha (ID chains); "di malaysia" forms empty | KEYWORD: **Kenapa kos rawatan laser CO2 ditentukan semasa konsultasi?** (kos, not bare harga, per docs/18 §7.2) |
| FAQ 1 "Same as Pico laser?" | beza laser co2 dan pico laser, pico laser dan co2 laser, laser co2 vs pico laser, pico laser atau laser co2 | `beza laser co2 dan pico laser` autocorrects to **beza pico laser dan co2 laser** (MY *beza*; ID uses *perbedaan / beda*) | KEYWORD: **Laser resurfacing CO2 sama ke dengan pico laser? Apa bezanya?** |
| FAQ 2 "How much downtime?" | laser co2 downtime, laser co2 downtime berapa lama, co2 laser downtime berapa lama | `laser co2 downtime` → **laser co2 downtime berapa lama** (2nd suggestion); also `downtime laser co2 berapa lama` | KEYWORD: **Downtime laser CO2 berapa lama?** |
| FAQ 3 "Is it painful?" | laser co2 sakit, laser co2 sakit tak, co2 laser sakit (tak) | only ID: *sakit ga, sakit gak, apakah sakit*; `sakit tak` empty | DIRECT: **Laser resurfacing sakit tak?** (MY colloquial form, as the pilot) |
| FAQ 4 "How many sessions?" | laser co2 berapa kali, laser co2 berapa sesi, co2 laser berapa kali | `laser co2 berapa kali` returns but every completion is ID (*sebaiknya dilakukan, untuk bopeng, agar hasil maksimal*); `berapa sesi` empty | DIRECT: **Perlu berapa sesi laser resurfacing?** |

**Malay tally (13 logged strings):** 9 KEYWORD, 4 DIRECT.

**Indonesian pollution seen and avoided:** *laser co2 sakit ga/gak*, *apakah sakit*, *berapa kali … bopeng / sebaiknya / agar hasil maksimal*, *harga laser co2 di zap / erha / natasha / bening's*, *laser co2 untuk apa saja / fungsinya*, *biaya laser fraksional*, *laser co2 bekas jerawat*, *setelah laser co2*, *perbedaan / apa beda pico laser dan laser co2*, *apakah laser co2 bahaya*, *untuk pori pori besar*.

## Terms carried over from the concern pages

| EN | zh | ms | Source |
|---|---|---|---|
| fractional CO2 laser | 点阵式 CO2 激光 | laser CO2 fraksional | acne-scars, enlarged-pores (the pico-laser pilot's 点阵二氧化碳激光 is the same thing; the concern pages' form is used here because they link to this page) |
| ablative / non-ablative | 剥脱式 / 非剥脱式 | ablatif / bukan ablatif | acne-scars |
| micro-injury columns | 柱状微损伤 | lajur kecederaan mikro | enlarged-pores (柱状, *lajur*) |
| depth and density | 深度和密度 | kedalaman dan ketumpatan | enlarged-pores |
| acne scarring | 痘疤 / 痘坑 | parut jerawat | docs/18 §5, acne-scars |
| enlarged pores | 毛孔粗大 | liang pori besar | docs/18 §5 |
| topical numbing | 表面麻药 | krim kebas | pico-laser (zh), acne-scars (ms) |
| downtime | 恢复期 | downtime | docs/18 §6 |
| cold sores / keloid | 唇疱疹 / 蟹足肿 | herpes bibir / parut keloid | pico-laser |
| recently tanned skin | 皮肤最近晒黑 | kulit yang baru digelapkan matahari (tan) | pico-laser |

## For the bilingual doctor-reviewer

1. **Name vs. body.** The display name is 点阵激光 (terms.ts), which is broader than CO2 (non-ablative fractional lasers are also 点阵). The H1 stays 点阵激光, but the title, description and body always say 点阵式 CO2 激光 when the device matters. Confirm that's clear enough; the alternative is 点阵 CO2 激光 as the name.
2. **"Full resurfacing"** is 全面换肤 / *resurfacing penuh*. Confirm.
3. **"the skin is genuinely wounded"** is 皮肤是真的受了伤 / *kulit benar-benar dicederakan*. That's faithful, and blunt on purpose (the EN is making the risk point). Confirm the tone.
4. **"aftercare here is instruction rather than advice"** is 必须照做的指示，而不只是建议 / *arahan yang perlu diikuti, bukan sekadar nasihat*.
5. **"carry more weight here than on any other laser at the clinic"** stays a comparative across Kaiteki's own lasers (比在诊所其他任何激光疗程里都更重要 / *lebih penting di sini berbanding mana-mana laser lain di klinik*). It's not a superlative about Kaiteki; L-03 doesn't flag it.
6. **The Malay badge** says *Pemulihan 5-7 hari* ("5-7 days recovery"). The zh badge uses 恢复期5至7天. Both are the EN figure, unchanged.
7. **"prickling sensation"** is 刺刺的感觉 / *rasa … mencucuk-cucuk*. No 无痛 / *tanpa sakit*.
