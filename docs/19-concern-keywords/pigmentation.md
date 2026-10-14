# 19. Concern keyword log: Pigmentation (`/concerns/pigmentation`)

**Date:** 2026-10-14 · Follows the pilot method in `acne.md`.
**Outputs:** `content/i18n/concerns/zh/pigmentation.json`, `content/i18n/concerns/ms/pigmentation.json` (same shape as the EN record).
**Inputs:** EN record for `pigmentation`, `docs/18-trilingual-keyword-map.md` §5 (display names: 色斑 / Pigmentasi; 黄褐斑 / Jeragat (Melasma)) and §7 (avoid list).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, with `hl=zh-CN` for Chinese and `hl=ms` for Malay. Same HAS VOLUME / NO VOLUME and KEYWORD / DIRECT rules as the pilot. Skew signs: *dcard / ptt / 雷射 / 肝斑* for Chinese, *bisa / karena / wajah / flek hitam / erha* for Malay.
- **Probes:** 116 zh and 120 ms, in two batches per language. Raw dumps are in the session scratchpad, not in the repo.
- **Scope:** only search-relevant strings are logged. All body copy is a direct, faithful translation.
- **No `seeDoctor.heading` in the source.** As with acne, the heading comes from shared UI (`content/i18n/concern-ui.ts`).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Pigmentation" | 色斑, 祛斑, 打斑, 长斑, 黑斑, 斑点 | `色斑` → 色斑怎么去除, 色斑成因, 色斑位置, 色斑是什么; `黑斑` and `斑点` are polluted (黑斑蚊, 斑点狗) | KEYWORD: **色斑** (docs/18 §5 confirmed) |
| **seoTitle** "Pigmentation Treatment Options in Malaysia \| Kaiteki" | 色斑治疗, 色斑治疗马来西亚, 色斑 马来西亚, 祛斑 马来西亚, 激光祛斑, 打斑价钱, 祛斑价钱 | `色斑治疗` and "+马来西亚" forms empty; `祛斑 马来西亚` → 马来西亚 祛斑 (产品); `激光祛斑` → 价格, 多久恢复, 后注意事项 | KEYWORD: **马来西亚色斑治疗与祛斑疗程选择 \| Kaiteki** (25 chars). 色斑 for the concern, 祛斑 for the treatment intent, 马来西亚 kept for geo. |
| **seoDescription** | (same family) | as above | KEYWORD: 黄褐斑, 晒斑, 炎症后色素沉着, 祛斑, 免费咨询 (81 chars) |
| sections[0].heading "What is pigmentation?" | 色斑是什么, 什么是色斑 | `色斑是什么` is in the `色斑` top 8 and returns itself | KEYWORD: **色斑是什么？** |
| drivers.heading "Common causes" | 色斑成因, 色斑的成因, 长斑原因, 为什么会长斑, 脸上长斑的原因, 色斑 原因 | `色斑成因` is in the `色斑` top 8; `长斑 原因`, `为什么会长斑`, `脸上长斑的原因` return; `色斑的成因` empty | KEYWORD: **色斑的常见成因** |
| jumpNav "What causes it" | as above | as above | KEYWORD: **色斑成因** |
| variant.heading "Which type do I have?" | 色斑种类, 色斑类型, 斑的种类, 脸上的斑有哪些种类, 脸上斑点 | `色斑 种类`, `斑的种类` return; `脸上斑点` → 脸上斑点种类; `色斑类型` empty | KEYWORD: **色斑种类：我属于哪一种？** |
| jumpNav "Which type do I have?" | as above | as above | KEYWORD: **色斑种类** |
| tab "Sun spots" / "Sun-related pigmentation" | 晒斑, 晒斑怎么去除, 老人斑, 雀斑, 晒斑 雀斑 | `晒斑` → 晒斑怎么去除, 晒斑会消失吗, 晒斑和黄褐斑的区别; `老人斑` → 怎么去除, 原因, 可以去除吗; `雀斑` → 雀斑是什么, 雀斑怎么去除 | KEYWORD: **晒斑** / **晒斑（日晒引起的色斑）**. Sub-items: 日光性雀斑样痣（老人斑）, 雀斑 |
| tab "Melasma" | 黄褐斑 | `黄褐斑` → 怎么去除, 是怎么形成的, 能去掉吗, 治疗, 和晒斑的区别 | KEYWORD: **黄褐斑** (docs/18 §5; never 肝斑) |
| tab "Post-inflammatory" / "Post-inflammatory hyperpigmentation" | 炎症后色素沉着, 色素沉着, 色素沉着是什么, 炎症后色素沉着怎么消, 反黑 | `炎症后色素沉着` → (pih), 治疗; `色素沉着` → 治疗 (plus medical noise); `反黑` alone is a TV show | KEYWORD: **炎症后色素沉着** / **炎症后色素沉着（PIH）** |
| locationBlock.heading "Where pigmentation appears" | 色斑位置, 脸颊长斑, 上唇长斑, 额头长斑, 鼻子长斑, 手上长斑, 脖子长斑 | `色斑位置` is in the `色斑` top 8; `脸颊长斑` → 原因, 怎么办; `额头长斑原因`, `手上长斑怎么办`, `脖子长斑点` return; `上唇长斑` empty | KEYWORD: **色斑位置：常长在哪里** |
| jumpNav "Where it appears" | as above | as above | KEYWORD: **色斑位置** |
| jumpNav "Treatments" | (pilot) | n/a | DIRECT: **疗程** |
| jumpNav "Risks" | (pilot) | n/a | DIRECT: **风险** |
| jumpNav "Cost" | 打斑价钱, 祛斑价钱, 激光祛斑 | `打斑价钱` returns; `激光祛斑价格` (价格 is the non-MY form; docs/18 §6: MY writes 价钱) | KEYWORD (term choice): **价钱** |
| jumpNav "FAQ" | (pilot) | n/a | DIRECT: **常见问题** |
| compare.columns "Downtime" | 激光祛斑恢复期 (empty); `激光祛斑` → 多久恢复 | carried from docs/18 §6 (医美恢复期) | KEYWORD: **恢复期** |
| compare.columns other three | n/a | n/a | DIRECT: 你的情况 / 常考虑的疗程 / 一般疗程安排 (pilot wording) |
| ctaMid.heading "Sun spots or melasma?" | 晒斑和黄褐斑的区别, 晒斑 黄褐斑 | both return | DIRECT (conversion copy): **是晒斑还是黄褐斑？** (uses the AC terms) |
| ctaHeading "Find out which type you have" | n/a | n/a | DIRECT: **了解你是哪一种色斑** |
| FAQ 1 "Difference between melasma and sun spots?" | 黄褐斑和晒斑的区别, 晒斑和黄褐斑的区别, 黄褐斑和雀斑的区别, 黄褐斑和色斑的区别 | the first three return themselves; `晒斑和黄褐斑的区别` is also in the `晒斑` and `黄褐斑` top 8 | KEYWORD: **黄褐斑和晒斑有什么区别？** |
| FAQ 2 "Can pigmentation be treated?" | 色斑可以去掉吗, 色斑能去除吗, 色斑可以去除吗, 斑可以去掉吗, 色斑怎么去除 | only `色斑怎么去除` (a how-to, removal framing) returns | DIRECT: **色斑可以治疗吗？** (去除/去掉 not used on purpose: it reads as a removal promise) |
| FAQ 3 "Why does pigmentation come back?" | 色斑会复发吗, 祛斑后会复发吗, 为什么斑会复发, 黄褐斑会复发吗, 打斑会复发吗, 激光祛斑会复发吗 | nothing | DIRECT: **为什么色斑会复发？** |
| FAQ 4 "Is laser safe for darker or Asian skin?" | 激光 深色皮肤, 亚洲人 激光, 激光 反黑, 打斑后反黑, 激光祛斑后反黑, 皮秒 反黑 | skin-tone forms empty; `激光反黑怎么办`, `打斑后反黑`, `激光祛斑后反黑期间` return; `打斑` → 打斑反黑怎么办 | KEYWORD: **肤色较深或亚洲人做激光安全吗？会反黑吗？** (pilot form; answer stays conditional) |
| FAQ 5 "Does sunscreen actually help pigmentation?" | 防晒霜可以淡斑吗, 防晒能淡斑吗, 防晒 淡斑, 防晒霜 色斑 | `防晒淡斑` returns (product-led: 妮维雅, 理肤宝水) | KEYWORD: **防晒真的有助淡斑吗？** |
| FAQ 6 "Treated during pregnancy?" | 怀孕长斑, 孕妇长斑, 怀孕可以打斑吗, 孕妇可以做激光吗, 怀孕长斑会消吗 | `怀孕长斑` → 怀孕长斑怎么办; `孕妇长斑` returns; treatment forms empty | KEYWORD: **怀孕期间长斑，可以治疗吗？** |
| FAQ 7 "Will over-the-counter brightening products work?" | 美白产品有用吗, 淡斑产品有用吗, 淡斑精华有用吗, 祛斑产品有用吗, 美白产品 | `美白产品有用吗` and `淡斑精华有用吗` return exactly | KEYWORD: **美白、淡斑产品有用吗？** |
| FAQ 8 "How many sessions will I need?" | 祛斑要做几次, 打斑要打几次, 激光祛斑要做几次, 激光祛斑几次, 皮秒几次有效 | `打斑要打几次` returns exactly; `皮秒几次有效` returns (treatment level) | KEYWORD: **打斑要做几次疗程？** |
| FAQ 9 "Does it get darker before it fades?" | 激光祛斑后变黑, 打斑后会变黑吗, 打斑后变黑, 激光祛斑后结痂 | nothing. The 反黑 forms are about PIH, a different thing, so they were not used here | DIRECT: **色斑会先变深，然后才变淡吗？** |
| FAQ 10 "Can I still use my retinol or acid products?" | 做激光可以用a醇吗, a醇 激光, 激光前停用a醇, 果酸 激光, 打斑 a醇, 维a酸 激光 | `a醇 激光` and `果酸 激光` return (hair-removal noise); the rest empty | KEYWORD (partial): **做激光期间还可以用A醇或果酸产品吗？** |
| FAQ 11 "What is post-inflammatory hyperpigmentation?" | 炎症后色素沉着, 色素沉着是什么 | `炎症后色素沉着` → (pih), 治疗 | KEYWORD: **炎症后色素沉着是什么？** |
| FAQ 12 "Hands, neck or chest?" | 手上长斑, 手上的斑, 脖子长斑, 脖子上的斑, 胸口长斑, 手部色斑, 颈部色斑 | `手上长斑` → 怎么办; `手上的斑` → 如何去除, 越来越多; `脖子长斑`, `胸口长斑` return; clinical 手部/颈部色斑 empty | KEYWORD: **手上、脖子或胸口长斑可以治疗吗？** |

