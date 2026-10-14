# 21. Technology keyword log: CoolSculpting (`/technology/coolsculpting`)

**Date:** 2026-10-14 · Format follows the pilot, `onda-coolwaves.md`.
**Outputs:** `content/i18n/technology/zh/coolsculpting.json`, `content/i18n/technology/ms/coolsculpting.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/coolsculpting.json`.
**Inputs:** EN record for `coolsculpting`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `fat-freezing` treatment page and the `body-slimming` concern page.

## Method

As in `onda-coolwaves.md`. Raw dumps (not in the repo): `C:/tmp/b5ex-ac-zh.json`, `C:/tmp/b5ex-ac-zh2.json`, `C:/tmp/b5ex-ac-zh3.json`, `C:/tmp/b5ex-ac-ms2.json`. Only search-relevant strings are logged; all body copy is a direct, faithful translation, with fat-freezing terms taken from the treatment page.

**Pattern for this device:** CoolSculpting is the one body device with real Malaysian brand demand. Chinese: `coolsculpting` → *价钱, 中文, coolsculpting酷塑冷冻减脂*; **酷塑冷冻溶脂** and `酷塑 价钱` return (价钱 is the Malaysian form), while bare `酷塑` is dcard-led. Generic Chinese demand sits on **冷冻溶脂** + 原理 / 部位 / 风险 / 副作用 / 痛吗 / 要做几次. Malay demand is English: `coolsculpting malaysia price`, `coolsculpting cost malaysia`, `apa itu coolsculpting`, `coolsculpting downtime`.

## Chinese (`/zh`)

| English string | Probes tried | Autocomplete evidence | Decision |
|---|---|---|---|
| **name** "CoolSculpting" | coolsculpting, coolsculpting malaysia, 酷塑, 酷塑 马来西亚 | `coolsculpting` → 价钱, 中文, 酷塑冷冻减脂; `coolsculpting malaysia` → price | KEYWORD (brand): **CoolSculpting**, Latin. 酷塑 glossed once in leadAnswer and in the sections[0] body. |
| **seoTitle** "CoolSculpting Fat-Freezing Treatment Malaysia \| Kaiteki" | 酷塑冷冻溶脂, 冷冻溶脂, coolsculpting 中文 | **酷塑冷冻溶脂** returns itself; `冷冻溶脂` → 价钱, 效果, 部位 | KEYWORD: **CoolSculpting 酷塑冷冻溶脂 \| Kaiteki** (30). 马来西亚 and 疗程 dropped to fit; 冷冻溶脂 is the treatment name. |
| **seoDescription** | 冷冻溶脂, 酷塑 | as above | KEYWORD: CoolSculpting（酷塑）, 冷冻溶脂（cryolipolysis）, 受控的低温, 局部脂肪, 免费咨询 (81) |
| sections[0] "What is CoolSculpting?" | coolsculpting 是什么, 酷塑是什么, coolsculpting 中文 | question forms empty | DIRECT: **CoolSculpting 是什么？** |
| sections[1] "How it works" | 酷塑 原理, 冷冻溶脂 原理 | `酷塑 原理` empty; **冷冻溶脂原理** returns | KEYWORD: **冷冻溶脂原理：CoolSculpting 如何运作** |
| sections[2] "What will CoolSculpting not do?" | 酷塑 减重, 冷冻溶脂 减重 | empty | DIRECT |
| sections[3] "Which areas can a CoolSculpting applicator fit?" | 酷塑 部位, 冷冻溶脂 部位, 冷冻溶脂 双下巴 / 手臂 / 大腿 | `冷冻溶脂 部位` returns; 手臂, 大腿内侧 return; 双下巴 is ptt-led | KEYWORD: **冷冻溶脂部位：CoolSculpting 治疗头可以用在哪些部位？** |
| sections[4] "Which conditions rule out CoolSculpting?" | 冷冻溶脂 禁忌, 冷冻溶脂 什么人不能做 | empty | DIRECT: **哪些情况不能做 CoolSculpting？** |
| sections[5] "What does a CoolSculpting cycle feel like, and is there downtime?" | 冷冻溶脂 感觉, 冷冻溶脂 痛吗, 酷塑 恢复期 | `冷冻溶脂 痛吗` returns, but the heading asks how it feels, not whether it hurts; others empty | DIRECT: **做 CoolSculpting 是什么感觉？有恢复期吗？** |
| sections[6] "What are the risks of freezing fat with CoolSculpting?" | 冷冻溶脂 风险, 冷冻溶脂 副作用, coolsculpting 副作用, 酷塑 副作用 | all four return | KEYWORD: **CoolSculpting 冷冻溶脂有什么风险？** |
| FAQ 1 "Is CoolSculpting a weight-loss treatment?" | 酷塑 减重, 冷冻溶脂 减重 | empty (减肥 never used) | DIRECT: **CoolSculpting 是减重疗程吗？** |
| FAQ 2 "How long does a CoolSculpting session take?" | 酷塑 多久, 冷冻溶脂 多久 | `冷冻溶脂 多久` → 多久做一次 (a different question) | DIRECT: **做一次 CoolSculpting 要多久？** |
| FAQ 3 "When might I notice a change?" | 冷冻溶脂 什么时候, 冷冻溶脂 多久看到效果, 冷冻溶脂 多久见效 | empty | DIRECT: **做完 CoolSculpting，什么时候可能看到变化？** (same pattern as the fat-freezing page) |
| FAQ 4 "Does CoolSculpting have downtime?" | 酷塑 恢复期, 冷冻溶脂 恢复期 | empty | DIRECT: **CoolSculpting 有恢复期吗？** |

