# 21. Technology keyword log: Radiesse (`/technology/radiesse`)

**Date:** 2026-10-14 · Device & injectable localisation round, format as the pilot (`onda-coolwaves.md`).
**Outputs:** `content/i18n/technology/zh/radiesse.json`, `content/i18n/technology/ms/radiesse.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/radiesse.json`.
**Inputs:** EN record for `radiesse`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `bio-stimulator` treatment page and the `aging`, `face-lifting` and `face-contouring` concern pages; terminology shared with `sculptra.md` and `ellanse.md`.

## Method

- **Client rule, volume proxy and decision rule:** as in the pilot.
- **Probes:** shared batch with `sculptra` and `ellanse` (114 zh, 105 ms in total); 40 zh and 33 ms on this page. Raw dumps: `C:/tmp/inject-ac-zh.json`, `C:/tmp/inject-ac-zh2.json`, `C:/tmp/inject-ac-ms.json`, `C:/tmp/inject-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. All body copy is a direct, faithful translation.
- **Street name kept out:** 微晶瓷 (Radiesse's Chinese street name) is not used anywhere, nor `radiesse 再生 针` (seen under `radiesse 价钱`).
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; brand and manufacturer names (Radiesse, Merz Aesthetics), and the technique labels *hyperdilute / HD Radiesse* (glossed in zh). No `device` key.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Radiesse" | radiesse, radiesse 中文 | `radiesse` → 中文, radiesse是什么, 功效, 副作用, filler, price | KEYWORD (brand): **Radiesse**, kept in Latin |
| **seoTitle** "Radiesse CaHA Bio-Stimulator Treatment Malaysia \| Kaiteki" | radiesse malaysia, radiesse 价钱, 羟基磷灰石钙 | `radiesse malaysia` → price, filler malaysia (English); `羟基磷灰石钙` → **羟基磷灰石钙 医美**, (caha) | KEYWORD: **马来西亚 Radiesse 羟基磷灰石钙 \| Kaiteki** (30 chars). Same pattern as Sculptra and Ellansé. |
| **seoDescription** | (same family) | as above | KEYWORD: Radiesse, 羟基磷灰石钙, 胶原蛋白刺激剂, 免费咨询 (80 chars) |
| sections[0].heading "What is Radiesse?" | radiesse 是什么 | **`radiesse是什么`** returns; `radiesse 是` → 是什么针 | KEYWORD: **Radiesse 是什么？** |
| sections[1].heading "How calcium hydroxylapatite works" | radiesse 原理, 羟基磷灰石钙 是什么 | **`radiesse 原理` returns**; 是什么 form empty | KEYWORD: **Radiesse 原理：羟基磷灰石钙如何起作用** |
| sections[2].heading "Filler or collagen stimulator: where does Radiesse sit?" | radiesse 填充剂, radiesse 是填充剂吗, radiesse 填充, radiesse 是 | `radiesse 填充` returns; `radiesse 是` → radiesse filler 是什么; 填充剂 forms empty | KEYWORD (partial): **填充剂还是胶原蛋白刺激剂：Radiesse 属于哪一类？** |
| sections[3].heading "Can Radiesse be used beyond the face?" | radiesse 手背, radiesse 手部, radiesse 手, radiesse 前胸, radiesse 胸口 | `radiesse 手` returns itself only; the rest empty | DIRECT: **Radiesse 可以用在脸部以外的部位吗？** (naming only 手 would drop the décolletage half of the EN) |
| sections[4].heading "Who should avoid Radiesse, and why mention it before a scan?" | radiesse 禁忌, radiesse x光 | empty | DIRECT: **哪些人不适合 Radiesse？为什么做影像检查前要提起它？** |
| sections[5].heading "What happens at a Radiesse appointment, and what should you expect after hand treatment?" | radiesse 疗程, radiesse 恢复期, radiesse 打完, radiesse 手 | **`radiesse 疗程` returns**; `radiesse 手` returns; 恢复期, 打完 empty | KEYWORD (weak): **Radiesse 疗程的过程是怎样的？手部治疗后会怎样？** |
| sections[6].heading "What are the risks of Radiesse on the face and hands?" | radiesse 副作用, radiesse 风险 | **`radiesse 副作用` returns**; 风险 empty | KEYWORD: **Radiesse 用在脸部和手部有什么副作用和风险？** |
| FAQ 1 "Is Radiesse a filler or a collagen stimulator?" | radiesse 是填充剂吗, radiesse 填充, radiesse 是 | as sections[2] | KEYWORD (partial): **Radiesse 是填充剂还是胶原蛋白刺激剂？** |
| FAQ 2 "What is hyperdilute or HD Radiesse?" | radiesse 稀释, radiesse hd, hyperdilute radiesse, radiesse 中文 | **`radiesse 稀释` returns**; `radiesse 中文` → **hyperdilute radiesse 中文, diluted radiesse 中文**; `radiesse 是` → diluted radiesse 是什么 | KEYWORD: **什么是稀释型（hyperdilute / HD）Radiesse？** |
| FAQ 3 "Can Radiesse be used on the hands and chest, not just the face?" | radiesse 手, radiesse 手背, radiesse 前胸 | `radiesse 手` returns; others empty | KEYWORD (weak): **Radiesse 除了脸部，也可以用在手部和前胸吗？** (the EN names both areas, so 手部 keeps the meaning) |
| FAQ 4 "How long does Radiesse last, and can it be reversed?" | radiesse 维持多久, radiesse 维持, radiesse 溶解, radiesse 可以溶解吗 | all empty | DIRECT: **Radiesse 可以维持多久？可以逆转吗？** |

**Chinese tally (14 logged strings):** 11 KEYWORD, 3 DIRECT (two weak: sections[5], FAQ 3).

**Not usable:** 微晶瓷, `radiesse 再生 针 价钱` (street names); `radiesse 价钱 香港`, `radiesse 韩国 价钱` (HK/KR); `radiesse 功效` (efficacy framing); `radiesse 3ml` (dose; the page publishes no volumes).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Radiesse" | radiesse, radiesse malaysia | `radiesse` → vs sculptra, injection, filler; `radiesse malaysia` → price, filler malaysia | KEYWORD (brand): **Radiesse**, kept in Latin |
| **seoTitle** | radiesse malaysia, rawatan radiesse, radiesse treatment, calcium hydroxylapatite | `radiesse malaysia` returns MY forms; `rawatan radiesse` empty; `calcium hydroxylapatite` → (caha), filler | KEYWORD: **Rawatan Radiesse (CaHA) Bio-stimulator di Malaysia \| Kaiteki** (60 chars), same pattern as Sculptra |
| **seoDescription** | (same family) | as above | KEYWORD: Radiesse, kalsium hidroksilapatit, bio-stimulator, Kaiteki, konsultasi percuma (150 chars) |
| sections[0].heading "What is Radiesse?" | apa itu radiesse, radiesse adalah | **`apa itu radiesse`** → apa itu treatment radiesse; `radiesse adalah` ID-leaning | KEYWORD: **Apa itu Radiesse?** |
| sections[1].heading "How calcium hydroxylapatite works" | kalsium hidroksilapatit, radiesse how it works | Malay form empty; English form returns | DIRECT: **Bagaimana kalsium hidroksilapatit berfungsi** |
| sections[2].heading "Filler or collagen stimulator: where does Radiesse sit?" | radiesse filler or biostimulator, radiesse filler atau, radiesse filler | **`radiesse filler or biostimulator` → radiesse filler biostimulator**; Malay *atau* form empty | KEYWORD: **Filler atau bio-stimulator: Radiesse di kategori mana?** (*bio-stimulator* spelt as on the treatment page) |
| sections[3].heading "Can Radiesse be used beyond the face?" | radiesse untuk, radiesse tangan, radiesse untuk tangan, radiesse hands | `radiesse untuk` → radiesse untuk apa (general, not "beyond the face"); *tangan* forms empty; `radiesse hands` English | DIRECT: **Bolehkah Radiesse digunakan selain pada muka?** |
| sections[4].heading "Who should avoid Radiesse, and why mention it before a scan?" | radiesse hamil, radiesse contraindications, radiesse x ray | Hamilton noise; English only | DIRECT: **Siapa yang patut mengelakkan Radiesse, dan kenapa perlu memaklumkannya sebelum imbasan?** |
| sections[5].heading "What happens at a Radiesse appointment, and what should you expect after hand treatment?" | radiesse downtime, radiesse hands swelling | English only | DIRECT: **Apa yang berlaku dalam sesi Radiesse, dan apa yang boleh dijangka selepas rawatan tangan?** (*sesi*, not *temujanji*, per docs/18 §7.2) |
| sections[6].heading "What are the risks of Radiesse on the face and hands?" | radiesse kesan sampingan, radiesse side effects | Malay empty; English strong | DIRECT: **Apakah risiko Radiesse pada muka dan tangan?** |
| FAQ 1 "Is Radiesse a filler or a collagen stimulator?" | radiesse filler or biostimulator, radiesse filler | `radiesse filler biostimulator` returns | KEYWORD: **Radiesse ialah filler atau bio-stimulator?** |
| FAQ 2 "What is hyperdilute or HD Radiesse?" | hyperdilute radiesse, radiesse hyperdilute, radiesse hd, apa itu radiesse | all three English forms strong; `apa itu radiesse` returns | KEYWORD: **Apa itu Radiesse hyperdilute atau HD Radiesse?** (technique labels kept in English, as searched) |
| FAQ 3 "Can Radiesse be used on the hands and chest, not just the face?" | radiesse tangan, radiesse hands, radiesse chest, radiesse decolletage | Malay empty; English forms return | DIRECT: **Bolehkah Radiesse digunakan pada tangan dan dada, bukan muka sahaja?** |
| FAQ 4 "How long does Radiesse last, and can it be reversed?" | radiesse berapa lama, radiesse tahan berapa lama, radiesse dissolve | **`radiesse tahan berapa lama` returns** (also *bertahan berapa lama*) | KEYWORD: **Radiesse tahan berapa lama, dan bolehkah ia diterbalikkan?** |

**Malay tally (14 logged strings):** 8 KEYWORD, 6 DIRECT.

**Indonesian pollution seen and avoided:** `radiesse adalah`, `treatment radiesse adalah`, `radiesse collagen stimulator adalah`.

## Terms carried over

As in `sculptra.md` and `ellanse.md`, plus:

| EN | zh | ms | Source |
|---|---|---|---|
| calcium hydroxylapatite (CaHA) | 羟基磷灰石钙 | kalsium hidroksilapatit | bio-stimulator |
| gel carrier | 凝胶载体 | gel pembawa | bio-stimulator |
| elastin | 弹性蛋白 | elastin | bio-stimulator |
| hands / back of the hands | 手部 / 手背 | tangan / belakang tangan | bio-stimulator |
| décolletage | 前胸 | dada atas (décolletage) | bio-stimulator |
| sterile saline | 无菌生理盐水 | air garam steril | new |
| hyperdilute / HD Radiesse | 高度稀释（hyperdilute）/ HD Radiesse; FAQ: 稀释型 | Radiesse hyperdilute / HD Radiesse | new |
| radiopaque | 不透射线 | radiopak | new |
| imaging / scan | 影像检查 | imbasan | new |
| (cleared) indications | 获准的适应症 | indikasi yang diluluskan | new |

## For the bilingual doctor-reviewer

1. **No 微晶瓷.** Not used anywhere, per the bio-stimulator precedent.
2. **"Hyperdilute"** is 高度稀释 in the body and 稀释型 in the FAQ question, both with the English label in brackets, because `hyperdilute radiesse 中文` and `diluted radiesse 中文` show Chinese readers searching the English term. Confirm 稀释型 is acceptable.
3. **"Radiopaque … visible on some imaging"** is 不透射线 … 在某些影像检查中可能看得见 / *bersifat radiopak … boleh kelihatan dalam sesetengah imbasan*. Confirm.
4. **"One of the few injectables in this category with manufacturer-cleared use beyond the face"** is kept as a factual statement (少数…之一 / *antara segelintir*), not as a ranking. Please confirm it is still accurate for Malaysia.
5. **"Moderate to severe facial folds"** is 中度至重度的脸部皱褶 / *sederhana hingga teruk*.
6. **永久 / kekal** appear only in "permanent or semi-permanent implants" (factual product type). The L-03r warnings are expected.
7. **"Not something we quote as a promise"** is 不会把它当作承诺来报 / *bukan sesuatu yang kami nyatakan sebagai janji*.
