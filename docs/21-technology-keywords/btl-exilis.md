# 21. Technology keyword log: BTL Exilis (`/technology/btl-exilis`)

**Date:** 2026-10-14 · Format follows the pilot, `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/btl-exilis.json`, `content/i18n/technology/ms/btl-exilis.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/btl-exilis.json`.
**Inputs:** EN record for `btl-exilis`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `radiofrequency` treatment page and the `face-lifting` and `body-slimming` concern pages.

## Method

As in `onda-coolwaves.md`: Google Autocomplete (`client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`) as the volume proxy; **KEYWORD** = phrased around a real Malaysian query form with the EN meaning kept, **DIRECT** = faithful translation. Raw dumps (not in the repo): `C:/tmp/b5ex-ac-zh.json`, `C:/tmp/b5ex-ac-zh3.json`, `C:/tmp/b5ex-ac-ms.json`. Only search-relevant strings are logged; all body copy is a direct, faithful translation.

**Pattern for this device:** demand in both languages is for the newer **Exilis Ultra 360** and is mostly English or Cantonese/HK-led (`好唔好`, `几耐做一次`, `逆龄再生枪`, `减肥效果`). Chinese generic demand sits on **单极射频** (`单极射频原理`, `单极射频 双极射频分别`) and **射频副作用**. Malay demand is entirely English (`exilis side effects`, `exilis how many sessions`, `exilis body`), so Malay headings are DIRECT apart from `apa itu exilis`.

## Chinese (`/zh`)

