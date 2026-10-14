# 19. Concern keyword log: Face Lifting (`/concerns/face-lifting`)

**Date:** 2026-10-14 · Follows the pilot method in `acne.md`.
**Outputs:** `content/i18n/concerns/zh/face-lifting.json`, `content/i18n/concerns/ms/face-lifting.json` (same shape as the EN record).
**Inputs:** EN record for `face-lifting`, `docs/18-trilingual-keyword-map.md` §5 (display names), §6 and §7 (avoid list).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` for Chinese and `hl=ms` for Malay. HAS VOLUME = the phrase or a natural Malaysian form of it autocompletes without a Taiwan/HK/Indonesia skew (*dcard / ptt / lihkg* for zh; *bisa / karena / penyebab / mengatasi / perawatan* for ms). NO VOLUME = nothing relevant.
- **Decision:** KEYWORD = string phrased around the real query form, English meaning kept. DIRECT = faithful translation.
- **Probes:** 111 zh and 92 ms (shared batches with `tattoo-removal`). Raw dumps are in the session scratchpad, not in the repo.
- **Scope:** search-relevant strings only. All body copy is a direct, faithful translation.
- **`seeDoctor.heading` is present in this record** ("When it is worth an assessment"), so it is translated here rather than falling back to `concern-ui.ts`.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Face Lifting" | 提拉紧致, 脸部提升, 面部提拉, 脸部提拉, 医美提拉, 提拉紧致 医美 | `提拉紧致` → beauty devices and serums only; `脸部提拉` → 脸部提拉 医美, 脸部提拉手术; `面部提拉` → 面部提拉 医美 | KEYWORD: **提拉紧致** (docs/18 §5 name kept; the clinic intent sits on 脸部提拉 医美, used in title) |
| **seoTitle** "Non-Surgical Face Lifting Treatment in Malaysia \| Kaiteki" | 非手术提拉, 非手术拉皮, 不开刀提拉, 提拉紧致 马来西亚, 面部提拉手术 | all "non-surgical / +马来西亚" forms empty; `脸部提拉` returns | KEYWORD: **马来西亚非手术脸部提拉紧致 \| Kaiteki** (23 chars). 非手术 kept for EN meaning, though it has no AC. |
| **seoDescription** | (same family) + 脸部松弛 | `脸部松弛` → 怎么办, 医美, 原因 | KEYWORD: 非手术提拉紧致, 脸部松弛, 免费咨询 (76 chars) |
| sections[0].heading "What is face lifting (as a concern)?" | 提拉紧致是什么, 什么是提拉, 脸部松弛, 脸部下垂 | `提拉紧致是什么` empty; `什么是提拉` → 提拉皮斯/提拉米苏 (noise); `脸部松弛` → 脸部松弛下垂, 医美, 原因; `脸部下垂` → 医美, 原因, 改善 | KEYWORD: **脸部松弛下垂：提拉紧致要处理的是什么？** |
| drivers.heading "What influences facial firmness" | 脸部松弛原因, 皮肤松弛原因, 皮肤松弛的原因, 脸部下垂原因, 胶原蛋白流失 | all return themselves; `胶原蛋白流失` → 怎么办, 症状, 年龄 | KEYWORD: **脸部松弛的原因：影响紧致度的因素** |
| jumpNav "What influences it" | as above | as above | KEYWORD: **松弛原因** |
| variant.heading "Which layer is it?" | 面部 下垂 层次, smas 筋膜, 筋膜层 | layer query empty; `smas 筋膜` → 筋膜拉提 (TW 拉提) | DIRECT: **是哪一层在松弛？** (SMAS 筋膜层 used in body copy) |
| jumpNav "Which layer is it?" | as above | as above | DIRECT: **哪一层松弛** |
| tab "Skin" / "Skin-level laxity" | 皮肤松弛, 皮肤松弛怎么办 | `皮肤松弛` → 原因, 改善, 怎么办 | KEYWORD: **皮肤** / **皮肤层的松弛（皮肤松弛）** |
| tab "Volume" / "Volume-related change" | 脸部凹陷, 脸部凹陷 填充, 太阳穴凹陷, 苹果肌下垂 | `脸部凹陷` → 怎么办, 要打什么, 医美, 原因, 填充 | KEYWORD: **容量** / **容量流失引起的变化（脸部凹陷）** |
| tab "Deeper structure" / "Structural descent" | 脸部下垂, 嘴边肉, 下颚线, 下颚线不明显, 双下巴 | `脸部下垂` strong; `下颚线不明显` → 原因, 医美; `嘴边肉` mostly food and dcard | KEYWORD: **深层结构** / **深层结构下垂（脸部下垂）**; 嘴边肉 used only as a gloss for jowls (see reviewer note 1) |
| locationBlock.heading "Non-surgical versus surgical" | 拉皮手术, 拉皮, 脸部提拉手术, 提拉手术, 不开刀拉皮 | `拉皮手术` → 费用, 后遗症 (dcard/ptt noise too); `脸部提拉手术` and `提拉手术` return | KEYWORD: **非手术提拉与拉皮手术** |
| jumpNav "Surgical or not" | 拉皮 手术 和 hifu, 手术拉皮和 | nothing | DIRECT: **手术与非手术** |
| seeDoctor.heading "When it is worth an assessment" | n/a | n/a | DIRECT: **什么时候值得做评估** |
| jumpNav "Treatments" / "Risks" / "FAQ" | (as pilot) | (as pilot) | DIRECT: 疗程 / 风险 / 常见问题 |
| jumpNav "Cost" | 提拉紧致 价钱, hifu 价钱 | concern form empty; `hifu 价钱` → 2026, 2025 (MY writes 价钱) | KEYWORD (term choice): **价钱** |
| compare.columns "Downtime" | 医美恢复期, hifu 恢复期 | `医美恢复期` returns (also docs/18 §6) | KEYWORD: **恢复期** |
| compare.columns other three | n/a | n/a | DIRECT: 你的情况 / 常考虑的疗程 / 一般疗程安排 |
| ctaMid.heading "Not sure if it's skin, volume or structure?" | n/a (conversion copy) | n/a | DIRECT: 不确定是皮肤、容量还是深层结构的问题？ |
| ctaHeading "Find out what's actually loosening" | n/a (conversion copy) | n/a | DIRECT: 了解到底是哪里在松弛 |
| FAQ 1 "Difference between non-surgical and surgical face lifting?" | 拉皮手术, hifu 和, 拉皮 手术 和 hifu | `hifu 和` → hifu 和 ultherapy 的 区别 (the 区别 pattern); `拉皮手术` strong | KEYWORD: **非手术提拉和拉皮手术有什么区别？** |
| FAQ 2 "When should I consider a lifting treatment?" | hifu 几岁, 几岁开始做hifu, 几岁可以做hifu, 脸部松弛 年龄 | only `hifu 几 岁 做` returns | KEYWORD (pattern): **几岁适合做提拉紧致？什么时候该考虑？** (the answer says there's no fixed age) |
| FAQ 3 "How long does the effect last?" | hifu 维持多久, 提拉 维持多久, 童颜针 维持多久, hifu 效果 | `hifu 维持多久`, `童颜针维持多久`, `hifu 效果 维持` return | KEYWORD: **效果可以维持多久？** |
| FAQ 4 "Is it painful?" | hifu 痛吗, hifu 会痛吗, 提拉 痛吗, 提拉紧致 痛, 医美 痛吗 | `hifu 痛吗` and `hifu 会痛吗` return; concern forms empty | KEYWORD (pattern): **提拉疗程会痛吗？** (no 无痛) |
| FAQ 5 "How soon will I see a difference?" | hifu 多久 见效, hifu 多久, 提拉紧致 多久 | `hifu 多久 见效`, `hifu 多久 看 到 效果` return (treatment level) | DIRECT: **做完多久能看到变化？** (见效 avoided, as in the pilot) |
| FAQ 6 "Will it make my face look done or unnatural?" | 医美 不自然, hifu 不自然, 打玻尿酸 不自然 | `医美 不自然` returns itself | KEYWORD: **会不会看起来不自然，一看就知道做过医美？** |
| FAQ 7 "Is there any downtime?" | 医美恢复期, hifu 恢复, hifu 恢复期 | `医美恢复期` returns | KEYWORD: **有恢复期吗？** |
| FAQ 8 "Fillers or threads before?" | 玻尿酸, 填充剂, 线雕, 埋线提拉, 打了玻尿酸可以做hifu吗, 埋线 后 hifu | `玻尿酸` → 副作用, 多久打一次; `线雕` → 后遗症, 维持多久; combined forms empty | KEYWORD (terms): **以前打过填充剂（如玻尿酸）或做过线雕，还可以做吗？** |
| FAQ 9 "Can non-surgical lifting treat the neck?" | 脖子松弛, 脖子松弛医美, 颈部松弛, 颈部 松弛 医美, 颈部提拉, 脖子 hifu | `脖子松弛` → 怎么办, 原因, 医美, 如何改善; `颈部松弛` → 医美 | KEYWORD: **脖子松弛可以用非手术提拉改善吗？** |
| FAQ 10 "Several sessions or just one?" | hifu 要做几次, 提拉 要做几次, hifu 一年做几次 | nothing (`hifu 多久 做 一次` exists but is a frequency question) | DIRECT: **需要做几次，还是一次就够？** |
| FAQ 11 "Will I need to keep having treatment?" | hifu 要一直做吗, hifu 需要一直做吗 | nothing | DIRECT: **需要一直做下去吗？** |
| FAQ 12 "What if a doctor tells me nothing here will work?" | n/a | n/a | DIRECT: **如果医生说这里的疗程都帮不上忙，怎么办？** |

**Chinese tally (34 logged strings):** 20 KEYWORD, 14 DIRECT. CTA headings counted as DIRECT.

**Not used:** `拉提` (Taiwan, docs/18 §7), `超声刀` (mainland slang; covers Ultherapy too), `童颜针` / `胶原蛋白针` (strong AC, but naming an injectable as a consumer product; the EN says "bio-stimulator", kept as 胶原蛋白刺激剂 / 刺激胶原蛋白的注射疗程), `双下巴溶脂针` (drug-led). No "+马来西亚" form returned anything.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Face Lifting" | rawatan tegang muka, tegang muka, angkat muka, face lifting, muka kendur | `tegang muka` → rawatan tegang muka, tegang kulit muka; `angkat muka` → maksud, simpulan bahasa, peribahasa (idiom); `face lifting` → treatment malaysia | KEYWORD: **Tegang & Angkat Muka** (docs/18 §5; *angkat muka* never used alone) |
| **seoTitle** | rawatan tegang muka, face lift tanpa pembedahan, rawatan muka kendur tanpa pembedahan, tanpa pembedahan | `rawatan tegang muka` returns; `rawatan … tanpa pembedahan` is a strong MY pattern (fibroid, tiroid, hernia) but empty for the face | KEYWORD: **Rawatan Tegang Muka Tanpa Pembedahan di Malaysia \| Kaiteki** (58 chars) |
| **seoDescription** | (same family) + konsultasi percuma | as above | KEYWORD: kekenduran kulit muka, rawatan tegang muka tanpa pembedahan, konsultasi percuma (157 chars) |
| sections[0].heading "What is face lifting (as a concern)?" | muka kendur, kulit muka kendur, kenapa muka kendur | `muka kendur` → apa penyebabnya (ID), rawatan muka kendur; `kenapa muka kendur` → kenapa kulit muka kendur, cepat kendur (MY) | KEYWORD: **Apa itu muka kendur, dan apa yang dirawat oleh rawatan tegang muka?** |
| drivers.heading "What influences facial firmness" | punca kulit muka kendur, punca muka kendur, punca kulit kendur, kehilangan kolagen | `punca muka kendur` → **punca kulit muka kendur** (MY *punca*); `kehilangan kolagen` returns | KEYWORD: **Punca kulit muka kendur: apa yang mempengaruhi ketegangan** |
| jumpNav "What influences it" | as above | as above | KEYWORD: **Punca muka kendur** |
| variant.heading "Which layer is it?" | lapisan kulit, lapisan kulit muka | generic anatomy (lapisan kulit bumi, epidermis) | DIRECT: **Lapisan mana yang kendur?** |
| jumpNav "Which layer is it?" | as above | as above | DIRECT: **Lapisan yang mana?** |
| tab "Skin" / "Skin-level laxity" | kulit kendur, kulit muka kendur | `kulit kendur` → mixed MY/ID (karena apa, kenapa); `kulit muka kendur` → punca, rawatan untuk | KEYWORD: **Kulit** / **Kulit kendur di lapisan permukaan** |
| tab "Volume" / "Volume-related change" | muka cengkung, pipi cengkung, muka cengkung punca | `pipi cengkung` → punca, rawatan pipi cengkung; `muka cengkung` → punca muka cengkung (MY) | KEYWORD: **Volum** / **Perubahan akibat kehilangan volum (muka cengkung)** |
| tab "Deeper structure" / "Structural descent" | pipi jatuh, pipi kendur, garis rahang, rahang tak jelas, dagu berlapis | `pipi jatuh` → punca pipi jatuh, tanda pipi jatuh (MY); `pipi kendur` ID-leaning (apa penyebabnya); `garis rahang` → tajam, tegas | KEYWORD: **Struktur dalam** / **Tisu dalam turun ke bawah (pipi jatuh)** |
| locationBlock.heading "Non-surgical versus surgical" | pembedahan muka, pembedahan face lift, tanpa pembedahan, rawatan tanpa pembedahan | `pembedahan muka` → kosmetik, plastik, kos pembedahan muka; *tanpa pembedahan* pattern strong | KEYWORD (pattern): **Rawatan tanpa pembedahan berbanding pembedahan muka** |
| jumpNav "Surgical or not" | n/a | n/a | DIRECT: **Pembedahan atau tidak** |
| seeDoctor.heading | n/a | n/a | DIRECT: **Bila wajar membuat penilaian** |
| jumpNav "Treatments" | rawatan tegang muka | returns | KEYWORD (term): **Rawatan** |
| jumpNav "Risks" / "FAQ" | n/a | n/a | DIRECT: Risiko / Soalan lazim |
| jumpNav "Cost" | kos rawatan tegang muka, rawatan tegang muka harga | nothing | DIRECT: **Kos** (term per docs/18 §6) |
| compare.columns "Downtime" | hifu downtime | `hifu downtime` → berapa lama (docs/18 §6 too) | KEYWORD: **Downtime** (kept in English) |
| compare.columns other three | n/a | n/a | DIRECT: Masalah anda / Biasa dipertimbangkan / Kursus biasa |
| ctaMid.heading | n/a | n/a | DIRECT: Tak pasti sama ada masalahnya pada kulit, volum atau struktur? |
| ctaHeading | n/a | n/a | DIRECT: Ketahui apa sebenarnya yang kendur |
| FAQ 1 "Non-surgical vs surgical face lifting?" | face lift tanpa pembedahan, hifu vs ultherapy, beza hifu dan ultherapy | `hifu vs ultherapy` (English) returns; Malay *beza* forms empty; `pembedahan muka` returns | KEYWORD (terms): **Apa beza rawatan tegang muka tanpa pembedahan dan pembedahan face lift?** |
| FAQ 2 "When should I consider?" | hifu umur berapa, umur berapa buat hifu, umur sesuai hifu | `hifu umur berapa` → untuk umur berapa, start umur berapa; `umur berapa buat hifu` → hifu buat umur berapa | KEYWORD: **Umur berapa sesuai buat rawatan tegang muka? Bila patut pertimbangkan?** |
| FAQ 3 "How long does the effect last?" | hifu tahan berapa lama, rawatan muka tegang berapa lama, filler muka | `hifu tahan berapa lama` → hasil hifu tahan berapa lama; `filler muka` → tahan berapa lama | KEYWORD: **Kesannya tahan berapa lama?** |
| FAQ 4 "Is it painful?" | hifu sakit ke, hifu sakit, rawatan tegang muka sakit ke, hifu sakit tak | `hifu sakit` → *sakit ga, apakah* (ID); MY forms empty | DIRECT: **Rawatan ini sakit ke?** (no *tanpa sakit*) |
| FAQ 5 "How soon will I see a difference?" | n/a (pilot found nothing) | n/a | DIRECT: **Berapa lama baru nampak perubahan?** |
| FAQ 6 "Look done or unnatural?" | nampak tak natural | nothing | DIRECT: **Adakah muka saya akan nampak tidak semula jadi atau berlebihan?** |
| FAQ 7 "Is there any downtime?" | hifu downtime, pantang selepas laser muka | `hifu downtime` returns; *pantang* forms return but mean restrictions, not downtime | KEYWORD: **Ada downtime selepas rawatan?** |
| FAQ 8 "Fillers or threads before?" | filler muka, filler pipi, tanam benang, thread lift, hifu selepas filler, filler dan hifu | `filler muka` → untuk apa, tahan berapa lama; `tanam benang` → tanam benang muka; combined forms empty | KEYWORD (terms): **Boleh ke buat rawatan ini jika pernah ambil filler atau tanam benang sebelum ini?** |
| FAQ 9 "Can non-surgical lifting treat the neck?" | leher kendur, kulit leher kendur, rawatan leher kendur, hifu leher | `leher kendur` returns (ID-leaning continuations: penyebab, mengencangkan); `hifu leher` returns | KEYWORD: **Rawatan tegang muka tanpa pembedahan boleh rawat leher kendur ke?** |
| FAQ 10 "Several sessions or just one?" | hifu berapa kali | `hifu berapa kali` → setahun, sebulan, shoot | KEYWORD: **Perlu buat berapa kali, atau cukup sekali sahaja?** |
| FAQ 11 "Keep having treatment?" | n/a | n/a | DIRECT: **Perlu ke saya terus buat rawatan selepas ini?** |
| FAQ 12 "Nothing here will work?" | n/a | n/a | DIRECT: **Bagaimana jika doktor kata tiada rawatan di sini yang akan berkesan untuk saya?** |

**Malay tally (34 logged strings):** 19 KEYWORD, 15 DIRECT. CTA headings counted as DIRECT.

**Indonesian pollution seen and avoided:** muka kendur apa penyebabnya, kulit kendur karena apa, perawatan kulit muka kendur, mengatasi kulit leher kendur, hifu sakit ga, hifu bisa tahan berapa lama, pipi kendur pakai apa.

## For the bilingual doctor-reviewer

1. **Jowls.** zh uses 下巴两侧的赘肉（嘴边肉）; 嘴边肉 is how people describe it, but its AC is dominated by food (pork cheek) and dcard. ms uses *pipi jatuh (jowl)*. Please confirm both read as clinical enough.
2. **"Surgical face-lift"** is 拉皮手术 (zh) and *pembedahan face lift* (ms). 整形 / 整容 are avoided. Please confirm 拉皮手术 is the term Malaysian Chinese patients actually use.
3. **SMAS** is kept as "SMAS 筋膜层" (zh) and "SMAS" (ms). The AC for `smas 筋膜` is TW-led (筋膜拉提), so 拉提 is not used.
4. **FAQ 8 (zh) names 玻尿酸** as an example of filler, because that is the everyday word. It is a product class, not a brand, but please confirm it's acceptable on a concern page. Malay uses *filler*.
5. **Bio-stimulator** is 胶原蛋白刺激剂 / *bio-stimulator*; 童颜针 (strong AC, consumer nickname for poly-L-lactic acid) is deliberately not used.
6. **"Maintained rather than permanent"** became 需要维持，并非一劳永逸 / *perlu dijaga dengan rawatan susulan, bukan sesuatu yang bertahan selama-lamanya*, to keep 永久 / *kekal* out of the copy. Meaning unchanged.
7. **"Specialists"** (who perform surgery) is 相关的专科医生 / *doktor pakar yang berkaitan*. This refers to surgeons elsewhere, never to Kaiteki's doctors.
8. **FAQ 2** in both languages is phrased as an age question (几岁适合 / *umur berapa sesuai*) because that's how people search. The answer opens by saying there is no fixed age, so the EN stance is kept.

## Re-sync 2026-10-14 (English rewrite)

The English page was rewritten upstream and the sync tool blanked 35 strings per locale. One is search-relevant: `sections[0].heading` changed from "What is face lifting (as a concern)?" to "What is non-surgical face lifting?". All other keyword decisions above still stand unchanged.

### Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| sections[0].heading "What is non-surgical face lifting?" | 非手术提拉, 非手术提拉紧致, 非手术 脸部提拉, 提拉紧致是什么, 什么是提拉紧致, 脸部提拉 医美 | every non-surgical and "是什么" form came back empty; only `脸部提拉 医美` returns (itself) | DIRECT: **什么是非手术脸部提拉紧致？** (reuses the seoTitle term 脸部提拉紧致 for consistency) |

### Malay (`/ms`, `hl=ms&gl=my`)

| English | Probes | Evidence | Decision |
|---|---|---|---|
| sections[0].heading "What is non-surgical face lifting?" | rawatan tegang muka tanpa pembedahan, tegang muka tanpa pembedahan, face lift tanpa pembedahan, apa itu rawatan tegang muka, apa itu face lift, rawatan tegang muka | `apa itu face lift` → *apa itu face lifting, facelift mobil, operasi face lifting, treatment face lift* (Indonesian-leaning: *mobil, operasi*); `rawatan tegang muka` returns itself; all *tanpa pembedahan* forms empty | DIRECT: **Apa itu rawatan tegang muka tanpa pembedahan?** (page's existing term kept; the Indonesian-skewed "face lifting" form not adopted) |

**Tally:** zh 0 KEYWORD / 1 DIRECT; ms 0 KEYWORD / 1 DIRECT.

**Body blanks translated directly:** 34 zh, 34 ms (leadAnswer, facts[2], sections[0].body[0], drivers intro, gravity body and outro, variant intro, locationBlock intro, both cards and note, treatments intro/HIFU/fillers/note, compare intro, firstVisit intro and steps 2 to 3, risks 4, costFactors intro, technologyIntro, FAQ answers 1 to 7 and 9 to 11). Most are shortened EN sentences, so the earlier translation was trimmed to match, which keeps terminology identical (拉皮手术, SMAS, 刺激胶原蛋白, 恢复期 / *pembedahan face lift, kekenduran, rawatan susulan, downtime*).

**Reviewer notes**

1. sections[0].body[0] "As a concern, face lifting means..." is 作为一种皮肤问题，提拉紧致指的是… / *Sebagai satu masalah, tegang dan angkat muka bermaksud…* (*angkat muka* stays paired with *tegang*, per docs/18 §7).
2. "Sitting upright" (facts value) is 坐直检查 / *Duduk tegak*.
3. "Advanced descent is a question for a surgeon" became 明显的下垂，需要咨询外科医生 / *kekenduran yang teruk perlu dibincangkan dengan pakar bedah*; *pakar bedah* refers to an outside surgeon, never Kaiteki's doctors.
4. "Maintained, not permanent" keeps the earlier wording (并非一劳永逸 / *bukan sesuatu yang bertahan selama-lamanya*); no 永久 / *kekal*. The L-03r lint raises nothing on these files.
5. "Discussion and plan" is 讨论与计划 / *Perbincangan dan pelan*, as on other concern pages.
