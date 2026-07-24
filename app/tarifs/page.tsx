import type { Metadata } from "next";
import Header from "@/components/Header";
import MobileCallBar from "@/components/MobileCallBar";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCTA from "@/components/ServiceCTA";
import { SERVICES } from "@/lib/services";
import { BRAND_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `Prix serrurier Paris — grille tarifaire transparente | ${BRAND_NAME}`,
  description:
    "La grille tarifaire de nos interventions à Paris : ouverture de porte, changement de serrure, blindage. Tarif toujours annoncé avant travaux.",
  alternates: {
    canonical: "/tarifs",
  },
};

export default function TarifsPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: "Accueil", path: "/" }, { name: "Tarifs", path: "/tarifs" }]} />
      <main className="flex-1 pb-20 lg:pb-0">
        <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-verified">
            prix serrurier paris
          </p>
          <h1 className="mt-3 font-headline text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Une grille tarifaire transparente
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            La serrurerie parisienne compte parmi les secteurs les plus signalés
            par la DGCCRF pour des anomalies de prix. Notre position est simple
            : le tarif annoncé au téléphone ou par écrit est celui que vous
            payez, sans majoration à l&apos;arrivée.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-ink text-paper">
                  <th scope="col" className="px-5 py-3.5 text-sm font-semibold">
                    Intervention
                  </th>
                  <th scope="col" className="px-5 py-3.5 text-sm font-semibold">
                    Tarif
                  </th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((service, index) => (
                  <tr
                    key={service.slug}
                    className={index % 2 === 0 ? "bg-white" : "bg-paper"}
                  >
                    <td className="border-t border-ink/10 px-5 py-4 font-medium text-ink">
                      {service.title}
                    </td>
                    <td className="border-t border-ink/10 px-5 py-4 text-ink/70">
                      Sur devis
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl border border-signal/30 bg-signal/10 p-5 text-sm leading-relaxed text-ink/80">
            <p>
              <strong>Grille chiffrée en cours de finalisation.</strong>{" "}
              Tant qu&apos;un tarif précis n&apos;est pas confirmé pour une intervention,
              nous préférons ne rien publier plutôt qu&apos;afficher un chiffre
              approximatif qui ne serait pas tenu — c&apos;est exactement le
              type de pratique que ce site combat. Chaque tarif exact vous est
              communiqué par téléphone avant tout déplacement, et validé par
              vous avant toute intervention.
            </p>
          </div>

          <div className="mt-10 space-y-4 text-ink/70">
            <p>
              <strong className="text-ink">Base de calcul.</strong>{" "}
              Le tarif dépend du type d&apos;intervention, de la complexité de la
              serrure, du déplacement et de l&apos;horaire (jour, nuit,
              week-end, jour férié).
            </p>
            <p>
              <strong className="text-ink">Devis écrit obligatoire.</strong>{" "}
              Conformément à la réglementation en vigueur depuis le
              24/01/2017, un devis écrit est systématiquement fourni pour
              toute intervention dépassant 150€.
            </p>
          </div>

          <div className="mt-12 border-t border-ink/10 pt-10">
            <h2 className="font-headline text-2xl font-semibold text-ink">
              Une question sur un tarif&nbsp;?
            </h2>
            <p className="mt-2 text-ink/70">
              Appelez-nous directement, ou décrivez votre besoin pour recevoir
              une estimation avant intervention.
            </p>
            <div className="mt-6">
              <ServiceCTA />
            </div>
          </div>
        </section>
      </main>
      <MobileCallBar />
    </>
  );
}
