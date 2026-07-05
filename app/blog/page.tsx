import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = { title: "Blog", alternates: { canonical: "/blog" } };

export default function BlogPage() {
  return (
    <Placeholder
      title="Kaiteki Journal"
      crumbLabel="Blog"
      description="Plain-language, doctor-reviewed guides to skin, ageing and body concerns. Migrated onto the main site as part of the rebuild."
    />
  );
}
