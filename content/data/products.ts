import type { Product, ProductGroup } from "@/lib/types";

// Kaiteki® Cosmeceuticals — the clinic's retail skincare line plus resold
// partner brands. Migrated from the legacy `/skincare.html` product catalogue
// (top-level "Skin Care" nav item). Prices are the legacy RM values.
//
// Copy is adapted from the legacy per-product blurbs, but hard efficacy/outcome
// claims ("reverse aging", "removes 99.99% of germs", "repairs cellular damage")
// have been softened to factual, product-type descriptions for YMYL / Malaysian
// medical-advertising compliance (docs/02 §8). Ingredients, SPF, format, size and
// suitability are retained as decision-useful facts. Final copy pending client +
// compliance sign-off. Conversion is WhatsApp-only (no cart/checkout).
export const products: Product[] = [
  // ── Kaiteki® own-brand ──────────────────────────────────────────────
  {
    slug: "hydroglow-masks",
    name: "Kaiteki® HydroGlow Masks",
    brand: "Kaiteki",
    group: "Kaiteki® Cosmeceuticals",
    category: "Sheet Mask",
    price: 168,
    summary:
      "A hydrating sheet mask packed with concentrated hyaluronic acid and vitamin C (L-ascorbic acid) for an instant boost of moisture and radiance between clinic visits.",
    ingredients: ["Hyaluronic acid", "Vitamin C (L-ascorbic acid)"],
    bestFor: "All skin types",
    highlights: ["5 masks per set", "Use 1–2 times a week", "Antioxidant vitamin C"],
  },
  {
    slug: "intense-hydration-cream",
    name: "Kaiteki Intense Hydration Cream",
    brand: "Kaiteki",
    group: "Kaiteki® Cosmeceuticals",
    category: "Moisturiser",
    price: 200,
    summary:
      "A rich moisturiser powered by ceramides, hyaluronic acid and centella for long-lasting hydration, formulated for sensitive, dehydrated skin.",
    ingredients: ["Ceramides", "Hyaluronic acid", "Centella"],
    bestFor: "Sensitive, dehydrated skin",
    concerns: ["aging"],
  },
  {
    slug: "acne-spot-serum",
    name: "Kaiteki® Acne Spot Serum",
    brand: "Kaiteki",
    group: "Kaiteki® Cosmeceuticals",
    category: "Targeted Serum",
    price: 60,
    summary:
      "A lightweight targeted serum with salicylic acid, made for dabbing directly onto individual blemishes as a quick fix.",
    ingredients: ["Salicylic acid"],
    bestFor: "Blemish-prone skin",
    concerns: ["acne"],
  },
  {
    slug: "ultra-soothing-face-mist",
    name: "Kaiteki® Ultra Soothing Face Mist",
    brand: "Kaiteki",
    group: "Kaiteki® Cosmeceuticals",
    category: "Face Mist",
    price: 90,
    summary:
      "A refreshing facial mist enriched with collagen, peptides and aloe vera to rehydrate and soothe skin any time of day.",
    ingredients: ["Collagen", "Peptides", "Aloe vera"],
  },
  {
    slug: "ultra-nourishing-body-lotion",
    name: "Kaiteki® Ultra Nourishing Body Lotion",
    brand: "Kaiteki",
    group: "Kaiteki® Cosmeceuticals",
    category: "Body Care",
    price: 150,
    summary:
      "An everyday body lotion infused with nourishing botanical oils to hydrate and support the skin barrier from neck to toe.",
    ingredients: ["Botanical oils"],
  },
  {
    slug: "ultra-soothing-cleansing-gel",
    name: "Kaiteki® Ultra Soothing Cleansing Gel",
    brand: "Kaiteki",
    group: "Kaiteki® Cosmeceuticals",
    category: "Cleanser",
    price: 120,
    summary:
      "A gentle gel cleanser with chamomile and cucumber extract that lifts make-up and impurities without stripping the skin, leaving it soft and comfortable.",
    ingredients: ["Chamomile", "Cucumber extract"],
    bestFor: "All skin types",
    highlights: ["Non-comedogenic", "Non-irritating", "Removes make-up & impurities"],
  },
  {
    slug: "ultra-hydrating-serum",
    name: "Kaiteki® Ultra Hydrating Serum",
    brand: "Kaiteki",
    group: "Kaiteki® Cosmeceuticals",
    category: "Serum",
    price: 250,
    summary:
      "A concentrated serum pairing pure hyaluronic acid with vitamin B5 for a serious moisture boost, layered under your moisturiser as part of a simple daily routine.",
    ingredients: ["Hyaluronic acid", "Vitamin B5"],
  },
  {
    slug: "hydro-boost-moisturiser",
    name: "Kaiteki® Hydro Boost Moisturiser",
    brand: "Kaiteki",
    group: "Kaiteki® Cosmeceuticals",
    category: "Moisturiser",
    price: 150,
    summary:
      "An ultra-light, non-comedogenic gel-cream with ceramides and tea tree oil. Formulated for daily hydration and to help with the look of pores, fine lines, uneven tone and redness.",
    ingredients: ["Ceramides", "Tea tree oil"],
    bestFor: "All skin types",
    highlights: ["Non-comedogenic", "Lightweight gel-cream"],
  },
  {
    slug: "pore-refining-essence",
    name: "Kaiteki® Pore Refining Essence",
    brand: "Kaiteki",
    group: "Kaiteki® Cosmeceuticals",
    category: "Essence",
    price: 120,
    summary:
      "A gentle exfoliating essence with mild lactic and glycolic acids that helps unclog pores and smooth texture for a brighter-looking complexion.",
    ingredients: ["Lactic acid", "Glycolic acid"],
    bestFor: "Congestion, blackheads & uneven texture",
    highlights: ["Gentle daily exfoliation", "Helps clear oil build-up"],
    concerns: ["enlarged-pores"],
  },
  {
    slug: "doubleblock-uv-sunscreen",
    name: "Kaiteki® DoubleBlock UV Sunscreen",
    brand: "Kaiteki",
    group: "Kaiteki® Cosmeceuticals",
    category: "Sunscreen",
    price: 150,
    summary:
      "A broad-spectrum SPF 50 facial sunscreen with octocrylene that shields against UVA and UVB rays while keeping skin moisturised, finishing light and matte.",
    ingredients: ["Octocrylene"],
    highlights: [
      "SPF 50, broad-spectrum UVA/UVB",
      "Water-resistant",
      "Oil-free matte finish",
      "Fragrance-free",
    ],
    concerns: ["pigmentation"],
  },
  // ── Partner brands (resold) ─────────────────────────────────────────
  {
    slug: "nanomd",
    name: "NanoMD®",
    brand: "NanoMD",
    group: "Partner Brands",
    category: "Oral Supplement",
    price: 550,
    priceNote: "or 3 for RM1,200",
    summary:
      "An oral skin supplement with Pycnogenol, tomato extract and L-cysteine, using nano-technology for high absorption — taken as one tablet a day.",
    ingredients: ["Pycnogenol", "Tomato extract", "L-cysteine"],
    bestFor: "Pigmentation, radiance & overall skin health",
    highlights: ["One tablet daily", "Nano-tech for absorption"],
    concerns: ["pigmentation"],
  },
  {
    slug: "heliocare-d-plus",
    name: "Heliocare D Plus",
    brand: "Heliocare",
    group: "Partner Brands",
    category: "Oral Sun Protection",
    price: 200,
    summary:
      "Oral capsules that support your skin's sun defence from within — designed to be used together with, not as a replacement for, a topical sunscreen.",
    ingredients: ["Vitamin D", "Antioxidants"],
    bestFor: "Added daily UV & blue-light protection",
    highlights: [
      "Use alongside topical sunscreen (not a replacement)",
      "Also helps against screen blue light",
      "Antioxidant",
    ],
    concerns: ["pigmentation"],
  },
  {
    slug: "heliocare-luminance",
    name: "Heliocare Luminance",
    brand: "Heliocare",
    group: "Partner Brands",
    category: "Oral Supplement",
    price: 480,
    summary:
      "A daily oral supplement with glutathione, rosemary extract and nicotinamide, supporting protection against UV, visible light and pollution for a more even, radiant-looking complexion.",
    ingredients: ["Glutathione", "Rosemary extract", "Nicotinamide"],
    bestFor: "Radiance & even tone",
    concerns: ["pigmentation"],
  },
  {
    slug: "klenskin-shower-on-sunscreen",
    name: "KLĒNSKIN SPA Shower On® Sunscreen",
    brand: "KLĒNSKIN",
    group: "Partner Brands",
    category: "Sunscreen",
    price: 198,
    summary:
      "A 3-in-1 shampoo, face and body wash with broad-spectrum SPF 30 — a clinically studied 'shower-on' sunscreen that cleanses and leaves a protective barrier in a single step.",
    bestFor: "Body & scalp sun protection in the shower",
    highlights: [
      "SPF 30, broad-spectrum UVA/UVB",
      "QUANTASPHERE® encapsulated technology",
      "80-minute water resistance",
      "Paraben-free · sensitive-skin safe",
    ],
    concerns: ["pigmentation"],
  },
  {
    slug: "clinisept-skin",
    name: "Clinisept+ Skin",
    brand: "Clinisept+",
    group: "Partner Brands",
    category: "Prep & Aftercare",
    price: 168,
    summary:
      "A skin-neutral pH antimicrobial cleanser used to prepare skin and support recovery after aesthetic treatments, helping calm redness on sensitive, irritated skin.",
    bestFor: "Pre-treatment prep & post-procedure aftercare",
    highlights: [
      "Antimicrobial cleanser",
      "Skin-neutral pH",
      "Alcohol- & harsh-chemical free",
      "Dermatologically tested",
    ],
  },
  {
    slug: "sente-cysteamine-corrector",
    name: "Sente Cysteamine HSA Pigment & Tone Corrector",
    brand: "Sente",
    group: "Partner Brands",
    category: "Targeted Treatment",
    price: 750,
    summary:
      "A targeted corrector with cysteamine and heparan sulfate analog (HSA) that helps reduce the oxidative stress linked to hyperpigmentation while supporting a healthy skin barrier, for a brighter, more even-looking tone.",
    ingredients: ["Cysteamine", "Heparan sulfate analog (HSA)"],
    bestFor: "Uneven tone & hyperpigmentation",
    concerns: ["pigmentation"],
  },
];

export const productGroups: ProductGroup[] = [
  "Kaiteki® Cosmeceuticals",
  "Partner Brands",
];

export function productsByGroup(group: ProductGroup) {
  return products.filter((p) => p.group === group);
}

export function productBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
