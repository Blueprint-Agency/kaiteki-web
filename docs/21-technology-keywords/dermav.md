# 21. Technology keyword log: DermaV (`/technology/dermav`)

**Date:** 2026-10-14 · Follows the pilot method in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/dermav.json`, `content/i18n/technology/ms/dermav.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/dermav.json`.
**Inputs:** EN record for `dermav`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `vascular-pigment-laser` treatment page (`docs/20-treatment-keywords/vascular-pigment-laser.md`) and the `vascular-lesions` and `pigmentation` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`, read as in the pilot.
- **Probes:** shared run with `picosure`, `fotona-pqx`, `fotona-sp-dynamis` (DermaV share: about 35 zh, 30 ms). Raw dumps: `C:/tmp/dev4-ac-zh.json`, `C:/tmp/dev4-ac-zh2.json`, `C:/tmp/dev4-ac-ms.json`, `C:/tmp/dev4-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. Body copy is direct.
- **What the data says:** DermaV has very little demand outside English. `dermav` alone is swamped by *Dermaveen* and *Dermovate* in both languages; `dermav laser` (rosacea, downtime, cost, vs vbeam) is English. Chinese returns only `dermav 激光` and the TW form `dermav雷射` / `青萃光 dermav 雷射`. So the KEYWORD wins are the title and description, built on the generic forms that do have demand: 红血丝 激光, 血管激光 (zh) and *laser vaskular*, *laser pigmentasi* (ms).
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; DermaV. This record has no `device` key.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "DermaV" | dermav, derma v, dermav 激光 | `dermav` → Dermaveen noise, then dermav; `derma v` → Derma Veil (filler) noise, derma v雷射; `dermav 激光` returns itself | KEYWORD (brand): **DermaV**, kept in Latin |
| **seoTitle** "DermaV Vascular & Pigment Laser Treatment Malaysia \| Kaiteki" | 红血丝 激光, 红血丝激光, 血管激光, dermav 红血丝, dermav malaysia | `红血丝 激光` and `血管激光` (→ 血管激光治疗) return; dermav forms empty | KEYWORD: **马来西亚 DermaV 红血丝与色斑激光 \| Kaiteki** (30 chars). Same 红血丝 / 色斑 framing as the vascular-pigment-laser treatment title. |
| **seoDescription** | 脸部泛红, 红血丝 | `脸部泛红` → 原因, 改善, 怎么办; `红血丝` → 红血丝皮肤 脸部, 怎么消除 | KEYWORD: DermaV, 双波长激光, 马来西亚, 脸部泛红, 红血丝, 色斑, 免费咨询 (76 chars) |
| sections[0] "What is DermaV?" | dermav 是什么 | empty | DIRECT: **DermaV 是什么？** |
| sections[1] "How it works: dual wavelengths" | dermav 原理, dermav 595, 595 激光 | dermav forms empty; `595 激光` → 595染料激光 (a different device type) | DIRECT: **运作原理：双波长** |
| sections[2] "Can DermaV treat redness and pigment in the same plan?" | dermav 泛红, dermav 色斑, 激光 红血丝 色斑, 泛红 激光 | all empty | DIRECT: **DermaV 能在同一个计划里处理泛红和色斑吗？** |
| sections[3] "Why is DermaV used on Asian and sensitive skin?" | dermav 敏感肌, 敏感肌 激光 | empty | DIRECT: **为什么 DermaV 会用于亚洲人和敏感的皮肤？** |
| sections[4] "When should DermaV be postponed?" | dermav 不适合 | empty | DIRECT: **什么情况下要延后做 DermaV？** |
| sections[5] "What happens at a DermaV session, and how red is the skin afterwards?" | dermav 过程, 红血丝激光 恢复期 | empty | DIRECT: **做 DermaV 的过程是怎样的？之后皮肤会有多红？** |
| sections[6] "What are DermaV's risks, including pigment change?" | dermav 副作用, dermav 反黑 | empty | DIRECT: **DermaV 有哪些风险，包括色素变化？** |
| FAQ 1 "Suitable for darker or sensitive Asian skin tones?" | dermav 亚洲人, dermav 敏感肌 | empty | DIRECT: **DermaV 适合肤色较深或敏感的亚洲人皮肤吗？** |
| FAQ 2 "Can DermaV treat both redness and pigmentation?" | dermav 红血丝, dermav 色斑 | empty | DIRECT: **DermaV 能同时处理泛红和色斑吗？** |
| FAQ 3 "Is there any downtime after DermaV?" | dermav 恢复期 | empty | DIRECT: **做完 DermaV 有恢复期吗？** |
| FAQ 4 "How many DermaV sessions will I need?" | dermav 几次, 红血丝 激光 几次 | empty | DIRECT: **DermaV 要做几次？** |

**Chinese tally (14 logged strings):** 3 KEYWORD, 11 DIRECT.

**Not usable:** `dermav雷射`, `青萃光 dermav 雷射` (Taiwan name and 雷射), `红血丝雷射` (TW), `脉冲染料激光` / `595染料激光` (pulsed-dye lasers are a different device class; not used to describe DermaV).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "DermaV" | dermav, derma v, dermav laser | `dermav` → Dermaveen, Dermovate noise; `dermav laser` → near me, cost, for rosacea, vs vbeam (English) | KEYWORD (brand): kept in Latin |
| **seoTitle** | laser vaskular, laser pigmentasi, dermav laser, dermav malaysia | `laser vaskular` returns (with ID *adalah*, *erha*); `laser pigmentasi` → **kos rawatan laser pigmentasi** (MY); `dermav malaysia` empty | KEYWORD: **Laser Vaskular & Pigmentasi DermaV di Malaysia \| Kaiteki** (56 chars), matching the ms treatment name in terms.ts |
| **seoDescription** | kemerahan muka, urat merah muka | `kemerahan muka` returns; `urat merah muka` → urat merah di muka | KEYWORD: DermaV, laser, kemerahan muka, saluran darah, pigmen, konsultasi percuma (159 chars) |
| sections[0] "What is DermaV?" | apa itu dermav | empty | DIRECT: **Apa itu DermaV?** |
| sections[1] "How it works: dual wavelengths" | dermav 595 | empty | DIRECT: **Cara ia berfungsi: dua panjang gelombang** |
| sections[2] "Can DermaV treat redness and pigment in the same plan?" | dermav kemerahan, dermav pigmentasi, laser kemerahan muka | all empty | DIRECT: **Boleh ke DermaV merawat kemerahan dan pigmen dalam pelan yang sama?** |
| sections[3] "Why is DermaV used on Asian and sensitive skin?" | dermav kulit sensitif, laser kulit sensitif | first empty; `laser kulit sensitif` → laser untuk kulit sensitif (generic) | DIRECT: **Kenapa DermaV digunakan pada kulit Asia dan kulit sensitif?** (*kulit sensitif* is the plain translation) |
| sections[4] "When should DermaV be postponed?" | (not probed) | no Malay form to test | DIRECT: **Bila DermaV perlu ditangguhkan?** |
| sections[5] "What happens at a DermaV session…" | rawatan muka merah, laser muka merah | empty | DIRECT: **Apa yang berlaku semasa sesi DermaV, dan semerah mana kulit selepas itu?** |
| sections[6] "What are DermaV's risks…" | dermav side effects | English only | DIRECT: **Apakah risiko DermaV, termasuk perubahan pigmen?** |
| FAQ 1 "Suitable for darker or sensitive Asian skin?" | dermav kulit sensitif | empty | DIRECT: **DermaV sesuai ke untuk kulit Asia yang lebih gelap atau sensitif?** |
| FAQ 2 "Can DermaV treat both redness and pigmentation?" | dermav rosacea, dermav pigmentasi | `dermav rosacea` English (before and after); pigmentasi empty | DIRECT: **Boleh ke DermaV merawat kemerahan dan pigmentasi sekali gus?** |
| FAQ 3 "Is there any downtime after DermaV?" | dermav downtime | → **dermav laser downtime** | KEYWORD (partial): **Ada downtime ke selepas DermaV?** (*downtime* per docs/18 §6, as in the pilot) |
| FAQ 4 "How many DermaV sessions will I need?" | dermav berapa sesi, dermav berapa kali | empty | DIRECT: **Perlu buat DermaV berapa sesi?** (pilot FAQ 4 form) |

**Malay tally (14 logged strings):** 4 KEYWORD, 10 DIRECT.

**Indonesian pollution seen and avoided:** `laser vaskular adalah / erha / harga`, `muka kemerahan tapi tidak gatal`, `laser pigmentasi erha / manfaat`. Bare *harga laser vaskular* is never used.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| visible vessels | 看得见的血管 | saluran darah yang kelihatan | vascular-pigment-laser |
| facial redness | 脸部泛红 | kemerahan muka | vascular-pigment-laser |
| rosacea-type flushing | 玫瑰痤疮类型的潮红 | muka mudah merah jenis rosacea | vascular-lesions |
| broken capillaries | 红血丝 | kapilari pecah | vascular-lesions |
| spider veins | 蜘蛛状血管 | urat labah-labah | vascular-lesions |
| post-inflammatory hyperpigmentation (PIH) | 炎症后色素沉着（PIH） | hiperpigmentasi pasca-radang (PIH) | pigmentation |
| sun spots | 晒斑 | sun spot | pigmentation |
| contact cooling | 接触式冷却 | penyejukan sentuhan | new |
| vascular / pigment laser (facts) | 血管与色素激光 | Laser Vaskular & Pigmentasi | terms.ts |

## For the bilingual doctor-reviewer

1. **"Broken capillaries"** is 红血丝 in zh (the everyday MY term, and the title keyword) and *kapilari pecah* in ms (as on the vascular-lesions page). Spider veins stay 蜘蛛状血管 / *urat labah-labah*.
2. **"Designed with sensitive and Asian skin in mind"** (FAQ 1) is translated as a design statement (在设计时考虑到 / *direka dengan mengambil kira*), not a claim that it suits those skins.
3. **The EN body names 1064nm as "the pigment wavelength"** but lists sun spots among DermaV's concerns; both locales keep the EN exactly. The doctor may want to check that framing in the EN.
4. **zh seoTitle uses 红血丝与色斑** for "vascular & pigment", matching the treatment title. A stricter literal would be 血管与色素激光 (also has demand via `血管激光`), but it is the less natural reading for patients.
