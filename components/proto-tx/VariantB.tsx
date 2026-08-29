/**
 * PROTOTYPE — throwaway. Variant B · "Wide".
 *
 * Prose holds a strict 68ch measure; media breaks past it to the full width of
 * the reading column. So the rail still runs the whole page — nothing escapes
 * the grid — but media is visibly a different register from text, and the zone
 * gallery gets five across instead of four.
 *
 * This is the 2026-07 spine's own idea ("prose holds a measure while structural
 * blocks use the full grid") applied to media. Risk — a figure that wide is
 * divorced from the paragraph it explains, and the page gains a lot of rhythm
 * changes.
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

export const NAME = "Wide — prose measured, media full-column";

export function VariantB({ t, trail }: { t: Treatment; trail: Crumb[] }) {
  const m: TxMedia = protoTxMedia[t.slug] ?? {};
  const sections = t.sections ?? [];
  const half = Math.ceil(sections.length / 2);
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

        {/* First half of the prose — measured, no media in it. */}
        {sections.slice(0, half).map((s) => (
          <TxSection key={s.heading} s={s} />
        ))}

        {/* Zone gallery — full column width, tinted panel, five across. */}
        {m.zones && (
          <section
            id="treatment-areas"
            className={`${CLEAR_CHROME} rounded-2xl border border-hairline bg-tint p-8 sm:p-10`}
          >
            <h2 className="h-section">Treatment areas</h2>
            <p className="mt-5 max-w-[62ch] leading-relaxed text-ink-700">
              {t.name} is applied to both facial and body areas. These are the ones it is most
              often used for at Kaiteki.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 xl:grid-cols-5">
              {m.zones.map((z) => (
                <figure key={z.src} className="text-center">
                  <div className="relative aspect-square">
                    <Image
                      src={z.src}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 45vw, 200px"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-1 text-sm text-ink-700">{z.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* A figure as a full-column breather between the two halves. */}
        {m.figures?.[0] && (
          <figure>
            <div className="relative aspect-[2.4/1] overflow-hidden rounded-2xl bg-tint ring-1 ring-hairline">
              <Image
                src={m.figures[0].src}
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-left"
              />
            </div>
            <figcaption className="mt-3 max-w-[62ch] text-[0.8125rem] leading-snug text-ink-500">
              {m.figures[0].caption}
            </figcaption>
          </figure>
        )}

        {/* Second half of the prose. */}
        {sections.slice(half).map((s) => (
          <TxSection key={s.heading} s={s} />
        ))}

        {/* Remaining figures, two across at full column width. */}
        {m.figures && m.figures.length > 1 && (
          <div className="grid gap-8 sm:grid-cols-2">
            {m.figures.slice(1).map((f) => (
              <figure key={f.src}>
                <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-tint ring-1 ring-hairline">
                  <Image
                    src={f.src}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 35vw"
                    className="object-cover object-left"
                  />
                </div>
                <figcaption className="mt-3 text-[0.8125rem] leading-snug text-ink-500">
                  {f.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Manufacturer — porcelain panel, full column width. */}
        {m.manufacturer && (
          <section
            id="manufacturer"
            className={`${CLEAR_CHROME} rounded-2xl border border-hairline bg-porcelain p-8 sm:p-10`}
          >
            <h2 className="h-section">What these treatments do</h2>
            <p className="mt-5 max-w-[62ch] leading-relaxed text-ink-700">
              The images below are supplied by the device manufacturers. They are not Kaiteki
              patients, and they illustrate what this category of treatment is designed to act on.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {m.manufacturer.map((img) => (
                <figure key={img.src}>
                  <div className="relative aspect-[4/3] rounded-xl bg-page ring-1 ring-hairline">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-contain p-5"
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
