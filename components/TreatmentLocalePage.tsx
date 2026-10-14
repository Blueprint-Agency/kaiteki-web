import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { TreatmentView } from "@/components/TreatmentView";
import { localizedTreatment, translatedTreatmentSlugs } from "@/content/i18n/treatment-locale";
import { treatmentsHub } from "@/content/i18n/treatments-hub";
import { medicalWebPageNode } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { isLive, lhref, localeReviewer } from "@/lib/locale-pages";
import type { NonDefaultLocale } from "@/lib/i18n";

// The shared body of app/zh/treatments/[category] and app/ms/treatments/[category].
// Mirrors app/(en)/treatments/[category]/page.tsx with the locale overlay as the
// record. Same gate as ConcernLocalePage.

const pathOf = (slug: string) => `/treatments/${slug}`;

/** Same contract as concernLocaleParams: every translated slug, live or not
 *  (unsigned ones prerender as a 404), and never an empty list. */
export function treatmentLocaleParams(locale: NonDefaultLocale) {
  const slugs = translatedTreatmentSlugs(locale);
  return (slugs.length ? slugs : ["_none"]).map((category) => ({ category }));
}

export function treatmentLocaleMeta(locale: NonDefaultLocale, slug: string): Metadata {
  const page = localizedTreatment(locale, slug);
  if (!page || !isLive(locale, pathOf(slug))) return {};
  const { t } = page;
  return pageMeta({
    title: t.seoTitle ?? t.name,
    description: t.seoDescription ?? t.summary,
    path: pathOf(slug),
    image: t.image,
    ogType: "article",
    locale,
  });
}

export async function TreatmentLocalePage({ locale, slug }: { locale: NonDefaultLocale; slug: string }) {
  const page = localizedTreatment(locale, slug);
  if (!page || !isLive(locale, pathOf(slug))) return null;
  const { t, en } = page;
  const review = localeReviewer(locale, pathOf(slug));
  const trail = [{ label: treatmentsHub[locale].crumb, href: lhref(locale, "/treatments") }, { label: t.name }];

  return (
    <>
      <JsonLd
        data={medicalWebPageNode({
          path: pathOf(slug),
          name: t.seoTitle ?? t.name,
          description: t.seoDescription ?? t.summary,
          about: { type: "MedicalProcedure", name: t.name },
          lastReviewed: review?.date,
          image: t.image,
          reviewer: review
            ? { name: review.doctor.fullName, slug: review.doctor.slug, credentials: review.doctor.credentials }
            : undefined,
          locale,
        })}
      />
      <TreatmentView t={t} trail={trail} locale={locale} source={en} />
    </>
  );
}
