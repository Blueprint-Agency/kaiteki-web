# 19. Concern keyword log: Hair loss (`/concerns/hair-loss`)

**Date:** 2026-10-14 · Follows the method and format of the pilot (`acne.md`).
**Outputs:** `content/i18n/concerns/zh/hair-loss.json`, `content/i18n/concerns/ms/hair-loss.json` (same shape as the EN record, including the three `null` slots in `figures`).
**Inputs:** EN record for `hair-loss`, `docs/18-trilingual-keyword-map.md` §5 (display names) and §7 (avoid list).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, with `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME / NO VOLUME and KEYWORD / DIRECT exactly as in `acne.md`.
- **Probes:** 93 zh and 56 ms, in three batches. Raw dumps are in the session scratchpad, not in the repo.
- **Scope:** only search-relevant strings are logged. All body copy is a direct, faithful translation. This record has no `compare` block.
- **This record has `seeDoctor.heading`** ("When to see a doctor"). It is rendered with the same wording as the shared UI string in `content/i18n/concern-ui.ts` (什么时候应该看医生 / Bila perlu berjumpa doktor).
- **"Permanent loss"** (scarring alopecia) is rendered as 无法恢复的脱发 / *keguguran yang tidak dapat dipulihkan*, keeping 永久 and *kekal* out of the copy. The clinical meaning is unchanged.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Hair Loss" | 脱发, 掉发, 掉头发, 头发稀疏 | `脱发` → 脱发原因, 脱发吃什么, 脱发严重怎么办; `掉发`/`掉头发` similar | KEYWORD: **脱发** (docs/18 §5); 掉头发 / 掉发 used in body copy |
| **seoTitle** | 脱发治疗, 脱发治疗马来西亚, 脱发 医美, 脱发 诊所 | `脱发治疗` returns (HK/中医 noise); "+马来西亚" and 医美 forms empty | KEYWORD: **马来西亚脱发治疗与评估 \| Kaiteki** (21 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: 脱发, 掉头发, 脱发原因, 免费咨询 (81 chars) |
| sections[0].heading "Understanding hair loss" | 什么是脱发 (n/a), 脱发是什么原因 | no "what is" form; cause forms belong to the drivers heading | DIRECT: **认识脱发** |
| drivers.heading "Common causes" | 脱发原因, 脱发的原因, 掉头发原因, 掉发原因, 为什么会掉头发, 脱发是什么原因 | all return; `掉发原因` → 女性, 甲状腺, 缺铁; `脱发原因` → 男, 女 | KEYWORD: **脱发的常见原因** |
| jumpNav "Common causes" | as above | as above | KEYWORD: **脱发原因** |
| variant.heading "Which kind is it?" | 脱发种类, 脱发类型 | both return themselves | KEYWORD: **脱发类型：你属于哪一种？** |
| jumpNav "Which kind is it?" | as above | as above | KEYWORD: **脱发类型** |
| tab "Pattern loss" / "Hereditary pattern loss" | 雄性脱发, 雄激素性脱发, 遗传性脱发, 遗传脱发 | `雄性脱发` → 治疗, 原因, 女性 雄性脱发; `遗传性脱发` returns; `遗传 脱发 有救 吗` | KEYWORD: **遗传性脱发** / **遗传性（模式型）脱发**. 雄性脱发 not used as the label: it misleads women, and the tab covers both sexes |
| tab "Something else" / "Hair loss as a symptom" | (no direct probe form) | n/a | DIRECT: **其他原因** / **脱发是其他问题的症状** |
| locationBlock.heading "Pattern on the scalp" | 脱发分布, 脱发部位, 头发稀疏 部位 | nothing | DIRECT: **头皮上的脱发分布** |
| jumpNav "Pattern on the scalp" | as above | as above | DIRECT: **头皮上的脱发分布** |
| location card titles (body, but checked) | 发际线后移, m字额, 头顶稀疏, 头顶秃, 发缝变宽, 分线变宽, 斑秃, 鬼剃头, 头发稀疏 | `发际线后移` → 原因, 怎么办, 还能回来吗; `头顶稀疏` → 原因, 怎么办; `发缝变宽` returns; `斑秃`, `鬼剃头` strong | Terms used: **太阳穴与发际线后移**, **头顶稀疏**, **发缝变宽**, **整个头皮普遍稀疏**. Round patches kept as **边界清楚的圆形秃斑**: EN doesn't name the condition (see reviewer note 1) |
| seeDoctor.heading "When to see a doctor" | 脱发 看什么科, 掉头发看什么科, 脱发 什么时候 看医生 | `看什么科` forms return, but they ask *which specialty*, not *when* | DIRECT: **什么时候应该看医生** (matches `concern-ui.ts`) |
| jumpNav "Treatment" / "Risks" / "FAQ" | (pilot) | (pilot) | DIRECT: **疗程 / 风险 / 常见问题** |
| jumpNav "Cost" | 脱发 价钱, 脱发治疗 价钱 | `脱发 价钱` → 脱发 治疗 价钱, 脱发 医生 价钱 (MY 价钱) | KEYWORD: **价钱** |
| ctaMid.heading "Not sure what kind of hair loss you have?" | n/a (conversion copy) | n/a | DIRECT: **不确定自己是哪一种脱发？** |
| ctaHeading "Not sure what's behind your hair loss?" | n/a (conversion copy) | n/a | DIRECT: **不确定自己为什么掉头发？** |
| FAQ 1 "How much hair loss is normal?" | 每天掉多少头发正常, 一天掉多少头发正常, 掉头发正常吗, 女生掉头发正常吗 | all return | KEYWORD: **每天掉多少头发算正常？** |
| FAQ 2 "Is hair loss treatable?" | 脱发可以治好吗, 脱发能治好吗, 脱发可以治疗吗, 脱发治得好吗, 脱发 有救吗, 脱发 能恢复吗 | nothing (only `遗传 脱发 有救 吗` inside another list) | DIRECT: **脱发可以治疗吗？** |
| FAQ 3 "Why is timing so important?" | 脱发 什么时候, 脱发 及早 | nothing | DIRECT: **为什么及早处理这么重要？** |
| FAQ 4 "Do I need blood tests?" | 脱发 验血, 掉发 验血, 脱发 要验血吗, 掉发要验血吗 | `脱发 验血` and `掉发 验血` return themselves; question forms empty | KEYWORD: **脱发需要验血吗？** |
| FAQ 5 "Is hair loss after childbirth permanent?" | 产后脱发, 产后掉发, 产后掉头发, 产后脱发多久恢复, 产后掉发会恢复吗, 产后脱发会永久吗 | `产后脱发` → 怎么办, 持续多久, 原因; `产后掉发` → **产后掉发会长回来吗** | KEYWORD: **产后脱发会长回来吗？** The answer opens 通常会 (EN "Usually not" to "permanent?"), same meaning. Also keeps 永久 out of the copy |
| FAQ 6 "Do supplements help?" | 掉发 吃什么, 维他命 掉发, 维他命 生发, 生发 补充品, 补充品 掉发, 吃维他命 掉发 | `掉头发吃什么维他命`, `掉发 补充品`, `生发补充品`, `维他命 生发` return | KEYWORD: **吃补充品或维他命对掉发有帮助吗？** |
| FAQ 7 "Does stress cause hair loss?" | 压力 脱发, 压力大掉头发, 压力性脱发, 压力 掉发, 压力会脱发吗 | `压力大 掉头发` → 怎么办; `压力掉发` → 多久长回来, 特征, 看什么科 | KEYWORD: **压力大会掉头发吗？** |
| FAQ 8 "Can women have hair loss too?" | 女性脱发, 女生掉头发, 女生脱发, 女生也会秃头吗, 女性 秃头 | `女性脱发` → 原因, 治疗; `女生也会秃头吗` returns exactly | KEYWORD: **女性也会脱发吗？** (秃头 avoided in the question: it reads harsher than EN) |

**Chinese tally (27 logged strings):** 15 KEYWORD, 12 DIRECT. CTA headings count as DIRECT. The location-card row is a body-term check and isn't counted.

**Not usable:** `脱发治疗马来西亚`, `脱发 医美`, `脱发治疗 价钱`, `外泌体 脱发` (returns only itself; `外泌体 头发` is TW/KR-skewed). `植发马来西亚` is strong, but this page has no transplant content.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Hair Loss" | rambut gugur, rawatan rambut gugur, keguguran rambut | `rambut gugur` → teruk, sebab apa, banyak, tanda penyakit apa; `rawatan rambut gugur` → perempuan, teruk, lelaki, near me | KEYWORD: **Rambut Gugur** (docs/18 §5) |
| **seoTitle** | rawatan rambut gugur, kos rawatan rambut gugur, klinik rambut gugur | all return | KEYWORD: **Rawatan & Penilaian Rambut Gugur di Malaysia \| Kaiteki** (54 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: rambut gugur, punca, doktor, konsultasi … percuma (156 chars) |
| sections[0].heading "Understanding hair loss" | apa itu rambut gugur | nothing | DIRECT: **Memahami masalah rambut gugur** |
| drivers.heading "Common causes" | punca rambut gugur, kenapa rambut gugur, sebab rambut gugur | all strong and clearly MY (*punca*, *sebab*) | KEYWORD: **Punca rambut gugur yang biasa** |
| jumpNav "Common causes" | as above | as above | KEYWORD: **Punca rambut gugur** |
| variant.heading "Which kind is it?" | jenis rambut gugur, rambut gugur jenis, jenis botak | `jenis rambut gugur` returns; `jenis botak` is hairstyle/tyre noise | KEYWORD: **Jenis rambut gugur: yang mana satu anda alami?** |
| jumpNav "Which kind is it?" | as above | as above | KEYWORD: **Jenis rambut gugur** |
| tab "Pattern loss" | botak keturunan, botak lelaki, rambut nipis, rambut menipis | `botak keturunan` returns but its tail is Indonesian (bisa disembuhkan); `rambut menipis` Indonesian (pria, karena); `rambut nipis` MY | KEYWORD (head term): **Botak keturunan** / **Rambut gugur berpola keturunan**. *Rambut menipis* used in body as the verb form |
| tab "Something else" | rambut gugur tanda penyakit (seen in `rambut gugur` list) | `rambut gugur` → **rambut gugur tanda penyakit apa** | KEYWORD: **Punca lain** / **Rambut gugur sebagai tanda masalah lain** |
| locationBlock.heading "Pattern on the scalp" | (no corak form found) | n/a | DIRECT: **Corak rambut gugur di kulit kepala** |
| jumpNav "Pattern on the scalp" | n/a | n/a | DIRECT: **Corak di kulit kepala** |
| location card titles (body, but checked) | botak depan, dahi makin luas, garis rambut, botak di tengah kepala, belahan rambut makin luas, botak bulat, botak tompok, rambut nipis | `dahi makin luas` → kenapa (MY); `botak di tengah kepala` returns; `botak bulat` → di kepala; `botak tompok` → tompok botak di kepala; `keguguran rambut bertompok`; `belahan rambut makin luas` empty; `garis rambut` is barber-led | Terms used: garis rambut yang makin ke belakang, **botak di bahagian atas kepala (ubun-ubun)**, belahan rambut di tengah yang makin luas, **botak bulat bertompok**, **rambut menipis di seluruh kepala** |
| seeDoctor.heading "When to see a doctor" | bila perlu jumpa doktor rambut gugur, doktor rambut gugur | nothing (`klinik pakar rambut gugur` appears; *pakar* not usable) | DIRECT: **Bila perlu berjumpa doktor** (matches `concern-ui.ts`) |
| jumpNav "Treatment" | rawatan rambut gugur | strong | KEYWORD (term): **Rawatan** |
| jumpNav "Risks" / "FAQ" | (pilot) | (pilot) | DIRECT: **Risiko / Soalan lazim** |
| jumpNav "Cost" | kos rawatan rambut gugur, harga rawatan rambut gugur | both return | KEYWORD: **Kos** |
| ctaMid.heading | n/a | n/a | DIRECT: **Tak pasti jenis rambut gugur yang anda alami?** |
| ctaHeading | n/a | n/a | DIRECT: **Tak pasti apa punca rambut gugur anda?** |
| FAQ 1 "How much hair loss is normal?" | rambut gugur normal, berapa helai rambut gugur normal, rambut gugur berapa helai sehari | `rambut gugur normal` → berapa helai, normal ke; `rambut gugur berapa helai sehari` returns | KEYWORD: **Rambut gugur berapa helai sehari yang masih normal?** |
| FAQ 2 "Is hair loss treatable?" | rambut gugur boleh dirawat, rambut gugur boleh tumbuh balik ke | nothing | DIRECT: **Rambut gugur boleh dirawat ke?** |
| FAQ 3 "Why is timing so important?" | n/a | n/a | DIRECT: **Kenapa masa sangat penting?** |
| FAQ 4 "Do I need blood tests?" | rambut gugur ujian darah, rambut gugur tiroid, rambut gugur kurang zat besi | test form empty; `rambut gugur sebab tiroid`, `rambut gugur kurang zat besi` return (used in the answer) | DIRECT: **Perlu buat ujian darah ke?** |
| FAQ 5 "Is hair loss after childbirth permanent?" | rambut gugur selepas bersalin, rambut gugur lepas bersalin, rambut gugur selepas bersalin berapa lama | strong: → 4 bulan, kenapa, teruk, **berapa lama rambut gugur selepas bersalin** | KEYWORD: **Rambut gugur selepas bersalin akan pulih ke?** (answer opens *Biasanya ya*; same meaning as EN "Usually not" to "permanent?", and keeps *kekal* out) |
| FAQ 6 "Do supplements help?" | vitamin rambut gugur, suplemen rambut gugur | both strong (watson, farmasi, selepas bersalin) | KEYWORD: **Suplemen atau vitamin membantu rambut gugur ke?** |
| FAQ 7 "Does stress cause hair loss?" | rambut gugur sebab stress, stress rambut gugur | `stress rambut gugur` → **stress boleh menyebabkan rambut gugur** (exact) | KEYWORD: **Stress boleh menyebabkan rambut gugur ke?** (English spelling *stress* kept in the question because that's what people type; body copy uses *tekanan*) |
| FAQ 8 "Can women have hair loss too?" | rambut gugur perempuan, botak perempuan | `rambut gugur perempuan` → punca, masalah, rawatan (MY); `botak perempuan` → haram/hukum noise | KEYWORD: **Perempuan pun boleh alami rambut gugur ke?** |

**Malay tally (27 logged strings):** 16 KEYWORD, 11 DIRECT. CTA headings count as DIRECT. The location-card row isn't counted.

**Indonesian pollution seen and avoided:** rambut menipis (pria, karena apa, bisa tumbuh lagi), botak keturunan (bisa disembuhkan), rahang/garis rambut (keren). *rontok* (Indonesian for shedding) is never used; *gugur* throughout.

## For the bilingual doctor-reviewer

1. **Round patches are not named as alopecia areata.** EN says "a different condition entirely" without naming it. 斑秃 / 鬼剃头 and *botak bulat* have strong AC. Adding the name to the card would capture that demand, but it's a diagnostic statement the EN doesn't make. Doctor's call.
2. **遗传性脱发 vs 雄性脱发.** We used 遗传性（模式型）脱发 because the tab covers both sexes. 雄性脱发 has more AC but reads as male-only. Please confirm.
3. **Exosome therapy** is described as 再生制剂 / *persediaan regeneratif* (EN "regenerative preparation"), not 外泌体 / eksosom, following the pilot (note 12 in `acne.md`). Its MY regulatory status still needs checking.
4. **Prescription treatment is never named** (no minoxidil, finasteride), as EN does: 处方药物 / *rawatan perubatan yang dipreskripsi*.
5. **Clinical terms:** 脂溢性皮炎 / *dermatitis seboreik*, 银屑病 / *psoriasis*, 休止期 / *fasa rehat*, 自身免疫疾病 / *penyakit autoimun*, Norwood 分级 / *skala Norwood*.
6. **"Permanent" wording.** It was rendered as 无法恢复 / 无法逆转 and *tidak dapat dipulihkan*, and "maintained rather than permanent" as 需要维持，并不是一劳永逸 / *perlu diselenggara, bukan berkekalan*. Please confirm the nuance.
7. **Before/after captions** follow the pilot: 在 Kaiteki 完成一个疗程之前与之后 / *sebelum dan selepas satu kursus rawatan*.
