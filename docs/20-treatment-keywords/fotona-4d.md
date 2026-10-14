# 20. Treatment keyword log: Fotona Laser (`/treatments/fotona-4d`)

**Date:** 2026-10-14 · Follows the pilot method in `pico-laser.md`.
**Outputs:** `content/i18n/treatments/zh/fotona-4d.json`, `content/i18n/treatments/ms/fotona-4d.json` (same shape as the EN record). Snapshot: `content/i18n/treatments/_en/fotona-4d.json`.
**Inputs:** EN record for `fotona-4d`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the already-translated `face-lifting` and `aging` concern pages (both link to this treatment; their wording is carried over, see below).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`. Same HAS VOLUME / NO VOLUME reading and KEYWORD / DIRECT decision as `pico-laser.md`.
- **Probes:** shared run with `resurfacing-laser`: 172 zh and 154 ms queries (Fotona share: about 80 zh, 75 ms). Raw dumps: `C:/tmp/fotona-resurf-ac-zh.json`, `C:/tmp/fotona-resurf-ac-zh2.json`, `C:/tmp/fotona-resurf-ac-ms.json`, `C:/tmp/fotona-resurf-ac-ms2.json` (not in the repo).
- **Scope:** only search-relevant strings are logged. This record has no `jumpNav` and no comparison block. All body copy is a direct, faithful translation.
- **What the data says about this page:** Fotona demand in both languages is almost all Latin (`fotona 4d`, `fotona laser`, `fotona 4d price malaysia`). Chinese adds a thin layer of 是什么 / 价钱 / 效果 / 副作用 / 原理; Malay adds nothing Malay-specific for Fotona at all. So most FAQ and heading strings are DIRECT, and the KEYWORD wins come from the name, the title and the generic concern terms (脸部松弛, 皮肤紧致, *muka kendur*, *tegang kulit muka*).
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `src`, `reviewedBy`, `lastReviewed`, top-level `category`, `relatedReasons` keys, `device` ("Fotona"), the mode names SMOOTH, FRAC3, PIANO (Fotona's own mode names), and SmoothLiftin™, SMOOTH®, NightLase, LipLase, SmoothEye, TightSculpting, SP Dynamis / TimeWalker. Item eyebrows keep the wavelength (Nd:YAG / Er:YAG) and translate only the descriptor (口腔内 / *dalam mulut*, etc.).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Fotona Laser" | fotona, fotona 激光, fotona laser, fotona 4d | `fotona` → fotona laser是什么, fotona 4d, fotona是什么, fotona 4d 副作用; `fotona 激光` → 效果, 价钱, 止鼻鼾疗程 | KEYWORD: **Fotona 激光** (terms.ts, kept) |
| **seoTitle** "Fotona 4D Laser Skin Tightening Malaysia \| Kaiteki" | fotona 4d 紧致, fotona 4d 提拉, fotona 紧致, 激光紧致, 激光提拉, 激光紧肤, 紧致激光, 皮肤紧致, fotona 4d 马来西亚, fotona 4d malaysia | every Fotona + 紧致/提拉 form and every 激光紧致 form is empty; `皮肤紧致` → 皮肤紧致 医美 (also TW 雷射/ptt noise); `fotona 4d malaysia` → price malaysia; `fotona 4d 马来西亚` empty | KEYWORD: **马来西亚 Fotona 4D 皮肤紧致 \| Kaiteki** (29 chars). 激光 is dropped to fit 30; Fotona is the laser brand and the description carries 激光. 马来西亚 kept for the EN geo intent. |
| **seoDescription** | (same family) + fotona 4d 效果 | `fotona 4d 效果` returns itself | KEYWORD: uses Fotona 4D, 激光, 面部紧致, 肤质, 免费咨询 (81 chars). The consultation line is in the EN, so it stays. |
| sections[0].heading "What is Fotona Laser?" | fotona是什么, fotona laser是什么, fotona 4d 是什么, fotona激光是什么 | `fotona laser是什么` is the 1st `fotona` suggestion; `fotona是什么`, `fotona 4d是什么` return | KEYWORD: **Fotona 激光是什么？** |
| sections[1].heading "Why does Fotona 4D work from inside the mouth?" | fotona 4d 原理, fotona 原理, fotona 4d 口腔, fotona 口腔, fotona 口内, 口腔内激光 | `fotona 原理` → fotona 4d 原理; `fotona 口腔` returns only itself (plus a Japanese form); the other mouth forms are empty | KEYWORD: **Fotona 4D 原理：为什么要从口腔内进行？** (pilot pattern, "原理：…") |
| variantModule.heading "The four modes, and what each one does" | fotona 4d 步骤, fotona 4d 四个步骤, fotona 4d 四步, fotona 4d 模式, fotona smooth | all Chinese forms empty; `fotona smooth` → English only (smootheye, smooth lifting) | DIRECT: **四种模式，以及各自的作用** |
| routes[0].title "Laxity treated from inside the mouth outwards" | 脸部松弛, 面部松弛, 脸部松弛 激光, 皮肤松弛 激光, 法令纹 激光 | `脸部松弛` → 怎么办, **脸部松弛医美**, 改善, 下垂; laser + 松弛 forms empty | KEYWORD: **从口腔内部向外处理脸部松弛**. Same wording as the face-lifting concern page (从口腔内部向外处理松弛) plus 脸部. |
| routes[1].title "Firmness and surface quality in the same course" | 皮肤紧致, 紧致 肤质 | `皮肤紧致` → 皮肤紧致 医美; `紧致 肤质` empty | KEYWORD: **皮肤紧致与表面肤质，在同一个疗程里处理** |
| ctaMid.heading "Not sure whether a laser or another energy suits your laxity?" | fotona vs hifu, fotona 4d vs hifu, hifu 还是 | only English `fotona 4d vs hifu (price)`; Chinese forms empty | DIRECT: **不确定激光还是其他能量更适合你的松弛问题？** |
| FAQ 1 "How many Fotona 4D sessions will I need?" | fotona 4d 要做几次, fotona 4d 几次, fotona 4d 多久, fotona 4d 多久做一次, fotona 4d 维持多久 | `fotona 4d 多久` → **fotona 4d 多久 做 一次**; the 几次 forms are empty | KEYWORD: **Fotona 4D 要做几次？多久做一次？** (the answer already covers spacing: 相隔几个星期; pilot FAQ 3 precedent) |
| FAQ 2 "Is Fotona 4D suitable for darker or Asian skin?" | fotona 4d 适合, fotona 4d 亚洲人, fotona 4d 深色皮肤, fotona 4d 反黑 | all empty | DIRECT: **Fotona 4D 适合肤色较深或亚洲人的皮肤吗？** |
| FAQ 3 "Does Fotona 4D involve needles or injections?" | fotona 4d 打针, fotona 4d 有针吗 | empty | DIRECT: **Fotona 4D 需要用针或打针吗？** |
| FAQ 4 "How much does Fotona 4D cost?" | fotona 4d 价钱, fotona 4d 价格, fotona 4d 多少钱, fotona 激光 价钱, fotona 4d 一次多少钱 | `fotona 4d 价钱` returns (+ 香港 价钱, 鼻鼾枪 价钱); `fotona 4d 价格` → pro 价格, 台北 价格; `多少钱` forms empty | KEYWORD: **Fotona 4D 价钱是多少？** (价钱 per docs/18 §6; "+马来西亚" not added, the EN has no geo here and the zh geo form is empty) |

**Chinese tally (13 logged strings):** 9 KEYWORD, 4 DIRECT.

**Seen but not used:** `fotona 4d 副作用` is a strong suggestion, but this record has no risks heading to carry it (risks.intro is body copy). `fotona 4d 鼻鼾枪` (NightLase, HK-led: 边间好, 香港) shows snoring demand; the body says 处理与鼻鼾相关的问题 for NightLase, using the same everyday word (鼻鼾, not 打鼾). `4d 激光` is lidar noise (4d激光雷达).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Fotona Laser" | fotona, laser fotona, fotona laser, rawatan fotona, fotona malaysia | `laser fotona` returns (global: valor, prix); `fotona malaysia` → fotona laser malaysia, fotona 4d price malaysia; `rawatan fotona` empty | KEYWORD: **Laser Fotona** (terms.ts, kept) |
| **seoTitle** | fotona 4d malaysia, fotona 4d skin tightening, laser tegang muka, laser tegang kulit (muka), tegang kulit muka, rawatan tegang muka, skin tightening malaysia, laser fotona 4d malaysia | `fotona 4d malaysia` → price malaysia; `fotona 4d skin tightening` returns (English); `tegang kulit muka` → petua tegang kulit muka (MY); `rawatan tegang muka` returns; laser + tegang forms empty | KEYWORD: **Laser Fotona 4D Tegang Kulit Muka di Malaysia \| Kaiteki** (55 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: Fotona 4D, tegang kulit muka, doktor, Malaysia, konsultasi percuma (159 chars) |
| sections[0].heading "What is Fotona Laser?" | apa itu fotona, apa itu fotona 4d, fotona 4d adalah, fotona 4d untuk apa | `apa itu fotona` → **apa itu laser fotona** (2nd suggestion, rest is physics noise); the 4d forms are empty | KEYWORD: **Apa itu laser Fotona?** |
| sections[1].heading "Why does Fotona 4D work from inside the mouth?" | fotona 4d dalam mulut, fotona mulut, fotona 4d mulut, fotona 4d intraoral | only `fotona 4d intraoral` (English, returns itself) | DIRECT: **Kenapa Fotona 4D dilakukan dari dalam mulut?** |
| variantModule.heading | fotona 4d langkah, fotona 4d 4 langkah, fotona 4d mod, fotona 4d steps, fotona 4d smooth | Malay forms empty; `fotona 4d steps` → 4 steps (English) | DIRECT: **Empat mod, dan fungsi setiap satu** |
| routes[0].title | muka kendur, rawatan muka kendur, kulit muka kendur, kekenduran kulit, laser muka kendur | `muka kendur` → **rawatan muka kendur**, tegangkan muka kendur (MY; some ID noise: artinya, penyebabnya); `kekenduran kulit` and laser forms empty | KEYWORD (partial): **Kekenduran muka yang dirawat dari dalam mulut ke luar**. Keeps the face-lifting page wording (*kekenduran … dari dalam mulut ke luar*) and adds *muka*. |
| routes[1].title | kualiti kulit, tekstur kulit, tegang kulit muka | `kualiti kulit` empty; `tekstur kulit` is ID-led (*wajah*, *jeruk*) | DIRECT: **Ketegangan dan kualiti permukaan kulit dalam kursus yang sama** (aging page wording) |
| ctaMid.heading | fotona vs hifu, hifu atau fotona, hifu vs laser, hifu atau laser | only English `fotona 4d vs hifu` and `hifu vs laser co2`; Malay forms empty | DIRECT: **Tak pasti sama ada laser atau tenaga lain sesuai untuk kekenduran anda?** |
| FAQ 1 "How many sessions?" | fotona 4d berapa kali, fotona 4d berapa sesi, fotona 4d berapa lama, fotona 4d tahan berapa lama | all empty | DIRECT: **Perlu berapa sesi Fotona 4D?** |
| FAQ 2 "Darker or Asian skin?" | fotona 4d kulit gelap, fotona 4d asia | empty | DIRECT: **Fotona 4D sesuai ke untuk kulit gelap atau kulit Asia?** |
| FAQ 3 "Needles or injections?" | fotona 4d jarum, fotona 4d suntikan | empty | DIRECT: **Adakah Fotona 4D melibatkan jarum atau suntikan?** |
| FAQ 4 "How much does Fotona 4D cost?" | harga fotona 4d (di malaysia), kos fotona 4d, fotona 4d harga, fotona 4d price malaysia | Malay harga/kos forms all empty; `fotona 4d price malaysia` returns (and is the 2nd `fotona 4d malaysia` suggestion) | KEYWORD (pattern): **Berapa kos Fotona 4D di Malaysia?** ("di Malaysia" per docs/18 §7.2; the demand is the English price-malaysia query) |

**Malay tally (13 logged strings):** 6 KEYWORD, 7 DIRECT.

**Indonesian or foreign pollution seen and avoided:** *fotonasti*, `apa itu foton … fisika`, *muka kendur artinya / apa penyebabnya*, *kulit kendur karena apa*, *perawatan kulit muka kendur*, *tekstur kulit wajah*, plus Portuguese/French/Russian Fotona reviews. `fotona 4d kl` returns Czech/Lithuanian towns.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| laxity treated from inside the mouth outwards | 从口腔内部向外处理（脸部）松弛 | kekenduran (muka) yang dirawat dari dalam mulut ke luar | face-lifting concern page |
| firmness and surface quality … in the same course | 紧致度 / 表面肤质 … 同一个疗程 | ketegangan dan kualiti permukaan kulit … dalam kursus yang sama | aging concern page |
| non-ablative | 非剥脱式 | bukan ablatif | acne-scars concern page |
| cold sores | 唇疱疹 | herpes bibir (cold sore) | pico-laser, acne |
| keloid scarring | 蟹足肿 | parut keloid | pico-laser |
| oral isotretinoin | 口服异维A酸（isotretinoin） | isotretinoin oral | pico-laser |
| retinoids and acids | A酸类和酸类产品 | retinoid serta asid | pico-laser |
| broad-spectrum sunscreen | 广谱防晒 | pelindung matahari spektrum luas | pico-laser |
| focused ultrasound / radiofrequency | 聚焦超声波 / 射频（RF） | ultrabunyi terfokus / radiofrekuensi (RF) | terms.ts (射频（RF）, Radiofrekuensi (RF)) |
| practitioner (caption) | 医护人员 | pengamal | pico-laser |

## For the bilingual doctor-reviewer

1. **"No downtime"** (durationDowntime) is 无需恢复期 / *Tiada downtime*, a faithful rendering of the EN. The page body says downtime is "usually limited", so the reviewer may prefer 恢复期很短 / *Downtime minimum* on the badge. We didn't soften it without a doctor's call.
2. **Isotretinoin is named**, as on the pico-laser page (EN avoidIf names it).
3. **Superficial peel** (a Fotona mode name in the EN) is 表层焕肤（Superficial peel） / *Peel permukaan (Superficial peel)*. SMOOTH, FRAC3 and PIANO stay Latin as Fotona's mode names.
4. **Mode descriptors:** "bulk heating" is 整体加热 / *pemanasan pukal*; "low-fluence pulses" is 低能量密度脉冲 / *denyutan fluens rendah*; "coagulative heating rather than ablation" is 凝固性加热，而不是剥脱 / *pemanasan koagulatif … bukan ablasi*. Please confirm the clinical terms.
5. **Nasolabial region** is 法令纹周围 in zh (the everyday term; docs/18 §5 shows 法令纹 demand) and *kawasan lipatan nasolabial* in ms. Confirm 法令纹 is not read as a promise to treat the fold itself.
6. **NightLase "for snoring-related concerns"** is 处理与鼻鼾相关的问题 / *untuk masalah berkaitan dengkur*. It's a listed application, not promoted; confirm it's fine to name.
7. **Fotona's own claims stay attributed** ("Fotona notes / describes" is Fotona 指出 / 形容, *Fotona menyatakan / menggambarkan*), never restated as Kaiteki's claim.
8. **"Oral appliances"** is 口腔矫正器具 in zh. That narrows it towards braces; if the EN means any appliance (dentures, retainers, guards), the reviewer may prefer 口腔内的器具.
