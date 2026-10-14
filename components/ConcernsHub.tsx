import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ConcernsExplorer, type ConcernCardOverride } from "@/components/ConcernsExplorer";
import { ConcernPicker } from "@/components/ConcernPicker";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { collectionPageNode } from "@/lib/schema";
import { concerns } from "@/content/data/concerns";
import { concernsHub } from "@/content/i18n/concerns-hub";
import { concernUi } from "@/content/i18n/concern-ui";
import { localizedConcern } from "@/content/i18n/concern-locale";
import { fmt } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { isLive, lhref } from "@/lib/locale-pages";
import { localePath, type Locale } from "@/lib/i18n";

// The /concerns hub, rendered by app/(en)/concerns, app/zh/concerns and
// app/ms/concerns. Copy: content/i18n/concerns-hub.ts.

export function concernsHubMeta(locale: Locale) {
  const k = concernsHub[locale];
  return pageMeta({ title: k.title, description: k.description, path: "/concerns", locale });
}

/** A concern card in `locale`: the page's own translated name and summary once
 *  its translation is live; before that, the researched name and no summary
 *  (an English summary under a Chinese heading is the thing to avoid). */
function cardFor(locale: Locale, slug: string, enName: string): ConcernCardOverride {
  const path = `/concerns/${slug}`;
  const page = locale === "en" ? undefined : localizedConcern(locale, slug);
  const live = page && isLive(locale, path);
  const name = live ? page.c.name : term(locale, "concern", slug, enName);
  return {
    href: lhref(locale, path),
    name,
    summary: live ? page.c.summary : null,
    alt: fmt(concernsHub[locale].cardAlt, { name }),
  };
}

export function ConcernsHub({ locale }: { locale: Locale }) {
  const k = concernsHub[locale];
  const en = locale === "en";
  const cards = en
    ? undefined
    : Object.fromEntries(concerns.map((c) => [c.slug, cardFor(locale, c.slug, c.name)]));

  return (
    <>
      <JsonLd
        data={collectionPageNode({
          path: localePath(locale, "/concerns"),
          name: k.title,
          description: k.description,
          items: concerns.map((c) => ({
            name: cards?.[c.slug].name ?? c.name,
            path: cards?.[c.slug].href ?? `/concerns/${c.slug}`,
            type: "MedicalCondition",
            image: c.image,
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

        {/* The picker answers the H1 directly, so it leads — browsing the full
            set is the fallback for anyone who doesn't see their concern in it. */}
        <div className="mt-10">
          <ConcernPicker
            copy={
              k.picker && cards
                ? { ...k.picker, names: Object.fromEntries(Object.entries(cards).map(([s, c]) => [s, c.name])) }
                : undefined
            }
          />
        </div>

        <div className="mt-16">
          <ConcernsExplorer labels={en ? undefined : k.explorer} cards={cards} />
        </div>

        <section className="mx-auto mt-16 max-w-2xl">
          <h2 className="font-serif text-2xl font-semibold text-espresso sm:text-3xl">{k.approachHeading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">{k.approachBody}</p>
        </section>
      </Container>

      <ClosingCta locale={locale} />
    </>
  );
}
