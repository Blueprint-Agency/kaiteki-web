// The locale ledger: every page that has a Chinese or Malay version, and whether
// a doctor who reads that language has signed it.
//
// The rule (docs/15 item 4.4, docs/15a §7): a page without a signed translation
// has no locale URL and no hreflang. Never machine translation, never English
// under a prefix. So in production only `signed` entries resolve; a `draft`
// renders in dev and on the noindexed staging host (NEXT_PUBLIC_NOINDEX=1) so
// the reviewer can read it in place, and 404s everywhere else.
//
// Who signs: the same doctor who reviews the English page (client decision,
// 2026-10-14), so a signed entry needs only the date they read the translation.
// To publish a page: set its status to "signed" with that date. Add `doctor`
// (a slug from content/data/doctors.ts) only to name someone else, and always
// for pages with no English reviewer: the homepage and the three hubs, which
// Dr Chew signs (client, 2026-10-17). Those four render no reviewer byline, so
// the name is a record of who read them, not something the page shows. A
// draft may carry `doctor` too, so the reading list (docs/15a Sheet C) names
// the right person before the date comes back.

import type { NonDefaultLocale } from "@/lib/i18n";

export type LocalePageEntry =
  | { status: "draft"; doctor?: string }
  | { status: "signed"; date: string; doctor?: string };

