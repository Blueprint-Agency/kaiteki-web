# 21. Technology keyword log: Ultherapy System (`/technology/ultherapy-system`)

**Date:** 2026-10-14 · Follows the pilot (`onda-coolwaves.md`): same method, decision rules and table format.
**Outputs:** `content/i18n/technology/zh/ultherapy-system.json`, `content/i18n/technology/ms/ultherapy-system.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/ultherapy-system.json`.
**Inputs:** EN record for `ultherapy-system`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `ultherapy` and `hifu` treatment pages (`docs/20-treatment-keywords/ultherapy.md`, `hifu.md`) and the `face-lifting` concern page.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`, read as in the pilot.
- **Probes:** the shared lifting-device batch (187 zh, 136 ms; see `ultracel-q.md`), plus the evidence in `ultherapy.md`. Raw dumps: `C:/tmp/lift4-ac-zh.json`, `C:/tmp/lift4-ac-zh2.json`, `C:/tmp/lift4-ac-ms.json`, `C:/tmp/lift4-ac-ms2.json` (not in the repo).
- **Scope:** only search-relevant strings are logged (name, seoTitle, seoDescription, the seven section headings, the four FAQ questions). All body copy is a direct, faithful translation.
- **This page and the Ultherapy treatment page share demand.** Where the EN question is the same (FAQ 1, "difference between Ultherapy and HIFU"), the string is the treatment page's word for word. seoTitles are kept different so the two pages don't compete for the same title.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `device` ("Ultherapy"), `reviewedBy`, `lastReviewed`; Ultherapy, Ulthera, Merz Aesthetics, DeepSEE®, MFU-V, Ultherapy PRIME.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Ultherapy System" | ultherapy 系统, ultherapy 机器, ultherapy | `ultherapy` → prime, 中文, 是什么, 功效; 系统 / 机器 forms empty | DIRECT: **Ultherapy 系统**. The EN adds a generic word ("System"), so it is translated; the brand stays Latin. Matches the hrefLabel 了解 Ultherapy 系统 on the treatment page. |
| **seoTitle** "Ultherapy System Non-Surgical Lifting Malaysia \| Kaiteki" | ultherapy 提拉 (ultherapy.md), ultherapy 系统 | `ultherapy 提拉` returns; 系统 empty | KEYWORD (weak): **Ultherapy 系统 非手术提拉 \| Kaiteki** (28 chars). 马来西亚 dropped to fit and to stay distinct from the treatment page title (马来西亚 Ultherapy 非手术提拉). |
| **seoDescription** | 微聚焦超声波, deepsee, ultherapy 适合 | `deepsee` → deepseek (noise); `ultherapy 适合` returns | KEYWORD: Ultherapy 系统, 微聚焦超声波, DeepSEE 影像, 脸部和颈部, 非手术提拉, 免费咨询, 适合 (76 chars) |
| sections[0].heading "What is the Ultherapy System?" | ultherapy 是什么, ultherapy 系统 | `ultherapy 是什么` strong (also ultherapy prime 是什么) | KEYWORD: **Ultherapy 系统是什么？** |
| sections[1].heading "How micro-focused ultrasound with visualisation works" | ultherapy 原理, ultherapy 影像 | `ultherapy 原理` → ultherapy prime原理; `ultherapy 影像` empty | KEYWORD: **Ultherapy 原理：带影像的微聚焦超声波如何运作** |
| sections[2].heading "Which layers does Ultherapy treat, and at what depths?" | ultherapy 深度, ultherapy 层, ultherapy smas | `ultherapy 深度` → ultherapy深度; 层 empty; `ultherapy smas` English | KEYWORD: **Ultherapy 处理哪些层次？深度是多少？** |
| sections[3].heading "Is Ultherapy a non-surgical facelift?" | ultherapy 拉皮, ultherapy 是拉皮吗, ultherapy 手术 | all empty | DIRECT: **Ultherapy 是非手术拉皮吗？** (the answer opens 不是) |
| sections[4].heading "Does Ultherapy suit every skin tone, and who should avoid it?" | ultherapy 适合, ultherapy 肤色, ultherapy 禁忌, ultherapy 什么人不能做 | `ultherapy 适合` → 适合年龄; the others empty | KEYWORD (weak): **Ultherapy 适合所有肤色吗？哪些人应该避免？** |
| sections[5].heading "What happens during an Ultherapy session, from mapping to aftercare?" | ultherapy 过程 | returns (ultherapy prime 过程) | KEYWORD: **Ultherapy 的过程是怎样的？从定位到治疗后护理** (治疗后, not 术后, which implies surgery) |
| sections[6].heading "What are the risks of Ultherapy, including temporary nerve effects?" | ultherapy 副作用, ultherapy 神经 | `ultherapy 副作用` returns (prime 副作用); 神经 empty | KEYWORD: **Ultherapy 有哪些风险和副作用，包括暂时的神经反应？** |
| FAQ 1 "What is the difference between Ultherapy and HIFU?" | ultherapy 和 hifu | → **hifu 和 ultherapy 的 区别** | KEYWORD: **Ultherapy 和 HIFU 的区别是什么？** (same as the treatment page FAQ 1) |
| FAQ 2 "Why does the built-in imaging matter for me as a patient?" | ultherapy 影像 | empty | DIRECT: **内置的影像，对我这个患者有什么意义？** |
| FAQ 3 "Is Ultherapy suitable for Asian skin tones?" | ultherapy 适合, ultherapy 亚洲 | `ultherapy 适合` returns; 亚洲 empty | KEYWORD (weak): **Ultherapy 适合亚洲人的肤色吗？** |
| FAQ 4 "How long before I see anything, and how long does it last?" | ultherapy 多久, ultherapy 维持, ultherapy 见效 | `ultherapy 多久` → **多久有效果**, **维持多久**, 多久做一次; `ultherapy 维持` → 维持多久 | KEYWORD: **Ultherapy 多久才有效果？效果维持多久？** (first half as on the treatment page FAQ 3; the answer gives 2–6 months for change to develop, says not permanent, and gives no duration) |

**Chinese tally (14 logged strings):** 11 KEYWORD, 3 DIRECT (three weak: seoTitle, sections[4], FAQ 3).

**Not usable:** `ultherapy prime` (strong, but the EN only says "the current Ultherapy PRIME generation", not that Kaiteki's unit is one; it stays in body copy as the EN has it), `美版超声刀` (mainland/TW, docs/18), `ultherapy 最佳效果` / `即时效果` (superlative; contradicts the EN), `ultherapy 价钱` (HK/TW/KR tails).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Ultherapy System" | ultherapy system, sistem ultherapy | `ultherapy system` → ultherapy prime system, ulthera system (English) | DIRECT: **Sistem Ultherapy**. The generic word is translated, as in the treatment page's hrefLabel *Tentang Sistem Ultherapy*. |
| **seoTitle** | ultherapy malaysia, ultherapy non surgical, rawatan tegang muka | `ultherapy malaysia` strong (price, clinic); `ultherapy non surgical` → non surgical facelift (English); `rawatan tegang muka` returns | KEYWORD (term): **Sistem Ultherapy \| Tegang Muka Tanpa Pembedahan \| Kaiteki** (57 chars). "Malaysia" left out so the title differs from the treatment page (*Ultherapy Malaysia \| Tegang Muka Tanpa Pembedahan*), which owns that query. |
| **seoDescription** | ultherapy imaging, rawatan tegang muka | `ultherapy imaging` → real time imaging (English) | KEYWORD: Sistem Ultherapy, ultrabunyi mikro-berfokus, DeepSEE, tegang dan angkat muka, leher, tanpa pembedahan, konsultasi percuma (153 chars) |
| sections[0].heading "What is the Ultherapy System?" | apa itu ultherapy | → apa itu ultherapy prime (plus ID *perawatan*) | KEYWORD: **Apa itu Sistem Ultherapy?** |
| sections[1].heading "How micro-focused ultrasound with visualisation works" | ultherapy imaging | English only | DIRECT: **Bagaimana ultrabunyi mikro-berfokus dengan visualisasi berfungsi** |
| sections[2].heading "Which layers does Ultherapy treat, and at what depths?" | ultherapy depth, ultherapy smas, lapisan smas | `ultherapy depth` → depth chart (English); `lapisan smas` returns but the heading doesn't name SMAS | DIRECT: **Lapisan mana yang dirawat Ultherapy, dan pada kedalaman berapa?** |
| sections[3].heading "Is Ultherapy a non-surgical facelift?" | ultherapy face lift, ultherapy non surgical | `ultherapy non surgical` → **non surgical facelift**; `ultherapy face lift` strong (English) | KEYWORD (term): **Adakah Ultherapy sejenis face lift tanpa pembedahan?** (*face lift* as on the treatment page FAQ 2) |
| sections[4].heading "Does Ultherapy suit every skin tone, and who should avoid it?" | ultherapy kulit gelap, ultherapy sesuai, ultherapy who should not | Malay forms empty; `who should not get ultherapy` English | DIRECT: **Adakah Ultherapy sesuai untuk semua warna kulit, dan siapa yang patut mengelaknya?** |
| sections[5].heading "What happens during an Ultherapy session…?" | (no Malay process form) | n/a | DIRECT: **Apa yang berlaku semasa sesi Ultherapy, dari pemetaan hingga penjagaan selepas rawatan?** |
| sections[6].heading "What are the risks of Ultherapy, including temporary nerve effects?" | ultherapy kesan sampingan, ultherapy nerve, ultherapy side effects | Malay empty; `ultherapy nerve` → nerve damage (English) | DIRECT: **Apakah risiko Ultherapy, termasuk kesan sementara pada saraf?** |
| FAQ 1 "What is the difference between Ultherapy and HIFU?" | ultherapy vs hifu | strong (English) | KEYWORD (pattern): **Apa beza Ultherapy dan HIFU?** (same as the treatment page) |
| FAQ 2 "Why does the built-in imaging matter for me as a patient?" | n/a | n/a | DIRECT: **Kenapa imej terbina dalam penting untuk saya sebagai pesakit?** |
| FAQ 3 "Is Ultherapy suitable for Asian skin tones?" | ultherapy kulit asia, ultherapy asian skin | Malay empty; English returns itself | DIRECT: **Adakah Ultherapy sesuai untuk kulit Asia?** |
| FAQ 4 "How long before I see anything, and how long does it last?" | ultherapy berapa lama, ultherapy tahan berapa lama | `ultherapy berapa lama` → **ultherapy tahan berapa lama**, bertahan berapa lama | KEYWORD: **Bila boleh nampak hasil Ultherapy, dan tahan berapa lama?** (first half as on the treatment page FAQ 3) |

**Malay tally (14 logged strings):** 6 KEYWORD, 8 DIRECT.

**Indonesian pollution seen and avoided:** apa itu perawatan ultherapy, apakah ultherapy sakit, ultherapy bertahan berapa lama (ID-leaning; *tahan* used instead), `ultherapy hamil` (Hamilton noise).

## Terms carried over

Same as `ultherapy.md` (探头 / *transduser*, 屏幕影像 / *imej pada skrin*, 实时超声波影像 / *imej ultrabunyi secara langsung*, 微聚焦超声波 / *ultrabunyi mikro-berfokus*, SMAS 筋膜层 / *fasia SMAS*, 埋线 / *benang*, 心脏起搏器 / *perentak jantung*, 胸前上方 / *bahagian dada atas*, 一粒粒的感觉 / *rasa berketul*), plus:

| EN | zh | ms | Source |
|---|---|---|---|
| micro-focused ultrasound with visualisation | 带可视化的微聚焦超声波（MFU-V） | micro-focused ultrasound with visualisation (MFU-V) | new (ms keeps Merz's English term) |
| visualisation | 可视化 | visualisasi | new |
| dense fascia | 致密筋膜 | fasia tebal | new |
| superficial / deeper dermis | 浅层真皮 / 较深真皮 | dermis cetek / dermis yang lebih dalam | new |
| distinguishing feature (facts label) | 主要特点 | Ciri utama | new |

## For the bilingual doctor-reviewer

1. **Name translated.** `name` is **Ultherapy 系统** / **Sistem Ultherapy** because the EN adds the generic word "System". Confirm this is how the clinic refers to the machine.
2. **"Transducer" is 探头** (as on the treatment page; see `ultherapy.md` note 1).
3. **Depths (1.5 / 3.0 / 4.5 mm, ~8 mm imaging)** are copied from the EN and stay attributed to Merz.
4. **zh FAQ 4 效果维持多久 / ms *tahan berapa lama*.** The EN asks "how long does it last" itself, so this is not added; the answer gives no duration and says it is not permanent.
5. **"Supports precision in planning rather than guaranteeing any specific outcome"** is 而不是保证任何特定的结果 / *bukan jaminan untuk sebarang hasil tertentu*: negated, expect L-03r warnings.
6. **seoTitle in both locales drops "Malaysia"** to stay distinct from the Ultherapy treatment page, which already targets "Ultherapy Malaysia".
