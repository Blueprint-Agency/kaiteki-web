# 21. Technology keyword log: Rejuran (`/technology/rejuran`)

**Date:** 2026-10-14 · Follows the pilot format in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/rejuran.json`, `content/i18n/technology/ms/rejuran.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/rejuran.json`.
**Inputs:** EN record for `rejuran`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `skin-booster` treatment page, and the `acne-scars`, `enlarged-pores` and `fine-lines-wrinkles` concern pages.

## Method

- **Client rule, volume proxy and decision rules:** as in `onda-coolwaves.md` and `profhilo.md`.
- **Probes:** shared batch for the five skin-booster products, 133 zh and 145 ms. Raw dumps: `C:/tmp/sbdev-ac-zh.json`, `…-zh2.json`, `…-zh3.json`, `C:/tmp/sbdev-ac-ms.json`, `…-ms2.json`, `…-ms3.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. All body copy is a direct, faithful translation.
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `reviewedBy`, `lastReviewed` (this record has no `device`); the names Rejuran, Rejuran S, Rejuran HB, Pharma Research, Plinest, Newest, Mastelli, PN-HPT.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Rejuran" | rejuran | → re 居然, rejuran healer, rejuran hb, **rejuran malaysia** (skincare masks also appear) | KEYWORD (brand): **Rejuran**, Latin |
| **seoTitle** "Rejuran Skin Booster Injectable Treatment Malaysia \| Kaiteki" | rejuran 水光针, rejuran 马来西亚, rejuran s | `rejuran malaysia` in the base list; `re 居然 水光针`, `rejuran skin booster` return; `rejuran 马来西亚` empty | KEYWORD: **马来西亚 Rejuran 水光针疗程 \| Kaiteki** (28 chars) |
| **seoDescription** | rejuran 多核苷酸, 多核苷酸 | `多核苷酸` → 作用, 醫美, pn 多核苷酸; brand + 多核苷酸 empty | KEYWORD: Rejuran, 三文鱼, 多核苷酸, 马来西亚, 水光针, 皮肤纹理, 皮肤屏障, 免费咨询 (76 chars) |
| sections[0].heading "What is Rejuran?" | rejuran 是什么 | → re 居然是什么, rejuran healer 是什么 | KEYWORD: **Rejuran 是什么？** |
| sections[1].heading "How polynucleotides work" | rejuran 原理, 多核苷酸 | `rejuran 原理` empty; `多核苷酸` → **多核苷酸 作用** | KEYWORD (partial): **多核苷酸的作用原理** |
| sections[2].heading "Does Rejuran add volume?" | rejuran 填充 | empty | DIRECT: **Rejuran 会增加容量吗？** |
| sections[3].heading "Rejuran or Plinest: how do two polynucleotide boosters differ?" | rejuran vs plinest, rejuran 和 plinest | `rejuran vs plinest` strong in the zh session (reviews, side effects, price); Chinese 和 form empty | KEYWORD (pattern): **Rejuran 还是 Plinest：两种多核苷酸水光针有什么区别？** |
| sections[4].heading "Can you have Rejuran with a fish allergy, and who else should avoid it?" | rejuran 过敏, rejuran 鱼过敏, rejuran 海鲜过敏 | `rejuran 过敏` returns itself; fish forms empty | KEYWORD (partial): **对鱼类过敏可以打 Rejuran 吗？还有谁不适合？** |
| sections[5].heading "How long does a Rejuran appointment take, and how visible is it afterwards?" | rejuran 多久, rejuran 打完, rejuran 恢复期 | `rejuran 多久` → 多久打一次 (a different question); others empty | DIRECT: **打 Rejuran 要多久？打完会很明显吗？** |
| sections[6].heading "What are the risks of Rejuran injections?" | rejuran 风险, rejuran 副作用 | `rejuran 风险` empty; `rejuran 副作用` returns | KEYWORD: **打 Rejuran 有什么风险和副作用？** (the section lists side effects, so the meaning holds) |
| FAQ 1 "Rejuran vs an HA booster like Profhilo?" | profhilo rejuran, rejuran 和 profhilo 区别 | `profhilo rejuran` → rejuran vs profhilo, price; Chinese form empty | KEYWORD (pattern): **Rejuran 和 Profhilo 这类玻尿酸水光针有什么区别？** (same pattern as skin-booster FAQ 4) |
| FAQ 2 "Is Rejuran safe with a fish or seafood allergy?" | rejuran 过敏, 水光针 过敏 | `rejuran 过敏` returns | KEYWORD (partial): **对鱼类或海鲜过敏，可以打 Rejuran 吗？** ("safe" rendered as 可以打吗, so no 安全 claim either way) |
| FAQ 3 "How long do the bumps last?" | rejuran 包, rejuran 肿, rejuran 多久消 | empty | DIRECT: **打 Rejuran 后的小凸起会维持多久？** |
| FAQ 4 "Which Rejuran variant do I need?" | rejuran 种类, rejuran 哪种 | `rejuran 种类` returns (also 面膜 种类) | KEYWORD: **Rejuran 有哪些种类？我需要哪一种？** |

