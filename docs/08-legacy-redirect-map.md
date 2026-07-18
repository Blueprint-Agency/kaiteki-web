# 08 — Legacy → New 301 Redirect Map

The **source of truth** for this map is `docs/01` (the legacy `sitemap.xml` inventory — ~80 URLs across the root and `/cn/`). The confirmed redirects below are implemented in `next.config.ts` as Next.js `permanent: true` redirects, which are served as **HTTP 308** — Google treats 308 as equivalent to a 301 for ranking-signal transfer. Note that `well-known/` (the raw legacy dump) was **not synced to this checkout**, so any live legacy page that was absent from the old `sitemap.xml` is **not captured here**.

## Section 1 — ✅ Implemented in `next.config.ts`

### Host

| Legacy URL | New URL | Notes |
|---|---|---|
| `www.kaiteki.my/*` | `https://kaiteki.my/*` | Canonical non-www host lock |

### Core

| Legacy URL | New URL | Notes |
|---|---|---|
| `/index.html` | `/` | |
| `/our-clinics.php` | `/locations` | |
| `/services.html` | `/treatments` | |
| `/skincare.html` | `/skincare` | |
| `/privacy.html` | `/privacy` | |

### Concern hubs

Old sub-hubs were deleted 2026-07-18, so these land on the top-level `/concerns`.

| Legacy URL | New URL | Notes |
|---|---|---|
| `/skin.html` | `/concerns` | |
| `/facial-treatment-malaysia.html` | `/concerns` | |
| `/hair.html` | `/concerns/hair-loss` | |

### Concern pages

| Legacy URL | New URL | Notes |
|---|---|---|
| `/acne.html` | `/concerns/acne` | |
| `/aging.html` | `/concerns/aging` | |
| `/pigmentation.html` | `/concerns/pigmentation` | |
| `/pores.html` | `/concerns/enlarged-pores` | |
| `/tattoo-removal.html` | `/concerns/tattoo-removal` | |
| `/dark-eye-circle-treatment.html` | `/concerns/dark-eye-circles` | |
| `/face-contour-treatment.html` | `/concerns/face-contouring` | |
| `/face-lifting-treatment.html` | `/concerns/face-lifting` | |
| `/fine-lines-and-wrinkles-treatment.html` | `/concerns/fine-lines-wrinkles` | |
| `/slimming-treatment.html` | `/concerns/body-slimming` | |

### Treatment pages

| Legacy URL | New URL | Notes |
|---|---|---|
| `/exosome-therapy.html` | `/treatments/exosome-therapy` | |
| `/bio-stimulator.html` | `/treatments/bio-stimulator` | |
| `/fat-freezing.html` | `/treatments/fat-freezing` | |
| `/fotona-4d.html` | `/treatments/fotona-4d` | |
| `/hifu.html` | `/treatments/hifu` | |
| `/microneedling.html` | `/treatments/microneedling` | |
| `/pico-laser-treatment.html` | `/treatments/pico-laser` | |
| `/radiofrequency.html` | `/treatments/radiofrequency` | |
| `/skinbooster.html` | `/treatments/skin-booster` | |
| `/ultherapy.html` | `/treatments/ultherapy` | |

### Machine → Technology

| Legacy URL | New URL | Notes |
|---|---|---|
| `/dermav.html` | `/technology/dermav` | |
| `/onda.html` | `/technology/onda-coolwaves` | |
| `/coolsculpting.html` | `/technology/coolsculpting` | |

### Branch pages

| Legacy URL | New URL | Notes |
|---|---|---|
| `/mont-kiara.php` | `/locations/mont-kiara` | |
| `/cheras.php` | `/locations/cheras` | |
| `/kuala-lumpur.php` | `/locations/bukit-jalil` | |
| `/fourseasons-kl.php` | `/locations/four-seasons-kl` | |
| `/petaling-jaya.php` | `/locations/petaling-jaya` | |
| `/shah-alam.php` | `/locations/kota-kemuning` | |
| `/johor.php` | `/locations/southkey-johor-bahru` | |
| `/johor-pelangi-avenue.php` | `/locations/pelangi-johor-bahru` | |
| `/kota-kinabalu.php` | `/locations/kota-kinabalu` | |

### Extensionless variants

Old `.htaccess` rewrites (`docs/01` §3).

| Legacy URL | New URL | Notes |
|---|---|---|
| `/skin` | `/concerns` | |
| `/skin-care` | `/skincare` | |
| `/kuala-lumpur` | `/locations/bukit-jalil` | |

### About / Our Story

The About page lives at `/our-story`.

| Legacy URL | New URL | Notes |
|---|---|---|
| `/aboutus.html` | `/our-story` | |
| `/about-us` | `/our-story` | |
| `/about` | `/our-story` | Interim `/about` renamed to `/our-story` |

## Section 2 — 🔴 Gaps / pending decisions

| Legacy URL(s) | Why it's a gap | Recommendation | Status |
|---|---|---|---|
| `/promo.html`, `/anniversary.html`, `/6th-anniversary.html`, `/6th-anniversary2.html` | No promotions page in the new IA | 410 Gone (dead campaigns) or → homepage | Pending decision |
| `/component-colors.html` | Internal styleguide, never public | 410 / ignore | Pending decision |
| `/cn/*` (~38 URLs incl. CN-only `double-eyelid-suture-treatment.html`) | Chinese locale not built (`/zh` reserved) | Add `/cn/* → /zh/*` when locale ships | Deferred |
| `/sg/*` | Singapore market dropped (locked decision) | 410 Gone or → homepage | Pending decision |
| `/indonesia/*` | Empty placeholder, no content | 410 / ignore | Pending decision |
| `blog.kaiteki.my/<posts>` | Blog not yet migrated; `/blog` currently redirects out to the subdomain | Per-post 301s with the MDX blog migration | Deferred |

> Redirects verified live returning 308 → 200 on the dev server (2026-07-18).
