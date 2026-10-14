# 21. Technology keyword log: Ultracel Q (`/technology/ultracel-q`)

**Date:** 2026-10-14 · Follows the pilot (`onda-coolwaves.md`): same method, decision rules and table format.
**Outputs:** `content/i18n/technology/zh/ultracel-q.json`, `content/i18n/technology/ms/ultracel-q.json` (same shape as the EN record). EN snapshot: `content/i18n/technology/_en/ultracel-q.json`.
**Inputs:** EN record for `ultracel-q`, `docs/18-trilingual-keyword-map.md` §5 and §7, `content/i18n/terms.ts`, the translated `hifu` treatment page (`docs/20-treatment-keywords/hifu.md`, whose variantModule already describes this device) and the `face-lifting` / `aging` concern pages.

## Method

- **Client rule:** check the keyword first; if there is no search volume, translate directly.
- **Volume proxy:** Google Autocomplete (free), `client=firefox&gl=my`, `hl=zh-CN` / `hl=ms`. HAS VOLUME / NO VOLUME and the skew signs are read as in the pilot. For HIFU the `hl=zh-CN` results carry heavy Japanese / traditional-character 皮膚 noise; that is ignored, not counted.
- **Probes:** shared batch for the four lifting devices (ultracel-q, lifthera, ultherapy-system, xerf): 187 zh and 136 ms, two batches per language. Raw dumps: `C:/tmp/lift4-ac-zh.json`, `C:/tmp/lift4-ac-zh2.json`, `C:/tmp/lift4-ac-ms.json`, `C:/tmp/lift4-ac-ms2.json` (not in the repo). Evidence from `hifu.md` is reused where the string is the same.
- **Scope:** only search-relevant strings are logged (name, seoTitle, seoDescription, the seven section headings, the four FAQ questions). All body copy (imageAlt, summary, leadAnswer, facts, section bodies and list, cost factors, FAQ answers) is a direct, faithful translation.
- **What the AC says about this device:** "Ultracel Q" is searched only in English, and almost always as **Ultracel Q+** (`ultracel q+ hifu`, `ultracel q+ vs ultherapy`, `ultracel q+ price`), in both `hl` settings. Every Chinese or Malay form with "ultracel" is empty. So headings that ask about the device lean on the generic **HIFU** demand where it exists (`hifu 原理`, `hifu 禁忌`, `hifu 副作用`, `kesan sampingan hifu`, `hifu berapa lama`).
- **Untranslated by design:** `slug`, `type`, `group`, `treatments`, `image`, `reviewedBy`, `lastReviewed`; Ultracel Q, Ultracel Q+ (imageAlt), Jeisys Medical, LinearFirm.

