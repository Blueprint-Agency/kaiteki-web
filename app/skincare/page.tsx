import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { WhatsApp } from "@/components/icons";
import { Disclaimer } from "@/components/Disclaimer";
import { products, productGroups, productsByGroup } from "@/content/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Kaiteki Skincare — Cosmeceutical Products | Kaiteki",
  description:
    "Kaiteki Cosmeceuticals — medical-grade skincare and partner brands used in clinic. Order any product or book a free consultation on WhatsApp.",
  path: "/skincare",
});

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Kaiteki® Cosmeceuticals",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      brand: { "@type": "Brand", name: p.brand },
      category: p.category,
      offers: {
        "@type": "Offer",
        price: p.price,
        priceCurrency: "MYR",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

export default function SkincareHub() {
  return (
    <Container className="py-10 sm:py-12">
      <PageHeader
        crumbs={[{ label: "Skincare" }]}
        eyebrow="Kaiteki® Cosmeceuticals"
        title="Skincare"
        description="Our medical-grade skincare range and the partner brands we use in clinic — order any product on WhatsApp."
      />

      <div className="mt-12 space-y-14">
        {productGroups.map((group) => (
          <section key={group}>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">
              {group}
            </h2>
            <CardRow>
              {productsByGroup(group).map((p) => (
                <ProductCard key={p.slug} p={p} />
              ))}
            </CardRow>
          </section>
        ))}
      </div>

      <div className="mt-14 max-w-2xl space-y-4">
        <p className="text-sm text-ink-500">
          Prices in Ringgit (RM) may change — confirm on WhatsApp when you order. Skincare supports,
          but does not replace, a doctor&rsquo;s assessment; medicated or prescription-only products
          may require a consultation.
        </p>
        <Disclaimer />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </Container>
  );
}
