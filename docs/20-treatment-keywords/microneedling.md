# 20. Treatment keyword log: RF Microneedling (`/treatments/microneedling`)

**Date:** 2026-10-14 · Follows the pilot method in `pico-laser.md`.
**Outputs:** `content/i18n/treatments/zh/microneedling.json`, `content/i18n/treatments/ms/microneedling.json` (same shape as the EN record; EN snapshot in `content/i18n/treatments/_en/microneedling.json`).
**Inputs:** EN record for `microneedling`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the translated `acne`, `acne-scars`, `enlarged-pores`, `fine-lines-wrinkles` and `melasma` concern pages (terminology carried over, see below).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME / NO VOLUME and the skew signs as in `pico-laser.md`.
- **Probes:** 55 zh and 52 ms. Raw dumps: `C:/tmp/mn-ac-zh.json`, `C:/tmp/mn-ac-ms.json` (not in the repo).
- **Scope:** only search-relevant strings are logged (seoTitle, seoDescription, name, section headings, variantModule heading, route titles, ctaMid heading, FAQ questions). This record has no `jumpNav`. All body copy is a direct, faithful translation. Device and brand names (Potenza, Morpheus8, Sylfirm X, InMode, Viol, Cynosure Lutronic) stay Latin.
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `src`, `reviewedBy`, `lastReviewed`, top-level `category`, `device`, the `relatedReasons` keys, device `title`s.
- **黄金微针:** docs/18 §5 lists it as the recognised Malaysian colloquial name for RF microneedling and keeps it for body copy. On this page the evidence for it is much stronger than for 射频微针 in every question form (痛吗, 恢复期, 要做几次, 马来西亚价钱), so it carries the zh FAQ questions and appears as a gloss in the title and first heading. The display `name` stays 射频微针, so cards and links stay consistent with terms.ts and the concern pages.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "RF Microneedling" | 射频微针, 黄金微针, rf 微针, 微针 | `射频微针` → 原理, 英文, rf 射频微针, potenza 射频微针; `黄金微针` → 功效, 多少钱, 是什么, 多久做一次, 副作用; `微针` alone is home rollers and patches | KEYWORD: **射频微针** (terms.ts, docs/18 §5). 黄金微针 is used as the gloss. |
| **seoTitle** "RF Microneedling Malaysia \| Potenza, Morpheus8 \| Kaiteki" | 射频微针 马来西亚, 黄金微针 马来西亚, potenza 黄金微针, morpheus8 | `黄金微针 马来西亚` → **黄金微针马来西亚价钱** (the only MY-tagged form); `射频微针 马来西亚` empty; `potenza 黄金微针` returns but is HK/TW-led (香港价钱, dcard, 台湾) | KEYWORD: **马来西亚射频微针（黄金微针） \| Kaiteki** (24 chars). The device names don't fit in 30 chars, so they go in the description. |
| **seoDescription** | (same family) + 黄金微针 痘疤, 黄金微针 毛孔 | `黄金微针 痘疤` and `黄金微针 毛孔` return | KEYWORD: 射频微针（黄金微针）, Potenza, Morpheus8, Sylfirm X, 痘疤, 毛孔 (84 chars). 免费咨询 kept from the EN. |
| sections[0].heading "What is RF microneedling?" | 射频微针是什么, 黄金微针是什么, rf微针是什么 | `黄金微针是什么` returns (also a top `黄金微针` suggestion); the 射频 and rf forms are empty | KEYWORD: **射频微针（黄金微针）是什么？** |
| sections[1].heading "How does RF microneedling treat several depths in one session?" | 射频微针原理, 黄金微针原理 | both return; `射频微针原理` is the first `射频微针` suggestion | KEYWORD: **射频微针原理：一次疗程如何处理不同深度？** |
| variantModule.heading "Morpheus8, Sylfirm X or Potenza: which device, and why" | 黄金微针 机器, 黄金微针 区别, 射频微针 区别, morpheus8 vs potenza, morpheus8 potenza | `黄金微针 机器` returns; 区别 forms empty; `morpheus8 vs potenza` → sylfirm x vs morpheus8 vs potenza (English, global) | KEYWORD: **Morpheus8、Sylfirm X 还是 Potenza：选哪一台黄金微针机器，为什么** |
| routes[0].title "Depressed scarring, texture and enlarged pores" | 痘坑, 凹洞痘疤, 黄金微针 痘疤, 黄金微针 痘坑, 毛孔粗大, 黄金微针 毛孔 | `痘坑` strong (怎么修复, 能修复吗, 治疗); `凹洞痘疤` is TW (雷射, dcard); `黄金微针 毛孔` → 毛孔粗大 黄金微针; `毛孔粗大` strong | KEYWORD: **凹陷型痘疤（痘坑）、皮肤纹理和毛孔粗大**. 凹陷型痘疤 matches the acne card; 痘坑 matches the terms.ts name 痘疤与痘坑. |
| routes[1].title "Etched lines and overall texture" | 黄金微针 细纹, 黄金微针 皱纹 | `黄金微针 皱纹` returns; 细纹 empty | KEYWORD (term): **刻进皮肤的皱纹和整体肤质** (fine-lines card wording, with 皱纹 for 纹路) |
| ctaMid.heading "Not sure which of the three devices suits your skin?" | n/a (conversion copy) | n/a | DIRECT: **不确定三台仪器中哪一台适合你的皮肤？** |
| FAQ 1 "Which device is right for me: Morpheus8, Sylfirm X or Potenza?" | morpheus8 vs potenza, morpheus8 中文, sylfirm x, potenza 中文 | brand forms return, mostly HK Cantonese (好唔好, 几耐做一次, 边间好) or English *vs* | DIRECT: **Morpheus8、Sylfirm X 和 Potenza，哪一台适合我？** |
| FAQ 2 "Is RF microneedling painful?" | 射频微针痛吗, 黄金微针痛吗, 黄金微针 痛 | `黄金微针痛吗` returns; `黄金微针 痛` → 痛吗, 痛感, 痛不痛 (some HK/dcard); 射频 form empty | KEYWORD: **射频微针（黄金微针）痛吗？** (no 无痛 anywhere) |
| FAQ 3 "Is there any downtime?" | 射频微针恢复期, 黄金微针恢复期, 黄金微针 停机期 | `黄金微针恢复期` returns; the others empty | KEYWORD: **做完黄金微针有恢复期吗？** |
| FAQ 4 "How many sessions?" | 射频微针几次, 黄金微针几次, 黄金微针要做几次, 黄金微针多久做一次 | `黄金微针要做几次` and `黄金微针多久做一次` return (the latter is a top `黄金微针` suggestion); 射频 forms empty | KEYWORD: **黄金微针要做几次？** (多久做一次 not added: the answer only says "a few weeks apart") |

