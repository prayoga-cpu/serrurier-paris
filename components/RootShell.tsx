import { fontVariables } from "@/lib/fonts";
import { HTML_LANG, type Locale } from "@/lib/i18n";
import { JsonLd, localBusinessSchema } from "@/lib/schema";

/**
 * The <html>/<body> shell. There is one root layout per locale (app/(fr) and
 * app/(en)) purely so the lang attribute is correct — everything else about the
 * document is identical, so it lives here rather than being duplicated.
 */
export default function RootShell({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={HTML_LANG[lang]} className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <JsonLd data={localBusinessSchema()} />
        {children}
      </body>
    </html>
  );
}
