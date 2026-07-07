import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";
import { WhatsAppButton } from "./WhatsAppCTA";

/**
 * Honest interim page for secondary routes not yet built in this sample, so no
 * header/footer link 404s. Clearly framed as in-progress, not fake content.
 */
export function Placeholder({
  title,
  crumbLabel,
  description,
}: {
  title: string;
  crumbLabel: string;
  description: string;
}) {
  return (
    <Container className="py-12 sm:py-16">
      <Breadcrumbs items={[{ label: crumbLabel }]} />
      <div className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-espresso sm:text-4xl">{title}</h1>
        <p className="prose mt-4 text-lg leading-relaxed text-ink-700">{description}</p>
        <p className="mt-6 text-sm text-ink-500">
          This section is part of the ongoing rebuild and will be published soon. In the
          meantime, our team is one message away.
        </p>
        <div className="mt-8">
          <WhatsAppButton size="lg" />
        </div>
      </div>
    </Container>
  );
}
