import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { TreatmentsExplorer, type TreatmentCardOverride } from "@/components/TreatmentsExplorer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { collectionPageNode } from "@/lib/schema";
import { categoryTreatments, treatmentHref } from "@/content/data/treatments";
import { treatmentsHub } from "@/content/i18n/treatments-hub";
import { treatmentUi } from "@/content/i18n/treatment-ui";
import { concernUi } from "@/content/i18n/concern-ui";
import { localizedTreatment } from "@/content/i18n/treatment-locale";
import { chrome, fmt } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { isLive, lhref } from "@/lib/locale-pages";
import { waLink } from "@/lib/wa";
import { localePath, type Locale } from "@/lib/i18n";

// The /treatments hub, rendered by app/(en)/treatments, app/zh/treatments and
// app/ms/treatments. Copy: content/i18n/treatments-hub.ts.

export function treatmentsHubMeta(locale: Locale) {
  const k = treatmentsHub[locale];
  return pageMeta({ title: k.title, description: k.description, path: "/treatments", locale });
}

/** A treatment card in `locale`: the page's own translated name and summary
 *  once its translation is live, else the researched name and no summary. */
function cardFor(locale: Exclude<Locale, "en">, slug: string, enName: string): TreatmentCardOverride {
  const path = `/treatments/${slug}`;
  const page = localizedTreatment(locale, slug);
  const live = page && isLive(locale, path);
  const name = live ? page.t.name : term(locale, "treatment", slug, enName);
  return {
    href: lhref(locale, path),
    name,
    summary: live ? page.t.summary : null,
    learnMore: concernUi[locale].learnMore,
    alt: fmt(treatmentUi[locale].cardAlt, { name }),
  };
}

export function TreatmentsHub({ locale }: { locale: Locale }) {
  const k = treatmentsHub[locale];
  const en = locale === "en";
  const cards =
    locale === "en"
      ? undefined
      : Object.fromEntries(categoryTreatments().map((t) => [t.slug, cardFor(locale, t.slug, t.name)]));

  return (
    <>
      <JsonLd
        data={collectionPageNode({
          path: localePath(locale, "/treatments"),
          name: k.title,
          description: k.description,
          items: categoryTreatments().map((t) => ({
            name: cards?.[t.slug].name ?? t.name,
            path: cards?.[t.slug].href ?? treatmentHref(t),
            type: "MedicalProcedure",
            image: t.image,
          })),
          locale,
        })}
      />
      <Container className="py-10 sm:py-12">
        <PageHeader
          home={en ? undefined : { label: concernUi[locale].home, href: localePath(locale, "/") }}
          crumbs={[{ label: k.crumb }]}
          eyebrow={k.eyebrow}
          title={k.h1}
          description={k.intro}
        />

        <div className="mt-12">
          <TreatmentsExplorer labels={en ? undefined : k.explorer} cards={cards} />
        </div>

        <p className="mt-8 text-xs text-ink-500">{k.estimateNote}</p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-tint px-6 py-5 sm:px-8">
          <p className="max-w-xl text-sm leading-relaxed text-ink-700 sm:text-base">{k.helpBody}</p>
          <WhatsAppButton label={k.helpCta} {...(en ? {} : { href: waLink(chrome[locale].wa.generic) })} />
        </div>
      </Container>

      <ClosingCta locale={locale} />
    </>
  );
}
