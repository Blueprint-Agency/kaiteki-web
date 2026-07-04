# 01 — Legacy Site Audit (kaiteki.my, pre-rebuild)

> **Purpose:** A faithful record of the *old* Kaiteki website as it exists today, plus the migration-critical findings (URL inventory, redirects, SEO debt) needed to rebuild on Next.js without losing rankings.
> **Source of truth on disk:** `well-known/` (the legacy cPanel/Apache document root, git-ignored — see `.gitignore`).
> **Status:** Reference. Proposals for the *new* structure live in `docs/04-information-architecture.md` (Phase 2).

---

## 0. Snapshot

| | |
|---|---|
| **Brand** | Kaiteki Skin Aesthetic Clinic (Kaiteki® Cosmeceuticals) |
| **Domain** | `https://kaiteki.my` (canonical host = **non-www**) |
| **Business** | Malaysian medical-aesthetic / beauty clinic chain — **9 branches** (KL, Selangor, Johor, Sabah) |
| **Tech (main site)** | Static HTML + light PHP (PHPMailer contact forms). **No CMS, no database.** cPanel/Apache, PHP 8.1 (`ea-php81`) |
| **Blog** | Separate WordPress install on `blog.kaiteki.my` (a stale backup sits in `well-known/back/blog/`) |
| **Conversion model** | **WhatsApp-only** — every CTA opens a pre-filled chat to **+60 10-381 8170** ("Book a FREE consultation"). No booking engine, no checkout. |
| **Languages** | English (root), Chinese (`/cn/`, full mirror), Singapore (`/sg/`, reduced/standalone), `/indonesia/` (empty placeholder) |
| **Social** | Instagram `@kaiteki.my`, Facebook `mykaiteki` |
| **Indexed URLs** | ~80 in `sitemap.xml` (root + `/cn/` only; `/sg/` not in sitemap) |

---

## 1. Page Map (English / root)

The main nav groups pages into ~7 buckets.

### 1.1 Home & Core
| Page | Type | Purpose |
|------|------|---------|
| `index.html` | Homepage | Hero, brand intro, treatment highlights, branch list, blog-category links. Central hub. Language switch (EN / 中文) + Contact in top bar. |
| `aboutus.html` | Info / EEAT | "About Kaiteki" story + **Our Doctors** (`#Doctors` anchor). Brand/credibility page. |
| `our-clinics.php` | Contact / locator | Master "Contact Us" — lists all 9 branches + contact form (`#contactform`). Primary contact landing. |
| `services.html` | Services index | "Others" — catch-all for treatments not in the main menu. |
| `promo.html` | Marketing | Current promotions / offers. |
| `privacy.html` | Legal | Notice of privacy practices. |

### 1.2 Concern "Hub" pages (problem-oriented landings)
| Page | Concern area |
|------|--------------|
| `skincare.html` | Top-level "Skin Care" overview (menu landing). |
| `skin.html` | **Skin** hub + anchors `#Birthmark`, `#VascularLesions`, `#ExcessiveSweating`, `#DermatologicalProblems`. |
| `facial-treatment-malaysia.html` | **Face** hub. |
| `hair.html` | **Hair & Body** hub (incl. `#HairLoss`). |

### 1.3 Skin concern pages
`acne.html` · `aging.html` · `pigmentation.html` · `pores.html` · `tattoo-removal.html` · `dark-eye-circle-treatment.html` · `exosome-therapy.html`

### 1.4 Face concern pages
`face-contour-treatment.html` · `face-lifting-treatment.html` · `fine-lines-and-wrinkles-treatment.html`

### 1.5 Body / Hair
`slimming-treatment.html` · `hair.html` (also a hub)

### 1.6 Treatment / machine ("Our Services") pages
`bio-stimulator.html` · `dermav.html` · `fat-freezing.html` · `coolsculpting.html`¹ · `fotona-4d.html` · `hifu.html` · `microneedling.html` · `onda.html` · `pico-laser-treatment.html` · `radiofrequency.html` · `skinbooster.html` · `ultherapy.html`
¹ `coolsculpting.html` exists but is **not in the main menu/sitemap**.

### 1.7 Branch / location pages (9 clinics — all `.php` with contact form)
| Page | Branch |
|------|--------|
| `mont-kiara.php` | ARCORIS Plaza, Mont Kiara (KL) |
| `cheras.php` | Cheras, Kuala Lumpur |
| `kuala-lumpur.php` | Jalil Link 2, Bukit Jalil |
| `fourseasons-kl.php` | Shoppes @ Four Seasons (KL) |
| `petaling-jaya.php` | The Hub SS2, Petaling Jaya |
| `shah-alam.php` | Seksyen 31, Kota Kemuning (Shah Alam) |
| `johor.php` | Kota Southkey, Johor |
| `johor-pelangi-avenue.php` | Pelangi Avenue, Johor |
| `kota-kinabalu.php` | Kota Kinabalu, Sabah |

