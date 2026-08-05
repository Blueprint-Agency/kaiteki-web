import type { Post, PostCategory } from "@/lib/types";

/**
 * /blog index. Metadata only — each post's body is `content/blog/<slug>.mdx`.
 *
 * Order here is authoring order and is NOT the display order: every consumer
 * sorts by `publishedAt` via `postsNewestFirst()`, so adding a post is a matter
 * of appending an entry + dropping in the .mdx file.
 *
 * Compliance: descriptions and lead answers are advertising copy under the MAB
 * rules, so they stay factual — no outcome guarantees, no superlatives, no
 * before/after or testimonial framing (docs/02 §8).
 */
export const posts: Post[] = [
  {
    slug: "eczema-treatment-daily-skincare-to-clinic-care",
    title: "Eczema treatment: from daily skincare to in-clinic care",
    seoTitle: "Eczema Treatment: Daily Skincare to Clinic Care | Kaiteki",
    description:
      "How to manage eczema with the right daily routine, what triggers flares in Malaysia, and when to see a doctor. Causes, ingredients and clinic options.",
    category: "Skin Concerns",
    // No hero supplied, so this renders the generated BlogMotif.
    author: "dr-yvonne-chuah",
    publishedAt: "2026-08-05",
    readingMinutes: 8,
    leadAnswer:
      "Effective eczema treatment starts with a consistent daily skincare routine built around gentle cleansing, barrier repair moisturisers and targeted topical treatments. When home care is not enough, professional options range from prescription corticosteroids and calcineurin inhibitors to phototherapy and biologic medications like dupilumab.",
    featured: true,
  },
  {
    slug: "excessive-sweating-hyperhidrosis-causes-treatment",
    title: "Excessive sweating (hyperhidrosis): causes and how it’s treated",
    seoTitle: "Excessive Sweating (Hyperhidrosis): Causes & Treatment | Kaiteki",
    description:
      "Struggling with excessive sweating? What causes hyperhidrosis, how it is diagnosed, and the options from antiperspirants to botulinum toxin.",
    category: "Skin Concerns",
    // No hero supplied, so this renders the generated BlogMotif.
    author: "dr-joaan-kong",
    publishedAt: "2026-08-05",
    readingMinutes: 8,
    leadAnswer:
      "Excessive sweating without a clear trigger is a medical condition called hyperhidrosis, affecting roughly 4.8% of people worldwide. Treatment ranges from clinical strength antiperspirants to Botox injections and longer lasting options like miraDry. Which suits you depends on the type, the areas affected and how severe it is.",
    concerns: ["excessive-sweating"],
    treatments: ["botulinum-toxin"],
  },
  {
    slug: "best-moisturiser-keratosis-pilaris-when-creams-not-enough",
    title: "Best moisturisers for keratosis pilaris, and when creams aren’t enough",
    seoTitle: "Best Moisturisers for Keratosis Pilaris | Kaiteki Malaysia",
    description:
      "Struggling with rough, bumpy skin? Which ingredients help keratosis pilaris, how to apply them, and when it is worth seeing a doctor.",
    category: "Skincare",
    // No hero supplied, so this renders the generated BlogMotif. Swap in real
    // photography (and write imageAlt) when it's available.
    author: "dr-chin-wei-horng",
    publishedAt: "2026-08-05",
    readingMinutes: 7,
    leadAnswer:
      "Moisturisers that help most with keratosis pilaris contain a chemical exfoliant: lactic acid, salicylic acid or urea. These loosen the keratin plugs, and ceramides alongside them support the skin barrier. Allow four to six weeks of daily use. Where creams are not enough, a doctor can discuss prescription retinoids, clinic peels or laser.",
    concerns: ["excessive-sweating", "acne"],
    treatments: ["resurfacing-laser", "vascular-pigment-laser", "facial-treatments"],
  },
  {
    slug: "alma-titanium-lifting",
    title: "Alma Titanium Lifting: is this non-surgical facelift worth it?",
    seoTitle: "Alma Titanium Lifting: Non-Surgical Facelift Explained | Kaiteki",
    description:
      "How Alma Titanium Lifting works, the areas it treats, who it suits and how many sessions a course usually takes, explained by a Kaiteki doctor.",
    category: "Treatments Explained",
    image: "/images/blog/alma-titanium-lifting.jpg",
    imageAlt:
      "Alma Titanium Lifting, a triple-wavelength laser lifting treatment at Kaiteki Skin Aesthetic Clinic",
    author: "dr-calvin-tan",
    publishedAt: "2026-07-04",
    readingMinutes: 4,
    leadAnswer:
      "Titanium Lifting is a non-invasive laser treatment. It uses three wavelengths (755nm, 810nm and 1064nm) to work across several skin depths at once, with the aim of tightening skin, supporting collagen and refining facial contour without surgery or significant downtime.",
    concerns: ["face-lifting", "aging", "face-contouring"],
    treatments: ["hifu", "ultherapy", "radiofrequency"],
    legacyPath: "/alma-titanium-lifting-is-this-non-surgical-facelift-worth-it/",
  },
  {
    slug: "discovery-pico-vs-picosure",
    title: "Discovery Pico vs PicoSure: which laser delivers better results?",
    seoTitle: "Discovery Pico vs PicoSure: An Honest Comparison | Kaiteki",
    description:
      "Discovery Pico and PicoSure compared on wavelengths, melasma cautions and safety for Asian skin, so you can ask your doctor the right questions.",
    category: "Device & Injectables",
    image: "/images/blog/discovery-pico-vs-picosure.png",
    imageAlt:
      "Discovery Pico and PicoSure picosecond lasers compared for pigmentation and tattoo treatment at Kaiteki",
    author: "dr-joaan-kong",
    publishedAt: "2026-05-28",
    readingMinutes: 6,
    leadAnswer:
      "Neither device is universally better. Discovery Pico offers three native wavelengths and a 1064nm option that is generally the lower-risk setting on deeper skin tones; PicoSure's 755nm and Focus lens are strong on green and blue tattoo ink and skin revitalisation. The right choice depends on your concern, your skin type and your doctor's assessment.",
    concerns: ["pigmentation", "tattoo-removal"],
    treatments: ["pico-laser"],
    technology: ["picosure"],
    legacyPath: "/discovery-pico-vs-picosure/",
  },
  {
    slug: "wegovy-vs-mounjaro",
    title: "Wegovy vs Mounjaro: which is better for you?",
    seoTitle: "Wegovy vs Mounjaro: What the Head-to-Head Trial Shows | Kaiteki",
    description:
      "Wegovy and Mounjaro compared on how they work, the SURMOUNT-5 head-to-head data, side effects, switching, and availability in Malaysia.",
    category: "Weight & Wellness",
    image: "/images/blog/wegovy-vs-mounjaro.png",
    imageAlt:
      "Wegovy and Mounjaro weekly injection pens compared for medical weight management at Kaiteki",
    author: "dr-tim-chua",
    publishedAt: "2026-05-26",
    readingMinutes: 7,
    leadAnswer:
      "Both are once-weekly prescription injections for weight management. In SURMOUNT-5, the one large head-to-head trial, tirzepatide (Mounjaro) produced greater average weight loss than semaglutide (Wegovy). Averages are not individuals: suitability depends on your medical history, tolerance and a doctor's assessment.",
    concerns: ["body-slimming"],
    legacyPath: "/wegovy-vs-mounjaro-which-is-better-for-you/",
  },
];

