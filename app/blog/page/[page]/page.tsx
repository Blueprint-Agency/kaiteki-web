import type { Metadata } from "next";
import { BlogHubPage, hubMetadata, hubPage } from "@/components/blog/BlogPages";
import { hubPosts, laterPages } from "@/content/data/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return laterPages(hubPosts().length);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  return hubMetadata(hubPage((await params).page));
}

export default async function BlogHubPaged({ params }: { params: Promise<{ page: string }> }) {
  return <BlogHubPage page={hubPage((await params).page)} />;
}