| English string | Probes tried | Autocomplete evidence | Decision |
|---|---|---|---|
| **name** "BTL Exilis" | exilis, btl exilis, exilis 马来西亚 | `exilis` → exilis ultra 360, 效果, 好唔好, 减肥效果; `btl exilis` → 价钱, 原理, 台湾 | KEYWORD (brand): **BTL Exilis**, Latin |
| **seoTitle** "BTL Exilis RF Skin Tightening Treatment Malaysia \| Kaiteki" | exilis 射频, exilis 紧致, rf 射频, 射频 身体 | `exilis 射频/紧致` empty; `rf 射频` strong; docs/18: pair 射频 with 紧致 | KEYWORD: **马来西亚 Exilis 射频紧致疗程 \| Kaiteki** (28). *BTL* dropped to fit 30; H1 keeps it. |
| **seoDescription** | 单极射频, exilis 身体, 射频 身体 | `单极射频` → 原理, 机; `exilis 身体` → exilis ultra 360tm 身体 | KEYWORD: BTL Exilis, 单极射频（RF）, 内置冷却, 脸部紧致度, 身体轮廓, 免费咨询 (76) |
| sections[0] "What is BTL Exilis?" | exilis 是什么 | empty | DIRECT: **BTL Exilis 是什么？** |
| sections[1] "How monopolar RF with cooling works" | exilis 原理, 单极射频, 单极射频原理 | `单极射频` → **单极射频原理** (1st); `exilis 原理` → exilis ultra 360 原理 | KEYWORD: **单极射频原理：配合冷却如何运作** |
| sections[2] "Why can Exilis reach the fat layer as well as the skin?" | exilis 脂肪, 射频 脂肪 | empty | DIRECT |
| sections[3] "What can Exilis firm, and when is surgery the better conversation?" | exilis 紧致, 射频 手术 | `射频 手术` is ENT/ablation (鼻塞, 过敏性鼻炎) | DIRECT. 射频手术 avoided: it means a different procedure. |
| sections[4] "Does Exilis have BMI or skin type limits, and who should avoid it?" | 射频 禁忌, 射频 怀孕, 射频 心脏起搏器 | `射频 禁忌` → 射频治疗禁忌症; others empty | KEYWORD (weak): **Exilis 禁忌：有 BMI 或肤质限制吗？哪些人应该避免？** |
| sections[5] "How long does an Exilis session take, and can you go back to work afterwards?" | exilis 恢复期, exilis 多久 | empty; `btl exilis ultra 360 几耐做一次` is HK Cantonese | DIRECT |
| sections[6] "What side effects can Exilis cause in the skin and fat?" | exilis 副作用, 射频 副作用 | `exilis 副作用` → exilis ultra 360 副作用; `射频副作用` strong | KEYWORD: **Exilis 副作用：皮肤和脂肪可能出现什么反应？** |
| FAQ 1 "Can BTL Exilis be used on the body as well as the face?" | exilis 身体, rf 射频 身体 | both return | KEYWORD: **BTL Exilis 除了脸部，也可以用在身体吗？** |
| FAQ 2 "How is Exilis different from a bipolar or multipolar RF facial device?" | 单极射频 双极射频, 双极射频 | → **单极射频 双极射频分别** | KEYWORD: **单极射频 Exilis 和双极、多极射频脸部仪器有什么分别？** (分别, the AC's word) |
| FAQ 3 "Is BTL Exilis painful?" | exilis 痛吗, 射频 痛吗 | empty | DIRECT: **BTL Exilis 会痛吗？** |
| FAQ 4 "How many Exilis sessions are typical, and is the effect permanent?" | exilis 要做几次, 射频 几次, 射频 维持多久, 射频 永久 | empty | DIRECT: **Exilis 一般要做几次？效果是永久的吗？** (answer says no) |

**Chinese tally (14):** 8 KEYWORD, 6 DIRECT.

**Not usable:** `exilis ultra 360 减肥效果` and `深层定位消脂` (weight-loss / fat-dissolving claims); `逆龄再生枪` (HK marketing name; not ours); `exilis 价钱` (price stays at consultation).

## Malay (`/ms`)

| English string | Probes tried | Autocomplete evidence | Decision |
|---|---|---|---|
| **name** | exilis, btl exilis, exilis malaysia | `btl exilis` → ultra 360, treatment, before and after; `exilis malaysia` empty | KEYWORD (brand): **BTL Exilis** |
| **seoTitle** | exilis treatment, rawatan exilis, rf muka, rawatan rf muka | `exilis treatment` → for face, for belly fat; `exilis` → **exilis skin tightening**; Malay forms empty | KEYWORD: **Rawatan BTL Exilis RF Tegang Kulit di Malaysia \| Kaiteki** (56). *Rawatan X* = "X treatment"; *tegang kulit* as on the radiofrequency page. |
| **seoDescription** | monopolar rf, exilis face, exilis body | English only | KEYWORD (brand + RF): 157 chars |
| sections[0] "What is BTL Exilis?" | apa itu exilis | → **apa itu exilis**, apa itu exilis treatment | KEYWORD: **Apa itu BTL Exilis?** |
| sections[1] | monopolar rf, rf monopolar vs bipolar | English | DIRECT: **Bagaimana RF monopolar dengan penyejukan berfungsi** |
| sections[2] | rf perut | `rf perut` → *adalah, apakah aman, terdekat* (Indonesian) | DIRECT |
| sections[3] | rf pembedahan, rawatan kulit perut kendur | empty | DIRECT |
| sections[4] | exilis bmi, exilis pregnancy, rf hamil | empty or Hamilton noise | DIRECT |
| sections[5] | exilis downtime | English only | DIRECT |
| sections[6] | exilis kesan sampingan, exilis side effects | Malay empty; English strong | DIRECT: **Apakah kesan sampingan Exilis pada kulit dan lemak?** |
| FAQ 1 | exilis body, exilis face | English only | DIRECT |
| FAQ 2 | rf bipolar, bipolar rf | English; `rf bipolar adalah` Indonesian | DIRECT |
| FAQ 3 | exilis sakit, exilis painful | Malay empty | DIRECT: **BTL Exilis sakit tak?** |
| FAQ 4 | exilis berapa sesi, rf kekal, exilis how many sessions | Malay empty; English strong | DIRECT |

**Malay tally (14):** 4 KEYWORD, 10 DIRECT.

**Indonesian pollution avoided:** `exilis treatment adalah`, `rf perut apakah aman / terdekat`, `rf muka adalah`, `perawatan muka rf`.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| radiofrequency (RF) | 射频（RF） | radiofrekuensi (RF) | terms.ts |
| monopolar / bipolar / multipolar | 单极 / 双极 / 多极 | monopolar / bipolar / multipolar | radiofrequency |
| embedded cooling | 内置冷却 | penyejukan terbina dalam | radiofrequency |
| applicator | 治疗头 | aplikator | fat-freezing, radiofrequency |
| volumetric heating | 容积式加热 | pemanasan volumetrik | new |
| laxity | 松弛 | kekenduran | radiofrequency |
| keloid scarring | 蟹足肿 | parut keloid | radiofrequency |
| fillers or threads | 填充剂或线雕 | filler atau benang | dermal-fillers |
| cellulite-related dimpling | 与橘皮组织有关的凹凸外观 | rupa kulit berlekuk yang dikaitkan dengan selulit | onda-coolwaves |

## For the bilingual doctor-reviewer

1. **Emsculpt and Emsella** are named because the EN names them (BTL's own products, as manufacturer context). Confirm the client is content to keep them in all three languages.
2. **"Hot stone massage"** is 热石按摩 / *urutan batu panas*, attributed to BTL's patient material as in the EN.
3. **"Post-pregnancy abdominal skin laxity"** is 产后腹部皮肤松弛 / *kulit perut yang kendur selepas bersalin*.
4. **FAQ 4 asks "永久 / kekal"** only to answer no; the answer keeps "no non-invasive RF treatment stops ageing".
5. **Exilis Ultra 360** carries most of the demand. The EN mentions Exilis Ultra only as a generation; nothing here says Kaiteki's unit is an Ultra 360.
