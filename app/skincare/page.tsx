import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SkincareExplorer } from "@/components/SkincareExplorer";
import { PromoModal } from "@/components/PromoModal";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { products } from "@/content/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Kaiteki Cosmeceuticals | Japanese-Inspired Skincare",
  description:
    "Japanese-inspired, dermatologist-formulated skincare for acne, ageing and dull skin. Medical-grade ingredients, MOH-approved. Suitable for all skin types.",
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
        description="Medical-grade skincare formulated to support your skin between clinic treatments. Our own range alongside the partner brands our doctors trust and recommend."
      />

      <section className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-tint px-6 py-7 ring-2 ring-accent/25 sm:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white">
            Limited-time promotion
          </p>
          <p className="mt-3 font-display text-2xl leading-tight text-espresso sm:text-3xl">
            Skincare Mix &amp; Match — 5 products for RM699
          </p>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-700">
            Build a five-step routine from our Kaiteki&reg; Cosmeceuticals range. Normally up to
            RM888.
          </p>
        </div>
        <PromoModal trigger="View promotion" />
      </section>

      <div className="mt-12">
        <SkincareExplorer />
      </div>

      <div className="mt-14 max-w-2xl space-y-4">
        <p className="text-sm text-ink-500">
          Prices in Ringgit (RM) may change. Confirm on WhatsApp when you order. Skincare supports,
          but does not replace, a doctor&rsquo;s assessment. Medicated or prescription-only products
          may require a consultation.
        </p>
        <Disclaimer />
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-tint px-6 py-5 sm:px-8">
        <p className="max-w-xl text-sm leading-relaxed text-ink-700 sm:text-base">
          Not sure which products suit your skin? Message us on WhatsApp and a doctor&rsquo;s team
          will help you choose the right products for your concern and skin type.
        </p>
        <WhatsAppButton label="Ask us on WhatsApp" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </Container>
  );
}