### 1.8 Seasonal / campaign pages
`anniversary.html` (old) · `6th-anniversary.html` (current) · `6th-anniversary2.html` (variant) · `component-colors.html` (internal style ref — **not public**)

---

## 2. Full URL Inventory (from `sitemap.xml`)

The sitemap declares **~80 canonical URLs** across root + `/cn/`. This is the indexation baseline that must be preserved (via 301s) during migration.

**Root (EN) — 42 URLs:** `/`, `/index.html`, `/our-clinics.php`, `/aboutus.html`, `/skincare.html`, `/skin.html`, `/acne.html`, `/aging.html`, `/exosome-therapy.html`, `/pigmentation.html`, `/ultherapy.html`, `/pores.html`, `/tattoo-removal.html`, `/facial-treatment-malaysia.html`, `/dark-eye-circle-treatment.html`, `/face-contour-treatment.html`, `/face-lifting-treatment.html`, `/fine-lines-and-wrinkles-treatment.html`, `/slimming-treatment.html`, `/hair.html`, `/dermav.html`, `/fat-freezing.html`, `/fotona-4d.html`, `/hifu.html`, `/microneedling.html`, `/onda.html`, `/radiofrequency.html`, `/bio-stimulator.html`, `/skinbooster.html`, `/pico-laser-treatment.html`, `/services.html`, `/promo.html`, `/privacy.html`, + 9 branch `.php` pages.

**Chinese (`/cn/`) — ~38 URLs:** mirror of the above + an **extra page** `/cn/double-eyelid-suture-treatment.html` (exists only in CN).

> ⚠️ **Not in sitemap** (but live or semi-live): `coolsculpting.html`, all `/sg/` pages, campaign pages. Decide per-URL during migration whether to redirect, rebuild, or 410.

---

## 3. Existing Redirects, Canonicalization & Crawl Directives

From `.htaccess`, `robots.txt`, and page `<head>`s:

- **www → non-www, 301** — canonical host is `https://kaiteki.my` (the `www.` variant 301s to bare domain, except `mail.`).
- **Pretty-URL 301s already in place** (clean → ugly):
  - `/skin` → `/skin.html`
  - `/about-us` → `/aboutus.html`
  - `/kuala-lumpur` → `/kuala-lumpur.php`
  - `/skin-care` → `/skincare.html`
- **Canonical tags** present in page heads (e.g. homepage → `https://kaiteki.my/`).
- **robots.txt:** allows all bots; blocks `Googlebot` from `/nogooglebot/`; `Bingbot` `Crawl-delay: 10`; declares sitemap.

### 🔴 Issues found (fix during rebuild)
1. **www/non-www inconsistency** — `.htaccess` forces **non-www**, but `robots.txt` declares the sitemap as `https://www.kaiteki.my/sitemap.xml`. Pick one host (non-www) everywhere: sitemap, canonicals, internal links, GSC property.
2. **Extension-laden URLs** (`.html`, `.php`) — brittle and dated. New site should use clean, extensionless, lowercase, hyphenated paths.
3. **Stray WordPress rewrite block** in the static root's `.htaccess` (`RewriteBase / … /index.php`) — leftover cruft that doesn't belong on a static site; can mis-route requests. Do not carry over.
4. **Mixed clean/ugly URLs** — only 4 pretty URLs redirect; everything else exposes the extension. Inconsistent.
5. **No HSTS / modern security headers** declared in the snippet reviewed.

---

## 4. Sub-Sites & Localisation

| Path | What it is |
|------|-----------|
| `/cn/` | **Full Chinese mirror** — own copy of every page (incl. extra `double-eyelid-suture-treatment.html`), own PHPMailer stack, plus dev/test leftovers (`test.html`, `test.php`, `*_old.html`, `index_20240401.html`). |
| `/sg/` | **Reduced standalone Singapore site** (likely a separate entity/market): `index/skin/skincare/hair/face` + `contactus.php` + `assets/php/form-processor.php` + own 404/500. **Not in the main sitemap.** |
| `/indonesia/` | **Empty placeholder** — only a cPanel `.htaccess`. No content. |
| `blog.kaiteki.my` | **External WordPress** blog — linked from nav/footer, not in this tree. (Stale backup under `back/blog/`.) |

> **Rebuild decisions (locked):** EN-first (i18n-ready for CN later), `/sg/` & `/indonesia/` dropped for now, **blog migrated into `kaiteki.my/blog`** (in-repo MDX). See `docs/README.md`.

---

## 5. System, Utility & Backend Files

