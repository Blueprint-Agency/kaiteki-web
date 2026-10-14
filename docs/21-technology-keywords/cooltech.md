# 21. Technology keyword log: Cooltech (`/technology/cooltech`)

**Date:** 2026-10-14 · Format follows the pilot, `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/cooltech.json`, `content/i18n/technology/ms/cooltech.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/cooltech.json`.
**Inputs:** EN record for `cooltech`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `fat-freezing` treatment page (whose avoidIf, afterSession and risks copy this page repeats almost word for word) and the `body-slimming` concern page.

## Method

As in `onda-coolwaves.md`. Raw dumps (not in the repo): `C:/tmp/b5ex-ac-zh2.json`, `C:/tmp/b5ex-ac-zh3.json`, `C:/tmp/b5ex-ac-ms2.json`. Only search-relevant strings are logged; all body copy is a direct, faithful translation, reusing the fat-freezing page's wording wherever the EN repeats it.

**Pattern for this device:** `cooltech` alone is swamped by Malaysian aircond and engineering firms (*cooltech solution sdn bhd, cooltech aircond*), and in Malay by a T-shirt fabric (*apa itu cooltech, bahan rayon cooltech*). The usable brand forms are **cooltech冷冻溶脂** (zh) and **cooltech fat freezing** (ms). The strongest generic hit is **反常性脂肪增生** in Chinese.

## Chinese (`/zh`)

| English string | Probes tried | Autocomplete evidence | Decision |
|---|---|---|---|
| **name** "Cooltech" | cooltech, cooltech 冷冻溶脂 | `cooltech` → aircond firms, **cooltech冷冻溶脂**; `cooltech 冷冻溶脂` returns | KEYWORD (brand): **Cooltech**, Latin |
| **seoTitle** "Cooltech Cryolipolysis Fat-Freezing Malaysia \| Kaiteki" | cooltech 冷冻溶脂 | returns | KEYWORD: **马来西亚 Cooltech 冷冻溶脂 \| Kaiteki** (28). Cryolipolysis and fat freezing are the same term (冷冻溶脂) in zh. |
| **seoDescription** | cooltech 冷冻溶脂, 冷冻溶脂 | return | KEYWORD: Cooltech, 360° 冷却治疗头, 冷冻溶脂（cryolipolysis）, 局部脂肪, 免费咨询 (81) |
| sections[0] "What is Cooltech?" | cooltech 是什么 | empty | DIRECT: **Cooltech 是什么？** |
| sections[1] "How cryolipolysis works" | 冷冻溶脂 原理, cooltech 原理 | **冷冻溶脂原理** returns | KEYWORD: **冷冻溶脂原理：如何运作** |
| sections[2] "Why can Cooltech treat two areas at once?" | 冷冻溶脂 两个部位, 冷冻溶脂 同时, cooltech vs coolsculpting | Chinese empty; comparison forms global English/Spanish | DIRECT |
| sections[3] "Who is Cooltech for, if not for weight loss?" | 冷冻溶脂 减重, 冷冻溶脂 适合 | empty | DIRECT: **Cooltech 不是减重疗程，那适合哪些人？** |
| sections[4] "Why do cold-related conditions and hernias rule out Cooltech?" | 冷冻溶脂 疝气, 冷冻溶脂 禁忌 | empty | DIRECT |
| sections[5] "What happens during a Cooltech cycle, and how sore is the area after?" | 冷冻溶脂 酸痛, 冷冻溶脂 感觉, cooltech 痛吗 | empty | DIRECT |
| sections[6] "What is paradoxical adipose hyperplasia, and what other risks does Cooltech carry?" | 反常性脂肪增生 | → 反常性脂肪增生(pah), **冷冻减脂 反常性脂肪增生** | KEYWORD: **反常性脂肪增生是什么？Cooltech 还有哪些风险？** (term matches the fat-freezing page) |
| FAQ 1 "Will Cooltech help me lose weight?" | 冷冻溶脂 减重 | empty | DIRECT: **Cooltech 能帮我减重吗？** (answer: 不能) |
| FAQ 2 "Can more than one area be treated in the same visit?" | 冷冻溶脂 同时 | empty | DIRECT |
| FAQ 3 "What does the session actually feel like?" | 冷冻溶脂 痛吗, 冷冻溶脂 感觉 | `冷冻溶脂 痛吗` returns, but the EN asks how it feels | DIRECT: **做的时候实际上是什么感觉？** |
| FAQ 4 "How soon might I notice a change, and will it last?" | 冷冻溶脂 多久见效, 冷冻溶脂 维持多久, 冷冻溶脂 会反弹吗 | empty | DIRECT: **多快可能看到变化？效果会持久吗？** |

