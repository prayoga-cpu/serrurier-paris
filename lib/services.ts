export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  keyword: string;
  navLabel: string;
  summary: string;
  problem: string;
  intervention: string;
  includes: string[];
  priceNote: string;
  faq: ServiceFaq[];
};

// Pricing is intentionally "sur devis" sitewide: no service in this build has
// a client-confirmed price. See CLAUDE.md §0 (B3) — don't publish a figure
// until it's confirmed, even for services not explicitly named in the blocker.
const STANDARD_PRICE_NOTE =
  "Sur devis. Le tarif est communiqué et validé avant toute intervention — jamais de surprise à l'arrivée.";

export const SERVICES: Service[] = [
  {
    slug: "ouverture-de-porte",
    title: "Ouverture de porte",
    keyword: "ouverture de porte paris",
    navLabel: "Ouverture de porte",
    summary: "Porte claquée ou fermée à clé, ouverture sans dégât dans la mesure du possible.",
    problem:
      "Porte claquée, clé perdue ou cassée dans la serrure : la porte est fermée et vous êtes dehors, souvent au pire moment.",
    intervention:
      "L'artisan évalue le type de serrure à distance puis sur place, et choisit la méthode la moins invasive : crochetage, ouverture par la tranche ou par le cylindre. Le perçage n'est utilisé qu'en dernier recours et toujours annoncé avant d'être réalisé.",
    includes: [
      "Diagnostic de la serrure avant intervention",
      "Ouverture par la méthode la moins destructive possible",
      "Tarif annoncé et validé avant toute action sur la porte",
      "Conseil sur le remplacement si la serrure est endommagée",
    ],
    priceNote: STANDARD_PRICE_NOTE,
    faq: [
      {
        question: "Combien de temps prend une ouverture de porte ?",
        answer:
          "La plupart des ouvertures sans dégât prennent entre 15 et 30 minutes selon le type de serrure. L'artisan vous donne une estimation avant de commencer.",
      },
      {
        question: "Faut-il forcément percer la serrure ?",
        answer:
          "Non. Le perçage est la dernière option envisagée, uniquement si l'ouverture sans dégât s'avère impossible, et il vous est annoncé avant d'être effectué.",
      },
      {
        question: "Que faire en attendant l'arrivée du serrurier ?",
        answer:
          "Restez à proximité de la porte, gardez votre pièce d'identité si elle est disponible, et évitez de manipuler davantage la serrure pour ne pas compliquer l'ouverture.",
      },
    ],
  },
  {
    slug: "changement-de-serrure",
    title: "Changement de serrure",
    keyword: "changement de serrure paris",
    navLabel: "Changement de serrure",
    summary: "Remplacement de serrure, cylindre ou barillet, en amélioration ou après incident.",
    problem:
      "Serrure usée, clé qui tourne dans le vide, cylindre grippé, ou besoin de sécuriser un logement après une perte de clés ou un déménagement.",
    intervention:
      "L'artisan évalue la serrure existante, propose un remplacement adapté à la porte (cylindre seul ou serrure complète) et pose le nouveau matériel en s'assurant du bon fonctionnement avant de partir.",
    includes: [
      "Diagnostic de la serrure et de la porte",
      "Recommandation de matériel adapté, du standard au haute sécurité",
      "Pose et réglage complet",
      "Remise des jeux de clés",
    ],
    priceNote: STANDARD_PRICE_NOTE,
    faq: [
      {
        question: "Cylindre ou serrure complète, quelle différence ?",
        answer:
          "Le cylindre (barillet) est la pièce dans laquelle la clé tourne ; il se remplace seul si le reste du mécanisme est sain. La serrure complète inclut le boîtier et le pêne, nécessaire si le mécanisme est endommagé.",
      },
      {
        question: "Puis-je faire changer ma serrure sans en changer le modèle ?",
        answer:
          "Oui, dans la majorité des cas un cylindre compatible peut être posé sans modifier la serrure existante, ce qui limite le coût et le temps d'intervention.",
      },
      {
        question: "Quand faut-il changer sa serrure après un déménagement ?",
        answer:
          "Idéalement avant votre emménagement ou dès que possible après, pour être certain que d'anciens jeux de clés en circulation ne donnent plus accès au logement.",
      },
    ],
  },
  {
    slug: "blindage-de-porte",
    title: "Blindage de porte",
    keyword: "blindage de porte paris",
    navLabel: "Blindage de porte",
    summary: "Renforcement de la porte d'entrée pour une résistance à l'effraction certifiée.",
    problem:
      "Une porte d'entrée standard résiste peu de temps à une tentative d'effraction. Le blindage renforce la porte, le cadre et les points d'ancrage pour retarder fortement toute intrusion.",
    intervention:
      "L'artisan évalue la porte existante et son cadre, propose une solution de blindage adaptée (bloc-porte complet ou habillage renforcé) et pose le système en respectant les normes de résistance en vigueur.",
    includes: [
      "Évaluation de la porte et du dormant existants",
      "Proposition adaptée : habillage blindé ou bloc-porte certifié",
      "Pose incluant renforts de gonds et de cadre",
      "Devis écrit détaillé avant tout engagement",
    ],
    priceNote: STANDARD_PRICE_NOTE,
    faq: [
      {
        question: "Quelle est la différence entre blindage et bloc-porte blindé ?",
        answer:
          "Le blindage habille une porte existante d'une tôle renforcée. Le bloc-porte blindé remplace l'ensemble porte et cadre par un système certifié, généralement plus résistant.",
      },
      {
        question: "Le blindage est-il éligible à une réduction d'assurance ?",
        answer:
          "Certains assureurs proposent des conditions avantageuses pour un logement équipé d'une porte certifiée A2P. Vérifiez avec votre assureur, le devis peut servir de justificatif.",
      },
    ],
  },
  {
    slug: "serrure-multipoints",
    title: "Serrure multipoints",
    keyword: "serrure multipoints paris",
    navLabel: "Serrure multipoints",
    summary: "Serrure à plusieurs points de fermeture pour une sécurité renforcée au quotidien.",
    problem:
      "Une serrure à un point de fermeture reste le maillon faible d'une porte d'entrée, même solide. La serrure multipoints répartit la résistance sur plusieurs points d'ancrage.",
    intervention:
      "L'artisan évalue la compatibilité de la porte, sélectionne une serrure 3 à 5 points adaptée et procède à la pose avec réglage précis de chaque point de fermeture.",
    includes: [
      "Évaluation de la compatibilité de la porte",
      "Choix du nombre de points selon le niveau de sécurité souhaité",
      "Pose et réglage de chaque point d'ancrage",
      "Test de fermeture complet avant fin d'intervention",
    ],
    priceNote: STANDARD_PRICE_NOTE,
    faq: [
      {
        question: "Une serrure multipoints s'installe-t-elle sur toutes les portes ?",
        answer:
          "Dans la plupart des cas oui, sur porte bois, PVC ou aluminium. L'artisan vérifie la compatibilité de votre porte avant de proposer un modèle.",
      },
      {
        question: "Combien de points de fermeture faut-il choisir ?",
        answer:
          "3 points conviennent à un usage standard, 5 points sont recommandés pour une porte d'entrée exposée ou un rez-de-chaussée.",
      },
    ],
  },
  {
    slug: "securisation-apres-effraction",
    title: "Sécurisation après effraction",
    keyword: "sécurisation après effraction",
    navLabel: "Sécurisation après effraction",
    summary: "Remise en sécurité rapide du logement après un cambriolage ou une tentative d'effraction.",
    problem:
      "Après une effraction, la porte ou la serrure est souvent endommagée et le logement reste vulnérable jusqu'à la remise en état.",
    intervention:
      "L'artisan intervient rapidement pour sécuriser l'ouverture endommagée, remplacer la serrure ou la porte si nécessaire, et peut fournir les éléments utiles pour votre déclaration d'assurance.",
    includes: [
      "Intervention rapide pour sécuriser le logement",
      "Remplacement de la serrure ou réparation de la porte endommagée",
      "Devis détaillé exploitable pour votre dossier d'assurance",
      "Conseils de renforcement pour éviter une récidive",
    ],
    priceNote: STANDARD_PRICE_NOTE,
    faq: [
      {
        question: "Que faire en premier après une effraction ?",
        answer:
          "Prévenez la police pour le dépôt de plainte, puis contactez un serrurier pour sécuriser le logement. Évitez de nettoyer la zone avant le passage des forces de l'ordre si possible.",
      },
      {
        question: "Le serrurier peut-il m'aider avec mon assurance ?",
        answer:
          "Il peut fournir un devis détaillé et une facture, documents généralement demandés par les assureurs pour un dossier de sinistre.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
