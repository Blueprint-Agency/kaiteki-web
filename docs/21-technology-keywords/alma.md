# 21. Technology keyword log: Alma (`/technology/alma`)

**Date:** 2026-10-14 · Device-page localisation round, following the `onda-coolwaves.md` pilot.
**Outputs:** `content/i18n/technology/zh/alma.json`, `content/i18n/technology/ms/alma.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/alma.json`.
**Inputs:** EN record for `alma`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `laser-hair-removal` treatment page (`docs/20-treatment-keywords/laser-hair-removal.md`).

## Method

Same as the pilot: Google Autocomplete (`suggestqueries.google.com`, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`). HAS VOLUME → **KEYWORD**; NO VOLUME → **DIRECT**.

- **Probes:** shared batch with `pro-yellow`, `m22-ipl` and `fractional-co2` (about 40 zh and 35 ms for this page). Raw dumps: `C:/tmp/pyma-ac-zh*.json`, `C:/tmp/pyma-ac-ms*.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, the seven section headings, the four FAQ questions. All body copy is a direct, faithful translation.
- **Chinese demand is on 激光脱毛** (→ 是永久的吗, 的坏处, 多久一次, 价格, 和冰点脱毛的区别), with returning sub-forms 原理, 前准备, 痛吗, 毛囊炎, 副作用, 纹身, 白毛. `alma 脱毛`, `alma 激光`, `alma是什么` return themselves.
- **Malaysian Malay demand for Alma and its technology is English** (*alma laser hair removal (price), alma soprano, shr hair removal vs ipl, laser hair removal dark skin, shave or wax before laser hair removal*). Malay *laser buang bulu* is strong as a head term (muka, ketiak, kemaluan, rawatan, harga), but every Malay sub-question (*sakit, cukur, tumbuh semula, kulit gelap, tatu, kesan sampingan*) is empty, so most Malay headings come out DIRECT.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Alma (IPL + RF)" | alma, alma 脱毛, alma 激光, alma 是什么 | `alma` is Almaty / almari noise; `alma 脱毛`, `alma 激光` return themselves; `alma 是什么` → alma是什么 | KEYWORD (brand): kept in Latin. IPL and RF are acronyms and stay. |
| **seoTitle** "Alma IPL + RF Hair Removal Treatment Malaysia \| Kaiteki" | alma 脱毛, alma 激光脱毛, ipl 射频, 脱毛 射频, 激光脱毛 射频 | `alma 脱毛` returns; 射频 forms empty; `alma 激光脱毛` empty | KEYWORD: **马来西亚 Alma IPL+射频脱毛 \| Kaiteki** (28 chars). 射频 per terms.ts; 脱毛 is the form that returns with *alma*. |
| **seoDescription** | 激光脱毛, alma 脱毛 | head term strong | KEYWORD: Alma, 激光脱毛, IPL, 射频, 毛囊, 减少毛发, 免费咨询 (75 chars). 减少 (reduce), never 永久. |
| sections[0] "What is the Alma hair-removal platform?" | alma 是什么 | → alma是什么 | KEYWORD: **Alma 脱毛平台是什么？** |
| sections[1] "How it works" | 激光脱毛原理, alma shr, shr 脱毛 | `激光脱毛原理` returns; `shr 脱毛` is Japanese-led (とは, vio, 効果なし); `alma shr` empty | KEYWORD: **激光脱毛原理：Alma 如何运作** (same 原理 pattern as the pilot and the treatment page) |
| sections[2] "Why does hair grow back, and why can one session not work?" | 激光脱毛 长回来, 激光脱毛为什么, 激光脱毛 几次 | all empty (`激光脱毛多久一次` returns, but the section is about why, not spacing) | DIRECT: **为什么毛发会再长出来？为什么一次疗程不够？** |
| sections[3] "Can Alma treat darker skin, and fine or pale hair?" | 激光脱毛 深色皮肤, 激光脱毛 深色, 激光脱毛 肤色, 激光脱毛 细毛, 激光脱毛 白毛 | skin and 细毛 forms empty; **`激光脱毛 白毛`** returns | KEYWORD (partial): **Alma 适合较深的肤色吗？细毛、浅色毛或白毛可以做吗？** 白毛 is covered by the body (very light, grey or white hair), as in the treatment page's FAQ 3. |
| sections[4] "Why do tattoos, tans and medications matter before Alma?" | 激光脱毛 纹身, 激光脱毛前, 激光脱毛 晒黑 | `激光脱毛 纹身` returns; `激光脱毛前` → 准备, 注意, 拔毛; 晒黑 empty | KEYWORD: **Alma 激光脱毛前：为什么纹身、晒黑和药物很重要？** |
| sections[5] "Should you shave before Alma, and what does a session feel like?" | 激光脱毛前要剃毛吗, 激光脱毛 剃毛, 激光脱毛 刮毛, 激光脱毛痛吗 | shave forms empty; `激光脱毛前` → 准备, 拔毛; `激光脱毛痛吗` returns | KEYWORD (partial): **激光脱毛前要先剃毛吗？Alma 疗程是什么感觉？** The answer is honest about warmth; nothing says 无痛. |
| sections[6] "Can Alma cause burns, folliculitis or more hair?" | 激光脱毛 副作用, 激光脱毛 毛囊炎, 激光脱毛 烫伤, 激光脱毛 毛变多 | `激光脱毛 副作用` and `激光脱毛 毛囊炎` return; 烫伤 / 毛变多 empty | KEYWORD: **激光脱毛副作用：Alma 会造成烫伤、毛囊炎或毛发变多吗？** |
| FAQ 1 "Why combine radiofrequency with IPL for hair removal?" | ipl 射频, 脱毛 射频, 激光脱毛 射频 | empty | DIRECT: **脱毛为什么要把射频和 IPL 结合？** |
| FAQ 2 "Is Alma suitable for darker skin tones?" | 激光脱毛 深色皮肤, 激光脱毛 黑 | empty (`激光脱毛 黑` → 黑店, 黑点: noise) | DIRECT: **Alma 适合较深的肤色吗？** |
| FAQ 3 "How does in-motion SHR feel compared with conventional stamping IPL?" | shr 脱毛, alma shr | Japanese-led / empty | DIRECT: **滑动式 SHR 和传统逐发式 IPL 感觉有什么不同？** |
| FAQ 4 "Should I shave or wax before my session?" | 激光脱毛前, 激光脱毛前准备, 脱毛前要刮毛吗 | `激光脱毛前` → 准备, 注意, **拔毛** (the shave-vs-pluck question); 刮毛 forms empty | KEYWORD (partial): **激光脱毛前应该剃毛还是蜡脱毛？** |

**Chinese tally (14 logged strings):** 10 KEYWORD, 4 DIRECT.

**Not usable:** 冰点脱毛 (strong, but a diode-laser marketing name; same call as laser-hair-removal), `激光脱毛的坏处` (negative framing the EN doesn't headline), `激光脱毛是永久的吗` (no permanence question on this page; it is on m22-ipl FAQ 4 and the treatment page), `shr 脱毛 永久 / vio / とは` (Japanese), `ipl 脱毛 家庭用 / 脱毛仪` (home devices), `激光脱毛 黑店` (noise).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** | alma, alma laser, alma laser malaysia, alma hair removal | `alma` is noise (almari, al-mathurat); `alma laser` → hair removal, soprano; `alma laser malaysia` returns itself | KEYWORD (brand): kept in Latin |
| **seoTitle** | laser buang bulu, alma laser malaysia, alma laser hair removal price malaysia | `laser buang bulu` → muka, ketiak, rawatan, harga; `alma laser malaysia` returns | KEYWORD: **Laser Buang Bulu Alma (IPL + RF) di Malaysia \| Kaiteki** (54 chars) |
| **seoDescription** | laser buang bulu, ipl rf hair removal | head term strong; `ipl rf hair removal` → at home (English) | KEYWORD: Alma, IPL, radiofrekuensi, folikel bulu, satu siri sesi, konsultasi percuma (151 chars) |
| sections[0] "What is the Alma hair-removal platform?" | apa itu laser buang bulu, laser buang bulu | *apa itu* form empty; head term strong | KEYWORD (head term): **Apa itu platform laser buang bulu Alma?** *Laser buang bulu* is the treatment Alma sits in, so the meaning holds. |
| sections[1] "How it works" | shr laser, shr hair removal | English only | DIRECT: **Bagaimana ia berfungsi** |
| sections[2] "Why does hair grow back…?" | laser buang bulu tumbuh semula, bulu tumbuh semula selepas laser, kenapa laser buang bulu | empty | DIRECT: **Kenapa bulu tumbuh semula, dan kenapa satu sesi tidak mencukupi?** |
| sections[3] darker skin / fine or pale hair | laser buang bulu kulit gelap, laser buang bulu bulu halus, laser hair removal dark skin | Malay empty; English returns (London, Toronto: global) | DIRECT: **Bolehkah Alma merawat kulit yang lebih gelap, dan bulu yang halus atau cerah?** |
| sections[4] tattoos, tans, medications | laser buang bulu tatu, laser buang bulu ubat, laser buang bulu hamil | empty | DIRECT: **Kenapa tatu, kulit digelapkan matahari dan ubat penting sebelum Alma?** |
| sections[5] shave / session feel | laser buang bulu cukur, cukur sebelum laser, cukur bulu sebelum laser, laser buang bulu sakit | all empty | DIRECT: **Perlukah anda bercukur sebelum Alma, dan bagaimana rasanya sesi itu?** |
| sections[6] burns, folliculitis, more hair | laser buang bulu kesan sampingan, laser buang bulu terbakar | empty | DIRECT: **Bolehkah Alma menyebabkan kulit terbakar, folikulitis atau bulu bertambah?** |
| FAQ 1 "Why combine RF with IPL?" | ipl rf hair removal | English (at home) | DIRECT: **Kenapa radiofrekuensi digabungkan dengan IPL untuk buang bulu?** |
| FAQ 2 "Suitable for darker skin tones?" | laser buang bulu kulit gelap | empty | DIRECT: **Alma sesuai ke untuk warna kulit yang lebih gelap?** |
| FAQ 3 in-motion SHR vs stamping IPL | shr hair removal, alma laser vs | `shr hair removal` → **vs ipl** (English); `alma laser vs` → diode, ipl, candela | DIRECT: **Bagaimana rasa SHR teknik bergerak berbanding IPL konvensional jenis tekan?** |
| FAQ 4 "Shave or wax before my session?" | laser hair removal shave or wax, cukur sebelum laser | English returns (**shave or wax before laser hair removal**); Malay empty | DIRECT: **Perlu bercukur atau waxing sebelum sesi?** (*waxing* as on the treatment page) |

**Malay tally (14 logged strings):** 4 KEYWORD, 10 DIRECT.

**Not used, and why:** *rawatan laser buang bulu kemaluan* (real demand, but the EN lists bikini/Brazilian only; not expanded), *buang bulu secara kekal / cara buang bulu kekal* (permanence framing; the page never promises it), *alma laser price in india / pakistan* (other markets), *soprano ice perfume* (noise), *ipl rf hair removal at home* (home devices).

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| hair reduction | 减少毛发 / 减毛 | pengurangan bulu | laser-hair-removal |
| IPL / radiofrequency | IPL / 射频 | IPL / radiofrekuensi | laser-hair-removal, terms.ts |
| applicator | 探头 | aplikator | laser-hair-removal (冷却的探头) |
| cooled tip | 冷却头 | hujung yang disejukkan | laser-hair-removal |
| growth cycle / active phase | 生长周期 / 活跃生长期 | kitaran pertumbuhan / fasa pertumbuhan aktif | laser-hair-removal |
| stamping (device) | 逐发式 | jenis tekan | new; laser-hair-removal used 逐发打下去的仪器 |
| in-motion technique | 滑动式技术 | teknik bergerak | new |
| permanent makeup | 半永久化妆 | solekan separa kekal | laser-hair-removal |
| waxing / plucking / threading | 蜡脱毛 / 拔毛 / 绞毛 | waxing / mencabut / threading | laser-hair-removal |
| folliculitis | 毛囊炎 | folikulitis (radang folikel) | laser-hair-removal |
| paradoxical stimulation of fine hair | 细毛反而受到刺激（反常性毛发增生） | rangsangan paradoks bulu halus | laser-hair-removal (变粗 dropped here, see note 3) |
| keloid | 蟹足肿 | parut keloid | pico-laser |

## For the bilingual doctor-reviewer

1. **Permanence words:** zh 半永久化妆 and ms *solekan separa kekal* (sections[4]) are the cosmetic-tattoo term, not a claim. The validator warns (L-03r) on both; re-read and kept. Elsewhere the Malay body says *tetap utuh* (stays intact) to avoid a stray *kekal*.
2. **"Doctor or therapist"** (FAQ 4) is 医生或治疗师 / *doktor atau ahli terapi*, as in the EN. If LHR at Kaiteki is always doctor-performed, the EN should change first.
3. **Paradoxical stimulation** is 细毛反而受到刺激（反常性毛发增生）, without the treatment page's 变粗, to stay closer to the EN here. Pick one wording for both pages.
4. **"Snap of a stamping device"** is 逐发式仪器那种弹击感 / *rasa petikan daripada peranti jenis tekan*. It names no competitor.
5. **"Well tolerated"** is attributed to the manufacturer (制造商也形容…耐受度良好 / *pengeluar menggambarkan … mudah ditoleransi*); it is not a 无痛 / *tanpa sakit* claim.
6. **AFT, SHR, Speed AFT, 6.4cm²** stay as in the EN, with the manufacturer attributions kept on every technical claim.
