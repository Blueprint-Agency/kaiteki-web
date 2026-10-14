# 19. Concern keyword log: Vascular lesions (`/concerns/vascular-lesions`)

**Date:** 2026-10-14 · Follows the pilot method in `acne.md`.
**Outputs:** `content/i18n/concerns/zh/vascular-lesions.json`, `content/i18n/concerns/ms/vascular-lesions.json` (same shape as the EN record).
**Inputs:** EN record for `vascular-lesions`, `docs/18-trilingual-keyword-map.md` §7 (avoid list). **This concern is not in docs/18 §5**, so the display name was researched here (see the first row of each table).

## Method

Same as the pilot (`acne.md` §Method): Google Autocomplete as the volume proxy (`client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`); **KEYWORD** when a relevant, non-skewed suggestion exists and the string is phrased around it with the English meaning kept; **DIRECT** when nothing relevant comes back.

- **Probes:** 99 zh and 87 ms, in four batches. Raw dumps are in the session scratchpad, not in the repo.
- **Scope:** search-relevant strings only. Body copy is a direct, faithful translation.
- **This record does have `seeDoctor.heading`.** It's logged below and matches `concern-ui.ts` (什么时候应该看医生 / Bila perlu berjumpa doktor). There is no `compare` block.

## Display name research

| | Candidates probed | Evidence | Chosen |
|---|---|---|---|
| zh | 血管问题, 血管性病变, 血管病变 皮肤, 红血丝, 脸上红血丝, 微丝血管扩张, 微血管扩张, 毛细血管扩张 | `红血丝` → 红血丝皮肤 脸部, 红血丝修复, 红血丝雷射 (the everyday term; some eye-redness noise); `脸上红血丝` → 怎么消除, 原因, 用什么护肤品; `血管性病变` returns itself (clinical, faithful to EN); `血管问题` → 看哪科, 症状 (cardiovascular, wrong intent); `微血管扩张` strong but TW-flavoured (看哪一科, 保养品) | **红血丝与血管性病变**: 红血丝 carries the demand; 血管性病变 keeps the EN meaning, because the page also covers red spots (樱桃状血管瘤) and rosacea redness, which are not 红血丝. |
| ms | lesi vaskular, saluran darah (muka), urat labah-labah, urat merah (di muka), urat halus di muka, kapilari pecah, muka merah, kemerahan muka, spider vein | `urat merah` → urat merah di muka, di kaki, di paha; `urat merah di pipi / di hidung` strong (some ID: *penyebab*, *apakah*); `lesi vaskular` → adalah, jinak, icd 10 (thin, ID-leaning); `apa itu lesi vaskular` returns exactly; `saluran darah` → tersumbat, pecah, ke jantung (cardiovascular); `urat labah labah` → di kaki only | **Urat Merah & Lesi Vaskular**: *urat merah* is the everyday search term; *lesi vaskular* keeps the EN meaning and has its own *apa itu* query. *Pembuluh darah* (Indonesian) avoided. |

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Vascular Lesions" | see above | see above | KEYWORD: **红血丝与血管性病变** (new; not in docs/18) |
| **seoTitle** "Vascular Lesions & Facial Redness Care in Malaysia \| Kaiteki" | 红血丝 马来西亚, 红血丝 激光, 红血丝 医美, 脸部泛红, 脸部泛红怎么办 | `红血丝 医美`, `红血丝 激光` return themselves; `脸部泛红` → 的原因, 改善, 怎么办; "+马来西亚" empty | KEYWORD: **马来西亚红血丝、血管性病变与脸部泛红护理 \| Kaiteki** (30 chars) |
| **seoDescription** | (same family) + 蜘蛛状血管 | `蜘蛛状血管` → 蜘蛛状血管瘤, 蜘蛛状血管痣 | KEYWORD: 脸上红血丝, 蜘蛛状血管, 脸部泛红, 免费咨询 (76 chars) |
| sections[0] "What are vascular lesions?" | 血管性病变, 红血丝是什么, 什么是红血丝 | `血管性病变` returns; the 红血丝 question forms are empty | KEYWORD: **血管性病变（红血丝）是什么？** |
| sections[1] "Why visible vessels are so common" | 脸上红血丝, 脸上红血丝原因 | `脸上红血丝` → 原因, 怎么消除 | KEYWORD: **为什么脸上红血丝这么常见** |
| drivers.heading "Common causes" | 红血丝原因, 红血丝的原因, 红血丝 成因, 脸上红血丝原因, 微血管扩张 原因 | bare 红血丝 forms empty; `脸上红血丝原因` is the 2nd suggestion for `脸上红血丝`; `微血管扩张 原因` returns | KEYWORD: **脸上红血丝的常见原因** |
| jumpNav "Common causes" | as above | as above | KEYWORD: **红血丝原因** |
| variant.heading "Which type is it?" | 红血丝 类型, 红血丝 种类, 红血丝 哪种类型 | nothing | DIRECT: **是哪一种？** |
| jumpNav "Which type is it?" | as above | nothing | DIRECT: **是哪一种？** |
| tab "Thread veins" / "Facial thread veins and spider veins" | 脸部红血丝, 蜘蛛痣, 蜘蛛状血管, 鼻翼 红血丝, 脸颊 红血丝 | `脸部红血丝`, `鼻翼红血丝`, `脸颊红血丝` return; `蜘蛛痣` → 肝, 会消失吗 (strong) | KEYWORD: **红血丝** / **脸部红血丝与蜘蛛状血管** (蜘蛛痣 used in the body for spider angioma) |
| tab "Red spots" / "Cherry angiomas and venous lakes" | 红痣, 身上长红痣, 樱桃状血管瘤, 樱桃血管瘤, 静脉湖, 嘴唇 静脉湖 | `红痣` → 红痣原因, 代表什么 (strong, some fortune-telling noise); `樱桃状血管瘤` → 治疗, 原因, **樱桃状血管瘤(红痣)**; `静脉湖` → 治疗, 嘴唇 | KEYWORD: **红痣** / **樱桃状血管瘤（红痣）与静脉湖** |
| tab "Redness" / "Persistent redness and rosacea" | 脸部泛红, 脸颊泛红, 玫瑰痤疮, 酒糟, 酒糟鼻 | `脸部泛红` → 的原因, 改善, 怎么办; `玫瑰痤疮` → 是什么, 治疗方法, 原因, 症状 | KEYWORD: **脸部泛红** / **持续泛红与玫瑰痤疮** |
| locationBlock.heading "Where they appear" | 红血丝 位置 | nothing | DIRECT: **常出现在哪些部位** |
| jumpNav "Where they appear" | as above | nothing | DIRECT: **常见部位** |
| seeDoctor.heading "When to see a doctor" | 红血丝 看医生, 泛红 什么时候 看医生 | nothing | DIRECT: **什么时候应该看医生** (= `concern-ui.ts`) |
| jumpNav "When to see a doctor" | as above | nothing | DIRECT: **什么时候应该看医生** |
| jumpNav "Treatment" | 血管激光 | `血管激光` → 血管激光治疗 (but the label is generic) | DIRECT: **疗程** |
| jumpNav "Risks" / "FAQ" | (pilot) | n/a | DIRECT: **风险** / **常见问题** (2 rows) |
| ctaMid.heading "Thread vein, red spot or rosacea?" | (terms from the tab rows) | as above | KEYWORD (terms): **红血丝、红痣还是玫瑰痤疮？** |
| ctaHeading "Not sure which type you have?" | n/a | n/a | DIRECT: **不确定自己是哪一种？** |
| FAQ 1 "Can vascular lesions be treated?" | 红血丝可以治疗吗, 红血丝 能治好吗, 红血丝能去掉吗, 红血丝治疗 | nothing | DIRECT: **红血丝和血管性病变可以治疗吗？** |
| FAQ 2 "Why does the cause of redness matter?" | 脸部泛红的原因, 泛红 原因, 为什么脸会泛红 | `脸部泛红的原因` is the 1st suggestion for `脸部泛红`; `泛红原因` returns | KEYWORD: **为什么要先找出脸部泛红的原因？** |
| FAQ 3 "Do vascular lesions come back after treatment?" | 红血丝会复发吗, 红血丝 复发, 微血管扩张 会复发吗 | nothing | DIRECT: **红血丝治疗后会复发吗？** |
| FAQ 4 "Are broken capillaries actually broken?" | 微血管破裂, 血管破裂 脸, 红血丝 是 血管破裂 吗 | `微血管破裂` → 原因, 修复, 红点, 怎么办 | KEYWORD: **微血管破裂，血管真的破了吗？** |
| FAQ 5 "Are red spots on my body a sign of something serious?" | 身上红点, 身上长红点, 身上长红痣, 红痣 严重吗, 血管瘤 | `身上长红点` → 是什么原因, 看什么科; `身上长红痣是什么原因`; `血管瘤` → 严重吗 | KEYWORD: **身上长红点（红痣）严重吗？** |
| FAQ 6 "Is rosacea the same as a vascular lesion?" | 玫瑰痤疮 红血丝, 红血丝 和 玫瑰痤疮, 玫瑰痤疮和酒糟 | combined forms empty; `玫瑰痤疮`, `酒糟鼻` strong on their own | KEYWORD (terms): **玫瑰痤疮（酒糟）和红血丝是一样的吗？** |
| FAQ 7 "Can leg veins be treated the same way?" | 腿部 蜘蛛网, 蜘蛛网状静脉, 腿上 红血丝, 腿上 血管, 静脉曲张 | `腿部蜘蛛网`, `蜘蛛网状静脉曲张`, `腿上血管很明显` return; `静脉曲张` → 治疗, 怎么改善 | KEYWORD: **腿上的蜘蛛网状血管，也能用同样的方法处理吗？** |
| FAQ 8 "Is vascular laser suitable for darker skin tones?" | 血管激光, 血管激光 安全吗, 激光 深色皮肤, 红血丝 深色皮肤 | `血管激光` → 血管激光治疗; skin-tone forms empty; 反黑 from the pilot | KEYWORD: **肤色较深适合做血管激光吗？会反黑吗？** (answer stays conditional and covers lightening too) |

