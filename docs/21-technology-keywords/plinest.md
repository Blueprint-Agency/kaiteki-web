# 21. Technology keyword log: Plinest/Newest (`/technology/plinest`)

**Date:** 2026-10-14 · Follows the pilot format in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/plinest.json`, `content/i18n/technology/ms/plinest.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/plinest.json`.
**Inputs:** EN record for `plinest`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `skin-booster` treatment page and the `rejuran` device page from this batch.

## Method

- **Client rule, volume proxy and decision rules:** as in `onda-coolwaves.md` and `profhilo.md`.
- **Probes:** shared batch for the five skin-booster products, 133 zh and 145 ms. Raw dumps: `C:/tmp/sbdev-ac-zh*.json`, `C:/tmp/sbdev-ac-ms*.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. All body copy is a direct, faithful translation.
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `reviewedBy`, `lastReviewed` (no `device` in this record); the names Plinest, Newest, Mastelli, PN-HPT™, Rejuran, Pharma Research.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Plinest/Newest" | plinest, plinest newest, newest 水光针 | `plinest` → 是什么, **plinest水光针**, 功效, eye; `plinest newest` returns (English); `newest 水光针` returns | KEYWORD (brand): **Plinest/Newest**, kept as in EN |
| **seoTitle** "Plinest/Newest Skin Booster Injectable Malaysia \| Kaiteki" | plinest 水光针, newest 水光针, plinest 马来西亚 | both 水光针 forms return; `plinest 马来西亚` empty | KEYWORD: **Plinest/Newest 水光针 \| Kaiteki** (28 chars). 马来西亚 does not fit with both product names inside 30; it moves to the description (skin-booster precedent). |
| **seoDescription** | plinest 功效, 多核苷酸 | `plinest 功效` returns; `多核苷酸` → 作用 | KEYWORD: Plinest, Newest, Mastelli, PN-HPT, 多核苷酸, 马来西亚, 水光针, 肤质, 免费咨询 (82 chars) |
| sections[0].heading "What is Plinest/Newest?" | plinest 是什么 | 2nd `plinest` suggestion; returns | KEYWORD: **Plinest/Newest 是什么？** |
| sections[1].heading "How PN-HPT polynucleotides work" | plinest 原理, 多核苷酸 | `plinest 原理` empty; `多核苷酸` → 多核苷酸 作用 | KEYWORD (partial): **PN-HPT 多核苷酸的作用原理** (same form as rejuran sections[1]) |
| sections[2].heading "What are Plinest and Newest for, if not volume?" | plinest 功效, plinest 填充 | `plinest 功效` returns but is efficacy framing; 填充 empty | DIRECT: **不是为了增加容量，Plinest 和 Newest 是用来做什么的？** |
| sections[3].heading "Where are Plinest and Newest injected?" | plinest 打哪里, plinest 部位 | empty | DIRECT: **Plinest 和 Newest 打在哪些部位？** |
| sections[4].heading "What should you declare before?" | plinest 过敏, plinest 鳟鱼 | empty | DIRECT: **打 Plinest 或 Newest 之前要说明什么？** |
| sections[5].heading "During a session, and after it?" | plinest 恢复期 | empty | DIRECT: **打 Plinest 或 Newest 的过程是怎样的？之后又会怎样？** |
| sections[6].heading "Side effects of Plinest and Newest?" | plinest 副作用 | returns | KEYWORD: **Plinest 和 Newest 有什么副作用？** |
| FAQ 1 "Difference between Plinest and Newest?" | plinest 和 newest 区别, plinest newest | Chinese form empty; `plinest newest` returns (English) | KEYWORD (pattern): **Plinest 和 Newest 有什么区别？** |
| FAQ 2 "How does Plinest differ from Rejuran?" | plinest rejuran, plinest 和 rejuran | `plinest rejuran` → plinest vs rejuran (which is better, side effects, price); Chinese form empty | KEYWORD (pattern): **Plinest 和 Rejuran 有什么区别？** |
| FAQ 3 "Will it add volume to my face?" | plinest 填充 | empty | DIRECT: **Plinest 或 Newest 会让脸部增加容量吗？** |
| FAQ 4 "Can it be used around the eyes?" | plinest 眼睛, plinest 眼周, plinest eye | Chinese empty; `plinest eye` in the base list (English) | DIRECT: **Plinest 可以用在眼周吗？** (names the product so the question stands alone; the meaning is unchanged) |

**Chinese tally (14 logged strings):** 8 KEYWORD, 6 DIRECT.

