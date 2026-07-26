import type { Locale } from "@/lib/i18n";

export type ServiceFaq = { question: string; answer: string };

export type ServiceContent = {
  title: string;
  keyword: string;
  summary: string;
  problem: string;
  intervention: string;
  includes: string[];
  priceNote: string;
  faq: ServiceFaq[];
};

// The slug is shared across locales: it identifies the service, and keeping it
// stable gives every page a 1:1 counterpart for hreflang and makes the language
// switcher a pure prefix swap. See CLAUDE.md §2.
export type Service = {
  slug: string;
  content: Record<Locale, ServiceContent>;
};

/** A service flattened to one locale — what components actually render. */
export type LocalizedService = ServiceContent & { slug: string };

// Ouverture de porte, changement de serrure and blindage de porte carry
// client-confirmed starting prices (see lib/pricing.ts). Serrure multipoints
// and sécurisation après effraction don't have a confirmed figure yet, so they
// stay "sur devis" — see CLAUDE.md §0 (B3): don't publish a number until it's
// confirmed, even for services not explicitly named in the blocker.
const PRICE_NOTE_FR =
  "Sur devis. Le tarif est communiqué et validé avant toute intervention — jamais de surprise à l'arrivée.";
const PRICE_NOTE_EN =
  "On quotation. The price is given and agreed before any work begins — never a surprise on arrival.";

