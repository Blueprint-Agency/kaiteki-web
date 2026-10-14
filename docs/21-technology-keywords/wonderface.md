# 21. Technology keyword log: Wonderface (`/technology/wonderface`)

**Date:** 2026-10-14 · Format follows the pilot, `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/wonderface.json`, `content/i18n/technology/ms/wonderface.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/wonderface.json`.
**Inputs:** EN record for `wonderface`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `radiofrequency` and `botulinum-toxin` treatment pages and the `face-lifting` concern page.

## Method

As in `onda-coolwaves.md`. Raw dumps (not in the repo): `C:/tmp/b5ex-ac-zh.json`, `C:/tmp/b5ex-ac-zh3.json`, `C:/tmp/b5ex-ac-ms.json`. Only search-relevant strings are logged; all body copy is a direct, faithful translation.

**Pattern for this device:** Wonderface has almost no Malaysian demand in either language. `wonderface` returns only global English (reviews, singapore, brisbane, *vs emface*), and every Chinese or Malay combination came back empty. The only generic Chinese demand that fits is **双极射频原理** and **脸部肌肉松弛**. So almost everything is DIRECT, which is what the client's rule asks for.

## Chinese (`/zh`)

| English string | Probes tried | Autocomplete evidence | Decision |
|---|---|---|---|
| **name** "Wonderface" | wonderface | → reviews, singapore, device, treatment reviews (global English) | KEYWORD (brand): **Wonderface**, Latin |
| **seoTitle** "Wonderface RF & Muscle Stimulation Malaysia \| Kaiteki" | wonderface, 射频 肌肉, 肌肉刺激 脸部 | brand only; Chinese forms empty | KEYWORD (brand): **Wonderface 射频与肌肉刺激 \| Kaiteki** (28). 马来西亚 dropped to fit 30 (it would make 33). 肌肉刺激 matches the treatment name in terms.ts. |
| **seoDescription** | 双极射频, 神经肌肉刺激 | `双极射频` → 原理, 仪; 神经肌肉刺激 empty | KEYWORD (weak): Wonderface, 双极射频, 神经肌肉刺激, 脸部紧致度, 免费咨询 (76) |
| sections[0] "What is Wonderface?" | wonderface 是什么 | empty | DIRECT: **Wonderface 是什么？** |
| sections[1] "How the two modes work" | wonderface 原理, 双极射频原理 | `wonderface 原理` empty; `双极射频` → **双极射频原理** | KEYWORD (weak, pattern): **Wonderface 原理：两种模式如何运作** |
| sections[2] "Muscle tone or skin: which problem does Wonderface address?" | 面部肌肉 紧致, 脸部肌肉 松弛 | `脸部肌肉松弛` → 怎么办 | DIRECT: **肌肉张力还是皮肤：Wonderface 处理的是哪一种问题？** 脸部肌肉松弛 would change "tone" into "slackness", so not used. |
| sections[3] "Who is Wonderface for, and when is it not the answer?" | none relevant | | DIRECT |
| sections[4] "Why do implants, seizures and dental metalwork matter before Wonderface?" | 射频 心脏起搏器 | empty | DIRECT |
| sections[5] "How short is a Wonderface session, and is there any downtime?" | wonderface 恢复期 | empty | DIRECT: **Wonderface 一次要多久？有恢复期吗？** |
| sections[6] "Can Wonderface leave the muscles tired or the skin irritated?" | wonderface 副作用 | empty | DIRECT |
| FAQ 1 "How is Wonderface different from a normal RF skin-tightening facial?" | 射频 脸部, 射频 脸部 紧致 | empty | DIRECT: **Wonderface 和一般的射频紧致脸部疗程有什么分别？** (分别 kept consistent with btl-exilis FAQ 2) |
| FAQ 2 "Is Wonderface an alternative to botulinum toxin?" | wonderface 肉毒, 肉毒杆菌 和 射频 | empty | DIRECT: **Wonderface 可以代替肉毒杆菌素吗？** (肉毒杆菌素 per docs/18 §5.1, never "Botox") |
| FAQ 3 "What does the muscle stimulation feel like?" | 脸部肌肉刺激, 脸部 ems | `脸部ems` and `ems 脸部按摩器` are home gadgets | DIRECT: **肌肉刺激是什么感觉？** EMS avoided: it points at consumer devices. |
| FAQ 4 "Can I have Wonderface if I have fillers, threads or dental implants?" | wonderface 玻尿酸, 射频 玻尿酸, 射频 线雕 | empty | DIRECT: **打过填充剂、做过线雕或有种植牙，可以做 Wonderface 吗？** |

