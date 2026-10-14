# 21. Technology keyword log: Schwarzy (Em-Fit) (`/technology/schwarzy`)

**Date:** 2026-10-14 · Format follows the pilot, `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/schwarzy.json`, `content/i18n/technology/ms/schwarzy.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/schwarzy.json`.
**Inputs:** EN record for `schwarzy`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `muscle-stimulation` treatment page and the `body-slimming` concern page.

## Method

As in `onda-coolwaves.md`. Raw dumps (not in the repo): `C:/tmp/b5ex-ac-zh2.json`, `C:/tmp/b5ex-ac-zh3.json`, `C:/tmp/b5ex-ac-ms2.json`. Only search-relevant strings are logged; all body copy is a direct, faithful translation.

**Pattern for this device:** `schwarzy` returns the brand plus film noise (Terminator, *spelling bee*). **Em-Fit** has no aesthetic demand at all: `em-fit` / `emfit` go to gyms and an epilepsy monitor. Chinese has one trade name, **优力肌塑** (`schwarzy 优力肌塑`, `优力肌塑是什么`), but it is dcard- and 价格-led (Taiwan). Generic Chinese demand is `电磁增肌` / `增肌仪器`, which carry a muscle-building claim the EN does not make. Malay demand is English only (`schwarzy treatment`, `schwarzy deka`). Almost every heading is DIRECT.

## Chinese (`/zh`)

| English string | Probes tried | Autocomplete evidence | Decision |
|---|---|---|---|
| **name** "Schwarzy (Em-Fit)" | schwarzy, em-fit, emfit, deka schwarzy, 优力肌塑 | `schwarzy` → **schwarzy 优力肌塑**, before and after; `deka schwarzy` → price; Em-Fit is gym noise; `优力肌塑` → dcard, 价格 (TW) | KEYWORD (brand): **Schwarzy（Em-Fit）**, Latin, with full-width brackets as on the muscle-stimulation page. 优力肌塑 not used (TW trade name). |
| **seoTitle** "Schwarzy Em-Fit Muscle Toning Treatment Malaysia \| Kaiteki" | 肌肉刺激, 电磁 肌肉刺激, 增肌 仪器, 腹肌 仪器 | 肌肉刺激 forms empty; `电磁增肌`, `增肌仪器` return | KEYWORD (brand): **Schwarzy（Em-Fit）肌肉刺激 \| Kaiteki** (30). 肌肉刺激 = terms.ts treatment name. 增肌 not used (a build-muscle claim). 马来西亚 dropped to fit. |
| **seoDescription** | schwarzy, 平面磁刺激 | brand only | KEYWORD (brand): DEKA, Schwarzy（Em-Fit）, 平面磁刺激, 肌肉线条, 免费咨询 (77) |
| sections[0] "What is Schwarzy?" | schwarzy 是什么, em fit 是什么 | empty | DIRECT: **Schwarzy 是什么？** |
| sections[1] "How flat magnetic stimulation works" | schwarzy 原理, 磁刺激 肌肉, 磁力 肌肉 | empty; `磁力 肌肉` → 磁力贴 (tape) | DIRECT: **平面磁刺激如何运作** |
| sections[2] "Muscle, not fat: what does Schwarzy act on?" | 肌肉刺激 减脂, 肌肉刺激 脂肪 | empty | DIRECT |
| sections[3] "Why does a layer of fat change what Schwarzy can do?" | none relevant | | DIRECT |
| sections[4] "Why do implants matter so much with a magnetic device?" | 肌肉刺激 节育器, 心脏起搏器 磁, 节育环 磁 | empty / 磁石 noise | DIRECT |
| sections[5] "How does a Schwarzy session feel, and how sore are the muscles after?" | schwarzy 痛吗, 肌肉刺激 酸痛 | empty | DIRECT: **做 Schwarzy 是什么感觉？做完肌肉会有多酸？** |
| sections[6] "What are the risks of Schwarzy's muscle stimulation?" | schwarzy 副作用, 肌肉刺激 副作用 | empty | DIRECT |
| FAQ 1 "Does Schwarzy reduce fat or help with weight loss?" | schwarzy 减脂, 肌肉刺激 减脂 | empty | DIRECT: **Schwarzy 能减少脂肪或帮助减重吗？** |
| FAQ 2 "Can I have Schwarzy if I have metal implants, a pacemaker or an IUD?" | 肌肉刺激 节育器 | empty | DIRECT |
| FAQ 3 "How is it different from doing the exercise myself?" | 肌肉刺激 和 运动, 躺着练腹肌 | `躺着练腹肌` returns itself, but it promises effortless abs | DIRECT: **它和自己做运动有什么分别？** |
| FAQ 4 "Is the effect permanent, and will I need top-ups?" | 肌肉刺激 维持, schwarzy 几次 | empty | DIRECT: **效果是永久的吗？需要补做吗？** (answer: 没有任何肌肉疗程的效果是永久的) |

