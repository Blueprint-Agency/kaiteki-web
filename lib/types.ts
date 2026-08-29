// Lightweight content types for the style-approval sample.
// Zod-validated typed data + the full field contract land in docs/07 §3; these
// mirror docs/05 §9 closely enough to render the sample pages faithfully.

export type NavCategory =
  | "Lasers"
  | "Lifting & Tightening"
  | "Body & Slimming"
  | "Injectables"
  | "Facials"
  | "Hair Removal"
  | "Regenerative"
  | "Eyes";

export type Region = "Kuala Lumpur" | "Selangor" | "Johor" | "Sabah";

export interface Faq {
  q: string;
  a: string;
}

/** A body section of a treatment/concern page (answer-first). */
export interface Section {
  heading: string;
  /** Paragraphs of body copy. */
  body: string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: string[];
}

export interface Treatment {
  slug: string;
  name: string;
  category: NavCategory;
  /** Photo under /public/images/treatments. Optional — treatments without one
   *  fall back to the generated motif until real photography lands. */
  image?: string;
  /** One compliant sentence — used on cards, hubs and meta. */
  summary: string;
  /** Short duration/downtime tag shown on hub cards, e.g. "15-30 min · Minimal downtime (1-2 days)". */
  durationDowntime?: string;
  /** 40–60 word answer-first capsule (docs/05 §1.3). */
  leadAnswer: string;
  /** Related treatment slugs. */
  related: string[];
  /** Deep body — present for fully authored pages (e.g. pico-laser). */
  sections?: Section[];
  faqs?: Faq[];
  /** Device/brand name shown in the technology context. */
  device?: string;
  /** Typical number of sessions for a course, e.g. "4-6". Session time and
   *  downtime are already carried in `durationDowntime`. */
  typicalSessions?: string;
  /** Areas this treatment is commonly applied to, e.g. ["Face", "Neck"]. */
  areas?: string[];
  /** Who this treatment is generally appropriate for — paired with
   *  `notSuitableFor` as a scannable suitable/not-suitable checklist. */
  suitableFor?: string[];
  /** Contraindications / who should avoid this treatment (docs/05 §9) —
   *  paired with `suitableFor`. Before/after patient photography belongs on
   *  concern pages only, under docs/adr/0001-before-after-imagery.md; treatment
   *  pages carry none. */
  notSuitableFor?: string[];
  /** Factual comparison vs alternative treatments for the same concerns. */
  comparisons?: { name: string; bestFor: string; downtime: string }[];
  /** Pre-treatment care bullets. */
  preCare?: string[];
  /** Post-treatment care bullets. */
  postCare?: string[];
  // ── Treatment-template v2 blocks (config/treatments.json). Every field is
  // optional: a block renders only when its data exists, so switching a block
  // off is a data edit, not a code edit. Block IDs match the spec.

  /** T-02 fact strip. Exactly three PROCESS facts — never a time-to-result. */
  facts?: { value: string; label: string }[];
  /** T-03 jump nav. Max 7. `id` must match a block's anchor id. */
  jumpNav?: { id: string; label: string }[];
  /** T-06 routing module: sub-groups of the concern space, each linked out. */
  routes?: { title: string; body: string; links: { href: string; label: string }[] }[];
  /** T-06 closing note — one honest limit or sequencing caveat. */
  routesNote?: string;
  /** T-07 archetype variant module (Full depth only). Factual difference in
   *  delivery, never a ranking between devices (rule R-02). */
  variantModule?: {
    heading: string;
    intro: string;
    items: { eyebrow: string; title: string; body: string; href?: string; hrefLabel?: string }[];
    note?: string;
  };
  /** T-08 mid-page CTA. Heading authored per page, never hardcoded. */
  ctaMid?: { heading: string; body: string };
  /** T-09 "who should avoid it" — bold lead-in per bullet. */
  avoidIf?: { lead: string; body: string }[];
  /** T-09 closing paragraph on what to bring to consultation. */
  bringToConsult?: string;
  /** T-10 five steps. Step 1 must say the first visit is a consultation. */
  sessionSteps?: { title: string; body: string }[];
  /** T-11 recovery bands (archetype-specific) — physical healing only. */
  afterSession?: {
    intro: string;
    bands: { title: string; body: string }[];
    aftercare: string;
  };
  /** T-12 risks. `cannotDo` needs at least three real limits (rule R-05), and
   *  `pigmentNote` is mandatory on every energy-based treatment. */
  risks?: {
    intro: string;
    common: string;
    lessCommon: string;
    pigmentNote?: string;
    cannotDo: string[];
    disclose: string;
  };
  /** T-13 cost factors. Factors only — no figures, no ranges, no "from RM". */
  costFactors?: { intro: string; factors: string[]; outro?: string };
  /** T-14 manufacturer images (Full only). Labelled in four places or omitted
   *  entirely — never shipped half-labelled (rule R-07). */
  manufacturerImages?: { src: string; alt: string; caption: string }[];
  /** T-17 one-line reason per related treatment slug, framed around what this
   *  treatment does NOT do. */
  relatedReasons?: Record<string, string>;
  /** T-18 branch slugs offering this treatment. Omit to list all branches;
   *  never render a "+N more" (rule R-12). */
  availableAt?: string[];

