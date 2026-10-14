# 19. Concern keyword log: Enlarged pores (`/concerns/enlarged-pores`)

**Date:** 2026-10-14 · Follows the pilot method in `acne.md`.
**Outputs:** `content/i18n/concerns/zh/enlarged-pores.json`, `content/i18n/concerns/ms/enlarged-pores.json` (same shape as the EN record).
**Inputs:** EN record for `enlarged-pores`, `docs/18-trilingual-keyword-map.md` §5 (display names) and §7 (avoid list).

## Method

Same as the pilot (`acne.md` §Method): Google Autocomplete as the volume proxy (`client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`); **KEYWORD** when a relevant, non-skewed suggestion exists and the string is phrased around it with the English meaning kept; **DIRECT** when nothing relevant comes back.

- **Probes:** 110 zh and 79 ms, in four batches. Raw dumps are in the session scratchpad, not in the repo.
- **Scope:** search-relevant strings only. Body copy is a direct, faithful translation.
- **No `seeDoctor.heading`, `locationBlock` or `variant.tabs` in the source.** The variant is `kind: "pairs"` (myths vs facts), so only its heading is logged. The risks, cost, FAQ and first-visit H2s come from `concern-ui.ts`.
- **Taiwan skew is heavy on this topic** (dcard / ptt / 雷射 / 保养品 in most zh lists). Only the shared stem was used, never the TW wording.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Enlarged Pores" | 毛孔粗大, 毛孔变大, 缩毛孔 | `毛孔粗大` → 怎么办, 怎么改善, 的原因, 用什么护肤品, 可以改善吗 | KEYWORD: **毛孔粗大** (docs/18 §5 confirmed) |
| **seoTitle** "Enlarged Pores Treatment & Assessment in Malaysia \| Kaiteki" | 毛孔粗大治疗, 毛孔粗大 医美, 毛孔粗大怎么改善, 毛孔粗大 疗程, 毛孔粗大 马来西亚, 缩毛孔 医美 | `毛孔粗大怎么改善` → …医美; `毛孔粗大 医美` → 费用, 推荐 (TW noise); `毛孔粗大 疗程` returns itself; "+马来西亚" empty | KEYWORD: **马来西亚毛孔粗大改善疗程与评估 \| Kaiteki** (25 chars). 改善 from the AC; 马来西亚 kept for the EN geo intent. |
| **seoDescription** | (same family) | as above | KEYWORD: 毛孔粗大 ×2, 疗程, 免费咨询 (78 chars) |
| sections[0] "What are enlarged pores?" | 毛孔粗大是什么, 什么是毛孔粗大 | `毛孔粗大是什么` → 毛孔粗大是什么原因; `什么是毛孔粗大` nothing | KEYWORD: **毛孔粗大是什么？** |
| sections[1] "Types of pores" | 毛孔类型, 毛孔种类 | both return themselves | KEYWORD: **毛孔的类型** |
| sections[2] "Pores, blackheads and sebaceous filaments" | 毛孔 黑头, 皮脂腺丝, 黑头 皮脂腺丝, 草莓鼻, 黑头 粉刺 区别 | `毛孔 黑头` → 毛孔黑头, 毛孔 黑头 粉刺, 鼻子 毛孔 黑头; `皮脂腺丝` returns itself; `草莓鼻` strong but not used (would add a term the EN lacks) | KEYWORD: **毛孔、黑头和皮脂腺丝** |
| drivers.heading "What makes pores look larger" | 毛孔粗大的原因, 毛孔粗大原因, 为什么毛孔会变大, 毛孔为什么会变大, 毛孔粗大的原因有哪些 | `毛孔粗大的原因` is the 4th suggestion for `毛孔粗大` and returns itself; `为什么毛孔会变大` returns itself | KEYWORD: **毛孔粗大的原因** |
| jumpNav "What makes them visible" | as above | as above | KEYWORD: **毛孔粗大原因** |
| variant.heading "Pore myths and what is actually true" | 毛孔迷思, 毛孔粗大 迷思, 毛孔 真相 | nothing | DIRECT: **关于毛孔的迷思与真相** |
| jumpNav "Myths and facts" | as above | nothing | DIRECT: **迷思与真相** |
| jumpNav "Treatments" | 毛孔粗大 疗程 | returns only itself | DIRECT: **疗程** |
| jumpNav "Compare options" | 毛孔粗大 对比 | nothing | DIRECT: **疗程比较** |
| jumpNav "Risks" | (pilot) | n/a | DIRECT: **风险** |
| jumpNav "Cost" | 毛孔 价钱, 毛孔粗大 价钱, 缩毛孔 价钱 | only `雷 射 毛孔 价钱` (TW); concern+price empty | KEYWORD (term choice, docs/18 §6): **价钱** |
| jumpNav "FAQ" | (pilot) | n/a | DIRECT: **常见问题** |
| compare.columns "Downtime" | 毛孔 恢复期 (empty); docs/18 §6 | carried from docs/18 | KEYWORD: **恢复期** |
| compare.columns other three | n/a | n/a | DIRECT: 你注意到的情况 / 常考虑的疗程 / 一般疗程安排 |
| ctaMid.heading "Not sure what is behind your pores?" | n/a (conversion copy) | n/a | DIRECT: 不确定你的毛孔为什么明显？ |
| ctaHeading "Want to know what is making yours visible?" | n/a | n/a | DIRECT: 想知道你的毛孔为什么这么明显吗？ |
| FAQ 1 "Can pores be shrunk permanently?" | 毛孔可以缩小吗, 毛孔能缩小吗, 毛孔 永久, 毛孔能永久缩小吗 | `毛孔可以缩小吗`, `毛孔能缩小吗` return; `毛孔 永久` → 永久 缩小 毛孔 | KEYWORD: **毛孔可以永久缩小吗？** (the answer opens with a plain no; L-03r flag is expected) |
| FAQ 2 "Do pores open and close?" | 毛孔会张开吗, 毛孔会打开吗, 热水 毛孔, 冷水 毛孔, 冷水洗脸可以缩小毛孔吗 | open/close forms empty; `冷水 毛孔` → 冷水 洗脸 缩小 毛孔; `冷水洗脸可以缩小毛孔吗` returns exactly | KEYWORD: **毛孔会张开和闭合吗？冷水洗脸能缩小毛孔吗？** (adds the cold-water form; the EN answer already covers it) |
| FAQ 3 "Is skincare or in-clinic treatment better for pores?" | 毛孔粗大 护肤品, 毛孔 护肤还是医美, 毛孔粗大 医美 还是 保养品 | `毛孔粗大用什么护肤品` (in the name list), `毛孔粗大 医美` strong; the either/or form empty | KEYWORD: **毛孔粗大，靠护肤品还是做医美疗程比较好？** |
| FAQ 4 "Why are my pores bigger on my nose and cheeks?" | 鼻子毛孔粗大, 脸颊毛孔粗大, 脸颊毛孔粗大原因, 鼻子 毛孔 | `鼻子毛孔粗大` → 怎么办; `脸颊毛孔粗大` → 怎么办, 原因; `脸颊毛孔粗大原因` returns | KEYWORD: **为什么鼻子和脸颊的毛孔特别粗大？** |
| FAQ 5 "Are the dark dots on my nose blackheads?" | 鼻子黑点, 鼻子黑头, 鼻子上的黑点是黑头吗, 鼻子黑点是什么 | `鼻子黑头` → 怎么去除, 原因, 粉刺; `鼻子黑点` → dcard; the full question empty | KEYWORD: **鼻子上的黑点是黑头吗？** |
| FAQ 6 "Do pore strips and extractions help?" | 鼻贴, 鼻贴有用吗, 去黑头鼻贴, 挤黑头, 挤黑头 毛孔变大 | `鼻贴有用吗` returns exactly; `挤黑头` → 挤黑头 毛孔变大 | KEYWORD: **鼻贴和挤黑头有用吗？** |
| FAQ 7 "Does the humid weather in Malaysia make pores worse?" | 天气 毛孔, 天气热 毛孔粗大, 毛孔粗大 湿热, 马来西亚 天气 毛孔 | `天气 毛孔` → 天气 热 毛孔 粗大; `天气热 毛孔粗大` returns | KEYWORD: **马来西亚天气湿热，毛孔会更粗大吗？** |
| FAQ 8 "How many sessions will I need?" | 毛孔 疗程 几次, 缩毛孔 要做几次 | nothing | DIRECT: **需要做几次疗程？** |
| FAQ 9 "Is treatment for pores safe for darker or Asian skin tones?" | 毛孔 深色皮肤 激光, 毛孔粗大 深肤色 (empty); pilot `激光反黑` | carried from pilot | KEYWORD (pattern): **肤色较深或亚洲人做毛孔疗程安全吗？会反黑吗？** (answer stays conditional) |
| FAQ 10 "Will my pores come back after treatment?" | 毛孔 反弹, 毛孔粗大 会复发吗, 毛孔粗大 会再变大吗 | nothing | DIRECT: **疗程后毛孔会再变粗大吗？** |
| FAQ 11 "Can enlarged pores be a sign of something else?" | 毛孔粗大 疾病, 毛孔粗大 是 病, 巨大毛孔, 单个毛孔粗大, 毛孔粗大 黄色小颗粒 | nothing (but `皮脂腺增生` is strong; see reviewer note 3) | DIRECT: **毛孔粗大会是其他问题的迹象吗？** |
| FAQ 12 "What should I stop before treatment?" | 疗程前 停用 a酸, 做激光前 停用 a酸, 激光前要停a酸吗 | nothing | DIRECT: **疗程前需要停用什么？** |

