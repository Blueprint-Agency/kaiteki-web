import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BranchGallery } from "@/components/BranchGallery";
import { Ledger } from "@/components/Ledger";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ConcernPicker } from "@/components/ConcernPicker";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { GoogleReviews } from "@/components/GoogleReviews";
import { branches } from "@/content/data/branches";
import { concerns } from "@/content/data/concerns";
import { doctors } from "@/content/data/doctors";
import { treatmentCategories, treatmentsByCategory, treatmentHref } from "@/content/data/treatments";
import { branchCopy, locationsCopy, place, type LocationsCopy } from "@/content/i18n/locations";
import { concernUi } from "@/content/i18n/concern-ui";
import { homeCopy } from "@/content/i18n/home";
import { fmt } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { lhref } from "@/lib/locale-pages";
import { localePath, type Locale } from "@/lib/i18n";
import { waForBranch, waLink } from "@/lib/wa";
import { pageMeta } from "@/lib/seo";
import { medicalClinicNode, webPageNode } from "@/lib/schema";
import type { Branch, Faq as FaqItem } from "@/lib/types";

// A /locations/[slug] branch page, rendered by app/(en)/locations/[slug],
// app/zh/locations/[slug] and app/ms/locations/[slug].
// Copy: content/i18n/locations.ts. NAP (address, phone) is never translated.

/** The branch's own fields in `locale`: English from the record, else the
 *  translation in content/i18n/locations.ts. */
function fieldsFor(locale: Locale, b: Branch) {
  if (locale === "en") {
    return {
      name: b.name,
      city: b.city,
      state: b.state,
      region: b.region,
      gettingHere: b.gettingHere,
      parking: b.parking,
      serves: b.serves,
      hours: b.hours,
      seoTitle: b.seoTitle ?? b.name,
      seoDescription:
        b.seoDescription ??
        `Kaiteki ${b.name} skin & aesthetic clinic in ${b.city}, ${b.state}. Doctor-led treatments; book a free consultation on WhatsApp.`,
    };
  }
  const t = branchCopy[locale][b.slug];
  return {
    name: term(locale, "branch", b.slug, b.name),
    city: place(locale, b.city),
    state: place(locale, b.state),
    region: term(locale, "region", b.region, b.region),
    ...t,
  };
}

type Fields = ReturnType<typeof fieldsFor>;

/**
 * Branch FAQ built from this branch's own fields, so the answers differ across
 * the nine pages instead of repeating one template. Only facts already in
 * `branches.ts` are used — nothing here is inferred beyond what that file
 * already flags as client-verifiable.
 */
function branchFaqs(b: Branch, f: Fields, k: LocationsCopy["page"]): FaqItem[] {
  const q = k.faq;
  const v = { name: f.name };
  const items: FaqItem[] = [
    {
      q: fmt(q.whereQ, v),
      a: fmt(q.whereA, { ...v, address: b.address, gettingHere: f.gettingHere ? `${k.sentenceGap}${f.gettingHere}` : "" }),
    },
    { q: fmt(q.hoursQ, v), a: fmt(q.hoursA, { hours: f.hours.join(k.hoursSentenceJoin) }) },
  ];
  if (f.parking) items.push({ q: fmt(q.parkingQ, v), a: fmt(q.parkingA, { parking: f.parking }) });
  if (f.serves?.length) {
    items.push({ q: fmt(q.servesQ, v), a: fmt(q.servesA, { ...v, serves: f.serves.join(k.listJoin), city: f.city }) });
  }
  items.push({ q: fmt(q.bookQ, v), a: fmt(q.bookA, { phone: b.phone }) });
  return items;
}

export function branchMeta(locale: Locale, b: Branch) {
  const f = fieldsFor(locale, b);
  return pageMeta({
    title: f.seoTitle,
    description: f.seoDescription,
    path: `/locations/${b.slug}`,
    image: b.photo,
    locale,
  });
}

