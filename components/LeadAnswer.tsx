/**
 * Answer-first capsule shown under the H1 on every treatment/concern/blog page
 * (docs/05 §1.3, docs/06 §4.7). Identical everywhere — recognizable, extractable.
 * Plain server HTML, in the initial payload.
 */
export function LeadAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-hairline bg-tint p-5 sm:p-6">
      <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
        In brief
      </p>
      <p className="prose text-balance text-lg leading-relaxed text-ink-900">
        {children}
      </p>
    </div>
  );
}
