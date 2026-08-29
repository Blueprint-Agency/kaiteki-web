/**
 * The one results-imagery disclaimer (ADR-0001 §2). Deliberately not exported:
 * the string exists in exactly one place so it cannot be edited away on a
 * single page. validate-concerns.mts Q-18 fails if a concern declares
 * `results` and no concern renderer renders this.
 */
const RESULTS_DISCLAIMER =
  "Photographs of Kaiteki patients, published with consent. Individual results vary and are not guaranteed. These images are not a promise of outcome — a doctor will assess whether any treatment is suitable for you.";

/** Rendered with every results gallery. */
export function ResultsDisclaimer() {
  return (
    <p className="text-sm leading-relaxed text-ink-500">{RESULTS_DISCLAIMER}</p>
  );
}

/** Standing medical disclaimer on every YMYL page (docs/05 §4.2). */
export function Disclaimer() {
  return (
    <p className="border-t border-hairline pt-5 text-sm leading-relaxed text-ink-500">
      This page is general information about aesthetic treatments and is not medical
      advice. Treatments carry risks that are explained during consultation, and
      individual results vary. A doctor will assess whether a treatment is suitable
      for you before it is carried out.
    </p>
  );
}
