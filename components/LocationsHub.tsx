import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { LocationsExplorer, type BranchCardCopy } from "@/components/LocationsExplorer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { collectionPageNode } from "@/lib/schema";
import { branches } from "@/content/data/branches";
import { site } from "@/lib/site";
import { locationsCopy, place } from "@/content/i18n/locations";
import { chrome, fmt } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { concernUi } from "@/content/i18n/concern-ui";
import { lhref } from "@/lib/locale-pages";
import { localePath, type Locale } from "@/lib/i18n";
import { waLink } from "@/lib/wa";

// The /locations hub, rendered by app/(en)/locations, app/zh/locations and
// app/ms/locations. Copy: content/i18n/locations.ts.

export function locationsHubMeta(locale: Locale) {
  const k = locationsCopy[locale].hub;
  return pageMeta({ title: k.title, description: k.description, path: "/locations", locale });
}

/** Card copy per branch in `locale`; undefined in English, where the card
 *  derives everything from the branch record as it always has. */
export function branchCardsFor(locale: Locale): Record<string, BranchCardCopy> | undefined {
  if (locale === "en") return undefined;
  const k = locationsCopy[locale].hub;
  return Object.fromEntries(
    branches.map((b) => {
      const name = term(locale, "branch", b.slug, b.name);
      const city = place(locale, b.city);
      const state = place(locale, b.state);
      const where = b.state.includes(b.city) ? city : `${city}${locale === "zh" ? "，" : ", "}${state}`;
      return [b.slug, { href: lhref(locale, `/locations/${b.slug}`), name, place: where, alt: fmt(k.cardAlt, { name, place: where }) }];
    }),
  );
}

export function LocationsHub({ locale }: { locale: Locale }) {
  const k = locationsCopy[locale].hub;
  const en = locale === "en";
  const cards = branchCardsFor(locale);

  return (
    <Container className="py-10 sm:py-12">
      <JsonLd
        data={collectionPageNode({
          path: localePath(locale, "/locations"),
          name: k.title,
          description: k.description,
          locale,
          // Reference each branch page's MedicalClinic node by @id rather than
          // restating NAP here — one authoritative node per branch, no conflicts.
          items: branches.map((b) => ({
            name: `Kaiteki ${cards?.[b.slug].name ?? b.name}`,
            path: cards?.[b.slug].href ?? `/locations/${b.slug}`,
            refId: `${site.url}/locations/${b.slug}#clinic`,
          })),
        })}
      />
      <PageHeader
        home={en ? undefined : { label: concernUi[locale].home, href: localePath(locale, "/") }}
        crumbs={[{ label: k.crumb }]}
        eyebrow={k.eyebrow}
        title={k.h1}
        description={k.headerDescription}
      />
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">{k.lede}</p>

      <div className="mt-12">
        <LocationsExplorer
          {...(en
            ? {}
            : {
                cards,
                copy: {
                  all: k.all,
                  countOne: k.countOne,
                  countMany: k.countMany,
                  mapTitle: k.mapTitle,
                  regions: Object.fromEntries(
                    branches.map((b) => [b.region, term(locale, "region", b.region, b.region)]),
                  ),
                },
              })}
        />
      </div>

      <section className="mt-16 flex flex-col items-center gap-5 rounded-2xl border border-hairline bg-surface px-6 py-14 text-center">
        <h2 className="text-balance text-2xl font-bold leading-tight text-espresso sm:text-3xl">
          {k.notSureHeading}
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-ink-700">{k.notSureBody}</p>
        {en ? (
          <WhatsAppButton size="lg" />
        ) : (
          <WhatsAppButton size="lg" href={waLink(chrome[locale].wa.generic)} label={chrome[locale].cta.book} />
        )}
      </section>
    </Container>
  );
}
