import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/cards";
import { WhatsApp } from "@/components/icons";
import { Disclaimer } from "@/components/Disclaimer";
import { products, productGroups, productsByGroup } from "@/content/data/products";

export const metadata: Metadata = {
  title: "Skincare — Kaiteki® Cosmeceuticals",
  description:
    "Kaiteki® Cosmeceuticals — our medical-grade skincare range plus selected partner brands. Order any product on WhatsApp.",
  alternates: { canonical: "/skincare" },
};

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
      <Breadcrumbs items={[{ label: "Skincare" }]} />

      <div className="mt-8 max-w-2xl">
        <p className="text-sm font-medium text-accent">Kaiteki® Cosmeceuticals</p>
        <h1 className="mt-2 text-3xl font-bold text-espresso sm:text-4xl">Skincare</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-700">
          Our medical-grade skincare range and the partner brands we use in clinic — order any
          product on WhatsApp.
        </p>
      </div>

      <div className="mt-12 space-y-14">
        {productGroups.map((group) => (
          <section key={group}>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">
              {group}
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {productsByGroup(group).map((p) => (
                <ProductCard key={p.slug} p={p} />
              ))}
            </div>
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
