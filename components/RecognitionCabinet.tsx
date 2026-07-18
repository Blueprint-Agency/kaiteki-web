import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { ArrowRight } from "./icons";
import { awards } from "@/content/data/awards";

// Stagger index for the scroll reveal (typed CSS custom property).
const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

// The manufacturers behind the awards — a short, verifiable list rather than a
// superlative claim (docs/05 §2).
const PARTNERS = "Merz · Allergan · Neauvia · Galderma · Neoasia · Elogio";

/**
 * Recognition — the partner awards as a warm gallery wall. Real photos of the
 * physical trophies/plaques, framed on the light "Warm Sanctuary" surface.
 * Framing copy keeps it MAB-safe: these are device/treatment-partner
 * performance awards, not patient-outcome or "best clinic" claims (docs/02 §5).
 * Pure server component — every hover is CSS, so the record renders without JS.
 */
export function RecognitionCabinet() {
  return (
    <section id="recognition" className="relative overflow-hidden bg-gradient-to-b from-page to-tint">
      {/* A soft porcelain arch rising behind the wall, echoing the hero silhouette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[62%] rounded-b-[50%] bg-gradient-to-b from-porcelain/50 to-transparent"
      />
      <Container className="relative py-16 sm:py-24">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.55fr)] lg:items-start">
          {/* Editorial column — the story + the ledger of record */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-balance text-2xl font-bold leading-tight text-espresso sm:text-3xl">
              Recognised by the brands{" "}
              <span className="font-serif font-normal italic text-mocha">behind your care</span>
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-700">
              The device and product partners we work with issue these for clinical
              volume and standards. They reflect our standing with the manufacturers —
              not a promise about any individual result.
            </p>

            {/* The clinical ledger — the signature trust element (docs/06 §4.6) */}
            <dl className="mt-9 max-w-md border-t border-hairline">
              {[
                ["Partners", PARTNERS],
                ["Awarded", "2023 – 2024"],
                ["On record", `${awards.length} partner awards`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-6 border-b border-hairline py-3"
                >
                  <dt className="shrink-0 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
                    {label}
                  </dt>
                  <dd className="ledger text-right !text-ink-700">{value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/doctors"
              className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-espresso"
            >
              <span className="border-b border-mocha/40 pb-0.5 transition-colors group-hover:border-espresso">
                See the full recognition record
              </span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* The wall — real trophy photos, framed and hung with a gentle stagger.
              nth-child(even) picks column 2 (mobile) and columns 2 & 4 (desktop),
              so alternate columns drop for a hung-gallery rhythm. */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-6">
            {awards.map((a, i) => (
              <li
                key={a.image}
                style={si(i)}
                className="reveal group [&:nth-child(even)]:mt-6 lg:[&:nth-child(even)]:mt-12"
              >
                <figure>
                  <div className="overflow-hidden rounded-xl border border-hairline bg-surface p-2 shadow-[0_10px_30px_rgb(73_54_40/0.06)] transition-[border-color,box-shadow,transform] duration-300 ease-out group-hover:-translate-y-1 group-hover:border-mocha group-hover:shadow-[0_18px_40px_rgb(73_54_40/0.12)]">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-tint">
                      <Image
                        src={a.image}
                        alt={a.alt}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 45vw"
                        className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 px-0.5">
                    <span className="block text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-accent">
                      {a.issuer}
                    </span>
                    <span className="mt-1 block text-sm font-medium leading-snug text-espresso">
                      {a.title}
                    </span>
                    {a.period && (
                      <span className="ledger mt-1 block !text-ink-500">{a.period}</span>
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
