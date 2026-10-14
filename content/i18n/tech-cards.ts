// TechnologyCard props for a locale page. English pages pass nothing (the card's
// own English defaults). On a zh/ms page the card shows the device's translated
// name and summary once that device page is live in the locale, and until then
// its brand name with no summary (English device copy is not shown under a
// translated heading). Shared by the concern, treatment and device templates and
// the /technology hub, so one rule decides what every device card says.

import { localizedTechnology } from "@/content/i18n/technology-locale";
import { technologyUi } from "@/content/i18n/technology-ui";
import { concernUi } from "@/content/i18n/concern-ui";
import { isLive, lhref } from "@/lib/locale-pages";
import type { Locale } from "@/lib/i18n";
import type { Technology } from "@/lib/types";
import { treatmentsOfTechnology } from "@/content/data/relations";
import { localizedTreatment } from "@/content/i18n/treatment-locale";
import { term } from "@/content/i18n/terms";

export type TechCardProps = {
  name?: string;
  summary?: string | null;
  typeLabel?: string;
  learnMore?: string;
  href?: string;
  usedIn?: { label: string; sep: string; end: string; links: { slug: string; href: string; name: string }[] };
};

const USED_IN = {
  zh: { label: "用于：", sep: "、", end: "。" },
  ms: { label: "Digunakan dalam ", sep: ", ", end: "." },
} as const;

export function techCardProps(locale: Locale, x: Technology): TechCardProps {
  if (locale === "en") return {};
  const path = `/technology/${x.slug}`;
  const page = localizedTechnology(locale, x.slug);
  const live = page && isLive(locale, path);
  return {
    name: live ? page.x.name : x.name,
    summary: live ? page.x.summary : null,
    typeLabel: technologyUi[locale].type[x.type],
    learnMore: concernUi[locale].learnMore,
    href: lhref(locale, path),
    // The hub card lists the treatments the device powers: names and links in
    // this locale (a live translation's own name, else the researched one).
    usedIn: {
      ...USED_IN[locale],
      links: treatmentsOfTechnology(x.slug).map((t) => {
        const tp = `/treatments/${t.slug}`;
        const tl = localizedTreatment(locale, t.slug);
        const name = tl && isLive(locale, tp) ? tl.t.name : term(locale, "treatment", t.slug, t.name);
        return { slug: t.slug, href: lhref(locale, tp), name };
      }),
    },
  };
}