| File / folder | Role |
|---------------|------|
| `404.html` / `500.html` (+ legacy `.shtml`) | Error pages. |
| `.htaccess`, `php.ini`, `.user.ini` | Apache/PHP config & rewrites. |
| `robots.txt`, `sitemap.xml` | Crawl directives + URL inventory. |
| `mailer.php`, `class.phpmailer.php`, `class.smtp.php`, `PHPMailerAutoload.php` | Contact-form email (PHPMailer). |
| `assets/php/form-processor.php` | Form submission handler. |
| `assets/` | Front-end assets — CSS, JS, images, fonts, Semantic-UI dropdown, Owl Carousel, Bootstrap. |
| `cgi-bin/`, `.well-known/`, `.ftpquota` | Server boilerplate / ACME / cPanel markers. |
| `error_log` (~2.4 MB) | Apache/PHP error log — **not a page** (review for recurring errors before sunsetting). |

---

## 6. Legacy / Backup / Dead Weight (do NOT migrate)

| Item | What it is |
|------|-----------|
| `back/` + `back.zip` (~232 MB) | Full backup of an earlier site + a **complete WordPress install** (`back/blog/`) — this is the bulk of the ~20k file count. |
| `blog.zip` (~525 MB) | Zipped blog content. |
| `new/` | Older/alternate build + bundled Twitter OAuth PHP lib. |
| `promo/`, `maintenance/` | Standalone promo + maintenance holding pages. |
| `cn/test.*`, `cn/*_old.html`, `cn/index_20240401.html` | Dev/test/old leftovers. |

---

## 7. Key Characteristics & SEO Debt

1. **Brochure site, no backend** — only dynamic part is PHP contact-form → email. Trivial to replicate (WhatsApp deep-links + optional form endpoint).
2. **WhatsApp is the entire funnel** — no booking system; every CTA → pre-filled WhatsApp chat. (Locked: keep this model.)
3. **Massive duplication, no templating** — EN and CN are separate hand-maintained copies of *every* page; concern/treatment/location pages repeat near-identical layouts. Any change must be made many times. → The single biggest reason to **templatize** in the rebuild.
4. **Dated front-end** — jQuery/Bootstrap/Semantic-UI/Owl Carousel, large unoptimized assets. No modern image formats, no build pipeline, no Core Web Vitals discipline.
5. **URL & canonical hygiene gaps** — see §3 issues (www inconsistency, extensions, stray WP block).
6. **Thin EEAT signals** — "Our Doctors" is an anchor on About, not dedicated, credentialed doctor pages; no medical-reviewer bylines, licenses, or registration numbers surfaced.
7. **Blog authority split off-domain** — `blog.kaiteki.my` subdomain dilutes domain authority vs a `/blog` subfolder.

---

## 8. Migration Implications (what to preserve vs fix)

**Preserve (or rankings drop):**
- The ~80 indexed URLs → **301 map** every old URL to its new clean equivalent (draft pattern below; final targets set in `docs/04`).
- High-equity content (treatment/concern copy, branch NAP details, FAQs) — port and improve, don't discard.
- Branch data (addresses, hours, maps, phones) — becomes structured location data.
- Canonical host = **non-www** (`https://kaiteki.my`).

**Fix on the way in:**
- Clean extensionless URLs; one consistent host; remove WP cruft.
- Templatize page types (treatment, concern, location, doctor, blog).
- Move blog to `/blog` (subfolder) with 301s from old `blog.kaiteki.my` post URLs.
- Add real EEAT (doctor pages, credentials, medical-reviewer bylines, licenses) and structured data.
- Modern performance (Next.js image/font pipeline, Core Web Vitals).

### 8.1 Draft 301 redirect pattern (old → new)
> Final target slugs are decided in `docs/04-information-architecture.md`. Pattern only:

| Old (legacy) | New (proposed clean URL) |
|---|---|
| `https://www.kaiteki.my/*` | `https://kaiteki.my/*` (keep non-www 301) |
| `/index.html` | `/` |
| `/aboutus.html` | `/about` |
| `/our-clinics.php` | `/locations` (or `/contact`) |
| `/services.html` | `/treatments` |
| `/skincare.html`, `/skin.html`, `/facial-treatment-malaysia.html`, `/hair.html` | `/concerns/<hub>` |
| `/acne.html`, `/aging.html`, `/pigmentation.html`, `/pores.html`, … | `/concerns/<slug>` |
| `/hifu.html`, `/ultherapy.html`, `/pico-laser-treatment.html`, … | `/treatments/<slug>` |
| `/mont-kiara.php`, `/cheras.php`, … (9 branches) | `/locations/<branch-slug>` |
| `/promo.html` | `/promotions` |
| `/privacy.html` | `/privacy` |
| `blog.kaiteki.my/<post>` | `kaiteki.my/blog/<post>` |
| `/cn/*` | (deferred — reserve `/zh` or `/cn` locale prefix) |
| `coolsculpting.html`, `/sg/*`, campaign/test pages | decide per-URL: redirect to nearest equivalent, rebuild, or `410 Gone` |

---

*Cross-refs: SEO best practices → `docs/02-seo-guidelines-2026.md`. Proposed new IA & URL scheme → `docs/04`. Tech/migration mechanics (Next.js redirects, sitemaps) → `docs/07`.*
