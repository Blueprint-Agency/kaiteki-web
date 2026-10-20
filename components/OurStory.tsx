import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ClosingCta } from "@/components/ClosingCta";
import { RecognitionCabinet } from "@/components/RecognitionCabinet";
import { JsonLd } from "@/components/JsonLd";
import { doctorRole } from "@/components/DoctorPages";
import { doctors } from "@/content/data/doctors";
import { staticPages } from "@/content/i18n/static-pages";
import { concernUi } from "@/content/i18n/concern-ui";
import { chrome, fmt } from "@/content/i18n/chrome";
import { lhref } from "@/lib/locale-pages";
import { localePath, type Locale } from "@/lib/i18n";
import { waLink } from "@/lib/wa";
import { pageMeta } from "@/lib/seo";
import { webPageNode } from "@/lib/schema";

// /our-story, rendered by app/(en)/our-story, app/zh/our-story and
// app/ms/our-story. Copy: content/i18n/static-pages.ts.

export function ourStoryMeta(locale: Locale) {
  const k = staticPages[locale].ourStory;
  return pageMeta({ title: k.title, description: k.description, path: "/our-story", locale });
}

const founders = ["dr-jessie-lim", "dr-chew-yuhhui"]
  .map((slug) => doctors.find((d) => d.slug === slug))
  .filter((d): d is (typeof doctors)[number] => Boolean(d));

// Founder interviews in the Malaysian lifestyle press (verified URLs).
const interviews: Record<string, string> = {
  "dr-jessie-lim": "https://www.theyumlist.net/2020/07/dr-jessie-lim-aesthetic-physician-pj.html",
  "dr-chew-yuhhui": "https://www.theyumlist.net/2025/12/dr-chew-yuhhui-medical-director-of-kaiteki-clinic.html",
};

// Third-party editorial coverage. Neutral, MAB-safe descriptions (no outcome
// claims or superlatives); links out to the original articles. Chronological,
// oldest first. Titles are copy (static-pages ourStory.press.titles).
const press = [
  { key: "yum-2020", pub: "The Yum List", year: "2020", href: "https://www.theyumlist.net/2020/07/dr-jessie-lim-aesthetic-physician-pj.html" },
  { key: "kelly-2020", pub: "Kelly Siew Cooks", year: "2020", href: "https://kellysiewcooks.com/2020/09/15/kaiteki-medical-spa-the-hub-ss2/" },
  { key: "emily-2021", pub: "Emily Quak", year: "2021", href: "https://www.emilyquak.com/post/fixing-my-acne-skin-with-kaiteki-skin-aesthetic-laser" },
  { key: "yum-2023", pub: "The Yum List", year: "2023", href: "https://www.theyumlist.net/2023/02/kaiteki-clinic-mont-kiara-lip-filler-facials-more.html" },
  { key: "tpg-2024", pub: "TallPiscesGirl", year: "2024", href: "https://www.tallpiscesgirl.com/2024/10/kaiteki-clinic-review.html" },
  { key: "yum-2025", pub: "The Yum List", year: "2025", href: "https://www.theyumlist.net/2025/12/dr-chew-yuhhui-medical-director-of-kaiteki-clinic.html" },
] as const;

const VALUES = [
  { key: "comfort", kanji: "かいてき" },
  { key: "assessment", kanji: "医" },
  { key: "honest", kanji: "誠" },
] as const;

