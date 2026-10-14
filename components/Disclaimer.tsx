/**
 * The one results-imagery disclaimer (ADR-0001 §2). Deliberately not exported:
 * the string exists in exactly one place so it cannot be edited away on a
 * single page. validate-concerns.mts Q-18 fails if a concern declares
 * `results` and no concern renderer renders this.
 */
const RESULTS_DISCLAIMER = {
  en: "Photographs of Kaiteki patients, published with consent. Individual results vary and are not guaranteed. These images are not a promise of outcome. A doctor will assess whether any treatment is suitable for you.",
  zh: "照片来自 Kaiteki 患者，经本人同意发布。效果因人而异，不作保证。这些图片并非对效果的承诺。医生会评估任何疗程是否适合你。",
  ms: "Gambar pesakit Kaiteki, disiarkan dengan kebenaran. Hasil berbeza bagi setiap individu dan tidak dijamin. Gambar ini bukan janji hasil. Doktor akan menilai sama ada sesuatu rawatan sesuai untuk anda.",
} as const;

/** Rendered with every results gallery. Each locale's wording lives here too,
 *  so the one-place rule holds across languages. */
export function ResultsDisclaimer({ locale = "en" }: { locale?: keyof typeof RESULTS_DISCLAIMER }) {
  return (
    <p className="text-sm leading-relaxed text-ink-500">{RESULTS_DISCLAIMER[locale]}</p>
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
