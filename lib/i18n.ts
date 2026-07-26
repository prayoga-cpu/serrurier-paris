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
    contact: "Contact",
  },
  common: {
    callNow: "Appeler maintenant",
    callUs: "Appelez-nous",
    call: "Appeler",
    requestQuote: "Demander un devis",
    viewPricing: "Voir les tarifs",
    learnMore: "En savoir plus",
    breadcrumb: "Fil d'Ariane",
    switchLanguage: "Changer de langue",
    openMenu: "Ouvrir le menu",
  },
  hero: {
    eyebrow: "#1 Serrurier à Paris",
    availableNow: "Disponible maintenant",
    title: "Le prix qu'on vous annonce est le prix que vous payez.",
    lead: "Ouverture de porte, changement de serrure, blindage. Un artisan indépendant se déplace, annonce le tarif avant d'intervenir, et s'y tient. Pas de centre d'appel, pas de mauvaise surprise.",
    photoTitle: "Interventions honnêtes, dans tout Paris",
    stat1Value: "24/7",
    stat1Label: "disponibilité",
    stat2Value: "100%",
    stat2Label: "devis avant travaux",
    badges: [
      "Certifié A2P",
      "Prix transparent affiché",
      "Artisan indépendant, pas un centre d'appel",
      "Devis écrit avant travaux",
      "Garantie sur nos installations",
    ],
    formTitle: "Besoin d'un serrurier maintenant ?",
    formLead:
      "Décrivez votre besoin, on vous rappelle avec un prix clair, avant toute intervention.",
    fieldName: "Nom complet",
    fieldNamePlaceholder: "Votre nom",
    fieldPhone: "Numéro de téléphone",
    fieldPhonePlaceholder: "06 XX XX XX XX",
    noPostalHelp: "Vous ne connaissez pas votre code postal ?",
    noPostalCta: "Appelez-nous directement",
  },
  trust: [
    {
      title: "Intervention rapide",
      description: "Un artisan se déplace dès votre appel, disponible 7j/7.",
    },
    {
      title: "Prix annoncé avant travaux",
      description:
        "Le tarif est communiqué et validé avant toute intervention.",
    },
    {
      title: "Artisan, pas un centre d'appel",
      description:
        "Vous parlez directement à la personne qui intervient chez vous.",
    },
    {
      title: "Devis écrit systématique",
      description:
        "Au-delà de 150€, un devis écrit est fourni, comme l'exige la loi.",
    },
    {
      title: "Garantie sur nos installations",
      description:
        "Chaque installation est garantie. Les conditions exactes vous sont communiquées avec votre devis.",
    },
  ],
  services: {
    eyebrow: "Nos interventions",
    title: "Cinq interventions, un même engagement de transparence",
  },
  pricingTeaser: {
    eyebrow: "Prix transparent",
    title: "Le tarif que vous voyez est le tarif que vous payez",
    body: "Aucun montant caché, aucune majoration surprise à l'arrivée. La grille tarifaire complète est publique, avec la base de calcul du déplacement et de la main d'œuvre.",
    cta: "Voir la grille tarifaire",
  },
  footer: {
    tagline:
      "Ouverture de porte, changement de serrure et blindage à Paris. Artisan indépendant, tarif annoncé avant intervention.",
    interventions: "Interventions",
    information: "Informations",
    contact: "Contact",
    pricingGrid: "Grille tarifaire",
    availability: "Disponible 24h/24, 7j/7",
    area: "Intervention à Paris",
    rights: "Tous droits réservés.",
  },
  servicePage: {
    intervention: "L'intervention",
    included: "Ce qui est inclus",
    price: "Tarif",
    guaranteeTitle: "Garantie",
    guaranteeBody:
      "Cette intervention est couverte par notre garantie sur les installations. Les conditions et la durée exactes sont communiquées avec votre devis écrit. Nous sommes qualifiés et assurés pour cette prestation.",
    faq: "Questions fréquentes",
  },
  pricingPage: {
    eyebrow: "prix serrurier paris",
    title: "Une grille tarifaire transparente",
    lead: "La serrurerie parisienne compte parmi les secteurs les plus signalés par la DGCCRF pour des anomalies de prix. Notre position est simple : le tarif annoncé au téléphone ou par écrit est celui que vous payez, sans majoration à l'arrivée.",
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
      "Les prix ci-dessus couvrent le cas standard le plus courant. Le tarif exact dépend de la complexité sur place (état de la serrure, accès, matériel nécessaire) et vous est communiqué par téléphone avant le déplacement, puis validé avec vous avant toute intervention — jamais de majoration surprise à l'arrivée.",
    basisTitle: "Base de calcul.",
    basisBody:
      "Le tarif dépend du type d'intervention, de la complexité de la serrure, du déplacement et de l'horaire (jour, nuit, week-end, jour férié).",
    writtenQuoteTitle: "Devis écrit obligatoire.",
    writtenQuoteBody:
      "Conformément à la réglementation en vigueur depuis le 24/01/2017, un devis écrit est systématiquement fourni pour toute intervention dépassant 150€.",
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
    postalOther:
      "Nous intervenons principalement à Paris. Laissez vos coordonnées ci-dessous : nous vous confirmons rapidement si nous pouvons intervenir chez vous.",
    editPostal: "Modifier le code postal",
    collapseForm: "Réduire le formulaire",
    expandForm: "Afficher le formulaire",
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
  },
  zonesIndexPage: {
    eyebrow: "Zones d'intervention",
    title: "Serrurier à Paris, par arrondissement",
    lead: "Nous intervenons dans plusieurs arrondissements de Paris. Sélectionnez le vôtre pour des informations locales : quartiers desservis, points de repère et interventions courantes.",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Contactez-nous",
    lead: "Une question, un projet, ou besoin d'un serrurier ? Appelez-nous directement ou laissez-nous un message.",
    phoneLabel: "Téléphone",
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
      "Vérifiez si nous intervenons dans votre secteur et décrivez votre besoin. Estimation avant tout déplacement, aucune majoration surprise.",
    serviceDescriptionSuffix:
      "Intervention par un artisan indépendant, tarif annoncé avant travaux.",
    zonesTitle: "Zones d'intervention — serrurier à Paris",
    zonesDescription:
      "Découvrez les arrondissements de Paris où nous intervenons : ouverture de porte, changement de serrure et blindage, tarif annoncé avant travaux.",
    zoneDescriptionSuffix:
      "Ouverture de porte, changement de serrure, blindage. Artisan indépendant, tarif annoncé avant travaux.",
    contactTitle: "Contact — serrurier à Paris",
    contactDescription:
      "Contactez-nous par téléphone ou par message. Serrurier indépendant à Paris, disponible 24h/24 et 7j/7.",
    inParis: "à Paris",
  },
};