## Chinese (`/zh`, `hl=zh-CN&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Ultracel Q" | ultracel q, ultracel, ultracel q+, ultracel q 是什么 | `ultracel q` → ultracel q+, q+ hifu, q+ before and after (English, global); Chinese forms empty | KEYWORD (brand): **Ultracel Q**, kept in Latin |
| **seoTitle** "Ultracel Q HIFU Skin-Lifting Treatment Malaysia \| Kaiteki" | ultracel 马来西亚, ultracel 提拉, ultracel 疗程, ultracel q hifu, hifu 提拉 (hifu.md) | ultracel + Chinese forms empty; `ultracel q hifu` returns (English); `hifu 提拉`, `hifu疗程` return (hifu.md) | KEYWORD: **Ultracel Q HIFU 提拉疗程 \| Kaiteki** (30 chars, the limit). 马来西亚 dropped to fit: it has no zh demand for this device, and the brand + HIFU + 提拉 carry the query. |
| **seoDescription** | (same family) + 超声波提拉, 免费咨询 | `超声波提拉` returns (hifu.md) | KEYWORD: Ultracel Q, HIFU 超声波提拉, 非手术, 提拉紧致, 免费咨询, 医生 (76 chars). "Check suitability" kept as 由医生评估你是否适合. |
| sections[0].heading "What is Ultracel Q?" | ultracel q 是什么, ultracel 是什么, ultracel q+ 是什么 | all empty | DIRECT: **Ultracel Q 是什么？** |
| sections[1].heading "How focused ultrasound works on Ultracel Q" | ultracel 原理, ultracel q 原理, hifu 原理 | ultracel forms empty; `hifu 原理` → hifu treatment 原理, hifu 机 原理 | KEYWORD (pattern): **Ultracel Q 原理：聚焦超声波如何运作** (same pattern as the pilot and HIFU) |
| sections[2].heading "Which layers can Ultracel Q reach, and why does the SMAS matter?" | ultracel smas, hifu smas, hifu 层, hifu 深度 | `hifu 层` → 层面, 脂肪层, **筋膜层**; `hifu 深度` returns; `hifu smas` English | KEYWORD (term): **Ultracel Q 可以到达哪些层次？为什么 SMAS 筋膜层很重要？** (SMAS 筋膜层 as on hifu / face-lifting) |
| sections[3].heading "Is Ultracel Q a facelift?" | ultracel 拉皮, hifu 拉皮, hifu 是拉皮吗, hifu 手术 | `hifu 拉皮` returns itself; `hifu 手术` → 无创手术; question forms empty | KEYWORD (weak): **Ultracel Q 是拉皮手术吗？** |
| sections[4].heading "Who should not have Ultracel Q, and why do fillers in the path matter?" | ultracel 禁忌, hifu 禁忌, hifu 填充, hifu 玻尿酸, hifu 打完玻尿酸, hifu 什么人不能做, hifu 不适合 | `hifu 禁忌` returns itself (rest JP noise); filler forms return only 皮膚 noise; 不适合 forms empty | KEYWORD (weak): **Ultracel Q 禁忌：哪些人不适合，为什么能量路径上的填充剂很重要？** (pilot precedent: the section is a contraindication list) |
| sections[5].heading "How long does an Ultracel Q session take, and what does each pulse feel like?" | ultracel 多久, hifu 要多久, hifu 时间, hifu 过程, hifu 痛吗 | `hifu 时间` → **hifu 疗程 时间**, 相隔时间; `hifu 过程`, `hifu 痛吗` return | KEYWORD: **Ultracel Q 疗程时间要多久？每一发是什么感觉？** |
| sections[6].heading "Can Ultracel Q affect the nerves, and what else can go wrong?" | ultracel 副作用, hifu 副作用, hifu 神经, hifu 神经 损伤 | `hifu 神经` → 脸部神经 hifu; `hifu 副作用` returns (one lihkg tail) | KEYWORD: **Ultracel Q 会影响神经吗？还可能有什么副作用？** ("what else can go wrong" = the side-effects section) |
| FAQ 1 "How does Ultracel Q differ from other HIFU devices?" | ultracel 和, ultracel vs, ultracel 区别, hifu 机器, hifu 种类 | `ultracel vs` English (vs ultherapy, vs ultraformer); `hifu 机器` → **hifu 机器 种类**, 最新机器 | KEYWORD (term): **Ultracel Q 和其他 HIFU 机器有什么差别？** (HIFU 机器 as in the hifu variantModule; 差别 per pilot) |
| FAQ 2 "Is Ultracel Q HIFU safe for deeper or Asian skin tones?" | hifu 肤色, ultherapy 肤色, ultherapy 亚洲 | all empty | DIRECT: **Ultracel Q HIFU 对较深的肤色或亚洲人肤色安全吗？** |
| FAQ 3 "How painful is a HIFU session?" | hifu 痛吗, ultracel 痛吗 | `hifu 痛吗` returns; ultracel form empty | KEYWORD: **做 HIFU 痛吗？** (same as hifu FAQ 5; the answer describes the sensation, nothing says painless) |
| FAQ 4 "Are HIFU results permanent?" | hifu 永久, hifu 效果 维持 (hifu.md) | `hifu 永久` returns itself (JP noise below); `hifu 效果` → 效果维持 (hifu.md) | KEYWORD: **HIFU 效果是永久的吗？需要维持吗？** Same EN question as hifu FAQ 6, so the same zh string. The answer opens 不是永久的 and covers maintenance. |

