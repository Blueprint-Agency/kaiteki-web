# 21. Technology keyword log: Pro Yellow (`/technology/pro-yellow`)

**Date:** 2026-10-14 · Device-page localisation round, following the `onda-coolwaves.md` pilot.
**Outputs:** `content/i18n/technology/zh/pro-yellow.json`, `content/i18n/technology/ms/pro-yellow.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/pro-yellow.json`.
**Inputs:** EN record for `pro-yellow`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `vascular-pigment-laser` treatment page (`docs/20-treatment-keywords/vascular-pigment-laser.md`) and the `vascular-lesions` concern page.

## Method

Same as the pilot: Google Autocomplete (`suggestqueries.google.com`, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`). HAS VOLUME = the phrase or a natural Malaysian form of it comes back without a TW/HK/ID skew → **KEYWORD** (string phrased around the real query, EN meaning kept). NO VOLUME → **DIRECT** (faithful translation).

- **Probes:** run in a shared batch with `m22-ipl`, `fractional-co2` and `alma` (150 zh, 136 ms in all; about 35 zh and 30 ms for this page). Raw dumps: `C:/tmp/pyma-ac-zh.json`, `-zh2`, `-zh3`, `C:/tmp/pyma-ac-ms.json`, `-ms2`, `-ms3` (not in the repo).
- **Scope:** search-relevant strings only (name, seoTitle, seoDescription, the seven section headings, the four FAQ questions). All body copy is a direct, faithful translation.
- **Pro Yellow demand is English-only in both languages.** Every Chinese form (`pro yellow 激光 / 是什么 / 副作用 / 几次 / 价钱`, `黄光激光`, `577 激光`) is empty. In Malay sessions, `pro yellow laser` returns, but it is Indonesian-led (*untuk apa, zap, erha, adalah*). So most headings come out DIRECT.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Pro Yellow (Quadrostar 577nm)" | pro yellow, pro yellow 激光, quadrostar, proyellow | `pro yellow` → pro yellow laser (English, plus ID chains); `quadrostar` → quadrostar pro yellow (laser); Chinese forms empty | KEYWORD (brand): kept in Latin |
| **seoTitle** "Pro Yellow 577nm Vascular Laser Treatment Malaysia \| Kaiteki" | pro yellow laser malaysia, pro yellow 价钱, 红血丝 激光, 玫瑰痤疮 激光, (血管激光 from the treatment log) | `pro yellow laser malaysia` empty; `红血丝 激光` returns itself; `玫瑰痤疮 激光` → 玫瑰痤疮激光价钱, 激光治疗; `血管激光` → 血管激光治疗 (treatment log) | KEYWORD: **马来西亚 Pro Yellow 血管激光 \| Kaiteki** (30 chars). 577nm dropped to fit; it stays in the H1 (`name`). |
| **seoDescription** | 红血丝, 脸上红血丝, 红血丝怎么消除 | `脸上红血丝` → 怎么消除, 原因; `红血丝` → 红血丝皮肤 脸部 | KEYWORD: Pro Yellow, QuadroStarPRO 577nm, 黄光激光, 脸部泛红, 红血丝, 免费咨询 (84 chars) |
| sections[0] "What is Pro Yellow?" | pro yellow 是什么 | empty | DIRECT: **Pro Yellow 是什么？** |
| sections[1] "How 577nm yellow light works" | pro yellow 原理, 黄光激光, 577 激光, 黄光 | all empty (`黄光` is people's names) | DIRECT: **577nm 黄光是怎样运作的** |
| sections[2] "What can 577nm treat, and when is it not the right wavelength?" | pro yellow 红血丝, pro yellow 玫瑰痤疮, 红血丝 激光 | Pro Yellow forms empty; `红血丝 激光` returns only itself | DIRECT: **577nm 能处理什么？什么时候它不是合适的波长？** |
| sections[3] "Why is 577nm discussed for Asian and more pigmented skin?" | 激光 深色皮肤, 亚洲人 激光 | empty | DIRECT: **为什么亚洲人和肤色较深的皮肤常会讨论 577nm？** |
| sections[4] "Why does your rosacea history matter before Pro Yellow?" | 玫瑰痤疮, 玫瑰痤疮 激光 | `玫瑰痤疮` → 是什么, 治疗方法, 原因, 症状; `玫瑰痤疮 激光` returns | KEYWORD (term): **做 Pro Yellow 之前，为什么玫瑰痤疮病史很重要？** 玫瑰痤疮 confirmed over 酒糟鼻; same term as vascular-lesions. |
| sections[5] "What happens during a Pro Yellow session, and why can vessels look grey afterwards?" | pro yellow 恢复期, pro yellow 痛吗, 激光后 血管 | empty | DIRECT: **Pro Yellow 疗程怎么进行？为什么之后血管可能看起来发灰？** |
| sections[6] "What are Pro Yellow's risks, and can treated vessels recur?" | pro yellow 副作用, 红血丝 复发, 红血丝会复发吗 | empty | DIRECT: **Pro Yellow 有什么风险？处理过的血管会复发吗？** |
| FAQ 1 "Why is 577nm yellow light used for redness and visible vessels?" | 红血丝, 脸上红血丝 | `脸上红血丝` → 怎么消除 (MY-neutral); `红血丝` also suggests 雷射 (TW, not used) | KEYWORD (term): **为什么用 577nm 黄光处理泛红和红血丝？** 红血丝 is the lay term for visible facial vessels (vascular-lesions, vascular-pigment-laser title). The answer keeps 血管. |
| FAQ 2 "How is Pro Yellow different from IPL for facial redness?" | pro yellow 和, 光子嫩肤 和, pro yellow vs | `光子嫩肤 和` → 光子嫩肤和皮秒区别 (pattern); `pro yellow vs` → vbeam, dual yellow (English) | KEYWORD (pattern): **处理脸部泛红，Pro Yellow 和 IPL（光子嫩肤）有什么区别？** Same IPL gloss and 区别 form as vascular-pigment-laser FAQ 1. |
| FAQ 3 "Is Pro Yellow suitable for pigmented Asian skin?" | 激光 深色皮肤, 亚洲人 激光 | empty | DIRECT: **Pro Yellow 适合肤色较深的亚洲人吗？** |
| FAQ 4 "Will my facial redness stay away after a course of Pro Yellow?" | 红血丝会复发吗, 玫瑰痤疮可以根治吗 | `玫瑰痤疮可以根治吗` returns, but 根治 is a banned cure word (docs/18 §7.1); the 复发 forms are empty | DIRECT: **做完一个疗程的 Pro Yellow，脸部泛红会不会再出现？** |

**Chinese tally (14 logged strings):** 6 KEYWORD, 8 DIRECT.

**Not usable:** `玫瑰痤疮激光lihkg` (HK), `红血丝雷射` (TW), `红血丝眼药水` (eyes), `玫瑰痤疮可以根治吗` (cure claim), `577美白祛斑霜` (a cream).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** | pro yellow, pro yellow laser, laser pro yellow | `pro yellow` → pro yellow laser, vs pico laser, before and after (plus *zap, erha*: ID) | KEYWORD (brand): kept in Latin |
| **seoTitle** | pro yellow laser malaysia, pro yellow malaysia, laser pro yellow, laser vaskular | "+malaysia" forms empty; `laser pro yellow` returns (with ID chains); `laser vaskular` → harga, untuk apa (ID-tinged, but the term itself is the treatment page's) | KEYWORD: **Laser Vaskular Pro Yellow 577nm di Malaysia \| Kaiteki** (53 chars). *Laser* + brand is the query form; *laser vaskular* matches the treatment page. |
| **seoDescription** | kemerahan muka, urat merah muka, urat merah halus | `kemerahan muka` returns (kenapa, pakai apa); `urat merah muka` → urat merah di muka, pada muka; `urat merah halus` → di wajah, di kaki | KEYWORD: laser cahaya kuning, kemerahan muka, urat merah halus (vascular-pigment-laser term), konsultasi percuma (153 chars) |
| sections[0] "What is Pro Yellow?" | apa itu pro yellow | → apa itu pro yellow laser (and *…laser zap*) | KEYWORD (weak): **Apa itu laser Pro Yellow?** |
| sections[1] "How 577nm yellow light works" | laser cahaya kuning, laser kuning, laser 577nm | `laser cahaya kuning` empty; `laser kuning` is brass-cutting and *adalah* noise; `laser 577nm` English | DIRECT: **Bagaimana cahaya kuning 577nm berfungsi** |
| sections[2] "What can 577nm treat…?" | pro yellow laser untuk apa, laser urat merah, laser kemerahan muka | `pro yellow laser untuk apa` returns but is ZAP/Erha-led (ID); the others empty | DIRECT: **Apa yang boleh dirawat dengan 577nm, dan bila ia bukan panjang gelombang yang sesuai?** |
| sections[3] "Why is 577nm discussed for Asian…skin?" | pro yellow laser kulit | empty | DIRECT: **Kenapa 577nm dibincangkan untuk kulit Asia dan kulit yang lebih gelap?** |
| sections[4] "Why does your rosacea history matter…?" | rosacea, rawatan rosacea, laser rosacea, pro yellow rosacea | `rawatan rosacea` returns itself; `rosacea` → maksud, treatment; `pro yellow rosacea` → pro yellow laser rosacea (English) | KEYWORD (term): **Kenapa sejarah rosacea anda penting sebelum Pro Yellow?** |
| sections[5] session / grey vessels | pro yellow downtime | → pro yellow laser downtime (English) | DIRECT: **Apa berlaku semasa sesi Pro Yellow, dan kenapa saluran darah boleh kelihatan kelabu selepasnya?** |
| sections[6] risks / recur | pro yellow kesan sampingan, pro yellow laser side effects | Malay empty; English returns itself | DIRECT: **Apakah risiko Pro Yellow, dan bolehkah saluran darah yang dirawat muncul semula?** |
| FAQ 1 "Why is 577nm…used for redness and visible vessels?" | kemerahan muka | returns strongly | KEYWORD (term): **Kenapa cahaya kuning 577nm digunakan untuk kemerahan muka dan saluran darah yang kelihatan?** |
| FAQ 2 "Pro Yellow vs IPL for facial redness?" | pro yellow vs ipl, pro yellow laser vs | → **pro yellow laser vs ipl**, ipl vs pro yellow | KEYWORD (pattern): **Apa beza Pro Yellow dan IPL untuk kemerahan muka?** (same as vascular-pigment-laser FAQ 1) |
| FAQ 3 "Suitable for pigmented Asian skin?" | pro yellow laser kulit, ipl kulit gelap | empty | DIRECT: **Pro Yellow sesuai ke untuk kulit Asia yang lebih gelap?** |
| FAQ 4 "Will my facial redness stay away…?" | pro yellow berapa kali | empty | DIRECT: **Selepas satu kursus Pro Yellow, adakah kemerahan muka saya akan muncul semula?** (phrased without *kekal*) |

**Malay tally (14 logged strings):** 7 KEYWORD, 7 DIRECT.

**Indonesian pollution seen and avoided:** *proyellow laser adalah / zap / erha / bening's*, *laser pro yellow manfaatnya*, *laser pro yellow harga* (bare *harga*), *muka kemerahan tapi tidak gatal*, *urat merah halus di wajah*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| yellow-light laser | 黄光激光 | laser cahaya kuning | vascular-pigment-laser |
| visible vessels | 看得见的血管 | saluran darah yang kelihatan | vascular-lesions |
| facial redness | 脸部泛红 | kemerahan muka | vascular-lesions |
| flushing | 潮红 | muka mudah merah | vascular-lesions |
| rosacea | 玫瑰痤疮 | rosacea | vascular-lesions |
| broken capillaries / thread veins | 红血丝 | kapilari pecah / urat merah halus | vascular-lesions |
| sun spots | 晒斑 | sun spot | pigmentation |
| keloid scarring | 蟹足肿 | parut keloid | pico-laser |
| photosensitising medication | 会增加光敏感的药物 | ubat yang meningkatkan kepekaan kulit terhadap cahaya | laser-hair-removal |
| test spot | 测试点 | titik ujian | pico-laser (测试区域 / kawasan ujian) |
| handpiece | 手柄 | alat pegang tangan | onda-coolwaves |
| downtime | 恢复期 | downtime | docs/18 §6 |
| IPL | IPL（光子嫩肤） | IPL | vascular-pigment-laser |

## For the bilingual doctor-reviewer

1. **"Maximum haemoglobin absorption"** is attributed to Asclepion in both languages (最大程度的血红蛋白吸收 / *penyerapan hemoglobin maksimum*), exactly as the EN does. It describes the wavelength, not a result. Confirm the attribution is enough.
2. **"Dermatology practice"** (where Asclepion positions the device) is 皮肤医学领域 in zh, not 皮肤科, so it can't be read as describing Kaiteki. ms keeps *amalan dermatologi*.
3. **Couperose, telangiectasia, haemangioma:** zh 毛细血管扩张, 小型血管瘤, 面部红血丝（couperose）; ms *telangiektasia, hemangioma, kulit couperose*. Confirm the clinical terms.
4. **"Basic to expert" modes** is 从基本到专业 / *daripada asas hingga lanjutan*. *Pakar* was avoided in Malay so it can't be confused with the specialist title.
5. **"Vessels can recur"** is 复发 / *muncul semula*. FAQ 4 in zh avoids 根治 (banned) even though `玫瑰痤疮可以根治吗` has demand.
6. **IPL gloss** follows vascular-pigment-laser reviewer note 1: 光子嫩肤 appears only as the common name, in FAQ 2.