**Chinese tally (29 logged strings):** 17 KEYWORD, 12 DIRECT. The CTA heading counts as DIRECT; ctaMid counts as KEYWORD (term choice).

**Not usable:** every "+马来西亚" form, `血管激光 价钱`, `樱桃血管瘤 激光`, `红血丝 能治好吗`. `樱桃血管瘤` and `微血管扩张` lists carry dcard / ptt noise; only the shared stems were used.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Vascular Lesions" | see above | see above | KEYWORD: **Urat Merah & Lesi Vaskular** (new; not in docs/18) |
| **seoTitle** | urat merah di muka, muka merah, kemerahan muka, laser kemerahan muka, rosacea malaysia | `urat merah di muka` returns; `muka merah` → tanda darah tinggi, bila panas (MY); `kemerahan muka` → …akibat skincare, terkena matahari | KEYWORD: **Penjagaan Urat Merah & Kemerahan Muka di Malaysia \| Kaiteki** (59 chars). *Lesi vaskular* left to the H1 for length. |
| **seoDescription** | (same family) + urat labah-labah | as above | KEYWORD: urat merah halus, urat labah-labah, muka merah, konsultasi percuma (157 chars) |
| sections[0] "What are vascular lesions?" | apa itu lesi vaskular, lesi vaskular | `apa itu lesi vaskular` returns exactly | KEYWORD: **Apa itu lesi vaskular?** |
| sections[1] "Why visible vessels are so common" | urat merah di muka, urat di muka, urat halus di muka | `urat merah di muka` (2nd suggestion for `urat merah`); `urat di muka` → kelihatan | KEYWORD: **Kenapa urat merah di muka begitu biasa** |
| drivers.heading "Common causes" | punca muka merah, kenapa muka merah, penyebab urat merah, muka cepat merah | `punca muka merah` → …dan gatal, dan pedih (MY *punca*); `punca muka cepat merah`; the *penyebab* forms are Indonesian | KEYWORD: **Punca biasa urat merah dan muka merah** |
| jumpNav "Common causes" | as above | as above | KEYWORD: **Punca urat merah** |
| variant.heading "Which type is it?" | n/a (no type-query demand) | nothing | DIRECT: **Jenis yang mana satu?** |
| jumpNav "Which type is it?" | as above | nothing | DIRECT: **Jenis yang mana?** |
| tab "Thread veins" / title | urat merah halus di muka, urat halus merah, urat labah labah, spider veins muka | `urat halus merah` → di paha, di kaki, di wajah; `urat labah labah` → di kaki; `spider veins muka` → spider veins di muka | KEYWORD: **Urat merah halus** / **Urat merah di muka dan urat labah-labah** |
| tab "Red spots" / title | bintik merah, bintik merah di badan, tahi lalat merah, cherry angioma, cherry angioma malaysia, venous lake | `bintik merah di badan` → tidak gatal, timbul (MY *badan*); `cherry angioma` → removal, treatment, removal malaysia; `venous lake` → lip, treatment (English only) | KEYWORD: **Bintik merah** / **Cherry angioma (bintik merah) dan venous lake** (English terms kept, glossed) |
| tab "Redness" / title | muka merah, muka kemerahan, rosacea, rawatan rosacea, rosacea malaysia | `muka merah` strong; `rosacea malaysia` → rosacea treatment malaysia | KEYWORD: **Muka merah** / **Kemerahan berterusan dan rosacea** |
| locationBlock.heading "Where they appear" | n/a | nothing | DIRECT: **Di mana ia muncul** |
| jumpNav "Where they appear" | as above | nothing | DIRECT: **Di mana ia muncul** |
| seeDoctor.heading "When to see a doctor" | bila perlu jumpa doktor | → …jika hamil, anak muntah (generic, unrelated) | DIRECT: **Bila perlu berjumpa doktor** (= `concern-ui.ts`) |
| jumpNav "When to see a doctor" | as above | as above | DIRECT: **Bila perlu berjumpa doktor** |
| jumpNav "Treatment" | (pilot) | n/a | KEYWORD (term, docs/18 §2.2): **Rawatan** |
| jumpNav "Risks" / "FAQ" | (pilot) | n/a | DIRECT: **Risiko** / **Soalan lazim** (2 rows) |
| ctaMid.heading | (terms from the tab rows) | as above | KEYWORD (terms): **Urat merah, bintik merah atau rosacea?** |
| ctaHeading | n/a | n/a | DIRECT: **Tak pasti jenis yang mana anda alami?** |
| FAQ 1 "Can vascular lesions be treated?" | lesi vaskular, rawatan urat merah | nothing on treatability | DIRECT: **Lesi vaskular boleh dirawat ke?** |
| FAQ 2 "Why does the cause of redness matter?" | punca muka merah | strong (as drivers) | KEYWORD: **Kenapa punca muka merah itu penting?** |
| FAQ 3 "Come back after treatment?" | saluran darah datang balik | nothing | DIRECT: **Urat merah akan datang balik selepas rawatan?** |
| FAQ 4 "Are broken capillaries actually broken?" | kapilari pecah, kapilari pecah di muka, broken capillaries, saluran darah pecah di muka | `kapilari pecah` returns (MY clinical word); `broken capillaries` → on face, nose | KEYWORD: **Kapilari pecah betul-betul pecah ke?** |
| FAQ 5 "Red spots on my body serious?" | bintik merah di badan tidak gatal, tahi lalat merah di badan, tahi lalat merah bahaya | `bintik merah di badan tidak gatal` returns; `tahi lalat merah bahaya atau tidak` | KEYWORD: **Bintik merah di badan tanda masalah serius ke?** |
| FAQ 6 "Is rosacea the same as a vascular lesion?" | rosacea, rosacea dan jerawat, kemerahan muka rosacea | `rosacea` → maksud, treatment, cause; combined forms empty | KEYWORD (term): **Rosacea sama dengan lesi vaskular ke?** |
| FAQ 7 "Can leg veins be treated the same way?" | urat labah labah di kaki, urat kaki timbul, urat varikos, rawatan urat varikos | `urat labah labah di kaki` returns; `urat kaki timbul` → dan sakit, kenapa, cara merawat (MY); `urat varikos` → apa itu urat varikos | KEYWORD: **Urat labah-labah dan urat timbul di kaki boleh dirawat dengan cara yang sama ke?** |
| FAQ 8 "Suitable for darker skin tones?" | laser vaskular, laser kulit gelap, laser kulit sawo matang | `laser vaskular` → harga, untuk apa (some ID: erha); `laser kulit gelap` returns | KEYWORD: **Laser vaskular sesuai ke untuk kulit gelap atau sawo matang?** |

