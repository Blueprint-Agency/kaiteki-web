import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <Placeholder
      title="Terms of Use"
      crumbLabel="Terms"
      description="The terms that apply to your use of this website. Being finalised as part of the rebuild."
    />
  );
}
