# 21. Technology keyword log: Morpheus8 (`/technology/morpheus8`)

**Date:** 2026-10-14 · Device & injectable localisation round (format: `onda-coolwaves.md`).
**Outputs:** `content/i18n/technology/zh/morpheus8.json`, `content/i18n/technology/ms/morpheus8.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/morpheus8.json`.
**Inputs:** EN record for `morpheus8`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `microneedling` treatment page and the `acne-scars`, `enlarged-pores`, `face-lifting` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`, read as in the pilot.
- **Probes (shared batch with oligio, sylfirm-x, potenza):** 25 + 14 zh (incl. generic 黄金微针 forms) and 25 + 5 ms for this device. Raw dumps: `C:/tmp/rfdev-ac-zh.json`, `C:/tmp/rfdev-ac-zh2.json`, `C:/tmp/rfdev-ac-ms.json`, `C:/tmp/rfdev-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, the seven section headings, the four FAQ questions. All body copy (including costFactors.outro) is a direct, faithful translation.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; Morpheus8, InMode, SCALE, BURST, the tip names (Burst Prime, Burst, Burst Resurfacing, Burst Deep), Body platform, 3D Smart Frame.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Morpheus8" | morpheus8, morpheus8 中文 | `morpheus8` → 中文, 价格, 香港, 凹凸洞, 好唔好 (HK), **morpheus8是什么**, 效果 | KEYWORD (brand): **Morpheus8** |
| **seoTitle** "Morpheus8 RF Microneedling Treatment Malaysia \| Kaiteki" | morpheus8 马来西亚, morpheus8 黄金微针 | `morpheus8 黄金微针` returns; `morpheus8 马来西亚` empty | KEYWORD: **马来西亚 Morpheus8 黄金微针 \| Kaiteki** (29 chars) |
| **seoDescription** | morpheus8 效果, morpheus8 松弛, morpheus8 深度 | `效果` returns; 松弛/深度 empty | KEYWORD: Morpheus8, 皮下层, 点阵射频微针（黄金微针）, 紧致度, 肤质, 免费咨询 (76 chars) |
| sections[0].heading "What is Morpheus8?" | morpheus8 是什么 | returns (also under `morpheus8`) | KEYWORD: **Morpheus8 是什么？** |
| sections[1].heading "How the Burst technology works" | morpheus8 原理, morpheus8 burst | `原理` empty; `burst` → English (before and after, cost) | DIRECT: **Morpheus8 的 Burst 技术如何运作** |
| sections[2].heading "Why does Morpheus8 reach below the skin, into the fat layer?" | morpheus8 深度, morpheus8 脂肪, morpheus8 深层 | empty | DIRECT: **为什么 Morpheus8 能到达皮肤底下的脂肪层？** |
| sections[3].heading "Is Morpheus8 a substitute for a surgical lift?" | morpheus8 手术, morpheus8 提拉, morpheus8 拉皮, morpheus8 下垂, 黄金微针 下垂 | all empty; `黄金微针 拉提` returns but 拉提 is Taiwanese (docs/18 §7.1) | DIRECT: **Morpheus8 能代替手术提拉吗？** |
| sections[4].heading "Who should avoid Morpheus8, and what must you declare?" | morpheus8 禁忌, 黄金微针 禁忌 | empty | DIRECT: **哪些人应该避免做 Morpheus8？你必须说明什么？** |
| sections[5].heading "What does a session involve, and how many days of redness…?" | morpheus8 恢复期, morpheus8 恢复, morpheus8 泛红, 黄金微针 几天 | Morpheus8 forms empty; generic `黄金微针 恢复期`, `黄金微针 泛红` return but don't carry the device | DIRECT: **做 Morpheus8 的过程是怎样的？泛红要预留几天？** |
| sections[6].heading "What are the risks of Morpheus8, especially at deeper settings?" | morpheus8 副作用, morpheus8 风险 | `副作用` returns; `风险` empty | KEYWORD: **Morpheus8 有什么副作用和风险，尤其是较深的参数？** |
| FAQ 1 "How deep does Morpheus8 go compared with standard RF microneedling?" | morpheus8 深度 | empty | DIRECT: **和一般射频微针相比，Morpheus8 能做到多深？** |
| FAQ 2 "Will Morpheus8 tighten sagging skin without surgery?" | morpheus8 下垂, morpheus8 松弛 | empty | DIRECT: **Morpheus8 能不靠手术紧致下垂的皮肤吗？** |
| FAQ 3 "Is Morpheus8 safe for darker skin tones?" | morpheus8 深肤色, 黄金微针 深肤色 | empty | DIRECT: **较深的肤色做 Morpheus8 安全吗？** (a question; the answer keeps the pigment-change caveat) |
| FAQ 4 "How much downtime should I plan for after Morpheus8?" | morpheus8 恢复期, morpheus8 几天 | empty | DIRECT: **做完 Morpheus8 要预留多少恢复期？** |

