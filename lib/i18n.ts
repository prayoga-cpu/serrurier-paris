// Locale layer. See CLAUDE.md §2 — French is primary and lives at the site root
// (/, /tarifs, /services/…); English is secondary and prefixed (/en/…). Keeping
// French unprefixed means no already-indexed URL moves when EN ships.

export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

/** BCP-47 tags for <html lang> and hreflang. */
export const HTML_LANG: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en",
};

/**
 * Maps a locale-agnostic path ("/", "/tarifs") to its URL in `lang`.
 * French is unprefixed; English is prefixed with /en.
 */
export function localePath(lang: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  if (lang === DEFAULT_LOCALE) return clean || "/";
  return `/en${clean}`;
}

/**
 * hreflang alternates for a locale-agnostic path. Slugs are shared across
 * locales, so every page has a 1:1 counterpart. Canonical is self-referencing
 * per CLAUDE.md §7 — it must be the CURRENT page's own URL, not always French;
 * x-default is the only one that always points at French.
 */
export function alternates(lang: Locale, path: string) {
  return {
    canonical: localePath(lang, path),
    languages: {
      "fr-FR": localePath("fr", path),
      en: localePath("en", path),
      "x-default": localePath(DEFAULT_LOCALE, path),
    },
  };
}

const fr = {
  nav: {
    home: "Accueil",
    services: "Services",
    pricing: "Tarifs",
    zones: "Zones",
    guides: "Guides",
    contact: "Contact",
  },
  common: {
    callNow: "Appeler maintenant",
    callUs: "Appelez-nous",
    call: "Appeler",
    requestQuote: "Demander un devis",
    requestProposal: "Demander une proposition",
    phoneCall: "Appel téléphonique",
    whatsapp: "WhatsApp",
    whatsappHint: "Écrire, envoyer une photo de la serrure",
    contactOptions: "Nous joindre",
    orWhatsapp: "ou écrivez-nous sur WhatsApp",
    viewPricing: "Voir les tarifs",
    learnMore: "En savoir plus",
    breadcrumb: "Fil d'Ariane",
    switchLanguage: "Changer de langue",
    openMenu: "Ouvrir le menu",
  },
  hero: {
    eyebrow: "Serrurier à Paris et en Île-de-France",
    availableNow: "Disponible maintenant",
    // CLAUDE.md §0 (B4) / §15 Finding 2 — the previous H1 and benefit cards were
    // word-for-word the client-supplied reference site. Same strategy, own words,
    // and the primary keyword (§5: "serrurier paris") is now actually in the H1.
    title: "Serrurier à Paris : le prix d'abord, l'outil ensuite.",
    lead: "Ouverture de porte, changement de serrure, blindage. Vous connaissez le montant avant que l'artisan ne prenne la route, et il vous est confirmé par écrit avant toute intervention.",
    photoTitle: "Un tarif tenu, de Paris à toute l'Île-de-France",
    photoAlt:
      "Toits et façades haussmanniennes de Paris, secteur d'intervention de nos serruriers",
    stat1Value: "24/7",
    stat1Label: "disponibilité",
    stat2Value: "0 €",
    stat2Label: "d'écart entre le devis et la facture",
    badges: [
      "Certifié A2P",
      "Grille tarifaire publique, consultable avant d'appeler",
      "Un seul interlocuteur, du premier appel à la facture",
      "Devis écrit avant travaux, quel que soit le montant",
      "Garantie sur nos installations",
    ],
    formTitle: "Besoin d'un serrurier maintenant ?",
    formLead:
      "Décrivez votre besoin, on vous rappelle avec un prix clair, avant toute intervention.",
    formCta: "Reprendre ma demande",
    fieldName: "Nom complet",
    fieldNamePlaceholder: "Votre nom",
    fieldPhone: "Numéro de téléphone",
    fieldPhonePlaceholder: "06 XX XX XX XX",
    noPostalHelp: "Vous ne connaissez pas votre code postal ?",
    noPostalCta: "Appelez-nous directement",
    geoOr: "ou",
    geoCta: "Utiliser ma position",
    geoBusy: "Localisation en cours…",
    geoNote:
      "Votre position sert uniquement à retrouver l'adresse. Elle n'est pas conservée.",
    geoFound: "Adresse détectée",
    geoErrorDenied:
      "Accès à la position refusé. Saisissez votre code postal ci-dessus.",
    geoErrorUnavailable:
      "Position introuvable. Saisissez votre code postal ci-dessus.",
    geoErrorTimeout:
      "La localisation a pris trop de temps. Saisissez votre code postal ci-dessus.",
    geoErrorLookup:
      "Adresse indisponible pour le moment. Saisissez votre code postal ci-dessus.",
    geoErrorNoAddress:
      "Aucune adresse française à cette position. Saisissez votre code postal ci-dessus.",
  },
  trust: [
    {
      title: "Sur place en moins de 30 minutes selon le secteur",
      description:
        "Un artisan part dès votre appel, de jour comme de nuit, week-ends et jours fériés compris.",
    },
    {
      title: "Le montant est fixé au téléphone",
      description:
        "Vous savez ce que vous allez payer avant le déplacement, et c'est ce chiffre que vous réglez une fois l'intervention terminée.",
    },
    {
      title: "Un artisan qualifié et assuré",
      description:
        "Vous parlez à la personne qui suit votre dossier, du premier appel jusqu'à la facture.",
    },
    {
      title: "Tout est écrit avant qu'on commence",
      description:
        "Devis détaillé remis avant travaux, quel que soit le montant, conformément à la réglementation du 24/01/2017.",
    },
    {
      title: "Garantie sur nos installations",
      description:
        "Chaque installation est garantie. Les conditions exactes vous sont communiquées avec votre devis.",
    },
  ],
  /**
   * Trust block for zones marked coverage: "network" — see ZoneCoverage in
   * lib/zones/types.ts. Same commitments, minus the two the direct model earns
   * and a dispatch model cannot: a 30-minute arrival, and the promise that
   * whoever answers is whoever travels.
   */
  trustNetwork: [
    {
      title: "Joignable à toute heure",
      description:
        "Par téléphone ou sur WhatsApp, jour et nuit, week-ends et jours fériés compris. Vous décrivez la situation, nous vous répondons.",
    },
    {
      title: "La couverture est confirmée avant tout déplacement",
      description:
        "À partir de votre code postal et de votre description, nous vous disons ce que nous pouvons faire et sous quel délai — avant que qui que ce soit prenne la route.",
    },
    {
      title: "Le montant est fixé avant l'intervention",
      description:
        "Vous savez ce que vous allez payer avant que qui que ce soit se déplace, et c'est ce chiffre que vous réglez.",
    },
    {
      title: "Tout est écrit avant qu'on commence",
      description:
        "Devis détaillé remis avant travaux, quel que soit le montant, conformément à la réglementation du 24/01/2017.",
    },
    {
      title: "Garantie sur les installations",
      description:
        "Chaque installation est garantie. Les conditions exactes vous sont communiquées avec votre devis.",
    },
  ],
  services: {
    eyebrow: "Nos interventions",
    title: "Cinq interventions, un même engagement de transparence",
    b2bEyebrow: "Professionnels, entreprises et syndics",
    b2bTitle: "Vous gérez un local, un immeuble ou plusieurs sites ?",
    b2bBody:
      "Sécurisation de locaux professionnels et contrats de maintenance pour entreprises, commerçants et syndics de copropriété : un interlocuteur unique, des délais d'intervention convenus à l'avance et une facturation lisible.",
  },
  pricingTeaser: {
    eyebrow: "Prix transparent",
    title: "Une grille publique, consultable et mise à jour",
    body: "Nos tarifs sont consultables avant même de nous appeler : montant de départ par intervention, base de calcul du déplacement et de la main d'œuvre, suppléments de nuit et de week-end. Vous avez tous les éléments en main avant de décider.",
    cta: "Voir la grille tarifaire",
  },
  footer: {
    tagline:
      "Ouverture de porte, changement de serrure et blindage à Paris, en Île-de-France et dans une sélection de villes en France. Artisan indépendant, montant fixé avant le déplacement.",
    interventions: "Interventions",
    information: "Informations",
    contact: "Contact",
    pricingGrid: "Grille tarifaire",
    availability: "Disponible 24h/24, 7j/7",
    area: "Paris et Île-de-France",
    rights: "Tous droits réservés.",
    identity: "Artisan serrurier indépendant, qualifié et assuré.",
    siretLabel: "SIRET",
    apeLabel: "Code APE",
    writtenQuote:
      "Devis écrit obligatoire avant travaux, quel que soit le montant (réglementation du 24/01/2017). Tous les tarifs affichés s'entendent TTC.",
  },
  servicePage: {
    intervention: "L'intervention",
    included: "Ce qui est inclus",
    whenToCall: "Quand nous appeler",
    priceTableTitle: "Le détail des tarifs",
    zonesTitle: "Où nous intervenons pour cette prestation",
    zonesLead:
      "Paris et Île-de-France, au même tarif partout : c'est le délai qui varie selon le secteur, pas le prix.",
    zonesCta: "Voir toutes les zones",
    price: "Tarif",
    guaranteeTitle: "Garantie",
    guaranteeBody:
      "Cette intervention est couverte par notre garantie sur les installations. Les conditions et la durée exactes sont communiquées avec votre devis écrit. Nous sommes qualifiés et assurés pour cette prestation.",
    faq: "Questions fréquentes",
  },
  pricingPage: {
    eyebrow: "prix serrurier paris",
    title: "Une grille tarifaire transparente",
    lead: "Voici ce que coûte chaque intervention, ligne par ligne. Le tarif est fixé avec vous au téléphone, confirmé par écrit avant toute intervention, et c'est celui qui figure sur la facture.",
    responseTime:
      "Délai d'intervention : moins de 30 minutes selon le secteur.",
    colIntervention: "Intervention",
    colPrice: "Tarif",
    from: "À partir de",
    onQuote: "Sur devis",
    optionsTitle: "Options et suppléments",
    optionsLead:
      "Ces suppléments s'ajoutent au tarif de l'intervention selon le contexte.",
    noticeTitle: "Tarifs indicatifs, à partir de.",
    noticeBody:
      "Les prix ci-dessus couvrent le cas standard le plus courant. Le tarif exact dépend de la complexité sur place (état de la serrure, accès, matériel nécessaire) et vous est communiqué par téléphone avant le déplacement, puis validé avec vous avant toute intervention.",
    taxBasisTitle: "Montants TTC, HT entre parenthèses.",
    taxBasisBody:
      "Chaque ligne affiche d'abord le prix TTC — celui qu'un particulier règle, TVA de 20 % comprise — puis le montant HT, utile aux professionnels qui récupèrent la TVA. Certains travaux dans un logement de plus de deux ans relèvent d'un taux réduit : le cas échéant, le devis l'applique et vous payez moins que le montant affiché ici, jamais plus.",
    basisTitle: "Base de calcul.",
    basisBody:
      "Le tarif dépend du type d'intervention, de la complexité de la serrure, du déplacement et de l'horaire (jour, nuit, week-end, jour férié).",
    writtenQuoteTitle: "Devis écrit obligatoire.",
    writtenQuoteBody:
      "Conformément à la réglementation en vigueur depuis le 24/01/2017, un devis écrit est systématiquement fourni avant toute intervention, quel que soit le montant.",
    questionTitle: "Une question sur un tarif ?",
    questionBody:
      "Appelez-nous directement, ou décrivez votre besoin pour recevoir une estimation avant intervention.",
  },
  devis: {
    eyebrow: "Demande de devis",
    title: "Demande d'intervention",
    lead: "Indiquez votre secteur, puis décrivez votre besoin — vous recevez une estimation avant tout déplacement.",
    step1Title: "Où intervenons-nous ?",
    step1Lead:
      "Entrez votre code postal pour vérifier que nous intervenons dans votre secteur.",
    postalLabel: "Code postal",
    postalPlaceholder: "75011",
    checkCta: "Vérifier",
    postalInvalid: "Entrez un code postal valide à 5 chiffres.",
    postalParis: "Vous êtes dans notre zone d'intervention à Paris.",
    postalIdf:
      "Vous êtes en Île-de-France, dans notre zone d'intervention. Le délai dépend du secteur : il vous est annoncé au téléphone, avec le tarif.",
    // Shown for a city we publish outside Île-de-France. Deliberately promises
    // a confirmed time and price rather than a 30-minute arrival: see
    // ZoneCoverage in lib/zones/types.ts.
    postalNetwork:
      "Votre ville fait partie des secteurs que nous couvrons. Le délai et le tarif vous sont confirmés avant tout déplacement.",
    postalOther:
      "Laissez vos coordonnées ci-dessous : nous vous confirmons rapidement si nous pouvons intervenir chez vous, et sous quel délai.",
    editPostal: "Modifier le code postal",
    closeForm: "Fermer le formulaire",
    servicesLabel: "Type d'intervention",
    servicesHint:
      "Sélectionnez une ou plusieurs interventions, si vous savez déjà de quoi il s'agit.",
    notSureOption: "Je ne suis pas sûr — décrire la situation dans le message",
    optionsLabel: "Précisions",
    infoTitle: "Vos informations",
    infoHint: "Les champs marqués d'un * sont obligatoires.",
    fieldEmail: "Email",
    fieldEmailPlaceholder: "vous@email.com",
    fieldAddress: "Adresse complète",
    fieldAddressPlaceholder: "12 rue de la Paix, 75011 Paris",
    fieldMessage: "Message (optionnel)",
    fieldMessagePlaceholder: "Décrivez votre situation…",
    submitCta: "Envoyer ma demande",
    priceReassurance:
      "Les tarifs ci-dessus sont indicatifs, à partir de. Le tarif exact est confirmé par téléphone avant le déplacement, et validé avec vous avant toute intervention.",
    urgentTitle: "Besoin d'aide maintenant ?",
    urgentLead: "Pour une urgence, appeler reste le plus rapide.",
  },
  zonePage: {
    landmarksTitle: "Points de repère",
    neighborhoodsTitle: "Quartiers desservis",
    servicesTitle: "Nos interventions dans le secteur",
    faqTitle: "Questions fréquentes",
    ctaTitle: "Besoin d'un serrurier dans le secteur ?",
    ctaBody:
      "Appelez-nous directement pour une urgence, ou décrivez votre besoin pour recevoir une estimation avant intervention.",
    citiesTitle: "Villes avec une page dédiée",
    contextTitle: "Ce que le bâti du secteur change concrètement",
    commonJobsTitle: "Les interventions les plus demandées ici",
    pricingTitle: "Nos tarifs dans le secteur",
    pricingLead:
      "Les mêmes tarifs que partout ailleurs dans notre zone d'intervention : le déplacement est déjà compris, et c'est le délai qui varie d'un secteur à l'autre, jamais le prix.",
    pricingCta: "Voir la grille complète",
    processTitle: "Comment se passe une intervention",
    processSteps: [
      {
        title: "Vous appelez ou vous écrivez",
        body: "Décrivez la porte et la situation. Vous obtenez au téléphone, ou par écrit sur WhatsApp, le tarif de l'intervention et un délai d'arrivée réaliste pour votre rue — pas une promesse invérifiable.",
      },
      {
        title: "L'artisan se déplace et diagnostique",
        body: "Sur place, il vérifie le type de serrure et l'état de la porte, confirme la méthode la moins destructive possible, et fait valider le montant avant de toucher à quoi que ce soit.",
      },
      {
        title: "Intervention, facture et garantie",
        body: "Le travail est fait, testé devant vous, et facturé au montant validé. La facture détaille le matériel et la main-d'œuvre — c'est le document dont votre assureur ou votre bailleur aura besoin.",
      },
    ],
    guidesTitle: "À lire avant d'appeler",
    guidesLead:
      "Nos guides sont écrits pour être utiles même si vous appelez quelqu'un d'autre.",
    nearbyTitle: "Secteurs voisins",
    // National cities are scattered across France — Brest and Perpignan are
    // 1 100 km apart — so "voisins" would be plainly false there.
    nearbyTitleNetwork: "Autres villes couvertes",
    trustTitle: "Ce qui ne change pas, quel que soit le secteur",
    otherCitiesTitle: "Autres communes desservies",
    notListedTitle: "Votre commune n'apparaît pas dans la liste ?",
    notListedBody:
      "La liste ci-dessus n'est pas exhaustive. Appelez-nous ou indiquez votre code postal : nous vous confirmons immédiatement si nous intervenons chez vous, et à quel tarif.",
    notListedCta: "Vérifier mon code postal",
    backToDepartment: "Voir tout le département",
  },
  zonesIndexPage: {
    eyebrow: "Zones d'intervention",
    title: "Serrurier à Paris et en Île-de-France",
    lead: "Nous couvrons les 20 arrondissements de Paris, les sept départements d'Île-de-France et une sélection de villes ailleurs en France. Sélectionnez votre secteur pour des informations locales : quartiers desservis, points de repère et interventions les plus fréquentes.",
    parisTitle: "Paris, arrondissement par arrondissement",
    parisLead:
      "Chaque arrondissement a son bâti, ses serrures et ses contraintes d'accès. Nos pages arrondissement le disent concrètement plutôt que de répéter la même fiche vingt fois.",
    // Rendered only when there is at least one city page outside Île-de-France.
    nationalTitle: "Autres villes en France",
    nationalLead:
      "Les villes hors Île-de-France où nous couvrons les interventions. Le délai et le tarif vous sont confirmés avant tout déplacement.",
    idfTitle: "Île-de-France, par département",
    idfLead:
      "Petite et grande couronne : pavillons, résidences collectives, locaux commerciaux et copropriétés. Choisissez votre département pour voir les communes couvertes.",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Contactez-nous",
    lead: "Une question, un projet, ou besoin d'un serrurier ? Appelez-nous directement ou laissez-nous un message.",
    phoneLabel: "Téléphone",
    emailLabel: "Email",
    hoursLabel: "Disponibilité",
    hoursValue: "24h/24, 7j/7",
    areaLabel: "Secteur",
    areaValue: "Paris",
    formTitle: "Envoyer un message",
    formLead:
      "Pour une demande de devis avec estimation, utilisez plutôt notre formulaire de devis.",
    devisBoxTitle: "Besoin d'une estimation ?",
    devisBoxBody:
      "Vérifiez votre secteur et décrivez votre besoin pour recevoir un prix avant tout déplacement.",
    devisCta: "Demander un devis",
    fieldMessage: "Votre message",
    fieldMessagePlaceholder: "Comment pouvons-nous vous aider ?",
    submitCta: "Envoyer",
  },
  reviews: {
    title: "Ce qu'en disent nos clients",
    lead: "Des avis vérifiés, ou aucun avis. Nous n'affichons pas de note globale tant que les avis publiés ne sont pas vérifiables un par un.",
    sampleNotice:
      "Exemple de mise en page. Ces avis sont des données de test, pas de vrais clients — ils ne s'affichent qu'en développement et sont remplacés par des avis vérifiés avant mise en ligne.",
    interventionLabel: "Intervention",
    noneYetTitle: "Pas encore d'avis publiés",
    noneYetBody:
      "Nous préférons une page vide à des témoignages inventés. Les premiers avis vérifiés seront publiés ici, avec le secteur et le type d'intervention.",
  },
  aboutPage: {
    eyebrow: "L'artisan",
    title: "Qui intervient chez vous",
    lead: "Vous joignez directement l'artisan qui prend en charge votre intervention, et c'est lui qui vous annonce le prix.",
    storyTitle: "Un artisan indépendant, joignable directement",
    story: [
      "Le montant annoncé au téléphone est celui qui figure sur le devis écrit, puis sur la facture. C'est possible parce que la personne qui évalue le travail est aussi celle qui le réalise.",
      "Vous avez un seul interlocuteur, du premier appel jusqu'à la facture. Il connaît son secteur, ses immeubles et ses serrures, ce qui lui permet d'évaluer le travail avant même de se déplacer. C'est ce qui rend possible la grille publiée sur la page tarifs.",
    ],
    credentialsTitle: "Qualifications et garanties",
    credentials: [
      "Artisan serrurier indépendant, qualifié et assuré pour l'ensemble des prestations publiées sur ce site.",
      "Garantie sur les installations : les conditions et la durée exactes sont remises avec le devis écrit.",
      "Devis écrit systématique avant travaux, quel que soit le montant, conformément à la réglementation du 24 janvier 2017 sur le dépannage à domicile.",
      "Facture détaillée après chaque intervention, exploitable pour une déclaration d'assurance ou une demande auprès d'un bailleur.",
      "Vérification systématique du droit d'accès avant toute ouverture : pièce d'identité, facture ou attestation de domicile.",
    ],
    identityTitle: "Identité de l'entreprise",
    identityPending:
      "Le numéro SIRET et le code APE seront publiés ici et dans le pied de page dès leur communication. Nous préférons une ligne absente à un numéro approximatif : un identifiant faux est pire qu'un identifiant manquant.",
    commitmentsTitle: "Nos engagements, en clair",
    commitments: [
      {
        title: "Le tarif est annoncé avant le déplacement",
        body: "Au téléphone ou par écrit sur WhatsApp, pour votre cas précis. Pas de « ça dépend, le technicien verra sur place ».",
      },
      {
        title: "La méthode la moins destructive d'abord",
        body: "Le perçage est le dernier recours, jamais la méthode par défaut, et il est annoncé et chiffré avant d'être réalisé.",
      },
      {
        title: "Aucun avis inventé",
        body: "Nous n'affichons pas de note globale ni de témoignages tant que les avis publiés ne sont pas vérifiables un par un.",
      },
      {
        title: "Le réglage avant le remplacement",
        body: "Une serrure qui bloque n'est pas toujours une serrure à changer. Le diagnostic passe avant la vente.",
      },
    ],
  },
  homeSections: {
    processEyebrow: "Comment ça se passe",
    processTitleShort: "Trois étapes, aucune surprise",
    // The homepage runs the compact variant: an emergency visitor on a phone
    // needs the shape of the job in one glance, not the full account. The long
    // version stays on the zone pages, where the visitor is researching.
    processStepsShort: [
      {
        title: "Vous appelez",
        body: "Le prix et l'heure d'arrivée, annoncés avant que l'artisan parte.",
      },
      {
        title: "Il confirme sur place",
        body: "La porte est vérifiée et le montant validé avant qu'on y touche.",
      },
      {
        title: "Ouvert, facturé, garanti",
        body: "Testé devant vous, facture détaillée, garantie sur l'installation.",
      },
    ],
    coverageTitle: "Où nous intervenons",
    coverageBody:
      "Les 20 arrondissements de Paris et les sept départements d'Île-de-France, au même tarif partout. Ce qui change d'un secteur à l'autre, c'est le délai — annoncé au téléphone avant que l'artisan ne prenne la route.",
    guidesCta: "Lire tous les guides",
  },
  taskPage: {
    eyebrow: "Situations d'urgence",
    title: "Votre situation, en une page",
    lead: "Ce qui vous arrive a un nom, un tarif et une marche à suivre. Choisissez le cas qui correspond : vous saurez quoi faire dans les cinq prochaines minutes, et ce que ça coûte.",
    symptomsTitle: "C'est votre cas si…",
    doNowTitle: "À faire maintenant",
    avoidTitle: "À ne surtout pas faire",
    howWeFixTitle: "Comment nous intervenons",
    priceTitle: "Ce que ça coûte",
    priceNote:
      "Tarifs de départ TTC, déplacement compris. Le montant exact vous est confirmé au téléphone avant tout déplacement, et validé sur place avant intervention.",
    serviceLabel: "La prestation",
    guideLabel: "Le guide complet",
  },
  guidesIndexPage: {
    eyebrow: "Guides",
    title: "Comprendre avant d'appeler un serrurier",
    lead: "Ce que coûte réellement une intervention, comment lire un devis, quoi faire à 2 h du matin devant une porte claquée. Des guides écrits pour être utiles même si vous ne nous appelez jamais.",
  },
  guidePage: {
    takeawaysTitle: "L'essentiel en 30 secondes",
    urgentTitle: "Vous êtes devant la porte, maintenant ?",
    urgentBody:
      "Ne lisez pas ce guide. Appelez, ou ouvrez la marche à suivre correspondant à votre situation.",
    tocTitle: "Au sommaire",
    expandHint: "Déplier",
    faqTitle: "Questions fréquentes",
    relatedTitle: "À lire ensuite",
    updatedLabel: "Mis à jour le",
    readingTime: "min de lecture",
    ctaTitle: "Une question sur votre situation ?",
    ctaBody:
      "Décrivez-la nous : vous obtenez une réponse et un ordre de prix avant tout déplacement. Pour une urgence, l'appel reste le plus rapide.",
  },
  b2bForm: {
    title: "Demande professionnelle",
    lead: "Entreprise, commerce, syndic ou bailleur : décrivez votre besoin, nous revenons vers vous avec une proposition chiffrée et un délai d'intervention contractuel.",
    fieldCompany: "Société ou copropriété",
    fieldCompanyPlaceholder: "Nom de la structure",
    fieldRole: "Vous êtes",
    roleEntreprise: "Entreprise",
    roleCommercant: "Commerçant",
    roleSyndic: "Syndic de copropriété",
    roleBailleur: "Bailleur ou gestionnaire",
    roleAutre: "Autre",
    fieldSites: "Nombre de sites concernés",
    fieldSitesPlaceholder: "1",
    fieldNeed: "Votre besoin",
    fieldNeedPlaceholder:
      "Parc de serrures à reprendre, contrôle d'accès, astreinte, remise en état après effraction…",
    submitCta: "Envoyer la demande",
    note: "Réponse sous 24 h ouvrées. Aucun engagement : la proposition est chiffrée avant toute intervention.",
  },
  submit: {
    sendingTitle: "Envoi de votre demande…",
    sendingBody: "Un instant, nous transmettons votre demande à l'atelier.",
    sentTitle: "Demande envoyée",
    sentBody:
      "Nous l'avons bien reçue. Un serrurier vous rappelle avec un tarif annoncé avant tout déplacement.",
    failedTitle: "L'envoi n'a pas abouti",
    failedBody:
      "Rien n'est perdu : votre récapitulatif est prêt ci-dessous. Envoyez-le sur WhatsApp, ou appelez-nous — c'est le plus rapide.",
    emailedCopy:
      "Nous avons bien reçu votre demande et vous en avons envoyé une copie par email.",
    checkInbox: "Vérifier ma boîte mail",
    toastSent: "Demande envoyée",
    whatsappFollowUp:
      "Urgent, ou vous préférez suivre l'échange par écrit ? Envoyez aussi le récapitulatif sur WhatsApp.",
    sendWhatsapp: "Envoyer sur WhatsApp",
    orCall: "Ou appelez-nous directement",
    summaryLabel: "Récapitulatif envoyé",
    editRequest: "Modifier ma demande",
    quoteHeader: "Demande de devis — site parisunlockdoor.fr",
    contactHeader: "Message depuis le site parisunlockdoor.fr",
    proHeader: "Demande professionnelle — site parisunlockdoor.fr",
    fieldService: "Intervention",
    fieldOption: "Précisions",
    fieldPostal: "Code postal",
    fieldDate: "Date souhaitée",
    fieldSlot: "Créneau souhaité",
    fieldSites: "Nombre de sites",
    fieldRole: "Profil",
    fieldCompany: "Structure",
  },
  legal: {
    mentionsNav: "Mentions légales",
    cgvNav: "CGV",
    privacyNav: "Politique de confidentialité",
    pending: "En attente de confirmation client.",
    lastUpdated: "Dernière mise à jour",
  },
  booking: {
    title: "Créneau souhaité",
    lead: "Pour une intervention planifiée, indiquez quand cela vous arrange.",
    dateLabel: "Date souhaitée",
    timeLabel: "Créneau horaire souhaité",
    disclaimer:
      "Créneau indicatif : nous vous confirmons la disponibilité exacte par téléphone. Pour une urgence, appelez-nous directement.",
  },
  consent: {
    title: "Mesure d'audience",
    body: "Nous aimerions mesurer l'audience du site pour l'améliorer. Aucun cookie de mesure n'est déposé sans votre accord.",
    accept: "Accepter",
    decline: "Refuser",
  },
  meta: {
    homeTitle: "Serrurier à Paris, prix transparent",
    homeDescription:
      "Ouverture de porte, changement de serrure et blindage à Paris. Artisan indépendant, prix annoncé avant intervention, jamais de mauvaise surprise.",
    pricingTitle: "Prix serrurier Paris — grille tarifaire transparente",
    pricingDescription:
      "La grille tarifaire de nos interventions à Paris : ouverture de porte, changement de serrure, blindage. Tarif toujours annoncé avant travaux.",
    devisTitle: "Demande de devis serrurier Paris",
    devisDescription:
      "Vérifiez si nous intervenons dans votre secteur et décrivez votre besoin. Estimation avant tout déplacement, montant confirmé par écrit.",
    serviceDescriptionSuffix:
      "Artisan indépendant, montant fixé au téléphone avant le déplacement.",
    zonesTitle: "Zones d'intervention — serrurier à Paris et en Île-de-France",
    zonesDescription:
      "Les 20 arrondissements de Paris, les sept départements d'Île-de-France et nos villes couvertes ailleurs en France : ouverture de porte, changement de serrure et blindage, montant fixé avant le déplacement.",
    zoneDescriptionSuffix:
      "Ouverture de porte, changement de serrure, blindage. Artisan indépendant, montant fixé avant le déplacement.",
    // Zones marked coverage: "network" — no independent-artisan claim, because
    // that promise belongs to the zones we service directly. See ZoneCoverage.
    zoneDescriptionSuffixNetwork:
      "Ouverture de porte, changement de serrure, blindage. Couverture, délai et tarif confirmés avant tout déplacement.",
    contactTitle: "Contact — serrurier à Paris",
    contactDescription:
      "Contactez-nous par téléphone ou par message. Serrurier indépendant à Paris, disponible 24h/24 et 7j/7.",
    aboutTitle: "À propos — artisan serrurier à Paris",
    aboutDescription:
      "Qui intervient, avec quelles qualifications et quels engagements. Artisan indépendant joignable directement : le tarif est annoncé avant le déplacement.",
    guidesTitle: "Guides serrurerie — prix, sécurité et urgences",
    guidesDescription:
      "Nos guides sur le prix d'un serrurier à Paris, la lecture d'un devis, la norme A2P et les démarches d'assurance. Écrits pour être utiles, pas pour vendre.",
    inParis: "à Paris",
    // Price in the meta description is a CTR lever: the benchmark site puts one
    // in every description, and "à partir de X €" is exactly the answer the
    // query is looking for. {price} is substituted in lib/metadata.ts.
    priceSuffix: "Ouverture de porte à partir de {price}, déplacement inclus.",
    servicePriceSuffix: "À partir de {price}.",
  },
};

