import { notFound } from "next/navigation";
import { ProductsHub, productsHubMeta } from "@/components/ProductsHub";
import { isLive } from "@/lib/locale-pages";

export const metadata = productsHubMeta("ms");

// No URL until signed (content/i18n/pages.ts).
export default function ProductsHubPage() {
  if (!isLive("ms", "/products")) notFound();
  return <ProductsHub locale="ms" />;
}
