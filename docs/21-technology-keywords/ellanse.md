# 21. Technology keyword log: Ellansé (`/technology/ellanse`)

**Date:** 2026-10-14 · Device & injectable localisation round, format as the pilot (`onda-coolwaves.md`).
**Outputs:** `content/i18n/technology/zh/ellanse.json`, `content/i18n/technology/ms/ellanse.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/ellanse.json`.
**Inputs:** EN record for `ellanse`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `bio-stimulator` treatment page and the `aging`, `face-lifting` and `face-contouring` concern pages; terminology shared with `sculptra.md`.

## Method

- **Client rule, volume proxy and decision rule:** as in the pilot.
- **Probes:** shared batch with `sculptra` and `radiesse` (114 zh, 105 ms in total); 33 zh and 30 ms on this page. Raw dumps: `C:/tmp/inject-ac-zh.json`, `C:/tmp/inject-ac-zh2.json`, `C:/tmp/inject-ac-ms.json`, `C:/tmp/inject-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. All body copy is a direct, faithful translation.
- **Street name kept out:** `ellanse` autocompletes to `ellanse少女针`, `少女 针 ellanse 价钱`, `ellanse 少女針 副作用`. 少女针 is not used anywhere (bio-stimulator precedent).
- **Spelling:** the EN `name` and leadAnswer say "Ellanse"; headings and bodies say "Ellansé". Both are kept exactly as in the EN.
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; brand, manufacturer and variant names (Ellansé, Sinclair, Ellansé-S … Ellansé-E). This record has no `device` key.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Ellanse" | ellanse, ellanse 中文 | `ellanse` → ellanse是什么, ellanse少女针 (street name), 好处, 价格, 缺点, 中文 | KEYWORD (brand): **Ellanse**, kept in Latin as the EN spells it |
| **seoTitle** "Ellansé PCL Bio-Stimulator Treatment Malaysia \| Kaiteki" | ellanse malaysia, ellanse 价钱, 聚己内酯 | `ellanse malaysia` → price, filler price malaysia (English); `聚己内酯` → 用途, 英文, (pcl) | KEYWORD: **马来西亚 Ellansé 聚己内酯 \| Kaiteki** (27 chars). Same pattern as Sculptra and Radiesse; 胶原蛋白刺激剂 moves to the description. |
| **seoDescription** | (same family) | as above | KEYWORD: Ellansé, 聚己内酯, 胶原蛋白刺激剂, 免费咨询 (79 chars) |
| sections[0].heading "What is Ellansé?" | ellanse 是什么 | `ellanse` → **ellanse是什么** (2nd suggestion) | KEYWORD: **Ellansé 是什么？** |
| sections[1].heading "How polycaprolactone works" | ellanse 原理, 聚己内酯 是什么 | both empty; `sculptra 原理` and `radiesse 原理` return for the sister products | KEYWORD (weak, pattern): **Ellansé 原理：聚己内酯如何起作用** |
| sections[2].heading "Why can Ellansé not be dissolved, and how long does it last?" | ellanse 溶解, ellanse 可以溶解吗, ellanse 维持多久, ellanse 维持 | **`ellanse 溶解` returns**; **`ellanse 维持` → ellanse 维持时间**; question forms empty | KEYWORD: **Ellansé 为什么不能溶解？维持时间有多长？** |
| sections[3].heading "What is Ellansé used for, and how does it differ from Sculptra?" | ellanse 和 sculptra, ellanse vs sculptra, ellanse 适合, ellanse 好处 | `ellanse vs sculptra` strong (cost, side effects; English, global); `sculptra 和` → radiesse 和 sculptra; 和/适合 forms empty; 好处 returns but is benefit framing | KEYWORD (partial): **Ellansé 用在哪些问题上？和 Sculptra 有什么差别？** |
| sections[4].heading "Why does Ellansé need a more careful assessment than a filler?" | ellanse 风险, ellanse 禁忌 | empty | DIRECT: **为什么 Ellansé 比填充剂更需要仔细评估？** |
| sections[5].heading "Is Ellansé a single session, and what is the recovery like?" | ellanse 打几次, ellanse 恢复期, ellanse 打完 | all empty | DIRECT: **Ellansé 只需要打一次吗？恢复期是怎样的？** |
| sections[6].heading "What side effects does the manufacturer list for Ellansé?" | ellanse 副作用 | **`ellanse 副作用` returns** (plus 少女針 副作用, not used) | KEYWORD: **制造商列出的 Ellansé 副作用有哪些？** |
| FAQ 1 "How is Ellansé different from Sculptra?" | ellanse vs sculptra, ellanse 和 sculptra, ellanse 区别 | as sections[3] | KEYWORD (partial): **Ellansé 和 Sculptra 有什么差别？** (差别 per the pilot) |
| FAQ 2 "Can Ellansé be dissolved if I change my mind?" | ellanse 溶解, ellanse 可以溶解吗 | `ellanse 溶解` returns | KEYWORD: **如果我改变主意，Ellansé 可以溶解吗？** |
| FAQ 3 "What do the different Ellansé variants mean?" | ellanse 型号, ellanse s m l e, ellanse s, ellanse m | 型号 empty; `ellanse s`, `ellanse m 价钱` return (variant letters searched in Latin, price-led) | DIRECT: **Ellansé 的不同型号代表什么？** |
| FAQ 4 "Is Ellansé suitable for Asian skin and facial structure?" | ellanse 亚洲, ellanse 亚洲人, ellanse 适合 | all empty | DIRECT: **Ellansé 适合亚洲人的皮肤和脸型吗？** |

**Chinese tally (14 logged strings):** 10 KEYWORD, 4 DIRECT (one weak: sections[1]).

**Not usable:** `ellanse少女针`, `少女 针 ellanse 价钱`, `ellanse 少女針 副作用` (street name; 針 is also traditional script); `ellanse 好处`, `ellanse 缺点` (pros/cons framing with no EN source); `ellanse 价钱` (price; no price on the page).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Ellanse" | ellanse, ellanse malaysia | `ellanse` → filler, vs aesthefill, m, vs sculptra vs radiesse; `ellanse malaysia` → price, distributor, filler malaysia | KEYWORD (brand): **Ellanse**, kept in Latin |
| **seoTitle** | ellanse malaysia, rawatan ellanse, ellanse treatment, polycaprolactone | `ellanse malaysia` returns MY forms; `rawatan ellanse` empty; `ellanse treatment` global English; `polycaprolactone` → pcl, filler | KEYWORD: **Rawatan Ellansé (PCL) Bio-stimulator di Malaysia \| Kaiteki** (58 chars), same pattern as Sculptra |
| **seoDescription** | (same family) | as above | KEYWORD: Ellansé, polikaprolakton, bio-stimulator, Kaiteki, konsultasi percuma (156 chars) |
| sections[0].heading "What is Ellansé?" | apa itu ellanse, ellanse adalah | **`apa itu ellanse` returns**; `ellanse adalah` → collagen stimulator adalah (ID-leaning) | KEYWORD: **Apa itu Ellansé?** |
| sections[1].heading "How polycaprolactone works" | polikaprolakton, ellanse how it works | `polikaprolakton` is Polish (stymulator, opinie); `ellanse how it works` English | DIRECT: **Bagaimana polikaprolakton berfungsi** |
| sections[2].heading "Why can Ellansé not be dissolved, and how long does it last?" | ellanse boleh larut, ellanse dissolve, ellanse berapa lama, ellanse tahan berapa lama | larut empty; dissolve English; **`ellanse tahan berapa lama` returns** (also *bertahan berapa lama*) | KEYWORD: **Kenapa Ellansé tidak boleh dilarutkan, dan tahan berapa lama?** |
| sections[3].heading "What is Ellansé used for, and how does it differ from Sculptra?" | ellanse untuk, ellanse vs sculptra | **`ellanse untuk` → ellanse untuk apa**; `ellanse vs sculptra` strong, English | KEYWORD: **Ellansé untuk apa, dan apa bezanya dengan Sculptra?** |
| sections[4].heading "Why does Ellansé need a more careful assessment than a filler?" | ellanse asian, ellanse kulit asia | empty | DIRECT: **Kenapa Ellansé memerlukan penilaian yang lebih teliti berbanding filler?** |
| sections[5].heading "Is Ellansé a single session, and what is the recovery like?" | ellanse sesi, ellanse downtime | `ellanse sesi` → Spanish; `ellanse downtime` English | DIRECT: **Adakah Ellansé hanya satu sesi, dan bagaimana tempoh pemulihannya?** |
| sections[6].heading "What side effects does the manufacturer list for Ellansé?" | ellanse kesan sampingan, ellanse side effects | Malay empty; side effects strong but English | DIRECT: **Apakah kesan sampingan Ellansé yang disenaraikan oleh pengeluar?** |
| FAQ 1 "How is Ellansé different from Sculptra?" | ellanse vs sculptra, ellanse vs, ellanse vs sculptra mana | `ellanse vs sculptra` strong; Malay *mana* form empty | KEYWORD: **Ellansé vs Sculptra: apa bezanya?** |
| FAQ 2 "Can Ellansé be dissolved if I change my mind?" | ellanse boleh larut, ellanse dissolve, filler boleh dilarutkan | Malay forms empty; dissolve English | DIRECT: **Bolehkah Ellansé dilarutkan jika saya ubah fikiran?** |
| FAQ 3 "What do the different Ellansé variants mean?" | ellanse types, ellanse variants, ellanse s vs m | types / s vs m English; variants empty | DIRECT: **Apakah maksud varian Ellansé yang berbeza?** |
| FAQ 4 "Is Ellansé suitable for Asian skin and facial structure?" | ellanse asian, ellanse kulit asia | empty | DIRECT: **Adakah Ellansé sesuai untuk kulit dan struktur muka orang Asia?** |

**Malay tally (14 logged strings):** 7 KEYWORD, 7 DIRECT.

**Indonesian pollution seen and avoided:** `ellanse adalah`, `treatment ellanse adalah`, `ellanse collagen stimulator adalah`.

## Terms carried over

As in `sculptra.md`, plus:

| EN | zh | ms | Source |
|---|---|---|---|
| polycaprolactone | 聚己内酯 | polikaprolakton | bio-stimulator |
| microspheres | 微球 | mikrosfera | bio-stimulator |
| carrier gel | 载体凝胶 | gel pembawa | bio-stimulator |
| injectable implant | 注射型植入物 | implan suntikan | new |
| carboxymethylcellulose | 羧甲基纤维素 | karboksimetilselulosa | new (chemistry) |
| CE-marked intended use | 获得 CE 认证的用途 | kegunaan yang ditetapkan di bawah tanda CE | new |
| marionette lines | 木偶纹 | garis marionette | aging |
| permanent or semi-permanent implants | 永久性或半永久性植入物 | implan kekal atau separa kekal | bio-stimulator |

## For the bilingual doctor-reviewer

1. **No 少女针.** It shows strongly under `ellanse` in Chinese; not used.
2. **"Regenerative rather than purely volumising"** is 再生型，而不只是补充容量 / *bersifat regeneratif, bukan sekadar menambah volum*. Kept as the manufacturer's framing ("制造商把…定位为", "pengeluar menggambarkan").
3. **Duration figures** ("around twelve months … up to several years") are kept as the manufacturer's figures and stay tied to "因人而异，不能保证" / "tidak dijamin".
4. **"Subdermal implantation"** is 注射到脸部皮下 / *implantasi di bawah kulit muka*. Confirm.
5. **永久 / kekal** appear only in "permanent or semi-permanent implants" (a product type, factual). **保证 / dijamin** appear only negated. The L-03r warnings are expected.
6. **"Including Asian skin"** is kept as in the EN; it states use across skin tones, not a suitability promise.
7. **ms "kekal di tempatnya"** (the microspheres "remain") was written as *tetap berada di tempatnya* to keep *kekal* for the permanence sense only.
