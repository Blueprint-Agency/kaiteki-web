# 19. Concern keyword log: Excessive Sweating (`/concerns/excessive-sweating`)

**Date:** 2026-10-14 · Follows the method of the pilot (`acne.md`).
**Outputs:** `content/i18n/concerns/zh/excessive-sweating.json`, `content/i18n/concerns/ms/excessive-sweating.json` (same shape as the EN record, including the two `null` slots in `figures`).
**Inputs:** EN record for `excessive-sweating`, `docs/18-trilingual-keyword-map.md` §6 and §7. **This concern is not in docs/18 §5**, so the display name was researched here (see the `name` rows).

## Method

Same as `acne.md`: Google Autocomplete (`client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`) as the volume proxy. **KEYWORD** = the string is phrased around a real Malaysian query form, keeping the EN meaning. **DIRECT** = faithful translation, no invented keyword.

- **Probes:** 88 zh and 76 ms, in two batches per language. Raw JSON dumps are in `C:/tmp/es-ac-*.json` (not in the repo).
- **Scope:** search-relevant strings only. All body copy is a direct, faithful translation.
- **This record has its own `seeDoctor.heading`** (EN "When to see a doctor"). It's translated to match `concern-ui.ts` (什么时候应该看医生 / Bila perlu berjumpa doktor). There is no `compare` table on this page.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Excessive Sweating" (not in docs/18) | 多汗症, 多汗, 出汗过多, 流汗过多, 容易流汗, 很容易出汗, 爱出汗, 狂流汗, 手汗, 狐臭 | `多汗` → **多汗症** is the first suggestion; `多汗症` → 多汗症治疗, 多汗症原因, 多汗症的治疗方法; `出汗过多` → 出汗过多 症状, 改善; `容易流汗` / `爱出汗` are colloquial and cause-led (TCM noise); `手汗` covers palms only; `狐臭` is odour, a different problem | KEYWORD: **多汗症**. It's the medical name, the strongest head term, and the AC hub for 治疗 / 原因. 出汗过多 is used as the plain-language gloss in leadAnswer and FAQ 1. **狐臭 is not used as the name** (it means body odour / bromhidrosis; the EN page treats odour as a separate problem). |
| **seoTitle** "Excessive Sweating Treatment & Assessment \| Kaiteki" | 多汗症 治疗, 多汗症 马来西亚, 多汗症 吉隆坡, 多汗症 治疗 马来西亚, 腋下多汗症 治疗 | `多汗症治疗` → 多汗症治疗费用, 多汗症治疗方法; `腋下多汗症治疗` returns; all MY-city forms empty | KEYWORD: **多汗症治疗与评估 \| Kaiteki** (18 chars). No 马来西亚, because EN has no geo term here. |
| **seoDescription** | (same family) | as above | KEYWORD: 多汗症, 出汗部位, 免费咨询 (80 chars) |
| sections[0].heading "What is excessive sweating?" | 多汗症是什么, 什么是多汗症 | both return themselves | KEYWORD: **多汗症是什么？** |
| sections[1].heading "How sweating is controlled" | 出汗原理, 为什么会出汗, 汗腺 | `为什么会出汗` returns only itself; `汗腺` → 汗腺炎, 汗腺发达 (other intents) | DIRECT: **身体如何控制出汗** |
| sections[2].heading "Sweating in a hot, humid climate" | 天气热 流汗, 天气热 出汗多, 马来西亚 天气 流汗, 冷气房 流汗 | `天气热 流汗` → 天气热流汗会瘦吗, 天气热流汗皮肤痒; `冷气房 流汗` → 冷气房 睡觉 流汗 | KEYWORD (partial): **在炎热潮湿的天气里流汗** |
| drivers.heading "Common causes" | 多汗症 原因, 为什么会多汗, 流汗 原因, 出汗 原因 | `多汗症原因` returns (→ 手, 全身, 甲状腺; some JP noise); `很容易出汗` → 很容易出汗是什么原因 | KEYWORD: **多汗症的常见原因** |
| jumpNav "Common causes" | as above | as above | KEYWORD: **多汗症原因** |
| variant.heading "Which kind is it?" | 多汗症 类型, 多汗症 种类, 原发性多汗症, 继发性多汗症 | `多汗症 种类`, `原发性多汗症`, `继发性多汗症` return themselves; `多汗症 类型` empty | KEYWORD: **多汗症种类：原发性还是继发性？** |
| jumpNav "Which kind is it?" | as above | as above | KEYWORD: **多汗症种类** |
| tab "Primary" / "Primary focal hyperhidrosis" | 原发性多汗症 | returns | KEYWORD: **原发性** / **原发性局部多汗症** |
| tab "Secondary" / "Sweating as a symptom" | 继发性多汗症 | returns | KEYWORD: **继发性** / **出汗作为一种症状（继发性多汗症）** |
| locationBlock.heading "Where it happens" | 腋下多汗, 腋下出汗, 腋下流汗, 手汗, 手汗症, 脚汗, 头部出汗, 头汗, 脸部出汗, 全身出汗, 全身流汗 | per-zone forms are all strong: `腋下多汗` → 原因, 治疗, 肉毒; `手汗症` → 怎么解决, 原因; `脚汗` → 怎么治疗; `头部出汗` → 多是什么原因; `全身出汗` → 是什么原因 | KEYWORD: **多汗部位：腋下、手脚、头脸与全身**; card titles 腋下 / 手掌（手汗） / 脚底（脚汗） / 脸部与头皮 / 全身 |
| jumpNav "Where it happens" | (no zone-neutral form probed with AC) | n/a | DIRECT: **出汗部位** |
| seeDoctor.heading "When to see a doctor" | 多汗症 看医生, 什么时候 看医生 出汗, 多汗症 看哪科 | `多汗症看什么科` / `多汗症看哪科` return (which-department intent, not when) | DIRECT: **什么时候应该看医生** (matches `concern-ui.ts`) |
| jumpNav "When to see a doctor" | as above | as above | DIRECT: **什么时候看医生** |
| jumpNav "Treatment" | n/a | n/a | DIRECT: **疗程** |
| jumpNav "Risks" | n/a | n/a | DIRECT: **风险** |
| jumpNav "FAQ" | n/a | n/a | DIRECT: **常见问题** |
| ctaMid.heading "Not sure whether your sweating needs investigating?" | n/a (conversion copy) | n/a | DIRECT: **不确定你的出汗问题需不需要检查？** |
| ctaHeading "Not sure which areas are affected?" | n/a (conversion copy) | n/a | DIRECT: **不确定是哪些部位出汗过多？** |
| FAQ 1 "Is excessive sweating a medical condition?" | 多汗症 是病吗, 爱出汗, 流汗多 是病吗 | `爱出汗` → **爱出汗是病吗**; `出汗过多` returns; the 多汗症/流汗多 forms are empty | KEYWORD: **出汗过多是一种病吗？** |
| FAQ 2 "What causes excessive sweating?" | 多汗症 原因, 很容易出汗 | as drivers | KEYWORD: **多汗症的原因是什么？** |
| FAQ 3 "Is excessive sweating treatable?" | 多汗症 可以治好吗, 多汗症 能治好吗, 多汗症 会好吗, 多汗症 治疗 | the 治好 forms are empty; `多汗症治疗` strong | KEYWORD (partial): **多汗症可以治疗吗？** (治好 avoided: the answer says primary hyperhidrosis isn't cured) |
| FAQ 4 "How is it different from normal sweating in hot weather?" | 流汗 正常吗, 出汗 正常吗, 天气热 流汗, 冷气房 出汗 | `流汗正常吗`, `天气热 流汗`, `冷气房出汗` return | KEYWORD: **天气热流汗正常吗？和多汗症有什么不同？** |
| FAQ 5 "Deodorant vs antiperspirant?" | 止汗剂 和 体香剂, 止汗剂 体香剂 区别, 体香剂, 止汗剂 | `止汗剂和体香剂` returns; `体香剂` → 体香剂 止汗剂; `止汗剂` → 止汗剂推荐马来西亚 (MY) | KEYWORD: **体香剂和止汗剂有什么区别？** |
| FAQ 6 "Why do night sweats matter?" | 夜间盗汗, 盗汗, 盗汗 原因, 晚上睡觉出汗 | `夜间盗汗` → 夜间盗汗的原因及治疗, 看哪一科, 更年期; `盗汗` strong | KEYWORD: **为什么夜间盗汗需要留意？** |
| FAQ 7 "Will treating one area make me sweat more elsewhere?" | 代偿性出汗, 代偿性多汗 | `代偿性出汗` → 治疗, 改善, 狐臭手术 代偿性出汗 (some ptt) | KEYWORD: **治疗一个部位后，其他部位会出更多汗吗（代偿性出汗）？** |
| FAQ 8 "Does excessive sweating cause body odour?" | 狐臭, 狐臭 多汗, 腋下出汗 | `狐臭 多汗` → **狐臭 多汗症**; `腋下出汗` → 腋下出汗有味, 腋下出汗有味道 | KEYWORD: **多汗会引起体味或狐臭吗？** (see reviewer note 2) |

**Chinese tally (29 logged strings):** 20 KEYWORD, 9 DIRECT. CTA headings counted as DIRECT.

**Not usable (no MY demand):** `多汗症 马来西亚`, `多汗症 吉隆坡`, `多汗症 治疗 马来西亚`, `只有一边出汗`, `半边身体出汗`. **Seen and not used:** `腋下肉毒`, `手汗 肉毒`, `多汗症 肉毒杆菌` (strong treatment-level demand, mostly TW/dcard; naming the drug in concern copy is a reviewer call), `多汗症手术` (surgery isn't offered).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Excessive Sweating" (not in docs/18) | peluh berlebihan, berpeluh berlebihan, banyak berpeluh, mudah berpeluh, kuat berpeluh, hiperhidrosis, hyperhidrosis | `peluh berlebihan` → seluruh badan, di muka, di kepala, **tahun 3** (MY school syllabus), punca peluh berlebihan, penyakit peluh berlebihan; `hiperhidrosis` → adalah, apakah berbahaya, obat nya apa (ID-leaning); `hyperhidrosis` → maksud, **hyperhidrosis malaysia** | KEYWORD: **Peluh Berlebihan (Hiperhidrosis)**. *Peluh berlebihan* is the MY everyday term with the broadest AC; the clinical term goes in brackets, as docs/18 does for *Jeragat (Melasma)*. *Hiperhidrosis* (MY/ID spelling) over *hyperhidrosis*, which stays English in AC. |
| **seoTitle** "Excessive Sweating Treatment & Assessment \| Kaiteki" | rawatan peluh berlebihan, rawatan hiperhidrosis, rawatan hyperhidrosis | `rawatan peluh berlebihan` returns itself; `rawatan hyperhidrosis` → kos rawatan hyperhidrosis | KEYWORD: **Rawatan & Penilaian Peluh Berlebihan \| Kaiteki** (46 chars) |
| **seoDescription** | (same family) + konsultasi percuma | as above | KEYWORD: peluh berlebihan, hiperhidrosis, punca, konsultasi percuma (151 chars) |
| sections[0].heading "What is excessive sweating?" | apa itu hiperhidrosis, hiperhidrosis adalah | `apa itu hiperhidrosis` → primer, sekunder, di tangan, palmar | KEYWORD: **Apa itu peluh berlebihan (hiperhidrosis)?** |
| sections[1].heading "How sweating is controlled" | bagaimana peluh terhasil, kelenjar peluh | `bagaimana peluh terhasil` returns itself (production, not control); `kelenjar peluh` → apokrin, di ketiak | DIRECT: **Bagaimana badan mengawal peluh** |
| sections[2].heading "Sweating in a hot, humid climate" | cuaca panas berpeluh | nothing | DIRECT: **Berpeluh dalam cuaca panas dan lembap** |
| drivers.heading "Common causes" | punca peluh berlebihan, punca berpeluh berlebihan, punca banyak berpeluh, kenapa mudah berpeluh, kenapa kuat berpeluh | all return; `kenapa mudah berpeluh` → kenapa saya mudah berpeluh, kenapa tangan mudah berpeluh (MY) | KEYWORD: **Punca peluh berlebihan** |
| jumpNav "Common causes" | as above | as above | KEYWORD: **Punca peluh berlebihan** |
| variant.heading "Which kind is it?" | jenis hiperhidrosis, hiperhidrosis primer | `jenis hiperhidrosis` returns itself; `hiperhidrosis primer` → **primer dan sekunder** (also ID: bisa sembuh, penyakit apa) | KEYWORD: **Jenis hiperhidrosis: primer atau sekunder?** |
| jumpNav "Which kind is it?" | as above | as above | KEYWORD: **Jenis hiperhidrosis** |
| tab "Primary" / "Primary focal hyperhidrosis" | hiperhidrosis primer | → hiperhidrosis focal primer | KEYWORD: **Primer** / **Hiperhidrosis fokal primer** |
| tab "Secondary" / "Sweating as a symptom" | apa itu hiperhidrosis (→ sekunder) | `apa itu hiperhidrosis sekunder` appears | DIRECT: **Sekunder** / **Peluh sebagai simptom** (title kept literal) |
| locationBlock.heading "Where it happens" | peluh ketiak, ketiak berpeluh, tapak tangan berpeluh, tangan berpeluh, tapak kaki berpeluh, kaki berpeluh, muka berpeluh, kepala berpeluh, peluh berlebihan seluruh badan | every per-zone form is strong and MY: `ketiak berpeluh` → dalam aircond, dan berbau; `tapak tangan berpeluh` → kenapa, penyakit; `muka berpeluh` → berlebihan, lepas pakai sunscreen | KEYWORD: **Bahagian badan yang berpeluh berlebihan**; card titles Ketiak / Tapak tangan / Tapak kaki / Muka dan kulit kepala / Seluruh badan |
| jumpNav "Where it happens" | n/a | n/a | DIRECT: **Bahagian yang berpeluh** |
| seeDoctor.heading "When to see a doctor" | bila perlu jumpa doktor berpeluh | nothing | DIRECT: **Bila perlu berjumpa doktor** (matches `concern-ui.ts`) |
| jumpNav "When to see a doctor" | as above | nothing | DIRECT: **Bila perlu jumpa doktor** |
| jumpNav "Treatment" | rawatan hyperhidrosis, rawatan ketiak berpeluh | both return | KEYWORD (term): **Rawatan** |
| jumpNav "Risks" | n/a | n/a | DIRECT: **Risiko** |
| jumpNav "FAQ" | n/a | n/a | DIRECT: **Soalan lazim** |
| ctaMid.heading | n/a | n/a | DIRECT: **Tak pasti sama ada peluh anda perlu disiasat?** |
| ctaHeading | n/a | n/a | DIRECT: **Tak pasti bahagian mana yang terjejas?** |
| FAQ 1 "Is excessive sweating a medical condition?" | penyakit peluh berlebihan, kuat berpeluh tanda penyakit, kuat berpeluh adakah sihat | all return (MY) | KEYWORD: **Adakah peluh berlebihan satu penyakit?** |
| FAQ 2 "What causes excessive sweating?" | punca peluh berlebihan | returns | KEYWORD: **Apa punca peluh berlebihan?** |
| FAQ 3 "Is excessive sweating treatable?" | hiperhidrosis boleh sembuh, hyperhidrosis boleh sembuh ke, peluh berlebihan boleh sembuh | nothing (only ID `… apakah bisa sembuh`) | DIRECT: **Boleh ke peluh berlebihan dirawat?** |
| FAQ 4 "Different from normal sweating in hot weather?" | cuaca panas berpeluh, berpeluh normal ke, berpeluh dalam aircond | **`berpeluh dalam aircond`** → badan / tangan / ketiak / tidur berpeluh dalam aircond, kenapa berpeluh dalam aircond (strongly MY); the others empty | KEYWORD: **Apa bezanya dengan berpeluh biasa dalam cuaca panas, atau berpeluh dalam aircond?** (the EN answer already covers the air-conditioned room) |
| FAQ 5 "Deodorant vs antiperspirant?" | deodorant dan antiperspirant, beza deodorant dan antiperspirant | `beza deodorant dan antiperspirant` returns exactly (MY *beza*; ID *perbedaan* also present) | KEYWORD: **Apa beza deodorant dan antiperspirant?** |
| FAQ 6 "Why do night sweats matter?" | berpeluh waktu malam, peluh malam, berpeluh malam, tidur berpeluh | `berpeluh waktu malam` → simptom kanser, punca, kenapa (MY) | KEYWORD: **Kenapa berpeluh waktu malam perlu diberi perhatian?** |
| FAQ 7 "Sweat more elsewhere?" | peluh pampasan, compensatory sweating | Malay form empty; English returns | DIRECT: **Adakah merawat satu bahagian akan membuatkan saya lebih berpeluh di tempat lain?** (*peluh pampasan (compensatory sweating)* in the answer) |
| FAQ 8 "Does sweating cause body odour?" | bau badan, bau ketiak, peluh dan bau badan, ketiak berpeluh | `ketiak berpeluh` → **ketiak berpeluh dan berbau**; `peluh ketiak` → peluh ketiak berbau; `bau badan` strong | KEYWORD: **Adakah peluh berlebihan menyebabkan bau badan?** |

**Malay tally (29 logged strings):** 17 KEYWORD, 12 DIRECT. CTA headings counted as DIRECT.

**Indonesian pollution seen and avoided:** `hiperhidrosis … obat nya apa / apakah berbahaya / bisa sembuh`, `antiperspirant terbaik untuk keringat berlebih / di indomaret`, `perbedaan deodorant dan antiperspirant`, `botox ketiak zap`. *Keringat* (ID for sweat) is never used; *peluh / berpeluh* throughout. "antiperspirant terbaik" is in AC but is a banned superlative.

## For the bilingual doctor-reviewer

1. **Name choice (not in docs/18 §5):** zh **多汗症**, ms **Peluh Berlebihan (Hiperhidrosis)**. Please confirm. Alternatives seen in AC: 出汗过多 / 流汗过多 (plain zh, weaker hub), *berpeluh berlebihan* (verb form, also strong).
2. **狐臭 in FAQ 8 (zh).** The question is 多汗会引起体味或狐臭吗？ because `狐臭 多汗症` has demand. 狐臭 is apocrine odour (bromhidrosis), and the answer says odour and sweating are separate problems. Confirm it's fine to name 狐臭 here, and that no treatment for it is implied.
3. **Drug not named.** EN calls it "a prescription injectable"; both locales keep 处方注射剂 / *suntikan preskripsi*. AC demand is heavy on `腋下肉毒`, `多汗症 肉毒杆菌`, `botox ketiak`, `suntikan botox hiperhidrosis`. Naming 肉毒杆菌素 / *toksin botulinum* on the concern page is a compliance call. "Botox" appears nowhere.
4. **Gland terms:** 小汗腺（外泌汗腺） / 大汗腺（顶泌汗腺）; *kelenjar peluh ekrin / apokrin*. 离子导入疗法 / *iontoforesis* for iontophoresis. 医学级止汗剂 / *antiperspirant gred klinikal* for "clinical-strength antiperspirant". Please confirm.
5. **GP** → 家庭医生 (zh) and *doktor am* (ms).
6. **Cure wording.** Only negated: 本页没有任何一项能治愈原发性多汗症 / 原发性多汗症无法治愈; *tidak dapat disembuhkan* / *Tiada apa-apa … yang menyembuhkan*. The validator raised no L-03r on either file.
7. **Illustration caption** keeps "示意图，并非患者的真实效果" / "Ilustrasi, bukan hasil pesakit", as EN does.