export const SERVICES: Service[] = [
  {
    slug: "ouverture-de-porte",
    content: {
      fr: {
        title: "Ouverture de porte",
        keyword: "ouverture de porte paris",
        summary:
          "Porte claquée ou fermée à clé, ouverture sans dégât dans la mesure du possible.",
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
        priceNote:
          "À partir de 90 € pour une porte claquée, 120 € pour une porte fermée à clé. Tarif exact confirmé par téléphone avant le déplacement, validé sur place avant toute intervention.",
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
      en: {
        title: "Door opening",
        keyword: "door opening paris",
        summary:
          "Slammed shut or locked, opened without damage wherever possible.",
        problem:
          "A door pulled shut behind you, a lost key, a key snapped in the lock: the door is closed, you're outside, and usually at the worst possible moment.",
        intervention:
          "The tradesperson assesses the lock type over the phone and then on site, and picks the least invasive method: picking, opening via the edge of the door, or through the cylinder. Drilling is a last resort only, and is always announced before it is carried out.",
        includes: [
          "The lock is assessed before any work starts",
          "Opened by the least destructive method available",
          "Price quoted and agreed before anything is done to the door",
          "Advice on replacement if the lock is damaged",
        ],
        priceNote:
          "From €90 for a slammed door, €120 for a locked door. Exact price confirmed by phone before travel, and agreed on site before any work begins.",
        faq: [
          {
            question: "How long does a door opening take?",
            answer:
              "Most damage-free openings take between 15 and 30 minutes depending on the type of lock. The tradesperson gives you an estimate before starting.",
          },
          {
            question: "Does the lock always have to be drilled?",
            answer:
              "No. Drilling is the last option considered, only if a damage-free opening proves impossible, and you are told before it is done.",
          },
          {
            question: "What should I do while waiting for the locksmith?",
            answer:
              "Stay near the door, keep your ID to hand if you have it, and avoid tampering with the lock any further so the opening isn't made harder.",
          },
        ],
      },
    },
  },
  {
    slug: "changement-de-serrure",
    content: {
      fr: {
        title: "Changement de serrure",
        keyword: "changement de serrure paris",
        summary:
          "Remplacement de serrure, cylindre ou barillet, en amélioration ou après incident.",
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
        priceNote:
          "À partir de 150 € pour une serrure standard, 250 € pour une serrure haute sécurité. Tarif exact confirmé par téléphone avant le déplacement, validé sur place avant toute intervention.",
        faq: [
          {
            question: "Cylindre ou serrure complète, quelle différence ?",
            answer:
              "Le cylindre (barillet) est la pièce dans laquelle la clé tourne ; il se remplace seul si le reste du mécanisme est sain. La serrure complète inclut le boîtier et le pêne, nécessaire si le mécanisme est endommagé.",
          },
          {
            question:
              "Puis-je faire changer ma serrure sans en changer le modèle ?",
            answer:
              "Oui, dans la majorité des cas un cylindre compatible peut être posé sans modifier la serrure existante, ce qui limite le coût et le temps d'intervention.",
          },
          {
            question:
              "Quand faut-il changer sa serrure après un déménagement ?",
            answer:
              "Idéalement avant votre emménagement ou dès que possible après, pour être certain que d'anciens jeux de clés en circulation ne donnent plus accès au logement.",
          },
        ],
      },
      en: {
        title: "Lock replacement",
        keyword: "lock replacement paris",
        summary:
          "Replacing a lock, cylinder or barrel — as an upgrade or after an incident.",
        problem:
          "A worn lock, a key that turns without catching, a seized cylinder, or the need to secure a home after lost keys or a move.",
        intervention:
          "The tradesperson assesses the existing lock, proposes a replacement suited to the door (cylinder alone or the complete lock) and fits the new hardware, checking it works properly before leaving.",
        includes: [
          "Assessment of the lock and the door",
          "Hardware recommendation, from standard to high-security",
          "Full fitting and adjustment",
          "Key sets handed over",
        ],
        priceNote:
          "From €150 for a standard lock, €250 for a high-security lock. Exact price confirmed by phone before travel, and agreed on site before any work begins.",
        faq: [
          {
            question: "Cylinder or complete lock — what's the difference?",
            answer:
              "The cylinder (barrel) is the part the key turns in; it can be replaced on its own if the rest of the mechanism is sound. A complete lock includes the case and the bolt, and is needed if the mechanism itself is damaged.",
          },
          {
            question: "Can my lock be changed without changing the model?",
            answer:
              "Yes. In most cases a compatible cylinder can be fitted without altering the existing lock, which keeps both the cost and the time on site down.",
          },
          {
            question: "When should I change the lock after moving in?",
            answer:
              "Ideally before you move in, or as soon as possible afterwards, so you can be certain that no old key sets still in circulation give access to the property.",
          },
        ],
      },
    },
  },
  {
    slug: "blindage-de-porte",
    content: {
      fr: {
        title: "Blindage de porte",
        keyword: "blindage de porte paris",
        summary:
          "Renforcement de la porte d'entrée pour une résistance à l'effraction certifiée.",
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
        priceNote:
          "À partir de 80 €. Le tarif final dépend de la porte et du niveau de blindage choisi — devis écrit détaillé fourni avant tout engagement.",
        faq: [
          {
            question:
              "Quelle est la différence entre blindage et bloc-porte blindé ?",
            answer:
              "Le blindage habille une porte existante d'une tôle renforcée. Le bloc-porte blindé remplace l'ensemble porte et cadre par un système certifié, généralement plus résistant.",
          },
          {
            question:
              "Le blindage est-il éligible à une réduction d'assurance ?",
            answer:
              "Certains assureurs proposent des conditions avantageuses pour un logement équipé d'une porte certifiée A2P. Vérifiez avec votre assureur, le devis peut servir de justificatif.",
          },
        ],
      },
      en: {
        title: "Door reinforcement",
        keyword: "door reinforcement paris",
        summary:
          "Reinforcing the front door for certified resistance to break-ins.",
        problem:
          "A standard front door holds out for very little time against a forced entry. Reinforcement strengthens the door, the frame and the anchor points to delay any intrusion substantially.",
        intervention:
          "The tradesperson assesses the existing door and its frame, proposes a suitable reinforcement solution (a complete armoured door set or a reinforced facing) and fits the system to the resistance standards in force.",
        includes: [
          "Assessment of the existing door and frame",
          "A suitable proposal: armoured facing or certified door set",
          "Fitting including hinge and frame reinforcement",
          "Detailed written quote before any commitment",
        ],
        priceNote:
          "From €80. The final price depends on the door and the level of reinforcement chosen — a detailed written quote is provided before any commitment.",
        faq: [
          {
            question:
              "What's the difference between reinforcement and an armoured door set?",
            answer:
              "Reinforcement clads an existing door with a strengthened steel sheet. An armoured door set replaces the door and frame together with a certified system, generally more resistant.",
          },
          {
            question: "Does reinforcement qualify for an insurance discount?",
            answer:
              "Some insurers offer better terms for a home fitted with an A2P-certified door. Check with your insurer — the quote can serve as supporting evidence.",
          },
        ],
      },
    },
  },
  {
    slug: "serrure-multipoints",
    content: {
      fr: {
        title: "Serrure multipoints",
        keyword: "serrure multipoints paris",
        summary:
          "Serrure à plusieurs points de fermeture pour une sécurité renforcée au quotidien.",
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
        priceNote: PRICE_NOTE_FR,
        faq: [
          {
            question:
              "Une serrure multipoints s'installe-t-elle sur toutes les portes ?",
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
      en: {
        title: "Multi-point lock",
        keyword: "multi-point lock paris",
        summary:
          "A lock with several locking points for stronger everyday security.",
        problem:
          "A single-point lock remains the weak link of a front door, however solid the door itself. A multi-point lock spreads the resistance across several anchor points.",
        intervention:
          "The tradesperson checks the door is compatible, selects a suitable 3- to 5-point lock, and fits it with each locking point precisely adjusted.",
        includes: [
          "Check that the door is compatible",
          "Choice of how many points, based on the security level you want",
          "Fitting and adjustment of every anchor point",
          "Full closing test before the job is signed off",
        ],
        priceNote: PRICE_NOTE_EN,
        faq: [
          {
            question: "Can a multi-point lock be fitted to any door?",
            answer:
              "In most cases yes — on wooden, uPVC or aluminium doors. The tradesperson checks your door is compatible before proposing a model.",
          },
          {
            question: "How many locking points should I choose?",
            answer:
              "3 points suit standard use; 5 points are recommended for an exposed front door or a ground-floor flat.",
          },
        ],
      },
    },
  },
  {
    slug: "securisation-apres-effraction",
    content: {
      fr: {
        title: "Sécurisation après effraction",
        keyword: "sécurisation après effraction",
        summary:
          "Remise en sécurité rapide du logement après un cambriolage ou une tentative d'effraction.",
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
        priceNote: PRICE_NOTE_FR,
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
      en: {
        title: "Securing after a break-in",
        keyword: "securing after a break-in paris",
        summary:
          "Making the property secure again quickly after a burglary or attempted break-in.",
        problem:
          "After a break-in the door or the lock is often damaged, and the property stays vulnerable until it is put right.",
        intervention:
          "The tradesperson comes out quickly to secure the damaged opening, replace the lock or the door if needed, and can provide the documents useful for your insurance claim.",
        includes: [
          "Fast call-out to make the property secure",
          "Lock replacement or repair of the damaged door",
          "Detailed quote you can use for your insurance file",
          "Advice on reinforcement to prevent it happening again",
        ],
        priceNote: PRICE_NOTE_EN,
        faq: [
          {
            question: "What should I do first after a break-in?",
            answer:
              "Report it to the police and file a complaint, then contact a locksmith to secure the property. If possible, avoid cleaning the area before the police have been.",
          },
          {
            question: "Can the locksmith help with my insurance?",
            answer:
              "They can provide a detailed quote and an invoice — the documents insurers generally ask for when handling a claim.",
          },
        ],
      },
    },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function localizeService(
  service: Service,
  lang: Locale,
): LocalizedService {
  return { slug: service.slug, ...service.content[lang] };
}

export function getLocalizedServices(lang: Locale): LocalizedService[] {
  return SERVICES.map((service) => localizeService(service, lang));
}

export function getLocalizedService(
  slug: string,
  lang: Locale,
): LocalizedService | undefined {
  const service = getService(slug);
  return service ? localizeService(service, lang) : undefined;
}
