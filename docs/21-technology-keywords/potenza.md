# 21. Technology keyword log: Potenza (`/technology/potenza`)

**Date:** 2026-10-14 · Device & injectable localisation round (format: `onda-coolwaves.md`).
**Outputs:** `content/i18n/technology/zh/potenza.json`, `content/i18n/technology/ms/potenza.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/potenza.json`.
**Inputs:** EN record for `potenza`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `microneedling` treatment page and the `acne-scars`, `acne`, `enlarged-pores` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`, read as in the pilot.
- **Probes (shared batch with oligio, sylfirm-x, morpheus8):** 27 + 11 zh and 25 + 1 ms for this device. Raw dumps: `C:/tmp/rfdev-ac-zh.json`, `C:/tmp/rfdev-ac-zh2.json`, `C:/tmp/rfdev-ac-ms.json`, `C:/tmp/rfdev-ac-ms2.json` (not in the repo).
- **Brand noise:** bare `potenza` autocompletes to Bridgestone tyres and water pumps in both languages, so only Potenza + qualifier probes were read.
- **Scope:** name, seoTitle, seoDescription, the seven section headings, the four FAQ questions. All body copy is a direct, faithful translation.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `device`, `reviewedBy`, `lastReviewed`; Potenza, Cynosure Lutronic, Fusion Tip, 1MHz / 2MHz.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Potenza" | potenza, potenza 中文 | `potenza` → tyres, pumps, **potenza是什么**; `potenza 中文` → 中文名, rf microneedling 中文 | KEYWORD (brand): **Potenza** |
| **seoTitle** "Potenza RF Microneedling Treatment Malaysia \| Kaiteki" | potenza 马来西亚, potenza 黄金微针, potenza 射频微针 | `potenza 黄金微针` strong (dcard, 价格, 香港价钱, 台湾, 功效: TW/HK-led, as in microneedling.md); `potenza 射频微针` returns; `马来西亚` empty | KEYWORD: **马来西亚 Potenza 黄金微针 \| Kaiteki** (27 chars). 黄金微针 is the MY colloquial term (docs/18 §5). |
| **seoDescription** | potenza 痘疤, potenza 毛孔, potenza 功效 | all return | KEYWORD: Potenza, 四种模式, 针深可调, 射频微针（黄金微针）, 痘疤, 毛孔粗大, 免费咨询 (76 chars) |
| sections[0].heading "What is Potenza?" | potenza 是什么 | returns | KEYWORD: **Potenza 是什么？** |
| sections[1].heading "How the four modes and depth control work" | potenza 原理, potenza 模式, potenza 深度, potenza 单极, potenza 双极 | `原理`, `模式` (毛孔模式, 渗透模式), `深度` return; 单极/双极 empty | KEYWORD: **Potenza 原理：四种模式和深度控制如何运作** |
| sections[2].heading "Why does Potenza treat different parts of the face at different depths?" | potenza 深度 | returns itself | DIRECT: **为什么 Potenza 会用不同深度处理脸部不同部位？** (the literal translation already contains the term; no rephrasing) |
| sections[3].heading "Is Potenza mainly for scars and pores, or for tightening?" | potenza 痘疤, potenza 痘坑, potenza 毛孔, potenza 紧致 | `痘疤`, `毛孔` return; 痘坑/紧致 empty | KEYWORD: **Potenza 主要处理痘疤和毛孔，还是紧致？** |
| sections[4].heading "Who should avoid Potenza, and why does monopolar mode matter for implants?" | potenza 禁忌, potenza 心脏起搏器, potenza 起搏器 | empty | DIRECT: **哪些人应该避免做 Potenza？为什么单极模式对植入物很重要？** |
| sections[5].heading "What happens in a session, and how long does the skin take to settle?" | potenza 恢复期, potenza 恢复, potenza 多久 | `恢复期` returns; `多久` → 多久做一次 | KEYWORD: **做 Potenza 的过程是怎样的？恢复期要多久？** |
| sections[6].heading "Can Potenza trigger an acne flare or pigment change?" | potenza 副作用, potenza 爆痘, potenza 反黑, potenza 暗疮, 黄金微针 爆痘, 黄金微针 反黑 | `potenza 副作用` returns (plus drug noise: 锭/錠); Potenza + 爆痘/反黑/暗疮 empty; generic `黄金微针 爆痘`, `黄金微针 反黑` return | KEYWORD: **Potenza 有什么副作用？会引发暗疮（爆痘）或色素变化吗？** |
| FAQ 1 "What do Potenza's monopolar and bipolar modes actually change for me?" | potenza 单极双极, 单极 双极 射频 区别 | empty (`单极射频` → 单极射频 双极射频分别 exists, but not with Potenza) | DIRECT: **Potenza 的单极和双极模式，对我来说实际有什么不同？** |
| FAQ 2 "Is Potenza used for acne scars, and how many sessions…?" | potenza 痘疤, potenza 几次, potenza 痘疤 几次, potenza 多久 | `potenza 痘疤` returns; `potenza 多久` → 多久做一次; 几次 forms empty | KEYWORD: **Potenza 可以处理痘疤吗？痘疤要做几次？** |
| FAQ 3 "What is the Fusion Tip for?" | potenza fusion tip, potenza 探头 | `potenza fusion tip` returns itself; `potenza 探头` → 种类, 渗透, 毛孔探头 | KEYWORD (weak): **Potenza 的 Fusion Tip 是做什么用的？** (adds the device name so the query matches; Fusion Tip stays Latin) |
| FAQ 4 "Can I have Potenza if I have a pacemaker or metal implants?" | potenza 心脏起搏器, potenza 起搏器 | empty | DIRECT: **装有心脏起搏器或金属植入物，可以做 Potenza 吗？** |

**Chinese tally (14 logged strings):** 10 KEYWORD, 4 DIRECT (FAQ 3 weak).

**Not usable:** `potenza 黄金微针 dcard / 台湾 / 香港价钱` (TW/HK), `potenza 祛斑 模式` (a pigment-removal claim the EN doesn't make), `potenza 无限电波 探头` (TW clinic label), `potenza 黄金微针 juvelook` (combined-product demand; no EN source).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Potenza" | potenza, potenza malaysia | tyre and pump noise; `potenza treatment` → **potenza treatment malaysia** | KEYWORD (brand): **Potenza** |
| **seoTitle** | potenza treatment, potenza rf microneedling, rawatan potenza, potenza di malaysia | `potenza treatment` → treatment malaysia, for acne; `potenza rf microneedling` returns; Malay forms empty | KEYWORD: **Rawatan RF Microneedling Potenza di Malaysia \| Kaiteki** (54 chars) |
| **seoDescription** | potenza acne scar, potenza pores | both return (English) | KEYWORD: Potenza, RF microneedling, empat mod, kedalaman, Kaiteki, parut, liang pori, konsultasi percuma (154 chars) |
| sections[0].heading "What is Potenza?" | apa itu potenza | **returns itself**, plus *apa itu potenza treatment* | KEYWORD: **Apa itu Potenza?** |
| sections[1].heading | potenza how it works, potenza modes | English only | DIRECT: **Bagaimana empat mod dan kawalan kedalaman berfungsi** |
| sections[2].heading | (no Malay form) | n/a | DIRECT: **Kenapa Potenza merawat bahagian muka yang berbeza pada kedalaman yang berbeza?** |
| sections[3].heading | potenza parut jerawat, potenza liang pori, potenza tightening | Malay empty; English returns | DIRECT: **Potenza terutamanya untuk parut dan liang pori, atau untuk menegangkan kulit?** |
| sections[4].heading | potenza pacemaker, potenza contraindications | empty / English | DIRECT: **Siapa yang patut mengelak Potenza, dan kenapa mod monopolar penting jika ada implan?** |
| sections[5].heading | potenza downtime | English only | DIRECT: **Apa yang berlaku dalam sesi Potenza, dan berapa lama kulit mengambil masa untuk pulih?** |
| sections[6].heading | potenza jerawat, potenza kesan sampingan, potenza side effects | Malay empty; English returns | DIRECT: **Boleh ke Potenza mencetuskan jerawat naik atau perubahan pigmen?** |
| FAQ 1 | potenza monopolar bipolar | → potenza monopolar vs bipolar (English) | DIRECT: **Apa sebenarnya perbezaan mod monopolar dan bipolar Potenza untuk saya?** |
| FAQ 2 | potenza parut jerawat, potenza how many sessions | Malay empty; English returns | DIRECT: **Adakah Potenza digunakan untuk parut jerawat, dan berapa sesi diperlukan untuk rawatan parut?** |
| FAQ 3 | potenza fusion tip | returns itself (English brand term) | DIRECT: **Untuk apa Fusion Tip?** |
| FAQ 4 | potenza pacemaker | empty | DIRECT: **Boleh ke saya buat Potenza jika ada perentak jantung atau implan logam?** |

**Malay tally (14 logged strings):** 4 KEYWORD, 10 DIRECT.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| monopolar / bipolar | 单极 / 双极 | monopolar / bipolar | microneedling, radiofrequency |
| return electrode | 回路电极 | elektrod pemulangan | (new) |
| boxcar and rolling scars | 箱型和滚动型痘疤 | parut boxcar dan rolling | acne-scars, microneedling |
| tethered scar | 被下方纤维牵拉的痘疤 | parut yang terikat (tethered) | (new) |
| acne flare | 暗疮发作（爆痘） | jerawat naik | acne, microneedling avoidIf |
| oil-prone acne-affected skin | 容易出油长痘的皮肤 | kulit berminyak dan mudah berjerawat | microneedling variant module |
| permanent filler | 永久性填充剂 | filler kekal | microneedling avoidIf |

## For the bilingual doctor-reviewer

1. **黄金微针 in the zh title and description**, as on the microneedling page. `potenza 黄金微针` has the most Chinese demand of the four devices, but it is TW/HK-led. Confirm the gloss for Potenza's tips.
2. **爆痘** glosses "acne flare" in the zh section heading (暗疮 first, 爆痘 in brackets).
3. **"Tethered scar"** is 被下方纤维牵拉的痘疤 / *parut yang terikat (tethered)*. Confirm the wording.
4. **Fusion Tip** stays in English. The text keeps "the manufacturer describes / states" (制造商形容 / 表示; *pengeluar menggambarkan / menyatakan*).
5. **永久性填充剂 / filler kekal** trips the L-03r warning. It is factual: a permanent filler the patient must declare.
