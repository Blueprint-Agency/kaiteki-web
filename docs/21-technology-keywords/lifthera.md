# 21. Technology keyword log: Lifthera (`/technology/lifthera`)

**Date:** 2026-10-14 · Follows the pilot (`onda-coolwaves.md`): same method, decision rules and table format.
**Outputs:** `content/i18n/technology/zh/lifthera.json`, `content/i18n/technology/ms/lifthera.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/lifthera.json`.
**Inputs:** EN record for `lifthera`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `hifu` treatment page (its variantModule describes this device: 线性聚焦 / *Fokus garisan*, 笔型探头 / *aplikator jenis pen*) and the `face-lifting` concern page.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`, read as in the pilot.
- **Probes:** the shared lifting-device batch (187 zh, 136 ms; see `ultracel-q.md`). Raw dumps: `C:/tmp/lift4-ac-zh.json`, `C:/tmp/lift4-ac-zh2.json`, `C:/tmp/lift4-ac-ms.json`, `C:/tmp/lift4-ac-ms2.json` (not in the repo).
- **Scope:** only search-relevant strings are logged (name, seoTitle, seoDescription, the seven section headings, the four FAQ questions). All body copy is a direct, faithful translation.
- **What the AC says about this device:** nobody searches "Lifthera". `lifthera` autocorrects to **liftera** in both languages. Chinese demand exists for **liftera** (是什么, 原理, 效果, 中文, 韩国), much of it HK Cantonese around *Liftera V lift* (有冇用, 几耐做一次). Malay demand is English (*liftera price, liftera vs hifu, liftera malaysia → liftera hifu malaysia, liftera downtime*). The EN record says "also written Liftera", so the spelling is glossed once in the seoDescription (zh), seoTitle (ms) and the first heading, and the name stays Lifthera.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; Lifthera, Liftera, Asterasys, Thermal Diffusion Treatment (TDT™), 10 Hz.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Lifthera" | lifthera, liftera, lifthera 是什么 | `lifthera` → **liftera**, facial liftherapy; `liftera` → liftera v lift, 副作用, 韩国 | KEYWORD (brand): **Lifthera**, kept in Latin as in the EN |
| **seoTitle** "Lifthera HIFU Lifting & Tightening Malaysia \| Kaiteki" | liftera 提拉, liftera 疗程, liftera hifu, hifu 提拉 (hifu.md) | liftera + 提拉 / 疗程 empty; `liftera hifu` English; `hifu 提拉` returns | KEYWORD: **Lifthera HIFU 提拉紧致 \| Kaiteki** (28 chars). 提拉紧致 is the face-lifting concern name. 马来西亚 dropped (no zh demand; 33 chars with it). |
| **seoDescription** | liftera 是什么, liftera 原理, 线性 hifu | `liftera 是什么`, `liftera原理` return; `线性 hifu` is noise | KEYWORD: Lifthera（Liftera）, Asterasys, 线性聚焦超声波, HIFU, 提拉, 紧致, 免费咨询 (81 chars) |
| sections[0].heading "What is Lifthera?" | liftera 是什么, lifthera 是什么 | `liftera 是什么` returns itself; the Lifthera spelling is empty | KEYWORD: **Lifthera（Liftera）是什么？** The gloss carries the searched spelling. |
| sections[1].heading "How line-focused ultrasound works" | liftera 原理, liftera 线性, 线性 hifu, hifu 线性 | `liftera 原理` → liftera原理, liftera v 原理; 线性 forms empty or noise | KEYWORD (pattern): **Lifthera 原理：线性聚焦超声波如何运作** |
| sections[2].heading "Line-focused, dot-based or imaging-guided: where does Lifthera sit?" | hifu 点状, hifu 线性, hifu 种类, liftera vs | `hifu 点状` is 皮膚 noise; `hifu 种类` returns but isn't this question; `liftera vs` English (vs ultherapy, shurink, sofwave) | DIRECT: **线性聚焦、点状聚焦还是影像引导：Lifthera 属于哪一类？** (影像引导 as in the ultherapy eyebrow) |
| sections[3].heading "When is a device like Lifthera not the right answer?" | liftera 禁忌, hifu 不适合 | empty | DIRECT: **什么情况下，Lifthera 这类仪器并不合适？** |
| sections[4].heading "What would rule out Lifthera for you?" | liftera 禁忌, hifu 禁忌, hifu 什么人不能做 | `hifu 禁忌` returns itself; liftera and question forms empty | KEYWORD (weak): **Lifthera 禁忌：什么情况下你不能做？** (pilot precedent) |
| sections[5].heading "Why is a Lifthera session mapped area by area, and what is recovery like?" | liftera 恢复期, hifu 恢复期, hifu 过程 | 恢复期 forms empty; `hifu 过程` returns but isn't the question | DIRECT: **为什么 Lifthera 要按部位逐一规划？恢复期是怎样的？** (恢复期 per docs/18 §6) |
| sections[6].heading "What are the risks of Lifthera's line-focused ultrasound?" | liftera 风险, liftera 副作用, hifu 风险 | `hifu 风险` returns itself; `liftera 副作用` → liftera v 副作用 (HK) | KEYWORD (weak): **Lifthera 线性聚焦超声波有什么风险？** (风险 keeps the EN; 副作用 would also fit, but the HK tail is Liftera V) |
| FAQ 1 "What is Lifthera and who makes it?" | liftera 是什么, liftera 韩国 | `liftera 是什么` returns; `liftera` → liftera 韩国 | KEYWORD: **Lifthera 是什么？由哪家公司制造？** |
| FAQ 2 "How does Lifthera differ from dot-based HIFU devices?" | liftera 和, liftera 和 hifu, liftera hifu | 和 forms empty; `liftera hifu` English (reviews, results) | DIRECT: **Lifthera 和点状聚焦的 HIFU 仪器有什么差别？** |
| FAQ 3 "Can Lifthera be used around the eyes and other small areas?" | liftera 眼周, hifu 眼周, hifu 眼睛 | `hifu 眼周` returns itself; `hifu 眼睛` is 皮膚 noise | KEYWORD (weak): **Lifthera 可以用在眼周和其他细小部位吗？** |
| FAQ 4 "How soon would I notice anything after a session?" | liftera 多久, hifu 多久见效, hifu 见效, hifu 多久 | `hifu 多久` → 多久做一次, **多久见效**, **多久看到效果**; `hifu 见效` → 几耐见效 (HK), 几时见效 | KEYWORD: **做完 Lifthera 多久才看到效果？** (RF FAQ 4 pattern; the answer says gradual, weeks to months, varies) |

**Chinese tally (14 logged strings):** 10 KEYWORD, 4 DIRECT (three weak: sections[4], sections[6], FAQ 3).

**Not usable:** `liftera v lift` and its tails (有冇用, 几耐做一次, 价钱: HK Cantonese, and *Liftera V* is a model the EN doesn't name), `liftera v 无针埋线` (a thread-lift comparison claim), `liftera立特拉涡旋音波` (a TW/HK transliteration).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Lifthera" | lifthera, liftera, lifthera malaysia, liftera malaysia | `lifthera` → **liftera**; `liftera malaysia` → **liftera hifu malaysia**; Lifthera spelling empty | KEYWORD (brand): **Lifthera**, kept in Latin |
| **seoTitle** | liftera malaysia, liftera hifu, rawatan liftera, rawatan tegang muka | `liftera malaysia` → liftera hifu malaysia; `rawatan tegang muka` returns; `rawatan liftera` empty | KEYWORD: **Lifthera (Liftera) HIFU Malaysia \| Tegang Muka \| Kaiteki** (56 chars). The gloss puts the searched spelling next to "HIFU Malaysia". |
| **seoDescription** | hifu untuk kulit kendur, rawatan hifu (hifu.md) | both return | KEYWORD: Lifthera, ultrabunyi fokus garisan, Asterasys, rawatan HIFU, kulit kendur, tegang muka, konsultasi percuma (156 chars) |
| sections[0].heading "What is Lifthera?" | apa itu liftera | returns itself | KEYWORD: **Apa itu Lifthera (Liftera)?** |
| sections[1].heading "How line-focused ultrasound works" | liftera how it works | English only | DIRECT: **Bagaimana ultrabunyi fokus garisan berfungsi** |
| sections[2].heading "Line-focused, dot-based or imaging-guided…" | liftera vs, liftera vs hifu | English (vs hifu 12d / 7d, vs ultraformer) | DIRECT: **Fokus garisan, berasaskan titik atau dipandu imej: di mana kedudukan Lifthera?** |
| sections[3].heading "When is a device like Lifthera not the right answer?" | hifu tidak sesuai, hifu sesuai | empty | DIRECT: **Bila mesin seperti Lifthera bukan pilihan yang tepat?** |
| sections[4].heading "What would rule out Lifthera for you?" | hifu tidak sesuai | empty | DIRECT: **Apa yang menyebabkan Lifthera tidak sesuai untuk anda?** |
| sections[5].heading "Why is a Lifthera session mapped area by area, and what is recovery like?" | liftera downtime, hifu ada downtime (hifu.md) | `liftera downtime` returns itself; `hifu ada downtime` returns | KEYWORD: **Kenapa sesi Lifthera dipetakan kawasan demi kawasan, dan bagaimana dengan downtime?** (*downtime* per docs/18 §6) |
| sections[6].heading "What are the risks of Lifthera's line-focused ultrasound?" | liftera side effects, hifu kesan sampingan | `liftera side effects` English; `kesan sampingan hifu` returns but the EN says risks | DIRECT: **Apakah risiko ultrabunyi fokus garisan Lifthera?** |
| FAQ 1 "What is Lifthera and who makes it?" | apa itu liftera | returns itself | KEYWORD: **Apa itu Lifthera dan siapa pengeluarnya?** |
| FAQ 2 "How does Lifthera differ from dot-based HIFU devices?" | liftera vs hifu | strong (English tails) | KEYWORD (pattern): **Apa beza Lifthera dengan mesin HIFU berasaskan titik?** (*beza*, as on hifu FAQ 2) |
| FAQ 3 "Can Lifthera be used around the eyes and other small areas?" | liftera mata, liftera eyes, hifu mata, hifu bawah mata | `liftera eyes` English; `hifu mata` → *adalah, untuk apa, kantung mata* (ID); `hifu bawah mata` → *manfaat* (ID-leaning) | DIRECT: **Bolehkah Lifthera digunakan di sekitar mata dan kawasan kecil yang lain?** |
| FAQ 4 "How soon would I notice anything after a session?" | liftera hasil, liftera results, hifu hasil, hifu bila nampak hasil | `hifu hasil` → *terlihat, kapan, bertahan* (ID); `liftera results` English; *nampak hasil* empty | DIRECT: **Berapa lama selepas sesi baru saya perasan apa-apa perubahan?** |

**Malay tally (14 logged strings):** 7 KEYWORD, 7 DIRECT.

**Indonesian pollution seen and avoided:** hifu mata adalah / untuk apa, hifu kantung mata, hasil hifu terlihat kapan, liftera hifu adalah.

## Terms carried over

Same as `hifu.md` and `ultracel-q.md`, plus:

| EN | zh | ms | Source |
|---|---|---|---|
| line-focused ultrasound | 线性聚焦超声波 | ultrabunyi fokus garisan | hifu variantModule eyebrow |
| pen-type applicator | 笔型探头 | aplikator jenis pen | hifu variantModule |
| nasolabial region | 法令纹一带 | kawasan garis senyum (nasolabial) | hifu variantModule |
| thermal coagulation | 热凝固 | koagulasi haba | new |
| imaging-guided | 影像引导 | dipandu imej | ultherapy variantModule |
| jowl area | 两颊下垂一带 | kawasan pipi jatuh (jowl) | face-lifting, microwave-contouring |

## For the bilingual doctor-reviewer

1. **Lifthera vs Liftera.** Search demand is entirely on the *Liftera* spelling, and Chinese demand is mostly for **Liftera V**. The pages keep the EN name and gloss Liftera once in the title or description and in the first heading. Confirm which spelling and model the clinic uses at the counter.
2. **Thermal Diffusion Treatment** is glossed 热扩散治疗 in zh and kept in English in ms; both stay attributed to Asterasys.
3. **zh FAQ 4 uses 多久才看到效果** (query form, as on the RF page). The answer is gradual and individual. If 效果 reads as too promising, fall back to 多久会看到变化？ (DIRECT).
4. **"Not a deep single-session lift"** is 不是一次就做深层提拉的疗程 / *bukan rawatan tegang lapisan dalam dalam satu sesi*. Confirm this reads as the EN's positioning, not a claim against other devices.
