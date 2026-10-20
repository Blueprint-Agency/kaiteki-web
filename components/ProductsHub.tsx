import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SkincareExplorer } from "@/components/SkincareExplorer";
import { PromoModal } from "@/components/PromoModal";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { JsonLd } from "@/components/JsonLd";
import type { ProductCardCopy } from "@/components/cards";
import { products } from "@/content/data/products";
import { productCopy, staticPages } from "@/content/i18n/static-pages";
import { homeCopy } from "@/content/i18n/home";
import { concernUi } from "@/content/i18n/concern-ui";
import { chrome, fmt } from "@/content/i18n/chrome";
import { lhref } from "@/lib/locale-pages";
import { localeMeta, localePath, type Locale } from "@/lib/i18n";
import { waLink } from "@/lib/wa";
import { pageMeta } from "@/lib/seo";
import { orgId, websiteId } from "@/lib/schema";
import { site } from "@/lib/site";

// /products, rendered by app/(en)/products, app/zh/products and app/ms/products.
// Copy: content/i18n/static-pages.ts. Product names, brands and RM prices are
// the same in every language.

export function productsHubMeta(locale: Locale) {
  const k = staticPages[locale].products;
  return pageMeta({ title: k.title, description: k.description, path: "/products", locale });
}

/** Card copy per product in a non-English locale; undefined in English. */
function cardsFor(locale: Locale): Record<string, ProductCardCopy> | undefined {
  if (locale === "en") return undefined;
  const k = staticPages[locale].products.card;
  return Object.fromEntries(
    products.map((p) => {
      const t = productCopy[locale][p.slug];
      const category = t?.category ?? p.category;
      return [
        p.slug,
        {
          category,
          summary: t?.summary ?? p.summary,
          bestFor: t?.bestFor ?? undefined,
          ingredients: t?.ingredients ?? undefined,
          highlights: t?.highlights ?? undefined,
          priceNote: t?.priceNote ?? undefined,
          alt: fmt(k.alt, { brand: p.brand, name: p.name, category }),
          order: k.order,
          orderLabel: fmt(k.orderLabel, { name: p.name }),
          waHref: waLink(fmt(k.waOrder, { name: p.name })),
          readMore: k.readMore,
          readLess: k.readLess,
        },
      ];
    }),
  );
}

// Bespoke rather than collectionPageNode(): these children are Products with
// visible RM prices, so each needs Brand + Offer, which the generic hub builder
// deliberately doesn't carry. Products have no detail route — the ItemList item
// URL is the hub anchor. Offer prices are marked up because they are rendered
// on the card (SD policy: only mark up visible content).
function collectionJsonLd(locale: Locale, cards: Record<string, ProductCardCopy> | undefined) {
  const k = staticPages[locale].products;
  const url = `${site.url}${localePath(locale, "/products")}`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name: k.title,
    description: k.description,
    inLanguage: localeMeta[locale].bcp47,
    isPartOf: { "@id": websiteId },
    mainEntity: {
      "@type": "ItemList",
      name: "Kaiteki® Cosmeceuticals",
      numberOfItems: products.length,
      itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          url: `${url}#${p.slug}`,
          // Product photos live on the CDN as absolute URLs; prefixing the site
          // host (as this used to) produced an invalid image URL.
          ...(p.image ? { image: p.image.startsWith("http") ? p.image : `${site.url}${p.image}` } : {}),
          description: cards?.[p.slug].summary ?? p.summary,
          brand: { "@type": "Brand", name: p.brand },
          category: cards?.[p.slug].category ?? p.category,
          offers: {
            "@type": "Offer",
            price: p.price,
            priceCurrency: "MYR",
            availability: "https://schema.org/InStock",
            url,
            seller: { "@id": orgId },
          },
        },
      })),
    },
  };
}

export function ProductsHub({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const k = staticPages[locale].products;
  const cards = cardsFor(locale);

  return (
    <Container className="py-10 sm:py-12">
      <PageHeader
        home={en ? undefined : { label: concernUi[locale].home, href: localePath(locale, "/") }}
        crumbs={[{ label: k.crumb }]}
        eyebrow={k.eyebrow}
        title={k.h1}
        description={k.headerDescription}
      />

      <section className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-tint px-6 py-7 ring-2 ring-accent/25 sm:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white">
            {k.promoBadge}
          </p>
          <p className="mt-3 font-display text-2xl leading-tight text-espresso sm:text-3xl">{k.promoTitle}</p>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-700">{k.promoBody}</p>
        </div>
        {en ? (
          <PromoModal trigger={k.promoTrigger} />
        ) : (
          <PromoModal trigger={k.promoTrigger} copy={homeCopy[locale].promo} productsHref={lhref(locale, "/products")} />
        )}
      </section>

      <div className="mt-12">
        <SkincareExplorer {...(en ? {} : { copy: k.explorer, cards })} />
      </div>

      <p className="mt-14 text-sm text-ink-500">{k.pricesNote}</p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-tint px-6 py-5 sm:px-8">
        <p className="max-w-xl text-sm leading-relaxed text-ink-700 sm:text-base">{k.askBody}</p>
        {en ? (
          <WhatsAppButton label={k.askButton} />
        ) : (
          <WhatsAppButton href={waLink(chrome[locale].wa.generic)} label={k.askButton} />
        )}
      </div>

      <JsonLd data={collectionJsonLd(locale, cards)} />
    </Container>
  );
}
