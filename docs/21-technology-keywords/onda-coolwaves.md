# 21. Technology keyword log: Onda Coolwaves (`/technology/onda-coolwaves`)

**Date:** 2026-10-14 · **Pilot page** for the device & injectable localisation round (format for the next 35 `/technology` pages).
**Outputs:** `content/i18n/technology/zh/onda-coolwaves.json`, `content/i18n/technology/ms/onda-coolwaves.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/onda-coolwaves.json`.
**Inputs:** EN record for `onda-coolwaves`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `microwave-contouring` treatment page (`docs/20-treatment-keywords/microwave-contouring.md`) and the `body-slimming` concern page.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, with `hl=zh-CN` for Chinese and `hl=ms` for Malay. Read as in `docs/20-treatment-keywords/pico-laser.md`:
  - **HAS VOLUME:** the phrase, or a natural Malaysian form of it, shows up in autocomplete with Malaysian context, or at least without a Taiwan, HK or Indonesia skew. Signs of skew: *dcard / ptt / lihkg / 雷射 / 有冇用* for Chinese, *bisa / ga / sih / wajah / perawatan / adalah* for Malay.
  - **NO VOLUME:** nothing relevant comes back.
- **Decision:**
  - **KEYWORD:** the string is phrased around the real query form, and the English meaning is kept.
  - **DIRECT:** the string is a faithful translation with no invented keyword.
