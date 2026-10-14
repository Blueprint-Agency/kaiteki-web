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

export type TechCardProps = {
  name?: string;
  summary?: string | null;
  typeLabel?: string;
  learnMore?: string;
  href?: string;
};

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
  };
}
