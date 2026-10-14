import { TreatmentsHub, treatmentsHubMeta } from "@/components/TreatmentsHub";

export const metadata = treatmentsHubMeta("en");

export default function TreatmentsHubPage() {
  return <TreatmentsHub locale="en" />;
}
