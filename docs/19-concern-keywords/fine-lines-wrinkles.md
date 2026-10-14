# 19. Concern keyword log: Fine Lines & Wrinkles (`/concerns/fine-lines-wrinkles`)

**Date:** 2026-10-14 · Follows the method of the pilot (`acne.md`).
**Outputs:** `content/i18n/concerns/zh/fine-lines-wrinkles.json`, `content/i18n/concerns/ms/fine-lines-wrinkles.json` (same shape as the EN record).
**Inputs:** EN record for `fine-lines-wrinkles`, `docs/18-trilingual-keyword-map.md` §5 (display names), §6 and §7 (avoid list).

## Method

Same as `acne.md`: Google Autocomplete (`client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`) as the volume proxy. **KEYWORD** = the string is phrased around a real Malaysian query form, keeping the EN meaning. **DIRECT** = faithful translation, no invented keyword.

- **Probes:** 130 zh and 78 ms, in two zh batches and one ms batch. Raw JSON dumps are in `C:/tmp/flw-ac-*.json` (not in the repo).
- **Scope:** search-relevant strings only. All body copy is a direct, faithful translation.
- **No `seeDoctor.heading` in the source.** It comes from shared UI (`concern-ui.ts`), as on the acne page. The same goes for the risks, cost, FAQ and first-visit H2s.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Fine Lines & Wrinkles" | 皱纹, 细纹, 皱纹与细纹 | `皱纹` → 皱纹 英文, **皱纹 马来文** (MY signal); `细纹` → 细纹 医美; the compound returns nothing | KEYWORD: **皱纹与细纹** (docs/18 §5 confirmed) |
| **seoTitle** "Fine Lines & Wrinkles Treatment in Malaysia \| Kaiteki" | 皱纹治疗, 去皱, 去皱纹, 医美去皱, 去皱 医美, 皱纹 医美, 细纹 医美, 去皱纹 医美, 抗皱 医美, 皱纹 马来西亚, 去皱 马来西亚 | `皱纹 医美`, `细纹 医美` (→ 眼周/额头 细纹 医美), `去皱纹 医美`, `抗皱 医美` return; `皱纹治疗` and "+马来西亚" forms empty | KEYWORD: **马来西亚皱纹与细纹医美疗程 \| Kaiteki** (23 chars). 马来西亚 kept for the EN geo intent. |
| **seoDescription** | (same family) | `去皱` → 去皱纹的方法, 去皱纹护肤品 | KEYWORD: 动态纹, 静态纹, 皱纹与细纹, 去皱, 免费咨询 (76 chars) |
| sections[0].heading "What are fine lines and wrinkles?" | 皱纹是什么, 什么是皱纹, 细纹 是什么 | only `细纹是什么` returns | KEYWORD: **细纹和皱纹是什么？** |
| drivers.heading "What causes them" | 皱纹形成原因, 皱纹的成因, 长皱纹的原因, 为什么会长皱纹, 皱纹原因, 皱纹 原因, 皱纹 怎么 | `皱纹 原因` → 皱纹原因, 皱纹 形成 原因, 额头 皱纹 原因; `皱纹 怎么` → 皱纹 是 怎么 形成 的; `为什么会长皱纹` returns | KEYWORD: **皱纹形成的原因** |
| jumpNav "What causes them" | as above | as above | KEYWORD: **皱纹原因** |
| variant.heading "Which type do I have?" | 皱纹类型, 皱纹种类, 动态纹, 静态纹, 动态纹和静态纹, 动态纹 静态纹 | `动态纹` → 动态纹 静态纹, 动态纹是什么, 动态纹 肉毒, 动态纹 医美; `静态纹` → 静态纹消除, 静态纹是什么 (some dcard); `皱纹类型/种类` return only themselves | KEYWORD: **动态纹还是静态纹：我属于哪一种？** |
| jumpNav "Which type do I have?" | as above | as above | KEYWORD: **动态纹与静态纹** |
| tab "Dynamic" / "Dynamic lines" | 动态纹, 动态纹是什么 | as above | KEYWORD: **动态纹** / **动态纹** |
| tab "Static" / "Static lines" | 静态纹, 静态纹是什么 | as above | KEYWORD: **静态纹** / **静态纹** |
| tab "Fold" / "Volume-related folds" | 法令纹, 木偶纹, 法令纹是什么, 木偶纹原因, 法令纹 苹果肌 | `法令纹` → 法令纹怎么消除, 法令纹是什么; `木偶纹` → 木偶纹是什么, 木偶纹原因, 木偶纹改善; `法令纹 苹果肌` → 苹果肌下垂 | KEYWORD: **褶皱** / **容量流失造成的褶皱（法令纹、木偶纹）** |
| locationBlock.heading "Where lines appear" | 皱纹 部位, 脸上皱纹 部位, per-zone: 抬头纹, 川字纹, 眉间纹, 鱼尾纹, 眼下细纹, 眼周细纹, 口周纹, 嘴边皱纹, 嘴角纹, 颈纹, 脖子皱纹, 额头皱纹 | `皱纹 部位` returns only itself; per-zone forms are strong (抬头纹怎么消除, 川字纹怎么消除, 鱼尾纹怎么消除, 眼周细纹 改善, 颈纹怎么消除) | KEYWORD: **皱纹部位：常出现在哪里**; zone names used in the card titles (below) |
| location card titles (body, but checked) | as above | 抬头纹, 川字纹, 鱼尾纹, 眼下细纹, 口周纹 (thin), 木偶纹, 颈纹 all return | Terms used: 额头与眉间（抬头纹、川字纹）, 眼周（鱼尾纹、眼下细纹）, 嘴巴周围（口周纹、木偶纹）, 颈部与前胸（颈纹） |
| jumpNav "Where they appear" | as above | as above | KEYWORD: **皱纹部位** |
| jumpNav "Treatments" | n/a | n/a | DIRECT: **疗程** |
| jumpNav "Risks" | n/a | n/a | DIRECT: **风险** |
| jumpNav "Cost" | 去皱纹 价钱, 去皱 价钱, 肉毒杆菌 价钱, 肉毒杆菌 多少钱 | concern+价钱 empty; `肉毒杆菌多少钱` returns (treatment level) | KEYWORD (term choice, docs/18 §6): **价钱** |
| jumpNav "FAQ" | n/a | n/a | DIRECT: **常见问题** |
| compare.columns "Downtime" | (docs/18 §6) | carried from docs/18 | KEYWORD: **恢复期** |
| compare.columns other three | n/a | n/a | DIRECT: 你的情况 / 常考虑的疗程 / 一般疗程安排 |
| ctaMid.heading "Wrinkle or fold?" | 皱纹还是, 是皱纹还是, 皱纹还是法令纹 | nothing | DIRECT: **是皱纹，还是褶皱？** |
| ctaHeading "Find out what's making your lines" | n/a (conversion copy) | n/a | DIRECT: **找出你皱纹的成因** |
| FAQ 1 "Difference between fine lines and wrinkles?" | 细纹 皱纹 区别, 细纹和皱纹的区别 | nothing | DIRECT: **细纹和皱纹有什么区别？** |
| FAQ 2 "Can lines and wrinkles be prevented?" | 预防皱纹, 如何预防皱纹, 皱纹可以预防吗 | only `预防皱纹` returns | KEYWORD: **可以预防皱纹吗？** |
| FAQ 3 "Will muscle-relaxing injection make my face look frozen?" | 肉毒杆菌 僵硬, 打肉毒会僵硬吗, 表情僵硬, 肉毒 僵硬, 肉毒 脸僵, 打肉毒 脸僵 | `表情僵硬` → 肉毒 表情僵硬; `肉毒 脸僵` → 肉毒脸僵硬; `打肉毒 脸僵` → 打肉毒脸僵硬 | KEYWORD (partial: **表情僵硬**): **放松肌肉的注射会让表情变僵硬吗？** The drug name is not added (see reviewer note 1). |
| FAQ 4 "Are nasolabial folds wrinkles?" | 法令纹是皱纹吗, 法令纹是什么 | `法令纹是什么` returns; the exact question doesn't | KEYWORD (term 法令纹): **法令纹算是皱纹吗？** |
| FAQ 5 "How soon will I see a difference?" | 去皱 多久见效, 肉毒杆菌 多久见效 | only treatment-level `肉毒杆菌多久见效` | DIRECT: **多久能看到变化？** (见效 avoided, as in the pilot) |
| FAQ 6 "How long do the effects last?" | 去皱 维持多久, 肉毒杆菌 维持多久, 玻尿酸 维持多久 | treatment-level `肉毒杆菌维持多久`, `玻尿酸 维持多久`, `法令纹 玻尿酸 维持多久` return | KEYWORD (pattern **维持多久**): **效果可以维持多久？** |
| FAQ 7 "Is treatment painful?" | 去皱 痛吗, 肉毒杆菌 痛吗, 打肉毒痛吗 | `打肉毒痛吗`, `肉毒杆菌 痛吗` return | KEYWORD (pattern): **疗程会痛吗？** (no 无痛 anywhere) |
| FAQ 8 "Can I start treatment in my twenties or thirties?" | 几岁开始打肉毒, 几岁开始抗衰老, 25岁打肉毒, 几岁开始长皱纹, 二十几岁 皱纹 | only `几岁开始打肉毒` returns | KEYWORD (partial: age + 去皱): **二三十岁就可以开始做去皱疗程吗？** |
| FAQ 9 "Does skincare actually help?" | 护肤品 去皱 有用吗, 抗皱护肤品有用吗, 去皱纹护肤品 | `去皱` → **去皱纹护肤品** is the top suggestion; `抗皱` → 抗皱保养品 | KEYWORD: **去皱护肤品真的有用吗？** |
| FAQ 10 "Can the lines on my neck be treated?" | 颈纹, 颈纹怎么消除, 颈纹 医美, 脖子皱纹 | `颈纹` → 颈纹怎么消除, 颈纹可以消除吗, 颈纹原因; `颈纹 医美` is TW/HK-skewed | KEYWORD: **颈纹可以治疗吗？** (消除 avoided: removal promise) |
| FAQ 11 "What if I don't like the result?" | 不满意 玻尿酸, 玻尿酸 溶解, 玻尿酸溶解酶 | `玻尿酸溶解酶` strong (HK too), but not the question's intent | DIRECT: **如果对效果不满意怎么办？** |
| FAQ 12 "Should I treat every line I have?" | n/a | n/a | DIRECT: **每一条皱纹都需要处理吗？** |

