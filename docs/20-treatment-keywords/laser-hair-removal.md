# 20. Treatment keyword log: Laser Hair Removal (`/treatments/laser-hair-removal`)

**Date:** 2026-10-14 · Treatment-page localisation round, following the `pico-laser.md` pilot.
**Outputs:** `content/i18n/treatments/zh/laser-hair-removal.json`, `content/i18n/treatments/ms/laser-hair-removal.json` (same shape as the EN record). EN snapshot: `content/i18n/treatments/_en/laser-hair-removal.json`.
**Inputs:** EN record for `laser-hair-removal`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md` (which flags 是永久的吗 / *secara kekal*), and the `hair-loss` concern page (for the exosome cross-link wording).

## Method

Same as `pico-laser.md`: Google Autocomplete (`suggestqueries.google.com`, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`). HAS VOLUME = the phrase or a natural Malaysian form of it comes back without a TW/HK/ID skew → **KEYWORD** (string phrased around the real query, EN meaning kept). NO VOLUME → **DIRECT** (faithful translation).

- **Probes:** 55 zh and 50 ms for this page, run in a shared batch with `vascular-pigment-laser`. Raw dumps: `C:/tmp/vlhr-ac-zh.json`, `C:/tmp/vlhr-ac-zh2.json`, `C:/tmp/vlhr-ac-ms.json`, `C:/tmp/vlhr-ac-ms2.json` (not in the repo).
- **Scope:** search-relevant strings only (name, seoTitle, seoDescription, ctaMid heading, two section headings, four FAQ questions). This record has no jumpNav, routes or variantModule. All body copy (facts, avoidIf, session steps, after-session bands, risks, cost factors, relatedReasons, FAQ answers, caption) is a direct, faithful translation.
- **The permanence rule.** The EN says "reduce" and "not permanent removal" throughout. Both locales keep **reduce** (减少 / *mengurangkan*) everywhere, and 永久 / *kekal* appear only in the negated cannotDo line, the FAQ that the answer opens with 不是 / *Tidak*, and the pigment-type term 半永久化妆 / *solekan separa kekal*. Demand for 激光脱毛是永久的吗 and *buang bulu secara kekal* is real, which is why the question is phrased that way: it meets the query and answers it honestly.
- **Device names stay Latin:** Alma. Soprano is *not* added: the EN names only "the Alma platform".

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Laser Hair Removal" | 激光脱毛, 脱毛, 冰点脱毛, 光子脱毛, ipl 脱毛 | `激光脱毛` → **是永久的吗**, 的坏处, 多久一次, 价格, 和冰点脱毛的区别 (strong) | KEYWORD: **激光脱毛** (terms.ts, kept) |
| **seoTitle** "Laser Hair Removal Malaysia \| IPL & RF Treatment \| Kaiteki" | 激光脱毛 马来西亚, 脱毛 马来西亚, 激光脱毛价钱, ipl rf 脱毛, 射频 脱毛 | `脱毛 马来西亚` → **激光 脱毛 马来西亚** (MY signal); `ipl rf 脱毛` returns itself; `激光脱毛价钱` → 香港 (HK) | KEYWORD: **马来西亚激光脱毛（IPL 与射频） \| Kaiteki** (27 chars) |
| **seoDescription** | (same family) + 激光脱毛价格, 激光脱毛多少钱 | as above | KEYWORD: 马来西亚激光脱毛, IPL, 射频, 减少毛发, 免费咨询, 医生评估 (81 chars). No price words: the EN has none. |
| ctaMid.heading "Not sure whether your hair and skin suit light-based removal?" | 激光脱毛 适合, 激光脱毛适合什么人, 激光脱毛 不适合 | all empty | DIRECT: **不确定你的毛发和肤质适不适合光疗脱毛？** |
| sections[0] "What is Laser Hair Removal?" | 激光脱毛是什么, ipl是什么 | `激光脱毛是什么` empty | DIRECT: **激光脱毛是什么？** |
| sections[1] "Why does hair removal need a course of sessions?" | 激光脱毛原理, 激光脱毛为什么要做几次, 毛发生长周期, 激光脱毛 疗程 | `激光脱毛原理` returns; `毛发生长周期` → 毛发生长周期 脱毛, 除毛 (除毛 / 雷射 forms are TW); the 为什么 form and 疗程 are empty | KEYWORD: **激光脱毛原理：为什么要做一系列疗程？** |
| FAQ 1 "How many sessions will I need?" | 激光脱毛几次, 激光脱毛要做几次, 激光脱毛要做多少次, 激光脱毛 疗程几次, 激光脱毛多久做一次, 激光脱毛多久一次 | 几次 forms all empty; **激光脱毛多久一次** is the 4th `激光脱毛` suggestion and returns itself | KEYWORD: **激光脱毛要做几次？多久做一次？** (the answer covers spacing: 每次相隔几个星期) |
| FAQ 2 "Is Laser Hair Removal permanent?" | 激光脱毛是永久的吗, 激光脱毛 永久, 激光脱毛后还会长吗, 激光脱毛 会再长吗, 激光脱毛 维持多久 | **激光脱毛是永久的吗** is the 2nd `激光脱毛` suggestion; `激光脱毛 永久` → 激光脱毛永久吗; regrowth forms empty | KEYWORD: **激光脱毛是永久的吗？** (exact query; the answer opens 不是) |
| FAQ 3 "Is it suitable for all skin tones and hair colours?" | 激光脱毛 肤色, 激光脱毛 深色皮肤, 激光脱毛 黑皮肤, 激光脱毛 白毛, 激光脱毛 白头发, 激光脱毛 所有肤色 | only `激光脱毛 白毛` returns | KEYWORD (partial): **所有肤色和毛发颜色都适合激光脱毛吗？白毛可以做吗？** (the answer already covers white and grey hair) |
| FAQ 4 "Is there any downtime?" | 激光脱毛恢复期, 激光脱毛有恢复期吗, 激光脱毛 恢复, 激光脱毛会红吗, 激光脱毛后 | 恢复 forms empty; `激光脱毛后` → 毛囊炎, 注意, 护理, 红点, 红肿, 黑点 | DIRECT: **激光脱毛有恢复期吗？** 红肿 not added: the answer mentions redness and warmth, not swelling. |

