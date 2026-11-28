import { notFound } from "next/navigation";
import { ProductDetail, productDetailMeta, productDetailParams } from "@/components/ProductDetail";

// /zh/products/<slug>: a product detail page in this language. Resolves only
// for a translation whose ledger entry is live (content/i18n/pages.ts).
export const dynamicParams = false;
export const generateStaticParams = () => productDetailParams();

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  return productDetailMeta("zh", (await params).slug);
}

export default async function Page({ params }: Props) {
  return ProductDetail({ locale: "zh", slug: (await params).slug }) ?? notFound();
}