**Chinese tally (33 logged strings):** 23 KEYWORD, 10 DIRECT. CTA headings counted as DIRECT. The location card-title row is a term check and isn't counted.

**Not usable (no MY demand):** `皱纹治疗`, `皱纹 马来西亚`, `去皱 马来西亚`, `医美去皱`, `去皱 价钱`. As with acne, Chinese demand is zone-led (抬头纹 / 法令纹 / 鱼尾纹 / 颈纹) and cause-led, not clinic-led. **Avoided on purpose:** `去皱针` (AC under `去皱`; names an injectable as a product, same class as 瘦脸针).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Fine Lines & Wrinkles" | garis halus, garis halus dan kedutan, kedutan muka | `garis halus` → di muka, bawah mata, di dahi, di pipi, tepi mata (MY); `kedutan muka` → **kedutan muka sebelah kanan/kiri** (twitch sense), kedutan muka in english, obat muka kedutan (ID) | KEYWORD: **Garis Halus & Kedutan** (docs/18 §5). The twitch reading is confirmed again, so *kedutan* never stands alone in the copy. |
| **seoTitle** | rawatan kedutan, rawatan kedutan muka, rawatan garis halus, rawatan garis halus muka, rawatan kedutan malaysia | `rawatan kedutan` → **rawatan kedutan di dahi, rawatan kedutan bawah mata** (wrinkle sense); the others empty | KEYWORD: **Rawatan Garis Halus & Kedutan Muka di Malaysia \| Kaiteki** (56 chars) |
| **seoDescription** | (same family) + konsultasi percuma (docs/18) | as above | KEYWORD: garis halus, kedutan muka, konsultasi percuma (158 chars) |
| sections[0].heading "What are fine lines and wrinkles?" | apa itu garis halus, apa itu kedutan | `apa itu garis halus` returns (also → … di wajah, ID-leaning); `apa itu kedutan` → kedutan otot / mata / hamil (twitch, ID) | KEYWORD (partial): **Apa itu garis halus dan kedutan muka?** |
| drivers.heading "What causes them" | punca kedutan, punca kedutan muka, punca garis halus, kenapa muka berkedut | `punca kedutan` → **punca kedutan di muka**, di dahi, bawah mata (MY *punca*); `punca garis halus` → bawah mata; `muka berkedut` mostly twitch | KEYWORD: **Punca garis halus dan kedutan di muka** |
| jumpNav "What causes them" | as above | as above | KEYWORD: **Punca kedutan** |
| variant.heading "Which type do I have?" | jenis kedutan, jenis kedutan muka, kedutan dinamik, kedutan statik | `jenis kedutan` returns itself; the rest empty | KEYWORD: **Jenis kedutan: yang mana satu anda alami?** |
| jumpNav "Which type do I have?" | as above | as above | KEYWORD: **Jenis kedutan** |
| tab "Dynamic" / "Dynamic lines" | kedutan dinamik | nothing | DIRECT: **Dinamik** / **Garis dinamik** |
| tab "Static" / "Static lines" | kedutan statik | nothing | DIRECT: **Statik** / **Garis statik** |
| tab "Fold" / "Volume-related folds" | garis senyum, garis senyuman, garis nasolabial, nasolabial fold, marionette lines | `garis senyuman` → cara hilangkan garis senyuman (MY); `garis senyum` → … disebut, namanya (ID); `garis nasolabial` → adalah (ID-leaning); `marionette lines` English only | KEYWORD: **Lipatan** / **Lipatan akibat kehilangan isi muka (garis senyuman, garis marionette)** |
| locationBlock.heading "Where lines appear" | garis halus di muka / di dahi / bawah mata / tepi mata / di pipi, kedutan dahi, kedutan bawah mata, kedutan tepi mata | `garis halus …` per-zone forms strong and MY; **`kedutan dahi`, `kedutan bawah mata`, `kedutan leher`, `kedutan bibir` are all twitch/primbon (ID)** | KEYWORD: **Garis halus di muka: di mana ia muncul** |
| location card titles (body, but checked) | garis dahi, garis kening, crow's feet, garis leher | `garis dahi` → vertikal, horizontal; `garis kening` = eyebrow make-up; `garis leher` = garment necklines; `crow's feet` English only | Terms used: *Dahi dan antara kening*, *Sekitar mata* (garis tepi mata, crow's feet in brackets in body), *Sekitar mulut*, *Pipi*, *Leher dan dada atas* |
| jumpNav "Where they appear" | as above | no zone-neutral form | DIRECT: **Di mana ia muncul** |
| jumpNav "Treatments" | rawatan kedutan | returns (wrinkle sense) | KEYWORD (term): **Rawatan** |
| jumpNav "Risks" | n/a | n/a | DIRECT: **Risiko** |
| jumpNav "Cost" | kos rawatan kedutan, harga botox malaysia | concern form empty; `harga botox malaysia` returns (drug name, not used) | DIRECT: **Kos** (term per docs/18 §6) |
| jumpNav "FAQ" | n/a | n/a | DIRECT: **Soalan lazim** |
| compare.columns "Downtime" | (docs/18 §6) | carried from docs/18 | KEYWORD: **Downtime** |
| compare.columns other three | n/a | n/a | DIRECT: Masalah anda / Biasa dipertimbangkan / Kursus biasa |
| ctaMid.heading "Wrinkle or fold?" | kedutan atau, garis halus atau kedutan | twitch noise only | DIRECT: **Kedutan atau lipatan?** |
| ctaHeading | n/a | n/a | DIRECT: **Ketahui punca garis di muka anda** |
| FAQ 1 "Difference between fine lines and wrinkles?" | beza garis halus dan kedutan | nothing | DIRECT: **Apa beza garis halus dan kedutan?** |
| FAQ 2 "Can lines be prevented?" | cegah kedutan, cara cegah kedutan, mencegah kedutan | `mencegah kedutan` → cara mencegah kedutan (also → mencegah mata kedutan, twitch) | KEYWORD (partial): **Boleh ke cegah kedutan muka?** (*muka* added to fix the sense) |
| FAQ 3 "Frozen face?" | botox muka kaku, muka kaku, muka kaku selepas | `muka kaku` → muka kaku sebelah (facial palsy sense) | DIRECT: **Adakah suntikan pelega otot akan membuatkan muka saya nampak kaku?** |
| FAQ 4 "Are nasolabial folds wrinkles?" | garis senyuman, garis nasolabial | as in the Fold tab | KEYWORD: **Adakah garis senyuman (lipatan nasolabial) sejenis kedutan?** |
| FAQ 5 "How soon will I see a difference?" | berapa lama botox | → berapa lama botox bertahan / terlihat hasilnya (ID) | DIRECT: **Berapa lama baru nampak perubahan?** |
| FAQ 6 "How long do the effects last?" | botox berapa lama, filler berapa lama, filler muka | `filler muka` → **filler muka tahan berapa lama** (MY *tahan*); botox forms use ID *bertahan* | KEYWORD: **Kesannya tahan berapa lama?** |
| FAQ 7 "Is treatment painful?" | botox sakit ke, suntik sakit ke | only sakit kepala noise | DIRECT: **Rawatan ini sakit ke?** |
| FAQ 8 "Start in my twenties or thirties?" | umur berapa boleh buat botox, botox umur 20an | nothing | DIRECT: **Boleh ke mula rawatan pada umur 20-an atau 30-an?** |
| FAQ 9 "Does skincare help?" | skincare untuk kedutan, skincare kedutan, retinol kedutan, sunblock kedutan | nothing | DIRECT: **Adakah skincare betul-betul membantu?** |
| FAQ 10 "Neck lines treated?" | kedutan leher, garis leher, leher berkedut | twitch / necklines only | DIRECT: **Boleh ke garis di leher dirawat?** (*kedutan leher* avoided: it means a neck twitch) |
| FAQ 11 "Don't like the result?" | filler boleh dibuang, filler boleh hilang | nothing | DIRECT: **Bagaimana jika saya tidak suka hasilnya?** |
| FAQ 12 "Treat every line?" | n/a | n/a | DIRECT: **Perlu ke rawat setiap garis yang ada?** |

**Malay tally (33 logged strings):** 15 KEYWORD, 18 DIRECT. CTA headings counted as DIRECT. The card-title row isn't counted.

**Indonesian / wrong-sense pollution seen and avoided:** *kedutan* + body part (dahi, bawah mata, leher, bibir, mata) = twitching, with *primbon* suggestions; `garis senyum disebut/namanya`, `garis halus … bisa hilang`, `apa itu garis halus di wajah`, `botox … bertahan / terlihat`, `obat muka kedutan`. Every *kedutan* in the copy is either *kedutan muka*, *garis halus dan kedutan*, or inside a sentence that is plainly about skin.

## For the bilingual doctor-reviewer

1. **The drug is never named in the FAQ questions.** EN says "muscle-relaxing injection"; both locales keep that (放松肌肉的注射 / *suntikan pelega otot*). AC demand sits on 肉毒 forms (`肉毒 表情僵硬`, `打肉毒痛吗`, `几岁开始打肉毒`, `harga botox malaysia`). Naming 肉毒杆菌素 / *toksin botulinum* in a concern-page question is a compliance call for the doctor or client. "Botox" appears nowhere.
2. **Fold vocabulary.** zh uses 褶皱 for "fold" and 法令纹 / 木偶纹 for nasolabial / marionette. ms uses *lipatan*, *garis senyuman (lipatan nasolabial)* and *garis marionette*. *Garis senyuman* is the everyday MY word but literally "smile line". Please confirm it's acceptable as the gloss for the nasolabial fold.
3. **Clinical terms:** 眉间纹 / 川字纹 (glabellar), 口周纹 (perioral), 炎症后色素沉着（反黑）; *garis glabela*, *garis perioral*, *hiperpigmentasi pasca-radang*, *oklusi saluran darah* (vascular occlusion, 血管栓塞).
4. **"Crepe lines"** became 细小的皱褶纹 and *garis halus berkerepot*. Confirm *berkerepot* reads naturally to Malaysian patients.
5. **Permanence words.** 永久 appears twice in zh: "没有一种是永久的" (negated) and "永久性产品" (factual, non-dissolvable fillers vs HA). *kekal* appears once in ms, negated ("Tiada satu pun yang kekal"). Where EN says lines "persist", ms uses *menetap*, so *kekal* doesn't read as a claim.
6. **FAQ 8 zh** adds 去皱 to the question (二三十岁就可以开始做去皱疗程吗？) for the AC pattern. The answer is unchanged and still says no age is medically correct.
7. **Before/after captions** are kept as 疗程之前与之后 / *sebelum dan selepas rawatan*, as in the pilot (ADR-0001).