export type Dictionary = typeof fr;

const en: Dictionary = {
  nav: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    zones: "Areas",
    contact: "Contact",
  },
  common: {
    callNow: "Call now",
    callUs: "Call us",
    call: "Call",
    requestQuote: "Request a quote",
    viewPricing: "View pricing",
    learnMore: "Learn more",
    breadcrumb: "Breadcrumb",
    switchLanguage: "Change language",
    openMenu: "Open menu",
  },
  hero: {
    eyebrow: "#1 Locksmith in Paris",
    availableNow: "Available now",
    title: "The price we quote is the price you pay.",
    lead: "Door opening, lock replacement, door reinforcement. An independent tradesperson comes out, quotes the price before starting, and sticks to it. No call centre, no nasty surprises.",
    photoTitle: "Honest call-outs, across Paris",
    stat1Value: "24/7",
    stat1Label: "availability",
    stat2Value: "100%",
    stat2Label: "quoted before work",
    badges: [
      "A2P certified",
      "Transparent published pricing",
      "An independent tradesperson, not a call centre",
      "Written quote before any work",
      "Guarantee on our installations",
    ],
    formTitle: "Need a locksmith right now?",
    formLead:
      "Tell us what you need and we'll call you back with a clear price, before any work begins.",
    fieldName: "Full name",
    fieldNamePlaceholder: "Your name",
    fieldPhone: "Phone number",
    fieldPhonePlaceholder: "06 XX XX XX XX",
    noPostalHelp: "Don't know your postcode?",
    noPostalCta: "Call us directly",
  },
  trust: [
    {
      title: "Fast call-out",
      description:
        "A tradesperson sets off as soon as you call, available 7 days a week.",
    },
    {
      title: "Price quoted before work",
      description: "The price is given and agreed before any work begins.",
    },
    {
      title: "A tradesperson, not a call centre",
      description: "You speak directly to the person who comes to your door.",
    },
    {
      title: "Written quote as standard",
      description:
        "Above €150 a written quote is provided, as French law requires.",
    },
    {
      title: "Guarantee on our installations",
      description:
        "Every installation is guaranteed. Exact terms are given with your written quote.",
    },
  ],
  services: {
    eyebrow: "What we do",
    title: "Five services, one commitment to transparency",
  },
  pricingTeaser: {
    eyebrow: "Transparent pricing",
    title: "The price you see is the price you pay",
    body: "No hidden charges, no surprise surcharge on arrival. The full price list is public, including how call-out and labour are calculated.",
    cta: "View the price list",
  },
  footer: {
    tagline:
      "Door opening, lock replacement and door reinforcement in Paris. An independent tradesperson, price quoted before any work.",
    interventions: "Services",
    information: "Information",
    contact: "Contact",
    pricingGrid: "Price list",
    availability: "Available 24/7",
    area: "Serving Paris",
    rights: "All rights reserved.",
  },
  servicePage: {
    intervention: "The work",
    included: "What's included",
    price: "Price",
    guaranteeTitle: "Guarantee",
    guaranteeBody:
      "This work is covered by our guarantee on installations. Exact terms and duration are given with your written quote. We are qualified and insured for this service.",
    faq: "Frequently asked questions",
  },
  pricingPage: {
    eyebrow: "locksmith prices paris",
    title: "A transparent price list",
    lead: "Locksmithing in Paris is among the sectors most reported to the DGCCRF, the French consumer authority, for pricing irregularities. Our position is simple: the price quoted by phone or in writing is the price you pay, with no surcharge on arrival.",
    responseTime: "Response time: under 30 minutes depending on the area.",
    colIntervention: "Service",
    colPrice: "Price",
    from: "From",
    onQuote: "On quotation",
    optionsTitle: "Options and add-ons",
    optionsLead: "These add to the job price depending on the situation.",
    noticeTitle: "Indicative prices, starting from.",
    noticeBody:
      "The prices above cover the most common standard case. The exact price depends on the complexity on site (state of the lock, access, materials needed) and is given to you by phone before travel, then agreed with you before any work begins — never a surprise surcharge on arrival.",
    basisTitle: "How it's calculated.",
    basisBody:
      "The price depends on the type of job, the complexity of the lock, the call-out, and the time (daytime, night, weekend, public holiday).",
    writtenQuoteTitle: "Written quote required.",
    writtenQuoteBody:
      "Under French regulations in force since 24/01/2017, a written quote is always provided for any job exceeding €150.",
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
    postalOther:
      "We mainly cover Paris. Leave your details below and we'll quickly confirm whether we can come to you.",
    editPostal: "Edit postcode",
    collapseForm: "Collapse form",
    expandForm: "Show form",
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
  },
  zonesIndexPage: {
    eyebrow: "Areas we cover",
    title: "Locksmith in Paris, by arrondissement",
    lead: "We cover several arrondissements across Paris. Pick yours for local information: neighbourhoods covered, landmarks, and the jobs we handle most often there.",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Contact us",
    lead: "A question, a project, or need a locksmith? Call us directly or leave us a message.",
    phoneLabel: "Phone",
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
      "Check we cover your area and describe what you need. An estimate before anyone travels, never a surprise surcharge.",
    serviceDescriptionSuffix:
      "Carried out by an independent tradesperson, price quoted before any work.",
    zonesTitle: "Areas we cover — locksmith in Paris",
    zonesDescription:
      "See the Paris arrondissements we cover: door opening, lock replacement and door reinforcement, price quoted before any work.",
    zoneDescriptionSuffix:
      "Door opening, lock replacement, door reinforcement. Independent tradesperson, price quoted before any work.",
    contactTitle: "Contact — locksmith in Paris",
    contactDescription:
      "Get in touch by phone or message. Independent locksmith in Paris, available 24/7.",
    inParis: "in Paris",
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { fr, en };

export function getDictionary(lang: Locale): Dictionary {
  return DICTIONARIES[lang];
}
