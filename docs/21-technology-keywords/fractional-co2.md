# 21. Technology keyword log: Fractional CO2 (`/technology/fractional-co2`)

**Date:** 2026-10-14 · Device-page localisation round, following the `onda-coolwaves.md` pilot.
**Outputs:** `content/i18n/technology/zh/fractional-co2.json`, `content/i18n/technology/ms/fractional-co2.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/fractional-co2.json`.
**Inputs:** EN record for `fractional-co2`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `resurfacing-laser` treatment page (`docs/20-treatment-keywords/resurfacing-laser.md`) and the `acne-scars` and `enlarged-pores` concern pages.

## Method

Same as the pilot: Google Autocomplete (`suggestqueries.google.com`, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`). HAS VOLUME → **KEYWORD**; NO VOLUME → **DIRECT**.

- **Probes:** shared batch with `pro-yellow`, `m22-ipl` and `alma` (about 35 zh and 35 ms for this page). Raw dumps: `C:/tmp/pyma-ac-zh*.json`, `C:/tmp/pyma-ac-ms*.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, the seven section headings, the four FAQ questions. All body copy is a direct, faithful translation.
- **This page's `name` is a generic category, not a brand** ("Fractional CO2 is a category of resurfacing laser rather than a single brand"), so it is translated: **CO2 点阵激光** (AC `co2 点阵激光` → co2点阵激光; `点阵激光` is the strong head term) and **Laser CO2 Fraksional** (AC `laser co2 fraksional` returns itself; the treatment page's term). The treatment page keeps the broader 点阵激光 / *Laser Resurfacing* as its name, so the two pages don't compete for the same title.
- **Chinese demand sits on 点阵激光** (→ 价格, 多久做一次, 效果, 恢复期, 副作用, 香港). **Malaysian Malay demand is mostly English** (*fractional co2 laser malaysia (price), co2 laser treatment malaysia, laser co2 downtime berapa lama*), with heavy Indonesian pollution on the Malay forms.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Fractional CO2" | co2 点阵激光, 点阵激光, fractional co2, co2 激光 | `co2 点阵激光` → co2点阵激光; `点阵激光` strong; `fractional co2` → laser 价钱, 有冇用 / lihkg (HK), 中文; `co2 激光` → 切割机 (industrial), 脱疣, 价钱 | KEYWORD (translated generic name): **CO2 点阵激光** |
| **seoTitle** "Fractional CO2 Laser Resurfacing Malaysia \| Kaiteki" | co2 点阵 马来西亚, 全面换肤, 剥脱 | "+马来西亚" empty; `剥脱` → **剥脱性点阵激光**; 换肤 forms empty but 换肤激光 is the acne-scars term | KEYWORD: **马来西亚 CO2 点阵激光换肤 \| Kaiteki** (25 chars). 换肤 carries "resurfacing" and keeps the title distinct from the treatment page's 马来西亚 CO2 点阵激光疗程. |
| **seoDescription** | 点阵激光, 痘坑 激光, 毛孔粗大 | head term strong; 痘疤/痘坑 per docs/18 §5 | KEYWORD: CO2 点阵激光, 剥脱式换肤激光, 纹理, 毛孔粗大, 痘疤痘坑, 免费咨询 (78 chars) |
| sections[0] "What is fractional CO2 laser resurfacing?" | 点阵激光是什么 | returns itself | KEYWORD: **CO2 点阵激光是什么？** |
| sections[1] "How fractional CO2 works" | 点阵激光原理, co2 点阵 原理 | empty | DIRECT: **点阵式 CO2 激光如何运作** |
| sections[2] "What is fractional CO2 used for, and what does it mean for your week?" | 点阵激光 恢复期, 点阵激光恢复期 | `点阵激光` → **点阵激光恢复期** (top-6); returns itself | KEYWORD: **CO2 点阵激光用来处理什么？恢复期会怎样影响你的一周？** (the "week" is the recovery week the body describes) |
| sections[3] "Why is fractional CO2 used more conservatively on Asian skin?" | 点阵激光 亚洲, 点阵激光 反黑 | empty | DIRECT: **为什么 CO2 点阵激光用在亚洲人皮肤上要更保守？** |
| sections[4] "Why is fractional CO2 often tried after gentler options, and who should avoid it?" | 点阵激光 不适合, 点阵激光 禁忌, 点阵激光 适合 | empty | DIRECT: **为什么 CO2 点阵激光常在较温和的选择之后才考虑？哪些人应该避免？** |
| sections[5] "What happens on the day…, and how is the skin cared for after?" | 点阵激光后, 点阵激光 术后, 点阵激光 护理, 点阵激光后注意事项 | all empty | DIRECT: **CO2 点阵激光当天怎么进行？做完后皮肤怎么护理？** |
| sections[6] "What are the risks of fractional CO2 compared with non-ablative lasers?" | 点阵激光副作用, co2 激光 副作用 | `点阵激光副作用` returns (also top-7 of the head term) | KEYWORD: **CO2 点阵激光副作用：和非剥脱式激光相比有什么风险？** |
| FAQ 1 "Difference between fractional and fully ablative CO2 resurfacing?" | 点阵激光和, 剥脱式激光, 全面换肤 | empty (only 剥脱性点阵激光 under 剥脱) | DIRECT: **点阵式和全面剥脱式 CO2 换肤有什么区别？** |
| FAQ 2 "How much downtime should I plan for after fractional CO2?" | 点阵激光恢复期 | returns | KEYWORD: **CO2 点阵激光恢复期要预留多久？** |
| FAQ 3 "Is fractional CO2 suitable for Asian skin and acne scarring?" | 点阵激光 痘坑, co2 点阵激光 痘坑, 点阵激光 痘疤, 痘坑 激光 | all empty | DIRECT: **CO2 点阵激光适合亚洲人皮肤和痘疤吗？** |
| FAQ 4 "How painful is fractional CO2, and what is done about it?" | 点阵激光痛吗, 点阵激光 痛 | empty | DIRECT: **CO2 点阵激光有多痛？会怎么处理？** (honest; no 无痛) |

