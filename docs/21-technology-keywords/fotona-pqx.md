# 21. Technology keyword log: Fotona PQX (StarWalker) (`/technology/fotona-pqx`)

**Date:** 2026-10-14 · Follows the pilot method in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/fotona-pqx.json`, `content/i18n/technology/ms/fotona-pqx.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/fotona-pqx.json`.
**Inputs:** EN record for `fotona-pqx`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `pico-laser` treatment page and the `picosure` device page (same run), and the `pigmentation`, `melasma` and `tattoo-removal` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`, read as in the pilot.
- **Probes:** shared run with `picosure`, `fotona-sp-dynamis`, `dermav` (PQX share: about 35 zh, 25 ms). Raw dumps: `C:/tmp/dev4-ac-zh.json`, `C:/tmp/dev4-ac-zh2.json`, `C:/tmp/dev4-ac-ms.json`, `C:/tmp/dev4-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. Body copy is direct.
- **What the data says:** the device is searched almost only in Latin (`fotona pqx pico laser`, `fotona starwalker pqx price`). Bare `pqx` is noise in both languages (排球鞋 / *pk xd*). Every `pqx + Chinese` and `pqx + Malay` form is empty, so the KEYWORD wins come from the generic 皮秒 question forms (皮秒 禁忌, 皮秒间隔多久, 晒黑 皮秒) and the comparison pattern.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `device`, `reviewedBy`, `lastReviewed`; StarWalker®, PQX, Fotona, Nd:YAG, KTP, ASP, EFC, OPTOflex®, FracTAT®, FracRevive® (with a Chinese gloss for ASP and EFC at first mention).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Fotona PQX (StarWalker)" | fotona pqx, fotona starwalker, starwalker, pqx | `fotona pqx` → pico laser, starwalker pqx price; `starwalker` → starwalker 皮秒, starwalker 激光; `pqx` noise | KEYWORD (brand): kept in Latin |
| **seoTitle** "Fotona PQX StarWalker Pico Laser Malaysia \| Kaiteki" | fotona pqx, fotona 皮秒, fotona pico, starwalker 皮秒, pqx 皮秒 | `fotona pqx` → **fotona pqx pico laser**; `fotona 皮秒` and `starwalker 皮秒` return themselves; `pqx 皮秒` empty | KEYWORD: **马来西亚 Fotona PQX 皮秒激光 \| Kaiteki** (30 chars). StarWalker is dropped to fit; it stays in the H1 (`name`) and description. |
| **seoDescription** | pqx 洗纹身, 皮秒 洗纹身 | `皮秒 洗纹身` → 皮秒洗纹身价钱 | KEYWORD: Fotona StarWalker PQX, 1064nm/532nm, 皮秒激光, 色斑, 洗纹身, 免费咨询 (80 chars) |
| sections[0] "What is Fotona StarWalker PQX?" | pqx 是什么, starwalker 是什么 | both empty | DIRECT: **Fotona StarWalker PQX 是什么？** |
| sections[1] "How it works: 1064nm, 532nm and structured pulses" | pqx 原理, pqx 1064, 1064 532 | pqx forms empty; `1064 532` English only | DIRECT: **运作原理：1064nm、532nm 和结构化脉冲** |
| sections[2] "1064nm or 532nm: which wavelength for which pigment?" | 皮秒 1064, 1064 532 | `皮秒 1064` → 1064透镜, 嫩肤激光; 1064 vs 532 English | DIRECT: **1064nm 还是 532nm：哪种波长适合哪种色素？** |
| sections[3] "Why is a test patch used before PQX on melasma or deeper skin?" | pqx 黄褐斑, 皮秒 黄褐斑, 皮秒 测试 | `皮秒 黄褐斑` returns; pqx and 测试 forms empty | DIRECT: **为什么在黄褐斑或较深肤色上做 PQX 之前，要先做测试？** (黄褐斑 is the plain translation of "melasma") |
| sections[4] "What would delay or rule out a PQX session?" | 皮秒 禁忌, 皮秒 不适合 | both return | KEYWORD (pattern): **PQX 禁忌：什么情况要延后或不能做？** |
| sections[5] "What happens during a PQX session, and why does tattoo ink frost?" | 洗纹身 结霜, pqx 洗纹身 | empty | DIRECT: **做 PQX 的过程是怎样的？为什么纹身墨水会结霜泛白？** |
| sections[6] "What are the risks of PQX, and why is melasma approached cautiously?" | pqx 副作用, pqx 风险, 皮秒 风险 | pqx forms empty; `皮秒风险` returns | DIRECT: **PQX 有哪些风险？为什么黄褐斑要谨慎处理？** |
| FAQ 1 "Difference between Fotona PQX and PicoSure?" | pqx 和 picosure, pqx vs picosure, picosure 和 | pqx forms empty; `picosure 和` → picoway 和 picosure 的**区别** | KEYWORD (pattern): **Fotona PQX 和 PicoSure 有什么区别？** (matches pico-laser FAQ 1) |
| FAQ 2 "What is FracTAT® and why would my doctor use it for a tattoo?" | fractat | noise (fractionation) | DIRECT: **FracTAT® 是什么？医生为什么会用它来洗纹身？** |
| FAQ 3 "Can StarWalker PQX be used on tanned skin?" | pqx 晒黑, 皮秒 晒黑, 晒黑 可以做皮秒吗 | `皮秒 晒黑` → **晒黑 皮秒** | KEYWORD (weak): **皮肤晒黑了，可以做 StarWalker PQX 吗？** |
| FAQ 4 "How long should I wait between PQX sessions?" | pqx 多久做一次, 皮秒 间隔, 皮秒 多久做一次 | pqx form empty; `皮秒 间隔` → **皮秒间隔多久**, 间隔时间; `皮秒多久做一次` returns | KEYWORD: **PQX 每次要间隔多久？** |

**Chinese tally (14 logged strings):** 7 KEYWORD, 7 DIRECT.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** | fotona pqx, fotona starwalker, pqx, starwalker | `fotona pqx` → pico laser, starwalker pqx price; `pqx`, `starwalker` noise (pk xd, Mont Blanc) | KEYWORD (brand): kept in Latin |
| **seoTitle** | fotona pqx, pqx laser, pqx malaysia, starwalker malaysia | `fotona pqx` → **fotona pqx pico laser**; `pqx laser` → pqx pico laser toning; malaysia forms empty or Mont Blanc | KEYWORD: **Fotona PQX StarWalker Pico Laser di Malaysia \| Kaiteki** (54 chars). *Pico Laser* is the ms display name (docs/18 §5). |
| **seoDescription** | pqx tatu, buang tatu | `buang tatu` strong (docs/18); pqx form empty | KEYWORD: Fotona StarWalker PQX, laser pikosaat, pigmen, tatu, konsultasi percuma (152 chars) |
| sections[0] "What is Fotona StarWalker PQX?" | apa itu fotona pqx, apa itu laser fotona | first empty; `apa itu laser fotona` returns itself | KEYWORD (weak): **Apa itu Fotona StarWalker PQX?** |
| sections[1] "How it works…" | pqx berfungsi | empty | DIRECT: **Cara ia berfungsi: 1064nm, 532nm dan denyutan berstruktur** |
| sections[2] "1064nm or 532nm…" | (as zh, English only) | (not probed) | DIRECT: **1064nm atau 532nm: panjang gelombang mana untuk pigmen yang mana?** |
| sections[3] "Why is a test patch used…" | pqx jeragat, ujian tampalan laser | empty | DIRECT: **Kenapa ujian tampalan dibuat sebelum PQX pada jeragat atau kulit yang lebih gelap?** |
| sections[4] "What would delay or rule out…" | laser selepas berjemur, laser kulit terbakar matahari | empty | DIRECT: **Apa yang boleh menangguhkan atau menghalang sesi PQX?** |
| sections[5] "What happens during a PQX session…" | pqx tatu, pqx downtime | empty | DIRECT: **Apa yang berlaku semasa sesi PQX, dan kenapa dakwat tatu jadi putih (frosting)?** |
| sections[6] "What are the risks of PQX…" | pqx side effects | empty | DIRECT: **Apakah risiko PQX, dan kenapa jeragat dirawat dengan berhati-hati?** |
| FAQ 1 "Difference between Fotona PQX and PicoSure?" | pqx vs picosure, fotona vs picosure | `fotona vs picosure` → **picosure vs fotona**, fotona starwalker vs picosure | KEYWORD (pattern): **Apa beza Fotona PQX dan PicoSure?** (pico-laser FAQ 1 form) |
| FAQ 2 "What is FracTAT®…" | fractat | noise | DIRECT: **Apa itu FracTAT®, dan kenapa doktor menggunakannya untuk tatu?** |
| FAQ 3 "Can StarWalker PQX be used on tanned skin?" | laser selepas berjemur | empty | DIRECT: **Boleh ke StarWalker PQX digunakan pada kulit yang digelapkan matahari?** |
| FAQ 4 "How long should I wait between PQX sessions?" | pqx berapa sesi, pqx berapa kali | empty | DIRECT: **Berapa lama perlu tunggu antara sesi PQX?** |

**Malay tally (14 logged strings):** 5 KEYWORD, 9 DIRECT.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| Q-switched | 调Q | Q-switched | new |
| photoacoustically | 光声作用 | secara fotoakustik | new |
| non-thermal mechanism | 非热作用的机制 | mekanisme bukan terma | new |
| full-beam / fractional handpieces | 全光束 / 点阵手柄 | alat pegang tangan pancaran penuh / fraksional | fotona-4d (点阵 / fraksional) |
| articulated arm | 关节臂 | lengan berengsel | new |
| frosting | 结霜（泛白） | frosting (memutih) | new |
| pressure-relief ducts | 泄压通道 | saluran pelepas tekanan | new |
| photorejuvenation | 光嫩肤 | peremajaan kulit dengan cahaya | new |
| test patch | 测试 / 一小块测试区域 | ujian tampalan | pico-laser |
| melasma | 黄褐斑 | jeragat | docs/18 §5 |

## For the bilingual doctor-reviewer

1. **"Ultra-performance pico laser"** is Fotona's own description, kept as attributed (Fotona 形容 / *Fotona menggambarkannya*). It is not Kaiteki's claim.
2. **"That does not make it universally safe"** is negated in both locales (不代表它对每个人都安全 / *tidak menjadikannya selamat untuk semua orang*).
3. **Frosting** is 结霜（泛白）in zh and *frosting (memutih)* in ms. Confirm these are the words the clinic uses with patients.
4. **zh seoTitle drops StarWalker** to fit 30 characters.
5. **`pqx` alone is noise** in both languages, so headings keep "PQX" only after the brand has been set in the H1.
