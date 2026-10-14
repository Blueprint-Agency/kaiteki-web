import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { TechnologyExplorer } from "@/components/TechnologyExplorer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { collectionPageNode, techEntityType } from "@/lib/schema";
import { technology } from "@/content/data/technology";
import { technologyHub } from "@/content/i18n/technology-hub";
import { technologyUi } from "@/content/i18n/technology-ui";
import { concernUi } from "@/content/i18n/concern-ui";
import { techCardProps } from "@/content/i18n/tech-cards";
import { chrome } from "@/content/i18n/chrome";
import { waLink } from "@/lib/wa";
import { localePath, type Locale } from "@/lib/i18n";

// The /technology hub, rendered by app/(en)/technology, app/zh/technology and
// app/ms/technology. Copy: content/i18n/technology-hub.ts.

export function technologyHubMeta(locale: Locale) {
  const k = technologyHub[locale];
  return pageMeta({ title: k.title, description: k.description, path: "/technology", locale });
}

export function TechnologyHub({ locale }: { locale: Locale }) {
  const k = technologyHub[locale];
  const en = locale === "en";
  const cards = en ? undefined : Object.fromEntries(technology.map((x) => [x.slug, techCardProps(locale, x)]));

  return (
    <Container className="py-10 sm:py-12">
      <JsonLd
        data={collectionPageNode({
          path: localePath(locale, "/technology"),
          name: k.title,
          description: k.description,
          items: technology.map((x) => ({
            name: cards?.[x.slug].name ?? x.name,
            path: cards?.[x.slug].href ?? `/technology/${x.slug}`,
            type: techEntityType(x.slug),
            image: x.image,
          })),
          locale,
        })}
      />
      <PageHeader
        home={en ? undefined : { label: concernUi[locale].home, href: localePath(locale, "/") }}
        crumbs={[{ label: k.crumb }]}
        eyebrow={k.eyebrow}
        title={k.h1}
        description={k.intro}
      />

      <div className="mt-10">
        <TechnologyExplorer ui={en ? undefined : technologyUi[locale]} cards={cards} />
      </div>

      <section className="mt-16 max-w-3xl border-t border-hairline pt-10">
        <h2 className="text-xl font-bold text-espresso sm:text-2xl">{k.whyHeading}</h2>
        <p className="mt-3 leading-relaxed text-ink-700">{k.whyBody}</p>
      </section>

      <section className="mt-12 max-w-3xl border-t border-hairline pt-10">
        <h2 className="text-xl font-bold text-espresso sm:text-2xl">{k.unsureHeading}</h2>
        <p className="mt-3 leading-relaxed text-ink-700">{k.unsureBody}</p>
        <div className="mt-5">
          {en ? <WhatsAppButton /> : <WhatsAppButton label={k.cta} href={waLink(chrome[locale].wa.generic)} />}
        </div>
      </section>
    </Container>
  );
}
