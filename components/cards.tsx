import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, MapPin, WhatsApp } from "./icons";
import { ExpandableText } from "./ExpandableText";
import type { Treatment, Concern, Branch, Doctor, Product, Technology } from "@/lib/types";
import { treatmentHref } from "@/content/data/treatments";
import { treatmentsOfTechnology } from "@/content/data/relations";
import { waForProduct } from "@/lib/wa";

// Cards now have a gentle lift + soft warm shadow on hover (docs/06 §3 motion,
// evolved 2026-07 for more life). Transform/opacity only; reduced-motion safe.
const cardBase =
  "group flex flex-col rounded-xl border border-hairline bg-surface transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-mocha hover:shadow-[0_14px_34px_rgb(73_54_40/0.10)] focus-within:border-mocha";

type Extra = { className?: string; style?: CSSProperties };

// Interim treatment-card visual (2026-07). Commissioned photography isn't shot
// yet, and the stand-in device product-shots carry other brands' logos
// (Cynosure, DEKA, Jeisys…) on cold white/black — a YMYL endorsement risk and
// off the "Warm Sanctuary" register. Until real imagery lands we render a warm,
// on-brand motif: a soft neutral field + concentric arcs that nod to a focused
// treatment without depicting a machine. Deterministic per-slug variation keeps
// the grid from reading as identical cards.
const MOTIF_FIELDS = [
  "linear-gradient(135deg, #efe7df 0%, #e0d1c3 100%)",
  "linear-gradient(140deg, #f1eae4 0%, #ddc9ba 100%)",
  "linear-gradient(120deg, #ece4db 0%, #e4d4c6 100%)",
  "linear-gradient(150deg, #f0e9e3 0%, #dbc8b9 100%)",
];

function motifHash(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

/** Warm placeholder art for a treatment card — see MOTIF_FIELDS note.
 *  `seed` varies the pattern when the same treatment needs more than one
 *  placeholder image on a page (e.g. hero vs. an in-body visual break). */
export function TreatmentMotif({
  t,
  seed = "",
  className = "",
}: {
  t: Treatment;
  seed?: string;
  className?: string;
}) {
  const h = motifHash(t.slug + seed);
  const field = MOTIF_FIELDS[h % MOTIF_FIELDS.length];
  const cx = (62 + (h % 3) * 12) * 3.2; // focal x within the 320-wide viewBox
  const cy = (30 + ((h >> 2) % 3) * 10) * 2; // focal y within the 200-tall viewBox
  const rings = 3 + (h % 3); // 3–5 arcs
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: field }} aria-hidden>
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        {Array.from({ length: rings }).map((_, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={20 + i * 27}
            fill="none"
            stroke="#493628"
            strokeOpacity={0.12 - i * 0.017}
            strokeWidth={1.5}
          />
        ))}
      </svg>
    </div>
  );
}

