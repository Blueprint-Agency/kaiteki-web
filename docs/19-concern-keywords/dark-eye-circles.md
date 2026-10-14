# 19. Concern keyword log: Dark Eye Circles (`/concerns/dark-eye-circles`)

**Date:** 2026-10-14 · Follows the method of the pilot (`acne.md`).
**Outputs:** `content/i18n/concerns/zh/dark-eye-circles.json`, `content/i18n/concerns/ms/dark-eye-circles.json` (same shape as the EN record).
**Inputs:** EN record for `dark-eye-circles`, `docs/18-trilingual-keyword-map.md` §5 (display names), §6 and §7 (avoid list).

## Method

Same as the pilot. Google Autocomplete (free) at `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. **HAS VOLUME** = the phrase or a natural Malaysian form shows up with Malaysian context (or at least without a Taiwan/HK/Indonesia skew). **KEYWORD** = string phrased around the real query, English meaning kept. **DIRECT** = faithful translation, no invented keyword.

- **Probes:** 92 zh and 71 ms, in two batches per language. Raw output is in the session scratchpad, not in the repo.
- **Scope:** only search-relevant strings are logged. All body copy is a direct, faithful translation.
- **No `seeDoctor.heading` in the source.** As with acne, that H2 comes from `content/i18n/concern-ui.ts`, as do the risks, cost, FAQ and first-visit H2s.
- **Skew to note:** Chinese 黑眼圈 autocomplete is heavily Taiwanese (dcard / ptt / 雷射 / 新竹 / 台中). Malay *mata panda* autocomplete is heavily Indonesian (*padahal, begadang, bisa, ampuh, karena*). *Lingkaran gelap bawah mata* is the clean Malaysian form.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Dark Eye Circles" | 黑眼圈, 熊猫眼 | `黑眼圈` → 黑眼圈的原因, 黑眼圈怎么消除, 黑眼圈很深; `熊猫眼` is noise (表情包, 脑出血) | KEYWORD: **黑眼圈** (docs/18 §5 confirmed) |
| **seoTitle** "Dark Eye Circle Treatment Assessment in Malaysia \| Kaiteki" | 黑眼圈治疗, 黑眼圈 医美, 去黑眼圈医美, 黑眼圈 马来西亚, 黑眼圈激光, 黑眼圈 疗程 | `黑眼圈治疗` → 黑眼圈治疗方法, 黑眼圈治疗费用, 黑眼圈治疗 医美 (TW noise too); `+马来西亚` empty | KEYWORD: **马来西亚黑眼圈治疗评估 \| Kaiteki** (21 chars). 马来西亚 kept for the EN geo intent, as in the pilot. |
| **seoDescription** | (same family) + 泪沟 | `泪沟` → 泪沟是什么, 泪沟怎么消除, 泪沟和眼袋的区别 | KEYWORD: 黑眼圈的原因, 类型, 泪沟, 免费咨询 (75 chars) |
| sections[0].heading "What causes dark eye circles?" | 黑眼圈原因, 黑眼圈成因, 黑眼圈形成原因, 为什么会有黑眼圈, 黑眼圈是什么原因 | `黑眼圈的原因` is the 3rd suggestion for `黑眼圈`; `黑眼圈原因` → 睡眠 / 中醫; `为什么会有黑眼圈` returns itself; `黑眼圈是什么原因` empty | KEYWORD: **黑眼圈的原因：为什么会有黑眼圈？** |
| drivers.heading "Common causes" | 黑眼圈成因, 黑眼圈 过敏, 黑眼圈 遗传 | `黑眼圈 成因` returns (中医 noise); `黑眼圈遗传`, `黑眼圈 过敏` (→ 过敏性鼻炎, 原因) return | KEYWORD: **黑眼圈的常见成因** |
| jumpNav "What causes it" | as above | as above | KEYWORD: **黑眼圈原因** |
| variant.heading "Which type do I have?" | 黑眼圈种类, 黑眼圈类型, 黑眼圈分类, 黑眼圈有几种, 怎么判断黑眼圈类型 | `黑眼圈类型` → 黑眼圈类型 分辨, 遮瑕; `黑眼圈种类` → 遮瑕; `怎么判断黑眼圈类型` returns itself | KEYWORD: **黑眼圈类型：我属于哪一种？** |
| jumpNav "Which type do I have?" | as above | as above | KEYWORD: **黑眼圈类型** |
| tab "Pigment" / "Pigmented circles" | 色素型黑眼圈, 褐色黑眼圈, 咖啡色黑眼圈, 眼周色素 | `色素型黑眼圈` → 改善, 怎么消, 医美, 遮瑕 (strong; some dcard) | KEYWORD: **色素型** / **色素型黑眼圈** |
| tab "Vascular" / "Vascular circles" | 血管型黑眼圈, 青色黑眼圈 | `血管型黑眼圈` → 医美, 治疗, 遮瑕 (strong; some dcard) | KEYWORD: **血管型** / **血管型黑眼圈** |
| tab "Structural" / "Structural circles" | 结构型黑眼圈, 泪沟, 泪沟 黑眼圈, 眼下凹陷 | `结构型黑眼圈` → 改善, 原因, 医美, 治疗; `泪沟 黑眼圈` → 分别, 改善, 医美; `眼下凹陷` → 怎么办, 医美, 填充 | KEYWORD: **结构型** / **结构型黑眼圈（泪沟凹陷）** |
| tab "Mixed" / "Mixed circles" | 混合型黑眼圈 | returns itself + 遮瑕 | KEYWORD: **混合型** / **混合型黑眼圈** |
| locationBlock.heading "Where the darkness sits" | 黑眼圈 位置, 眼头黑眼圈, 内眼角黑眼圈, 眼尾黑眼圈, 下眼睑 黑眼圈 | each returns only itself (`内眼角黑眼圈` empty); no query form like the pilot's 暗疮位置代表 | DIRECT: **黑眼圈出现在哪个位置** (card titles use 眼头 / 眼尾, which do have AC) |
| jumpNav "Where it sits" | as above | as above | DIRECT: **位置** |
| jumpNav "Treatments" | 黑眼圈 疗程 | `黑眼圈疗程` → lihkg, 韩国 | DIRECT: **疗程** |
| jumpNav "Risks" | 黑眼圈 风险, 黑眼圈 激光 风险, 黑眼圈 后遗症 | only `黑眼圈 医美 后遗症` | DIRECT: **风险** |
| jumpNav "Cost" | 黑眼圈 价钱, 黑眼圈 价格, 黑眼圈 多少钱, 黑眼圈 治疗 价钱 | `黑眼圈 价钱` → **医美 黑眼圈 价钱** (MY spelling); `价格` forms are TW (雷射) | KEYWORD (term choice): **价钱** |
| jumpNav "FAQ" | 黑眼圈 常见问题 | nothing | DIRECT: **常见问题** |
| compare.columns "Downtime" | 黑眼圈 恢复期, 泪沟填充 恢复期 (+ docs/18 §6 医美恢复期) | concern forms empty; carried from docs/18 | KEYWORD: **恢复期** |
| compare.columns other three | n/a | n/a | DIRECT: 你的情况 / 常考虑的疗程 / 一般疗程安排 |
| ctaMid.heading "Pigment, vessels or shadow?" | n/a (conversion copy) | n/a | DIRECT: 是色素、血管，还是阴影？ |
| ctaHeading "Find out which type you have" | n/a (conversion copy) | n/a | DIRECT: 了解你属于哪一种黑眼圈 |
| FAQ 1 "Are dark circles caused by lack of sleep?" | 黑眼圈 熬夜, 睡眠不足 黑眼圈, 黑眼圈是熬夜造成的吗 | `黑眼圈 熬夜` → 熬夜 黑眼圈 原因; `睡眠不足黑眼圈` returns; question form empty | KEYWORD: **黑眼圈是熬夜、睡眠不足造成的吗？** |
| FAQ 2 "How do I tell which type I have?" | 怎么判断黑眼圈类型, 怎么知道自己是什么黑眼圈 | first returns itself; `黑眼圈类型 分辨` | KEYWORD: **怎么判断自己的黑眼圈类型？** |
| FAQ 3 "Do eye creams work?" | 眼霜 黑眼圈, 眼霜有用吗, 眼霜可以去黑眼圈吗 | `眼霜有用吗` → **黑眼圈 眼霜有用吗** (dcard/ptt noise on the bare form) | KEYWORD: **眼霜对黑眼圈有用吗？** |
| FAQ 4 "Is filler under the eyes safe?" | 泪沟填充, 泪沟填充安全吗, 泪沟玻尿酸, 泪沟玻尿酸 风险, 眼下 玻尿酸 | `泪沟填充` → 副作用, 价格 (lihkg/dcard noise); `泪沟玻尿酸` → 后遗症, 失败, 移位; `眼下 玻尿酸` → 风险, 瘀青; "安全吗" form empty | KEYWORD: **泪沟填充安全吗？有什么风险？** (玻尿酸 not used: copy says 填充剂, as EN says "filler"; the answer stays conditional) |
| FAQ 5 "Will treatment get rid of them completely?" | 黑眼圈能消除吗, 黑眼圈会消失吗, 黑眼圈可以根除吗, 黑眼圈可以去掉吗 | first two return themselves; 根除 / 去掉 empty | KEYWORD: **黑眼圈能完全消除吗？** (the answer opens 很少能) |
| FAQ 6 "Does rubbing my eyes make dark circles worse?" | 揉眼睛 黑眼圈, 揉眼睛会黑眼圈吗, 过敏性黑眼圈 | `揉眼睛 黑眼圈` returns itself; `过敏性黑眼圈` strong | KEYWORD (weak): **揉眼睛会让黑眼圈加深吗？** |
| FAQ 7 "Can dark circles be treated during pregnancy?" | 怀孕 黑眼圈, 孕妇 黑眼圈, 黑眼圈 哺乳 | first two return themselves; 哺乳 empty | KEYWORD (weak): **怀孕期间可以治疗黑眼圈吗？** |
| FAQ 8 "Why do my dark circles look worse in photos?" | 拍照 黑眼圈, 黑眼圈 拍照 明显 | nothing | DIRECT: **为什么黑眼圈在照片里看起来更明显？** |
| FAQ 9 "Is there any downtime?" | 黑眼圈 恢复期 (+ docs/18 §6) | concern form empty; docs/18 pattern | KEYWORD (pattern): **有恢复期吗？** |
| FAQ 10 "Can men have this treated?" | 男生黑眼圈, 男士黑眼圈 | `男生黑眼圈` → 改善, 遮瑕 (dcard); `男士黑眼圈` returns | KEYWORD: **男生的黑眼圈也可以治疗吗？** |
| FAQ 11 "Will they come back after treatment?" | 黑眼圈会复发吗 | nothing | DIRECT: **治疗后黑眼圈会再出现吗？** |
| FAQ 12 "Should I just use concealer?" | 遮瑕 黑眼圈, 黑眼圈遮瑕 | `黑眼圈遮瑕` → 推荐, 颜色怎么选 (dcard/ptt noise) | KEYWORD: **直接用遮瑕膏遮黑眼圈就好吗？** |

**Chinese tally (34 logged strings):** 24 KEYWORD, 10 DIRECT. CTA headings are counted as DIRECT.

**Not usable:** every "+马来西亚" form, `黑眼圈 激光 价钱`, `黑眼圈 多少钱`, `眼周 射频`, `单边黑眼圈`. `黑眼圈 看哪科` returns, but the answer would be a dermatology referral question, not this page's intent.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Dark Eye Circles" | lingkaran gelap bawah mata, lingkaran gelap, lingkaran hitam bawah mata, mata panda | `lingkaran gelap bawah mata` → punca, rawatan, krim, hilangkan, in english (MY); `lingkaran hitam` → *dalam bahasa inggris, cara menghilangkan* (ID); `mata panda` mixed/ID | KEYWORD: **Lingkaran Gelap Bawah Mata** (docs/18 §5 confirmed) |
| **seoTitle** | rawatan lingkaran gelap bawah mata, laser lingkaran gelap bawah mata, kos rawatan lingkaran gelap bawah mata | `rawatan lingkaran gelap bawah mata` returns itself and sits in the head-term list; `+kos` empty | KEYWORD: **Rawatan Lingkaran Gelap Bawah Mata di Malaysia \| Kaiteki** (56 chars; "assessment" dropped for length, the description carries it) |
| **seoDescription** | (same family) + konsultasi percuma | as above | KEYWORD: punca lingkaran gelap bawah mata, doktor, konsultasi percuma (157 chars) |
| sections[0].heading "What causes dark eye circles?" | punca lingkaran gelap bawah mata, sebab lingkaran gelap bawah mata, kenapa ada lingkaran gelap bawah mata, punca mata panda | `punca …` is in the head-term list and returns itself; `sebab …` returns; `kenapa ada …` empty | KEYWORD: **Apa punca lingkaran gelap bawah mata?** |
| drivers.heading "Common causes" | as above | as above | KEYWORD: **Punca lingkaran gelap yang biasa** |
| jumpNav "What causes it" | as above | as above | KEYWORD: **Punca** |
| variant.heading "Which type do I have?" | jenis lingkaran gelap bawah mata, jenis mata panda | first empty; `jenis mata panda` → *ada berapa jenis mata panda* plus drawing-perspective noise | DIRECT: **Jenis yang mana satu anda alami?** |
| jumpNav "Which type do I have?" | as above | as above | DIRECT: **Jenis yang mana?** |
| tab "Pigment" | lingkaran gelap bawah mata pigmentasi, …genetik, …keturunan | all empty | DIRECT: **Pigmen** / **Lingkaran gelap berpigmen** |
| tab "Vascular" | (no Malay "vaskular" form found) | n/a | DIRECT: **Vaskular** / **Lingkaran gelap vaskular** |
| tab "Structural" | lekuk bawah mata, mata cengkung, bawah mata cengkung, tear trough | `lekuk bawah mata` → cara hilangkan; `mata cengkung` → punca, rawatan, in english (MY); `tear trough` English-led | KEYWORD: **Struktur** / **Lingkaran gelap struktur (lekuk bawah mata)** |
| tab "Mixed" | n/a | n/a | DIRECT: **Campuran** / **Lingkaran gelap campuran** |
| locationBlock.heading "Where the darkness sits" | lingkaran gelap di hujung mata, lingkaran gelap tepi hidung, lingkaran gelap sekeliling mata | first two empty; `lingkaran gelap sekeliling mata` only appears as a sibling suggestion | DIRECT: **Di mana kegelapan itu terletak** |
| jumpNav "Where it sits" | as above | as above | DIRECT: **Kedudukannya** |
| jumpNav "Treatments" | rawatan lingkaran gelap bawah mata, laser bawah mata | `laser bawah mata` → rawatan laser bawah mata, harga | KEYWORD (term): **Rawatan** |
| jumpNav "Risks" | risiko laser bawah mata, risiko filler bawah mata | empty | DIRECT: **Risiko** |
| jumpNav "Cost" | kos rawatan lingkaran gelap bawah mata, harga rawatan mata panda, kos laser bawah mata, harga laser bawah mata | only `harga laser bawah mata` returns; docs/18 §6 uses *kos* for the question | KEYWORD (term, docs/18 §6): **Kos** |
| jumpNav "FAQ" | n/a | n/a | DIRECT: **Soalan lazim** |
| compare.columns "Downtime" | downtime filler bawah mata, filler bawah mata downtime (+ docs/18 §6) | concern forms empty; carried from docs/18 | KEYWORD: **Downtime** |
| compare.columns other three | n/a | n/a | DIRECT: Masalah anda / Biasa dipertimbangkan / Kursus biasa |
| ctaMid.heading | n/a | n/a | DIRECT: Pigmen, saluran darah atau bayang-bayang? |
| ctaHeading | n/a | n/a | DIRECT: Ketahui jenis yang anda alami |
| FAQ 1 "Caused by lack of sleep?" | mata panda kurang tidur, lingkaran gelap bawah mata kurang tidur | `mata panda kurang tidur` → in english, cara hilang (MY) but also *karena*, *penyebab* (ID); lingkaran form empty | KEYWORD: **Lingkaran gelap bawah mata (mata panda) berpunca daripada kurang tidur ke?** (*mata panda* as a bracket gloss only) |
| FAQ 2 "How do I tell which type?" | jenis lingkaran gelap bawah mata | empty | DIRECT: **Macam mana nak tahu jenis yang saya alami?** |
| FAQ 3 "Do eye creams work?" | krim mata, krim mata berkesan ke, eye cream berkesan ke, krim lingkaran gelap bawah mata, krim mata panda | `krim lingkaran gelap bawah mata` returns; `krim mata` → *terbaik* (superlative, avoided); `krim mata panda` is ID (*ampuh, wardah, indomaret*) | KEYWORD: **Krim mata untuk lingkaran gelap berkesan ke?** |
| FAQ 4 "Is filler under the eyes safe?" | filler bawah mata, filler bawah mata bahaya, filler bawah mata selamat ke, tear trough filler | `filler bawah mata` → *apakah aman, butuh* (ID) plus *tahan berapa lama*; `bahaya filler bawah mata` returns | KEYWORD: **Filler bawah mata selamat ke? Ada bahayanya?** (answer stays conditional) |
| FAQ 5 "Get rid of them completely?" | lingkaran gelap bawah mata boleh hilang ke, mata panda boleh hilang ke, hilangkan lingkaran gelap bawah mata | "boleh hilang" forms empty; `hilangkan lingkaran gelap bawah mata` → petua, krim (MY) | KEYWORD: **Adakah rawatan boleh hilangkan lingkaran gelap sama sekali?** (answer opens *Jarang sekali*) |
| FAQ 6 "Does rubbing make it worse?" | gosok mata, gosok mata lingkaran gelap | `gosok mata` → sampai bengkak, sampai merah (different intent); combined empty | DIRECT: **Gosok mata boleh buat lingkaran gelap lebih teruk ke?** |
| FAQ 7 "During pregnancy?" | lingkaran gelap bawah mata mengandung, …ibu mengandung, mata panda mengandung | all empty | DIRECT: **Boleh ke rawat lingkaran gelap semasa mengandung?** |
| FAQ 8 "Worse in photos?" | lingkaran gelap bawah mata dalam gambar, mata panda gambar | gambar forms are cartoon/animal images | DIRECT: **Kenapa lingkaran gelap nampak lebih teruk dalam gambar?** |
| FAQ 9 "Is there any downtime?" | (docs/18 §6: pico laser ada downtime, pantang) | carried from docs/18 | KEYWORD (pattern): **Ada downtime?** |
| FAQ 10 "Can men have this treated?" | lingkaran gelap bawah mata lelaki, mata panda lelaki | `mata panda lelaki` returns itself; lingkaran form empty | KEYWORD (weak): **Lelaki pun boleh rawat lingkaran gelap (mata panda) ke?** |
| FAQ 11 "Will they come back?" | lingkaran gelap bawah mata datang balik | empty | DIRECT: **Adakah ia akan datang balik selepas rawatan?** |
| FAQ 12 "Should I just use concealer?" | concealer lingkaran gelap, concealer mata panda | `concealer mata panda` → *yang bagus, terbaik, rekomendasi* (ID + superlative) | DIRECT: **Patutkah saya guna concealer sahaja?** |

**Malay tally (34 logged strings):** 16 KEYWORD, 18 DIRECT. CTA headings are counted as DIRECT.

**Indonesian pollution seen and avoided:** lingkaran hitam bawah mata (*bahasa inggris, cara menghilangkan*), mata panda (*padahal, begadang, bisa, ampuh, karena*), filler bawah mata (*apakah aman, butuh*), krim mata panda (*wardah, indomaret*), concealer mata panda (*rekomendasi*), mata panda sebelah (*cara mengatasi*).

## For the bilingual doctor-reviewer

1. **Type labels 色素型 / 血管型 / 结构型 / 混合型** follow the AC-backed Chinese naming (strong demand, though Taiwan-leaning). Malay uses *berpigmen / vaskular / struktur / campuran*, with no AC for any of them; please confirm *vaskular* reads naturally to lay readers.
2. **泪沟 / tear trough.** zh uses 泪沟 (strong AC) for the groove. ms keeps "tear trough" in one card body and uses *lekuk bawah mata* elsewhere. Please confirm.
3. **Filler naming.** zh uses 填充剂 and the FAQ asks about 泪沟填充. **玻尿酸 (hyaluronic acid) is not used** even though AC is strong, because EN says "filler" and naming the substance is a product claim. ms keeps "filler" (English, as Malaysians search it).
4. **"Permanent options" (risks, injectables).** Rendered as 不可溶解的产品 / *produk yang tidak boleh dilarutkan*, to keep 永久 / *kekal* out. The meaning is the same (non-dissolvable fillers); please confirm.
5. **"Sleep does not cure dark circles."** zh renders it 睡眠不能让黑眼圈消失, because 根治 is on the banned list. ms keeps *tidak menyembuhkan* (negated).
6. **Allergic rhinitis.** ms adds *resdung* as the everyday word (*alahan hidung (resdung)*, *resdung (rinitis alahan)*); zh uses 鼻敏感 / 过敏性鼻炎. Both have MY usage.
7. **Vascular occlusion** is rendered 血管栓塞 / *oklusi vaskular (sumbatan saluran darah)*.
8. **FAQ 4 (filler safety)** keeps the EN conditional ("in experienced hands"). Neither locale says safe flatly.

No L-03r warnings were raised on these files.

## Re-sync 2026-10-14 (English rewrite)

The English page was rewritten upstream; the sync tool kept every unchanged translation and blanked 29 strings per locale. Only one blank is search-relevant: `sections[0].heading`, now "What are dark eye circles?". The old "What causes…" wording moved to `drivers.heading`, whose existing KEYWORD translation (黑眼圈的原因… / *Apa punca…*) was kept by the sync, so the new heading targets the definitional query instead.

### Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| sections[0].heading "What are dark eye circles?" | 黑眼圈是什么, 什么是黑眼圈, 黑眼圈是, 黑眼圈 是什么原因 | `黑眼圈是什么` returns itself and sits in the `黑眼圈是` list (→ 怎么形成的, 怎么回事, 黑色素吗, 天生的吗); `什么是黑眼圈` and `黑眼圈 是什么原因` empty | KEYWORD: **黑眼圈是什么？** |

### Malay (`/ms`, `hl=ms&gl=my`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| sections[0].heading "What are dark eye circles?" | apa itu lingkaran gelap bawah mata, apa itu lingkaran gelap, lingkaran gelap bawah mata adalah, apa itu mata panda | all lingkaran forms empty; `apa itu mata panda` returns itself, but the rest of that list is drawing-perspective noise (*sudut pandang mata burung*), and *mata panda* is Indonesian-skewed (see above) | DIRECT: **Apa itu lingkaran gelap bawah mata?** (keeps the locked head term) |

**Body blanks translated directly:** 28 zh, 28 ms (leadAnswer, banner.alt, section body, drivers.outro, variant intro and tabs[2].body, locationBlock.intro, seeDoctor intro/outro, ctaMid.body, treatmentsIntro, compare.intro, firstVisit intro and steps[1]/[2], risks intro and items[3], costFactors.intro, technologyIntro, FAQ answers 3, 4, 5, 6, 7, 9, 11, 12). Most are the old translation trimmed to the shorter English; no claims added.

**Reviewer notes**

1. FAQ 5 answer opens 很少能 / *Jarang sekali*. The old caution clause ("anyone promising that should be treated with caution") was dropped upstream and is not carried over.
2. leadAnswer renders "volume support" as 填充支撑 / *sokongan isi padu*, matching the tabs and compare table; 玻尿酸 is still not used.
3. risks.items[3] keeps 睡眠不能让黑眼圈消失 (not 根治) and *tidak menyembuhkan* (negated), as before.

No L-03r warnings were raised on these files.
