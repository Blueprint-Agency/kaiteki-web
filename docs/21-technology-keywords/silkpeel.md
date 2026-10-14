# 21. Technology keyword log: Silkpeel (`/technology/silkpeel`)

**Date:** 2026-10-14 · Device & injectable localisation round, same format as the pilot (`onda-coolwaves.md`).
**Outputs:** `content/i18n/technology/zh/silkpeel.json`, `content/i18n/technology/ms/silkpeel.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/silkpeel.json`.
**Inputs:** EN record for `silkpeel`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `facial-treatments` treatment page (`docs/20-treatment-keywords/facial-treatments.md`), the `acne`, `enlarged-pores` and `pigmentation` concern pages, and the `hydrafacial` device page done in the same batch.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, with `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME / NO VOLUME read as in the pilot (skew signs: *dcard / lihkg / 香港 / traditional characters* for Chinese; *adalah / apakah / wajah / harga treatment … clinic* for Malay).
- **Decision:** KEYWORD = phrased around the real query form, EN meaning kept. DIRECT = faithful translation, no invented keyword.
- **Probes:** shared batch with `hydrafacial`: 128 zh and 145 ms, two batches per language. Raw dumps: `C:/tmp/hydsilk-ac-zh.json`, `C:/tmp/hydsilk-ac-zh2.json`, `C:/tmp/hydsilk-ac-ms.json`, `C:/tmp/hydsilk-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, the seven section headings, the four FAQ questions. This record has no jumpNav, routes or ctaMid. All body copy (summary, leadAnswer, facts, section bodies and list, cost factors, FAQ answers) is a direct, faithful translation.
- **Key finding:** Silkpeel demand is thinner than Hydrafacial's and almost entirely English, typed both as *silkpeel* and *silk peel* (`silk peel facial price malaysia`, `silk peel facial vs hydrafacial`, `silkpeel dermalinfusion`). Chinese adds only `silk peel 是什么` and `silk peel 价钱`; Malay adds `apa itu silkpeel`, `silkpeel untuk apa` and `rawatan silk peel`. Every Silkpeel question about sensitivity, frequency, pain, risk or combination is empty in both languages. *DiamondGlow* has no Malaysian demand in either (`diamondglow` empty in zh; `diamondglow malaysia` → diamond glow malaysia only).
- **"Facial" in zh headings, 面部护理 in zh body**, as on the facial-treatments page. "Clinician" is 医护人员 / *pengamal klinik*, "therapist" 治疗师 / *terapis*, as the EN says.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; Silkpeel, Dermalinfusion, DiamondGlow®, Envy Medical, Allergan Aesthetics, IPL, LED. "hydra-type facial" keeps *hydra* in Latin in both languages (AC `hydra facial` is how both search it).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Silkpeel" | silkpeel, silk peel, silkpeel 中文, silk peel 中文 | `silkpeel` → facial treatment, dermalinfusion, braun (shaver), adalah (ID); `silk peel` → facial, facial price; 中文 forms empty | KEYWORD (brand): **Silkpeel**, kept in Latin (the EN spelling; *silk peel* is the other common form) |
| **seoTitle** "Silkpeel Dermalinfusion Facial Treatment Malaysia \| Kaiteki" | silkpeel 马来西亚, silkpeel malaysia, silk peel facial, silkpeel facial, silkpeel 疗程, dermalinfusion | `silk peel facial` strong (price, myclinic, vs hydrafacial); `silkpeel malaysia`, `silkpeel 马来西亚`, `silkpeel 疗程` empty; `dermalinfusion` global English | KEYWORD: **马来西亚 Silkpeel Facial \| Kaiteki** (30 chars). *Dermalinfusion* dropped to fit 30; it is in the description and body. |
| **seoDescription** | silk peel 价钱, silkpeel dermalinfusion, 毛孔堵塞 facial | `silk peel 价钱` returns; `silkpeel dermalinfusion` English; `毛孔堵塞 facial` empty | KEYWORD: Silkpeel, Dermalinfusion, 钻石探头, 去角质, 导入精华, 肤质纹理, 毛孔堵塞, 免费咨询 (80 chars) |
| sections[0].heading "What is Silkpeel?" | silkpeel 是什么, silk peel 是什么, silk peel 是 | `silk peel 是` → **silk peel 是什么**; `silkpeel 是什么` empty | KEYWORD: **Silkpeel 是什么？** |
| sections[1].heading "How Dermalinfusion works" | silkpeel 原理, silk peel 原理, dermalinfusion | Chinese forms empty; `dermalinfusion` English only | DIRECT: **Dermalinfusion 如何运作** |
| sections[2].heading "Silkpeel or a hydra-type facial: what is the difference?" | silkpeel vs hydrafacial, silkpeel 和 hydrafacial, hydra facial, facial 区别 | `silkpeel vs hydrafacial` → also dermalinfusion vs hydrafacial (English, zh session); `hydra facial` → 是什么, 中文; Chinese 和 / 区别 forms empty | KEYWORD (pattern): **Silkpeel 还是 hydra 类 Facial：有什么区别？** (facial-treatments FAQ 1 pattern "有什么区别") |
| sections[3].heading "When is Silkpeel the right starting point, and when is it not?" | silkpeel 不适合, silkpeel 搭配, silkpeel 疗程 | all empty | DIRECT: **什么时候适合从 Silkpeel 开始，什么时候不适合？** |
| sections[4].heading "Is Silkpeel suitable for Asian and sensitive skin, and who should wait?" | silkpeel 亚洲皮肤, 亚洲皮肤, silkpeel 敏感肌, silk peel 敏感肌, 敏感肌 facial, 敏感肌可以做 | Silkpeel forms empty; `亚洲皮肤` → 亚洲皮肤专科 only; `敏感肌 facial` returns; `敏感肌可以做` → 敏感肌可以做…吗 pattern | KEYWORD (pattern, partial): **亚洲皮肤和敏感肌适合做 Silkpeel 吗？哪些人要先等等？** |
| sections[5].heading "How long is a Silkpeel session, and why is it repeated every few weeks?" | silkpeel 多久, silkpeel 过程, silk peel 多久做一次, facial 要多久, facial 时间 | Silkpeel forms empty; `facial 时间` → 做 facial 时间 (generic, not this question); `facial 要多久` empty | DIRECT: **做一次 Silkpeel 要多久？为什么每隔几个星期要重复？** |
| sections[6].heading "What are the risks of a Silkpeel, including serum reactions?" | silkpeel 副作用, silk peel 副作用, silkpeel 风险, facial 风险, facial 过敏 | all empty (`微晶磨皮副作用` exists, but names a different technique) | DIRECT: **Silkpeel 有哪些风险，包括对精华产生反应？** |
| FAQ 1 "How is Silkpeel different from a hydra-type suction facial?" | (as sections[2]) | as sections[2] | KEYWORD (pattern): **Silkpeel 和 hydra 类吸引式 Facial 有什么区别？** |
| FAQ 2 "Is Silkpeel suitable for sensitive or acne-prone skin?" | silkpeel 敏感, silkpeel 暗疮, silkpeel 痘痘, 敏感肌 facial, 暗疮 facial, facial 暗疮 | Silkpeel forms empty; `敏感肌 facial` returns; `暗疮 facial` → **暗疮 肌 facial**, 暗疮 做 facial (and lihkg) | KEYWORD (partial): **敏感肌或暗疮肌适合做 Silkpeel 吗？** |
| FAQ 3 "How often should I have Silkpeel?" | silkpeel 多久做一次, silk peel 多久做一次, facial 多久做一次 | Silkpeel forms empty; `facial多久做一次` returns | KEYWORD (pattern): **Silkpeel 多久做一次？** |
| FAQ 4 "Can Silkpeel be combined with other treatments at Kaiteki?" | silkpeel 搭配, facial 搭配, facial 配合, facial 可以和 | all empty | DIRECT: **在 Kaiteki，Silkpeel 可以和其他疗程一起做吗？** |