/** Keyed by the locale-neutral path, exactly as the English page's URL. */
// 2026-10-28: the client reported every translation signed. All are marked so,
// dated the day it was reported. Exception, on the owner's instruction the same
// day: the ten treatment pages whose English changed that day (docs/15 item 4.1)
// went live with about 225 new strings per locale drafted by Claude, which no
// doctor has read yet. Their signed date covers the earlier text only. The new
// strings are the ones added in the commit that published them; send those to
// each page's reviewer, and correct any line they change.
// 2026-11-17 (kt111-kt115): the same arrangement, not yet approved by the owner
// for this batch. /treatments/pico-laser, /treatments/laser-hair-removal,
// /concerns/dark-eye-circles, /concerns/hair-loss and
// /locations/pelangi-johor-bahru carry 中文 and BM strings drafted by Claude
// (33 per locale, plus the Pelangi `about` and meta in locations.ts) that no
// doctor has read. Their signed dates cover the earlier text only.
// 2026-11-27: five new device pages (picocare, density, deusaderm,
// belotero-revive, nctf) are drafts, each naming the doctor who reads them; the
// ECM skin booster joins them the same day. The parent treatment pages are
// already signed, and their 中文 and BM strings for the new products were
// drafted by Claude and not yet read: on /treatments/pico-laser,
// /treatments/radiofrequency, /treatments/skin-booster and
// /treatments/bio-stimulator, the variantModule heading, intro and new cards,
// the device-count fact, the radiofrequency leadAnswer, the pico FAQ "Is Pico
// laser the same as PicoSure?", and the new avoidIf items on skin-booster and
// bio-stimulator; on /technology/potenza, the corrected manufacturer lines
// (Jeisys Medical, not Cynosure Lutronic). Send those to each page's reviewer.
// 2026-11-28: /treatments/k-premium-lifting (Kaiteki's Ultherapy + Oligio X
// plan) is a draft naming Dr Chew, who reviewed both device pages. It was
// drafted the same day as /technology/k-premium-lifting, then simplified and
// moved to the treatment template before anything went live, so no redirect.
// Its English page carries no reviewer byline until Dr Chew has read it. Those
// two device pages are signed, so they gain only navigation, in English, 中文
// and BM: one link label to the plan (under "How Oligio X heats the skin from
// the inside" and "Which layers does Ultherapy treat, and at what depths?").
// The combining FAQs drafted for them were held back so no signed page shows a
// review date over medical copy its doctor has not read; they can return once
// Dr Chew signs the plan. Send the two labels to Dr Chew.
// 2026-11-28: /technology/onda-face is a draft for Dr Tim Chua, who reviewed
// onda-coolwaves. That signed page gains one string drafted by Claude and not
// yet read: the link label under "Onda for Body or Onda for Face" pointing to
// the new page. Send it to him with the draft.
export const localePages: Record<NonDefaultLocale, Record<string, LocalePageEntry>> = {
  zh: {
    // Blog (kt105-kt110): each post signed by its reviewer, the hub by Dr Chew
    // like the other hubs, all reported read by the owner on 2026-11-10.
    "/blog": { status: "signed", date: "2026-11-10", doctor: "dr-chew-yuhhui" },
    "/blog/after-facial-laser-aftercare": { status: "signed", date: "2026-11-10" },
    "/blog/melasma-vs-pigmentation": { status: "signed", date: "2026-11-10" },
    "/blog/darkening-after-laser": { status: "signed", date: "2026-11-10" },
    "/blog/nasolabial-folds": { status: "signed", date: "2026-11-10" },
    "/blog/fat-freezing-aftercare": { status: "signed", date: "2026-11-10" },
    "/blog/skin-booster-vs-microneedling": { status: "signed", date: "2026-11-10" },
    // kt102 and kt104: drafted 2026-11-20 from the signed English posts and
    // reported signed by the owner the same day.
    "/blog/ice-pick-scars": { status: "signed", date: "2026-11-20" },
    "/blog/sculptra-vs-radiesse": { status: "signed", date: "2026-11-20" },
    "/": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/concerns": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/treatments": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/technology": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/technology/alma": { status: "signed", date: "2026-10-28" },
    "/technology/art-filler": { status: "signed", date: "2026-10-28" },
    "/technology/belotero": { status: "signed", date: "2026-10-28" },
    "/technology/belotero-revive": { status: "draft", doctor: "dr-jeremy-low" },
    "/technology/btl-exilis": { status: "signed", date: "2026-10-28" },
    "/technology/coolsculpting": { status: "signed", date: "2026-10-28" },
    "/technology/cooltech": { status: "signed", date: "2026-10-28" },
    "/technology/density": { status: "draft", doctor: "dr-hong-peiyi" },
    "/technology/dermav": { status: "signed", date: "2026-10-28" },
    "/technology/deusaderm": { status: "draft", doctor: "dr-jacqueline-tan" },
    "/technology/ecm-skin-booster": { status: "draft", doctor: "dr-hong-peiyi" },
    "/technology/ellanse": { status: "signed", date: "2026-10-28" },
    "/technology/fotona-pqx": { status: "signed", date: "2026-10-28" },
    "/technology/fotona-sp-dynamis": { status: "signed", date: "2026-10-28" },
    "/technology/fractional-co2": { status: "signed", date: "2026-10-28" },
    "/technology/hydrafacial": { status: "signed", date: "2026-10-28" },
    "/technology/hydrodeluxe": { status: "signed", date: "2026-10-28" },
    "/technology/juvederm": { status: "signed", date: "2026-10-28" },
    "/technology/juvelook": { status: "signed", date: "2026-10-28" },
    "/technology/lifthera": { status: "signed", date: "2026-10-28" },
    "/technology/m22-ipl": { status: "signed", date: "2026-10-28" },
    "/technology/morpheus8": { status: "signed", date: "2026-10-28" },
    "/technology/nctf": { status: "draft", doctor: "dr-joaan-kong" },
    "/technology/oligio": { status: "signed", date: "2026-10-28" },
    "/technology/onda-coolwaves": { status: "signed", date: "2026-10-28" },
    "/technology/onda-face": { status: "draft", doctor: "dr-tim-chua" },
    "/technology/picocare": { status: "draft", doctor: "dr-calvin-tan" },
    "/technology/picosure": { status: "signed", date: "2026-10-28" },
    "/technology/plinest": { status: "signed", date: "2026-10-28" },
    "/technology/potenza": { status: "signed", date: "2026-10-28" },
    "/technology/pro-yellow": { status: "signed", date: "2026-10-28" },
    "/technology/profhilo": { status: "signed", date: "2026-10-28" },
    "/technology/radiesse": { status: "signed", date: "2026-10-28" },
    "/technology/rejuran": { status: "signed", date: "2026-10-28" },
    "/technology/restylane": { status: "signed", date: "2026-10-28" },
    "/technology/schwarzy": { status: "signed", date: "2026-10-28" },
    "/technology/sculptra": { status: "signed", date: "2026-10-28" },
    "/technology/silkpeel": { status: "signed", date: "2026-10-28" },
    "/technology/sylfirm-x": { status: "signed", date: "2026-10-28" },
    "/technology/ultherapy-system": { status: "signed", date: "2026-10-28" },
    "/technology/ultracel-q": { status: "signed", date: "2026-10-28" },
    "/technology/wonderface": { status: "signed", date: "2026-10-28" },
    "/technology/xerf": { status: "signed", date: "2026-10-28" },
    "/locations": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/mont-kiara": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/cheras": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/bukit-jalil": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/four-seasons-kl": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/petaling-jaya": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/kota-kemuning": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/southkey-johor-bahru": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/pelangi-johor-bahru": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/kota-kinabalu": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jessie-lim": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-chew-yuhhui": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-yeong-bin": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-william-yap": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-lim-xiao-chien": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jeremy-low": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-chang-chee-seong": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jacqueline-tan": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-joaan-kong": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-tim-chua": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-calvin-tan": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-lucas-chew": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jade": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-teresa-tan": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-chin-wei-horng": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-yvonne-chuah": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jamie-gan": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jen-meng": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-chloe-wan": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-say-wei-xian": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-hong-peiyi": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/our-story": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/products": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/privacy": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/treatments/bio-stimulator": { status: "signed", date: "2026-10-28" },
    "/treatments/botulinum-toxin": { status: "signed", date: "2026-10-28" },
    "/treatments/dermal-fillers": { status: "signed", date: "2026-10-28" },
    "/treatments/double-eyelid": { status: "signed", date: "2026-10-28" },
    "/treatments/exosome-therapy": { status: "signed", date: "2026-10-28" },
    "/treatments/facial-treatments": { status: "signed", date: "2026-10-28" },
    "/treatments/fat-freezing": { status: "signed", date: "2026-10-28" },
    "/treatments/fotona-4d": { status: "signed", date: "2026-10-28" },
    "/treatments/hifu": { status: "signed", date: "2026-10-28" },
    "/treatments/k-premium-lifting": { status: "draft", doctor: "dr-chew-yuhhui" },
    "/treatments/laser-hair-removal": { status: "signed", date: "2026-10-28" },
    "/treatments/microneedling": { status: "signed", date: "2026-10-28" },
    "/treatments/microwave-contouring": { status: "signed", date: "2026-10-28" },
    "/treatments/muscle-stimulation": { status: "signed", date: "2026-10-28" },
    // 2026-11-28: Deusaderm for panda eyes, the under-eye use of
    // /technology/deusaderm, a draft for that page's doctor. Written the same
    // day as /technology/deusaderm-panda-eye and moved to the treatment type
    // before it went live, so no redirect. Also drafted by Claude and not yet
    // read: the sentence and link in the parent's under-eye section, which now
    // point here, and the new treatment card ("For a hollow where filler is a
    // poor fit") on the signed /concerns/dark-eye-circles, which replaces the
    // treatmentsNote drafted earlier that day (English, 中文 and BM). Send those
    // to each page's reviewer.
    "/treatments/panda-eye-treatment": { status: "draft", doctor: "dr-jacqueline-tan" },
    "/treatments/pico-laser": { status: "signed", date: "2026-10-28" },
    "/treatments/radiofrequency": { status: "signed", date: "2026-10-28" },
    "/treatments/resurfacing-laser": { status: "signed", date: "2026-10-28" },
    "/treatments/skin-booster": { status: "signed", date: "2026-10-28" },
    "/treatments/ultherapy": { status: "signed", date: "2026-10-28" },
    "/treatments/vascular-pigment-laser": { status: "signed", date: "2026-10-28" },
    "/concerns/acne": { status: "signed", date: "2026-10-28" },
    "/concerns/acne-scars": { status: "signed", date: "2026-10-28" },
    "/concerns/aging": { status: "signed", date: "2026-10-28" },
    "/concerns/birthmark": { status: "signed", date: "2026-10-28" },
    "/concerns/body-slimming": { status: "signed", date: "2026-10-28" },
    "/concerns/dark-eye-circles": { status: "signed", date: "2026-10-28" },
    "/concerns/enlarged-pores": { status: "signed", date: "2026-10-28" },
    "/concerns/excessive-sweating": { status: "signed", date: "2026-10-28" },
    "/concerns/face-contouring": { status: "signed", date: "2026-10-28" },
    "/concerns/face-lifting": { status: "signed", date: "2026-10-28" },
    "/concerns/fine-lines-wrinkles": { status: "signed", date: "2026-10-28" },
    "/concerns/hair-loss": { status: "signed", date: "2026-10-28" },
    "/concerns/melasma": { status: "signed", date: "2026-10-28" },
    // kt101: Dr Chew signed the English and both translations, 2026-11-09.
    "/concerns/skin-tags-moles": { status: "signed", date: "2026-11-09" },
    "/concerns/pigmentation": { status: "signed", date: "2026-10-28" },
    "/concerns/tattoo-removal": { status: "signed", date: "2026-10-28" },
    "/concerns/vascular-lesions": { status: "signed", date: "2026-10-28" },
    // 2026-11-28: the first product detail page. The 中文 and BM copy is drafted
    // by Claude from the English (content/i18n/products/<locale>.json → page) and
    // no doctor has read it, so it is a draft: it renders in dev and on staging
    // and 404s in production until Dr Chew signs it. Products have no English
    // reviewer, hence the named doctor.
    "/products/doubleblock-uv-sunscreen": { status: "draft", doctor: "dr-chew-yuhhui" },
  },
  ms: {
    // Blog (kt105-kt110): each post signed by its reviewer, the hub by Dr Chew
    // like the other hubs, all reported read by the owner on 2026-11-10.
    "/blog": { status: "signed", date: "2026-11-10", doctor: "dr-chew-yuhhui" },
    "/blog/after-facial-laser-aftercare": { status: "signed", date: "2026-11-10" },
    "/blog/melasma-vs-pigmentation": { status: "signed", date: "2026-11-10" },
    "/blog/darkening-after-laser": { status: "signed", date: "2026-11-10" },
    "/blog/nasolabial-folds": { status: "signed", date: "2026-11-10" },
    "/blog/fat-freezing-aftercare": { status: "signed", date: "2026-11-10" },
    "/blog/skin-booster-vs-microneedling": { status: "signed", date: "2026-11-10" },
    // kt102 and kt104: drafted 2026-11-20 from the signed English posts and
    // reported signed by the owner the same day.
    "/blog/ice-pick-scars": { status: "signed", date: "2026-11-20" },
    "/blog/sculptra-vs-radiesse": { status: "signed", date: "2026-11-20" },
    "/": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/concerns": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/treatments": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/technology": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/technology/alma": { status: "signed", date: "2026-10-28" },
    "/technology/art-filler": { status: "signed", date: "2026-10-28" },
    "/technology/belotero": { status: "signed", date: "2026-10-28" },
    "/technology/belotero-revive": { status: "draft", doctor: "dr-jeremy-low" },
    "/technology/btl-exilis": { status: "signed", date: "2026-10-28" },
    "/technology/coolsculpting": { status: "signed", date: "2026-10-28" },
    "/technology/cooltech": { status: "signed", date: "2026-10-28" },
    "/technology/density": { status: "draft", doctor: "dr-hong-peiyi" },
    "/technology/dermav": { status: "signed", date: "2026-10-28" },
    "/technology/deusaderm": { status: "draft", doctor: "dr-jacqueline-tan" },
    "/technology/ecm-skin-booster": { status: "draft", doctor: "dr-hong-peiyi" },
    "/technology/ellanse": { status: "signed", date: "2026-10-28" },
    "/technology/fotona-pqx": { status: "signed", date: "2026-10-28" },
    "/technology/fotona-sp-dynamis": { status: "signed", date: "2026-10-28" },
    "/technology/fractional-co2": { status: "signed", date: "2026-10-28" },
    "/technology/hydrafacial": { status: "signed", date: "2026-10-28" },
    "/technology/hydrodeluxe": { status: "signed", date: "2026-10-28" },
    "/technology/juvederm": { status: "signed", date: "2026-10-28" },
    "/technology/juvelook": { status: "signed", date: "2026-10-28" },
    "/technology/lifthera": { status: "signed", date: "2026-10-28" },
    "/technology/m22-ipl": { status: "signed", date: "2026-10-28" },
    "/technology/morpheus8": { status: "signed", date: "2026-10-28" },
    "/technology/nctf": { status: "draft", doctor: "dr-joaan-kong" },
    "/technology/oligio": { status: "signed", date: "2026-10-28" },
    "/technology/onda-coolwaves": { status: "signed", date: "2026-10-28" },
    "/technology/onda-face": { status: "draft", doctor: "dr-tim-chua" },
    "/technology/picocare": { status: "draft", doctor: "dr-calvin-tan" },
    "/technology/picosure": { status: "signed", date: "2026-10-28" },
    "/technology/plinest": { status: "signed", date: "2026-10-28" },
    "/technology/potenza": { status: "signed", date: "2026-10-28" },
    "/technology/pro-yellow": { status: "signed", date: "2026-10-28" },
    "/technology/profhilo": { status: "signed", date: "2026-10-28" },
    "/technology/radiesse": { status: "signed", date: "2026-10-28" },
    "/technology/rejuran": { status: "signed", date: "2026-10-28" },
    "/technology/restylane": { status: "signed", date: "2026-10-28" },
    "/technology/schwarzy": { status: "signed", date: "2026-10-28" },
    "/technology/sculptra": { status: "signed", date: "2026-10-28" },
    "/technology/silkpeel": { status: "signed", date: "2026-10-28" },
    "/technology/sylfirm-x": { status: "signed", date: "2026-10-28" },
    "/technology/ultherapy-system": { status: "signed", date: "2026-10-28" },
    "/technology/ultracel-q": { status: "signed", date: "2026-10-28" },
    "/technology/wonderface": { status: "signed", date: "2026-10-28" },
    "/technology/xerf": { status: "signed", date: "2026-10-28" },
    "/locations": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/mont-kiara": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/cheras": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/bukit-jalil": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/four-seasons-kl": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/petaling-jaya": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/kota-kemuning": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/southkey-johor-bahru": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/pelangi-johor-bahru": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/locations/kota-kinabalu": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jessie-lim": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-chew-yuhhui": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-yeong-bin": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-william-yap": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-lim-xiao-chien": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jeremy-low": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-chang-chee-seong": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jacqueline-tan": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-joaan-kong": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-tim-chua": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-calvin-tan": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-lucas-chew": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jade": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-teresa-tan": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-chin-wei-horng": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-yvonne-chuah": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jamie-gan": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-jen-meng": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-chloe-wan": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-say-wei-xian": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/doctors/dr-hong-peiyi": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/our-story": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/products": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/privacy": { status: "signed", date: "2026-10-28", doctor: "dr-chew-yuhhui" },
    "/treatments/bio-stimulator": { status: "signed", date: "2026-10-28" },
    "/treatments/botulinum-toxin": { status: "signed", date: "2026-10-28" },
    "/treatments/dermal-fillers": { status: "signed", date: "2026-10-28" },
    "/treatments/double-eyelid": { status: "signed", date: "2026-10-28" },
    "/treatments/exosome-therapy": { status: "signed", date: "2026-10-28" },
    "/treatments/facial-treatments": { status: "signed", date: "2026-10-28" },
    "/treatments/fat-freezing": { status: "signed", date: "2026-10-28" },
    "/treatments/fotona-4d": { status: "signed", date: "2026-10-28" },
    "/treatments/hifu": { status: "signed", date: "2026-10-28" },
    "/treatments/k-premium-lifting": { status: "draft", doctor: "dr-chew-yuhhui" },
    "/treatments/laser-hair-removal": { status: "signed", date: "2026-10-28" },
    "/treatments/microneedling": { status: "signed", date: "2026-10-28" },
    "/treatments/microwave-contouring": { status: "signed", date: "2026-10-28" },
    "/treatments/muscle-stimulation": { status: "signed", date: "2026-10-28" },
    // 2026-11-28: Deusaderm for panda eyes, the under-eye use of
    // /technology/deusaderm, a draft for that page's doctor. Written the same
    // day as /technology/deusaderm-panda-eye and moved to the treatment type
    // before it went live, so no redirect. Also drafted by Claude and not yet
    // read: the sentence and link in the parent's under-eye section, which now
    // point here, and the new treatment card ("For a hollow where filler is a
    // poor fit") on the signed /concerns/dark-eye-circles, which replaces the
    // treatmentsNote drafted earlier that day (English, 中文 and BM). Send those
    // to each page's reviewer.
    "/treatments/panda-eye-treatment": { status: "draft", doctor: "dr-jacqueline-tan" },
    "/treatments/pico-laser": { status: "signed", date: "2026-10-28" },
    "/treatments/radiofrequency": { status: "signed", date: "2026-10-28" },
    "/treatments/resurfacing-laser": { status: "signed", date: "2026-10-28" },
    "/treatments/skin-booster": { status: "signed", date: "2026-10-28" },
    "/treatments/ultherapy": { status: "signed", date: "2026-10-28" },
    "/treatments/vascular-pigment-laser": { status: "signed", date: "2026-10-28" },
    "/concerns/acne": { status: "signed", date: "2026-10-28" },
    "/concerns/acne-scars": { status: "signed", date: "2026-10-28" },
    "/concerns/aging": { status: "signed", date: "2026-10-28" },
    "/concerns/birthmark": { status: "signed", date: "2026-10-28" },
    "/concerns/body-slimming": { status: "signed", date: "2026-10-28" },
    "/concerns/dark-eye-circles": { status: "signed", date: "2026-10-28" },
    "/concerns/enlarged-pores": { status: "signed", date: "2026-10-28" },
    "/concerns/excessive-sweating": { status: "signed", date: "2026-10-28" },
    "/concerns/face-contouring": { status: "signed", date: "2026-10-28" },
    "/concerns/face-lifting": { status: "signed", date: "2026-10-28" },
    "/concerns/fine-lines-wrinkles": { status: "signed", date: "2026-10-28" },
    "/concerns/hair-loss": { status: "signed", date: "2026-10-28" },
    "/concerns/melasma": { status: "signed", date: "2026-10-28" },
    // kt101: Dr Chew signed the English and both translations, 2026-11-09.
    "/concerns/skin-tags-moles": { status: "signed", date: "2026-11-09" },
    "/concerns/pigmentation": { status: "signed", date: "2026-10-28" },
    "/concerns/tattoo-removal": { status: "signed", date: "2026-10-28" },
    "/concerns/vascular-lesions": { status: "signed", date: "2026-10-28" },
    // 2026-11-28: product detail page, a draft as in zh above.
    "/products/doubleblock-uv-sunscreen": { status: "draft", doctor: "dr-chew-yuhhui" },
  },
};
