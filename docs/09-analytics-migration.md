# 09 — Analytics Current-State Audit & Migration Plan

> Closes `docs/00 §6` gap #6 (analytics current-state audit) and the `docs/07 §12` "GSC/GA4 absent" blocker. Ground truth pulled live from kaiteki.my + GTM container on 2026-07-18.

## 1. What's live on the legacy site

| Property | ID | Location | Action |
|---|---|---|---|
| GTM container (main) | `GTM-M42CTGL` | kaiteki.my `<head>` | **Reuse as-is** |
| GA4 | `G-8PB8RQWWZJ` | inside GTM | **Keep** (same property → no history break) |
| Universal Analytics | `UA-160155049-1` | inside GTM | **Delete** (UA sunset Jul-2023, dead) |
| Google Ads conversions | `AW-16560692308`, `AW-16593635096`, `AW-18324544474` | inside GTM | **Keep** — the high-value tags |
| GTM container (blog) | `GTM-KPBV57NP` | blog.kaiteki.my | **Retire** when blog → `/blog` |
| GSC | DNS domain property | Cloudflare TXT `_Kf8tpfKNVMEUQyCSnw4HQyRX-J9VQhmafOx9nndm6w` + `nTDvowuzn8o8cRem1i4RUsh1MqovKiLvMPCUkbAZM88` | **No migration needed** |
| Facebook domain | `facebook-domain-verification=4ufbmywj7nxi5gk4lj9hkl6nxsyeiy` | Cloudflare TXT | Keep record |

## 2. Decision — reuse GTM, override docs/07 §12

`docs/07 §12` specs GA4-direct via `@next/third-parties`. **Overridden here**: the existing container already wires GA4 + 3 Ads conversion accounts + remarketing. Reusing `GTM-M42CTGL` preserves all of that with one script include and keeps tag config in the GTM UI (no code redeploys to change tags). GA4-direct would force hand-rebuilding every Ads conversion and is not worth it.

Trade-off accepted: one third-party script (GTM) instead of the leaner GA4-direct snippet. Mitigated by Consent Mode gating load.

## 3. Migration steps

1. **New site head:** inject `GTM-M42CTGL` (Consent Mode v2 defaults set *before* the tag — see §4). Prefer `@next/third-parties` `GoogleTagManager` or a gated inline snippet.
2. **Events:** one WhatsApp event, pushed to `dataLayer` for every WhatsApp link (`components/Analytics.tsx`; the same listener is inlined in `public/ads/*.html`):
   - `whatsapp_click` — `{ page_path, click_text, cta_position }`. `cta_position` comes from `data-ga-cta_position` on the link, or `"inline"` when it has none.
   In the GTM UI, map this trigger to the GA4 event + the relevant `AW-…` conversion(s). No app redeploy needed after initial wiring.
   *Updated 2026-10-07:* the old site's `click_wa_dropdown`, `click_wa_book_appointment` and `click_WA_bottom_right_corner` tags matched old-site markup and stopped firing at the 1 Aug cutover; the interim `cta_click` was never given a GTM tag. Both are replaced by `whatsapp_click`. The planned `whatsapp_lead` / `phone_call_click` pair was not built (the site has no click-to-call CTA).
3. **GA4:** no change — same `G-8PB8RQWWZJ`, history continuous. Confirm data stream host filter allows the new deploy host.
4. **UA:** remove `UA-160155049-1` tag from the container.
5. **GSC:** leave the two Cloudflare `google-site-verification` TXT records untouched — the **domain property** already covers the rebuilt site on the same host. Submit new sitemap after cutover.
6. **Blog:** when `blog.kaiteki.my` folds into `/blog`, retire container `GTM-KPBV57NP`; `/blog` pageviews flow into the main GA4 property via `GTM-M42CTGL`. 301s per `docs/08`.
7. **Facebook pixel / CAPI:** audit whether the FB pixel lives in the container; keep the domain-verification TXT regardless (ad-account asset).

## 4. Compliance gate (PDPA — blocks launch)

Consent Mode v2: `ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage` = **denied** by default, set before GTM loads. Consent banner (client island, reserved height for CLS) updates to `granted` on accept and records state (`docs/02 §12.13`). The `AW-…` Ads conversion tags are unlawful in MY without this.

## 5. Launch verification (`docs/07 §12` step 4)

- GTM Preview: `whatsapp_lead` + `phone_call_click` fire with `branch`/`service` params.
- GA4 Realtime: events + pageviews on the new host.
- Ads: conversion tags register in Google Ads diagnostics.
- Consent: denied state blocks tags pre-consent; granted enables them.
- GSC: domain property still verified; new sitemap accepted.
