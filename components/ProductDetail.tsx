import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadAnswer } from "@/components/LeadAnswer";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ConcernCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { Section, Steps } from "@/components/page-blocks";
import { concernBySlug } from "@/content/data/concerns";
import { productPageBySlug, productsWithPage } from "@/content/data/products";
import { productCopy, staticPages } from "@/content/i18n/static-pages";
import { concernUi } from "@/content/i18n/concern-ui";
import { localizedConcern } from "@/content/i18n/concern-locale";
import { fmt } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { isLive, lhref } from "@/lib/locale-pages";
import { localePath, type Locale } from "@/lib/i18n";
import { productPageGraph } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { waLink } from "@/lib/wa";
import type { Product, ProductPage } from "@/lib/types";

// /products/<slug>, rendered by app/(en)/products/[slug], app/zh/... and app/ms/...
// Only a product that carries a `page` (content/data/products.ts) has one: the
// rest are catalogue cards, and a thin page for each would dilute the cluster.
// English is the record; zh and ms overlay content/i18n/products/<locale>.json.
// Same gate as the other locale pages: a translation resolves only once its
// ledger entry is live (content/i18n/pages.ts).

const pathOf = (slug: string) => `/products/${slug}`;

/** Anchors for the page's first two sections, in every language. */
const SECTION_IDS = ["what-it-is", "who-it-suits"];

/** Every product with a detail page, for generateStaticParams in all three
 *  locales. A locale whose copy is not live prerenders its slugs as a 404. */
export function productDetailParams() {
  return productsWithPage.map((p) => ({ slug: p.slug }));
}

/** The product, its localized fields and its page copy, or undefined when the
 *  page does not exist or is not live in this locale. */
function resolve(locale: Locale, slug: string) {
  const p = productPageBySlug(slug);
  if (!p?.page) return undefined;
  if (locale === "en") {
    return { p, page: p.page, category: p.category, summary: p.summary, priceNote: p.priceNote, ingredients: p.ingredients, highlights: p.highlights };
  }
  const t = productCopy[locale][slug];
  if (!t?.page || !isLive(locale, pathOf(slug))) return undefined;
  return {
    p,
    page: t.page,
    category: t.category,
    summary: t.summary,
    priceNote: t.priceNote,
    ingredients: t.ingredients ?? undefined,
    highlights: t.highlights ?? undefined,
  };
}

export function productDetailMeta(locale: Locale, slug: string): Metadata {
  const r = resolve(locale, slug);
  if (!r) return {};
  return pageMeta({
    title: r.page.seoTitle,
    description: r.page.seoDescription,
    path: pathOf(slug),
    image: r.p.image,
    locale,
  });
}

