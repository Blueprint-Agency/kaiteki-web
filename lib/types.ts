// Lightweight content types for the style-approval sample.
// Zod-validated typed data + the full field contract land in docs/07 §3; these
// mirror docs/05 §9 closely enough to render the sample pages faithfully.

export type NavCategory =
  | "Lifting & Tightening"
  | "Pigment & Resurfacing"
  | "Body Contouring"
  | "Regenerative & Injectables"
  | "Eyes";

export type Region = "Klang Valley" | "Johor" | "Sabah";

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
  /** Photo under /public/images/treatments. */
  image: string;
  /** One compliant sentence — used on cards, hubs and meta. */
  summary: string;
  /** 40–60 word answer-first capsule (docs/05 §1.3). */
  leadAnswer: string;
  /** Concern slugs this treatment may address (drives the mesh). */
  concerns: string[];
  /** Related treatment slugs. */
  related: string[];
  /** Deep body — present for fully authored pages (e.g. pico-laser). */
  sections?: Section[];
  faqs?: Faq[];
  /** Device/brand name shown in the technology context. */
  device?: string;
  /** Compliance + review (placeholder values for the sample — docs/05 §9). */
  reviewedBy: string; // doctor slug
  lastReviewed: string; // ISO date
  kkliu: string;
  kkliuExpiry: string; // ISO date
}

export interface Concern {
  slug: string;
  name: string;
  group: "Skin" | "Face & Body";
  /** Photo under /public/images/concerns. */
  image: string;
  summary: string;
  leadAnswer: string;
  /** Treatment slugs that may address this concern (hub role). */
  treatments: string[];
  sections?: Section[];
  faqs?: Faq[];
  reviewedBy: string;
  lastReviewed: string;
}

export interface Branch {
  slug: string;
  name: string; // area name, e.g. "Mont Kiara"
  city: string;
  state: string;
  region: Region;
  /** Photo under /public/images/branches. */
  photo: string;
  /** Full street address — migrated from the live site's published NAP. */
  address: string;
  /** Public branch phone, display format (e.g. "+6011-3332 5126"). */
  phone: string;
  /** Opening-hours lines, e.g. ["Mon–Fri: 10am–7pm", "Sat–Sun: 10:30am–6pm"]. */
  hours: string[];
  /** Google Maps share link. */
  mapUrl: string;
  /** Treatment slugs offered here (sample subset). */
  treatments: string[];
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
  interests: string[];
  /** Optional authored bio paragraphs for the profile page. Omitted until the
   *  clinic supplies verified copy — no fabricated medical claims (docs/05 §9). */
  bio?: string[];
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
