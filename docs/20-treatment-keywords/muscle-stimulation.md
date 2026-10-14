# 20. Treatment keyword log: Muscle Stimulation (`/treatments/muscle-stimulation`)

**Date:** 2026-10-14 · Treatment-page localisation round (format: `pico-laser.md`).
**Outputs:** `content/i18n/treatments/zh/muscle-stimulation.json`, `content/i18n/treatments/ms/muscle-stimulation.json` (same shape as the EN record). EN snapshot: `content/i18n/treatments/_en/muscle-stimulation.json`.
**Inputs:** EN record for `muscle-stimulation`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the translated `body-slimming` concern page (terminology carried over, see below).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME / NO VOLUME read as in `pico-laser.md` (skew signs: *dcard / ptt / 雷射* for Chinese; *bisa / perawatan / setelah / kontraksi … adalah* for Malay).
- **Decision:** KEYWORD = phrased around the real query form, English meaning kept. DIRECT = faithful translation.
- **Probes:** 98 zh (three batches) and 64 ms (two batches). Raw dumps: `C:/tmp/msde-ac-zh.json`, `C:/tmp/msde-ac-ms.json` (shared with the double-eyelid log; not in the repo).
- **Scope:** seoTitle, seoDescription, name, the five section headings and the four FAQ questions. This record has no jumpNav, routes, variantModule or ctaMid. All body copy is a direct, faithful translation.
- **Untranslated by design:** `slug`, `related`, `image`, `src`, `reviewedBy`, `lastReviewed`, top-level `category`, and the device names Schwarzy, Em-Fit and DEKA.
- **What demand there is sits on a competitor brand.** Both languages show real demand for `emsculpt` (BTL), with price and side-effect modifiers. Kaiteki's device is the DEKA Schwarzy, so naming Emsculpt on this page would misdescribe the treatment. It isn't used anywhere. Generic "muscle stimulation" queries in both languages are either consumer gadgets (肌肉刺激器) or physiotherapy and school biology. So this page is mostly DIRECT.
- **No weight-loss framing.** 减肥, 减脂 as a benefit, *kurus* and *buang lemak* are not used. 减脂 / *kurangkan lemak* appear only in the FAQ question whose answer is "No".

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Muscle Stimulation" | 肌肉刺激, 肌肉刺激 医美, 增肌, 增肌 医美, 电磁增肌, 磁力增肌, 肌肉塑形, emsculpt, schwarzy, 优力肌塑 | `肌肉刺激` → 肌肉刺激器有用吗, 肌肉刺激器效果ptt (consumer gadgets); `增肌` → 增肌粉, 增肌减脂 (fitness/diet); `增肌 医美`, `电磁增肌` return only themselves; `emsculpt` → neo, 价钱 (dcard); `schwarzy` → **schwarzy 优力肌塑**; `优力肌塑` → dcard, 价格, 是什么 | DIRECT: **肌肉刺激** (terms.ts, `_treatment-names.md`). 增肌 implies building muscle mass, a step beyond the EN "tone"; 增肌减脂 was already rejected (fat-loss claim). |
| **seoTitle** "Muscle Stimulation Treatment Malaysia \| Kaiteki" | 肌肉刺激 医美, emsculpt 马来西亚, 增肌 医美, 腹肌 医美 | "+马来西亚" forms empty; `腹肌 医美` → 腹肌医美价格, 韩国/dcard (an abs-only angle the EN doesn't take) | DIRECT: **马来西亚肌肉刺激疗程 \| Kaiteki** (20 chars) |
| **seoDescription** | as above + 电磁肌肉刺激, 电磁 肌肉 | `电磁肌肉刺激` empty; `电磁 肌肉` returns itself | DIRECT (77 chars). Names 腹部、大腿 from the body copy to reach length; ends with the EN free-consultation line. |
| sections[0] "What is Muscle Stimulation?" | 肌肉刺激是什么, emsculpt 是什么 | first empty; second → emsculpt neo 是什么 (brand) | DIRECT: **肌肉刺激是什么？** |
| sections[1] "What is a supramaximal contraction?" | 超极限收缩, 超等长收缩, 超强收缩, emsculpt 收缩, emsculpt 原理, 肌肉收缩, 肌肉收缩原理 | the supramaximal forms are all empty; `肌肉收缩` → 原理, 类型 (biology); `emsculpt原理` returns (brand) | DIRECT: **超极限肌肉收缩是什么？** (超极限 is the term the device makers use in Chinese) |
| sections[2] "Who cannot have electromagnetic muscle stimulation?" | 肌肉刺激 禁忌, emsculpt 禁忌, emsculpt 心脏起搏器, emsculpt 铜环, emsculpt 怀孕, emsculpt 适合什么人 | all empty | DIRECT: **哪些人不能做电磁肌肉刺激？** |
| sections[3] "What does a Schwarzy session feel like, and what are the side effects?" | emsculpt 感觉, emsculpt 痛吗, emsculpt 副作用, 肌肉刺激 副作用, 电磁增肌 副作用, emsculpt 酸痛 | only `emsculpt 副作用` returns itself (competitor brand) | DIRECT: **做 Schwarzy 是什么感觉？有什么副作用？** |
| sections[4] "Why is muscle stimulation booked as a block?" | emsculpt 疗程, 肌肉刺激 疗程, 增肌疗程 | `emsculpt 疗程` returns (brand); others empty | DIRECT: **为什么肌肉刺激要按一组疗程来预约？** |
| FAQ 1 "Is Muscle Stimulation a substitute for exercise?" | emsculpt 可以代替运动吗, emsculpt 可以代替运动, 医美 代替 运动, 躺着练腹肌 | all empty except `躺着练腹肌` (itself; implies "abs without exercise", the opposite of the EN) | DIRECT: **肌肉刺激可以代替运动吗？** |
| FAQ 2 "Does it reduce fat?" | emsculpt 减脂, emsculpt 减肥, 肌肉刺激 减脂, 肌肉刺激 可以减脂吗, 增肌 可以减脂吗 | only `增肌可以减脂吗` returns | KEYWORD (pattern): **肌肉刺激可以减脂吗？** The answer opens 不能, so the question carries no claim. 减肥 avoided. |
| FAQ 3 "Is there any downtime?" | emsculpt 恢复期, 肌肉刺激 恢复期 | empty | DIRECT: **做完有恢复期吗？** |
| FAQ 4 "How many sessions will I need?" | emsculpt 几次, emsculpt 做几次, emsculpt 要做几次, emsculpt 多久做一次, 肌肉刺激 几次, 增肌 几次 | only `emsculpt neo 多久做一次` (brand) | DIRECT: **肌肉刺激要做几次？** |

**Chinese tally (12 logged strings):** 1 KEYWORD, 11 DIRECT.

**Not usable:** `emsculpt` family (competitor device, dcard/ptt-tagged); `优力肌塑` (Schwarzy's Chinese trade name, Taiwan-led: dcard); `增肌` / `增肌减脂` (fitness and fat-loss framing); `腹肌 医美` and `马甲线 医美` (abs-only, KR/TW-led); `肌肉刺激器` (home gadgets).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Muscle Stimulation" | muscle stimulation, muscle stimulation malaysia, rangsangan otot, rawatan rangsangan otot, ems otot, schwarzy, schwarzy malaysia, emsculpt malaysia | `muscle stimulation` → therapy, machine, physiotherapy, foot drop (physio); `rangsangan otot` → otot polos, otot lurik (ID school biology); `emsculpt malaysia` → price (competitor brand); `schwarzy` → treatment, deka, reviews (English, global) | DIRECT: **Rangsangan Otot** (terms.ts, `_treatment-names.md`) |
| **seoTitle** | rawatan rangsangan otot, muscle stimulation malaysia, rawatan otot perut, body toning malaysia | all empty; `rawatan otot` → koyak, bengkak (injury care) | DIRECT: **Rawatan Rangsangan Otot di Malaysia \| Kaiteki** (45 chars) |
| **seoDescription** | tona otot, rawatan tona otot, tona badan, mengencangkan otot | `tona otot`, `rawatan tona otot` empty; `mengencangkan otot` → *setelah melahirkan* (ID) | DIRECT (153 chars). *Tona otot* as on the ms body-slimming page. |
| sections[0] "What is Muscle Stimulation?" | apa itu muscle stimulation, muscle stimulation untuk apa, apa itu emsculpt | first two empty; third → emsculpt itu apa (brand) | DIRECT: **Apa itu rangsangan otot?** |
| sections[1] "What is a supramaximal contraction?" | pengecutan otot, kontraksi otot, pengecutan otot supramaksimal, supramaximal contraction | `pengecutan otot` → luar kawal, in english (MY school term); `kontraksi otot` → *adalah, otot polos* (ID-leaning); `supramaximal contraction` → supramaximal muscle contractions (English) | KEYWORD (term): **Apa itu pengecutan otot supramaksimal?** *Pengecutan*, not *kontraksi*. |
| sections[2] "Who cannot have…?" | emsculpt pacemaker, emsculpt iud, emsculpt hamil, siapa tidak boleh | `emsculpt pacemaker`, `emsculpt copper iud` (English, brand); `emsculpt hamil` → Hamilton; `siapa tidak boleh` is food/religion noise | DIRECT: **Siapa yang tidak boleh menjalani rangsangan otot elektromagnet?** *Perentak jantung (pacemaker)* and *IUD kuprum* in body. |
| sections[3] "What does a Schwarzy session feel like, and what are the side effects?" | schwarzy treatment, emsculpt sakit, emsculpt kesan sampingan | `schwarzy treatment` → reviews, **side effects** (English); Malay forms empty | KEYWORD (pattern, weak): **Bagaimana rasanya sesi Schwarzy, dan apa kesan sampingannya?** (*kesan sampingan* is the MY term used in the pilot) |
| sections[4] "Why is muscle stimulation booked as a block?" | emsculpt berapa sesi, berapa sesi | empty / exam noise (ID) | DIRECT: **Kenapa rangsangan otot ditempah sebagai satu set sesi?** |
| FAQ 1 "A substitute for exercise?" | emsculpt ganti senaman, boleh ganti senaman | empty | DIRECT: **Boleh ke rangsangan otot ganti senaman?** |
| FAQ 2 "Does it reduce fat?" | emsculpt lemak, emsculpt kurus, emsculpt boleh kurus ke, rawatan kurangkan lemak, kurangkan lemak perut | `kurangkan lemak perut` → cara, senaman (MY); emsculpt forms empty | KEYWORD (term): **Boleh ke ia kurangkan lemak?** Answer opens *Tidak*. *Kurus* not used (weight-loss framing). |
| FAQ 3 "Is there any downtime?" | ada downtime, emsculpt downtime | `ada downtime` → hifu ada downtime, **pico laser ada downtime** (MY pattern, docs/18 §6) | KEYWORD: **Ada downtime ke?** |
| FAQ 4 "How many sessions?" | emsculpt berapa kali, emsculpt berapa sesi | empty | DIRECT: **Perlu buat berapa sesi?** |

**Malay tally (12 logged strings):** 4 KEYWORD, 8 DIRECT.

**Indonesian pollution seen and avoided:** *rangsangan otot polos / lurik* (ID biology), *kontraksi otot adalah*, *mengencangkan otot perut setelah melahirkan*, *berapa sesi tka/skd*, *tidak ada downtime artinya*.

## Terms carried over from the concern pages

| EN | zh | ms | Source |
|---|---|---|---|
| muscle tone / body-toning | 肌肉线条 | tona otot | body-slimming |
| exercise-like soreness / aching | 像运动后的酸痛 | rasa lenguh seperti selepas bersenam | body-slimming |
| pacemaker / metal implant | 心脏起搏器 / 金属植入物 | perentak jantung (pacemaker) / implan logam | body-slimming |
| applicator | 治疗头 | aplikator | body-slimming |
| fat freezing / microwave contouring | 冷冻溶脂 / 微波塑形 | fat freezing / kontur badan gelombang mikro | terms.ts |
| tenderness | 触痛 | rasa sengal | body-slimming |
| downtime | 恢复期 | downtime | docs/18 §6 |

## For the bilingual doctor-reviewer

1. **"Supramaximal contraction"** is 超极限肌肉收缩 / *pengecutan otot supramaksimal*. Confirm the Chinese term (some sources write 超强收缩).
2. **Copper IUD** is 铜质宫内节育器（铜环） / *IUD kuprum*. Confirm the colloquial 铜环 gloss is acceptable.
3. **"Em-Fit"** is kept as written in EN (Schwarzy (Em-Fit)). Schwarzy's Chinese trade name 优力肌塑 has some search demand but it's Taiwan-led; not added. Add it in brackets only if the reviewer wants it.
4. **"Voluntary exercise"** is 自己运动 / *senaman biasa*. *Senaman biasa* ("ordinary exercise") is the natural Malay; confirm it doesn't read as weaker than "voluntary".
5. **Fat words** appear only in the "Does it reduce fat?" question and its "No" answer, and as the names of other treatments. No 减肥 / *kurus* anywhere.
