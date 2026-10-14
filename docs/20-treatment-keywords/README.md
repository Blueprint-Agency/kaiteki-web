# 20. Treatment pages in Chinese and Malay: keyword logs

**Round 3 of the trilingual rollout.** Covers the 19 treatment pages and the `/treatments` hub. Same method and rule as the concern round. **Read `docs/19-concern-keywords/README.md` first:** it covers the rule ("check the keyword first; if there is no search volume, translate directly"), the autocomplete volume proxy, the overlay files, `pnpm validate:locale`, the English-drift sync and the sign-off ledger. None of that is repeated here.

## Files

| Page | Log | Chinese | Malay |
|---|---|---|---|
| Hub `/treatments` | header comment in `content/i18n/treatments-hub.ts` | `content/i18n/treatments-hub.ts` | same |
| Each treatment | `docs/20-treatment-keywords/<slug>.md` | `content/i18n/treatments/zh/<slug>.json` | `content/i18n/treatments/ms/<slug>.json` |
| Template labels | — | `content/i18n/treatment-ui.ts` (shared labels reuse `concern-ui.ts`) | same |

`pico-laser.md` is the pilot that sets the format. Every other log follows it.

## Treatment-specific notes

- **Never translated:** `href`, `related` and the top-level `category`. The overlay always takes these from English.
- **Links resolve through the gate.** Route and variant links on a translated page (e.g. "see acne") point to the locale page when it is live, otherwise to English.
- **English-only data is hidden on locale pages,** not shown untranslated: device summaries, related-treatment summaries, blog posts and the reviewer's bio. The authored "why this related treatment" reason is translated, so it still shows.
- **Byline:** an English treatment page names its authoring reviewer. A translated page names only the doctor who signed the translation in `content/i18n/pages.ts`, so a draft shows no reviewer.
