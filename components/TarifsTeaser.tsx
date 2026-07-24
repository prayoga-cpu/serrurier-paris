import Link from "next/link";

export default function TarifsTeaser() {
  return (
    <section className="border-t border-ink/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 text-paper lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <h2 className="font-headline text-2xl font-semibold sm:text-3xl">
              Le tarif que vous voyez est le tarif que vous payez
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">
              Aucun montant caché, aucune majoration surprise à l&apos;arrivée. La
              grille tarifaire complète est publique, avec la base de calcul du
              déplacement et de la main d&apos;œuvre.
            </p>
          </div>
          <Link
            href="/tarifs"
            data-event="tarifs_view"
            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-paper px-6 py-3.5 text-base font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Voir la grille tarifaire
          </Link>
        </div>
      </div>
    </section>
  );
}
