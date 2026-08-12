import type { Zone } from "@/lib/zones/types";

// Real per-arrondissement content — landmarks, neighbourhood names and local
// character, not templated duplicates. See CLAUDE.md §4: "genuinely
// localized... thin duplicate zone pages get filtered by Google."
export const PARIS_ZONES: Zone[] = [
  {
    kind: "arrondissement",
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
        localContext: [
          "Le centre historique aligne des immeubles antérieurs au XIXe siècle, souvent en secteur sauvegardé : la face extérieure d'une porte palière y est encadrée, et un renfort visible depuis la cour peut être refusé par la copropriété. Le travail se fait alors côté intérieur.",
          "Le second facteur est l'accès. Autour des Halles, de la rue de Rivoli et des Tuileries, les rues piétonnes et la circulation touristique allongent le trajet bien plus que la distance ne le laisse croire. Le délai annoncé au téléphone en tient compte.",
        ],
        commonJobs: [
          "Ouverture de porte sur serrure ancienne, où la méthode compte plus que la force.",
          "Changement de cylindre entre deux locations courtes, très fréquent autour du Palais-Royal.",
          "Serrures de boutique et rideaux métalliques sur les axes commerçants.",
        ],
        faq: [
          {
            question: "Quel délai pour intervenir dans le 1er ?",
            answer:
              "Le 1er est central mais pas le plus rapide d'accès : rues piétonnes, sens uniques et affluence touristique pèsent plus que les kilomètres. Nous annonçons un délai réaliste par téléphone, en fonction de votre rue et de l'heure, plutôt qu'un chiffre standard.",
          },
          {
            question: "Ma porte est ancienne, risque-t-elle d'être abîmée ?",
            answer:
              "C'est précisément ce qu'on évite. Sur une porte ancienne, l'artisan privilégie le crochetage ou l'ouverture par la tranche et vous prévient avant si l'état du mécanisme impose autre chose. Le perçage reste le dernier recours, annoncé et chiffré avant.",
          },
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
        localContext: [
          "The historic centre is full of pre-19th-century buildings, often in a conservation area: the outward face of a flat door is regulated there, and reinforcement visible from the courtyard can be refused by the building. The work then goes on the inside face.",
          "The second factor is access. Around Les Halles, rue de Rivoli and the Tuileries, pedestrian streets and tourist traffic stretch the journey far more than the distance suggests. The time we quote on the phone accounts for that.",
        ],
        commonJobs: [
          "Opening doors with old locks, where method matters more than force.",
          "Cylinder changes between short lets, very common around the Palais-Royal.",
          "Shop locks and roller shutters along the retail streets.",
        ],
        faq: [
          {
            question: "How quickly can you reach the 1st?",
            answer:
              "The 1st is central but not the fastest to reach: pedestrian streets, one-way systems and tourist crowds weigh more than the kilometres. We quote a realistic time by phone based on your street and the hour, rather than a standard figure.",
          },
          {
            question: "My door is old — will it be damaged?",
            answer:
              "That's exactly what we avoid. On an old door the tradesperson favours picking or opening via the edge, and warns you beforehand if the state of the mechanism forces anything else. Drilling stays the last resort, announced and priced first.",
          },
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
    kind: "arrondissement",
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
        localContext: [
          "Le 2e est le plus petit arrondissement de Paris et l'un des plus commerçants : entre le Sentier, la Bourse et les Grands Boulevards, une porte sur deux est une porte de local, pas de logement. Rideaux métalliques, serrures de vitrine et portes d'entrepôt y dominent.",
          "Les passages couverts ajoutent une contrainte propre au quartier : accès par une galerie fermée la nuit, horaires de grille, et des menuiseries anciennes qui n'acceptent pas un matériel standard sans adaptation.",
        ],
        commonJobs: [
          "Rideau métallique bloqué ou verrou au sol arraché sur un commerce.",
          "Reprise du parc de clés d'un bureau après le départ d'un salarié.",
          "Ouverture de porte et changement de cylindre dans les logements du Sentier.",
        ],
        faq: [
          {
            question: "Intervenez-vous avant l'ouverture des commerces ?",
            answer:
              "Oui, et c'est souvent le plus simple dans le 2e. Les poses se planifient tôt le matin ou après la fermeture pour ne pas interrompre l'activité ; le créneau et l'éventuel supplément horaire figurent au devis, jamais découverts sur la facture.",
          },
          {
            question: "Que faire si le rideau métallique refuse de s'ouvrir ?",
            answer:
              "N'insistez pas au moteur ni à la manivelle : c'est ce qui transforme une serrure bloquée en tablier faussé. Décrivez-nous le type de rideau au téléphone, nous arrivons avec le matériel adapté plutôt que de forcer sur place.",
          },
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
        localContext: [
          "The 2nd is the smallest arrondissement in Paris and one of the most commercial: between Sentier, the Bourse and the Grands Boulevards, every other door is a business door rather than a home. Roller shutters, shopfront locks and warehouse doors dominate.",
          "The covered passages add a constraint of their own: access through a gallery locked at night, gate hours, and old joinery that won't take standard hardware without adaptation.",
        ],
        commonJobs: [
          "Jammed roller shutter or a ground bolt torn out on a shop.",
          "Taking an office key estate back in hand after a staff departure.",
          "Door openings and cylinder changes in the flats around Sentier.",
        ],
        faq: [
          {
            question: "Can you come before shops open?",
            answer:
              "Yes, and in the 2nd it's usually simplest. Fitting is scheduled early morning or after closing so trading isn't interrupted; the slot and any out-of-hours surcharge are in the quote, never discovered on the invoice.",
          },
          {
            question: "What if the roller shutter won't open?",
            answer:
              "Don't force the motor or the crank: that's what turns a jammed lock into a buckled curtain. Describe the shutter type on the phone and we arrive with the right equipment rather than improvising on site.",
          },
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
    kind: "arrondissement",
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
        localContext: [
          "Le 10e est traversé par deux gares parmi les plus fréquentées d'Europe. Cela crée un profil d'appels particulier : beaucoup d'ouvertures tardives, des voyageurs sans double disponible, et un parc locatif ancien où les cylindres n'ont pas toujours été changés depuis des années.",
          "Côté canal Saint-Martin, le bâti est plus récent et les résidences mieux équipées, avec interphone et parfois badge. Le point faible s'y déplace vers les portes de cave et les accès secondaires sur cour.",
        ],
        commonJobs: [
          "Ouverture tardive près des gares, souvent sans double accessible.",
          "Changement de cylindre dans un parc locatif ancien.",
          "Sécurisation d'accès secondaires sur cour côté canal.",
        ],
        faq: [
          {
            question: "Intervenez-vous à toute heure près des gares ?",
            answer:
              "Oui, 24h/24. C'est l'un des secteurs où les appels de nuit sont les plus fréquents, à l'arrivée des derniers trains. Le supplément de nuit est annoncé au téléphone avant le déplacement, jamais découvert sur la facture.",
          },
          {
            question:
              "Mon cylindre n'a jamais été changé depuis mon emménagement, est-ce grave ?",
            answer:
              "Ce n'est pas une urgence, mais c'est le premier conseil que nous donnons dans le quartier : vous ne savez pas combien de jeux circulent encore. Un remplacement de cylindre seul suffit, sans toucher au reste de la serrure.",
          },
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
        localContext: [
          "The 10th is crossed by two of the busiest stations in Europe. That creates a particular call profile: many late openings, travellers with no spare available, and an older rental stock where cylinders haven't always been changed in years.",
          "Towards Canal Saint-Martin the buildings are newer and better equipped, with entryphones and sometimes badges. There the weak point shifts to cellar doors and secondary courtyard access.",
        ],
        commonJobs: [
          "Late openings near the stations, often with no spare key reachable.",
          "Cylinder changes across an older rental stock.",
          "Securing secondary courtyard access near the canal.",
        ],
        faq: [
          {
            question: "Do you come out at any hour near the stations?",
            answer:
              "Yes, 24/7. It's one of the areas where night calls are most frequent, as the last trains arrive. The night surcharge is stated on the phone before travel, never discovered on the invoice.",
          },
          {
            question:
              "My cylinder has never been changed since I moved in — is that serious?",
            answer:
              "It isn't an emergency, but it's the first advice we give in this area: you don't know how many key sets are still out there. Replacing the cylinder alone is enough, without touching the rest of the lock.",
          },
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
    kind: "arrondissement",
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
        localContext: [
          "Le 11e est l'un des arrondissements les plus densément peuplés d'Europe, avec un parc locatif à très forte rotation. Le changement de cylindre à l'emménagement y est la demande la plus courante, devant même l'ouverture de porte — et c'est la bonne réflexe : vous ne savez pas combien de doubles circulent.",
          "La vie nocturne d'Oberkampf et de la Bastille décale les appels : une part significative de nos interventions dans le 11e se fait entre minuit et six heures, week-ends compris.",
        ],
        commonJobs: [
          "Changement de cylindre à l'emménagement, la demande n°1 du quartier.",
          "Ouverture de porte de nuit autour d'Oberkampf et de la Bastille.",
          "Sécurisation après tentative d'effraction sur porte palière.",
        ],
        faq: [
          {
            question:
              "Combien coûte un changement de cylindre à l'emménagement ?",
            answer:
              "C'est l'intervention la plus demandée ici et l'une des moins chères : seul le barillet est remplacé, pas la serrure entière. Le tarif figure sur notre grille publique et vous est confirmé au téléphone avant le déplacement.",
          },
          {
            question: "Y a-t-il un supplément la nuit dans le 11e ?",
            answer:
              "Oui, le même que partout : le supplément nuit, week-end et jour férié est publié dans notre grille tarifaire. Il vous est rappelé au téléphone avant que l'artisan ne parte, avec le montant total.",
          },
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
        localContext: [
          "The 11th is one of the most densely populated districts in Europe, with a rental stock that turns over fast. Changing the cylinder when moving in is the most common request here, ahead even of door opening — and it's the right instinct: you don't know how many copies are circulating.",
          "Nightlife around Oberkampf and Bastille shifts the calls: a significant share of our work in the 11th happens between midnight and six, weekends included.",
        ],
        commonJobs: [
          "Cylinder changes on moving in, the number one request locally.",
          "Night door openings around Oberkampf and Bastille.",
          "Securing flat doors after an attempted break-in.",
        ],
        faq: [
          {
            question: "What does a cylinder change on moving in cost?",
            answer:
              "It's the most requested job here and one of the cheapest: only the barrel is replaced, not the whole lock. The price is in our published grid and is confirmed on the phone before anyone travels.",
          },
          {
            question: "Is there a night surcharge in the 11th?",
            answer:
              "Yes, the same as everywhere: the night, weekend and public-holiday surcharge is published in our price list. It's repeated on the phone before the tradesperson leaves, along with the total.",
          },
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
    kind: "arrondissement",
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
        localContext: [
          "Le 18e change complètement de nature en quelques centaines de mètres. À Montmartre, ruelles pavées, escaliers et rues piétonnes rendent l'accès véhicule impossible sur une partie du secteur : le matériel se porte, et le délai réel s'en ressent.",
          "Vers Barbès, la Goutte d'Or et Château Rouge, le bâti est plus dense et plus ancien, avec un parc locatif important où le remplacement de cylindre entre deux occupants est la demande dominante.",
        ],
        commonJobs: [
          "Ouverture de porte dans les rues piétonnes et escaliers de Montmartre.",
          "Changement de cylindre entre deux locataires côté Barbès et Goutte d'Or.",
          "Sécurisation après effraction sur porte palière ancienne.",
        ],
        faq: [
          {
            question:
              "Montmartre est difficile d'accès, cela change-t-il le tarif ?",
            answer:
              "Non, jamais. Le tarif est le même dans tout notre secteur, déplacement compris. Ce qui change, c'est le délai que nous vous annonçons : dans les rues à escaliers, le matériel se porte, et nous le disons plutôt que de promettre un horaire intenable.",
          },
          {
            question:
              "Faut-il changer la serrure après une tentative d'effraction ?",
            answer:
              "Si le cylindre a été forcé, crocheté ou cassé, oui : il ne protège plus, même s'il fonctionne encore. Si seule la porte porte des traces, un contrôle du mécanisme suffit souvent. Le diagnostic est fait avant tout devis.",
          },
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
        localContext: [
          "The 18th changes character completely within a few hundred metres. In Montmartre, cobbled lanes, stairways and pedestrian streets make vehicle access impossible in part of the area: equipment is carried in, and the real arrival time reflects that.",
          "Towards Barbès, La Goutte d'Or and Château Rouge the fabric is denser and older, with a large rental stock where cylinder replacement between occupants is the dominant request.",
        ],
        commonJobs: [
          "Door openings in Montmartre's pedestrian streets and stairways.",
          "Cylinder changes between tenants around Barbès and La Goutte d'Or.",
          "Securing older flat doors after a break-in.",
        ],
        faq: [
          {
            question:
              "Montmartre is hard to reach — does that change the price?",
            answer:
              "No, never. The price is the same across our whole area, travel included. What changes is the time we quote: on streets with stairs the equipment is carried, and we say so rather than promising a schedule we can't keep.",
          },
          {
            question: "Should the lock be changed after an attempted break-in?",
            answer:
              "If the cylinder was forced, picked or broken, yes: it no longer protects, even if it still turns. If only the door bears marks, checking the mechanism is often enough. The diagnosis comes before any quote.",
          },
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
    kind: "arrondissement",
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
        localContext: [
          "Le 20e est vallonné et contrasté : bâti ancien de Belleville et Ménilmontant, immeubles plus récents vers la Porte de Bagnolet, maisons et impasses autour de Charonne et Saint-Fargeau. Les serrures y couvrent toute la gamme, de la serrure à gorge à la multipoints récente.",
          "Les impasses et voies privées du secteur sont une particularité pratique : l'adresse exacte et le code d'accès font gagner plus de temps que n'importe quelle optimisation d'itinéraire.",
        ],
        commonJobs: [
          "Ouverture de porte dans les rues en pente et impasses de Ménilmontant.",
          "Changement de cylindre à l'emménagement, parc locatif de Belleville.",
          "Réglage de porte ancienne qui ferme mal après l'hiver.",
        ],
        faq: [
          {
            question:
              "Intervenez-vous dans les impasses et voies privées du 20e ?",
            answer:
              "Oui. Donnez-nous l'adresse exacte et le code d'accès au moment de l'appel : dans ce secteur, c'est ce qui fait la différence sur le délai réel, bien plus que la distance à parcourir.",
          },
          {
            question: "Ma vieille serrure à gorge peut-elle être conservée ?",
            answer:
              "Souvent oui, si le mécanisme est sain : on peut la garder et ajouter un verrou de sûreté. Si elle est fatiguée ou la porte trop fine, le passage à un cylindre européen est plus sûr et moins cher à long terme. Les deux options vous sont chiffrées.",
          },
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
        localContext: [
          "The 20th is hilly and mixed: older fabric in Belleville and Ménilmontant, newer blocks towards Porte de Bagnolet, houses and dead ends around Charonne and Saint-Fargeau. The locks here span the full range, from old lever locks to recent multi-point sets.",
          "The area's dead ends and private roads are a practical quirk: the exact address and door code save more time than any route optimisation.",
        ],
        commonJobs: [
          "Door openings on the steep streets and dead ends of Ménilmontant.",
          "Cylinder changes on moving in across Belleville's rental stock.",
          "Adjusting older doors that close badly after winter.",
        ],
        faq: [
          {
            question:
              "Do you cover the dead ends and private roads of the 20th?",
            answer:
              "Yes. Give us the exact address and the door code when you call: in this area that makes more difference to the real arrival time than the distance does.",
          },
          {
            question: "Can my old lever lock be kept?",
            answer:
              "Often yes, if the mechanism is sound: it can stay, with a security deadbolt added. If it's worn or the door too thin, moving to a European cylinder is safer and cheaper over time. You get both options costed.",
          },
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
  {
    kind: "arrondissement",
    number: "3",
    slug: "serrurier-paris-3",
    content: {
      fr: {
        title: "Serrurier Paris 3e",
        keyword: "serrurier paris 3",
        intro:
          "Le 3e couvre le haut Marais, des Archives nationales au Carreau du Temple. On y trouve des hôtels particuliers du XVIIe siècle, des cours pavées et des portes cochères souvent d'origine, dans des immeubles où le règlement de copropriété encadre l'aspect visible des portes palières. Beaucoup de galeries et de showrooms complètent le bâti résidentiel, avec des vitrines et des rideaux à sécuriser.",
        landmarks: [
          "Musée Picasso",
          "Carreau du Temple",
          "Archives nationales",
          "Conservatoire national des arts et métiers",
          "Marché des Enfants Rouges",
          "Square du Temple",
        ],
        neighborhoods: [
          "Arts-et-Métiers",
          "Enfants-Rouges",
          "Archives",
          "Sainte-Avoye",
        ],
        localContext: [
          "Dans le haut Marais, beaucoup d'adresses sont des hôtels particuliers divisés en appartements : porte cochère sur rue, cour pavée, puis escalier étroit. Deux serrures se posent donc souvent au lieu d'une, et la porte cochère relève des parties communes.",
          "Les règlements de copropriété y sont stricts sur l'aspect des portes palières, en particulier sur les paliers d'origine. Nous vérifions ce point avant le devis, parce qu'un renfort refusé après pose est un coût pour tout le monde.",
        ],
        commonJobs: [
          "Ouverture de porte au fond d'une cour, matériel porté à la main.",
          "Cylindre de porte cochère à recoder pour l'ensemble de la copropriété.",
          "Sécurisation discrète d'appartement dans un immeuble protégé.",
        ],
        faq: [
          {
            question: "La porte cochère est en panne, qui décide des travaux ?",
            answer:
              "C'est une partie commune : la décision revient au syndic ou à l'assemblée générale. Nous pouvons sécuriser l'accès en urgence et fournir un devis rédigé pour être présenté au syndic, ce qui évite de bloquer l'immeuble en attendant une réunion.",
          },
          {
            question:
              "Peut-on intervenir si la cour n'est pas accessible en voiture ?",
            answer:
              "Oui, c'est le cas d'une bonne partie du 3e. Le matériel est porté depuis la rue, ce qui ne change ni le tarif ni le délai que nous vous annonçons.",
          },
          {
            question:
              "Peut-on blinder une porte dans un immeuble ancien du Marais ?",
            answer:
              "Souvent oui, mais l'aspect extérieur de la porte palière est encadré par le règlement de copropriété, et parfois par les Bâtiments de France sur les façades protégées. Le renfort se pose alors côté intérieur avec une serrure certifiée discrète. L'artisan vérifie ce point avant de proposer quoi que ce soit.",
          },
          {
            question: "Intervenez-vous dans les cours et passages du 3e ?",
            answer:
              "Oui. Beaucoup d'adresses du haut Marais s'ouvrent sur une cour inaccessible en véhicule : le matériel est porté à la main jusqu'à la porte, ce qui ne change ni le délai annoncé ni le tarif.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 3rd arrondissement",
        keyword: "locksmith paris 3rd arrondissement",
        intro:
          "The 3rd covers the upper Marais, from the National Archives to the Carreau du Temple: 17th-century mansion houses, cobbled courtyards and original carriage doors, in buildings where the co-ownership rules govern how a flat door may look from the landing. Galleries and showrooms sit alongside the housing, adding shopfronts and shutters to secure.",
        landmarks: [
          "Musée Picasso",
          "Carreau du Temple",
          "National Archives",
          "Musée des Arts et Métiers",
          "Marché des Enfants Rouges",
          "Square du Temple",
        ],
        neighborhoods: [
          "Arts-et-Métiers",
          "Enfants-Rouges",
          "Archives",
          "Sainte-Avoye",
        ],
        localContext: [
          "In the upper Marais many addresses are mansion houses divided into flats: a carriage door on the street, a cobbled courtyard, then a narrow staircase. Two locks often need work instead of one, and the carriage door belongs to the common parts.",
          "Building rules here are strict about how flat doors look, especially on original landings. We check that before quoting, because reinforcement refused after fitting is a cost to everyone.",
        ],
        commonJobs: [
          "Door openings at the back of a courtyard, equipment carried in by hand.",
          "Re-keying a carriage-door cylinder for the whole building.",
          "Discreet flat security in a protected building.",
        ],
        faq: [
          {
            question: "The carriage door is broken — who decides on the work?",
            answer:
              "It's a common part: the decision belongs to the managing agent or a general meeting. We can secure the entrance urgently and provide a quote written to be put to the agent, which avoids leaving the building open while a meeting is arranged.",
          },
          {
            question: "Can you work if the courtyard has no vehicle access?",
            answer:
              "Yes, and that's true of much of the 3rd. Equipment is carried in from the street, which changes neither the price nor the time we quote you.",
          },
          {
            question: "Can a door be reinforced in an old Marais building?",
            answer:
              "Usually yes, but how the door looks from the landing is governed by the co-ownership rules, and sometimes by heritage protection on the façade. The reinforcement then goes on the inside face with a discreet certified lock. The tradesperson checks this before proposing anything.",
          },
          {
            question: "Do you cover the courtyards and passages of the 3rd?",
            answer:
              "Yes. Many upper-Marais addresses open onto a courtyard no vehicle can reach: the equipment is carried in by hand, which changes neither the quoted time nor the price.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "4",
    slug: "serrurier-paris-4",
    content: {
      fr: {
        title: "Serrurier Paris 4e",
        keyword: "serrurier paris 4",
        intro:
          "Le 4e va de l'Hôtel de Ville à la place des Vosges, en passant par l'Île Saint-Louis et le bas Marais. Bâti très ancien, escaliers étroits, portes palières en bois massif parfois centenaires : l'ouverture demande de la méthode plutôt que de la force. La forte présence de locations de courte durée autour de Saint-Paul et sur l'île se traduit par des pertes de clés fréquentes, à toute heure.",
        landmarks: [
          "Hôtel de Ville",
          "Centre Pompidou",
          "Place des Vosges",
          "Île Saint-Louis",
          "Cathédrale Notre-Dame",
          "Rue des Rosiers",
        ],
        neighborhoods: [
          "Saint-Merri",
          "Saint-Gervais",
          "Arsenal",
          "Notre-Dame",
        ],
        localContext: [
          "Entre l'Île Saint-Louis, Saint-Paul et l'Hôtel de Ville, le bâti est parmi les plus anciens de Paris : escaliers étroits, paliers exigus, portes en bois massif dont le vantail a travaillé avec le temps. Une porte qui frotte est souvent un problème de réglage, pas de serrure.",
          "S'y ajoute la densité de locations de courte durée. Les clés changent de mains chaque semaine, ce qui explique la fréquence des ouvertures nocturnes et des remplacements de cylindre entre deux séjours.",
        ],
        commonJobs: [
          "Ouverture de nuit pour un locataire de courte durée sans double disponible.",
          "Réglage de porte ancienne qui ne ferme plus, avant tout remplacement.",
          "Changement de cylindre entre deux occupants.",
        ],
        faq: [
          {
            question:
              "Je loue un logement de courte durée, qui doit payer l'ouverture ?",
            answer:
              "En principe l'occupant, sauf si le propriétaire s'y engage dans le contrat de location. Prévenez d'abord le propriétaire ou l'agence : un double est parfois disponible sur place, ce qui règle la situation sans intervention.",
          },
          {
            question:
              "Ma porte ferme mal depuis l'hiver, faut-il changer la serrure ?",
            answer:
              "Rarement. Sur les portes anciennes du 4e, le bois travaille : le vantail descend, le pêne ne tombe plus en face de la gâche. Un réglage de paumelles ou de gâche règle la plupart des cas, pour une fraction du prix d'une serrure neuve.",
          },
          {
            question:
              "J'ai perdu les clés d'une location de courte durée, que faire ?",
            answer:
              "Prévenez d'abord le propriétaire ou l'agence, qui détient parfois un double sur place. Sans double disponible, nous ouvrons la porte sans dégât dans la grande majorité des cas ; le remplacement du cylindre n'est proposé que s'il est réellement nécessaire, et toujours chiffré avant.",
          },
          {
            question:
              "Les portes anciennes du 4e s'ouvrent-elles sans les abîmer ?",
            answer:
              "Le plus souvent oui. Sur une porte ancienne, l'enjeu est le vantail autant que la serrure : l'artisan privilégie le crochetage ou l'ouverture par la tranche, et vous prévient avant si l'état du mécanisme impose autre chose.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 4th arrondissement",
        keyword: "locksmith paris 4th arrondissement",
        intro:
          "The 4th runs from the Hôtel de Ville to Place des Vosges, taking in Île Saint-Louis and the lower Marais. Very old building stock, narrow staircases and solid timber flat doors, some of them a century old: opening them takes method rather than force. Short-term lets around Saint-Paul and on the island mean lost keys are a regular, round-the-clock event.",
        landmarks: [
          "Hôtel de Ville",
          "Centre Pompidou",
          "Place des Vosges",
          "Île Saint-Louis",
          "Notre-Dame Cathedral",
          "Rue des Rosiers",
        ],
        neighborhoods: [
          "Saint-Merri",
          "Saint-Gervais",
          "Arsenal",
          "Notre-Dame",
        ],
        localContext: [
          "Between Île Saint-Louis, Saint-Paul and the Hôtel de Ville the building stock is among the oldest in Paris: narrow staircases, cramped landings, solid timber doors whose leaves have moved over time. A door that catches is often an adjustment problem, not a lock problem.",
          "Add the density of short-term lets. Keys change hands weekly, which explains the frequency of night openings and cylinder changes between stays.",
        ],
        commonJobs: [
          "Night openings for short-let guests with no spare key available.",
          "Adjusting an old door that no longer closes, before replacing anything.",
          "Cylinder changes between occupants.",
        ],
        faq: [
          {
            question: "I'm in a short-term let — who pays for the opening?",
            answer:
              "In principle the occupant, unless the owner commits to it in the rental agreement. Tell the owner or agency first: a spare is sometimes held on site, which settles it without a call-out.",
          },
          {
            question:
              "My door has closed badly since winter — does the lock need changing?",
            answer:
              "Rarely. On the 4th's old doors the timber moves: the leaf drops and the latch no longer meets the strike plate. Adjusting the hinges or the strike solves most cases, for a fraction of the price of a new lock.",
          },
          {
            question: "I've lost the keys to a short-term let — what now?",
            answer:
              "Tell the owner or agency first, as they sometimes keep a spare on site. With no spare available we open the door without damage in the large majority of cases; replacing the cylinder is proposed only where it's genuinely needed, and always costed first.",
          },
          {
            question: "Can the old doors in the 4th be opened without damage?",
            answer:
              "Usually yes. On an old door the leaf matters as much as the lock: the tradesperson favours picking or opening via the edge, and tells you beforehand if the state of the mechanism forces anything else.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "5",
    slug: "serrurier-paris-5",
    content: {
      fr: {
        title: "Serrurier Paris 5e",
        keyword: "serrurier paris 5",
        intro:
          "Le Quartier latin concentre studios, chambres de bonne en dernier étage et colocations autour de la Sorbonne, de Jussieu et de la rue Mouffetard. Le parc est ancien : beaucoup de serrures à gorge ou de cylindres d'origine sur des portes fines, et une rotation locative qui fait de septembre le mois le plus chargé en changements de serrure.",
        landmarks: [
          "Le Panthéon",
          "Jardin des Plantes",
          "Rue Mouffetard",
          "La Sorbonne",
          "Campus de Jussieu",
          "Grande Mosquée de Paris",
        ],
        neighborhoods: [
          "Sorbonne",
          "Val-de-Grâce",
          "Jardin-des-Plantes",
          "Saint-Victor",
        ],
        localContext: [
          "Le Quartier latin est un quartier de petites surfaces : studios, chambres de service en dernier étage, colocations. Beaucoup de portes y sont fines et équipées d'une serrure à gorge ancienne, parfois d'un simple verrou, sur des paliers où l'on ne peut pas poser n'importe quel modèle.",
          "Le rythme universitaire structure l'année : septembre concentre les changements de serrure liés aux emménagements, et les clés perdues se répartissent sur toute l'année scolaire, souvent tard le soir.",
        ],
        commonJobs: [
          "Ouverture de studio et de chambre de service en dernier étage.",
          "Changement de cylindre à la rentrée, après un changement de colocataire.",
          "Pose d'un verrou de sûreté en complément d'une serrure ancienne.",
        ],
        faq: [
          {
            question:
              "Une chambre de service se sécurise-t-elle comme un appartement ?",
            answer:
              "Pas tout à fait : la porte est souvent plus fine et le palier commun. On privilégie un cylindre correct et une gâche renforcée plutôt qu'une serrure lourde que le vantail ne supporterait pas. L'artisan vous le dit sur place, plutôt que de vendre du surdimensionné.",
          },
          {
            question:
              "Étudiant, puis-je faire changer la serrure sans l'accord du propriétaire ?",
            answer:
              "Pour un cylindre, oui dans la pratique, à condition de pouvoir restituer un jeu de clés en fin de bail. Prévenez le propriétaire par écrit : c'est ce qui évite une retenue sur le dépôt de garantie à l'état des lieux de sortie.",
          },
          {
            question:
              "Ma serrure à gorge est ancienne : faut-il tout remplacer ?",
            answer:
              "Pas forcément. Une serrure à gorge en bon état peut être conservée et complétée par un verrou de sûreté. Si le mécanisme est fatigué ou la porte trop fine, le remplacement par un cylindre européen reste souvent plus sûr et moins cher à long terme — les deux options vous sont chiffrées.",
          },
          {
            question: "En colocation, combien de jeux de clés sont fournis ?",
            answer:
              "Le nombre est indiqué au devis avant la pose, généralement trois à cinq selon le modèle. Des doubles supplémentaires peuvent être commandés ; sur un cylindre à clé protégée, ils exigent la carte de propriété, ce qui évite les copies sauvages entre colocataires successifs.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 5th arrondissement",
        keyword: "locksmith paris 5th arrondissement",
        intro:
          "The Latin Quarter is studios, top-floor former maids' rooms and shared flats around the Sorbonne, Jussieu and rue Mouffetard. The stock is old: plenty of lever locks or original cylinders on thin doors, and a rental churn that makes September the busiest month for lock changes.",
        landmarks: [
          "The Panthéon",
          "Jardin des Plantes",
          "Rue Mouffetard",
          "The Sorbonne",
          "Jussieu campus",
          "Grande Mosquée de Paris",
        ],
        neighborhoods: [
          "Sorbonne",
          "Val-de-Grâce",
          "Jardin-des-Plantes",
          "Saint-Victor",
        ],
        localContext: [
          "The Latin Quarter is a quarter of small spaces: studios, top-floor former service rooms, shared flats. Many doors are thin and fitted with an old lever lock, sometimes just a deadbolt, on landings where not every model can be fitted.",
          "The academic year sets the rhythm: September concentrates lock changes tied to moving in, while lost keys spread across the whole year, often late at night.",
        ],
        commonJobs: [
          "Opening studios and top-floor service rooms.",
          "Cylinder changes at the start of term, after a flatmate moves on.",
          "Fitting a security deadbolt alongside an older lock.",
        ],
        faq: [
          {
            question: "Is a service room secured like a flat?",
            answer:
              "Not quite: the door is often thinner and the landing shared. We favour a sound cylinder and a reinforced strike plate over a heavy lock the leaf couldn't carry. The tradesperson tells you that on site rather than selling something oversized.",
          },
          {
            question:
              "As a student, can I change the lock without the landlord's agreement?",
            answer:
              "For a cylinder, in practice yes, provided you can hand back a set of keys at the end of the tenancy. Tell the landlord in writing: that's what prevents a deduction from your deposit at the check-out inventory.",
          },
          {
            question: "My lever lock is old — does all of it need replacing?",
            answer:
              "Not necessarily. A sound lever lock can be kept and backed up with a security deadbolt. If the mechanism is worn or the door too thin, moving to a European cylinder is usually safer and cheaper over time — you get both options costed.",
          },
          {
            question: "In a shared flat, how many key sets are provided?",
            answer:
              "The number is stated in the quote before fitting, typically three to five depending on the model. Extra copies can be ordered; on a protected-key cylinder they require the ownership card, which stops informal copies circulating between successive flatmates.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "6",
    slug: "serrurier-paris-6",
    content: {
      fr: {
        title: "Serrurier Paris 6e",
        keyword: "serrurier paris 6",
        intro:
          "Saint-Germain-des-Prés, l'Odéon et les abords du Luxembourg réunissent des appartements de valeur, des syndics attentifs à l'aspect des parties communes et des assureurs qui exigent souvent une serrure certifiée A2P. S'y ajoutent les galeries et boutiques de la rue de Seine ou de Saint-Sulpice, avec vitrines, rideaux et coffres.",
        landmarks: [
          "Saint-Germain-des-Prés",
          "Jardin du Luxembourg",
          "Théâtre de l'Odéon",
          "Église Saint-Sulpice",
          "Institut de France",
          "Marché Saint-Germain",
        ],
        neighborhoods: [
          "Odéon",
          "Monnaie",
          "Saint-Germain-des-Prés",
          "Notre-Dame-des-Champs",
        ],
        localContext: [
          "Saint-Germain-des-Prés concentre des appartements de valeur dans des immeubles tenus, avec gardien et syndic attentif. Les contrats d'assurance y demandent fréquemment un cylindre certifié A2P et un nombre minimal de points de fermeture — une clause à lire avant de choisir le matériel, pas après le sinistre.",
          "L'autre réalité du 6e est commerçante : galeries, librairies et boutiques de la rue de Seine et de Saint-Sulpice, avec vitrines, rideaux et parfois un coffre à sécuriser en même temps que la porte.",
        ],
        commonJobs: [
          "Pose de cylindre certifié A2P pour satisfaire une clause d'assurance.",
          "Renforcement discret d'une porte palière sans modifier son aspect.",
          "Serrures de vitrine et rideaux de galeries et boutiques.",
        ],
        faq: [
          {
            question: "Comment savoir quel niveau A2P exige mon assurance ?",
            answer:
              "La clause « moyens de protection » de votre contrat le précise, en général en nombre de points de fermeture et en étoiles A2P. Envoyez-nous la clause : nous proposons le matériel qui y répond exactement, et le devis mentionne la certification posée pour votre assureur.",
          },
          {
            question: "Le syndic peut-il refuser mon changement de porte ?",
            answer:
              "Pour un cylindre, non. Pour remplacer la porte ou modifier sa face côté palier, oui : c'est une partie visible de la copropriété. Le devis peut être rédigé pour être présenté en assemblée générale.",
          },
          {
            question:
              "Mon assureur demande une serrure A2P : laquelle choisir ?",
            answer:
              "La certification A2P se décline en une, deux ou trois étoiles selon le temps de résistance. Beaucoup de contrats se satisfont d'un cylindre A2P une étoile sur une porte saine ; les exigences plus fortes visent en général les rez-de-chaussée et premiers étages. Apportez votre attestation d'assurance : le devis mentionne la certification posée, ce qui suffit à votre assureur.",
          },
          {
            question:
              "Peut-on renforcer la sécurité sans modifier l'aspect de la porte ?",
            answer:
              "Oui, dans la plupart des cas. Le cylindre, la gâche et les renforts internes se changent sans toucher à la face visible côté palier — ce qui règle en même temps la question du règlement de copropriété.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 6th arrondissement",
        keyword: "locksmith paris 6th arrondissement",
        intro:
          "Saint-Germain-des-Prés, Odéon and the streets around the Luxembourg gardens combine high-value flats, managing agents who care how the common parts look, and insurers who often require an A2P-certified lock. Add the galleries and boutiques of rue de Seine and Saint-Sulpice, with their windows, shutters and safes.",
        landmarks: [
          "Saint-Germain-des-Prés",
          "Luxembourg Gardens",
          "Théâtre de l'Odéon",
          "Saint-Sulpice church",
          "Institut de France",
          "Marché Saint-Germain",
        ],
        neighborhoods: [
          "Odéon",
          "Monnaie",
          "Saint-Germain-des-Prés",
          "Notre-Dame-des-Champs",
        ],
        localContext: [
          "Saint-Germain-des-Prés concentrates high-value flats in well-run buildings with caretakers and attentive managing agents. Insurance policies here frequently require an A2P-certified cylinder and a minimum number of locking points — a clause to read before choosing hardware, not after a loss.",
          "The other side of the 6th is retail: galleries, bookshops and boutiques on rue de Seine and around Saint-Sulpice, with windows, shutters and sometimes a safe to secure alongside the door.",
        ],
        commonJobs: [
          "Fitting certified A2P cylinders to satisfy an insurance clause.",
          "Discreetly reinforcing a flat door without changing how it looks.",
          "Shopfront locks and shutters for galleries and boutiques.",
        ],
        faq: [
          {
            question: "How do I know what A2P level my insurer wants?",
            answer:
              'Your policy\'s "protection measures" clause says so, usually as a number of locking points and an A2P star rating. Send us the clause: we propose hardware that matches it exactly, and the quote names the certification fitted for your insurer.',
          },
          {
            question: "Can the managing agent refuse my door change?",
            answer:
              "For a cylinder, no. To replace the door or alter its landing-side face, yes: that face is part of the common property. The quote can be written so it can be put to a general meeting.",
          },
          {
            question: "My insurer wants an A2P lock — which one?",
            answer:
              "A2P certification comes in one, two or three stars depending on resistance time. Many policies are satisfied by a one-star cylinder on a sound door; stricter requirements generally target ground and first-floor flats. Bring your policy document — the quote states the certification fitted, which is what your insurer needs.",
          },
          {
            question:
              "Can security be improved without changing how the door looks?",
            answer:
              "In most cases, yes. The cylinder, strike plate and internal reinforcements can all be changed without touching the face seen from the landing — which also settles the co-ownership question.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "7",
    slug: "serrurier-paris-7",
    content: {
      fr: {
        title: "Serrurier Paris 7e",
        keyword: "serrurier paris 7",
        intro:
          "Des Invalides au Gros-Caillou, le 7e est fait d'immeubles de standing avec gardien, digicode et interphone, dans un secteur où ministères et ambassades imposent par ailleurs leurs propres contrôles d'accès. Les copropriétés y sont organisées : passer par le syndic ou le gardien fait souvent gagner plus de temps que forcer quoi que ce soit.",
        landmarks: [
          "Tour Eiffel",
          "Hôtel des Invalides",
          "Musée d'Orsay",
          "Champ-de-Mars",
          "Rue Cler",
          "Assemblée nationale",
        ],
        neighborhoods: [
          "Gros-Caillou",
          "Invalides",
          "École-Militaire",
          "Saint-Thomas-d'Aquin",
        ],
        localContext: [
          "Le 7e est un arrondissement de copropriétés organisées : gardien présent, interphone, digicode, parfois sas d'entrée. Passer par le gardien fait souvent gagner plus de temps que n'importe quelle méthode d'ouverture, et c'est le premier réflexe que nous conseillons.",
          "La proximité des ministères et des ambassades ajoute des contrôles d'accès qui ne dépendent pas de la copropriété. Prévenir en amont de notre passage évite d'être bloqué à l'entrée avec le matériel dans le véhicule.",
        ],
        commonJobs: [
          "Ouverture d'appartement avec accord du gardien et justificatif de domicile.",
          "Serrure de porte de hall et gâche électrique en partie commune.",
          "Cylindre à clé protégée dans un immeuble à forte rotation de prestataires.",
        ],
        faq: [
          {
            question: "Le gardien peut-il vous laisser entrer sans moi ?",
            answer:
              "Non, sauf mandat écrit de votre part. Nous n'ouvrons une porte qu'en présence de l'occupant ou d'une personne mandatée, avec justificatif. C'est la règle qui protège votre logement quand vous n'êtes pas là.",
          },
          {
            question:
              "Intervenez-vous sur les gâches électriques et ventouses ?",
            answer:
              "Oui, sur la partie serrurerie : gâche, ventouse, serrure de hall, cylindre de portail. Le paramétrage de l'interphone lui-même relève du prestataire courants faibles de la copropriété, et nous le disons plutôt que de facturer un diagnostic inutile.",
          },
          {
            question:
              "Intervenez-vous sur les interphones et les digicodes d'immeuble ?",
            answer:
              "Nous intervenons sur la partie serrurerie : gâche électrique, ventouse, serrure de porte de hall, cylindre du portail. L'électronique et le paramétrage de l'interphone relèvent en général du prestataire téléphonie ou courants faibles de la copropriété, et nous le disons plutôt que de facturer un diagnostic inutile.",
          },
          {
            question:
              "Faut-il l'accord du syndic pour changer sa porte palière ?",
            answer:
              "Pour un simple cylindre, non. Pour remplacer la porte ou modifier son aspect côté palier, oui : c'est une partie visible de la copropriété. Le devis peut être rédigé de façon à être présenté au syndic ou en assemblée générale.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 7th arrondissement",
        keyword: "locksmith paris 7th arrondissement",
        intro:
          "From Les Invalides to Gros-Caillou, the 7th is made up of well-run buildings with a caretaker, keypad and entryphone, in an area where ministries and embassies add their own access controls. The co-ownerships here are organised: going through the managing agent or the caretaker often saves more time than forcing anything.",
        landmarks: [
          "Eiffel Tower",
          "Les Invalides",
          "Musée d'Orsay",
          "Champ-de-Mars",
          "Rue Cler",
          "National Assembly",
        ],
        neighborhoods: [
          "Gros-Caillou",
          "Invalides",
          "École-Militaire",
          "Saint-Thomas-d'Aquin",
        ],
        localContext: [
          "The 7th is a district of well-organised buildings: a caretaker on site, entryphone, keypad, sometimes an entrance lobby. Going through the caretaker often saves more time than any opening technique, and it's the first thing we suggest.",
          "Ministries and embassies nearby add access controls that have nothing to do with the building itself. Announcing our visit in advance avoids being stopped at the entrance with the equipment still in the van.",
        ],
        commonJobs: [
          "Flat openings with the caretaker's agreement and proof of address.",
          "Lobby door locks and electric strikes in the common parts.",
          "Protected-key cylinders in buildings with many contractors coming and going.",
        ],
        faq: [
          {
            question: "Can the caretaker let you in without me?",
            answer:
              "No, unless you've authorised it in writing. We only open a door with the occupant or an authorised person present, with proof. It's the rule that protects your home when you're not there.",
          },
          {
            question: "Do you work on electric strikes and magnetic locks?",
            answer:
              "Yes, on the locksmithing side: strike, magnetic lock, lobby lock, gate cylinder. Programming the entryphone itself belongs to the building's low-voltage contractor, and we say so rather than charging for a pointless diagnosis.",
          },
          {
            question: "Do you work on entryphones and door keypads?",
            answer:
              "We handle the locksmithing side: electric strike, magnetic lock, lobby door lock, gate cylinder. The electronics and entryphone programming usually belong to the building's telecoms contractor — we say so rather than charging for a pointless diagnosis.",
          },
          {
            question:
              "Do I need the managing agent's approval to change my flat door?",
            answer:
              "For a cylinder alone, no. To replace the door or change how it looks from the landing, yes: that face is part of the common property. The quote can be written so it can be put to the agent or to a general meeting.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "8",
    slug: "serrurier-paris-8",
    content: {
      fr: {
        title: "Serrurier Paris 8e",
        keyword: "serrurier paris 8",
        intro:
          "Le 8e est autant un arrondissement de bureaux et de commerces que de logements : Champs-Élysées, Madeleine, Saint-Lazare d'un côté, résidences bourgeoises autour du parc Monceau de l'autre. Rideaux métalliques, sas d'entrée et contrôle d'accès par badge y sont courants, et les interventions se planifient souvent tôt le matin ou en soirée pour ne pas fermer boutique.",
        landmarks: [
          "Avenue des Champs-Élysées",
          "Parc Monceau",
          "Église de la Madeleine",
          "Gare Saint-Lazare",
          "Grand Palais",
          "Place de la Concorde",
        ],
        neighborhoods: [
          "Champs-Élysées",
          "Madeleine",
          "Faubourg-du-Roule",
          "Europe",
        ],
        localContext: [
          "Le 8e vit à deux rythmes. En journée, c'est un arrondissement de bureaux et de commerces — Champs-Élysées, Madeleine, Saint-Lazare — où l'enjeu est de ne pas interrompre l'activité. Le soir et le week-end, c'est un quartier résidentiel calme autour du parc Monceau.",
          "Conséquence pratique : la majorité de nos interventions professionnelles y sont planifiées hors horaires d'ouverture, et les demandes résidentielles concernent surtout des immeubles avec gardien et contrôle d'accès.",
        ],
        commonJobs: [
          "Reprise du parc de clés d'un bureau ou d'un commerce après un départ.",
          "Rideau métallique et serrure de porte vitrée sur les axes commerçants.",
          "Contrôle d'accès par badge dans les immeubles à forte rotation.",
        ],
        faq: [
          {
            question: "Pouvez-vous intervenir sans fermer la boutique ?",
            answer:
              "Oui, c'est la demande standard dans le 8e. Nous planifions la pose avant l'ouverture, en soirée ou le week-end. Le créneau et le supplément horaire éventuel figurent au devis signé, ce qui évite toute discussion le jour même.",
          },
          {
            question:
              "Un salarié est parti avec les clés, faut-il tout changer ?",
            answer:
              "Pas nécessairement. Si les cylindres sont sur organigramme, seuls ceux concernés sont recodés. Sinon nous chiffrons la reprise complète du parc sur clé protégée, pour que la question ne se repose pas au départ suivant.",
          },
          {
            question: "Intervenez-vous pour des bureaux et des commerces ?",
            answer:
              "Oui : rideau métallique bloqué, serrure de porte vitrée, reprise du parc de clés après un départ de salarié, contrôle d'accès par badge. Pour un site à plusieurs accès, la sécurisation de locaux professionnels fait l'objet d'un devis après visite.",
          },
          {
            question:
              "Pouvez-vous intervenir en dehors des heures d'ouverture ?",
            answer:
              "Oui, et c'est souvent préférable dans le quartier. Le créneau (tôt le matin, en soirée ou le week-end) est fixé au devis, avec le supplément horaire s'il s'applique — jamais découvert sur la facture.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 8th arrondissement",
        keyword: "locksmith paris 8th arrondissement",
        intro:
          "The 8th is as much offices and retail as housing: the Champs-Élysées, the Madeleine and Saint-Lazare on one side, well-heeled residential streets around Parc Monceau on the other. Roller shutters, entrance lobbies and badge access control are common, and work is often scheduled early morning or evening so the shop never has to close.",
        landmarks: [
          "Champs-Élysées",
          "Parc Monceau",
          "La Madeleine",
          "Gare Saint-Lazare",
          "Grand Palais",
          "Place de la Concorde",
        ],
        neighborhoods: [
          "Champs-Élysées",
          "Madeleine",
          "Faubourg-du-Roule",
          "Europe",
        ],
        localContext: [
          "The 8th runs at two speeds. By day it's offices and retail — the Champs-Élysées, the Madeleine, Saint-Lazare — where the point is not to interrupt trading. Evenings and weekends it's a quiet residential quarter around Parc Monceau.",
          "In practice that means most of our commercial work here is scheduled outside opening hours, and residential requests mostly concern buildings with a caretaker and access control.",
        ],
        commonJobs: [
          "Taking an office or shop key estate back in hand after a departure.",
          "Roller shutters and glass-door locks along the retail streets.",
          "Badge access control in buildings with high turnover.",
        ],
        faq: [
          {
            question: "Can you work without closing the shop?",
            answer:
              "Yes, that's the standard request in the 8th. We schedule fitting before opening, in the evening or at the weekend. The slot and any out-of-hours surcharge are in the signed quote, which avoids any discussion on the day.",
          },
          {
            question:
              "A staff member left with the keys — does everything need changing?",
            answer:
              "Not necessarily. If the cylinders are master-keyed, only the affected ones are re-keyed. Otherwise we cost taking the whole estate onto protected keys, so the question doesn't come up at the next departure.",
          },
          {
            question: "Do you work for offices and shops?",
            answer:
              "Yes: jammed roller shutter, glass-door lock, taking the key estate back in hand after a staff departure, badge access control. For a site with several entrances, securing commercial premises is quoted after a visit.",
          },
          {
            question: "Can you come outside opening hours?",
            answer:
              "Yes, and in this area it's usually preferable. The slot (early morning, evening or weekend) is set in the quote, with the out-of-hours surcharge where it applies — never discovered on the invoice.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "9",
    slug: "serrurier-paris-9",
    content: {
      fr: {
        title: "Serrurier Paris 9e",
        keyword: "serrurier paris 9",
        intro:
          "Entre l'Opéra Garnier, les grands magasins et la Nouvelle Athènes, le 9e est un arrondissement haussmannien dense, avec cours intérieures et escaliers de service. La proximité des grands magasins et de Pigalle y entretient une forte rotation de meublés et de locations courtes : changements de serrure entre deux locataires et ouvertures nocturnes font partie du quotidien du secteur.",
        landmarks: [
          "Opéra Garnier",
          "Galeries Lafayette",
          "Printemps Haussmann",
          "Quartier de la Nouvelle Athènes",
          "Musée Gustave-Moreau",
          "Grands Boulevards",
        ],
        neighborhoods: [
          "Saint-Georges",
          "Chaussée-d'Antin",
          "Faubourg-Montmartre",
          "Rochechouart",
        ],
        localContext: [
          "Le 9e est haussmannien et dense : cour intérieure, escalier principal et escalier de service, parfois deux accès au même appartement. Quand on parle de « changer la serrure », il faut donc vérifier s'il y a une seconde porte, côté cuisine, que personne n'utilise plus mais qui s'ouvre toujours.",
          "La proximité des grands magasins et de Pigalle alimente un parc important de meublés et de locations courtes, avec la rotation de clés qui va avec.",
        ],
        commonJobs: [
          "Changement de cylindre entre deux locataires, la demande la plus fréquente ici.",
          "Sécurisation d'une porte de service oubliée donnant sur l'escalier de service.",
          "Ouverture nocturne autour des Grands Boulevards et de Pigalle.",
        ],
        faq: [
          {
            question: "J'ai une porte de service condamnée, est-ce un risque ?",
            answer:
              "Souvent oui, et c'est le point faible classique des immeubles haussmanniens du 9e. Une porte condamnée par un simple verrou côté cuisine reste ouvrable. Nous la sécurisons ou la neutralisons proprement, selon ce que le règlement de copropriété autorise.",
          },
          {
            question: "Intervenez-vous la nuit dans le quartier ?",
            answer:
              "Oui, 24h/24 et 7j/7. Le supplément de nuit figure dans notre grille publique et vous est rappelé au téléphone avant le départ de l'artisan, avec le tarif de l'intervention elle-même.",
          },
          {
            question: "Faut-il changer la serrure entre deux locataires ?",
            answer:
              "C'est vivement conseillé, et c'est même la demande la plus fréquente dans le quartier. Remplacer le seul cylindre suffit dans la majorité des cas : c'est plus rapide et moins cher que la serrure complète, et cela garantit qu'aucun ancien jeu de clés n'ouvre encore.",
          },
          {
            question: "Intervenez-vous la nuit autour de Pigalle ?",
            answer:
              "Oui, 24h/24 et 7j/7 dans tout le 9e. Le supplément de nuit est annoncé au téléphone avant le déplacement, en même temps que le tarif de l'intervention.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 9th arrondissement",
        keyword: "locksmith paris 9th arrondissement",
        intro:
          "Between the Opéra Garnier, the department stores and the Nouvelle Athènes quarter, the 9th is dense Haussmann-era Paris, with inner courtyards and service staircases. The department stores and Pigalle keep furnished and short-term lets turning over: lock changes between tenants and night-time openings are routine here.",
        landmarks: [
          "Opéra Garnier",
          "Galeries Lafayette",
          "Printemps Haussmann",
          "Nouvelle Athènes quarter",
          "Musée Gustave-Moreau",
          "Grands Boulevards",
        ],
        neighborhoods: [
          "Saint-Georges",
          "Chaussée-d'Antin",
          "Faubourg-Montmartre",
          "Rochechouart",
        ],
        localContext: [
          'The 9th is dense Haussmann-era Paris: an inner courtyard, a main staircase and a service staircase, sometimes two ways into the same flat. So when someone says "change the lock", the first thing to check is whether there\'s a second door off the kitchen that nobody uses but that still opens.',
          "The department stores and Pigalle nearby sustain a large stock of furnished and short-term lets, with the key turnover that comes with it.",
        ],
        commonJobs: [
          "Cylinder changes between tenants, the most frequent request here.",
          "Securing a forgotten service door onto the back staircase.",
          "Night openings around the Grands Boulevards and Pigalle.",
        ],
        faq: [
          {
            question: "I have a sealed-up service door — is that a risk?",
            answer:
              "Often yes, and it's the classic weak point in the 9th's Haussmann buildings. A door held only by a bolt on the kitchen side can still be opened. We secure or properly neutralise it, within what the building rules allow.",
          },
          {
            question: "Do you work nights in this area?",
            answer:
              "Yes, 24/7. The night surcharge is in our published price list and is repeated on the phone before the tradesperson sets off, along with the price of the job itself.",
          },
          {
            question: "Should the lock be changed between tenants?",
            answer:
              "It's strongly advised, and it's the most common request in this area. Replacing the cylinder alone is enough in most cases: quicker and cheaper than a full lock, and it guarantees no old key set still opens the door.",
          },
          {
            question: "Do you work nights around Pigalle?",
            answer:
              "Yes, 24/7 across the whole 9th. The night surcharge is stated on the phone before anyone travels, at the same time as the job price.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "12",
    slug: "serrurier-paris-12",
    content: {
      fr: {
        title: "Serrurier Paris 12e",
        keyword: "serrurier paris 12",
        intro:
          "Le 12e juxtapose le faubourg ancien d'Aligre et de Faidherbe et les immeubles récents de Bercy, avec leurs parkings, caves et locaux à vélos. Deux réalités très différentes : serrures anciennes de faubourg d'un côté, portes techniques et contrôle d'accès de l'autre. La gare de Lyon, elle, garantit du passage à toute heure.",
        landmarks: [
          "Gare de Lyon",
          "Bercy Village",
          "Opéra Bastille",
          "Coulée verte René-Dumont",
          "Bois de Vincennes",
          "Marché d'Aligre",
        ],
        neighborhoods: ["Bel-Air", "Picpus", "Bercy", "Quinze-Vingts"],
        localContext: [
          "Deux parcs coexistent dans le 12e. Autour d'Aligre et de la rue du Faubourg-Saint-Antoine, l'ancien domine, avec des cours d'anciens ateliers et des serrures parfois d'origine. À Bercy, les résidences des années 1980-2000 apportent parkings, caves, locaux à vélos et contrôle d'accès centralisé.",
          "Ces annexes sont une part réelle de l'activité : une porte de cave ou de box se bloque exactement comme une porte d'entrée, mais avec un matériel souvent moins entretenu.",
        ],
        commonJobs: [
          "Ouverture de cave, de box ou de local à vélos.",
          "Ouverture de porte d'appartement de nuit, secteur gare de Lyon.",
          "Remplacement de cylindre dans les résidences de Bercy.",
        ],
        faq: [
          {
            question: "Le tarif d'une ouverture de cave est-il le même ?",
            answer:
              "Oui, il suit la même grille qu'une porte d'appartement, avec le même principe : le montant est annoncé avant le déplacement. La différence porte sur le matériel, un cadenas ou une serrure de box étant souvent plus simple à traiter qu'une porte palière.",
          },
          {
            question:
              "Puis-je faire changer la serrure de ma cave sans le syndic ?",
            answer:
              "La porte de votre cave est privative dans la plupart des règlements, donc oui. En revanche la porte d'accès au sous-sol est commune : elle relève du syndic, et nous fournissons un devis rédigé pour lui être transmis.",
          },
          {
            question: "Ouvrez-vous les portes de cave et de box ?",
            answer:
              "Oui. Cave, box et local à vélos sont des demandes courantes dans le 12e, souvent sur des cadenas ou des serrures peu entretenues. Le tarif suit la même grille que pour une porte d'appartement, avec le même principe : annoncé avant, pas après.",
          },
          {
            question: "Intervenez-vous la nuit près de la gare de Lyon ?",
            answer:
              "Oui, 24h/24. C'est même l'un des secteurs où les appels de nuit sont les plus fréquents, à l'arrivée des derniers trains.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 12th arrondissement",
        keyword: "locksmith paris 12th arrondissement",
        intro:
          "The 12th sets the old faubourg around Aligre and Faidherbe against the newer blocks of Bercy, with their car parks, cellars and bike stores. Two very different realities: old faubourg locks on one side, technical doors and access control on the other. Gare de Lyon, meanwhile, guarantees footfall at any hour.",
        landmarks: [
          "Gare de Lyon",
          "Bercy Village",
          "Opéra Bastille",
          "Coulée verte René-Dumont",
          "Bois de Vincennes",
          "Marché d'Aligre",
        ],
        neighborhoods: ["Bel-Air", "Picpus", "Bercy", "Quinze-Vingts"],
        localContext: [
          "Two kinds of building stock coexist in the 12th. Around Aligre and rue du Faubourg-Saint-Antoine the older fabric dominates, with former workshop courtyards and sometimes original locks. At Bercy, blocks from the 1980s–2000s bring car parks, cellars, bike stores and centralised access control.",
          "Those secondary spaces are a real share of the work: a cellar or garage door jams exactly like a front door, but usually on less well-maintained hardware.",
        ],
        commonJobs: [
          "Opening cellars, lock-ups and bike stores.",
          "Night openings of flat doors around Gare de Lyon.",
          "Cylinder replacement in the Bercy residences.",
        ],
        faq: [
          {
            question: "Does opening a cellar cost the same?",
            answer:
              "Yes, it follows the same grid as a flat door, on the same principle: the amount is stated before anyone travels. What differs is the hardware — a padlock or lock-up lock is often simpler to deal with than a flat door.",
          },
          {
            question: "Can I change my cellar lock without the managing agent?",
            answer:
              "Your cellar door is private property under most building rules, so yes. The door into the basement itself is a common part, which belongs to the agent — we provide a quote written to be passed on to them.",
          },
          {
            question: "Do you open cellar and garage doors?",
            answer:
              "Yes. Cellars, lock-ups and bike stores are common requests in the 12th, often on padlocks or poorly maintained locks. The price follows the same grid as a flat door, on the same principle: stated before, not after.",
          },
          {
            question: "Do you come out at night near Gare de Lyon?",
            answer:
              "Yes, around the clock. It's one of the areas where night calls are most frequent, as the last trains come in.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "13",
    slug: "serrurier-paris-13",
    content: {
      fr: {
        title: "Serrurier Paris 13e",
        keyword: "serrurier paris 13",
        intro:
          "Le 13e est l'arrondissement des tours : Olympiades, Italie 13, grands ensembles des années 1960-70 équipés de halls sous Vigik et de serrures multipoints d'origine qui demandent réglage plutôt que remplacement. À côté, la Butte-aux-Cailles a gardé ses petites maisons et ses portes en bois, et la BnF a amené des programmes neufs le long de la Seine.",
        landmarks: [
          "Place d'Italie",
          "Butte-aux-Cailles",
          "BnF François-Mitterrand",
          "Les Olympiades",
          "Hôpital Pitié-Salpêtrière",
          "Station F",
        ],
        neighborhoods: ["Gare", "Salpêtrière", "Maison-Blanche", "Croulebarbe"],
        localContext: [
          "Le 13e est l'arrondissement des grands ensembles : Olympiades, Italie 13, tours des années 1960-70 équipées de serrures multipoints d'origine. Sur ce matériel, le blocage vient presque toujours d'un affaissement de porte ou d'une tringlerie désalignée, pas d'un mécanisme mort.",
          "C'est un point qui compte financièrement : le réflexe du remplacement complet coûte plusieurs centaines d'euros là où un réglage suffit. Nous diagnostiquons avant de proposer, systématiquement.",
        ],
        commonJobs: [
          "Réglage de serrure multipoints qui ne verrouille plus en haut ou en bas.",
          "Ouverture de porte dans les tours, avec accès hall sous Vigik.",
          "Changement de cylindre après perte de clés dans un grand ensemble.",
        ],
        faq: [
          {
            question: "Ma multipoints coince : réparation ou remplacement ?",
            answer:
              "Le diagnostic d'abord. Quand un seul point ne prend plus, la cause est presque toujours mécanique : porte affaissée, gâches désalignées, tringlerie à régler. La réparation coûte une fraction du remplacement, et nous ne proposons une serrure neuve que si le mécanisme est réellement hors service.",
          },
          {
            question: "Les halls sont sous Vigik, cela pose-t-il un problème ?",
            answer:
              "Non. Nous intervenons en présence de l'occupant, ou avec le gardien pour une partie commune. Le badge Vigik est géré par le bailleur ou le syndic : nous traitons la serrurerie, pas le système d'accès.",
          },
          {
            question:
              "Ma serrure multipoints ne se ferme plus : réparation ou remplacement ?",
            answer:
              "Souvent une réparation suffit. Sur les portes des grands ensembles, le blocage vient fréquemment d'un réglage ou d'une tringlerie désalignée, pas d'un mécanisme mort. L'artisan diagnostique avant de proposer un remplacement, qui reste plus cher.",
          },
          {
            question:
              "Les halls sont sous Vigik : pouvez-vous quand même accéder ?",
            answer:
              "Oui. Nous intervenons sur rendez-vous avec l'occupant ou le gardien, et nous pouvons aussi traiter la serrurerie du hall elle-même pour une copropriété. Le badge Vigik est géré par la résidence, pas par nous.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 13th arrondissement",
        keyword: "locksmith paris 13th arrondissement",
        intro:
          "The 13th is the arrondissement of towers: Les Olympiades, Italie 13, 1960s–70s estates with Vigik-controlled lobbies and original multi-point locks that need adjusting more often than replacing. Alongside them, the Butte-aux-Cailles has kept its small houses and timber doors, and the national library has brought new-build along the Seine.",
        landmarks: [
          "Place d'Italie",
          "Butte-aux-Cailles",
          "BnF François-Mitterrand",
          "Les Olympiades",
          "Pitié-Salpêtrière hospital",
          "Station F",
        ],
        neighborhoods: ["Gare", "Salpêtrière", "Maison-Blanche", "Croulebarbe"],
        localContext: [
          "The 13th is the arrondissement of large estates: Les Olympiades, Italie 13, 1960s–70s towers on original multi-point locks. On that hardware, jamming almost always comes from a dropped door or misaligned linkage rather than a dead mechanism.",
          "That matters financially: reaching straight for a full replacement costs several hundred euros where an adjustment would do. We diagnose before proposing, every time.",
        ],
        commonJobs: [
          "Adjusting multi-point locks that no longer engage top or bottom.",
          "Door openings in the towers, with Vigik-controlled lobby access.",
          "Cylinder changes after lost keys on an estate.",
        ],
        faq: [
          {
            question: "My multi-point lock is sticking — repair or replace?",
            answer:
              "Diagnosis first. When a single point stops engaging, the cause is nearly always mechanical: a dropped door, misaligned keeps, linkage needing adjustment. Repair costs a fraction of replacement, and we only propose a new lock if the mechanism is genuinely finished.",
          },
          {
            question: "The lobbies use Vigik — is that a problem?",
            answer:
              "No. We attend with the occupant present, or with the caretaker for common areas. The Vigik badge is managed by the landlord or the agent: we handle the locks, not the access system.",
          },
          {
            question:
              "My multi-point lock won't close — repair or replacement?",
            answer:
              "A repair is often enough. On estate doors, jamming usually comes from an adjustment or misaligned linkage rather than a dead mechanism. The tradesperson diagnoses it before proposing a replacement, which costs more.",
          },
          {
            question: "The lobbies use Vigik — can you still get in?",
            answer:
              "Yes. We attend by appointment with the occupant or caretaker, and we can also work on the lobby door itself for the building. The Vigik badge system is managed by the residence, not by us.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "14",
    slug: "serrurier-paris-14",
    content: {
      fr: {
        title: "Serrurier Paris 14e",
        keyword: "serrurier paris 14",
        intro:
          "De Montparnasse à la Cité universitaire, le 14e mélange immeubles en brique des années 1930, petites surfaces étudiantes et anciens ateliers d'artistes aux portes atypiques, notamment autour de Plaisance et Denfert-Rochereau. Les studios y sont nombreux, donc les clés oubliées à l'intérieur aussi.",
        landmarks: [
          "Tour Montparnasse",
          "Catacombes de Paris",
          "Parc Montsouris",
          "Cité internationale universitaire",
          "Place Denfert-Rochereau",
          "Rue Daguerre",
        ],
        neighborhoods: [
          "Montparnasse",
          "Petit-Montrouge",
          "Plaisance",
          "Parc-de-Montsouris",
        ],
        localContext: [
          "Le 14e mélange immeubles en brique des années 1930, petites surfaces autour de la Cité universitaire, et anciens ateliers d'artistes vers Plaisance et Denfert. Ces derniers posent une vraie contrainte : portes métalliques, menuiseries larges, entraxes non standard qui n'acceptent pas une serrure de catalogue.",
          "Sur ce type de porte, l'artisan mesure sur place avant de commander. C'est plus lent qu'une pose immédiate, mais c'est la seule façon d'éviter un matériel mal adapté qui se dérègle en trois mois.",
        ],
        commonJobs: [
          "Ouverture de studio, très fréquent autour de la Cité universitaire.",
          "Serrure sur porte d'atelier ou menuiserie hors standard.",
          "Changement de cylindre dans les immeubles des années 1930.",
        ],
        faq: [
          {
            question:
              "Ma porte d'atelier accepte-t-elle une serrure sécurisée ?",
            answer:
              "Le plus souvent oui, mais rarement en standard. L'entraxe, l'épaisseur du vantail et le sens d'ouverture déterminent le matériel. L'artisan mesure sur place, puis commande la pièce adaptée : c'est ce qui évite un montage bricolé qui se dérègle rapidement.",
          },
          {
            question: "Clé perdue un dimanche, faut-il attendre lundi ?",
            answer:
              "Non, nous intervenons le week-end comme en semaine. Le supplément week-end est annoncé au téléphone avant le déplacement, en même temps que le tarif de l'ouverture.",
          },
          {
            question:
              "Intervenez-vous sur les portes d'atelier et les verrières ?",
            answer:
              "Oui. Les anciens ateliers du 14e ont souvent des portes métalliques ou des menuiseries larges qui n'acceptent pas une serrure standard. L'artisan mesure l'entraxe et l'épaisseur sur place avant de commander le matériel adapté.",
          },
          {
            question: "Clé perdue un dimanche, faut-il attendre lundi ?",
            answer:
              "Non, nous intervenons le week-end comme en semaine. Le supplément week-end est annoncé au téléphone avant le déplacement, avec le tarif de l'ouverture.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 14th arrondissement",
        keyword: "locksmith paris 14th arrondissement",
        intro:
          "From Montparnasse to the Cité universitaire, the 14th mixes 1930s brick blocks, small student flats and former artists' studios with unusual doors, especially around Plaisance and Denfert-Rochereau. There are a lot of studios here — and therefore a lot of keys left on the wrong side of the door.",
        landmarks: [
          "Tour Montparnasse",
          "The Catacombs",
          "Parc Montsouris",
          "Cité internationale universitaire",
          "Place Denfert-Rochereau",
          "Rue Daguerre",
        ],
        neighborhoods: [
          "Montparnasse",
          "Petit-Montrouge",
          "Plaisance",
          "Parc-de-Montsouris",
        ],
        localContext: [
          "The 14th mixes 1930s brick blocks, small flats around the Cité universitaire, and former artists' studios towards Plaisance and Denfert. The last of those bring a real constraint: metal doors, wide frames, non-standard backsets that won't take a catalogue lock.",
          "On that kind of door the tradesperson measures before ordering. It's slower than fitting on the spot, but it's the only way to avoid ill-fitting hardware that drifts out of adjustment within months.",
        ],
        commonJobs: [
          "Studio openings, very frequent around the Cité universitaire.",
          "Locks on workshop doors and non-standard joinery.",
          "Cylinder changes in the 1930s blocks.",
        ],
        faq: [
          {
            question: "Will my workshop door take a security lock?",
            answer:
              "Usually yes, but rarely a standard one. The backset, leaf thickness and hand of the door decide the hardware. The tradesperson measures on site and then orders the right part — which avoids a bodged fit that drifts out of adjustment quickly.",
          },
          {
            question: "Keys lost on a Sunday — do I wait until Monday?",
            answer:
              "No, we work weekends as well as weekdays. The weekend surcharge is stated on the phone before travel, at the same time as the price of the opening.",
          },
          {
            question: "Do you work on studio and workshop doors?",
            answer:
              "Yes. The 14th's former workshops often have metal doors or wide frames that won't take a standard lock. The tradesperson measures the backset and thickness on site before ordering suitable hardware.",
          },
          {
            question: "Keys lost on a Sunday — do I have to wait until Monday?",
            answer:
              "No, we work weekends as well as weekdays. The weekend surcharge is stated on the phone before anyone travels, along with the price of the opening.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "15",
    slug: "serrurier-paris-15",
    content: {
      fr: {
        title: "Serrurier Paris 15e",
        keyword: "serrurier paris 15",
        intro:
          "Le 15e est l'arrondissement le plus peuplé de Paris, très familial, avec de grandes copropriétés récentes du Front de Seine et de Beaugrenelle équipées de badges Vigik et de portes palières multipoints, et un tissu commerçant dense rue du Commerce et rue de la Convention.",
        landmarks: [
          "Parc André-Citroën",
          "Beaugrenelle",
          "Porte de Versailles",
          "Hôpital Necker",
          "Front de Seine",
          "Rue du Commerce",
        ],
        neighborhoods: ["Grenelle", "Javel", "Necker", "Saint-Lambert"],
        localContext: [
          "Le 15e est le plus peuplé de Paris et le plus familial. Les grandes copropriétés récentes du Front de Seine et de Beaugrenelle y imposent leurs règles : badge Vigik pour le hall, portes palières multipoints d'origine, et parfois un organigramme géré par la résidence.",
          "Ce dernier point mérite une vérification avant toute intervention : remplacer isolément un cylindre inscrit à un organigramme peut vous priver de l'accès aux parties communes. L'artisan le contrôle avant de proposer un matériel.",
        ],
        commonJobs: [
          "Changement de cylindre dans une copropriété récente, avec vérification d'organigramme.",
          "Réglage ou réparation d'une porte palière multipoints.",
          "Serrures de commerces rue du Commerce et rue de la Convention.",
        ],
        faq: [
          {
            question: "Mon cylindre fait partie d'un organigramme, que faire ?",
            answer:
              "Il faut commander un cylindre compatible auprès du gestionnaire de l'organigramme, sinon vous perdez l'accès aux parties communes. Nous identifions le cas avant d'intervenir et vous orientons vers la bonne démarche plutôt que de poser un cylindre incompatible.",
          },
          {
            question: "Quel est le délai réel dans le 15e ?",
            answer:
              "Moins de 30 minutes selon le secteur et l'heure. Le 15e est vaste : entre la porte de Versailles et le Front de Seine, le trajet n'est pas le même. Nous annonçons un délai pour votre rue, pas une moyenne d'arrondissement.",
          },
          {
            question:
              "Dans une copropriété récente, faut-il une autorisation pour changer son cylindre ?",
            answer:
              "Non : le cylindre de votre porte palière relève de votre partie privative. L'autorisation devient nécessaire si vous remplacez la porte ou modifiez son aspect côté palier, ou si le cylindre fait partie d'un organigramme géré par la résidence — auquel cas nous vous le signalons avant d'intervenir.",
          },
          {
            question: "Quel est le délai d'intervention dans le 15e ?",
            answer:
              "Moins de 30 minutes selon le secteur et l'heure. Le délai réel vous est annoncé au téléphone, avec le tarif : nous préférons annoncer 40 minutes tenues que 15 minutes impossibles.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 15th arrondissement",
        keyword: "locksmith paris 15th arrondissement",
        intro:
          "The 15th is the most populated arrondissement in Paris, and a family one: large recent blocks along the Front de Seine and at Beaugrenelle with Vigik badges and multi-point flat doors, plus a dense run of shops along rue du Commerce and rue de la Convention.",
        landmarks: [
          "Parc André-Citroën",
          "Beaugrenelle",
          "Porte de Versailles",
          "Necker hospital",
          "Front de Seine",
          "Rue du Commerce",
        ],
        neighborhoods: ["Grenelle", "Javel", "Necker", "Saint-Lambert"],
        localContext: [
          "The 15th is the most populated arrondissement in Paris and the most family-oriented. The large recent blocks along the Front de Seine and at Beaugrenelle set their own rules: a Vigik badge for the lobby, original multi-point flat doors, and sometimes a master-key plan run by the residence.",
          "That last point is worth checking before any work: replacing a cylinder that belongs to a master-key plan on its own can cut off your access to the common parts. The tradesperson checks it before proposing hardware.",
        ],
        commonJobs: [
          "Cylinder changes in recent blocks, with a master-key check first.",
          "Adjusting or repairing multi-point flat doors.",
          "Shop locks along rue du Commerce and rue de la Convention.",
        ],
        faq: [
          {
            question: "My cylinder is part of a master-key plan — what now?",
            answer:
              "You need a compatible cylinder ordered through whoever manages the plan, otherwise you lose access to the common parts. We identify that before starting and point you to the right route rather than fitting an incompatible cylinder.",
          },
          {
            question: "What's the real response time in the 15th?",
            answer:
              "Under 30 minutes depending on the area and the hour. The 15th is large: Porte de Versailles and the Front de Seine are not the same journey. We quote a time for your street, not an arrondissement average.",
          },
          {
            question:
              "In a recent block, do I need permission to change my cylinder?",
            answer:
              "No: the cylinder in your flat door is your private property. Permission is needed if you replace the door or change how it looks from the landing, or if the cylinder belongs to a master-key plan run by the residence — in which case we tell you before doing anything.",
          },
          {
            question: "How quickly can you get to the 15th?",
            answer:
              "Under 30 minutes depending on the area and the hour. The real time is given to you on the phone along with the price: we'd rather promise 40 minutes and keep it than promise 15 and miss.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "16",
    slug: "serrurier-paris-16",
    content: {
      fr: {
        title: "Serrurier Paris 16e",
        keyword: "serrurier paris 16",
        intro:
          "Trocadéro, Passy, Auteuil : un parc résidentiel de valeur, avec gardiens, hôtels particuliers et appartements dont les contrats d'assurance imposent fréquemment une serrure certifiée A2P et, parfois, un blindage. Les absences prolongées, résidences secondaires comprises, y rendent la sécurisation des accès plus déterminante que la vitesse d'ouverture.",
        landmarks: [
          "Trocadéro",
          "Palais de Tokyo",
          "Bois de Boulogne",
          "Parc des Princes",
          "Fondation Louis Vuitton",
          "Village de Passy",
        ],
        neighborhoods: ["Auteuil", "La Muette", "Chaillot", "Porte-Dauphine"],
        localContext: [
          "Le 16e concentre un parc résidentiel de valeur : immeubles avec gardien, hôtels particuliers, appartements dont le contrat d'assurance impose fréquemment une certification A2P et un nombre minimal de points de fermeture.",
          "Les absences prolongées y sont fréquentes, résidences secondaires comprises. Le sujet n'est alors plus la vitesse d'ouverture mais la solidité de l'ensemble : sur une maison ou un grand appartement, le point faible est rarement la porte principale mais l'accès de service ou la fenêtre de rez-de-chaussée.",
        ],
        commonJobs: [
          "Pose de serrure ou cylindre certifié A2P sur exigence d'assurance.",
          "Blindage de porte et renfort de dormant avant une absence prolongée.",
          "Sécurisation des accès secondaires : porte de service, cour, sous-sol.",
        ],
        faq: [
          {
            question: "Quel niveau de protection avant une absence longue ?",
            answer:
              "Cela dépend de l'exposition réelle, pas d'un catalogue. Une visite permet de dire ce qui mérite un renfort — souvent les accès secondaires plutôt que la porte d'entrée — et ce qui n'en a pas besoin. C'est l'inverse d'une vente de blindage systématique.",
          },
          {
            question: "Le devis suffit-il pour mon assureur ?",
            answer:
              "Oui dans la plupart des cas, puis la facture. Les deux mentionnent le matériel posé, sa marque et sa certification A2P avec le nombre de points de fermeture : c'est exactement ce qu'un assureur demande en cas de sinistre.",
          },
          {
            question:
              "Quelle certification demander pour satisfaire mon assurance ?",
            answer:
              "Regardez la clause « moyens de protection » de votre contrat : elle cite en général un nombre de points de fermeture et une certification A2P. Le devis mentionne précisément le matériel posé et sa certification, ce qui vous permet de le transmettre tel quel à l'assureur.",
          },
          {
            question: "Que sécuriser avant une absence prolongée ?",
            answer:
              "Le point faible est rarement la porte principale : ce sont les accès secondaires, portes de service, fenêtres de rez-de-chaussée et accès par la cour. Une visite permet d'identifier ce qui mérite un renfort et ce qui n'en a pas besoin — l'inverse d'une vente de blindage systématique.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 16th arrondissement",
        keyword: "locksmith paris 16th arrondissement",
        intro:
          "Trocadéro, Passy, Auteuil: high-value housing with caretakers, private mansions and flats whose insurance policies frequently require an A2P-certified lock and sometimes full reinforcement. Long absences, second homes included, make securing access points matter more here than raw opening speed.",
        landmarks: [
          "Trocadéro",
          "Palais de Tokyo",
          "Bois de Boulogne",
          "Parc des Princes",
          "Fondation Louis Vuitton",
          "Passy village",
        ],
        neighborhoods: ["Auteuil", "La Muette", "Chaillot", "Porte-Dauphine"],
        localContext: [
          "The 16th concentrates high-value housing: buildings with caretakers, private mansions, flats whose insurance policies frequently require A2P certification and a minimum number of locking points.",
          "Long absences are common here, second homes included. The question then isn't opening speed but the strength of the whole assembly: on a house or a large flat the weak point is rarely the front door but the service entrance or a ground-floor window.",
        ],
        commonJobs: [
          "Fitting A2P-certified locks or cylinders to meet an insurance requirement.",
          "Door reinforcement and frame strengthening before a long absence.",
          "Securing secondary access: service doors, courtyards, basements.",
        ],
        faq: [
          {
            question: "What level of protection before a long absence?",
            answer:
              "It depends on real exposure, not a catalogue. A visit establishes what deserves reinforcing — often the secondary ways in rather than the front door — and what doesn't. That's the opposite of selling armour plating by default.",
          },
          {
            question: "Is the quote enough for my insurer?",
            answer:
              "Usually yes, followed by the invoice. Both name the hardware fitted, its brand and its A2P certification with the number of locking points: exactly what an insurer asks for when handling a claim.",
          },
          {
            question: "Which certification will satisfy my insurer?",
            answer:
              'Look at the "protection measures" clause in your policy: it usually names a number of locking points and an A2P grade. The quote states exactly what was fitted and its certification, so you can forward it to the insurer as is.',
          },
          {
            question: "What should be secured before a long absence?",
            answer:
              "The weak point is rarely the front door: it's the secondary ways in — service doors, ground-floor windows, courtyard access. A visit identifies what genuinely needs reinforcing and what doesn't, which is the opposite of selling reinforcement by default.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "17",
    slug: "serrurier-paris-17",
    content: {
      fr: {
        title: "Serrurier Paris 17e",
        keyword: "serrurier paris 17",
        intro:
          "Le 17e réunit trois mondes : le haussmannien cossu des Ternes et de la plaine Monceau, le village des Batignolles, et l'éco-quartier Clichy-Batignolles avec ses immeubles neufs, portes coupe-feu et contrôle d'accès centralisé. Les interventions n'y ont ni les mêmes contraintes ni le même matériel.",
        landmarks: [
          "Parc Martin-Luther-King",
          "Palais des Congrès, Porte Maillot",
          "Square des Batignolles",
          "Tribunal de Paris",
          "Avenue des Ternes",
          "Marché des Batignolles",
        ],
        neighborhoods: ["Ternes", "Plaine-Monceau", "Batignolles", "Épinettes"],
        localContext: [
          "Le 17e réunit trois parcs très différents : le haussmannien cossu des Ternes et de la plaine Monceau, le tissu de village des Batignolles, et l'éco-quartier Clichy-Batignolles avec ses immeubles neufs. Les contraintes n'y sont pas les mêmes d'une rue à l'autre.",
          "Dans le neuf, la porte palière est souvent certifiée coupe-feu : y percer ou y poser une serrure quelconque fait tomber la certification. Nous posons du matériel compatible avec le degré coupe-feu, ou nous orientons vers le fabricant quand c'est la seule réponse correcte.",
        ],
        commonJobs: [
          "Intervention sur porte palière coupe-feu dans les résidences récentes.",
          "Changement de serrure sur porte haussmannienne aux Ternes et à Monceau.",
          "Ouverture de porte et cylindre dans le tissu locatif des Épinettes.",
        ],
        faq: [
          {
            question: "Peut-on changer la serrure d'une porte coupe-feu ?",
            answer:
              "Oui, mais uniquement avec du matériel compatible avec son degré de résistance au feu. Une serrure quelconque, ou un perçage mal placé, fait tomber la certification de l'ensemble — ce qui peut vous être opposé par la copropriété ou l'assurance.",
          },
          {
            question:
              "Intervenez-vous dans les immeubles neufs de Clichy-Batignolles ?",
            answer:
              "Oui. L'accès y passe souvent par un contrôle centralisé : prévenir le gardien ou la résidence avant notre passage fait gagner un temps réel sur place.",
          },
          {
            question:
              "Peut-on modifier une porte coupe-feu dans une résidence neuve ?",
            answer:
              "Pas librement : une porte palière coupe-feu est certifiée comme un ensemble, et y percer ou y poser n'importe quelle serrure fait tomber la certification. Nous posons du matériel compatible avec le degré coupe-feu, ou nous vous orientons vers le fabricant quand c'est la seule option correcte.",
          },
          {
            question: "Intervenez-vous dans les immeubles neufs du secteur ?",
            answer:
              "Oui, à Clichy-Batignolles comme dans l'ancien. Sur le neuf, l'accès passe souvent par un contrôle centralisé : prévenir le gardien ou la résidence en amont fait gagner du temps sur place.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 17th arrondissement",
        keyword: "locksmith paris 17th arrondissement",
        intro:
          "The 17th holds three worlds: the well-off Haussmann streets of Ternes and plaine Monceau, the village feel of Batignolles, and the Clichy-Batignolles eco-district with its new blocks, fire doors and centralised access control. The constraints and the hardware differ completely between them.",
        landmarks: [
          "Martin Luther King park",
          "Palais des Congrès, Porte Maillot",
          "Square des Batignolles",
          "Paris courthouse",
          "Avenue des Ternes",
          "Batignolles market",
        ],
        neighborhoods: ["Ternes", "Plaine-Monceau", "Batignolles", "Épinettes"],
        localContext: [
          "The 17th holds three very different kinds of stock: the well-off Haussmann streets of Ternes and plaine Monceau, the village fabric of Batignolles, and the new Clichy-Batignolles eco-district. The constraints change from one street to the next.",
          "In new buildings the flat door is often fire-rated: drilling it or fitting just any lock voids that certification. We fit hardware compatible with the fire rating, or point you to the manufacturer when that's the only correct answer.",
        ],
        commonJobs: [
          "Work on fire-rated flat doors in recent residences.",
          "Lock changes on Haussmann doors around Ternes and Monceau.",
          "Door openings and cylinders across the rental stock in Les Épinettes.",
        ],
        faq: [
          {
            question: "Can the lock on a fire door be changed?",
            answer:
              "Yes, but only with hardware compatible with its fire rating. Any other lock, or a badly placed hole, voids the certification of the whole assembly — which the building or your insurer can hold against you.",
          },
          {
            question: "Do you work in the new Clichy-Batignolles buildings?",
            answer:
              "Yes. Access there often runs through centralised control: telling the caretaker or the residence before we arrive saves real time on site.",
          },
          {
            question: "Can a fire door in a new block be modified?",
            answer:
              "Not freely: a fire-rated flat door is certified as an assembly, and drilling it or fitting just any lock voids that certification. We fit hardware compatible with the fire rating, or point you to the manufacturer when that's the only correct answer.",
          },
          {
            question: "Do you work in the area's new buildings?",
            answer:
              "Yes, in Clichy-Batignolles as much as in the older stock. In new blocks access often runs through centralised control: telling the caretaker or the residence in advance saves time on site.",
          },
        ],
      },
    },
  },
  {
    kind: "arrondissement",
    number: "19",
    slug: "serrurier-paris-19",
    content: {
      fr: {
        title: "Serrurier Paris 19e",
        keyword: "serrurier paris 19",
        intro:
          "Des Buttes-Chaumont au canal de l'Ourcq, le 19e associe grands ensembles et logement social à interphone et Vigik, rues en pente autour de la place des Fêtes et du Danube, et programmes neufs le long de Rosa-Parks et de l'avenue de Flandre. Les demandes y vont de l'ouverture de porte au remplacement de serrure après effraction.",
        landmarks: [
          "Parc des Buttes-Chaumont",
          "Cité des sciences, La Villette",
          "Canal de l'Ourcq",
          "Philharmonie de Paris",
          "Place des Fêtes",
          "Quartier Rosa-Parks",
        ],
        neighborhoods: ["La Villette", "Pont-de-Flandre", "Amérique", "Combat"],
        localContext: [
          "Le 19e associe grands ensembles, logement social et programmes neufs autour de Rosa-Parks et de l'avenue de Flandre. Les halls sont majoritairement sous interphone et Vigik, et une part des demandes concerne des parties communes plutôt que des logements.",
          "La topographie compte aussi : autour des Buttes-Chaumont, du Danube et de la place des Fêtes, les rues en pente et les impasses rallongent l'accès véhicule, ce que le délai annoncé doit refléter honnêtement.",
        ],
        commonJobs: [
          "Ouverture de porte en grand ensemble, accès hall avec le gardien.",
          "Changement de serrure après effraction, avec facture pour le bailleur.",
          "Serrure de porte de hall et local poubelles pour une copropriété.",
        ],
        faq: [
          {
            question: "Je suis locataire d'un bailleur social, qui paie ?",
            answer:
              "Cela dépend de la cause et de votre bail : une serrure détériorée par effraction relève souvent du bailleur ou de l'assurance, une clé perdue est en général à votre charge. Nous établissons un devis que vous pouvez faire valider avant l'intervention.",
          },
          {
            question:
              "Intervenez-vous sur les parties communes d'une copropriété ?",
            answer:
              "Oui : porte de hall, local poubelles, local vélos, accès parking. La demande passe par le syndic ou le gardien, et le devis est rédigé pour être présenté en assemblée générale si nécessaire.",
          },
          {
            question: "En logement social, qui paie le changement de serrure ?",
            answer:
              "Cela dépend de la cause et de votre bail : une serrure endommagée par effraction relève souvent de l'assurance ou du bailleur, une clé perdue est en général à la charge du locataire. Nous fournissons un devis puis une facture détaillée que vous pouvez transmettre au bailleur ou à l'assureur, sans avancer de réponse à leur place.",
          },
          {
            question:
              "Intervenez-vous place des Fêtes, au Danube et à Rosa-Parks ?",
            answer:
              "Oui, dans tout le 19e, y compris les rues en pente du secteur Danube où l'accès véhicule est parfois compliqué. Le délai annoncé au téléphone en tient compte.",
          },
        ],
      },
      en: {
        title: "Locksmith Paris 19th arrondissement",
        keyword: "locksmith paris 19th arrondissement",
        intro:
          "From the Buttes-Chaumont to the Ourcq canal, the 19th combines large estates and social housing with entryphones and Vigik, steep streets around Place des Fêtes and Danube, and new development along Rosa-Parks and avenue de Flandre. Requests here run from simple door openings to lock replacement after a break-in.",
        landmarks: [
          "Parc des Buttes-Chaumont",
          "Cité des sciences, La Villette",
          "Ourcq canal",
          "Philharmonie de Paris",
          "Place des Fêtes",
          "Rosa-Parks district",
        ],
        neighborhoods: ["La Villette", "Pont-de-Flandre", "Amérique", "Combat"],
        localContext: [
          "The 19th combines large estates, social housing and new development around Rosa-Parks and avenue de Flandre. Lobbies are mostly on entryphones and Vigik, and a share of requests concern common parts rather than flats.",
          "The terrain matters too: around the Buttes-Chaumont, Danube and Place des Fêtes, steep streets and dead ends stretch vehicle access, which the quoted time should reflect honestly.",
        ],
        commonJobs: [
          "Door openings on estates, lobby access arranged with the caretaker.",
          "Lock replacement after a break-in, with an invoice for the landlord.",
          "Lobby and bin-store door locks for buildings.",
        ],
        faq: [
          {
            question: "I rent from a social landlord — who pays?",
            answer:
              "It depends on the cause and your tenancy: a lock damaged in a break-in is often the landlord's or insurer's responsibility, while lost keys are usually yours. We issue a quote you can have approved before the work.",
          },
          {
            question: "Do you work on a building's common parts?",
            answer:
              "Yes: lobby doors, bin stores, bike stores, car-park access. The request goes through the managing agent or caretaker, and the quote is written so it can be put to a general meeting if needed.",
          },
          {
            question: "In social housing, who pays for a lock change?",
            answer:
              "It depends on the cause and on your tenancy: a lock damaged in a break-in is often covered by insurance or the landlord, while lost keys are usually the tenant's responsibility. We provide a quote and then a detailed invoice you can forward to the landlord or insurer — we don't answer in their place.",
          },
          {
            question: "Do you cover Place des Fêtes, Danube and Rosa-Parks?",
            answer:
              "Yes, across the whole 19th, including the steep streets around Danube where vehicle access can be awkward. The time quoted on the phone accounts for that.",
          },
        ],
      },
    },
  },
];
