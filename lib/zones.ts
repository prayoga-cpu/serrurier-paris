import type { Locale } from "@/lib/i18n";

export type ZoneFaq = { question: string; answer: string };

export type ZoneContent = {
  title: string;
  keyword: string;
  intro: string;
  landmarks: string[];
  neighborhoods: string[];
  faq: ZoneFaq[];
};

// Real per-arrondissement content — landmarks, neighbourhood names and local
// character, not templated duplicates. See CLAUDE.md §4: "genuinely
// localized... thin duplicate zone pages get filtered by Google."
export type Zone = {
  number: string;
  slug: string;
  content: Record<Locale, ZoneContent>;
};

export type LocalizedZone = ZoneContent & { number: string; slug: string };

export const ZONES: Zone[] = [
  {
    number: "1",
    slug: "serrurier-paris-1",
    content: {
      fr: {
        title: "Serrurier Paris 1er",
        keyword: "serrurier paris 1",
        intro:
          "Le 1er arrondissement concentre le Louvre, le Palais-Royal, les Halles et l'île de la Cité — un mélange de bâtiments haussmanniens anciens, d'immeubles historiques autour du Palais-Royal et de commerces à forte affluence touristique. Les serrures d'origine, parfois anciennes, et les portes cochères typiques du quartier demandent une bonne connaissance des mécanismes en place.",
        landmarks: [
          "Le Louvre",
          "Le Palais-Royal",
          "Les Halles",
          "Île de la Cité",
          "Pont Neuf",
          "Jardin des Tuileries",
        ],
        neighborhoods: [
          "Les Halles",
          "Palais-Royal",
          "Saint-Germain-l'Auxerrois",
          "Place Vendôme",
        ],
        faq: [
          {
            question: "Intervenez-vous près du Louvre et des Halles ?",
            answer:
              "Oui, nous intervenons dans tout le 1er arrondissement, y compris les zones à forte fréquentation touristique comme le Louvre, le Palais-Royal et les Halles.",
          },
          {
            question:
              "Les immeubles anciens du 1er ont-ils des serrures particulières ?",
            answer:
              "Beaucoup d'immeubles du centre historique ont conservé des serrures ou portes cochères d'origine. L'artisan évalue le mécanisme en place avant de proposer une intervention adaptée, sans dégât inutile.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 1st arrondissement",
        keyword: "locksmith paris 1st arrondissement",
        intro:
          "The 1st arrondissement is home to the Louvre, the Palais-Royal, Les Halles and Île de la Cité — a mix of Haussmann-era buildings, historic apartments around the Palais-Royal, and high-footfall tourist-facing shops. Original, sometimes older locks and the neighbourhood's characteristic carriage doors call for real familiarity with the mechanisms already in place.",
        landmarks: [
          "The Louvre",
          "Palais-Royal",
          "Les Halles",
          "Île de la Cité",
          "Pont Neuf",
          "Tuileries Garden",
        ],
        neighborhoods: [
          "Les Halles",
          "Palais-Royal",
          "Saint-Germain-l'Auxerrois",
          "Place Vendôme",
        ],
        faq: [
          {
            question: "Do you cover the area around the Louvre and Les Halles?",
            answer:
              "Yes, we cover the whole 1st arrondissement, including high-footfall tourist areas like the Louvre, Palais-Royal and Les Halles.",
          },
          {
            question: "Do older buildings in the 1st have unusual locks?",
            answer:
              "Many buildings in the historic centre still have their original locks or carriage-door mechanisms. The tradesperson assesses what's in place before proposing a fix, without unnecessary damage.",
          },
        ],
      },
    },
  },
  {
    number: "2",
    slug: "serrurier-paris-2",
    content: {
      fr: {
        title: "Serrurier Paris 2e",
        keyword: "serrurier paris 2",
        intro:
          "Le 2e arrondissement mêle le quartier d'affaires de la Bourse, le Sentier et ses grossistes textiles, et les passages couverts historiques comme le passage des Panoramas. Rideaux métalliques de boutiques, portes d'entrepôts et immeubles de bureaux côtoient des logements résidentiels — chaque type de fermeture demande une approche différente.",
        landmarks: [
          "La Bourse de Paris",
          "Le Sentier",
          "Les Grands Boulevards",
          "Passage des Panoramas",
        ],
        neighborhoods: ["Bourse", "Sentier", "Vivienne", "Gaillon"],
        faq: [
          {
            question:
              "Intervenez-vous sur les rideaux métalliques de commerce ?",
            answer:
              "Nous intervenons sur les serrures de boutiques et de rideaux métalliques bloqués, en plus des ouvertures et changements de serrure classiques pour les logements.",
          },
          {
            question: "Le quartier du Sentier est-il couvert ?",
            answer:
              "Oui, tout le 2e arrondissement est couvert, du Sentier à la Bourse en passant par les Grands Boulevards.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 2nd arrondissement",
        keyword: "locksmith paris 2nd arrondissement",
        intro:
          "The 2nd arrondissement combines the Bourse business district, the Sentier textile wholesale quarter, and historic covered passages like Passage des Panoramas. Shop shutters, warehouse doors and office buildings sit alongside residential flats — each type of lock calls for a different approach.",
        landmarks: [
          "Paris Stock Exchange (Bourse)",
          "Sentier",
          "Grands Boulevards",
          "Passage des Panoramas",
        ],
        neighborhoods: ["Bourse", "Sentier", "Vivienne", "Gaillon"],
        faq: [
          {
            question: "Do you work on shop shutters?",
            answer:
              "We work on shop locks and jammed metal shutters, as well as standard door openings and lock replacements for homes.",
          },
          {
            question: "Is the Sentier area covered?",
            answer:
              "Yes, the whole 2nd arrondissement is covered, from Sentier to the Bourse and the Grands Boulevards.",
          },
        ],
      },
    },
  },
  {
    number: "10",
    slug: "serrurier-paris-10",
    content: {
      fr: {
        title: "Serrurier Paris 10e",
        keyword: "serrurier paris 10",
        intro:
          "Le 10e arrondissement s'étend des gares du Nord et de l'Est jusqu'au canal Saint-Martin. C'est un secteur à très forte affluence, avec un parc immobilier ancien près des gares et des immeubles plus récents autour du canal. La densité de passage justifie une vigilance particulière sur la sécurisation des accès.",
        landmarks: [
          "Gare du Nord",
          "Gare de l'Est",
          "Canal Saint-Martin",
          "Place de la République (bordure)",
        ],
        neighborhoods: [
          "Gare du Nord",
          "Gare de l'Est",
          "Canal Saint-Martin",
          "Porte Saint-Martin",
        ],
        faq: [
          {
            question: "Intervenez-vous près des gares du Nord et de l'Est ?",
            answer:
              "Oui, nous couvrons l'ensemble du 10e arrondissement, y compris les secteurs proches des deux gares.",
          },
          {
            question: "Le quartier du canal Saint-Martin est-il concerné ?",
            answer:
              "Tout à fait, nous intervenons dans tout le 10e, du canal Saint-Martin aux abords des gares.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 10th arrondissement",
        keyword: "locksmith paris 10th arrondissement",
        intro:
          "The 10th arrondissement runs from Gare du Nord and Gare de l'Est down to Canal Saint-Martin. It's a high-footfall area, with older building stock near the stations and more recent developments around the canal. That density makes securing entry points a real priority.",
        landmarks: [
          "Gare du Nord",
          "Gare de l'Est",
          "Canal Saint-Martin",
          "Place de la République (edge)",
        ],
        neighborhoods: [
          "Gare du Nord",
          "Gare de l'Est",
          "Canal Saint-Martin",
          "Porte Saint-Martin",
        ],
        faq: [
          {
            question:
              "Do you cover the area near Gare du Nord and Gare de l'Est?",
            answer:
              "Yes, we cover the whole 10th arrondissement, including the areas near both stations.",
          },
          {
            question: "Is the Canal Saint-Martin area included?",
            answer:
              "Yes, we cover the whole 10th arrondissement, from Canal Saint-Martin to the areas around the stations.",
          },
        ],
      },
    },
  },
  {
    number: "11",
    slug: "serrurier-paris-11",
    content: {
      fr: {
        title: "Serrurier Paris 11e",
        keyword: "serrurier paris 11",
        intro:
          "Le 11e arrondissement, entre Bastille, Oberkampf et République, est l'un des plus densément peuplés de Paris. Immeubles résidentiels avec digicode, forte rotation de locataires et vie nocturne animée autour d'Oberkampf : les demandes de changement de serrure y sont fréquentes, notamment après un déménagement.",
        landmarks: [
          "Place de la Bastille",
          "Rue Oberkampf",
          "Place de la République",
          "Cirque d'Hiver",
        ],
        neighborhoods: [
          "Bastille",
          "Oberkampf",
          "Folie-Méricourt",
          "Sainte-Marguerite",
        ],
        faq: [
          {
            question: "Faut-il changer sa serrure en emménageant dans le 11e ?",
            answer:
              "C'est recommandé : le 11e a une forte rotation de locataires, et changer la serrure garantit qu'aucun ancien jeu de clés ne circule encore.",
          },
          {
            question: "Intervenez-vous la nuit autour d'Oberkampf ?",
            answer:
              "Oui, nous intervenons 24h/24 et 7j/7 dans tout le 11e, y compris les nuits de week-end autour d'Oberkampf.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 11th arrondissement",
        keyword: "locksmith paris 11th arrondissement",
        intro:
          "The 11th arrondissement, between Bastille, Oberkampf and République, is one of the most densely populated in Paris. Residential buildings with keypad entry, high tenant turnover and a lively nightlife scene around Oberkampf mean lock-change requests are common, especially after moving in.",
        landmarks: [
          "Place de la Bastille",
          "Rue Oberkampf",
          "Place de la République",
          "Cirque d'Hiver",
        ],
        neighborhoods: [
          "Bastille",
          "Oberkampf",
          "Folie-Méricourt",
          "Sainte-Marguerite",
        ],
        faq: [
          {
            question: "Should I change the lock when moving into the 11th?",
            answer:
              "It's recommended: the 11th has high tenant turnover, and changing the lock guarantees no old key set still gives access.",
          },
          {
            question: "Do you work nights around Oberkampf?",
            answer:
              "Yes, we cover the whole 11th arrondissement 24/7, including weekend nights around Oberkampf.",
          },
        ],
      },
    },
  },
  {
    number: "18",
    slug: "serrurier-paris-18",
    content: {
      fr: {
        title: "Serrurier Paris 18e",
        keyword: "serrurier paris 18",
        intro:
          "Le 18e arrondissement va du village de Montmartre et du Sacré-Cœur jusqu'aux rues animées de Barbès et Château Rouge. Ruelles pavées et immeubles historiques à Montmartre, habitat plus dense côté Barbès : le secteur demande une bonne connaissance des différents types de bâtis, du plus ancien au plus récent.",
        landmarks: [
          "Sacré-Cœur",
          "Montmartre",
          "Moulin Rouge",
          "Barbès-Rochechouart",
        ],
        neighborhoods: [
          "Montmartre",
          "Barbès",
          "Château Rouge",
          "La Goutte d'Or",
        ],
        faq: [
          {
            question: "Intervenez-vous dans les ruelles de Montmartre ?",
            answer:
              "Oui, y compris dans les rues piétonnes et pavées où l'accès est plus difficile pour un véhicule.",
          },
          {
            question: "Le secteur de Barbès est-il couvert ?",
            answer:
              "Oui, nous intervenons dans tout le 18e arrondissement, de Montmartre à Barbès et Château Rouge.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 18th arrondissement",
        keyword: "locksmith paris 18th arrondissement",
        intro:
          "The 18th arrondissement runs from the village-like streets of Montmartre and the Sacré-Cœur down to the busy streets of Barbès and Château Rouge. Cobbled lanes and historic buildings in Montmartre, denser housing towards Barbès: the area calls for real familiarity with building types old and new.",
        landmarks: [
          "Sacré-Cœur",
          "Montmartre",
          "Moulin Rouge",
          "Barbès-Rochechouart",
        ],
        neighborhoods: [
          "Montmartre",
          "Barbès",
          "Château Rouge",
          "La Goutte d'Or",
        ],
        faq: [
          {
            question: "Do you cover Montmartre's narrow streets?",
            answer:
              "Yes, including pedestrian and cobbled streets that are harder to reach by vehicle.",
          },
          {
            question: "Is the Barbès area covered?",
            answer:
              "Yes, we cover the whole 18th arrondissement, from Montmartre to Barbès and Château Rouge.",
          },
        ],
      },
    },
  },
  {
    number: "20",
    slug: "serrurier-paris-20",
    content: {
      fr: {
        title: "Serrurier Paris 20e",
        keyword: "serrurier paris 20",
        intro:
          "Le 20e arrondissement, entre Belleville, Ménilmontant et le cimetière du Père Lachaise, est un secteur vallonné à l'est de Paris. Bâti ancien de Belleville, immeubles plus récents près de la Porte de Bagnolet : la topographie et la diversité du parc immobilier font partie des spécificités du quartier.",
        landmarks: [
          "Cimetière du Père Lachaise",
          "Belleville",
          "Ménilmontant",
          "Parc de Belleville",
        ],
        neighborhoods: [
          "Belleville",
          "Ménilmontant",
          "Saint-Fargeau",
          "Charonne",
        ],
        faq: [
          {
            question: "Intervenez-vous près du Père Lachaise ?",
            answer:
              "Oui, nous intervenons dans tout le 20e arrondissement, y compris les rues autour du cimetière du Père Lachaise.",
          },
          {
            question: "Belleville et Ménilmontant sont-ils couverts ?",
            answer:
              "Oui, tout le 20e est couvert, de Belleville à Ménilmontant jusqu'à la Porte de Bagnolet.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 20th arrondissement",
        keyword: "locksmith paris 20th arrondissement",
        intro:
          "The 20th arrondissement, between Belleville, Ménilmontant and Père Lachaise cemetery, is a hilly district in eastern Paris. Older buildings around Belleville, more recent blocks near Porte de Bagnolet: the terrain and the mix of building stock are part of what defines the area.",
        landmarks: [
          "Père Lachaise Cemetery",
          "Belleville",
          "Ménilmontant",
          "Parc de Belleville",
        ],
        neighborhoods: [
          "Belleville",
          "Ménilmontant",
          "Saint-Fargeau",
          "Charonne",
        ],
        faq: [
          {
            question: "Do you cover the area near Père Lachaise?",
            answer:
              "Yes, we cover the whole 20th arrondissement, including the streets around Père Lachaise cemetery.",
          },
          {
            question: "Are Belleville and Ménilmontant covered?",
            answer:
              "Yes, the whole 20th is covered, from Belleville to Ménilmontant and Porte de Bagnolet.",
          },
        ],
      },
    },
  },
];

export function getZone(slug: string): Zone | undefined {
  return ZONES.find((zone) => zone.slug === slug);
}

export function localizeZone(zone: Zone, lang: Locale): LocalizedZone {
  return { number: zone.number, slug: zone.slug, ...zone.content[lang] };
}

export function getLocalizedZones(lang: Locale): LocalizedZone[] {
  return ZONES.map((zone) => localizeZone(zone, lang));
}

export function getLocalizedZone(
  slug: string,
  lang: Locale,
): LocalizedZone | undefined {
  const zone = getZone(slug);
  return zone ? localizeZone(zone, lang) : undefined;
}