**Chinese tally (14 logged strings):** 9 KEYWORD, 5 DIRECT.

**Not usable (skewed or off-meaning):** `钻石微雕` (strong, but dcard-led and a TW name for diamond microdermabrasion; the EN never uses it), `钻石磨皮` (home machines), `微晶磨皮` (a different technique; traditional-character variants), `silkpeel braun` (an epilator), `暗疮facial lihkg` (HK), `silk peel 价钱` (kept for the description only; no price heading in the EN).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Silkpeel" | silkpeel, silk peel malaysia | `silkpeel` → braun, machine, adalah (ID), vs hydrafacial; `silk peel malaysia` → silk peel facial price malaysia | KEYWORD (brand): **Silkpeel**, kept in Latin |
| **seoTitle** "Silkpeel Dermalinfusion Facial Treatment Malaysia \| Kaiteki" | rawatan silkpeel, rawatan silk peel, silk peel price malaysia, silkpeel dermalinfusion, silkpeel treatment | `rawatan silk peel` returns (MY); `silk peel price malaysia` → silk peel facial price malaysia; `silkpeel treatment` → adalah, harga (ID clinics) | KEYWORD: **Rawatan Facial Silkpeel Dermalinfusion di Malaysia \| Kaiteki** (60 chars). *Rawatan* is the real Malay form; *Rawatan Facial* is the terms.ts name. |
| **seoDescription** | liang pori tersumbat, silk peel facial | `liang pori tersumbat` returns | KEYWORD: Silkpeel, Kaiteki, hujung berlian, serum, tekstur, liang pori tersumbat, konsultasi percuma (157 chars) |
| sections[0].heading "What is Silkpeel?" | apa itu silkpeel, apa itu silk peel, silkpeel untuk apa | `apa itu silkpeel` → also *apa itu treatment silkpeel*; `apa itu silk peel` returns; `silkpeel untuk apa` returns | KEYWORD: **Apa itu Silkpeel?** |
| sections[1].heading "How Dermalinfusion works" | silkpeel berfungsi, silk peel berfungsi, silkpeel cara kerja, dermalinfusion berfungsi | all empty | DIRECT: **Bagaimana Dermalinfusion berfungsi** |
| sections[2].heading "Silkpeel or a hydra-type facial: what is the difference?" | beza silkpeel dan hydrafacial, silkpeel atau hydrafacial, silk peel atau hydrafacial, silkpeel vs hydrafacial | Malay forms empty; `silkpeel vs hydrafacial` → silk peel facial vs hydrafacial (English) | KEYWORD (pattern): **Silkpeel atau facial jenis hydra: apa bezanya?** (the comparison demand is real; "apa beza" is the pilot and facial-treatments FAQ 1 form) |
| sections[3].heading "When is Silkpeel the right starting point, and when is it not?" | silkpeel tidak sesuai (not run; the sections[4] family was all empty) | n/a | DIRECT: **Bila Silkpeel sesuai sebagai titik permulaan, dan bila tidak?** |
| sections[4].heading "Is Silkpeel suitable for Asian and sensitive skin, and who should wait?" | silkpeel kulit sensitif, silkpeel untuk kulit sensitif, silkpeel sensitive skin, silk peel kulit asia, silkpeel kulit asia, facial kulit asia | all empty | DIRECT: **Adakah Silkpeel sesuai untuk kulit Asia dan kulit sensitif, dan siapa yang perlu tunggu dulu?** |
| sections[5].heading "How long is a Silkpeel session, and why is it repeated every few weeks?" | silk peel berapa lama, silkpeel sesi, silk peel berapa kali, silkpeel berapa kali, silk peel sebulan | all empty | DIRECT: **Berapa lama satu sesi Silkpeel, dan kenapa ia diulang setiap beberapa minggu?** |
| sections[6].heading "What are the risks of a Silkpeel, including serum reactions?" | silkpeel kesan sampingan, silkpeel risiko, silk peel bahaya, silkpeel bahaya, silk peel kesan, silkpeel side effects | all empty | DIRECT: **Apakah risiko Silkpeel, termasuk reaksi terhadap serum?** |
| FAQ 1 "How is Silkpeel different from a hydra-type suction facial?" | (as sections[2]) | as sections[2] | KEYWORD (pattern): **Apa beza Silkpeel dengan facial sedutan jenis hydra?** |
| FAQ 2 "Is Silkpeel suitable for sensitive or acne-prone skin?" | silkpeel jerawat, silk peel jerawat, silkpeel untuk jerawat, silk peel untuk jerawat, silkpeel acne, silk peel acne | Malay forms empty; `silkpeel acne` → silkpeel acne ms glow; `silk peel acne` → does silk peel help acne (English) | DIRECT: **Adakah Silkpeel sesuai untuk kulit sensitif atau kulit yang mudah berjerawat?** |
| FAQ 3 "How often should I have Silkpeel?" | silkpeel berapa kerap, silk peel how often, berapa kerap boleh buat facial | Silkpeel forms empty; `berapa kerap boleh buat facial` returns (MY) | KEYWORD (pattern): **Berapa kerap boleh buat Silkpeel?** (same as Hydrafacial FAQ 4) |
| FAQ 4 "Can Silkpeel be combined with other treatments at Kaiteki?" | silk peel combine, silk peel dengan, silkpeel combine treatment, silkpeel dan laser, facial digabungkan, facial dan laser | all empty except `facial dan laser` → perbedaan facial dan laser (ID) | DIRECT: **Bolehkah Silkpeel digabungkan dengan rawatan lain di Kaiteki?** |