**Chinese tally (14):** 6 KEYWORD, 8 DIRECT.

**Not usable:** `酷塑冷冻减脂` (减脂 framing; dcard-led), `冷冻溶脂 效果 / 有效吗 / 后遗症` (efficacy framing with no EN heading), `酷塑 价钱` / `coolsculpting 价钱` (price stays at consultation). `冷冻溶脂要做几次` returns, but this EN record has no sessions FAQ.

## Malay (`/ms`)

| English string | Probes tried | Autocomplete evidence | Decision |
|---|---|---|---|
| **name** | coolsculpting, coolsculpting malaysia | → **coolsculpting malaysia price**, cost malaysia | KEYWORD (brand): **CoolSculpting** |
| **seoTitle** | coolsculpting malaysia, fat freezing, cryolipolysis malaysia | `coolsculpting malaysia` returns; `fat freezing` → johor, treatment; `cryolipolysis malaysia` → price | KEYWORD: **Rawatan Fat Freezing CoolSculpting di Malaysia \| Kaiteki** (56). *Fat Freezing* = terms.ts name. |
| **seoDescription** | kriolipolisis, cryolipolysis | `kriolipolisis` → criolipolisis (Spanish); English strong | KEYWORD (brand), 159 chars. *Kriolipolisis* as on the fat-freezing page. |
| sections[0] "What is CoolSculpting?" | apa itu coolsculpting | returns itself | KEYWORD: **Apa itu CoolSculpting?** |
| sections[1] "How it works" | fat freezing how does it work | English | DIRECT: **Bagaimana ia berfungsi** |
| sections[2] "What will CoolSculpting not do?" | coolsculpting turun berat badan, coolsculpting weight loss | Malay empty; English global | DIRECT |
| sections[3] "Which areas can a CoolSculpting applicator fit?" | coolsculpting perut, coolsculpting dagu, coolsculpting areas | Malay empty; `coolsculpting areas` English | DIRECT |
| sections[4] "Which conditions rule out CoolSculpting?" | coolsculpting tak sesuai, coolsculpting hamil | empty / Hamilton noise | DIRECT |
| sections[5] "What does a CoolSculpting cycle feel like, and is there downtime?" | coolsculpting sakit, coolsculpting downtime | `coolsculpting downtime` → chin downtime, elite downtime | KEYWORD (partial): **Bagaimana rasanya satu kitaran CoolSculpting, dan ada downtime ke?** |
| sections[6] "What are the risks of freezing fat with CoolSculpting?" | coolsculpting kesan sampingan, coolsculpting risks | Malay empty; English strong | DIRECT |
| FAQ 1 | coolsculpting turun berat badan | empty | DIRECT: **CoolSculpting ialah rawatan turun berat badan ke?** |
| FAQ 2 | coolsculpting berapa lama, coolsculpting how long | Malay empty; English → how long does it last / to see results | DIRECT: **Berapa lama satu sesi CoolSculpting?** |
| FAQ 3 | coolsculpting results | English | DIRECT (same as the fat-freezing page) |
| FAQ 4 | coolsculpting downtime | returns | KEYWORD (partial): **CoolSculpting ada downtime ke?** |

**Malay tally (14):** 6 KEYWORD, 8 DIRECT.

**Indonesian pollution avoided:** none surfaced for this brand. Bare *harga coolsculpting* is never used; price is discussed at consultation.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| cryolipolysis / fat freezing | 冷冻溶脂（cryolipolysis） | kriolipolisis / fat freezing | terms.ts, fat-freezing |
| controlled cooling | 受控的低温 | penyejukan terkawal | fat-freezing |
| applicator (cycle) | 治疗头（冷却过程） | aplikator (kitaran) | fat-freezing |
| cooling plate | 冷却板 | plat penyejuk | fat-freezing |
| pinchable pockets of fat | 可以捏起来的局部脂肪 | lemak setempat yang boleh dicubit | fat-freezing |
| flanks (love handles) | 腰侧（游泳圈） | tepi pinggang (love handles) | body-slimming |
| submental | 颏下 | submental | new |
| not a weight-loss treatment | 不是减重疗程 | bukan rawatan menurunkan berat badan | body-slimming |

## For the bilingual doctor-reviewer

1. **酷塑** is the Chinese trade name for CoolSculpting used in mainland China and Taiwan. It is glossed in brackets, and used once in the zh title as **酷塑冷冻溶脂**, the exact autocomplete form. Confirm the client is happy to use it in Malaysia.
2. **冷冻溶脂** contains 溶脂, but it is the established treatment name (terms.ts, docs/18 §5); the copy never claims fat "dissolves".
3. **"Muffin top"** is 腰间赘肉（muffin top）/ *"muffin top"*. Check the zh phrasing reads neutrally.
4. **zh title drops 马来西亚 and 疗程** to stay at 30 characters.
