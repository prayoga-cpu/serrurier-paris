import { PHONE_DISPLAY, PHONE_HREF, REQUIRED_SERVICES } from "@/lib/config";

const TRUST_BADGES = [
  "Certifié A2P",
  "Prix transparent affiché",
  "Artisan indépendant, pas un centre d'appel",
  "Devis écrit avant travaux",
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-14 pb-20 lg:px-8 lg:pt-20">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
        {/* Left: message + primary CTA */}
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-verified">
            Serrurier de confiance à Paris
          </p>
          <h1 className="font-headline text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Le prix qu&apos;on vous annonce est le prix que vous payez.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Ouverture de porte, changement de serrure, blindage. Un artisan
            indépendant se déplace, annonce le tarif avant d&apos;intervenir, et
            s&apos;y tient. Pas de centre d&apos;appel, pas de mauvaise surprise.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={PHONE_HREF}
              data-event="call_click"
              className="flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Appeler maintenant &mdash; {PHONE_DISPLAY}
            </a>
            <a
              href="/tarifs"
              data-event="tarifs_view"
              className="flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink/40"
            >
              Voir les tarifs
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {TRUST_BADGES.map((badge) => (
              <li key={badge} className="flex items-start gap-2 text-sm text-ink/70">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-verified"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {badge}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: quote request card */}
        <div className="rounded-3xl bg-ink p-8 text-paper shadow-xl sm:p-10">
          <h2 className="font-headline text-2xl font-semibold sm:text-3xl">
            Besoin d&apos;un serrurier maintenant&nbsp;?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-paper/70">
            Décrivez votre besoin, on vous rappelle avec un prix clair, avant
            toute intervention.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom"
                className="w-full rounded-xl border border-paper/20 bg-paper/10 px-4 py-3 text-paper placeholder:text-paper/50 outline-none focus:border-paper/50"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                Numéro de téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="06 XX XX XX XX"
                className="w-full rounded-xl border border-paper/20 bg-paper/10 px-4 py-3 text-paper placeholder:text-paper/50 outline-none focus:border-paper/50"
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
                Service souhaité
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                className="w-full appearance-none rounded-xl border border-paper/20 bg-paper/10 px-4 py-3 text-paper outline-none focus:border-paper/50"
              >
                <option value="" disabled className="text-ink">
                  Sélectionnez un service
                </option>
                {REQUIRED_SERVICES.map((service) => (
                  <option key={service} value={service} className="text-ink">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              data-event="form_submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-paper px-6 py-3.5 text-base font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Demander un devis
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
