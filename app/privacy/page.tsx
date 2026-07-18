import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PDPA_NOTICE_HTML } from "./notice";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy | Kaiteki",
  description:
    "How Kaiteki Skin Aesthetic Clinic collects, uses, stores and protects your personal data, in line with Malaysia's Personal Data Protection Act (PDPA) 2010.",
  path: "/privacy",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <Container className="py-10 sm:py-12">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <h1 className="mt-8 text-3xl font-bold text-espresso sm:text-4xl">Privacy Policy</h1>
      {/* PDPA notice copied verbatim from the legacy site — see ./notice.ts. */}
      <div
        className="prose mt-8 max-w-3xl text-ink-700 [&_h3]:mt-10 [&_h3]:font-semibold [&_h3]:text-espresso [&_h3.lang]:mt-12 [&_h3.lang]:text-xs [&_h3.lang]:uppercase [&_h3.lang]:tracking-[0.14em] [&_h3.lang]:text-accent [&_p]:mt-4 [&_p]:leading-relaxed [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: PDPA_NOTICE_HTML }}
      />
    </Container>
  );
}
