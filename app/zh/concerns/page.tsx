import { notFound } from "next/navigation";
import { ConcernsHub, concernsHubMeta } from "@/components/ConcernsHub";
import { isLive } from "@/lib/locale-pages";

export const metadata = concernsHubMeta("zh");

// No URL until signed (content/i18n/pages.ts).
export default function ConcernsHubPage() {
  if (!isLive("zh", "/concerns")) notFound();
  return <ConcernsHub locale="zh" />;
}
