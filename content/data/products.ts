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
    image: "https://cdn.kaiteki.my/images/skincare/2026/hydroglow-masks.jpg",
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
    image: "https://cdn.kaiteki.my/images/skincare/2026/intense-hydration-cream.jpg",
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
    image: "https://cdn.kaiteki.my/images/skincare/acne-spot-serum.jpg",
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
    image: "https://cdn.kaiteki.my/images/skincare/2026/ultra-soothing-face-mist.jpg",
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
    image: "https://cdn.kaiteki.my/images/skincare/2026/ultra-nourishing-body-lotion.jpg",
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
    image: "https://cdn.kaiteki.my/images/skincare/2026/ultra-soothing-cleansing-gel.jpg",
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
    image: "https://cdn.kaiteki.my/images/skincare/2026/ultra-hydrating-serum.jpg",
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
    image: "https://cdn.kaiteki.my/images/skincare/2026/hydro-boost-moisturiser.jpg",
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
    image: "https://cdn.kaiteki.my/images/skincare/2026/pore-refining-essence.jpg",
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
    image: "https://cdn.kaiteki.my/images/skincare/2026/doubleblock-uv-sunscreen.jpg",
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
    slug: "heliocare-d-plus",
    image: "https://cdn.kaiteki.my/images/skincare/2026/heliocare-d-plus.jpg",
    name: "Heliocare D Plus",
    brand: "Heliocare",
    group: "Partner Brands",
    category: "Oral Sun Protection",
    price: 200,
    summary:
      "Oral capsules that support your skin's sun defence from within, designed to be used together with, not as a replacement for, a topical sunscreen.",
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
    image: "https://cdn.kaiteki.my/images/skincare/2026/heliocare-luminance.jpg",
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
    slug: "clinisept-skin",
    image: "https://cdn.kaiteki.my/images/skincare/2026/clinisept-skin.jpg",
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
  // Lione oral supplements, added 2026-10 at the client's request (prices from
  // Dr Chew). Copy is drawn from the manufacturer's patient leaflets with the
  // percentage/outcome claims left out (docs/02 §8).
  {
    slug: "lucent-prime",
    image: "https://cdn.kaiteki.my/images/skincare/lucent-prime-centered.jpg",
    name: "Lucent® Prime Oral Skinbooster",
    brand: "Lione",
    group: "Partner Brands",
    category: "Oral Supplement",
    price: 550,
    summary:
      "A daily berry-flavoured botanical powder combining skin-focused antioxidants, ceramides and a probiotic, designed to be taken alongside your in-clinic treatments as part of a skin-health routine from within.",
    ingredients: [
      "Golden tomato extract (Lumenato™)",
      "Astaxanthin (AstaReal®)",
      "Pycnogenol®",
      "Ceramide (CornCera™)",
      "L-cysteine",
      "Probiotic B. lactis Bl-04",
    ],
    bestFor: "Radiance, hydration & skin barrier support",
    highlights: ["30 sachets × 4 g", "One sachet daily", "Pairs with in-clinic treatments"],
    concerns: ["pigmentation"],
  },
  {
    slug: "stanmna",
    image: "https://cdn.kaiteki.my/images/skincare/stanmna.jpg",
    name: "STANMNA™",
    brand: "Lione",
    group: "Partner Brands",
    category: "Performance Supplement",
    price: 480,
    summary:
      "A plant-based drink-mix sachet built around NMN, CoQ10 and PQQ, formulated to support cellular energy, endurance and recovery for people who train regularly.",
    ingredients: [
      "NMN (Uthever®)",
      "CoQ10",
      "Alpha lipoic acid",
      "PQQ",
      "Tart cherry",
      "Citrus flavonoids (Watt'sUp®)",
    ],
    bestFor: "Active adults & regular training",
    highlights: [
      "Mix one sachet into 250 ml water, or take directly",
      "Take 30 min before training, or each morning",
      "100% vegan, non-GMO",
      "No added preservatives or artificial colours",
    ],
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
