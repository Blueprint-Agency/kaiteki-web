# 21. Technology keyword log: Juvelook (`/technology/juvelook`)

**Date:** 2026-10-14 · Follows the pilot format in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/juvelook.json`, `content/i18n/technology/ms/juvelook.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/juvelook.json`.
**Inputs:** EN record for `juvelook`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `skin-booster` and `bio-stimulator` treatment pages, and the `enlarged-pores` and `acne-scars` concern pages.

## Method

- **Client rule, volume proxy and decision rules:** as in `onda-coolwaves.md` and `profhilo.md`.
- **Probes:** shared batch for the five skin-booster products, 133 zh and 145 ms. Raw dumps: `C:/tmp/sbdev-ac-zh*.json`, `C:/tmp/sbdev-ac-ms*.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. All body copy is a direct, faithful translation.
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `reviewedBy`, `lastReviewed` (no `device` in this record); the names Juvelook, VAIM, PDLLA, Rejuran, Plinest, Sculptra.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Juvelook" | juvelook | → juvelook是什么, 效果, 副作用, 中文, eye, 功效, **juvelook 水光针** | KEYWORD (brand): **Juvelook**, Latin |
| **seoTitle** "Juvelook PDLLA Skin Booster Treatment Malaysia \| Kaiteki" | juvelook 水光针, juvelook 疗程, juvelook 马来西亚, pdlla | `juvelook 水光针` and `juvelook 疗程` return; `juvelook 马来西亚` empty; `pdlla` is name noise (潘德莉拉) | KEYWORD: **马来西亚 Juvelook 水光针疗程 \| Kaiteki** (29 chars). PDLLA has no Chinese demand and moves to the description. |
| **seoDescription** | juvelook 毛孔 | → juvelook 毛孔, 收 毛孔 | KEYWORD: Juvelook, 刺激胶原蛋白, PDLLA, 马来西亚, 水光针, 毛孔粗大, 皮肤纹理, 免费咨询 (78 chars) |
| sections[0].heading "What is Juvelook?" | juvelook 是什么 | 2nd `juvelook` suggestion | KEYWORD: **Juvelook 是什么？** |
| sections[1].heading "How PDLLA collagen stimulation works" | juvelook 原理, pdlla 胶原蛋白 | `juvelook 原理` returns; pdlla forms empty | KEYWORD: **Juvelook 原理：PDLLA 如何刺激胶原蛋白** |
| sections[2].heading "Is Juvelook for skin quality or for contour?" | juvelook 填充 | strong: 填充 效果, 是 填充 嗎, **算 填充 吗** | KEYWORD: **Juvelook 是用于肤质，还是用于填充轮廓？** |
| sections[3].heading "Why a course, reviewed as it goes?" | juvelook 疗程, juvelook 要打几次, juvelook 多久 | `juvelook 疗程`, `juvelook 要打几次` return; `juvelook 多久` → 多久打一次 | KEYWORD: **Juvelook 疗程：为什么要分几次打，并边打边评估？** |
| sections[4].heading "Who is Juvelook the wrong choice for?" | juvelook 禁忌, juvelook 适合 | empty | DIRECT: **哪些人不适合打 Juvelook？** |
| sections[5].heading "On the day, and in the days after?" | juvelook 恢复期 | returns, but the heading does not ask about downtime | DIRECT: **打 Juvelook 当天是怎样的？之后几天呢？** |
| sections[6].heading "Risks of a collagen stimulator like Juvelook?" | juvelook 风险, juvelook 副作用 | both return (副作用 strong, some dcard) | KEYWORD: **Juvelook 这类胶原蛋白刺激剂有什么风险？** |
| FAQ 1 "Juvelook vs Rejuran or an HA booster?" | juvelook 和 rejuran, juvelook 和 rejuran 区别, juvelook 和 profhilo | empty in Chinese | DIRECT: **Juvelook 和 Rejuran 或玻尿酸水光针有什么区别？** |
| FAQ 2 "How long before anything is visible, and is it permanent?" | juvelook 永久, juvelook 多久, juvelook 多久见效 | `juvelook 永久` returns; `juvelook 多久` → **多久 有 效果** | KEYWORD: **Juvelook 多久才看得出变化？是永久的吗？** (变化, not 效果, to keep the EN's neutral framing; the answer negates permanence) |
| FAQ 3 "Is Juvelook the same as Sculptra?" | juvelook 和 sculptra, juvelook sculptra | `juvelook 和 sculptra` returns (+ volume 和sculptra有什么不同) | KEYWORD: **Juvelook 和 Sculptra 是一样的吗？** |
| FAQ 4 "Can Juvelook cause lumps or nodules?" | juvelook 结节, juvelook 硬块 | `juvelook 结节` strong (some dcard / threads); 硬块 empty | KEYWORD: **Juvelook 会引起硬块或结节吗？** |

**Chinese tally (14 logged strings):** 11 KEYWORD, 3 DIRECT.

**Not usable:** **素颜针** (a consumer nickname for a prescription injectable, in `juvelook 副作用`), **乔雅露** (China-market name), 蓝瓶 / 黑瓶 (pack colours). `juvelook 痘疤` returns, but it is dcard-led and not an EN heading.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Juvelook" | juvelook, juvelook malaysia | → juvelook skin booster, **juvelook malaysia** (price, skin booster malaysia price) | KEYWORD (brand): **Juvelook** |
| **seoTitle** | juvelook malaysia, rawatan juvelook, juvelook skin booster, pdlla | all return; `pdlla` → skin booster, collagen stimulator (English) | KEYWORD: **Rawatan Skin Booster Juvelook PDLLA di Malaysia \| Kaiteki** (57 chars) |
| **seoDescription** | juvelook pores, juvelook liang pori | `juvelook pores` English; *liang pori* empty | KEYWORD: suntikan, PDLLA, perangsang kolagen, skin booster, Kaiteki, liang pori, tekstur, konsultasi percuma (154 chars) |
| sections[0].heading "What is Juvelook?" | apa itu juvelook | → treatment, volume, skin booster (and *perawatan*, ID) | KEYWORD: **Apa itu Juvelook?** |
| sections[1].heading "How PDLLA works" | juvelook how it works | English only | DIRECT: **Bagaimana rangsangan kolagen PDLLA berfungsi** |
| sections[2].heading "Skin quality or contour?" | juvelook untuk apa, juvelook contour | `juvelook untuk apa` strong; `juvelook skin booster or filler` appears | KEYWORD (partial): **Juvelook untuk kualiti kulit atau untuk kontur?** |
| sections[3].heading "Why a course, reviewed as it goes?" | juvelook berapa kali, juvelook how many sessions | *berapa kali* → *harus / pengulangan* (ID-leaning); English strong | DIRECT: **Kenapa Juvelook dirancang sebagai satu kursus dan dinilai semula sepanjang jalan?** |
| sections[4].heading "Who is it the wrong choice for?" | juvelook sesuai untuk | empty | DIRECT: **Siapa yang tidak sesuai untuk Juvelook?** |
| sections[5].heading "On the day, days after?" | juvelook downtime | → **downtime berapa lama**, but the heading does not ask about downtime | DIRECT: **Apa yang berlaku pada hari sesi Juvelook, dan beberapa hari selepasnya?** |
| sections[6].heading "Risks?" | juvelook risks, juvelook kesan sampingan | English only | DIRECT: **Apakah risiko perangsang kolagen seperti Juvelook?** |
| FAQ 1 "vs Rejuran or HA booster?" | juvelook vs rejuran | strong (vs profhilo, for under eyes) | KEYWORD (pattern): **Apa beza Juvelook dengan Rejuran atau skin booster asid hialuronik?** |
| FAQ 2 "How long before visible, permanent?" | juvelook kekal, juvelook permanent, juvelook berapa lama, juvelook hasil | *kekal* empty; *permanent* English; *berapa lama / hasil* → *terlihat, kapan, efek* (ID) | DIRECT: **Berapa lama sebelum ada perubahan yang nampak, dan adakah ia kekal?** |
| FAQ 3 "Same as Sculptra?" | juvelook vs sculptra, juvelook sama dengan sculptra | `juvelook vs sculptra` strong; Malay form empty | KEYWORD (pattern): **Adakah Juvelook sama dengan Sculptra?** |
| FAQ 4 "Lumps or nodules?" | juvelook nodules, juvelook lumps, juvelook ketulan, juvelook benjol | English returns; Malay empty | DIRECT: **Boleh ke Juvelook menyebabkan ketulan atau nodul?** |

**Malay tally (14 logged strings):** 7 KEYWORD, 7 DIRECT.

**Indonesian pollution seen and avoided:** *apa itu perawatan juvelook*, *juvelook harus berapa kali*, *hasil juvelook terlihat berapa lama*, *kapan hasil juvelook terlihat*, *juvelook skin booster adalah*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| collagen-stimulating / biostimulator | 刺激胶原蛋白 / 胶原蛋白刺激剂 | perangsang kolagen / bio-stimulator | bio-stimulator, skin-booster |
| poly-D,L-lactic acid (PDLLA) | 聚-D,L-乳酸（PDLLA） | asid poli-D,L-laktik (PDLLA) | new (bio-stimulator: 聚左旋乳酸 / *asid poli-L-laktik* for PLLA) |
| microspheres | 微球 | mikrosfera | bio-stimulator |
| non-crosslinked HA | 非交联玻尿酸 | asid hialuronik tidak berangkai silang | skin-booster |
| lyophilised, reconstituted | 冻干粉，使用前先调配 | serbuk beku-kering (liofilisasi), dicampurkan semula | bio-stimulator (调配 / *dicampurkan*) |
| granuloma | 肉芽肿 | granuloma | skin-booster |
| nodules | 结节 | nodul | skin-booster |
| enlarged-looking pores | 看起来粗大的毛孔 | liang pori yang nampak besar | enlarged-pores |

## For the bilingual doctor-reviewer

1. **PDLLA** is 聚-D,L-乳酸 / *asid poli-D,L-laktik*, kept distinct from Sculptra's PLLA (聚左旋乳酸) on the bio-stimulator page. Confirm the Chinese chemical name.
2. **素颜针 / 乔雅露 not used**, for the same reason as 三文鱼针.
3. **FAQ 2** "is it permanent?" keeps the negation in the answer (它的任何部分都不是永久的 / *Tiada apa-apa tentangnya yang kekal*); L-03r warns, as expected.
4. **"Results vary between individuals"** (FAQ 2) is 效果也因人而异 / *hasil berbeza antara individu*. It is the EN's own wording, not added.
5. **Granuloma** stays *granuloma* in Malay, as on skin-booster.
