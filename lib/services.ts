import type { Locale } from "@/lib/i18n";
import { formatPrice, getTierPriceHT } from "@/lib/pricing";

export type ServiceFaq = { question: string; answer: string };

/**
 * Who the page is written for. B2C services carry the emergency framing and
 * appear in the homepage grid and the /devis estimator; B2B services (CLAUDE.md
 * §4) lead with proof of qualification and route to a costed proposal instead
 * of a tap-to-call.
 */
export type Audience = "b2c" | "b2b";

export type ServiceContent = {
  title: string;
  keyword: string;
  summary: string;
  problem: string;
  intervention: string;
  includes: string[];
  /** Concrete situations that mean "call now" rather than "wait and see". */
  whenToCall: string[];
  priceNote: string;
  faq: ServiceFaq[];
};

// The slug is shared across locales: it identifies the service, and keeping it
// stable gives every page a 1:1 counterpart for hreflang and makes the language
// switcher a pure prefix swap. See CLAUDE.md §2.
export type Service = {
  slug: string;
  audience: Audience;
  content: Record<Locale, ServiceContent>;
};

/** A service flattened to one locale — what components actually render. */
export type LocalizedService = ServiceContent & {
  slug: string;
  audience: Audience;
};

// Every consumer service now carries a real starting price (lib/pricing.ts):
// the "sur devis" gaps on multipoints and sécurisation après effraction are
// filled with the market grid the client directed us to on 12/08/2026, closing
// CLAUDE.md §0 (B3) and the P1.5 "missing price lines" item. Prices are quoted
// inc. VAT in copy because that is what a consumer pays.

// B2B work is quoted after a site visit rather than from a grid: the variable is
// the estate, not the job. Said plainly so it doesn't read as a hidden price.
const PRICE_NOTE_B2B_FR =
  "Chiffrage après visite du site. Le devis détaille chaque poste (matériel, pose, délais d'intervention) et sert de base contractuelle — aucun montant ne s'y ajoute ensuite.";
const PRICE_NOTE_B2B_EN =
  "Costed after a site visit. The quote itemises every line (hardware, fitting, response times) and forms the contractual basis — nothing is added to it afterwards.";

/** A tier price, formatted with its tax basis — see lib/pricing.ts. */
const price = (tierSlug: string, lang: Locale) =>
  formatPrice(getTierPriceHT(tierSlug), lang);

