# 20. Treatment keyword log: Exosome Therapy (`/treatments/exosome-therapy`)

**Date:** 2026-10-14 · Follows the pilot method in `pico-laser.md`.
**Outputs:** `content/i18n/treatments/zh/exosome-therapy.json`, `content/i18n/treatments/ms/exosome-therapy.json` (same shape as the EN record; snapshot in `content/i18n/treatments/_en/exosome-therapy.json`).
**Inputs:** EN record for `exosome-therapy`, `docs/18-trilingual-keyword-map.md` §5 and §7, `docs/19-concern-keywords/_treatment-names.md`, `content/i18n/terms.ts`, and the translated `acne`, `acne-scars` and `hair-loss` concern pages, whose `exosome-therapy` cards already render the same EN sentences (reused word for word where the EN is identical).

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete, `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`. HAS VOLUME / NO VOLUME read as in `pico-laser.md`.
- **Probes:** 51 zh and 45 ms, shared batch with `skin-booster`. Raw dumps: `C:/tmp/exo-zh-ac.json`, `C:/tmp/exo-ms-ac.json`, `C:/tmp/sbex2-zh-ac.json`, `C:/tmp/sbex2-ms-ac.json` (not in the repo).
- **Scope:** search-relevant strings only (seoTitle, seoDescription, name/H1, section headings, route titles, ctaMid heading, FAQ questions). This record has no `jumpNav`, no `variantModule` and no comparisons. All body copy is a direct, faithful translation.
- **Claims and hedges:** every hedge in the EN is kept in both locales (证据仍在发展中 / *asas bukti masih berkembang*; 辅助 / *rawatan tambahan*; 不能取代找出原因 / *bukan pengganti untuk mencari puncanya*; 不像…那样已经确立 / *belum mantap seperti …*). No string adds an effect, a hair-growth claim or a safety claim.
- **Untranslated by design:** `slug`, `href`, `related`, `image`, `src`, `reviewedBy`, `lastReviewed`, top-level `category`, `relatedReasons` keys; "PRP" stays Latin (glossed once in sessionSteps as 富血小板血浆 / *plasma kaya platelet*).

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Exosome Therapy" | 外泌体, 外泌体 疗程, 外泌体 医美, exosome | `外泌体` → 是什么, 多久打一次, 功效, 副作用; `外泌体 疗程` → **外泌体疗程**, 外泌体疗程费用; `exosome` → 中文, 华语 (MY signal) | KEYWORD: **外泌体疗程** (terms.ts, kept) |
| **seoTitle** "Exosome Therapy Malaysia \| Regenerative Treatment \| Kaiteki" | 外泌体 马来西亚, 外泌体 再生, 再生疗法 | `外泌体 马来西亚` → **马来西亚 外泌体**; `再生疗法` → 是什么, prp, 费用; `外泌体 再生` → 再生医学, 再生医疗 | KEYWORD: **马来西亚外泌体疗程 \| 再生疗法 \| Kaiteki** (26 chars) |
| **seoDescription** | (same family) + 外泌体 头皮, 外泌体 微针, 外泌体 prp | all return | KEYWORD: 马来西亚, 外泌体疗程, 再生疗法, 皮肤和头皮, 微针、激光或 PRP (from the page's own lead), 免费咨询, 评估 (75 chars) |
| sections[0].heading "What is exosome therapy?" | 外泌体是什么, 外泌体疗程 是什么, exosome 是什么 | `外泌体是什么` returns strongly (some dcard/ptt below it); `外泌体疗程 是什么` empty; `exosome是什么` returns | KEYWORD: **外泌体疗程是什么？** (the body opens by defining 外泌体, answering the head query) |
| sections[1].heading "Why is it applied after another procedure?" | 外泌体 原理, 外泌体 微针, 外泌体 搭配, 外泌体 为什么 | `外泌体 原理` returns; `外泌体 微针` → 微针导入, 外泌体+微针疗程; 搭配 / 为什么 empty | KEYWORD: **外泌体原理：为什么要在另一项疗程之后使用？** (same 原理 pattern as the pilot sections[1]) |
| routes[0].title "Skin recovery after energy-based acne treatment" | 外泌体 暗疮, 外泌体 痘疤 | both return themselves | KEYWORD: **暗疮能量仪器疗程后的皮肤恢复** |
| routes[1].title "The scalp, alongside medical hair-loss treatment" | 外泌体 头皮, 外泌体 脱发, 外泌体 生发, 外泌体 头发 | `外泌体 头皮` → 头皮疗程, 头皮注射; `外泌体 脱发` returns; `外泌体 生发` strong (dcard/ptt, 有效吗) | KEYWORD: **头皮：配合脱发的医学治疗**. 生发 is not used: it implies hair growth, which the EN does not claim. |
| ctaMid.heading "Wondering whether exosome therapy adds anything to your plan?" | n/a (conversion copy) | n/a | DIRECT: **想知道外泌体疗程能不能为你的计划带来帮助？** |
| FAQ 1 "Is exosome therapy safe?" | 外泌体安全吗, 外泌体 安全, 外泌体副作用 | `外泌体安全吗` returns; `外泌体 安全` → 安全吗, 安全性 | KEYWORD: **外泌体疗程安全吗？** (the answer lists effects and says the evidence is developing; it never says 安全) |
| FAQ 2 "Can it be combined with other treatments?" | 外泌体 微针, 外泌体 prp, 外泌体 搭配, 外泌体 搭配 微针 | `外泌体 微针` and `外泌体 prp` return (→ 外泌体 vs prp); 搭配 forms empty | KEYWORD (partial): **外泌体疗程可以和微针、PRP 等其他疗程一起做吗？** (both are named in the answer, following the pilot's FAQ additions) |
| FAQ 3 "Who is a suitable candidate?" | 外泌体适合什么人, 外泌体 适合, 外泌体 孕妇 | `外泌体 适合` → **外泌体 适合什么人**; `外泌体 孕妇` → 孕妇可以用吗 | KEYWORD: **外泌体疗程适合什么人？** |
| FAQ 4 "When might I notice a change?" | 外泌体多久见效, 外泌体 效果, 外泌体 多久 | `外泌体多久见效` returns; `外泌体 多久` → 多久打一次, 多久见效 | DIRECT: **做完外泌体疗程，多久会看到变化？** 见效 has volume but presupposes an effect; on a treatment whose evidence base the EN calls "still developing", the question stays neutral. |

**Chinese tally (12 logged strings):** 10 KEYWORD, 2 DIRECT.

**Not usable:** `外泌体 生发` (hair growth claim), `外泌体功效` (efficacy framing), `外泌体医美 韩国`, `外泌体 皮肤科` (Kaiteki is never 皮肤科), `外泌体 点滴` (IV; not offered on this page). `外泌体价钱` / `外泌体多少钱` return, but the EN has no cost FAQ.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Exosome Therapy" | exosome, rawatan exosome, terapi exosome, eksosom | `exosome` → treatment, injection (and *wardah*, ID skincare); `rawatan exosome` returns itself; `terapi exosome` → *biaya* (ID); `eksosom` mostly other languages | KEYWORD: **Rawatan Exosome** (terms.ts, kept) |
| **seoTitle** | exosome malaysia, exosome therapy malaysia, rawatan regeneratif | `exosome malaysia` → price, **therapy malaysia**, treatment malaysia; `rawatan regeneratif` returns itself | KEYWORD: **Rawatan Exosome di Malaysia \| Rawatan Regeneratif \| Kaiteki** (59 chars) |
| **seoDescription** | (same family) | as above | KEYWORD: rawatan exosome, Malaysia, regeneratif, kulit kepala, konsultasi percuma, doktor (159 chars) |
| sections[0].heading "What is exosome therapy?" | apa itu exosome, apa itu exosome therapy, apa itu exosome treatment | `apa itu exosome` returns, with *therapy / treatment / hair* forms below it | KEYWORD: **Apa itu rawatan exosome?** |
| sections[1].heading "Why after another procedure?" | exosome selepas, exosome selepas laser, exosome microneedling, exosome laser | Malay forms empty; `exosome microneedling` / `exosome after laser` are English and global | DIRECT: **Kenapa rawatan exosome digunakan selepas prosedur lain?** |
| routes[0].title | exosome jerawat, exosome untuk jerawat | `exosome jerawat` → untuk jerawat (also *bisa untuk jerawat*, ID) | KEYWORD (term): **Pemulihan kulit selepas rawatan jerawat berasaskan tenaga** |
| routes[1].title | exosome rambut, exosome rambut gugur, exosome kulit kepala, exosome untuk rambut gugur | `exosome rambut` → untuk rambut, treatment rambut, harga exosome rambut (some *adalah*); gugur / kulit kepala forms empty | KEYWORD (term): **Kulit kepala, bersama rawatan perubatan rambut gugur** (*rambut gugur* is the concern name) |
| ctaMid.heading | n/a (conversion copy) | n/a | DIRECT: **Tertanya-tanya sama ada rawatan exosome menambah apa-apa pada pelan anda?** |
| FAQ 1 "Is exosome therapy safe?" | exosome selamat, exosome selamat ke, exosome selamat atau tidak, exosome kesan sampingan, exosome safe | Malay forms empty; `exosome safe` → safety, safe or not (English, global) | DIRECT: **Rawatan exosome selamat ke?** |
| FAQ 2 "Combined with other treatments?" | exosome bersama prp, exosome prp, exosome microneedling | Malay form empty; English forms global (Pakistan pricing etc.) | DIRECT: **Boleh ke rawatan exosome digabungkan dengan rawatan lain?** |
| FAQ 3 "Suitable candidate?" | exosome sesuai, exosome sesuai untuk, exosome hamil | empty; `exosome hamil` → *untuk ibu hamil* (ID-leaning) and Hamilton | DIRECT: **Siapa yang sesuai untuk rawatan exosome?** |
| FAQ 4 "When might I notice a change?" | exosome hasil, exosome hasil berapa lama, exosome berapa lama | → *berapa lama hasil exosome terlihat*, *kapan hasil exosome terlihat* (ID *terlihat, kapan*) | DIRECT: **Bila saya mungkin nampak perubahan?** |

**Malay tally (12 logged strings):** 6 KEYWORD, 6 DIRECT. Malay exosome demand is English-led (`exosome therapy malaysia`, `exosome microneedling`) or Indonesian; the question forms have no Malaysian Malay volume.

**Indonesian pollution seen and avoided:** *exosome wardah*, *exosome adalah*, *biaya terapi exosome*, *exosome bisa untuk jerawat*, *kapan hasil exosome terlihat*, *harga exosome di zap*, *exosome untuk ibu hamil*.

## Terms carried over

| EN | zh | ms | Source |
|---|---|---|---|
| exosome therapy | 外泌体疗程 | rawatan exosome | terms.ts |
| regenerative approach / preparation | 再生疗法 / 再生制剂 | pendekatan regeneratif / persediaan regeneratif | acne, acne-scars, hair-loss cards |
| energy-based treatment | 能量仪器疗程 | rawatan berasaskan tenaga | acne, acne-scars |
| adjunct | 辅助 | rawatan tambahan | acne |
| follicular environment | 毛囊周围的环境 | persekitaran folikel | hair-loss |
| medical management | 医学管理 | pengurusan perubatan | hair-loss |
| evidence base is still developing | 证据仍在发展中 | asas bukti masih berkembang | hair-loss |
| microneedling (generic) | 微针 | microneedling | AC `外泌体 微针`; EN here is generic, not RF |
| PRP | PRP（富血小板血浆） | PRP (plasma kaya platelet) | new |
| vesicles / signalling molecules | 囊泡 / 信号分子 | vesikel / molekul isyarat | new |

## For the bilingual doctor-reviewer

1. **Regulatory status is still open** (acne.md note 12: "its MY regulatory status should be checked before the treatment page is localised"). This page translates the EN claims and hedges only; nothing is added. Please confirm the page is cleared to go live in zh/ms.
2. **The name now uses 外泌体 / exosome openly** (terms.ts round 2), whereas the concern-page cards described it only as 再生疗法 / *pendekatan regeneratif*. Confirm this is acceptable on the treatment page itself.
3. **FAQ "Is exosome therapy safe?"** is kept as a question (外泌体疗程安全吗？ / *Rawatan exosome selamat ke?*), as in the EN. The answer never states it is safe.
4. **"Not established in the way the procedures it accompanies are"** is 它不像所搭配的那些疗程那样已经确立 / *Ia belum mantap seperti prosedur yang diiringinya*. Confirm *belum mantap* reads as "not established" and not "unstable".
5. **zh FAQ 2 names 微针、PRP** in the question; both are in the EN answer.
6. **Image alt and captions** use 医生 / *doktor* because the EN says "doctor".
