# 20. Treatment keyword log: Radiofrequency (`/treatments/radiofrequency`)

**Date:** 2026-10-14 · Follows the pilot method in `pico-laser.md`.
**Outputs:** `content/i18n/treatments/zh/radiofrequency.json`, `content/i18n/treatments/ms/radiofrequency.json` (same shape as the EN record; EN snapshot in `content/i18n/treatments/_en/radiofrequency.json`).
**Inputs:** EN record for `radiofrequency`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the translated `face-contouring`, `dark-eye-circles` and `enlarged-pores` concern pages (terminology carried over, see below).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME / NO VOLUME and the Taiwan, HK and Indonesia skew signs as in `pico-laser.md`.
- **Probes:** 96 zh and 60 ms, two zh batches and one ms batch. Raw dumps: `C:/tmp/rf-ac-zh.json`, `C:/tmp/rf-ac-zh2.json`, `C:/tmp/rf-ac-ms.json` (not in the repo).
- **Scope:** only search-relevant strings are logged (seoTitle, seoDescription, name, section headings, variantModule heading, route titles, ctaMid heading, FAQ questions). This record has no `jumpNav`. All body copy is a direct, faithful translation. Device names (BTL Exilis, Oligio, Wonderface, XERF) stay Latin.
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `src`, `reviewedBy`, `lastReviewed`, top-level `category`, the `relatedReasons` keys, device `title`s.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Radiofrequency" | 射频, 射频紧致, rf 紧致, rf 射频 | `射频` → 射频消融手术, 射频美容仪, 射频微针 (ablation dominates); `射频紧致` empty; `rf 射频` → 美容仪, 副作用, 原理 | KEYWORD: **射频（RF）** (terms.ts, docs/18 §5). Always paired with RF. |
| **seoTitle** "Radiofrequency Treatment Malaysia \| Skin Firmness \| Kaiteki" | 射频疗程, rf 射频疗程, 射频紧致 马来西亚, rf 马来西亚, 皮肤紧致, 皮肤紧致医美, 射频 紧致 | `射频疗程` → **rf 射频疗程**; `皮肤紧致` → 皮肤紧致 医美 (some TW 雷射/ptt); every "+马来西亚" form empty or noise | KEYWORD: **马来西亚 RF 射频疗程 \| 皮肤紧致 \| Kaiteki** (29 chars). 马来西亚 kept for the EN geo intent, as in the pilot. |
| **seoDescription** | (same family) + 射频 不用针 | as above; `射频 不用针` empty | KEYWORD: RF 射频疗程, 皮肤紧致 (76 chars). 不用针 comes from the EN leadAnswer, not added. 免费咨询 kept: the EN has "Book a free consultation". |
| sections[0].heading "What is radiofrequency (RF) treatment?" | 射频是什么, rf 射频是什么, 射频紧致是什么, rf是什么 | `射频是什么` → rf 射频是什么; `rf 射频是什么` returns; `射频紧致是什么` empty; `rf是什么` is noise | KEYWORD: **RF 射频疗程是什么？** |
| sections[1].heading "How does radiofrequency warm the skin without needles?" | 射频原理, rf 射频 原理, 射频紧致原理, 射频美容原理 | `射频原理` → rf 射频原理; `rf 射频 原理` → rf 射频 美容 原理 | KEYWORD: **RF 射频原理：不用针，如何加热皮肤？** |
| variantModule.heading "BTL Exilis, Oligio, Wonderface or XERF: which RF platform, and why" | btl exilis, exilis, oligio, oligio 中文, wonderface, xerf, 射频 机器, 射频紧致仪器 | brand forms return (`oligio` → 是什么, x price malaysia; `xerf` → 是什么, 中文; `btl exilis` → ultra 360 价钱, HK Cantonese); generic device forms empty | DIRECT: **BTL Exilis、Oligio、Wonderface 还是 XERF：用哪一个 RF 射频平台，为什么**. The brand names already carry the demand. |
| routes[0].title "Skin firmness across the lower face" | 下脸松弛, 脸部松弛, 脸部松弛医美, 射频紧致 下颚线 | `脸部松弛` → 运动, 怎么办, **医美**, 改善, 下垂; `下脸松弛` and 下颚线 forms empty | KEYWORD: **下半脸的皮肤紧致度（脸部松弛）**. The gloss names the problem the body describes. |
| routes[1].title "Laxity in the lower lid" | 下眼睑松弛, 眼皮松弛, 眼周松弛, 射频 眼袋, 眼部射频 | `下眼睑松弛` returns itself; `眼皮松弛` strong but upper-lid and TW (dcard); `射频 眼袋` → rf 射频 眼袋, 射频 去 眼袋 (a removal claim); `眼部射频` → home devices | KEYWORD: **下眼睑松弛** (same as the dark-eye-circles card) |
| ctaMid.heading "Not sure whether radiofrequency or another energy fits your skin?" | 射频 和 hifu, hifu 和 射频 区别, rf 和 hifu, hifu 射频 | comparison forms empty; `hifu 射频` → home 7-in-1 devices | DIRECT: **不确定 RF 射频还是其他能量仪器适合你的皮肤？** |
| FAQ 1 "Suitable for sensitive skin?" | 射频 敏感肌, 射频紧致 敏感肌, 射频 敏感, 射频 适合 | all empty; `射频 敏感` → 鼻敏感射频手术 (ENT) | DIRECT: **敏感肌可以做 RF 射频吗？** |
| FAQ 2 "Any downtime after RF?" | 射频 恢复期, 射频紧致 恢复期, 射频 后, 射频后注意事项, 射频 后 泛红 | 恢复期 forms empty; `射频 后` → **rf 射频 后 护理**, then ablation aftercare | DIRECT: **做完 RF 射频有恢复期吗？** (后护理 has demand, but the question is downtime, not aftercare) |
| FAQ 3 "How many sessions?" | 射频紧致 几次, 射频 多久做一次, rf 射频 几次, rf 射频 多久做一次, 射频 次数 | all empty; only `rf 射频` → *几耐做一次* (HK Cantonese) | DIRECT: **RF 射频要做几次？** |
| FAQ 4 "When will I see results?" | 射频 效果, rf 射频 效果, 射频 多久见效, 射频紧致 多久见效 | `射频 效果` → **rf 射频 效果**, 射频治疗效果; 见效 forms empty | KEYWORD: **RF 射频多久才看到效果？** (the answer opens 不会在当天看到) |

