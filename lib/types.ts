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
}

/** Device/brand-partner performance award — substantiated by the naming
 *  manufacturer, not a general "best clinic" superlative (docs/02 §5). */
export interface Award {
  title: string;
  /** Year or year range, e.g. "2023–2024". Empty if the source didn't date it. */
  period: string;
}
