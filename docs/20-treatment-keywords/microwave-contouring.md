# 20. Treatment keyword log: Microwave Contouring (`/treatments/microwave-contouring`)

**Date:** 2026-10-14 · Treatment-page localisation round (method and format from the pilot, `pico-laser.md`).
**Outputs:** `content/i18n/treatments/zh/microwave-contouring.json`, `content/i18n/treatments/ms/microwave-contouring.json` (same shape as the EN record). EN snapshot: `content/i18n/treatments/_en/microwave-contouring.json`.
**Inputs:** EN record for `microwave-contouring`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the translated `body-slimming`, `face-contouring` and `face-lifting` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`, read as in the pilot (HAS VOLUME only without a Taiwan/HK/Indonesia skew).
- **Decision:** KEYWORD = phrased around the real query form, English meaning kept. DIRECT = faithful translation.
- **Probes:** run together with fat-freezing (153 zh and 131 ms in total). Raw dumps: `C:/tmp/ffmw-ac-zh.json`, `C:/tmp/ffmw-ac-zh2.json`, `C:/tmp/ffmw-ac-zh3.json`, `C:/tmp/ffmw-ac-ms.json`, `C:/tmp/ffmw-ac-ms2.json` (not in the repo).
- **Scope:** seoTitle, seoDescription, name, the six section headings and the four FAQ questions. This record has no jumpNav, routes, variantModule or ctaMid. The `areas` list and all body copy are direct, faithful translations.
- **The finding that shapes this page:** demand is on the **device name**, not on the category. `微波塑形` and *gelombang mikro* (as a treatment) return nothing; `onda` returns 是什么, 原理, 痛吗, 副作用, 恢复期, 价钱, 几次 in zh and *onda treatment malaysia, onda price malaysia, onda downtime* in ms. So headings that the EN already ties to Onda, or that sit next to it, lead with Onda; the agreed category name stays as the `name`.
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `src`, `reviewedBy`, `lastReviewed`, top-level `category`, the device and technology names (Onda, Coolwaves®).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Microwave Contouring" | 微波塑形, 微波 塑形, 微波 紧致, 微波溶脂, onda 微波 | 塑形 and 紧致 forms empty; `微波溶脂` → onda 微波溶脂, deka 微波溶脂; `onda 微波` → onda微波溶脂效果, onda 微波提升 | DIRECT: **微波塑形** (terms.ts, kept). 微波溶脂 has the demand but adds a fat-dissolving claim the EN "contouring" doesn't make (`_treatment-names.md`). |
| **seoTitle** "Onda Microwave Contouring Malaysia \| Kaiteki" | onda, onda 微波, onda malaysia, onda 吉隆坡, onda kl, 微波溶脂 马来西亚, onda 价钱 马来西亚 | `onda` → onda pro, onda是什么; `onda 吉隆坡` → 吉隆坡 onda; `onda malaysia` is Honda noise; other geo forms empty | KEYWORD: **马来西亚 Onda 微波塑形疗程 \| Kaiteki** (26 chars) |
| **seoDescription** | onda, 橘皮组织, 橘皮组织 医美, onda 紧致, onda 橘皮 | `橘皮组织` → 怎么消除, 原因, 是什么, 医美; `onda 紧致` and `onda 橘皮` return | KEYWORD: Onda, 微波塑形, 局部脂肪, 橘皮组织, 紧致, 免费咨询 (79 chars) |
| sections[0].heading "What is Microwave Contouring?" | 微波溶脂是什么, 微波溶脂 是什么, onda 是什么, onda 是什么医美, onda pro 是什么 | 微波 forms empty; `onda 是什么` → onda是什么, **onda是什么项目**, onda 是什么医美 | KEYWORD: **微波塑形（Onda）是什么？** (the body names Onda in its second sentence) |
| sections[1].heading "How can microwave energy reach fat without burning the skin?" | 微波溶脂 原理, onda 原理, onda 烫伤, 微波 烫伤, 微波溶脂 烫伤 | `onda 原理` → 原理是什么, 溶脂原理, 作用原理; `onda 烫伤` → onda pro 会烫伤吗, onda 会烫伤吗; `微波 烫伤` returns | KEYWORD: **Onda 原理：微波能量如何到达脂肪，又不烫伤皮肤？** |
| sections[2].heading "Who should not have Onda microwave contouring?" | onda 适合, onda 不适合, onda 什么人不适合, onda 怀孕, onda 植入物, 微波溶脂 不适合 | `onda 适合` → onda适合; `onda 怀孕` → 怀孕可以做吗, 怀孕可以打 onda 吗; 不适合 forms empty | KEYWORD (weak): **哪些人不适合做 Onda 微波塑形？** |
| sections[3].heading "What does an Onda session feel like, and is there downtime?" | onda 痛吗, onda 恢复期, onda 恢复, 微波溶脂 痛吗, 微波溶脂 恢复期 | `onda 痛吗` → onda pro 痛吗; `onda 恢复期` and `onda 恢复` return; 微波 forms empty | KEYWORD: **做 Onda 是什么感觉，痛吗？有恢复期吗？** (痛吗 is answered by the body: "a warming sensation"; nothing says painless) |
| sections[4].heading "What are the risks of microwave contouring?" | onda 副作用, onda 风险, 微波溶脂 副作用, 微波溶脂 风险 | `onda 副作用` → 溶脂副作用, onda pro 副作用, 会有副作用吗, 肚子副作用 (strong); `onda 风险` returns | KEYWORD: **微波塑形（Onda）有什么风险和副作用？** |
| sections[5].heading "Why do face and body areas cost differently?" | onda 价钱, onda 价格, onda 费用, onda 价钱 脸, onda 脸部, onda pro 价钱 | `onda 价钱` returns (MY 价钱); `onda 价钱 脸` → 脸部 onda 价钱; `onda 脸部` → onda脸部价格; 价格/费用 forms are TW/KR-led | KEYWORD: **为什么 Onda 脸部和身体部位的价钱不同？** |
| FAQ 1 "Is Microwave Contouring a weight-loss treatment?" | 微波溶脂 减肥, onda 减肥 | `onda 减肥` → onda 减肥有冇用 (Cantonese), 减肥原理, 减肥机; 微波 form empty | DIRECT: **微波塑形是减重疗程吗？** 减肥 has demand but is never used (see note 1). |
| FAQ 2 "What device is used at Kaiteki?" | n/a (brand question) | n/a | DIRECT: **Kaiteki 用的是什么仪器？** |
| FAQ 3 "Is it painful, and is there downtime?" | onda 痛吗, onda 恢复期 | as sections[3] | KEYWORD: **Onda 痛吗？有恢复期吗？** |
| FAQ 4 "How many sessions will I need?" | onda 几次, onda 要做几次, onda 疗程, 微波溶脂 几次 | `onda 几次` → onda 几次有效; `onda 要做几次` returns; `onda 疗程` → 间隔, 次数 | KEYWORD: **Onda 要做几次？** (几次有效 avoided: it reads as a results promise) |

**Chinese tally (13 logged strings):** 10 KEYWORD, 3 DIRECT.

**Not usable:** `onda malaysia` (Honda), `onda 价格 / 费用` (Taiwan, Korea, dcard, ptt), `onda 效果 / 效果维持多久` (strong but an efficacy framing; the EN has no matching heading). `冷冻溶脂 vs onda` / `onda vs 冷冻溶脂` and `冷冻减脂 onda 比较` show comparison demand: the `relatedReasons` line covers it; a comparison FAQ would need an EN source first.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Microwave Contouring" | gelombang mikro, rawatan gelombang mikro, microwave contouring, microwave body contouring, kontur badan, microwave lemak, onda contouring | `gelombang mikro` is physics (satelit, komunikasi, ID *adalah*); `rawatan gelombang mikro` empty; `microwave contouring` → microwave body contouring (English); `onda contouring` → onda body contouring | DIRECT: **Kontur Badan Gelombang Mikro** (terms.ts, kept). See note 2. |
| **seoTitle** "Onda Microwave Contouring Malaysia \| Kaiteki" | onda malaysia, onda treatment malaysia, onda price malaysia, rawatan onda, onda pro malaysia | `onda malaysia` → price, onda pro, coolwaves malaysia, **treatment malaysia**, lifting malaysia; `rawatan onda` empty | KEYWORD: **Rawatan Onda Gelombang Mikro di Malaysia \| Kaiteki** (50 chars). *Rawatan Onda* is the Malay form of the "onda treatment" query. |
| **seoDescription** | (same family) + selulit, buang selulit | `selulit` → selulit paha, selulit perut (MY); `buang selulit` returns | KEYWORD: Onda, gelombang mikro, Malaysia, lemak setempat, rupa selulit, doktor, konsultasi percuma (156 chars). *Rupa* selulit, never *buang* selulit. |
| sections[0].heading "What is Microwave Contouring?" | apa itu onda, onda adalah, onda untuk apa, onda pro untuk apa | `apa itu onda` returns (behind ondansetron noise); `onda adalah` and `onda untuk apa` are ID-leaning (*merk, perusahaan, obat ondan*) | KEYWORD (weak): **Apa itu kontur gelombang mikro (Onda)?** |
| sections[1].heading "How can microwave energy reach fat without burning the skin?" | (no Malay mechanism or burn forms for onda; `onda selamat` empty) | nothing | DIRECT: **Bagaimana tenaga gelombang mikro boleh sampai ke lemak tanpa melecurkan kulit?** |
| sections[2].heading "Who should not have Onda?" | onda selamat, fat freezing tidak sesuai, fat freezing hamil | all empty or noise (*hamil* → Hamilton NZ) | DIRECT: **Siapa yang tidak sesuai untuk kontur gelombang mikro Onda?** |
| sections[3].heading "What does an Onda session feel like, and is there downtime?" | onda downtime, onda sakit, onda pro sakit | `onda downtime` → lifting downtime, pro downtime, treatment downtime; *sakit* forms empty | KEYWORD: **Bagaimana rasanya sesi Onda, dan ada downtime ke?** (*downtime* per docs/18 §6) |
| sections[4].heading "What are the risks of microwave contouring?" | onda kesan sampingan, onda side effects | Malay empty; `onda side effects` English only | DIRECT: **Apakah risiko kontur gelombang mikro?** |
| sections[5].heading "Why do face and body areas cost differently?" | onda price malaysia, onda harga, onda pro harga malaysia, onda lifting malaysia | `onda price malaysia` → onda pro / treatment price malaysia (MY, English); `onda harga` is Indonesian taps and *harga onda pro treatment* (ID) | KEYWORD (partial): **Kenapa kos Onda untuk muka dan badan berbeza?** (*kos*, not bare *harga*, per docs/18 §7.2) |
| FAQ 1 "Is Microwave Contouring a weight-loss treatment?" | onda kurus, microwave lemak, onda lemak | all empty or noise (*microwave nasi lemak*) | DIRECT: **Kontur gelombang mikro ialah rawatan turun berat badan ke?** |
| FAQ 2 "What device is used at Kaiteki?" | n/a (brand question) | n/a | DIRECT: **Mesin apa yang digunakan di Kaiteki?** |
| FAQ 3 "Is it painful, and is there downtime?" | onda sakit, onda downtime | as sections[3] | KEYWORD: **Onda sakit tak, dan ada downtime ke?** |
| FAQ 4 "How many sessions will I need?" | onda berapa sesi, onda berapa kali, onda berapa lama | sesi/kali empty; `onda berapa lama` → onda pro bertahan berapa lama (about longevity, a different question) | DIRECT: **Perlu buat Onda berapa sesi?** |

**Malay tally (13 logged strings):** 6 KEYWORD, 7 DIRECT.

**Indonesian pollution seen and avoided:** onda adalah (*merk, perusahaan*), onda untuk apa (*obat ondan*), onda harga (taps, *harga onda pro treatment*), gelombang mikro adalah, kulit kendur *karena / setelah*. Malaysian demand for Onda is English-language (*onda treatment malaysia, onda price malaysia, onda downtime, onda body contouring*).

## Terms carried over from the concern pages

| EN | zh | ms | Source |
|---|---|---|---|
| cellulite (appearance) | 橘皮组织（外观） | (rupa) selulit | body-slimming |
| fibrous bands | 纤维带 | jalur berserat | body-slimming |
| skin firmness | 皮肤紧致度 | ketegangan kulit | body-slimming |
| handpiece | 手柄 | alat pegang tangan | pico-laser (zh), body-slimming (ms) |
| flanks | 腰侧 | tepi pinggang | body-slimming |
| nasolabial folds | 法令纹 | garis senyuman (lipatan nasolabial) | face-lifting, fine-lines-wrinkles |
| jowls | 下颚两侧（嘴边肉） | pipi yang jatuh (jowl) | face-lifting |
| back and bra line | 背部与内衣线 | belakang dan garisan bra | body-slimming |
| not a weight-loss treatment | 不是减重疗程 | bukan rawatan menurunkan berat badan | body-slimming |

## For the bilingual doctor-reviewer

1. **减肥 / 溶脂 kept out.** `onda 减肥` and `微波溶脂` both have demand; neither is used, because the EN says "contouring" and "not a weight-loss treatment". If the doctor confirms Onda's fat effect is accurately described as 溶脂, `微波溶脂` could go in body copy once (as `_treatment-names.md` allows); it is not in this draft.
2. **The ms name says *Badan* but the page also treats the face** (forehead, cheeks, jawline). *Kontur Badan Gelombang Mikro* is the agreed terms.ts name, so it is kept as `name`; the body copy uses the neutral *kontur gelombang mikro*. If the lead agrees, *Kontur Gelombang Mikro* would match the EN scope better (no evidence either way: none of these forms has demand).
3. **"Microwave Contouring is a category of … technology"** is 一类…技术 / *satu kategori teknologi*, matching the pico pilot's 一类激光.
4. **"May also prompt a gradual collagen-remodelling response"** keeps the hedge (也可能 / *mungkin juga*). Please confirm it doesn't read as a firmness promise.
5. **Burn wording:** "without burning the skin" is 不烫伤皮肤 / *tanpa melecurkan kulit*, and "overheating one spot" is 某一点过热 / *satu titik menjadi terlalu panas*. Both are the EN's risk framing, not a safety claim.
6. **"No downtime"** in `durationDowntime` (没有恢复期 / *Tiada downtime*) sits next to "Downtime is usually limited" in the body, as in the EN. Flag for the EN owner if that matters.
7. **Captions** use 医护人员 / *pengamal* (pilot precedent). Change to 医生 / *doktor* if the photos show a doctor.
