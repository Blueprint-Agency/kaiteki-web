# 21. Technology keyword log: Oligio (`/technology/oligio`)

**Date:** 2026-10-14 · Device & injectable localisation round (format: `onda-coolwaves.md`).
**Outputs:** `content/i18n/technology/zh/oligio.json`, `content/i18n/technology/ms/oligio.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/oligio.json`.
**Inputs:** EN record for `oligio`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `radiofrequency` treatment page (`docs/20-treatment-keywords/radiofrequency.md`) and the `face-lifting` / `aging` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`, read as in the pilot (HAS VOLUME = the phrase or a natural Malaysian form returns without a TW/HK/ID skew).
- **Probes (shared batch with sylfirm-x, morpheus8, potenza):** 28 + 9 zh and 24 + 3 ms for this device. Raw dumps: `C:/tmp/rfdev-ac-zh.json`, `C:/tmp/rfdev-ac-zh2.json`, `C:/tmp/rfdev-ac-ms.json`, `C:/tmp/rfdev-ac-ms2.json` (not in the repo).
- **Scope:** name, seoTitle, seoDescription, the seven section headings, the four FAQ questions. All body copy is a direct, faithful translation.
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; Oligio, Wontech, XERF, Thermage, the journal name *Dermatology and Therapy*, FDA 510(k).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Oligio" | oligio, oligio 中文 | `oligio` → **oligio 是什么**, oligio x 是什么, oligio x price malaysia, oligio 韩国; `oligio 中文` → oligio treatment 中文 | KEYWORD (brand): **Oligio**, kept in Latin |
| **seoTitle** "Oligio Monopolar RF Skin Tightening Malaysia \| Kaiteki" | oligio 马来西亚, oligio malaysia, oligio 单极, 单极射频, oligio 紧致, oligio 提拉 | `单极射频` → 原理, 机, 英文, 单极射频 双极射频分别, thermage 单极射频; `oligio malaysia` → price, treatment malaysia (English); oligio + 马来西亚/单极/紧致/提拉 empty | KEYWORD: **马来西亚 Oligio 单极射频紧致 \| Kaiteki** (28 chars). 单极射频 pairs 射频 so it can't read as 射频消融. |
| **seoDescription** | (title family) + oligio 法令纹 | `oligio 法令纹` returns | KEYWORD: Oligio, 韩国, 6.78 MHz, 单极射频, 不用针, 脸部松弛 (77 chars). EN says "Book a consultation", so no 免费. |
| sections[0].heading "What is Oligio?" | oligio 是什么 | `oligio` → **oligio 是什么** (1st suggestion) | KEYWORD: **Oligio 是什么？** |
| sections[1].heading "How Oligio heats the skin from the inside" | oligio 原理 | `oligio 原理` → oligio 原理, oligio x 原理 | KEYWORD: **Oligio 原理：如何从内部加热皮肤** (pilot pattern) |
| sections[2].heading "What the published Oligio studies looked at" | oligio 研究, oligio 效果 | `oligio 研究` empty; `oligio 效果` strong but dcard-led and an efficacy framing the section avoids | DIRECT: **已发表的 Oligio 研究看的是什么** |
| sections[3].heading "Which concerns is Oligio considered for?" | oligio 适合, oligio 下颚线, oligio 双下巴, oligio 法令纹 | only `oligio 法令纹` returns (a list item, not the heading) | DIRECT: **Oligio 一般考虑用于哪些问题？** |
| sections[4].heading "When Oligio is not the right tool" | oligio 适合, oligio 不适合 | empty | DIRECT: **什么情况下 Oligio 不是合适的选择** |
| sections[5].heading "What an Oligio session feels like, and the recovery" | oligio 痛吗, oligio 痛, oligio 恢复期 | `oligio 痛吗` returns; `oligio 痛` → 痛唔痛 (HK), 痛 嗎 (TW); `oligio 恢复期` empty | KEYWORD: **Oligio 痛吗？疗程感觉和恢复期** (the body says "warmth rather than pain"; nothing says painless) |
| sections[6].heading "Can Oligio burn or mark the skin?" | oligio 副作用, oligio 烫伤 | `oligio 副作用` returns; `oligio 烫伤` empty | KEYWORD: **Oligio 有副作用吗？会烫伤或在皮肤上留下痕迹吗？** |
| FAQ 1 "Is Oligio the same as Thermage?" | oligio 热玛吉, oligio thermage, oligio 和 | `oligio 热玛吉` returns; `oligio thermage` → **thermage 分别**; `oligio 和` → oligio 和 oligio x 分别 | KEYWORD: **Oligio 和热玛吉（Thermage）一样吗？** |
| FAQ 2 "How is Oligio different from XERF at Kaiteki?" | oligio xerf, oligio vs | `oligio xerf` and `oligio vs xerf` return (English, global, Thai) | KEYWORD (weak, pattern): **在 Kaiteki，Oligio 和 XERF 有什么分别？** (分别, the form the AC uses for Oligio comparisons) |
| FAQ 3 "Does Oligio help a double chin?" | oligio 双下巴, oligio 双下巴吗, 双下巴 射频 | empty | DIRECT: **Oligio 对双下巴有帮助吗？** |
| FAQ 4 "How long do Oligio results last?" | oligio 维持多久, oligio 多久, oligio 维持 | `oligio 维持 多久` returns; `oligio 多久` → 多久做一次, 多久有效果, 維持多久 | KEYWORD: **Oligio 效果维持多久？** (the EN question itself; the answer keeps "varies" and the six-month follow-up) |

**Chinese tally (14 logged strings):** 10 KEYWORD, 4 DIRECT (FAQ 2 weak).

**Not usable:** `oligio 电波` / `电波 效果` (dcard, ptt: TW/HK slang for monopolar RF, same call as radiofrequency.md), `超玩美电波` (an HK/TW clinic label for Oligio X), `oligio 效果 dcard`.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Oligio" | oligio, oligio malaysia | `oligio` → oligio x treatment, machine, treatment; `oligio malaysia` → price, treatment price malaysia | KEYWORD (brand): **Oligio** |
| **seoTitle** | oligio malaysia, oligio rf, oligio monopolar, rawatan oligio, oligio di malaysia | `oligio rf` → rf treatment, rf lifting, **rf skin tightening**; `oligio monopolar` → **oligio monopolar rf**; `oligio malaysia` returns; *rawatan oligio*, *oligio di malaysia* empty | KEYWORD: **Oligio RF Monopolar untuk Tegang Kulit di Malaysia \| Kaiteki** (60 chars). *Tegang kulit* per docs/18 §5.2. |
| **seoDescription** | (title family) | as above | KEYWORD: Oligio, RF monopolar, 6.78 MHz, Korea, Kaiteki, kekenduran muka, tanpa jarum (160 chars). "Surface cooling" dropped to fit; it stays in the summary and body. |
| sections[0].heading "What is Oligio?" | apa itu oligio | → apa itu oligo, **apa itu oligio treatment** | KEYWORD (weak): **Apa itu Oligio?** |
| sections[1].heading | oligio how it works | English only | DIRECT: **Bagaimana Oligio memanaskan kulit dari dalam** |
| sections[2].heading | oligio study | empty | DIRECT: **Apa yang dikaji dalam kajian Oligio yang diterbitkan** |
| sections[3].heading | oligio kulit kendur, oligio jowl | Malay empty; `oligio jowl` → oligio x jowls (English) | DIRECT: **Untuk masalah apa Oligio dipertimbangkan?** |
| sections[4].heading | (no Malay form) | n/a | DIRECT: **Bila Oligio bukan pilihan yang sesuai** |
| sections[5].heading | oligio sakit, oligio downtime | *sakit* empty; `oligio downtime` English | DIRECT: **Apa rasanya sesi Oligio, dan tempoh pemulihannya** |
| sections[6].heading | oligio burn, oligio kesan sampingan | `oligio burn` English (and "burn fat" noise); Malay empty | DIRECT: **Boleh ke Oligio melecurkan atau meninggalkan kesan pada kulit?** |
| FAQ 1 "Is Oligio the same as Thermage?" | oligio vs thermage, oligio thermage sama | English strong (reddit, pantip); Malay empty | DIRECT: **Adakah Oligio sama dengan Thermage?** |
| FAQ 2 "…different from XERF…" | oligio xerf | English and Thai only | DIRECT: **Apa beza Oligio dengan XERF di Kaiteki?** |
| FAQ 3 "…double chin?" | oligio double chin, oligio dagu berlapis | English returns itself; Malay empty | DIRECT: **Boleh ke Oligio membantu dagu berlapis?** |
| FAQ 4 "How long do results last?" | oligio berapa lama, oligio how long | Malay empty; `oligio how long does it last` English | DIRECT: **Berapa lama hasil Oligio bertahan?** |

**Malay tally (14 logged strings):** 4 KEYWORD, 10 DIRECT. As with Onda, Malaysian Malay demand for Oligio is English-language.

**Indonesian pollution seen and avoided:** `oligio treatment harga`; `rf monopolar adalah`. Bare *harga oligio* is never used.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| radiofrequency (RF) treatment | RF 射频疗程 | rawatan radiofrekuensi (RF) | radiofrequency |
| monopolar | 单极 | monopolar | radiofrequency |
| contact cooling | 接触式冷却 | penyejukan sentuhan | radiofrequency |
| tip (cooled, contact-monitoring) | 冷却探头 / 探头 | hujung | radiofrequency |
| shot by shot | 逐发 | satu tembakan demi satu tembakan | radiofrequency |
| mild to moderate laxity of the lower face | 下半脸的轻度至中度松弛 | kekenduran ringan hingga sederhana di bahagian bawah muka | radiofrequency |
| jowling | 嘴边肉 | pipi yang jatuh (jowl) | microwave-contouring |
| nasolabial | 法令纹 | nasolabial | face-lifting |
| keloid | 蟹足肿 | parut keloid | radiofrequency |
| retinoids, peels | A酸类产品、换肤 | retinoid, peel | radiofrequency |

## For the bilingual doctor-reviewer

1. **Oligio vs Oligio X.** Much of the demand in both languages is for **Oligio X** (`oligio x 是什么`, `oligio x price malaysia`, `oligio x vs oligio`). The page says Oligio only. If Kaiteki's unit is an Oligio X, the EN record should say so first.
2. **"Blinded dermatologists"** is 以盲法评估的皮肤科医生 / *pakar dermatologi yang menilai secara buta (blinded)*. It describes the study's assessors, not Kaiteki (L-03r warning, factual).
3. **"Remained through 24 weeks"** is 持续到第 24 个星期 / *masih dilihat sehingga minggu ke-24*. *Kekal* was avoided so it can't read as "permanent".
4. **FAQ 1 names 热玛吉 (Thermage)**, because the EN does and `oligio 热玛吉` has demand. The answer says they are different devices.
5. **FDA 510(k) "clearance"** is 许可 / *pelepasan*, with the EN's "not an approval of any cosmetic outcome" kept.
6. **zh seoTitle uses 单极射频紧致**, not 电波拉皮 or 电波 (TW/HK Thermage slang).
