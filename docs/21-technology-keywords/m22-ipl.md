# 21. Technology keyword log: M22 IPL (`/technology/m22-ipl`)

**Date:** 2026-10-14 · Device-page localisation round, following the `onda-coolwaves.md` pilot.
**Outputs:** `content/i18n/technology/zh/m22-ipl.json`, `content/i18n/technology/ms/m22-ipl.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/m22-ipl.json`.
**Inputs:** EN record for `m22-ipl`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `vascular-pigment-laser` and `laser-hair-removal` treatment pages and their logs in `docs/20-treatment-keywords/`.

## Method

Same as the pilot: Google Autocomplete (`suggestqueries.google.com`, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`). HAS VOLUME → **KEYWORD**; NO VOLUME → **DIRECT**.

- **Probes:** shared batch with `pro-yellow`, `fractional-co2` and `alma` (about 40 zh and 35 ms for this page). Raw dumps: `C:/tmp/pyma-ac-zh*.json`, `C:/tmp/pyma-ac-ms*.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, the seven section headings, the four FAQ questions. All body copy is a direct, faithful translation.
- **IPL in Chinese is 光子嫩肤.** `m22` → **m22 光子嫩肤**, m22是什么, m22 超光子 价格; `m22 光子嫩肤` → 价钱 (the MY form), 效果, 好唔好 (HK); `光子嫩肤` → 是什么, 多久做一次, 价格, 功效. As on vascular-pigment-laser, body copy glosses IPL once as 强脉冲光（俗称光子嫩肤） and search strings use M22 IPL（光子嫩肤） or M22 光子嫩肤（IPL）. "Photorejuvenation" in the EN title is exactly what 光子嫩肤 names, so here the term is also the faithful translation.
- **Malay demand for IPL is English** (*ipl photorejuvenation, ipl treatment malaysia, ipl side effects, ipl downtime, ipl vs laser*), and the Malay forms that return are mixed with Indonesian (*ipl sakit ga, ipl wajah berapa kali, ipl muka adalah*).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "M22 IPL" | m22, m22 ipl, lumenis m22 | `m22` → m22 光子嫩肤; `m22 ipl` → English, global; `lumenis m22` → 价钱 | KEYWORD (brand): kept in Latin |
| **seoTitle** "M22 IPL Photorejuvenation Treatment Malaysia \| Kaiteki" | m22 光子嫩肤, m22 价钱, 光子嫩肤 | as above | KEYWORD: **马来西亚 M22 光子嫩肤（IPL） \| Kaiteki** (28 chars) |
| **seoDescription** | m22 光子嫩肤 价钱, ipl 脱毛, 光子嫩肤 | `ipl 脱毛` returns (原理, 永久) | KEYWORD: M22 IPL（光子嫩肤）, 强脉冲光, 脸部泛红, 色斑, 减少毛发, 免费咨询 (76 chars) |
| sections[0] "What is M22 IPL?" | m22 是什么, 光子嫩肤是什么 | `m22 是什么` → m22是什么; `光子嫩肤是什么` returns | KEYWORD: **M22 IPL（光子嫩肤）是什么？** |
| sections[1] "How M22 IPL works" | m22 原理, 光子嫩肤原理 | `m22 原理` → m22原理; `光子嫩肤原理` returns | KEYWORD: **M22 IPL 原理：光子嫩肤如何运作** |
| sections[2] "IPL or laser: what changes with broadband, filtered light?" | ipl是激光吗, ipl 和激光, 光子嫩肤和激光, 光子嫩肤 是激光吗 | all empty (only 光子嫩肤和皮秒区别) | DIRECT: **IPL 还是激光：宽光谱、经过滤的光有什么不同？** |
| sections[3] "Why is IPL used more cautiously on deeper and tanned skin?" | 光子嫩肤 晒黑, 光子嫩肤 肤色, 光子嫩肤 适合 | empty | DIRECT: **为什么 IPL 用在较深肤色和晒黑的皮肤上要更谨慎？** |
| sections[4] "Which medications and conditions rule out M22 IPL?" | 光子嫩肤 禁忌, 光子嫩肤 药物 | empty | DIRECT: **哪些药物和健康状况不适合做 M22 IPL？** |
| sections[5] "What does an IPL pulse feel like, and how many sessions are planned?" | 光子嫩肤痛吗, 光子嫩肤 几次, 光子嫩肤多久做一次 | 痛吗 / 几次 empty; **光子嫩肤多久做一次** returns and is a top suggestion of the head term | KEYWORD: **IPL 打在皮肤上是什么感觉？光子嫩肤要做几次、多久做一次？** (the body covers spacing: 每次相隔几个星期; pilot FAQ 4 precedent) |
| sections[6] "Can IPL cause burns or pigment change…?" | 光子嫩肤副作用, 光子嫩肤 烫伤, 光子嫩肤 反黑 | `光子嫩肤副作用` returns; 烫伤 / 反黑 empty | KEYWORD: **光子嫩肤副作用：IPL 会烫伤或造成色素变化吗？什么情况下比较可能发生？** |
| FAQ 1 "Is M22 IPL a laser, and does that matter…?" | ipl是激光吗, 光子嫩肤 是激光吗 | empty | DIRECT: **M22 IPL 是激光吗？这对选择疗程有影响吗？** |
| FAQ 2 "Is M22 IPL safe for darker or tanned Asian skin?" | 光子嫩肤 晒黑, 激光 深色皮肤 | empty | DIRECT: **肤色较深或晒黑的亚洲人，做 M22 IPL 安全吗？** (a question; the answer hedges) |
| FAQ 3 "How does the M22 Universal IPL handpiece differ from a single-filter IPL?" | m22 和, lumenis m22 | nothing on handpieces | DIRECT: **M22 Universal IPL 手柄和单一滤光片的 IPL 有什么不同？** |
| FAQ 4 "Will M22 IPL stop hair growing back permanently?" | ipl 脱毛 永久, m22 脱毛, 激光脱毛 | `ipl 脱毛` → **ipl 脱毛 永久**; `激光脱毛` → **激光脱毛是永久的吗**; `m22 脱毛` is Japanese | KEYWORD: **M22 IPL 脱毛是永久的吗？** The answer opens with 任何光疗都不应该被形容为永久 (negated; L-03r re-read). |

**Chinese tally (14 logged strings):** 8 KEYWORD, 6 DIRECT.

**Not usable:** `m22 超光子` / `超光子` (a newer Lumenis "Stellar M22" marketing name; this page is the M22 IPL module only), `光子嫩肤是智商税吗` (mainland slang, negative framing), `m22 光子嫩肤 好唔好` (HK), `m22 光子嫩肤 效果` / `光子嫩肤功效` (efficacy framing), `ipl脱毛仪 / 家庭用` (home devices), `m22 脱毛 効果 / 間隔` (Japanese).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** | m22, m22 ipl, m22 ipl malaysia | `m22` is noise (stud bolt, tank); `m22 ipl` → laser, treatment, price (English); "+malaysia" empty | KEYWORD (brand): kept in Latin |
| **seoTitle** | ipl photorejuvenation, photorejuvenation malaysia, rawatan ipl, ipl treatment malaysia, ipl malaysia | `ipl photorejuvenation` → treatment, cost (English); `rawatan ipl` returns itself; `ipl treatment malaysia` returns; `ipl malaysia` is cricket noise | KEYWORD: **Rawatan M22 IPL Photorejuvenation di Malaysia \| Kaiteki** (55 chars). *Photorejuvenation* kept in English, the form people type. |
| **seoDescription** | ipl pigmentasi, kemerahan muka | `ipl pigmentasi` returns (with *adalah*); `kemerahan muka` returns | KEYWORD: cahaya berdenyut berintensiti tinggi, kemerahan, pigmentasi, pengurangan bulu, konsultasi percuma (154 chars) |
| sections[0] "What is M22 IPL?" | apa itu ipl, apa itu ipl laser, apa itu m22 | `apa itu ipl laser` → treatment, ketiak, acne; `apa itu ipl` buried under *implikasi, implan*; `apa itu m22` is noise | KEYWORD (weak): **Apa itu M22 IPL?** |
| sections[1] "How M22 IPL works" | (no Malay "berfungsi" form returned for IPL) | (none) | DIRECT: **Bagaimana M22 IPL berfungsi** |
| sections[2] "IPL or laser…?" | ipl vs laser, ipl laser | English only (*ipl vs laser hair removal, ipl vs laser*) | DIRECT: **IPL atau laser: apa bezanya dengan cahaya spektrum luas yang ditapis?** |
| sections[3] deeper / tanned skin | ipl kulit gelap | empty | DIRECT: **Kenapa IPL digunakan dengan lebih berhati-hati pada kulit yang lebih gelap dan digelapkan matahari?** |
| sections[4] medications / conditions | ipl ubat, ipl hamil, ipl isotretinoin | `ipl ubat` empty; `ipl hamil` is Hamilton/Turkish; `ipl isotretinoin` English | DIRECT: **Ubat dan keadaan apa yang menjadikan M22 IPL tidak sesuai?** |
| sections[5] pulse feel / how many sessions | ipl sakit, ipl berapa kali | `ipl sakit` → *sakit ga* (ID); `ipl berapa kali` → sebulan, seminggu (mixed MY/ID; *berapa kali* itself is standard Malay) | KEYWORD: **Bagaimana rasanya denyutan IPL, dan IPL perlu buat berapa kali?** |
| sections[6] burns / pigment change | ipl kesan sampingan, ipl terbakar, ipl side effects | Malay empty; English strong | DIRECT: **Bolehkah IPL menyebabkan kulit terbakar atau perubahan pigmen, dan bila ia lebih mungkin berlaku?** |
| FAQ 1 "Is M22 IPL a laser…?" | ipl vs laser | English only | DIRECT: **M22 IPL laser ke, dan adakah itu penting semasa memilih rawatan?** |
| FAQ 2 "Safe for darker or tanned Asian skin?" | ipl kulit gelap | empty | DIRECT: **M22 IPL selamat ke untuk kulit Asia yang lebih gelap atau digelapkan matahari?** |
| FAQ 3 Universal handpiece | m22 universal ipl | nothing | DIRECT: **Apa beza alat pegang tangan M22 Universal IPL dengan IPL satu penapis?** |
| FAQ 4 "Will M22 IPL stop hair growing back permanently?" | ipl buang bulu, ipl buang bulu kekal, buang bulu kekal | IPL forms empty; `buang bulu kekal` → **buang bulu secara kekal**, ketiak/kaki secara kekal | KEYWORD: **Bolehkah M22 IPL buang bulu secara kekal?** The answer opens *Tiada rawatan berasaskan cahaya yang patut digambarkan sebagai kekal* (negated; L-03r re-read). |

**Malay tally (14 logged strings):** 6 KEYWORD, 8 DIRECT.

**Indonesian pollution seen and avoided:** *ipl muka adalah / untuk apa / zap*, *ipl sakit ga / tidak*, *ipl rumah sakit*, *ipl wajah berapa kali sebulan*, *berapa ipl kalibata city*, *photorejuvenation laser erha*, *ipl pigmentasi adalah*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| intense pulsed light (IPL) | 强脉冲光（IPL，俗称光子嫩肤） | cahaya berdenyut berintensiti tinggi (IPL) | vascular-pigment-laser, laser-hair-removal |
| broadband (light) | 宽光谱（的光） | spektrum luas | vascular-pigment-laser |
| filter | 滤光片 / 过滤 | penapis / ditapis | vascular-pigment-laser |
| hair reduction | 减少毛发 | pengurangan bulu | laser-hair-removal |
| active growth phase | 活跃生长期 | fasa pertumbuhan aktif | laser-hair-removal |
| maintenance sessions | 保养疗程 | sesi penyelenggaraan | laser-hair-removal |
| non-ablative fractional resurfacing | 非剥脱式点阵换肤 | resurfacing fraksional bukan ablatif | resurfacing-laser |
| photoageing | 光老化 | penuaan akibat cahaya matahari | new |
| photosensitising medication | 会增加光敏感的药物 | ubat yang meningkatkan kepekaan kulit terhadap cahaya | laser-hair-removal |
| lightguide | 导光头 | pemandu cahaya | new |
| fluence | 能量密度 | fluens | new |
| downtime | 恢复期 | downtime | docs/18 §6 |

## For the bilingual doctor-reviewer

1. **光子嫩肤** carries the same caveat as vascular-pigment-laser note 1: it is the common name of the device treatment, never a promised result. If compliance reads it as a claim, fall back to 强脉冲光（IPL） in the title, the description and sections[0], [1], [5], [6].
2. **"IPL is not a laser"** is kept prominent (facts: 不是激光 / *Bukan laser*), even though the treatment page this device sits in is called 血管与色素激光 / *Laser Vaskular & Pigmentasi*. That tension is in the EN as well.
3. **ExpertFilters™, SapphireCool™, OPT™, ResurFX™** stay in Latin with the trademark marks, as in the EN.
4. **"Lower effective fluence"** is 较低的有效能量密度 / *fluens berkesan yang lebih rendah*. Confirm the physics wording.
5. **FAQ 2 asks "safe"** (安全吗 / *selamat ke*) because the EN does. It is a question, and the answer hedges ("generally aimed at…", "assessed individually"); nothing says IPL is safe.
6. **zh sections[5] adds 多久做一次**, covered by the body ("每次相隔几个星期"), following the pilot.
