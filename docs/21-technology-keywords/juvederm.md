# 21. Technology keyword log: Juvederm (`/technology/juvederm`)

**Date:** 2026-10-14 · Follows the pilot method in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/juvederm.json`, `content/i18n/technology/ms/juvederm.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/juvederm.json`.
**Inputs:** EN record for `juvederm`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `dermal-fillers` treatment page (`docs/20-treatment-keywords/dermal-fillers.md`) and the `fine-lines-wrinkles`, `face-contouring`, `dark-eye-circles` and `aging` concern pages.

## Method

- Same as the pilot: Google Autocomplete (`client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`). HAS VOLUME = Malaysian (or at least not TW/HK/ID-skewed) suggestions; NO VOLUME = nothing relevant.
- **KEYWORD:** phrased around the real query form, English meaning kept. **DIRECT:** faithful translation.
- **Probes:** shared with the other three filler brand pages (restylane, belotero, art-filler): 230 zh and 178 ms in two batches per language. Raw dumps: `C:/tmp/filler4-ac-zh.json`, `C:/tmp/filler4-ac-ms.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, the seven section headings and the four FAQ questions. No jumpNav, routes or ctaMid. All body copy is a direct, faithful translation.
- **Filler term (zh):** as on the treatment page. Search-facing strings use **玻尿酸填充**; body copy says 玻尿酸填充剂 at first mention, 填充剂 after. The `facts` "Used within" value is the treatment's zh name, 玻尿酸填充.
- **Hyaluronidase:** unlike the treatment page (generic "dissolving agent"), this EN record names the enzyme, so zh says **透明质酸酶** and ms **hialuronidase**. Nothing stronger is added.
- **Spelling:** the EN uses both *Juvederm* (name, title, summary) and *Juvéderm* (body, headings). Each locale keeps the spelling of the string it translates.
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; product names (Juvederm, VYCROSS®, Volbella, Volift, Voluma, Volux, Allergan Aesthetics, AbbVie).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Juvederm" | juvederm, juvederm 中文, 乔雅登 | `juvederm` → voluma, filler, **juvederm是什么**, volux, 中文; `juvederm 中文` → 中文名, voluma 中文; `乔雅登` → dcard-led (TW/CN name) | KEYWORD (brand): **Juvederm**, kept in Latin. 乔雅登 not added (TW/CN, dcard; the EN doesn't use it). |
| **seoTitle** "Juvederm Dermal Filler Treatment in Malaysia \| Kaiteki" | juvederm 玻尿酸, juvederm 马来西亚, 玻尿酸 马来西亚 | `juvederm 玻尿酸` returns (with 乔雅登 forms); `juvederm 马来西亚` empty; `玻尿酸 马来西亚` → 价格 马来西亚 (dermal-fillers log) | KEYWORD: **马来西亚 Juvederm 玻尿酸填充 \| Kaiteki** (29 chars) |
| **seoDescription** | vycross, vycross 玻尿酸, juvederm 系列 | `vycross` English only; `juvederm 系列` returns | KEYWORD: Juvederm, VYCROSS®, 玻尿酸填充剂, 容量与轮廓, 免费咨询 (75 chars) |
| sections[0] "What is Juvéderm?" | juvederm 是什么 | `juvederm是什么` (4th under `juvederm`) | KEYWORD: **Juvéderm 是什么？** |
| sections[1] "How VYCROSS® gel technology works" | vycross 玻尿酸, juvederm 原理 | both empty; `vycross` English only | DIRECT: **VYCROSS® 凝胶技术如何运作** |
| sections[2] "How long does Juvéderm last, and can it be dissolved?" | juvederm 维持多久, juvederm 溶解, 乔雅登 维持多久, 玻尿酸 维持多久, 玻尿酸 溶解 | brand forms empty; `乔雅登维持多久` returns; `玻尿酸 维持多久` and `玻尿酸 溶解` (→ 溶解酶) strong | KEYWORD (pattern): **Juvéderm 可以维持多久？可以溶解吗？** |
| sections[3] "Where on the face is each Juvéderm gel used?" | juvederm 系列, juvederm 下巴, juvederm 泪沟, juvederm 嘴唇, juvederm 部位 | `juvederm 系列` returns; `juvederm 下巴` → volux 下巴, voluma 下巴; `juvederm 泪沟`, `juvederm嘴唇` return; 部位 empty | KEYWORD: **Juvéderm 系列：每一款凝胶用在脸部哪个部位？** |
| sections[4] "Who should not have Juvéderm, according to the manufacturer?" | juvederm 禁忌, 玻尿酸 不适合, 玻尿酸 禁忌 | brand form empty; `玻尿酸 禁忌` → 禁忌症, 注射 禁忌 (dermal-fillers log) | KEYWORD (weak): **Juvéderm 的禁忌：制造商说哪些人不适合？** |
| sections[5] "How long does a Juvéderm appointment take, and when does the swelling settle?" | juvederm 肿, 玻尿酸 肿, 玻尿酸 肿多久 | brand form empty; `玻尿酸 肿` → 肿几天, 肿胀期, **肿多久** | KEYWORD: **打 Juvéderm 要多久？打完肿多久会消？** |
| sections[6] "What are the risks of Juvéderm, and which symptoms are urgent?" | juvederm 风险, juvederm 副作用, 玻尿酸 风险 | `juvederm 风险` empty; `juvederm 副作用` returns; `玻尿酸风险` returns | KEYWORD: **Juvéderm 有什么风险和副作用？哪些症状要紧急处理？** (副作用 added, as on the treatment page: the section opens with the temporary effects) |
| FAQ 1 "Difference between the Juvéderm gels, and how does the doctor choose?" | juvederm 区别, juvederm 系列 区别, 玻尿酸 种类, 玻尿酸 区别 | brand forms empty; `juvederm 系列` and `玻尿酸 种类` (→ 种类比较) return | KEYWORD (partial): **Juvéderm 系列的凝胶有什么区别？医生怎么选？** |
| FAQ 2 "Is Juvéderm safe for Asian skin tones?" | juvederm 适合, 玻尿酸 适合 肤质 | brand form empty; `玻尿酸 适合 肤 质` is skincare | DIRECT: **亚洲人的肤色打 Juvéderm 安全吗？** |
| FAQ 3 "Can Juvéderm be reversed if I do not like the result?" | juvederm 溶解, 玻尿酸 溶解, 玻尿酸 可以 溶解 吗 | `玻尿酸 溶解` → 溶解酶 (1st); others empty | KEYWORD: **如果不满意效果，Juvéderm 可以溶解（逆转）吗？** (same form as the treatment page FAQ) |
| FAQ 4 "How long does Juvéderm last?" | juvederm 维持, 乔雅登 维持多久, 玻尿酸 维持多久 | as sections[2] | KEYWORD (pattern): **Juvéderm 可以维持多久？** |