**Chinese tally (14):** 3 KEYWORD, 11 DIRECT.

**Not usable:** `电磁增肌`, `增肌仪器`, `增肌减脂` (muscle-building / fat-loss claims; see the terms.ts note), `躺着练腹肌` (implies no-effort results), `优力肌塑` (TW trade name; reviewer note 1).

## Malay (`/ms`)

| English string | Probes tried | Autocomplete evidence | Decision |
|---|---|---|---|
| **name** | schwarzy, schwarzy deka, emfit malaysia | `schwarzy` → treatment, deka, before and after; Em-Fit forms empty | KEYWORD (brand): **Schwarzy (Em-Fit)** |
| **seoTitle** | schwarzy treatment, schwarzy malaysia, muscle stimulation treatment malaysia | `schwarzy treatment` → reviews, side effects; Malaysia forms empty | KEYWORD (brand): **Schwarzy Em-Fit: Rawatan Tona Otot di Malaysia \| Kaiteki** (56). *Tona otot* as on the muscle-stimulation page. |
| **seoDescription** | schwarzy deka | → deka schwarzy price | KEYWORD (brand), 156 chars |
| sections[0]–[6] | rangsangan otot, rangsangan otot elektromagnet, ems badan, otot perut, otot lenguh, schwarzy side effects, schwarzy berapa sesi | `rangsangan otot` → *otot polos, lurik* (school biology, Indonesian-led); `ems badan` Polish noise; `otot lenguh` → general aches; English forms only | DIRECT for all seven |
| FAQ 1–4 | schwarzy results, schwarzy permanent, muscle stimulation iud | empty | DIRECT for all four |

**Malay tally (14):** 3 KEYWORD, 11 DIRECT.

**Indonesian pollution avoided:** `rangsangan otot` biology results (*reaksi rangsangan otot polos*); no *perawatan* forms used. *Kekal* appears only in FAQ 4's question and its negated answer.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| muscle stimulation | 肌肉刺激 | rangsangan otot | terms.ts |
| electromagnetic | 电磁 | elektromagnet | muscle-stimulation |
| flat magnetic stimulation (TOP FMS) | 平面磁刺激 | rangsangan magnet rata | new; TOP FMS kept in Latin |
| muscle tone | 肌肉线条 | tona otot | muscle-stimulation |
| involuntary contractions | 不自主的收缩 | pengecutan luar kawal | new |
| pacemaker | 心脏起搏器 | perentak jantung | muscle-stimulation |
| intrauterine device | 宫内节育器 | alat dalam rahim (IUD) | muscle-stimulation |
| soreness like after exercise | 像运动后的酸痛 | lenguh seperti selepas bersenam | muscle-stimulation |
| pads FLAT / CURVE / ELLIPSE, programmes Aerobic / Shaping / Strength | kept in Latin | kept in Latin | manufacturer names |

## For the bilingual doctor-reviewer

1. **优力肌塑** is the Chinese trade name for Schwarzy seen in autocomplete, but its demand is Taiwanese (dcard, 价格). It is not used. If the Malaysian distributor uses it, it could go in brackets once in the body.
2. **"Muscle toning"** is 肌肉线条 in body copy and 肌肉刺激 (the treatment name) in the title. 增肌 was avoided because it reads as a muscle-building claim.
3. **"Malignancy"** is 恶性肿瘤 / *kanser*. Confirm *kanser* is acceptable in Malay patient copy (the clinical alternative is *keganasan*).
4. **zh `name` uses full-width brackets**, Schwarzy（Em-Fit）, matching the muscle-stimulation page; ms keeps the ASCII form.