**Malay tally (14 logged strings):** 7 KEYWORD, 7 DIRECT.

**Indonesian pollution seen and avoided:** silkpeel adalah / treatment adalah / dermalinfusion adalah, facial silkpeel adalah, harga treatment silkpeel / silk peel treatment harga (ID clinic names), manfaat treatment silkpeel, perbedaan facial dan laser, silkpeel acne ms glow. Bare *harga silkpeel* is never used.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| device-based facial | 用仪器进行的面部护理 | facial berasaskan peranti | hydrafacial |
| facial treatments (facts value) | 医美面部护理 | Rawatan Facial | terms.ts |
| diamond-abrasive tip | 钻石磨砂探头 | hujung kasar bersalut berlian | new |
| negative pressure / vacuum | 负压 / 真空 | tekanan negatif / vakum | new |
| topical solution / serum | 外用溶液 / 精华 | larutan topikal / serum | facial-treatments |
| stratum corneum | 角质层 | stratum korneum (lapisan paling luar kulit) | new |
| barrier | 皮肤屏障 | lapisan pelindung kulit | concern pages |
| hydra-type facial | hydra 类 Facial | facial jenis hydra | new (AC `hydra facial`) |
| non-ablative | 非剥脱性 | bukan ablatif | new |
| resurfacing procedure | 焕肤程序 | prosedur resurfacing | terms.ts ("Laser Resurfacing") |
| inflamed or cystic acne | 发炎或囊肿型暗疮 | jerawat meradang atau jerawat sista | acne |
| clinician / therapist / doctor | 医护人员 / 治疗师 / 医生 | pengamal klinik / terapis / doktor | facial-treatments |
| downtime | 恢复期 | downtime | docs/18 §6 |

