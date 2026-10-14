# 20. Treatment keyword log: Vascular / Pigment Laser (`/treatments/vascular-pigment-laser`)

**Date:** 2026-10-14 · Treatment-page localisation round, following the `pico-laser.md` pilot.
**Outputs:** `content/i18n/treatments/zh/vascular-pigment-laser.json`, `content/i18n/treatments/ms/vascular-pigment-laser.json` (same shape as the EN record). EN snapshot: `content/i18n/treatments/_en/vascular-pigment-laser.json`.
**Inputs:** EN record for `vascular-pigment-laser`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, and the already-translated `vascular-lesions`, `pigmentation`, `birthmark` and `dark-eye-circles` concern pages (terminology carried over, see below).

## Method

Same as `pico-laser.md`: Google Autocomplete (`suggestqueries.google.com`, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`). HAS VOLUME = the phrase or a natural Malaysian form of it comes back without a TW/HK/ID skew → **KEYWORD** (string phrased around the real query, EN meaning kept). NO VOLUME → **DIRECT** (faithful translation).

- **Probes:** 64 zh and 57 ms for this page, run in a shared batch with `laser-hair-removal`. Raw dumps: `C:/tmp/vlhr-ac-zh.json`, `C:/tmp/vlhr-ac-zh2.json`, `C:/tmp/vlhr-ac-ms.json`, `C:/tmp/vlhr-ac-ms2.json` (not in the repo).
- **Scope:** search-relevant strings only (name, seoTitle, seoDescription, the six section headings, the four FAQ questions). This record has no jumpNav, routes, variantModule or ctaMid. All body copy (section bodies, FAQ answers, captions, summary, leadAnswer) is a direct, faithful translation.
- **Device names stay Latin:** Pro Yellow, QuadroStar, M22 IPL, DermaV.
- **IPL in Chinese:** people don't search "IPL" or "强脉冲光" in Chinese; they search **光子嫩肤** (`光子嫩肤` → 是什么, 多久做一次, 价格, 功效; `m22` → m22 光子嫩肤, m22 光子嫩肤 价钱). So body copy glosses it once as "M22 IPL（强脉冲光，俗称光子嫩肤）", and search strings use "M22 光子嫩肤（IPL）" or "M22 IPL（光子嫩肤）". See reviewer note 1.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Vascular / Pigment Laser" | 血管激光, 色素激光, 血管与色素激光, 祛斑激光, 红血丝激光, 红血丝 激光 | `血管激光` → 血管激光治疗; `色素激光`, `祛斑激光`, `红血丝 激光` return themselves; the combined form is empty | KEYWORD (component terms): **血管与色素激光** (terms.ts, kept) |
| **seoTitle** "Pigmentation & Vascular Laser Malaysia \| Kaiteki" | 激光祛斑, 激光祛斑 马来西亚, 祛斑激光, 红血丝 激光, 红血丝 马来西亚, 脸上红血丝, 去红血丝 | `激光祛斑` → 价格, 多久恢复, 后注意事项, 副作用, 多久做一次 (strong); `脸上红血丝` → 怎么消除, 原因; `红血丝 激光` returns itself; every "+马来西亚" form is empty | KEYWORD: **马来西亚激光祛斑与红血丝激光 \| Kaiteki** (24 chars). 祛斑 carries "Pigmentation", 红血丝 carries "Vascular" (the lay term on the zh vascular-lesions page). 马来西亚 kept for the EN geo intent. |
| **seoDescription** | (same family) + 光子嫩肤, m22 光子嫩肤 | `光子嫩肤 价钱` → m22 光子嫩肤 价钱 (MY 价钱 form) | KEYWORD: uses 激光祛斑, 红血丝, M22 光子嫩肤（IPL）, 泛红; keeps the EN consultation line (82 chars). |
| sections[0] "What is Vascular / Pigment Laser treatment?" | 血管激光是什么, 光子嫩肤是什么, ipl是什么 | `血管激光是什么` empty; `光子嫩肤是什么` and `ipl是什么` return, but they name one device, not the group | DIRECT: **血管与色素激光是什么？** |
| sections[1] "How does one wavelength target a vessel and another a pigment?" | 血管激光原理, 光子嫩肤原理, 激光祛斑原理, 577 激光, 黄激光, 黄光激光 | `光子嫩肤原理` returns; the vascular, 祛斑 and yellow-laser forms are empty | KEYWORD: **Pro Yellow 与光子嫩肤原理：为什么一种波长针对血管，另一种针对色素？** (the section is about exactly those two devices) |
| sections[2] "Who should not have vascular or pigment laser?" | 血管激光 不适合, 光子嫩肤 禁忌, 光子嫩肤 孕妇, 激光祛斑 孕妇, 光子嫩肤 不适合, 激光祛斑 不适合, 激光祛斑 适合什么人 | all empty | DIRECT: **哪些人不适合做血管或色素激光？** |
| sections[3] "What happens at a session, and how long does the redness last?" | 激光后泛红, 激光后泛红多久, 光子嫩肤后泛红, 激光祛斑后, 激光祛斑多久恢复, 光子嫩肤 恢复期 | 泛红 forms empty; `激光祛斑后` → 注意事项, 后遗症, 反黑期间; `激光祛斑多久恢复` returns | KEYWORD: **疗程怎么进行？泛红多久会退、多久恢复？** (多久恢复 is covered by the body's downtime line, as in the pilot's FAQ 4) |
| sections[4] "What are the risks of vascular and pigment laser?" | 激光祛斑副作用, 光子嫩肤副作用, 血管激光 副作用, 激光祛斑风险, 光子嫩肤 后遗症 | `激光祛斑副作用` and `光子嫩肤副作用` return; 风险 forms empty | KEYWORD: **血管与色素激光有什么风险和副作用？** |
| sections[5] "Why does the cost depend on which device is used?" | 血管激光 价钱, 光子嫩肤 价钱, 光子嫩肤多少钱, 激光祛斑价钱, 激光祛斑多少钱 | `光子嫩肤价钱` → m22光子嫩肤 价钱; `光子嫩肤多少钱` → 多少钱一次; `激光祛斑` → 激光祛斑价格; 激光祛斑价钱 empty | KEYWORD (term): **为什么价钱取决于使用哪一台仪器？** (价钱 per docs/18 §6) |
| FAQ 1 "Difference between Pro Yellow and M22 IPL?" | pro yellow 和, ipl 和 pro yellow, m22 和, 光子嫩肤和, ipl和激光的区别 | `m22 和` → **ipl 和 m22 的 区别**, 皮秒和 m22 区别; `光子嫩肤和` → 光子嫩肤和皮秒区别; Pro Yellow forms empty in zh | KEYWORD (pattern): **Pro Yellow 和 M22 IPL（光子嫩肤）有什么区别？** |
| FAQ 2 "How is this different from DermaV?" | dermav, dermav 激光, dermav 和 | `dermav 激光` returns itself; `dermav` is shampoo noise; `dermav 和` empty | DIRECT: **这和 DermaV 有什么不同？** |
| FAQ 3 "Is this suitable for darker Asian skin tones?" | 激光 深色皮肤, 光子嫩肤 反黑, 激光祛斑后反黑, 光子嫩肤 晒黑 | skin-tone forms empty; `激光祛斑后` → **激光祛斑后反黑期间** | KEYWORD: **亚洲人肤色较深，适合做吗？会反黑吗？** (same pattern as pico FAQ 6; the answer is about the risk of pigment change, so it already answers 反黑) |
| FAQ 4 "How many sessions will I need?" | 光子嫩肤几次, 光子嫩肤要做几次, 光子嫩肤多久做一次, 激光祛斑要做几次, 激光祛斑多久做一次, 红血丝激光几次, 血管激光几次 | 几次 forms all empty; `光子嫩肤多久做一次` and `激光祛斑多久做一次` return (both also top suggestions of their head term) | KEYWORD: **血管与色素激光要做几次？多久做一次？** (the answer covers spacing: 每次相隔几个星期) |

**Chinese tally (13 logged strings):** 10 KEYWORD, 3 DIRECT.

**Not usable:** every "+马来西亚" form; 黄激光 / 577 激光 / 黄光激光 (empty; Pro Yellow demand is English-only and Indonesian-led); `脸上红血丝` also suggests `雷射` (TW), so 雷射 stays out; `玫瑰痤疮激光lihkg` (HK). `去红血丝` is led by eye drops (眼药水), so it's not used.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** | laser vaskular, laser pigmentasi, laser vaskular dan pigmentasi, laser urat merah | `laser vaskular` → harga, untuk apa (plus *adalah, erha*: ID); `laser pigmentasi` → **kos rawatan laser pigmentasi** (MY), untuk apa; combined form and `laser urat merah` empty | KEYWORD: **Laser Vaskular & Pigmentasi** (terms.ts, kept) |
| **seoTitle** | laser pigmentasi malaysia, rawatan laser pigmentasi, kos rawatan laser pigmentasi, laser vaskular malaysia, rawatan laser muka | `rawatan laser pigmentasi` → kos rawatan laser pigmentasi, rawatan laser untuk pigmentasi; `rawatan laser muka` → harga, untuk jeragat; "+malaysia" forms empty | KEYWORD: **Laser Pigmentasi & Vaskular di Malaysia \| Kaiteki** (49 chars). EN word order (pigmentation first) kept, matching the stronger query. |
| **seoDescription** | (same family) + urat merah muka | `urat merah muka` → urat merah di muka, urat muka merah | KEYWORD: rawatan laser, pigmentasi, urat merah halus (the zh/ms vascular-lesions term), konsultasi percuma (149 chars) |
| sections[0] "What is…?" | apa itu laser vaskular, apa itu laser pigmentasi, apa itu ipl | `apa itu laser vaskular` and `apa itu laser pigmentasi` return themselves; `apa itu ipl` is noise (implan, implikasi) | KEYWORD: **Apa itu laser vaskular dan laser pigmentasi?** |
| sections[1] "How does one wavelength…?" | bagaimana laser berfungsi, kenapa laser | empty, or ID physics noise (*bisa*) | DIRECT: **Bagaimana satu panjang gelombang menyasarkan saluran darah dan satu lagi menyasarkan pigmen?** |
| sections[2] "Who should not…?" | laser hamil, laser muka hamil, laser muka mengandung, ibu mengandung buat laser, siapa tidak sesuai buat laser, laser tidak sesuai untuk | `laser hamil` = Hamilton; `laser muka hamil` → *bolehkah laser muka saat hamil* (ID *saat*); the rest empty | DIRECT: **Siapa yang tidak sesuai untuk laser vaskular atau pigmentasi?** |
| sections[3] "What happens at a session, and how long does the redness last?" | muka merah selepas laser, kemerahan selepas laser, berapa lama merah selepas laser, muka merah lepas laser, selepas laser muka | merah forms empty; `selepas laser muka` → kesan selepas, penjagaan selepas, **pantang (larang) selepas laser muka** (MY) | KEYWORD (weak): **Apa berlaku semasa sesi, dan berapa lama kemerahan selepas laser?** *pantang* not added: the EN body has no restrictions list. |
| sections[4] "What are the risks…?" | risiko laser muka, risiko rawatan laser, kesan sampingan laser muka, kesan sampingan laser, kesan sampingan ipl | `kesan sampingan laser` → kesan sampingan pico laser (MY); risiko forms empty | KEYWORD: **Apa risiko dan kesan sampingan laser vaskular dan pigmentasi?** |
| sections[5] "Why does the cost depend on which device?" | kos laser muka, harga laser pigmentasi di malaysia, laser vaskular harga, laser pigmentasi harga | `kos laser muka` → kos rawatan laser muka; `laser vaskular harga` → *harga laser vaskular di erha* (ID); `harga laser pigmentasi` returns but bare *harga* is on the §7.2 list | KEYWORD: **Kenapa kos rawatan laser bergantung pada mesin yang digunakan?** (*kos*, per docs/18 §6) |
| FAQ 1 "Pro Yellow vs M22 IPL?" | pro yellow vs ipl, pro yellow laser vs, beza ipl dan laser, ipl vs laser | `pro yellow vs ipl` → **pro yellow laser vs ipl**, ipl vs pro yellow; Malay *beza* forms empty | KEYWORD (pattern): **Apa beza Pro Yellow dan M22 IPL?** |
| FAQ 2 "Different from DermaV?" | dermav, dermav laser, dermav malaysia | `dermav laser` → English only (cost, rosacea, vs vbeam); `dermav malaysia` empty | DIRECT: **Apa bezanya dengan DermaV?** |
| FAQ 3 "Suitable for darker Asian skin?" | laser kulit gelap, ipl kulit gelap, laser vaskular kulit gelap, laser untuk kulit sawo matang | `laser kulit gelap` returns (also in docs/18 §6 and pico FAQ 6); the rest empty | KEYWORD (partial): **Laser ini sesuai ke untuk kulit gelap atau sawo matang orang Asia?** |
| FAQ 4 "How many sessions?" | laser muka berapa kali, ipl berapa kali, laser pigmentasi berapa kali, rawatan laser muka berapa kali | `laser muka berapa kali` returns; `ipl berapa kali` → sebulan, seminggu (mixed MY/ID) | KEYWORD: **Perlu buat laser berapa kali?** |

**Malay tally (13 logged strings):** 10 KEYWORD, 3 DIRECT.

**Indonesian pollution seen and avoided:** laser vaskular adalah / erha, laser pigmentasi adalah / erha, proyellow laser adalah / zap / erha, ipl muka adalah / zap, ipl untuk apartemen / apa saja / wajah, *bolehkah laser muka saat hamil*, kenapa laser *bisa*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| visible blood vessels | 看得见的血管 | saluran darah yang kelihatan | vascular-lesions |
| thread veins | 红血丝 | urat merah halus | vascular-lesions |
| facial redness | 脸部泛红 | kemerahan muka | vascular-lesions |
| flushing (rosacea) | 潮红 / 玫瑰痤疮 | muka mudah merah / rosacea | vascular-lesions |
| sun spots | 晒斑 | sun spot | pigmentation, pico-laser |
| vascular laser | 血管激光 | laser vaskular | vascular-lesions, birthmark |
| pigment change | 色素变化 | perubahan pigmen(tasi) | vascular-lesions, pico-laser |
| test patch / test area | 皮肤测试 / 测试区域 | ujian tampalan / kawasan ujian | pico-laser |
| downtime | 恢复期 | downtime | docs/18 §6 |
| IPL | 强脉冲光（俗称光子嫩肤） | cahaya berdenyut berintensiti tinggi | new (see note 1) |
| practitioner (captions) | 医护人员 | pengamal | pico-laser |

## For the bilingual doctor-reviewer

1. **光子嫩肤 for IPL (zh).** It's how Malaysian Chinese search IPL (`m22 光子嫩肤 价钱`), but 嫩肤 literally means "rejuvenating the skin". It's used only as the common name of the device treatment ("俗称光子嫩肤"), never as a promised result. If compliance reads it as a claim, fall back to 强脉冲光（IPL） in the heading, the FAQ and the description.
2. **"Pro Yellow (a QuadroStar 577nm yellow-light laser)"** is Pro Yellow（QuadroStar 577nm 黄光激光） / *laser cahaya kuning QuadroStar 577nm*. Confirm the device naming.
3. **"is the mistake that causes the rest"** (risks section) is kept close to the EN: 是导致其他问题的那个错误 / *ialah kesilapan yang menyebabkan masalah lain*. It reads a little blunt in both languages; the doctor may prefer a softer "最常导致问题的原因" / *punca utama masalah*, but that would change the EN sense, so it wasn't done.
4. **"the cost follows the doctor's choice of device rather than preceding it"** is rendered as "先选仪器，再定价钱" logic in both languages. Check it reads naturally.
5. **zh FAQ 3 adds 会反黑吗** and **FAQ 4 adds 多久做一次**; zh section 3 adds 多久恢复. Each is answered by the existing copy (pico-laser precedent).
6. **"Darker Asian skin tones"** in ms is *kulit gelap atau sawo matang orang Asia*. *Sawo matang* is the everyday word (docs/18 §6) and adds no claim.
