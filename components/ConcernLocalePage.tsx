import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ConcernView } from "@/components/ConcernView";
import { localizedConcern, translatedConcernSlugs } from "@/content/i18n/concern-locale";
import { treatmentsOfConcern } from "@/content/data/relations";
import { term } from "@/content/i18n/terms";
import { medicalWebPageNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { isLive, localeReviewer } from "@/lib/locale-pages";
import type { NonDefaultLocale } from "@/lib/i18n";

// The shared body of app/zh/concerns/[slug] and app/ms/concerns/[slug]. Mirrors
// app/(en)/concerns/[slug]/page.tsx, with the locale overlay as the record.

const pathOf = (slug: string) => `/concerns/${slug}`;

/**
 * Every slug with a translation file, live or not: unsigned ones prerender as
 * a static 404 (the page returns notFound()), so signing a page changes what it
 * renders, not which routes exist. Never an empty list, which some Next setups
 * handle badly with dynamicParams = false (`next start` on this standalone
 * build answers 500; the real standalone server 404s either way, 2026-10-14).
 */
export function concernLocaleParams(locale: NonDefaultLocale) {
  const slugs = translatedConcernSlugs(locale);
  return (slugs.length ? slugs : ["_none"]).map((slug) => ({ slug }));
}

export function concernLocaleMeta(locale: NonDefaultLocale, slug: string): Metadata {
  const page = localizedConcern(locale, slug);
  if (!page || !isLive(locale, pathOf(slug))) return {};
  const { c } = page;
  return pageMeta({
    title: c.seoTitle ?? c.name,
    description: c.seoDescription ?? c.summary,
    path: pathOf(slug),
    image: c.image,
    ogType: "article",
    locale,
  });
}

export async function ConcernLocalePage({ locale, slug }: { locale: NonDefaultLocale; slug: string }) {
  const page = localizedConcern(locale, slug);
  if (!page || !isLive(locale, pathOf(slug))) return null;
  const { c, en } = page;
  const review = localeReviewer(locale, pathOf(slug));

  return (
    <>
      <JsonLd
        data={medicalWebPageNode({
          path: pathOf(slug),
          name: c.seoTitle ?? c.name,
          description: c.seoDescription ?? c.summary,
          about: {
            type: "MedicalCondition",
            name: c.name,
            possibleTreatment: treatmentsOfConcern(slug).map((t) => term(locale, "treatment", t.slug, t.name)),
          },
          lastReviewed: review?.date,
          dateModified: review?.date,
          image: c.image,
          reviewer: review
            ? {
                name: review.doctor.fullName,
                slug: review.doctor.slug,
                credentials: review.doctor.credentials,
              }
            : undefined,
          locale,
        })}
      />
      <ConcernView c={c} locale={locale} source={en} />
    </>
  );
}