**Chinese tally (33 logged strings):** 24 KEYWORD, 9 DIRECT. CTA headings counted as DIRECT.

**Not usable:** `色斑治疗马来西亚`, `色斑 马来西亚`, `祛斑价钱`, `手部色斑`, every 复发 form. `色斑雷射`, `脸上斑点雷射` and `晒斑会消失吗dcard` show Taiwan skew; 雷射 is never used. `祛斑最好的方法` appears in AC; the superlative is not used.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Pigmentation" | pigmentasi, pigmentasi muka, tompok hitam di muka | `pigmentasi` → pigmentasi kulit, maksud, muka, pigmentasi vs jeragat; `tompok hitam di muka` → punca, hilangkan, petua (MY) | KEYWORD: **Pigmentasi** (docs/18 §5) |
| **seoTitle** | rawatan pigmentasi, rawatan pigmentasi muka, rawatan pigmentasi malaysia, laser pigmentasi | `rawatan pigmentasi` → rawatan pigmentasi di muka, klinik rawatan pigmentasi kulit, rawatan laser untuk pigmentasi; "+malaysia" empty | KEYWORD: **Pilihan Rawatan Pigmentasi Muka di Malaysia \| Kaiteki** (53 chars) |
| **seoDescription** | (same family) + jeragat, hiperpigmentasi pasca radang, konsultasi percuma | as above | KEYWORD: jeragat, sun spot, hiperpigmentasi pasca-radang, pigmentasi muka, konsultasi percuma (149 chars) |
| sections[0].heading "What is pigmentation?" | apa itu pigmentasi, pigmentasi adalah | `apa itu pigmentasi` → pada wajah, kulit, abnormal (mixed MY/ID, query form is neutral) | KEYWORD: **Apa itu pigmentasi?** |
| drivers.heading "Common causes" | punca pigmentasi, punca pigmentasi muka, punca tompok hitam di muka, kenapa muka ada tompok hitam | `punca pigmentasi` → punca pigmentasi di muka, punca jeragat dan pigmentasi (MY: *punca*) | KEYWORD: **Punca biasa pigmentasi di muka** |
| jumpNav "What causes it" | as above | as above | KEYWORD: **Punca pigmentasi** |
| variant.heading "Which type do I have?" | jenis pigmentasi, jenis jeragat, jenis tompok hitam | `jenis pigmentasi` → jenis pigmentasi kulit, pigmentasi jenis jeragat; `jenis jeragat` → di muka, timbul, jeragat jenis melasma | KEYWORD: **Jenis pigmentasi: yang mana satu anda alami?** |
| jumpNav "Which type do I have?" | as above | as above | KEYWORD: **Jenis pigmentasi** |
| tab "Sun spots" / "Sun-related pigmentation" | bintik matahari, tompok matahari, sun spot, sun spot muka, jeragat matahari, bintik coklat di muka | `bintik matahari` → astronomy + Indonesian (karena, wajah); `tompok matahari` → astronomy (tingkatan 3, granul); `sun spot` → sun spots on face, sun spot vs dark spot, sun spots hyperpigmentation | KEYWORD: **Sun spot** / **Pigmentasi akibat matahari (sun spot)**. English kept: it is what Malay-session users type, and both Malay forms collide with astronomy |
| tab "Melasma" | jeragat, jeragat melasma, jeragat vs pigmentasi | `jeragat` → jeragat muka, jeragat melasma, jeragat dan melasma | KEYWORD: **Jeragat (melasma)** (docs/18 §5) |
| tab "Post-inflammatory" | hiperpigmentasi, hiperpigmentasi pasca radang, pih, kesan jerawat hitam | `hiperpigmentasi pasca radang` → adalah, pih; `pih` alone = pihak (noise) | KEYWORD: **Pasca-radang** / **Hiperpigmentasi pasca-radang (PIH)** (matches the acne pilot term) |
| freckles sub-item | freckles, freckles dalam bahasa melayu, beza jeragat dan freckles | `freckles` → freckles in malay, freckles tu apa; `beza jeragat dan freckles` returns | English **Freckles** kept (see reviewer note 2) |
| locationBlock.heading "Where pigmentation appears" | kedudukan jeragat, tompok hitam di pipi / dahi / hidung / tangan / leher, jeragat di pipi / atas bibir / dahi, pigmentasi tangan / leher | no location-level query (`kedudukan jeragat` empty); only per-zone forms return | DIRECT: **Di mana pigmentasi muncul** (per-zone terms used in card titles: pipi, atas bibir, dahi, hidung, leher, tangan) |
| jumpNav "Where it appears" | as above | as above | DIRECT: **Di mana ia muncul** |
| jumpNav "Treatments" | rawatan pigmentasi | strong | KEYWORD (term): **Rawatan** |
| jumpNav "Risks" | n/a | n/a | DIRECT: **Risiko** |
| jumpNav "Cost" | kos rawatan pigmentasi, kos rawatan jeragat, harga rawatan jeragat | `kos rawatan pigmentasi` → kos rawatan laser pigmentasi; `kos rawatan jeragat` returns | KEYWORD: **Kos** |
| jumpNav "FAQ" | n/a | n/a | DIRECT: **Soalan lazim** |
| compare.columns "Downtime" | (docs/18 §6) | carried | KEYWORD: **Downtime** |
| compare.columns other three | n/a | n/a | DIRECT: Masalah anda / Biasa dipertimbangkan / Kursus biasa (pilot wording) |
| ctaMid.heading "Sun spots or melasma?" | n/a | n/a | DIRECT: **Sun spot atau jeragat?** |
| ctaHeading | n/a | n/a | DIRECT: **Ketahui jenis pigmentasi anda** |
| FAQ 1 "Difference between melasma and sun spots?" | beza jeragat dan pigmentasi, beza jeragat dan freckles, pigmentasi vs jeragat, jeragat dan bintik matahari, beza jeragat dan tompok hitam | `beza jeragat dan pigmentasi`, `beza jeragat dan freckles`, `pigmentasi vs jeragat` return | KEYWORD: **Apa beza jeragat (melasma) dan sun spot?** |
| FAQ 2 "Can pigmentation be treated?" | pigmentasi boleh hilang ke, pigmentasi boleh dirawat, pigmentasi boleh hilang, cara rawat pigmentasi, tompok hitam boleh hilang ke | all empty (`jeragat boleh hilang ke` returns, but that is melasma only) | DIRECT: **Pigmentasi boleh dirawat ke?** |
| FAQ 3 "Why does pigmentation come back?" | pigmentasi datang balik, jeragat datang balik, kenapa jeragat datang balik, pigmentasi kembali | nothing | DIRECT: **Kenapa pigmentasi datang balik?** |
| FAQ 4 "Laser safe for darker or Asian skin?" | laser kulit gelap, pigmentasi kulit gelap | `laser kulit gelap` returns (also docs/18 §6) | KEYWORD: **Rawatan laser selamat ke untuk kulit gelap, sawo matang atau kulit Asia?** (pilot form) |
| FAQ 5 "Does sunscreen help?" | sunscreen untuk pigmentasi, sunscreen untuk jeragat, sunblock untuk jeragat, sunscreen boleh hilangkan jeragat | `sunscreen untuk pigmentasi` and `sunscreen boleh hilangkan jeragat` return; `sunscreen untuk jeragat` strong (Watson, MY) | KEYWORD: **Sunscreen betul-betul membantu pigmentasi ke?** ("hilangkan" deliberately not used) |
| FAQ 6 "Treated during pregnancy?" | jeragat semasa mengandung, jeragat ibu mengandung, pigmentasi semasa hamil, laser semasa mengandung, mengandung boleh buat laser | nothing | DIRECT: **Boleh ke rawat pigmentasi semasa mengandung?** |
| FAQ 7 "Over-the-counter brightening products?" | krim pigmentasi, krim jeragat, krim jeragat berkesan, produk pencerah, produk pencerah kulit, krim pencerah berkesan ke | `krim pigmentasi` → krim untuk hilangkan pigmentasi; `krim jeragat` → di watson, di farmasi, lulus kkm; `krim jeragat berkesan` returns; `produk pencerah` strong | KEYWORD: **Krim pencerah atau krim pigmentasi yang dijual di kedai berkesan ke?** (the AC "terbaik / paling berkesan" forms are not used) |
| FAQ 8 "How many sessions?" | berapa sesi laser pigmentasi, laser jeragat berapa kali, berapa sesi pico laser, pico laser berapa kali | only treatment-level `pico laser berapa kali` returns (Indonesian-leaning: harus, flek hitam) | DIRECT: **Perlu buat berapa sesi?** |
| FAQ 9 "Darker before it fades?" | laser jeragat jadi gelap, pigmentasi jadi gelap selepas laser, selepas laser muka jadi gelap, muka gelap selepas laser, lepas laser muka hitam | nothing | DIRECT: **Adakah pigmentasi jadi lebih gelap dahulu sebelum pudar?** |
| FAQ 10 "Retinol or acid products?" | retinol sebelum laser, retinol dan laser, retinol boleh pakai lepas laser, aha bha selepas laser | nothing relevant (`pantang selepas laser muka` exists, but it is a different question) | DIRECT: **Masih boleh guna produk retinol atau asid saya?** |
| FAQ 11 "What is PIH?" | hiperpigmentasi pasca radang, hiperpigmentasi pasca radang adalah | returns (+ adalah, pih) | KEYWORD: **Apa itu hiperpigmentasi pasca-radang (PIH)?** |
| FAQ 12 "Hands, neck or chest?" | pigmentasi tangan, pigmentasi pada tangan, pigmentasi leher, pigmentasi dada, tompok hitam di tangan / leher / dada | `pigmentasi tangan` → di tangan, pada kulit tangan; `pigmentasi di leher`, `tompok hitam di dada` return | KEYWORD: **Pigmentasi di tangan, leher atau dada boleh dirawat ke?** |