export function TreatmentCard({ t, className = "", style }: { t: Treatment } & Extra) {
  return (
    <Link href={treatmentHref(t)} style={style} className={`${cardBase} overflow-hidden ${className}`}>
      {t.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-tint">
          <Image
            src={t.image}
            alt={t.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      ) : (
        <TreatmentMotif t={t} className="aspect-[16/10]" />
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-espresso decoration-mocha/60 underline-offset-4 group-hover:underline">
          {t.name}
        </h3>
        {t.durationDowntime && (
          <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.04em] text-mocha">
            {t.durationDowntime}
          </p>
        )}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">{t.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

/** Image-forward concern tile for the homepage mosaic: an arch-topped photo with
 *  the concern name over a warm gradient. Less "boxed card", more editorial — the
 *  photograph carries it (docs/06 §5). `feature` makes it span & sit taller. */
export function ConcernTile({
  c,
  feature = false,
  className = "",
  style,
}: { c: Concern; feature?: boolean } & Extra) {
  return (
    <Link
      href={`/concerns/${c.slug}`}
      style={style}
      className={`group relative block overflow-hidden rounded-2xl rounded-t-[2.75rem] ring-1 ring-hairline transition-shadow duration-300 hover:shadow-[0_18px_40px_rgb(73_54_40/0.14)] ${
        feature ? "aspect-[4/5] sm:aspect-auto" : "aspect-[4/5]"
      } ${className}`}
    >
      <Image
        src={c.image}
        alt={c.name}
        fill
        sizes={feature ? "(max-width: 640px) 100vw, 40vw" : "(max-width: 640px) 50vw, 22vw"}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      {/* Legibility scrim — espresso, bottom-weighted, so the white label clears AA */}
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/15 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-5">
        <h3 className={`font-semibold leading-tight text-white ${feature ? "text-xl sm:text-2xl" : "text-base sm:text-lg"}`}>
          {c.name}
        </h3>
        <ArrowRight
          size={feature ? 22 : 18}
          className="mb-0.5 shrink-0 text-white/85 transition-transform group-hover:translate-x-0.5"
        />
      </div>
    </Link>
  );
}

export function ConcernCard({ c, priority = false, className = "", style }: { c: Concern; priority?: boolean } & Extra) {
  return (
    <Link href={`/concerns/${c.slug}`} style={style} className={`${cardBase} overflow-hidden ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-tint">
        <Image
          src={c.image}
          alt={c.name}
          fill
          priority={priority}
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

// Federal-territory branches store a city + state that repeat ("Kuala Lumpur" /
// "WP Kuala Lumpur"); collapse the redundant pair to one label.
function formatLocation(city: string, state: string) {
  return state.includes(city) ? city : `${city}, ${state}`;
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
            <MapPin size={14} className="text-mocha" /> {formatLocation(b.city, b.state)}
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

export function DoctorCard({
  d,
  className = "",
  style,
  mediaClassName = "aspect-[2/3]",
}: { d: Doctor; mediaClassName?: string } & Extra) {
  return (
    <Link href={`/doctors/${d.slug}`} style={style} className={`${cardBase} overflow-hidden ${className}`}>
      <div className={`relative ${mediaClassName} overflow-hidden bg-tint`}>
        <Image
          src={d.photo}
          alt={d.fullName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-espresso decoration-mocha/60 underline-offset-4 group-hover:underline">
          {d.fullName}
        </h3>
        {d.role && <p className="mt-1 text-sm font-medium text-accent">{d.role}</p>}
        <p className="ledger mt-3 border-t border-hairline pt-3 !text-ink-500">
          {d.credentials}
          {d.mmc ? ` · ${d.mmc}` : ""}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-accent">
          View profile <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

/** Warm placeholder art for a product card — a subtle bottle glyph on the same
 *  neutral field as the treatment motif, until real product photography lands.
 *  Deterministic per-slug field keeps the grid from reading as identical tiles. */
export function ProductMotif({ slug, className = "" }: { slug: string; className?: string }) {
  const h = motifHash(slug);
  const field = MOTIF_FIELDS[h % MOTIF_FIELDS.length];
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: field }} aria-hidden>
      <svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <g fill="none" stroke="#493628" strokeOpacity={0.16} strokeWidth={1.6} strokeLinejoin="round">
          <rect x={138} y={94} width={44} height={94} rx={12} />
          <rect x={150} y={74} width={20} height={22} rx={4} />
          <line x1={138} y1={122} x2={182} y2={122} />
        </g>
      </svg>
    </div>
  );
}

/** Skincare product tile. Not a link (single hub, no per-product pages); the
 *  action is a WhatsApp order deep-link. Photo-led layout (2026-07): a prominent
 *  product-image band, then category, name, a chip row (a "best for" pill plus
 *  active-ingredient pills), a 2-line description that expands in place via
 *  ExpandableText, and a bold price above a full-width "Order Now" button. No
 *  ratings or units-sold — patient reviews of medical products are a YMYL /
 *  Malaysian-advertising risk (docs/02 §8). Price/CTA is pinned to the bottom so
 *  cards align regardless of copy length. */
export function ProductCard({ p, className = "", style }: { p: Product } & Extra) {
  const ingredientChips = p.ingredients?.slice(0, 2) ?? [];
  const highlights =
    p.highlights && p.highlights.length > 0 ? (
      <ul className="space-y-1.5">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-xs leading-relaxed text-ink-700">
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-mocha" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    ) : undefined;

  return (
    <div style={style} className={`${cardBase} overflow-hidden ${className}`}>
      {p.image ? (
        <div className="relative aspect-square bg-tint">
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      ) : (
        <ProductMotif slug={p.slug} className="aspect-square" />
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
          {p.category}
        </p>
        <h3 className="mt-1.5 line-clamp-2 font-semibold leading-snug text-espresso">{p.name}</h3>

        {(p.bestFor || ingredientChips.length > 0) && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {/* "Best for" — outline pill so "who it's for" reads apart from the
                filled "what's in it" ingredient pills. */}
            {p.bestFor && (
              <li className="rounded-full border border-mocha/40 px-2.5 py-1 text-xs font-medium text-mocha">
                {p.bestFor}
              </li>
            )}
            {ingredientChips.map((c) => (
              <li
                key={c}
                className="rounded-full bg-tint px-2.5 py-1 text-xs font-medium text-mocha"
              >
                {c}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-3">
          <ExpandableText text={p.summary} extra={highlights} />
        </div>

        <div className="mt-auto pt-5">
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-bold text-espresso">RM{p.price}</p>
            {p.priceNote && <p className="text-sm text-ink-500">{p.priceNote}</p>}
          </div>
          <a
            href={waForProduct(p.name)}
            aria-label={`Order ${p.name} on WhatsApp`}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-cta px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
          >
            <WhatsApp size={16} /> Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

const TECH_TYPE_LABEL: Record<Technology["type"], string> = {
  device: "Device",
  injectable: "Injectable",
};

/** Photo-card for a device/injectable — mirrors TreatmentCard (image or motif
 *  fallback, name, a type badge, and the treatment(s) it powers). Links to the
 *  item's own /technology/[slug] page. */
export function TechnologyCard({ x, className = "", style }: { x: Technology } & Extra) {
  const powers = treatmentsOfTechnology(x.slug);
  return (
    <div style={style} className={`${cardBase} overflow-hidden ${className}`}>
      <Link href={`/technology/${x.slug}`} className="flex flex-1 flex-col">
        {x.image ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-tint">
            <Image
              src={x.image}
              alt={x.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        ) : (
          <ProductMotif slug={x.slug} className="aspect-[16/10]" />
        )}
        <div className="flex flex-1 flex-col p-5 pb-0">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-tint px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-mocha">
              {TECH_TYPE_LABEL[x.type]}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-espresso decoration-mocha/60 underline-offset-4 group-hover:underline">
            {x.name}
          </h3>
        </div>
      </Link>
      <div className="p-5 pt-3">
        {powers.length > 0 && (
          <p className="text-sm leading-relaxed text-ink-700">
            Used in{" "}
            {powers.map((t, i) => (
              <span key={t.slug}>
                {i > 0 ? ", " : ""}
                <Link
                  href={treatmentHref(t)}
                  className="underline decoration-mocha/40 underline-offset-2 hover:text-accent"
                >
                  {t.name}
                </Link>
              </span>
            ))}
            .
          </p>
        )}
        <Link
          href={`/technology/${x.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