export const SERVICES: Service[] = [
  {
    slug: "ouverture-de-porte",
    audience: "b2c",
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
        whenToCall: [
          "La porte s'est refermée et aucun double n'est accessible auprès d'un proche, du gardien ou de l'agence.",
          "La clé tourne dans le vide, force anormalement, ou s'est cassée dans le cylindre.",
          "Une personne vulnérable ou un animal est enfermé seul : appelez d'abord le 18 ou le 112, les pompiers sont prioritaires.",
        ],
        priceNote: `À partir de ${price("ouverture-porte-claquee", "fr")} pour une porte claquée, ${price("ouverture-porte-fermee-cle", "fr")} pour une porte fermée à clé. Tarif exact confirmé par téléphone avant le déplacement, validé sur place avant toute intervention.`,
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
        whenToCall: [
          "The door has closed and no spare is reachable from a relative, the caretaker or the agency.",
          "The key turns without catching, needs abnormal force, or has snapped in the cylinder.",
          "A vulnerable person or a pet is shut in alone: call 18 or 112 first — the fire service takes priority.",
        ],
        priceNote: `From ${price("ouverture-porte-claquee", "en")} for a slammed door, ${price("ouverture-porte-fermee-cle", "en")} for a locked door. Exact price confirmed by phone before travel, and agreed on site before any work begins.`,
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
    audience: "b2c",
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
        whenToCall: [
          "Vous emménagez : vous ne savez pas combien de jeux de clés circulent encore.",
          "Un jeu de clés a été perdu ou volé, surtout s'il portait une adresse.",
          "La clé accroche, le cylindre grippe, ou la serrure a déjà été forcée lors d'une tentative.",
        ],
        priceNote: `À partir de ${price("changement-cylindre", "fr")} pour un cylindre seul, ${price("serrure-standard", "fr")} pour une serrure complète et ${price("serrure-securite", "fr")} pour une serrure haute sécurité. Tarif exact confirmé par téléphone avant le déplacement, validé sur place avant toute intervention.`,
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
        whenToCall: [
          "You're moving in: you don't know how many key sets are still out there.",
          "A key set has been lost or stolen, especially if it carried an address.",
          "The key catches, the cylinder is seizing, or the lock has already been forced in an attempt.",
        ],
        priceNote: `From ${price("changement-cylindre", "en")} for the cylinder alone, ${price("serrure-standard", "en")} for a complete lock and ${price("serrure-securite", "en")} for a high-security lock. Exact price confirmed by phone before travel, and agreed on site before any work begins.`,
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
    audience: "b2c",
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
        whenToCall: [
          "Votre assurance impose un niveau de protection que votre porte actuelle n'atteint pas.",
          "Vous êtes en rez-de-chaussée, en premier étage accessible, ou absent de longues périodes.",
          "Une tentative d'effraction a déjà eu lieu, chez vous ou dans l'immeuble.",
        ],
        priceNote: `À partir de ${price("blindage-porte", "fr")}. Le tarif final dépend de la porte et du niveau de blindage choisi — devis écrit détaillé fourni avant tout engagement.`,
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
        whenToCall: [
          "Your insurer requires a level of protection your current door doesn't reach.",
          "You're on the ground floor, an accessible first floor, or away for long periods.",
          "An attempted break-in has already happened, at your home or in the building.",
        ],
        priceNote: `From ${price("blindage-porte", "en")}. The final price depends on the door and the level of reinforcement chosen — a detailed written quote is provided before any commitment.`,
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
    audience: "b2c",
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
        whenToCall: [
          "Un seul point de fermeture protège aujourd'hui une porte d'entrée exposée.",
          "Votre serrure multipoints existante ne verrouille plus en haut ou en bas.",
          "Votre assureur demande un nombre minimal de points de fermeture.",
        ],
        priceNote: `À partir de ${price("multipoints-3", "fr")} pour une serrure 3 points, ${price("multipoints-5", "fr")} pour une 5 points, pose comprise. Le modèle exact dépend de la porte, et le tarif est validé avec vous avant la commande du matériel.`,
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
        whenToCall: [
          "A single locking point currently protects an exposed front door.",
          "Your existing multi-point lock no longer engages at the top or bottom.",
          "Your insurer requires a minimum number of locking points.",
        ],
        priceNote: `From ${price("multipoints-3", "en")} for a 3-point lock and ${price("multipoints-5", "en")} for a 5-point, fitting included. The exact model depends on the door, and the price is agreed with you before any hardware is ordered.`,
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
    audience: "b2c",
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
        whenToCall: [
          "La porte ou la serrure est endommagée et le logement ne ferme plus correctement.",
          "Vous avez déposé plainte et devez sécuriser avant l'expertise ou le retour de l'assurance.",
          "Des clés ont disparu pendant l'effraction : le cylindre doit être remplacé, pas seulement réparé.",
        ],
        priceNote: `À partir de ${price("securisation-effraction", "fr")} pour la remise en sécurité. Le remplacement de la serrure ou de la porte est chiffré à part, sur la même grille, et la facture détaillée est exploitable pour votre dossier d'assurance.`,
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
        whenToCall: [
          "The door or lock is damaged and the property no longer closes properly.",
          "You've reported it and need to secure the home before the insurer's assessment.",
          "Keys went missing during the break-in: the cylinder needs replacing, not just repairing.",
        ],
        priceNote: `From ${price("securisation-effraction", "en")} to make the property secure again. Replacing the lock or the door is costed separately on the same grid, and the itemised invoice can be used for your insurance claim.`,
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
  {
    slug: "securisation-locaux-pro",
    audience: "b2b",
    content: {
      fr: {
        title: "Sécurisation de locaux professionnels",
        keyword: "sécurisation locaux professionnels paris",
        summary:
          "Commerces, bureaux et entrepôts : reprise des accès, cylindres sur organigramme et contrôle d'accès, sur un ou plusieurs sites.",
        problem:
          "Un local professionnel ne se sécurise pas comme un appartement. Plusieurs personnes détiennent des clés, la vitrine et le rideau sont exposés pendant les heures d'ouverture, et la porte de service qui donne sur la cour arrière est souvent le vrai point faible. Après le départ d'un salarié ou une tentative d'effraction, c'est un parc de clés qu'il faut reprendre, pas une serrure isolée.",
        intervention:
          "L'artisan fait le tour du site : issues principales et secondaires, rideau métallique, réserve, local technique. Il remet un état des lieux écrit, puis une proposition chiffrée poste par poste — cylindres sur organigramme (une clé pour le responsable, des clés limitées à une zone pour le reste), serrures certifiées A2P sur les accès exposés, contrôle d'accès par badge ou digicode là où la rotation du personnel est forte. Les poses sont planifiées hors horaires d'ouverture quand l'activité l'exige.",
        includes: [
          "Audit des accès du site, issues de secours et locaux techniques compris",
          "Organigramme de clés remis par écrit : qui ouvre quoi",
          "Cylindres à clé protégée, reproduction impossible sans carte de propriété",
          "Contrôle d'accès par badge ou digicode sur les accès à forte rotation",
          "Pose planifiée hors heures d'ouverture si l'activité l'impose",
        ],
        whenToCall: [
          "Un salarié est parti sans rendre ses clés, ou un jeu a disparu.",
          "Le site compte plusieurs accès et personne ne sait précisément qui ouvre quoi.",
          "Une tentative d'effraction a visé la vitrine, le rideau ou la porte de service.",
        ],
        priceNote: PRICE_NOTE_B2B_FR,
        faq: [
          {
            question:
              "Pouvez-vous intervenir en dehors des heures d'ouverture ?",
            answer:
              "Oui. Pour un commerce ou un bureau, les poses sont généralement planifiées tôt le matin, en soirée ou le week-end pour ne pas interrompre l'activité. Le créneau est inscrit au devis, pas décidé le jour même.",
          },
          {
            question: "Qu'est-ce qu'un organigramme de clés ?",
            answer:
              "C'est le plan de qui ouvre quoi : une clé qui ouvre tout pour le responsable, des clés qui n'ouvrent qu'une zone pour le reste de l'équipe. Il évite d'avoir à reprendre un site entier quand une seule clé disparaît.",
          },
          {
            question:
              "Un salarié est parti avec ses clés, faut-il tout changer ?",
            answer:
              "Pas nécessairement. Si les cylindres sont sur organigramme, seuls ceux concernés sont recodés. Sinon, nous chiffrons la reprise du parc et son passage sur clé protégée, pour que la question ne se repose pas au départ suivant.",
          },
          {
            question: "Intervenez-vous sur les rideaux métalliques ?",
            answer:
              "Oui : serrure de rideau bloquée, verrou au sol arraché, ou remplacement complet de la fermeture. C'est l'une des demandes les plus fréquentes des commerçants.",
          },
        ],
      },
      en: {
        title: "Securing commercial premises",
        keyword: "commercial locksmith paris",
        summary:
          "Shops, offices and warehouses: access taken back in hand, master-keyed cylinders and access control, across one site or several.",
        problem:
          "Commercial premises aren't secured the way a flat is. Several people hold keys, the shopfront and shutter are exposed through opening hours, and the service door onto the back yard is usually the real weak point. After a staff departure or an attempted break-in, what needs taking back in hand is a whole set of keys, not one lock.",
        intervention:
          "The tradesperson walks the site: main and secondary exits, roller shutter, stockroom, plant room. You get a written survey, then a costed proposal line by line — master-keyed cylinders (one key for the manager, zone-limited keys for everyone else), A2P-certified locks on exposed access points, badge or keypad access control where staff turnover is high. Fitting is scheduled outside opening hours where the business needs it.",
        includes: [
          "Survey of every access point, including fire exits and plant rooms",
          "Written master-key plan: who opens what",
          "Protected-key cylinders, no copies without the ownership card",
          "Badge or keypad access control on high-turnover entrances",
          "Fitting scheduled outside opening hours where trading requires it",
        ],
        whenToCall: [
          "A staff member left without returning their keys, or a set has gone missing.",
          "The site has several entrances and nobody knows exactly who opens what.",
          "An attempted break-in targeted the shopfront, shutter or service door.",
        ],
        priceNote: PRICE_NOTE_B2B_EN,
        faq: [
          {
            question: "Can you work outside opening hours?",
            answer:
              "Yes. For a shop or an office, fitting is usually scheduled early morning, evening or at the weekend so trading isn't interrupted. The slot is written into the quote, not decided on the day.",
          },
          {
            question: "What is a master-key plan?",
            answer:
              "It's the map of who opens what: one key that opens everything for the manager, zone-limited keys for the rest of the team. It avoids having to redo a whole site when a single key goes missing.",
          },
          {
            question:
              "A member of staff left with their keys — does everything need changing?",
            answer:
              "Not necessarily. If the cylinders are master-keyed, only the affected ones are re-keyed. If not, we cost taking the estate back in hand and moving it to protected keys, so the question doesn't come up again at the next departure.",
          },
          {
            question: "Do you work on roller shutters?",
            answer:
              "Yes: jammed shutter locks, ground bolts torn out, or full replacement of the closing mechanism. It's one of the most common requests from retailers.",
          },
        ],
      },
    },
  },
  {
    slug: "contrats-maintenance",
    audience: "b2b",
    content: {
      fr: {
        title: "Contrats de maintenance",
        keyword: "contrat maintenance serrurerie copropriété",
        summary:
          "Entretien périodique et astreinte serrurerie pour entreprises, bailleurs et syndics de copropriété, avec délai d'intervention et tarif fixés au contrat.",
        problem:
          "Pour un syndic ou un gestionnaire, la serrurerie se traite presque toujours dans l'urgence : une porte de hall qui ne referme plus un vendredi soir, un ferme-porte cassé, un contrôle d'accès hors service et cinquante résidents qui appellent le même jour. Chercher un prestataire disponible à ce moment-là, c'est accepter le prix qu'on vous annonce.",
        intervention:
          "Le contrat fixe à froid ce qui est couvert, à quel délai et à quel tarif. Il démarre par un état des lieux du parc — portes de hall, accès parking, locaux vélos et poubelles, contrôle d'accès — puis des visites d'entretien périodiques : réglage des ferme-portes, contrôle et lubrification des cylindres, vérification des issues de secours. S'y ajoute une astreinte d'urgence au tarif inscrit au contrat. Un seul interlocuteur, un rapport écrit après chaque passage, une facturation par immeuble ou par site.",
        includes: [
          "État des lieux initial du parc de fermetures, immeuble par immeuble",
          "Visites d'entretien périodiques avec rapport écrit",
          "Astreinte urgence au tarif contractuel, connu avant d'en avoir besoin",
          "Délai d'intervention garanti, défini au contrat",
          "Interlocuteur unique et facturation par immeuble ou par site",
        ],
        whenToCall: [
          "Les pannes de serrurerie de l'immeuble se traitent systématiquement dans l'urgence.",
          "Vous gérez plusieurs immeubles ou sites et voulez un interlocuteur unique.",
          "Vous voulez connaître le tarif d'astreinte avant d'en avoir besoin, pas pendant.",
        ],
        priceNote: PRICE_NOTE_B2B_FR,
        faq: [
          {
            question:
              "À partir de combien d'immeubles un contrat devient-il utile ?",
            answer:
              "Dès un immeuble comptant plusieurs accès. L'intérêt n'est pas le volume mais la prévisibilité : un tarif d'astreinte négocié à froid, pas au moment où la porte de hall reste ouverte toute la nuit.",
          },
          {
            question: "Que couvre exactement l'astreinte ?",
            answer:
              "Le déplacement et la main-d'œuvre en urgence, au tarif inscrit au contrat, nuits et week-ends compris. Le matériel remplacé est facturé au prix du devis, jamais à un tarif d'urgence improvisé.",
          },
          {
            question: "Le contrat engage-t-il sur une durée ?",
            answer:
              "La durée et le préavis figurent au contrat et sont discutés avant signature. Aucune reconduction tacite sans information écrite préalable.",
          },
          {
            question: "Travaillez-vous avec les syndics et les bailleurs ?",
            answer:
              "Oui. Les demandes de syndics, bailleurs et gestionnaires passent par le formulaire ci-dessous : réponse chiffrée sous 24 h ouvrées, attestations d'assurance jointes à la proposition.",
          },
        ],
      },
      en: {
        title: "Maintenance contracts",
        keyword: "locksmith maintenance contract paris",
        summary:
          "Scheduled maintenance and on-call locksmith cover for businesses, landlords and building managers, with response time and rate fixed in the contract.",
        problem:
          "For a building manager, locksmithing is nearly always handled under pressure: a lobby door that won't close on a Friday evening, a broken door closer, an access-control panel down and fifty residents calling the same day. Looking for an available contractor at that moment means accepting whatever price you're given.",
        intervention:
          "The contract settles what's covered, at what response time and at what rate, while nothing is on fire. It starts with a survey of the estate — lobby doors, car-park access, bike and bin stores, access control — then scheduled maintenance visits: adjusting door closers, checking and lubricating cylinders, verifying fire exits. On top of that sits emergency on-call cover at the contracted rate. One point of contact, a written report after every visit, invoicing per building or per site.",
        includes: [
          "Initial survey of the door and lock estate, building by building",
          "Scheduled maintenance visits with a written report",
          "Emergency on-call cover at the contracted rate, known before you need it",
          "Guaranteed response time, defined in the contract",
          "A single point of contact and invoicing per building or site",
        ],
        whenToCall: [
          "Locksmithing faults in the building are always handled as emergencies.",
          "You manage several buildings or sites and want a single point of contact.",
          "You want to know the on-call rate before you need it, not during.",
        ],
        priceNote: PRICE_NOTE_B2B_EN,
        faq: [
          {
            question:
              "How many buildings does it take for a contract to be worthwhile?",
            answer:
              "One building with several access points is enough. The value isn't volume, it's predictability: an on-call rate agreed calmly in advance, not while the lobby door stands open all night.",
          },
          {
            question: "What exactly does the on-call cover include?",
            answer:
              "Emergency call-out and labour at the rate written into the contract, nights and weekends included. Replacement hardware is billed at quoted prices, never at an improvised emergency rate.",
          },
          {
            question: "Does the contract tie us in for a fixed term?",
            answer:
              "The term and notice period are set out in the contract and discussed before signature. No automatic renewal without prior written notice.",
          },
          {
            question: "Do you work with managing agents and landlords?",
            answer:
              "Yes. Enquiries from managing agents, landlords and property managers go through the form below: a costed reply within one working day, with insurance certificates attached to the proposal.",
          },
        ],
      },
    },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getLocalizedServicesFor(
  lang: Locale,
  audience: Audience,
): LocalizedService[] {
  return SERVICES.filter((service) => service.audience === audience).map(
    (service) => localizeService(service, lang),
  );
}

export function localizeService(
  service: Service,
  lang: Locale,
): LocalizedService {
  return {
    slug: service.slug,
    audience: service.audience,
    ...service.content[lang],
  };
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
