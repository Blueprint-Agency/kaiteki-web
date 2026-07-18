import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { FlipCard } from "./FlipCard";
import { TreatmentMotif } from "./cards";
import { ArrowRight } from "./icons";
import { categoryTreatments, treatmentHref } from "@/content/data/treatments";

const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

export function TreatmentsMenu() {
  const six = categoryTreatments().slice(0, 6);

  return (
    <section id="treatments" className="bg-tint">
      <Container className="reveal py-16 sm:py-24">
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
          {six.map((t, i) => (
            <FlipCard
              key={t.slug}
              href={treatmentHref(t)}
              ariaLabel={`${t.name} — read the treatment guide`}
              className="reveal"
              style={si(i)}
              front={
                <div className="relative h-full w-full overflow-hidden rounded-[1.75rem]">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt=""
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
                    <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl">
                      {t.name}
                    </h3>
                    {t.category && (
                      <p className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/80">
                        {t.category}
                      </p>
                    )}
                  </div>
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
          ))}
        </div>
      </Container>
    </section>
  );
}
