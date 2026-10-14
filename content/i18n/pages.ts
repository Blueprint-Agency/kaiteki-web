// The locale ledger: every page that has a Chinese or Malay version, and whether
// a doctor who reads that language has signed it.
//
// The rule (docs/15 item 4.4, docs/15a §7): a page without a signed translation
// has no locale URL and no hreflang. Never machine translation, never English
// under a prefix. So in production only `signed` entries resolve; a `draft`
// renders in dev and on the noindexed staging host (NEXT_PUBLIC_NOINDEX=1) so
// the reviewer can read it in place, and 404s everywhere else.
//
// To publish a page: put the reviewing doctor's slug (content/data/doctors.ts)
// and the date they read it into its entry and set status to "signed".

import type { NonDefaultLocale } from "@/lib/i18n";

export type LocalePageEntry =
  | { status: "draft" }
  | { status: "signed"; doctor: string; date: string };

/** Keyed by the locale-neutral path, exactly as the English page's URL. */
export const localePages: Record<NonDefaultLocale, Record<string, LocalePageEntry>> = {
  zh: {
    "/": { status: "draft" },
    "/concerns": { status: "draft" },
    "/concerns/acne": { status: "draft" },
    "/concerns/acne-scars": { status: "draft" },
    "/concerns/aging": { status: "draft" },
    "/concerns/birthmark": { status: "draft" },
    "/concerns/body-slimming": { status: "draft" },
    "/concerns/dark-eye-circles": { status: "draft" },
    "/concerns/enlarged-pores": { status: "draft" },
    "/concerns/excessive-sweating": { status: "draft" },
    "/concerns/face-contouring": { status: "draft" },
    "/concerns/face-lifting": { status: "draft" },
    "/concerns/fine-lines-wrinkles": { status: "draft" },
    "/concerns/hair-loss": { status: "draft" },
    "/concerns/melasma": { status: "draft" },
    "/concerns/pigmentation": { status: "draft" },
    "/concerns/tattoo-removal": { status: "draft" },
    "/concerns/vascular-lesions": { status: "draft" },
  },
  ms: {
    "/": { status: "draft" },
    "/concerns": { status: "draft" },
    "/concerns/acne": { status: "draft" },
    "/concerns/acne-scars": { status: "draft" },
    "/concerns/aging": { status: "draft" },
    "/concerns/birthmark": { status: "draft" },
    "/concerns/body-slimming": { status: "draft" },
    "/concerns/dark-eye-circles": { status: "draft" },
    "/concerns/enlarged-pores": { status: "draft" },
    "/concerns/excessive-sweating": { status: "draft" },
    "/concerns/face-contouring": { status: "draft" },
    "/concerns/face-lifting": { status: "draft" },
    "/concerns/fine-lines-wrinkles": { status: "draft" },
    "/concerns/hair-loss": { status: "draft" },
    "/concerns/melasma": { status: "draft" },
    "/concerns/pigmentation": { status: "draft" },
    "/concerns/tattoo-removal": { status: "draft" },
    "/concerns/vascular-lesions": { status: "draft" },
  },
};
