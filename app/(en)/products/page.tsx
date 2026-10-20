import { ProductsHub, productsHubMeta } from "@/components/ProductsHub";

export const metadata = productsHubMeta("en");

export default function ProductsHubPage() {
  return <ProductsHub locale="en" />;
}
