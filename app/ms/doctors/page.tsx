import { notFound } from "next/navigation";
import { DoctorsHub, doctorsHubMeta } from "@/components/DoctorPages";
import { isLive } from "@/lib/locale-pages";

export const metadata = doctorsHubMeta("ms");

// No URL until signed (content/i18n/pages.ts).
export default function DoctorsHubPage() {
  if (!isLive("ms", "/doctors")) notFound();
  return <DoctorsHub locale="ms" />;
}
