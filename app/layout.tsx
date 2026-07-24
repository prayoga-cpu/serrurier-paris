import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { BRAND_NAME, DOMAIN } from "@/lib/config";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headlineFont = Fraunces({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `${BRAND_NAME} — Serrurier à Paris, prix transparent`,
  description:
    "Ouverture de porte, changement de serrure et blindage à Paris. Artisan indépendant, prix annoncé avant intervention, jamais de mauvaise surprise.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bodyFont.variable} ${headlineFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <JsonLd data={localBusinessSchema()} />
        {children}
      </body>
    </html>
  );
}