export function OurStory({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const k = staticPages[locale].ourStory;
  // Chinese runs a lead phrase straight into its emphasis; English and Malay
  // keep a space.
  const gap = locale === "zh" ? "" : " ";
  const stats = [
    { value: "9", label: k.stats.clinics },
    { value: "4", label: k.stats.states },
    { value: `${doctors.length}`, label: k.stats.doctors },
  ];

  return (
    <>
      {/* ── Hero: the word itself is the thesis ── */}
      <section className="relative overflow-hidden bg-page">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[7rem] font-semibold leading-none text-mocha/10 sm:text-[10rem] lg:text-[13rem]"
        >
          かいてき
        </span>
        <Container className="relative py-16 sm:py-24">
          <JsonLd
            data={webPageNode({
              path: "/our-story",
              name: k.title,
              description: k.description,
              type: "AboutPage",
              locale,
            })}
          />
          <Breadcrumbs
            items={[{ label: k.crumb }]}
            {...(en ? {} : { home: { label: concernUi[locale].home, href: localePath(locale, "/") } })}
          />
          <div className="mt-8 max-w-2xl">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
              {k.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] text-espresso sm:text-5xl lg:text-6xl">
              {k.h1Lead}
              {gap}
              <span className="font-serif font-normal italic text-mocha">{k.h1Em}</span>
            </h1>
            <p className="prose mt-6 text-lg leading-relaxed text-ink-700">{k.lede}</p>
            <div className="mt-8">
              {en ? (
                <WhatsAppButton label={k.book} />
              ) : (
                <WhatsAppButton href={waLink(chrome[locale].wa.generic)} label={k.book} />
              )}
            </div>
          </div>

          {/* Ledger of verified facts */}
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
            {stats.map((s) => (
              <div key={s.label} className="bg-page px-5 py-6">
                <dt className="text-3xl font-bold text-espresso sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.12em] text-ink-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Philosophy: omotenashi ── */}
      <section className="border-t border-hairline bg-tint">
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <SectionHeading
              eyebrow={k.philosophy.eyebrow}
              title={
                <>
                  {k.philosophy.titleLead}
                  {gap}
                  <span className="font-serif font-normal italic text-mocha">{k.philosophy.titleEm}</span>
                </>
              }
            />
            <div className="prose mt-4 space-y-4 text-lg leading-relaxed text-ink-700">
              <p>
                {k.philosophy.p1Lead}
                {gap}
                <em>{k.philosophy.p1Em}</em>
                {k.philosophy.p1Rest}
              </p>
              <p>{k.philosophy.p2}</p>
            </div>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl border border-hairline">
            <Image
              src="https://cdn.kaiteki.my/images/clinics/clinic-mont-kiara.jpg"
              alt={k.philosophy.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* ── Founders ── */}
      <section className="border-t border-hairline bg-tint">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow={k.founders.eyebrow}
            title={k.founders.title}
            intro={fmt(k.founders.intro, { n: `${doctors.length}` })}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {founders.map((d) => (
              <div
                key={d.slug}
                className="reveal flex flex-col gap-5 rounded-3xl border border-hairline bg-page p-6 sm:flex-row sm:items-start sm:p-7"
              >
                <div className="relative aspect-[3/4] w-32 shrink-0 self-center overflow-hidden rounded-2xl border border-hairline bg-tint sm:w-40 sm:self-start">
                  <Image
                    src={d.photo}
                    alt={fmt(k.founders.photoAlt, { name: d.fullName, credentials: d.credentials })}
                    fill
                    sizes="(max-width: 640px) 128px, 160px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-espresso">{d.fullName}</h3>
                  <p className="mt-0.5 text-sm font-medium text-mocha">{en ? d.role : doctorRole(locale, d)}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-ink-500">
                    {d.credentials}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-700">
                    {(k.founders.blurbs as Record<string, string>)[d.slug] ?? d.bio?.[0]}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <Link
                      href={lhref(locale, `/doctors/${d.slug}`)}
                      className="text-sm font-medium text-accent hover:text-espresso"
                    >
                      {k.founders.readProfile}
                    </Link>
                    {interviews[d.slug] && (
                      <a
                        href={interviews[d.slug]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent hover:text-espresso"
                      >
                        {k.founders.readInterview}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base text-ink-700">
            {fmt(k.founders.teamLead, { n: `${doctors.length}` })}
            {gap}
            <Link href={lhref(locale, "/doctors")} className="font-medium text-accent hover:text-espresso">
              {k.founders.meetEvery}
            </Link>
          </p>
        </Container>
      </section>

      {/* ── Recognition: device/treatment-partner awards (MAB-safe) ── */}
      <RecognitionCabinet locale={locale} />

      {/* ── In the press ── */}
      <section className="border-t border-hairline bg-tint">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow={k.press.eyebrow}
            title={
              <>
                {k.press.titleLead}
                {gap}
                <span className="font-serif font-normal italic text-mocha">{k.press.titleEm}</span>
              </>
            }
            intro={k.press.intro}
          />
          <ul className="mt-8 max-w-3xl divide-y divide-hairline border-y border-hairline">
            {press.map((p) => (
              <li key={p.href} className="reveal">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="min-w-0">
                    <span className="font-semibold text-espresso">{p.pub}</span>
                    <span className="text-ink-700">
                      {locale === "zh" ? "，" : ", "}
                      {k.press.titles[p.key]}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-sm text-ink-500 transition-colors group-hover:text-espresso">
                    {p.year} <span aria-hidden>↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Values ── */}
      <section className="bg-page">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={k.values.title} align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.key} className="reveal rounded-3xl border border-hairline bg-tint p-7">
                <span aria-hidden className="text-4xl font-semibold text-mocha/40">
                  {v.kanji}
                </span>
                <h3 className="mt-4 text-lg font-bold text-espresso">{k.values[v.key].title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-700">{k.values[v.key].body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta locale={locale} />
    </>
  );
}
