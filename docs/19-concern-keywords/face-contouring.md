# 19. Concern keyword log: Face contouring (`/concerns/face-contouring`)

**Date:** 2026-10-14 · Follows the method and format of the pilot (`acne.md`).
**Outputs:** `content/i18n/concerns/zh/face-contouring.json`, `content/i18n/concerns/ms/face-contouring.json` (same shape as the EN record).
**Inputs:** EN record for `face-contouring`, `docs/18-trilingual-keyword-map.md` §5 (display names) and §7 (avoid list).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, with `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME / NO VOLUME and KEYWORD / DIRECT exactly as in `acne.md`. Skew signals: *dcard / ptt / lihkg / 香港 / 價錢 (traditional)* for Chinese, *bisa / karena / penyebab / pria / artinya / wajah* for Malay.
- **Probes:** 140 zh and 66 ms, in four batches. Raw dumps are in the session scratchpad, not in the repo.
- **Scope:** only search-relevant strings are logged. All body copy is a direct, faithful translation.
- **This record has `seeDoctor.heading`** ("When it is worth an assessment"), so it is translated and logged here, unlike acne.
- **Muscle-relaxing injection** stays generic in both locales (放松肌肉的注射 / *suntikan pelemas otot*), as EN does. The product is never named, and 瘦脸针 / Botox are never written (docs/18 §7), even though `瘦脸` → *瘦脸针, 瘦脸针多少钱* and `botox rahang` are the strongest demand on this topic.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Face Contouring" | 脸型轮廓, 面部轮廓, 脸部轮廓, 瘦脸, V脸, v脸 医美, 脸型 医美 | `脸部轮廓` → 脸部轮廓 医美; `v脸 医美` returns (with a dcard tail); `瘦脸` → 瘦脸针 (not usable); `面部轮廓` is makeup-led (轮廓刷); `脸型轮廓` returns only itself | KEYWORD: **脸型轮廓（V脸）** (docs/18 §5 name kept) |
| **seoTitle** | 脸部轮廓 医美, v脸 医美, 瘦脸 医美, 面部轮廓 价钱, v脸 价钱 | `脸部轮廓 医美` and `v脸 医美` return; `瘦脸 医美` strong but TW/KR skewed; price forms empty | KEYWORD: **马来西亚脸部轮廓（V脸）疗程与评估 \| Kaiteki** (27 chars). 脸部轮廓 chosen over 脸型轮廓 in the title because it has the 医美 completion. |
| **seoDescription** | (same family) + 下颚线, 双下巴, 咬肌 | see rows below | KEYWORD: 下颚线, 下巴, V脸, 脸部轮廓, 双下巴, 咬肌, 松弛, 免费咨询 (80 chars) |
| sections[0].heading "What is face contouring?" | 脸部轮廓是什么, 什么是脸部轮廓, v脸是什么, 脸部轮廓 意思 | nothing | DIRECT: **什么是脸部轮廓？** |
| drivers.heading "What influences facial contour" | 脸型由什么决定, 脸型 是什么决定的, 脸型 原因, 下颚线不明显, 下颚线不明显 原因, 下颚线 原因, 脸大原因 | `下颚线不明显` → 下颚线不明显原因, 下颚线不明显医美 (MY-neutral; some dcard); `脸型由什么决定` empty | KEYWORD: **影响脸型轮廓的因素：下颚线为什么不明显？** (the section is about a jawline losing definition, so the AC question matches the content) |
| jumpNav "What influences it" | as above | as above | DIRECT: **影响因素** |
| variant.heading "What's shaping yours?" | 双下巴是脂肪还是, 双下巴还是松弛, 脸型 骨头, 脸大是什么原因 | nothing usable | DIRECT: **是什么在影响你的脸型？** |
| jumpNav "What's shaping yours?" | as above | as above | DIRECT: **你属于哪一种** |
| tab "Fat" (label/sub/title) | 双下巴, 双下巴 脂肪, 双下巴原因, 双下巴 医美 | `双下巴` → 怎么减, 怎么消除, 原因, 溶脂针; `双下巴 脂肪` → 双下巴脂肪, **脂肪型 双下巴**; `双下巴 医美` → 费用, 价格 | KEYWORD: **脂肪** / **双下巴** / **下巴底下或下颚线的脂肪（脂肪型双下巴）** |
| tab "Muscle" | 咬肌, 咬肌肥大, 咬肌大, 咬肌大 原因 | `咬肌` → 咬肌在哪里, 咬肌怎么变小, 咬肌大怎么办; `咬肌肥大` → 改善, 原因 | KEYWORD: **咬肌** / **咬肌肥大** (EN "Chewing-muscle bulk") |
| tab "Skin" | 脸部松弛, 脸部 松弛 下垂, 双下巴 松弛 | `脸部松弛` → 怎么办, 医美, 改善, 下垂, 原因 | KEYWORD: **松弛** / **皮肤与软组织松弛** |
| tab "Structure" | 下巴后缩, 下巴后缩 玻尿酸, 脸型 骨头 | `下巴后缩` → 怎么改善, 原因, 能改善吗 (strong) | DIRECT for the tab (**骨骼结构** / **骨骼与容量比例**); 下巴后缩 used for "recessed chin" in the body and compare table |
| locationBlock.heading "Non-surgical versus surgical" | 非手术, 非手术 医美, 脸型 非手术, 不开刀 v脸, 不开刀 瘦脸, 面部轮廓 手术, 削骨, 磨骨 | `非手术` only medical (智慧齿, 椎间盘); `削骨`/`磨骨` strong but surgical and TW-skewed; aesthetic non-surgical forms empty | DIRECT: **非手术与手术的区别** |
| jumpNav "Surgical or not" | 手术还是非手术 | nothing | DIRECT: **手术还是非手术** |
| seeDoctor.heading "When it is worth an assessment" | n/a | n/a | DIRECT: **什么时候值得做评估** |
| jumpNav "Treatments" / "Risks" / "FAQ" | (pilot) | (pilot) | DIRECT: **疗程 / 风险 / 常见问题** |
| jumpNav "Cost" | v脸 价钱, 瘦脸 价钱, 下巴填充 价钱 | `瘦脸 价钱` → 肉毒瘦脸价钱, 瘦脸针价钱 (MY 价钱 spelling confirmed) | KEYWORD (term choice): **价钱** |
| compare.columns "Downtime" | 医美 恢复期, 玻尿酸 恢复期, hifu 恢复期 | `医美恢复期`, `玻尿酸恢复期` return | KEYWORD: **恢复期** |
| compare.columns other three | n/a | n/a | DIRECT: 你的情况 / 常考虑的疗程 / 一般疗程安排 |
| ctaMid.heading "Fat, muscle or skin?" | n/a (conversion copy) | n/a | DIRECT: **是脂肪、咬肌，还是松弛？** |
| ctaHeading "Find out what's shaping your jawline" | n/a (conversion copy) | n/a | DIRECT: **了解是什么在影响你的下颚线** |
| FAQ 1 "Can face contouring change my bone structure?" | 脸型改变 骨头, 脸型 骨头, 削骨 还是 | only `脸型 骨头` (returns itself, no completions) | DIRECT: **脸部轮廓疗程能改变骨骼结构吗？** |
| FAQ 2 "Fat or loose skin under my chin?" | 双下巴是脂肪, 双下巴还是松弛, 双下巴 松弛, 双下巴 脂肪 | `双下巴 松弛` and `双下巴脂肪` return; the either/or form is empty | KEYWORD: **双下巴是脂肪还是皮肤松弛？怎么分辨？** |
| FAQ 3 "Does treating the masseter change my face shape?" | 咬肌会变脸型吗, 咬肌 变小, 打咬肌, 肉毒杆菌 咬肌, 咬肌 肉毒 | `打咬肌` → 打咬肌多久见效, 肉毒杆菌 打咬肌; `咬肌 肉毒` TW-skewed (價錢); `咬肌会变脸型吗` empty | KEYWORD: **处理咬肌（打咬肌）会改变脸型吗？** (打咬肌 is the colloquial procedure name; it does not name a product) |
| FAQ 4 "Is chin filler safe?" | 下巴填充, 下巴填充 安全吗, 玻尿酸 安全吗, 下巴玻尿酸, 垫下巴, 填充下巴 风险 | `下巴填充` → 玻尿酸, 副作用, 价格 (HK/dcard noise); `玻尿酸安全吗` returns; `垫下巴` is dcard-dominated | KEYWORD: **下巴填充安全吗？** (answer stays conditional, never a flat 安全) |
| FAQ 5 "Will fat freezing under my chin help me lose weight?" | 冷冻溶脂 双下巴, 冷冻溶脂 减肥, 冷冻溶脂可以减肥吗, 冷冻溶脂会瘦吗, 冷冻溶脂 有效吗 | `冷冻溶脂 双下巴` and `冷冻溶脂有效吗` return; weight forms empty | KEYWORD: **双下巴做冷冻溶脂，能帮我减轻体重吗？** (减肥 avoided per docs/18 §5) |
| FAQ 6 "How long do the effects last?" | 玻尿酸维持多久, 肉毒杆菌维持多久, 下巴玻尿酸可以维持多久, 冷冻溶脂 维持多久, 瘦脸 维持多久 | `玻尿酸 维持多久`, `肉毒杆菌维持多久` return; `下巴玻尿酸可以维持多久` appears in the `下巴玻尿酸` list | KEYWORD (pattern): **效果能维持多久？** |
| FAQ 7 "Will I look overdone?" | 做完会不会很假, 打玻尿酸会不会很假, 医美 会不会很假, 医美 自然 | only `医美 自然` (→ 自然风医美) | DIRECT: **做完会不会看起来很假？** |
| FAQ 8 "Is there downtime?" | 医美 恢复期, 玻尿酸 恢复期 | returns (docs/18 §6) | KEYWORD: **有恢复期吗？** |
| FAQ 9 "Can men have face contouring?" | 男生 v脸, 男生瘦脸, 男生瘦脸医美, 男生 医美, 男士 下颚线 | `男生医美` strong; `男生瘦脸医美`, `男士下颚线` return | KEYWORD: **男生也可以做脸部轮廓疗程吗？** |
| FAQ 10 "How soon will I see a change?" | 瘦脸多久见效, 多久见效 瘦脸, 肉毒杆菌多久见效, 打咬肌多久见效 | only treatment-level forms return | DIRECT: **多久能看到变化？** (见效 avoided, as in the pilot) |
| FAQ 11 "Can I bring a photo of the look I want?" | 带照片 医美, 医美 参考照片, 脸型 照片 | nothing relevant | DIRECT: **我可以带想要的效果照片来吗？** |
| FAQ 12 "What if nothing here suits me?" | 医美 不适合 | nothing | DIRECT: **如果这里的疗程都不适合我呢？** |

**Chinese tally (35 logged strings):** 16 KEYWORD, 19 DIRECT. CTA headings count as DIRECT.

**Not usable:** every "+价钱 / 马来西亚" contouring modifier came back empty (`面部轮廓 价钱`, `v脸 价钱`, `下巴填充 价钱`). Most procedure-level demand (垫下巴, 玻尿酸下巴, 咬肌肉毒, 削骨) is Taiwan-skewed (dcard/ptt, traditional script). Malaysian demand sits on 瘦脸 / 瘦脸针, which we can't write.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Face Contouring" | kontur muka, muka v shape, rawatan muka v shape, rawatan kontur muka, kontur wajah | `muka v shape` → cara buat, senaman, urutan (MY); `rawatan muka v shape` → rawatan v shape muka; `kontur muka` is makeup/geography-led; `kontur wajah` is Indonesian (pixy, wardah) | KEYWORD: **Kontur Muka (V-Shape)** (docs/18 §5) |
| **seoTitle** | rawatan muka v shape, muka v shape malaysia, kos rawatan muka v shape | `rawatan v shape muka` returns; "+malaysia" and kos forms empty | KEYWORD: **Rawatan Kontur Muka V-Shape di Malaysia \| Kaiteki** (49 chars). "& Penilaian" dropped: it would take the title to 63. |
| **seoDescription** | (same family) | as above | KEYWORD: garis rahang, dagu, kontur muka V-shape, doktor, konsultasi percuma (150 chars) |
| sections[0].heading "What is face contouring?" | apa itu kontur muka | returns itself exactly | KEYWORD: **Apa itu kontur muka?** |
| drivers.heading "What influences facial contour" | punca muka lebar, kenapa muka lebar, muka tembam, punca muka tembam | `kenapa muka lebar` returns (but the section is about jaw definition and the chin, not width); `punca muka lebar` empty | DIRECT: **Apa yang mempengaruhi kontur muka** |
| jumpNav "What influences it" | as above | as above | DIRECT: **Faktor yang mempengaruhi** |
| variant.heading "What's shaping yours?" | n/a | n/a | DIRECT: **Apa yang membentuk muka anda?** |
| jumpNav "What's shaping yours?" | n/a | n/a | DIRECT: **Punca bentuk muka anda** |
| tab "Fat" | dagu berlapis, dagu berganda, double chin, double chin melayu, lemak bawah dagu, lemak dagu, punca double chin | `dagu berlapis` → punca, hilangkan, **rawatan dagu berlapis** (MY); `lemak bawah dagu` → hilangkan, punca, cara hilangkan; `double chin melayu` → *double chin dalam bahasa melayu* (people look up the Malay word) | KEYWORD: **Lemak** / **Dagu berlapis (double chin)** / **Lemak bawah dagu atau di sepanjang rahang** |
| tab "Muscle" | otot rahang, otot rahang besar, masseter, rahang besar, rahang lebar, botox rahang | `otot rahang besar` → kenapa, penyebab (mixed); `masseter` → masseter botox (English); `rahang besar/lebar` Indonesian-led (artinya, karena apa); `botox rahang` strong (can't use the word) | KEYWORD: **Otot rahang** / **Otot rahang (masseter) yang besar** |
| tab "Skin" | kulit muka kendur, muka kendur, rahang kendur | `kulit muka kendur` → punca, rawatan untuk, cara atasi; `rahang kendur` → kulit rahang kendur | KEYWORD: **Kulit kendur** / **Kulit dan tisu lembut yang kendur** |
| tab "Structure" | dagu ke dalam, dagu pendek | `dagu ke dalam` → dagu masuk ke dalam; `dagu pendek` Indonesian-led (pria, artinya) | DIRECT for the tab (**Struktur** / **Perkadaran tulang dan isi**); *dagu ke dalam* used for "recessed chin" in body and compare |
| locationBlock.heading "Non-surgical versus surgical" | tanpa pembedahan, rawatan tanpa pembedahan, pembedahan muka, pembedahan rahang | `rawatan … tanpa pembedahan` is a strong MY pattern but only for fibroid, ACL, hernia etc.; `pembedahan rahang` is surgical/dental | DIRECT: **Tanpa pembedahan berbanding pembedahan** |
| jumpNav "Surgical or not" | as above | as above | DIRECT: **Pembedahan atau tidak** |
| seeDoctor.heading | n/a | n/a | DIRECT: **Bila patut buat penilaian** |
| jumpNav "Treatments" | (pilot) | (pilot) | KEYWORD (term): **Rawatan** |
| jumpNav "Risks" / "FAQ" | (pilot) | (pilot) | DIRECT: **Risiko / Soalan lazim** |
| jumpNav "Cost" | kos filler dagu, harga filler dagu malaysia, kos rawatan muka v shape | empty (`filler dagu harga` appears but is Indonesian-led) | KEYWORD (term, docs/18 §6): **Kos** |
| compare.columns "Downtime" | downtime filler, ada downtime | `downtime filler dagu` returns; `ada downtime` → hifu ada downtime | KEYWORD: **Downtime** |
| compare.columns other three | n/a | n/a | DIRECT (pilot wording) |
| ctaMid.heading | n/a | n/a | DIRECT: **Lemak, otot atau kulit?** |
| ctaHeading | n/a | n/a | DIRECT: **Ketahui apa yang membentuk garis rahang anda** |
| FAQ 1 "Change my bone structure?" | pembedahan rahang muka | nothing on non-surgical bone change | DIRECT: **Rawatan kontur muka boleh ubah struktur tulang ke?** |
| FAQ 2 "Fat or loose skin under my chin?" | lemak bawah dagu, kulit muka kendur, rahang kendur | both halves return | KEYWORD: **Lemak bawah dagu atau kulit kendur: macam mana nak tahu?** |
| FAQ 3 "Does treating the masseter change my face shape?" | otot rahang besar, masseter, botox rahang, suntikan rahang | see Muscle row; `suntikan rahang` empty | KEYWORD: **Rawatan otot rahang (masseter) boleh ubah bentuk muka ke?** |
| FAQ 4 "Is chin filler safe?" | filler dagu, filler dagu selamat ke, filler selamat ke | `filler dagu` → bertahan berapa lama, gagal, harga; *selamat ke* forms empty | KEYWORD (head term): **Filler dagu selamat ke?** (answer stays conditional) |
| FAQ 5 "Will fat freezing under my chin help me lose weight?" | fat freezing double chin, fat freezing dagu, fat freezing turun berat badan, fat freezing kurus | `fat freezing double chin` → cost, near me, side effects (English, MY session); Malay weight forms empty | KEYWORD: **Fat freezing untuk double chin boleh bantu turunkan berat badan ke?** |
| FAQ 6 "How long do the effects last?" | filler tahan berapa lama, botox tahan berapa lama, rawatan muka tahan berapa lama | `filler tahan berapa lama` → filler dagu/muka tahan berapa lama (MY *tahan*) | KEYWORD (pattern): **Kesannya tahan berapa lama?** |
| FAQ 7 "Will I look overdone?" | nampak palsu, filler nampak palsu | nothing | DIRECT: **Nanti muka nampak tak semula jadi ke?** |
| FAQ 8 "Is there downtime?" | ada downtime, downtime filler | returns | KEYWORD: **Ada downtime ke?** |
| FAQ 9 "Can men have face contouring?" | muka v shape lelaki, rawatan muka lelaki, lelaki filler | `rawatan muka lelaki` → near me, pusat; `filler lelaki` → rawatan, harga | KEYWORD: **Lelaki boleh buat rawatan kontur muka ke?** |
| FAQ 10 "How soon will I see a change?" | berapa lama nampak hasil filler | nothing | DIRECT: **Berapa lama baru nampak perubahan?** |
| FAQ 11 "Bring a photo?" | bawa gambar | only unrelated (gambar bawa kereta) | DIRECT: **Boleh ke saya bawa gambar rupa yang saya mahu?** |
| FAQ 12 "What if nothing here suits me?" | n/a | n/a | DIRECT: **Kalau tiada rawatan di sini yang sesuai dengan saya?** |

**Malay tally (35 logged strings):** 17 KEYWORD, 18 DIRECT. CTA headings count as DIRECT.

**Indonesian pollution seen and avoided:** kontur wajah (pixy, wardah), rahang besar / rahang lebar (artinya, karena apa, bisa mengecil), rahang tajam pria, dagu pendek pria, garis rahang disebut, filler dagu harga (butuh berapa cc).

## For the bilingual doctor-reviewer

1. **Muscle-relaxing injection is never named.** Both locales keep EN's generic phrase (放松肌肉的注射 / *suntikan pelemas otot*). The treatment slug `botulinum-toxin` is unchanged. The biggest demand (`瘦脸针`, `botox rahang`) can only be captured by relevance.
2. **打咬肌 in the zh FAQ 3 question.** It's colloquial for "treating the masseter" and doesn't name a drug, but it is closely tied to toxin injection in searchers' minds. Please confirm it's acceptable; the fallback is 处理咬肌会改变脸型吗？
3. **"Downtime" cell for fat reduction: "Several days tenderness"** rendered as 压痛几天 / *Rasa sakit disentuh beberapa hari*.
4. **Fillers:** 注射填充 / 填充剂 / 玻尿酸 is not used in copy (EN never names hyaluronic acid). Malay uses *filler* in the FAQ (AC-backed) and *suntikan pengisi* in body copy. Confirm the mix reads naturally.
5. **"Effects are not permanent"** rendered as 不是一劳永逸的 / *tidak berkekalan*, keeping 永久 and *kekal* out of the copy for the review lint. The meaning is unchanged.
6. **Surgeons:** 合格的外科医生 / *pakar bedah yang bertauliah*. *Pakar* here refers to the surgeon a patient may be referred to, never to Kaiteki's doctors.
7. **Malay "mengerot gigi" / "mengetap gigi"** for grinding / clenching (AC: `mengetap gigi semasa tidur`, `kerot gigi`). Please confirm both read naturally.
8. **Before/after captions** follow the pilot: 疗程之前与之后 / *sebelum dan selepas*.
