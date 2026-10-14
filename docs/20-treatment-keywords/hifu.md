# 20. Treatment keyword log: HIFU (`/treatments/hifu`)

**Date:** 2026-10-14 · Follows the pilot (`pico-laser.md`): same method, decision rules and table format.
**Outputs:** `content/i18n/treatments/zh/hifu.json`, `content/i18n/treatments/ms/hifu.json` (same shape as the EN record). EN snapshot: `content/i18n/treatments/_en/hifu.json`.
**Inputs:** EN record for `hifu`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the already-translated `face-lifting` and `aging` concern pages (terminology carried over, see below).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME / NO VOLUME and the skew signals are read exactly as in `pico-laser.md`. For HIFU the `hl=zh-CN` results carry a lot of Japanese and traditional-character dermatology noise (皮膚, 皮膚科); that noise was ignored, not counted as volume.
- **Decision:** KEYWORD = phrased around the real query form, English meaning kept. DIRECT = faithful translation.
- **Probes:** 104 zh and 101 ms, in two batches per language (some also inform the Ultherapy log). Raw dumps: `C:/tmp/hifu-ac-zh.json`, `C:/tmp/hifu-ac-zh2.json`, `C:/tmp/hifu-ac-ms.json`, `C:/tmp/hifu-ac-ms2.json` (not in the repo).
- **Scope:** only search-relevant strings are logged (name, seoTitle, seoDescription, section headings, variantModule heading, route titles, ctaMid heading, FAQ questions). This record has no `jumpNav`. All body copy is a direct, faithful translation.
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `src`, `reviewedBy`, `lastReviewed`, top-level `category`, the `relatedReasons` keys, `device` ("HIFU"), the device `title`s (Ultracel Q, Lifthera) and the manufacturer half of each `eyebrow` (Jeisys Medical, Asterasys). The descriptive half of the eyebrow is translated (更换探头式 / *Berasaskan kartrij*; 线性聚焦 / *Fokus garisan*).
- **Comparison table names** use the agreed `terms.ts` names (zh: HIFU, Ultherapy, 玻尿酸填充, 肉毒杆菌素, 水光针（Skin Booster）; ms: HIFU, Ultherapy, Dermal Filler, Toksin Botulinum, Skin Booster). Not counted.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "HIFU" | hifu, hifu 中文, 超声波提拉, hifu 超声波提拉, 超声刀 | `hifu` → hifu treatment是什么, hifu 中文, hifu是什么, hifu 多久做一次; `超声波提拉` → 超声波提拉plus hifu; `超声刀` strong but mainland slang that also covers Ultherapy (超声刀 ultherapy) | KEYWORD: **HIFU 超声波提拉** (terms.ts, kept). Never 海扶刀. |
| **seoTitle** "HIFU Malaysia \| Non-Surgical Lifting Treatment \| Kaiteki" | hifu 马来西亚, hifu 提拉, hifu 提拉紧致, hifu 非手术, 非手术提拉, hifu 疗程 | `hifu 提拉` and `hifu疗程` return; every 马来西亚 / 非手术 form is empty | KEYWORD: **马来西亚 HIFU 非手术超声波提拉 \| Kaiteki** (28 chars). 马来西亚 and 非手术 kept for the EN meaning (pilot precedent). |
| **seoDescription** | (same family) + 聚焦超声波 | `hifu 疗程` → 时间, 价钱; `聚焦超声波` returns but its tail is 子宫肌瘤 (fibroid), so it stays in body copy | KEYWORD: HIFU 超声波提拉疗程, 提拉, 紧致, 免费咨询, 医生 (84 chars). The EN has "Book a free consultation with a Kaiteki doctor", so 免费咨询 is kept. |
| sections[0].heading "What is HIFU?" | hifu是什么, hifu 是什么, hifu 中文 | `hifu是什么` is the 5th `hifu` suggestion; `hifu treatment是什么` 2nd | KEYWORD: **HIFU 是什么？** |
| sections[1].heading "How does HIFU reach the layer a facelift works on?" | hifu 原理, hifu smas, smas 筋膜层, hifu 拉皮 | `hifu 原理` → hifu treatment 原理, hifu 机 原理; `smas 筋膜层` → smas筋膜层; `hifu 拉皮` returns; `hifu 原理 smas` empty | KEYWORD: **HIFU 原理：如何到达拉皮手术处理的那一层？** (SMAS 筋膜层 is named in the body) |
| variantModule.heading "Ultracel Q or Lifthera: which HIFU device, and why" | hifu 机器, hifu 仪器, hifu 种类, ultracel q, lifthera, ultracel vs | `hifu 机器` → hifu 机器 种类, hifu 最新 机器; `hifu种类`; `ultracel q` English only; `lifthera` → liftera (no zh) | KEYWORD: **Ultracel Q 还是 Lifthera：用哪一台 HIFU 机器，为什么** |
| routes[0].title "Sagging along the jaw and jowls" | hifu 下颚线, hifu 双下巴, hifu 下巴, hifu 下垂, hifu 松弛, hifu 苹果肌 | `hifu 下颚线`, `hifu 下巴` (→ 双下巴) return; `hifu 下垂` / `hifu 松弛` are TW-led (皮膚 下垂, 蘋果肌) | KEYWORD (term): **下颚线松弛与两颊下垂**. 双下巴 not added: the EN body says "loss of definition under the chin", which is not the same thing. |
| routes[1].title "Firmness and fine lines with age" | hifu 细纹, hifu 皱纹, hifu 颈纹, hifu 法令纹, hifu 胶原蛋白 | `hifu 细纹`, `hifu 皱纹` empty; `hifu 颈纹`, `hifu 法令纹`, `hifu 胶原蛋白` return themselves, but none matches the title | DIRECT: **随年龄流失的紧致度与细纹** |
| ctaMid.heading "Not sure whether lifting is what your face needs?" | n/a (conversion copy) | n/a | DIRECT: **不确定你的脸是否需要提拉？** |
| FAQ 1 "Is HIFU surgery?" | hifu 是手术吗, hifu 手术, hifu 拉皮 | `hifu 手术` → hifu 无创 手术; `hifu 是手术吗` empty | KEYWORD (partial): **HIFU 是手术吗？** |
| FAQ 2 "Difference between HIFU and Ultherapy?" | hifu 和 ultherapy, hifu 和, hifu vs ultherapy, hifu 区别 | `hifu 和` → **hifu 和 ultherapy 的 区别** (2nd), hifu 和 超声刀 的 区别 | KEYWORD: **HIFU 和 Ultherapy 的区别是什么？** |
| FAQ 3 "Is there any downtime after HIFU?" | hifu 恢复期, hifu 有恢复期吗, hifu 恢复, hifu 后 | 恢复期 forms empty; `hifu 后` → 后遗症, 后 护理, 后注意事项 (aftercare, not downtime) | DIRECT: **做完 HIFU 有恢复期吗？** (恢复期 is the docs/18 §6 term) |
| FAQ 4 "How many HIFU sessions will I need?" | hifu 要做几次, hifu 几次, hifu 做几次, hifu 多久做一次, hifu 一年 | `hifu 多久做一次` is a top `hifu` suggestion; 几次 forms empty | KEYWORD: **HIFU 要做几次？多久做一次？** (the answer covers spacing: "一年内做少数几次") |
| FAQ 5 "Does HIFU hurt?" | hifu 痛吗, hifu 会痛吗, hifu 疼 | `hifu 痛吗` and `hifu 会痛吗` return | KEYWORD: **做 HIFU 痛吗？** (no 无痛 anywhere) |
| FAQ 6 "Are HIFU results permanent?" | hifu 永久吗, hifu 效果, hifu 维持, hifu 效果维持多久, hifu 能维持多久 | `hifu 效果` → hifu 效果 维持; `hifu 维持` → 维持 多久, 维持 几 耐; 永久 forms empty | KEYWORD: **HIFU 效果是永久的吗？需要维持吗？** (维持 = maintenance, which the answer covers; no duration is promised) |
| FAQ 7 "Is cheap HIFU safe?" | hifu 便宜, 便宜 hifu, 便宜的hifu, hifu 安全吗, hifu 安全, hifu 危险, hifu 美容院, hifu 烧伤 | `hifu 安全` → **hifu 安全 吗**, 安全 性; `hifu 危险`, `hifu 烧伤`, `hifu 灼伤`, `hifu 美容院` return; 便宜 forms are TW noise | KEYWORD: **便宜的 HIFU 安全吗？** |

