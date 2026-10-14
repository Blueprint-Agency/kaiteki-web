# 18. Trilingual keyword map: site chrome + homepage (zh / ms)

**Round 1 of N. Scope:** global chrome (header nav, footer, WhatsApp prefills) and the homepage only.
Concern, treatment, location and doctor pages get their own rounds.
**Date:** 2026-10-13 · **Feeds:** `docs/15` item 4.4/4.5 (`/zh` + `/ms` pilot), `docs/10` (EN meta map), `docs/02` §8 (compliance gate).

---

## 0. Method and limitations

**Goal.** Find the words Malaysians actually type in each language, then write copy around those words. This is keyword-led localisation, not translation.

**Sources used (in order of weight):**

1. **Google Autocomplete** (free), `suggestqueries.google.com/complete/search?client=firefox&gl=my`, with `hl=zh-CN` for Chinese and `hl=ms` for Malay. **349 seed probes** (194 zh, 155 ms; the raw dumps are in the session scratchpad, not the repo). Autocomplete presence, ordering and the Malaysian modifiers it attaches (place names like *kepong, cheras, 新山*; words like *价钱, pantang, terdekat*) are our demand proxy.
2. **Competitor pages** (free, via Jina Reader): Premier Clinic `/zh`, RegenX `/zh`, RJ Clinic `/zh`, DrPlus `/cn` and `/my`, Medi Clinic `/zh-hans` and `/ms`, Dr Chong `/ms`, Clique `/ms/acne`, Dr Wee `/ms`, Monette Ansley `/bm-home`. We pulled titles, H1–H3 and nav labels.
3. **Firecrawl search** (metered, 7 calls, `location: Malaysia`) to see who ranks for the head terms: `医美诊所 吉隆坡`, `皮秒激光 马来西亚 诊所`, `新山 医美诊所 皮肤科`, `klinik kecantikan kuala lumpur doktor`, `klinik estetik rawatan laser muka jerawat Malaysia`, `klinik estetik johor bahru`, `harga rawatan laser muka klinik Malaysia`.
4. **Legacy `kaiteki.my/cn/`** homepage, fetched from the Wayback Machine (2024 snapshot).

**Limitations. Read these before treating any row as final.**

- **We have no search-volume data.** Autocomplete shows that people search a phrase, and suggestion order hints at relative popularity. It gives no counts. Treat "primary" in this doc to mean "the strongest autocomplete and SERP evidence", not "the highest volume".
- **`hl=zh-CN` mixes Malaysian, Hong Kong, Taiwan and mainland usage.** Suggestions ending in *dcard / ptt / lihkg / 台北 / 香港* are Taiwan/HK noise. We weighted a term up when Malaysia-specific modifiers appeared next to it (e.g. `皮肤科诊所kepong`, `新山皮肤科诊所推荐`, `黄金微针马来西亚价钱`, `看皮肤科要多少钱马来西亚`).
- **`hl=ms` is heavily polluted by Indonesian.** `klinik kecantikan terbaik` returns only Indonesian cities, and `harga [treatment]` returns Indonesian chains (ZAP, Erha, Natasha, Airin). Every Malay pick below was checked against that pollution (see §7.2).
- **Next step:** once `/zh` and `/ms` are live, add them as GSC properties/filters and re-validate this map against real impressions after 8 to 12 weeks. If the client gets Ahrefs or Semrush (the Ahrefs connector in this workspace still needs authorising), run the primaries in §3 and §4 through MY-database volume before the second round.

---

## 1. Kaiteki's Chinese brand name

**None found.** The legacy Chinese homepage (`kaiteki.my/cn/`, Wayback 2024) uses the Latin name throughout:

- `<title>`: **"Kaiteki 皮肤医美 || 主页"**
- Body: **"Kaiteki 皮肤医美诊所实践…"**, **"Kaiteki [かいてき]"** (Japanese reading, not a Chinese name), **"LCP 认证的日本皮肤和医美诊所"**, **"日式待客之道"**
- Footer: "Kaiteki Beauty Sdn Bhd (1334975-M)"

People also search the brand in Latin script. Autocomplete for `kaiteki` (zh) returns *kaiteki clinic, kaiteki skin aesthetic clinic, kaiteki cheras, kaiteki bukit jalil, kaiteki mont kiara, **kaiteki ss2**, kaiteki kota kemuning, kaiteki jb*. The Malay/English probes return *kaiteki skin aesthetic clinic southkey johor bahru* and *kaiteki skin aesthetic clinic kota kinabalu sabah*.

**Recommendation:** keep **"Kaiteki"** in Latin script in every locale. In Chinese, add the descriptor **皮肤医美诊所**, which continues the legacy wording and matches the `皮肤医美诊所` autocomplete. Do not coin a Chinese transliteration without the client's sign-off. *Ask the client:* is "SS2" how patients name the Petaling Jaya branch? Autocomplete suggests yes. If so, show "Petaling Jaya (SS2)" in every locale.

---

## 2. Site chrome / navigation labels

Sources: `lib/site.ts` (`primaryNav`, `tagline`, `positioning`, `mmcNote`), `components/SiteFooter.tsx`, `lib/wa.ts`, CTA labels used site-wide.

### 2.1 Chinese (`/zh`)