**Malay tally (33 logged strings):** 20 KEYWORD, 13 DIRECT. CTA headings counted as DIRECT; the freckles row is a term check and isn't counted.

**Indonesian pollution seen and avoided:** bintik matahari (karena, wajah), bintik hitam di muka (orang bule, namanya apa), pigmentasi kulit wajah, laser pigmentasi erha, pico laser harus berapa kali / flek hitam, sunscreen wardah. **Superlatives seen and avoided:** krim jeragat terbaik / paling berkesan, sunscreen terbaik.

## For the bilingual doctor-reviewer

1. **Solar lentigines** = 日光性雀斑样痣（老人斑） / *lentigo solar*. 日光性雀斑样痣 is the standard Chinese clinical term; 老人斑 is the AC-backed everyday gloss. Please confirm 老人斑 isn't too ageing-negative for the brand.
2. **Freckles in Malay.** Everyday Malaysian usage spreads *jeragat* over both melasma and freckles (AC `beza jeragat dan freckles`). docs/18 fixes *jeragat* = melasma, so freckles stay in English. Confirm, or supply a Malay term you prefer.
3. **"Sun spot" stays English in Malay.** Both *bintik matahari* and *tompok matahari* autocomplete to astronomy (and *bintik* to Indonesian). Confirm.
4. **"Melasma is managed, not cured"** = 黄褐斑只能控制，不能治愈 / *Jeragat dikawal, bukan disembuhkan*. 根治 was avoided, because the lint bans it even when negated.
5. **"Mask of pregnancy"** = 妊娠斑 / *topeng kehamilan*.
6. **FAQ 8 (zh) uses colloquial 打斑** (`打斑要打几次`). Is the register acceptable on a doctor-reviewed page?
7. **FAQ 10 (zh) names A醇 and 果酸** (product classes, as searched). Retinoids in the body = A醇等A酸类产品. Malay keeps *retinoid*.
8. **Wood's lamp** = 伍德灯（Wood's lamp） / *lampu Wood*.
9. **FAQ 5 (zh):** "the single most consistent thing you can do" = 在你能做的事情里，防晒是效果最稳定的一项. The 最 is about sunscreen, not about the clinic. Please confirm it reads as advice, not as a claim.
10. **The FAQ 4 answer** starts 可以，前提是… / *Ya, jika…*, like the pilot. Neither locale says "safe" without the condition.
11. **Before/after captions** follow the pilot: 疗程之前与之后 / *sebelum dan selepas*.