**Chinese tally (14 logged strings):** 11 KEYWORD, 3 DIRECT.

**Not usable:** **三文鱼针 / 婴儿针** (kept out, as on skin-booster). **re 居然 / 丽珠兰** are China-market transliterations (丽珠兰 shows mainly for masks); not used as names. `rejuran 价钱` is HK/KR and skincare-led, and there is no cost FAQ.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Rejuran" | rejuran, rejuran malaysia | → rejuran treatment, **rejuran malaysia** (price, clinic, reviews) | KEYWORD (brand): **Rejuran** |
| **seoTitle** | rejuran malaysia, suntikan rejuran, rawatan rejuran, rejuran skin booster, harga rejuran di malaysia | all return; `rejuran malaysia` → **rejuran treatment malaysia price**; `harga rejuran di malaysia` returns itself | KEYWORD: **Suntikan Skin Booster Rejuran di Malaysia \| Kaiteki** (51 chars). *Suntikan* carries the EN "Injectable". |
| **seoDescription** | rejuran dna salmon, skin booster salmon | `rejuran dna salmon` → harga, zap (ID chain), untuk apa | KEYWORD: suntikan, polinukleotida salmon, skin booster, Kaiteki, konsultasi percuma (149 chars). *DNA salmon* not used as a name (skin-booster note 2). |
| sections[0].heading "What is Rejuran?" | apa itu rejuran, rejuran untuk apa | `apa itu rejuran` → treatment, healer, eye, scar, hb, s | KEYWORD: **Apa itu Rejuran?** |
| sections[1].heading "How polynucleotides work" | polinukleotida, rejuran how it works | `polinukleotida` is Lithuanian noise plus *adalah* (ID); English only | DIRECT: **Bagaimana polinukleotida berfungsi** |
| sections[2].heading "Does Rejuran add volume?" | rejuran volume | → volume loss, rejuran vs juvelook volume (English) | DIRECT: **Adakah Rejuran menambah volum?** |
| sections[3].heading "Rejuran or Plinest" | rejuran vs plinest, beza rejuran dan plinest | `rejuran vs plinest` strong (English); *beza* empty | KEYWORD (pattern): **Rejuran atau Plinest: apa beza dua skin booster polinukleotida ini?** |
| sections[4].heading "Fish allergy, who else should avoid it?" | rejuran alahan, rejuran ikan, rejuran alah ikan, rejuran alergi | Malay empty; `alergi rejuran` (ID word); `rejuran fish allergy` English | DIRECT: **Boleh ke buat Rejuran kalau alah pada ikan, dan siapa lagi yang patut mengelaknya?** |
| sections[5].heading "Appointment length, how visible afterwards" | rejuran berapa lama, rejuran downtime, suntikan rejuran | `rejuran berapa lama` returns (→ *berapa lama sekali, bertahan*); `rejuran downtime` → **downtime berapa lama** | KEYWORD (weak): **Berapa lama sesi Rejuran, dan berapa ketara tandanya selepas itu?** |
| sections[6].heading "Risks of Rejuran injections" | rejuran risks, rejuran kesan sampingan, suntikan rejuran | *risks* English; *kesan sampingan* empty; `suntikan rejuran` returns | KEYWORD (partial): **Apakah risiko suntikan Rejuran?** |
| FAQ 1 "Rejuran vs Profhilo-type HA booster" | rejuran vs profhilo, beza rejuran dan profhilo | `rejuran vs profhilo` strong; *beza* empty | KEYWORD (pattern): **Apa beza Rejuran dan skin booster asid hialuronik seperti Profhilo?** |
| FAQ 2 "Safe with fish or seafood allergy?" | rejuran seafood allergy, rejuran fish allergy, skin booster ikan | English forms return themselves; Malay empty | DIRECT: **Boleh ke buat Rejuran kalau saya alah pada ikan atau makanan laut?** (same form as skin-booster FAQ 5) |
| FAQ 3 "How long do the bumps last?" | rejuran bumps, rejuran benjol, rejuran bintil, suntikan rejuran | *benjol / bintil* empty; `suntikan rejuran` → **bekas suntikan rejuran hilang berapa lama** | KEYWORD: **Bintil dan bekas suntikan Rejuran hilang berapa lama?** |
| FAQ 4 "Which Rejuran variant do I need?" | jenis rejuran | → jenis rejuran healer, **ada berapa jenis rejuran**, jenis skin booster rejuran (*dan manfaatnya*, *perbedaan* are ID) | KEYWORD: **Jenis Rejuran: yang mana satu saya perlukan?** (`jenis rejuran` already ranks for Kaiteki) |

