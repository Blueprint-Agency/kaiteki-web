# 21. Technology keyword log: PicoSure (`/technology/picosure`)

**Date:** 2026-10-14 · Follows the pilot method in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/picosure.json`, `content/i18n/technology/ms/picosure.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/picosure.json`.
**Inputs:** EN record for `picosure`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `pico-laser` treatment page (`docs/20-treatment-keywords/pico-laser.md`), and the `pigmentation`, `melasma` and `tattoo-removal` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`. Same HAS VOLUME / NO VOLUME reading and KEYWORD / DIRECT decision as the pilot.
- **Probes:** shared run with `fotona-pqx`, `fotona-sp-dynamis` and `dermav`: 162 zh and 116 ms queries (PicoSure share: about 50 zh, 35 ms). Raw dumps: `C:/tmp/dev4-ac-zh.json`, `C:/tmp/dev4-ac-zh2.json`, `C:/tmp/dev4-ac-ms.json`, `C:/tmp/dev4-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, the seven section headings and the four FAQ questions. All body copy is a direct, faithful translation.
- **What the data says:** PicoSure demand in both languages is Latin-led (`picosure malaysia`, `picosure laser malaysia price`, `picosure 755`). Chinese adds 是什么, 原理, 反黑, 结痂, and the generic 皮秒 question forms (皮秒痛吗, 皮秒副作用, 皮秒 禁忌, 皮秒 变黑). Malay adds only `apa itu picosure` and `picosure untuk apa`; every other Malay form is empty or English.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `device`, `reviewedBy`, `lastReviewed`; PicoSure, Cynosure, Platinum Focus™, Nd:YAG, Fitzpatrick.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Picosure" | picosure, picosure 中文 | `picosure` → 755 价钱, pro, 中文, picosure laser (some dcard) | KEYWORD (brand): **Picosure**, kept in Latin, as in the EN record |
| **seoTitle** "PicoSure 755nm Picosecond Laser Malaysia \| Kaiteki" | picosure 755, picosure 皮秒, picosure 激光, picosure 马来西亚, picosure malaysia, 755 皮秒 | `picosure 755` → **picosure 755nm 皮秒激光** (exact suggestion); `picosure 皮秒` → 皮秒激光; `picosure 马来西亚` empty; `picosure malaysia` English only; `755 皮秒` is TW-led (雷射, ptt) | KEYWORD: **PicoSure 755nm 皮秒激光 \| Kaiteki** (29 chars). 马来西亚 does not fit and its zh form is empty, so it moves into the description. |
| **seoDescription** | picosure 色斑, 皮秒 肤色, 皮秒洗纹身 | `皮秒 肤色` → 肤色不均; `皮秒 洗纹身` → 皮秒洗纹身价钱; picosure + 色斑 empty | KEYWORD: PicoSure, 755nm, 皮秒激光, 马来西亚, 色斑, 肤色不均, 免费咨询 (77 chars) |
| sections[0] "What is PicoSure?" | picosure 是什么 | returns **picosure是什么** | KEYWORD: **PicoSure 是什么？** |
| sections[1] "How the 755nm picosecond platform works" | picosure 原理, 皮秒 原理 | both return themselves | KEYWORD: **PicoSure 原理：755nm 皮秒平台如何运作** (pilot "原理：…" pattern) |
| sections[2] "Which pigment and ink does each PicoSure wavelength suit?" | picosure 色斑, picosure 纹身, picosure 洗纹身, picosure 适合 | all empty | DIRECT: **PicoSure 的每种波长，适合哪些色素和纹身墨水？** |
| sections[3] "Why does skin tone matter more with PicoSure's 755nm?" | picosure 肤色, picosure 亚洲人, picosure 反黑, 皮秒 反黑, 皮秒 黑色素 | `picosure 反黑` returns itself; `皮秒 反黑` strong (反黑原因, 怎么办; also dcard/ptt); skin-tone forms empty | KEYWORD (weak): **PicoSure 755nm 为什么更要看肤色？和反黑有什么关系？** The body's "tendency to pigment after inflammation" is 反黑, so the added question is answered in the section. |
| sections[4] "When should PicoSure be postponed, and who should avoid it?" | picosure 禁忌, picosure 不适合, 皮秒 禁忌, 皮秒 不适合, 皮秒 适合 | picosure forms empty; `皮秒 禁忌`, `皮秒 不适合` return; `皮秒 适合` → 皮秒适合什么人 | KEYWORD (pattern): **PicoSure 禁忌：什么时候要延后，哪些人不适合？** |
| sections[5] "What happens at a PicoSure session, and why does pigment darken first?" | picosure 过程, picosure 结痂, 皮秒 变黑, 皮秒 结痂 | `picosure 过程` empty; `picosure 结痂` returns; `皮秒 变黑` returns; `皮秒 结痂` strong | KEYWORD (partial): **做 PicoSure 的过程是怎样的？为什么色斑会先变黑？** |
| sections[6] "Can PicoSure darken or lighten the skin?" | picosure 反黑, 皮秒 变黑, 皮秒 变白, picosure 副作用 | `picosure 反黑`, `皮秒 变黑`, `皮秒 变白` return; `picosure 副作用` empty | KEYWORD: **PicoSure 会让皮肤反黑或变白吗？** 反黑 is exactly the PIH darkening the EN means. |
| FAQ 1 "How is PicoSure different from a 1064nm pico laser?" | picosure 和, picosure vs, 皮秒 755 1064 区别 | `picosure 和` → picoway 和 picosure 的**区别**; `755 皮秒` → 755皮秒1064皮秒 | KEYWORD (pattern): **PicoSure 和 1064nm 皮秒激光有什么区别？** (same 区别 form as pico-laser FAQ 1) |
| FAQ 2 "Is PicoSure safe for Malaysian and other Asian skin tones?" | picosure 亚洲人, picosure 适合, picosure 肤色 | all empty | DIRECT: **PicoSure 对马来西亚人和其他亚洲人的肤色安全吗？** A question, answered with hedges; no safety claim. |
| FAQ 3 "Does PicoSure hurt, and is numbing cream used?" | picosure 痛吗, picosure 麻药, 皮秒 痛吗 | picosure forms empty; `皮秒痛吗` returns | KEYWORD (pattern): **PicoSure 痛吗？会用麻药膏吗？** |
| FAQ 4 "Will the pigment come back after a course of PicoSure?" | picosure 复发, 皮秒 复发 | both empty | DIRECT: **做完一个疗程的 PicoSure，色斑会再回来吗？** |

**Chinese tally (14 logged strings):** 11 KEYWORD, 3 DIRECT.

**Not usable:** `蜂巢皮秒` (the focus lens array's TW/HK clinic name: dcard, 雷射; body copy says 聚焦透镜阵列), `picosure pro` (a newer model; see reviewer note 2), `755皮秒雷射` (TW), `皮秒几天有效果` (results framing).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Picosure" | picosure, picosure malaysia | `picosure` → treatment, laser treatment, tattoo removal (English); `picosure malaysia` → laser malaysia, laser malaysia price | KEYWORD (brand): **Picosure**, kept in Latin |
| **seoTitle** | picosure malaysia, picosure laser, picosure 755, picosure harga | `picosure malaysia` → **picosure laser malaysia**; `picosure 755` → 755nm alexandrite laser; `picosure harga` is Indonesian (airin, zap, erha) | KEYWORD: **Laser Pikosaat PicoSure 755nm di Malaysia \| Kaiteki** (51 chars). Bare *harga picosure* not used (docs/18 §7.2). |
| **seoDescription** | picosure pigmentasi, laser pigmentasi | `picosure pigmentasi` empty; `laser pigmentasi` → kos rawatan laser pigmentasi (MY), plus ID forms | KEYWORD: PicoSure, laser pikosaat, 755nm, Pico laser, pigmentasi, tatu, konsultasi percuma (160 chars) |
| sections[0] "What is PicoSure?" | apa itu picosure | → apa itu picosure laser, picosure itu apa | KEYWORD: **Apa itu PicoSure?** |
| sections[1] "How the 755nm picosecond platform works" | picosure berfungsi, picosure 755 | Malay forms empty; 755 forms English | DIRECT: **Bagaimana platform pikosaat 755nm berfungsi** |
| sections[2] "Which pigment and ink does each PicoSure wavelength suit?" | picosure untuk, picosure jeragat, picosure tatu, picosure pigmentasi | `picosure untuk` → **picosure untuk apa**; jeragat/pigmentasi empty; `picosure tatu` is Spanish/Polish | KEYWORD (partial): **PicoSure untuk apa: pigmen dan dakwat mana yang sesuai dengan setiap panjang gelombang?** |
| sections[3] "Why does skin tone matter more with PicoSure's 755nm?" | picosure kulit gelap, picosure kulit asia, pico laser kulit gelap, laser kulit gelap | picosure and pico forms empty; `laser kulit gelap` returns only itself; `picosure asian skin` English | DIRECT: **Kenapa warna kulit lebih penting dengan 755nm PicoSure?** |
| sections[4] "When should PicoSure be postponed, and who should avoid it?" | picosure hamil | → Hamilton (noise) | DIRECT: **Bila PicoSure perlu ditangguhkan, dan siapa yang patut mengelakkannya?** |
| sections[5] "What happens at a PicoSure session, and why does pigment darken first?" | picosure gelap, selepas pico laser kulit gelap, picosure downtime | Malay forms empty; `picosure downtime` English | DIRECT: **Apa yang berlaku semasa sesi PicoSure, dan kenapa pigmen jadi gelap dahulu?** |
| sections[6] "Can PicoSure darken or lighten the skin?" | picosure kesan sampingan, picosure side effects, kulit jadi gelap selepas laser | Malay forms empty; `picosure side effects` English | DIRECT: **Boleh ke PicoSure menggelapkan atau mencerahkan kulit?** |
| FAQ 1 "How is PicoSure different from a 1064nm pico laser?" | picosure vs | → **picosure vs pico laser**, vs picoway (English) | KEYWORD (pattern): **Apa beza PicoSure dengan pico laser 1064nm?** (pico-laser FAQ 1 form) |
| FAQ 2 "Is PicoSure safe for Malaysian and other Asian skin tones?" | picosure kulit asia, picosure asian skin, laser kulit sawo matang | Malay forms empty; `picosure asian skin` English | DIRECT: **Adakah PicoSure selamat untuk warna kulit orang Malaysia dan Asia yang lain?** |
| FAQ 3 "Does PicoSure hurt, and is numbing cream used?" | picosure sakit, picosure sakit tak, picosure krim kebas | all empty; `pico laser sakit tak` is the MY form on the treatment page | KEYWORD (pattern): **PicoSure sakit tak, dan adakah krim kebas digunakan?** |
| FAQ 4 "Will the pigment come back after a course of PicoSure?" | jeragat kembali, pico laser jeragat kembali | empty | DIRECT: **Adakah pigmen akan kembali selepas satu kursus PicoSure?** |

**Malay tally (14 logged strings):** 7 KEYWORD, 7 DIRECT.

**Indonesian pollution seen and avoided:** `picosure harga` (airin, zap, erha, blink beauty), `laser pigmentasi adalah / erha / manfaat`.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| picosecond laser | 皮秒激光 | laser pikosaat | pico-laser |
| photomechanical shockwave | 光机械作用的冲击波 | gelombang kejutan fotomekanikal | pico-laser |
| alexandrite wavelength | 翠绿宝石（Alexandrite）波长 | panjang gelombang alexandrite | pico-laser |
| benign pigmented lesions | 良性色素斑 | lesi pigmen benigna | pico-laser |
| naevus of Ota / Hori's naevus | 太田痣 / 颧部褐青色痣（Hori 痣） | nevus Ota / nevus Hori | pico-laser |
| melasma | 黄褐斑 | jeragat (melasma) | docs/18 §5 |
| tattoo removal | 洗纹身 | buang tatu | docs/18 §5 |
| post-inflammatory hyperpigmentation | 炎症后色素沉着（反黑） | hiperpigmentasi pasca-radang | pico-laser |
| keloid scarring | 蟹足肿疤痕 | parut keloid | pico-laser |
| oral isotretinoin | 口服异维A酸（isotretinoin） | isotretinoin oral | pico-laser |
| fluence / spot size | 能量密度 / 光斑大小 | fluens / saiz titik | pico-laser, fotona-4d |
| focus lens array | 聚焦透镜阵列 | tatasusunan kanta fokus | new |
| handpiece | 手柄 | alat pegang tangan | pilot |
| snapping / hot-pinprick | 弹击感 / 像热针轻刺 | petikan getah / cucukan jarum panas | pico-laser |

## For the bilingual doctor-reviewer

1. **`name` is "Picosure"** in the EN record, while the brand and every other string write **PicoSure**. Both locales copy the EN `name` unchanged; if the EN is corrected, the locales should follow.
2. **PicoSure vs PicoSure Pro.** A lot of the demand in both languages is for **PicoSure Pro** (`picosure pro malaysia`, `picosure pro 价钱`). This page says PicoSure only. If Kaiteki's unit is a Pro, the EN should say so first.
3. **反黑 in zh headings (sections[3], sections[6]).** It is the everyday Malaysian Chinese word for PIH and the body already defines it (炎症后色素沉着，俗称反黑). Confirm it reads as a risk, not as alarm.
4. **"turbo mode"** stays as *turbo* in both locales (manufacturer's mode name).
5. **zh seoTitle drops 马来西亚** to stay within 30 characters; the description carries it.
6. **FAQ 2 "safe"** is translated as a question (安全吗 / *selamat untuk*). The answer keeps every hedge; neither locale states it is safe.