**Chinese tally (31 logged strings):** 18 KEYWORD, 13 DIRECT. The two CTA headings and the three other compare columns (one row) count as DIRECT.

**Not usable (no MY demand or TW-skewed):** `毛孔粗大 马来西亚`, `毛孔粗大 价钱`, `缩毛孔 价钱`, `毛孔粗大 射频微针`; `缩毛孔` and `毛孔粗大 皮秒` are dominated by dcard / 雷射.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Enlarged Pores" | liang pori besar, liang roma besar, pori besar | `liang pori besar` → kenapa liang pori besar, liang pori muka besar, skincare untuk liang pori besar; `pori besar` → karena apa, pakai kandungan apa (Indonesian) | KEYWORD: **Liang Pori Besar** (docs/18 §5) |
| **seoTitle** | rawatan liang pori besar, rawatan liang roma besar, rawatan liang pori, harga rawatan liang pori di malaysia | `rawatan liang pori` → rawatan liang pori terbuka; the "besar" and price forms are empty | KEYWORD: **Rawatan & Penilaian Liang Pori Besar di Malaysia \| Kaiteki** (58 chars). Built on the strong `liang pori besar` stem. *Terbuka* was not used in the title because the page says pores do not open and close. |
| **seoDescription** | (same family) | as above | KEYWORD: liang pori besar, doktor, konsultasi percuma (159 chars) |
| sections[0] "What are enlarged pores?" | apa itu liang pori | returns exactly | KEYWORD: **Apa itu liang pori besar?** |
| sections[1] "Types of pores" | jenis liang pori | nothing | DIRECT: **Jenis liang pori** |
| sections[2] "Pores, blackheads and sebaceous filaments" | blackhead hidung, sebaceous filament, filamen sebum, blackhead atau sebaceous filament, blackhead vs sebaceous filament | `blackhead hidung` → blackhead kat hidung, pelekat hidung blackhead (MY); `sebaceous filament` → …vs blackheads, itu apa; `filamen sebum` returns itself | KEYWORD: **Liang pori, blackhead dan filamen sebum (sebaceous filament)** |
| drivers.heading "What makes pores look larger" | kenapa liang pori besar, punca liang pori besar, punca liang roma besar | `kenapa liang pori besar` is the 2nd suggestion for the name and returns exactly; *punca* forms empty | KEYWORD: **Kenapa liang pori nampak besar** |
| jumpNav "What makes them visible" | as above | as above | KEYWORD: **Kenapa liang pori besar** |
| variant.heading "Pore myths and what is actually true" | mitos liang pori | nothing | DIRECT: **Mitos liang pori dan faktanya** |
| jumpNav "Myths and facts" | as above | nothing | DIRECT: **Mitos dan fakta** |
| jumpNav "Treatments" | (pilot) | n/a | KEYWORD (term, docs/18 §2.2): **Rawatan** |
| jumpNav "Compare options" | n/a | n/a | DIRECT: **Bandingkan pilihan** |
| jumpNav "Risks" | (pilot) | n/a | DIRECT: **Risiko** |
| jumpNav "Cost" | kos rawatan liang pori | nothing | DIRECT: **Kos** (docs/18 term) |
| jumpNav "FAQ" | (pilot) | n/a | DIRECT: **Soalan lazim** |
| compare.columns "Downtime" | docs/18 §6 (`pico laser ada downtime`) | carried from docs/18 | KEYWORD: **Downtime** (kept in English) |
| compare.columns other three | n/a | n/a | DIRECT: Apa yang anda perasan / Biasa dipertimbangkan / Kursus biasa |
| ctaMid.heading | n/a | n/a | DIRECT: Tak pasti apa punca liang pori anda? |
| ctaHeading | n/a | n/a | DIRECT: Nak tahu kenapa liang pori anda nampak ketara? |
| FAQ 1 "Can pores be shrunk permanently?" | cara kecilkan liang pori, liang pori boleh kecil ke, kecilkan liang pori kekal, liang pori boleh kecil | `cara kecilkan liang pori` → …muka, cara nak kecilkan liang pori (MY *kecilkan*); the *boleh … ke* and *kekal* forms are empty | KEYWORD: **Liang pori boleh dikecilkan secara kekal ke?** (answer opens with a plain no; L-03r flag expected) |
| FAQ 2 "Do pores open and close?" | liang pori terbuka, kenapa liang pori terbuka, liang pori buka tutup, air panas buka liang pori, air sejuk tutup liang pori | `liang pori terbuka` → kenapa, rawatan, cara merawat liang pori terbuka (strong MY); buka/tutup forms empty | KEYWORD: **Liang pori boleh terbuka dan tertutup ke?** |
| FAQ 3 "Skincare or in-clinic treatment?" | skincare liang pori besar, liang pori besar penjagaan kulit, rawatan muka liang pori | `skincare untuk liang pori besar` returns (also in the name list) | KEYWORD: **Skincare atau rawatan klinik, mana lebih sesuai untuk liang pori besar?** |
| FAQ 4 "Why bigger on my nose and cheeks?" | liang pori besar di hidung / di pipi, liang roma besar di hidung, pori besar di pipi | MY forms empty; `pori besar di pipi / di hidung` exist but are Indonesian-led; `kenapa liang pori besar` strong | KEYWORD (on *kenapa liang pori besar*): **Kenapa liang pori lebih besar di hidung dan pipi?** |
| FAQ 5 "Are the dark dots on my nose blackheads?" | bintik hitam di hidung, komedo hitam di hidung, blackhead hidung, bintik hitam di hidung blackhead | `bintik hitam di hidung` → …tapi bukan komedo, itu apa (ID-leaning but exactly this intent); `blackhead hidung` → blackhead kat hidung (MY) | KEYWORD: **Bintik hitam di hidung saya ni blackhead ke?** |
| FAQ 6 "Do pore strips and extractions help?" | pore strip, picit blackhead, pelekat hidung blackhead | `pore strip` returns (English); `picit blackhead` → bolehkah picit blackhead, cara picit blackhead dengan betul (MY *picit*) | KEYWORD: **Pore strip dan picit blackhead membantu ke?** |
| FAQ 7 "Humid weather in Malaysia?" | cuaca panas liang pori, cuaca panas kulit berminyak, cuaca lembap kulit berminyak | nothing | DIRECT: **Cuaca lembap di Malaysia buat liang pori lebih teruk ke?** |
| FAQ 8 "How many sessions?" | berapa sesi rawatan liang pori | nothing | DIRECT: **Perlu buat berapa sesi?** |
| FAQ 9 "Safe for darker or Asian skin?" | liang pori besar kulit gelap (empty), laser kulit gelap | `laser kulit gelap` returns (pilot, docs/18) | KEYWORD: **Rawatan liang pori selamat ke untuk kulit gelap, sawo matang atau kulit Asia?** |
| FAQ 10 "Will my pores come back?" | liang pori besar datang balik | nothing | DIRECT: **Liang pori akan nampak besar semula selepas rawatan?** |
| FAQ 11 "Sign of something else?" | liang pori besar tanda penyakit, hiperplasia sebaceous | condition form empty; `hiperplasia sebaceous` → English/clinical forms | DIRECT: **Liang pori besar boleh jadi tanda masalah lain ke?** |
| FAQ 12 "What should I stop before treatment?" | berhenti guna retinol sebelum laser, retinol sebelum laser | nothing | DIRECT: **Apa yang perlu dihentikan sebelum rawatan?** |

