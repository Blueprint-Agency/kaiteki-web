import { notFound } from "next/navigation";
import { ProductsHub, productsHubMeta } from "@/components/ProductsHub";
import { isLive } from "@/lib/locale-pages";

export const metadata = productsHubMeta("zh");

// No URL until signed (content/i18n/pages.ts).
export default function ProductsHubPage() {
  if (!isLive("zh", "/products")) notFound();
  return <ProductsHub locale="zh" />;
}