| English label | zh label | Why (evidence) |
|---|---|---|
| Concerns | **皮肤问题** | Legacy `/cn` nav used 皮肤问题; DrPlus `/cn` nav uses 皮肤问题; AC `皮肤问题` → *皮肤问题有哪些, 皮肤问题看什么科*. Covers hair/body too, as the legacy nav did. |
| Treatments | **医美疗程** | Premier `/zh` nav "医美疗程"; Medi Clinic "医美疗程方案"; AC `医美疗程` → *医美疗程有哪些, 医美疗程价格, 医美疗程推荐*. 疗程 alone is too generic (AC drifts to insurance). |
| Device & Injectables | **仪器与注射** | Legacy "我们的治疗机器"; Medi Clinic "产品与注射疗程". People search device names (HIFU, Ultherapy, Rejuran) rather than a category word, so this label only needs to be clear. |
| Products | **护肤产品** | 产品 alone is ambiguous next to 仪器; the legacy nav used 产品. |
| Locations | **分店** | Legacy "我们的分店"; Medi Clinic "Eco Botanic 全新分店". Malaysian Chinese say 分店 for chain branches. |
| All locations | **所有分店** | |
| About | **关于我们** | Universal (legacy, Premier, DrPlus, Medi). |
| Our story | **品牌故事** | Natural Malaysian Chinese corporate usage; 我们的故事 (legacy) also fine. |
| Our doctors | **医生团队** | Premier "我们的医师", Medi "我们的医生". 医生团队 reads better as a menu item. AC `医美医生` → *医美医生推荐, 医美医生执照*. |
| Blog | **医美知识** | Medi Clinic "医美知识", DrPlus "护肤知识". The legacy 部落格 is a Taiwanese loanword and nobody searches it. |
| Privacy (PDPA) | **隐私政策（PDPA）** | Keep the PDPA acronym. |
| Tagline "Skin · Aesthetic · Laser" | **皮肤 · 医美 · 激光** | 激光 not 雷射: Malaysian usage follows mainland (AC `皮秒激光` vs `雷射` drifting to TW/eye surgery). |
| Positioning line | **持有卫生部执照的皮肤医美诊所，全马9间分店。** | "全马" is standard Malaysian Chinese for nationwide. |
| `mmcNote` | **所有疗程均由MMC注册医生亲自进行。** | |
| Primary CTA "Book a Free Consultation" | **WhatsApp 预约免费咨询** | AC `医美咨询要钱吗` shows cost-of-consult anxiety; 免费咨询 answers it. |
| Kicker "Free consultation · No obligation" | **免费咨询 · 没有购买压力** | "No obligation" in zh ads is usually 不推销 / 没有压力. Avoid 0 风险 (risk-free is banned). |
| Footer col "Company" | **关于 Kaiteki** | |
| WA prefill (generic) | `你好 Kaiteki，我想预约免费咨询。` | `lib/wa.ts` strings must be localised too; staff will see the language and reply in it. |
| WA prefill (treatment/concern) | `你好 Kaiteki，我想咨询关于{name}的疗程。` | |
| WA prefill (branch) | `你好 Kaiteki {branch}，我想预约免费咨询。` | |

**Branch names (zh).** Malaysian Chinese mix scripts. AC returns `皮肤科诊所kepong`, `皮肤科诊所cheras`, and `kaiteki cheras` in Latin, but `新山` in Chinese. Show both scripts, e.g. **"Cheras 蕉赖"**, **"Mont Kiara 满家乐"**, **"Bukit Jalil 武吉加里尔"**, **"Petaling Jaya 八打灵再也 (SS2)"**, **"Kota Kemuning 哥打甘文宁"**, **"Southkey，新山"**, **"Pelangi 彩虹花园，新山"**, **"Kota Kinabalu 亚庇"**, **"Four Seasons KL"**. Region words: **吉隆坡 / 雪兰莪 / 柔佛（新山）/ 沙巴（亚庇）**. *The Chinese place-name renderings need a native reviewer. Malaysian Chinese renderings vary by newspaper.*

### 2.2 Malay (`/ms`)

| English label | ms label | Why (evidence) |
|---|---|---|
| Concerns | **Masalah Kulit** | DrPlus `/my` footer "Masalah Kulit"; AC phrases are problem-led (*rawatan muka berjerawat, rawatan kulit muka kusam*). The literal "Kebimbangan" is a translation artefact nobody searches. |
| Treatments | **Rawatan** | Universal on Malaysian sites (Dr Chong, DrPlus, Medi, Dr Wee); AC `rawatan …` is the dominant prefix (*rawatan jerawat, rawatan laser muka, rawatan rambut gugur*). Never *perawatan* (Indonesian). |
| Device & Injectables | **Teknologi & Suntikan** | Medi Clinic `/ms` "Produk & Rawatan Suntikan" / "Rawatan Klinikal & Teknologi"; *suntikan* is the MY word (Dr Chong "suntikan jerawat"). |
| Products | **Produk** | |
| Locations | **Lokasi** | Dr Chong, Dr Wee nav "Lokasi". Use **cawangan** in body copy ("9 cawangan"); Medi Clinic `/ms` "Cawangan baharu". |
| All locations | **Semua Lokasi** | |
| About | **Tentang Kami** | Dr Chong, DrPlus, Medi Clinic. |
| Our story | **Kisah Kami** | |
| Our doctors | **Doktor Kami** | Medi Clinic `/ms` "Doktor Kami". Use **doktor**, never *dokter* (Indonesian; AC `doktor kulit` shows *dokter kulit terdekat dari lokasi saya* Indonesian bleed). |
| Blog | **Panduan Kulit** | DrPlus `/my` uses "Panduan Kulit". It describes the content better than "Blog", but "Blog" is acceptable. |
| Privacy (PDPA) | **Dasar Privasi (PDPA)** | Medi Clinic `/ms` "Dasar Privasi". |
| Tagline | **Kulit · Estetik · Laser** | |
| Positioning line | **Klinik kulit & estetik berlesen KKM, 9 cawangan di seluruh Malaysia.** | KKM, not "MOH", is what Malay readers recognise. |
| `mmcNote` | **Semua rawatan dijalankan oleh doktor berdaftar MMC.** | AC `semak doktor mmc` and `cara semak mmc doktor` show people verify MMC registration. Worth linking to the MMC register later. |
| Primary CTA | **Tempah Konsultasi Percuma** | AC `konsultasi percuma` exists (MY). Use *percuma*, never *gratis* (Indonesian). *Temujanji* is a government-appointment word in AC (JPN, Puspakom, klinik kesihatan), so don't use it for the CTA. |
| Kicker | **Konsultasi percuma · Tiada paksaan** | "Tiada kewajipan" is stiff; "tiada paksaan" is how Malaysians say no pressure. |
| Footer col "Company" | **Syarikat** | |
| WA prefill (generic) | `Hai Kaiteki, saya nak tempah konsultasi percuma.` | Conversational Malaysian Malay (*nak*). |
| WA prefill (treatment/concern) | `Hai Kaiteki, saya nak tanya tentang {name}.` | |
| WA prefill (branch) | `Hai Kaiteki {branch}, saya nak tempah konsultasi percuma.` | |

**Branch/region names (ms):** keep official place names (Kuala Lumpur, Selangor, Johor Bahru, Kota Kinabalu). AC returns `klinik kecantikan kota kinabalu`, `klinik kecantikan shah alam`, `klinik kecantikan cheras`, `klinik kulit johor bahru`, `klinik estetik johor bahru`, and `klinik estetik kota kinabalu`. Kota Kemuning has no Malay AC of its own; anchor it to **Shah Alam** ("Kota Kemuning, Shah Alam"), which does.

---

## 3. Homepage: Chinese (`/zh`)

