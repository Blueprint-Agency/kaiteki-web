# 19. Concern keyword log: Birthmark (`/concerns/birthmark`)

**Date:** 2026-10-14 · Follows the pilot method in `acne.md`.
**Outputs:** `content/i18n/concerns/zh/birthmark.json`, `content/i18n/concerns/ms/birthmark.json` (same shape as the EN record).
**Inputs:** EN record for `birthmark`, `docs/18-trilingual-keyword-map.md` §7 (avoid list). **Birthmark is not in docs/18 §5**, so the display name was researched here (first rows below).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, with `hl=zh-CN` for Chinese and `hl=ms` for Malay. Same HAS VOLUME / NO VOLUME and KEYWORD / DIRECT rules as the pilot. Skew signs: *香港 / lihkg / dcard / 雷射* for Chinese, *bisa / apakah / artinya / wajah / primbon* for Malay.
- **Superstition noise:** birthmark AC in both languages is heavily fortune-telling led (胎记前世, 胎记位置意义, 红色胎记好命; *tanda lahir menurut islam*, *maksud tanda lahir di tangan kanan*, *primbon*, *toh*). Those forms count as **not relevant** to a clinical page.
- **Probes:** 88 zh and 79 ms, in two batches per language. Raw dumps are in the session scratchpad, not in the repo.
- **Scope:** only search-relevant strings are logged. All body copy is a direct, faithful translation. This record **does** have `seeDoctor.heading`.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Birthmark" (not in docs/18 §5) | 胎记, 胎记是什么, 胎记治疗, 胎记 医美 | `胎记` → 胎记是怎么形成的, 胎记是什么, 胎记会消失吗, 胎记形成原因 (plus 前世 / 代表什么 noise); `胎记治疗`, `胎记 医美` return | KEYWORD: **胎记**. It's the only everyday term; no competing form exists. |
| **seoTitle** "Birthmark Removal Assessment in Malaysia \| Kaiteki" | 胎记去除, 去胎记, 激光去胎记, 胎记激光, 胎记 马来西亚, 去胎记价钱, 胎记怎么去除, 胎记 皮秒 | `去胎记` → 方法, lihkg, 香港; `胎记去除` → 香港; `激光去胎记` → 香港; `胎记怎么去除`, `胎记 皮秒` return; "+马来西亚" and price forms empty | KEYWORD: **马来西亚胎记去除评估与激光疗程 \| Kaiteki** (25 chars). 胎记去除 mirrors the EN "removal assessment"; demand is HK-skewed but the term is neutral. |
| **seoDescription** | (same family) | as above | KEYWORD: 胎记, 去除胎记, 激光疗程, 免费咨询 (78 chars) |
| sections[0].heading "What is a birthmark?" | 胎记是什么, 什么是胎记 | `胎记是什么` is in the `胎记` top 8 | KEYWORD: **胎记是什么？** |
| sections[1].heading "How birthmarks form" | 胎记怎么形成, 胎记形成原因, 胎记的成因, 为什么会有胎记 | `胎记是怎么形成的` is the **3rd** `胎记` suggestion; `胎记形成原因`, `为什么会有胎记` return | KEYWORD: **胎记是怎么形成的？** |
| sections[2].heading "Birthmarks that are usually left alone" | 胎记会消失吗, 宝宝胎记会消失吗 | adjacent forms return, but none asks "which don't need treatment" | DIRECT: **通常不需要处理的胎记** |
| sections[3].heading "Birthmarks in children and adults" | 婴儿胎记, 小孩胎记, 宝宝胎记, 胎记 成人 | `婴儿胎记` → 会消失吗, 原因, 蒙古斑; `宝宝胎记` → 原因, 位置, 会消失吗; `小孩胎记` returns; adult form empty | KEYWORD: **宝宝、小孩和成人的胎记** |
| drivers.heading "What a doctor looks at first" | n/a | n/a | DIRECT: **医生首先会看什么** |
| variant.heading "Which type is it?" | 胎记种类, 胎记类型, 胎记有哪些种类 | `胎记种类` returns; the others empty | KEYWORD: **胎记种类：是哪一种？** |
| jumpNav "Which type is it?" | as above | as above | KEYWORD: **胎记种类** |
| tab "Pigmented" | 色素型胎记, 色素性胎记 | `色素型胎记` returns; `色素性胎记` empty | KEYWORD: **色素型** / **色素型胎记** |
| tab "Vascular" | 血管型胎记, 血管性胎记 | both return | KEYWORD: **血管型** / **血管型胎记** |
| tab "Monitor" / "Marks to watch, not laser" | n/a | n/a | DIRECT: **需观察** / **需要观察、不适合激光的痕迹** |
| sub-type terms (body, but checked) | 太田痣, 蒙古斑, 咖啡斑, 咖啡牛奶斑, 鲜红斑痣, 葡萄酒色斑, 血管瘤, 婴儿血管瘤, 草莓血管瘤, 先天性痣, 先天痣, 青色胎记 | `太田痣` → 治疗, 激光, 皮秒; `蒙古斑` → 是什么, 会消失吗; `咖啡牛奶斑` → 会消失吗, 越长越多; `咖啡斑` → 咖啡斑胎记, 神经纤维瘤; `鲜红斑痣` → 治疗; `葡萄酒色斑` → 治疗费用; `婴儿血管瘤` → 看什么科, 会消失吗; `先天性痣` returns | Terms used: **太田痣, 蒙古斑, 咖啡牛奶斑, 鲜红斑痣（葡萄酒色斑）, 婴儿血管瘤, 先天性痣**; 鲑鱼斑（鹳咬痕）has no AC and is a direct clinical term |
| locationBlock.heading "Where it appears" | 胎记位置, 脸上胎记, 眼睛周围胎记, 屁股胎记 | `胎记位置` → 意义, 前世手臂, 前世屁股 (superstition only); `脸上胎记` → 去除, 雷射 (but also 前世, 面相); `屁股胎记` → 前世 | DIRECT: **胎记常出现的位置** (the 位置 demand is fortune-telling, not clinical) |
| jumpNav "Where it appears" | as above | as above | DIRECT: **出现位置** |
| seeDoctor.heading "When to see a doctor" | 胎记什么时候看医生, 胎记 看医生 | nothing | DIRECT: **什么时候应该看医生** (matches `concern-ui.ts`) |
| jumpNav "When to see a doctor" | as above | as above | DIRECT: **什么时候看医生** |
| jumpNav "Treatment" | (pilot) | n/a | DIRECT: **疗程** |
| jumpNav "Risks" | (pilot) | n/a | DIRECT: **风险** |
| jumpNav "Cost" | 去胎记价钱, 葡萄酒色斑治疗费用 | price forms empty except the port-wine one; docs/18 §6 term | KEYWORD (term choice): **价钱** |
| jumpNav "FAQ" | (pilot) | n/a | DIRECT: **常见问题** |
| ctaMid.heading "Pigment or blood vessels?" | 色素型胎记, 血管型胎记 | both return | DIRECT (conversion copy): **不确定你的胎记是色素型还是血管型？** (uses the AC terms) |
| ctaHeading "Not sure which type you have?" | n/a | n/a | DIRECT: **不确定是哪一种胎记？** |
| FAQ 1 "Can birthmarks be removed?" | 胎记可以去掉吗, 胎记能去掉吗, 胎记可以去除吗, 胎记怎么去除 | `胎记可以去除吗` returns exactly | KEYWORD: **胎记可以去除吗？** (answer: depends on type; lightening, not clearance) |
| FAQ 2 "Are birthmarks dangerous?" | 胎记危险吗, 胎记有危险吗, 胎记危害, 胎记会癌变吗, 胎记会变成癌吗, 胎记会变大吗, 胎记变大 | danger/cancer forms empty; `胎记会变大吗` and `胎记变大` return (a different question) | DIRECT: **胎记危险吗？** |
| FAQ 3 "Why different treatments?" | 胎记为什么不同 | nothing | DIRECT: **为什么不同的胎记需要不同的治疗？** |
| FAQ 4 "Will my child's birthmark fade on its own?" | 胎记会消失吗, 宝宝胎记会消失吗, 婴儿胎记, 蒙古斑会消失吗 | `宝宝胎记会消失吗` returns exactly; `胎记会消失吗` and `婴儿胎记会消失吗` are in the top lists | KEYWORD: **宝宝的胎记会自己消失吗？** |
| FAQ 5 "How many sessions?" | 胎记要做几次激光, 去胎记要几次, 胎记 激光 几次, 太田痣 几次, 太田痣激光几次 | nothing | DIRECT: **胎记激光要做几次？** |
| FAQ 6 "Does birthmark laser hurt?" | 胎记激光痛吗, 激光去胎记痛吗, 胎记 痛 | only `胎记 痛` returns itself (ambiguous intent) | DIRECT: **胎记激光会痛吗？** (no 无痛 anywhere) |
| FAQ 7 "Can a birthmark come back?" | 胎记会复发吗, 激光去胎记会复发吗, 胎记 复发, 咖啡斑 复发 | nothing | DIRECT: **激光后胎记会复发吗？** |
| FAQ 8 "Can a mole I was born with be lasered off?" | 先天性痣, 先天痣, 先天痣激光, 痣可以激光吗, 激光点痣, 天生的痣, 出生就有的痣 | `先天性痣` and `先天痣` return; `激光点痣` → 注意事项, 会留疤吗, 香港; colloquial 天生/出生 forms empty | KEYWORD: **先天性痣可以用激光去掉吗？** |