**Chinese tally (14 logged strings):** 5 KEYWORD, 9 DIRECT. Chinese demand for Morpheus8 is thin beyond 是什么 / 副作用 / 效果, and the rest is HK Cantonese.

**Not usable:** `morpheus8 凹凸洞`, `好唔好`, `香港` (HK Cantonese); `morpheus8 价格` (no price on the page); `morpheus8 痛` returns, but the EN has no pain heading.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Morpheus8" | morpheus8 | → treatment, malaysia price, vs ultherapy (English) | KEYWORD (brand): **Morpheus8** |
| **seoTitle** | morpheus8 malaysia, morpheus8 treatment, rawatan morpheus8, morpheus8 di malaysia | `morpheus8 malaysia` → **malaysia price**, malaysia; Malay forms empty | KEYWORD: **Rawatan RF Microneedling Morpheus8 di Malaysia \| Kaiteki** (56 chars) |
| **seoDescription** | (title family) | as above | KEYWORD: Morpheus8, RF microneedling fraksional, bawah dermis, Kaiteki, ketegangan, tekstur, konsultasi (156 chars) |
| sections[0].heading "What is Morpheus8?" | apa itu morpheus8 | → **apa itu morpheus 8** | KEYWORD: **Apa itu Morpheus8?** |
| sections[1].heading | morpheus8 burst, morpheus8 how it works | English only | DIRECT: **Bagaimana teknologi Burst berfungsi** |
| sections[2].heading | morpheus8 fat, morpheus8 lemak, morpheus8 depth | English only (`fat loss face` is a claim the EN doesn't make); *lemak* empty | DIRECT: **Kenapa Morpheus8 sampai ke bawah kulit, hingga ke lapisan lemak?** |
| sections[3].heading | morpheus8 vs facelift, morpheus8 surgery, morpheus8 pembedahan | English only | DIRECT: **Bolehkah Morpheus8 menggantikan pembedahan tegang muka?** (*angkat muka* alone avoided, docs/18 §7.2) |
| sections[4].heading | morpheus8 contraindications | English only | DIRECT: **Siapa yang patut mengelak Morpheus8, dan apa yang mesti anda maklumkan?** |
| sections[5].heading | morpheus8 downtime, morpheus8 redness | English only | DIRECT: **Apa yang berlaku dalam sesi Morpheus8, dan berapa hari kemerahan yang perlu anda jangka?** |
| sections[6].heading | morpheus8 risks, morpheus8 kesan sampingan | English only | DIRECT: **Apakah risiko Morpheus8, terutamanya pada tetapan yang lebih dalam?** |
| FAQ 1 | morpheus8 how deep, morpheus8 depth | English only | DIRECT: **Sedalam mana Morpheus8 berbanding RF microneedling biasa?** |
| FAQ 2 | morpheus8 sagging skin, morpheus8 kulit kendur | English only | DIRECT: **Bolehkah Morpheus8 menegangkan kulit kendur tanpa pembedahan?** |
| FAQ 3 | morpheus8 dark skin, morpheus8 asian skin | English only | DIRECT: **Adakah Morpheus8 selamat untuk warna kulit yang lebih gelap?** |
| FAQ 4 | morpheus8 downtime | English only | DIRECT: **Berapa lama downtime yang perlu saya rancang selepas Morpheus8?** (*downtime* per docs/18 §6) |

**Malay tally (14 logged strings):** 4 KEYWORD, 10 DIRECT.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| fractional RF microneedling | 点阵射频微针 | RF microneedling fraksional | microneedling |
| subdermal reach | 可达皮下层 | jangkauan bawah dermis | microneedling variant module |
| tip (fractional) | 点阵探头 | hujung fraksional | (new; matches Oligio/Potenza) |
| permanent fillers | 永久性填充剂 | filler kekal | microneedling avoidIf |
| blood thinners | 抗凝血药物 | ubat pencair darah | microneedling |
| surgical lift | 手术提拉 | pembedahan tegang muka | docs/18 §5 / §7 |
| crepey texture | 皱纸般的纹理 | tekstur berkedut halus seperti kertas krep | (new) |

## For the bilingual doctor-reviewer

1. **黄金微针 in the zh title and description** follows the microneedling page (docs/20 microneedling note 1). Morpheus8's tips aren't described as gold in the EN, so confirm the gloss is acceptable here.
2. **"Fat layer" / 脂肪层 / lapisan lemak** describes depth only. Neither locale uses 溶脂 or *buang lemak*, although `morpheus8 fat loss` has English demand.
3. **"Burst" heading** stays as the trade name.
4. **永久性填充剂 / filler kekal** trips the L-03r warning. It is factual: a permanent filler the patient must declare.
