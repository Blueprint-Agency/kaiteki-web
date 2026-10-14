import { notFound } from "next/navigation";
import { TreatmentsHub, treatmentsHubMeta } from "@/components/TreatmentsHub";
import { isLive } from "@/lib/locale-pages";

export const metadata = treatmentsHubMeta("zh");

// No URL until signed (content/i18n/pages.ts).
export default function TreatmentsHubPage() {
  if (!isLive("zh", "/treatments")) notFound();
  return <TreatmentsHub locale="zh" />;
}