**Chinese tally (10 logged strings):** 7 KEYWORD, 3 DIRECT.

**Not usable:** 冰点脱毛 (strong, but it's a diode-laser marketing name for a different device; using it would misdescribe Alma IPL+RF), 激光脱毛价钱香港 (HK), `腋下脱毛 lihkg / dcard`, 毛发生长周期 雷射 (TW), `ipl 脱毛` → 脱毛仪, 家庭用 (home devices), `激光脱毛的坏处` (strong, but it frames a negative the EN doesn't headline; risks are covered in the body).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** | laser buang bulu, buang bulu laser, laser hair removal, rawatan laser buang bulu | `laser buang bulu` → muka, ketiak, rawatan laser buang bulu, harga laser buang bulu (MY); `buang bulu laser` → laser buang bulu, *hukum buang bulu guna laser* | KEYWORD: **Laser Buang Bulu** (terms.ts, kept) |
| **seoTitle** | laser buang bulu malaysia, laser hair removal malaysia, rawatan laser buang bulu, harga rawatan laser buang bulu, rawatan laser buang bulu di malaysia | `laser hair removal malaysia` → price, reddit (English, strong); `rawatan laser buang bulu` → harga rawatan laser buang bulu, kemaluan; Malay "+malaysia" forms empty | KEYWORD: **Rawatan Laser Buang Bulu di Malaysia \| IPL & RF \| Kaiteki** (57 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: laser buang bulu, IPL, radiofrekuensi, konsultasi percuma, doktor (154 chars) |
| ctaMid.heading | laser buang bulu sesuai, laser buang bulu sesuai untuk, laser buang bulu untuk semua | all empty | DIRECT: **Tak pasti sama ada bulu dan kulit anda sesuai untuk buang bulu dengan cahaya?** |
| sections[0] "What is…?" | apa itu laser buang bulu | empty | DIRECT: **Apa itu laser buang bulu?** |
| sections[1] "Why a course of sessions?" | kenapa laser buang bulu, kitaran pertumbuhan bulu, kitaran pertumbuhan rambut, berapa sesi laser buang bulu | `kitaran pertumbuhan bulu` and `kitaran pertumbuhan rambut` return themselves; `kenapa laser buang bulu` empty | KEYWORD (weak, term): **Kitaran pertumbuhan bulu: kenapa laser buang bulu perlu satu siri sesi?** |
| FAQ 1 "How many sessions?" | laser buang bulu berapa kali, laser buang bulu berapa sesi, laser hair removal berapa kali, ipl berapa kali, berapa sesi laser buang bulu | `laser hair removal berapa kali` returns; `ipl berapa kali` → sebulan, **ipl ketiak berapa kali sebulan**, ipl underarm berapa kali; Malay-only forms empty | KEYWORD (pattern): **Perlu buat laser buang bulu berapa kali?** (same pattern as pico FAQ 3) |
| FAQ 2 "Is it permanent?" | laser buang bulu kekal, laser buang bulu kekal ke, buang bulu kekal, laser hair removal kekal ke, laser hair removal permanent | **buang bulu kekal** → buang bulu secara kekal, buang bulu ketiak secara kekal, cara buang bulu kekal (strong MY); `laser hair removal permanent` → permanent or temporary, permanent or not | KEYWORD: **Laser buang bulu kekal ke?** (answer opens *Tidak*) |
| FAQ 3 "Suitable for all skin tones and hair colours?" | laser buang bulu kulit gelap, laser buang bulu bulu putih, laser buang bulu untuk semua, laser buang bulu sesuai untuk | all empty | DIRECT: **Sesuai ke untuk semua warna kulit dan warna bulu?** |
| FAQ 4 "Any downtime?" | laser buang bulu downtime, laser buang bulu ada downtime, laser hair removal downtime, selepas laser buang bulu, laser buang bulu pantang | `laser hair removal downtime` → face downtime, does … have downtime; Malay forms empty | KEYWORD (pattern): **Laser buang bulu ada downtime ke?** (*ada downtime* per docs/18 §6) |

**Malay tally (10 logged strings):** 7 KEYWORD, 3 DIRECT.

**Not used, and why:** *hukum buang bulu guna laser* / *hukum buang bulu ketiak* (a real Malay-market question, but a religious ruling is not ours to give; docs/18 §6 routes it to JAKIM/religious authorities, and it needs client sign-off as a locale-only FAQ); *rawatan laser buang bulu kemaluan* (real demand, but the EN doesn't list intimate areas; don't add); *ipl untuk apartemen / ipl wajah* (ID); *buang bulu ketiak watson / krim / kapur* (home products).

## Terms carried over / introduced

| EN | zh | ms | Source |
|---|---|---|---|
| IPL (intense pulsed light) | IPL（强脉冲光） | IPL (cahaya berdenyut berintensiti tinggi) | new; matches vascular-pigment-laser |
| radiofrequency | 射频 | radiofrekuensi | terms.ts (射频（RF） / Radiofrekuensi (RF)) |
| reduce (hair) | 减少 | mengurangkan | EN wording; never 永久脱毛 / *buang bulu kekal* as a claim |
| maintenance sessions | 保养疗程 | sesi penyelenggaraan | new |
| folliculitis | 毛囊炎 | folikulitis (radang folikel) | AC `激光脱毛 毛囊炎` |
| paradoxical stimulation of fine hair | 细毛反而受到刺激而变粗（反常性毛发增生） | rangsangan paradoks bulu halus | new |
| permanent makeup | 半永久化妆 | solekan separa kekal | pico-laser, tattoo-removal |
| keloid scarring | 蟹足肿 | parut keloid | pico-laser, acne |
| waxing / plucking / threading | 蜡脱毛 / 拔毛 / 绞毛 | waxing / mencabut / threading | new |
| clinician / practitioner | 医护人员 | pengamal | pico-laser |
| hair loss (exosome link) | 脱发 | rambut gugur | terms.ts concern names |

## For the bilingual doctor-reviewer

1. **Permanence words** appear only where the EN negates them (cannotDo[0], FAQ 2 answered 不是 / *Tidak*) or as the pigment-type term 半永久化妆 / *solekan separa kekal*. The validator warns (L-03r) on all three in each locale; each was re-read and is negated or a term.
2. **"Works best where there is more contrast"** is rendered as a comparative, 效果较好 / *lebih berkesan*, not 效果最好 / *paling berkesan*, to keep superlatives out. The meaning is unchanged.
3. **"Paradoxical stimulation of fine hair"**: zh glosses it as 细毛反而受到刺激而变粗（反常性毛发增生）. "变粗" (becoming coarser) is how paradoxical hypertrichosis presents, but the EN says only "stimulation". Drop 变粗 if the doctor wants it closer to the EN.
4. **"Clinician"** is 医护人员 / *pengamal* (the pilot's word for "practitioner"), because the EN says "trained clinician", not "doctor". If Kaiteki's LHR sessions are always doctor-performed, switch to 医生 / *doktor*.
5. **"The snap of a stamping device"** is 逐发打下去的仪器那种弹击感 / *rasa seperti petikan getah daripada alat yang menembak satu demi satu*, which reuses the pilot's rubber-band image for "snap". Confirm it doesn't read as a comparison with a named competitor device.
6. **"No downtime"** (durationDowntime) is 无恢复期 / *Tiada downtime*, faithful to the EN header, although the body says "usually minimal". Both are EN wording; flag only if the doctor wants the header softened in all three languages.
7. **zh FAQ 1 adds 多久做一次** and **zh FAQ 3 adds 白毛可以做吗**; both are covered by the existing answers (pilot precedent).