/** Display order everywhere — newest first. */
export function postsNewestFirst(): Post[] {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function postBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Categories that actually have posts, in the order declared on PostCategory.
 *  Empty archives are never linked — a thin-content and crawl-budget problem. */
const CATEGORY_ORDER: PostCategory[] = [
  "Treatments Explained",
  "Skin Concerns",
  "Device & Injectables",
  "Weight & Wellness",
  "Skincare",
];

export function activeCategories(): PostCategory[] {
  return CATEGORY_ORDER.filter((c) => posts.some((p) => p.category === c));
}

/** URL-safe slug for a category archive, e.g. "Device & Injectables" → "device-injectables". */
export function categorySlug(category: PostCategory): string {
  return category
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function categoryBySlug(slug: string): PostCategory | undefined {
  return CATEGORY_ORDER.find((c) => categorySlug(c) === slug);
}

export function postsInCategory(category: PostCategory): Post[] {
  return postsNewestFirst().filter((p) => p.category === category);
}

/** The post shown large at the top of the hub — the flagged one, else the newest. */
export function featuredPost(): Post {
  return posts.find((p) => p.featured) ?? postsNewestFirst()[0];
}

/** Up to `limit` related posts: explicit `related` first, then same-category,
 *  then newest — so a young blog never renders an empty "Keep reading" block. */
export function relatedPosts(post: Post, limit = 3): Post[] {
  const seen = new Set([post.slug]);
  const out: Post[] = [];

  const push = (p: Post | undefined) => {
    if (!p || seen.has(p.slug) || out.length >= limit) return;
    seen.add(p.slug);
    out.push(p);
  };

  post.related?.forEach((s) => push(postBySlug(s)));
  postsInCategory(post.category).forEach(push);
  postsNewestFirst().forEach(push);
  return out;
}