  /** Compliance + review (placeholder values for the sample — docs/05 §9). */
  reviewedBy: string; // doctor slug
  lastReviewed: string; // ISO date
  /** SEO-optimized <title>, 50–60 chars, brand baked in (docs/10). */
  seoTitle?: string;
  /** SEO meta description, 140–160 chars (docs/10). */
  seoDescription?: string;
}

export type TechType = "device" | "injectable";

/** A device or injectable that powers one or more treatments. Its link to a
 *  treatment is the ONLY authored edge (many-to-many); concerns are derived. */
export interface Technology {
  slug: string;
  name: string;
  /** Reuses the treatment NavCategory taxonomy (group of its primary treatment). */
  group: NavCategory;
  /** "device" (machine) or "injectable" (consumable). */
  type: TechType;
  /** Treatment slugs this powers — the ONLY authored edge. Many-to-many. */
  treatments: string[];
  /** Photo under /public/images/technology. Optional — items without one fall
   *  back to the generated motif until real product photography lands. */
  image?: string;
  /** One compliant, factual sentence. */
  summary: string;
  /** Optional rich body — carried over for the 3 converted pages. */
  sections?: Section[];
  faqs?: Faq[];
  /** Optional device-brand logo (existing /images/tech logos). */
  device?: string;
  reviewedBy?: string;
  lastReviewed?: string;
  /** SEO-optimized <title>, 50–60 chars, brand baked in (docs/10). */
  seoTitle?: string;
  /** SEO meta description, 140–160 chars (docs/10). */
  seoDescription?: string;
}

/** A bold lead-in bullet: `lead` renders semibold, `body` plain after it. */
export interface LeadIn {
  lead: string;
  body: string;
}

/**
 * C-05 · the archetype differentiator — the one section that stops 14 concern
 * pages reading as one template repeated. Three presentations cover all five
 * archetypes: A/D/E are tab sets (3, 2 and 3 tabs), B is claim/reality pairs,
 * C is a response table.
 */
export type ConcernVariant =
  | {
      kind: "tabs";
      heading: string;
      intro: string;
      tabs: {
        /** Tab button text — short enough to sit three-across on mobile. */
        label: string;
        /** Second line inside the tab button, e.g. "Texture you can feel". */
        sub?: string;
        title: string;
        body: string;
        items?: LeadIn[];
        /** "Usually assessed for: …" — the routing line that makes the tab useful. */
        routing?: string;
      }[];
    }
  | {
      kind: "pairs";
      heading: string;
      intro: string;
      /** 4–6 claim/reality pairs (archetype B, myth correction). */
      pairs: { claim: string; reality: string }[];
    }
  | {
      kind: "table";
      heading: string;
      intro: string;
      columns: string[];
      rows: string[][];
      note?: string;
    };

export interface Concern {
  slug: string;
  name: string;
  group: "Skin" | "Face" | "Eyes" | "Hair & Body";
  /** Photo under /public/images/concerns. */
  image: string;
  summary: string;
  leadAnswer: string;
  /** Treatment slugs that may address this concern (hub role). */
  treatments: string[];
  sections?: Section[];
  faqs?: Faq[];
  /**
   * Bottom-CTA overrides (spec bugs B-03/B-04). The default heading assumes
   * something "causes" the concern and that a doctor assesses "your skin" —
   * both wrong on tattoo-removal, birthmark, hair-loss and excessive-sweating.
   */
  ctaHeading?: string;
  /** What the doctor actually assesses, e.g. "your scalp". Default "your skin". */
  ctaAssesses?: string;