**Chinese tally (13 logged strings):** 11 KEYWORD, 2 DIRECT.

**Not usable:** `黄金微针价钱` is HK/TW/KR-led (台湾, 香港, 韩国); only `黄金微针马来西亚价钱` is MY, and the page has no price FAQ. `黄金微针 效果` returns but leads to dcard and *效果好吗*, which would read as an efficacy question. `凹洞痘疤` is Taiwan usage. `黄金微针 黄褐斑` is empty.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "RF Microneedling" | rf microneedling, microneedling, rawatan microneedling | `rf microneedling` → harga, **price malaysia, malaysia**; `rawatan microneedling` → kos rawatan microneedling | KEYWORD: **RF Microneedling** (terms.ts, docs/18) |
| **seoTitle** | rf microneedling malaysia, potenza microneedling malaysia, morpheus8 malaysia, sylfirm x malaysia | `rf microneedling malaysia` → price, potenza rf microneedling malaysia; `morpheus8 malaysia` → price; `sylfirm x malaysia` → price | KEYWORD: **RF Microneedling di Malaysia \| Potenza, Morpheus8 \| Kaiteki** (59 chars) |
| **seoDescription** | (same family) + parut jerawat, rawatan parut jerawat | `parut jerawat` strong (berlubang, boleh hilang ke) | KEYWORD: RF microneedling, parut jerawat, liang pori, three devices, konsultasi percuma (157 chars). *Guna* (not *menggunakan*) to fit 160, as in the pilot. |
| sections[0].heading "What is RF microneedling?" | apa itu rf microneedling, apa itu microneedling, microneedling adalah | `apa itu rf microneedling` returns; `apa itu microneedling` → microneedling rf; `microneedling adalah` is ID | KEYWORD: **Apa itu RF microneedling?** |
| sections[1].heading "How does RF microneedling treat several depths in one session?" | rf microneedling untuk apa, microneedling vs rf microneedling | `untuk apa` empty for the RF form; vs forms English | DIRECT: **Bagaimana RF microneedling merawat beberapa kedalaman kulit dalam satu sesi?** |
| variantModule.heading | mesin rf microneedling, jenis rf microneedling, morpheus8 vs potenza, morpheus8 vs sylfirm x | `mesin rf microneedling` returns; `jenis` empty; vs forms are English and global (reddit, Thai) | KEYWORD: **Morpheus8, Sylfirm X atau Potenza: mesin RF microneedling yang mana, dan kenapa** |
| routes[0].title "Depressed scarring, texture and enlarged pores" | parut berlubang, rawatan parut berlubang, microneedling parut jerawat, microneedling liang pori, microneedling pori | `parut berlubang` → di muka, treatment, boleh hilang ke; `rawatan parut berlubang` → harga, klinik (MY); microneedling + parut/pori forms empty or Italian | KEYWORD: **Parut berlubang, tekstur dan liang pori besar** (matches the acne card) |
| routes[1].title "Etched lines and overall texture" | microneedling garis halus, microneedling tekstur kulit | both empty | DIRECT: **Garis yang sudah terukir dan tekstur keseluruhan** (fine-lines card wording) |
| ctaMid.heading | n/a (conversion copy) | n/a | DIRECT: **Tak pasti mesin mana antara tiga ini yang sesuai untuk kulit anda?** |
| FAQ 1 "Which device is right for me?" | morpheus8 vs potenza, morpheus8 vs sylfirm x | English and global only | DIRECT: **Mesin mana yang sesuai untuk saya: Morpheus8, Sylfirm X atau Potenza?** |
| FAQ 2 "Is RF microneedling painful?" | microneedling sakit tak, microneedling sakit, rf microneedling sakit | `microneedling sakit` → sakit ga (ID), sakit; *sakit tak* is the MY form seen for pico (`pico laser sakit tak`) | KEYWORD (partial): **RF microneedling sakit tak?** |
| FAQ 3 "Is there any downtime?" | microneedling downtime, rf microneedling downtime, downtime microneedling berapa lama | `downtime microneedling berapa lama` returns; English downtime forms strong | KEYWORD: **RF microneedling ada downtime ke, dan berapa lama?** (the answer gives "one to two days"; same precedent as pilot FAQ 4) |
| FAQ 4 "How many sessions?" | microneedling berapa kali, rf microneedling berapa kali, microneedling berapa sesi | `microneedling berapa kali` → sebulan, rambut; RF and sesi forms empty | KEYWORD: **Perlu buat RF microneedling berapa kali?** |