**Malay tally (31 logged strings):** 16 KEYWORD, 15 DIRECT. The CTA headings and the other compare columns count as DIRECT.

**Indonesian pollution seen and avoided:** pori besar (karena apa, pakai kandungan apa), komedo hitam di hidung (apakah bisa hilang), bintik hitam di hidung (namanya apa). *Wajah*, *pori* alone and *perawatan* are not used anywhere.

## For the bilingual doctor-reviewer

1. **The EN summary mentions "skin boosters", but the page's treatment list has none** (microneedling, pico, RF, resurfacing, facials). Both locales translate the summary faithfully (水光针（Skin Booster） / *skin booster*). The EN may need fixing at source.
2. **皮脂腺丝 / filamen sebum (sebaceous filament)** for sebaceous filaments. Both have AC; Malay keeps the English in brackets because the English form has far more demand.
3. **The "small yellowish bumps with a central dip" are sebaceous hyperplasia,** which EN does not name. `皮脂腺增生` has strong zh AC (治疗, 原因, 费用). Naming it would help AEO, but it adds a diagnosis the EN avoids, so it's not named. The doctor's call.
4. **Myth 3 and FAQ 1 use 永久 / *kekal*** only to deny it ("毛孔无法永久闭合", "tidak boleh … secara kekal"). The validator flags these four strings (L-03r); each one is a negation.
5. **"Open pores" in Malay.** *Liang pori terbuka* is how Malaysians search, and it is used in FAQ 2 and the exam step ("liang pori terbuka" for EN "open pores"). The FAQ answer then explains pores don't actually open. Please confirm that's the right balance.
6. **A酸类（维A酸）** used for retinoids in zh (pilot precedent); Malay uses *retinoid*.
7. **"Skincare" is used as a Malay word** in FAQ 3 (AC `skincare untuk liang pori besar`); *penjagaan kulit* is used everywhere else.
8. **Compare row "Single large pore or new bumps"** is rendered 单个特别大的毛孔或新出现的小颗粒 / *Satu liang pori besar atau bintil baharu*.

