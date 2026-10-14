# 20. Treatment keyword log: Pico Laser (`/treatments/pico-laser`)

**Date:** 2026-10-14 · **Pilot page** for the treatment-page localisation round (format for the next 18 treatment pages).
**Outputs:** `content/i18n/treatments/zh/pico-laser.json`, `content/i18n/treatments/ms/pico-laser.json` (same shape as the EN record).
**Inputs:** EN record for `pico-laser`, `docs/18-trilingual-keyword-map.md` §5 (display names) and §7 (avoid list), `docs/19-concern-keywords/_treatment-names.md`, and the already-translated `pigmentation` and `tattoo-removal` concern pages (terminology carried over, see "Terms carried over" below).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, with `hl=zh-CN` for Chinese and `hl=ms` for Malay. Same reading as `docs/19-concern-keywords/acne.md`:
  - **HAS VOLUME:** the phrase, or a natural Malaysian form of it, shows up in autocomplete with Malaysian context, or at least without a Taiwan, HK or Indonesia skew. Signs of skew: *dcard / ptt / lihkg / 雷射* for Chinese, *bisa / ga / sih / wajah / perawatan / erha / flek hitam* for Malay.
  - **NO VOLUME:** nothing relevant comes back.
- **Decision:**
  - **KEYWORD:** the string is phrased around the real query form, and the English meaning is kept.
  - **DIRECT:** the string is a faithful translation with no invented keyword.