## Re-sync 2026-10-14 (English rewrite)

The English page was rewritten and the sync tool blanked 29 strings per locale. Every blank was filled; nothing else was changed.

### Chinese (`/zh`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| (none) | none run | No blank fell in the search-relevant scope: seoTitle, seoDescription, name, jumpNav, all headings, tab labels/titles, compare columns, FAQ questions and CTA headings were unchanged and kept. The blanks are leadAnswer, banner alt, intros, body text and FAQ answers. `firstVisit.steps[2].title` "Discussion and plan" is a step label, not a heading or query. | n/a |

### Malay (`/ms`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| (none) | none run | Same as Chinese: no search-relevant blank. | n/a |

**Body blanks translated directly:** 29 zh, 29 ms (leadAnswer, banner.alt, sections[0].body[0], drivers/variant/seeDoctor/costFactors/compare/treatments intros, melasma tab routing, PIH tab body, ctaMid.body, vascular-pigment and facial-treatments bodies, firstVisit intro and steps, risks 2, technologyIntro, FAQ answers 1, 2, 3, 6, 7, 8, 9, 10, 12). Where the new English is a shortened form of the old sentence, the old approved wording was kept and the dropped clauses removed, so no claim was added.

**Reviewer notes**

1. **leadAnswer** uses the existing display terms: 晒斑 / 黄褐斑 / 炎症后留下的痕迹 and *sun spot* / *jeragat (melasma)* / *tanda pasca-radang*. "sun spots are often treated with pico laser" = 晒斑常用皮秒激光处理 / *sun spot sering dirawat dengan pico laser* (a description of practice, not an outcome).
2. **FAQ 2 answer:** "Melasma is managed rather than resolved" = 黄褐斑以控制为主，难以消除 / *Jeragat dikawal, bukan dihapuskan* (old approved wording kept).
3. **Melasma tab routing** now points readers to the melasma page: 完整说明请看黄褐斑页面 / *Lihat halaman jeragat untuk gambaran penuh*.
4. **"Discussion and plan"** = 讨论与计划 / *Perbincangan dan pelan*; "no obligation to proceed" as on the melasma page.
5. **technologyIntro (zh)** keeps 最为关键 from the old approved text; the 最 describes device choice, not the clinic.
