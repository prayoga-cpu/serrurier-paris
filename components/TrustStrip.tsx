const FEATURES = [
  {
    title: "Intervention rapide",
    description: "Un artisan se déplace dès votre appel, disponible 7j/7.",
  },
  {
    title: "Prix annoncé avant travaux",
    description: "Le tarif est communiqué et validé avant toute intervention.",
  },
  {
    title: "Artisan, pas un centre d'appel",
    description: "Vous parlez directement à la personne qui intervient chez vous.",
  },
  {
    title: "Devis écrit systématique",
    description: "Au-delà de 150€, un devis écrit est fourni, comme l'exige la loi.",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.title}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-verified/10 text-verified">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-headline text-base font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
