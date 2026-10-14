# 21. Technology keyword log: Sculptra (`/technology/sculptra`)

**Date:** 2026-10-14 · Device & injectable localisation round, format as the pilot (`onda-coolwaves.md`).
**Outputs:** `content/i18n/technology/zh/sculptra.json`, `content/i18n/technology/ms/sculptra.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/sculptra.json`.
**Inputs:** EN record for `sculptra`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `bio-stimulator` treatment page (`docs/20-treatment-keywords/bio-stimulator.md`) and the `aging`, `face-lifting` and `face-contouring` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. Same reading as the pilot: HAS VOLUME = the phrase or a natural Malaysian form of it comes back without a Taiwan/HK/Indonesia skew.
- **Decision:** KEYWORD = phrased around the real query form, EN meaning kept. DIRECT = faithful translation, no invented keyword.
- **Probes:** shared batch with `ellanse` and `radiesse`: 114 zh and 105 ms in total, 32 zh and 36 ms on this page. Raw dumps: `C:/tmp/inject-ac-zh.json`, `C:/tmp/inject-ac-zh2.json`, `C:/tmp/inject-ac-ms.json`, `C:/tmp/inject-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, the seven section headings, the four FAQ questions. No jumpNav, routes or ctaMid. All body copy (summary, leadAnswer, facts, section bodies and list, cost factors, FAQ answers) is a direct, faithful translation.
- **Street name kept out:** `sculptra` autocompletes to `sculptra童颜针` and `sculptra 童 颜 针 价钱`. 童颜针 is not used anywhere (bio-stimulator precedent, `_treatment-names.md`).
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `device`, `reviewedBy`, `lastReviewed`; brand and manufacturer names (Sculptra, Galderma, PLLA-SCA).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Sculptra" | sculptra, sculptra 中文 | `sculptra` → sculptra是什么, sculptra童颜针 (street name), 中文, 副作用, 功效; `sculptra 中文` → 中文名, radiesse vs sculptra 中文 | KEYWORD (brand): **Sculptra**, kept in Latin |
| **seoTitle** "Sculptra PLLA Bio-Stimulator Treatment Malaysia \| Kaiteki" | sculptra 马来西亚, sculptra malaysia, 聚左旋乳酸, sculptra 价钱 | `sculptra malaysia` → price, reviews, treatment malaysia (English); `sculptra 马来西亚` empty; `聚左旋乳酸` → 价格, 是什么, (plla), 功效 (one dcard) | KEYWORD: **马来西亚 Sculptra 聚左旋乳酸 \| Kaiteki** (29 chars). 聚左旋乳酸 is the searched form of "PLLA"; 胶原蛋白刺激剂疗程 does not fit in 30 and moves to the description. 马来西亚 kept for the EN geo intent. |
| **seoDescription** | (same family) | as above | KEYWORD: Sculptra, 聚左旋乳酸, 胶原蛋白刺激剂, 免费咨询 (80 chars) |
| sections[0].heading "What is Sculptra?" | sculptra 是什么 | `sculptra` → **sculptra是什么** (2nd suggestion) | KEYWORD: **Sculptra 是什么？** |
| sections[1].heading "How poly-L-lactic acid works" | sculptra 原理, 聚左旋乳酸 原理 | `sculptra 原理` returns itself; `聚左旋乳酸 原理` empty | KEYWORD: **Sculptra 原理：聚左旋乳酸如何起作用** (pilot's 原理 lead-in) |
| sections[2].heading "What is Sculptra used for, if not instant volume?" | sculptra 部位, sculptra 注射 部位, sculptra 适合, sculptra 功效 | `sculptra 部位` → sculptra 注射部位; 适合 empty; 功效 returns but is efficacy framing | KEYWORD (weak): **如果不是马上补充容量，Sculptra 用在什么问题和部位？** (the list is concerns by region, so 部位 keeps the meaning) |
| sections[3].heading "What happens to Sculptra in the skin over time?" | sculptra 维持多久, sculptra 永久, sculptra 多久 | 维持多久 and 永久 empty; `sculptra 多久` → 多久打一次, 多久见效 (not this section) | DIRECT: **Sculptra 在皮肤里会随时间怎样变化？** |
| sections[4].heading "Who suits a staged treatment like Sculptra, and who should avoid it?" | sculptra 适合, sculptra 不适合, sculptra 禁忌 | all empty | DIRECT: **哪些人适合 Sculptra 这样分阶段的疗程？哪些人应该避免？** |
| sections[5].heading "What happens across a Sculptra session and the days after it?" | sculptra 过程, sculptra 恢复期, sculptra 按摩, sculptra 麻醉 | 过程, 恢复期, 麻醉 empty; `sculptra 按摩` → 按摩手法 (one part of the section only) | DIRECT: **Sculptra 疗程的过程，以及之后几天会怎样？** |
| sections[6].heading "What are Sculptra's risks, including lumps that appear later?" | sculptra 副作用, sculptra 风险, sculptra 结节, sculptra 硬块 | `sculptra 副作用` and `sculptra 结节` return; 风险, 硬块 empty | KEYWORD: **Sculptra 有哪些副作用和风险，包括后来才出现的结节？** |
| FAQ 1 "How is Sculptra different from a hyaluronic acid filler?" | sculptra 和玻尿酸, sculptra 玻尿酸 区别, sculptra 玻尿酸, sculptra 和 | `sculptra 玻尿酸` → sculptra玻尿酸; `sculptra 和` → radiesse 和 sculptra; 区别 forms empty | KEYWORD (weak): **Sculptra 和玻尿酸填充剂有什么差别？** (差别 per the pilot) |
| FAQ 2 "How soon would I notice a change after Sculptra?" | sculptra 多久见效, sculptra 多久有效果, sculptra 多久 | `sculptra 多久` → 多久打一次, **多久见效**; `sculptra 效果` → 多久有效果 | KEYWORD (partial): **Sculptra 多久会看到变化？** Leads with the `sculptra 多久` form; 见效 / 有效果 avoided as results framing (pilot avoided 几次有效 for the same reason). |
| FAQ 3 "Does Sculptra hurt, and is anaesthetic used?" | sculptra 痛吗, sculptra 会痛吗, sculptra 疼, sculptra 麻醉 | all empty | DIRECT: **打 Sculptra 会痛吗？会用麻醉吗？** (the answer says some discomfort is expected; nothing says painless) |
| FAQ 4 "Is Sculptra permanent?" | sculptra 永久, sculptra 维持多久 | empty | DIRECT: **Sculptra 是永久的吗？** (answer opens 不是) |

**Chinese tally (14 logged strings):** 9 KEYWORD, 5 DIRECT (two weak: sections[2], FAQ 1).

**Not usable:** `sculptra童颜针`, `sculptra 童颜针 价钱` (street name); `sculptra 价钱 香港`, `sculptra 韩国 价钱` (HK/KR); `sculptra 效果`, `sculptra 功效` (efficacy framing, no EN heading for it); `sculptra vs radiesse / juvelook / profhilo / rejuran` (comparison demand, English; a comparison FAQ needs an EN source first).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Sculptra" | sculptra, sculptra malaysia | `sculptra` → before and after, treatment, review (English); `sculptra malaysia` → price, reviews, treatment malaysia, cost malaysia | KEYWORD (brand): **Sculptra**, kept in Latin |
| **seoTitle** | sculptra malaysia, sculptra treatment malaysia, rawatan sculptra, poly-l-lactic acid | `sculptra malaysia` → **sculptra treatment malaysia**; `rawatan sculptra` returns itself; `poly-l-lactic acid` → (plla), injection, filler | KEYWORD: **Rawatan Sculptra (PLLA) Bio-stimulator di Malaysia \| Kaiteki** (60 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: Sculptra, asid poli-L-laktik, bio-stimulator, Kaiteki, konsultasi percuma (156 chars) |
| sections[0].heading "What is Sculptra?" | apa itu sculptra, sculptra adalah | `apa itu sculptra` → apa itu sculptra treatment; `sculptra adalah` returns (ID-leaning) | KEYWORD: **Apa itu Sculptra?** |
| sections[1].heading "How poly-L-lactic acid works" | asid poli-l-laktik, sculptra how it works | Malay form empty; `sculptra how it works` English | DIRECT: **Bagaimana asid poli-L-laktik berfungsi** |
| sections[2].heading "What is Sculptra used for, if not instant volume?" | sculptra untuk apa, sculptra for, sculptra sesuai | **`sculptra untuk apa` returns**; `sculptra for` → temples, face, neck (English); sesuai empty | KEYWORD: **Sculptra untuk apa, jika bukan untuk volum serta-merta?** |
| sections[3].heading "What happens to Sculptra in the skin over time?" | sculptra berapa lama, sculptra kekal, sculptra permanent | `sculptra berapa lama` → sculptra tahan berapa lama; kekal empty; `sculptra permanent` English | DIRECT: **Apa yang berlaku kepada Sculptra dalam kulit dari masa ke masa?** (*tahan berapa lama* is used on FAQ 4, which is the duration question) |
| sections[4].heading "Who suits … and who should avoid it?" | sculptra sesuai, sculptra hamil, sculptra contraindications | Malay forms empty or noise (Hamilton); contraindications English | DIRECT: **Siapa yang sesuai dengan rawatan berperingkat seperti Sculptra, dan siapa yang patut mengelakkannya?** |
| sections[5].heading "What happens across a Sculptra session and the days after it?" | sculptra downtime, sculptra procedure, sculptra aftercare | all English | DIRECT: **Apa yang berlaku semasa sesi Sculptra dan beberapa hari selepasnya?** |
| sections[6].heading "What are Sculptra's risks, including lumps that appear later?" | sculptra risiko, sculptra kesan sampingan, sculptra lumps, sculptra nodules | **`sculptra risiko` returns**; kesan sampingan empty; lumps / nodules strong but English | KEYWORD: **Apakah risiko Sculptra, termasuk ketulan yang muncul kemudian?** |
| FAQ 1 "How is Sculptra different from a hyaluronic acid filler?" | sculptra vs filler, sculptra vs hyaluronic | `sculptra vs filler` strong (cost, cheeks, nasolabial folds); `sculptra vs hyaluronic acid filler` returns | KEYWORD: **Sculptra vs filler asid hialuronik: apa bezanya?** (bio-stimulator FAQ 1 pattern) |
| FAQ 2 "How soon would I notice a change after Sculptra?" | sculptra bila nampak hasil, sculptra how long, sculptra results | Malay form empty; `sculptra how long to see results` English | DIRECT: **Berapa cepat saya akan nampak perubahan selepas Sculptra?** |
| FAQ 3 "Does Sculptra hurt, and is anaesthetic used?" | sculptra sakit, sculptra sakit tak, sculptra painful | *sakit* forms empty; `sculptra painful` English | DIRECT: **Sculptra sakit tak, dan adakah ubat bius digunakan?** |
| FAQ 4 "Is Sculptra permanent?" | sculptra kekal, sculptra permanent, sculptra tahan berapa lama | kekal empty; **`sculptra tahan berapa lama` returns** (Malaysian *tahan*) | KEYWORD: **Sculptra kekal ke, atau tahan berapa lama?** The answer ("Tidak kekal … berapa lama ia bertahan berbeza antara individu") covers both halves. |

**Malay tally (14 logged strings):** 8 KEYWORD, 6 DIRECT.

**Indonesian pollution seen and avoided:** `sculptra adalah`, `sculptra treatment adalah` (heading uses *Apa itu*). Bare *harga sculptra* is never used; cost copy says *Harga dibincangkan semasa konsultasi*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| bio-stimulator (category, facts value) | 胶原蛋白刺激剂 | bio-stimulator | bio-stimulator, terms.ts |
| collagen stimulator | 胶原蛋白刺激剂 | perangsang kolagen | bio-stimulator |
| poly-L-lactic acid | 聚左旋乳酸 | asid poli-L-laktik | bio-stimulator |
| reconstitute | 调配 | dicampurkan dengan cecair / air | bio-stimulator |
| hyaluronic acid filler | 玻尿酸填充剂 | filler asid hialuronik | bio-stimulator |
| can / cannot be dissolved | 可以 / 不能被溶解 | boleh / tidak boleh dilarutkan | bio-stimulator |
| bioresorbable | 可被身体吸收 | boleh diserap semula | bio-stimulator |
| nodules / lumps | 结节 / 硬块 | nodul / ketulan | bio-stimulator, aging |
| rare but serious vascular complications | 罕见但严重的血管并发症 | komplikasi saluran darah yang jarang berlaku tetapi serius | bio-stimulator |
| keloid or hypertrophic scarring | 蟹足肿或增生性疤痕 | parut keloid atau hipertrofik | bio-stimulator |
| topical or local anaesthetic | 外用或局部麻醉 | ubat bius topikal atau setempat | bio-stimulator |
| nasolabial folds | 法令纹 | garis senyuman (lipatan nasolabial) | microwave-contouring |
| temple hollowing | 太阳穴凹陷 | pelipis cengkung | face-lifting |
| downtime | 恢复期 | downtime | docs/18 §6 |

## For the bilingual doctor-reviewer

1. **No 童颜针.** It is the second autocomplete suggestion for `sculptra` in Chinese but is a street name; not used.
2. **"PLLA-SCA"** stays Latin as the manufacturer's term.
3. **"Crepey texture"** is 皱纸般的纹理 / *tekstur berkedut halus seperti kertas*. Confirm this reads naturally.
4. **永久 / kekal and 保证 / dijamin** appear only negated ("不是永久的", "维持时间也不能保证" / "tidak kekal", "tidak dijamin") or in the FAQ 4 question that the answer negates. The L-03r warnings are expected.
5. **ms FAQ 4 adds "tahan berapa lama"**: the existing answer already covers duration ("how long it holds differs between individuals"). Nothing new is promised.
6. **"So the doctor can advise safely"** describes the advice, not the treatment, as in the pilot.
7. **seoTitle (zh)** drops "Bio-Stimulator Treatment" to fit 30 characters; the description carries 胶原蛋白刺激剂.
