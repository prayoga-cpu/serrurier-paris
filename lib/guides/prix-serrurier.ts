import type { Guide } from "@/lib/guides/types";
import type { Locale } from "@/lib/i18n";
import { formatPrice, getTierPriceHT } from "@/lib/pricing";

// Prices in this guide come from the same grid as /tarifs — a price guide that
// drifts from the price page is worse than no guide.
const price = (tierSlug: string, lang: Locale) =>
  formatPrice(getTierPriceHT(tierSlug), lang);

export const PRIX_SERRURIER: Guide = {
  slug: "prix-serrurier-paris",
  updated: "2026-08-12",
  related: ["eviter-arnaque-serrurier-paris", "norme-a2p-expliquee"],
  content: {
    fr: {
      title: "Combien coûte un serrurier à Paris ?",
      keyword: "combien coûte un serrurier",
      summary:
        "Les prix réels du marché parisien intervention par intervention, ce qui fait varier la facture, et comment distinguer un tarif normal d'un tarif abusif.",
      lead: "Personne ne connaît le prix d'un serrurier avant d'en avoir besoin, et c'est précisément ce qui rend ce marché opaque. Voici les fourchettes réelles à Paris et en Île-de-France, ce qui les fait bouger, et les repères qui permettent de dire « ce montant est normal » ou « ce montant ne l'est pas ».",
      sections: [
        {
          heading: "Les ordres de grandeur, intervention par intervention",
          paragraphs: [
            "Les montants ci-dessous sont nos tarifs de départ, TTC, déplacement inclus. Ils correspondent au cas standard le plus courant, en journée. Ils sont représentatifs du marché parisien pour un artisan qui travaille en direct.",
          ],
          list: [
            `Ouverture d'une porte claquée, sans dégât : à partir de ${price("ouverture-porte-claquee", "fr")}.`,
            `Ouverture d'une porte fermée à clé ou avec dégât : à partir de ${price("ouverture-porte-fermee-cle", "fr")}.`,
            `Changement de cylindre seul : à partir de ${price("changement-cylindre", "fr")}.`,
            `Changement de serrure complète : à partir de ${price("serrure-standard", "fr")}.`,
            `Serrure haute sécurité : à partir de ${price("serrure-securite", "fr")}.`,
            `Serrure multipoints 3 points : à partir de ${price("multipoints-3", "fr")} ; 5 points : à partir de ${price("multipoints-5", "fr")}.`,
            `Sécurisation après effraction : à partir de ${price("securisation-effraction", "fr")}.`,
            `Blindage de porte : à partir de ${price("blindage-porte", "fr")}.`,
          ],
        },
        {
          heading: "Ce qui fait réellement varier la facture",
          paragraphs: [
            "Quatre facteurs, et quatre seulement, expliquent l'essentiel des écarts légitimes entre deux factures pour ce qui ressemble au même travail.",
            "Le type de fermeture d'abord : une porte claquée n'a rien à voir avec une porte verrouillée à trois tours, et une serrure multipoints demande plus de temps qu'un cylindre simple. Ensuite l'état du matériel : un cylindre grippé, une porte affaissée ou un mécanisme déjà forcé transforment une intervention de vingt minutes en chantier d'une heure.",
            "Vient ensuite l'horaire. Les majorations de nuit, week-end et jour férié sont légitimes et pratiquées par toute la profession ; ce qui ne l'est pas, c'est de les découvrir sur la facture. Enfin le matériel remplacé : entre un cylindre d'entrée de gamme et un modèle certifié A2P à clé protégée, l'écart de prix d'achat est réel et doit apparaître sur le devis.",
          ],
        },
        {
          heading: "Le piège du tarif d'appel",
          paragraphs: [
            "« Ouverture de porte à partir de 39 € » est le chiffre le plus rentable du secteur — pour celui qui l'affiche. Il correspond en général au seul déplacement, parfois à rien du tout, et sert uniquement à faire composer le numéro. La facture réelle arrive ensuite, une fois l'artisan sur le palier et la pression installée.",
            "Un tarif de départ n'a de valeur que s'il précise ce qu'il inclut : déplacement, main-d'œuvre, TVA. Un « à partir de » sans base de calcul n'est pas un prix, c'est un appât.",
            "Le test est simple : demandez le montant total TTC pour votre cas précis, avant le déplacement, par écrit. Un professionnel qui travaille en direct sait répondre. Une plateforme qui sous-traite ne le peut pas, parce que sa marge se joue justement sur ce qu'elle n'annonce pas.",
          ],
        },
        {
          heading: "HT ou TTC : une différence de 20 %",
          paragraphs: [
            "Beaucoup de sites de serrurerie affichent des prix HT, ce qui est parfaitement légal en B2B mais trompeur pour un particulier : à taux normal, 890 € HT deviennent 1 068 € TTC sur la facture. Un écart de 20 % qui n'apparaît qu'au moment de payer produit exactement la sensation d'arnaque, même quand il n'y a pas fraude.",
            "Pour un consommateur, le prix affiché doit être le prix payé, taxes comprises. C'est pourquoi notre grille indique le TTC en premier et le HT entre parenthèses, plutôt que l'inverse.",
            "Un cas mérite d'être connu : certains travaux d'amélioration ou d'entretien dans un logement achevé depuis plus de deux ans relèvent d'un taux de TVA réduit. Quand il s'applique, il apparaît sur le devis et vous payez moins que le tarif affiché — jamais plus.",
          ],
        },
        {
          heading: "Ce que vous devez recevoir, quel que soit le montant",
          paragraphs: [
            "Un devis écrit et détaillé avant l'exécution des travaux : c'est l'exigence de l'arrêté du 24 janvier 2017 pour les prestations de dépannage, réparation et entretien du bâtiment, et l'obligation vaut de toute façon pour toute prestation de service au-delà de 150 € TTC. Le devis doit distinguer matériel et main-d'œuvre, mentionner le déplacement, et indiquer si son établissement est payant.",
            "Une facture détaillée après l'intervention, qui reprend les mêmes lignes. Si le montant final diffère du devis, il doit avoir fait l'objet de votre accord explicite avant la réalisation, pas d'une explication après coup.",
            "Ces deux documents ne sont pas de la paperasse : ce sont les seuls éléments qui vous permettent de contester utilement, de faire jouer une assurance, ou simplement de comparer deux prestataires sur une base réelle.",
          ],
        },
        {
          heading: "Comment comparer deux devis sans être du métier",
          paragraphs: [
            "Ne comparez pas les totaux, comparez les lignes. Un devis à 250 € qui pose un cylindre certifié A2P avec trois clés protégées n'est pas plus cher qu'un devis à 190 € posant un cylindre standard : il ne vend pas la même chose.",
            "Regardez trois points précis. Le matériel est-il nommé, avec sa marque et sa certification ? La main-d'œuvre est-elle chiffrée séparément du déplacement ? Les majorations horaires sont-elles indiquées à l'avance ?",
            "Un devis qui répond oui aux trois est comparable. Un devis qui affiche une ligne unique « intervention serrurerie : 480 € » ne l'est pas, et ce n'est pas un hasard.",
          ],
        },
      ],
      faq: [
        {
          question: "Quel est le prix moyen d'une ouverture de porte à Paris ?",
          answer: `Pour une porte claquée, sans verrouillage à clé, comptez à partir de ${price("ouverture-porte-claquee", "fr")} TTC déplacement inclus en journée. Une porte fermée à clé ou dont la serrure est endommagée démarre à ${price("ouverture-porte-fermee-cle", "fr")}. Au-delà de 250 € pour une simple porte claquée en journée, demandez le détail ligne par ligne avant d'accepter.`,
        },
        {
          question:
            "Les majorations de nuit et de week-end sont-elles légales ?",
          answer:
            "Oui, elles sont normales dans un métier disponible 24h/24, et pratiquées par toute la profession. Ce qui n'est pas acceptable, c'est qu'elles apparaissent pour la première fois sur la facture. Elles doivent figurer dans la grille tarifaire et vous être rappelées au téléphone avant le déplacement.",
        },
        {
          question:
            "Pourquoi un blindage coûte-t-il plusieurs centaines d'euros ?",
          answer: `Parce qu'il ne s'agit pas d'une serrure mais d'un ensemble : tôle d'acier, renfort de dormant, cornière anti-pince, paumelles renforcées et serrure multipoints certifiée, posés sur mesure. À partir de ${price("blindage-porte", "fr")} pour un blindage de porte, c'est le prix du marché parisien. Un devis très en dessous doit alerter : il porte presque toujours sur autre chose que ce que vous croyez acheter.`,
        },
        {
          question: "Le devis est-il payant ?",
          answer:
            "Chez nous, non : le devis est gratuit et sans engagement. La réglementation impose seulement d'indiquer clairement s'il est payant ou non — donc lisez cette mention avant de faire déplacer quelqu'un. Seul un déplacement de diagnostic sans intervention peut être facturé, au tarif publié et annoncé avant.",
        },
      ],
    },
    en: {
      title: "What does a locksmith cost in Paris?",
      keyword: "locksmith price paris",
      summary:
        "Real Paris market prices job by job, what legitimately moves the invoice, and how to tell a normal price from an abusive one.",
      lead: 'Nobody knows what a locksmith costs until they need one, which is exactly what keeps this market opaque. Here are the real ranges in Paris and Île-de-France, what makes them move, and the reference points that let you say "this figure is normal" or "this one isn\'t".',
      sections: [
        {
          heading: "Orders of magnitude, job by job",
          paragraphs: [
            "The figures below are our starting prices, including VAT and travel. They cover the most common standard case, during the day, and they're representative of the Paris market for a tradesperson working directly rather than through a platform.",
          ],
          list: [
            `Opening a slammed door, no damage: from ${price("ouverture-porte-claquee", "en")}.`,
            `Opening a locked or damaged door: from ${price("ouverture-porte-fermee-cle", "en")}.`,
            `Cylinder replacement alone: from ${price("changement-cylindre", "en")}.`,
            `Full lock replacement: from ${price("serrure-standard", "en")}.`,
            `High-security lock: from ${price("serrure-securite", "en")}.`,
            `3-point multi-point lock: from ${price("multipoints-3", "en")}; 5-point: from ${price("multipoints-5", "en")}.`,
            `Securing after a break-in: from ${price("securisation-effraction", "en")}.`,
            `Door reinforcement: from ${price("blindage-porte", "en")}.`,
          ],
        },
        {
          heading: "What legitimately moves the invoice",
          paragraphs: [
            "Four factors, and only four, explain most of the legitimate gap between two invoices for what looks like the same work.",
            "First, the type of lock: a door that has pulled shut is nothing like one deadlocked with three turns, and a multi-point lock takes longer than a simple cylinder. Second, the state of the hardware: a seized cylinder, a dropped door or a mechanism already forced turns a twenty-minute job into an hour's work.",
            "Third, the hour. Night, weekend and public-holiday surcharges are legitimate and used across the trade; what isn't legitimate is discovering them on the invoice. Fourth, the hardware fitted: between a budget cylinder and a certified A2P protected-key model, the purchase-price gap is real and belongs on the quote.",
          ],
        },
        {
          heading: "The headline-rate trap",
          paragraphs: [
            '"Door opening from €39" is the most profitable number in the sector — for whoever advertises it. It usually covers travel alone, sometimes nothing at all, and exists only to make you dial. The real invoice arrives afterwards, once someone is on your landing and the pressure is on.',
            "A starting price is only worth something if it says what it includes: travel, labour, VAT. A \"from\" price with no basis isn't a price, it's bait.",
            "The test is simple: ask for the total price including VAT for your specific case, in writing, before anyone travels. A tradesperson working directly can answer. A platform subcontracting the job can't, because its margin depends precisely on what it doesn't tell you.",
          ],
        },
        {
          heading: "Ex-VAT or inc-VAT: a 20% difference",
          paragraphs: [
            "Many locksmith sites publish ex-VAT prices, which is perfectly legal B2B practice but misleading for a private customer: at the standard rate, €890 ex-VAT becomes €1,068 on the invoice. A 20% gap that only appears at payment time produces exactly the feeling of being scammed, even where there's no fraud.",
            "For a consumer, the advertised price should be the price paid, taxes included. That's why our grid shows the inc-VAT figure first and the ex-VAT figure in brackets, rather than the other way round.",
            "One case is worth knowing: some improvement or maintenance work in homes completed more than two years ago qualifies for a reduced VAT rate. Where it applies, it appears on the quote and you pay less than the advertised price — never more.",
          ],
        },
        {
          heading: "What you should receive, whatever the amount",
          paragraphs: [
            "A detailed written quote before work starts: that's the requirement of the order of 24 January 2017 for repair, maintenance and emergency work in the building trades, and a written quote is required for any service above €150 including VAT in any case. The quote must separate materials from labour, state the travel charge, and say whether producing it is chargeable.",
            "An itemised invoice afterwards, echoing the same lines. If the final amount differs from the quote, it must have been agreed by you explicitly before the work — not explained after it.",
            "These two documents aren't paperwork: they're the only things that let you dispute effectively, claim on insurance, or simply compare two providers on a real basis.",
          ],
        },
        {
          heading: "Comparing two quotes without being in the trade",
          paragraphs: [
            "Don't compare totals, compare lines. A €250 quote fitting a certified A2P cylinder with three protected keys is not more expensive than a €190 quote fitting a standard cylinder: it isn't selling the same thing.",
            "Look at three specific points. Is the hardware named, with its brand and certification? Is labour costed separately from travel? Are out-of-hours surcharges stated up front?",
            'A quote that answers yes three times is comparable. A quote showing a single line reading "locksmithing: €480" is not, and that isn\'t an accident.',
          ],
        },
      ],
      faq: [
        {
          question: "What's the average price of a door opening in Paris?",
          answer: `For a door that has simply pulled shut, expect from ${price("ouverture-porte-claquee", "en")} including VAT and travel during the day. A locked door, or one whose lock is damaged, starts at ${price("ouverture-porte-fermee-cle", "en")}. Above €250 for a simple slammed door in daytime, ask for the line-by-line breakdown before agreeing.`,
        },
        {
          question: "Are night and weekend surcharges legal?",
          answer:
            "Yes — they're normal in a trade available around the clock, and used across the profession. What isn't acceptable is seeing them for the first time on the invoice. They belong in the published price list and should be repeated to you on the phone before anyone travels.",
        },
        {
          question: "Why does door reinforcement cost several hundred euros?",
          answer: `Because it isn't a lock, it's an assembly: steel plating, frame reinforcement, anti-crowbar angle, reinforced hinges and a certified multi-point lock, fitted to measure. From ${price("blindage-porte", "en")} for door reinforcement is the Paris market price. A quote far below that should raise a flag: it almost always covers something other than what you think you're buying.`,
        },
        {
          question: "Is the quote chargeable?",
          answer:
            "With us, no: quotes are free and without obligation. The regulations only require that whether a quote is chargeable is stated clearly — so read that line before having anyone travel. Only a diagnostic call-out with no work carried out can be charged, at the published rate and stated in advance.",
        },
      ],
    },
  },
};