  // ── Concern-template v1 blocks (config/concerns.json, 01…18). Every field is
  // optional: a block renders only when its data exists, so switching a block
  // off is a data edit, not a code branch. `archetype`/`depth` are injected from
  // config/concerns.json at module load — never authored here (spec §00).

  /** From config/concerns.json. Selects which variant blocks 04/05/06 use. */
  archetype?: "A" | "B" | "C" | "D" | "E";
  /** From config/concerns.json. `lite` omits block 10 and targets 8 FAQs. */
  depth?: "full" | "lite";

  /** C-02 fact strip. Exactly three neutral PROCESS facts — never a
   *  time-to-result, which would be an outcome claim (rule R-01). */
  facts?: { value: string; label: string }[];
  /** C-02b jump nav. Max 7; `id` must match a rendered block anchor (R-13). */
  jumpNav?: { id: string; label: string }[];
  /** C-04 · archetype-dependent heading — "Common causes" on A/D, "What makes
   *  it look this way" on B, "What affects your session count" on C, "What
   *  influences it" on E. Authored per concern so nothing is inferred. */
  drivers?: { heading: string; intro?: string; items: LeadIn[]; outro?: string };
  /** C-05 the differentiator — see ConcernVariant. */
  variant?: ConcernVariant;
  /** C-06 where it appears. Omitted on archetype B; becomes "Non-surgical vs
   *  surgical" on E and "Body location" on C. */
  locationBlock?: {
    heading: string;
    intro?: string;
    cards: { title: string; body: string }[];
    /** Closing differential card, e.g. "Not typical acne?". */
    note?: { title: string; body: string };
  };
  /** C-07 when to see a doctor. Carries extra weight on archetype D
   *  (`expandBlock07`) and becomes "what a doctor checks first" on C. */
  seeDoctor?: { heading?: string; intro: string; triggers: string[]; outro?: string };
  /** C-08 mid-page CTA — the primary of three permitted CTAs (rule R-06). */
  ctaMid?: { heading: string; body: string };
  /** C-09 lead sentence. Authored per concern because the generic template
   *  ("treatments for {name}-related concerns") produces "excessive
   *  sweating-related concerns" (spec bug B-05). */
  treatmentsIntro?: string;
  /** C-09 the mandatory concern-specific "why for X" line per treatment slug.
   *  Must be unique across all 14 concern pages (rule R-04) — enforced by
   *  scripts/validate-concerns.mjs, not by review. */
  treatmentWhy?: Record<string, { why: string; body: string }>;
  /** C-09 closing honesty note, e.g. "lasers are not first-line for active acne". */
  treatmentsNote?: string;
  /** C-10 comparison table (Full depth only — a table needs 4+ things to
   *  compare). Column headers must not rank: "Commonly considered", never
   *  "Best suited" (rule R-02). */
  compare?: {
    intro: string;
    columns: string[];
    rows: string[][];
    note?: string;
  };
  /** C-11 manufacturer images. Labelled in four places or omitted (rule R-07). */
  manufacturerImages?: { src: string; alt: string; caption: string }[];
  /** C-12 what the first visit involves. 4 numbered steps. */
  firstVisit?: { intro: string; steps: { title: string; body: string }[]; outro?: string };
  /** C-13 risks and realistic limits. `items` must include at least one thing
   *  treatment cannot do, and a pigment-change note where energy devices are
   *  listed (rule R-05). */
  risks?: { intro?: string; items: LeadIn[]; disclose: string };
  /** C-14 what affects cost — factors only, no figures (rule R-03). */
  costFactors?: { intro: string; factors: string[]; outro?: string };
  /** C-15 lead sentence above the technology chips. A bare logo wall says
   *  nothing; this frames multiple platforms as "the device is matched to you". */
  technologyIntro?: string;
  /** C-17 related concerns, each with a one-line reason for the relationship. */
  relatedConcerns?: { slug: string; reason: string }[];

  reviewedBy: string;
  lastReviewed: string;
  /** SEO-optimized <title>, 50–60 chars, brand baked in (docs/10). */
  seoTitle?: string;
  /** SEO meta description, 140–160 chars (docs/10). */
  seoDescription?: string;
}

