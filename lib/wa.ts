// WhatsApp deep-link builder — the site's single conversion path (docs/05 §3).
// The CTA is a plain server-rendered <a href>; it carries no SEO equity.

export const WHATSAPP_NUMBER = "60103818170"; // +60 10-381 8170

/** Build a wa.me link with a branch/treatment-aware pre-filled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = message?.trim() || "Hi Kaiteki, I'd like to book a free consultation.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const waGeneric = waLink();

/**
 * Pages whose every WhatsApp CTA — the header button and the sticky one
 * included — carries a campaign link instead of the generic message. Keyed by
 * the locale-neutral path; the URLs are verbatim as supplied by the client.
 */
export const PAGE_WA: Record<string, string> = {
  "/anniversary/2026":
    "https://wa.me/60103818170?text=Hi%20Kaiteki%2C%20I%27m%20interested%20in%20the%207th%20Anniversary%20promotions.",
};

/** The page's campaign link if it has one, else `fallback`. */
export function waForPage(pathname: string | null, fallback: string): string {
  return (pathname && PAGE_WA[pathname.replace(/\/$/, "")]) || fallback;
}

export function waForTreatment(name: string): string {
  return waLink(`Hi Kaiteki, I'd like a free consultation about ${name}.`);
}

export function waForConcern(name: string): string {
  return waLink(`Hi Kaiteki, I'd like a free consultation about ${name}.`);
}

/** Prefilled WA message for the /concerns "pick your top concerns" CTA. */
export function waForConcerns(names: string[]): string {
  if (names.length === 0) return waGeneric;
  return waLink(`Hi Kaiteki, I'd like a free consultation about: ${names.join(", ")}.`);
}

export function waForBranch(branch: string): string {
  return waLink(`Hi Kaiteki ${branch}, I'd like to book a free consultation.`);
}

export function waForDoctor(name: string): string {
  return waLink(`Hi Kaiteki, I'd like to book a free consultation with ${name}.`);
}

export function waForProduct(name: string): string {
  return waLink(`Hi Kaiteki, I'd like to order ${name}.`);
}
