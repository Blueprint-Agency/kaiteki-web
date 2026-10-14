# 20. Treatment keyword log: Ultherapy (`/treatments/ultherapy`)

**Date:** 2026-10-14 · Follows the pilot (`pico-laser.md`): same method, decision rules and table format.
**Outputs:** `content/i18n/treatments/zh/ultherapy.json`, `content/i18n/treatments/ms/ultherapy.json` (same shape as the EN record). EN snapshot: `content/i18n/treatments/_en/ultherapy.json`.
**Inputs:** EN record for `ultherapy`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, the `face-lifting` and `aging` concern pages, and the sister log `hifu.md` (the two pages share a comparison and must use the same terms).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `https://suggestqueries.google.com/complete/search?client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`. Read as in `pico-laser.md`. Signs of skew here: 台湾 / 香港 / 韩国 / dcard for Chinese; *beda, apakah, perawatan, harga … di Jakarta / ZAP / Natasha* for Malay.
- **Decision:** KEYWORD = phrased around the real query form, English meaning kept. DIRECT = faithful translation.
- **Probes:** 57 zh and 53 ms, plus the HIFU probes that cover the shared strings (comparison, downtime). Raw dumps: `C:/tmp/ulthera-ac-zh.json`, `C:/tmp/ulthera-ac-ms.json` (and `C:/tmp/hifu-ac-*.json`), not in the repo.
- **Scope:** only search-relevant strings are logged (name, seoTitle, seoDescription, section headings, variantModule heading, route titles, ctaMid heading, FAQ questions). This record has no `jumpNav`. All body copy is a direct, faithful translation.
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `src`, `reviewedBy`, `lastReviewed`, top-level `category`, `relatedReasons` keys, `device` ("Ultherapy"), device `title`s (Ultherapy, HIFU), the brand half of each `eyebrow` (Merz Aesthetics; Ultracel Q, Lifthera) and "DeepSEE". The descriptive half of the eyebrow is translated (影像引导 / *Dipandu imej*; 按探头设定深度 / *Kedalaman ditetapkan oleh kartrij*).
- **Comparison table names** use the agreed `terms.ts` names. Not counted.
- **FAQ 3 and FAQ 4 name the treatment** in both locales ("Ultherapy 多久才有效果？", "Ultherapy ada downtime ke?"). The EN questions sit on the Ultherapy page, so adding the name keeps the meaning and matches the query form.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Ultherapy" | ultherapy, ultherapy 中文, 美版超声刀, 超声刀 ultherapy | `ultherapy` → prime, prime是什么, 中文, 功效, 是什么, 效果; `ultherapy 中文` → 中文 台湾 (TW-skewed); `美版超声刀` is mainland/TW (dcard, 台湾叫什么) | KEYWORD: **Ultherapy** (brand stays Latin; `_treatment-names.md`). terms.ts has no zh entry, so the name falls back to the same English. 美版超声刀 not used. |
| **seoTitle** "Ultherapy Malaysia \| Non-Surgical Face Lifting \| Kaiteki" | ultherapy 马来西亚, ultherapy 提拉, ultherapy 提拉紧致, 非手术提拉 | `ultherapy 提拉` returns; 马来西亚 / 提拉紧致 / 非手术 forms empty | KEYWORD: **马来西亚 Ultherapy 非手术提拉 \| Kaiteki** (30 chars, the limit) |
| **seoDescription** | ultherapy 疗程, 聚焦超声波, ultherapy 适合 | `ultherapy 疗程` and `ultherapy 适合` return | KEYWORD: Ultherapy 疗程, 聚焦超声波, 非手术, 提拉, 紧致, 免费咨询, 适合 (85 chars). No doctor added: the EN description doesn't mention one. |
| sections[0].heading "What is Ultherapy?" | ultherapy 是什么, ultherapy是什么 | `ultherapy 是什么` is a top-7 `ultherapy` suggestion | KEYWORD: **Ultherapy 是什么？** |
| sections[1].heading "How does Ultherapy see the layer it treats?" | ultherapy 原理, ultherapy 影像, ultherapy 超声波影像, ultherapy 实时影像, 超声波影像, ultherapy smas | `ultherapy 原理` returns; `超声波影像` returns; ultherapy + 影像 forms empty | KEYWORD: **Ultherapy 原理：如何用超声波影像看到要处理的那一层？** |
| variantModule.heading "Ultherapy or HIFU: what the imaging changes" | ultherapy 和 hifu, ultherapy vs hifu, ultherapy 区别, hifu 和 | `ultherapy 和 hifu` → **hifu 和 ultherapy 的 区别**; `ultherapy vs hifu` → ultherapy vs hifu 分别 | KEYWORD: **Ultherapy 和 HIFU 的区别：影像带来什么不同** |
| routes[0].title "Lifting where laxity leads the picture" | ultherapy 提拉, ultherapy 松弛, ultherapy 下垂 | `ultherapy 提拉` returns itself; 松弛 / 下垂 forms empty | DIRECT: **以松弛为主要问题时的提拉** |
| routes[1].title "Lifting that softens the fold above it" | ultherapy 眉, ultherapy 提眉, ultherapy 颈纹 | `ultherapy 颈纹` returns, but the route is about the brow; 眉 forms empty | DIRECT: **提拉，让上方的皱褶变得柔和** |
| ctaMid.heading "Not sure whether Ultherapy or HIFU fits your face?" | n/a (conversion copy) | n/a | DIRECT: **不确定 Ultherapy 还是 HIFU 适合你的脸？** |
| FAQ 1 "How is Ultherapy different from HIFU?" | ultherapy 和 hifu 区别, ultherapy hifu 区别, hifu ultherapy 区别 | all autocorrect to **hifu 和 ultherapy 的 区别** | KEYWORD: **Ultherapy 和 HIFU 的区别是什么？** (same form as HIFU FAQ 2, order flipped to lead with this page's treatment) |
| FAQ 2 "Is Ultherapy a facelift?" | ultherapy 拉皮, ultherapy 是拉皮吗, ultherapy 手术 | all empty | DIRECT: **Ultherapy 是拉皮手术吗？** |
| FAQ 3 "When will I see results?" | ultherapy 多久见效, ultherapy 见效, ultherapy 效果, ultherapy 多久 | `ultherapy 见效` → 几时 见效, 多久 见效; `ultherapy 效果` → **ultherapy 多久 有 效果**; `ultherapy 多久` → 多久 有 效果, 维持 多久 | KEYWORD: **Ultherapy 多久才有效果？** (the answer is "weeks to months, varies, not on the day", so the question carries no promise) |
| FAQ 4 "Is there any downtime?" | ultherapy 恢复期, ultherapy 恢复 | `ultherapy 恢复期` returns; `ultherapy 恢复` → 恢复 期 | KEYWORD: **Ultherapy 有恢复期吗？** |

**Chinese tally (13 logged strings):** 9 KEYWORD, 4 DIRECT.

**Not usable (no MY demand or skewed):** `ultherapy 价钱` tails are 香港 / 台湾 / 韩国; `美版超声刀` (mainland/TW name); `ultherapy 最 佳 效果` (superlative, never used); `ultherapy 即时 效果` (would contradict the EN). `ultherapy prime` is strong, but the EN record doesn't say which generation Kaiteki uses, so Prime isn't added.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Ultherapy" | ultherapy, ultherapy malaysia, rawatan ultherapy | `ultherapy malaysia` → price in malaysia, clinic, cost; `rawatan ultherapy` returns itself | KEYWORD: **Ultherapy** (docs/18) |
| **seoTitle** | ultherapy malaysia, ultherapy face lift, rawatan tegang muka, face lift tanpa pembedahan | `ultherapy malaysia` strong; `rawatan tegang muka` returns; `face lift tanpa pembedahan` empty | KEYWORD: **Ultherapy Malaysia \| Tegang Muka Tanpa Pembedahan \| Kaiteki** (59 chars) |
| **seoDescription** | rawatan ultherapy, ultrabunyi berfokus | `rawatan ultherapy` returns; `ultrabunyi berfokus` empty (kept as the face-lifting page's term) | KEYWORD: rawatan Ultherapy di Malaysia, tegang muka, konsultasi percuma (160 chars) |
| sections[0].heading "What is Ultherapy?" | apa itu ultherapy, ultherapy adalah, ultherapy untuk apa | `apa itu ultherapy` returns (→ prime); `ultherapy untuk apa` returns; `ultherapy adalah` is ID (*perawatan*) | KEYWORD: **Apa itu Ultherapy?** |
| sections[1].heading "How does Ultherapy see the layer it treats?" | ultherapy imaging, ultherapy deepsee, ultrasound muka, lapisan smas | `ultherapy imaging` → real time imaging (English); `ultrasound muka` → mesin ultrasound muka; no Malay form about seeing layers | DIRECT: **Bagaimana Ultherapy melihat lapisan yang dirawatnya?** |
| variantModule.heading | ultherapy vs hifu, beza ultherapy dan hifu, ultherapy dan hifu | `ultherapy vs hifu` strong (English tails); *beza* form empty; `ultherapy dan hifu` → *beda, bedanya* (ID) | KEYWORD (pattern): **Ultherapy atau HIFU: apa bezanya apabila ada imej ultrabunyi** |
| routes[0].title "Lifting where laxity leads the picture" | rawatan tegang muka, rawatan muka kendur, rawatan kulit kendur, ultherapy tegang muka | `rawatan tegang muka` and `rawatan muka kendur` return (MY); `rawatan kulit kendur` → rawatan untuk kulit muka kendur; ultherapy + Malay forms empty | KEYWORD (term): **Tegang muka apabila kekenduran menjadi masalah utama** |
| routes[1].title "Lifting that softens the fold above it" | ultherapy kening, angkat kening, kening jatuh, kelopak mata jatuh | `ultherapy kening` empty; `angkat kening` is the gesture/emoji; `kening jatuh` is folklore (*tanda kematian*); `kelopak mata jatuh` is ptosis (medical) | DIRECT: **Tegang kulit yang melembutkan lipatan di atasnya** |
| ctaMid.heading | n/a (conversion copy) | n/a | DIRECT: **Tak pasti sama ada Ultherapy atau HIFU sesuai untuk muka anda?** |
| FAQ 1 "How is Ultherapy different from HIFU?" | ultherapy vs hifu, beza ultherapy dan hifu | as variantModule | KEYWORD (pattern): **Apa beza Ultherapy dan HIFU?** (same form as HIFU FAQ 2) |
| FAQ 2 "Is Ultherapy a facelift?" | ultherapy facelift, ultherapy face lift, ultherapy pembedahan | `ultherapy facelift` → ultherapy vs facelift, before facelift (English); `ultherapy pembedahan` empty | KEYWORD (term): **Adakah Ultherapy sejenis face lift?** (*face lift* as on ms face-lifting) |
| FAQ 3 "When will I see results?" | ultherapy hasil, ultherapy nampak hasil, ultherapy berapa lama nampak hasil, ultherapy results timeline | `ultherapy hasil` → *hasil ultherapy prime* (ID-leaning); `ultherapy results timeline` English; *nampak hasil* forms empty | DIRECT: **Bila boleh nampak hasil Ultherapy?** |
| FAQ 4 "Is there any downtime?" | ultherapy downtime, ultherapy ada downtime, hifu ada downtime | `ultherapy downtime` strong (also first tail of `ultherapy`, `ultherapy prime`); `hifu ada downtime` returns; `ultherapy ada downtime` empty | KEYWORD: **Ultherapy ada downtime ke?** (same form as HIFU FAQ 3) |

**Malay tally (13 logged strings):** 9 KEYWORD, 4 DIRECT.

**Indonesian pollution seen and avoided:** ultherapy adalah (*perawatan*), ultherapy dan hifu (*beda, bedanya, apa beda*), ultherapy sakit (*apakah*), ultherapy harga (*ZAP, Natasha, Miracle, di Jakarta*: bare *harga* is ID-led, docs/18 §7.2), hasil ultherapy. `ultherapy kesan sampingan`, `kos ultherapy`, `harga ultherapy di malaysia` are empty; the English `ultherapy price malaysia` carries the cost demand.

## Terms carried over

Same as `hifu.md` (聚焦超声波 / *ultrabunyi berfokus*, SMAS 筋膜层 / SMAS, 拉皮手术 / *pembedahan face lift*, 松弛 / *kekenduran*, 恢复期 / *downtime*, 医护人员 / *pengamal*), plus:

| EN | zh | ms | Source |
|---|---|---|---|
| transducer | 探头 | transduser | new (same word as HIFU "cartridge" in zh, see note 1) |
| on-screen imaging | 屏幕影像 | imej pada skrin | face-lifting (带屏幕影像) |
| real-time / live ultrasound image | 实时超声波影像 | imej ultrabunyi secara langsung | face-lifting (实时影像 / *imej masa nyata*) |
| micro-focused ultrasound | 微聚焦超声波 | ultrabunyi mikro-berfokus | face-lifting |
| threads | 埋线 | benang | new |
| pacemaker | 心脏起搏器 | perentak jantung | new |
| décolletage | 胸前上方 | bahagian dada atas | new |

## For the bilingual doctor-reviewer

1. **Transducer and cartridge are both 探头 in zh.** That's how Malaysian Chinese clinics talk about both devices. If the reviewer wants the Ultherapy wording to stand apart, use 换能器 for "transducer".
2. **"SMAS fascia"** is SMAS 筋膜层 / *fasia SMAS*. The depths (1.5 / 3.0 / 4.5 mm) are copied from the EN.
3. **"Lumpy feeling"** is 一粒粒的感觉 / *rasa berketul*. Confirm this isn't alarming in either language.
4. **"Walk-in, walk-out"** is 做完就可以离开 / *boleh terus pulang selepas selesai*.
5. **"Imaging-free HIFU devices remain widely and appropriately used"** is 被广泛而恰当地使用 / *digunakan secara meluas dan wajar*, kept so the page doesn't run down the clinic's own HIFU.
6. **zh FAQ 3 uses 多久才有效果** (query form). The answer says change is gradual, varies, and isn't visible on the day. If 效果 reads as too promising, fall back to 多久才看得到变化？ (DIRECT).
7. **Permanence words appear only negated** (它不是永久的 / *Ia tidak kekal*). Expect L-03r warnings, not failures.
