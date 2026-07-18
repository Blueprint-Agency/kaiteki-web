// Structured-data (JSON-LD) builders. One graph per route, nodes wired by stable
// @id (docs/02 §3). Emit ONLY visible content; never Review/AggregateRating,
// FAQPage or HowTo (self-serving + MY medical-ad rules + deprecated rich results).
import { site } from "@/lib/site";
import type { Branch, Doctor } from "@/lib/types";

// Stable identity anchors other nodes reference by @id.
export const orgId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;

const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;

/** Site-wide brand entity — Organization typed MedicalBusiness (docs/02 §3). */
export function organizationNode() {
  return {
    "@type": ["Organization", "MedicalBusiness"],
    "@id": orgId,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: `${site.url}/brand/kaiteki-logo.png`,
    image: `${site.url}/images/hero/hero-subject.png`,
    description: site.positioning,
    address: { "@type": "PostalAddress", addressCountry: "MY" },
    sameAs: [site.instagram, site.facebook],
  };
}

/** WebSite node for site-name signals. NO SearchAction (retired 21 Nov 2024). */
export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    publisher: { "@id": orgId },
    inLanguage: "en-MY",
  };
}

/** The site-wide graph emitted once in the root layout. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode()],
  };
}

/** Per-branch MedicalClinic (LocalBusiness) — NAP, geo, hours, wired to the org. */
export function medicalClinicNode(b: Branch) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${site.url}/locations/${b.slug}#clinic`,
    name: `Kaiteki ${b.name}`,
    image: `${site.url}${b.photo}`,
    url: `${site.url}/locations/${b.slug}`,
    telephone: b.phone,
    hasMap: b.mapUrl,
    priceRange: "$$",
    isPartOf: { "@id": websiteId },
    parentOrganization: { "@id": orgId },
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address,
      addressLocality: b.city,
      addressRegion: b.state,
      addressCountry: "MY",
    },
    ...(b.lat != null && b.lng != null
      ? { geo: { "@type": "GeoCoordinates", latitude: b.lat, longitude: b.lng } }
      : {}),
    ...(b.hoursSpec
      ? {
          openingHoursSpecification: b.hoursSpec.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
    ...(b.serves ? { areaServed: b.serves } : {}),
  };
}

/** Per-doctor node. GOTCHA: schema.org `Physician` is a MedicalOrganization type,
 *  NOT a Person subtype — so it lacks `worksFor`/`jobTitle` and loses the E-E-A-T
 *  author properties Google's author guidance leans on. Model the individual as
 *  `Person` + `additionalType: Physician` (schema-spec §6). */
export function physicianNode(d: Doctor, branchNames: string[]) {
  const role = d.role ?? "Aesthetic Physician";
  const suffix = [d.credentials, d.mmc].filter(Boolean).join(" · ");
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    additionalType: "https://schema.org/Physician",
    "@id": `${site.url}/doctors/${d.slug}#person`,
    name: d.fullName,
    image: `${site.url}${d.photo}`,
    url: `${site.url}/doctors/${d.slug}`,
    jobTitle: role,
    ...(suffix ? { honorificSuffix: suffix } : {}),
    ...(d.interests.length > 0 ? { knowsAbout: d.interests } : {}),
    ...(branchNames.length > 0
      ? { workLocation: branchNames.map((n) => ({ "@type": "MedicalClinic", name: `Kaiteki ${n}` })) }
      : {}),
    worksFor: { "@id": orgId },
    ...(d.instagram || d.linkedin
      ? { sameAs: [d.instagram, d.linkedin].filter(Boolean) }
      : {}),
  };
}

interface MedicalPageInput {
  /** Absolute path, e.g. "/treatments/pico-laser". */
  path: string;
  /** Page title (the visible H1 / seoTitle). */
  name: string;
  description: string;
  /** The medical entity this page is about. */
  about?: {
    type: "MedicalProcedure" | "MedicalCondition" | "MedicalDevice";
    name: string;
  };
  /** ISO date of last medical review (YMYL freshness signal). */
  lastReviewed?: string;
  /** Reviewing doctor — inlined as a credentialed Person (cross-page @id refs
   *  don't resolve reliably in Google's parser, so we self-contain it). */
  reviewer?: { name: string; slug: string; credentials?: string };
}

/** MedicalWebPage for treatment / concern / device pages, wired to the site graph.
 *  `about` carries the MedicalProcedure/MedicalCondition/MedicalDevice entity. */
export function medicalWebPageNode({
  path,
  name,
  description,
  about,
  lastReviewed,
  reviewer,
}: MedicalPageInput) {
  const url = abs(path);
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-MY",
    isPartOf: { "@id": websiteId },
    ...(about
      ? {
          about: {
            "@type": about.type,
            name: about.name,
            // provider belongs on the procedure/entity, not the WebPage (spec §7).
            ...(about.type === "MedicalProcedure" ? { provider: { "@id": orgId } } : {}),
          },
        }
      : {}),
    ...(lastReviewed ? { lastReviewed } : {}),
    ...(reviewer
      ? {
          reviewedBy: {
            "@type": "Person",
            additionalType: "https://schema.org/Physician",
            name: reviewer.name,
            url: `${site.url}/doctors/${reviewer.slug}`,
            ...(reviewer.credentials ? { honorificSuffix: reviewer.credentials } : {}),
          },
        }
      : {}),
  };
}