**Malay tally (14 logged strings):** 10 KEYWORD, 4 DIRECT.

**Indonesian pollution seen and avoided:** *rejuran sakit ga, apakah suntik rejuran sakit, rejuran harus / sebaiknya berapa kali, perbedaan jenis rejuran, efek / hasil rejuran berapa lama, rejuran dna salmon zap harga, alergi*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| polynucleotide (PN) | 多核苷酸 | polinukleotida | skin-booster |
| salmon-derived | 来自三文鱼 | daripada ikan salmon | skin-booster (三文鱼, not 鲑鱼) |
| trout | 鳟鱼 | ikan trout | skin-booster |
| skin barrier | 皮肤屏障 | lapisan pelindung kulit | skin-booster |
| fibroblast | 纤维母细胞 | fibroblas | new |
| resilience | 皮肤韧性 | daya tahan kulit | new |
| enlarged-looking pores | 看起来粗大的毛孔 | liang pori yang nampak besar | enlarged-pores, skin-booster |
| acne scarring | 痘疤 | parut jerawat | acne-scars |
| keloid / hypertrophic scarring | 蟹足肿 / 增生性疤痕 | parut keloid atau hipertrofik | skin-booster |
| active acne flare | 暗疮发作 | jerawat yang sedang naik | skin-booster |

## For the bilingual doctor-reviewer

1. **Rejuran S and Rejuran HB** keep their trade names; the eye-area version is described, not named, as in the EN.
2. **"Nothing here is a promised outcome"** is 这里所写的都不是承诺的效果 / *Tiada apa-apa di sini merupakan hasil yang dijanjikan*.
3. **"Should not be treated as a guaranteed schedule"** keeps the negation: 不应该当作有保证的时间表 / *tidak patut dianggap sebagai jadual yang dijamin* (L-03r warns, as expected).
4. **FAQ 2 "Is Rejuran safe if …"** became "可以打吗 / Boleh ke buat …" so neither locale carries the word "safe" in a question about an allergy; the answer is unchanged.
5. **sections[5] (ms)** "how visible is it afterwards" is *berapa ketara tandanya*: *tanda* = the visible marks. Confirm it reads naturally.
