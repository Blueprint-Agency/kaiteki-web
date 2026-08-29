/**
 * PROTOTYPE — throwaway. Variant A · "Inline".
 *
 * Media enters the reading column. Figures sit inside the measure between prose
 * sections, at the width of the text they belong to. The zone gallery is a grid
 * in the column. Nothing breaks out of the rail.
 *
 * The conservative answer: one gutter, one column, media simply added to it.
 * Risk — 15 zone die-cuts in a single column read small, and a long page can
 * start to feel like a scrapbook.
 */

import Image from "next/image";
import type { Crumb } from "@/components/Breadcrumbs";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { CLEAR_CHROME } from "@/components/treatment-blocks";
import { technologyOfTreatment } from "@/content/data/relations";
import type { Treatment } from "@/lib/types";
import { TxHero, TxLede, TxTail, TxSection, TxReading } from "./parts";
import { treatmentToc } from "./toc";
import { protoTxMedia, MANUFACTURER_NOTE, type TxMedia } from "./media";

export const NAME = "Inline — media in the reading column";

export function VariantA({ t, trail }: { t: Treatment; trail: Crumb[] }) {
  const m: TxMedia = protoTxMedia[t.slug] ?? {};
  const sections = t.sections ?? [];
  const headings = treatmentToc(t, m, technologyOfTreatment(t.slug).length > 0);
  const hasRail = headings.length >= 3;

  return (
    <>
      <TxHero t={t} trail={trail} />
      <TxLede t={t} />

      <TxReading
        hasRail={hasRail}
        rail={hasRail ? <ArticleToc headings={headings} variant="sidebar" /> : undefined}
      >
        {hasRail && (
          <div className="lg:hidden">
            <ArticleToc headings={headings} />
          </div>
        )}

        {/* Prose, with a figure dropped in after every second section. */}
        {sections.map((s, i) => {
          const fig = m.figures?.[Math.floor(i / 2)];
          const showFig = i % 2 === 1 && fig;
          return (
            <div key={s.heading} className="space-y-16">
              <TxSection s={s} />
              {showFig && (
                <figure className="max-w-[68ch]">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-tint ring-1 ring-hairline">
                    <Image
                      src={fig.src}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-left"
                    />
                  </div>
                  <figcaption className="mt-3 text-[0.8125rem] leading-snug text-ink-500">
                    {fig.caption}
                  </figcaption>
                </figure>
              )}
            </div>
          );
        })}

        {/* Zone gallery — a grid in the column, heading inline above it. */}
        {m.zones && (
          <section id="treatment-areas" className={CLEAR_CHROME}>
            <h2 className="h-section">Treatment areas</h2>
            <p className="mt-5 max-w-[62ch] leading-relaxed text-ink-700">
              {t.name} is applied to both facial and body areas. These are the ones it is most
              often used for at Kaiteki.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4">
              {m.zones.map((z) => (
                <figure key={z.src} className="text-center">
                  {/* Transparent die-cut: page ground, object-contain, no panel. */}
                  <div className="relative aspect-square">
                    <Image
                      src={z.src}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 45vw, 190px"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-1 text-sm text-ink-700">{z.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Manufacturer — object-contain so logos are not cropped. */}
        {m.manufacturer && (
          <section id="manufacturer" className={CLEAR_CHROME}>
            <h2 className="h-section">What these treatments do</h2>
            <p className="mt-5 max-w-[62ch] leading-relaxed text-ink-700">
              The images below are supplied by the device manufacturers. They are not Kaiteki
              patients, and they illustrate what this category of treatment is designed to act on.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {m.manufacturer.map((img) => (
                <figure key={img.src}>
                  <div className="relative aspect-[4/3] rounded-xl bg-page ring-1 ring-hairline">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-contain p-4"
                    />
                  </div>
                  <figcaption className="mt-3 text-[0.8125rem] leading-snug text-ink-500">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-8 max-w-[62ch] text-sm leading-relaxed text-ink-500">
              {MANUFACTURER_NOTE}
            </p>
          </section>
        )}

        <TxTail t={t} />
      </TxReading>
    </>
  );
}