- **Probes:** 146 zh and 143 ms, in two batches per language. Raw dumps: `C:/tmp/pico-ac-zh.json`, `C:/tmp/pico-ac-zh2.json`, `C:/tmp/pico-ac-ms.json`, `C:/tmp/pico-ac-ms2.json` (not in the repo).
- **Scope:** only search-relevant strings are logged (seoTitle, seoDescription, name/H1, section headings, variantModule heading, route titles, jumpNav labels, ctaMid heading, FAQ questions). All body copy (route bodies, device bodies, avoidIf, session steps, after-session bands, risks, cost factors, FAQ answers, captions) is a direct, faithful translation.
- **Treatment pages differ from concern pages in one way that matters for keywords:** demand is device-led and question-led (`皮秒…吗`, `pico laser … ke/tak`), so the FAQ questions carry most of the KEYWORD wins. Device and brand names stay Latin (PicoSure, Fotona PQX, StarWalker, Cynosure, Nd:YAG).
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `src`, `id`, `reviewedBy`, `lastReviewed`, top-level `category`, the `relatedReasons` object keys, `device` ("PicoSure"), device `title`s and `eyebrow`s (wavelength · manufacturer).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Pico Laser" | 皮秒激光, 皮秒, pico laser | `皮秒` → 皮秒激光, 皮秒是什么, 皮秒副作用, 皮秒激光价格, 皮秒激光多久做一次; `pico laser` → 是什么, 价钱, 中文, 功效 | KEYWORD: **皮秒激光（Pico Laser）** (docs/18 §5, `_treatment-names.md`) |
| **seoTitle** "Pico Laser Treatment Malaysia \| Pigmentation \| Kaiteki" | 皮秒激光马来西亚, 皮秒 马来西亚, 皮秒激光祛斑, 皮秒祛斑, 皮秒 色斑, 皮秒淡斑, 皮秒疗程 | `皮秒激光` → … 皮秒激光祛斑; `皮秒祛斑` → 价格, 副作用; `皮秒疗程` → 皮秒疗程时间; every "+马来西亚 / kl / 新山" form is empty; `皮秒 色斑` empty | KEYWORD: **马来西亚皮秒激光祛斑疗程 \| Kaiteki** (22 chars). 祛斑 carries "Pigmentation"; 马来西亚 kept for the EN geo intent (as in acne.md). |
| **seoDescription** | (same family) + 洗纹身, 肤色不均 | `皮秒洗纹身` → 皮秒洗纹身价钱; `皮秒 肤色不均` returns itself | KEYWORD: uses 皮秒激光, 祛斑, 肤色不均, 纹身墨水 (77 chars). No 免费咨询: the EN description has no consultation line, so none is added. |
| sections[0].heading "What is Pico laser?" | 皮秒激光是什么, 什么是皮秒激光, 皮秒是什么 | `皮秒是什么` is the 3rd suggestion for `皮秒` (→ 皮秒是什么作用); `皮秒激光是什么` returns itself; `什么是皮秒激光` empty | KEYWORD: **皮秒激光是什么？** |
| sections[1].heading "How does a picosecond pulse break up pigment?" | 皮秒激光原理, 皮秒原理, 皮秒 波长 | `皮秒激光原理` and `皮秒原理` return themselves | KEYWORD: **皮秒激光原理：皮秒脉冲如何击碎色素？** |
| variantModule.heading "Which pico device, and why it matters" | 皮秒机器, 皮秒 种类, 皮秒激光 种类, 皮秒 区别, 皮秒 牌子, 皮秒 755, 皮秒 1064 | `皮秒机器` → 比较, 价格, **差异** (dcard/ptt noise too); `皮秒种类` → 比较 (dcard); `皮秒 区别`, `皮秒 牌子` empty | KEYWORD: **皮秒机器的差异：用哪一台，为什么重要**. 差异 chosen over 比较 because the EN says "not a ranking". |
| jumpNav "What it is" | as sections[0] | as above | KEYWORD: **皮秒是什么** |
| jumpNav "What it treats" | 皮秒激光功效, pico laser 功效, 皮秒 用途 | `皮秒激光功效` and `pico laser 功效` return | DIRECT: **适合处理的问题**. 功效 has demand but reads as an efficacy claim (same call as 见效 in acne.md). |
| jumpNav "Which device" | as variantModule | as above | KEYWORD: **皮秒机器** |
| jumpNav "Suitability" | 皮秒适合什么人, 皮秒 适合, 皮秒 不适合, 皮秒 孕妇, 皮秒 禁忌 | `皮秒适合什么人` returns (also first suggestion for `皮秒 适合`); `皮秒 不适合`, `皮秒 孕妇`, `皮秒 禁忌` return themselves | KEYWORD: **适合什么人** |
| jumpNav "After a session" | 皮秒后, 皮秒后注意事项, 皮秒后护理, 皮秒激光后, 皮秒做完 | `皮秒后` → **皮秒后注意事项** (1st), 皮秒后多久可以化妆, 皮秒后遗症; `皮秒激光后` → 皮秒激光后护理 | KEYWORD: **皮秒后注意事项** |
| jumpNav "Risks & limits" | 皮秒副作用, 皮秒激光副作用, 皮秒风险, 皮秒反黑 | `皮秒副作用` and `皮秒风险` return; `皮秒反黑` strong (→ 怎么办, 原因; some dcard/ptt) | KEYWORD: **风险、副作用与局限** |
| jumpNav "Sessions & cost" | 皮秒几次有效, 皮秒要做几次, 皮秒价钱, 皮秒多少钱, 皮秒一次 | `皮秒要做几次` → 才有效果; `皮秒价钱` returns (MY form, docs/18); `皮秒一次` → 皮秒一次多少钱 | KEYWORD: **次数与价钱** |
| routes[0].title "Surface pigment" | 浅层色斑, 皮秒 晒斑, 皮秒 雀斑, 皮秒 老人斑, 皮秒 斑点 | `浅层色斑` empty; `皮秒 晒斑`, `皮秒雀斑`, `皮秒 老人斑` return (some dcard) | KEYWORD: **表层色斑（晒斑、雀斑）**. The gloss names what the body already lists. |
| routes[1].title "Deeper and hormonal pigment" | 深层色斑, 真皮斑, 皮秒 黄褐斑, 太田痣, 皮秒 太田痣, 颧骨斑, 颧部褐青色痣, hori痣 | `深层色斑` empty; `真皮斑` → 是什么, 怎么治疗; `皮秒 黄褐斑` returns; `太田痣` → 治疗, 激光, 皮秒; `颧骨斑` strong but TW (雷射); `颧部褐青色痣` returns itself; `hori痣` empty | KEYWORD: **深层与荷尔蒙相关色斑（黄褐斑、太田痣）**. Body uses 颧部褐青色痣（Hori 痣）, the clinical name. |
| routes[2].title "Post-acne marks and tone" | 皮秒 痘印, 皮秒 暗疮, 皮秒 肤色不均, 皮秒 毛孔, 皮秒 暗沉 | `皮秒 痘印` returns; `皮秒 暗疮` → 皮秒 暗疮印; `皮秒 肤色不均`, `皮秒 暗沉` return; `皮秒 毛孔` → 毛孔粗大 (dcard heavy) | KEYWORD: **痘印与肤色不均** |
| routes[3].title "Tattoo ink" | 皮秒洗纹身, pico 洗纹身, 洗纹身 价钱 | `皮秒洗纹身` → 皮秒洗纹身价钱; `pico 洗纹身` returns | KEYWORD: **纹身墨水（洗纹身）** |
| ctaMid.heading "Not sure which applies to you?" | n/a (conversion copy) | n/a | DIRECT: **不确定自己属于哪一种？** |
| FAQ 1 "Difference between PicoSure and Fotona PQX?" | picosure, picosure 中文, picosure 和, picosure fotona, picosure 和 fotona | `picosure 和` → picoway 和 picosure 的**区别**; `picosure fotona` → picosure vs fotona, picosure pro vs fotona starwalker | KEYWORD (pattern): **PicoSure 和 Fotona PQX 有什么区别？** |
| FAQ 2 "Does Pico laser hurt?" | 皮秒痛吗, 皮秒激光痛吗, 皮秒会痛吗 | `皮秒痛吗` returns; `皮秒会痛吗` → dcard/ptt; `皮秒激光痛吗` empty | KEYWORD: **做皮秒痛吗？** (no 无痛 anywhere) |
| FAQ 3 "How many sessions will I need?" | 皮秒几次有效, 皮秒要做几次, 皮秒多久做一次, 皮秒激光多久做一次, 皮秒 祛斑 几次 | `皮秒要做几次` → 才有效果; `皮秒多久做一次` and `皮秒激光多久做一次` return (the latter is also a top `皮秒激光` suggestion) | KEYWORD: **皮秒要做几次？多久做一次？** (the answer already covers spacing: "相隔几个星期"). 几次有效 avoided: it reads as a results promise. |
| FAQ 4 "What happens in the days after a session?" | 皮秒后几天, 皮秒后结痂, 皮秒结痂多久掉, 皮秒恢复期, 皮秒恢复期多久, 皮秒后第二天 | `皮秒恢复期` → 皮秒恢复期多久; `皮秒后结痂`, `皮秒结痂多久掉` return; `皮秒后几天` → 几天可以化妆 | KEYWORD: **做完皮秒后几天会怎样？恢复期多久？** |
| FAQ 5 "Will I see a difference after one session?" | 皮秒一次有效果吗, 皮秒做一次有用吗, 皮秒一次, 皮秒多久见效 | `皮秒一次` → **皮秒一次效果**; `皮秒多久见效` returns; the 吗 forms are empty | KEYWORD: **皮秒做一次就有效果吗？** (the answer opens 不一定, so the question carries no promise) |
| FAQ 6 "Is Pico laser suitable for darker Malaysian skin tones?" | 皮秒 深色皮肤, 皮秒 亚洲人, 皮秒反黑, 皮秒后反黑, 皮秒适合什么人 | skin-tone forms empty; `皮秒反黑` strong; `皮秒后反黑` → 怎么办 | KEYWORD: **马来西亚人肤色较深，适合做皮秒吗？会反黑吗？** (same pattern as acne FAQ 7; the answer stays conditional) |
| FAQ 7 "Can Pico laser treat melasma?" | 皮秒 黄褐斑, 皮秒激光 黄褐斑, 皮秒能去黄褐斑吗, 黄褐斑可以打皮秒吗 | only `皮秒 黄褐斑` returns | KEYWORD: **皮秒可以处理黄褐斑吗？** (处理, not 去: the answer is "sometimes, with caution") |
| FAQ 8 "Can a tattoo be completely removed?" | 洗纹身能完全洗掉吗, 纹身可以完全洗掉吗, 洗纹身能洗干净吗, 纹身洗得掉吗 | `洗纹身能洗干净吗` and `纹身洗得掉吗` return | KEYWORD: **纹身能完全洗干净吗？** |
| FAQ 9 "How much does Pico laser cost in Malaysia?" | 皮秒价钱, 皮秒多少钱, 皮秒激光价钱, 皮秒激光价格, 皮秒价钱马来西亚, 皮秒一次多少钱 | `皮秒价钱` (+ dcard/ptt), `皮秒多少钱`, `皮秒激光价钱` return; `皮秒一次多少钱`; "+马来西亚" empty | KEYWORD: **马来西亚皮秒激光价钱是多少？** (价钱 per docs/18 §6; 马来西亚 kept from EN) |
| FAQ 10 "Can I wear makeup or go back to work afterwards?" | 皮秒后可以化妆吗, 皮秒后多久可以化妆, 皮秒后可以上班吗, 皮秒做完可以上班吗 | `皮秒后可以化妆吗` and `皮秒后多久可以化妆` return (the latter is the 2nd `皮秒后` suggestion); 上班 forms empty | KEYWORD: **皮秒后可以化妆或马上回去上班吗？** |

