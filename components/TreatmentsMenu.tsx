import type { CSSProperties } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { FlipCard } from "./FlipCard";
import { ArrowRight, Sparkle, Sun, Droplet, Eye, Contour, ShieldCheck } from "./icons";
import { categoryTreatments, treatmentHref } from "@/content/data/treatments";

const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

// Rotating line-icons for the tinted fronts (treatment photography carries rival
// brands' logos and is withheld — docs note in cards.tsx; the icon front follows
// the same "solid tile" pattern as the reference instead).
const ICONS = [Sparkle, Sun, Droplet, Contour, Eye, ShieldCheck];
// Alternating warm front washes so the six tiles read with rhythm, not repetition.
const WASH = [
  "from-tint to-porcelain",
  "from-[#f3ece4] to-sand/50",
  "from-[#efe7df] to-porcelain",
];

export function TreatmentsMenu() {
  const six = categoryTreatments().slice(0, 6);

  return (
    <section id="treatments" className="bg-gradient-to-b from-page to-tint">
      <Container className="py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-balance text-2xl font-bold leading-tight text-espresso sm:text-3xl">
              A considered menu of{" "}
              <span className="font-serif font-normal italic text-mocha">treatments</span>
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-700">
              Non-surgical, established platforms for skin, ageing and body concerns.
              Hover any card to see what it addresses.
            </p>
          </div>
          <Link
            href="/treatments"
            className="group inline-flex items-center gap-1.5 py-1.5 text-sm font-medium text-accent hover:text-espresso"
          >
            View all treatments{" "}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {six.map((t, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <FlipCard
                key={t.slug}
                href={treatmentHref(t)}
                ariaLabel={`${t.name} — read the treatment guide`}
                className="reveal"
                style={si(i)}
                front={
                  <div
                    className={`flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br p-5 text-center ${WASH[i % WASH.length]}`}
                  >
                    <span className="flex size-14 items-center justify-center rounded-full bg-surface/70 text-mocha ring-1 ring-hairline">
                      <Icon size={26} />
                    </span>
                    <h3 className="text-lg font-semibold leading-tight text-espresso sm:text-xl">
                      {t.name}
                    </h3>
                    {t.category && (
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
                        {t.category}
                      </p>
                    )}
                  </div>
                }
                back={
                  <div className="flex h-full flex-col justify-between p-5 text-left">
                    <div>
                      <h3 className="text-lg font-semibold leading-tight text-espresso">{t.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-700">{t.summary}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn more <ArrowRight size={15} />
                    </span>
                  </div>
                }
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
