import type { Metadata } from "next";
import ServiceView from "@/components/pages/ServiceView";
import { serviceMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return serviceMetadata("en", slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceView lang="en" slug={slug} />;
}
