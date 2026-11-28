import { notFound } from "next/navigation";
import { ProductDetail, productDetailMeta, productDetailParams } from "@/components/ProductDetail";

// /products/<slug>: a product detail page. Only products that carry rich content
// (`page` in content/data/products.ts) are listed; every other slug is a 404.
export const dynamicParams = false;
export const generateStaticParams = () => productDetailParams();

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  return productDetailMeta("en", (await params).slug);
}

export default async function Page({ params }: Props) {
  return ProductDetail({ locale: "en", slug: (await params).slug }) ?? notFound();
}
