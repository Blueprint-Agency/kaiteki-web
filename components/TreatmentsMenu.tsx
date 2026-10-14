import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { FlipCard } from "./FlipCard";
import { TreatmentMotif } from "./cards";
import { ArrowRight } from "./icons";
import { categoryTreatments, treatmentHref } from "@/content/data/treatments";
import { homeCopy } from "@/content/i18n/home";
import { fmt } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { lhref } from "@/lib/locale-pages";
import type { Locale } from "@/lib/i18n";

const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

export function TreatmentsMenu({ locale = "en" }: { locale?: Locale }) {
  const k = homeCopy[locale].treatments;
  // TreatmentMotif reads the English record, so the localized fields ride
  // alongside it rather than replacing it.
  const six = categoryTreatments()
    .slice(0, 6)
    .map((t) => ({
      t,
      name: term(locale, "treatment", t.slug, t.name),
      category: t.category ? term(locale, "category", t.category, t.category) : undefined,
      summary: k.summaries?.[t.slug] ?? t.summary,
    }));

  return (
    <section id="treatments" className="bg-tint">
      <Container className="reveal py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="h-section">{k.h2}</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-700">
              {k.sub}
            </p>
          </div>
          <Link
            href={lhref(locale, "/treatments")}
            className="group inline-flex items-center gap-1.5 py-1.5 text-sm font-medium text-accent hover:text-espresso"
          >
            {k.viewAll}{" "}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile: horizontal snap-scroll carousel; sm+ reverts to the 3-col grid. */}
        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:overflow-y-visible sm:px-0 sm:pb-0">
          {six.map(({ t, name, category, summary }, i) => (
            <FlipCard
              key={t.slug}
              href={lhref(locale, treatmentHref(t))}
              ariaLabel={fmt(k.cardAria, { name })}
              className="reveal w-[78%] shrink-0 snap-start sm:w-auto"
              style={si(i)}
              front={
                <div className="relative h-full w-full overflow-hidden rounded-[1.75rem]">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={fmt(k.imageAlt, { name })}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <TreatmentMotif t={t} className="h-full w-full" />
                  )}
                  {/* Scrim keeps the label legible over the photo. */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                    <h3 className="font-display text-xl font-medium leading-tight text-white sm:text-2xl">
                      {name}
                    </h3>
                    {category && (
                      <p className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/80">
                        {category}
                      </p>
                    )}
                  </div>
                </div>
              }
              back={
                <div className="flex h-full flex-col justify-between p-5 text-left">
                  <div>
                    <h3 className="font-display text-xl font-medium leading-tight text-espresso">{name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{summary}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {k.learnMore} <ArrowRight size={15} />
                  </span>
                </div>
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