export type Dictionary = typeof fr;

const en: Dictionary = {
  nav: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    zones: "Areas",
    guides: "Guides",
    contact: "Contact",
  },
  common: {
    callNow: "Call now",
    callUs: "Call us",
    call: "Call",
    requestQuote: "Request a quote",
    requestProposal: "Request a proposal",
    phoneCall: "Phone call",
    whatsapp: "WhatsApp",
    whatsappHint: "Message us, send a photo of the lock",
    contactOptions: "Get in touch",
    orWhatsapp: "or message us on WhatsApp",
    viewPricing: "View pricing",
    learnMore: "Learn more",
    breadcrumb: "Breadcrumb",
    switchLanguage: "Change language",
    openMenu: "Open menu",
  },
  hero: {
    eyebrow: "Locksmith in Paris and Île-de-France",
    availableNow: "Available now",
    title: "Locksmith in Paris: price first, tools second.",
    lead: "Door opening, lock replacement, door reinforcement. You know the amount before the tradesperson sets off, and it is confirmed to you in writing before any work begins.",
    photoTitle: "A price that holds, from Paris across Île-de-France",
    photoAlt:
      "Paris rooftops and Haussmann façades, the area our locksmiths cover",
    stat1Value: "24/7",
    stat1Label: "availability",
    stat2Value: "€0",
    stat2Label: "gap between quote and invoice",
    badges: [
      "A2P certified",
      "Published price list, readable before you call",
      "One point of contact, from the first call to the invoice",
      "Written quote before work, whatever the amount",
      "Guarantee on our installations",
    ],
    formTitle: "Need a locksmith right now?",
    formLead:
      "Tell us what you need and we'll call you back with a clear price, before any work begins.",
    formCta: "Continue my request",
    fieldName: "Full name",
    fieldNamePlaceholder: "Your name",
    fieldPhone: "Phone number",
    fieldPhonePlaceholder: "06 XX XX XX XX",
    noPostalHelp: "Don't know your postcode?",
    noPostalCta: "Call us directly",
    geoOr: "or",
    geoCta: "Use my location",
    geoBusy: "Finding you…",
    geoNote:
      "Your position is only used to look up the address. It is not stored.",
    geoFound: "Address found",
    geoErrorDenied:
      "Location access was refused. Enter your postcode above instead.",
    geoErrorUnavailable:
      "Couldn't get your position. Enter your postcode above instead.",
    geoErrorTimeout:
      "Locating took too long. Enter your postcode above instead.",
    geoErrorLookup:
      "Address lookup is unavailable right now. Enter your postcode above instead.",
    geoErrorNoAddress:
      "No French address at that position. Enter your postcode above instead.",
  },
  trust: [
    {
      title: "On site in under 30 minutes, depending on the area",
      description:
        "Someone sets off the moment you call — day or night, weekends and public holidays included.",
    },
    {
      title: "The amount is settled on the phone",
      description:
        "You know what you'll pay before anyone travels, and that is the figure you settle once the job is done.",
    },
    {
      title: "A qualified, insured tradesperson",
      description:
        "You speak to the person handling your job, from the first call through to the invoice.",
    },
    {
      title: "Everything is in writing before we start",
      description:
        "A detailed quote before work, whatever the amount, under the French regulations of 24/01/2017.",
    },
    {
      title: "Guarantee on our installations",
      description:
        "Every installation is guaranteed. Exact terms are given with your written quote.",
    },
  ],
  trustNetwork: [
    {
      title: "Reachable at any hour",
      description:
        "By phone or on WhatsApp, day and night, weekends and public holidays included. You describe the situation, we answer.",
    },
    {
      title: "Coverage is confirmed before anyone travels",
      description:
        "From your postcode and your description, we tell you what we can do and how soon — before anybody sets off.",
    },
    {
      title: "The amount is settled before the job",
      description:
        "You know what you'll pay before anyone travels, and that is the figure you settle.",
    },
    {
      title: "Everything is in writing before we start",
      description:
        "A detailed quote before work, whatever the amount, under the French regulations of 24/01/2017.",
    },
    {
      title: "Guarantee on installations",
      description:
        "Every installation is guaranteed. Exact terms are given with your written quote.",
    },
  ],
  services: {
    eyebrow: "What we do",
    title: "Five services, one commitment to transparency",
    b2bEyebrow: "Businesses, shops and building managers",
    b2bTitle: "Responsible for premises, a building, or several sites?",
    b2bBody:
      "Securing commercial premises and maintenance contracts for businesses, retailers and property managers: a single point of contact, response times agreed in advance, and invoicing you can actually read.",
  },
  pricingTeaser: {
    eyebrow: "Transparent pricing",
    title: "A published list, kept current and readable any time",
    body: "Our prices are readable before you even call: a starting figure per job, how call-out and labour are calculated, night and weekend surcharges. You have everything you need before you decide.",
    cta: "View the price list",
  },
  footer: {
    tagline:
      "Door opening, lock replacement and door reinforcement in Paris, Île-de-France and a selection of towns across France. An independent tradesperson, amount settled before travel.",
    interventions: "Services",
    information: "Information",
    contact: "Contact",
    pricingGrid: "Price list",
    availability: "Available 24/7",
    area: "Paris and Île-de-France",
    rights: "All rights reserved.",
    identity: "Independent locksmith tradesperson, qualified and insured.",
    siretLabel: "SIRET",
    apeLabel: "APE code",
    writtenQuote:
      "A written quote is required before work, whatever the amount (French regulations of 24/01/2017). All prices shown include VAT.",
  },
  servicePage: {
    intervention: "The work",
    included: "What's included",
    whenToCall: "When to call us",
    priceTableTitle: "The price detail",
    zonesTitle: "Where we cover this service",
    zonesLead:
      "Paris and Île-de-France, at the same price everywhere: what varies by area is the time, not the price.",
    zonesCta: "See every area",
    price: "Price",
    guaranteeTitle: "Guarantee",
    guaranteeBody:
      "This work is covered by our guarantee on installations. Exact terms and duration are given with your written quote. We are qualified and insured for this service.",
    faq: "Frequently asked questions",
  },
  pricingPage: {
    eyebrow: "locksmith prices paris",
    title: "A transparent price list",
    lead: "Here is what each job costs, line by line. The price is settled with you on the phone, confirmed in writing before any work, and it is the one that appears on the invoice.",
    responseTime: "Response time: under 30 minutes depending on the area.",
    colIntervention: "Service",
    colPrice: "Price",
    from: "From",
    onQuote: "On quotation",
    optionsTitle: "Options and add-ons",
    optionsLead: "These add to the job price depending on the situation.",
    noticeTitle: "Indicative prices, starting from.",
    noticeBody:
      "The prices above cover the most common standard case. The exact price depends on the complexity on site (state of the lock, access, materials needed) and is given to you by phone before travel, then agreed with you before any work begins.",
    taxBasisTitle: "Prices inc. VAT, ex-VAT in brackets.",
    taxBasisBody:
      "Each line shows the price including French VAT at 20% first — what a private customer actually pays — then the ex-VAT figure, which businesses reclaiming VAT need. Some work on housing over two years old qualifies for a reduced rate: where it applies, the quote uses it and you pay less than the figure shown here, never more.",
    basisTitle: "How it's calculated.",
    basisBody:
      "The price depends on the type of job, the complexity of the lock, the call-out, and the time (daytime, night, weekend, public holiday).",
    writtenQuoteTitle: "Written quote required.",
    writtenQuoteBody:
      "Under French regulations in force since 24/01/2017, a written quote is always provided before work, whatever the amount.",
    questionTitle: "A question about a price?",
    questionBody:
      "Call us directly, or describe what you need to get an estimate before any work begins.",
  },
  devis: {
    eyebrow: "Quote request",
    title: "Request a call-out",
    lead: "Tell us your area, then describe what you need — you get an estimate before anyone travels.",
    step1Title: "Do we cover your area?",
    step1Lead: "Enter your postcode to check we cover your area.",
    postalLabel: "Postcode",
    postalPlaceholder: "75011",
    checkCta: "Check",
    postalInvalid: "Enter a valid 5-digit postcode.",
    postalParis: "You're in our service area in Paris.",
    postalIdf:
      "You're in Île-de-France, inside our service area. Travel time depends on the area — we tell you on the phone, along with the price.",
    postalNetwork:
      "Your town is one of the areas we cover. We confirm the timing and the price before anyone travels.",
    postalOther:
      "Leave your details below and we'll quickly confirm whether we can come to you, and how soon.",
    editPostal: "Edit postcode",
    closeForm: "Close the form",
    servicesLabel: "Type of work",
    servicesHint: "Select one or more if you already know what's needed.",
    notSureOption: "Not sure — I'll describe it in the message",
    optionsLabel: "Details",
    infoTitle: "Your details",
    infoHint: "Fields marked * are required.",
    fieldEmail: "Email",
    fieldEmailPlaceholder: "you@email.com",
    fieldAddress: "Full address",
    fieldAddressPlaceholder: "12 rue de la Paix, 75011 Paris",
    fieldMessage: "Message (optional)",
    fieldMessagePlaceholder: "Describe your situation…",
    submitCta: "Send my request",
    priceReassurance:
      "Prices above are indicative, starting from. The exact price is confirmed by phone before travel, and agreed with you before any work begins.",
    urgentTitle: "Need help right now?",
    urgentLead: "For an emergency, calling is still fastest.",
  },
  zonePage: {
    landmarksTitle: "Landmarks",
    neighborhoodsTitle: "Neighbourhoods covered",
    servicesTitle: "What we do in the area",
    faqTitle: "Frequently asked questions",
    ctaTitle: "Need a locksmith in the area?",
    ctaBody:
      "Call us directly for an emergency, or describe what you need to get an estimate before any work begins.",
    citiesTitle: "Towns with their own page",
    contextTitle: "What the local building stock actually changes",
    commonJobsTitle: "The jobs we're called out for most here",
    pricingLead:
      "The same prices as everywhere else in our service area: travel is already included, and it's the arrival time that varies between areas, never the price.",
    pricingTitle: "Our prices in this area",
    pricingCta: "See the full price list",
    processTitle: "How a call-out works",
    processSteps: [
      {
        title: "You call or message",
        body: "Describe the door and the situation. On the phone, or in writing on WhatsApp, you get the price of the job and a realistic arrival time for your street — not an unverifiable promise.",
      },
      {
        title: "The tradesperson comes and assesses",
        body: "On site they check the lock type and the state of the door, confirm the least destructive method available, and have the amount agreed before touching anything.",
      },
      {
        title: "Work, invoice and guarantee",
        body: "The job is done, tested in front of you, and billed at the agreed amount. The invoice itemises hardware and labour — the document your insurer or landlord will ask for.",
      },
    ],
    guidesTitle: "Worth reading before you call",
    guidesLead:
      "Our guides are written to be useful even if you end up calling someone else.",
    nearbyTitle: "Nearby areas",
    nearbyTitleNetwork: "Other towns we cover",
    trustTitle: "What doesn't change, whatever the area",
    otherCitiesTitle: "Other towns covered",
    notListedTitle: "Your town isn't on the list?",
    notListedBody:
      "The list above isn't exhaustive. Call us or enter your postcode: we'll confirm straight away whether we cover you, and at what price.",
    notListedCta: "Check my postcode",
    backToDepartment: "See the whole department",
  },
  zonesIndexPage: {
    eyebrow: "Areas we cover",
    title: "Locksmith in Paris and Île-de-France",
    lead: "We cover all 20 Paris arrondissements, the seven departments of Île-de-France and a selection of towns elsewhere in France. Pick your area for local information: neighbourhoods covered, landmarks, and the jobs we handle most often there.",
    parisTitle: "Paris, arrondissement by arrondissement",
    parisLead:
      "Every arrondissement has its own building stock, locks and access constraints. Our arrondissement pages say so concretely, rather than repeating one template twenty times.",
    nationalTitle: "Other towns in France",
    nationalLead:
      "Towns outside Île-de-France where we cover call-outs. Timing and price are confirmed before anyone travels.",
    idfTitle: "Île-de-France, by department",
    idfLead:
      "Inner and outer suburbs: houses, apartment blocks, commercial premises and managed buildings. Choose your department to see the towns covered.",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Contact us",
    lead: "A question, a project, or need a locksmith? Call us directly or leave us a message.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursLabel: "Availability",
    hoursValue: "24/7",
    areaLabel: "Area",
    areaValue: "Paris",
    formTitle: "Send a message",
    formLead:
      "For a quote request with an estimate, use our quote form instead.",
    devisBoxTitle: "Need an estimate?",
    devisBoxBody:
      "Check your area and describe what you need to get a price before anyone travels.",
    devisCta: "Request a quote",
    fieldMessage: "Your message",
    fieldMessagePlaceholder: "How can we help?",
    submitCta: "Send",
  },
  reviews: {
    title: "What our customers say",
    lead: "Verified reviews, or none at all. We publish no overall rating until every review shown can be verified one by one.",
    sampleNotice:
      "Layout sample. These are test entries, not real customers — they render in development only and are replaced by verified reviews before launch.",
    interventionLabel: "Job",
    noneYetTitle: "No published reviews yet",
    noneYetBody:
      "We'd rather show an empty section than invented testimonials. The first verified reviews will appear here, with the area and the type of job.",
  },
  aboutPage: {
    eyebrow: "The tradesperson",
    title: "Who actually turns up",
    lead: "You reach the tradesperson handling your job directly — and they're the one who quotes the price.",
    storyTitle: "An independent tradesperson, reachable directly",
    story: [
      "The figure given on the phone is the one on the written quote, and then on the invoice. That works because the person who assesses the job is also the person who does it.",
      "You have one point of contact, from the first call through to the invoice. They know their area, its buildings and its locks, which is what makes an accurate assessment possible before anyone travels. That is what makes the price list we publish possible.",
    ],
    credentialsTitle: "Qualifications and guarantees",
    credentials: [
      "Independent locksmith tradesperson, qualified and insured for every service published on this site.",
      "Guarantee on installations: exact terms and duration are provided with the written quote.",
      "A written quote as standard before work, whatever the amount, under the French regulations of 24 January 2017 on home repair call-outs.",
      "An itemised invoice after every job, usable for an insurance claim or a request to a landlord.",
      "Proof of the right of access checked before any opening: ID, a bill or a tenancy document.",
    ],
    identityTitle: "Business identity",
    identityPending:
      "The SIRET and APE registration numbers will be published here and in the footer as soon as they're available. We'd rather show a missing line than an approximate number: a wrong identifier is worse than none.",
    commitmentsTitle: "Our commitments, in plain terms",
    commitments: [
      {
        title: "The price is quoted before we travel",
        body: 'On the phone or in writing on WhatsApp, for your specific case. Never "it depends, the technician will see on site".',
      },
      {
        title: "The least destructive method first",
        body: "Drilling is the last resort, never the default, and it's explained and priced before it happens.",
      },
      {
        title: "No invented reviews",
        body: "We publish no overall rating and no testimonials until the reviews shown can be verified one by one.",
      },
      {
        title: "Adjustment before replacement",
        body: "A jamming lock isn't always a lock to change. Diagnosis comes before the sale.",
      },
    ],
  },
  homeSections: {
    processEyebrow: "How it works",
    processTitleShort: "Three steps, no surprises",
    processStepsShort: [
      {
        title: "You call",
        body: "The price and the arrival time, agreed before anyone sets off.",
      },
      {
        title: "Confirmed at your door",
        body: "The door is checked and the amount approved before anything starts.",
      },
      {
        title: "Open, invoiced, guaranteed",
        body: "Tested in front of you, itemised invoice, guaranteed work.",
      },
    ],
    coverageTitle: "Where we work",
    coverageBody:
      "All 20 Paris arrondissements and the seven departments of Île-de-France, at the same price everywhere. What changes between areas is the time — quoted on the phone before the tradesperson sets off.",
    guidesCta: "Read every guide",
  },
  taskPage: {
    eyebrow: "Emergency situations",
    title: "Your situation, on one page",
    lead: "What's happening to you has a name, a price and a course of action. Pick the case that matches: you'll know what to do in the next five minutes, and what it costs.",
    symptomsTitle: "This is your situation if…",
    doNowTitle: "Do this now",
    avoidTitle: "Do not do this",
    howWeFixTitle: "How we deal with it",
    priceTitle: "What it costs",
    priceNote:
      "Starting prices including VAT, travel included. The exact amount is confirmed on the phone before anyone travels, and agreed on site before work begins.",
    serviceLabel: "The service",
    guideLabel: "The full guide",
  },
  guidesIndexPage: {
    eyebrow: "Guides",
    title: "What to know before you call a locksmith",
    lead: "What a call-out actually costs, how to read a quote, what to do at 2am in front of a door that has shut behind you. Written to be useful even if you never call us.",
  },
  guidePage: {
    takeawaysTitle: "The short version",
    urgentTitle: "Standing in front of the door right now?",
    urgentBody:
      "Don't read this guide. Call, or open the step-by-step page for your situation.",
    tocTitle: "In this guide",
    expandHint: "Expand",
    faqTitle: "Frequently asked questions",
    relatedTitle: "Read next",
    updatedLabel: "Updated",
    readingTime: "min read",
    ctaTitle: "A question about your own situation?",
    ctaBody:
      "Describe it and you'll get an answer and a price range before anyone travels. For an emergency, calling is still fastest.",
  },
  b2bForm: {
    title: "Business enquiry",
    lead: "Company, shop, building manager or landlord: describe what you need and we'll come back with a costed proposal and a contractual response time.",
    fieldCompany: "Company or building",
    fieldCompanyPlaceholder: "Name of the organisation",
    fieldRole: "You are",
    roleEntreprise: "A business",
    roleCommercant: "A retailer",
    roleSyndic: "A building manager (syndic)",
    roleBailleur: "A landlord or property manager",
    roleAutre: "Other",
    fieldSites: "Number of sites involved",
    fieldSitesPlaceholder: "1",
    fieldNeed: "What you need",
    fieldNeedPlaceholder:
      "Lock estate to take over, access control, on-call cover, repairs after a break-in…",
    submitCta: "Send the enquiry",
    note: "Reply within one working day. No commitment: the proposal is costed before any work.",
  },
  submit: {
    sendingTitle: "Sending your request…",
    sendingBody: "One moment — we're passing your request to the workshop.",
    sentTitle: "Request sent",
    sentBody:
      "We've got it. A locksmith will call you back with a price agreed before anyone travels.",
    failedTitle: "That didn't go through",
    failedBody:
      "Nothing is lost: your summary is ready below. Send it on WhatsApp, or call us — that's fastest.",
    emailedCopy: "We've received your request and emailed you a copy.",
    checkInbox: "Check my inbox",
    toastSent: "Request submitted",
    whatsappFollowUp:
      "Urgent, or would you rather follow up in writing? Send the summary on WhatsApp too.",
    sendWhatsapp: "Send on WhatsApp",
    orCall: "Or call us directly",
    summaryLabel: "Summary sent",
    editRequest: "Edit my request",
    quoteHeader: "Quote request — parisunlockdoor.fr",
    contactHeader: "Message from parisunlockdoor.fr",
    proHeader: "Business enquiry — parisunlockdoor.fr",
    fieldService: "Service",
    fieldOption: "Details",
    fieldPostal: "Postcode",
    fieldDate: "Preferred date",
    fieldSlot: "Preferred slot",
    fieldSites: "Number of sites",
    fieldRole: "Profile",
    fieldCompany: "Organisation",
  },
  legal: {
    mentionsNav: "Legal notice",
    cgvNav: "Terms of service",
    privacyNav: "Privacy policy",
    pending: "Pending client confirmation.",
    lastUpdated: "Last updated",
  },
  booking: {
    title: "Preferred slot",
    lead: "For a planned job, tell us when suits you.",
    dateLabel: "Preferred date",
    timeLabel: "Preferred time of day",
    disclaimer:
      "This is a preference, not a confirmed booking — we'll confirm exact availability by phone. For an emergency, call us directly.",
  },
  consent: {
    title: "Audience measurement",
    body: "We'd like to measure site traffic to improve it. No measurement cookie is set without your agreement.",
    accept: "Accept",
    decline: "Decline",
  },
  meta: {
    homeTitle: "Locksmith in Paris, transparent pricing",
    homeDescription:
      "Door opening, lock replacement and door reinforcement in Paris. An independent tradesperson, price quoted before any work, never a nasty surprise.",
    pricingTitle: "Locksmith prices Paris — transparent price list",
    pricingDescription:
      "The price list for our work in Paris: door opening, lock replacement, door reinforcement. The price is always quoted before any work.",
    devisTitle: "Request a locksmith quote in Paris",
    devisDescription:
      "Check we cover your area and describe what you need. An estimate before anyone travels, with the amount confirmed in writing.",
    serviceDescriptionSuffix:
      "Independent tradesperson, amount settled on the phone before travel.",
    zonesTitle: "Areas we cover — locksmith in Paris and Île-de-France",
    zonesDescription:
      "All 20 Paris arrondissements, the seven departments of Île-de-France and the towns we cover elsewhere in France: door opening, lock replacement and door reinforcement, amount settled before travel.",
    zoneDescriptionSuffix:
      "Door opening, lock replacement, door reinforcement. Independent tradesperson, amount settled before travel.",
    zoneDescriptionSuffixNetwork:
      "Door opening, lock replacement, door reinforcement. Coverage, timing and price confirmed before anyone travels.",
    contactTitle: "Contact — locksmith in Paris",
    contactDescription:
      "Get in touch by phone or message. Independent locksmith in Paris, available 24/7.",
    aboutTitle: "About — independent locksmith in Paris",
    aboutDescription:
      "Who turns up, with what qualifications and what commitments. An independent tradesperson, reachable directly: the price is quoted before anyone travels.",
    guidesTitle: "Locksmith guides — prices, security and emergencies",
    guidesDescription:
      "Our guides to what a locksmith costs in Paris, how to read a quote, the A2P standard and insurance claims. Written to be useful, not to sell.",
    inParis: "in Paris",
    priceSuffix: "Door opening from {price}, call-out included.",
    servicePriceSuffix: "From {price}.",
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { fr, en };

export function getDictionary(lang: Locale): Dictionary {
  return DICTIONARIES[lang];
}