**Head-term decision.** **医美诊所** is the primary. AC: `医美` → *医美诊所*; `马来西亚医美` → *马来西亚医美诊所*; `新山医美` → *新山医美诊所*; `吉隆坡医美`. Ranking competitors title with it: RegenX "LCP认证医美诊所", DrPlus "新山医美诊所", Medi "医美诊所". **皮肤科** has stronger MY demand (`皮肤科诊所kl / kepong / cheras`, `新山皮肤科诊所推荐`, `看皮肤科要多少钱马来西亚`), but in Chinese it denotes a dermatology department or specialist. Kaiteki's doctors are LCP aesthetic physicians, not dermatologists, so claiming 皮肤科 or 皮肤专科 would misrepresent qualifications (MMC). **Capture that intent with 皮肤医美诊所 and 皮肤问题, and never label Kaiteki 皮肤科.** **美容诊所** is mostly a Taiwan term in AC (台北, 台中), and **美容院** means a beauty salon, so don't use either.

| Slot | Primary keyword | Secondary keywords | Proposed copy | Evidence |
|---|---|---|---|---|
| Title tag (≤60) | 医美诊所 | 吉隆坡医美, 新山医美诊所, 亚庇, Kaiteki | **Kaiteki 皮肤医美诊所｜吉隆坡、雪兰莪、新山、亚庇 9间分店** (33 chars) | AC `吉隆坡医美`, `新山医美诊所`, `马来西亚医美诊所`; legacy title "Kaiteki 皮肤医美". All four regions fit in Chinese, which they don't in EN. |
| Meta description | 医美诊所 | 皮肤问题, 免费咨询, MMC注册医生 | **Kaiteki 皮肤医美诊所在吉隆坡、雪兰莪、新山和亚庇设有9间分店。先由MMC注册医生评估你的皮肤问题，再建议合适的疗程，不推销配套。WhatsApp 预约免费咨询。** (83 chars) | See note ¹. AC `医美咨询要钱吗`. "不推销配套" (*no package push*) addresses the common MY complaint about package selling. |
| H1 | 皮肤医美 | 日式 | **日式细致的皮肤医美护理** | Legacy "日式待客之道", "日本皮肤和医美诊所". 日式 is Kaiteki's differentiator; 医美 carries the head term. |
| Hero sub | 医生评估 | 全马分店 | **不急着推疗程，先由医生看清楚你的皮肤。全马9间分店、{n}位医生，每一个疗程都从评估开始。** | Mirrors EN intent. {n} = `doctors.length` (currently 21; note `DoctorsFeature` hard-codes "20"). |
| Hero CTA / link | 免费咨询 | 医美疗程 | **WhatsApp 预约免费咨询** · **查看医美疗程** | |
| Hero trust line | 分店 | 吉隆坡/新山 | **全马9间分店：吉隆坡、雪兰莪、柔佛、沙巴。找附近的分店** | AC `皮肤诊所附近`, `医美诊所near me`: 附近 is the near-me word. |
| LeaderBadges | (Onda, Oligio X) | | ⚠️ **Do not render "全马最多".** See §8.1. Proposed: **"Onda 仪器 · 全马拥有 X 台"** with a substantiated count. | EN "The most … in Malaysia" is itself a superlative; flagging for the client. |
| ConcernsMosaic H2 | 皮肤问题 | 暗疮, 色斑, 皱纹 | **你想改善哪一个皮肤问题？** | AC `皮肤问题`; legacy nav. |
| ConcernsMosaic sub | | | **告诉我们你的困扰，医生会先评估，再建议是否需要疗程。** | |
| ConcernsMosaic link | | | **查看所有皮肤问题** | |
| TreatmentsMenu H2 | 医美疗程 | 皮秒激光, HIFU, 冷冻溶脂 | **医美疗程：做什么、怎么做** | AC `医美疗程有哪些`. |
| TreatmentsMenu sub | 激光, 提拉紧致 | 水光针, 身体塑形 | **激光、提拉紧致、水光针与身体塑形。每一项都由医生评估，全部非手术。** | AC `水光针`, `冷冻溶脂`, `提拉紧致`. |
| TreatmentsMenu link | | | **查看所有疗程** | |
| HowItWorks kicker + H2 | 第一次做医美 | 免费咨询 | kicker **就诊流程** · H2 **第一次来 Kaiteki，流程是这样的** | AC `医美咨询要钱吗`, `看皮肤科要说什么` show first-visit anxiety. |
| HowItWorks steps | | | **01 免费咨询**：聊一聊，不是推销 · **02 你的疗程计划**：医生评估，清楚说明 · **03 疗程当天**：由同一位医生亲自进行 · **04 疗后护理与跟进**：疗程结束，照顾没有结束 | |
| DoctorsFeature H2 | 医美医生 | LCP认证, MMC注册 | **认识为你看诊的医生** | AC `医美医生推荐`, `医美医生执照`, `lcp 认证`. |
| DoctorsFeature sub | LCP认证 | MMC注册 | **{n}位持有LCP认证、MMC注册的医美医生，分布在全马9间分店。每个疗程页面都写明负责医生，我们宁愿你看资历，而不是看见证。** | |
| DoctorsFeature ledger | | | 医疗团队: **{n}位医美医生** · 资历: **LCP认证 · MMC注册** · link **认识整个医生团队** | |
| WhyKaiteki H2 | 医美诊所 | | **不一样的医美诊所** | |
| WhyKaiteki points | | | **医生主导，始终如一** · **9间分店，同一个标准** · **获仪器与产品品牌认可** | Keep the award line factual (brand performance awards, not efficacy). |
| BranchStrip H2 | 分店 | 吉隆坡/新山/亚庇 | **找一间离你近的分店** | Avoid writing 最近 in a headline, even though it means "nearest" here. A lint will flag it (§8.1). |
| BranchStrip sub | | | **9间分店，遍布吉隆坡、雪兰莪、柔佛和沙巴。每间分店都是同样的医生团队、同样的标准。** | |
| ClosingCta | 免费咨询 | | kicker **免费咨询 · 没有购买压力** · H2 **不知道从哪里开始？** · body **先和医生聊一聊。WhatsApp 预约免费咨询，我们帮你找合适的分店和合适的方案，不必马上决定。** | |
| HomeFaq H2 | 常见问题 | | **常见问题** | DrPlus "您的疑问，一一解答"; RJ "常见问题". |