**Chinese tally (31 logged strings):** 14 KEYWORD, 17 DIRECT. CTA headings counted as DIRECT; the sub-type term row isn't counted.

**Not usable:** `胎记 马来西亚`, `太田痣 马来西亚`, `去胎记价钱`, every 复发 / 几次 form. Removal demand is **HK-skewed** (香港, lihkg) and some is Taiwan-skewed (黑色胎记雷射dcard); 雷射 is never used.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Birthmark" (not in docs/18 §5) | tanda lahir, tompok lahir, toh lahir, birthmark, birthmark in malay | `tanda lahir` → merah, putih, bayi, biru (plus *menurut islam* noise); `buang tanda lahir` → di muka, **di hospital kerajaan**, klinik, harga (clearly MY); `tompok lahir` empty; `toh` is Javanese superstition; `birthmark in malay` returns (people look up the Malay word) | KEYWORD: **Tanda Lahir**. The only Malay term with volume; MY-specific signals in the `buang tanda lahir` family. |
| **seoTitle** | buang tanda lahir, rawatan tanda lahir, laser tanda lahir, rawatan laser tanda lahir, kos buang tanda lahir, tanda lahir malaysia, birthmark removal malaysia | `buang tanda lahir` → klinik, rawatan, harga, di hospital kerajaan; `rawatan tanda lahir` → rawatan buang tanda lahir; `laser tanda lahir` → berapa kali, di wajah, pada bayi | KEYWORD: **Penilaian Buang Tanda Lahir di Malaysia \| Kaiteki** (49 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: tanda lahir, buang tanda lahir, doktor (157 chars) |
| sections[0].heading "What is a birthmark?" | apa itu tanda lahir | returns (→ merah, putih, vaskular) | KEYWORD: **Apa itu tanda lahir?** |
| sections[1].heading "How birthmarks form" | punca tanda lahir, kenapa ada tanda lahir | `punca tanda lahir` → pada bayi, di muka (MY: *punca*); `kenapa ada tanda lahir` → hitam, merah, pada bayi | KEYWORD: **Punca tanda lahir: bagaimana ia terbentuk** |
| sections[2].heading "Usually left alone" | tanda lahir hilang sendiri | returns (an Indonesian variant also appears) | DIRECT: **Tanda lahir yang biasanya dibiarkan sahaja** (the EN is about leaving alone, which is broader than fading) |
| sections[3].heading "In children and adults" | tanda lahir bayi, tanda lahir anak, tanda lahir kanak-kanak, tanda lahir dewasa | `tanda lahir bayi` strong; `tanda lahir dewasa` → pada orang dewasa, muncul saat dewasa; `kanak-kanak` empty; `anak` is superstition (indigo) | KEYWORD: **Tanda lahir pada bayi, kanak-kanak dan orang dewasa** |
| drivers.heading | n/a | n/a | DIRECT: **Apa yang doktor periksa dahulu** |
| variant.heading "Which type is it?" | jenis tanda lahir | `jenis tanda lahir` → pada bayi, di wajah, yang berbahaya, merah (some ID: *bisa*) | KEYWORD: **Jenis tanda lahir: yang mana satu?** |
| jumpNav | as above | as above | KEYWORD: **Jenis tanda lahir** |
| tab "Pigmented" | tanda lahir pigmen, tanda lahir berpigmen | both return (→ tanda lahir pigmentasi) | KEYWORD: **Berpigmen** / **Tanda lahir berpigmen** |
| tab "Vascular" | tanda lahir vaskular | returns (→ adalah, apakah berbahaya; ID-leaning but the term is neutral) | KEYWORD: **Vaskular** / **Tanda lahir vaskular** |
| tab "Monitor" | n/a | n/a | DIRECT: **Pantau** / **Tanda untuk dipantau, bukan dilaser** |
| sub-type terms (body, but checked) | tompok mongolia, mongolian spot, nevus of ota, naevus of ota, tompok café au lait, cafe au lait, port wine stain, hemangioma, hemangioma bayi, tahi lalat sejak lahir, tahi lalat lahir | `tompok mongolia` and `tompok café au lait` return themselves; `mongolian spot bayi` (ID: apakah bisa); `nevus of ota` English only; `port wine stain` English only; `hemangioma` → maksud, bahasa melayu, pada bayi; `tahi lalat sejak lahir` returns | Terms used: **tompok Mongolia, tompok café-au-lait, nevus Ota (naevus of Ota), tanda port-wine (port-wine stain), hemangioma bayi, tahi lalat sejak lahir (kongenital)**; *tompok salmon (stork bite)* is direct |
| locationBlock.heading "Where it appears" | tanda lahir di mana, tanda lahir di muka, tanda lahir di pipi, tanda lahir di mata, tanda lahir punggung, tanda lahir di belakang leher | location forms are superstition-led (*artinya, menurut islam, maksud*); `tanda lahir di mana` returns itself only | DIRECT: **Di mana tanda lahir muncul** |
| jumpNav "Where it appears" | as above | as above | DIRECT: **Di mana ia muncul** |
| seeDoctor.heading | bila perlu jumpa doktor, jumpa doktor tanda lahir, tanda lahir doktor | only the generic `bila perlu jumpa doktor` (→ jika hamil) | DIRECT: **Bila perlu berjumpa doktor** (matches `concern-ui.ts`) |
| jumpNav "When to see a doctor" | as above | as above | DIRECT: **Bila perlu jumpa doktor** |
| jumpNav "Treatment" | rawatan tanda lahir | returns | KEYWORD (term): **Rawatan** |
| jumpNav "Risks" | n/a | n/a | DIRECT: **Risiko** |
| jumpNav "Cost" | kos buang tanda lahir, harga buang tanda lahir | `kos` form empty; `harga buang tanda lahir` is in the `buang tanda lahir` list. docs/18 §6 uses *kos* for the label | KEYWORD (term): **Kos** |
| jumpNav "FAQ" | n/a | n/a | DIRECT: **Soalan lazim** |
| ctaMid.heading | n/a | n/a | DIRECT: **Tak pasti sama ada tanda lahir anda jenis pigmen atau saluran darah?** |
| ctaHeading | n/a | n/a | DIRECT: **Tak pasti jenis yang mana?** |
| FAQ 1 "Can birthmarks be removed?" | tanda lahir boleh hilang ke, tanda lahir hilang ke, tanda lahir boleh dibuang, tanda lahir boleh dibuang ke, boleh ke buang tanda lahir | `tanda lahir boleh hilang ke` returns exactly (MY *…ke?* form); the *dibuang* forms are empty | KEYWORD: **Tanda lahir boleh hilang ke? Boleh dibuang?** (answer: depends on type, lightening rather than clearance) |
| FAQ 2 "Are birthmarks dangerous?" | tanda lahir bahaya, tanda lahir berbahaya ke, tanda lahir kanser, tanda lahir membesar | `tanda lahir bahaya` → yang bahaya, merah apakah bahaya (mixed); `tanda lahir membesar` returns | KEYWORD: **Tanda lahir bahaya ke?** |
| FAQ 3 "Why different treatments?" | n/a | n/a | DIRECT: **Kenapa tanda lahir yang berbeza memerlukan rawatan yang berbeza?** |
| FAQ 4 "Will my child's birthmark fade?" | tanda lahir hilang sendiri, tanda lahir bayi hilang, tanda lahir bayi boleh hilang ke | `tanda lahir hilang sendiri` returns; `tanda lahir bayi` → bisa hilang (ID) | KEYWORD: **Tanda lahir anak saya akan hilang sendiri ke?** |
| FAQ 5 "How many sessions?" | laser tanda lahir berapa kali, tanda lahir berapa sesi | `laser tanda lahir berapa kali` returns exactly (also 5th in `laser tanda lahir`) | KEYWORD: **Laser tanda lahir perlu berapa kali?** |
| FAQ 6 "Does birthmark laser hurt?" | tanda lahir sakit ke, laser tanda lahir sakit | `apakah laser tanda lahir sakit` (ID form, but the demand is real) | KEYWORD: **Laser tanda lahir sakit ke?** (MY *…ke?* form; no *tanpa sakit*) |
| FAQ 7 "Can a birthmark come back?" | tanda lahir datang balik, tanda lahir kembali | nothing | DIRECT: **Tanda lahir boleh datang balik selepas laser?** |
| FAQ 8 "Mole I was born with lasered off?" | tahi lalat sejak lahir, tahi lalat lahir, buang tahi lalat laser, tahi lalat sejak lahir boleh laser, buang tahi lalat sejak lahir | `tahi lalat sejak lahir` returns; `buang tahi lalat laser` → kos, harga (MY *kos*) | KEYWORD: **Tahi lalat sejak lahir boleh dibuang dengan laser?** (answer: no, not for appearance) |

**Malay tally (31 logged strings):** 18 KEYWORD, 13 DIRECT. CTA headings counted as DIRECT; the sub-type term row isn't counted.

**Indonesian / superstition pollution seen and avoided:** tanda lahir bayi bisa hilang, apakah tanda lahir bahaya, tanda lahir di muka artinya, tanda lahir menurut islam / primbon jawa, toh tanda lahir, tanda lahir anak indigo. **Locale-only FAQ candidate (not added):** `hukum buang tanda lahir` (religious ruling on removal) is a real MY query, like `hukum buang tatu` in docs/18 §5.2. It needs client sign-off, and it should point to a religious authority rather than give a ruling.

## For the bilingual doctor-reviewer

1. **Display names (new, not in docs/18 §5):** **胎记** and **Tanda Lahir**. Evidence is above. Please add them to docs/18 §5 if you agree.
2. **Clinical terms (zh):** 咖啡牛奶斑 (preferred over 咖啡斑, which is also widely used), 太田痣, 蒙古斑（先天性真皮黑素细胞增多症）, 鲜红斑痣（葡萄酒色斑）, 鲑鱼斑（鹳咬痕）, 婴儿血管瘤, 先天性痣. Please confirm, especially 鲑鱼斑 / 鹳咬痕, which have no AC.
3. **Clinical terms (ms):** *tompok café-au-lait*, *nevus Ota*, *tompok Mongolia*, *melanositosis dermal kongenital*, *tanda port-wine (port-wine stain)*, *tompok salmon (stork bite)*, *hemangioma bayi*, *tahi lalat sejak lahir (kongenital)*. There is no settled Malay term for port-wine stain, so the English is kept in brackets. Confirm.
4. **Referrals to specialists** use 皮肤科专科医生 / *pakar dermatologi* and 儿科专科医生 / *pakar pediatrik*. These always refer patients **elsewhere** and never describe Kaiteki. The lint raises 3 L-03r warnings on 皮肤科 in zh (sections[2].list[3], variant.tabs[2].body, faqs[7].a). All three are referrals.
5. **"Laser cannot promise complete removal"** = 激光不能承诺完全去除任何胎记 / *Laser tidak dapat menjanjikan penyingkiran sepenuhnya*. *hilang sepenuhnya* was avoided, because the lint bans it even when negated.
6. **seoTitle uses 胎记去除 / buang tanda lahir** (EN: "Removal Assessment"). Both keep the "assessment" framing, and every answer says lightening rather than clearance. Confirm this is acceptable under MAB.
7. **Malay FAQ 1** leads with *boleh hilang ke?* (the AC form) before *Boleh dibuang?*. The answer is unchanged and hedged.
8. **Pain FAQ:** "snapping" = 弹跳或刺痛 / *rasa seperti dipetik atau pedih*. No 无痛 / *tanpa sakit*.
9. **Before/after captions** follow the pilot: 之前与之后 / *sebelum dan selepas*.

## Re-sync 2026-10-14 (English rewrite)

18 blanks per language. None of them is a search-relevant field (no seoTitle, seoDescription, name, heading, tab title, compare column, FAQ question or jumpNav label was reworded), so no Autocomplete probes were run. The keyword decisions above stand unchanged.

### Chinese (zh)

| English | probes | evidence | KEYWORD/DIRECT |
|---|---|---|---|
| (no search-relevant blanks) | n/a | n/a | n/a |

Body blanks translated directly: **18** (leadAnswer, sections body[1], drivers item 1, variant intro, two location cards, ctaMid body, pico and vascular treatmentWhy bodies, firstVisit intro and step 2, risks[1], costFactors intro, FAQ answers 1, 2, 3, 5, 7). Terms kept: 咖啡牛奶斑, 太田痣, 蒙古斑, 鲜红斑痣, 鲑鱼斑, 血管瘤, 色素型/血管型, 炎症后色素沉着, 价钱.

### Malay (ms)

| English | probes | evidence | KEYWORD/DIRECT |
|---|---|---|---|
| (no search-relevant blanks) | n/a | n/a | n/a |

Body blanks translated directly: **18** (same paths as zh). Terms kept: tompok café-au-lait, nevus Ota, tompok Mongolia, tanda port-wine, tompok salmon, hemangioma, berpigmen/vaskular, hiperpigmentasi pasca-radang, tengkuk, Harga.

### Reviewer notes

1. **New pregnancy line (sections body[1]):** 胎记不是父母在怀孕期间做了或没做什么而造成的 / *Tanda lahir tidak disebabkan oleh apa-apa yang ibu bapa lakukan atau tidak lakukan semasa mengandung.* Faithful to the EN; please confirm it reads as reassurance, not a medical claim.
2. **leadAnswer** now lists the subtypes in brackets, using the page's existing names for each.
3. The two L-03r warnings on zh/birthmark (皮肤科 in variant tab 3 and FAQ 8) are on unchanged strings and are dermatologist referrals, which are allowed.