**Chinese tally (14 logged strings):** 12 KEYWORD, 2 DIRECT (three weak: sections[3], sections[4], and the pattern match on sections[1]).

**Not usable:** `ultracel q+` itself (English; the EN record says Ultracel Q, and the imageAlt already names the Q+ unit), `hifu 多久见效` (efficacy framing, no EN heading for it), every "+马来西亚" form.

## Malay (`/ms`, `hl=ms&gl=my`)

| English string | Probes tried | Autocomplete evidence (top suggestions) | Decision |
|---|---|---|---|
| **name** "Ultracel Q" | ultracel q, ultracel q malaysia, apa itu ultracel, rawatan ultracel | `ultracel q` → q+, q+ hifu, q+ vs ultherapy (English); Malaysia and Malay forms empty | KEYWORD (brand): **Ultracel Q**, kept in Latin |
| **seoTitle** | ultracel hifu malaysia, rawatan hifu, rawatan tegang muka, hifu face lift | `rawatan hifu` → untuk apa, muka, tu apa (MY); `rawatan tegang muka` returns; ultracel + malaysia empty | KEYWORD: **Rawatan HIFU Ultracel Q di Malaysia \| Tegang Muka \| Kaiteki** (59 chars). *Rawatan HIFU* and *tegang muka* carry the Malay demand; "di Malaysia" keeps the EN geo. |
| **seoDescription** | hifu untuk kulit kendur, rawatan hifu | `hifu untuk kulit kendur` returns; `rawatan hifu` strong | KEYWORD: Ultracel Q, mesin HIFU, kartrij, kulit kendur, tegang muka, tanpa pembedahan, konsultasi percuma (159 chars). "To check suitability" dropped to fit 160. |
| sections[0].heading "What is Ultracel Q?" | apa itu ultracel, apa itu ultracel q | empty | DIRECT: **Apa itu Ultracel Q?** |
| sections[1].heading "How focused ultrasound works on Ultracel Q" | ultracel how it works, hifu berfungsi (hifu.md) | English form empty; `hifu berfungsi` → berfungsi untuk (not "how") | DIRECT: **Bagaimana ultrabunyi berfokus berfungsi pada Ultracel Q** |
| sections[2].heading "Which layers…and why does the SMAS matter?" | hifu smas, lapisan smas | `lapisan smas` → lapisan smas kulit, apa itu lapisan smas (plus ID *smash adalah*) | KEYWORD (term): **Lapisan mana yang boleh dicapai Ultracel Q, dan kenapa lapisan SMAS penting?** |
| sections[3].heading "Is Ultracel Q a facelift?" | ultracel face lift, hifu face lift, hifu vs facelift | `hifu face lift` strong (English tails); `hifu vs facelift` returns | KEYWORD (term): **Adakah Ultracel Q sejenis face lift?** (*face lift* as on ms ultherapy FAQ 2) |
| sections[4].heading "Who should not have Ultracel Q, and why do fillers in the path matter?" | hifu filler, hifu selepas filler, hifu tidak sesuai, hifu sesuai | `hifu filler` → hifu after filler, hifu and filler together (English); Malay forms empty | DIRECT: **Siapa yang tidak sesuai untuk Ultracel Q, dan kenapa filler di laluan tenaga penting?** |
| sections[5].heading "How long does an Ultracel Q session take…?" | ultracel berapa lama, hifu berapa lama, hifu berapa minit | `hifu berapa lama` → **hifu berapa lama prosesnya**, treatment hifu berapa lama (MY); minit empty | KEYWORD (pattern): **Berapa lama sesi Ultracel Q, dan bagaimana rasanya setiap denyutan?** |
| sections[6].heading "Can Ultracel Q affect the nerves, and what else can go wrong?" | hifu saraf, hifu kesan sampingan, ultracel side effects | `hifu kesan sampingan` → **kesan sampingan hifu**; `hifu saraf` empty; ultracel form English | KEYWORD (partial): **Bolehkah Ultracel Q menjejaskan saraf, dan apa lagi kesan sampingan yang mungkin berlaku?** |
| FAQ 1 "How does Ultracel Q differ from other HIFU devices?" | ultracel vs, mesin hifu | `ultracel vs` English; `mesin hifu` → korea, treatment, **jenis mesin hifu** (and *terbaik*, not used) | KEYWORD (pattern/term): **Apa beza Ultracel Q dengan mesin HIFU yang lain?** (*beza* per hifu FAQ 2) |
| FAQ 2 "Is Ultracel Q HIFU safe for deeper or Asian skin tones?" | hifu kulit gelap, hifu kulit asia | empty | DIRECT: **Adakah HIFU Ultracel Q selamat untuk kulit Asia atau kulit yang lebih gelap?** |
| FAQ 3 "How painful is a HIFU session?" | hifu sakit, ultracel sakit | `hifu sakit` returns (tails ID: *ga, apakah*); ultracel empty | KEYWORD (partial): **Sesi HIFU sakit tak?** (*tak* is the MY tail, as on the hifu page) |
| FAQ 4 "Are HIFU results permanent?" | hifu tahan berapa lama, hifu kekal | `hifu tahan berapa lama` strong; `hifu kekal` empty (hifu.md) | KEYWORD: **HIFU tahan berapa lama, dan adakah hasilnya kekal?** Same EN question as hifu FAQ 6, so the same ms string. The answer opens *Tidak* and says *tidak kekal*. |

