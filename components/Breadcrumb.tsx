import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export default function Breadcrumb({
  lang,
  items,
}: {
  lang: Locale;
  /** `path` must already be locale-resolved — it goes straight into the schema. */
  items: { name: string; path: string }[];
}) {
  const dict = getDictionary(lang);

  return (
    <nav
      aria-label={dict.common.breadcrumb}
      className="mx-auto max-w-7xl px-6 pt-6 lg:px-8"
    >
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-1.5">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span className="font-semibold text-ink">{item.name}</span>
            ) : (
              <Link
                href={item.path}
                className="transition-colors hover:text-ink"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