**Malay tally (29 logged strings):** 18 KEYWORD, 11 DIRECT. The CTA heading counts as DIRECT; ctaMid counts as KEYWORD (term choice).

**Indonesian pollution seen and avoided:** pembuluh darah (pecah di wajah), lesi vaskular (adalah, jinak, ditemukan), urat merah di pipi (apakah bahaya, penyebab), kenapa muka merah (saat, setelah), muka kemerahan (karena apa), laser vaskular (erha). *Wajah* and *pembuluh* are not used.

## For the bilingual doctor-reviewer

1. **New display names** (not in docs/18 §5): **红血丝与血管性病变** and **Urat Merah & Lesi Vaskular**. If they're accepted, please add them to docs/18 §5.
2. **Terms used for each vessel type.** These need a clinical check:
   - Thread veins / telangiectasia: 红血丝（微血管扩张） / *urat merah halus (telangiektasia)*.
   - Spider angioma: 蜘蛛痣 / *spider angioma* (kept in English).
   - Facial spider veins: 蜘蛛状血管. On the legs: 蜘蛛网状血管 / *urat labah-labah*.
   - Cherry angioma: 樱桃状血管瘤（红痣） / *cherry angioma (bintik merah)*.
   - Venous lake: 静脉湖 / *venous lake*.
   - Port-wine stain: 葡萄酒色斑（鲜红斑痣） / *port-wine stain*.
   - Varicose veins: 静脉曲张 / *urat varikos*.