¹ *Meta description length in Chinese.* The 140–160 character rule is a Latin-script pixel budget. Google truncates CJK snippets at roughly 75–85 characters on desktop (CJK glyphs are about twice as wide). We target **75–85 Chinese characters**, not 140–160. A 150-character Chinese description would be cut roughly in half.

---

## 4. Homepage: Malay (`/ms`)

**Head-term decision.** **klinik estetik** is the primary and **klinik kecantikan** the secondary. *klinik kecantikan* has broader AC (`klinik kecantikan kuala lumpur` is its first suggestion; also *kota kinabalu, shah alam, cheras, johor bahru*), but it is the main Indonesian head term too. `klinik kecantikan terbaik / murah` return only Indonesian cities, and the Firecrawl MY SERP for it was led by Erufu's `/id/` page. Ranking Malaysian clinics title with **klinik estetik** (Dr Chong, DrPlus, Monette Ansley, Medi Clinic, Her Clinic "klinik estetik berdaftar", Dr Diana "LCP KKM KLINIK ESTETIK"). AC `klinik estetik` returns only Malaysian towns (alor setar, kota bharu, kuantan). **klinik kulit** is a strong third (*klinik kulit kuala lumpur, johor bahru, kota kinabalu*). It is acceptable as "klinik kulit & estetik", as Dr Chong and DrPlus use it, but **never "klinik pakar kulit" / "pakar kulit"**: *pakar* means a gazetted specialist (NSR). Note that many Malay speakers type the English: `klinik aesthetic kl` → *aesthetic clinic kl*.

| Slot | Primary keyword | Secondary keywords | Proposed copy | Evidence |
|---|---|---|---|---|
| Title tag (≤60) | klinik estetik | klinik kulit, Malaysia | **Klinik Estetik & Kulit di Malaysia, 9 Cawangan \| Kaiteki** (56 chars) | AC `klinik estetik`, `klinik kulit`; Dr Chong `/ms` title "Klinik Kulit & Estetik Malaysia". |
| Meta description | klinik estetik | klinik kecantikan, KL, Johor Bahru, Kota Kinabalu, konsultasi percuma | **Klinik estetik Kaiteki di KL, Selangor, Johor Bahru dan Kota Kinabalu. Doktor berdaftar MMC menilai kulit anda dahulu. Tempah konsultasi percuma di WhatsApp.** (157 chars) | AC `klinik kecantikan kuala lumpur`, `klinik estetik johor bahru`, `klinik estetik kota kinabalu`, `konsultasi percuma`. |
| H1 | rawatan kulit dan estetik | ala Jepun | **Rawatan kulit dan estetik dengan ketelitian ala Jepun.** | *ala Jepun* is the natural Malay phrase for "Japanese-style". |
| Hero sub | doktor | cawangan | **Kami tak tergesa-gesa cadangkan rawatan. Doktor akan nilai kulit anda dahulu. 9 cawangan di seluruh Malaysia, {n} doktor, dan setiap rawatan bermula dengan penilaian.** | Colloquial *tak* is standard in Malaysian clinic copy. |
| Hero CTA / link | konsultasi percuma | rawatan | **Tempah Konsultasi Percuma** · **Lihat rawatan** | |
| Hero trust line | cawangan | terdekat | **9 cawangan di KL, Selangor, Johor dan Sabah: cari cawangan terdekat** | AC `klinik kecantikan terdekat`, `klinik kulit terdekat`. *Terdekat* (nearest) is locational, not a superlative claim; it's allowed in body copy. |
| LeaderBadges | | | ⚠️ Do not render "paling banyak … di Malaysia" unsubstantiated. Proposed: **"X mesin Onda di Malaysia"** with a verified count. | §8.1 |
| ConcernsMosaic H2 | masalah kulit | jerawat, jeragat, kedutan | **Apa masalah kulit anda?** | DrPlus `/my` "Masalah Kulit". |
| ConcernsMosaic sub | | | **Beritahu kami masalahnya. Doktor akan menilai dahulu sebelum mencadangkan sebarang rawatan.** | |
| ConcernsMosaic link | | | **Lihat semua masalah kulit** | |
| TreatmentsMenu H2 | rawatan estetik | rawatan laser muka | **Rawatan kami, dan cara ia dilakukan** | AC `rawatan estetik`, `rawatan estetik muka`. |
| TreatmentsMenu sub | rawatan laser muka | tegang kulit, skin booster, pelangsingan badan | **Laser muka, tegang kulit, skin booster dan rawatan badan. Setiap pilihan dinilai oleh doktor dan tanpa pembedahan.** | AC `rawatan laser muka`, `rawatan tegang muka`, `skin booster` (English term used as-is), `rawatan pelangsingan badan`. |
| TreatmentsMenu link | | | **Lihat semua rawatan** | |
| HowItWorks kicker + H2 | lawatan pertama | | kicker **Apa yang dijangka** · H2 **Lawatan pertama anda, langkah demi langkah** | |
| HowItWorks steps | | | **01 Konsultasi Percuma**: berbual, bukan jualan · **02 Pelan Rawatan Anda**: dinilai doktor, diterangkan sepenuhnya · **03 Hari Rawatan**: dikendalikan doktor dari mula hingga akhir · **04 Penjagaan Selepas Rawatan**: kami tetap ikuti perkembangan anda | AC `penjagaan selepas laser muka`, `rawatan selepas laser muka`. |
| DoctorsFeature H2 | doktor estetik | LCP, MMC | **Kenali doktor yang merawat anda** | AC `lcp certified doctor`, `lcp certified aesthetic clinic malaysia`, `semak doktor mmc`. |
| DoctorsFeature sub | doktor bertauliah LCP | berdaftar MMC | **{n} doktor estetik bertauliah LCP dan berdaftar MMC di 9 cawangan. Kami namakan doktor di setiap halaman rawatan kerana kami mahu anda menilai kelayakan, bukan testimoni.** | |
| DoctorsFeature ledger | | | Pasukan perubatan: **{n} doktor estetik** · Kelayakan: **Bertauliah LCP · Berdaftar MMC** · link **Kenali semua doktor kami** | |
| WhyKaiteki H2 | klinik estetik | | **Klinik estetik yang berbeza** | |
| WhyKaiteki points | | | **Sentiasa dikendalikan doktor** · **Sembilan cawangan, satu standard** · **Diiktiraf oleh jenama dalam bidang ini** | |
| BranchStrip H2 | cawangan terdekat | klinik estetik + bandar | **Cari cawangan terdekat anda** | AC `klinik kecantikan terdekat`. |
| BranchStrip sub | | | **Sembilan lokasi di KL, Selangor, Johor dan Sabah. Doktor yang sama, protokol yang sama di setiap cawangan.** | |
| ClosingCta | konsultasi percuma | | kicker **Konsultasi percuma · Tiada paksaan** · H2 **Tak pasti nak mula dari mana?** · body **Berbincang dengan doktor dahulu. WhatsApp kami untuk konsultasi percuma. Kami bantu anda cari cawangan dan pelan yang sesuai, tanpa paksaan.** | |
| HomeFaq H2 | soalan lazim | | **Soalan Lazim** | Clique `/ms`, Medi `/ms` "Soalan Lazim". |

