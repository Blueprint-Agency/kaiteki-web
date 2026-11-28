import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { ProductMotif } from "./cards";
import { ArrowRight } from "./icons";
import { SectionHeading } from "./SectionHeading";
import { technologyBySlug } from "@/content/data/technology";
import { treatmentBySlug } from "@/content/data/treatments";
import { productBySlug } from "@/content/data/products";
import { homeCopy } from "@/content/i18n/home";
import { lhref } from "@/lib/locale-pages";
import type { Locale } from "@/lib/i18n";

const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

/** The five cards, in rank order. Titles and sublines are in
 *  homeCopy[locale].bestSellers.items at the same index (a five-item tuple, so a
 *  missing translation fails typecheck). `image` is the linked record's own cover
 *  image; the panda-eye treatment has none yet, so it shows the Deusaderm product
 *  it uses. The links are locale-neutral paths; lhref() points them at the
 *  translation once it is live and at the English page until then. */
const CARDS: { path: string; image: string | undefined; motif: string }[] = [
  { path: "/treatments/panda-eye-treatment", image: technologyBySlug("deusaderm")?.image, motif: "deusaderm" },
  { path: "/treatments/k-premium-lifting", image: treatmentBySlug("k-premium-lifting")?.image, motif: "oligio" },
  { path: "/technology/onda-face", image: technologyBySlug("onda-face")?.image, motif: "onda-coolwaves" },
  { path: "/technology/juvelook", image: technologyBySlug("juvelook")?.image, motif: "juvelook" },
  {
    path: "/products/doubleblock-uv-sunscreen",
    image: productBySlug("doubleblock-uv-sunscreen")?.image,
    motif: "doubleblock-uv-sunscreen",
  },
];

/** "Top 5 best sellers": a numbered row of five photo cards. Horizontal
 *  snap-scroll below lg (cards peek at the edge, as on the concerns and
 *  treatments sections), a 5-up row from lg. Each card is one real link. */
export function BestSellers({ locale = "en" }: { locale?: Locale }) {
  const k = homeCopy[locale].bestSellers;

  return (
    <section id="best-sellers" aria-label={k.h2} className="bg-tint">
      <Container className="reveal py-16 sm:py-24">
        <SectionHeading title={k.h2} intro={k.sub} />

        <ol className="scrollbar-none -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-5 pb-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:pb-0">
          {CARDS.map((c, i) => {
            const { title, sub } = k.items[i];
            return (
              <li
                key={c.path}
                style={si(i)}
                className="reveal w-[64%] shrink-0 snap-start sm:w-[36%] lg:w-auto"
              >
                <Link
                  href={lhref(locale, c.path)}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-hairline transition-[box-shadow,--tw-ring-color] duration-300 ease-out hover:ring-mocha/70 hover:shadow-[0_18px_44px_rgb(73_54_40/0.09)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-porcelain/40">
                    {c.image ? (
                      // Decorative: the card's heading already names it, and
                      // some photos show the product used, not the treatment.
                      <Image
                        src={c.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 64vw, (max-width: 1024px) 36vw, 220px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <ProductMotif slug={c.motif} className="absolute inset-0" />
                    )}
                    {/* The rank is in the list order for assistive tech, so the
                        numeral is decoration there. */}
                    <span
                      aria-hidden
                      className="absolute left-3 top-3 flex size-10 items-center justify-center rounded-full bg-espresso font-display text-lg font-medium text-ink-on-dark shadow-sm"
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="font-display text-lg font-medium leading-snug text-espresso decoration-mocha/50 underline-offset-[5px] group-hover:underline sm:text-xl">
                      {title}
                    </h3>
                    {sub && <p className="mt-2 text-sm leading-relaxed text-ink-700">{sub}</p>}
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-accent">
                      {k.learnMore}
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
