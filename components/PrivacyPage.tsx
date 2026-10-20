import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PDPA_NOTICE_HTML } from "@/app/(en)/privacy/notice";
import { staticPages } from "@/content/i18n/static-pages";
import { concernUi } from "@/content/i18n/concern-ui";
import { localePath, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

// /privacy, rendered by app/(en)/privacy, app/zh/privacy and app/ms/privacy.
// The PDPA notice is a legal text the clinic issued in English and Bahasa
// Malaysia, and it is never re-translated here: the Malay page shows the
// clinic's own Malay text first, the Chinese page shows both official texts
// under a short note in Chinese. English prevails, as the notice itself says.

const BM = '<h3 class="lang">BAHASA MALAYSIA</h3>';
const EN = '<h3 class="lang">ENGLISH</h3>';

function noticeFor(locale: Locale) {
  if (locale !== "ms") return PDPA_NOTICE_HTML;
  const [head, rest] = [PDPA_NOTICE_HTML.slice(0, PDPA_NOTICE_HTML.indexOf(EN)), PDPA_NOTICE_HTML.slice(PDPA_NOTICE_HTML.indexOf(EN))];
  const at = rest.indexOf(BM);
  return head + rest.slice(at) + rest.slice(0, at);
}

export function privacyMeta(locale: Locale) {
  const k = staticPages[locale].privacy;
  return pageMeta({ title: k.title, description: k.description, path: "/privacy", noindex: true, locale });
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const k = staticPages[locale].privacy;
  return (
    <Container className="py-10 sm:py-12">
      <PageHeader
        home={locale === "en" ? undefined : { label: concernUi[locale].home, href: localePath(locale, "/") }}
        crumbs={[{ label: k.crumb }]}
        eyebrow={k.eyebrow}
        title={k.h1}
      />
      {k.officialNote && <p className="mt-6 max-w-3xl leading-relaxed text-ink-700">{k.officialNote}</p>}
      {/* PDPA notice copied verbatim from the legacy site — see app/(en)/privacy/notice.ts. */}
      <div
        className="prose mt-8 max-w-3xl text-ink-700 [&_h3]:mt-10 [&_h3]:font-semibold [&_h3]:text-espresso [&_h3.lang]:mt-12 [&_h3.lang]:text-xs [&_h3.lang]:uppercase [&_h3.lang]:tracking-[0.14em] [&_h3.lang]:text-accent [&_p]:mt-4 [&_p]:leading-relaxed [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: noticeFor(locale) }}
      />
    </Container>
  );
}
