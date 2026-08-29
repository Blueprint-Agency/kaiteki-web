/**
 * PROTOTYPE — throwaway. Variant C · "Paired".
 *
 * Three columns: contents on the left, argument in the middle, evidence on the
 * right. Each prose section keeps its figure beside the paragraph it explains
 * rather than stacked above or below it. The rail still runs the whole page —
 * the evidence column lives inside the reading column, not outside the grid.
 *
 * This is the shape concern Variant B had, and **that variant lost** — because
 * its evidence column only existed at ≥1280px. Worth a second look here: the
 * treatment prose is longer and the figures are genuinely per-section, so the
 * trade may land differently. Check it at 1280 and at 1024 before deciding.
 *
 * Risk — below `xl` the evidence column collapses under the prose and C becomes
 * Variant A. Below `lg` the rail goes too and all three converge.
 */

import Image from "next/image";
import type { Crumb } from "@/components/Breadcrumbs";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { CLEAR_CHROME } from "@/components/treatment-blocks";
import { technologyOfTreatment } from "@/content/data/relations";
import type { Treatment } from "@/lib/types";
import { TxHero, TxLede, TxTail, TxReading, slugifyHeading } from "./parts";
import { treatmentToc } from "./toc";
import { protoTxMedia, MANUFACTURER_NOTE, type TxMedia } from "./media";

export const NAME = "Paired — contents · argument · evidence";

export function VariantC({ t, trail }: { t: Treatment; trail: Crumb[] }) {
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

        {/* Prose — each section's figure paired to its right. */}
        {sections.map((s, i) => {
          const fig = m.figures?.[i];
          return (
            <section
              key={s.heading}
              id={slugifyHeading(s.heading)}
              className={`grid gap-8 xl:grid-cols-[minmax(0,1fr)_17rem] xl:gap-10 ${CLEAR_CHROME}`}
            >
              <div className="max-w-[68ch]">
                <h2 className="h-section">{s.heading}</h2>
                <div className="prose mt-6 space-y-5 leading-[1.75] text-ink-700">
                  {s.body.map((p, j) => (
                    <p key={j} className={j === 0 ? "text-lg text-ink-900" : undefined}>
                      {p}
                    </p>
                  ))}
                </div>
                {s.list && (
                  <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                    {s.list.map((li) => (
                      <li key={li} className="py-3.5 leading-relaxed text-ink-700">
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {fig && (
                <figure className="xl:sticky xl:top-24 xl:self-start">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-tint ring-1 ring-hairline">
                    <Image
                      src={fig.src}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(max-width: 1280px) 100vw, 17rem"
                      className="object-cover object-left"
                    />
                  </div>
                  <figcaption className="mt-3 text-[0.8125rem] leading-snug text-ink-500">
                    {fig.caption}
                  </figcaption>
                </figure>
              )}
            </section>
          );
        })}

        {/* Zone gallery — same pairing: copy holds the left, zones scroll past. */}
        {m.zones && (
          <section
            id="treatment-areas"
            className={`${CLEAR_CHROME} grid gap-8 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-10`}
          >
            <div className="xl:sticky xl:top-24 xl:self-start">
              <h2 className="h-section">Treatment areas</h2>
              <p className="mt-5 leading-relaxed text-ink-700">
                {t.name} is applied to both facial and body areas. Your doctor confirms which apply
                to you at consultation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
              {m.zones.map((z) => (
                <figure key={z.src} className="text-center">
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

        {/* Manufacturer — the labelling copy holds beside the marks. */}
        {m.manufacturer && (
          <section
            id="manufacturer"
            className={`${CLEAR_CHROME} grid gap-8 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-10`}
          >
            <div className="xl:sticky xl:top-24 xl:self-start">
              <h2 className="h-section">What these treatments do</h2>
              <p className="mt-5 leading-relaxed text-ink-700">
                The images beside are supplied by the device manufacturers. They are not Kaiteki
                patients, and they illustrate what this category of treatment is designed to act on.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-ink-500">{MANUFACTURER_NOTE}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
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
          </section>
        )}

        <TxTail t={t} />
      </TxReading>
    </>
  );
}