**Chinese tally (14):** 5 KEYWORD, 9 DIRECT.

**Not usable:** `冷冻溶脂 效果 / 有效吗 / 后遗症` (efficacy framing; no EN heading), `冷冻溶脂价钱` (price at consultation), `冷冻溶脂 双下巴` (ptt-led).

## Malay (`/ms`)

| English string | Probes tried | Autocomplete evidence | Decision |
|---|---|---|---|
| **name** | cooltech, cooltech malaysia, apa itu cooltech | engineering firms, *cooltech define malaysia*, T-shirt fabric | KEYWORD (brand): **Cooltech** |
| **seoTitle** | cooltech fat freezing, cryolipolysis malaysia, kriolipolisis | `cooltech fat freezing` → machine, reviews, side effects; `cryolipolysis malaysia` → price | KEYWORD: **Cooltech Fat Freezing (Kriolipolisis) di Malaysia \| Kaiteki** (59). Same name as the fat-freezing treatment. |
| **seoDescription** | cooltech fat freezing | as above | KEYWORD (brand + fat freezing), 160 chars |
| sections[0] "What is Cooltech?" | apa itu cooltech | → *apa itu cooltech t shirt, bahan rayon cooltech* (fabric) | DIRECT: **Apa itu Cooltech?** |
| sections[1] "How cryolipolysis works" | fat freezing how does it work, kriolipolisis | English; kriolipolisis → Spanish | DIRECT: **Bagaimana kriolipolisis berfungsi** |
| sections[2] | fat freezing two areas, cooltech vs coolsculpting | empty; comparison English only | DIRECT |
| sections[3] | fat freezing turun berat badan | empty | DIRECT |
| sections[4] | fat freezing hernia, fat freezing hamil | empty / Hamilton noise | DIRECT |
| sections[5] | fat freezing sakit, fat freezing berapa lama | empty | DIRECT |
| sections[6] | paradoxical adipose hyperplasia, fat freezing kesan sampingan | English only (PAH); Malay empty | DIRECT: **Apa itu hiperplasia adipos paradoks, dan apakah risiko lain Cooltech?** (term from the fat-freezing page) |
| FAQ 1–4 | fat freezing turun berat badan, fat freezing berapa sesi, fat freezing kekal, fat freezing permanent | Malay forms empty; `fat freezing permanent` English only | DIRECT for all four |

**Malay tally (14):** 3 KEYWORD, 11 DIRECT.

**Indonesian pollution avoided:** `cooltech artinya`; no *perawatan / biaya* forms used.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| cryolipolysis / fat freezing | 冷冻溶脂（cryolipolysis） | kriolipolisis / fat freezing | terms.ts, fat-freezing |
| 360° cooling (plates) | 360° 冷却（板） | penyejukan 360° (plat) | fat-freezing variantModule |
| vacuum suction | 真空吸力 | sedutan vakum | fat-freezing |
| cryoglobulinaemia / cold urticaria / paroxysmal cold haemoglobinuria | 冷球蛋白血症 / 寒冷性荨麻疹 / 阵发性冷性血红蛋白尿症 | krioglobulinemia / urtikaria sejuk / hemoglobinuria sejuk paroksismal | fat-freezing avoidIf |
| paradoxical adipose hyperplasia | 反常性脂肪增生 | hiperplasia adipos paradoks | fat-freezing risks |
| compression garment | 压力衣 | pakaian mampatan | fat-freezing |
| cryoadipolysis (manufacturer term) | cryoadipolysis | cryoadipolysis | kept in Latin as a quoted term |

## For the bilingual doctor-reviewer

1. **"No result can be guaranteed"** keeps the negation: 任何效果都无法保证 / *tiada hasil yang boleh dijamin* (these trigger the L-03r review flag by design).
2. **"Your weight on the scales is unlikely to change meaningfully"** is translated literally in both languages; it is a deliberate expectation-setting line.
3. **cryoadipolysis** is kept in Latin as the manufacturer's own word.
