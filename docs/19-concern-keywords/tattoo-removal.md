# 19. Concern keyword log: Tattoo Removal (`/concerns/tattoo-removal`)

**Date:** 2026-10-14 · Follows the pilot method in `acne.md`.
**Outputs:** `content/i18n/concerns/zh/tattoo-removal.json`, `content/i18n/concerns/ms/tattoo-removal.json` (same shape as the EN record; the trailing `null` in `figures` is kept).
**Inputs:** EN record for `tattoo-removal`, `docs/18-trilingual-keyword-map.md` §5 (display names), §6 and §7 (avoid list).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME = the phrase or a natural Malaysian form autocompletes without a Taiwan/HK/Indonesia skew. NO VOLUME = nothing relevant.
- **Decision:** KEYWORD = string phrased around the real query form, English meaning kept. DIRECT = faithful translation.
- **Probes:** 56 zh and 63 ms (shared batches with `face-lifting`). Raw dumps are in the session scratchpad, not in the repo.
- **Scope:** search-relevant strings only. All body copy is a direct, faithful translation. A tattoo is described factually as ink held in the skin; nothing promises complete or permanent removal.
- **`seeDoctor.heading` is present in this record** ("What a doctor checks first") and is translated here.
- **Tattoo demand is question-led in zh** (留疤吗, 多少钱, 痛吗, 原理), and **thin in ms** beyond the head term: almost every *buang tatu + question* form came back empty.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Tattoo Removal" | 洗纹身, 去纹身, 激光去纹身, 激光洗纹身 | `洗纹身` → 会留疤吗, 多少钱, 痛吗, 原理, 洗纹身后 (dcard noise too); `去纹身` → 后遗症, 激光, pico 去纹身 | KEYWORD: **洗纹身** (docs/18 §5 confirmed) |
| **seoTitle** "Laser Tattoo Removal Assessment in Malaysia \| Kaiteki" | 激光洗纹身, 洗纹身 马来西亚, 皮秒 洗纹身 | `激光洗纹身` returns itself; `+马来西亚` empty; `皮秒 洗纹身` → 皮秒洗纹身价钱 | KEYWORD: **马来西亚激光洗纹身评估 \| Kaiteki** (21 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: 洗纹身, 疗程, 免费咨询 (77 chars) |
| sections[0].heading "What is laser tattoo removal?" | 洗纹身 原理, 激光洗纹身原理 | `洗纹身原理` returns (4th suggestion under `洗纹身`) | KEYWORD: **激光洗纹身是什么？原理是什么？** (the section explains the mechanism) |
| drivers.heading "What affects your session count" | 洗纹身要几次, 洗纹身需要几次, 洗纹身 几次 | nothing | DIRECT: **影响洗纹身次数的因素** |
| jumpNav "What affects sessions" | as above | as above | DIRECT: **影响次数的因素** |
| variant.heading "How different inks respond" | 洗纹身 颜色, 彩色纹身 洗, 彩色纹身能洗掉吗, 纹身颜色 | only `纹身颜色` returns, as itself (design intent) | DIRECT: **不同颜色的纹身墨水，反应有什么不同** |
| variant.columns | n/a | n/a | DIRECT: 墨水 / 反应特性 / 实际上意味着什么 |
| jumpNav "How ink responds" | as above | as above | DIRECT: **墨水颜色的反应** |
| locationBlock.heading "Where the tattoo sits" | 洗纹身 部位, 洗纹身 手指, 手指纹身 | `手指纹身` → design and pain only | DIRECT: **纹身的位置** |
| jumpNav "Body location" | as above | as above | DIRECT: **纹身部位** |
| seeDoctor.heading "What a doctor checks first" | n/a | n/a | DIRECT: **医生会先检查什么** |
| jumpNav "Treatment" / "Risks" / "FAQ" | 洗纹身 风险, 洗纹身 副作用, 洗纹身 后遗症 | all empty (`去纹身 后遗症` exists) | DIRECT: 疗程 / 风险 / 常见问题 |
| jumpNav "Cost" | 洗纹身多少钱, 洗纹身价钱, 皮秒 洗纹身 | `洗纹身多少钱`, `洗纹身 价钱`, `皮秒洗纹身价钱` return | KEYWORD: **价钱** |
| ctaMid.heading "Wondering if yours can be treated?" | n/a (conversion copy) | n/a | DIRECT: 想知道你的纹身能不能洗？ |
| ctaHeading "Not sure if your tattoo can be treated?" | n/a (conversion copy) | n/a | DIRECT: 不确定你的纹身能不能洗？ |
| FAQ 1 "Can a tattoo be completely removed?" | 纹身能洗掉吗, 纹身可以洗掉吗, 纹身能完全洗掉吗, 洗纹身 能洗干净吗 | `纹身能洗掉吗`, `纹身可以洗掉吗`, `洗纹身能洗干净吗` return; 完全 form empty | KEYWORD: **纹身能完全洗掉、洗干净吗？** (answer: 有时候可以，但无法保证) |
| FAQ 2 "How many sessions will it take?" | 洗纹身要几次, 洗纹身需要几次 | nothing | DIRECT: **洗纹身需要几次？** |
| FAQ 3 "Why spaced so far apart?" | 洗纹身 间隔, 洗纹身 多久一次, 洗纹身多久洗一次 | nothing | DIRECT: **为什么每次疗程要隔那么久？** |
| FAQ 4 "Does it hurt?" | 洗纹身痛吗 | returns (3rd suggestion under `洗纹身`) | KEYWORD: **洗纹身痛吗？** (answered honestly; no 无痛) |
| FAQ 5 "Will it leave a scar?" | 洗纹身会留疤吗, 洗纹身 留疤 | both return; 1st suggestion under `洗纹身` | KEYWORD: **洗纹身会留疤吗？** |
| FAQ 6 "Is it safe on darker skin?" | 洗纹身 深色皮肤, 洗纹身 反黑, 洗纹身 白 | all empty; docs/18 §6 shows the real worry is 反黑 | KEYWORD (pattern, docs/18): **肤色较深，洗纹身安全吗？会反黑或变白吗？** (answer stays conditional) |
| FAQ 7 "Eyebrow or lip tattoos?" | 洗眉, 洗眉毛, 洗纹眉, 纹眉 洗掉, 洗唇, 洗纹唇 | `洗眉` → **洗眉价钱马来西亚**, 后遗症, 推荐; `洗纹眉`, `纹眉洗掉`, `洗唇` return | KEYWORD: **纹眉、纹唇可以洗吗？（洗眉、洗唇）** |
| FAQ 8 "What do I need to do afterwards?" | 洗纹身后护理, 洗纹身后注意事项, 洗纹身 恢复期 | `洗纹身后护理` returns (also under `洗纹身 后`) | KEYWORD: **洗纹身后要怎么护理？** |

**Chinese tally (26 logged strings):** 11 KEYWORD, 15 DIRECT. CTA headings counted as DIRECT; the "Treatment / Risks / FAQ" row counts as 3, variant.columns as 1.

**Not used:** 去除纹身 (legacy; no AC), `激光去纹身 香港` (HK), `洗眉毛 雷射` (TW 雷射), 洗纹身失败 / dcard forms.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Tattoo Removal" | buang tatu, cara buang tatu, hilangkan tatu, tattoo removal | `buang tatu` → cara buang tatu, harga buang tatu pakai laser, hukum buang tatu, klinik buang tatu, kedai buang tatu | KEYWORD: **Buang Tatu** (docs/18 §5 confirmed) |
| **seoTitle** | laser buang tatu, buang tatu laser, buang tatu malaysia, tattoo removal malaysia | `buang tatu laser` → harga buang tatu pakai laser; `buang tatu malaysia` empty; `tattoo removal malaysia` (English) → price, laser | KEYWORD: **Penilaian Laser Buang Tatu di Malaysia \| Kaiteki** (48 chars) |
| **seoDescription** | (same family) + konsultasi percuma | as above | KEYWORD: buang tatu, bilangan sesi, konsultasi percuma (153 chars) |
| sections[0].heading "What is laser tattoo removal?" | cara buang tatu, buang tatu laser | `cara buang tatu` → cara nak buang tatu | KEYWORD (term): **Apa itu laser buang tatu?** |
| drivers.heading "What affects your session count" | buang tatu berapa kali, buang tatu berapa sesi | nothing | DIRECT: **Apa yang mempengaruhi bilangan sesi anda** |
| jumpNav "What affects sessions" | as above | as above | DIRECT: **Faktor bilangan sesi** |
| variant.heading "How different inks respond" | buang tatu warna, tatu berwarna, warna tatu, tatu hitam | empty, or celebrity noise (Ariel Tatum) | DIRECT: **Bagaimana dakwat berlainan warna bertindak balas** |
| variant.columns | n/a | n/a | DIRECT: Dakwat / Bagaimana ia bertindak balas / Maksudnya secara praktikal |
| jumpNav "How ink responds" | as above | as above | DIRECT: **Tindak balas dakwat** |
| locationBlock.heading "Where the tattoo sits" | tatu tangan, tatu jari, buang tatu tangan | design searches only (tatu naga di tangan) | DIRECT: **Di mana tatu itu berada** |
| jumpNav "Body location" | as above | as above | DIRECT: **Lokasi di badan** |
| seeDoctor.heading | n/a | n/a | DIRECT: **Apa yang doktor periksa dahulu** |
| jumpNav "Treatment" | buang tatu laser | returns (harga … pakai laser) | KEYWORD (term): **Rawatan** |
| jumpNav "Risks" / "FAQ" | n/a | n/a | DIRECT: Risiko / Soalan lazim |
| jumpNav "Cost" | kos buang tatu, harga buang tatu | `kos buang tatu` returns; `harga buang tatu` → harga buang tatu pakai laser | KEYWORD: **Kos** |
| ctaMid.heading | n/a | n/a | DIRECT: Tertanya-tanya sama ada tatu anda boleh dibuang? |
| ctaHeading | n/a | n/a | DIRECT: Tak pasti sama ada tatu anda boleh dirawat? |
| FAQ 1 "Can a tattoo be completely removed?" | buang tatu boleh hilang ke, tatu boleh hilang ke, tatu boleh buang ke, tatu hilang sepenuhnya, tatu boleh dibuang | all empty | DIRECT: **Boleh ke tatu dibuang sampai bersih sepenuhnya?** (*hilang sepenuhnya* avoided; answer: *tidak boleh dijanjikan*) |
| FAQ 2 "How many sessions?" | buang tatu berapa kali, buang tatu berapa sesi | nothing | DIRECT: **Buang tatu perlu berapa sesi?** |
| FAQ 3 "Why spaced so far apart?" | buang tatu jarak, kenapa buang tatu perlu banyak sesi | nothing | DIRECT: **Kenapa jarak antara sesi perlu begitu lama?** |
| FAQ 4 "Does it hurt?" | buang tatu sakit ke, buang tatu sakit | nothing | DIRECT: **Buang tatu sakit ke?** (no *tanpa sakit*) |
| FAQ 5 "Will it leave a scar?" | buang tatu parut, buang tatu meninggalkan parut, parut selepas buang tatu, tatu parut, parut tatu | nothing | DIRECT: **Adakah buang tatu meninggalkan parut?** |
| FAQ 6 "Is it safe on darker skin?" | buang tatu kulit gelap, laser kulit gelap | `laser kulit gelap` returns (also docs/18 §6) | KEYWORD: **Laser buang tatu selamat ke untuk kulit gelap atau sawo matang?** (answer stays conditional) |
| FAQ 7 "Eyebrow or lip tattoos?" | buang tatu kening, tatu kening, sulam kening, sulam bibir, buang sulam kening, buang sulam bibir | `tatu kening` → hukum tatu kening; `sulam kening` → hukum, ombre, halal, tahan berapa lama; `sulam bibir` → tahan berapa lama, halal atau haram; *buang …* forms empty | KEYWORD: **Boleh ke buang tatu kening atau bibir (sulam kening, sulam bibir)?** |
| FAQ 8 "What do I need to do afterwards?" | selepas buang tatu, penjagaan selepas buang tatu, pantang selepas laser, pantang selepas laser muka | tatu forms empty; `pantang selepas laser` → pantang selepas laser muka, pantang larang selepas pico laser (MY) | KEYWORD: **Apa pantang dan penjagaan selepas buang tatu?** |

**Malay tally (26 logged strings):** 9 KEYWORD, 17 DIRECT. CTA headings counted as DIRECT.

**Indonesian / foreign pollution seen and avoided:** `pico laser tatu` (Scandinavian/Spanish *tatuering, tatuaje*), `laser tatu` (same), `warna tatu` (Indonesian celebrity).

**Religious-ruling demand (not used):** `hukum buang tatu`, `buang tatoo cara perubatan islam`, `hukum tatu kening`, `sulam kening halal / haram atau tidak / sah solat`, `sulam bibir dalam islam`. The EN record has no religious content, so nothing was added. If the client wants a locale-only FAQ (docs/18 §6), it should answer factually about the procedure and refer the ruling itself to JAKIM or the state religious authority, never rule.

## For the bilingual doctor-reviewer

1. **"Permanent makeup"** (variant row) is 半永久化妆 (zh) and *solekan separa kekal* (ms): the trade names, used factually. They trigger the L-03r lint for 永久 / *kekal* and are not removal claims.
2. **"Complete clearance cannot be promised"** is 任何纹身都无法保证能完全清除 / *Tiada tatu yang boleh dijanjikan akan bersih sepenuhnya*. The 保证 in zh is negated (L-03r), and FAQ 1 likewise says 无法保证.
3. **Sulam kening / sulam bibir** (eyebrow and lip embroidery, microblading) are named in the ms FAQ 7 question because that's what Malaysians search. Strictly, the EN says "eyebrow or lip tattoos"; the answer covers all cosmetic pigment. Confirm that's acceptable.
4. **Hypopigmentation** is 色素减退 / *hipopigmentasi*; PIH is 炎症后色素沉着（反黑） / *hiperpigmentasi pasca-radang*, matching the acne pilot.
5. **"Test patch"** is 测试 / *ujian tampalan*. Please confirm *ujian tampalan* reads naturally for a laser test spot (it is more often used for allergy patch tests).
6. **"Cover-up"** is 覆盖旧纹身 / *tatu tutup (cover-up)*.
7. **Ink darkening** (white and flesh-tone pigment oxidising) is described in both languages as 变深 / *menjadi gelap*, as in EN.
8. **Appointments** in ms are *lawatan* (visits), not *temujanji* or *temu janji* (docs/18 §7.2).

## Re-sync 2026-10-14 (English rewrite)

The English rewrite left 23 blanks per language. None is a search-relevant field (no seoTitle, seoDescription, name, heading, tab title, compare column, FAQ question or jumpNav label), so no Autocomplete probes were run and both keyword tables are empty.

### Chinese (zh)

| English | probes | evidence | KEYWORD/DIRECT |
|---|---|---|---|
| (none: no search-relevant blanks) | n/a | n/a | n/a |

**Body blanks translated directly:** 23 (leadAnswer, drivers.intro, drivers.items[3].body, variant.intro, locationBlock.cards[0] and [3] bodies, seeDoctor.outro, ctaMid.body, treatmentsNote, firstVisit.intro, firstVisit.steps[3].body, visitImages[0].caption, risks.items[1..3] bodies, costFactors.intro, technologyIntro, faqs[0,1,2,3,5,7].a).

### Malay (ms)

| English | probes | evidence | KEYWORD/DIRECT |
|---|---|---|---|
| (none: no search-relevant blanks) | n/a | n/a | n/a |

**Body blanks translated directly:** 23 (same paths as zh).

### Reviewer notes

1. Most blanks are the old sentence with its closing clause cut in English; the existing translation was trimmed to match, keeping the established terms (测试 / *ujian tampalan*, 美容色料 / *pigmen kosmetik*, 色素减退 / *hipopigmentasi*, 皮秒激光 / *laser pikosaat*, *lawatan* for visits).
2. **costFactors.intro** is new: 价钱要在评估纹身之后才决定，取决于： / *Harga ditetapkan selepas tatu dinilai. Ia bergantung pada:*.
3. L-03r: 保证 in risks.items[3].body and faqs[0].a stays negated (无法保证); the 永久 / *kekal* hit is the pre-existing "permanent makeup" row, unchanged.