**Malay tally (14 logged strings):** 10 KEYWORD, 4 DIRECT.

**Indonesian pollution seen and avoided:** hifu sakit ga / apakah, hifu wajah tahan berapa lama, efek hifu berapa lama, lapisan smash adalah, *mesin hifu terbaik / harga*. Bare *harga* not used; cost line says *Harga dibincangkan semasa konsultasi*.

## Terms carried over

Same as `hifu.md` (聚焦超声波 / *ultrabunyi berfokus*, SMAS 筋膜层 / *lapisan SMAS*, 拉皮手术 / *pembedahan face lift*, 探头 / *kartrij*, 超声波耦合凝胶 / *gel pengantara ultrabunyi*, 条状红肿（风团） / *bintat (kesan bengkak berjalur)*, 蟹足肿 / *parut keloid*, 像绉纸 / *nipis berlipat seperti kertas krep*, 恢复期 / *downtime*), plus:

| EN | zh | ms | Source |
|---|---|---|---|
| multi-cartridge | 多探头 | berbilang kartrij | new (探头 per hifu.md note 1) |
| handpiece | 手柄 | alat pegang tangan | onda-coolwaves |
| partial thermal denaturation | 部分热变性 | denaturasi haba separa | new |
| submental area | 颏下部位 | kawasan submental | new |
| shots or lines | 发数或行数 | shot atau garisan | hifu |

## For the bilingual doctor-reviewer

1. **Ultracel Q vs Q+.** All demand is for **Ultracel Q+**, and the EN imageAlt names the unit as "Ultracel Q+". The name and headings follow the EN (Ultracel Q). If the clinic's unit is the Q+, the EN record should say so first.
2. **"60–65°C" and "1.5 s / 0.7 s"** are copied from the EN and stay attributed to Jeisys (Jeisys 表示 / *Menurut Jeisys*).
3. **zh FAQ 4 adds 需要维持吗; ms FAQ 4 adds *tahan berapa lama*,** matching the hifu page word for word. The answer gives no duration. If that reads as a question left unanswered, fall back to HIFU 效果是永久的吗？ / *Adakah hasil HIFU kekal?* (DIRECT) here and on the hifu page together.
4. **seoTitle (zh) drops 马来西亚** to stay within 30 characters.
5. **Permanence words appear only negated or in the question** (不是永久的 / *tidak kekal*). Expect L-03r warnings, not failures.
