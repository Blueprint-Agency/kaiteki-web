# 21. Technology keyword log: XERF (`/technology/xerf`)

**Date:** 2026-10-14 · Follows the pilot (`onda-coolwaves.md`): same method, decision rules and table format.
**Outputs:** `content/i18n/technology/zh/xerf.json`, `content/i18n/technology/ms/xerf.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/xerf.json`.
**Inputs:** EN record for `xerf`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `radiofrequency` treatment page (`docs/20-treatment-keywords/radiofrequency.md`, whose variantModule already describes XERF: 多频单极 · 冷媒冷却 / *Monopolar pelbagai frekuensi · penyejukan krio*) and the `face-lifting` / `face-contouring` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`, read as in the pilot.
- **Probes:** the shared lifting-device batch (187 zh, 136 ms; see `ultracel-q.md`). Raw dumps: `C:/tmp/lift4-ac-zh.json`, `C:/tmp/lift4-ac-zh2.json`, `C:/tmp/lift4-ac-ms.json`, `C:/tmp/lift4-ac-ms2.json` (not in the repo).
- **Scope:** only search-relevant strings are logged (name, seoTitle, seoDescription, the seven section headings, the four FAQ questions). All body copy is a direct, faithful translation.
- **What the AC says about this device:** XERF has real Chinese demand of its own (`xerf 是什么`, `xerf 中文`, `xerf 禁忌`, `xerf 痛吗`, `xerf 副作用`, `xerf 疗程`, `xerf 效果`, `xerf 多久做一次`, `xerf 维持多久`). Malay demand is entirely **English** (*xerf malaysia → xerf treatment malaysia, xerf kl / penang / johor bahru, xerf vs ultherapy prime, xerf side effects, xerf downtime*), so most Malay headings come out DIRECT.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; XERF, Cynosure Lutronic, Structural Skin Tightening (glossed 结构性皮肤紧致 in zh), Wave Fit™, Advanced Integrated Cryogen Delivery, Never-Numb™, Sylfirm X, Morpheus8, 6.78 MHz / 2 MHz.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "XERF" | xerf, xerf 中文 | `xerf` → **xerf 是什么, xerf 中文**, xerf machine (plus 新二发 noise); `xerf 中文` → 中文名, xerf 电波 中文 | KEYWORD (brand): **XERF**, kept in Latin |
| **seoTitle** "XERF RF Skin Tightening Treatment Malaysia \| Kaiteki" | xerf 疗程, xerf 射频, xerf 紧致, xerf 马来西亚, rf 射频疗程 (radiofrequency.md) | `xerf 疗程` returns; `rf 射频疗程` returns; 射频 / 紧致 / 马来西亚 with xerf empty | KEYWORD: **马来西亚 XERF RF 射频紧致疗程 \| Kaiteki** (29 chars). RF 射频 pairing as on the RF page; 马来西亚 kept for the EN geo intent. |
| **seoDescription** | 单极射频, 射频 紧致, xerf 效果 | `单极射频` → 原理, 机, 双极射频分别; `射频 紧致` empty | KEYWORD: XERF, 多频单极, RF 射频, 皮肤紧致度, 松弛, 不用针, 麻醉膏, 免费咨询 (76 chars) |
| sections[0].heading "What is XERF?" | xerf 是什么 | returns itself (2nd `xerf` suggestion) | KEYWORD: **XERF 是什么？** |
| sections[1].heading "How multifrequency monopolar RF works" | xerf 原理, 单极射频, 单极射频 原理, 多频射频 | `xerf 原理` → xrf (noise); `单极射频` → **单极射频原理**; `多频射频` empty | KEYWORD (term): **XERF 原理：多频单极射频如何运作** |
| sections[2].heading "XERF or RF microneedling: which kind of radiofrequency is this?" | 射频微针, xerf 射频微针, xerf vs, xerf 和 | `射频微针` strong (原理, 英文, rf 射频微针, potenza); `xerf vs` → thermage, oligio x, density; `xerf 和` → 热玛吉 / thermage | KEYWORD (term): **XERF 还是射频微针：这是哪一种射频？** (射频微针 = terms.ts microneedling) |
| sections[3].heading "What can XERF firm, and when does sagging need another approach?" | xerf 紧致, xerf 下垂, xerf 适合 | all empty | DIRECT: **XERF 可以紧致哪些问题？什么时候下垂需要别的方法？** |
| sections[4].heading "Is XERF safe for darker skin, and what rules it out?" | xerf 禁忌, 射频 禁忌, 射频 深色皮肤, 射频 肤色 | `xerf 禁忌` returns itself; `射频 禁忌` → 治疗禁忌症; 肤色 forms empty | KEYWORD: **XERF 对较深的肤色安全吗？有哪些禁忌？** |
| sections[5].heading "Does XERF need numbing, and can you go straight back to work?" | xerf 麻醉, xerf 不用麻醉, 射频 麻药, xerf 恢复期, xerf 恢复 | all empty | DIRECT: **做 XERF 需要涂麻醉膏吗？做完可以马上回去上班吗？** (麻醉膏 as on the hifu page) |
| sections[6].heading "Can XERF burn or mark the skin?" | xerf 烫伤, 射频 烫伤, xerf 副作用 | 烫伤 forms empty; `xerf 副作用` returns itself | KEYWORD (weak): **XERF 副作用：会烫伤皮肤或留下痕迹吗？** The section is the side-effects section, so the lead word keeps the meaning (pilot precedent with 禁忌). |
| FAQ 1 "How is XERF different from RF microneedling like Sylfirm X or Morpheus8?" | 射频微针, 射频微针 和, 射频微针 区别, xerf vs | `射频微针` strong; comparison forms empty | KEYWORD (term): **XERF 和射频微针（例如 Sylfirm X 或 Morpheus8）有什么差别？** |
| FAQ 2 "Why does XERF use two frequencies instead of one?" | xerf 频率, 多频射频 | empty | DIRECT: **为什么 XERF 用两种频率，而不是一种？** |
| FAQ 3 "Does XERF need numbing cream, and how does it feel?" | xerf 痛吗, xerf 麻醉, 射频 痛吗 | `xerf 痛吗` returns itself; 麻醉 forms empty | KEYWORD (partial): **XERF 需要涂麻醉膏吗？做的时候是什么感觉，痛吗？** 痛吗 is added next to the EN's "how does it feel"; the answer describes deep warmth, says comfort varies, and nothing says painless. |
| FAQ 4 "Is XERF safe for Asian or darker skin tones?" | 射频 肤色, 射频 深色皮肤 | empty | DIRECT: **XERF 对亚洲人或较深的肤色安全吗？** |

**Chinese tally (14 logged strings):** 10 KEYWORD, 4 DIRECT (one weak: sections[6]; one partial: FAQ 3).

**Not usable:** `xerf 电波` and `电波拉皮` (strong, but dcard / 台湾 / ptt tails and TW/HK slang for Thermage-type RF, per radiofrequency.md), `xerf vs thermage` (comparison demand with no EN source), `xerf 维持多久` / `xerf 效果` / `xerf 多久做一次` (real MY demand, but the EN has no heading for them; candidates if the EN adds an FAQ), `xerf 价钱` (HK/KR tails).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "XERF" | xerf, xerf malaysia | `xerf` → penang, kl, johor bahru, vs ultherapy prime; `xerf malaysia` → price, distributor, treatment malaysia | KEYWORD (brand): **XERF** |
| **seoTitle** | xerf treatment malaysia, rawatan xerf, xerf tegang muka, xerf skin tightening | `xerf treatment malaysia` returns; *rawatan xerf* and *tegang muka* forms empty; `xerf skin tightening` English | KEYWORD: **Rawatan XERF di Malaysia \| Tegang Kulit dengan RF \| Kaiteki** (59 chars). *Rawatan XERF di Malaysia* is the Malay form of "xerf treatment malaysia" (pilot precedent); *tegang kulit* as on the RF page title. |
| **seoDescription** | xerf rf, monopolar rf | `xerf rf` → rf skin tightening, rf treatment; `monopolar rf` returns (English) | KEYWORD: XERF, RF monopolar, ketegangan, kekenduran kulit, tanpa jarum, krim kebas, konsultasi percuma (157 chars) |
| sections[0].heading "What is XERF?" | apa itu xerf | autocorrects to *apa itu xrf* (X-ray fluorescence) | DIRECT: **Apa itu XERF?** |
| sections[1].heading "How multifrequency monopolar RF works" | xerf how it works, xerf frequency, monopolar rf | English only (*xerf dual frequency*, *monopolar rf vs bipolar rf*) | DIRECT: **Bagaimana RF monopolar pelbagai frekuensi berfungsi** |
| sections[2].heading "XERF or RF microneedling…" | rf microneedling, rf microneedling malaysia, apa itu rf microneedling, xerf vs rf microneedling | `rf microneedling malaysia` → price; `apa itu rf microneedling` returns (MY); `xerf vs rf microneedling` returns | KEYWORD (term): **XERF atau RF microneedling: jenis radiofrekuensi yang mana satu?** (*RF microneedling* as on the ms acne pages) |
| sections[3].heading "What can XERF firm, and when does sagging need another approach?" | rf kulit kendur, xerf tegang muka | empty | DIRECT: **Apa yang boleh ditegangkan oleh XERF, dan bila kulit kendur memerlukan pendekatan lain?** |
| sections[4].heading "Is XERF safe for darker skin, and what rules it out?" | xerf kulit gelap, xerf asian skin, xerf sesuai | empty | DIRECT: **Adakah XERF selamat untuk kulit yang lebih gelap, dan siapa yang tidak sesuai?** |
| sections[5].heading "Does XERF need numbing, and can you go straight back to work?" | xerf numbing, xerf numbing cream, xerf no numbing, xerf downtime | `does xerf need numbing cream` (English); `xerf downtime` English | DIRECT: **Perlukah krim kebas untuk XERF, dan boleh terus kembali bekerja?** |
| sections[6].heading "Can XERF burn or mark the skin?" | xerf burn, rf melecur, xerf kesan sampingan, xerf side effects | `xerf burn` → burn fat, Burnaby (noise); Malay empty; `xerf side effects` English | DIRECT: **Bolehkah XERF menyebabkan kulit melecur atau berbekas?** (*melecur* as on the RF page) |
| FAQ 1 "How is XERF different from RF microneedling like Sylfirm X or Morpheus8?" | xerf vs morpheus8, xerf vs sylfirm, xerf vs rf microneedling | all return (English) | KEYWORD (pattern): **Apa beza XERF dengan RF microneedling seperti Sylfirm X atau Morpheus8?** (*beza* per hifu FAQ 2) |
| FAQ 2 "Why does XERF use two frequencies instead of one?" | xerf frequency | → xerf dual frequency (English) | DIRECT: **Kenapa XERF guna dua frekuensi, bukan satu?** |
| FAQ 3 "Does XERF need numbing cream, and how does it feel?" | xerf sakit, xerf painful | `xerf sakit` empty; `xerf painful` English | DIRECT: **XERF perlu krim kebas ke, dan bagaimana rasanya?** |
| FAQ 4 "Is XERF safe for Asian or darker skin tones?" | xerf kulit gelap, xerf asian skin | empty | DIRECT: **Adakah XERF selamat untuk kulit Asia atau kulit yang lebih gelap?** |

**Malay tally (14 logged strings):** 5 KEYWORD, 9 DIRECT.

**Indonesian pollution seen and avoided:** none specific to XERF (the Malay demand is English). *rf microneedling harga* is ID-led; bare *harga* not used.

## Terms carried over

Same as `radiofrequency.md` (射频 / RF 射频, 射频微针 / *RF microneedling*, 冷媒冷却 / *penyejukan krio*, 烫伤 / *melecur*, 心脏起搏器 / *perentak jantung*, 蟹足肿 / *parut keloid*, 恢复期 / *downtime*), plus:

| EN | zh | ms | Source |
|---|---|---|---|
| monopolar / bipolar / multipolar | 单极 / 双极 / 多极 | monopolar / bipolar / multipolar | radiofrequency variantModule |
| multifrequency | 多频 | pelbagai frekuensi | radiofrequency variantModule |
| bulk-heating, non-needling | 整体加热、不用针 | pemanasan menyeluruh tanpa jarum | new |
| fractional channels | 点阵式的微细通道 | saluran fraksional | new |
| return path | 回路 | laluan balik | new |
| numbing cream | 麻醉膏 | krim kebas | hifu |
| pinkness | 泛粉红 | kemerahan jambu | new |
| surface protection (facts label) | 表面保护 | Perlindungan permukaan | new |

## For the bilingual doctor-reviewer

1. **Never-Numb™ / "no numbing cream needed".** Both locales keep the EN's attribution (制造商把 XERF 形容为… / *Pengeluar menggambarkan…*) and "generally not required" (一般不需要 / *lazimnya tidak diperlukan*). Neither says painless.
2. **zh FAQ 3 adds 痛吗** to the EN's "how does it feel". The answer describes warmth and says comfort varies. If the reviewer prefers the literal question, use 做的时候是什么感觉？ (DIRECT).
3. **"Pinkness"** is 泛粉红 / *kemerahan jambu*. Confirm it reads naturally.
4. **"Thyroid conditions in the neck area"** is 颈部的甲状腺问题 / *masalah tiroid di kawasan leher*, copied as the EN has it.
5. **"Essentially no downtime" (FAQ 1)** is 基本上没有恢复期 / *pada dasarnya tiada downtime*, as the EN says. The session section keeps the softer "usually minimal".
6. **Real Chinese demand with no EN source:** `xerf 维持多久`, `xerf 多久做一次`, `xerf 效果`. An EN FAQ on maintenance or session spacing would pick these up.
