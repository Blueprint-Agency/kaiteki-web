# 21. Technology keyword log: Fotona SP Dynamis / TimeWalker (`/technology/fotona-sp-dynamis`)

**Date:** 2026-10-14 · Follows the pilot method in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/fotona-sp-dynamis.json`, `content/i18n/technology/ms/fotona-sp-dynamis.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/fotona-sp-dynamis.json`.
**Inputs:** EN record for `fotona-sp-dynamis`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `fotona-4d` treatment page (`docs/20-treatment-keywords/fotona-4d.md`) and the `face-lifting` and `aging` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`, read as in the pilot.
- **Probes:** shared run with `picosure`, `fotona-pqx`, `dermav` (SP Dynamis share: about 40 zh, 25 ms). Raw dumps: `C:/tmp/dev4-ac-zh.json`, `C:/tmp/dev4-ac-zh2.json`, `C:/tmp/dev4-ac-ms.json`, `C:/tmp/dev4-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. Body copy is direct.
- **What the data says:** the same as the `fotona-4d` treatment log. `sp dynamis` and `timewalker` are searched only in English (price, nx line, 4d pro). Chinese demand sits on `fotona 4d` + 是什么 / 原理 / 副作用 / 价钱 / 效果; Malay has nothing Malay-specific for Fotona (`fotona 4d malaysia`, `fotona 4d downtime`, `fotona 4d side effects`, `fotona 4d vs hifu` are all English).
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `device`, `reviewedBy`, `lastReviewed`; SP Dynamis, TimeWalker®, Fotona4D®, SmoothLiftin™, SMOOTH®, FRAC3®, PIANO®, SupErficial™, VSP, EFC, S-11, L-Runner Pro, MatrixView®, T-Runner, Er:YAG, Nd:YAG (VSP and EFC glossed in zh).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Fotona SP Dynamis / TimeWalker" | sp dynamis, fotona sp dynamis, timewalker, fotona timewalker | `sp dynamis` → laser, max, nx line, pro; `fotona timewalker` → 4d, 4d pro, price | KEYWORD (brand): kept in Latin |
| **seoTitle** "Fotona SP Dynamis 4D Laser Treatment Malaysia \| Kaiteki" | fotona 4d, fotona 激光, sp dynamis, fotona 4d malaysia | `fotona 4d` strong (是什么, 副作用, 价钱); `fotona 激光` → 效果, 价钱; geo forms English only | KEYWORD: **Fotona SP Dynamis 4D \| Kaiteki** (30 chars). All three real queries (fotona, sp dynamis, 4d) fit; 激光疗程 and 马来西亚 do not, and move to the description. |
| **seoDescription** | fotona 4d 效果, fotona 激光 | both return | KEYWORD: Fotona SP Dynamis, Fotona 4D, 马来西亚, Er:YAG, Nd:YAG, 激光平台, 免费咨询 (81 chars) |
| sections[0] "What is Fotona SP Dynamis?" | fotona是什么, fotona 4d 是什么 | `fotona` → fotona laser是什么, **fotona是什么**, fotona 4d是什么 | KEYWORD (weak): **Fotona SP Dynamis 是什么？** |
| sections[1] "How the dual-wavelength platform enables a 4D protocol" | fotona 4d 原理, fotona 双波长, fotona 4d 两种激光 | `fotona 4d 原理` returns; the others empty | KEYWORD: **Fotona 4D 原理：双波长平台如何做到四步方案** (pilot and fotona-4d "原理：…" pattern) |
| sections[2] "2940nm at the surface, 1064nm deeper…" | er:yag, nd:yag, fotona 1064 | Er/Nd forms empty; `fotona 激光` → fotona 1064 激光 (single suggestion) | DIRECT: **2940nm 作用于表层，1064nm 到达深层：两种波长各做什么？** |
| sections[3] "Is Fotona 4D ablative, and what does that mean for your week?" | fotona 4d 剥脱, 非剥脱激光, fotona 4d 恢复期, fotona 4d 恢复 | all empty | DIRECT: **Fotona 4D 是剥脱性激光吗？对你接下来的一周有什么影响？** |
| sections[4] "Who is Fotona 4D for, and why does your dental history matter?" | fotona 4d 适合, fotona 4d 适合什么人, fotona 4d 牙齿 | all empty | DIRECT: **Fotona 4D 适合什么人？为什么要说明你的牙齿病史？** |
| sections[5] "What does the intraoral step feel like, and how long is a full protocol?" | fotona 4d 口腔, fotona 4d 口内, fotona 4d 痛吗, fotona 4d 多久, fotona 4d 过程 | all empty except `fotona 4d 多久` → 多久做一次 (frequency, not duration) | DIRECT: **口腔内的步骤是什么感觉？完整方案要多久？** |
| sections[6] "Can Fotona 4D reactivate cold sores, and what else can go wrong?" | fotona 4d 唇疱疹, 激光 唇疱疹, fotona 4d 副作用 | cold-sore forms empty; `fotona 4d 副作用` strong (2nd `fotona 4d` suggestion) | KEYWORD: **Fotona 4D 会让唇疱疹复发吗？还有哪些副作用和风险？** "What else can go wrong" is the side-effect question. |
| FAQ 1 "Why does Fotona 4D need two different lasers?" | fotona 4d 两种激光, fotona 双波长 | empty | DIRECT: **Fotona 4D 为什么需要两种不同的激光？** |
| FAQ 2 "What does the intraoral step… actually involve?" | fotona 4d 口腔 | empty | DIRECT: **Fotona 4D 的口腔内步骤，实际上是怎样做的？** |
| FAQ 3 "How does Fotona 4D compare with HIFU or RF tightening?" | fotona 4d vs hifu, fotona 4d 和 hifu, hifu 和 fotona, fotona 4d 和 | only English `fotona 4d vs hifu (price)` | DIRECT: **Fotona 4D 和 HIFU 或射频紧致相比，有什么不同？** (射频紧致 per docs/18 §5) |
| FAQ 4 "Can I have Fotona 4D if I have deeper skin tone?" | fotona 4d 深色皮肤 | empty | DIRECT: **肤色较深，可以做 Fotona 4D 吗？** |

**Chinese tally (14 logged strings):** 6 KEYWORD, 8 DIRECT.

**Not usable:** `fotona 4d 鼻鼾枪` (NightLase, snoring: strong in MY but a different application, not in this EN record), `fotona 4d 香港 价钱` (HK), `フォトナ 4d 痛み` (Japanese).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** | sp dynamis, fotona sp dynamis, timewalker, fotona timewalker | English only (laser, price, pro); `timewalker` is noise (toys, WoW) | KEYWORD (brand): kept in Latin |
| **seoTitle** | fotona 4d malaysia, laser fotona, fotona sp dynamis | `fotona 4d malaysia` → **price malaysia**; `laser fotona` → **laser fotona 4d**; `fotona sp dynamis` → laser, price | KEYWORD: **Rawatan Laser Fotona SP Dynamis 4D di Malaysia \| Kaiteki** (56 chars). *Laser Fotona* is the ms treatment name (terms.ts). |
| **seoDescription** | (same family) | as above | KEYWORD: Fotona SP Dynamis, laser, Er:YAG, Nd:YAG, protokol muka, Fotona 4D, konsultasi percuma (153 chars) |
| sections[0] "What is Fotona SP Dynamis?" | apa itu fotona, apa itu laser fotona, apa itu fotona 4d | `apa itu fotona` → **apa itu laser fotona** (among Indonesian *foton* physics noise); `apa itu fotona 4d` empty | KEYWORD (weak): **Apa itu Fotona SP Dynamis?** |
| sections[1] "How the dual-wavelength platform enables a 4D protocol" | (not probed) | no Malay form for platform or wavelength | DIRECT: **Bagaimana platform dua panjang gelombang membolehkan protokol 4D** |
| sections[2] "2940nm at the surface…" | (not probed) | no Malay form to test | DIRECT: **2940nm di permukaan, 1064nm lebih dalam: apa fungsi setiap panjang gelombang?** |
| sections[3] "Is Fotona 4D ablative…" | fotona ablative, fotona 4d non ablative | English only (fotona non ablative laser, 4d non-ablative laser treatment) | DIRECT: **Adakah Fotona 4D ablatif, dan apa maksudnya untuk minggu anda?** |
| sections[4] "Who is Fotona 4D for…" | fotona 4d untuk apa, fotona 4d gigi, fotona 4d kulit gelap | all empty | DIRECT: **Fotona 4D untuk siapa, dan kenapa sejarah pergigian anda penting?** |
| sections[5] "What does the intraoral step feel like…" | fotona 4d dalam mulut, fotona 4d sakit, fotona 4d sakit tak, fotona 4d berapa lama | all empty | DIRECT: **Bagaimana rasanya langkah dari dalam mulut, dan berapa lama protokol penuh?** |
| sections[6] "Can Fotona 4D reactivate cold sores…" | fotona 4d cold sore, fotona 4d kesan sampingan, fotona 4d side effects, herpes bibir laser | Malay forms empty; `fotona 4d side effects` English | DIRECT: **Boleh ke Fotona 4D mencetuskan semula herpes bibir (cold sore), dan apa lagi yang boleh berlaku?** (*herpes bibir (cold sore)* as on the fotona-4d treatment page) |
| FAQ 1 "Why does Fotona 4D need two different lasers?" | (not probed) | no Malay form to test | DIRECT: **Kenapa Fotona 4D memerlukan dua laser yang berbeza?** |
| FAQ 2 "What does the intraoral step… involve?" | fotona 4d dalam mulut | empty | DIRECT: **Apa sebenarnya yang dilakukan dalam langkah dari dalam mulut Fotona 4D?** |
| FAQ 3 "How does Fotona 4D compare with HIFU or RF tightening?" | fotona 4d vs hifu, fotona 4d hifu | English only | DIRECT: **Apa beza Fotona 4D dengan HIFU atau RF untuk menegangkan kulit?** |
| FAQ 4 "Can I have Fotona 4D if I have deeper skin tone?" | fotona 4d kulit gelap, laser kulit gelap | first empty; `laser kulit gelap` returns only itself | DIRECT: **Boleh ke saya buat Fotona 4D jika warna kulit saya lebih gelap?** |

**Malay tally (14 logged strings):** 4 KEYWORD, 10 DIRECT.

**Indonesian pollution seen and avoided:** `apa itu foton dalam fisika / fotosintesis` (physics), `fotona 4d antes e depois` (Portuguese). Nothing Malaysian-Malay to target.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| intraoral | 口腔内 | dari dalam mulut | fotona-4d |
| bulk-heating | 整体加热 | pemanasan pukal | fotona-4d |
| coagulative heating | 凝固性加热 | pemanasan koagulatif | fotona-4d |
| ablation / non-ablative | 剥脱 / 非剥脱性 | ablasi / bukan ablatif | fotona-4d |
| low-fluence pulses | 低能量密度的脉冲 | denyutan fluens rendah | fotona-4d |
| thermal relaxation time | 热弛豫时间 | masa relaksasi terma | new |
| laxity | 松弛 | kekenduran | fotona-4d |
| cold sores | 唇疱疹 | herpes bibir (cold sore) | fotona-4d |
| HIFU / RF | HIFU（聚焦超声波）/ 射频 | HIFU (ultrabunyi terfokus) / RF | fotona-4d, docs/18 §5 |
| scanner | 扫描头 | pengimbas | new |

## For the bilingual doctor-reviewer

1. **zh seoTitle is brand-only** (*Fotona SP Dynamis 4D*). Every term that has Chinese demand is Latin; 激光 and 马来西亚 move to the description to stay within 30 characters.
2. **"Oral appliances"** is 口腔矫正器或牙套 / *alat dalam mulut*. Confirm this covers what the doctor asks about (dentures, retainers, braces).
3. **"Hot yoga"** stays as *hot yoga* in ms (the common MY usage) and 热瑜伽 in zh.
4. **FAQ 3** keeps the EN's neutrality: "one is not automatically better" is 没有哪一种自然比另一种更好 / *satu tidak semestinya lebih baik daripada yang lain*.
5. **sections[6] adds 副作用和风险** in zh for "what else can go wrong"; the body lists exactly those effects.
