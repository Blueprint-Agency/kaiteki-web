import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = { title: "Contact", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return (
    <Placeholder
      title="Contact us"
      crumbLabel="Contact"
      description="All-branch contact details and WhatsApp. Conversations happen on WhatsApp — there is no form that stores your data."
    />
  );
}
