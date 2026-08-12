import type { Zone } from "@/lib/zones/types";

// Priority city pages: the dense, high-demand communes named in CLAUDE.md §14
// P1. Each one has to clear the same bar as an arrondissement page — real
// quartiers, real landmarks, a FAQ that could only have been written about this
// town. Communes we can't write to that standard stay listed on their
// department hub instead of becoming a thin page.
export const CITY_ZONES: Zone[] = [
  {
    kind: "city",
    number: "92100",
    slug: "serrurier-boulogne-billancourt",
    departmentSlug: "serrurier-hauts-de-seine-92",
    content: {
      fr: {
        title: "Serrurier Boulogne-Billancourt",
        keyword: "serrurier boulogne-billancourt",
        intro:
          "Boulogne-Billancourt est la plus grande commune d'Île-de-France après Paris, et son bâti raconte deux époques : les immeubles Art déco et les villas d'architectes du côté de Parchamp et d'Albert-Kahn, les résidences neuves du Trapèze et de l'Île Seguin de l'autre. Concrètement, on passe d'une porte palière ancienne à réhabiliter à une résidence sous contrôle d'accès en traversant une avenue.",
        landmarks: [
          "La Seine Musicale, Île Seguin",
          "Musée Albert-Kahn",
          "Parc Edmond-de-Rothschild",
          "Hôtel de Ville de Tony Garnier",
          "Pont de Sèvres",
          "Le Trapèze",
        ],
        neighborhoods: [
          "Marcel-Sembat",
          "Le Trapèze",
          "Parchamp-Albert-Kahn",
          "Billancourt-Rives de Seine",
          "Silly-Gallieni",
          "Les Princes-Marmottan",
        ],
        localContext: [
          "Boulogne se lit en deux couches. Autour de Parchamp, d'Albert-Kahn et de la mairie, l'Art déco et les villas d'architectes dominent, avec des portes d'origine que les copropriétés tiennent à conserver visuellement. Le renfort s'y fait donc côté intérieur.",
          "Sur le Trapèze et les rives de Seine, tout est récent : badge d'accès, portes palières multipoints, et souvent un organigramme géré par la résidence. Remplacer un cylindre sans vérifier ce point peut vous couper l'accès aux parties communes.",
        ],
        commonJobs: [
          "Changement de cylindre en résidence récente, après vérification d'organigramme.",
          "Renfort intérieur sur porte d'origine dans l'ancien.",
          "Ouverture de porte et réglage de multipoints.",
        ],
        faq: [
          {
            question:
              "Comment savoir si mon cylindre dépend d'un organigramme ?",
            answer:
              "Si la même clé ouvre votre porte et le hall ou le local vélos, c'est un organigramme. Dans ce cas, le cylindre se commande auprès du gestionnaire de la résidence. Nous identifions le cas avant d'intervenir plutôt que de poser un modèle incompatible.",
          },
          {
            question: "Quel délai depuis Paris pour Boulogne ?",
            answer:
              "Boulogne est limitrophe du 16e : c'est l'un de nos secteurs les plus rapides. Le délai exact dépend de l'heure et du pont emprunté, et vous est annoncé au téléphone avec le tarif.",
          },
          {
            question:
              "Dans une résidence récente du Trapèze, puis-je changer mon cylindre librement ?",
            answer:
              "Oui pour votre porte palière, qui est une partie privative. Attention toutefois si le cylindre appartient à un organigramme géré par la résidence — cas fréquent dans les programmes neufs : le remplacer isolément peut vous priver de l'accès aux parties communes. L'artisan vérifie ce point avant d'intervenir.",
          },
          {
            question: "Quel est le délai depuis Paris pour Boulogne ?",
            answer:
              "Boulogne est limitrophe du 16e, c'est l'un de nos secteurs les plus rapides. Le délai exact dépend de l'heure et du pont emprunté ; il vous est annoncé au téléphone avec le tarif, jamais estimé au hasard.",
          },
        ],
      },
      en: {
        title: "Locksmith in Boulogne-Billancourt",
        keyword: "locksmith boulogne-billancourt",
        intro:
          "Boulogne-Billancourt is the largest commune in Île-de-France after Paris, and its buildings tell two stories: Art Deco blocks and architect-designed villas around Parchamp and Albert-Kahn, new residential development at Le Trapèze and Île Seguin. In practice you cross one avenue and go from an old flat door needing refurbishment to a residence under access control.",
        landmarks: [
          "La Seine Musicale, Île Seguin",
          "Musée Albert-Kahn",
          "Parc Edmond-de-Rothschild",
          "Tony Garnier's town hall",
          "Pont de Sèvres",
          "Le Trapèze",
        ],
        neighborhoods: [
          "Marcel-Sembat",
          "Le Trapèze",
          "Parchamp-Albert-Kahn",
          "Billancourt-Rives de Seine",
          "Silly-Gallieni",
          "Les Princes-Marmottan",
        ],
        localContext: [
          "Boulogne reads in two layers. Around Parchamp, Albert-Kahn and the town hall, Art Deco and architect-designed villas dominate, with original doors the buildings want to keep visually intact. Reinforcement therefore goes on the inside face.",
          "On Le Trapèze and the riverside everything is recent: badge access, multi-point flat doors, and often a master-key plan run by the residence. Replacing a cylinder without checking that can cut off your access to the common parts.",
        ],
        commonJobs: [
          "Cylinder changes in recent blocks, after a master-key check.",
          "Internal reinforcement on original doors in the older stock.",
          "Door openings and multi-point adjustments.",
        ],
        faq: [
          {
            question:
              "How do I know if my cylinder is part of a master-key plan?",
            answer:
              "If the same key opens your door and the lobby or bike store, it's a master-key plan. The cylinder then has to be ordered through whoever manages the residence. We identify that before starting rather than fitting an incompatible model.",
          },
          {
            question: "How long from Paris to Boulogne?",
            answer:
              "Boulogne borders the 16th, so it's one of our fastest areas. The exact time depends on the hour and which bridge we take, and is given on the phone with the price.",
          },
          {
            question:
              "In a recent Trapèze block, can I change my cylinder freely?",
            answer:
              "Yes for your own flat door, which is private property. Be careful, though, if the cylinder belongs to a master-key plan run by the residence — common in new developments: replacing it on its own can cut off your access to the common parts. The tradesperson checks this first.",
          },
          {
            question: "How long does it take you to reach Boulogne from Paris?",
            answer:
              "Boulogne borders the 16th and is one of our fastest areas. The exact time depends on the hour and which bridge we take; you get it on the phone with the price, never a guess.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "92200",
    slug: "serrurier-neuilly-sur-seine",
    departmentSlug: "serrurier-hauts-de-seine-92",
    content: {
      fr: {
        title: "Serrurier Neuilly-sur-Seine",
        keyword: "serrurier neuilly-sur-seine",
        intro:
          "À Neuilly, l'essentiel du parc est constitué d'immeubles de standing avec gardien, souvent dotés d'un interphone et d'un accès par cour, et de maisons de ville sur l'Île de la Jatte. Les contrats d'assurance y imposent fréquemment une serrure certifiée A2P, et les copropriétés veillent à l'aspect des portes côté palier : deux contraintes à vérifier avant de proposer un matériel, pas après l'avoir posé.",
        landmarks: [
          "Île de la Jatte",
          "Bois de Boulogne",
          "Avenue Charles-de-Gaulle",
          "Marché de Neuilly",
          "Hôpital américain de Paris",
          "Parc de Bagatelle (à proximité)",
        ],
        neighborhoods: [
          "Sablons",
          "Bois",
          "Château",
          "Villiers",
          "Île de la Jatte",
        ],
        localContext: [
          "À Neuilly, l'essentiel du parc est constitué d'immeubles avec gardien, interphone et souvent accès par cour, auxquels s'ajoutent les maisons de ville de l'Île de la Jatte. Le gardien est un interlocuteur utile : passer par lui fait souvent gagner plus de temps qu'une méthode d'ouverture.",
          "Les contrats d'assurance y sont exigeants et les copropriétés attentives à l'aspect des portes palières. Ces deux contraintes se vérifient avant de proposer un matériel, pas après l'avoir posé.",
        ],
        commonJobs: [
          "Pose de cylindre certifié A2P pour satisfaire une clause d'assurance.",
          "Renforcement de porte sans modifier son aspect côté palier.",
          "Ouverture de porte avec vérification d'identité et accord du gardien.",
        ],
        faq: [
          {
            question: "Vérifiez-vous que je vis bien à l'adresse ?",
            answer:
              "Systématiquement : pièce d'identité, facture ou attestation avant toute ouverture. C'est la règle élémentaire qui empêche d'ouvrir la porte de quelqu'un d'autre, et elle s'applique sans exception, y compris quand le gardien est présent.",
          },
          {
            question:
              "Mon assureur exige une serrure certifiée, comment le prouver ?",
            answer:
              "Le devis puis la facture mentionnent le matériel posé, sa marque, sa certification A2P et le nombre de points de fermeture. C'est ce que les assureurs demandent, et nous le fournissons systématiquement, sans supplément.",
          },
          {
            question:
              "Mon assurance exige une serrure A2P : le devis suffit-il comme justificatif ?",
            answer:
              "Oui dans la plupart des cas. Le devis puis la facture mentionnent le matériel posé et sa certification A2P, avec le nombre de points de fermeture. C'est ce que les assureurs demandent en cas de sinistre, et nous le fournissons systématiquement.",
          },
          {
            question: "Le gardien peut-il vous ouvrir en mon absence ?",
            answer:
              "Seulement si vous l'avez autorisé explicitement. Nous n'intervenons sur une porte qu'en présence de l'occupant ou d'une personne mandatée, avec justificatif de domicile ou d'identité : c'est la règle de base contre les ouvertures abusives, et elle s'applique sans exception.",
          },
        ],
      },
      en: {
        title: "Locksmith in Neuilly-sur-Seine",
        keyword: "locksmith neuilly-sur-seine",
        intro:
          "Most of Neuilly's housing is well-appointed blocks with a caretaker, usually with an entryphone and courtyard access, plus townhouses on the Île de la Jatte. Insurance policies here frequently require an A2P-certified lock, and the co-ownerships care how doors look from the landing: two constraints to check before proposing hardware, not after fitting it.",
        landmarks: [
          "Île de la Jatte",
          "Bois de Boulogne",
          "Avenue Charles-de-Gaulle",
          "Neuilly market",
          "American Hospital of Paris",
          "Parc de Bagatelle (nearby)",
        ],
        neighborhoods: [
          "Sablons",
          "Bois",
          "Château",
          "Villiers",
          "Île de la Jatte",
        ],
        localContext: [
          "Most of Neuilly's stock is buildings with a caretaker, an entryphone and often courtyard access, plus the townhouses of Île de la Jatte. The caretaker is a useful contact: going through them often saves more time than any opening technique.",
          "Insurance policies here are demanding and the buildings care how flat doors look. Both constraints get checked before proposing hardware, not after fitting it.",
        ],
        commonJobs: [
          "A2P-certified cylinders fitted to satisfy an insurance clause.",
          "Reinforcing doors without changing their landing-side appearance.",
          "Door openings with identity checks and the caretaker's agreement.",
        ],
        faq: [
          {
            question: "Do you check that I live at the address?",
            answer:
              "Always: ID, a bill or a tenancy document before any opening. It's the basic rule that stops someone else's door being opened, and it applies without exception, including when the caretaker is present.",
          },
          {
            question:
              "My insurer requires a certified lock — how do I prove it?",
            answer:
              "The quote and then the invoice name the hardware fitted, its brand, its A2P certification and the number of locking points. That's what insurers ask for, and we provide it as standard at no extra charge.",
          },
          {
            question:
              "My insurer requires an A2P lock — is the quote enough as evidence?",
            answer:
              "In most cases, yes. The quote and then the invoice name the hardware fitted, its A2P grade and the number of locking points. That's what insurers ask for when handling a claim, and we provide it as standard.",
          },
          {
            question: "Can the caretaker let you in while I'm away?",
            answer:
              "Only if you've explicitly authorised it. We only work on a door with the occupant or an authorised person present, with proof of identity or residence: it's the basic safeguard against improper openings, and it applies without exception.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "92300",
    slug: "serrurier-levallois-perret",
    departmentSlug: "serrurier-hauts-de-seine-92",
    content: {
      fr: {
        title: "Serrurier Levallois-Perret",
        keyword: "serrurier levallois-perret",
        intro:
          "Levallois est l'une des communes les plus densément peuplées d'Europe : beaucoup d'immeubles récents ou réhabilités, de studios et deux-pièces, et une population active avec une rotation locative élevée. Le changement de cylindre entre deux locataires y est la demande la plus courante, devant l'ouverture de porte. S'y ajoutent de nombreux sièges d'entreprise, avec leurs contrôles d'accès et leurs parcs de clés à reprendre.",
        landmarks: [
          "Parc de la Planchette",
          "Île de la Jatte, rive de Levallois",
          "Hôtel de Ville de Levallois",
          "So Ouest",
          "Cimetière de Levallois-Perret",
          "Front de Seine",
        ],
        neighborhoods: [
          "Front de Seine",
          "Eiffel-Anatole-France",
          "Collange",
          "Planchettes",
          "Wilson",
        ],
        localContext: [
          "Levallois est l'une des communes les plus densément peuplées d'Europe : beaucoup de studios et de deux-pièces, une population active et une rotation locative élevée. Le changement de cylindre entre deux occupants y devance largement l'ouverture de porte dans nos interventions.",
          "S'y ajoutent de nombreux sièges d'entreprise. Les demandes professionnelles y sont surtout des reprises de parc de clés après un départ de salarié, et du contrôle d'accès par badge sur les accès à forte rotation.",
        ],
        commonJobs: [
          "Changement de cylindre entre deux locataires ou après un achat.",
          "Reprise de parc de clés en entreprise après un départ.",
          "Ouverture de porte en résidence récente.",
        ],
        faq: [
          {
            question: "Cylindre ou serrure complète en quittant un logement ?",
            answer:
              "Le cylindre suffit dans la grande majorité des cas : c'est la pièce où tourne la clé, et la remplacer neutralise tous les jeux existants sans toucher au reste du mécanisme. C'est aussi nettement moins cher qu'une serrure complète.",
          },
          {
            question: "Intervenez-vous pour les entreprises de Levallois ?",
            answer:
              "Oui : reprise de parc, cylindres sur organigramme, contrôle d'accès par badge, portes de locaux techniques. Ces demandes passent par notre offre de sécurisation de locaux professionnels, chiffrée après une visite du site.",
          },
          {
            question:
              "Je quitte mon appartement : dois-je changer la serrure ou le cylindre ?",
            answer:
              "Le cylindre suffit dans la grande majorité des cas. C'est la pièce dans laquelle la clé tourne : la remplacer neutralise tous les jeux de clés existants, sans toucher au reste du mécanisme ni à la porte. C'est aussi nettement moins cher qu'une serrure complète, et c'est ce que nous recommandons quand la serrure est saine.",
          },
          {
            question: "Intervenez-vous pour les entreprises de Levallois ?",
            answer:
              "Oui : reprise de parc de clés après un départ de salarié, cylindres sur organigramme, contrôle d'accès par badge, portes de locaux techniques. Ces demandes passent par notre offre de sécurisation de locaux professionnels, chiffrée après visite du site.",
          },
        ],
      },
      en: {
        title: "Locksmith in Levallois-Perret",
        keyword: "locksmith levallois-perret",
        intro:
          "Levallois is one of the most densely populated communes in Europe: mostly recent or refurbished blocks, plenty of studios and one-bedroom flats, and a working population with high rental turnover. Changing the cylinder between tenants is the most common request here, ahead of door opening. Add a large number of corporate headquarters, with their access controls and key estates to take back in hand.",
        landmarks: [
          "Parc de la Planchette",
          "Île de la Jatte, Levallois bank",
          "Levallois town hall",
          "So Ouest",
          "Levallois-Perret cemetery",
          "Front de Seine",
        ],
        neighborhoods: [
          "Front de Seine",
          "Eiffel-Anatole-France",
          "Collange",
          "Planchettes",
          "Wilson",
        ],
        localContext: [
          "Levallois is one of the most densely populated communes in Europe: lots of studios and one-bedroom flats, a working population and high rental turnover. Cylinder changes between occupants comfortably outnumber door openings in our work here.",
          "Add a large number of corporate headquarters. Business requests are mostly taking key estates back in hand after a staff departure, and badge access control on high-turnover entrances.",
        ],
        commonJobs: [
          "Cylinder changes between tenants or after a purchase.",
          "Key estates taken back in hand after a staff departure.",
          "Door openings in recent residences.",
        ],
        faq: [
          {
            question: "Cylinder or full lock when leaving a flat?",
            answer:
              "The cylinder is enough in the large majority of cases: it's the part the key turns in, and replacing it neutralises every existing key without touching the rest of the mechanism. It's also far cheaper than a complete lock.",
          },
          {
            question: "Do you work for businesses in Levallois?",
            answer:
              "Yes: key estates, master-keyed cylinders, badge access control, plant-room doors. Those go through our commercial premises service, costed after a site visit.",
          },
          {
            question:
              "I'm moving out — should I change the lock or the cylinder?",
            answer:
              "The cylinder is enough in the large majority of cases. It's the part the key turns in: replacing it neutralises every existing key without touching the rest of the mechanism or the door. It's also far cheaper than a full lock, and it's what we recommend when the lock itself is sound.",
          },
          {
            question: "Do you work for businesses in Levallois?",
            answer:
              "Yes: taking a key estate back in hand after a staff departure, master-keyed cylinders, badge access control, plant-room doors. Those go through our commercial premises service, costed after a site visit.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "93200",
    slug: "serrurier-saint-denis",
    departmentSlug: "serrurier-seine-saint-denis-93",
    content: {
      fr: {
        title: "Serrurier Saint-Denis",
        keyword: "serrurier saint-denis",
        intro:
          "Saint-Denis juxtapose un centre ancien autour de la basilique et du marché, les bureaux de La Plaine et de Pleyel, et de grands ensembles au nord de la commune. Les serrures y sont aussi variées : portes anciennes du centre, multipoints d'immeubles collectifs, rideaux métalliques et portes de locaux d'activité à La Plaine. Une part importante des appels concerne la remise en sécurité après effraction, avec facture détaillée pour l'assurance.",
        landmarks: [
          "Basilique-cathédrale de Saint-Denis",
          "Stade de France",
          "Marché de Saint-Denis",
          "Quartier Pleyel",
          "La Plaine Saint-Denis",
          "Université Paris 8",
        ],
        neighborhoods: [
          "Centre-ville / Basilique",
          "La Plaine",
          "Pleyel-Confluence",
          "Franc-Moisin",
          "Floréal-Allende",
          "Delaunay-Belleville",
        ],
        localContext: [
          "Saint-Denis juxtapose un centre ancien autour de la basilique et du marché, les bureaux de La Plaine et de Pleyel, et de grands ensembles au nord. Les serrures suivent : portes anciennes en centre-ville, multipoints en collectif, rideaux métalliques et portes de locaux d'activité à La Plaine.",
          "Une part importante des appels concerne la sécurisation après effraction. Sur ce type d'intervention, le devis et la facture détaillés comptent autant que le travail lui-même : ce sont les pièces exigées par l'assureur ou le bailleur.",
        ],
        commonJobs: [
          "Sécurisation après effraction, avec devis et facture détaillés.",
          "Rideau métallique et serrure de local commercial à La Plaine.",
          "Changement de cylindre en logement collectif.",
        ],
        faq: [
          {
            question:
              "Que faut-il fournir à mon assurance après une effraction ?",
            answer:
              "Un récépissé de dépôt de plainte, des photos des dégâts, puis notre devis et notre facture détaillant matériel et main-d'œuvre. Nous fournissons systématiquement ces deux documents, avec la mention du matériel posé et de sa certification.",
          },
          {
            question: "Intervenez-vous sur les commerces avant l'ouverture ?",
            answer:
              "Oui, c'est même préférable pour un commerce. Le créneau, tôt le matin ou après la fermeture, est inscrit au devis avec l'éventuel supplément horaire, plutôt que décidé le jour même.",
          },
          {
            question:
              "Après une effraction, pouvez-vous sécuriser dans la journée ?",
            answer:
              "Oui, c'est même la priorité : une porte forcée laisse le logement ouvert. Nous sécurisons d'abord l'accès, puis nous chiffrons la remise en état définitive séparément. Le devis et la facture détaillent le matériel et la main-d'œuvre, ce dont votre assureur aura besoin.",
          },
          {
            question:
              "Intervenez-vous sur les rideaux métalliques des commerces ?",
            answer:
              "Oui : serrure de rideau bloquée, verrou au sol arraché, remplacement de la fermeture. Pour un commerce, nous planifions autant que possible l'intervention avant l'ouverture ou après la fermeture, et le créneau est écrit au devis.",
          },
        ],
      },
      en: {
        title: "Locksmith in Saint-Denis",
        keyword: "locksmith saint-denis",
        intro:
          "Saint-Denis sets an old centre around the basilica and the market against the offices of La Plaine and Pleyel, with large housing estates to the north. The locks are just as varied: old doors in the centre, multi-point locks in apartment blocks, roller shutters and industrial-unit doors at La Plaine. A significant share of calls is about making a home secure again after a break-in, with an itemised invoice for the insurer.",
        landmarks: [
          "Basilica of Saint-Denis",
          "Stade de France",
          "Saint-Denis market",
          "Pleyel district",
          "La Plaine Saint-Denis",
          "Paris 8 University",
        ],
        neighborhoods: [
          "Town centre / Basilica",
          "La Plaine",
          "Pleyel-Confluence",
          "Franc-Moisin",
          "Floréal-Allende",
          "Delaunay-Belleville",
        ],
        localContext: [
          "Saint-Denis sets an old centre around the basilica and market against the offices of La Plaine and Pleyel, with large estates to the north. The locks follow: old doors in the centre, multi-point sets in flats, roller shutters and industrial-unit doors at La Plaine.",
          "A significant share of calls concerns securing after a break-in. On that kind of job the detailed quote and invoice matter as much as the work: they're the documents the insurer or landlord requires.",
        ],
        commonJobs: [
          "Securing after a break-in, with detailed quote and invoice.",
          "Roller shutters and commercial locks at La Plaine.",
          "Cylinder changes in apartment blocks.",
        ],
        faq: [
          {
            question: "What does my insurer need after a break-in?",
            answer:
              "A police report receipt, photos of the damage, then our quote and invoice itemising hardware and labour. We provide both as standard, naming the hardware fitted and its certification.",
          },
          {
            question: "Do you work on shops before opening?",
            answer:
              "Yes, and for a shop it's preferable. The slot — early morning or after closing — is written into the quote along with any out-of-hours surcharge, rather than decided on the day.",
          },
          {
            question: "After a break-in, can you make it secure the same day?",
            answer:
              "Yes, and it's the priority: a forced door leaves the home open. We secure the access first, then cost the permanent repair separately. The quote and invoice itemise hardware and labour, which is what your insurer will need.",
          },
          {
            question: "Do you work on shop roller shutters?",
            answer:
              "Yes: jammed shutter locks, ground bolts torn out, replacing the closing mechanism. For a shop we schedule the work before opening or after closing wherever possible, and the slot is written into the quote.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "93100",
    slug: "serrurier-montreuil",
    departmentSlug: "serrurier-seine-saint-denis-93",
    content: {
      fr: {
        title: "Serrurier Montreuil",
        keyword: "serrurier montreuil",
        intro:
          "Montreuil est une ville d'ateliers reconvertis : dans le Bas-Montreuil, beaucoup de lofts et de locaux d'artisans avec des portes métalliques, des rideaux et des menuiseries hors normes qui n'acceptent pas une serrure standard. Plus haut, vers Croix-de-Chavaux et les Ruffins, on retrouve du pavillonnaire et des immeubles collectifs classiques. Le matériel se choisit après mesure sur place, pas au catalogue.",
        landmarks: [
          "Croix-de-Chavaux",
          "Murs à pêches",
          "Parc des Beaumonts",
          "Cinéma Le Méliès",
          "Hôtel de Ville de Montreuil",
          "Bas-Montreuil",
        ],
        neighborhoods: [
          "Bas-Montreuil",
          "Croix-de-Chavaux",
          "Centre-ville",
          "Ramenas-Léo-Lagrange",
          "Bel-Air-Grands-Pêchers",
          "Ruffins-Théophile-Sueur",
        ],
        localContext: [
          "Montreuil est une ville d'ateliers reconvertis. Dans le Bas-Montreuil, lofts et locaux d'artisans se referment sur des portes métalliques, des rideaux et des menuiseries hors normes qui n'acceptent pas une serrure de catalogue sans adaptation.",
          "Plus haut, vers Croix-de-Chavaux, les Ramenas et les Ruffins, on retrouve du pavillonnaire et des immeubles collectifs classiques. Le matériel se choisit donc après mesure sur place, pas au téléphone.",
        ],
        commonJobs: [
          "Serrure sur porte métallique ou menuiserie atypique d'atelier.",
          "Ouverture de porte de nuit dans tout le Bas-Montreuil.",
          "Changement de serrure en pavillon et en collectif.",
        ],
        faq: [
          {
            question:
              "Pourquoi une visite avant devis sur une porte d'atelier ?",
            answer:
              "Parce que l'entraxe, l'épaisseur du vantail et le sens d'ouverture déterminent le matériel, et qu'aucun de ces trois éléments ne se devine au téléphone. Une mesure sur place évite un montage inadapté qui se dérègle en quelques mois.",
          },
          {
            question: "Intervenez-vous la nuit à Montreuil ?",
            answer:
              "Oui, dans toute la commune, 24h/24 et 7j/7. Le supplément de nuit est celui publié dans notre grille tarifaire, annoncé au téléphone avant le départ de l'artisan.",
          },
          {
            question:
              "Ma porte d'atelier est métallique : peut-on y poser une serrure sécurisée ?",
            answer:
              "Oui, mais rarement en standard. Sur une porte métallique ou une menuiserie atypique, l'entraxe, l'épaisseur et le sens d'ouverture conditionnent le matériel. L'artisan mesure sur place puis commande la pièce adaptée — d'où l'intérêt d'une visite avant devis plutôt qu'un prix donné au téléphone à l'aveugle.",
          },
          {
            question: "Intervenez-vous dans le Bas-Montreuil la nuit ?",
            answer:
              "Oui, dans toute la commune, 24h/24 et 7j/7. Le supplément de nuit est celui publié dans notre grille tarifaire, annoncé au téléphone avant le départ.",
          },
        ],
      },
      en: {
        title: "Locksmith in Montreuil",
        keyword: "locksmith montreuil",
        intro:
          "Montreuil is a town of converted workshops: in Bas-Montreuil, plenty of lofts and craft units with metal doors, shutters and non-standard frames that won't take an off-the-shelf lock. Higher up, towards Croix-de-Chavaux and Les Ruffins, you find houses and conventional apartment blocks. Hardware is chosen after measuring on site, not from a catalogue.",
        landmarks: [
          "Croix-de-Chavaux",
          "Murs à pêches",
          "Parc des Beaumonts",
          "Le Méliès cinema",
          "Montreuil town hall",
          "Bas-Montreuil",
        ],
        neighborhoods: [
          "Bas-Montreuil",
          "Croix-de-Chavaux",
          "Town centre",
          "Ramenas-Léo-Lagrange",
          "Bel-Air-Grands-Pêchers",
          "Ruffins-Théophile-Sueur",
        ],
        localContext: [
          "Montreuil is a town of converted workshops. In Bas-Montreuil, lofts and craft units close on metal doors, shutters and non-standard joinery that won't take a catalogue lock without adaptation.",
          "Higher up, towards Croix-de-Chavaux, Les Ramenas and Les Ruffins, you find houses and conventional apartment blocks. Hardware is therefore chosen after measuring on site, not over the phone.",
        ],
        commonJobs: [
          "Locks on metal doors and unusual workshop joinery.",
          "Night door openings across Bas-Montreuil.",
          "Lock changes in houses and flats.",
        ],
        faq: [
          {
            question: "Why a visit before quoting on a workshop door?",
            answer:
              "Because the backset, leaf thickness and hand of the door decide the hardware, and none of those three can be guessed on the phone. Measuring on site avoids an ill-fitting assembly that drifts out of adjustment within months.",
          },
          {
            question: "Do you work nights in Montreuil?",
            answer:
              "Yes, across the whole commune, 24/7. The night surcharge is the one published in our price list, stated on the phone before the tradesperson sets off.",
          },
          {
            question:
              "My workshop door is metal — can a security lock be fitted?",
            answer:
              "Yes, but rarely a standard one. On a metal door or an unusual frame, the backset, thickness and hand of the door dictate the hardware. The tradesperson measures on site then orders the right part — which is why a visit beats a blind price over the phone.",
          },
          {
            question: "Do you cover Bas-Montreuil at night?",
            answer:
              "Yes, across the whole commune, 24/7. The night surcharge is the one published in our price list, stated on the phone before we set off.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "94000",
    slug: "serrurier-creteil",
    departmentSlug: "serrurier-val-de-marne-94",
    content: {
      fr: {
        title: "Serrurier Créteil",
        keyword: "serrurier créteil",
        intro:
          "Créteil est une ville planifiée des années 1960-70 : tours et barres autour du lac et du Mont-Mesly, halls équipés d'interphones et de Vigik, portes palières souvent en serrure multipoints d'origine. Sur ce parc, le blocage vient plus souvent d'un réglage ou d'une porte affaissée que d'un mécanisme mort — le réflexe du remplacement systématique y coûte cher pour rien. Le Village conserve à côté un tissu ancien plus classique.",
        landmarks: [
          "Lac de Créteil",
          "Préfecture et les Choux de Créteil",
          "Créteil Soleil",
          "CHU Henri-Mondor",
          "Palais des sports",
          "Le Village",
        ],
        neighborhoods: [
          "Mont-Mesly",
          "Préfecture-L'Échat",
          "Lac",
          "Le Village",
          "Bleuets-Bordières",
          "Croix des Mèches",
        ],
        localContext: [
          "Créteil est une ville planifiée des années 1960-70 : tours et barres autour du lac et du Mont-Mesly, halls sous interphone et Vigik, portes palières équipées de serrures multipoints d'origine. Sur ce parc, le blocage vient plus souvent d'un réglage que d'un mécanisme mort.",
          "Le réflexe du remplacement systématique y coûte cher pour rien. À côté, le Village conserve un tissu ancien plus classique, avec des portes et des serrures d'une tout autre génération.",
        ],
        commonJobs: [
          "Réglage de serrure multipoints qui ne verrouille plus en haut.",
          "Ouverture de porte en tour, accès hall avec le gardien.",
          "Changement de cylindre après perte de clés.",
        ],
        faq: [
          {
            question:
              "Seul le point haut ne se verrouille plus, est-ce grave ?",
            answer:
              "Non, et c'est la question la plus fréquente sur ce type de bâti. La cause est presque toujours un affaissement du vantail ou une tringlerie désalignée. Un réglage règle le problème pour une fraction du prix d'une serrure neuve.",
          },
          {
            question:
              "Comment se passe l'accès dans une résidence sous Vigik ?",
            answer:
              "Nous intervenons en présence de l'occupant, ou avec le gardien pour une partie commune. Le badge Vigik est géré par le bailleur ou le syndic : nous traitons la serrurerie, pas le système d'accès lui-même.",
          },
          {
            question:
              "Ma porte multipoints ne verrouille plus en haut : faut-il la remplacer ?",
            answer:
              "Pas nécessairement, et c'est la question la plus fréquente sur ce type de bâti. Quand seul le point haut ne prend plus, la cause est presque toujours un affaissement du vantail ou une tringlerie désalignée. Un réglage règle le problème pour une fraction du prix d'une serrure neuve : le diagnostic est fait avant de proposer quoi que ce soit.",
          },
          {
            question: "Les halls sont sous Vigik : comment se passe l'accès ?",
            answer:
              "Nous intervenons avec l'occupant présent, ou avec le gardien pour une partie commune. Le badge Vigik est géré par le bailleur ou le syndic, pas par nous : nous traitons la serrurerie, y compris la serrure de la porte de hall si la copropriété nous mandate.",
          },
        ],
      },
      en: {
        title: "Locksmith in Créteil",
        keyword: "locksmith créteil",
        intro:
          "Créteil is a planned town from the 1960s–70s: towers and slab blocks around the lake and Mont-Mesly, lobbies with entryphones and Vigik, flat doors usually on original multi-point locks. On this kind of stock, jamming comes more often from an adjustment or a dropped door than a dead mechanism — reaching straight for replacement costs a lot for nothing. Le Village keeps a more traditional older fabric alongside.",
        landmarks: [
          "Créteil lake",
          "The prefecture and the Choux de Créteil",
          "Créteil Soleil",
          "Henri-Mondor teaching hospital",
          "Palais des sports",
          "Le Village",
        ],
        neighborhoods: [
          "Mont-Mesly",
          "Préfecture-L'Échat",
          "Lac",
          "Le Village",
          "Bleuets-Bordières",
          "Croix des Mèches",
        ],
        localContext: [
          "Créteil is a planned town from the 1960s–70s: towers and slab blocks around the lake and Mont-Mesly, lobbies on entryphones and Vigik, flat doors with original multi-point locks. On that stock, jamming comes from adjustment more often than a dead mechanism.",
          "Reaching straight for replacement costs a lot for nothing here. Alongside it, Le Village keeps a more traditional older fabric, with doors and locks from an entirely different generation.",
        ],
        commonJobs: [
          "Adjusting multi-point locks that no longer engage at the top.",
          "Door openings in the towers, lobby access with the caretaker.",
          "Cylinder changes after lost keys.",
        ],
        faq: [
          {
            question: "Only the top point won't lock — is that serious?",
            answer:
              "No, and it's the most frequent question on this kind of building. The cause is almost always a dropped leaf or misaligned linkage. An adjustment fixes it for a fraction of the price of a new lock.",
          },
          {
            question: "How does access work in a Vigik residence?",
            answer:
              "We attend with the occupant present, or with the caretaker for a common area. The Vigik badge is managed by the landlord or the agent: we handle the locks, not the access system itself.",
          },
          {
            question:
              "My multi-point door no longer locks at the top — does it need replacing?",
            answer:
              "Not necessarily, and it's the most frequent question on this kind of building. When only the top point stops engaging, the cause is almost always a dropped leaf or misaligned linkage. An adjustment fixes it for a fraction of the price of a new lock: we diagnose before proposing anything.",
          },
          {
            question: "The lobbies use Vigik — how does access work?",
            answer:
              "We attend with the occupant present, or with the caretaker for common areas. The Vigik badge is managed by the landlord or managing agent, not by us: we handle the locks, including the lobby door lock if the building instructs us.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "78000",
    slug: "serrurier-versailles",
    departmentSlug: "serrurier-yvelines-78",
    content: {
      fr: {
        title: "Serrurier Versailles",
        keyword: "serrurier versailles",
        intro:
          "Une grande partie de Versailles est en secteur protégé : autour du Marché Notre-Dame et du quartier Saint-Louis, les portes anciennes en bois massif et les hôtels particuliers sont soumis à des contraintes sur l'aspect extérieur, parfois avec avis des Bâtiments de France. Le renfort se pose alors côté intérieur. Aux Chantiers et à Porchefontaine, le bâti est plus récent et les contraintes s'allègent.",
        landmarks: [
          "Château de Versailles",
          "Marché Notre-Dame",
          "Cathédrale Saint-Louis",
          "Potager du Roi",
          "Gare de Versailles-Chantiers",
          "Quartier Saint-Louis",
        ],
        neighborhoods: [
          "Notre-Dame",
          "Saint-Louis",
          "Montreuil",
          "Chantiers",
          "Clagny-Glatigny",
          "Porchefontaine",
        ],
        localContext: [
          "Une grande partie de Versailles est en secteur protégé. Autour du Marché Notre-Dame et du quartier Saint-Louis, portes anciennes en bois massif et hôtels particuliers sont soumis à des contraintes sur l'aspect extérieur, parfois avec avis des Bâtiments de France.",
          "Le renfort se pose alors côté intérieur : cylindre certifié, gâche renforcée, cornière anti-pince, éventuellement doublage. Aux Chantiers et à Porchefontaine, le bâti est plus récent et ces contraintes s'allègent nettement.",
        ],
        commonJobs: [
          "Renfort intérieur sur porte ancienne en secteur protégé.",
          "Ouverture sans dégât de porte en bois massif.",
          "Changement de serrure et cylindre en maison de ville.",
        ],
        faq: [
          {
            question:
              "Faut-il une autorisation pour renforcer une porte à Versailles ?",
            answer:
              "Pour un cylindre ou un renfort intérieur, non. Dès que la face visible depuis la rue ou la cour est modifiée, oui : règlement de copropriété, et parfois avis des Bâtiments de France en périmètre protégé. Nous vérifions avant de chiffrer.",
          },
          {
            question: "Quel délai depuis Paris jusqu'à Versailles ?",
            answer:
              "Comptez plus qu'en petite couronne, surtout aux heures de pointe. Le délai réaliste vous est annoncé au téléphone avant le départ, avec le tarif — qui, lui, ne change pas avec la distance.",
          },
          {
            question:
              "Puis-je renforcer ma porte dans le centre protégé de Versailles ?",
            answer:
              "Oui, mais sans modifier la face visible depuis la rue ou la cour. Concrètement, on renforce côté intérieur : cylindre certifié, gâche renforcée, cornière anti-pince, éventuellement doublage intérieur. L'aspect extérieur est conservé, ce qui règle en même temps la question du règlement de copropriété et celle du patrimoine.",
          },
          {
            question: "Une porte ancienne peut-elle être ouverte sans dégât ?",
            answer:
              "Le plus souvent oui. Sur une porte ancienne de valeur, la priorité est le vantail autant que la serrure : l'artisan travaille au crochetage ou par la tranche, et vous prévient avant si l'état du mécanisme impose une autre méthode.",
          },
        ],
      },
      en: {
        title: "Locksmith in Versailles",
        keyword: "locksmith versailles",
        intro:
          "Much of Versailles sits in a conservation area: around the Marché Notre-Dame and the Saint-Louis quarter, old solid timber doors and private mansions are subject to constraints on external appearance, sometimes with heritage approval required. Reinforcement then goes on the inside face. At Chantiers and Porchefontaine the stock is newer and the constraints lighter.",
        landmarks: [
          "Palace of Versailles",
          "Marché Notre-Dame",
          "Saint-Louis cathedral",
          "The King's Kitchen Garden",
          "Versailles-Chantiers station",
          "Saint-Louis quarter",
        ],
        neighborhoods: [
          "Notre-Dame",
          "Saint-Louis",
          "Montreuil",
          "Chantiers",
          "Clagny-Glatigny",
          "Porchefontaine",
        ],
        localContext: [
          "Much of Versailles sits in a conservation area. Around the Marché Notre-Dame and the Saint-Louis quarter, old solid timber doors and private mansions face constraints on external appearance, sometimes with heritage approval required.",
          "Reinforcement then goes on the inside: certified cylinder, reinforced strike plate, anti-crowbar angle, sometimes an internal lining. At Chantiers and Porchefontaine the stock is newer and those constraints ease considerably.",
        ],
        commonJobs: [
          "Internal reinforcement of old doors in the conservation area.",
          "Damage-free opening of solid timber doors.",
          "Lock and cylinder changes in townhouses.",
        ],
        faq: [
          {
            question: "Do I need permission to reinforce a door in Versailles?",
            answer:
              "For a cylinder or internal reinforcement, no. As soon as the face visible from the street or courtyard changes, yes: building rules, and sometimes heritage approval inside a protected perimeter. We check before quoting.",
          },
          {
            question: "How long from Paris to Versailles?",
            answer:
              "Longer than the inner suburbs, especially at peak times. A realistic time is given on the phone before we set off, along with the price — which doesn't change with distance.",
          },
          {
            question:
              "Can I reinforce my door in the protected centre of Versailles?",
            answer:
              "Yes, but without altering the face visible from the street or courtyard. In practice the work goes inside: certified cylinder, reinforced strike plate, anti-crowbar angle, sometimes an internal lining. The exterior look is preserved, which settles both the co-ownership rules and the heritage question at once.",
          },
          {
            question: "Can an old door be opened without damage?",
            answer:
              "Usually yes. On a valuable old door the leaf matters as much as the lock: the tradesperson works by picking or via the edge, and warns you beforehand if the state of the mechanism forces another method.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "95100",
    slug: "serrurier-argenteuil",
    departmentSlug: "serrurier-val-doise-95",
    content: {
      fr: {
        title: "Serrurier Argenteuil",
        keyword: "serrurier argenteuil",
        intro:
          "Argenteuil est l'une des plus grandes villes du Val-d'Oise, avec un parc très contrasté : pavillons des Coteaux et du Val Notre-Dame, grands ensembles du Val d'Argent, centre-ville en rénovation autour de la gare et de la basilique. Les demandes vont de l'ouverture de porte de pavillon au changement de cylindre en logement collectif, avec une part régulière de sécurisation après tentative d'effraction.",
        landmarks: [
          "Basilique Saint-Denys",
          "Bords de Seine, immortalisés par les impressionnistes",
          "Butte d'Orgemont",
          "Gare d'Argenteuil",
          "Parc des Berges",
          "Hôtel de Ville",
        ],
        neighborhoods: [
          "Centre-ville",
          "Val d'Argent",
          "Orgemont",
          "Les Coteaux",
          "Val Notre-Dame",
          "Mazagran",
        ],
        localContext: [
          "Argenteuil est l'une des plus grandes villes du Val-d'Oise, avec un parc très contrasté : pavillons des Coteaux et du Val Notre-Dame, grands ensembles du Val d'Argent, centre-ville en rénovation autour de la gare et de la basilique.",
          "Sur pavillon, l'accès le plus simple n'est pas toujours la porte d'entrée : une porte de service ou une baie peut offrir une ouverture moins coûteuse et moins invasive. L'artisan évalue les possibilités sur place avant de commencer.",
        ],
        commonJobs: [
          "Ouverture de pavillon par l'accès le moins destructif disponible.",
          "Changement de cylindre en logement collectif du Val d'Argent.",
          "Sécurisation après tentative d'effraction.",
        ],
        faq: [
          {
            question:
              "Par où ouvre-t-on une maison dont la porte est claquée ?",
            answer:
              "Par le point le moins destructif accessible, et pas forcément la porte d'entrée : une porte de service ou une baie coulissante est parfois plus simple et moins coûteuse. La méthode retenue vous est annoncée avant que l'artisan ne commence.",
          },
          {
            question: "Quel délai depuis Paris jusqu'à Argenteuil ?",
            answer:
              "Argenteuil borde le nord-ouest parisien : hors heures de pointe, le délai reste court. Il vous est annoncé au téléphone en tenant compte de la circulation réelle, pas d'un chiffre affiché sur un site.",
          },
          {
            question:
              "Pour un pavillon, par où passe-t-on quand la porte est claquée ?",
            answer:
              "Par le moyen le moins destructif disponible, et pas forcément par la porte d'entrée : une porte de service ou une baie peut offrir un accès plus simple et moins coûteux. L'artisan évalue les possibilités sur place et vous annonce la méthode retenue avant de commencer.",
          },
          {
            question: "Quel délai depuis Paris jusqu'à Argenteuil ?",
            answer:
              "Argenteuil est en limite immédiate du nord-ouest parisien : le délai reste court hors heures de pointe. Il vous est annoncé au téléphone avant le départ, en tenant compte de la circulation réelle plutôt que d'un chiffre affiché sur un site.",
          },
        ],
      },
      en: {
        title: "Locksmith in Argenteuil",
        keyword: "locksmith argenteuil",
        intro:
          "Argenteuil is one of the largest towns in Val-d'Oise, with sharply contrasting housing: houses in Les Coteaux and Val Notre-Dame, large estates at Val d'Argent, a town centre being renovated around the station and the basilica. Requests run from opening a house door to changing a cylinder in a flat, with a steady share of securing work after attempted break-ins.",
        landmarks: [
          "Saint-Denys basilica",
          "The Seine banks painted by the Impressionists",
          "Butte d'Orgemont",
          "Argenteuil station",
          "Parc des Berges",
          "Town hall",
        ],
        neighborhoods: [
          "Town centre",
          "Val d'Argent",
          "Orgemont",
          "Les Coteaux",
          "Val Notre-Dame",
          "Mazagran",
        ],
        localContext: [
          "Argenteuil is one of the largest towns in Val-d'Oise, with sharply contrasting stock: houses in Les Coteaux and Val Notre-Dame, large estates at Val d'Argent, a town centre being renovated around the station and the basilica.",
          "On a house the simplest way in isn't always the front door: a side door or patio door can offer a cheaper, less invasive opening. The tradesperson assesses the options on site before starting.",
        ],
        commonJobs: [
          "House openings by the least destructive route available.",
          "Cylinder changes in the flats of Val d'Argent.",
          "Securing after an attempted break-in.",
        ],
        faq: [
          {
            question: "How do you open a house whose door has slammed?",
            answer:
              "By the least destructive accessible point, and not necessarily the front door: a side door or sliding patio door is sometimes simpler and cheaper. The chosen method is explained before the tradesperson starts.",
          },
          {
            question: "How long from Paris to Argenteuil?",
            answer:
              "Argenteuil borders north-west Paris: outside peak hours the time stays short. It's given on the phone based on real traffic, not a figure printed on a website.",
          },
          {
            question:
              "On a house, how do you get in when the door has slammed?",
            answer:
              "By the least destructive route available, and not necessarily the front door: a side door or patio door can offer simpler, cheaper access. The tradesperson assesses the options on site and tells you the chosen method before starting.",
          },
          {
            question: "How long does it take to reach Argenteuil from Paris?",
            answer:
              "Argenteuil sits right on the north-western edge of Paris: outside rush hour the time stays short. You get it on the phone before we set off, based on real traffic rather than a number printed on a website.",
          },
        ],
      },
    },
  },
];