3. **红痣 has fortune-telling noise in AC** (红痣代表什么, 面相). It's used only as a gloss next to 樱桃状血管瘤.
4. **GP** is rendered 普通科医生（GP） / *doktor am (GP)*. Specialist referral is 专科医生 / *doktor pakar*. That's a referral, not a label for Kaiteki.
5. **"Not a clinic"** (single spider angioma tab) is rendered "而不是去医美诊所" / "bukan klinik estetik", which is slightly more specific than EN "a clinic". Please confirm.
6. **"Laser does not cure rosacea"** is 激光不能根除玫瑰痤疮 (根除 is negated; 根治 avoided because it's on the banned list) and *Laser tidak menyembuhkan rosacea*.
7. **FAQ 8 zh adds 会反黑吗.** The answer was widened to "色素改变（变深或变浅）", which is the faithful EN meaning, so it doesn't imply darkening only.
8. **Rosacea** is 玫瑰痤疮（酒糟） (pilot note 1 applies). Malay keeps *rosacea* (no usable Malay term in AC).

## Re-sync 2026-10-14 (English rewrite)

The English rewrite left 19 blanks per language. None is a search-relevant field (the three intros are body lead-ins, not headings), so no Autocomplete probes were run and both keyword tables are empty.

### Chinese (zh)

| English | probes | evidence | KEYWORD/DIRECT |
|---|---|---|---|
| (none: no search-relevant blanks) | n/a | n/a | n/a |

**Body blanks translated directly:** 19 (leadAnswer, banner.alt, sections[0].body[1], drivers.intro, drivers.items[3].body, variant.intro, locationBlock.intro, seeDoctor.outro, ctaMid.body, treatmentsNote, firstVisit.intro, firstVisit.steps[1] and [3] bodies, visitImages[2].caption, costFactors.intro, faqs[0,1,2,7].a).

### Malay (ms)

| English | probes | evidence | KEYWORD/DIRECT |
|---|---|---|---|
| (none: no search-relevant blanks) | n/a | n/a | n/a |

**Body blanks translated directly:** 19 (same paths as zh).

### Reviewer notes

1. The new leadAnswer and FAQ 1 name the vessel types with the terms already approved for review on this page: 红血丝 / 蜘蛛痣 / 樱桃状血管瘤（红痣） / 静脉曲张 and *urat merah halus* / *spider angioma* / *cherry angioma* / *urat varikos*.
2. "The vessels are dilated, not broken" is 这些血管是扩张了，而不是破裂 / *Saluran darah itu mengembang, bukan pecah*, matching the existing broken-capillaries FAQ.
3. "Results vary between individuals" (FAQ 1) is 效果因人而异 / *hasilnya berbeza antara individu*.
4. banner.alt describes the new banner image (lower face in profile with cheek redness), not the old hero.
