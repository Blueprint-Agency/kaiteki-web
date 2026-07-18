import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { FlipCard } from "./FlipCard";
import { ArrowRight } from "./icons";
import { concernBySlug } from "@/content/data/concerns";

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
export function ConcernsMosaic() {
  const six = FEATURED.map(concernBySlug).filter((c) => c !== undefined);

  return (
    <section id="concerns" className="relative overflow-hidden bg-page">
      <Container className="reveal py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-balance text-2xl font-bold leading-tight text-espresso sm:text-3xl">
              What brings you{" "}
              <span className="font-serif font-normal italic text-mocha">in?</span>
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-700">
              Start with the concern, not the machine. Hover any card for what a doctor
              may consider — and what to realistically expect.
            </p>
          </div>
          <Link
            href="/concerns"
            className="group inline-flex items-center gap-1.5 py-1.5 text-sm font-medium text-accent hover:text-espresso"
          >
            Explore all concerns{" "}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {six.map((c, i) => (
            <FlipCard
              key={c.slug}
              href={`/concerns/${c.slug}`}
              ariaLabel={`${c.name} — read the concern guide`}
              className="reveal"
              style={si(i)}
              front={
                <>
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/15 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-5">
                    <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl">
                      {c.name}
                    </h3>
                    <ArrowRight size={18} className="mb-1 shrink-0 text-white/85" />
                  </div>
                </>
              }
              back={
                <div className="flex h-full flex-col justify-between p-5 text-left">
                  <div>
                    <h3 className="text-lg font-semibold leading-tight text-espresso">{c.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.summary}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Explore options <ArrowRight size={15} />
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
