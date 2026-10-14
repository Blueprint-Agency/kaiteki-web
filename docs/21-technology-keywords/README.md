# 21. Device & injectable pages in Chinese and Malay: keyword logs

**Round 4 of the trilingual rollout.** Covers the `/technology` pages (devices and injectables) and the hub. Same method and rule as rounds 2 and 3. **Read `docs/19-concern-keywords/README.md` first:** it covers the rule ("check the keyword first; if there is no search volume, translate directly"), the autocomplete volume proxy, the overlay files, `pnpm validate:locale`, the English-drift sync and the sign-off ledger.

## Files

| Page | Log | Chinese | Malay |
|---|---|---|---|
| Hub `/technology` | header comment in `content/i18n/technology-hub.ts` | `content/i18n/technology-hub.ts` | same |
| Each device | `docs/21-technology-keywords/<slug>.md` | `content/i18n/technology/zh/<slug>.json` | `content/i18n/technology/ms/<slug>.json` |
| Template and explorer labels | — | `content/i18n/technology-ui.ts` | same |

`onda-coolwaves.md` is the pilot that sets the format.

## Device-specific notes

- **Device names stay in Latin script.** People search brand names in English in both languages ("onda malaysia", "pico laser"). A page's `name` is only translated where the English adds a generic word.
- **Never translated:** `device`, which keys the manufacturer-logo lookup, and the root `type` (device or injectable).
- **One rule for device cards everywhere:** `content/i18n/tech-cards.ts`. On a Chinese or Malay concern, treatment or device page, and on the hub, a device card shows that device's own translation once its page is live, and until then its brand name with no English summary.
- **`/technology/botox` is not translated.** Its English title is a brand-name prescription drug, which `docs/18` §7 bans in Chinese and Malay copy. It waits on the client's decision about "Botox" on the English pages.
