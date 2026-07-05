import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = { title: "Promotions", alternates: { canonical: "/promotions" } };

export default function PromotionsPage() {
  return (
    <Placeholder
      title="Promotions"
      crumbLabel="Promotions"
      description="Current, compliant offers across our branches. Any promotion shown will carry its full terms and its advertising approval reference."
    />
  );
}