export interface Branch {
  slug: string;
  name: string; // area name, e.g. "Mont Kiara"
  city: string;
  state: string;
  region: Region;
  /** Photo under /public/images/branches. */
  photo: string;
  /** Extra branch photos (storefront, interior) shown after `photo` in the
   *  swipeable cover gallery. */
  photos?: string[];
  /** Full street address — migrated from the live site's published NAP. */
  address: string;
  /** Public branch phone, display format (e.g. "+6011-3332 5126"). */
  phone: string;
  /** Opening-hours lines, e.g. ["Mon–Fri: 10am–7pm", "Sat–Sun: 10:30am–6pm"]. */
  hours: string[];
  /** Google Maps share link. */
  mapUrl: string;
  /** Star rating + review count read off this branch's Google Business Profile
   *  (see GOOGLE_REVIEWS_READ_ON in branches.ts for the date). Rendered as a
   *  link-out trust signal only — deliberately NOT emitted as AggregateRating
   *  schema: docs/02 §5 says keep ratings on the GBP, and self-serving review
   *  markup is ineligible for rich results. */
  googleRating?: number;
  googleReviewCount?: number;
  /** Machine-readable hours mirroring `hours` — drives openingHoursSpecification.
   *  Day names are schema.org long form ("Monday"). */
  hoursSpec?: { days: string[]; opens: string; closes: string }[];
  /** Nearby areas this branch conveniently serves — nearby-suburb SEO + areaServed.
   *  Inferred from location; verify with the clinic before launch. */
  serves?: string[];
  /** Parking note shown under "Getting here" — inferred; verify before launch. */
  parking?: string;
  /** 1–2 sentence branch-specific intro (unique per branch; beats a templated line). */
  gettingHere?: string;
  /** Geo coordinates — enable schema `geo` + map pack. Client data (docs/05 §9);
   *  left undefined until verified so no wrong coordinates ship. */
  lat?: number;
  lng?: number;
  /** Sub-brand / trading name this branch also operates under (e.g. a co-located
   *  concept clinic). Surfaced for search + disambiguation. */
  alsoKnownAs?: string;
  /** SEO-optimized <title>, 50–60 chars, brand baked in (docs/10). */
  seoTitle?: string;
  /** SEO meta description, 140–160 chars (docs/10). */
  seoDescription?: string;
}

export interface GoogleReview {
  /** Reviewer's public Google display name, as shown on the profile. */
  author: string;
  rating: number;
  /** Month posted, e.g. "Jul 2026". Absolute on purpose: a statically built
   *  page cannot keep a "3 weeks ago" relative date honest. */
  posted: string;
  /** Verbatim review text — never reworded or paraphrased. Excerpts of longer
   *  reviews are cut at a sentence boundary and end in "…"; the card links to
   *  the full review on Google. */
  text: string;
}

export interface Doctor {
  slug: string;
  fullName: string;
  credentials: string; // e.g. "MBBS (Malaya), LCP"
  /** MMC registration — a client data dependency (docs/05 §9), not yet available. */
  mmc?: string;
  /** Title/role, e.g. "Founder & CEO", "Partner", "Aesthetic Physician". */
  role?: string;
  /** Photo under /public/images/doctors. */
  photo: string;
  branches: string[];
  /** Optional authored bio paragraphs for the profile page. Sourced verbatim
   *  from the clinic's published "Meet the Experts" copy (legacy aboutus.html). */
  bio?: string[];
  /** SEO-optimized <title>, 50–60 chars, brand baked in (docs/10). */
  seoTitle?: string;
  /** SEO meta description, 140–160 chars (docs/10). */
  seoDescription?: string;
}

/** Grouping for the skincare (cosmeceuticals) product hub — Kaiteki's own
 *  medical-grade line vs. resold partner brands. */
export type ProductGroup = "Kaiteki® Cosmeceuticals" | "Partner Brands";

/** A retail skincare/cosmeceutical product (legacy /skincare.html → /skincare).
 *  Conversion is WhatsApp-only, consistent with the rest of the site — no cart. */
export interface Product {
  slug: string;
  name: string;
  /** Manufacturer/brand, e.g. "Kaiteki", "Heliocare". */
  brand: string;
  group: ProductGroup;
  /** Packshot under /public/images/skincare (migrated from the legacy catalogue).
   *  Optional — cards fall back to the generated motif when absent. */
  image?: string;
  /** Product type shown as the card eyebrow, e.g. "Serum", "Sunscreen". */
  category: string;
  /** Price in Malaysian Ringgit (MYR). */
  price: number;
  /** Optional secondary price line, e.g. a bundle ("3 for RM1,200"). */
  priceNote?: string;
  /** Description — factual, purchase-useful copy adapted from the legacy page
   *  with hard efficacy/outcome claims softened for compliance (docs/02 §8).
   *  Pending final approved marketing copy. */
  summary: string;
  /** Key active ingredients, surfaced on the card to aid the decision. */
  ingredients?: string[];
  /** Who or what it's for — skin type or intended use. */
  bestFor?: string;
  /** Short factual highlights (format, SPF, pack size, usage, "free-from").
   *  Product facts only — not efficacy/outcome claims. */
  highlights?: string[];
  /** Concern slugs this product relates to — drives internal cross-linking. */
  concerns?: string[];
}

