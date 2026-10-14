# 19. Concern pages in Chinese and Malay: keyword logs

**Round 2 of the trilingual rollout** (round 1, site chrome and homepage, is `docs/18`). This round covers the 16 concern pages and the `/concerns` hub, page by page.

## The rule (client, 2026-10-14)

> Check the keyword first. If there is no search volume, only direct translate.

For every search-relevant string on a page (SEO title and description, H1, section headings, tab labels, FAQ questions, jump-nav labels), check whether people actually search a form of it in that language:

- **It has volume:** the string is phrased around that real query (KEYWORD), keeping the English meaning.
- **It doesn't:** the string is a faithful, direct translation (DIRECT). No invented keywords.

Body copy (paragraphs, answers, captions, list items) is always a faithful direct translation. It never adds or strengthens a claim.

**How "search volume" is measured.** We have no volume tool, so Google Autocomplete stands in for one (`gl=my`, `hl=zh-CN` / `hl=ms`). If a phrase appears with Malaysian context, or at least without Taiwan, Hong Kong or Indonesian skew, it counts as having volume. If nothing relevant comes back, it doesn't. Autocomplete only surfaces queries with real demand, but it gives no numbers. Once the pages are live, re-check the KEYWORD picks against Search Console. If Ahrefs or a similar tool is connected, run the KEYWORD and DIRECT strings through its Malaysia database before the next round.

## Files

| Page | Log | Chinese | Malay |
|---|---|---|---|
| Hub `/concerns` | header comment in `content/i18n/concerns-hub.ts` | `content/i18n/concerns-hub.ts` | same |
| Each concern | `docs/19-concern-keywords/<slug>.md` | `content/i18n/concerns/zh/<slug>.json` | `content/i18n/concerns/ms/<slug>.json` |
| Treatment and category names (used on every concern page) | `_treatment-names.md` | merged into `content/i18n/terms.ts` | same |

`acne.md` is the pilot that sets the format. Every other log follows it.

## How a translation file works

Each `<slug>.json` mirrors the English record (`pnpm i18n:export-concerns <dir>` dumps the source). `lib/i18n-overlay.ts` walks the **English** structure and takes only copy from the translation. Slugs, image URLs, anchors and enums always come from English, so a translation can change what a page says but never what it links to.

`pnpm validate:locale` is the gate:
- **Fails** on: missing copy, em-dashes, banned terms (`docs/18` §7), or Indonesian forms in Malay.
- **Warns** on: guarantee or specialist words, which are allowed only when negated or used as a referral, and on SEO lengths.

## Publishing

A page gets a `/zh` or `/ms` URL only when its entry in `content/i18n/pages.ts` is `signed`, with the slug of a doctor who reads that language and the date they read it (`docs/15` item 4.4). Until then, the page renders in dev and on staging only.