**Chinese tally (16 logged strings):** 13 KEYWORD, 3 DIRECT.

**Not usable (no MY demand or skewed):** `超声刀` (mainland slang, also covers Ultherapy; body copy doesn't need it), `海扶刀` (fibroid procedure, docs/18 §7), `聚焦超声波` (strong but its tail is 子宫肌瘤), every "+马来西亚 / kl / 新山" form, `hifu 下垂 / 松弛 / 脖子 / 疼 / 便宜` (TW 皮膚 noise).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "HIFU" | hifu, hifu malaysia, rawatan hifu | `hifu malaysia` → price, jb, machine malaysia; `rawatan hifu` → untuk apa, muka, tu apa (MY) | KEYWORD: **HIFU** (terms.ts fallback / docs/18) |
| **seoTitle** | hifu malaysia, rawatan hifu malaysia, rawatan tegang muka, tegang muka tanpa pembedahan, hifu tegang muka, hifu face lift | `hifu malaysia` strong; `rawatan tegang muka` returns; `tegang muka tanpa pembedahan` empty; `hifu face lift` English | KEYWORD: **HIFU Malaysia \| Tegang Muka Tanpa Pembedahan \| Kaiteki** (54 chars). *Rawatan HIFU Malaysia* would push it over 60. |
| **seoDescription** | rawatan hifu, hifu untuk kulit kendur, rawatan muka kendur | `rawatan hifu` strong; `hifu untuk kulit kendur` returns | KEYWORD: rawatan HIFU di Malaysia, kulit kendur, tegang muka, konsultasi percuma, doktor (157 chars) |
| sections[0].heading "What is HIFU?" | apa itu hifu, hifu adalah, hifu tu apa | `apa itu hifu` → apa itu hifu treatment (plus ID *wajah*); `hifu tu apa` → hifu itu apa; `rawatan hifu tu apa` returns (MY); `hifu adalah` is ID | KEYWORD: **Apa itu HIFU?** |
| sections[1].heading "How does HIFU reach the layer a facelift works on?" | hifu berfungsi, cara hifu berfungsi, hifu smas, lapisan smas, hifu face lift | `hifu berfungsi` → berfungsi untuk; `lapisan smas` → lapisan smas kulit, apa itu lapisan smas; `hifu smas` English | KEYWORD (term): **Bagaimana HIFU sampai ke lapisan SMAS, lapisan yang dirawat dalam pembedahan face lift?** (*pembedahan face lift* as on the ms face-lifting page) |
| variantModule.heading | mesin hifu, jenis mesin hifu, jenis hifu, ultracel q+ malaysia, lifthera malaysia | `mesin hifu` → korea, harga, **jenis mesin hifu** (and *terbaik*, not used); `jenis hifu` → ada berapa jenis hifu | KEYWORD: **Ultracel Q atau Lifthera: jenis mesin HIFU yang digunakan, dan kenapa** |
| routes[0].title "Sagging along the jaw and jowls" | hifu rahang, hifu jawline, hifu double chin, hifu pipi, hifu kendur, muka kendur | `hifu kendur` → **hifu untuk kulit kendur**; `muka kendur` → rawatan muka kendur (MY); `hifu rahang` → manfaat (ID-leaning); `hifu pipi` ID-heavy | KEYWORD (term): **Kulit kendur di garis rahang dan pipi jatuh** (*pipi jatuh* = jowl, as on ms face-lifting) |
| routes[1].title "Firmness and fine lines with age" | hifu garis halus, hifu untuk kedutan, hifu kedutan muka, hifu kolagen | all empty except `hifu kolagen` (itself) | DIRECT: **Ketegangan kulit serta garis halus akibat usia** |
| ctaMid.heading | n/a (conversion copy) | n/a | DIRECT: **Tak pasti sama ada muka anda perlukan rawatan tegang muka?** |
| FAQ 1 "Is HIFU surgery?" | hifu pembedahan, hifu tanpa pembedahan, hifu bukan pembedahan | all empty | DIRECT: **Adakah HIFU satu pembedahan?** |
| FAQ 2 "Difference between HIFU and Ultherapy?" | hifu vs ultherapy, beza hifu dan ultherapy, hifu dan ultherapy | `hifu vs ultherapy` strong (English tails); `hifu dan ultherapy` → *beda / perbedaan* (ID); Malay *beza* form empty | KEYWORD (pattern): **Apa beza HIFU dan Ultherapy?** (*beza*, not ID *beda*) |
| FAQ 3 "Is there any downtime after HIFU?" | hifu downtime, hifu ada downtime, selepas hifu | `hifu ada downtime` returns; `hifu downtime` → berapa lama | KEYWORD: **HIFU ada downtime ke?** |
| FAQ 4 "How many sessions?" | hifu berapa kali, hifu berapa sesi, hifu berapa kerap | `hifu berapa kali` → sebulan, **setahun**, shoot; sesi/kerap forms empty | KEYWORD: **Perlu buat HIFU berapa kali?** |
| FAQ 5 "Does HIFU hurt?" | hifu sakit, hifu sakit tak, hifu sakit ke | `hifu sakit` returns (tails are ID: *sakit ga, apakah*); `sakit tak` / `sakit ke` empty | KEYWORD (partial): **HIFU sakit tak?** (head term has volume; *tak* is the Malaysian tail, as in the pilot) |
| FAQ 6 "Are HIFU results permanent?" | hifu kekal, hifu tahan berapa lama, hifu berapa lama | `hifu tahan berapa lama` strong (also docs/19); `hifu kekal` empty | KEYWORD: **HIFU tahan berapa lama, dan adakah hasilnya kekal?** (answer opens *Tidak kekal*; *kekal* is only negated) |
| FAQ 7 "Is cheap HIFU safe?" | hifu murah, hifu murah selamat, hifu selamat, hifu selamat ke, hifu bahaya | `hifu murah` → Jakarta, Surabaya, Bandung (ID); `hifu bahaya` → *bahaya hifu wajah, apakah* (ID); selamat forms empty | DIRECT: **HIFU murah selamat ke?** |

**Malay tally (16 logged strings):** 12 KEYWORD, 4 DIRECT.

**Indonesian pollution seen and avoided:** hifu adalah, hifu untuk apa saja (*perawatan, wajah*), hifu dan ultherapy (*beda, perbedaan*), hifu sakit ga / apakah, hifu murah (Indonesian cities), hifu bahaya (*wajah, apakah*), kulit kendur (*setelah, karena*), hifu hasil (*terlihat, bertahan*), klinik hifu (*terdekat, terbaik, Jakarta*). `hifu hamil` is Hamilton (NZ) plus ID *saat hamil*.

## Terms carried over from the concern pages

| EN | zh | ms | Source |
|---|---|---|---|
| focused ultrasound | 聚焦超声波 | ultrabunyi berfokus | face-lifting, aging |
| SMAS | SMAS 筋膜层 | SMAS / lapisan SMAS | face-lifting |
| facelift (surgical) | 拉皮手术 | pembedahan face lift | face-lifting |
| laxity / sagging | 松弛 / 下垂 | kekenduran / kendur | face-lifting |
| jawline / jowls | 下颚线 / 两颊下垂 | garis rahang / pipi jatuh | face-lifting |
| crepey skin | 像绉纸 | nipis berlipat seperti kertas krep | face-lifting |
| collagen | 胶原蛋白 | kolagen | face-lifting |
| keloid | 蟹足肿 | parut keloid | acne, pico-laser |
| downtime | 恢复期 | downtime | docs/18 §6 |
| practitioner (captions) | 医护人员 | pengamal | pico-laser |
| fillers | 填充剂 | dermal filler | face-lifting |

## For the bilingual doctor-reviewer

1. **Cartridge** is 探头 in zh (as Malaysian Chinese clinics say for HIFU) and *kartrij* in ms. Confirm, or use 卡匣 if the clinic says that.
2. **"Welts"** is 条状红肿（风团） / *bintat (kesan bengkak berjalur)*. Confirm this matches the clinical picture after focused ultrasound.
3. **MDA** is 马来西亚医疗器材管理局（MDA） / *Pihak Berkuasa Peranti Perubatan Malaysia (MDA)*. Please confirm the official names.
4. **"Burns"** in the cheap-HIFU answer is 烫伤 / *lecuran*. The EN says burns; neither locale strengthens it.
5. **zh FAQ 6 adds 需要维持吗** and **ms FAQ 6 adds *tahan berapa lama***. The answer covers maintenance but gives no duration, by design. If the reviewer would rather not raise a duration question that the answer doesn't answer, the ms question can go back to *Adakah hasil HIFU kekal?* (DIRECT).
6. **Nasolabial region** is 法令纹一带 / *kawasan garis senyum (nasolabial)*. 
7. **"No downtime"** in `durationDowntime` is 无需恢复期 / *Tiada downtime*, as in the EN. The body and FAQ keep the EN's softer "usually little to none".
8. **Permanence words appear only negated:** 它不是永久的 / *Ia tidak kekal*; FAQ 6 is a question whose answer opens 不是永久的 / *Tidak kekal*. Expect L-03r warnings, not failures.