**Chinese tally (14 logged strings):** 7 KEYWORD, 7 DIRECT.

**Not usable:** `点阵激光效果` (efficacy framing, same call as resurfacing-laser), `点阵激光香港`, `fractional co2 laser 有冇用 / lihkg` (HK), `co2 激光脱疣` (wart removal), `co2激光切割机 / 打标机` (industrial).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** | laser co2, laser co2 fraksional, fractional co2 laser | `laser co2` → **laser co2 fractional**, untuk apa, treatment; `laser co2 fraksional` returns itself | KEYWORD (translated generic name): **Laser CO2 Fraksional** (the treatment page's term) |
| **seoTitle** | laser co2 malaysia, fractional co2 laser malaysia, fractional co2 malaysia | `laser co2 malaysia` → co2 laser malaysia price, co2 laser treatment malaysia, **fractional co2 laser malaysia**; `fractional co2 malaysia` → laser malaysia (price) | KEYWORD: **Laser Resurfacing CO2 Fraksional di Malaysia \| Kaiteki** (54 chars) |
| **seoDescription** | laser parut jerawat, rawatan laser parut jerawat | `laser parut jerawat` → kos rawatan laser parut jerawat, rawatan laser parut jerawat (MY) | KEYWORD: laser CO2 fraksional, resurfacing ablatif, tekstur kulit, liang pori, parut jerawat, konsultasi percuma (155 chars) |
| sections[0] "What is fractional CO2 laser resurfacing?" | apa itu laser co2, apa itu fractional co2 | `apa itu laser co2` → **apa itu laser co2 fractional**, scar, treatment | KEYWORD: **Apa itu laser resurfacing CO2 fraksional?** |
| sections[1] "How fractional CO2 works" | laser co2 berfungsi | → laser co2 berfungsi untuk | KEYWORD (weak): **Bagaimana laser CO2 fraksional berfungsi** |
| sections[2] "What is it used for, and what does it mean for your week?" | laser co2 untuk, laser co2 downtime | `laser co2 untuk` → untuk apa, jerawat, bekas luka (ID-leaning tail: *bopeng*); `laser co2 downtime` → **downtime berapa lama** | KEYWORD: **Laser CO2 fraksional untuk apa, dan bagaimana downtime menjejaskan minggu anda?** |
| sections[3] Asian skin | laser co2 kulit gelap, fractional co2 laser asian skin | Malay empty; English returns | DIRECT: **Kenapa laser CO2 fraksional digunakan dengan lebih berhati-hati pada kulit Asia?** |
| sections[4] gentler options / who should avoid | laser co2 hamil | Hamilton noise; *untuk ibu hamil* (ID) | DIRECT: **Kenapa laser CO2 fraksional selalunya dicuba selepas pilihan yang lebih lembut, dan siapa yang patut mengelaknya?** |
| sections[5] the day / aftercare | penjagaan selepas laser co2, selepas laser co2 | both → **penjagaan muka selepas co2 laser** (MY *penjagaan*, *selepas*) | KEYWORD: **Apa berlaku pada hari sesi laser CO2 fraksional, dan bagaimana penjagaan muka selepas laser CO2?** |
| sections[6] risks vs non-ablative | laser co2 risiko, laser co2 kesan sampingan, fractional co2 side effects | `laser co2 risiko` → co2 laser risiko; kesan sampingan empty; English strong | KEYWORD (weak): **Apakah risiko laser CO2 fraksional berbanding laser bukan ablatif?** |
| FAQ 1 fractional vs fully ablative | fractional co2 vs, laser ablatif | `fractional co2 vs` → **vs ablative**, vs co2 laser (English); `laser ablatif` → *adalah* (ID), French | DIRECT: **Apa beza resurfacing CO2 fraksional dan resurfacing CO2 ablatif penuh?** |
| FAQ 2 downtime | laser co2 downtime, fractional co2 downtime | → **laser co2 downtime berapa lama** | KEYWORD: **Downtime laser CO2 fraksional berapa lama?** (same form as the treatment page) |
| FAQ 3 Asian skin and acne scarring | laser parut jerawat, laser co2 parut jerawat | `laser parut jerawat` strong (kos, rawatan); CO2+parut forms empty | KEYWORD: **Laser CO2 fraksional sesuai ke untuk kulit Asia dan parut jerawat?** |
| FAQ 4 pain | laser co2 sakit, co2 laser sakit tak, fractional co2 laser pain | `laser co2 sakit` → *sakit ga / gak* (ID); *sakit tak* empty; English returns | DIRECT: **Sakit tak laser CO2 fraksional, dan apa yang dibuat untuk mengurangkannya?** (*sakit tak* as on the treatment page) |

**Malay tally (14 logged strings):** 10 KEYWORD, 4 DIRECT.

**Indonesian pollution seen and avoided:** *laser co2 sakit ga / gak*, *apakah sakit*, *berapa kali laser co2 untuk bopeng / agar hasil maksimal / sebaiknya*, *laser co2 untuk bopeng*, *laser ablatif adalah*, *laser co2 untuk ibu hamil*, bare *laser co2 harga*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| fractional CO2 laser | 点阵式 CO2 激光 / CO2 点阵激光 | laser CO2 fraksional | resurfacing-laser, acne-scars |
| ablative / non-ablative | 剥脱式 / 非剥脱式 | ablatif / bukan ablatif | resurfacing-laser |
| (micro-injury) columns | 柱状区域 / 柱状微损伤 | lajur | resurfacing-laser |
| fully ablative resurfacing | 全面剥脱式换肤 | resurfacing ablatif penuh | resurfacing-laser (全面换肤 / *resurfacing penuh*) |
| depth and density | 深度和密度 | kedalaman dan ketumpatan | resurfacing-laser |
| topical anaesthetic | 表面麻药 | krim kebas | resurfacing-laser |
| post-inflammatory hyperpigmentation | 炎症后色素沉着（反黑） | hiperpigmentasi pasca-radang | new; 反黑 is the docs/18 §5 lay term |
| acne scarring (boxcar, rolling) | 痘疤（箱型、滚动型痘坑） | parut jerawat (boxcar, rolling) | acne-scars |
| enlarged-looking pores | 毛孔看起来粗大 | liang pori yang kelihatan besar | docs/18 §5 |
| cold sores / keloid | 唇疱疹 / 蟹足肿 | herpes bibir / parut keloid | resurfacing-laser |
| downtime | 恢复期 | downtime | docs/18 §6 |

## For the bilingual doctor-reviewer

1. **`name` is translated** (CO2 点阵激光 / *Laser CO2 Fraksional*) because the EN says it is a category, not a brand. Confirm, or keep "Fractional CO2" in Latin if the clinic prefers the English label on the device hub.
2. **"Bronzing"** is 古铜色 / *warna keperangan*. Confirm it reads as the expected post-CO2 darkening and not as a tan.
3. **"Microthermal treatment zones"** is 微热治疗区 / *zon rawatan mikroterma*.
4. **"Priming skincare"** is 用护肤品打底 / *penjagaan kulit persediaan*. If the doctor prescribes specific agents (e.g. hydroquinone), the EN doesn't name them and neither do we.
5. **"This is not a lunchtime treatment"** is kept literal (午休时间就能做完的疗程 / *rawatan waktu makan tengah hari*).
6. **Pain FAQ** describes "intense heat with a prickling sensation" honestly (强烈的热感，加上刺刺的感觉 / *haba yang kuat dengan rasa mencucuk-cucuk*); no 无痛 / *tanpa sakit*.