**Chinese tally (28 logged strings):** 26 KEYWORD, 2 DIRECT. The device titles (PicoSure, Fotona PQX (StarWalker)) are brand names and aren't counted.

**Not usable (no MY demand or skewed):** every "+马来西亚 / kl / 新山" pico modifier came back empty (`皮秒激光马来西亚`, `皮秒价钱马来西亚`, `皮秒 kl`, `皮秒 新山`). `皮秒蜂巢` (diffractive lens) is strong but Taiwan-led (dcard, ptt, 雷射), so body copy says 衍射透镜. `颧骨斑` is Taiwan-led (雷射). Chinese pico demand is about price, frequency, pain, aftercare and 反黑, not about place.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Pico Laser" | pico laser, pico laser malaysia, laser pikosaat | `pico laser` → treatment, untuk apa, side effects, price malaysia; `pico laser malaysia` → price, review, jb; `laser pikosaat` empty | KEYWORD: **Pico Laser** (docs/18 §5). *Laser pikosaat* is used in body copy only, as on the concern pages. |
| **seoTitle** | rawatan pico laser, rawatan pico laser malaysia, pico laser malaysia, pico laser pigmentasi, laser pigmentasi | `rawatan pico laser` → untuk jeragat, untuk apa, harga rawatan pico laser; `pico laser malaysia` strong; `laser pigmentasi` → kos rawatan laser pigmentasi (MY); `pico laser pigmentasi` empty | KEYWORD: **Rawatan Pico Laser di Malaysia \| Pigmentasi \| Kaiteki** (53 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: pico laser, pigmentasi, dakwat tatu, doktor (158 chars). *Guna* (not *menggunakan*) to fit 160. |
| sections[0].heading "What is Pico laser?" | apa itu pico laser, apa itu laser pico, pico laser adalah | `apa itu pico laser` returns (plus ID variants with *wajah*); `apa itu laser pico` → picosure, picoway; `pico laser adalah` is ID (*perawatan … adalah*) | KEYWORD: **Apa itu pico laser?** |
| sections[1].heading "How does a picosecond pulse break up pigment?" | bagaimana pico laser berfungsi, cara kerja pico laser, pico laser berfungsi, pico laser macam mana, pikosaat | `cara kerja pico laser` returns but *cara kerja* is Indonesian-leaning; `pico laser berfungsi` → berfungsi untuk; the Malaysian forms are empty | DIRECT: **Bagaimana denyutan pikosaat memecahkan pigmen?** |
| variantModule.heading | jenis pico laser, mesin pico laser, picosure vs, pico laser 755, pico laser 1064 | `jenis pico laser` → jenis mesin pico laser; `mesin pico laser` → harga, jenis (and *terbaik*, which we don't use) | KEYWORD: **Jenis mesin pico laser, dan kenapa ia penting** |
| jumpNav "What it is" | as sections[0] | as above | KEYWORD: **Apa itu pico laser** |
| jumpNav "What it treats" | pico laser untuk apa, rawatan pico laser untuk apa, pico laser fungsi | `pico laser untuk apa` is the 3rd `pico laser` suggestion and returns itself; `pico laser fungsi` is ID (*fungsinya, erha*) | KEYWORD: **Pico laser untuk apa** |
| jumpNav "Which device" | as variantModule | as above | KEYWORD: **Jenis mesin** |
| jumpNav "Suitability" | pico laser sesuai untuk siapa, pico laser untuk siapa, pico laser tidak sesuai, siapa tidak sesuai pico laser, pico laser hamil | all empty; `pico laser hamil` is Hamilton (NZ) plus ID (*saat hamil, aman*) | DIRECT: **Kesesuaian** |
| jumpNav "After a session" | selepas pico laser, penjagaan selepas pico laser, pantang selepas pico laser, kesan selepas pico laser | `selepas pico laser` → penjagaan selepas, kesan selepas, **pantang larang selepas pico laser** (MY) | KEYWORD: **Selepas pico laser** |
| jumpNav "Risks & limits" | kesan sampingan pico laser, risiko pico laser, pico laser side effect, pico laser bahaya | `kesan sampingan pico laser` and `risiko pico laser` return; `pico laser bahaya` → bahaya atau tidak (ID *apakah*) | KEYWORD: **Risiko, kesan sampingan & had** |
| jumpNav "Sessions & cost" | kos pico laser, kos rawatan pico laser, pico laser berapa kali, pico laser berapa sesi | `kos pico laser` → kos rawatan pico laser; `pico laser berapa kali` → sebulan; `berapa sesi` empty | KEYWORD: **Sesi & kos** |
| routes[0].title "Surface pigment" | pico laser sun spot, sun spot muka, pigmentasi dalam, tompok coklat di muka | `pico laser sun spot` → sun spots, sun spot removal (English, global); `tompok coklat di muka` returns itself; `sun spot muka` empty | KEYWORD (weak): **Pigmen permukaan (sun spot)**. *Sun spot* is the term already used on the ms pigmentation page. |
| routes[1].title "Deeper and hormonal pigment" | pico laser jeragat, pico laser untuk jeragat, jeragat hormon, pico laser melasma, nevus ota, tompok ota | `pico laser jeragat` → untuk jeragat; `rawatan pico laser` → untuk jeragat; `jeragat hormon` returns; `nevus ota` → English medical forms; `tompok ota` is noise | KEYWORD: **Pigmen lebih dalam dan berkaitan hormon (jeragat)** |
| routes[2].title "Post-acne marks and tone" | pico laser jerawat, pico laser kesan jerawat, pico laser untuk bekas jerawat, pico laser pori, pico laser kulit kusam, rawatan kulit kusam | `pico laser jerawat` → untuk bekas jerawat (ID-leaning *bekas*); `pico laser untuk kesan jerawat` empty; `pico laser pori` → untuk pori pori besar (ID *pori*); `rawatan kulit kusam` → rawatan kulit muka kusam (MY) | KEYWORD (term): **Kesan jerawat dan warna kulit**. *Kesan jerawat*, not *bekas jerawat*, per acne.md note 6. |
| routes[3].title "Tattoo ink" | buang tatu, laser buang tatu, pico laser buang tatu, harga buang tatu, pico laser tatu | `buang tatu` → harga buang tatu pakai laser, klinik buang tatu, hukum buang tatu (MY); pico + tatu forms empty or Scandinavian | KEYWORD: **Dakwat tatu (buang tatu)** |
| ctaMid.heading | n/a (conversion copy) | n/a | DIRECT: **Tak pasti yang mana satu berkaitan dengan anda?** |
| FAQ 1 "Difference between PicoSure and Fotona PQX?" | picosure vs, picosure vs fotona, pico laser vs picosure, beza picosure dan pico laser, picosure malaysia, fotona starwalker | `picosure vs fotona` → picosure pro vs fotona starwalker; `picosure malaysia` → price; Malay *beza* forms empty | KEYWORD (pattern): **Apa beza PicoSure dan Fotona PQX?** |
| FAQ 2 "Does Pico laser hurt?" | pico laser sakit, pico laser sakit tak, pico laser sakit ke | `pico laser sakit` → **sakit tak** (MY), sakit ga (ID); `pico laser sakit tak` returns; `sakit ke` empty | KEYWORD: **Pico laser sakit tak?** |
| FAQ 3 "How many sessions?" | pico laser berapa kali, pico laser berapa sesi, pico laser berapa kerap, pico laser sebulan berapa kali, pico laser berapa minggu sekali | `pico laser berapa kali` → sebulan, boleh berapa kali (plus ID *harus*); `pico laser sebulan berapa kali` returns | KEYWORD: **Perlu buat pico laser berapa kali?** |
| FAQ 4 "What happens in the days after?" | kesan selepas pico laser, pico laser downtime, pico laser downtime berapa lama, pico laser ada downtime | `kesan selepas pico laser` returns; `pico laser downtime berapa lama` and `pico laser ada downtime` return (docs/18 §6) | KEYWORD: **Apa kesan selepas pico laser, dan downtime berapa lama?** |
| FAQ 5 "Difference after one session?" | pico laser satu sesi, pico laser sekali buat, pico laser nampak hasil, berapa lama pico laser nampak hasil, pico laser hasil | Malaysian forms empty; `pico laser hasil` is ID (*terlihat, apakah … permanen*) | DIRECT: **Boleh nampak perubahan selepas satu sesi ke?** |
| FAQ 6 "Suitable for darker Malaysian skin?" | pico laser kulit gelap, pico laser sawo matang, pico laser untuk kulit gelap, laser kulit gelap, laser muka kulit gelap | pico forms empty; `laser kulit gelap` returns (also in acne.md and docs/18) | KEYWORD (partial): **Pico laser sesuai ke untuk kulit gelap atau sawo matang orang Malaysia?** |
| FAQ 7 "Can Pico laser treat melasma?" | pico laser jeragat, rawatan pico laser untuk jeragat, pico laser jeragat boleh hilang, jeragat boleh hilang ke | `pico laser jeragat` → untuk jeragat; `rawatan laser jeragat` → rawatan pico laser untuk jeragat; `jeragat boleh hilang ke` returns but its "hilang" framing over-promises | KEYWORD: **Pico laser boleh rawat jeragat (melasma) ke?** |
| FAQ 8 "Can a tattoo be completely removed?" | buang tatu, buang tatu boleh hilang ke, buang tatu boleh hilang sepenuhnya, tatu boleh hilang, tatu boleh buang ke | `buang tatu` strong; every "boleh hilang" form is empty | KEYWORD (partial): **Boleh ke buang tatu sepenuhnya?** (*hilang sepenuhnya* kept out of the question; it's on the §7.2 list) |
| FAQ 9 "Cost in Malaysia?" | harga pico laser di malaysia, harga pico laser malaysia, kos pico laser, pico laser price malaysia | `harga pico laser malaysia` autocorrects to **harga pico laser di malaysia**; `kos pico laser` → kos rawatan pico laser | KEYWORD: **Berapa harga atau kos pico laser di Malaysia?** |
| FAQ 10 "Makeup or back to work?" | makeup selepas pico laser, boleh pakai makeup selepas pico laser, pico laser boleh kerja, selepas pico laser boleh, selepas laser boleh pakai makeup | all empty | DIRECT: **Boleh pakai makeup atau terus kembali bekerja selepas pico laser?** |

**Malay tally (28 logged strings):** 23 KEYWORD, 5 DIRECT. The device titles aren't counted.

**Indonesian pollution seen and avoided:** pico laser adalah (*perawatan*), pico laser fungsi (*fungsinya, erha*), pico laser sakit ga, pico laser berapa kali (*harus*), *flek hitam*, pico laser hasil (*terlihat, apakah … permanen*), pico laser hamil (*saat hamil, aman*), pico laser untuk bekas jerawat, pico laser pori, laser pigmentasi erha, cara kerja.

## Terms carried over from the concern pages

| EN | zh | ms | Source |
|---|---|---|---|
| post-inflammatory hyperpigmentation | 炎症后色素沉着（反黑） | hiperpigmentasi pasca-radang | pigmentation, acne |
| melasma | 黄褐斑 | jeragat (melasma) | docs/18 §5 |
| sun spots / freckles | 晒斑 / 雀斑 | sun spot / freckles | pigmentation |
| test area / test patch | 测试（一小块测试区域） | kawasan ujian / ujian tampalan | tattoo-removal |
| cosmetic / permanent-makeup pigments | 美容色料 / 半永久化妆色料 | pigmen kosmetik / solekan separa kekal | tattoo-removal |
| crusting / picking | 结痂 / 抠掉痂皮 | kuping / mengopek | tattoo-removal |
| retinoids or acids | A酸类或酸类产品 | retinoid atau asid | pigmentation |
| cold sores | 唇疱疹 | herpes bibir (cold sore) | acne, tattoo-removal |
| keloid / hypertrophic scarring | 蟹足肿 / 增生性疤痕 | parut keloid atau hipertrofik | acne |
| sunscreen | 广谱防晒 | pelindung matahari spektrum luas | pigmentation |
| downtime | 恢复期 | downtime | docs/18 §6 |
| enlarged pores | 毛孔粗大 | liang pori besar | docs/18 §5 |
| fractional CO2 | 点阵二氧化碳激光 | laser CO2 fraksional | `_treatment-names.md` |
| picosecond laser (body) | 皮秒激光 | laser pikosaat | pigmentation, tattoo-removal |

## For the bilingual doctor-reviewer

1. **Isotretinoin is named on this page.** The EN avoidIf says "including oral isotretinoin", so both locales name it (口服异维A酸（isotretinoin） / *isotretinoin oral*). acne.md note 4 kept it unnamed on a concern page; here it's a contraindication, not a promotion, and the EN names it. Please confirm.
2. **Hori's naevus** is 颧部褐青色痣（Hori 痣） in zh and *nevus Hori* in ms; naevus of Ota is 太田痣 / *nevus Ota*. The colloquial 颧骨斑 has demand but is Taiwan-led and loose, so it isn't used. Confirm the clinical names.
3. **Alexandrite** is 翠绿宝石（Alexandrite） in zh and *alexandrite* in ms. Some MY clinics write 紫翠玉 or just 755 皮秒. Confirm.
4. **Diffractive lens** is 衍射透镜 / *kanta difraktif*. 皮秒蜂巢 (honeycomb) is how people search, but the AC is Taiwan-led and it reads like a brand feature, so it isn't added. Add it in brackets only if the reviewer wants the colloquial gloss.
5. **"Photomechanical"** is 光机械作用 / *fotomekanikal*. The pain description ("brief snapping or hot-pinprick sensations") is 短暂的弹击感或像热针轻刺的感觉 / *rasa seperti petikan getah atau cucukan jarum panas yang singkat*. The Malay "rubber-band snap" image is a natural local rendering of "snapping"; confirm it isn't stronger than the EN.
6. **"A slower plan is often the safer one"** is kept as a comparative (较安全 / *lebih selamat*). It's the EN's own wording and compares plans, not clinics. Neither locale says "safe" without the condition.
7. **"Practitioner" in captions** is 医护人员 / *pengamal*. If the photos show a doctor, the reviewer may prefer 医生 / *doktor*.
8. **Guarantee and permanence words appear only negated or as a term:** 它不能保证纹身完全清除 / *tidak dapat menjanjikan tatu hilang sepenuhnya*; 半永久化妆 / *solekan separa kekal* is the name of a pigment type (same as the tattoo-removal page). Expect the lint to warn, not fail.
9. **zh FAQ 3 adds 多久做一次** and **ms FAQ 4 adds downtime**. Both are covered by the existing answers, following the acne.md FAQ 1 precedent.
10. **Peels** are 化学换肤 / *peel kimia*. If the reviewer means peels in general (including non-chemical), drop 化学 / *kimia*.