/**
 * Blog taxonomy. Deliberately a short, closed list rather than the legacy
 * WordPress blog's ~20 overlapping categories (Acne / Acne Scars / Aging /
 * Pigmentation … duplicated the /concerns hub and split link equity across
 * near-empty archives). Concern- and treatment-level topicality is carried by
 * `concerns[]` / `treatments[]` below, which cross-link to the real hub pages
 * instead of minting a parallel taxonomy (docs/02 §4, docs/04 §3).
 */
export type PostCategory =
  | "Treatments Explained"
  | "Skin Concerns"
  | "Device & Injectables"
  | "Weight & Wellness"
  | "Skincare";

/**
 * A /blog article. Metadata lives here (typed, validated, feeds the hub, the
 * sitemap and the JSON-LD); the body lives beside it as `content/blog/<slug>.mdx`
 * so long-form prose keeps inline links, tables and emphasis.
 *
 * YMYL note: `author` and `reviewedBy` are doctor slugs from content/data/doctors.
 * Every post carries a named, MMC-registered medical author — the E-E-A-T signal
 * Google's health guidance leans on (docs/02 §5).
 */
export interface Post {
  slug: string;
  /** Visible H1. */
  title: string;
  /** Full <title> if it should differ from the H1 (50–60 chars). */
  seoTitle?: string;
  /** Meta description + card/summary copy, 140–160 chars. */
  description: string;
  category: PostCategory;
  /** Hero + share image: a full https://cdn.kaiteki.my/blog/... URL, staged for
   *  upload under content/blog/media/ (AUTHORING.md §3). Optional: posts without
   *  commissioned photography fall back to a warm generated motif (BlogMotif),
   *  the same approach treatments take. 65 of the legacy posts have no featured
   *  image, so this is the norm during the migration, not the exception. */
  image?: string;
  /** Descriptive alt for the hero image. Required whenever `image` is set. */
  imageAlt?: string;
  /** Doctor slug — the byline. */
  author: string;
  /** Doctor slug of the medical reviewer. Defaults to the author when unset. */
  reviewedBy?: string;
  /** ISO date first published. */
  publishedAt: string;
  /** ISO date last substantively updated / medically re-reviewed. */
  updatedAt?: string;
  /** Estimated read time in minutes (shown on cards and the byline). */
  readingMinutes: number;
  /** 40–60 word answer-first capsule, mirrors treatment/concern pages (docs/05 §1.3). */
  leadAnswer: string;
  /** Concern slugs this post relates to — drives blog → /concerns internal links. */
  concerns?: string[];
  /** Treatment slugs this post relates to — drives blog → /treatments links. */
  treatments?: string[];
  /** Technology slugs this post relates to — drives blog → /technology links. */
  technology?: string[];
  /** Related post slugs. Falls back to same-category posts when unset. */
  related?: string[];
  /** Surfaced first on the hub. At most one post should carry this. */
  featured?: boolean;
  /** End-of-article Q and A, rendered with the shared accordion. Visible only:
   *  we never emit FAQPage JSON-LD (see lib/schema.ts). */
  faqs?: Faq[];
  /** Legacy blog.kaiteki.my path this post replaces, e.g. "/discovery-pico-vs-picosure/".
   *  Collected here so the subdomain-level 301 map can be generated from the data. */
  legacyPath?: string;
}

/** Device/brand-partner performance award — substantiated by the naming
 *  manufacturer, not a general "best clinic" superlative (docs/02 §5). */
export interface Award {
  /** The recognition as it reads on the plaque, e.g. "Ultherapy — Top 10 Transducer Sales". */
  title: string;
  /** The manufacturer / treatment partner that issued it, e.g. "Merz Aesthetics". */
  issuer: string;
  /** Year or year range, e.g. "2023–2024". Empty if the source didn't date it. */
  period: string;
  /** Photograph of the physical award, served from /public/awards. */
  image: string;
  /** Descriptive alt text for the award photo. */
  alt: string;
}
