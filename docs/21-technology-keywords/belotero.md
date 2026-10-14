# 21. Technology keyword log: Belotero (`/technology/belotero`)

**Date:** 2026-10-14 · Follows the pilot method in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/belotero.json`, `content/i18n/technology/ms/belotero.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/belotero.json`.
**Inputs:** EN record for `belotero`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `dermal-fillers` treatment page and its log, the `fine-lines-wrinkles`, `face-contouring`, `dark-eye-circles` and `aging` concern pages, and `juvederm.md` (sister page, same terms).

## Method

- Same as the pilot (autocomplete, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`; KEYWORD vs DIRECT).
- **Probes:** shared dump with the other three filler brand pages: 230 zh and 178 ms. Raw dumps: `C:/tmp/filler4-ac-zh.json`, `C:/tmp/filler4-ac-ms.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. Everything else is a direct, faithful translation.
- **Filler term, hyaluronidase, body terms:** as in `juvederm.md`.
- **Biomimetic (zh):** 仿生. It is the literal translation and also the Chinese query form (`belotero 仿生 玻尿酸`, `仿生玻尿酸`). zh glosses *Belotero Biomimetic Matrix Technology* once as 仿生基质技术; ms keeps the English name and says *biomimetik* in running text.
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; product and technology names (Belotero Balance / Intense / Volume / Revive, Merz Aesthetics, CPM®, Belotero Biomimetic Matrix Technology).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Belotero" | belotero, belotero 中文, 宝缇金, 贝洛特罗 | `belotero` → revive, **价钱**, **效果**, revive 副作用, 好唔好 (HK), 透明质酸; Chinese brand-name forms empty | KEYWORD (brand): **Belotero**, kept in Latin |
| **seoTitle** "Belotero Dermal Filler Treatment in Malaysia \| Kaiteki" | belotero 玻尿酸, belotero 马来西亚 | `belotero 玻尿酸` → 价格, **仿生 玻尿酸**; 马来西亚 form empty | KEYWORD: **马来西亚 Belotero 玻尿酸填充 \| Kaiteki** (29 chars) |
| **seoDescription** | belotero 细纹, 玻尿酸 细纹 | brand form empty; `玻尿酸 细纹` returns | KEYWORD: Belotero, Merz Aesthetics, 玻尿酸填充剂, 细纹, 补充容量, 轮廓, 免费咨询 (78 chars) |
| sections[0] "What is Belotero?" | belotero 是什么 | returns | KEYWORD: **Belotero 是什么？** |
| sections[1] "How the biomimetic matrix cross-linking works" | belotero 仿生, 仿生 玻尿酸, belotero 原理, 交联 玻尿酸 | `belotero 仿生` → **belotero 仿生 玻尿酸**; `仿生玻尿酸` strong (some TW/HK celebrity noise); `交联玻尿酸` returns; 原理 empty | KEYWORD: **Belotero 仿生玻尿酸：仿生基质交联如何运作** |
| sections[2] "Is Belotero permanent, and can it be dissolved?" | belotero 溶解, belotero 维持, 玻尿酸 溶解 | brand forms empty; `玻尿酸 溶解` strong | KEYWORD (weak, pattern): **Belotero 是永久的吗？可以溶解吗？** (the body answers "不是永久的") |
| sections[3] "Can Belotero be used for fine lines and thin skin?" | belotero 细纹, belotero 皮肤薄, 玻尿酸 细纹, 皮肤薄 玻尿酸 | brand forms empty; `玻尿酸 细纹` returns; 皮肤薄 forms empty | KEYWORD (weak): **Belotero 可以用于细纹和皮肤薄的部位吗？** |
| sections[4] "What should you tell the doctor before Belotero?" | 打玻尿酸 前, 玻尿酸 注意事项 | `打玻尿酸前` → **打玻尿酸前注意事项**; `玻尿酸注意事项` returns | KEYWORD: **打 Belotero 前的注意事项：要告诉医生什么？** |
| sections[5] "What happens at a Belotero appointment, and why can small raised areas appear?" | belotero 肿, 玻尿酸 颗粒 | brand form empty; `玻尿酸 颗粒 感` is about texture after filler, not the same thing | DIRECT: **打 Belotero 的过程是怎样的？为什么会出现小小的凸起？** |
| sections[6] "What are Belotero's side effects, including a bluish tinge?" | belotero 副作用, 玻尿酸 发蓝, 玻尿酸 发青, 丁达尔效应 玻尿酸 | `belotero 副作用` → revive 副作用; 发蓝 / 发青 empty; `丁达尔效应 玻尿酸` returns but the EN doesn't name Tyndall here | KEYWORD: **Belotero 有哪些副作用，包括泛蓝的现象？** |
| FAQ 1 "What makes Belotero different from other HA fillers?" | belotero vs, 玻尿酸 区别, 玻尿酸 品牌 差异 | `belotero vs` English; `玻尿酸 区别` and `玻尿酸 品牌 差异` return | KEYWORD (pattern): **Belotero 和其他玻尿酸填充剂有什么不同？** |
| FAQ 2 "Is Belotero suitable for very fine lines and thin skin?" | as sections[3] | as sections[3] | KEYWORD (weak): **Belotero 适合很细的纹路和皮肤薄的部位吗？** |
| FAQ 3 "Which Belotero product would I need?" | belotero 系列, belotero 哪种, 玻尿酸 选择 | brand forms empty | DIRECT: **我需要哪一款 Belotero？** |
| FAQ 4 "How soon will I look normal after Belotero, and how long does it last?" | 玻尿酸 恢复期, 玻尿酸 维持多久, belotero 肿多久 | `玻尿酸恢复期` and `玻尿酸 维持多久` return; brand form empty | KEYWORD (pattern): **打完 Belotero 多久会恢复正常的样子？可以维持多久？** |

**Chinese tally (14 logged strings):** 12 KEYWORD, 2 DIRECT.

**Not usable:** `belotero 好 唔 好` (Cantonese, HK), `belotero revive 水光针 / 保湿针` (a skin-booster framing for one product; the EN describes Revive only as positioned for skin quality), `仿生玻尿酸 宋慧乔` (celebrity noise), `belotero 价钱`.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Belotero" | belotero, belotero malaysia | `belotero malaysia` → revive price malaysia, revive malaysia | KEYWORD (brand): **Belotero** |
| **seoTitle** | belotero malaysia, belotero filler, rawatan belotero | `belotero malaysia` returns; `belotero filler` → price (English); *rawatan belotero* empty | KEYWORD: **Rawatan Dermal Filler Belotero di Malaysia \| Kaiteki** (52 chars) |
| **seoDescription** | belotero fine lines, filler garis halus | `belotero fine lines` returns (English); Malay form empty | KEYWORD: Belotero, filler asid hialuronik, Merz Aesthetics, Kaiteki, garis halus, konsultasi percuma (157 chars) |
| sections[0] "What is Belotero?" | apa itu belotero | → apa itu belotero revive, apa itu belotero | KEYWORD: **Apa itu Belotero?** |
| sections[1] "How the biomimetic matrix cross-linking works" | belotero biomimetic, belotero cpm | English only | DIRECT: **Bagaimana rangkaian silang matriks biomimetik berfungsi** |
| sections[2] "Is Belotero permanent, and can it be dissolved?" | filler kekal, filler kekal ke, belotero dissolve, larutkan filler | Malay forms empty; `belotero dissolve` English | DIRECT: **Adakah Belotero kekal, dan boleh ke ia dilarutkan?** (body: "tidak kekal") |
| sections[3] "Can Belotero be used for fine lines and thin skin?" | filler garis halus, filler kulit nipis, belotero untuk | Malay forms empty; `belotero untuk` → untuk apa (revive) | DIRECT: **Boleh ke Belotero digunakan untuk garis halus dan kulit nipis?** |
| sections[4] "What should you tell the doctor before Belotero?" | sebelum filler, filler sebelum laser | empty | DIRECT: **Apa yang perlu diberitahu kepada doktor sebelum Belotero?** |
| sections[5] "What happens at a Belotero appointment, and why can small raised areas appear?" | belotero bengkak, filler bengkak | brand form empty; generic is about duration, not raised areas | DIRECT: **Apa yang berlaku semasa sesi Belotero, dan kenapa bonjolan kecil boleh timbul?** |
| sections[6] "What are Belotero's side effects, including a bluish tinge?" | belotero kesan sampingan, kesan sampingan filler, filler biru, filler kebiruan | brand form empty; `kesan sampingan filler` returns; `filler biru` → dagu biru (MY/ID mixed) | KEYWORD: **Apakah kesan sampingan Belotero, termasuk warna kebiruan?** |
| FAQ 1 "What makes Belotero different from other HA fillers?" | beza belotero, belotero vs | Malay form empty; `belotero vs` English | DIRECT: **Apa yang membezakan Belotero daripada filler asid hialuronik lain?** |
| FAQ 2 "Is Belotero suitable for very fine lines and thin skin?" | as sections[3] | empty | DIRECT: **Adakah Belotero sesuai untuk garis yang sangat halus dan kulit nipis?** |
| FAQ 3 "Which Belotero product would I need?" | belotero untuk | → untuk apa (revive only) | DIRECT: **Produk Belotero yang mana saya perlukan?** |
| FAQ 4 "How soon will I look normal after Belotero, and how long does it last?" | belotero tahan berapa lama, filler tahan berapa lama | brand form empty; generic returns (MY) | KEYWORD (pattern): **Berapa cepat saya nampak normal selepas Belotero, dan tahan berapa lama?** |

**Malay tally (14 logged strings):** 6 KEYWORD, 8 DIRECT.

**Indonesian pollution seen and avoided:** `belotero revive adalah`, `harga belotero` (ID-led), `filler bawah mata apakah aman`. *Kedutan* is always paired (*kedutan muka*), per docs/18 §7.2.

## Terms carried over

Same table as `juvederm.md`, plus:

| EN | zh | ms | Source |
|---|---|---|---|
| two-phase dynamic cross-linking | 两阶段动态交联 | rangkaian silang dinamik dua fasa | new |
| gel density | 凝胶密度 | ketumpatan gel | new |
| biomimetic | 仿生 | biomimetik | new (AC `仿生玻尿酸`) |
| superficial placement | 打得浅 / 浅层 | suntikan di lapisan cetek | new |
| bluish discolouration | 泛蓝的变色 | perubahan warna kebiruan | new |
| small raised areas | 小小的凸起 | bonjolan kecil | new |
| etched-in creases | 深刻的折痕 | kedutan muka yang telah terbentuk | new |
| dermabrasion | 磨皮 | dermabrasi | new |

## For the bilingual doctor-reviewer

1. **仿生玻尿酸** is how Chinese readers search Belotero, and it's the literal translation of "biomimetic". It's used as the manufacturer's description ("制造商称之为'仿生'"), never as a claim that the gel behaves like skin.
2. **Bluish tinge** is 泛蓝 / *kebiruan*. The EN doesn't name the Tyndall effect on this page, so neither locale does (Art Filler's page does, following its EN).
3. **"Etched-in creases"**: 深刻的折痕 / *kedutan muka yang telah terbentuk*. Confirm.
4. **Belotero Revive** is described only as the manufacturer positions it (skin quality, not volume). The Chinese 水光针 label that AC attaches to it is not used.
5. **L-03r warnings** (永久 / kekal): sections[2] heading is the EN's own question, answered "不是永久的" / "tidak kekal" in the body; the rest are negated or factual (permanent implant).
