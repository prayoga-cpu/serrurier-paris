import Analytics from "@/components/Analytics";
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
    <html
      lang={HTML_LANG[lang]}
      className={`${fontVariables} h-full antialiased`}
    >
      {/*
       * suppressHydrationWarning: browser extensions (Grammarly, password
       * managers) add attributes to <body> before React hydrates, which React
       * reports as a mismatch. It only silences attribute drift on this one
       * element, not on children.
       */}
      <body
        className="flex min-h-full flex-col bg-paper text-ink"
        suppressHydrationWarning
      >
        <JsonLd data={localBusinessSchema()} />
        {children}
        <Analytics lang={lang} />
      </body>
    </html>
  );
}
