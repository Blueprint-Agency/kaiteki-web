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