**Chinese tally (14 logged strings):** 12 KEYWORD, 2 DIRECT.

**Not usable:** `乔雅登` / `乔 雅登 juvederm 玻尿酸` (TW/CN brand name, dcard-led); `juvederm 价钱` / `价格` (HK, and price is never quoted on the page); `玻尿酸 后遗症 / 失明` (dcard/ptt, fear-framed).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Juvederm" | juvederm, juvederm malaysia | `juvederm malaysia` → distributor, **filler price malaysia**, **price malaysia**, filler malaysia | KEYWORD (brand): **Juvederm** |
| **seoTitle** | juvederm malaysia, juvederm filler, rawatan juvederm, juvederm harga | `juvederm malaysia` / `juvederm filler malaysia` strong; *rawatan juvederm* empty; `juvederm harga` → volite, voluma (ID-mixed) | KEYWORD: **Rawatan Dermal Filler Juvederm di Malaysia \| Kaiteki** (52 chars). *Rawatan dermal filler* is the treatment page's Malay form. |
| **seoDescription** | juvederm vycross, juvederm range | `juvederm vycross` → range, products, technology (English) | KEYWORD: Juvederm, filler asid hialuronik, VYCROSS®, Kaiteki, konsultasi percuma (153 chars) |
| sections[0] "What is Juvéderm?" | apa itu juvederm, juvederm adalah | `apa itu juvederm` returns; `juvederm adalah` is ID | KEYWORD: **Apa itu Juvéderm?** |
| sections[1] "How VYCROSS® gel technology works" | vycross, vycross technology, juvederm vycross | English only | DIRECT: **Bagaimana teknologi gel VYCROSS® berfungsi** |
| sections[2] "How long does Juvéderm last, and can it be dissolved?" | juvederm tahan berapa lama, filler tahan berapa lama, filler muka tahan berapa lama, juvederm dissolve | brand Malay form empty; `filler tahan berapa lama` and `filler muka tahan berapa lama` return (MY); `juvederm dissolve` English | KEYWORD (pattern): **Juvéderm tahan berapa lama, dan boleh ke ia dilarutkan?** |
| sections[3] "Where on the face is each Juvéderm gel used?" | juvederm untuk, juvederm bibir, juvederm dagu | `juvederm untuk` → **untuk apa**, untuk bibir, untuk dagu; `filler dagu juvederm`, `filler bibir juvederm` return | KEYWORD: **Juvéderm untuk apa: setiap gel digunakan di bahagian muka mana?** |
| sections[4] "Who should not have Juvéderm, according to the manufacturer?" | siapa tidak boleh buat filler, filler hamil, filler sesuai untuk | empty or Turkish/Hamilton noise | DIRECT: **Siapa yang tidak sesuai buat Juvéderm, menurut pengeluar?** |
| sections[5] "How long does a Juvéderm appointment take, and when does the swelling settle?" | juvederm bengkak, filler bengkak, filler bengkak berapa lama | brand form empty; `filler bengkak berapa lama` returns (mixed MY/ID) | KEYWORD: **Sesi Juvéderm ambil masa berapa lama, dan bengkak berapa lama baru reda?** |
| sections[6] "What are the risks of Juvéderm, and which symptoms are urgent?" | juvederm kesan sampingan, risiko filler, kesan sampingan filler | brand form empty (English `juvederm side effects` strong); `risiko filler`, `kesan sampingan filler` return | KEYWORD: **Apa risiko dan kesan sampingan Juvéderm, dan simptom mana yang perlu tindakan segera?** |
| FAQ 1 "Difference between the Juvéderm gels…" | beza juvederm, juvederm vs | `beza juvederm` empty; `juvederm vs` → restylane, juvelook (English) | DIRECT: **Apa beza antara gel Juvéderm, dan bagaimana doktor memilihnya?** |
| FAQ 2 "Is Juvéderm safe for Asian skin tones?" | juvederm sesuai, filler sesuai untuk | empty | DIRECT: **Adakah Juvéderm selamat untuk warna kulit Asia?** |
| FAQ 3 "Can Juvéderm be reversed…?" | buang filler, filler boleh dibuang, larutkan filler, juvederm dissolve | `buang filler` → di muka, dagu, bibir (MY); *larut* forms empty | KEYWORD (partial): **Boleh ke Juvéderm dilarutkan atau dibuang jika saya tidak suka hasilnya?** (treatment page FAQ 4 form) |
| FAQ 4 "How long does Juvéderm last?" | as sections[2] | as sections[2] | KEYWORD (pattern): **Juvéderm tahan berapa lama?** |

