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
    slug: "ultherapy-vs-hifu-difference-which-suits-you",
    title: "Ultherapy vs HIFU: what’s the difference and which suits you?",
    seoTitle: "Ultherapy vs HIFU: What’s the Difference? | Kaiteki",
    description:
      "Ultherapy and HIFU both use focused ultrasound. How they differ in imaging and delivery, what each costs in Malaysia, and how to check the device is genuine.",
    category: "Treatments Explained",
    image:
      "https://cdn.kaiteki.my/blog/ultherapy-vs-hifu-difference-which-suits-you/ultherapy-vs-hifu-difference-which-suits-you.png",
    imageAlt:
      "A woman lying back as a clinician passes an ultrasound handpiece along her jawline, for a Kaiteki guide comparing Ultherapy and HIFU",
    author: "dr-jamie-gan",
    reviewedBy: "dr-chew-yuhhui",
    publishedAt: "2026-08-13",
    readingMinutes: 10,
    leadAnswer:
      "Both use focused ultrasound to reach the deeper support layer of the face without surgery, and Kaiteki offers both. The substantive difference is imaging: the Ultherapy platform lets the doctor view tissue layers on screen before delivering energy, while HIFU devices treat at depths set by the cartridge and clinical assessment.",
    concerns: ["face-lifting", "aging"],
    treatments: ["ultherapy", "hifu"],
    technology: ["ultherapy-system", "ultracel-q", "lifthera"],
    related: ["alma-titanium-lifting"],
  },
  {
    slug: "how-to-reduce-facial-redness-causes-treatment",
    title: "How to reduce facial redness: what causes it and what actually helps",
    seoTitle: "How to Reduce Facial Redness: Causes & Treatment | Kaiteki",
    description:
      "What causes facial redness, which ingredients calm it, how ageing skin makes it worse, and when vascular laser or IPL is the right next step.",
    category: "Skin Concerns",
    image:
      "https://cdn.kaiteki.my/blog/how-to-reduce-facial-redness-causes-treatment/how-to-reduce-facial-redness-causes-treatment.png",
    imageAlt:
      "Illustration of a woman with a flushed face wearing a soothing mask and hair towel, for a Kaiteki guide to facial redness",
    author: "dr-jeremy-low",
    publishedAt: "2026-08-13",
    readingMinutes: 8,
    leadAnswer:
      "Facial redness comes from dilated blood vessels near the skin's surface or from inflammation that has damaged the skin barrier. Rosacea, sun damage and over-exfoliation are the usual causes. A gentle barrier-repair routine with daily SPF 50+ settles most cases; persistent vessels are addressed with vascular laser or IPL.",
    concerns: ["vascular-lesions", "aging"],
    treatments: ["vascular-pigment-laser"],
    technology: ["pro-yellow", "dermav", "m22-ipl"],
    related: ["melasma-treatment-malaysia-causes-skincare"],
  },
  {
    slug: "melasma-treatment-malaysia-causes-skincare",
    title: "Melasma treatment in Malaysia: causes, skincare and when to see a doctor",
    seoTitle: "Melasma Treatment Malaysia: Causes & Skincare | Kaiteki",
    description:
      "What causes melasma in Malaysia's tropical climate, how to manage it with daily skincare and sun protection, and when professional treatment is the next step.",
    category: "Skin Concerns",
    image:
      "https://cdn.kaiteki.my/blog/melasma-treatment-malaysia-causes-skincare/melasma-treatment-malaysia-causes-skincare.png",
    imageAlt:
      "Illustration of a woman touching her cheek where a melasma patch sits, for a Kaiteki guide to melasma treatment in Malaysia",
    author: "dr-joaan-kong",
    publishedAt: "2026-08-13",
    readingMinutes: 8,
    leadAnswer:
      "Melasma is a chronic pigmentation disorder causing symmetrical brown or grey patches on the face, driven by UV exposure, hormones and genetics. Daily broad-spectrum SPF 50+ is the foundation of every plan. Where that is not enough, doctors add topical brighteners, oral tranexamic acid or low-energy Pico Laser.",
    concerns: ["pigmentation"],
    treatments: ["pico-laser", "vascular-pigment-laser"],
    related: ["how-to-reduce-facial-redness-causes-treatment", "discovery-pico-vs-picosure"],
  },
  {
    slug: "eczema-treatment-daily-skincare-to-clinic-care",
    title: "Eczema treatment: from daily skincare to in-clinic care",
    seoTitle: "Eczema Treatment: Daily Skincare to Clinic Care | Kaiteki",
    description:
      "How to manage eczema with the right daily routine, what triggers flares in Malaysia, and when to see a doctor. Causes, ingredients and clinic options.",
    category: "Skin Concerns",
    image:
      "https://cdn.kaiteki.my/blog/eczema-treatment-daily-skincare-to-clinic-care/eczema-treatment-daily-skincare-to-clinic-care.png",
    imageAlt:
      "Illustration of a woman with eczema patches on her arms, for a Kaiteki guide to daily skincare and in-clinic eczema care",
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
    seoTitle: "Excessive Sweating (Hyperhidrosis): Causes & Care | Kaiteki",
    description:
      "Struggling with excessive sweating? What causes hyperhidrosis, how it is diagnosed, and the options from antiperspirants to botulinum toxin.",
    category: "Skin Concerns",
    image:
      "https://cdn.kaiteki.my/blog/excessive-sweating-hyperhidrosis-causes-treatment/excessive-sweating-hyperhidrosis-causes-treatment.png",
    imageAlt:
      "Illustration of a woman blotting sweat from her face, for a Kaiteki guide to hyperhidrosis causes and treatment",
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
    image:
      "https://cdn.kaiteki.my/blog/best-moisturiser-keratosis-pilaris-when-creams-not-enough/best-moisturiser-keratosis-pilaris-when-creams-not-enough.png",
    imageAlt:
      "Illustration of a woman applying moisturiser beside an open cream jar, for a Kaiteki guide to keratosis pilaris moisturisers",
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
    seoTitle: "Alma Titanium Lifting: Non-Surgical Lifting | Kaiteki",
    description:
      "How Alma Titanium Lifting works, the areas it treats, who it suits and how many sessions a course usually takes, explained by a Kaiteki doctor.",
    category: "Treatments Explained",
    image: "https://cdn.kaiteki.my/blog/alma-titanium-lifting/alma-titanium-lifting.jpg",
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
    image: "https://cdn.kaiteki.my/blog/discovery-pico-vs-picosure/discovery-pico-vs-picosure.png",
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
    seoTitle: "Wegovy vs Mounjaro: What the Trial Shows | Kaiteki",
    description:
      "Wegovy and Mounjaro compared on how they work, the SURMOUNT-5 head-to-head data, side effects, switching, and availability in Malaysia.",
    category: "Weight & Wellness",
    image: "https://cdn.kaiteki.my/blog/wegovy-vs-mounjaro/wegovy-vs-mounjaro.png",
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
  {
    slug: "hair-loss-treatment-malaysia-options-how-to-choose",
    title: "Hair loss treatment in Malaysia: the options, and how to choose",
    seoTitle: "Hair Loss Treatment Malaysia: How to Choose | Kaiteki",
    description:
      "Compare hair loss treatment options in Malaysia, from topical minoxidil and PRP to exosome therapy and transplant surgery, and how to choose the right one.",
    category: "Skin Concerns",
    author: "dr-tim-chua",
    reviewedBy: "dr-william-yap",
    publishedAt: "2026-09-06",
    readingMinutes: 11,
    leadAnswer:
      "Hair loss treatment in Malaysia ranges from over-the-counter topicals to prescription medical management, in-clinic regenerative treatment and transplant surgery. Which one is appropriate depends on the cause, which is why a scalp assessment comes first. Hereditary pattern loss, stress-related shedding and a scalp condition are each managed differently.",
    concerns: ["hair-loss"],
    treatments: ["exosome-therapy"],
    related: ["excessive-sweating-hyperhidrosis-causes-treatment"],
    faqs: [
      {
        q: "What is the most effective hair loss treatment?",
        a: "There is no single answer, because effectiveness depends on the cause. Hereditary pattern loss is managed medically for the long term, often with in-clinic treatment alongside it. Shedding after illness, childbirth or a stressful period usually settles once the trigger passes. A scalp condition or an iron or thyroid problem needs that cause treated first, since hair rarely improves while the reason it is falling remains unaddressed.",
      },
      {
        q: "Is hair loss reversible?",
        a: "It depends on the cause. Telogen effluvium, the shedding that follows illness, surgery, childbirth or severe stress, usually recovers once the trigger has resolved. Hereditary pattern loss is managed rather than cured, and starting earlier generally leaves more to work with. Follicles that have scarred or been dormant for years cannot be brought back by any treatment, which is why timing matters here more than in most concerns.",
      },
      {
        q: "Why does Kaiteki not publish hair loss treatment prices?",
        a: "Because a price is meaningless before an assessment. What it depends on is the area involved, whether investigation such as blood testing is needed first, how many sessions are appropriate, and whether medical management forms part of the plan alongside in-clinic treatment. The doctor goes through the specifics with you at the consultation, which is free, before you commit to anything.",
      },
      {
        q: "Does minoxidil work for women?",
        a: "Topical minoxidil is well established for female pattern hair loss and is one of the usual starting points. A low-dose oral form is also prescribed for some women under medical supervision. It works only for as long as it is used, and in women it is worth pairing with investigation of iron status and thyroid function, since those are frequent contributors that no topical addresses.",
      },
      {
        q: "How long before hair loss treatment is reviewed?",
        a: "Hair changes slowly, so every option here is judged over months rather than weeks. Photographs taken at the start and compared later are far more reliable than memory or a mirror. Some people notice a brief increase in shedding early in a course, which is expected and should be explained to you in advance. Anyone offering regrowth on a fixed timetable is overstating what is known.",
      },
      {
        q: "Do I need blood tests for hair loss?",
        a: "Often, particularly where the loss is diffuse, came on suddenly, or comes with other symptoms such as fatigue or nail changes. Thyroid function and iron status are common and treatable contributors that no topical or in-clinic treatment addresses, and finding one changes the plan entirely. A clinic proposing a course of treatment for diffuse hair loss without investigating anything is worth questioning.",
      },
      {
        q: "Does Kaiteki perform hair transplant surgery?",
        a: "No. Kaiteki assesses hair loss, investigates the cause, and offers in-clinic treatment alongside medical management where that is appropriate. Transplant surgery is not performed here. If your assessment points that way, the doctor will tell you directly rather than recommend a course of something else.",
      },
    ],
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
