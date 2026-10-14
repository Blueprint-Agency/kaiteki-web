# 21. Technology keyword log: Art Filler (`/technology/art-filler`)

**Date:** 2026-10-14 · Follows the pilot method in `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/art-filler.json`, `content/i18n/technology/ms/art-filler.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/art-filler.json`.
**Inputs:** EN record for `art-filler`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `dermal-fillers` treatment page and its log, the `fine-lines-wrinkles`, `face-contouring`, `dark-eye-circles` and `aging` concern pages, and `juvederm.md` (sister page, same terms).

## Method

- Same as the pilot (autocomplete, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`; KEYWORD vs DIRECT).
- **Probes:** shared dump with the other three filler brand pages: 230 zh and 178 ms. Raw dumps: `C:/tmp/filler4-ac-zh.json`, `C:/tmp/filler4-ac-ms.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, seven section headings, four FAQ questions. Everything else is a direct, faithful translation.
- **This page has almost no local demand.** Every `art filler + Chinese` probe (24 of them) came back empty, and every `art filler + Malay` probe too; `art filler` alone is Turkish/Russian-led (*dolgu, отзывы*), and `fillmed` is skincare-led (NCTF, masks). So most headings are DIRECT, and the KEYWORD decisions lean on the generic filler queries.
- **Filler term, hyaluronidase, body terms:** as in `juvederm.md`.
- **Untranslated by design:** `slug`, `group`, `type`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; product and technology names (Art Filler and its gels Fine Lines, Universal, Volume, Lips, Lips Soft, Eyes; Laboratoires Fillmed; Tri-Hyal®; BDDE; MDa).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Art Filler" | art filler, fillmed art filler, fillmed 中文 | `art filler` → volume, lips, universal, *dolgu* (Turkish), *отзывы*; `fillmed 中文` returns | KEYWORD (brand): **Art Filler**, kept in Latin. It's a brand, and the only form anyone searches. |
| **seoTitle** "Art Filler Dermal Filler Treatment Malaysia \| Kaiteki" | art filler 玻尿酸, art filler 马来西亚, 玻尿酸 马来西亚, 法国 玻尿酸 | brand forms empty; `玻尿酸 马来西亚` (MY signal, dermal-fillers log); `法国玻尿酸品牌` returns | KEYWORD: **马来西亚 Art Filler 玻尿酸 \| Kaiteki** (29 chars). 玻尿酸填充 would make it 31, so 填充 is dropped; 玻尿酸 is the query head. 法国 not used in the title (the EN title doesn't say France). |
| **seoDescription** | fillmed 玻尿酸, tri-hyal | `fillmed 玻尿酸` returns; `tri-hyal` → skincare serums | KEYWORD: Art Filler, Fillmed, Tri-Hyal®, 玻尿酸填充剂, 淡化纹路, 补充容量, 免费咨询 (84 chars) |
| sections[0] "What is Art Filler?" | art filler 是什么 | empty | DIRECT: **Art Filler 是什么？** |
| sections[1] "How Tri-Hyal® technology works" | tri-hyal, art filler 原理 | skincare noise; empty | DIRECT: **Tri-Hyal® 技术如何运作** |
| sections[2] "What do Fillmed's 18-month studies mean for how long Art Filler lasts?" | art filler 维持多久, 玻尿酸 维持 18个月 | empty | DIRECT: **Fillmed 的 18 个月研究，对 Art Filler 能维持多久代表什么？** |
| sections[3] "Which Art Filler gel is used where?" | art filler 系列, art filler 部位 | empty | DIRECT: **每一款 Art Filler 凝胶用在哪里？** |
| sections[4] "What does Fillmed list as reasons not to use Art Filler?" | art filler 禁忌 | empty | DIRECT: **Fillmed 列出哪些不适合使用 Art Filler 的情况？** |
| sections[5] "What happens at an Art Filler appointment, and why keep it apart from lasers and peels?" | 玻尿酸 激光, 玻尿酸 雷射, 打玻尿酸 后 多久 可以 做 激光 | `玻尿酸 激光` empty; `玻尿酸 雷射` returns but 雷射 is banned (TW) | DIRECT: **打 Art Filler 的过程是怎样的？为什么要和激光、换肤分开做？** |
| sections[6] "What adverse effects does Fillmed list for Art Filler?" | art filler 副作用 | empty | DIRECT: **Fillmed 列出 Art Filler 有哪些不良反应？** (不良反应 is the faithful term for "adverse effects") |
| FAQ 1 "What is Tri-Hyal® technology, and why does it matter?" | tri-hyal | skincare noise | DIRECT: **Tri-Hyal® 技术是什么？为什么重要？** |
| FAQ 2 "Is Art Filler suitable for the under-eye area?" | art filler 泪沟, 玻尿酸 泪沟, 泪沟 玻尿酸 | brand form empty; `泪沟 玻尿酸` and `玻尿酸 泪沟` strong (some dcard) | KEYWORD: **Art Filler 适合用在眼下（泪沟）吗？** The answer names tear-trough hollowing, so the meaning holds. |
| FAQ 3 "Does Art Filler already contain anaesthetic?" | 玻尿酸 麻药, 玻尿酸 利多卡因 | `玻尿酸 麻药` → **玻尿酸 含 麻药**; 利多卡因 form empty | KEYWORD: **Art Filler 本身已经含麻药吗？** |
| FAQ 4 "Which Art Filler product would I need for my concern?" | art filler 哪种 | empty | DIRECT: **我的问题需要哪一款 Art Filler？** |

**Chinese tally (14 logged strings):** 5 KEYWORD, 9 DIRECT.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Art Filler" | art filler, filler fillmed, fillmed malaysia | `art filler` → universal, lips, volume, fine lines, fillmed (global English); `fillmed malaysia` returns itself | KEYWORD (brand): **Art Filler** |
| **seoTitle** | art filler malaysia, art filler price malaysia, dermal filler malaysia | brand forms empty; `dermal filler malaysia` → price (dermal-fillers log) | KEYWORD: **Rawatan Dermal Filler Art Filler di Malaysia \| Kaiteki** (54 chars) |
| **seoDescription** | filler fillmed, tri-hyal | `filler fillmed` → volume, lips, universal, *dari mana* | KEYWORD: Art Filler, filler asid hialuronik, Fillmed, Tri-Hyal®, Kaiteki, konsultasi percuma (159 chars) |
| sections[0] "What is Art Filler?" | apa itu art filler, art filler adalah | empty | DIRECT: **Apa itu Art Filler?** |
| sections[1] "How Tri-Hyal® technology works" | tri-hyal | skincare noise | DIRECT: **Bagaimana teknologi Tri-Hyal® berfungsi** |
| sections[2] "What do Fillmed's 18-month studies mean…" | art filler tahan berapa lama, art filler how long | empty | DIRECT: **Apa maksud kajian 18 bulan Fillmed tentang tempoh Art Filler tahan?** |
| sections[3] "Which Art Filler gel is used where?" | art filler untuk, art filler range | `art filler range` returns itself (English); *untuk* empty | DIRECT: **Gel Art Filler yang mana digunakan di mana?** |
| sections[4] "What does Fillmed list as reasons not to use Art Filler?" | umur berapa boleh filler, filler bawah 18, filler hamil | `umur berapa boleh filler` returns but is one line of the section; others empty/noise | DIRECT: **Apakah sebab yang disenaraikan oleh Fillmed untuk tidak menggunakan Art Filler?** |
| sections[5] "…why keep it apart from lasers and peels?" | filler laser, filler sebelum laser, pantang larang selepas filler | `filler laser` English clinic noise; `pantang larang selepas filler` is MY but is aftercare in general | DIRECT: **Apa yang berlaku semasa sesi Art Filler, dan kenapa ia perlu dijarakkan daripada laser dan peel?** |
| sections[6] "What adverse effects does Fillmed list for Art Filler?" | art filler side effects, kesan sampingan filler | brand empty; `kesan sampingan filler` returns | KEYWORD: **Apakah kesan sampingan yang disenaraikan oleh Fillmed untuk Art Filler?** (*kesan sampingan* is also the normal Malay for adverse effects; the body says *kesan buruk* where the EN lists them) |
| FAQ 1 "What is Tri-Hyal® technology…?" | tri-hyal | skincare noise | DIRECT: **Apa itu teknologi Tri-Hyal®, dan kenapa ia penting?** |
| FAQ 2 "Is Art Filler suitable for the under-eye area?" | art filler under eye, filler bawah mata, filler bawah mata tahan berapa lama | `art filler under eye` English; `filler bawah mata` returns (mixed: *tahan berapa lama* MY, *apakah aman / butuh* ID) | KEYWORD (partial): **Adakah Art Filler sesuai sebagai filler bawah mata?** |
| FAQ 3 "Does Art Filler already contain anaesthetic?" | filler kebas, filler bius, art filler lidocaine | all empty | DIRECT: **Adakah Art Filler sudah mengandungi ubat bius?** |
| FAQ 4 "Which Art Filler product would I need…?" | art filler untuk | empty | DIRECT: **Produk Art Filler yang mana saya perlukan untuk masalah saya?** |

**Malay tally (14 logged strings):** 6 KEYWORD, 8 DIRECT.

**Indonesian pollution seen and avoided:** `filler bawah mata apakah aman / butuh berapa cc`, `filler mengandung babi` (a halal question; not addressed here, as the EN doesn't). *Jerawat aktif* (MY), never *jerawat bopeng*.

## Terms carried over

Same table as `juvederm.md`, plus:

| EN | zh | ms | Source |
|---|---|---|---|
| three hyaluronic-acid fractions | 三种玻尿酸成分 | tiga pecahan asid hialuronik | new |
| very long / long chains | 极长链 / 长链 | rantai sangat panjang / rantai panjang | new |
| free, uncross-linked HA | 游离、未交联的玻尿酸 | asid hialuronik bebas yang tidak dirangkai silang | new |
| correction potential | 矫正程度 | potensi pembetulan | new |
| indications | 适应症 | indikasi | new |
| tear-trough hollowing / crow's feet | 泪沟凹陷 / 鱼尾纹 | lekuk bawah mata (tear trough) / garis tepi mata (crow's feet) | dark-eye-circles / fine-lines-wrinkles |
| porphyria | 紫质症（卟啉症） | porfiria | new |
| hypertrophic scarring | 增生性疤痕 | parut hipertrofik | new |
| non-absorbable implant | 不可吸收的植入物 | implan yang tidak boleh diserap | new |
| cytochrome P450 inhibitors | 细胞色素 P450 抑制剂 | perencat sitokrom P450 | new |
| deep chemical peeling / dermabrasion | 深层化学换肤 / 磨皮 | peel kimia dalam / dermabrasi | new |
| Tyndall effect | 丁达尔效应 | kesan Tyndall | new |
| granuloma / haematoma | 肉芽肿 / 血肿 | granuloma / hematoma | concern pages / new |

## For the bilingual doctor-reviewer

1. **seoTitle (zh)** is 马来西亚 Art Filler 玻尿酸 (29 chars); 玻尿酸填充 wouldn't fit the 30-char limit. Confirm 玻尿酸 alone reads fine as the product category.
2. **Contraindication list** is translated item by item. Please check 紫质症（卟啉症）/ *porfiria*, 增生性疤痕 / *parut hipertrofik*, and 细胞色素 P450 抑制剂 / *perencat sitokrom P450* against the clinic's usual wording.
3. **"Burning"** in the adverse-effects list is 灼热感 / *rasa pedih*. Confirm.
4. **"A manufacturer's study range is not a promise"** is kept: 并不是承诺 / *bukanlah janji*.
5. **L-03r warnings** (永久 / kekal) are negated ("不是永久的", "tidak kekal").