**Malay tally (14 logged strings):** 10 KEYWORD, 4 DIRECT.

**Indonesian pollution seen and avoided:** `juvederm adalah`, `filler bawah mata apakah aman / butuh berapa cc`, `filler sakit ga`, `bengkak setelah filler`, `filler bibir bertahan berapa lama`. Bare *harga juvederm* is never used; the page quotes no price.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| hyaluronic acid (HA) | 玻尿酸（透明质酸，HA） | asid hialuronik (HA) | dermal-fillers |
| cross-linked | 交联 | berangkai silang / dirangkai silang | new (AC `交联玻尿酸`) |
| hyaluronidase | 透明质酸酶 | hialuronidase | new (EN names it here) |
| lidocaine | 利多卡因 | lidokain | new |
| amide-type local anaesthetics | 酰胺类局部麻醉药 | ubat bius setempat jenis amida | new |
| vascular occlusion | 血管栓塞 | oklusi vaskular | concern pages |
| injectable medical device | 可注射的医疗器材 | peranti perubatan suntikan | onda-coolwaves (医疗器材) |
| needle or cannula | 针头或钝针（cannula） | jarum atau kanula | new |
| topical anaesthetic | 表面麻药 | krim kebas | dermal-fillers |
| nasolabial / marionette | 法令纹 / 木偶纹 | lipatan nasolabial / garis marionette | dermal-fillers |
| perioral lines | 口周纹 | garis perioral | fine-lines-wrinkles |
| under-eye hollowing | 眼下凹陷（泪沟） | lekuk bawah mata (tear trough) | dark-eye-circles |
| mid-face | 面中 | bahagian tengah muka | face-contouring / aging |
| skin blanching | 皮肤发白 | kulit menjadi pucat | new |

## For the bilingual doctor-reviewer

1. **透明质酸酶 / hialuronidase.** The EN names the enzyme, so both locales do. The colloquial Chinese search is 玻尿酸溶解酶; it's not used in copy. Confirm 透明质酸酶 is the term the doctors use with patients.
2. **乔雅登** (the TW/CN Chinese brand name) is searched but dcard-led and isn't on the EN page, so it's left out. Add it in brackets once if MY patients know the product by that name.
3. **"Is Juvéderm safe for Asian skin tones?"** is a direct translation of the EN question. The answer stays as nuanced as the EN (skin tone isn't the limiting factor; anatomy and history matter more). Nothing says the product is safe.
4. **"Cohesive gel"** is 内聚性好的凝胶 / *gel yang licin dan padu*. Confirm.
5. **钝针（cannula）/ kanula**: confirm the clinic's usual word.
6. **L-03r warnings (永久 / kekal)** are all negated ("不是永久的", "tidak kekal") or factual ("永久植入物" / "implan kekal" = a permanent implant in the area).
