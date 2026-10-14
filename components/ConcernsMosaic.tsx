import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { FlipCard } from "./FlipCard";
import { ArrowRight } from "./icons";
import { concernBySlug } from "@/content/data/concerns";
import { homeCopy } from "@/content/i18n/home";
import { fmt } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { lhref } from "@/lib/locale-pages";
import type { Locale } from "@/lib/i18n";

const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

const FEATURED = [
  "acne",
  "body-slimming",
  "fine-lines-wrinkles",
  "tattoo-removal",
  "hair-loss",
  "face-contouring",
];

/** "What brings you in?" — a 3×2 grid of photo tiles that flip to reveal what a
 *  doctor may consider, then link through to the concern guide. */
export function ConcernsMosaic({ locale = "en" }: { locale?: Locale }) {
  const k = homeCopy[locale].concerns;
  const six = FEATURED.map(concernBySlug)
    .filter((c) => c !== undefined)
    .map((c) => ({
      ...c,
      name: term(locale, "concern", c.slug, c.name),
      summary: k.summaries?.[c.slug] ?? c.summary,
    }));

  return (
    <section id="concerns" className="relative overflow-hidden bg-page">
      <Container className="reveal py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="h-section">{k.h2}</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-700">
              {k.sub}
            </p>
          </div>
          <Link
            href={lhref(locale, "/concerns")}
            className="group inline-flex items-center gap-1.5 py-1.5 text-sm font-medium text-accent hover:text-espresso"
          >
            {k.viewAll}{" "}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile: horizontal snap-scroll carousel (cards peek at the edge).
            sm+: reverts to the static 3-col grid. -mx/px lets cards bleed to the
            screen edge past the Container padding on mobile only. */}
        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:overflow-y-visible sm:px-0 sm:pb-0">
          {six.map((c, i) => (
            <FlipCard
              key={c.slug}
              href={lhref(locale, `/concerns/${c.slug}`)}
              ariaLabel={fmt(k.cardAria, { name: c.name })}
              className="reveal w-[78%] shrink-0 snap-start sm:w-auto"
              style={si(i)}
              front={
                <>
                  <Image
                    src={c.image}
                    alt={fmt(k.imageAlt, { name: c.name })}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/15 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-5">
                    <h3 className="font-display text-xl font-medium leading-tight text-white sm:text-2xl">
                      {c.name}
                    </h3>
                    <ArrowRight size={18} className="mb-1 shrink-0 text-white/85" />
                  </div>
                </>
              }
              back={
                <div className="flex h-full flex-col justify-between p-5 text-left">
                  <div>
                    <h3 className="font-display text-xl font-medium leading-tight text-espresso">{c.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.summary}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {k.explore} <ArrowRight size={15} />
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
