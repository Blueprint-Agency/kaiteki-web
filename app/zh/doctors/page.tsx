import { notFound } from "next/navigation";
import { DoctorsHub, doctorsHubMeta } from "@/components/DoctorPages";
import { isLive } from "@/lib/locale-pages";

export const metadata = doctorsHubMeta("zh");

// No URL until signed (content/i18n/pages.ts).
export default function DoctorsHubPage() {
  if (!isLive("zh", "/doctors")) notFound();
  return <DoctorsHub locale="zh" />;
}
