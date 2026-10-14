# 20. Treatment keyword log: Fat Freezing (`/treatments/fat-freezing`)

**Date:** 2026-10-14 · Treatment-page localisation round (method and format from the pilot, `pico-laser.md`).
**Outputs:** `content/i18n/treatments/zh/fat-freezing.json`, `content/i18n/treatments/ms/fat-freezing.json` (same shape as the EN record). EN snapshot: `content/i18n/treatments/_en/fat-freezing.json`.
**Inputs:** EN record for `fat-freezing`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the translated `body-slimming` and `face-contouring` concern pages (terminology carried over, see below).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`. Same reading as the pilot: HAS VOLUME = the phrase or a natural Malaysian form of it comes back without a Taiwan/HK/Indonesia skew (*dcard / ptt / 雷射*; *bisa / perawatan / adalah*); NO VOLUME = nothing relevant.
- **Decision:** KEYWORD = phrased around the real query form, English meaning kept. DIRECT = faithful translation.
- **Probes:** fat-freezing and microwave-contouring were probed together: 153 zh and 131 ms in total. Raw dumps: `C:/tmp/ffmw-ac-zh.json`, `C:/tmp/ffmw-ac-zh2.json`, `C:/tmp/ffmw-ac-zh3.json`, `C:/tmp/ffmw-ac-ms.json`, `C:/tmp/ffmw-ac-ms2.json` (not in the repo).
- **Scope:** only search-relevant strings are logged (seoTitle, seoDescription, name, section headings, variantModule heading, route titles, ctaMid heading, FAQ questions). This record has no jumpNav. All body copy is a direct, faithful translation.
- **This page's special constraint:** body contouring is not weight loss. 减肥 has demand next to device names, but it is never used, not even in a question; the zh copy says 减重 (as on `body-slimming`), the ms copy says *turun / menurunkan berat badan*.
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `src`, `reviewedBy`, `lastReviewed`, top-level `category`, the `relatedReasons` keys, device `title`s (Cooltech, CoolSculpting) and the manufacturer in the eyebrows (Cocoon Medical).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Fat Freezing" | 冷冻溶脂, 冷冻减脂, 酷塑, coolsculpting | `冷冻溶脂` → 后遗症, 价格, 有效吗, 有用吗, 效果; `冷冻减脂` → 费用 (dcard), 心得, onda 比较; `酷塑` = CoolSculpting brand, dcard-led | KEYWORD: **冷冻溶脂** (terms.ts, kept) |
| **seoTitle** "Fat Freezing Malaysia \| Cryolipolysis Treatment \| Kaiteki" | 冷冻溶脂马来西亚, 冷冻溶脂 马来西亚, 冷冻溶脂 kl, 冷冻溶脂 新山, 冷冻溶脂 吉隆坡, 冷冻溶脂 疗程 | every geo form is empty; `冷冻溶脂` strong | KEYWORD: **马来西亚冷冻溶脂疗程 \| Kaiteki** (20 chars). 马来西亚 kept for the EN geo intent (pilot precedent). "Cryolipolysis" moves to the description: with it the title runs past 30. |
| **seoDescription** | (same family) + 局部脂肪 | `局部脂肪` returns itself | KEYWORD: 冷冻溶脂, cryolipolysis, 局部脂肪, 不是减重疗程, 免费咨询 (83 chars) |
| sections[0].heading "What is fat freezing?" | 冷冻溶脂是什么, 什么是冷冻溶脂 | both empty | DIRECT: **冷冻溶脂是什么？** |
| sections[1].heading "Why does cooling affect fat and not the skin around it?" | 冷冻溶脂原理, 冷冻溶脂 原理, 冷冻溶脂原理是什么, 冷冻 脂肪细胞, 冷冻溶脂 冻伤 | `冷冻溶脂原理` returns (both spacings); `冷冻 脂肪细胞` and `冷冻溶脂 冻伤` return themselves | KEYWORD: **冷冻溶脂原理：为什么低温影响的是脂肪，而不是周围的皮肤？** |
| variantModule.heading "Cooltech or CoolSculpting: which device, and why" | cooltech, cooltech 冷冻溶脂, coolsculpting cooltech, coolsculpting 和, 冷冻溶脂 机器, 冷冻溶脂 区别 | `冷冻溶脂 机器` → 冷冻溶脂机器; `cooltech` → cooltech冷冻溶脂 (rest is aircond companies); `coolsculpting cooltech` → cooltech vs coolsculpting (English, global); 区别 empty | KEYWORD: **冷冻溶脂机器：Cooltech 还是 CoolSculpting，为什么这样选** |
| routes[0].title "A pinchable pocket that diet has not shifted" | 冷冻溶脂 小肚子, 冷冻溶脂 肚子, 冷冻溶脂 局部脂肪, 局部脂肪 | `冷冻溶脂 肚子` returns itself (EN names no area); others empty | DIRECT: **饮食也减不掉、捏得起来的局部脂肪** (the body-slimming zh wording for the same EN line) |
| routes[1].title "A defined pocket of fat under the chin" | 冷冻溶脂 双下巴, 双下巴 冷冻溶脂, 冷冻溶脂 下巴 | `冷冻溶脂 双下巴` → 冷冻溶脂双下巴ptt; `双下巴 冷冻溶脂` returns; `冷冻溶脂 下巴` empty | KEYWORD: **下巴底下明确的一团脂肪（双下巴）** |
| ctaMid.heading | n/a (conversion copy) | n/a | DIRECT: **不确定你的部位能不能被治疗头吸住？** |
| FAQ 1 "Is fat freezing a weight-loss treatment?" | 冷冻溶脂减肥, 冷冻溶脂可以减肥吗, 冷冻溶脂 是不是减肥 | all empty | DIRECT: **冷冻溶脂是减重疗程吗？** (减重, never 减肥) |
| FAQ 2 "Does fat freezing hurt?" | 冷冻溶脂痛吗, 冷冻溶脂会痛吗, 冷冻溶脂 会 | `冷冻溶脂会痛吗` returns and is the only suggestion for `冷冻溶脂 会`; `痛吗` empty | KEYWORD: **冷冻溶脂会痛吗？** (no 无痛 anywhere) |
| FAQ 3 "How many sessions will I need?" | 冷冻溶脂要做几次, 冷冻溶脂几次, 冷冻溶脂 多久做一次, 冷冻溶脂 一次 | `冷冻溶脂要做几次` and `冷冻溶脂 多久做一次` return; `冷冻溶脂 一次` → 几耐做一次 (Cantonese) | KEYWORD: **冷冻溶脂要做几次？** (多久做一次 not added: the answer gives a review point, not an interval) |
| FAQ 4 "When might I notice a change?" | 冷冻溶脂多久见效, 冷冻溶脂多久有效果, 冷冻溶脂后多久, 冷冻溶脂 多久看到效果, 冷冻溶脂 效果 | all timing forms empty; `冷冻溶脂 效果` and `冷冻溶脂有效吗` return but ask about efficacy, not timing | DIRECT: **做完冷冻溶脂，什么时候可能看到变化？** (见效/效果 kept out: they read as a results promise) |

**Chinese tally (13 logged strings):** 8 KEYWORD, 5 DIRECT.

**Not usable:** every "+马来西亚 / kl / 新山 / 吉隆坡" form is empty. `冷冻溶脂后遗症` and `冷冻溶脂后注意事项` are strong but this EN record has no matching heading (the risks and after-session blocks have none); worth a heading if the EN page ever adds one. `反常性脂肪增生` returns (with PAH), so the body uses that exact term. `冷冻减脂` is mostly Taiwan-led (dcard, 冷凍).

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Fat Freezing" | fat freezing, kriolipolisis, cryolipolysis, cryolipolysis malaysia, bekukan lemak, membekukan lemak | `fat freezing` → treatment, **johor**, how does it work, near me; `kriolipolisis` → criolipolisis (ES); `cryolipolysis malaysia` → price; `bekukan lemak` / `membekukan lemak` → treatment … (ID-leaning) | KEYWORD: **Fat Freezing (Kriolipolisis)** (terms.ts, kept). See note 1: *cryolipolysis* has the Malaysian demand, *kriolipolisis* has none. |
| **seoTitle** | fat freezing malaysia, fat freezing price malaysia, harga fat freezing di malaysia, cryolipolysis malaysia | `fat freezing malaysia` → price, treatment malaysia price; `cryolipolysis malaysia` → price; `harga … di malaysia` empty | KEYWORD: **Fat Freezing di Malaysia \| Rawatan Cryolipolysis \| Kaiteki** (58 chars). English spelling in the title because that's the form with demand. |
| **seoDescription** | (same family) | as above | KEYWORD: fat freezing, kriolipolisis, lemak setempat, doktor, konsultasi percuma (159 chars) |
| sections[0].heading "What is fat freezing?" | apa itu fat freezing, fat freezing adalah | `apa itu fat freezing` returns itself; `fat freezing adalah` is ID | KEYWORD: **Apa itu fat freezing?** |
| sections[1].heading "Why does cooling affect fat…?" | bagaimana fat freezing berfungsi, fat freezing cara, penyejukan lemak, kriolipolisis adalah | all empty; `fat freezing how does it work` is English only | DIRECT: **Kenapa penyejukan memberi kesan pada lemak dan bukan pada kulit di sekelilingnya?** |
| variantModule.heading | cooltech, cooltech malaysia, coolsculpting malaysia, coolsculpting vs cooltech, cooltech vs coolsculpting | `cooltech vs coolsculpting` → reviews, define vs coolsculpting; `coolsculpting malaysia` → price, cost malaysia; `cooltech malaysia` → cooltech define malaysia | KEYWORD (pattern): **Cooltech atau CoolSculpting: mesin mana, dan kenapa** |
| routes[0].title "A pinchable pocket that diet has not shifted" | lemak degil, lemak perut degil, buang lemak setempat, rawatan buang lemak | `lemak degil` → di perut, cara buang lemak degil (MY); `rawatan buang lemak` returns but adds a removal claim | KEYWORD: **Lemak degil yang boleh dicubit dan tidak berubah dengan diet** (*degil* = the EN "stubborn" used in sections[0]; rest is the body-slimming ms wording) |
| routes[1].title "A defined pocket of fat under the chin" | lemak dagu, lemak bawah dagu, dagu berlapis, buang lemak dagu, rawatan dagu berlapis, fat freezing dagu | `lemak bawah dagu` → punca, hilangkan; `dagu berlapis` → punca, rawatan dagu berlapis (MY); `fat freezing dagu` empty | KEYWORD: **Lemak setempat di bawah dagu (dagu berlapis)** (same gloss as face-contouring ms) |
| ctaMid.heading | n/a (conversion copy) | n/a | DIRECT: **Tak pasti sama ada kawasan anda boleh ditarik dan dipegang oleh aplikator?** |
| FAQ 1 "Is fat freezing a weight-loss treatment?" | fat freezing kurus, fat freezing turun berat badan, fat freezing berat badan | all empty; `fat freezing weight loss` is English only | DIRECT: **Fat freezing ialah rawatan turun berat badan ke?** |
| FAQ 2 "Does fat freezing hurt?" | fat freezing sakit, fat freezing sakit tak, fat freezing sakit ke, coolsculpting sakit | all empty; `fat freezing hurt` is English only | DIRECT: **Fat freezing sakit tak?** (the *sakit tak* form follows the pico pilot) |
| FAQ 3 "How many sessions?" | fat freezing berapa kali, fat freezing berapa sesi, coolsculpting berapa kali | all empty; `fat freezing how many sessions` is English only | DIRECT: **Perlu buat fat freezing berapa sesi?** |
| FAQ 4 "When might I notice a change?" | fat freezing hasil, fat freezing berapa lama, fat freezing berapa lama nampak hasil | all empty; `fat freezing results` is English only | DIRECT: **Bila saya mungkin mula nampak perubahan?** |

**Malay tally (13 logged strings):** 7 KEYWORD, 6 DIRECT.

**Indonesian pollution seen and avoided:** fat freezing adalah, bekukan lemak / membekukan lemak (*treatment membekukan lemak*), kulit kendur *karena / setelah*. Malay question forms about fat freezing all came back empty: people in Malaysia ask about it in English (*how many sessions, results, side effects, double chin*).

## Terms carried over from the concern pages

| EN | zh | ms | Source |
|---|---|---|---|
| applicator | 治疗头 | aplikator | body-slimming |
| pinch test | 捏脂测试 | ujian cubit | body-slimming |
| paradoxical adipose hyperplasia | 反常性脂肪增生 | hiperplasia adipos paradoks | body-slimming |
| cryoglobulinaemia / cold urticaria | 冷球蛋白血症 / 寒冷性荨麻疹 | krioglobulinemia / urtikaria sejuk | body-slimming |
| hernia | 疝气 | hernia | body-slimming |
| not a weight-loss treatment | 不是减重疗程 | bukan rawatan menurunkan berat badan | body-slimming |
| compression garment | 压力衣 | pakaian mampatan | new |
| flank(s) | 腰侧 | tepi pinggang | body-slimming |
| under the chin / double chin | 下巴底下 / 双下巴 | bawah dagu / dagu berlapis | face-contouring |
| localised / stubborn fat | 局部（顽固）脂肪 | lemak (degil) setempat | body-slimming |

## For the bilingual doctor-reviewer

1. **Name vs demand (ms).** terms.ts has *Fat Freezing (Kriolipolisis)*. `kriolipolisis` has no Malaysian autocomplete (it suggests the Spanish *criolipolisis*), while `cryolipolysis malaysia` → price does. The name is kept (it's the agreed site-wide term and the Malay spelling is correct), but the ms seoTitle uses *Cryolipolysis*. If the lead wants one spelling everywhere, swap the gloss to *(Cryolipolysis)*.
2. **"Paroxysmal cold haemoglobinuria"** is 阵发性冷性血红蛋白尿症 / *hemoglobinuria sejuk paroksismal*. Please confirm both clinical names.
3. **"No downtime"** in `durationDowntime` is 没有恢复期 / *Tiada downtime*, as in the EN, while the afterSession intro says "usually limited". The EN carries both; the translations keep both. Flag for the EN owner if that mismatch matters.
4. **"Firm pulling sensation from the suction"** is 吸力带来的紧实拉扯感 / *tarikan yang ketat daripada sedutan*. Confirm neither reads stronger or weaker than the EN.
5. **"Serious effects are uncommon when … performed by a trained doctor"** is translated literally (严重的副作用并不常见 / *Kesan serius jarang berlaku*). It's a conditional, not a safety claim.
6. **No 减肥 anywhere.** 减肥 has demand only on the Onda side (`onda 减肥`), never with 冷冻溶脂 in MY autocomplete; zh uses 减重, as on body-slimming.
7. **Cost line (ms):** "Cost is quoted per applicator cycle" is *Sebut harga diberi mengikut kitaran aplikator*. Confirm the phrasing.