- **Probes:** 80 zh and 83 ms, in two batches per language. Raw dumps: `C:/tmp/onda-ac-zh.json`, `C:/tmp/onda-ac-zh2.json`, `C:/tmp/onda-ac-ms.json`, `C:/tmp/onda-ac-ms2.json` (not in the repo).
- **Scope:** only search-relevant strings are logged (name, seoTitle, seoDescription, the seven section headings, the four FAQ questions). This record has no jumpNav, routes or ctaMid. All body copy (summary, leadAnswer, facts, section bodies and list, cost factors, FAQ answers) is a direct, faithful translation.
- **Device pages differ from treatment pages in one way that matters for keywords:** the page *is* the brand, so every heading can lead with the device name without changing the EN meaning. Chinese demand is `onda + question word` (是什么, 原理, 副作用, 痛吗, 恢复期, 要做几次); Malaysian Malay demand for Onda is almost entirely **English-language** (*onda treatment malaysia, onda price malaysia, onda downtime, onda side effects, onda how many sessions*), so most Malay headings come out DIRECT.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `device`, `reviewedBy`, `lastReviewed`; the device and technology names (Onda, Coolwaves®) and the product forms *Onda for Body / Onda for Face* (glossed in zh, see note 2).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Onda Coolwaves" | onda, onda coolwaves, coolwaves, onda coolwaves 是什么 | `onda` → onda pro, onda是什么; `onda coolwaves` → Italian/global (prima e dopo, prezzo, milano); `coolwaves` → coolwaves onda; Chinese + coolwaves forms empty | KEYWORD (brand): **Onda Coolwaves**, kept in Latin. It's how the device is searched. |
| **seoTitle** "Onda Coolwaves Body & Face Treatment Malaysia \| Kaiteki" | onda 身体, onda 脸部, 脸部 onda, onda 脸部和身体, onda 马来西亚, onda malaysia, onda 疗程 | `onda 身体` → 效果, 价格 (some dcard); `脸部 onda` → 脸部onda是什么; `onda 脸部` → onda脸部价格; `onda 疗程` → 时间, 间隔, 次数; `onda malaysia` / `onda 马来西亚` are Honda noise | KEYWORD: **马来西亚 Onda 身体与脸部疗程 \| Kaiteki** (27 chars). *Coolwaves* dropped to fit 30: it has no Chinese demand, and it stays in the description and H1 (`name`). 马来西亚 kept for the EN geo intent. |
| **seoDescription** | onda 微波, onda 橘皮, onda 脂肪, onda 紧致, 橘皮组织 | `onda 微波` → onda微波溶脂效果, onda 微波提升; `onda 橘皮`, `onda 紧致` return; `onda 脂肪` → 脂肪细胞, 腹部脂肪; `橘皮组织` → 怎么消除, 是什么, 医美 | KEYWORD: Onda, 微波, Coolwaves, 局部脂肪, 橘皮组织, 紧致, 免费咨询 (76 chars) |
| sections[0].heading "What is Onda?" | onda 是什么, onda是什么项目, onda coolwaves 是什么 | `onda` → **onda是什么** (3rd suggestion); `onda 是什么` → onda是什么项目, onda 是什么医美 | KEYWORD: **Onda 是什么？** |
| sections[1].heading "How Coolwaves technology works" | onda 原理, coolwaves 原理, onda 微波原理 | `onda 原理` → onda原理, 原理是什么, 作用原理, 溶脂原理; coolwaves and 微波原理 forms empty | KEYWORD: **Onda 原理：Coolwaves 技术如何运作** (same pattern as the treatment page's "Onda 原理：…") |
| sections[2].heading "Fat, cellulite or firmness: what does Onda act on?" | onda 脂肪, onda 橘皮, onda 橘皮组织, onda 紧致, onda 部位 | `onda 脂肪`, `onda 橘皮`, `onda 紧致` return; `onda 部位` → onda 身体部位; `onda 橘皮组织` empty | KEYWORD: **脂肪、橘皮组织还是紧致度：Onda 作用在什么上？** (橘皮组织 kept over 橘皮 for consistency with body-slimming and microwave-contouring) |
| sections[3].heading "Onda for Body or Onda for Face, and is either for weight loss?" | onda 身体, 脸部 onda, onda face, onda body, onda 减重, onda 减肥 | `onda 身体` and `脸部onda` return; `onda face/body` English, global; `onda 减重` returns itself; `onda 减肥` → 有冇用 (HK), 原理, 减肥机 | KEYWORD: **Onda 身体还是 Onda 脸部？两者是减重疗程吗？** 减肥 has more demand but is never used (body-slimming, microwave-contouring precedent). |
| sections[4].heading "Why do implants and medical devices matter before Onda?" | onda 植入物, onda 植入, onda 金属, onda 心脏起搏器, onda 禁忌, onda 怀孕, onda 不适合, onda 什么人不能做 | implant/metal/pacemaker forms empty or Japanese noise (恩田金属); `onda 禁忌` → 禁忌症; `onda 怀孕` → 怀孕可以做吗 | KEYWORD (weak): **Onda 禁忌：为什么做之前要说明植入物和医疗器材？** 禁忌 is what the section is (a contraindication), so the meaning holds. |
| sections[5].heading "What does an Onda session involve, and is there downtime?" | onda 过程, onda 疗程过程, onda 做完, onda 恢复期, onda 有恢复期吗 | `onda 过程` returns itself; `onda 恢复期` and `onda 有恢复期吗` return | KEYWORD: **做 Onda 的过程是怎样的？有恢复期吗？** |
| sections[6].heading "What side effects can Onda's microwave energy cause?" | onda 副作用, onda 风险, onda 微波 副作用, 微波 副作用 | `onda 副作用` strong (溶脂副作用, 会有副作用吗, 肚子副作用); `onda 微波 副作用` → onda 超微波副作用 | KEYWORD: **Onda 的微波能量可能有什么副作用？** |
| FAQ 1 "Is Onda a weight-loss treatment?" | onda 减重, onda 减肥, onda 是减肥吗, onda 可以减肥吗, onda 能减肥吗 | `onda 减重` returns itself; question forms empty; 减肥 not used | KEYWORD (weak): **Onda 是减重疗程吗？** |
| FAQ 2 "Difference between Onda for Body and Onda for Face?" | onda 区别, onda 脸部 区别, onda 和, onda vs | `onda 和` → onda 和 onda pro **差别**, onda和钛提升; `onda 提升` → onda 钛提升 **差别**; 区别 forms empty | KEYWORD (pattern): **Onda 身体和 Onda 脸部有什么差别？** (差别, the form the AC uses, over the pilot's 区别) |
| FAQ 3 "Is Onda painful, and is there downtime?" | onda 痛吗, onda 会痛吗, onda 痛不痛, onda 恢复期 | `onda 痛吗`, `onda 会痛吗` return; `onda 恢复期` returns | KEYWORD: **Onda 痛吗？有恢复期吗？** (same as the treatment page; the answer says "因人而异", nothing says painless) |
| FAQ 4 "How many Onda sessions will I need?" | onda 几次, onda 要做几次, onda 做几次, onda 多久做一次, onda 疗程 | `onda要做几次` returns; `onda多久做一次` returns; `onda 疗程` → 间隔, 次数; `onda 几次` → 几次有效 | KEYWORD: **Onda 要做几次？多久做一次？** (the answer covers spacing, as in pico-laser FAQ 3). 几次有效 avoided: it reads as a results promise. |

**Chinese tally (14 logged strings):** 14 KEYWORD, 0 DIRECT (two of them weak: sections[4], FAQ 1).

**Not usable (skewed or a claim):** `onda 溶脂` (→ lihkg, dcard, 有冇用: HK/TW, and a fat-dissolving claim), `onda 减肥`, `超微波` / `onda 超微波` (strong, but dcard/ptt-led and a TW/HK clinic label), `onda 效果 / 效果维持多久` (efficacy framing; no EN heading for it), `onda 价格 / 费用` (TW). `onda vs 冷冻溶脂`, `onda vs hifu`, `onda vs inmode` show comparison demand; a comparison FAQ would need an EN source first.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Onda Coolwaves" | onda, onda coolwaves, onda coolwaves malaysia, coolwaves | `onda` is noise (ondash, ondansetron); `onda coolwaves` → price, side effects, review; `onda malaysia` → **onda coolwaves malaysia** | KEYWORD (brand): **Onda Coolwaves**, kept in Latin |
| **seoTitle** "Onda Coolwaves Body & Face Treatment Malaysia \| Kaiteki" | onda malaysia, onda treatment malaysia, onda body malaysia, onda face malaysia, rawatan onda, rawatan onda malaysia | `onda malaysia` → price, coolwaves malaysia, **treatment malaysia**, lifting malaysia; `onda treatment` → treatment malaysia, treatment kl; `onda face malaysia` → onda face lifting malaysia; *rawatan onda* empty | KEYWORD: **Rawatan Onda Coolwaves Badan & Muka di Malaysia \| Kaiteki** (57 chars). *Rawatan Onda* is the Malay form of "onda treatment", as on the treatment page. |
| **seoDescription** | onda selulit, selulit, rawatan selulit, onda lemak, ketegangan kulit, onda microwave | `onda selulit` returns itself; `selulit` → selulit paha, selulit perut; `rawatan selulit` returns; `onda microwave` → technology, treatment (English) | KEYWORD: Onda, Kaiteki, gelombang mikro, Coolwaves, lemak setempat, rupa selulit, konsultasi percuma (157 chars). *Rupa* selulit, never *buang* selulit. |
| sections[0].heading "What is Onda?" | apa itu onda, apa itu onda coolwaves, apa itu coolwaves | `apa itu onda` returns (behind ondansetron noise), plus *apa itu treatment onda pro*; coolwaves forms empty | KEYWORD (weak): **Apa itu Onda?** |
| sections[1].heading "How Coolwaves technology works" | onda coolwaves berfungsi, cara onda berfungsi, teknologi coolwaves, onda how it works | Malay forms empty; `onda how it works` → coolwaves how it works (English) | DIRECT: **Bagaimana teknologi Coolwaves berfungsi** |
| sections[2].heading "Fat, cellulite or firmness: what does Onda act on?" | onda selulit, onda lemak, onda lemak perut, onda perut, onda cellulite | `onda selulit` returns itself; lemak/perut forms empty; `onda cellulite` English | KEYWORD (partial): **Lemak, selulit atau ketegangan kulit: Onda bertindak pada apa?** |
| sections[3].heading "Onda for Body or Onda for Face, and is either for weight loss?" | onda body, onda face, onda for body, onda for face, onda muka, onda badan, onda turun berat badan, onda kurus, onda weight loss | `onda for body` → for body fat, onda body contouring; `onda for face` → for face lifting; `onda muka` / `onda badan` noise; weight forms empty in Malay; `onda weight loss` English | KEYWORD: **Onda for Body atau Onda for Face, dan adakah salah satunya untuk turun berat badan?** The product forms stay in English, which is how they are searched. |
| sections[4].heading "Why do implants and medical devices matter before Onda?" | onda implan, onda implant, onda hamil, onda pregnancy, onda contraindications | Malay forms empty; `onda hamil` → Hamilton/Honda noise; `onda pregnancy` is the drug ondansetron; `onda contraindications` English only | DIRECT: **Kenapa implan dan peranti perubatan penting sebelum Onda?** |
| sections[5].heading "What does an Onda session involve, and is there downtime?" | onda downtime, onda coolwaves downtime, onda sesi, onda sessions | `onda downtime` → lifting, pro, treatment downtime; `onda sesi` is Portuguese/Spanish noise | KEYWORD: **Apa yang berlaku dalam sesi Onda, dan ada downtime ke?** (*downtime* per docs/18 §6) |
| sections[6].heading "What side effects can Onda's microwave energy cause?" | onda kesan sampingan, kesan sampingan onda, onda coolwaves kesan sampingan, onda side effects | Malay forms empty; `onda side effects` strong but English | DIRECT: **Apakah kesan sampingan tenaga gelombang mikro Onda?** (the literal translation is also the normal Malay term) |
| FAQ 1 "Is Onda a weight-loss treatment?" | onda kurus, onda berat badan, onda turun berat badan, onda weight loss | Malay forms empty; `onda weight loss` English | DIRECT: **Onda ialah rawatan turun berat badan ke?** |
| FAQ 2 "Difference between Onda for Body and Onda for Face?" | onda body vs face, onda face vs body, onda vs | body/face comparison forms empty; `onda vs` → indiba, ultherapy, hifu, thermage | DIRECT: **Apa beza Onda for Body dan Onda for Face?** |
| FAQ 3 "Is Onda painful, and is there downtime?" | onda sakit, onda sakit tak, onda painful, onda pain, onda downtime | *sakit* forms empty; `onda painful`, `onda pain level` English; `onda downtime` returns | KEYWORD (partial): **Onda sakit tak, dan ada downtime ke?** (same as the treatment page) |
| FAQ 4 "How many Onda sessions will I need?" | onda berapa sesi, onda berapa kali, onda how many sessions | Malay forms empty; `onda how many sessions` strong (coolwaves how many sessions, for double chin) but English | DIRECT: **Perlu buat Onda berapa sesi?** (same as the treatment page) |

**Malay tally (14 logged strings):** 8 KEYWORD, 6 DIRECT.

**Indonesian pollution seen and avoided:** `onda harga` (taps and showers, *harga onda pro treatment*), `gelombang mikro adalah / dimanfaatkan untuk` (physics, Indonesian), `kulit kendur karena / setelah / wajah`, `selulitis adalah`. Bare *harga onda* is never used; the cost line says *Harga dibincangkan semasa konsultasi*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| microwave-based (technology) | 以微波为基础的（技术） | berasaskan gelombang mikro | microwave-contouring |
| Microwave contouring (facts value) | 微波塑形 | Kontur gelombang mikro | terms.ts |
| the manufacturer calls Coolwaves® | 制造商称为 Coolwaves® | dipanggil Coolwaves® oleh pengeluarnya | microwave-contouring |
| handpiece | 手柄 | alat pegang tangan | microwave-contouring |
| built-in cooling | 内置的冷却系统 | sistem penyejukan terbina dalam | microwave-contouring |
| collagen-remodelling response | 胶原蛋白重塑反应 | tindak balas pembentukan semula kolagen | microwave-contouring |
| fibrous bands | 纤维带 | jalur berserat | body-slimming |
| (appearance of) cellulite | 橘皮组织（外观） | (rupa) selulit | body-slimming |
| skin firmness | 皮肤紧致度 | ketegangan kulit | body-slimming |
| localised fat | 局部脂肪 | lemak setempat | body-slimming |
| flanks (love handles) | 腰侧（游泳圈） | tepi pinggang (love handles) | body-slimming |
| bra-line and back | 内衣线和背部 | garisan bra dan belakang | body-slimming |
| jowls | 下颚两侧（嘴边肉） | pipi yang jatuh (jowl) | microwave-contouring |
| nasolabial folds | 法令纹 | garis senyuman (lipatan nasolabial) | microwave-contouring |
| under the chin | 下巴底下 | bawah dagu | microwave-contouring |
| not a weight-loss treatment | 不是减重疗程 | bukan rawatan menurunkan berat badan | body-slimming |
| radiofrequency (devices) | 射频类（仪器） | radiofrekuensi | terms.ts |
| downtime | 恢复期 | downtime | docs/18 §6 |
| non-invasive | 非侵入性 | tanpa pembedahan | microwave-contouring |

## For the bilingual doctor-reviewer

1. **Onda vs Onda Pro.** A large share of the demand in both languages is for **Onda Pro** (`onda pro 是什么`, `onda pro price malaysia`), DEKA's newer model. This page says Onda / Coolwaves only. If Kaiteki's unit is in fact an Onda Pro, the EN record should say so first; nothing here claims it.
2. **Product forms.** zh writes **Onda 身体（Onda for Body）/ Onda 脸部（Onda for Face）** at first mention and Onda 身体 / Onda 脸部 after, because `onda 身体` and `脸部onda` are how Chinese readers search. ms keeps *Onda for Body / Onda for Face* throughout, because Malaysian demand is English-language. Confirm these are the names the clinic uses at the counter.
3. **减肥 / 溶脂 / 超微波 kept out.** All three have Chinese demand. 减肥 and 溶脂 make a weight-loss or fat-dissolving claim the EN doesn't; 超微波 is a TW/HK clinic label. If the doctor wants 超微波 as a colloquial gloss, it could go in brackets once in the body.
4. **"Cooling and radiofrequency devices"** is 冷冻类和射频类仪器 / *peranti penyejukan dan radiofrekuensi*. The EN means fat-freezing (cryolipolysis) devices; neither locale names a competitor brand.
5. **"Skin firmness and tone"** is 皮肤紧致度和弹性 / *ketegangan dan tona kulit*. 弹性 (elasticity) is the natural Chinese reading of "tone" here; confirm it isn't read as a stronger claim.
6. **"May also prompt a gradual collagen-remodelling response"** keeps the hedge (也可能 / *mungkin juga*), as on the treatment page.
7. **"So the doctor can advise safely"** is 让医生能安全地给你建议 / *supaya doktor boleh memberi nasihat dengan selamat*. It describes the advice, not the treatment; neither locale says the treatment is safe.
8. **zh FAQ 4 adds 多久做一次**, covered by the existing answer ("每次相隔几个星期"), following the pico-laser FAQ 3 precedent.
9. **seoTitle (zh) drops "Coolwaves"** to stay within 30 characters; the description and H1 keep it.