## For the bilingual doctor-reviewer

1. **Silkpeel vs DiamondGlow.** The EN explains that the current generation is sold as DiamondGlow®. Neither locale has demand for DiamondGlow, so it appears only where the EN names it. If Kaiteki's unit is a DiamondGlow, the EN should say so first.
2. **"Hydra-type facial"** is hydra 类 Facial / *facial jenis hydra*: the EN avoids naming Hydrafacial here, so neither locale does. 水飞梭 (TW) is not used.
3. **钻石微雕 kept out (zh).** It has strong Chinese demand but is dcard-led and a Taiwanese label for diamond microdermabrasion; using it would also blur Silkpeel with a different technique. Could go in brackets once in the body if the doctor wants it.
4. **"Comparable to a firm massage rather than something requiring numbing"** is 像是力度较大的按摩，而不是需要敷麻药的程度 / *seperti urutan yang agak kuat dan bukan sesuatu yang memerlukan krim kebas*. Neither says painless.
5. **"Typically no meaningful downtime"** is 一般没有明显的恢复期 / *Biasanya tiada downtime yang ketara*, kept with the EN's "varies between individuals".
6. **"Some serum ingredients are avoided in pregnancy"** is kept as a factual caution (怀孕期间会避开某些精华成分 / *dielakkan semasa hamil*).
7. **zh seoTitle** drops "Dermalinfusion" to fit 30 characters; the description, H2 and body keep it.
