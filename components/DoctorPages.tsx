import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Ledger } from "@/components/Ledger";
import { DoctorCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArrowRight } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { doctors } from "@/content/data/doctors";
import { branchBySlug } from "@/content/data/branches";
import { treatments, treatmentHref } from "@/content/data/treatments";
import { concerns } from "@/content/data/concerns";
import { technology } from "@/content/data/technology";
import { pagesReviewedBy } from "@/content/data/relations";
import { doctorCopy, staticPages } from "@/content/i18n/static-pages";
import { concernUi } from "@/content/i18n/concern-ui";
import { fmt } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { lhref } from "@/lib/locale-pages";
import { localePath, type Locale } from "@/lib/i18n";
import { waForDoctor, waLink } from "@/lib/wa";
import { pageMeta } from "@/lib/seo";
import { collectionPageNode, profilePageGraph, webPageNode } from "@/lib/schema";
import type { Doctor } from "@/lib/types";

// /doctors and /doctors/[slug], rendered by app/(en)/doctors, app/zh/doctors and
// app/ms/doctors. Copy: content/i18n/static-pages.ts. Names, credentials and MMC
// numbers are printed as registered, in every language.

/** A doctor's role, bio and SEO fields in `locale`. */
function fieldsFor(locale: Locale, d: Doctor) {
  const k = staticPages[locale].doctors;
  const enRole = d.role ?? "Aesthetic Physician";
  if (locale === "en") {
    return {
      role: enRole,
      bio: d.bio,
      seoTitle: d.seoTitle ?? d.fullName,
      seoDescription:
        d.seoDescription ??
        `${d.fullName}, ${enRole} at Kaiteki Skin Aesthetic Clinic. Credentials: ${d.credentials}. Book a free consultation on WhatsApp.`,
    };
  }
  const t = doctorCopy[locale][d.slug];
  const role = t?.role ?? (k.roles as Record<string, string>)[enRole] ?? enRole;
  return {
    role,
    bio: t?.bio ?? undefined,
    seoTitle: t?.seoTitle ?? d.fullName,
    seoDescription: t?.seoDescription ?? fmt(k.page.seoFallback, { name: d.fullName, role, credentials: d.credentials }),
  };
}

/** A doctor's role as printed in `locale`. */
export const doctorRole = (locale: Locale, d: Doctor) => fieldsFor(locale, d).role;

/** Card copy for every doctor in a non-English locale; undefined in English. */
export function doctorCardsFor(locale: Locale) {
  if (locale === "en") return undefined;
  const k = staticPages[locale].doctors.card;
  return Object.fromEntries(
    doctors.map((d) => [
      d.slug,
      {
        href: lhref(locale, `/doctors/${d.slug}`),
        role: fieldsFor(locale, d).role,
        alt: fmt(k.alt, { name: d.fullName, credentials: d.credentials }),
        viewProfile: k.viewProfile,
      },
    ]),
  );
}

const home = (locale: Locale) =>
  locale === "en" ? undefined : { label: concernUi[locale].home, href: localePath(locale, "/") };

export function doctorsHubMeta(locale: Locale) {
  const k = staticPages[locale].doctors.hub;
  return pageMeta({ title: k.title, description: k.description, path: "/doctors", locale });
}

export function DoctorsHub({ locale }: { locale: Locale }) {
  const k = staticPages[locale].doctors.hub;
  const cards = doctorCardsFor(locale);
  return (
    <Container className="py-10 sm:py-12">
      <JsonLd
        data={collectionPageNode({
          path: localePath(locale, "/doctors"),
          name: k.title,
          description: k.description,
          locale,
          // Person, not Physician: schema.org Physician is a MedicalOrganization
          // type, not a Person subtype (see physicianNode's note).
          items: doctors.map((d) => ({
            name: d.fullName,
            path: cards?.[d.slug].href ?? `/doctors/${d.slug}`,
            type: "Person",
            image: d.photo,
          })),
        })}
      />
      <PageHeader home={home(locale)} crumbs={[{ label: k.crumb }]} eyebrow={k.eyebrow} title={k.h1} description={k.intro} />
      <CardRow className="mt-10">
        {doctors.map((d) => (
          // Portraits are shot 2:3 — render at their native ratio so no face is cropped.
          <DoctorCard key={d.slug} d={d} {...cards?.[d.slug]} />
        ))}
      </CardRow>
    </Container>
  );
}

export function doctorMeta(locale: Locale, d: Doctor) {
  const f = fieldsFor(locale, d);
  return pageMeta({ title: f.seoTitle, description: f.seoDescription, path: `/doctors/${d.slug}`, image: d.photo, locale });
}

