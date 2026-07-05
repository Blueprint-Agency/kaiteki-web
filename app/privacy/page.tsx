import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Placeholder
      title="Privacy Policy (PDPA)"
      crumbLabel="Privacy Policy"
      description="How Kaiteki handles personal data under Malaysia's Personal Data Protection Act, including our data-protection contact and your rights. The full policy is being finalised."
    />
  );
}
