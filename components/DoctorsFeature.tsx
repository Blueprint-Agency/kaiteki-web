import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { ArrowRight } from "./icons";
import { doctors } from "@/content/data/doctors";
import { homeCopy } from "@/content/i18n/home";
import { fmt } from "@/content/i18n/chrome";
import { lhref } from "@/lib/locale-pages";
import type { Locale } from "@/lib/i18n";

// The three founders/directors in the group portrait (cdn.kaiteki.my/images/
// doctors/team-trio.png), left → right, each a callout to their profile — rendered as
// a row beneath the portrait, in the same order as the people above.
const trio = [
  { slug: "dr-chew-yuhhui", name: "Dr Chew" },
  { slug: "dr-jessie-lim", name: "Dr Jessie" },
  { slug: "dr-yeong-bin", name: "Dr Yeong Bin" },
];

export function DoctorsFeature({ locale = "en" }: { locale?: Locale }) {
  const k = homeCopy[locale].doctors;
  return (
    <section id="doctors-feature" className="relative overflow-hidden bg-page">
      <Container className="relative py-16 sm:py-24">
        <div className="reveal grid items-center gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.92fr)]">
          {/* Copy + record */}
          <div className="lg:order-2">
            <h2 className="h-section">{k.h2}</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-700">{fmt(k.body, { n: String(doctors.length) })}</p>

            <dl className="mt-8 max-w-md border-t border-hairline">
              {[
                [k.teamLabel, fmt(k.teamValue, { n: String(doctors.length) })],
                [k.credLabel, k.credValue],
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
              href={lhref(locale, "/doctors")}
              className="group mt-7 inline-flex items-center gap-1.5 text-base font-medium text-espresso"
            >
              <span className="border-b border-espresso/30 pb-0.5 transition-colors group-hover:border-espresso">
                {k.meetAll}
              </span>
              <ArrowRight size={18} className="text-accent transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* The trio on a warm arch stage, callouts in a row beneath */}
          <div className="mx-auto w-full max-w-[600px] lg:order-1">
            <div className="relative">
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 top-[5%] rounded-t-[999px] bg-gradient-to-b from-sand via-sand/70 to-porcelain/35"
              />
              <span
                aria-hidden
                className="absolute inset-x-[-4%] bottom-0 top-[1%] rounded-t-[999px] border border-mocha/25"
              />
              <Image
                src="https://cdn.kaiteki.my/images/doctors/team-trio.png"
                alt={k.imageAlt}
                width={1516}
                height={1010}
                loading="eager"
                sizes="(min-width: 1024px) 600px, 92vw"
                className="relative z-10 h-auto w-full"
              />
            </div>

            {/* Callouts — one per doctor, left → right matching the portrait */}
            <div className="mt-5 flex flex-wrap items-stretch justify-center gap-3 sm:justify-between">
              {trio.map((d) => (
                <Link
                  key={d.slug}
                  href={lhref(locale, `/doctors/${d.slug}`)}
                  aria-label={fmt(k.profileAria, { name: d.name, role: k.roles[d.slug] })}
                  className="group flex items-center gap-3 rounded-full border border-hairline bg-surface px-4 py-2 shadow-[0_8px_22px_rgb(73_54_40/0.16)] transition-colors hover:border-mocha sm:gap-4 sm:px-5 sm:py-2.5"
                >
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-semibold text-espresso sm:text-sm">{d.name}</span>
                    <span className="mt-0.5 hidden text-[0.625rem] text-ink-500 sm:block">{k.roles[d.slug]}</span>
                  </span>
                  <ArrowRight
                    size={14}
                    className="shrink-0 text-accent transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
