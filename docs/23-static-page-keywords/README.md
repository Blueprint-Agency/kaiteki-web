# 23. Doctors, Our Story, Products and Privacy in Chinese and Malay: keyword log

**Round 6 of the trilingual rollout** (2026-10-20). Covers `/doctors` and the 21 doctor profiles, `/our-story`, `/products` and `/privacy`. Same rule as rounds 2 to 5 (`docs/19-concern-keywords/README.md`): check the keyword first; where autocomplete shows demand, phrase the string around the real query; where it shows none, translate directly.

The blog (169 posts) is not in this round; see "Not translated" below.

## Files

| What | Where |
|---|---|
| Template strings, all four page types | `content/i18n/static-pages/{en,zh,ms}.json` (en.json is the English the pages render) |
| Per-doctor role, bio, title, description | `content/i18n/doctors/{zh,ms}.json`; English snapshot `doctors/_en.json` |
| Per-product category, summary, chips, highlights | `content/i18n/products/{zh,ms}.json`; English snapshot `products/_en.json` |
| Loader | `content/i18n/static-pages.ts` |
| Shared page bodies | `components/DoctorPages.tsx`, `OurStory.tsx`, `ProductsHub.tsx`, `PrivacyPage.tsx` |
| Gate | `pnpm validate:locale` loads all of the above: L-01 completeness against English, L-02 to L-05, L-06 array lengths, and L-10 when a doctor's or product's English changes after translation |

## Never translated

- **Doctors' names, credentials and MMC numbers.** They are registrations, printed as registered.
- **Product names, brands and RM prices.**
- **The PDPA notice.** It is a legal text the clinic issued in English and Bahasa Malaysia. `/ms/privacy` shows the clinic's own Malay text first; `/zh/privacy` shows both official texts under a short Chinese note saying there is no Chinese version and English prevails (as the notice itself says).
- Publication names, institution names (a common Chinese name is added in brackets where certain), device brands, かいてき.

## Method

Google Autocomplete, `gl=my`, `hl=zh-CN` and `hl=ms`, 38 probes. Same skew filters as `docs/18` §1.

## Findings and decisions

| Page | Probe | Result | Decision |
|---|---|---|---|
| Doctors hub (zh) | 医美医生, 医美 医生 | `医美医生`, `医美医生推荐` (the 执照/薪水 forms are HK/jobs noise) | KEYWORD: title **Kaiteki 医美医生团队｜MMC注册医生**; roles use 医美医生 |
| Doctors hub (zh) | 吉隆坡/新山 医美医生, kaiteki 医生 | empty | no city or brand variant invented |
| Doctors hub (ms) | doktor estetik malaysia | returns (with *pertubuhan doktor estetik berdaftar*) | KEYWORD: **doktor estetik** + *berdaftar MMC* |
| Doctors hub (ms) | doktor kecantikan, doktor kulit | return, but beside *doktor pakar kecantikan* and Indonesian *dokter kulit* | **Not used**: *pakar* implies a specialist, and *doktor kulit* reads as a dermatologist |
| Our Story (zh) | kaiteki 意思 | returns itself, plus 快適 意思, かいてき 意思 | KEYWORD: title **Kaiteki 是什么意思？我们的故事**, and the description opens with 快適 |
| Our Story (ms) | kaiteki maksud | empty | DIRECT: *Kaiteki bermaksud selesa* |
| Products (zh) | 医美 护肤品 | `医美护肤品牌`, `医美护肤品专门店` | KEYWORD: **医美护肤品** in the title |
| Products (zh) | heliocare 防晒, 口服防晒 | heliocare 防晒丸 / 胶囊 / 口服防晒; 口服防晒有用吗 | KEYWORD: Heliocare's oral product category is **口服防晒** |
| Products (ms) | produk penjagaan kulit | returns (with *jenama produk penjagaan kulit*) | KEYWORD in the title |
| Products (ms) | sunblock makan | returns | used in the Heliocare oral product's copy |
| Products (zh/ms) | 诊所 护肤品, produk penjagaan kulit klinik, 医美护肤品推荐 | empty | not used |

## Compliance points raised during translation (for the client)

These are in the **English** copy too; the translations keep the meaning and do not add to it.

1. **"Dermatologist-formulated"** and **"MOH-approved"** on `/products`: both are claims the clinic must be able to evidence (for MOH, a product notification number). If not, remove them in English and both translations.
2. **Supplement benefit wording** (Heliocare D Plus, Heliocare Luminance, STANMNA, Lucent) may need KKM clearance before it can be advertised.
3. **"A patient's acne-treatment experience"** in the press list links to a patient's story, close to a testimonial under MAB rules.
4. **"Safe and effective results"** in three bios was translated without the promise (以安全为前提 / *mengutamakan keselamatan*).
5. **Doctor facts to confirm**: the hub says 20 doctors and the data has 21; several descriptions list LCP or MAC that the bios never mention; Dr Chang is a Wellness Physician whose English description calls him an aesthetic physician.

## Sign-off

The 25 entries are drafts naming **Dr Chew** (client, 2026-10-17: Dr Chew reviews every page without an English reviewer). Profiles and the hubs show no reviewer byline. A doctor may prefer to read their own profile; if so, put their slug in that entry's `doctor` field.

## Not translated: the blog

169 posts. Each is a medical article, so each needs the same keyword check and a doctor's read before it can go live, and most of the back catalogue is low-traffic legacy content. Proposed approach: translate the posts with real search traffic first, a batch at a time, in priority order from Search Console.