**Chinese tally (14):** 4 KEYWORD, 10 DIRECT.

## Malay (`/ms`)

| English string | Probes tried | Autocomplete evidence | Decision |
|---|---|---|---|
| **name** | wonderface, wonderface malaysia | global English; `wonderface malaysia` empty | KEYWORD (brand): **Wonderface** |
| **seoTitle** | wonderface treatment, wonderface price malaysia | `wonderface treatment` → reviews, price (global) | KEYWORD (brand): **Wonderface RF & Rangsangan Otot di Malaysia \| Kaiteki** (53). *Rangsangan Otot* = terms.ts treatment name. |
| **seoDescription** | bipolar rf, rf bipolar | English only | DIRECT (brand + direct translation), 155 chars |
| sections[0] "What is Wonderface?" | apa itu wonderface | empty | DIRECT: **Apa itu Wonderface?** |
| sections[1]–[6] | rangsangan otot muka, ems muka, otot muka kendur, wonderface downtime, wonderface side effects, wonderface sakit | Malay forms empty; `otot muka kendur` returns itself but changes the meaning; English forms global | DIRECT for all six |
| FAQ 1 | rf muka, rawatan rf muka | `rf muka` → *adalah, perawatan muka rf* (Indonesian) | DIRECT |
| FAQ 2 | toksin botulinum | → *adalah, obat apa, racun* (Indonesian-led) | DIRECT: **Adakah Wonderface alternatif kepada toksin botulinum?** (Toksin Botulinum per terms.ts) |
| FAQ 3 | rangsangan otot muka | empty | DIRECT |
| FAQ 4 | wonderface filler | empty | DIRECT |

**Malay tally (14):** 2 KEYWORD, 12 DIRECT.

**Indonesian pollution avoided:** `rf muka adalah`, `perawatan muka rf`, `toksin botulinum obat apa`. *Kedutan* is not used for the twitching sensation (it reads as "wrinkle" in Malaysian and "twitch" only in Indonesian); the copy says *otot berkedut-kedut*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| bipolar radiofrequency | 双极射频 | radiofrekuensi bipolar | radiofrequency (variantModule) |
| neuromuscular stimulation | 神经肌肉刺激 | rangsangan neuromuskular | radiofrequency (variantModule) |
| botulinum toxin | 肉毒杆菌素 | toksin botulinum | terms.ts |
| RF microneedling | 射频微针 | RF microneedling | terms.ts, docs/18 §5 |
| fillers / threads | 填充剂 / 线雕 | filler / benang | dermal-fillers |
| dental implants | 种植牙 | implan gigi | new |
| downtime | 恢复期 | downtime | docs/18 §6 |

## For the bilingual doctor-reviewer

1. **"Muscle conditioning rather than paralysis"** is 锻炼肌肉，而不是让肌肉麻痹 / *melatih otot dan bukan melumpuhkannya*. Confirm the comparison with botulinum toxin reads as mechanism only, not as a claim against it.
2. **42 to 44 °C at about 2 cm** is kept as the manufacturer's description, with the same attribution.
3. **zh FAQ 4** uses 种植牙 for "dental implants" and 填充剂 (not 玻尿酸) for "fillers", since not every filler is hyaluronic acid.
4. **No zh 马来西亚 in the title**: it would run to 33 characters. The description carries Kaiteki.