## Re-sync 2026-10-14 (English rewrite)

The sync tool kept every translation whose English was unchanged and blanked 28 strings per locale. **None of the 28 is search-relevant** (no seoTitle, seoDescription, name, headings, tab titles, compare columns, FAQ questions or jumpNav labels were reworded), so no Autocomplete probes were run and every decision above still stands.

### Chinese (`/zh`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| (none) | n/a | n/a | n/a |

### Malay (`/ms`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| (none) | n/a | n/a | n/a |

**Body blanks translated directly:** 28 zh, 28 ms (leadAnswer, banner alt, facts[2], sections[0] body, drivers/variant/seeDoctor intros, ctaMid body, treatments intro and note, two treatmentWhy bodies, compare intro, first-visit intro and steps, risks[1], cost intro, nine FAQ answers). Most are the old translation trimmed to the shorter English; nothing was added or strengthened.

**Reviewer notes**

1. `firstVisit.steps[2].title` "Discussion and plan" reuses the wording already used on other concern pages: 讨论与计划 / *Perbincangan dan pelan*.
2. New EN step body ends "No obligation to proceed": 你没有义务继续进行疗程 / *Tiada kewajipan untuk meneruskan*.
3. New `treatmentsNote` (active acne settled first): 活跃的暗疮 / *jerawat aktif*.
4. "T-zone" rendered T字部位 / *zon T*.
5. The four zh and four ms L-03r warnings (永久 / *kekal*) are the existing negations in myth 3 and FAQ 1; FAQ 1's answer still opens with the denial. One new *kekal* in the ms sections body was reworded to *tetap tegang* to avoid a false flag.