/** The page, or null when `slug` has none in this locale (the route then 404s). */
export function ProductDetail({ locale, slug }: { locale: Locale; slug: string }) {
  const r = resolve(locale, slug);
  if (!r) return null;
  const { p, page, category, summary, priceNote, ingredients, highlights } = r;
  const en = locale === "en";
  const hub = staticPages[locale].products;
  const k = hub.detail;
  const cu = concernUi[locale];
  const wa = waLink(fmt(k.waAsk, { name: p.name }));
  const group = hub.explorer.groups[p.group] ?? p.group;

  return (
    <article>
      <JsonLd
        data={productPageGraph({
          path: pathOf(slug),
          name: p.name,
          pageName: page.seoTitle,
          description: summary,
          pageDescription: page.seoDescription,
          image: p.image,
          brand: p.brand,
          category,
          price: p.price,
          locale,
        })}
      />

      <header className="border-b border-hairline">
        <Container className="pt-8 pb-10 sm:pb-12">
          <Breadcrumbs
            items={[{ label: hub.crumb, href: lhref(locale, "/products") }, { label: p.name }]}
            home={en ? undefined : { label: cu.home, href: localePath(locale, "/") }}
          />
          <div className={`mt-8 grid gap-10 lg:gap-16 ${p.image ? "lg:grid-cols-[1fr_0.78fr] lg:items-center" : ""}`}>
            <div>
              <p className="kicker flex items-center gap-3">
                <span aria-hidden className="h-px w-7 flex-none bg-sand" />
                {group} · {category}
              </p>
              <h1 className="h-hero mt-5">{p.name}</h1>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-700">{summary}</p>

              <dl className="mt-8 grid max-w-[34rem] grid-cols-2 gap-x-8 gap-y-5 border-t border-hairline pt-6">
                <div>
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">{k.priceLabel}</dt>
                  <dd className="mt-1 font-display text-2xl text-espresso">{`RM${p.price}`}</dd>
                  {priceNote && <dd className="mt-1 text-sm text-ink-500">{priceNote}</dd>}
                </div>
                {ingredients && ingredients.length > 0 && (
                  <div>
                    <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">{k.ingredientLabel}</dt>
                    <dd className="mt-1 font-display text-2xl text-espresso">{ingredients.join(", ")}</dd>
                  </div>
                )}
              </dl>
              {highlights && highlights.length > 0 && (
                <ul aria-label={k.featuresLabel} className="mt-6 flex max-w-[40rem] flex-wrap gap-2">
                  {highlights.map((h) => (
                    <li key={h} className="rounded-full bg-tint px-3 py-1.5 text-sm font-medium text-mocha">
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <WhatsAppButton href={wa} variant="outline" position="hero" label={k.ctaHero} />
                <p className="text-sm text-ink-500">{hub.pricesNote}</p>
              </div>
            </div>

            {p.image && (
              <div className="relative aspect-square overflow-hidden rounded-2xl rounded-t-[4rem] bg-tint ring-1 ring-hairline lg:aspect-[5/4]">
                <Image
                  src={p.image}
                  alt={fmt(k.imageAlt, { name: p.name, category })}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </Container>
      </header>

      <Container className="py-12 sm:py-14">
        <div className="mx-auto max-w-[68ch]">
          <LeadAnswer label={cu.inBrief}>{page.leadAnswer}</LeadAnswer>
        </div>
      </Container>

      <Container>
        <div className="mx-auto max-w-[68ch]">
          {page.sections.map((s, i) => (
            <Section key={s.heading} id={SECTION_IDS[i]}>
              <h2 className="h-section">{s.heading}</h2>
              <div className="prose mt-6 space-y-5 leading-[1.75] text-ink-700">
                {s.body.map((para, j) => (
                  <p key={j} className={j === 0 ? "text-lg text-ink-900" : undefined}>
                    {para}
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
            </Section>
          ))}

          <HowToUse how={page.howToUse} />
          <WithTreatments p={p} t={page.withTreatments} locale={locale} />

          <Section id="faq">
            <h2 className="h-section">{cu.faqHeading}</h2>
            <div className="mt-8">
              <Faq items={page.faqs} anchorFrom={p.page?.faqs} />
            </div>
          </Section>
        </div>
      </Container>

      {/* Closing CTA on page ground, as the treatment and technology pages close. */}
      <Container className="border-t border-hairline py-14 sm:py-20">
        <div className="mx-auto max-w-[62ch] text-center">
          <p className="mx-auto max-w-[52ch] leading-relaxed text-ink-700">{hub.askBody}</p>
          <WhatsAppButton href={wa} size="lg" position="bottom" label={hub.askButton} className="mt-8" />
          <p className="mt-6">
            <Link
              href={lhref(locale, "/products")}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
            >
              {k.backToAll}
            </Link>
          </p>
        </div>
      </Container>

      <Container className="pb-14">
        <div className="max-w-[62ch]">
          <Disclaimer locale={locale} />
        </div>
      </Container>
    </article>
  );
}

function HowToUse({ how }: { how: ProductPage["howToUse"] }) {
  return (
    <Section id="how-to-use">
      <h2 className="h-section">{how.heading}</h2>
      <p className="mt-5 leading-relaxed text-ink-700">{how.intro}</p>
      <Steps steps={how.steps} />
      <p className="mt-8 leading-relaxed text-ink-700">{how.note}</p>
    </Section>
  );
}

/** How the product fits around clinic treatments, then the concern pages its
 *  record points at as cards (the technology page's own pattern: a translation
 *  once live, else the researched name and no English summary). */
function WithTreatments({
  p,
  t,
  locale,
}: {
  p: Product;
  t: ProductPage["withTreatments"];
  locale: Locale;
}) {
  const en = locale === "en";
  const cu = concernUi[locale];
  const concerns = (p.concerns ?? []).map(concernBySlug).filter((c) => c !== undefined);

  const cardFor = (slug: string, name: string) => {
    if (en) return {};
    const page = localizedConcern(locale, slug);
    const live = page && isLive(locale, `/concerns/${slug}`);
    const label = live ? page.c.name : term(locale, "concern", slug, name);
    return {
      href: lhref(locale, `/concerns/${slug}`),
      name: label,
      summary: live ? page.c.summary : null,
      explore: cu.learnMore,
      alt: fmt(cu.cardAltConcern, { name: label }),
    };
  };

  return (
    <Section id="with-treatments">
      <h2 className="h-section">{t.heading}</h2>
      <div className="prose mt-6 space-y-5 leading-[1.75] text-ink-700">
        {t.body.map((para, j) => (
          <p key={j}>{para}</p>
        ))}
      </div>
      {concerns.length > 0 && (
        <>
          <h3 className="h-sub mt-12">{t.concernsHeading}</h3>
          {/* Two cards in a 68ch column: the shelf's three-up grid would crush them. */}
          <CardRow className="mt-6 lg:grid-cols-2!">
            {concerns.map((c) => (
              <ConcernCard key={c.slug} c={c} {...cardFor(c.slug, c.name)} />
            ))}
          </CardRow>
        </>
      )}
    </Section>
  );
}
