import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { TechnologyView } from "@/components/TechnologyView";
import { localizedTechnology, translatedTechnologySlugs } from "@/content/i18n/technology-locale";
import { technologyHub } from "@/content/i18n/technology-hub";
import { medicalWebPageNode, techEntityType } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { isLive, lhref, localeReviewer } from "@/lib/locale-pages";
import type { NonDefaultLocale } from "@/lib/i18n";

// The shared body of app/zh/technology/[slug] and app/ms/technology/[slug].
// Mirrors app/(en)/technology/[slug]/page.tsx with the locale overlay as the
// record. Same gate and param contract as ConcernLocalePage.

const pathOf = (slug: string) => `/technology/${slug}`;

/** Every translated slug, live or not (unsigned ones prerender as a 404), and
 *  never an empty list. */
export function technologyLocaleParams(locale: NonDefaultLocale) {
  const slugs = translatedTechnologySlugs(locale);
  return (slugs.length ? slugs : ["_none"]).map((slug) => ({ slug }));
}

export function technologyLocaleMeta(locale: NonDefaultLocale, slug: string): Metadata {
  const page = localizedTechnology(locale, slug);
  if (!page || !isLive(locale, pathOf(slug))) return {};
  const { x } = page;
  return pageMeta({
    title: x.seoTitle ?? x.name,
    description: x.seoDescription ?? x.summary,
    path: pathOf(slug),
    image: x.image,
    ogType: "article",
    locale,
  });
}

export async function TechnologyLocalePage({ locale, slug }: { locale: NonDefaultLocale; slug: string }) {
  const page = localizedTechnology(locale, slug);
  if (!page || !isLive(locale, pathOf(slug))) return null;
  const { x, en } = page;
  const review = localeReviewer(locale, pathOf(slug));

  return (
    <>
      <JsonLd
        data={medicalWebPageNode({
          path: pathOf(slug),
          name: x.seoTitle ?? x.name,
          description: x.seoDescription ?? x.summary,
          about: { type: techEntityType(slug), name: x.name },
          lastReviewed: review?.date,
          image: x.image,
          reviewer: review
            ? { name: review.doctor.fullName, slug: review.doctor.slug, credentials: review.doctor.credentials }
            : undefined,
          locale,
        })}
      />
      <TechnologyView
        x={x}
        trail={[{ label: technologyHub[locale].crumb, href: lhref(locale, "/technology") }, { label: x.name }]}
        locale={locale}
        source={en}
      />
    </>
  );
}
