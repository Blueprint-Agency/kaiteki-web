# 19. Concern keyword log: Body Slimming (`/concerns/body-slimming`)

**Date:** 2026-10-14 · Follows the method of the pilot (`acne.md`).
**Outputs:** `content/i18n/concerns/zh/body-slimming.json`, `content/i18n/concerns/ms/body-slimming.json` (same shape as the EN record).
**Inputs:** EN record for `body-slimming`, `docs/18-trilingual-keyword-map.md` §5 (display names), §6 and §7 (avoid list).

## Method

Same as the pilot. Google Autocomplete (free) at `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. **HAS VOLUME** = the phrase or a natural Malaysian form shows up with Malaysian context (or at least without a Taiwan/HK/Indonesia skew). **KEYWORD** = string phrased around the real query, English meaning kept. **DIRECT** = faithful translation, no invented keyword.

- **Probes:** 101 zh and 83 ms, in two batches per language. Raw output is in the session scratchpad, not in the repo.
- **Scope:** only search-relevant strings are logged. All body copy is a direct, faithful translation.
- **This record has no `locationBlock`, no `compare` table and no `seeDoctor.heading`.** The variant is a `pairs` block (myth / reality), not tabs.
- **The compliance frame decides more here than demand does.** This is body contouring, not weight loss (docs/18 §5). Chinese AC for 瘦身 is product and diet led (瘦身针, 瘦身茶), and 减肥 means slimming centres and weight-loss claims. **减肥 is not used anywhere**; "weight loss" is 减重 throughout. Malay uses *turun / menurunkan berat badan* for weight loss and *membentuk badan* for contouring.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Body Slimming" | 瘦身塑形, 瘦身, 身体塑形, 塑形, 塑身, 医美瘦身 | `瘦身塑形` empty; `瘦身` → 瘦身针, 瘦身茶, 瘦身产品 (product/diet led); `身体塑形` → 英文 only; `塑身` → 塑身衣 | DIRECT: **瘦身塑形** (docs/18 §5 locked name kept; the compound has no AC of its own, see reviewer note 1) |
| **seoTitle** "Body Slimming Treatment & Assessment in Malaysia \| Kaiteki" | 局部瘦身, 局部减脂, 瘦身 医美, 医美瘦身, 瘦身 疗程, 冷冻溶脂 马来西亚 | `局部瘦身` → 可行吗, 医美, 迷思; `局部减脂` → 局部减脂医美; `医美瘦身` → 推荐; `+马来西亚` empty | KEYWORD: **马来西亚局部瘦身塑形疗程与评估 \| Kaiteki** (25 chars). 局部 also carries the "localised, not overall weight" frame. |
| **seoDescription** | (same family) + 顽固脂肪 | `顽固脂肪` → 怎么减, 是什么, 消除 | KEYWORD: 局部顽固脂肪, 瘦身塑形, 不是减重疗程, 免费咨询 (75 chars) |
| sections[0].heading "What is body slimming / contouring?" | 什么是身体塑形, 身体塑形是什么, 塑身是什么, 身体塑形, 身体雕塑 | question forms empty; `身体塑形` returns itself; `身体雕塑` → 医美 | KEYWORD (weak): **什么是瘦身塑形（身体塑形）？** |
| drivers.heading "What contouring actually addresses" | 顽固脂肪, 局部肥胖, 局部脂肪 | `顽固脂肪` → 怎么减, 是什么, 消除, 肚子 顽固脂肪; `局部肥胖` → 原因 | KEYWORD: **塑形真正处理的是什么：局部顽固脂肪** |
| jumpNav "What it addresses" | as above | as above | KEYWORD: **顽固脂肪** |
| drivers leads (body terms, checked) | 小肚子, 下腹 赘肉, 下腹 脂肪, 腰间赘肉, 游泳圈, 副乳, 背部赘肉, 橘皮组织, 肚腩 | `下腹脂肪` → 原因, 怎么减; `腰间赘肉` → 怎么消, 原因; `游泳圈` → **游泳圈 马来文** (MY signal); `副乳` → 怎么消除; `背部赘肉` → 如何消除; `橘皮组织` → 怎么消除, 医美 | Terms used: 下腹的小肚子, 腰侧赘肉（游泳圈）, 副乳 / 背部赘肉, 橘皮组织 (not counted) |
| variant.heading "What it does and doesn't do" | 局部瘦身 迷思, 瘦身 迷思, 局部瘦身 | `局部瘦身迷思` returns itself and sits in the `局部瘦身` list next to `局部瘦身可行吗` | KEYWORD: **局部瘦身迷思：塑形能做到和做不到的事** |
| jumpNav "What it does and doesn't do" | as above | as above | KEYWORD: **局部瘦身迷思** |
| jumpNav "Treatments" | 瘦身 疗程 | `瘦身疗程` → 英文, 韩国 | DIRECT: **疗程** |
| jumpNav "Risks" | 瘦身 风险, 冷冻溶脂 风险, 冷冻溶脂 副作用 | the 冷冻溶脂 forms return themselves (treatment level) | DIRECT: **风险** |
| jumpNav "Cost" | 冷冻溶脂价钱, 冷冻溶脂 价格, 瘦身疗程 价钱, 酷塑 | `冷冻溶脂价钱` returns; `酷塑` → **酷塑冷冻减脂价钱**; `价格` forms are TW/KR | KEYWORD (term choice): **价钱** |
| jumpNav "FAQ" | 瘦身 常见问题 | nothing | DIRECT: **常见问题** |
| ctaMid.heading "Not sure if it's fat or loose skin?" | 是脂肪还是皮肤松弛 | nothing | DIRECT: **不确定是脂肪还是皮肤松弛？** |
| ctaHeading "Not sure where to start?" | n/a (conversion copy) | n/a | DIRECT: **不知道从哪里开始？** |
| FAQ 1 "Is body contouring a way to lose weight?" | 冷冻溶脂会瘦吗, 冷冻溶脂 减重, 瘦身和减肥的区别, 塑身和减肥的区别 | all empty | DIRECT: **身体塑形是减重的方法吗？** |
| FAQ 2 "Will the fat come back?" | 冷冻溶脂 反弹, 冷冻溶脂会反弹吗, 溶脂会反弹吗, 脂肪 会反弹吗, 脂肪细胞 会再生吗 | all empty | DIRECT: **脂肪会反弹回来吗？** (反弹 is just the natural word) |
| FAQ 3 "How soon will I see a difference?" | 冷冻溶脂 多久见效, 冷冻溶脂 多久, 冷冻溶脂 效果 | `冷冻溶脂 多久` → 多久做一次 (a different question); `效果` returns itself | DIRECT: **多久能看到变化？** (same as the pilot; 见效 avoided) |
| FAQ 4 "Does it hurt?" | 冷冻溶脂 痛吗 | returns itself | KEYWORD: **冷冻溶脂等疗程会痛吗？** (the answer also covers muscle stimulation; no 无痛) |
| FAQ 5 "Can it treat cellulite?" | 橘皮组织, 橘皮纹, 橘皮组织 能消除吗, 冷冻溶脂 橘皮 | `橘皮组织` → 怎么消除, 原因, 医美; the "能消除吗" form empty | KEYWORD: **橘皮组织可以治疗吗？** (answer: improved, not removed) |
| FAQ 6 "Will it tighten loose skin?" | 皮肤松弛, 肚皮松弛, 产后皮肤松弛, 冷冻溶脂 皮肤松弛 | `皮肤松弛` → 改善, 怎么办; `肚皮松弛` → 医美, 改善 | KEYWORD: **塑形能收紧松弛的皮肤吗？** |
| FAQ 7 "Can I have this after pregnancy?" | 产后瘦身, 产后 冷冻溶脂, 冷冻溶脂 产后, 腹直肌分离 | `产后瘦身` → 黄金期, 肚子, 运动 (some dcard/ptt); `腹直肌分离` → 修复, 自测, 原因 | KEYWORD: **产后可以做瘦身塑形吗？** (the answer names 腹直肌分离) |
| FAQ 8 "How do I know if I'm a suitable candidate?" | 冷冻溶脂 适合谁, 适合冷冻溶脂, 冷冻溶脂 不适合, 冷冻溶脂 bmi | all empty | DIRECT: **怎么知道自己适不适合？** |

**Chinese tally (22 logged strings):** 12 KEYWORD, 10 DIRECT. CTA headings are counted as DIRECT. The drivers-leads row is a body-term check and isn't counted.

**Not usable:** `瘦身中心` and `减肥中心` (slimming-centre intent, avoided per docs/18 §7), `溶脂针` (an injectable product; not this page's treatments), `emsculpt` (brand demand; MY forms empty), and every "+马来西亚" form.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Body Slimming" | pelangsingan badan, rawatan pelangsingan badan, rawatan kurus badan, rawatan kuruskan badan, kontur badan | `pelangsingan badan` → rawatan, pusat, program, in english (MY); `rawatan kuruskan badan` → pusat rawatan …; `kontur badan` returns itself | KEYWORD: **Pelangsingan Badan** (docs/18 §5 confirmed) |
| **seoTitle** | rawatan pelangsingan badan, body contouring malaysia, kos rawatan pelangsingan badan | `rawatan pelangsingan badan` sits in the head-term list; `body contouring malaysia` returns itself; `+kos/harga` empty | KEYWORD: **Rawatan Pelangsingan Badan di Malaysia \| Kaiteki** (48 chars; "& Assessment" didn't fit with *Malaysia*, so the description carries it) |
| **seoDescription** | + lemak degil, konsultasi percuma | `lemak degil` → di perut, cara buang (MY) | KEYWORD: lemak degil setempat, pelangsingan badan, bukan rawatan menurunkan berat badan, konsultasi percuma (158 chars) |
| sections[0].heading "What is body slimming / contouring?" | apa itu pelangsingan badan, apa itu body contouring, body contouring adalah | `apa itu body contouring` returns itself; `body contouring adalah` returns; Malay form empty | KEYWORD: **Apa itu pelangsingan badan (body contouring)?** |
| drivers.heading "What contouring actually addresses" | lemak degil, lemak degil perut, punca lemak degil, lemak perut susah hilang | `lemak degil` → di perut, cara hilangkan (MY: *hilangkan*); `lemak perut susah hilang` → *padahal sudah olahraga* (ID tail) | KEYWORD: **Lemak degil: apa yang sebenarnya dirawat** |
| jumpNav "What it addresses" | as above | as above | KEYWORD: **Lemak degil** |
| drivers leads (body terms, checked) | lemak perut bawah, perut buncit bawah pusat, lemak tepi pinggang, love handle, lemak belakang badan, lemak bawah ketiak, lemak tepi bra, selulit perut | `lemak perut bawah` → susah hilang, wanita; `lemak tepi pinggang` → buang …; `love handles` English; `lemak belakang badan` → punca, buang; `lemak bawah ketiak` → buang, lebihan; bra forms empty | Terms used: *Lemak perut bawah*, *Lemak tepi pinggang (love handles)*, *Garisan bra dan belakang atas*, *selulit* (not counted) |
| variant.heading "What it does and doesn't do" | mitos kurus, mitos lemak | `mitos kurus` → *mitos cowok* (ID); `mitos tentang lemak` (nutrition intent) | DIRECT: **Apa yang ia boleh dan tidak boleh buat** |
| jumpNav "What it does and doesn't do" | as above | as above | DIRECT: **Boleh dan tidak boleh** |
| jumpNav "Treatments" | rawatan pelangsingan badan, rawatan lemak | `rawatan lemak` → rawatan buang lemak, rawatan pecah lemak (MY) | KEYWORD (term): **Rawatan** |
| jumpNav "Risks" | risiko fat freezing, fat freezing bahaya, coolsculpting side effects | only `bahaya fat freezing`; English `coolsculpting side effects` → pah | DIRECT: **Risiko** |
| jumpNav "Cost" | kos fat freezing, fat freezing harga, rawatan pelangsingan badan harga, kos rawatan pelangsingan badan | only `fat freezing harga` returns itself; `fat freezing malaysia` → price (English) | KEYWORD (term, docs/18 §6): **Kos** |
| jumpNav "FAQ" | n/a | n/a | DIRECT: **Soalan lazim** |
| ctaMid.heading "Not sure if it's fat or loose skin?" | kulit kendur, kulit perut kendur | both Indonesian-skewed (*setelah, karena, melahirkan*) | DIRECT: **Tak pasti sama ada lemak atau kulit kendur?** |
| ctaHeading "Not sure where to start?" | n/a | n/a | DIRECT: **Tak pasti nak mula dari mana?** |
| FAQ 1 "A way to lose weight?" | body contouring kurus ke, fat freezing boleh kurus ke, fat freezing turun berat, rawatan kurus badan | question forms empty; `rawatan kurus badan` returns itself (but that is a different, weight-loss intent) | DIRECT: **Adakah body contouring satu cara untuk turunkan berat badan?** |
| FAQ 2 "Will the fat come back?" | lemak datang balik, lemak naik balik, fat freezing lemak datang balik | all empty | DIRECT: **Lemak akan datang balik ke?** |
| FAQ 3 "How soon will I see a difference?" | fat freezing berapa lama nampak hasil | empty | DIRECT: **Berapa lama baru nampak perubahan?** (same as the pilot) |
| FAQ 4 "Does it hurt?" | fat freezing sakit ke, body contouring sakit ke | empty | DIRECT: **Rawatan ini sakit ke?** (same as the pilot) |
| FAQ 5 "Can it treat cellulite?" | selulit, rawatan selulit, selulit boleh hilang ke, cara hilangkan selulit | `rawatan selulit` returns; `cara hilangkan selulit` → di perut, di paha, selepas bersalin (MY); `selulit` alone collides with *selulitis* (the infection) | KEYWORD: **Selulit boleh dirawat ke?** |
| FAQ 6 "Will it tighten loose skin?" | kulit kendur, kulit perut kendur, rawatan kulit kendur badan | Indonesian-skewed or empty | DIRECT: **Adakah ia akan menegangkan kulit yang kendur?** |
| FAQ 7 "After pregnancy?" | kurus selepas bersalin, fat freezing selepas bersalin, pelangsingan badan selepas bersalin, diastasis recti | `kurus selepas bersalin` → tips, cara cepat (MY); treatment forms empty; `diastasis recti` English-led | KEYWORD: **Boleh buat rawatan ini selepas bersalin?** (*selepas bersalin* is the MY form; the answer names *diastasis recti*) |
| FAQ 8 "Suitable candidate?" | siapa sesuai fat freezing, fat freezing sesuai untuk siapa | empty | DIRECT: **Macam mana nak tahu saya sesuai atau tidak?** |

**Malay tally (22 logged strings):** 10 KEYWORD, 12 DIRECT. CTA headings are counted as DIRECT. The drivers-leads row isn't counted.

**Indonesian pollution seen and avoided:** kulit kendur (*setelah, karena apa*), kulit perut kendur (*setelah melahirkan, mengatasi*), lemak perut susah hilang (*padahal sudah olahraga*), lemak perut bawah (*pusar, pria*), mitos kurus (*cowok*). *Produk pelangsingan badan paling berkesan* also appears (superlative; avoided).

## For the bilingual doctor-reviewer

1. **The zh name 瘦身塑形 has no autocomplete of its own.** It is kept because docs/18 §5 locks it. 瘦身 on its own pulls diet products and 瘦身针; 局部瘦身 (localised slimming) has the cleaner clinic intent and is used in the title and variant heading. Worth checking if the client would rather 局部瘦身塑形 as the display name.
2. **"Weight loss" is 减重 in zh, never 减肥** (docs/18 §5: 减肥 reads as a weight-loss claim or a slimming centre). In ms it is *turun / menurunkan berat badan*; *kurus* is used only in the AC probes, never in the copy.
3. **Paradoxical adipose hyperplasia** is 反常性脂肪增生 (AC confirms the term, including `冷冻减脂 反常性脂肪增生`) and *hiperplasia adipos paradoks (PAH)* in ms. Please confirm the Malay clinical term.
4. **Cold conditions:** 冷球蛋白血症 / 寒冷性荨麻疹; *krioglobulinemia* / *urtikaria sejuk*. **Abdominal separation:** 腹直肌分离 / *pemisahan otot perut (diastasis recti)*.
5. **Treatment names in body copy:** zh names the fat-freezing treatment 冷冻溶脂 (docs/18 §5); ms uses *Fat freezing (kriolipolisis)*. The microwave and muscle-stimulation treatments are described generically, as in EN. No brand names (CoolSculpting, 酷塑, EMSculpt) are used.
6. **zh FAQ 4 is narrower than EN** (冷冻溶脂等疗程会痛吗), because `冷冻溶脂 痛吗` is the only form with AC. The answer still covers muscle stimulation, and there's no 无痛 anywhere.
7. **ms "selulit" vs "selulitis".** Malay AC mixes cellulite with *selulitis* (a skin infection). The copy only ever says *selulit*. Worth one glance to make sure readers won't confuse the two.

No L-03r warnings were raised on these files.

## Re-sync 2026-10-14 (English rewrite)

The English page was rewritten upstream; the sync tool kept every unchanged translation and blanked 30 strings per locale. Only one blank is search-relevant: `sections[0].heading`, which changed from "What is body slimming / contouring?" to "What is body contouring?". The earlier decision for that heading was reused (no new probe needed for zh; one ms re-check).

### Chinese (`/zh`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| sections[0].heading "What is body contouring?" | reused: 什么是身体塑形, 身体塑形是什么, 塑身是什么, 身体塑形, 身体雕塑 (logged above) | question forms empty; `身体塑形` returns itself | KEYWORD (weak, reused): **什么是身体塑形（瘦身塑形）？** Order flipped to follow EN, which now leads with "body contouring"; 瘦身塑形 (the locked name) kept as the gloss. |

### Malay (`/ms`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| sections[0].heading "What is body contouring?" | apa itu body contouring (re-checked 2026-10-14) + earlier log | `apa itu body contouring` returns itself; Malay form empty | KEYWORD (reused): **Apa itu body contouring (pelangsingan badan)?** Order flipped to follow EN. |

**Body blanks translated directly:** 29 zh, 29 ms (leadAnswer, facts[2], section body, drivers intro and three item bodies, variant intro and pairs[0].reality, seeDoctor intro/outro, ctaMid.body, treatments intro/note, firstVisit intro and steps[1]/[2], risks items[1]/[3], costFactors.intro, technologyIntro, FAQ answers 1, 2, 3, 5, 6, 7). Most are the old translation trimmed to the shorter English; no claims added.

**Reviewer notes**

1. ms `drivers.intro` was first drafted with *kekal* ("persist") and raised L-03r; reworded to *masih tinggal* so it can't be read as "permanent".
2. zh `facts[2].label` renders "whether cooling applies" as 冷冻溶脂是否适用, naming the treatment as the body copy already does. ms keeps the generic *rawatan penyejukan*.
3. "No obligation to proceed" is 你没有义务一定要进行疗程 / *Tiada sebarang kewajipan untuk meneruskan rawatan*, matching the homepage FAQ wording.

No L-03r warnings remain on these files.
