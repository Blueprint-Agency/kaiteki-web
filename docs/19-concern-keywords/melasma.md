# 19. Concern keyword log: Melasma (`/concerns/melasma`)

**Date:** 2026-10-14 · Follows the pilot format in `acne.md`.
**Outputs:** `content/i18n/concerns/zh/melasma.json`, `content/i18n/concerns/ms/melasma.json` (same shape as the EN record).
**Inputs:** EN record for `melasma`, `docs/18-trilingual-keyword-map.md` §5 (display names) and §7 (avoid list), the pilot outputs for `acne`.

## Method

Same as the pilot (`acne.md`): Google Autocomplete as the volume proxy (`client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`); KEYWORD = phrased around a real Malaysian query form with the EN meaning kept; DIRECT = faithful translation.

- **Probes:** about 70 zh and 50 ms for this page (run in the same batches as `acne-scars`). Raw dumps are in the session scratchpad, not the repo.
- **Scope:** seoTitle, seoDescription, name, section headings, drivers.heading, variant heading and tab labels/titles, locationBlock.heading, CTA headings, FAQ questions. Body copy is a direct, faithful translation.
- **Not in this record:** `jumpNav`, `compare` and `seeDoctor.heading` are absent from the EN record. Shared H2s come from `concern-ui.ts`.
- **"Cured"** is rendered 治愈 / *disembuhkan*, always negated ("只能控制，不能治愈" / "dikawal, bukan disembuhkan"). 根治 and *kekal* are not used anywhere.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Melasma" | 黄褐斑 | → 黄褐斑怎么去除, 黄褐斑是怎么形成的, 黄褐斑能去掉吗, 黄褐斑治疗, 黄褐斑和晒斑的区别 | KEYWORD: **黄褐斑** (docs/18 §5; never 肝斑) |
| **seoTitle** "Melasma Treatment in Malaysia \| Kaiteki" | 黄褐斑治疗, 黄褐斑激光, 黄褐斑 马来西亚 | `黄褐斑治疗` returns (and is in the `黄褐斑` top list); the other two are empty | KEYWORD: **马来西亚黄褐斑治疗 \| Kaiteki** (19 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: 黄褐斑, 激光, 有多深, 免费咨询 (80 chars) |
| sections[0].heading "What is melasma?" | 黄褐斑是什么, 什么是黄褐斑 | both return themselves | KEYWORD: **黄褐斑是什么？** |
| drivers.heading "What drives melasma" | 黄褐斑成因, 黄褐斑是怎么形成的, 黄褐斑形成原因, 黄褐斑原因, 为什么会长黄褐斑 | `黄褐斑成因` returns; `黄褐斑是怎么形成的` is in the `黄褐斑` top list; the rest are empty | KEYWORD: **黄褐斑成因：是怎么形成的？** |
| variant.heading "How deep does your melasma sit?" | 黄褐斑类型, 黄褐斑种类, 黄褐斑深浅, 黄褐斑 深层 | all empty | DIRECT: **你的黄褐斑有多深？** |
| tabs "Epidermal / Dermal / Mixed" | 表皮型黄褐斑, 真皮型黄褐斑, 混合型黄褐斑 | all empty | DIRECT: **表皮型 / 真皮型 / 混合型**（黄褐斑） |
| locationBlock.heading "Where melasma appears" | 黄褐斑位置, 黄褐斑长在哪里, 黄褐斑 颧骨, 黄褐斑 上唇, 黄褐斑 脸颊, 两颊黄褐斑, 黄褐斑 嘴唇上方 | all empty | DIRECT: **黄褐斑常长在哪里** |
| ctaMid.heading "Not sure it's melasma?" | n/a (conversion copy) | n/a | DIRECT: 不确定是不是黄褐斑？ |
| ctaHeading "Find out whether it's melasma" | n/a (conversion copy) | n/a | DIRECT: 确认是不是黄褐斑 |
| FAQ 1 "Is melasma curable?" | 黄褐斑能去掉吗, 黄褐斑能根治吗, 黄褐斑会好吗, 黄褐斑可以治好吗, 黄褐斑能治好吗 | only `黄褐斑能去掉吗` returns (and is a top-3 suggestion for `黄褐斑`) | KEYWORD: **黄褐斑能去掉吗？可以治好吗？** (根治 is banned; the answer opens 不能) |
| FAQ 2 "Can laser make melasma worse?" | 激光会让黄褐斑变严重吗, 黄褐斑 激光 反黑, 黄褐斑 越打越黑, 激光 黄褐斑 变黑, 黄褐斑 激光, 黄褐斑 变深 | only the bare `黄褐斑 激光` returns itself | DIRECT: **激光会让黄褐斑变严重吗？** |
| FAQ 3 "Difference between melasma and sun spots?" | 黄褐斑和晒斑的区别, 黄褐斑 晒斑, 黄褐斑和雀斑的区别, 晒斑 | `黄褐斑和晒斑的区别` returns and is in the `黄褐斑` top list; `晒斑` → 晒斑和黄褐斑的区别 | KEYWORD: **黄褐斑和晒斑的区别是什么？** |
| FAQ 4 "Does pregnancy melasma go away after childbirth?" | 怀孕黄褐斑, 产后黄褐斑, 妊娠斑, 妊娠斑 产后会消失吗, 孕斑, 孕斑会消失吗, 孕斑会退吗 | `孕斑` → 孕斑会退吗, 孕斑是什么, 孕斑会消失吗 (some dcard); `妊娠斑` is Japanese-polluted; 黄褐斑-based forms empty | KEYWORD: **孕斑（怀孕时长的黄褐斑）生完孩子后会消失吗？** |
| FAQ 5 "Treatment while pregnant or breastfeeding?" | 怀孕可以做激光吗, 哺乳期可以做激光吗, 孕妇可以做激光吗, 黄褐斑 哺乳 | nothing | DIRECT: **怀孕或哺乳期间可以做黄褐斑疗程吗？** |
| FAQ 6 "Can Sylfirm X be used for melasma on Asian skin?" | Sylfirm X, sylfirm x 黄褐斑 | `sylfirm x` → 是什么, 功效, 香港 价钱 (HK Cantonese); concern form empty | DIRECT: **Sylfirm X 可以用来处理亚洲人皮肤上的黄褐斑吗？** |
| FAQ 7 "Why does melasma come back after treatment?" | 黄褐斑 复发, 黄褐斑为什么会复发, 黄褐斑会复发吗 | nothing | DIRECT: **为什么黄褐斑治疗后会复发？** |
| FAQ 8 "Can facial redness be a sign of melasma?" | 黄褐斑 脸红, 黄褐斑 玫瑰痤疮, 脸红 | concern forms empty; `脸红` → 脸红是什么原因, 脸红是什么病 (general health, not melasma) | DIRECT: **脸红会是黄褐斑的征兆吗？** |

**Chinese tally (18 logged strings):** 8 KEYWORD, 10 DIRECT. CTA headings counted as DIRECT.

**Not usable:** every "+马来西亚" form, all price forms (`黄褐斑 价钱`, `黄褐斑 治疗 价钱`, `黄褐斑 皮秒 价钱`), depth types and location forms. `黄褐斑 皮秒` and `皮秒 黄褐斑` return themselves only (treatment-page material). Chinese melasma demand is "what is it / can it be removed / vs sun spots", not clinic or type led.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Melasma" | jeragat, jeragat melasma, melasma | `jeragat` → jeragat muka, jeragat itu apa, jeragat melasma, jeragat dan melasma; `melasma` → melasma itu apa, melasma treatment (English-led) | KEYWORD: **Jeragat (Melasma)** (docs/18 §5) |
| **seoTitle** | rawatan jeragat, rawatan laser jeragat, rawatan jeragat malaysia, melasma treatment malaysia | `rawatan jeragat` → muka, near me (also *paling berkesan* / *terbaik*, which are not used); `rawatan laser jeragat` → harga, kos; "+malaysia" empty in Malay | KEYWORD: **Rawatan Jeragat (Melasma) di Malaysia \| Kaiteki** (47 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: jeragat (melasma), laser, konsultasi percuma (155 chars; "di Kaiteki" dropped to fit 160) |
| sections[0].heading "What is melasma?" | apa itu jeragat, jeragat adalah, jeragat itu apa | `apa itu jeragat` → di muka, dan pigmentasi, **melasma** | KEYWORD: **Apa itu jeragat (melasma)?** |
| drivers.heading "What drives melasma" | punca jeragat, punca jeragat muka, jeragat muka punca, kenapa muka jeragat, jeragat hormon, jeragat keturunan | `punca jeragat` → di muka, dan cara mengatasi, **melasma**; `kenapa muka naik jeragat`; `jeragat hormon` and `jeragat keturunan` return | KEYWORD: **Punca jeragat: apa yang mencetuskannya** |
| variant.heading "How deep does your melasma sit?" | jenis jeragat, jeragat dalam, jeragat dermal, jeragat epidermis | `jenis jeragat` → di muka, jeragat jenis melasma; `jeragat dalam` → *dalam kulit* (mostly "in Malay/English" noise); depth terms empty | KEYWORD: **Jenis jeragat: sedalam mana jeragat anda?** |
| tabs "Epidermal / Dermal / Mixed" | jeragat dermal, jeragat epidermis | empty | DIRECT: **Epidermis / Dermis / Bercampur** (title: *Jeragat epidermis / dermis / bercampur*) |
| locationBlock.heading "Where melasma appears" | jeragat di pipi, jeragat atas bibir, jeragat di dahi | all three return (`cara hilangkan jeragat di pipi / atas bibir`) | KEYWORD: **Kedudukan jeragat: di mana ia muncul** (parallels the acne pilot; card titles *Tulang pipi*, *Atas bibir, dahi, hidung dan dagu* match the AC zones) |
| ctaMid.heading | n/a | n/a | DIRECT: Tak pasti sama ada itu jeragat? |
| ctaHeading | n/a | n/a | DIRECT: Ketahui sama ada ia jeragat |
| FAQ 1 "Is melasma curable?" | jeragat boleh hilang ke, jeragat boleh sembuh ke, jeragat boleh hilang | `jeragat boleh hilang ke` returns exactly | KEYWORD: **Jeragat boleh hilang ke? Boleh sembuh?** (answer opens *Tidak.*) |
| FAQ 2 "Can laser make melasma worse?" | jeragat makin teruk, laser jeragat makin teruk, laser buat jeragat makin teruk, keburukan laser jeragat | `jeragat makin teruk` and `keburukan laser jeragat` return | KEYWORD: **Laser boleh buat jeragat makin teruk ke?** |
| FAQ 3 "Melasma vs sun spots?" | beza jeragat dan tompok hitam, jeragat dan tompok matahari, jeragat vs pigmentasi, bintik matahari, tompok hitam di muka | `jeragat vs pigmentasi` returns (different pair); `bintik matahari` is astronomy/Indonesian; sun-spot pair empty | DIRECT: **Apa beza jeragat (melasma) dan tompok matahari?** |
| FAQ 4 "Pregnancy melasma after childbirth?" | jeragat ibu mengandung, jeragat semasa mengandung, jeragat lepas/selepas bersalin, jeragat mengandung, jeragat hamil, jeragat kehamilan | all empty | DIRECT: **Jeragat semasa mengandung akan hilang selepas bersalin?** |
| FAQ 5 "Treatment while pregnant or breastfeeding?" | ibu mengandung boleh buat laser, ibu menyusu boleh buat laser, laser semasa mengandung, rawatan jeragat semasa menyusu | all empty | DIRECT: **Boleh ke buat rawatan jeragat semasa mengandung atau menyusu?** |
| FAQ 6 "Sylfirm X for melasma on Asian skin?" | sylfirm x, sylfirm x malaysia | → treatment, reviews, malaysia price (English only) | DIRECT: **Boleh ke Sylfirm X digunakan untuk jeragat pada kulit Asia?** |
| FAQ 7 "Why does melasma come back?" | kenapa jeragat datang balik, jeragat datang balik, jeragat berulang | all empty | DIRECT: **Kenapa jeragat datang balik selepas rawatan?** |
| FAQ 8 "Facial redness a sign of melasma?" | muka merah jeragat, kemerahan muka, jeragat merah | `kemerahan muka` → muka kemerahan kenapa, muka kemerahan dan gatal (MY); `jeragat merah` returns itself | KEYWORD (partial): **Muka kemerahan boleh jadi tanda jeragat ke?** |

**Malay tally (18 logged strings):** 10 KEYWORD, 8 DIRECT. CTA headings counted as DIRECT.

**Superlatives in AC, not used:** `rawatan jeragat paling berkesan`, `rawatan jeragat terbaik` (docs/18 §7.2). **Competitor names in AC, not used:** dr ko, hannan medispa.

## For the bilingual doctor-reviewer

1. **"Jeragat" vs melasma.** In everyday Malay, *jeragat* also covers freckles and general facial pigment (AC shows `jeragat vs pigmentasi`, `jeragat timbul`, `jeragat jenis melasma`). We follow docs/18 (*Jeragat (Melasma)*) and keep "melasma" in brackets in the name, H1, first section and FAQ 3. Is the plain *jeragat* in body copy precise enough on a page whose main point is "melasma is not sun spots"?
2. **"Mask of pregnancy"** is 孕斑 / 妊娠面具 in zh (孕斑 has AC demand) and *topeng kehamilan* in ms.
3. **FAQ 4 zh** uses 孕斑 as the lead term because that's the searched form. The bracket (怀孕时长的黄褐斑) keeps the meaning.
4. **Clinical terms:** 黑色素细胞 / *melanosit*; 光声 / *fotoakustik*; 脉冲波模式 / *mod gelombang berdenyut*; 黄体素 for progesterone; 荷尔蒙替代疗法 / *terapi penggantian hormon*; 玫瑰痤疮（酒糟）/ *rosacea*. Please confirm.
5. **Sylfirm X manufacturer positioning** is kept as the manufacturer's indication only (制造商…开发 / *dibangunkan oleh pengeluar*), as in EN.
6. **"Rebound"** is 反弹 (zh) and *melantun semula* (ms). Confirm *melantun semula* reads naturally to Malay patients, or prefer *menjadi lebih gelap semula*.
7. **ctaAssesses** is 你的色斑 / *pigmentasi anda* (EN "your pigmentation").

## Re-sync 2026-10-14 (English rewrite)

The English page was rewritten and the sync tool blanked 24 strings per locale. Every blank was filled; nothing else was changed.

### Chinese (`/zh`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| (none) | none run | No blank fell in the search-relevant scope: seoTitle, seoDescription, name, all headings, tab labels/titles, FAQ questions and CTA headings were unchanged and kept. The blanks are intros, step text and FAQ answers. `firstVisit.steps[2].title` "Discussion and plan" is a step label, not a heading or query. | n/a |

### Malay (`/ms`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| (none) | none run | Same as Chinese: no search-relevant blank. | n/a |

**Body blanks translated directly:** 24 zh, 24 ms (facts[2] value and label, sections[0].body[1], drivers/variant/seeDoctor/costFactors intros, locationBlock.note.body, facial-treatments body, treatmentsNote, firstVisit intro and steps, visit image caption, risks 0 and 1, technologyIntro, FAQ answers 1, 2, 3, 5, 6, 7). Where the new English is a shortened form of the old sentence, the old approved wording was kept and the dropped clauses removed, so no claim was added.

**Reviewer notes**

1. **"Discussion and plan"** = 讨论与计划 / *Perbincangan dan pelan* (was 讨论 / *Perbincangan*).
2. **"with no obligation to proceed"** = 你没有义务一定要进行疗程 / *tanpa sebarang kewajipan untuk meneruskan*.
3. **FAQ 5 answer:** "gentle skincare your doctor has cleared" = 医生认可的温和护肤品 / *penjagaan kulit lembut yang telah dibenarkan oleh doktor anda*.
4. **FAQ 3 answer** keeps *tompok matahari* for sun spots in Malay, matching the rest of this page (the pigmentation page uses English "sun spot").
5. **"Pricing"** = 价钱 / *Harga* (docs/18: MY Chinese writes 价钱).
