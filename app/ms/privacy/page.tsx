import { notFound } from "next/navigation";
import { PrivacyPage, privacyMeta } from "@/components/PrivacyPage";
import { isLive } from "@/lib/locale-pages";

export const metadata = privacyMeta("ms");

// No URL until signed (content/i18n/pages.ts).
export default function Page() {
  if (!isLive("ms", "/privacy")) notFound();
  return <PrivacyPage locale="ms" />;
}