export function BranchPage({ locale, b }: { locale: Locale; b: Branch }) {
  const en = locale === "en";
  const k = locationsCopy[locale].page;
  const hub = locationsCopy[locale].hub;
  const f = fieldsFor(locale, b);
  const faqs = branchFaqs(b, f, k);

  const here = doctors.filter((d) => d.branches.includes(b.slug));
  const nearby = branches.filter((n) => n.region === b.region && n.slug !== b.slug);
  const intro =
    f.gettingHere ?? fmt(k.introFallback, { name: f.name, city: f.city, state: f.state });

  return (
    <>
      <Container className="py-10 sm:py-12">
      {/* Per-branch MedicalClinic node (NAP, geo, hours) wired to the site graph
          by @id, built in lib/schema.ts so all branches stay consistent. A
          translated page is another WebPage about the same clinic, so it adds
          a WebPage node in its own language and keeps the clinic's one @id. */}
      <JsonLd data={medicalClinicNode(b)} />
      {!en && (
        <JsonLd
          data={webPageNode({
            path: `/locations/${b.slug}`,
            name: f.seoTitle,
            description: f.seoDescription,
            image: b.photo,
            locale,
          })}
        />
      )}
      <Breadcrumbs
        items={[{ label: hub.crumb, href: lhref(locale, "/locations") }, { label: f.name }]}
        {...(en ? {} : { home: { label: concernUi[locale].home, href: localePath(locale, "/") } })}
      />

      {/* Intro + storefront, vertically centred so neither column orphans whitespace. */}
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-sm font-medium text-accent">{f.region}</p>
          <h1 className="h-hero mt-2">{fmt(k.h1, { name: f.name })}</h1>
          {b.alsoKnownAs && (
            <p className="mt-2 text-sm text-ink-500">
              {k.alsoKnownAs} <span className="font-medium text-ink-700">{b.alsoKnownAs}</span>
            </p>
          )}
          <p className="prose mt-4 max-w-[60ch] text-lg leading-relaxed text-ink-700">
            {intro}
            {k.sentenceGap}
            {k.introCta}
          </p>

          {f.serves && (
            <p className="mt-3 text-sm text-ink-500">
              {fmt(k.serving, { list: f.serves.join(k.listJoin) })}
            </p>
          )}
        </div>

        <BranchGallery
          photos={[b.photo, ...(b.photos ?? [])]}
          alt={fmt(k.galleryAlt, { name: f.name, city: f.city, state: f.state })}
        />
      </div>

      {/* "Find us" — the contact details paired with their map at matched height,
          so the address sits beside the pin it describes rather than floating apart. */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        <div className="flex flex-col rounded-2xl border border-hairline bg-surface p-6">
          <Ledger
            rows={[
              { label: k.address, value: b.address },
              { label: k.phone, value: b.phone },
              { label: k.hours, value: f.hours.join(k.hoursJoin) },
              ...(f.parking ? [{ label: k.parking, value: f.parking }] : []),
            ]}
          />
          <div className="mt-auto pt-6">
            <WhatsAppButton
              href={en ? waForBranch(b.name) : waLink(fmt(k.waBook, { name: f.name }))}
              label={fmt(k.contact, { name: f.name })}
            />
          </div>
        </div>

        {/* The stored mapUrl is a maps.app.goo.gl short link, which can't be iframed;
            the no-key `output=embed` endpoint geocodes a query instead. The query is
            biased with the business name so it pins the clinic, not a neighbouring
            shop in the same plaza. Prefer stored lat/lng once the clinic supplies them.
            ponytail: name+address query embed, no Maps API key needed. */}
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-hairline bg-tint">
          <iframe
            title={fmt(k.mapTitle, { name: f.name })}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              b.lat != null && b.lng != null
                ? `${b.lat},${b.lng}`
                : `Kaiteki ${b.name}, ${b.address}`,
            )}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>

      {here.length > 0 && (
        <section className="mt-12">
          <h2 className="h-sub mb-4">
            {k.doctors}
          </h2>
          <ul className="space-y-1.5">
            {here.map((d) => (
              <li key={d.slug} className="text-ink-700">
                <Link href={lhref(locale, `/doctors/${d.slug}`)} className="font-medium hover:text-espresso">
                  {d.fullName}
                </Link>
                {", "}
                <span className="ledger !text-ink-500">{d.credentials}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Concern-first entry point, placed ahead of the treatment index: a
          visitor who knows their concern but not the treatment can convert
          without reading the list. Same picker the /concerns hub uses, with the
          branch carried into the prefilled WhatsApp message. Rendered as a warm
          band rather than a bordered card so the page stops reading as one box
          after another. */}
      <div className="mt-16 sm:mt-20">
        <ConcernPicker
          branch={b.name}
          {...(en
            ? {}
            : {
                copy: {
                  heading: k.pickerHeading,
                  body: fmt(k.pickerBody, { name: f.name }),
                  button: k.pickerButton,
                  waNone: fmt(k.waBook, { name: f.name }),
                  waSome: fmt(k.waAbout, { name: f.name, names: "{names}" }),
                  join: k.listJoin,
                  names: Object.fromEntries(concerns.map((c) => [c.slug, term(locale, "concern", c.slug, c.name)])),
                },
              })}
          className="-mx-5 rounded-none border-x-0 bg-tint px-5 sm:mx-0 sm:rounded-2xl sm:border-x sm:px-8"
        />
      </div>

      {/* Treatments offered — the topical-relevance and internal-linking layer a
          NAP-only branch page has none of. Availability is stated as chain-wide
          rather than per-branch until the clinic supplies a per-branch service
          list; see the note below the index. */}
      <section className="mt-16 sm:mt-20">
        <SectionHeading
          title={fmt(k.treatments, { name: f.name })}
          intro={k.treatmentsIntro}
        />
        {/* An index, not a card grid: rows size to their own content, so a
            single-treatment category costs one line instead of a box padded
            out to match a four-item neighbour. Hairlines do the separating
            (DESIGN.md "hairline-first"). */}
        <dl className="mt-10 border-t border-hairline">
          {treatmentCategories.map((cat) => (
            <div
              key={cat}
              className="grid gap-x-10 gap-y-1 border-b border-hairline py-5 sm:grid-cols-[minmax(0,12rem)_1fr] sm:py-6"
            >
              <dt className="h-sub">{term(locale, "category", cat, cat)}</dt>
              {/* Negative y-margin cancels the links' touch-target padding so the
                  first link's text aligns to the label's cap line instead of
                  sitting ~8px below it; the row's own py keeps the rhythm. */}
              <dd className="-my-1.5 flex flex-wrap gap-x-6">
                {treatmentsByCategory(cat).map((t) => (
                  <Link
                    key={t.slug}
                    href={lhref(locale, treatmentHref(t))}
                    className="py-1.5 text-[0.9375rem] text-ink-700 underline-offset-4 transition-colors hover:text-espresso hover:underline"
                  >
                    {term(locale, "treatment", t.slug, t.name)}
                  </Link>
                ))}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[62ch] text-sm leading-relaxed text-ink-500">
          {fmt(k.notEvery, { name: f.name })}
        </p>
      </section>

      {/* Branch FAQ. Every answer is drawn from this branch's own data, so the
          nine pages differ rather than repeating one template — which is the
          actual local-SEO risk, not word count. No FAQPage JSON-LD, per the
          schema rule in lib/schema.ts. A translated FAQ keeps the English ids. */}
      <section className="mt-14">
        <h2 className="h-section">
          {fmt(k.faqHeading, { name: f.name })}
        </h2>
        <div className="mt-5">
          <Faq items={faqs} anchorFrom={en ? undefined : branchFaqs(b, fieldsFor("en", b), locationsCopy.en.page)} />
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="mt-14">
          <h2 className="h-sub mb-4">
            {fmt(k.nearby, { region: f.region })}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {nearby.map((n) => (
              <li key={n.slug}>
                <Link
                  href={lhref(locale, `/locations/${n.slug}`)}
                  className="inline-flex rounded-full border border-hairline bg-surface px-4 py-2 text-sm text-ink-700 transition-colors hover:border-mocha hover:text-espresso"
                >
                  {term(locale, "branch", n.slug, n.name)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={lhref(locale, "/locations")}
                className="inline-flex rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-mocha"
              >
                {k.allBranches}
              </Link>
            </li>
          </ul>
        </section>
      )}
      </Container>

      {/* Full-bleed band, so it sits outside the page Container rather than
          nesting a second one. See the compliance note in GoogleReviews.tsx. */}
      <GoogleReviews
        branch={b}
        className="bg-tint"
        {...(en
          ? {}
          : {
              copy: homeCopy[locale].reviews,
              branchCopy: { heading: fmt(k.reviewsHeading, { name: f.name }), readAll: k.readAllReviews },
            })}
      />
    </>
  );
}
