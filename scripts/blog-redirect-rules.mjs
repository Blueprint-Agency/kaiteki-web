// Where every URL of the legacy blog.kaiteki.my goes. Shared by
// scripts/blog-migrate-legacy.mjs (to re-point in-body links) and
// scripts/blog-redirects.mts (to build the 301 map), so the two never disagree.

export const SITE = "https://kaiteki.my";

/** Legacy posts already ported by hand to a rewritten post under a new slug.
 *  Not migrated again; links to them point at the rewrite. */
export const MOVED = {
  "alma-titanium-lifting-is-this-non-surgical-facelift-worth-it": "/blog/alma-titanium-lifting",
  "discovery-pico-vs-picosure": "/blog/picocare-vs-picosure",
  "wegovy-vs-mounjaro-which-is-better-for-you": "/blog/wegovy-vs-mounjaro",
};

/** Old slugs that posts still link to. WordPress 301s the first three; the rest
 *  already 404 on the old host (their redirect was lost when the post was
 *  renamed), so the link goes to the post that took the name. */
export const RENAMED = {
  "fotona-laser-what-does-it-do": "fotona-4d-laser",
  "sylfirm-x-what-does-it-do": "sylfirm-x-price-malaysia",
  ultherapy: "ultherapy-malaysia",
  "fotona-4d-laser-what-does-it-do": "fotona-4d-laser",
  "kaitekis-onda-coolwave-treatment-5-things-to-know-about": "onda-coolwave-treatment",
  "a-beginners-guide-to-dermal-fillers": "dermal-fillers",
  "whats-the-best-pico-laser-for-the-skin": "pico-laser",
};

/** WP category slug → our PostCategory. First match in the post's own
 *  category order wins; the WP names themselves are kept as `tags`. */
export const CATEGORIES = {
  lasers: "Device & Injectables",
  injectables: "Device & Injectables",
  "skin-boosters": "Device & Injectables",
  rejuran: "Device & Injectables",
  "fotona-tightsculpting": "Device & Injectables",
  microneedling: "Treatments Explained",
  lifting: "Treatments Explained",
  "medical-facial": "Treatments Explained",
  "chemical-peels": "Treatments Explained",
  "minor-surgery": "Treatments Explained",
  hydrafacial: "Treatments Explained",
  "platelet-rich-plasma-prp": "Treatments Explained",
  "laser-hair-removal-vs-ipl": "Treatments Explained",
  "treatment-vs-treatment": "Treatments Explained",
  "botox-vs-dermal-filler": "Treatments Explained",
  "chemical-peel-vs-microneedling": "Treatments Explained",
  "picosure-laser-vs-picolaser": "Treatments Explained",
  "skin-rejuvenation": "Treatments Explained",
  acne: "Skin Concerns",
  "acne-scars": "Skin Concerns",
  aging: "Skin Concerns",
  sagging: "Skin Concerns",
  pigmentation: "Skin Concerns",
  wrinkles: "Skin Concerns",
  pores: "Skin Concerns",
  "dark-eye-circles": "Skin Concerns",
  "uneven-skin-tone": "Skin Concerns",
  "sensitive-skin": "Skin Concerns",
  "skin-bumps": "Skin Concerns",
  "skin-texture-elasticity": "Skin Concerns",
  "tattoo-removal": "Skin Concerns",
  birthmark: "Skin Concerns",
  blackhead: "Skin Concerns",
  hair: "Skin Concerns",
  slimming: "Weight & Wellness",
  "slimming-body-contouring": "Weight & Wellness",
  coolsculpting: "Weight & Wellness",
  "coolsculpting-slimming-body-contouring": "Weight & Wellness",
  "coolsculpting-vs-body-contouring": "Weight & Wellness",
  "healthy-living": "Weight & Wellness",
  "skin-care": "Skincare",
  "skincare-tips": "Skincare",
  sunburn: "Skincare",
  athletes: "Skincare",
  "busy-parents": "Skincare",
  "night-owls": "Skincare",
  "humid-climates": "Skincare",
};
export const FALLBACK_CATEGORY = "Treatments Explained";

/** Same as categorySlug() in content/data/blog.ts. */
export function categorySlug(category) {
  return category
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Doorway-page area → branch slug. These 51 pages ("skin-specialist-in-cheras",
 * "dermatologist-in-puchong", …) are near-duplicates of each other, which is
 * what Google's spam policy calls a doorway. They are NOT migrated; the local
 * intent is folded into the nine real branch pages.
 *
 * Derived from each branch's `serves` list in content/data/branches.ts, then
 * hand-checked. Areas with no sensible branch go to the /locations hub.
 */
export const AREA_TO_BRANCH = {
  // Kuala Lumpur
  "mont-kiara": "mont-kiara",
  cheras: "cheras",
  "bukit-jalil": "bukit-jalil",
  "sri-petaling": "bukit-jalil",
  puchong: "bukit-jalil",
  "bukit-bintang": "four-seasons-kl",
  ampang: "four-seasons-kl",
  "kuala-lumpur": "four-seasons-kl",
  "mid-valley": "four-seasons-kl",
  bangsar: "four-seasons-kl",
  kepong: "mont-kiara",
  // Selangor
  "petaling-jaya": "petaling-jaya",
  ss2: "petaling-jaya",
  damansara: "petaling-jaya",
  "kota-damansara": "petaling-jaya",
  ttdi: "petaling-jaya",
  "subang-jaya": "petaling-jaya",
  "shah-alam": "kota-kemuning",
  "kota-kemuning": "kota-kemuning",
  klang: "kota-kemuning",
  "setia-alam": "kota-kemuning",
  // Johor
  "johor-bahru": "southkey-johor-bahru",
};

export const DOORWAY_RE = /^(skin-specialist|skin-clinic|dermatologist|aesthetic-clinic)-in-(.+)$/;

/** Site-relative destination for a legacy WP *page* slug: a doorway goes to
 *  its branch (or the locations hub), anything else to the blog hub. */
export function doorwayDestination(slug) {
  const m = DOORWAY_RE.exec(slug);
  if (!m) return "/blog";
  const branch = AREA_TO_BRANCH[m[2]];
  return branch ? `/locations/${branch}` : "/locations";
}

/** Injected piracy spam from a compromised WordPress. 410 Gone, never a 301:
 *  a redirect would pass its toxic signals onto the main domain. */
export const SPAM = ["kmspico-download-for-windows-10", "microsoft-office-activator-download"];

/** Malay posts. Not migrated (decision 2026-10-11); they 301 to the blog hub
 *  until a /ms locale exists to give them a real home. */
export const MALAY = [
  "apakah-itu-post-inflammatory-hyperpigmentation-pih-parut-jerawat-hitam",
  "cara-hilangkan-eyebag",
  "jeragat-muka-punca-jenis-cara-hilangkan-degan-selamat",
  "kulit-muka-kering-punca-cara-rawatan-berkesan",
  "kulit-muka-kusam",
  "muka-breakout-punca-cara-atasi-dan-bila-perlu-rawatan-klinik",
  "pigmentasi-vs-jeragat-punca-ciri-pilihan-rawatan",
  "punca-rambut-gugur-kenali-sebab-dan-cara-mengatasinya",
];