**Chinese tally (13 logged strings):** 8 KEYWORD, 5 DIRECT.

**Not usable:** `射频紧致` (docs/18's pairing) returned nothing on its own, so headings pair with RF instead (`rf 射频` has the demand). `电波拉皮` is strong but it's TW/HK slang for Thermage-type monopolar RF (ptt, 价格, 后遗症ptt), and Kaiteki's platforms aren't Thermage, so it isn't used. `射频美容仪` is home-device demand. `rf 射频 价钱` returns but the page has no price FAQ, so nothing is added.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Radiofrequency" | radiofrequency, radiofrekuensi, rf muka, rawatan radiofrequency | `radiofrequency` → ablation (medical); `radiofrekuensi` → adalah, ablasi, konka (ID medical); `rf muka` → **rf untuk muka, apa itu rf muka** (MY); `rawatan radiofrequency` → slip disc | KEYWORD (weak): **Radiofrekuensi (RF)** (terms.ts). See reviewer note 3. |
| **seoTitle** | rf muka, rawatan rf muka, rf facial, rf skin tightening malaysia, tegang muka, rawatan tegang muka, rawatan tegang kulit muka | `rf muka` → rf untuk muka; `tegang muka` → **tegang kulit muka, rawatan tegang muka**; English *rf facial / rf skin tightening* return globally, "+malaysia" empty | KEYWORD: **Rawatan RF Muka di Malaysia \| Tegang Kulit Muka \| Kaiteki** (57 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: radiofrekuensi (RF), ketegangan, tekstur kulit, konsultasi percuma, doktor (159 chars) |
| sections[0].heading "What is radiofrequency (RF) treatment?" | apa itu radiofrequency, apa itu rf, apa itu rf facial, apa itu rf muka | `apa itu radiofrequency` → apa itu radio frequency face; `rf muka` → apa itu rf muka; `apa itu rf facial` returns; `apa itu rf` → RFID | KEYWORD (pattern): **Apa itu rawatan radiofrekuensi (RF)?** |
| sections[1].heading "How does RF warm the skin without needles?" | rf tanpa jarum, radiofrequency untuk apa | `rf tanpa jarum` empty | DIRECT: **Bagaimana radiofrekuensi memanaskan kulit tanpa jarum?** |
| variantModule.heading | btl exilis, exilis malaysia, oligio malaysia, wonderface malaysia, xerf malaysia | `oligio malaysia` → price, treatment malaysia; `xerf malaysia` → price, distributor; `xerf` → penang, kl, johor bahru; exilis and wonderface "+malaysia" empty | DIRECT: **BTL Exilis, Oligio, Wonderface atau XERF: platform RF yang mana, dan kenapa** (brand names carry the demand) |
| routes[0].title "Skin firmness across the lower face" | kulit muka kendur, muka kendur, rawatan muka kendur, tegang muka | `kulit muka kendur` → punca, **rawatan untuk kulit muka kendur** (plus ID *perawatan*, *mengatasi*); `rawatan muka kendur` returns | KEYWORD: **Ketegangan kulit di bahagian bawah muka (muka kendur)** |
| routes[1].title "Laxity in the lower lid" | kelopak mata kendur, kulit bawah mata kendur, mata kendur, rf mata | `kelopak mata kendur` → sebelah, apa penyebabnya (some ID *karena, obat*); `kulit bawah mata kendur` returns; `rf mata` is ID (*adalah, mata uang*) | KEYWORD: **Kelopak mata bawah yang kendur** (matches the dark-eye-circles card) |
| ctaMid.heading | rf vs hifu, hifu vs rf, hifu atau rf | `rf vs hifu` strong but English and global (reddit, which is better); `hifu atau rf` → bagusan hifu atau rf (ID) | DIRECT: **Tak pasti sama ada radiofrekuensi atau tenaga lain yang sesuai untuk kulit anda?** |
| FAQ 1 "Suitable for sensitive skin?" | rf kulit sensitif, radiofrequency kulit sensitif, rf facial kulit sensitif | all empty | DIRECT: **Rawatan RF sesuai ke untuk kulit sensitif?** |
| FAQ 2 "Any downtime after RF?" | rf downtime, rf facial downtime, radiofrequency downtime | `rf facial downtime` and `radiofrequency downtime` return; *downtime* is the MY word (docs/18 §6) | KEYWORD: **Ada downtime ke selepas rawatan RF?** |
| FAQ 3 "How many sessions?" | rf berapa kali, rf facial berapa kali, radiofrequency berapa kali | `rf berapa kali` returns (its children *rf wajah / rf perut* lean ID); facial and radiofrequency forms empty | KEYWORD: **Rawatan RF perlu buat berapa kali?** |
| FAQ 4 "When will I see results?" | rf facial hasil, rf facial kesan, radiofrequency kesan sampingan | all empty | DIRECT: **Bila saya boleh nampak hasilnya?** |

**Malay tally (13 logged strings):** 8 KEYWORD, 5 DIRECT.

**Indonesian pollution seen and avoided:** rf muka adalah, *perawatan muka rf*, rf wajah untuk apa, radiofrekuensi adalah / ablasi, *perawatan kulit muka kendur*, *karena apa, obat*, bagusan hifu atau rf, rf mata adalah. Kesan sampingan and harga forms for RF were empty.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| route bodies (lower-face firmness, lower lid) | reused verbatim | reused verbatim | face-contouring and dark-eye-circles `treatmentWhy.radiofrequency` (identical EN) |
| radiofrequency (body) | 射频 / RF 射频 | radiofrekuensi / RF | enlarged-pores |
| RF microneedling | 射频微针 | RF microneedling | acne, acne-scars |
| focused ultrasound | 聚焦超声波 | ultrabunyi terfokus | face-contouring (超声波 / ultrabunyi) |
| keloid scarring | 蟹足肿 | parut keloid | pico-laser, acne |
| retinoids / peels | A酸类产品 / 换肤 | retinoid / peel | pico-laser |
| downtime | 恢复期 | downtime | docs/18 §6 |
| practitioner (captions) | 医护人员 | pengamal | pico-laser |

## For the bilingual doctor-reviewer

1. **"No downtime" vs "minimal".** The EN `durationDowntime` says "No downtime" (无恢复期 / *Tiada downtime*), but the afterSession intro and FAQ 2 say "usually minimal". Translated faithfully. The EN may want aligning.
2. **射频紧致 has no autocomplete on its own**, so the zh headings use "RF 射频", which is where the demand is. 电波拉皮 is deliberately not used (TW/HK Thermage slang).
3. **Malay name.** *Radiofrekuensi* is mostly Indonesian or medical search (ablation), and the Malaysian demand is on *rf muka* / *rf facial*. The seoTitle therefore says *Rawatan RF Muka*, while the name stays *Radiofrekuensi (RF)* from terms.ts. The page also covers body contour (BTL Exilis), so check that "Muka" in the title isn't too narrow.
4. **Device eyebrows:** cryogen cooling is 冷媒冷却 / *penyejukan krio*; neuromuscular stimulation is 神经肌肉刺激 / *rangsangan neuromuskular*; "shot by shot" is 逐发输出 / *satu tembakan demi satu tembakan*. Please confirm.
5. **Burns** is 烫伤 / *melecur*. Some clinics write 灼伤 in zh; either is factual.
6. **Pacemaker** is 心脏起搏器 / *perentak jantung*.
