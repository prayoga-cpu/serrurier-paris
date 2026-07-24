import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export default function Breadcrumb({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink/60">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-1.5">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span className="text-ink">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-ink">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