---

## 5. Concerns and treatment categories the homepage shows

**Which items are in scope:** the hero hotspots (`HeroFace`: fine lines, dark eye circles, pigmentation, enlarged pores, face contouring), the `ConcernsMosaic` six (acne, body slimming, fine lines & wrinkles, tattoo removal, hair loss, face contouring), the footer's first 8 concerns (acne, acne scars, pigmentation, melasma, enlarged pores, fine lines, dark eye circles, face contouring), the `TreatmentsMenu` six (Pico Laser, HIFU, Ultherapy, Radiofrequency, RF Microneedling, Fat Freezing), the footer's first 8 treatments (those six plus Skin Booster and Botulinum Toxin), and their categories (Lasers, Lifting & Tightening, Body & Slimming, Injectables). We also include Face Lifting and Aging, which the concern pages cross-link heavily.

### 5.1 Chinese

| English | zh display name | Primary query form | Notes (evidence) |
|---|---|---|---|
| Acne | **暗疮痘痘** | 暗疮 / 痘痘 | AC `暗疮` → *暗疮是什么, 暗疮怎么治, 暗疮针*; `痘痘` strong but dominated by products (痘痘贴). 暗疮 is the standard MY/HK term; 痤疮 (legacy) is clinical and has thin AC. Use both in copy. ⚠️ Avoid "暗疮针" in copy (injectable steroid; drug-advertising risk). |
| Acne scars | **痘疤与痘坑** | 痘疤, 痘坑, 痘印 | AC `痘疤` → *痘疤怎么消除, 痘疤修复, 痘疤有救吗*; `痘坑` → *痘坑能修复吗*; `暗疮印`. 痘印 = flat marks, 痘坑/凹洞 = pitted scars. The concern page should explain the difference. |
| Pigmentation | **色斑** | 色斑, 祛斑, 打斑 | AC `色斑` → *色斑怎么去除, 色斑成因*; `激光祛斑` → *价格, 多久恢复, 后反黑*; `打斑` → *打斑费用, 打斑后反黑*. 打斑 is the colloquial MY/HK verb. 色素沉着 is clinical and can go in body text. |
| Melasma | **黄褐斑** | 黄褐斑 | AC `黄褐斑` → *黄褐斑怎么去除, 黄褐斑能去掉吗, 黄褐斑治疗*. Don't use 肝斑 (Taiwan). |
| Enlarged pores | **毛孔粗大** | 毛孔粗大 | AC `毛孔粗大` → *怎么办, 怎么改善, 可以改善吗*; `缩毛孔 医美`. |
| Fine lines & wrinkles | **皱纹与细纹** | 皱纹, 法令纹, 抬头纹 | AC `皱纹 马来文` (a MY signal); `法令纹怎么消除`; `抬头纹肉毒几u`. Sub-sections by zone (法令纹 / 抬头纹 / 鱼尾纹) match how people search. |
| Dark eye circles | **黑眼圈** | 黑眼圈 | AC `黑眼圈` → *黑眼圈怎么消除, 黑眼圈马来文* (MY signal); `去黑眼圈医美`. |
| Face contouring | **脸型轮廓（V脸）** | 瘦脸, V脸 | AC `瘦脸` → *瘦脸针, 瘦脸针多少钱*; `v脸`; `面部轮廓` is thin (makeup). The legacy site used 面部雕塑. ⚠️ Avoid "瘦脸针" in our copy (it names a prescription toxin as a product; see §8). |
| Face lifting | **提拉紧致** | 提拉紧致, 脸部提升 | AC `提拉紧致` (beauty devices dominate); `脸部提升`; `拉提` is Taiwanese and collides with 拉提亚斯. 提拉紧致 reads naturally to MY readers. |
| Aging | **抗衰老** | 抗衰老, 抗衰老医美 | AC `抗衰老医美`, `抗衰老诊所`. |
| Body slimming | **瘦身塑形** | 瘦身, 冷冻溶脂 | Legacy "瘦身和塑形". AC `瘦身` is product/diet-led; the clinic intent sits on device terms (`冷冻溶脂`, `酷塑`). Avoid 减肥 (weight-loss claim; 减肥中心 = slimming centres). |
| Hair loss | **脱发** | 脱发, 掉发 | AC `脱发` → *脱发治疗, 脱发怎么办*; `掉发`/`掉头发` similar. 脱发 for display, 掉头发 in body copy. |
| Tattoo removal | **洗纹身** | 洗纹身 | AC `洗纹身` → *会留疤吗, 多少钱, 痛吗*; `去纹身 激光`, `pico 去纹身`. The legacy 去除纹身 has no AC. ⚠️ Answer "痛吗" honestly; never write "无痛" (painless is banned). |
| *Category* Lasers | **激光疗程** | 激光 | Use 激光 throughout, never 雷射 (TW). |
| *Category* Lifting & Tightening | **提拉紧致** | 提拉紧致 | As above. |
| *Category* Body & Slimming | **身体塑形** | 冷冻溶脂, 瘦身 | |
| *Category* Injectables | **注射疗程** | 水光针, 肉毒杆菌 | Medi Clinic "产品与注射疗程". |
| Pico Laser | **皮秒激光（Pico Laser）** | 皮秒激光, 皮秒, pico laser | AC `皮秒` → *皮秒激光, 皮秒激光价格, 皮秒激光多久做一次*; `pico laser kl` (English, zh session). Malaysian Chinese competitors title "Pico 皮秒激光" (Medi, Premier, Pixel). Keep both. |
| HIFU | **HIFU 超声波提拉** | HIFU | AC `hifu` → *hifu treatment是什么, hifu 中文, hifu 多久做一次*. People search the acronym. ⚠️ Do **not** use 海扶刀 (in MY that's the fibroid procedure: `海扶刀马来西亚`, `海扶刀子宫肌瘤`). 超声刀 is mainland slang and also covers Ultherapy, so mention it in body copy only. |
| Ultherapy | **Ultherapy** | ultherapy | AC `ultherapy` → *ultherapy prime, ultherapy 中文, ultherapy 效果*. Brand name stays Latin. |
| Radiofrequency | **射频（RF）** | 射频 | AC `射频` is dominated by 射频消融 (cardiac ablation), so always pair it: "射频紧致" / "RF". |
| RF Microneedling | **射频微针** | 射频微针, 黄金微针 | AC `射频微针`; `黄金微针` → ***黄金微针马来西亚价钱*** (MY colloquial name). Use 黄金微针 as a secondary in body copy. |
| Fat Freezing | **冷冻溶脂** | 冷冻溶脂 | AC `冷冻溶脂` → *价格, 有效吗, 后遗症*; 酷塑 = CoolSculpting brand. |
| Skin Booster | **水光针（Skin Booster）** | 水光针, skin booster | AC `水光针` → *效果, 多少钱, 多久打一次*; `skin booster是什么`. Rejuran: AC `rejuran malaysia`, `re 居然`. Keep "Rejuran" Latin and maybe gloss as 婴儿针 (AC `婴儿针`), pending client OK. |
| Botulinum Toxin | **肉毒杆菌素** | 肉毒杆菌 | AC `肉毒杆菌` → *注射, 副作用, 多久打一次*; `botox kl`, `botox 华语`. ⚠️ Never "Botox" (brand-name prescription drug; MAB). |

### 5.2 Malay

| English | ms display name | Primary query form | Notes (evidence) |
|---|---|---|---|
| Acne | **Jerawat** | rawatan jerawat | AC `rawatan jerawat` → *jerawat batu, muka, hormon, near me*. Malay-specific subtypes worth H2s on the concern page: *jerawat batu, jerawat pasir, jerawat hormon*. |
| Acne scars | **Parut Jerawat** | parut jerawat, parut jerawat berlubang | AC `parut jerawat` → *hitam, berlubang, merah, boleh hilang ke*; `bekas jerawat`, `lubang jerawat` (Indonesian-leaning: *bisa hilang*); `kos rawatan parut jerawat`. ⚠️ Don't write "jerawat bopeng" (Indonesian). Note: Dr Wee's `/ms` labels a page "Jerawat dan Jeragat", a machine-translation error (*jeragat* is melasma/freckles). That's the trap we're avoiding. |
| Pigmentation | **Pigmentasi** | pigmentasi muka, tompok hitam di muka | AC `pigmentasi` → *pigmentasi kulit, pigmentasi muka, pigmentasi vs jeragat*; `tompok hitam di muka`. Avoid "flek hitam" (Indonesian, seen in AC `laser muka flek hitam`). |
| Melasma | **Jeragat (Melasma)** | jeragat | AC `jeragat` → *jeragat muka, jeragat melasma, jeragat muka punca*; `rawatan laser jeragat`, `laser muka jeragat`. *Jeragat* is the everyday Malaysian word. Keep "melasma" in brackets for the clinical term. |
| Enlarged pores | **Liang Pori Besar** | liang roma besar, liang pori | AC `liang roma muka besar`; *pori besar* is Indonesian-led (*karena apa, pakai kandungan apa*). Medi Clinic `/ms` and Dr Wee use "liang pori". |
| Fine lines & wrinkles | **Garis Halus & Kedutan** | garis halus, kedutan muka | ⚠️ In Indonesian **"kedutan" means twitching** (AC `kedutan` → *kedutan mata kiri atas menurut primbon*). Always pair it with *muka* or *garis halus*. AC `garis halus di muka / bawah mata / di dahi`. |
| Dark eye circles | **Lingkaran Gelap Bawah Mata** | lingkaran gelap bawah mata | AC → *rawatan lingkaran gelap bawah mata, punca …*; *lingkaran hitam* drifts Indonesian; *mata panda* is colloquial (use it in body copy). |
| Face contouring | **Kontur Muka (V-Shape)** | muka v shape | AC `muka v shape` → *cara buat muka v shape*; `kontur muka` is makeup-led. DrPlus `/my` "Kontur Wajah" (*wajah* is acceptable in MY but reads more Indonesian, so prefer *muka*). |
| Face lifting | **Tegang & Angkat Muka** | rawatan tegang muka, muka kendur | AC `rawatan tegang muka`, `rawatan muka kendur`, `tegang kulit muka`. ⚠️ "angkat muka" alone is an idiom (*maksud, peribahasa*), so always pair it with *tegang*. |
| Aging | **Anti-Penuaan** | rawatan anti penuaan | AC `rawatan anti penuaan`. DrPlus "Anti-Penuaan & Kolagen". |
| Body slimming | **Pelangsingan Badan** | rawatan pelangsingan badan, rawatan kurus badan | AC `rawatan pelangsingan badan`, `rawatan kuruskan badan`, `buang lemak perut treatment`, `klinik buang lemak perut`. |
| Hair loss | **Rambut Gugur** | rawatan rambut gugur | AC `rawatan rambut gugur` → *perempuan, teruk, lelaki, near me*; `rambut gugur teruk`. |
| Tattoo removal | **Buang Tatu** | buang tatu, laser buang tatu | AC `buang tatu` → *harga buang tatu pakai laser, klinik buang tatu, kos buang tatu, hukum buang tatu*. A Malay-specific FAQ opportunity: *hukum* (religious ruling) is asked; route it to a doctor or an external authority, don't rule on it ourselves. |
| *Category* Lasers | **Laser** | rawatan laser muka | AC `rawatan laser muka` → *harga, near me, untuk jeragat, untuk parut*. |
| *Category* Lifting & Tightening | **Tegang & Angkat Kulit** | rawatan tegang muka | Dr Chong `/ms` "Menegangkan Kulit". |
| *Category* Body & Slimming | **Badan & Pelangsingan** | rawatan pelangsingan badan | |
| *Category* Injectables | **Rawatan Suntikan** | suntikan | Medi `/ms` "Produk & Rawatan Suntikan". |
| Pico Laser | **Pico Laser** | pico laser, harga pico laser malaysia | AC `pico laser harga` (Indonesian chains dominate); MY SERP: klinikhana "Harga Pico Laser di Malaysia", RJ `/ms` "Pico Laser di Malaysia: … Kos". Write "harga/kos … di Malaysia", never bare "harga". |
| HIFU | **HIFU** | hifu, hifu malaysia | AC `hifu malaysia` → *price, jb*; `hifu berapa kali`. The English term is what people type. |
| Ultherapy | **Ultherapy** | ultherapy | AC `ultherapy harga` is Indonesian-dominated. Target "ultherapy malaysia". |
| Radiofrequency | **Radiofrekuensi (RF)** | rf | No Malay AC for `radiofrequency muka`. Keep "RF" prominent. |
| RF Microneedling | **RF Microneedling** | rf microneedling malaysia | AC `rf microneedling` → *price malaysia, malaysia*. English term used as-is. |
| Fat Freezing | **Fat Freezing (Kriolipolisis)** | fat freezing | AC `fat freezing` → ***fat freezing johor***, *near me, cost*; `coolsculpting malaysia price`. Dr Chong `/ms` "Rawatan Cryolipolysis". |
| Skin Booster | **Skin Booster** | skin booster | AC `skin booster` → *injection, untuk apa, pdrn, dna salmon*. ⚠️ Avoid "paling bagus" in copy (superlative; it appears in AC). |
| Botulinum Toxin | **Toksin Botulinum** | botox (demand), toksin botulinum | AC `botox` → *botox rahang, botox wajah*; Dr Chong `/ms` "Rawatan BTA". ⚠️ Never write "Botox" (brand-name prescription drug). Note the demand: `botox rahang` (jaw slimming) is a MY-specific angle. |

---

## 6. Homepage FAQ: localised questions (AEO)

Each question is phrased the way people actually type or ask it, not as a translation. Answers carry the EN meaning, rewritten in the target language's register; they should be drafted from the EN answers in `components/HomeFaq.tsx` by the bilingual reviewer, keeping the same no-claims stance.

| # | English | zh question (as Malaysians ask) | zh evidence | ms question (as Malaysians ask) | ms evidence |
|---|---|---|---|---|---|
| 1 | Is the consultation really free? | **医美咨询要钱吗？Kaiteki 的咨询真的免费吗？** | AC `医美咨询要钱吗` (exact). | **Konsultasi di Kaiteki betul-betul percuma ke?** | AC `konsultasi percuma`; the *…ke?* question tag is natural Malaysian. |
| 2 | Do I need to know which treatment I want before booking? | **不知道自己适合什么疗程，可以先来咨询吗？** | AC `医美疗程有哪些`, `医美推荐项目`; DrPlus "不确定哪种疗程适合您？" | **Perlu ke tahu nak buat rawatan apa sebelum datang?** | Concern-led AC (*rawatan muka berjerawat, rawatan kulit muka kusam*) shows people start from the problem. |
| 3 | Who performs the treatments at Kaiteki? | **Kaiteki 的疗程是医生亲自做，还是美容师做？** | AC `医美医生执照`, `医美医生资格`; DrPlus "我会见到真正的医生吗？" | **Siapa yang buat rawatan di Kaiteki, doktor atau terapis?** | AC `semak doktor mmc`, `lcp certified doctor`. |
| 4 | Are your treatments safe for darker skin tones? | **亚洲人或肤色较深，做激光会反黑吗？** | AC `激光祛斑后反黑期间`, `打斑后反黑`, `雷射去斑反黑`: the real worry is **反黑** (rebound darkening), not "dark skin". ⚠️ The answer must not say "安全" categorically. | **Laser sesuai ke untuk kulit sawo matang atau gelap?** | AC `laser kulit gelap`; *sawo matang* is the everyday Malay word for brown skin. ⚠️ Don't answer "selamat" categorically. |
| 5 | How do I know which branch to visit? | **Kaiteki 在吉隆坡、新山、亚庇有哪些分店？去哪一间比较方便？** | AC `新山医美诊所`, `kaiteki cheras / jb / ss2`. | **Kaiteki ada cawangan di mana? Mana satu paling dekat dengan saya?** | AC `klinik kecantikan terdekat`. (*paling dekat* is locational, not a claim; fine inside a question.) |
| 6 | How much do treatments cost? | **做医美要多少钱？价钱怎么算？** | AC `医美多少钱`, `看皮肤科要多少钱马来西亚`, `皮秒价钱`, `黄金微针马来西亚价钱`. Malaysians write **价钱**, Taiwan/mainland write 价格; use 价钱 in copy and 价格 once in body text for coverage. | **Berapa kos rawatan di Kaiteki?** | AC `kos rawatan laser muka`, `kos rawatan parut jerawat`. Use **kos** for the question; bare *harga* pulls Indonesian SERPs, so use "harga … di Malaysia" in body copy. |
| 7 | Is there any downtime after treatment? | **做完疗程有恢复期吗？要休息几天？** | AC `医美恢复期`, `皮秒恢复期多久`, `激光祛斑多久恢复`. | **Ada downtime atau pantang selepas rawatan?** | AC `pico laser ada downtime`, `downtime in malay`, ***pantang selepas laser muka***, *pantang larang selepas laser muka*. **pantang** is a uniquely Malaysian framing (post-treatment restrictions) with clear demand. |
| 8 | How many sessions will I need? | **疗程一般要做几次？多久做一次？** | AC `皮秒几次有效`, `皮秒激光多久做一次`, `医美多久做一次`, `hifu 多久做一次`. ⚠️ Don't promise "几次见效". | **Perlu buat berapa sesi? Berapa kerap?** | AC `hifu berapa kali`, `pico laser downtime berapa lama`. |
| 9 | Can I combine different treatments? | **不同的医美疗程可以一起做吗？** | No direct AC. Adjacent comparisons exist: `水光针和微针的区别`, `超声刀和热玛吉的区别`. | **Boleh ke gabungkan beberapa rawatan sekali gus?** | No direct AC; phrasing follows the *boleh ke* pattern seen in AC (`boleh ke buat …`). |
| 10 | What if a doctor recommends I don't need treatment? | **如果医生说我不需要做疗程，怎么办？** | No AC (trust question). Keep it: it is the brand's differentiator. | **Kalau doktor kata saya tak perlu rawatan, macam mana?** | No AC; natural colloquial register. |

**Locale-only FAQ candidates** (demand exists in one language only; needs client and compliance sign-off before adding):

- **ms:** *"Rawatan estetik halal atau tidak?"* AC `rawatan estetik halal atau tidak`, `hukum rawatan laser muka`, `hukum buang tatu`. This is a real Malay-market question. Answer it factually (ingredients and product sourcing, and whether an alternative exists) and point to JAKIM/religious authorities for rulings. Don't issue a ruling.
- **zh:** *"做医美可以 claim 保险吗？"* AC `看皮肤科可以claim保险吗`. The answer is usually no for cosmetic care, and that's worth stating plainly.

---

## 7. Terms we deliberately avoid

### 7.1 Chinese

| Term | Why |
|---|---|
| 最好 / 最佳 / 第一 / No.1 / 顶尖 / 全马唯一 / 全马最多 / 领先 | Superlatives and unsubstantiated comparatives (MAB 3/2023; `docs/02` §8.1). Competitors use them (RJ "最佳美容诊所", Premier "顶尖美容诊所前三名", Dr Chong "全马唯一上市医美集团"); copying them adds legal risk. **Demand exists** (`医美诊所推荐`, `医美推荐`). Target that demand through relevance, and never use the word in copy. |
| 最便宜 / 特价 / 优惠价 in page copy | Price-led inducement; promos need their own MAB approval. |
| 保证 / 100% / 永久 / 根治 / 彻底去除 / 一次见效 / 立即见效 | Guarantee and cure claims. Use 改善, 淡化 or 评估 instead, framed as options, never outcomes. |
| 无痛 / 零风险 / 无副作用 / 安全有效 | Banned claims ("painless / risk-free / no side effects"). AC asks `洗纹身痛吗` and `皮秒副作用`; answer honestly. |
| 前后对比 / 见证 / 客户心声 | Before/after and testimonials (ADR-0001 limits B/A to concern pages under conditions; never on the homepage). AC `热玛吉前后对比` shows demand; still don't use it. |
| 皮肤科 / 皮肤专科 / 皮肤专科医生 (as a label for Kaiteki) | Implies dermatology specialist status the doctors don't hold (MMC misrepresentation). Strong demand: `皮肤科诊所kl`, `新山皮肤科诊所推荐`. **Target via relevance** (皮肤医美, 皮肤问题). |
| 整形 / 整容 / 微整形 | Implies surgery; Kaiteki is non-surgical. 微整形 is common in MY (Premier, Erufu) but blurs the line. Prefer 非手术医美. |
| 瘦脸针 / 美白针 / 暗疮针 / Botox | Name prescription injectables as consumer products (drug advertising). 美白针 (IV glutathione) has been the subject of KKM warnings. Demand is high (`瘦脸针多少钱`, `美白针多少钱马来西亚`); address it only on doctor-reviewed treatment pages with neutral names (肉毒杆菌素). |
| 雷射 / 拉提 / 肝斑 / 部落格 | Not compliance: Taiwan usage that reads foreign to Malaysian Chinese. Use 激光 / 提拉 / 黄褐斑 / 医美知识. |
| 海扶刀 | Collides with the HIFU fibroid procedure (`海扶刀马来西亚`, `海扶刀子宫肌瘤`). |
| 美容院 / 美容中心 | Means a beauty salon (non-medical); undermines the doctor-led positioning. |

### 7.2 Malay

| Term | Why |
|---|---|
| terbaik / paling bagus / nombor 1 / No.1 / terkemuka / pertama | Superlatives (MAB). **Demand exists** (`klinik kecantikan terbaik`, though it's Indonesian-dominated; `skin booster paling bagus`; Dr Chong `/ms` H1 "Klinik Estetik Perubatan Terbaik"). Target via relevance; never use the word in copy. |
| termurah / murah / harga promosi in page copy | Price inducement. AC `klinik kecantikan murah` returns only Indonesian cities anyway. |
| dijamin / jaminan / kekal / hilang terus / hilang sepenuhnya / berkesan 100% | Guarantee, permanence and cure claims. AC asks `parut jerawat boleh hilang ke`; answer with what *may* improve, decided at assessment. |
| tanpa sakit / tiada kesan sampingan / selamat 100% | Banned claims (painless, no side effects, risk-free). |
| sebelum & selepas / testimoni | Before/after and testimonials (homepage: never). |
| pakar / klinik pakar kulit / pakar kulit | *Pakar* = NSR-gazetted specialist. Using it misrepresents LCP aesthetic doctors. Demand is strong (`klinik pakar kulit kuala lumpur`, `pakar kulit near me`); target via *klinik kulit & estetik*. |
| Botox / suntikan putih / glutathione | Brand-name prescription drug; whitening drips are subject to KKM warnings. |
| Indonesian forms: **perawatan, biaya, dokter, gratis, wajah (as the default), pori, karena, bisa, flek hitam, bopeng, jerawat bopeng, klinik estetika, konsultasi gratis** | Not compliance: Indonesian. Using them pulls our pages towards Indonesian SERPs and reads foreign. Malaysian equivalents: **rawatan, kos/harga, doktor, percuma, muka, liang pori/liang roma, kerana, boleh, tompok hitam/jeragat, parut berlubang, klinik estetik, konsultasi percuma.** |
| kedutan (alone) | Ambiguous (Indonesian "twitch"). Always write *kedutan muka* or *garis halus & kedutan*. |
| angkat muka (alone) | Idiom (to raise one's face/pride). Use *tegang & angkat muka*. |
| temujanji (for the CTA) | Reads as a government-counter booking (AC: JPN, Puspakom, klinik kesihatan). Use *tempah konsultasi*. |
| harga [treatment] (bare, in titles) | Bare `harga X` autocompletes to Indonesian chains (ZAP, Erha, Natasha, Airin). Always write *harga/kos X di Malaysia*. |

---

## 8. Flags for the client / dev

1. **LeaderBadges superlative (existing EN).** "The most Onda machines in Malaysia" is a superlative comparative claim. It may be substantiable as a fleet count, but under MAB it needs evidence on file and probably approval. Translating it as 全马最多 / paling banyak doubles the exposure. Recommend a count-based phrasing in all three languages.
2. **Doctor count mismatch.** `DoctorsFeature` hard-codes "20 LCP-certified…" while `doctors.length` is 21. Use `{n}` in every locale.
3. **Meta-description length in zh.** Use 75–85 CJK characters, not 140–160 (§3 note ¹). The `/zh` meta lint should count width, not characters.
4. **Lint coverage.** Extend the banned-words lint to the zh and ms lists in §7 (regex over locale content and meta) before any locale URL goes live, as `docs/15` 4.4 requires.
5. **Native review required.** Every proposed string here is a keyword-led draft. The bilingual reviewers named for `docs/15` 4.4 must sign off on register and on the Chinese place-name renderings in §2.1.
6. **Out of scope this round:** concern, treatment, location and doctor page bodies; blog. The concern and treatment rows in §5 give each page its primary query form and will seed those rounds.
