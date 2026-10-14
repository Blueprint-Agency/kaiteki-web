import { notFound } from "next/navigation";
import { TechnologyHub, technologyHubMeta } from "@/components/TechnologyHub";
import { isLive } from "@/lib/locale-pages";

export const metadata = technologyHubMeta("zh");

// No URL until signed (content/i18n/pages.ts).
export default function TechnologyHubPage() {
  if (!isLive("zh", "/technology")) notFound();
  return <TechnologyHub locale="zh" />;
}