/** The guides a doctor reviewed, named and linked in `locale`. */
function reviewedIn(locale: Locale, slug: string) {
  if (locale === "en") return pagesReviewedBy(slug);
  return [
    ...treatments
      .filter((t) => t.reviewedBy === slug)
      .map((t) => ({ name: term(locale, "treatment", t.slug, t.name), href: lhref(locale, treatmentHref(t)) })),
    ...concerns
      .filter((c) => c.reviewedBy === slug)
      .map((c) => ({ name: term(locale, "concern", c.slug, c.name), href: lhref(locale, `/concerns/${c.slug}`) })),
    // Device and injectable names are brands and stay in Latin script.
    ...technology
      .filter((x) => x.reviewedBy === slug)
      .map((x) => ({ name: x.name, href: lhref(locale, `/technology/${x.slug}`) })),
  ];
}

export function DoctorProfile({ locale, d }: { locale: Locale; d: Doctor }) {
  const en = locale === "en";
  const k = staticPages[locale].doctors.page;
  const f = fieldsFor(locale, d);
  // "Dr Jessie Lim Jia Min" → "Dr Jessie" for in-prose references.
  const shortName = d.fullName.split(" ").slice(0, 2).join(" ");
  const branchNames = d.branches
    .map((b) => {
      const branch = branchBySlug(b);
      return branch ? term(locale, "branch", branch.slug, branch.name) : undefined;
    })
    .filter((name): name is string => Boolean(name));
  const reviewed = reviewedIn(locale, d.slug);
  const crumbs = staticPages[locale].doctors.hub.crumb;

  return (
    <Container className="py-10 sm:py-12">
      <JsonLd data={profilePageGraph(d, branchNames)} />
      {!en && (
        <JsonLd
          data={webPageNode({ path: `/doctors/${d.slug}`, name: f.seoTitle, description: f.seoDescription, image: d.photo, locale })}
        />
      )}
      <Breadcrumbs
        items={[{ label: crumbs, href: lhref(locale, "/doctors") }, { label: d.fullName }]}
        {...(en ? {} : { home: home(locale) })}
      />

      {/* Header — name reads as the page title, full width */}
      <header className="mt-8 border-b border-hairline pb-8">
        <p className="ledger text-[0.6875rem] uppercase tracking-[0.12em] text-accent">{f.role}</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-espresso sm:text-5xl">
          {d.fullName}
        </h1>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-16">
        {/* Left rail — portrait + verifiable facts + CTA, sticky on desktop */}
        <aside className="mx-auto w-full max-w-sm lg:mx-0 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:self-start lg:overflow-y-auto">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hairline bg-tint">
            <Image
              src={d.photo}
              alt={fmt(k.photoAlt, { name: d.fullName, credentials: d.credentials })}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 22rem"
              className="object-cover object-top"
            />
          </div>

          <Ledger
            className="mt-6 [&>div]:sm:flex-col [&>div]:sm:gap-0.5 [&_dt]:sm:w-auto"
            rows={[
              { label: k.credentials, value: d.credentials },
              { label: k.mmc, value: d.mmc ?? k.mmcTbc },
              ...(branchNames.length > 0
                ? [{ label: k.practisesAt, value: branchNames.join(locale === "zh" ? "、" : ", ") }]
                : []),
            ]}
          />

          <div className="mt-6">
            <WhatsAppButton
              href={en ? waForDoctor(d.fullName) : waLink(fmt(k.waConsult, { name: d.fullName }))}
              label={fmt(k.consult, { short: shortName })}
            />
          </div>
        </aside>

        {/* Bio */}
        {f.bio ? (
          <div className="prose max-w-[64ch] space-y-5 text-lg leading-relaxed text-ink-700">
            {f.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : (
          <p className="prose max-w-[64ch] text-lg leading-relaxed text-ink-700">
            {fmt(k.bioFallback, { name: d.fullName, role: en ? f.role.toLowerCase() : f.role })}
          </p>
        )}
      </div>

      {reviewed.length > 0 && (
        <section className="mt-14 border-t border-hairline pt-8">
          <h2 className="font-serif text-2xl font-semibold text-espresso">
            {fmt(k.reviewedHeading, { short: shortName })}
          </h2>
          <p className="mt-3 max-w-[64ch] text-lg leading-relaxed text-ink-700">
            {fmt(k.reviewedBody, { short: shortName })}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {reviewed.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="inline-block rounded-full border border-hairline px-4 py-1.5 text-sm text-ink-700 transition-colors hover:border-accent hover:text-accent"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-14 border-t border-hairline pt-6">
        <Link
          href={lhref(locale, "/doctors")}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-espresso"
        >
          <ArrowRight size={16} className="rotate-180" /> {k.allDoctors}
        </Link>
      </div>
    </Container>
  );
}
