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

export function waForTreatment(name: string): string {
  return waLink(`Hi Kaiteki, I'd like a free consultation about ${name}.`);
}

export function waForConcern(name: string): string {
  return waLink(`Hi Kaiteki, I'd like a free consultation about ${name}.`);
}

export function waForBranch(branch: string): string {
  return waLink(`Hi Kaiteki ${branch}, I'd like to book a free consultation.`);
}