**Not usable:** `plinest hair` (a different Mastelli product, not in the EN). 鳟鱼针 or any fish nickname: not used.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Plinest/Newest" | plinest, plinest malaysia, plinest newest | `plinest` → injection, **plinest vs newest**; `plinest malaysia` → price | KEYWORD (brand): **Plinest/Newest** |
| **seoTitle** | plinest malaysia, plinest skin booster, plinest price malaysia | `plinest malaysia` → price, **injection price malaysia**; `plinest skin booster` returns | KEYWORD: **Suntikan Skin Booster Plinest/Newest di Malaysia \| Kaiteki** (58 chars) |
| **seoDescription** | newest skin booster | returns itself | KEYWORD: suntikan, polinukleotida, PN-HPT, Mastelli, skin booster, Kaiteki, konsultasi percuma (147 chars) |
| sections[0].heading "What is Plinest/Newest?" | apa itu plinest | returns | KEYWORD: **Apa itu Plinest/Newest?** |
| sections[1].heading "How PN-HPT polynucleotides work" | plinest how it works, polinukleotida | empty / noise | DIRECT: **Bagaimana polinukleotida PN-HPT berfungsi** |
| sections[2].heading "What are they for, if not volume?" | plinest untuk apa | returns | KEYWORD: **Plinest dan Newest untuk apa, jika bukan untuk volum?** |
| sections[3].heading "Where injected?" | plinest where to inject | → injection technique, price (English) | DIRECT: **Di mana Plinest dan Newest disuntik?** |
| sections[4].heading "What to declare before?" | plinest fish allergy | empty | DIRECT: **Apa yang perlu dimaklumkan sebelum Plinest atau Newest?** |
| sections[5].heading "During a session, and after?" | plinest downtime, plinest berapa kali | downtime English only; *berapa kali* empty | DIRECT: **Apa yang berlaku semasa sesi Plinest atau Newest, dan selepasnya?** |
| sections[6].heading "Side effects?" | plinest kesan sampingan, plinest side effects | Malay empty; English strong | DIRECT: **Apakah kesan sampingan Plinest dan Newest?** |
| FAQ 1 "Plinest vs Newest?" | plinest vs newest, plinest newest beza | `plinest vs newest` strong; *beza* empty | KEYWORD (pattern): **Apa beza Plinest dan Newest?** |
| FAQ 2 "Plinest vs Rejuran?" | plinest vs rejuran | strong (which is better, side effects, price) | KEYWORD (pattern): **Apa beza Plinest dan Rejuran?** |
| FAQ 3 "Will it add volume?" | (no Malay form) | none | DIRECT: **Plinest atau Newest akan menambah volum pada muka saya ke?** |
| FAQ 4 "Around the eyes?" | plinest bawah mata, plinest mata, plinest eye | Malay empty; `plinest eye` strong (English) | DIRECT: **Plinest boleh digunakan di sekitar mata ke?** |

**Malay tally (14 logged strings):** 7 KEYWORD, 7 DIRECT.

**Indonesian pollution seen and avoided:** *plinest skin booster adalah*, *plinest skin booster harga* (bare *harga*).

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| polynucleotide | 多核苷酸 | polinukleotida | skin-booster |
| trout-derived | 来自鳟鱼 | daripada ikan trout | skin-booster |
| mannitol | 甘露醇 | manitol | new |
| antioxidant, free-radical-scavenging | 抗氧化、清除自由基 | antioksidan yang memerangkap radikal bebas | new |
| elasticity | 弹性 | keanjalan | skin-booster |
| periorbital area | 眼周部位 | kawasan sekitar mata | new |
| poly-lactic acid | 聚乳酸 | asid poli-laktik | bio-stimulator |
| presentations (product formats) | 规格 | persembahan | new |

## For the bilingual doctor-reviewer

1. **seoTitle (zh)** drops 马来西亚 to keep both product names inside 30 chars. Alternative with geo: 马来西亚 Plinest 水光针 \| Kaiteki (26 chars).
2. **"Presentations intended for particular areas"** is 针对特定部位的规格 / *persembahan untuk kawasan tertentu*. In Malay, *persembahan* is the pharmaceutical sense; confirm, or use *bentuk produk*.
3. **PN-HPT™** keeps its English expansion; zh adds a gloss (高度纯化多核苷酸技术).
4. **"Neither is presented here as superior"** is 这里并不认为哪一个比较优越 / *Tiada satu pun dikatakan lebih baik di sini*. No superlative in either locale.
