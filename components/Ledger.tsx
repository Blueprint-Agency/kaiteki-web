import { ShieldCheck } from "./icons";

/** Row of the clinical ledger: mono label + value (docs/06 §4.6). */
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-t border-hairline py-2 first:border-t-0 sm:flex-row sm:items-baseline sm:gap-3">
      <dt className="ledger shrink-0 text-[0.6875rem] uppercase tracking-[0.12em] text-accent sm:w-40">
        {label}
      </dt>
      <dd className="ledger !text-ink-700">{value}</dd>
    </div>
  );
}

/**
 * The signature trust element — verifiable facts rendered as one consistent
 * record (docs/06 §1.2, §4.6). Compliance furniture becomes the brand.
 */
export function Ledger({
  rows,
  className = "",
}: {
  rows: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={`w-full ${className}`}>
      {rows.map((r) => (
        <Row key={r.label} label={r.label} value={r.value} />
      ))}
    </dl>
  );
}

/** "Medically reviewed by" byline used on every YMYL page (docs/05 §4). */
export function ReviewByline({
  doctorName,
  mmc,
  date,
}: {
  doctorName: string;
  mmc?: string;
  date: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-hairline bg-surface px-4 py-3">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-tint text-accent">
        <ShieldCheck size={18} />
      </span>
      <p className="ledger leading-snug !text-ink-700">
        <span className="text-[0.625rem] uppercase tracking-[0.12em] text-accent">
          Medically reviewed
        </span>
        <br />
        {doctorName}
        {mmc ? ` · ${mmc}` : ""} · {date}
      </p>
    </div>
  );
}
