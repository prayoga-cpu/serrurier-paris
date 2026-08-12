import type { Metadata } from "next";
import GuideView from "@/components/pages/GuideView";
import { guideMetadata } from "@/lib/metadata";
import { GUIDES } from "@/lib/guides";

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return guideMetadata("fr", slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <GuideView lang="fr" slug={slug} />;
}
