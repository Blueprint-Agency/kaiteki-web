import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, MapPin } from "./icons";
import type { Treatment, Concern, Branch, Doctor } from "@/lib/types";

// Cards now have a gentle lift + soft warm shadow on hover (docs/06 §3 motion,
// evolved 2026-07 for more life). Transform/opacity only; reduced-motion safe.
const cardBase =
  "group flex flex-col rounded-xl border border-hairline bg-surface transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-mocha hover:shadow-[0_14px_34px_rgb(73_54_40/0.10)] focus-within:border-mocha";

type Extra = { className?: string; style?: CSSProperties };

export function TreatmentCard({ t, className = "", style }: { t: Treatment } & Extra) {
  return (
    <Link href={`/treatments/${t.slug}`} style={style} className={`${cardBase} overflow-hidden ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-tint">
        <Image
          src={t.image}
          alt={t.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-espresso decoration-mocha/60 underline-offset-4 group-hover:underline">
          {t.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{t.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function ConcernCard({ c, className = "", style }: { c: Concern } & Extra) {
  return (
    <Link href={`/concerns/${c.slug}`} style={style} className={`${cardBase} overflow-hidden ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-tint">
        <Image
          src={c.image}
          alt={c.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-espresso decoration-mocha/60 underline-offset-4 group-hover:underline">
          {c.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{c.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Explore options <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function BranchCard({ b, className = "", style }: { b: Branch } & Extra) {
  return (
    <Link href={`/locations/${b.slug}`} style={style} className={`${cardBase} overflow-hidden ${className}`}>
      <div className="relative aspect-[3/2] overflow-hidden bg-tint">
        <Image
          src={b.photo}
          alt={`Kaiteki ${b.name} clinic`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 items-center justify-between gap-3 p-4">
        <div>
          <h3 className="font-semibold text-espresso">{b.name}</h3>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-ink-500">
            <MapPin size={14} className="text-mocha" /> {b.city}, {b.state}
          </p>
        </div>
        <ArrowRight size={18} className="shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

/** Trailing "browse the full set" tile — closes a card grid and carries the
 *  section's "view all" link. Solid, not dashed (a dashed border reads as an
 *  empty/add-new slot). Shares the card hover so it sits naturally in the grid. */
export function SeeAllCard({
  href,
  label,
  className = "",
  style,
}: { href: string; label: string } & Extra) {
  return (
    <Link
      href={href}
      style={style}
      className={`group flex items-center justify-between gap-3 rounded-xl border border-hairline bg-surface px-6 py-5 font-medium text-espresso transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-mocha hover:shadow-[0_14px_34px_rgb(73_54_40/0.10)] focus-visible:border-mocha ${className}`}
    >
      <span>{label}</span>
      <ArrowRight size={18} className="shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function DoctorCard({ d, className = "", style }: { d: Doctor } & Extra) {
  return (
    <div style={style} className={`flex flex-col rounded-xl border border-hairline bg-surface p-5 ${className}`}>
      <div className="flex items-center gap-4">
        <span className="relative size-14 shrink-0 overflow-hidden rounded-full bg-tint">
          <Image src={d.photo} alt={d.fullName} fill sizes="56px" className="object-cover" />
        </span>
        <div>
          <h3 className="font-semibold text-espresso">{d.fullName}</h3>
          <p className="ledger mt-0.5 !text-ink-500">
            {d.credentials}
            {d.mmc ? ` · ${d.mmc}` : ""}
          </p>
        </div>
      </div>
      {(d.role || d.interests.length > 0) && (
        <div className="mt-4 space-y-1.5">
          {d.role && <p className="text-sm font-medium text-accent">{d.role}</p>}
          {d.interests.length > 0 && (
            <p className="text-sm leading-relaxed text-ink-700">
              Special interests: {d.interests.join(", ")}.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