**Malay tally (13 logged strings):** 9 KEYWORD, 4 DIRECT.

**Indonesian pollution seen and avoided:** microneedling adalah (*rf microneedling adalah, tindakan microneedling adalah*), *apa itu perawatan microneedling*, microneedling sakit ga. Kesan sampingan and selepas/penjagaan forms were all empty.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| route bodies (scarring, etched lines) | reused (acne / fine-lines `treatmentWhy.microneedling`, trimmed to the EN) | reused, as zh | acne, fine-lines-wrinkles |
| rolling / boxcar scarring | 滚动型和箱型痘疤 | parut rolling dan boxcar | acne, acne-scars |
| depressed scarring | 凹陷型痘疤（痘坑） | parut berlubang | acne card, terms.ts |
| melasma | 黄褐斑 | jeragat (melasma) | docs/18 §5 |
| post-inflammatory hyperpigmentation | 炎症后色素沉着 | hiperpigmentasi pasca-radang | pico-laser, pigmentation |
| pulsed / continuous wave | 脉冲波 / 连续波 | gelombang berdenyut / berterusan | melasma |
| oral isotretinoin | 口服异维A酸（isotretinoin） | isotretinoin oral | pico-laser |
| numbing cream | 麻药膏 | krim kebas | acne, pico-laser |
| scabs / crusting | 痂 | kuping | pico-laser |
| keloid scarring | 蟹足肿 | parut keloid | pico-laser |

## For the bilingual doctor-reviewer

1. **黄金微针 as the zh gloss.** Strictly, 黄金微针 describes gold-plated, insulated needles; in Malaysian Chinese it's used for RF microneedling in general (docs/18 §5). The zh title, first heading, variant heading and three FAQs use it. Confirm it's acceptable for all three devices, including Sylfirm X.
2. **Isotretinoin is named** (口服异维A酸（isotretinoin） / *isotretinoin oral*), because the EN avoidIf names it, as on the pico-laser page.
3. **"Permanent fillers"** is 永久性填充剂 / *filler kekal*. It's a factual declaration item (a contraindication), so the L-03r warning is expected.
4. **"It does not settle melasma for good"** is 它不能让黄褐斑一劳永逸地消退 / *Ia tidak menyelesaikan jeragat buat selama-lamanya*: negated, no permanence claim.
5. **"Serious effects are uncommon when … performed by a trained doctor"** is kept conditional (在适当选择个案并由受过训练的医生进行时 / *apabila … dilakukan oleh doktor yang terlatih*). Neither locale says "safe".
6. **"Subdermal reach"** is 可达皮下 / *Jangkauan bawah dermis*. Confirm the device wording.
7. **Caption 2 says "A doctor"** (医生 / *Doktor*) because the EN does; the hero alt says "practitioner" (医护人员 / *Pengamal*).
