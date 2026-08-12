import type { Zone } from "@/lib/zones/types";

// The seven Île-de-France departments.
//
// Their slugs carry the head keyword — /serrurier-hauts-de-seine-92, not
// /zones/hauts-de-seine-92 — matching the arrondissement and city pages and the
// pattern the benchmark site uses (`/cities/paris-cleaning-service`). The
// hierarchy is expressed by breadcrumbs and internal links, not by nesting.
//
// `neighborhoods` holds real communes rather than quartiers here: it's what a
// visitor scans to answer "do you come to my town?". Naming a commune is a
// coverage statement, not a page — CLAUDE.md §3 forbids spinning up ~90 thin
// city pages, so a commune gets its own page only when there is real local
// substance to write (see cities.ts). Everything else lives on its department
// hub, with the "your town isn't listed?" fallback underneath.
export const DEPARTMENT_ZONES: Zone[] = [
  {
    kind: "department",
    number: "92",
    slug: "serrurier-hauts-de-seine-92",
    content: {
      fr: {
        title: "Serrurier Hauts-de-Seine (92)",
        keyword: "serrurier hauts-de-seine",
        intro:
          "Le 92 est le département le plus dense de la petite couronne : tours de bureaux de La Défense, résidences de standing à Neuilly et Boulogne, immeubles récents à Issy et Levallois, pavillons à Rueil et Antony. Deux réalités s'y croisent en permanence — des sièges d'entreprise avec contrôle d'accès par badge, et des copropriétés où l'assureur réclame une serrure certifiée A2P. Les délais varient selon l'accès et l'heure, et nous les annonçons avant de partir.",
        landmarks: [
          "Quartier d'affaires de La Défense",
          "Île Seguin et le Trapèze, Boulogne",
          "Île de la Jatte, Neuilly",
          "Préfecture de Nanterre",
          "Parc de Sceaux",
          "Château de Malmaison, Rueil",
        ],
        neighborhoods: [
          "Boulogne-Billancourt",
          "Neuilly-sur-Seine",
          "Levallois-Perret",
          "Clichy",
          "Nanterre",
          "Courbevoie",
          "Puteaux",
          "Issy-les-Moulineaux",
          "Asnières-sur-Seine",
          "Colombes",
          "Rueil-Malmaison",
          "Antony",
          "Montrouge",
          "Malakoff",
          "Suresnes",
          "Meudon",
          "Clamart",
          "Bagneux",
          "Vanves",
          "Sceaux",
        ],
        localContext: [
          "Le 92 juxtapose des parcs très différents : tours de bureaux à La Défense et Courbevoie, résidences de standing à Neuilly et Boulogne, programmes récents à Issy et Levallois, pavillons à Rueil, Antony ou Sceaux. Le matériel adapté n'est pas le même d'une commune à l'autre.",
          "Deux logiques dominent nos interventions ici. Côté entreprises, la reprise de parcs de clés et le contrôle d'accès ; côté particuliers, des exigences d'assurance élevées qui imposent souvent un cylindre certifié A2P sur une porte saine.",
        ],
        commonJobs: [
          "Reprise de parc de clés et cylindres sur organigramme pour les entreprises.",
          "Pose de cylindre certifié A2P sur exigence d'assurance en résidentiel.",
          "Ouverture de porte et changement de serrure en pavillon.",
        ],
        faq: [
          {
            question: "Quelles communes du 92 couvrez-vous en priorité ?",
            answer:
              "Les communes limitrophes de Paris — Boulogne, Neuilly, Levallois, Clichy, Issy, Montrouge — sont nos secteurs les plus rapides. Le reste du département est couvert avec un délai plus long, annoncé au téléphone avant le déplacement.",
          },
          {
            question: "Travaillez-vous pour les entreprises de La Défense ?",
            answer:
              "Oui, sur la partie serrurerie : portes de plateau, locaux techniques, reprise de parcs de clés. L'accès aux tours passe par le PC sécurité et suppose d'être annoncé par l'occupant, ce que nous organisons avec vous avant la visite.",
          },
          {
            question:
              "Le tarif est-il plus élevé qu'à Paris parce que vous vous déplacez ?",
            answer:
              "Non. La grille tarifaire est la même dans tout notre secteur, et le déplacement y est déjà intégré. Ce qui change d'un point à l'autre, c'est le délai d'arrivée, pas le montant — et le délai vous est annoncé au téléphone en même temps que le prix.",
          },
          {
            question:
              "Intervenez-vous dans les tours de bureaux de La Défense ?",
            answer:
              "Oui, sur la partie serrurerie : portes de plateau, locaux techniques, reprise du parc de clés d'une entreprise. L'accès aux tours passe par le PC sécurité du site, ce qui suppose d'être annoncé par l'occupant — nous organisons cela avec vous avant la visite.",
          },
          {
            question: "Quel délai pour Boulogne, Neuilly ou Levallois ?",
            answer:
              "Ces trois communes sont limitrophes de Paris et font partie de nos secteurs les plus rapides. Le délai réel dépend de l'heure et de la circulation : il vous est donné au téléphone, sans promesse invérifiable de « 10 minutes ».",
          },
        ],
      },
      en: {
        title: "Locksmith in Hauts-de-Seine (92)",
        keyword: "locksmith hauts-de-seine",
        intro:
          "The 92 is the densest of the inner suburbs: office towers at La Défense, high-value flats in Neuilly and Boulogne, recent blocks in Issy and Levallois, houses in Rueil and Antony. Two realities meet constantly — corporate headquarters with badge access control, and residential buildings whose insurers require an A2P-certified lock. Travel times vary with access and hour, and we state them before setting off.",
        landmarks: [
          "La Défense business district",
          "Île Seguin and Le Trapèze, Boulogne",
          "Île de la Jatte, Neuilly",
          "Nanterre prefecture",
          "Parc de Sceaux",
          "Château de Malmaison, Rueil",
        ],
        neighborhoods: [
          "Boulogne-Billancourt",
          "Neuilly-sur-Seine",
          "Levallois-Perret",
          "Clichy",
          "Nanterre",
          "Courbevoie",
          "Puteaux",
          "Issy-les-Moulineaux",
          "Asnières-sur-Seine",
          "Colombes",
          "Rueil-Malmaison",
          "Antony",
          "Montrouge",
          "Malakoff",
          "Suresnes",
          "Meudon",
          "Clamart",
          "Bagneux",
          "Vanves",
          "Sceaux",
        ],
        localContext: [
          "The 92 sets very different building stock side by side: office towers at La Défense and Courbevoie, high-value flats in Neuilly and Boulogne, recent developments in Issy and Levallois, houses in Rueil, Antony and Sceaux. The right hardware is not the same from one commune to the next.",
          "Two patterns dominate our work here. For businesses, taking key estates back in hand and access control; for households, demanding insurance requirements that often call for an A2P-certified cylinder on a sound door.",
        ],
        commonJobs: [
          "Key estates and master-keyed cylinders for businesses.",
          "A2P-certified cylinders fitted to meet insurance requirements.",
          "Door openings and lock changes on houses.",
        ],
        faq: [
          {
            question: "Which communes in the 92 do you cover fastest?",
            answer:
              "The communes bordering Paris — Boulogne, Neuilly, Levallois, Clichy, Issy, Montrouge — are our quickest areas. The rest of the department is covered with a longer time, stated on the phone before anyone travels.",
          },
          {
            question: "Do you work for businesses at La Défense?",
            answer:
              "Yes, on the locksmithing side: floor doors, plant rooms, key estates. Access to the towers goes through the security desk and requires being announced by the occupant, which we arrange with you before the visit.",
          },
          {
            question:
              "Does it cost more than Paris because you have to travel?",
            answer:
              "No. The price list is the same across our whole service area, with travel already included. What changes from one place to another is arrival time, not the amount — and that time is given on the phone along with the price.",
          },
          {
            question: "Do you work in the office towers at La Défense?",
            answer:
              "Yes, on the locksmithing side: floor doors, plant rooms, taking a company's key estate back in hand. Access to the towers goes through the site security desk, which means being announced by the occupant — we arrange that with you before the visit.",
          },
          {
            question: "How fast can you reach Boulogne, Neuilly or Levallois?",
            answer:
              'All three border Paris and are among our quickest areas. The real time depends on the hour and the traffic: you get it on the phone, without unverifiable "10 minutes" promises.',
          },
        ],
      },
    },
  },
  {
    kind: "department",
    number: "93",
    slug: "serrurier-seine-saint-denis-93",
    content: {
      fr: {
        title: "Serrurier Seine-Saint-Denis (93)",
        keyword: "serrurier seine-saint-denis",
        intro:
          "Le 93 mêle des centres anciens (Saint-Denis, Montreuil, Pantin), de grands ensembles des années 1960-70 avec halls sous Vigik, et des programmes neufs autour de La Plaine, de Pleyel et du canal de l'Ourcq. Les demandes les plus fréquentes y sont l'ouverture de porte, le remplacement de cylindre entre deux locataires et la remise en sécurité après effraction — cette dernière avec une facture détaillée exploitable pour l'assurance.",
        landmarks: [
          "Basilique-cathédrale de Saint-Denis",
          "Stade de France",
          "Le Bas-Montreuil et les Murs à pêches",
          "Préfecture de Bobigny",
          "Canal de l'Ourcq, Pantin",
          "Puces de Saint-Ouen",
        ],
        neighborhoods: [
          "Saint-Denis",
          "Montreuil",
          "Aubervilliers",
          "Pantin",
          "Bobigny",
          "Saint-Ouen-sur-Seine",
          "Bagnolet",
          "Les Lilas",
          "Le Pré-Saint-Gervais",
          "Romainville",
          "Noisy-le-Sec",
          "Rosny-sous-Bois",
          "Drancy",
          "Bondy",
          "Épinay-sur-Seine",
          "Aulnay-sous-Bois",
          "Le Blanc-Mesnil",
          "Stains",
          "Villepinte",
          "Noisy-le-Grand",
        ],
        localContext: [
          "Le 93 combine centres anciens — Saint-Denis, Montreuil, Pantin — grands ensembles des années 1960-70 et programmes neufs à La Plaine, Pleyel et le long du canal de l'Ourcq. Les halls y sont majoritairement sous interphone et badge Vigik.",
          "Une part importante des appels concerne la remise en sécurité après effraction. Sur ce type d'intervention, le devis et la facture détaillés ne sont pas un supplément administratif : ce sont les pièces que le bailleur ou l'assureur exigera.",
        ],
        commonJobs: [
          "Remise en sécurité après effraction, avec dossier exploitable pour l'assurance.",
          "Changement de cylindre entre deux locataires.",
          "Serrures de parties communes pour bailleurs et copropriétés.",
        ],
        faq: [
          {
            question: "Après une effraction, intervenez-vous le jour même ?",
            answer:
              "C'est la priorité : une porte forcée laisse le logement ouvert. Nous sécurisons l'accès d'abord, puis chiffrons la remise en état définitive séparément, avec un devis et une facture détaillant matériel et main-d'œuvre.",
          },
          {
            question:
              "Travaillez-vous avec les bailleurs sociaux du département ?",
            answer:
              "Oui. Nous établissons des devis rédigés pour être transmis au bailleur avant intervention, ce qui évite au locataire d'avancer des frais qui ne lui incombent pas.",
          },
          {
            question:
              "Après une effraction, que faut-il pour le dossier d'assurance ?",
            answer:
              "Un dépôt de plainte, puis un devis et une facture détaillant le matériel posé et la main-d'œuvre. Nous fournissons les deux documents systématiquement, avec la mention du matériel et de sa certification : c'est ce que les assureurs demandent, et c'est gratuit.",
          },
          {
            question:
              "Je suis locataire d'un bailleur social : qui règle l'intervention ?",
            answer:
              "Cela dépend de la cause et de votre bail. Une serrure détériorée lors d'une effraction relève souvent du bailleur ou de l'assurance ; une clé perdue est généralement à votre charge. Nous établissons un devis que vous pouvez faire valider avant l'intervention plutôt que de découvrir la question après.",
          },
          {
            question: "Intervenez-vous la nuit dans tout le département ?",
            answer:
              "Oui, 24h/24 et 7j/7. Le supplément de nuit, de week-end et de jour férié figure dans notre grille publique et vous est rappelé au téléphone avant que l'artisan ne prenne la route.",
          },
        ],
      },
      en: {
        title: "Locksmith in Seine-Saint-Denis (93)",
        keyword: "locksmith seine-saint-denis",
        intro:
          "The 93 mixes old town centres (Saint-Denis, Montreuil, Pantin), 1960s–70s estates with Vigik-controlled lobbies, and new development around La Plaine, Pleyel and the Ourcq canal. The most frequent requests are door openings, cylinder changes between tenants, and making a home secure again after a break-in — the last of these with an itemised invoice you can use for an insurance claim.",
        landmarks: [
          "Basilica of Saint-Denis",
          "Stade de France",
          "Bas-Montreuil and the Murs à pêches",
          "Bobigny prefecture",
          "Ourcq canal, Pantin",
          "Saint-Ouen flea market",
        ],
        neighborhoods: [
          "Saint-Denis",
          "Montreuil",
          "Aubervilliers",
          "Pantin",
          "Bobigny",
          "Saint-Ouen-sur-Seine",
          "Bagnolet",
          "Les Lilas",
          "Le Pré-Saint-Gervais",
          "Romainville",
          "Noisy-le-Sec",
          "Rosny-sous-Bois",
          "Drancy",
          "Bondy",
          "Épinay-sur-Seine",
          "Aulnay-sous-Bois",
          "Le Blanc-Mesnil",
          "Stains",
          "Villepinte",
          "Noisy-le-Grand",
        ],
        localContext: [
          "The 93 combines old town centres — Saint-Denis, Montreuil, Pantin — 1960s–70s estates and new development at La Plaine, Pleyel and along the Ourcq canal. Lobbies are mostly on entryphones and Vigik badges.",
          "A significant share of calls concerns making a home secure again after a break-in. On that kind of job the detailed quote and invoice aren't administrative extras: they're the documents the landlord or insurer will require.",
        ],
        commonJobs: [
          "Securing homes after a break-in, with a file the insurer can use.",
          "Cylinder changes between tenants.",
          "Common-part locks for landlords and building managers.",
        ],
        faq: [
          {
            question: "After a break-in, can you come the same day?",
            answer:
              "It's the priority: a forced door leaves the home open. We secure the entrance first, then cost the permanent repair separately, with a quote and invoice itemising hardware and labour.",
          },
          {
            question: "Do you work with the department's social landlords?",
            answer:
              "Yes. We produce quotes written to be passed to the landlord before the work, which saves the tenant fronting costs that aren't theirs to bear.",
          },
          {
            question: "After a break-in, what does the insurance file need?",
            answer:
              "A police report, then a quote and an invoice itemising the hardware fitted and the labour. We provide both as a matter of course, naming the hardware and its certification: that's what insurers ask for, and it costs nothing.",
          },
          {
            question:
              "I rent from a social landlord — who pays for the call-out?",
            answer:
              "It depends on the cause and your tenancy. A lock damaged in a break-in is often the landlord's or insurer's responsibility; lost keys are usually yours. We issue a quote you can have approved before the work, rather than discovering the question afterwards.",
          },
          {
            question: "Do you work nights across the whole department?",
            answer:
              "Yes, 24/7. The night, weekend and public-holiday surcharge is in our published price list and is repeated to you on the phone before the tradesperson sets off.",
          },
        ],
      },
    },
  },
  {
    kind: "department",
    number: "94",
    slug: "serrurier-val-de-marne-94",
    content: {
      fr: {
        title: "Serrurier Val-de-Marne (94)",
        keyword: "serrurier val-de-marne",
        intro:
          "Le 94 va des communes limitrophes de Paris — Ivry, Charenton, Le Kremlin-Bicêtre, Saint-Mandé — aux boucles de la Marne, où pavillons et maisons de ville dominent à Saint-Maur, Nogent ou Champigny. Les portes y sont très différentes d'un secteur à l'autre : multipoints d'immeuble à Créteil, portes de pavillon avec accès jardin et portail à sécuriser en bord de Marne.",
        landmarks: [
          "Préfecture et lac de Créteil",
          "Château de Vincennes",
          "Boucles de la Marne, Saint-Maur",
          "CHU Henri-Mondor",
          "Marché international de Rungis (à proximité)",
          "Bois de Vincennes",
        ],
        neighborhoods: [
          "Créteil",
          "Vincennes",
          "Saint-Mandé",
          "Ivry-sur-Seine",
          "Vitry-sur-Seine",
          "Maisons-Alfort",
          "Alfortville",
          "Charenton-le-Pont",
          "Saint-Maur-des-Fossés",
          "Nogent-sur-Marne",
          "Fontenay-sous-Bois",
          "Champigny-sur-Marne",
          "Villejuif",
          "Le Kremlin-Bicêtre",
          "Cachan",
          "L'Haÿ-les-Roses",
          "Choisy-le-Roi",
          "Thiais",
          "Orly",
          "Joinville-le-Pont",
        ],
        localContext: [
          "Le 94 va des communes limitrophes de Paris — Ivry, Charenton, Le Kremlin-Bicêtre, Saint-Mandé — aux boucles de la Marne où dominent pavillons et maisons de ville. Entre un appartement de Créteil et une maison de Saint-Maur, ce n'est pas la même serrure ni le même point faible.",
          "Sur maison, l'entrée principale est rarement le maillon faible : porte de garage, baie côté jardin, porte de service et portail arrivent avant. Une visite permet de le dire précisément plutôt que de vendre un blindage par défaut.",
        ],
        commonJobs: [
          "Sécurisation d'accès secondaires sur pavillon : garage, baie, porte de service.",
          "Réglage ou remplacement de serrure multipoints en immeuble.",
          "Ouverture de porte et changement de cylindre après emménagement.",
        ],
        faq: [
          {
            question: "Intervenez-vous sur les portails et portes de garage ?",
            answer:
              "Oui pour la partie serrurerie : serrure de portail, verrou de porte basculante, cylindre de portillon. La motorisation elle-même relève d'un installateur spécialisé, et nous vous le disons plutôt que d'improviser.",
          },
          {
            question: "Le devis est-il payant si je ne donne pas suite ?",
            answer:
              "Non, le devis est gratuit et sans engagement. Seul un déplacement de diagnostic sans intervention est facturé, au tarif publié sur notre grille et annoncé avant que l'artisan ne se déplace.",
          },
          {
            question:
              "Pour un pavillon, faut-il sécuriser autre chose que la porte d'entrée ?",
            answer:
              "Presque toujours. Sur une maison, l'entrée est rarement le point faible : la porte de garage, la baie côté jardin et la porte de service le sont davantage. Une visite permet de dire ce qui mérite un renfort et ce qui n'en a pas besoin, plutôt que de vendre un blindage par défaut.",
          },
          {
            question: "Intervenez-vous sur les portails et portes de garage ?",
            answer:
              "Oui pour la partie serrurerie : serrure de portail, verrou de porte de garage basculante, cylindre de portillon. La motorisation elle-même relève d'un installateur spécialisé, et nous vous le disons plutôt que d'improviser.",
          },
          {
            question: "Un devis est-il payant si je ne donne pas suite ?",
            answer:
              "Non. Le devis est gratuit et sans engagement. Seul un déplacement de diagnostic sans intervention est facturé, au tarif publié dans notre grille, et il vous est annoncé avant que l'artisan ne se déplace.",
          },
        ],
      },
      en: {
        title: "Locksmith in Val-de-Marne (94)",
        keyword: "locksmith val-de-marne",
        intro:
          "The 94 runs from the communes bordering Paris — Ivry, Charenton, Le Kremlin-Bicêtre, Saint-Mandé — out to the loops of the Marne, where houses and townhouses dominate in Saint-Maur, Nogent and Champigny. Doors differ sharply between them: block multi-point locks in Créteil, house doors with garden access and gates to secure along the Marne.",
        landmarks: [
          "Créteil prefecture and lake",
          "Château de Vincennes",
          "The Marne loops, Saint-Maur",
          "Henri-Mondor teaching hospital",
          "Rungis international market (nearby)",
          "Bois de Vincennes",
        ],
        neighborhoods: [
          "Créteil",
          "Vincennes",
          "Saint-Mandé",
          "Ivry-sur-Seine",
          "Vitry-sur-Seine",
          "Maisons-Alfort",
          "Alfortville",
          "Charenton-le-Pont",
          "Saint-Maur-des-Fossés",
          "Nogent-sur-Marne",
          "Fontenay-sous-Bois",
          "Champigny-sur-Marne",
          "Villejuif",
          "Le Kremlin-Bicêtre",
          "Cachan",
          "L'Haÿ-les-Roses",
          "Choisy-le-Roi",
          "Thiais",
          "Orly",
          "Joinville-le-Pont",
        ],
        localContext: [
          "The 94 runs from the communes bordering Paris — Ivry, Charenton, Le Kremlin-Bicêtre, Saint-Mandé — out to the Marne loops where houses and townhouses dominate. A flat in Créteil and a house in Saint-Maur are not the same lock, nor the same weak point.",
          "On a house the front door is rarely the weak link: the garage door, the garden-side patio doors, the side door and the gate come first. A visit says which, precisely, rather than selling armour plating by default.",
        ],
        commonJobs: [
          "Securing secondary access on houses: garage, patio doors, side door.",
          "Adjusting or replacing multi-point locks in flats.",
          "Door openings and cylinder changes after moving in.",
        ],
        faq: [
          {
            question: "Do you work on gates and garage doors?",
            answer:
              "Yes for the locksmithing: gate locks, up-and-over bolts, side-gate cylinders. The motorisation itself belongs to a specialist installer, and we say so rather than improvising.",
          },
          {
            question: "Is the quote chargeable if I don't go ahead?",
            answer:
              "No, quotes are free and without obligation. Only a diagnostic call-out with no work is charged, at the rate in our published grid and stated before the tradesperson travels.",
          },
          {
            question:
              "For a house, is there more to secure than the front door?",
            answer:
              "Almost always. On a house the front door is rarely the weak point: the garage door, the garden-side patio doors and the side door usually are. A visit establishes what genuinely needs reinforcing, rather than selling armour plating by default.",
          },
          {
            question: "Do you work on gates and garage doors?",
            answer:
              "Yes for the locksmithing: gate locks, up-and-over garage bolts, side-gate cylinders. The motorisation itself belongs to a specialist installer, and we say so rather than improvising.",
          },
          {
            question: "Is a quote chargeable if I don't go ahead?",
            answer:
              "No. Quotes are free and without obligation. Only a diagnostic call-out with no work carried out is charged, at the rate in our published grid, and you're told before the tradesperson travels.",
          },
        ],
      },
    },
  },
  {
    kind: "department",
    number: "91",
    slug: "serrurier-essonne-91",
    content: {
      fr: {
        title: "Serrurier Essonne (91)",
        keyword: "serrurier essonne",
        intro:
          "L'Essonne est un département de pavillons et de résidences, du nord urbain (Massy, Athis-Mons, Viry-Châtillon) au plateau de Saclay et à ses campus. Les interventions y concernent surtout des maisons individuelles : portes d'entrée à serrure multipoints, portes de garage, dépendances. Les distances y sont réelles, donc le délai annoncé l'est aussi — nous préférons donner une heure d'arrivée tenable qu'un chiffre flatteur.",
        landmarks: [
          "Plateau de Saclay et ses campus",
          "Préfecture d'Évry-Courcouronnes",
          "Cathédrale de la Résurrection, Évry",
          "Domaine de Chamarande",
          "Vallée de Chevreuse (bordure)",
          "Aéroport de Paris-Orly (à proximité)",
        ],
        neighborhoods: [
          "Évry-Courcouronnes",
          "Massy",
          "Palaiseau",
          "Corbeil-Essonnes",
          "Savigny-sur-Orge",
          "Sainte-Geneviève-des-Bois",
          "Athis-Mons",
          "Viry-Châtillon",
          "Yerres",
          "Draveil",
          "Montgeron",
          "Brétigny-sur-Orge",
          "Longjumeau",
          "Les Ulis",
          "Ris-Orangis",
          "Grigny",
          "Orsay",
          "Gif-sur-Yvette",
          "Étampes",
          "Vigneux-sur-Seine",
        ],
        localContext: [
          "L'Essonne est un département de maisons individuelles et de résidences, du nord urbain — Massy, Athis-Mons, Viry-Châtillon — au plateau de Saclay. La porte d'entrée y est le plus souvent équipée d'une serrure multipoints, avec les problèmes de réglage qui vont avec quand la porte travaille.",
          "Les distances y sont réelles. Nous préférons annoncer une heure d'arrivée tenable qu'un délai flatteur : à Étampes ou Corbeil, ce n'est pas le même trajet qu'à Massy, et le prix, lui, ne change pas.",
        ],
        commonJobs: [
          "Réglage ou remplacement de serrure multipoints sur porte de pavillon.",
          "Ouverture de porte et remplacement de cylindre après perte de clés.",
          "Sécurisation d'accès secondaires et de dépendances.",
        ],
        faq: [
          {
            question:
              "Ma serrure multipoints est bloquée, que faire en attendant ?",
            answer:
              "Ne forcez pas la clé : c'est le geste qui transforme un réglage en remplacement complet. Sur une multipoints, le blocage vient souvent d'une porte affaissée ou d'une tringlerie désalignée, réparable pour bien moins cher qu'une serrure neuve.",
          },
          {
            question: "Le tarif augmente-t-il avec la distance ?",
            answer:
              "Non. La grille est identique dans tout notre secteur, déplacement inclus. C'est le délai qui varie avec la distance, jamais le prix — et le délai vous est annoncé au téléphone avant le départ.",
          },
          {
            question: "Quel délai d'intervention en Essonne ?",
            answer:
              "Il dépend fortement de la commune : proche de la limite parisienne, on reste dans nos délais habituels ; plus au sud, comptez davantage. Le délai réaliste vous est annoncé au téléphone avant le départ, avec le tarif — nous ne promettons pas 30 minutes à Étampes.",
          },
          {
            question:
              "Ma porte d'entrée de pavillon a une serrure multipoints bloquée : que faire ?",
            answer:
              "Ne forcez pas la clé, c'est le geste qui transforme un réglage en remplacement complet. Sur une multipoints, le blocage vient souvent d'une tringlerie désalignée ou d'un affaissement de porte : la réparation est fréquemment possible, et bien moins chère que le remplacement.",
          },
          {
            question: "Intervenez-vous pour les commerces et les entreprises ?",
            answer:
              "Oui : rideaux métalliques, portes de zones d'activité, reprise de parc de clés multi-sites. Ces demandes passent par notre offre de sécurisation de locaux professionnels, chiffrée après visite.",
          },
        ],
      },
      en: {
        title: "Locksmith in Essonne (91)",
        keyword: "locksmith essonne",
        intro:
          "Essonne is a department of houses and residential estates, from the urban north (Massy, Athis-Mons, Viry-Châtillon) out to the Saclay plateau and its campuses. Most work here is on individual houses: front doors with multi-point locks, garage doors, outbuildings. The distances are real, so the times we quote are too — we'd rather give an arrival time we can keep than a flattering number.",
        landmarks: [
          "Saclay plateau and its campuses",
          "Évry-Courcouronnes prefecture",
          "Évry cathedral",
          "Domaine de Chamarande",
          "Chevreuse valley (edge)",
          "Paris-Orly airport (nearby)",
        ],
        neighborhoods: [
          "Évry-Courcouronnes",
          "Massy",
          "Palaiseau",
          "Corbeil-Essonnes",
          "Savigny-sur-Orge",
          "Sainte-Geneviève-des-Bois",
          "Athis-Mons",
          "Viry-Châtillon",
          "Yerres",
          "Draveil",
          "Montgeron",
          "Brétigny-sur-Orge",
          "Longjumeau",
          "Les Ulis",
          "Ris-Orangis",
          "Grigny",
          "Orsay",
          "Gif-sur-Yvette",
          "Étampes",
          "Vigneux-sur-Seine",
        ],
        localContext: [
          "Essonne is a department of houses and residential estates, from the urban north — Massy, Athis-Mons, Viry-Châtillon — out to the Saclay plateau. Front doors here usually carry a multi-point lock, with the adjustment problems that follow once the door moves.",
          "The distances are real. We'd rather quote an arrival time we can keep than a flattering one: Étampes or Corbeil is not the same journey as Massy — and the price doesn't change either way.",
        ],
        commonJobs: [
          "Adjusting or replacing multi-point locks on house doors.",
          "Door openings and cylinder replacement after lost keys.",
          "Securing secondary access points and outbuildings.",
        ],
        faq: [
          {
            question:
              "My multi-point lock has jammed — what do I do meanwhile?",
            answer:
              "Don't force the key: that's the move that turns an adjustment into a full replacement. On a multi-point lock, jamming usually comes from a dropped door or misaligned linkage, repairable for far less than a new lock.",
          },
          {
            question: "Does the price rise with distance?",
            answer:
              "No. The grid is identical across our whole area, travel included. Distance changes the time, never the price — and the time is given on the phone before we set off.",
          },
          {
            question: "How quickly can you get to Essonne?",
            answer:
              "It depends heavily on the commune: near the Paris boundary we're within our usual times; further south, expect longer. A realistic time is given on the phone before we set off, along with the price — we don't promise 30 minutes to Étampes.",
          },
          {
            question: "My house's multi-point lock has jammed — what now?",
            answer:
              "Don't force the key; that's the move that turns an adjustment into a full replacement. On a multi-point lock, jamming usually comes from misaligned linkage or a dropped door: repair is often possible, and far cheaper than replacement.",
          },
          {
            question: "Do you work for shops and businesses?",
            answer:
              "Yes: roller shutters, business-park doors, multi-site key estates. Those go through our commercial premises service, costed after a visit.",
          },
        ],
      },
    },
  },
  {
    kind: "department",
    number: "78",
    slug: "serrurier-yvelines-78",
    content: {
      fr: {
        title: "Serrurier Yvelines (78)",
        keyword: "serrurier yvelines",
        intro:
          "Les Yvelines réunissent le patrimoine protégé de Versailles et de Saint-Germain-en-Laye, les villes de la boucle de Seine (Sartrouville, Poissy, Conflans, Chatou) et les quartiers plus récents de Saint-Quentin-en-Yvelines. Dans les secteurs sauvegardés, l'aspect extérieur des portes est encadré : le renfort se fait alors côté intérieur, ce qui se vérifie avant le devis et non après la pose.",
        landmarks: [
          "Château de Versailles",
          "Château et forêt de Saint-Germain-en-Laye",
          "Boucle de Seine, Conflans",
          "Saint-Quentin-en-Yvelines",
          "Forêt de Rambouillet",
          "Vélizy-Villacoublay",
        ],
        neighborhoods: [
          "Versailles",
          "Saint-Germain-en-Laye",
          "Sartrouville",
          "Poissy",
          "Conflans-Sainte-Honorine",
          "Montigny-le-Bretonneux",
          "Chatou",
          "Houilles",
          "Le Vésinet",
          "Maisons-Laffitte",
          "Le Chesnay-Rocquencourt",
          "Vélizy-Villacoublay",
          "Plaisir",
          "Trappes",
          "Élancourt",
          "Guyancourt",
          "Les Mureaux",
          "Mantes-la-Jolie",
          "Rambouillet",
          "Viroflay",
        ],
        localContext: [
          "Les Yvelines réunissent le patrimoine protégé de Versailles et Saint-Germain-en-Laye, les villes de la boucle de Seine et les quartiers plus récents de Saint-Quentin-en-Yvelines. En secteur protégé, la face visible d'une porte est encadrée et le renfort se pose côté intérieur.",
          "Ce point se vérifie avant le devis, jamais après la pose : un habillage refusé par l'architecte des Bâtiments de France ou par la copropriété est un coût pur, et c'est évitable en un appel.",
        ],
        commonJobs: [
          "Renfort intérieur de porte ancienne en secteur protégé.",
          "Ouverture de porte en bois massif sans dégât.",
          "Changement de serrure et de cylindre en maison de ville.",
        ],
        faq: [
          {
            question: "Puis-je blinder ma porte en secteur protégé ?",
            answer:
              "Le plus souvent oui, à condition de ne pas modifier la face visible depuis la rue ou la cour. Le renfort se pose côté intérieur, avec une serrure certifiée invisible depuis l'extérieur. Nous vérifions les contraintes avant de chiffrer.",
          },
          {
            question: "Les portes anciennes s'ouvrent-elles sans dégât ?",
            answer:
              "Le plus souvent oui. Sur une porte ancienne de valeur, la priorité est le vantail autant que la serrure : l'artisan travaille au crochetage ou par la tranche et vous prévient avant si l'état du mécanisme impose une autre méthode.",
          },
          {
            question:
              "Puis-je blinder ma porte dans un secteur protégé comme Versailles ?",
            answer:
              "Le plus souvent oui, mais en respectant l'aspect extérieur. Dans les périmètres protégés, la face visible depuis la rue ou la cour est encadrée, parfois avec l'avis des Bâtiments de France. Le renfort se pose côté intérieur, avec une serrure certifiée invisible depuis l'extérieur. Nous vérifions ce point avant de chiffrer.",
          },
          {
            question:
              "Intervenez-vous sur les portes anciennes en bois massif ?",
            answer:
              "Oui, et c'est courant dans les centres anciens du département. Sur ce type de porte, la méthode compte plus que la force : l'artisan privilégie une ouverture non destructive et vous prévient si l'état du vantail impose autre chose.",
          },
          {
            question:
              "Le déplacement est-il facturé en plus dans les Yvelines ?",
            answer:
              "Non, il est inclus dans le tarif de l'intervention indiqué sur la grille. Seul un déplacement de diagnostic sans intervention est facturé, au tarif publié.",
          },
        ],
      },
      en: {
        title: "Locksmith in Yvelines (78)",
        keyword: "locksmith yvelines",
        intro:
          "The Yvelines combine the protected heritage of Versailles and Saint-Germain-en-Laye, the Seine-loop towns (Sartrouville, Poissy, Conflans, Chatou) and the newer districts of Saint-Quentin-en-Yvelines. In conservation areas the external appearance of doors is regulated: reinforcement then goes on the inside face — something to check before quoting, not after fitting.",
        landmarks: [
          "Palace of Versailles",
          "Saint-Germain-en-Laye château and forest",
          "The Seine loop at Conflans",
          "Saint-Quentin-en-Yvelines",
          "Rambouillet forest",
          "Vélizy-Villacoublay",
        ],
        neighborhoods: [
          "Versailles",
          "Saint-Germain-en-Laye",
          "Sartrouville",
          "Poissy",
          "Conflans-Sainte-Honorine",
          "Montigny-le-Bretonneux",
          "Chatou",
          "Houilles",
          "Le Vésinet",
          "Maisons-Laffitte",
          "Le Chesnay-Rocquencourt",
          "Vélizy-Villacoublay",
          "Plaisir",
          "Trappes",
          "Élancourt",
          "Guyancourt",
          "Les Mureaux",
          "Mantes-la-Jolie",
          "Rambouillet",
          "Viroflay",
        ],
        localContext: [
          "The Yvelines combine the protected heritage of Versailles and Saint-Germain-en-Laye, the Seine-loop towns and the newer districts of Saint-Quentin-en-Yvelines. In conservation areas the visible face of a door is regulated and reinforcement goes on the inside.",
          "That gets checked before the quote, never after fitting: cladding refused by the heritage architect or the building is a pure loss, and one phone call avoids it.",
        ],
        commonJobs: [
          "Internal reinforcement of old doors in conservation areas.",
          "Opening solid timber doors without damage.",
          "Lock and cylinder changes in townhouses.",
        ],
        faq: [
          {
            question: "Can I reinforce my door in a conservation area?",
            answer:
              "Usually yes, provided the face visible from the street or courtyard is unchanged. Reinforcement goes on the inside, with a certified lock invisible from outside. We check the constraints before quoting.",
          },
          {
            question: "Do old doors open without damage?",
            answer:
              "Usually yes. On a valuable old door the leaf matters as much as the lock: the tradesperson works by picking or via the edge and warns you beforehand if the mechanism forces another method.",
          },
          {
            question:
              "Can I reinforce my door in a conservation area like Versailles?",
            answer:
              "Usually yes, but the external appearance has to be respected. In protected perimeters the face visible from the street or courtyard is regulated, sometimes subject to heritage approval. The reinforcement goes on the inside, with a certified lock invisible from outside. We check this before quoting.",
          },
          {
            question: "Do you work on old solid timber doors?",
            answer:
              "Yes, and it's common in the department's old centres. On that kind of door method matters more than force: the tradesperson favours a non-destructive opening and warns you if the state of the leaf forces anything else.",
          },
          {
            question: "Is travel charged extra in the Yvelines?",
            answer:
              "No, it's included in the job price shown on the grid. Only a diagnostic call-out with no work is charged, at the published rate.",
          },
        ],
      },
    },
  },
  {
    kind: "department",
    number: "95",
    slug: "serrurier-val-doise-95",
    content: {
      fr: {
        title: "Serrurier Val-d'Oise (95)",
        keyword: "serrurier val-d'oise",
        intro:
          "Le Val-d'Oise s'étend de la proche banlieue (Argenteuil, Bezons, Ermont) à la ville nouvelle de Cergy-Pontoise et aux communes plus résidentielles d'Enghien, Montmorency ou L'Isle-Adam. Le parc y est mixte : grands ensembles à Sarcelles et Garges, pavillons dans la vallée de Montmorency, résidences récentes à Cergy avec contrôle d'accès par badge.",
        landmarks: [
          "Préfecture de Cergy-Pontoise",
          "Lac d'Enghien-les-Bains",
          "Collégiale Saint-Martin, Montmorency",
          "Abbaye de Royaumont (à proximité)",
          "Bords d'Oise, L'Isle-Adam",
          "Aéroport Paris-Charles-de-Gaulle (à proximité)",
        ],
        neighborhoods: [
          "Cergy",
          "Argenteuil",
          "Sarcelles",
          "Pontoise",
          "Franconville",
          "Ermont",
          "Bezons",
          "Garges-lès-Gonesse",
          "Goussainville",
          "Villiers-le-Bel",
          "Taverny",
          "Herblay-sur-Seine",
          "Saint-Ouen-l'Aumône",
          "Eaubonne",
          "Sannois",
          "Enghien-les-Bains",
          "Montmorency",
          "Deuil-la-Barre",
          "Domont",
          "L'Isle-Adam",
        ],
        localContext: [
          "Le Val-d'Oise s'étend de la proche banlieue — Argenteuil, Bezons, Ermont — à la ville nouvelle de Cergy-Pontoise et aux communes résidentielles d'Enghien, Montmorency ou L'Isle-Adam. Grands ensembles, pavillons et résidences récentes sous badge y coexistent.",
          "Les copropriétés et bailleurs représentent une part notable de l'activité : portes de hall, locaux poubelles et vélos, accès parking. Ces demandes se traitent mieux par contrat que dans l'urgence, avec un tarif d'astreinte fixé à l'avance.",
        ],
        commonJobs: [
          "Serrures de parties communes pour copropriétés et bailleurs.",
          "Ouverture de porte et cylindre en résidence sous badge.",
          "Changement de serrure sur pavillon de la vallée de Montmorency.",
        ],
        faq: [
          {
            question:
              "Intervenez-vous le soir et le week-end à Cergy-Pontoise ?",
            answer:
              "Oui, 24h/24 et 7j/7. Le supplément horaire figure dans notre grille publique et vous est rappelé au téléphone avant le déplacement : il n'apparaît jamais pour la première fois sur la facture.",
          },
          {
            question:
              "Peut-on mettre en place un contrat pour une copropriété ?",
            answer:
              "Oui, c'est même le format le plus économique pour un immeuble à plusieurs accès : délai d'intervention et tarif d'astreinte fixés au contrat, visites d'entretien périodiques, rapport écrit après chaque passage.",
          },
          {
            question: "Intervenez-vous à Cergy-Pontoise en soirée ?",
            answer:
              "Oui, y compris la nuit et le week-end. Le supplément horaire est publié dans notre grille tarifaire et rappelé au téléphone avant le déplacement : il n'apparaît jamais pour la première fois sur la facture.",
          },
          {
            question:
              "Dans une résidence avec badge, pouvez-vous accéder à ma porte ?",
            answer:
              "Oui, en présence de l'occupant ou avec l'accord du gardien. Le badge d'accès est géré par la résidence : nous intervenons sur la serrurerie, pas sur le paramétrage du système d'accès.",
          },
          {
            question: "Faites-vous les copropriétés et les bailleurs ?",
            answer:
              "Oui. Portes de hall, locaux poubelles et vélos, accès parking : ces demandes relèvent de nos contrats de maintenance, avec délai d'intervention et tarif d'astreinte fixés à l'avance.",
          },
        ],
      },
      en: {
        title: "Locksmith in Val-d'Oise (95)",
        keyword: "locksmith val-d'oise",
        intro:
          "Val-d'Oise stretches from the near suburbs (Argenteuil, Bezons, Ermont) to the new town of Cergy-Pontoise and the more residential communes of Enghien, Montmorency and L'Isle-Adam. The stock is mixed: large estates in Sarcelles and Garges, houses in the Montmorency valley, recent blocks in Cergy with badge access control.",
        landmarks: [
          "Cergy-Pontoise prefecture",
          "Enghien-les-Bains lake",
          "Saint-Martin collegiate church, Montmorency",
          "Royaumont abbey (nearby)",
          "The Oise riverside at L'Isle-Adam",
          "Paris-Charles-de-Gaulle airport (nearby)",
        ],
        neighborhoods: [
          "Cergy",
          "Argenteuil",
          "Sarcelles",
          "Pontoise",
          "Franconville",
          "Ermont",
          "Bezons",
          "Garges-lès-Gonesse",
          "Goussainville",
          "Villiers-le-Bel",
          "Taverny",
          "Herblay-sur-Seine",
          "Saint-Ouen-l'Aumône",
          "Eaubonne",
          "Sannois",
          "Enghien-les-Bains",
          "Montmorency",
          "Deuil-la-Barre",
          "Domont",
          "L'Isle-Adam",
        ],
        localContext: [
          "Val-d'Oise stretches from the near suburbs — Argenteuil, Bezons, Ermont — to the new town of Cergy-Pontoise and the residential communes of Enghien, Montmorency and L'Isle-Adam. Large estates, houses and recent badge-access residences coexist.",
          "Buildings and landlords make up a notable share of the work: lobby doors, bin and bike stores, car-park access. Those are better handled by contract than in an emergency, with an on-call rate fixed in advance.",
        ],
        commonJobs: [
          "Common-part locks for buildings and landlords.",
          "Door openings and cylinders in badge-access residences.",
          "Lock changes on houses in the Montmorency valley.",
        ],
        faq: [
          {
            question: "Do you work evenings and weekends in Cergy-Pontoise?",
            answer:
              "Yes, 24/7. The out-of-hours surcharge is in our published grid and is repeated on the phone before travel: it never appears for the first time on the invoice.",
          },
          {
            question: "Can a building set up a contract?",
            answer:
              "Yes, and for a building with several access points it's the cheapest format: response time and on-call rate fixed in the contract, scheduled maintenance visits, a written report after each one.",
          },
          {
            question: "Do you cover Cergy-Pontoise in the evening?",
            answer:
              "Yes, nights and weekends included. The out-of-hours surcharge is published in our price list and repeated on the phone before travel: it never appears for the first time on the invoice.",
          },
          {
            question: "In a badge-access residence, can you reach my door?",
            answer:
              "Yes, with the occupant present or the caretaker's agreement. The access badge is managed by the residence: we work on the locks, not on programming the access system.",
          },
          {
            question: "Do you work with managing agents and landlords?",
            answer:
              "Yes. Lobby doors, bin and bike stores, car-park access: those come under our maintenance contracts, with response times and on-call rates fixed in advance.",
          },
        ],
      },
    },
  },
  {
    kind: "department",
    number: "77",
    slug: "serrurier-seine-et-marne-77",
    content: {
      fr: {
        title: "Serrurier Seine-et-Marne (77)",
        keyword: "serrurier seine-et-marne",
        intro:
          "La Seine-et-Marne est le plus vaste département d'Île-de-France, et c'est celui où l'honnêteté sur les délais compte le plus. Nous intervenons principalement sur sa frange ouest, la plus proche de Paris : Chelles, Torcy, Champs-sur-Marne, Pontault-Combault, Bussy-Saint-Georges, Villeparisis. Plus à l'est, vers Meaux, Melun ou Provins, l'intervention reste possible mais le délai s'allonge, et nous vous le disons avant de partir plutôt qu'après.",
        landmarks: [
          "Cité Descartes, Champs-sur-Marne",
          "Val d'Europe et Serris",
          "Cathédrale Saint-Étienne de Meaux",
          "Préfecture de Melun",
          "Château de Fontainebleau",
          "Cité médiévale de Provins",
        ],
        neighborhoods: [
          "Chelles",
          "Champs-sur-Marne",
          "Torcy",
          "Noisiel",
          "Pontault-Combault",
          "Roissy-en-Brie",
          "Ozoir-la-Ferrière",
          "Bussy-Saint-Georges",
          "Serris",
          "Lagny-sur-Marne",
          "Villeparisis",
          "Mitry-Mory",
          "Combs-la-Ville",
          "Savigny-le-Temple",
          "Brie-Comte-Robert",
          "Meaux",
          "Melun",
          "Dammarie-les-Lys",
          "Coulommiers",
          "Fontainebleau",
        ],
        localContext: [
          "La Seine-et-Marne est le plus vaste département d'Île-de-France, et celui où l'honnêteté sur les délais compte le plus. Notre couverture régulière porte sur sa frange ouest : Chelles, Torcy, Champs-sur-Marne, Pontault-Combault, Bussy-Saint-Georges, Villeparisis.",
          "Plus à l'est, vers Meaux, Melun ou Provins, l'intervention reste possible mais le délai s'allonge nettement. Nous le disons avant de partir plutôt qu'après : accepter puis faire attendre trois heures est précisément ce que nous reprochons au reste du secteur.",
        ],
        commonJobs: [
          "Ouverture de porte et remplacement de cylindre en pavillon.",
          "Réglage de serrure multipoints sur porte de maison récente.",
          "Sécurisation après effraction avec dossier pour l'assurance.",
        ],
        faq: [
          {
            question: "Couvrez-vous vraiment tout le département ?",
            answer:
              "Nous couvrons régulièrement la frange ouest, la plus proche de Paris. Pour les communes de l'est, appelez-nous : nous vous disons franchement si nous pouvons tenir un délai correct, plutôt que d'accepter puis de vous laisser attendre.",
          },
          {
            question: "Porte claquée avec un enfant à l'intérieur, que faire ?",
            answer:
              "Appelez le 18 ou le 112 sans attendre : les pompiers interviennent en priorité quand une personne vulnérable est enfermée seule, et ils seront plus rapides que n'importe quel serrurier. Contactez-nous ensuite pour la remise en état de la porte si nécessaire.",
          },
          {
            question: "Intervenez-vous vraiment dans toute la Seine-et-Marne ?",
            answer:
              "Nous couvrons régulièrement la frange ouest du département, la plus proche de Paris. Pour les communes de l'est, appelez-nous : nous vous disons franchement si nous pouvons tenir un délai correct, plutôt que d'accepter puis de vous faire attendre trois heures.",
          },
          {
            question: "Le tarif change-t-il avec la distance ?",
            answer:
              "Non. La grille tarifaire est identique dans tout notre secteur d'intervention, déplacement inclus. C'est le délai qui varie avec la distance, pas le prix.",
          },
          {
            question:
              "Que faire en attendant, porte claquée et enfant à l'intérieur ?",
            answer:
              "Appelez le 18 ou le 112 sans attendre : les pompiers interviennent en priorité quand une personne vulnérable est enfermée seule, et c'est plus rapide que n'importe quel serrurier. Prévenez-nous ensuite pour la remise en état de la porte si nécessaire.",
          },
        ],
      },
      en: {
        title: "Locksmith in Seine-et-Marne (77)",
        keyword: "locksmith seine-et-marne",
        intro:
          "Seine-et-Marne is the largest department in Île-de-France, and the one where honesty about travel time matters most. We mainly work its western edge, closest to Paris: Chelles, Torcy, Champs-sur-Marne, Pontault-Combault, Bussy-Saint-Georges, Villeparisis. Further east, towards Meaux, Melun or Provins, call-outs remain possible but take longer — and we say so before setting off rather than afterwards.",
        landmarks: [
          "Cité Descartes, Champs-sur-Marne",
          "Val d'Europe and Serris",
          "Meaux cathedral",
          "Melun prefecture",
          "Château de Fontainebleau",
          "Medieval town of Provins",
        ],
        neighborhoods: [
          "Chelles",
          "Champs-sur-Marne",
          "Torcy",
          "Noisiel",
          "Pontault-Combault",
          "Roissy-en-Brie",
          "Ozoir-la-Ferrière",
          "Bussy-Saint-Georges",
          "Serris",
          "Lagny-sur-Marne",
          "Villeparisis",
          "Mitry-Mory",
          "Combs-la-Ville",
          "Savigny-le-Temple",
          "Brie-Comte-Robert",
          "Meaux",
          "Melun",
          "Dammarie-les-Lys",
          "Coulommiers",
          "Fontainebleau",
        ],
        localContext: [
          "Seine-et-Marne is the largest department in Île-de-France, and the one where honesty about travel time matters most. Our regular coverage is its western edge: Chelles, Torcy, Champs-sur-Marne, Pontault-Combault, Bussy-Saint-Georges, Villeparisis.",
          "Further east, towards Meaux, Melun or Provins, call-outs remain possible but take considerably longer. We say so before setting off rather than afterwards: accepting and then leaving you waiting three hours is exactly what we hold against the rest of the trade.",
        ],
        commonJobs: [
          "Door openings and cylinder replacement on houses.",
          "Adjusting multi-point locks on newer house doors.",
          "Securing after a break-in, with a file for the insurer.",
        ],
        faq: [
          {
            question: "Do you really cover the whole department?",
            answer:
              "We regularly cover the western edge, closest to Paris. For communes further east, call us: we'll tell you straight whether we can hold a decent time rather than accepting and leaving you waiting.",
          },
          {
            question: "Door shut with a child inside — what do I do?",
            answer:
              "Call 18 or 112 immediately: the fire service prioritises a vulnerable person shut in alone and will be faster than any locksmith. Contact us afterwards to put the door right if needed.",
          },
          {
            question: "Do you really cover the whole of Seine-et-Marne?",
            answer:
              "We regularly cover the western edge of the department, closest to Paris. For communes further east, call us: we'll tell you straight whether we can hold a decent time, rather than accepting and then leaving you waiting three hours.",
          },
          {
            question: "Does the price change with distance?",
            answer:
              "No. The price list is identical across our whole service area, travel included. Distance changes the time, not the price.",
          },
          {
            question: "Door slammed shut with a child inside — what do I do?",
            answer:
              "Call 18 or 112 immediately: the fire service takes priority when a vulnerable person is shut in alone, and they're faster than any locksmith. Contact us afterwards to put the door right if needed.",
          },
        ],
      },
    },
  },
];
