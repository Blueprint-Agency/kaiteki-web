// Copy for the doctors hub and profiles, /our-story, /products and /privacy, per
// locale. Keyword log: docs/23-static-page-keywords/README.md.
//
//  - static-pages/<locale>.json: each page's template strings. en.json is the
//    English the pages render today, so it is the English source too.
//  - doctors/<locale>.json and products/<locale>.json: the per-doctor and
//    per-product fields in that language. English stays in content/data/*.ts;
//    doctors/_en.json and products/_en.json are snapshots of it at translation
//    time, so validate:locale (L-10) catches an English edit that the
//    translation has not caught up with.
//
// Never translated: doctors' names and credentials, product and brand names,
// prices, the PDPA notice itself (its official English and Malay texts are the
// clinic's), publication names.
//
// Relative + import attribute, not the "@/" alias: scripts/validate-locale.mts
// loads this module through node --experimental-strip-types.

import en from "./static-pages/en.json" with { type: "json" };
import zh from "./static-pages/zh.json" with { type: "json" };
import ms from "./static-pages/ms.json" with { type: "json" };
import doctorsZh from "./doctors/zh.json" with { type: "json" };
import doctorsMs from "./doctors/ms.json" with { type: "json" };
import productsZh from "./products/zh.json" with { type: "json" };
import productsMs from "./products/ms.json" with { type: "json" };
import type { Locale, NonDefaultLocale } from "../../lib/i18n.ts";

export type StaticPagesCopy = typeof en;

export const staticPages: Record<Locale, StaticPagesCopy> = { en, zh, ms };

export type DoctorCopy = {
  role: string | null;
  bio: string[] | null;
  seoTitle: string | null;
  seoDescription: string | null;
};

export type ProductCopy = {
  category: string;
  summary: string;
  bestFor: string | null;
  ingredients: string[] | null;
  highlights: string[] | null;
  priceNote: string | null;
};

export const doctorCopy: Record<NonDefaultLocale, Record<string, DoctorCopy>> = { zh: doctorsZh, ms: doctorsMs };
export const productCopy: Record<NonDefaultLocale, Record<string, ProductCopy>> = { zh: productsZh, ms: productsMs };
