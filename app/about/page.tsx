import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = { title: "About", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <Placeholder
      title="About Kaiteki"
      crumbLabel="About"
      description="Our story, our clinics and the doctors behind Kaiteki — an MOH-licensed skin & aesthetic clinic with 9 branches across Malaysia."
    />
  );
}
