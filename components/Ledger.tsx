import Image from "next/image";
import Link from "next/link";
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

/** "Medically reviewed by" byline used on every YMYL page (docs/05 §4). The
 *  reviewer's portrait carries the E-E-A-T signal when we have one; pages without
 *  a photo fall back to the shield mark. */
export function ReviewByline({
  doctorName,
  mmc,
  date,
  photo,
  href,
}: {
  doctorName: string;
  mmc?: string;
  date: string;
  photo?: string;
  href?: string;
}) {
  const avatar = photo ? (
    <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-tint">
      <Image src={photo} alt={doctorName} fill sizes="44px" className="object-cover object-top" />
    </span>
  ) : (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-tint text-accent">
      <ShieldCheck size={18} />
    </span>
  );

  const body = (
    <>
      {avatar}
      <p className="ledger leading-snug !text-ink-700">
        <span className="text-[0.625rem] uppercase tracking-[0.12em] text-accent">
          Medically reviewed
        </span>
        <br />
        <span className={href ? "decoration-mocha/50 underline-offset-2 group-hover:underline" : ""}>
          {doctorName}
        </span>
        {mmc ? ` · ${mmc}` : ""} · {date}
      </p>
    </>
  );

  const shell = "group flex items-center gap-3 rounded-lg border border-hairline bg-surface px-4 py-3";

  return href ? (
    <Link href={href} className={`${shell} transition-colors hover:border-mocha`}>
      {body}
    </Link>
  ) : (
    <div className={shell}>{body}</div>
  );
}
