import type { Zone } from "@/lib/zones/types";

// City pages outside Île-de-France — the ten low-CPC target cities named in the
// client's adjustment brief of 28/08/2026 (§4), published ahead of the Google
// Ads campaigns they exist to support.
//
// EVERY ONE OF THESE IS coverage: "network". The business is based in Paris and
// the client has not yet confirmed whether she has partner locksmiths in these
// cities, is hiring locally, or is only capturing demand. The pages are
// therefore written to be true under all three: they promise that coverage,
// timing and price are confirmed before anyone travels, and they promise nothing
// about arrival time or local presence. See ZoneCoverage in ./types.ts.
//
// These have no departmentSlug: building ten more department hub pages to parent
// them would manufacture exactly the thin pages CLAUDE.md §3 forbids. They are
// listed directly on /zones instead, and they carry explicit postalCodes because
// the coverage checker matches full five-digit codes rather than a department
// prefix.
//
// The CLAUDE.md §3 depth rule applies here exactly as it does to the
// arrondissements: real quartiers, real landmarks, and a FAQ that could only
// have been written about this city. Every local claim below was researched and
// then independently fact-checked.

export const NATIONAL_CITY_ZONES: Zone[] = [
  {
    kind: "city",
    number: "63000",
    slug: "serrurier-clermont-ferrand",
    coverage: "network",
    postalCodes: ["63000", "63100"],
    content: {
      fr: {
        title: "Serrurier Clermont-Ferrand",
        keyword: "serrurier clermont-ferrand",
        intro:
          "Clermont-Ferrand se lit en trois couches. Le centre ancien et Montferrand, bâtis en pierre de Volvic, où la porte s'ouvre dans un encadrement de lave. Les cités Michelin des années 1920-1930, maisons jumelées à porte bois. Et les ZUP des années 1960, Saint-Jacques, La Gauthière, Croix-de-Neyrat, dont les halls sont passés au Vigik bien après leur construction. Chaque couche a sa panne type, et son bon geste.",
        landmarks: [
          "Place de Jaude",
          "Cathédrale Notre-Dame-de-l'Assomption",
          "Basilique Notre-Dame-du-Port",
          "Jardin Lecoq",
          "Stade Marcel-Michelin",
          "CHU Gabriel-Montpied",
        ],
        neighborhoods: [
          "Jaude",
          "Montferrand",
          "Saint-Jacques",
          "La Gauthière",
          "Croix-de-Neyrat",
          "La Pardieu",
        ],
        localContext: [
          "Dans le centre ancien et à Montferrand, l'encadrement est en pierre de Volvic, une trachyandésite dense et sans calcaire. Un bloc blindé ou une cornière anti-pince s'y ancre dans la roche, à la cheville chimique, et non par vissage dans un bâti bois.",
          "Au sud, la ZUP Saint-Jacques et sa Muraille de Chine ; au nord, La Gauthière et Croix-de-Neyrat. Ces immeubles des années 1960 sont nés sans contrôle d'accès : le Vigik, créé en 1996, y a été ajouté, comme la plupart des serrures multipoints en applique.",
        ],
        commonJobs: [
          "Ouverture de porte palière dans une tour de Saint-Jacques ou de Croix-de-Neyrat, hall sous Vigik.",
          "Remplacement du cylindre d'une maison de cité Michelin — Chanteranne, L'Oradou, La Plaine — dont la porte bois est d'origine.",
          "Blindage à ancrer dans un encadrement en pierre de Volvic, au centre ancien ou dans le secteur sauvegardé de Montferrand.",
        ],
        faq: [
          {
            question:
              "Ma porte est prise dans un encadrement en pierre de Volvic, peut-on la blinder ?",
            answer:
              "Oui. L'ancrage se fait dans une trachyandésite dense, à la cheville chimique, et non par vissage dans un bâti bois. Ces baies anciennes sont rarement aux cotes standard : les mesures se relèvent avant toute commande. Dans le secteur sauvegardé de Montferrand, le renfort reste intérieur.",
          },
          {
            question:
              "Mon immeuble à La Gauthière a été rénové, ma porte palière a-t-elle une nouvelle serrure ?",
            answer:
              "Pas forcément. Les phases ANRU menées à La Gauthière depuis 2006 ont porté sur les halls, les façades et les accès Vigik, bâtiment par bâtiment ; les portes palières relèvent souvent du propriétaire. Une photo de la tranche de porte suffit à identifier la serrure posée.",
          },
          {
            question:
              "Les studios clermontois changent de locataire chaque été. Faut-il refaire le cylindre ?",
            answer:
              "C'est le réflexe utile dans une ville dont les sites Carnot et Gergovia, en centre-ville, et les Cézeaux à Aubière remplissent le parc locatif à chaque rentrée. Un cylindre se remplace sans toucher ni à la serrure ni à la porte : le nombre de clés en circulation redevient connu.",
          },
          {
            question:
              "Ma maison du Vieux Montferrand a une grosse clé ancienne. Faut-il tout remplacer ?",
            answer:
              "Rarement. Sur ces maisons à pans de bois à encorbellement et ces hôtels du XVe-XVIe siècle, la serrure d'origine est une bénarde en applique, le plus souvent réparable. En secteur sauvegardé, garder le vantail et ajouter un second point à cylindre côté intérieur reste la voie la moins invasive.",
          },
        ],
      },
      en: {
        title: "Locksmith Clermont-Ferrand",
        keyword: "locksmith clermont-ferrand",
        intro:
          "Clermont-Ferrand reads in three layers. The old centre and Montferrand, built in pierre de Volvic, where the door opens into a lava-stone frame. The 1920s-30s cités Michelin, semi-detached houses with a wooden door. And the 1960s ZUP estates — Saint-Jacques, La Gauthière, Croix-de-Neyrat — whose halls went over to Vigik long after they were built. Each layer has its own typical failure, and its own right move.",
        landmarks: [
          "Place de Jaude",
          "Cathédrale Notre-Dame-de-l'Assomption",
          "Basilique Notre-Dame-du-Port",
          "Jardin Lecoq",
          "Stade Marcel-Michelin",
          "CHU Gabriel-Montpied",
        ],
        neighborhoods: [
          "Jaude",
          "Montferrand",
          "Saint-Jacques",
          "La Gauthière",
          "Croix-de-Neyrat",
          "La Pardieu",
        ],
        localContext: [
          "In the old centre and at Montferrand, the frame is pierre de Volvic, a dense trachyandesite with no limestone in it. An armoured block or an anti-pry angle bar anchors into that rock with chemical fixings, not by screwing into a wooden frame.",
          "South of the centre, the ZUP Saint-Jacques and its Muraille de Chine; north of it, La Gauthière and Croix-de-Neyrat. These 1960s blocks were built with no access control at all: Vigik, created in 1996, was added later, as were most surface-mounted multi-point locks.",
        ],
        commonJobs: [
          "Opening a landing door in a Saint-Jacques or Croix-de-Neyrat tower, with the hall on Vigik.",
          "Replacing the cylinder of a cité Michelin house — Chanteranne, L'Oradou, La Plaine — whose wooden door is the original one.",
          "Anchoring a door reinforcement into a pierre de Volvic frame, in the old centre or in the secteur sauvegardé of Montferrand.",
        ],
        faq: [
          {
            question:
              "My door sits in a pierre de Volvic frame — can it still be armoured?",
            answer:
              "Yes. The anchoring goes into a dense trachyandesite, with chemical fixings, not screws into a wooden frame. These old apertures are rarely a standard size, so measurements are taken before anything is ordered. In the secteur sauvegardé at Montferrand, the reinforcement stays inside.",
          },
          {
            question:
              "My building at La Gauthière was renovated — did my landing door get a new lock?",
            answer:
              "Not necessarily. The ANRU phases run at La Gauthière since 2006 have covered halls, façades and Vigik access, building by building; landing doors are usually the owner's responsibility. A photo of the door edge is enough to identify the lock that is actually fitted.",
          },
          {
            question:
              "Studios in Clermont change tenant every summer. Should the cylinder be redone?",
            answer:
              "It is the useful reflex in a city whose Carnot and Gergovia sites downtown, and Les Cézeaux over at Aubière, refill the rental stock every September. A cylinder is replaced without touching the lock or the door, and the number of keys in circulation becomes known again.",
          },
          {
            question:
              "My house in Vieux Montferrand has a big old key. Does everything have to be replaced?",
            answer:
              "Rarely. On these corbelled half-timbered houses and these 15th- and 16th-century hôtels, the original lock is a rim bénarde and is usually repairable. In a secteur sauvegardé, keeping the leaf and adding a second cylinder-operated point inside stays the least invasive route.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "87000",
    slug: "serrurier-limoges",
    coverage: "network",
    postalCodes: ["87000", "87100", "87280"],
    content: {
      fr: {
        title: "Serrurier Limoges",
        keyword: "serrurier limoges",
        intro:
          "Limoges empile trois âges de bâti. Le vieux centre — le Château et la Cité — garde ses maisons à pans de bois, aujourd'hui en site patrimonial remarquable. Autour de Carnot, les immeubles de rapport de la reconstruction qui a suivi l'incendie de 1864. Puis le Val de l'Aurence, bâti entre 1965 et 1973, et Beaubreuil. Trois âges de portes, trois pannes différentes : ici le diagnostic commence par le quartier.",
        landmarks: [
          "Gare de Limoges-Bénédictins",
          "Cathédrale Saint-Étienne",
          "Rue de la Boucherie",
          "Halles centrales",
          "Musée national Adrien Dubouché",
          "CHU Dupuytren",
        ],
        neighborhoods: [
          "La Cité",
          "Le Château",
          "Carnot-Marceau",
          "Montjovis",
          "Val de l'Aurence",
          "Beaubreuil",
        ],
        localContext: [
          "Le vieux Limoges est du pan de bois rempli de torchis : vantaux jamais d'équerre, huisseries qui travaillent avec l'humidité, remplissages qui ne tiennent aucune fixation. Le centre ancien, site patrimonial remarquable de plus de 670 hectares : remplacer une porte sur rue passe par une autorisation.",
          "À l'ouest, la ZUP du Val de l'Aurence, bâtie entre 1965 et 1973 autour de tours de quinze étages ; au nord, Beaubreuil, créé dans les années 1970. Halls sous interphone et badge, portes palières rééquipées au fil des réhabilitations, deux générations d'accès par allée.",
        ],
        commonJobs: [
          "Ouverture d'une porte ancienne en bois massif, dans le bâti à pans de bois du Château et de la Cité.",
          "Réglage ou remplacement d'une serrure multipoints désalignée, en immeuble collectif au Val de l'Aurence ou à Beaubreuil.",
          "Changement de cylindre sur une porte PVC de pavillon, à Landouge ou Beaune-les-Mines, après une perte de clés.",
        ],
        faq: [
          {
            question:
              "Ma porte du centre ancien coince en hiver et se débloque au printemps, faut-il changer la serrure ?",
            answer:
              "Rarement. Sur le pan de bois du vieux Limoges, un vantail en bois massif gonfle avec l'humidité et frotte dans une baie qui a bougé depuis des siècles. On rattrape le jeu, la paumelle et la gâche avant de toucher à la serrure, qui est presque toujours saine.",
          },
          {
            question:
              "En tour au Val de l'Aurence, seul le point haut ne se verrouille plus. Est-ce grave ?",
            answer:
              "Non, et c'est la panne la plus banale sur les tours de la ZUP, bâties entre 1965 et 1973. Le vantail s'est affaissé ou la tringlerie s'est désalignée : le mécanisme lui-même est presque toujours sain, et un réglage suffit là où on vous vendrait un remplacement complet.",
          },
          {
            question:
              "Mon hall à Beaubreuil a été refait et mon badge ne passe plus sur le bâtiment voisin, pourquoi ?",
            answer:
              "Le renouvellement urbain de Beaubreuil court jusqu'en 2032 : les halls résidentialisés reçoivent un nouveau contrôle d'accès pendant que les bâtiments voisins gardent l'ancien. Un badge appartient à la centrale d'une seule entrée ; c'est le bailleur ou le syndic qui le reprogramme, pas le serrurier.",
          },
          {
            question:
              "Je quitte mon studio près du campus de Vanteaux, faut-il changer le cylindre ?",
            answer:
              "Entre deux baux, c'est au propriétaire de trancher ; en colocation, il se justifie souvent. Limoges est une ville étudiante, entre le campus de Vanteaux et celui de la Borie, et les doubles de clés y circulent. Dites-nous le code postal : faisabilité, créneau et prix sont confirmés avant tout déplacement.",
          },
        ],
      },
      en: {
        title: "Locksmith Limoges",
        keyword: "locksmith limoges",
        intro:
          "Limoges stacks three ages of building. The old centre — le Château and la Cité — keeps its timber-framed houses, now inside a site patrimonial remarquable, a protected heritage area. Around Carnot stand the rental blocks of the rebuilding that followed the fire of 1864. Then Val de l'Aurence, built between 1965 and 1973, and Beaubreuil. Three ages of door, three different faults: here the diagnosis starts with the quartier.",
        landmarks: [
          "Gare de Limoges-Bénédictins",
          "Cathédrale Saint-Étienne",
          "Rue de la Boucherie",
          "Halles centrales",
          "Musée national Adrien Dubouché",
          "CHU Dupuytren",
        ],
        neighborhoods: [
          "La Cité",
          "Le Château",
          "Carnot-Marceau",
          "Montjovis",
          "Val de l'Aurence",
          "Beaubreuil",
        ],
        localContext: [
          "Old Limoges is timber framing filled with torchis, wattle and daub: leaves never square, joinery that moves with the damp, infill that holds no fixing. The old centre is a site patrimonial remarquable of over 670 hectares, so replacing a street door needs consent.",
          "West of the centre, the ZUP du Val de l'Aurence, built between 1965 and 1973 around fifteen-storey towers; north, Beaubreuil, created in the 1970s. Entryphone and badge halls, flat doors re-equipped over successive refurbishments, two generations of access per stairwell.",
        ],
        commonJobs: [
          "Opening an old solid-timber door in the timber-framed streets of le Château and la Cité.",
          "Adjusting or replacing a misaligned multi-point lock in a block of flats at Val de l'Aurence or Beaubreuil.",
          "Changing a cylinder on a PVC front door in Landouge or Beaune-les-Mines after keys are lost.",
        ],
        faq: [
          {
            question:
              "My door in the old centre sticks in winter and frees up in spring. Do I need a new lock?",
            answer:
              "Rarely. On the timber-framed stock of old Limoges, a solid wooden leaf swells with the damp and rubs inside an opening that has shifted over centuries. You correct the clearance, the hinge and the strike plate before touching the lock, which is almost always sound.",
          },
          {
            question:
              "In a tower at Val de l'Aurence, only the top point no longer locks. Is that serious?",
            answer:
              "No, and it is the most ordinary fault on the ZUP towers, built between 1965 and 1973. The leaf has dropped or the linkage has gone out of line: the mechanism itself is almost always sound, and an adjustment settles what others would sell you as a full replacement.",
          },
          {
            question:
              "My hall at Beaubreuil has been rebuilt and my badge no longer works on the neighbouring building. Why?",
            answer:
              "The Beaubreuil urban renewal programme runs to 2032: residentialised halls get a new access system while neighbouring buildings keep the old one. A badge belongs to the control unit of one entrance only; it is the landlord or the syndic who reprograms it, not the locksmith.",
          },
          {
            question:
              "I am leaving my studio near the Vanteaux campus. Should I change the cylinder?",
            answer:
              "Between two tenancies it is the owner's call; in a shared flat it often is justified. Limoges is a student city, between the Vanteaux and la Borie campuses, and spare keys circulate. Send us the postcode: feasibility, timing and price are confirmed before anyone travels.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "72000",
    slug: "serrurier-le-mans",
    coverage: "network",
    postalCodes: ["72000", "72100"],
    content: {
      fr: {
        title: "Serrurier Le Mans",
        keyword: "serrurier le mans",
        intro:
          "Le Mans a grandi par annexions : Sainte-Croix, Pontlieue, Saint-Pavin-des-Champs et Saint-Georges-du-Plain forment l'essentiel de la ville actuelle. D'où quatre parcs qui n'appellent ni les mêmes portes ni les mêmes serrures — la Cité Plantagenêt dans l'enceinte romaine, les alignements de mancelles des faubourgs, les grands ensembles du Ronceray puis des Sablons, et la Percée centrale ouverte à partir de 1965. En secteur protégé, une porte ne se change pas librement.",
        landmarks: [
          "Cathédrale Saint-Julien",
          "Enceinte gallo-romaine du Vieux Mans",
          "Place de la République",
          "Gare du Mans",
          "Circuit des 24 Heures",
          "Centre hospitalier, avenue Rubillard",
        ],
        neighborhoods: [
          "Cité Plantagenêt (Vieux Mans)",
          "Les Sablons",
          "Gazonfier",
          "Pontlieue",
          "Ronceray-Glonnières",
          "Université-Ribay",
        ],
        localContext: [
          "La mancelle, standardisée dans la seconde moitié du XIXe siècle, s'aligne sur parcelle en lanière : porte sur rue ouvrant sur un couloir, donc souvent deux serrures en série. Son dormant bois est scellé dans du moellon ; il joue, la porte coince, on accuse la serrure.",
          "Aux Sablons, la ZUP de 1960 a livré tours et barres jusqu'en 1978, autour de la tour Cristal ; son secteur nord, Gazonfier, mêle petits collectifs et maisons. Dans la Cité Plantagenêt, tout élément visible de la rue passe par l'Architecte des Bâtiments de France.",
        ],
        commonJobs: [
          "Serrure bloquée sur la porte de rue d'une mancelle dont le dormant a travaillé.",
          "Changement de cylindre après les 24 Heures, quand une clé de location n'est pas rendue.",
          "Porte palière d'une barre des Sablons dont la multipoint d'origine ne verrouille plus en haut.",
        ],
        faq: [
          {
            question:
              "Je suis dans le Vieux Mans : ai-je le droit de poser une porte blindée ?",
            answer:
              "La Cité Plantagenêt est protégée depuis 1966 — secteur sauvegardé devenu site patrimonial remarquable, avec un plan de sauvegarde approuvé en 1974. Tout ce qui se voit de la rue passe par l'Architecte des Bâtiments de France. On renforce derrière le vantail existant : cylindre haute sécurité, serrure adaptée, points d'ancrage.",
          },
          {
            question:
              "J'ai loué ma maison pendant les 24 Heures et toutes les clés ne sont pas revenues. Que faire ?",
            answer:
              "La course a lieu en juin, et le cas revient chaque année au Mans. Inutile de remplacer toute la serrure : sur la plupart des portes, changer le seul cylindre rend les anciennes clés inopérantes. Le prix est annoncé avant tout déplacement ; la loi impose un devis écrit dès 150 €.",
          },
          {
            question:
              "Ma porte de mancelle frotte et ne ferme qu'en forçant : faut-il tout changer ?",
            answer:
              "Presque jamais. Sur ces maisons de faubourg, le dormant bois scellé dans le moellon bouge et le vantail plein gonfle à l'humidité. Un réglage des paumelles, une reprise de gâche et parfois un rabotage suffisent ; la serrure d'origine, elle, est souvent encore saine.",
          },
          {
            question:
              "J'habite un immeuble de la Percée centrale, entre la gare et la place de la République. Trouve-t-on encore ma serrure ?",
            answer:
              "Souvent non à l'identique : ces immeubles en béton ont été bâtis à partir de 1965 le long de l'avenue du Général-Leclerc et beaucoup de boîtiers de l'époque ne sont plus fabriqués. On relève l'entraxe et le carré existants, puis on adapte une serrure au format actuel, sans toucher au dormant.",
          },
        ],
      },
      en: {
        title: "Locksmith Le Mans",
        keyword: "locksmith le mans",
        intro:
          "Le Mans grew by annexation: Sainte-Croix, Pontlieue, Saint-Pavin-des-Champs and Saint-Georges-du-Plain make up most of today's city. Hence four housing layers that call for different doors and different locks — the Cité Plantagenêt inside the Roman wall, the faubourg terraces of mancelles, the Ronceray and then Sablons estates, and the Percée centrale driven through the centre from 1965. In the protected sector, a door cannot simply be replaced.",
        landmarks: [
          "Cathédrale Saint-Julien",
          "Enceinte gallo-romaine du Vieux Mans",
          "Place de la République",
          "Gare du Mans",
          "Circuit des 24 Heures",
          "Centre hospitalier, avenue Rubillard",
        ],
        neighborhoods: [
          "Cité Plantagenêt (Vieux Mans)",
          "Les Sablons",
          "Gazonfier",
          "Pontlieue",
          "Ronceray-Glonnières",
          "Université-Ribay",
        ],
        localContext: [
          "The mancelle, standardised in the second half of the 19th century, sits on a strip plot: a street door opening onto a corridor, so two locks in series. Its timber frame is bedded in rubble masonry; it shifts, the door binds, the lock gets blamed.",
          "At Les Sablons, the ZUP of 1960 delivered towers and slab blocks until 1978, around the tour Cristal; its northern sector, Gazonfier, mixes small blocks and houses. In the Cité Plantagenêt, every element visible from the street goes through the Architecte des Bâtiments de France.",
        ],
        commonJobs: [
          "Seized lock on the street door of a mancelle whose timber frame has moved.",
          "Cylinder change after the 24 Heures, when a rental key never came back.",
          "Flat door in a Sablons slab block whose original multi-point lock no longer throws at the top.",
        ],
        faq: [
          {
            question:
              "I live in the Vieux Mans — am I allowed to fit an armoured door?",
            answer:
              "The Cité Plantagenêt has been protected since 1966 — a secteur sauvegardé, now a site patrimonial remarquable, with a conservation plan approved in 1974. Anything visible from the street goes through the Architecte des Bâtiments de France. Reinforcement happens behind the existing leaf: high-security cylinder, adapted lock, anchor points.",
          },
          {
            question:
              "I rented my house out during the 24 Heures and not all the keys came back. What now?",
            answer:
              "The race is held in June, and the case comes up every year in Le Mans. No need to replace the whole lock: on most doors, changing the cylinder alone makes the old keys useless. The price is quoted before anyone travels; French law requires a written quote from 150 €.",
          },
          {
            question:
              "My mancelle front door rubs and only shuts if I force it. Does it all need replacing?",
            answer:
              "Almost never. On these faubourg houses the timber frame bedded in rubble masonry shifts, and the solid leaf swells with damp. Adjusting the hinges, resetting the strike plate and sometimes planing the edge is enough; the original lock is usually still sound.",
          },
          {
            question:
              "I live in a Percée centrale block between the gare and the Place de la République. Can my lock still be found?",
            answer:
              "Often not identically: these concrete blocks went up from 1965 along the avenue du Général-Leclerc, and many lock cases from that period are out of production. The existing backset and spindle are measured, then a lock in a current format is adapted, without touching the frame.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "66000",
    slug: "serrurier-perpignan",
    coverage: "network",
    postalCodes: ["66000", "66100"],
    content: {
      fr: {
        title: "Serrurier Perpignan",
        keyword: "serrurier perpignan",
        intro:
          "Perpignan superpose deux parcs sans rapport. Le centre ancien — Saint-Jacques, Saint-Mathieu, La Réal — est bâti en galets de rivière chaînés de brique : les portes bois y coincent parce que la maçonnerie a travaillé, rarement parce que la serrure est morte. Plus loin, le Moulin-à-Vent, sorti de terre en 1962, aligne quelque 5 000 logements du même âge. Et la tramontane, environ 120 jours par an, claque les portes laissées entrouvertes.",
        landmarks: [
          "Le Castillet",
          "Le Palais des rois de Majorque",
          "La cathédrale Saint-Jean-Baptiste et le Campo Santo",
          "La place de la Loge et la Loge de Mer",
          "La gare, « centre du monde » selon Dalí",
          "Le campus Moulin-à-Vent de l'UPVD",
        ],
        neighborhoods: [
          "Saint-Jacques",
          "Saint-Mathieu",
          "Le Bas-Vernet",
          "Moulin-à-Vent",
          "Saint-Assiscle",
          "Mailloles",
        ],
        localContext: [
          "Galets de rivière chaînés de brique, huisseries bois prises dans une maçonnerie irrégulière : le vantail gonfle, le dormant se déforme, la serrure prend la faute. Le centre est classé Site patrimonial remarquable, où changer une porte sur rue passe par l'Architecte des Bâtiments de France.",
          "Le Moulin-à-Vent, lancé en 1962 pour la génération du baby-boom puis investi par les rapatriés d'Algérie, a vieilli d'un bloc : halls sous interphone, portes palières d'origine. Au Vernet, les cités HLM ont le même âge. La tramontane fatigue paumelles et portails de Mailloles à Clos Banet.",
        ],
        commonJobs: [
          "Porte claquée par une rafale de tramontane, sur un logement laissé entrouvert.",
          "Porte bois du centre ancien qui ne ferme plus : reprise du bâti avant la serrure.",
          "Changement de cylindre à la relève des clés, en location étudiante près du campus Moulin-à-Vent.",
        ],
        faq: [
          {
            question:
              "Ma porte a claqué avec la tramontane, faut-il forcément changer la serrure ?",
            answer:
              "Non. Le vent ne fait que claquer le pêne demi-tour : la porte s'ouvre sans casse dans la grande majorité des cas, et la serrure reste réutilisable telle quelle. Un jour de tramontane se compte à partir de 60 km/h de rafales, autant dire que le cas est courant ici.",
          },
          {
            question:
              "Peut-on poser une serrure multipoints sur une porte du centre ancien ?",
            answer:
              "Souvent oui, mais pas directement. À Saint-Jacques ou La Réal, le dormant est fixé dans des galets et de la brique, un support irrégulier. Sans reprise préalable de l'huisserie, les points hauts et bas ne trouvent aucun ancrage fiable et la pose ne tient pas.",
          },
          {
            question:
              "Dans une cité du Vernet, qui prend en charge la porte du hall ?",
            answer:
              "Le hall, l'interphone et le contrôle d'accès relèvent du bailleur ou du syndic ; votre porte palière vous concerne. La distinction compte au Vernet et au Nouveau Logis, inscrits au renouvellement urbain : les accès collectifs y sont repris par le programme, pas au coup par coup.",
          },
          {
            question:
              "Vous êtes basés à Paris : comment se passe une demande à Perpignan ?",
            answer:
              "Vous nous joignez à toute heure, par téléphone ou WhatsApp. Nous confirmons d'abord la faisabilité, le délai et le prix à partir de votre code postal et de votre description, avant tout déplacement. Au-delà de 150 €, un devis écrit est établi, comme la loi l'impose.",
          },
        ],
      },
      en: {
        title: "Locksmith Perpignan",
        keyword: "locksmith perpignan",
        intro:
          "Perpignan layers two unrelated housing stocks. The old centre — Saint-Jacques, Saint-Mathieu, La Réal — is built from river pebbles banded with brick: its timber doors jam because the masonry has shifted, rarely because the lock has died. Further out, Moulin-à-Vent, which went up in 1962, holds some 5,000 flats all of the same age. And the tramontane, roughly 120 days a year, slams doors left ajar.",
        landmarks: [
          "Le Castillet",
          "Le Palais des rois de Majorque",
          "The Saint-Jean-Baptiste cathedral and the Campo Santo",
          "Place de la Loge and the Loge de Mer",
          'The railway station, Dalí\'s "centre of the world"',
          "The UPVD campus at Moulin-à-Vent",
        ],
        neighborhoods: [
          "Saint-Jacques",
          "Saint-Mathieu",
          "Le Bas-Vernet",
          "Moulin-à-Vent",
          "Saint-Assiscle",
          "Mailloles",
        ],
        localContext: [
          "River pebbles banded with brick, timber frames set into irregular masonry: the leaf swells, the frame distorts, and the lock takes the blame. The centre is also a Site patrimonial remarquable, where replacing a street door goes through the Architecte des Bâtiments de France.",
          "Moulin-à-Vent, built in 1962 for the baby boom, then taken up by the repatriates from Algeria, aged all at once: entrance halls on intercom, original flat doors. The Vernet social-housing estates are the same age. The tramontane wears hinges and gates from Mailloles to Clos Banet.",
        ],
        commonJobs: [
          "Door slammed shut by a tramontane gust, on a home left ajar.",
          "Old-centre timber door that no longer closes: rebuild the frame before the lock.",
          "Cylinder change at handover of keys, in student lets near the Moulin-à-Vent campus.",
        ],
        faq: [
          {
            question:
              "My door slammed shut in the tramontane — do I have to change the lock?",
            answer:
              "No. The wind only latches the spring bolt: the door opens without damage in the great majority of cases, and the lock stays reusable exactly as it is. A tramontane day is counted from gusts of 60 km/h upwards, so the situation is a common one here.",
          },
          {
            question:
              "Can a multi-point lock be fitted to a door in the old centre?",
            answer:
              "Often yes, but not directly. In Saint-Jacques or La Réal the frame is anchored into pebble and brick, an irregular support. Without rebuilding the frame first, the top and bottom locking points find no reliable anchorage and the installation will not hold.",
          },
          {
            question:
              "On a Vernet estate, who is responsible for the entrance-hall door?",
            answer:
              "The hall, the intercom and the access control are the landlord's or managing agent's responsibility; your own flat door is yours. The distinction matters in Le Vernet and Nouveau Logis, both under urban renewal: communal access there is replaced by the programme, not case by case.",
          },
          {
            question:
              "You are based in Paris — how does a request from Perpignan work?",
            answer:
              "You can reach us at any hour, by phone or WhatsApp. We first confirm feasibility, timing and price from your postcode and your description, before anyone travels. From 150 EUR up, a written quote is issued, as French law requires.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "29200",
    slug: "serrurier-brest",
    coverage: "network",
    postalCodes: ["29200"],
    content: {
      fr: {
        title: "Serrurier Brest",
        keyword: "serrurier brest",
        intro:
          "Brest a été reconstruite après 1944 : quatre logements sur dix datent de 1946-1970, contre moins d'un sur dix d'avant-guerre. Le centre suit les 96 îlots du plan Mathon, des couronnes d'immeubles bas autour d'une cour de garages. Sur ce parc, la porte palière d'origine a souvent survécu à plusieurs serrures : c'est le cylindre qui se remplace. Saint-Martin et Recouvrance gardent, eux, un bâti d'avant-guerre aux serrures d'une autre génération.",
        landmarks: [
          "Rue de Siam",
          "Pont de Recouvrance",
          "Les Ateliers des Capucins et le téléphérique",
          "Château de Brest et tour Tanguy",
          "Océanopolis et le port du Moulin Blanc",
          "Cours Dajot",
        ],
        neighborhoods: [
          "Recouvrance",
          "Saint-Martin",
          "Bellevue",
          "Lambézellec",
          "Saint-Marc",
          "Saint-Pierre",
        ],
        localContext: [
          "Le centre reconstruit se lit par îlots : dix à quinze immeubles en couronne, R+3 à R+5, béton et pierre enduits au ciment blanc, cour intérieure livrée aux garages. Un foyer y cumule vite trois accès distincts — porte sur rue, porte de cour, cave ou box.",
          "Autour, le contraste est net : Lambézellec, Saint-Marc et Saint-Pierre sont d'anciennes communes absorbées en 1945, restées largement pavillonnaires. Saint-Marc et Saint-Pierre descendent vers la rade, et là portails et cylindres extérieurs prennent le vent d'ouest et l'air salin.",
        ],
        commonJobs: [
          "Changement de cylindre sur porte palière d'origine, dans les îlots du centre reconstruit.",
          "Ouverture de porte claquée par un courant d'air entre la cour d'îlot et la rue.",
          "Cylindre de portail ou de garage grippé par l'air salin, en secteur pavillonnaire.",
        ],
        faq: [
          {
            question:
              "Mon immeuble du centre date de la Reconstruction : faut-il changer toute la serrure ?",
            answer:
              "Rarement. Sur ces portes palières des années 1950-60, le coffre encastré est souvent encore sain, et c'est le cylindre — changé au fil des locataires — qui fatigue. Le diagnostic passe d'abord par votre description, et le prix est annoncé avant tout déplacement.",
          },
          {
            question:
              "Ma clé tourne de plus en plus dur sur le portail, c'est l'air marin ?",
            answer:
              "Très probablement. Sur les secteurs qui descendent vers la rade, Saint-Marc ou Saint-Pierre, le sel et l'humidité oxydent les goupilles. Surtout n'huilez pas : l'huile fixe le sel et la poussière. Un lubrifiant sec, graphite ou PTFE, est le bon réflexe avant que le cylindre ne casse.",
          },
          {
            question:
              "J'habite Saint-Martin, dans un immeuble d'avant-guerre : puis-je changer ma porte d'entrée sur rue ?",
            answer:
              "Une partie de Saint-Martin et de Recouvrance relève de l'AVAP de Brest, devenue site patrimonial remarquable : l'aspect extérieur des menuiseries y est encadré, et la porte sur rue relève en plus de la copropriété. À l'intérieur du logement, votre serrure reste votre choix.",
          },
          {
            question:
              "Je loue un studio étudiant vers Bellevue et j'ai perdu mes clés, que faire ?",
            answer:
              "Près de 30 000 étudiants sont inscrits dans la métropole brestoise, et la question revient chaque rentrée. Prévenez d'abord le bailleur ou le Crous : la clé d'immeuble et la clé du logement ne se traitent pas pareil. Décrivez la serrure, nous confirmons faisabilité, délai et prix avant tout déplacement.",
          },
        ],
      },
      en: {
        title: "Locksmith Brest",
        keyword: "locksmith brest",
        intro:
          "Brest was rebuilt after 1944: four homes in ten date from 1946-1970, against fewer than one in ten from before the war. The centre follows the 96 îlots of the Mathon plan, rings of low buildings around a courtyard of garages. On that stock the original flat door has often outlived several locks: it is the cylinder that gets replaced. Saint-Martin and Recouvrance keep pre-war buildings and older locks.",
        landmarks: [
          "Rue de Siam",
          "Pont de Recouvrance",
          "Les Ateliers des Capucins and the cable car",
          "Château de Brest and the tour Tanguy",
          "Océanopolis and the port du Moulin Blanc",
          "Cours Dajot",
        ],
        neighborhoods: [
          "Recouvrance",
          "Saint-Martin",
          "Bellevue",
          "Lambézellec",
          "Saint-Marc",
          "Saint-Pierre",
        ],
        localContext: [
          "The rebuilt centre reads as îlots: ten to fifteen buildings in a ring, three to five storeys, concrete and stone rendered in white cement, the inner courtyard given over to garages. A household there quickly accumulates three accesses — street door, courtyard door, cellar or lock-up.",
          "Around it the contrast is sharp: Lambézellec, Saint-Marc and Saint-Pierre are former communes absorbed in 1945 and still largely houses. Saint-Marc and Saint-Pierre run down towards the rade, and there gates and outdoor cylinders take the westerly wind and the salt air.",
        ],
        commonJobs: [
          "Cylinder change on an original flat door, in the îlots of the rebuilt centre.",
          "Opening a door slammed shut by a draught between the îlot courtyard and the street.",
          "Gate or garage cylinder seized by salt air, in the pavillonnaire districts.",
        ],
        faq: [
          {
            question:
              "My building in the centre dates from the Reconstruction — do I need a whole new lock?",
            answer:
              "Rarely. On these 1950s-60s flat doors the mortice case is often still sound, and it is the cylinder — changed from tenant to tenant — that wears out. Diagnosis starts from your description, and the price is quoted before anyone travels.",
          },
          {
            question:
              "My gate key turns harder and harder — is it the sea air?",
            answer:
              "Very probably. In the sectors running down to the rade, Saint-Marc or Saint-Pierre, salt and damp oxidise the pins. Above all do not oil it: oil holds salt and dust. A dry lubricant, graphite or PTFE, is the right reflex before the cylinder breaks.",
          },
          {
            question:
              "I live in Saint-Martin, in a pre-war building — can I change my street door?",
            answer:
              "Part of Saint-Martin and of Recouvrance falls under Brest's AVAP, now a site patrimonial remarquable: the external appearance of joinery is regulated there, and a street door is a copropriété matter as well. Inside the flat, your own lock stays your choice.",
          },
          {
            question:
              "I rent a student studio near Bellevue and I have lost my keys — what now?",
            answer:
              "Close to 30,000 students are enrolled across the Brest metropolitan area, and the question comes round every September. Tell your landlord or the Crous: the building key and the flat key are not handled the same way. Describe the lock and we confirm feasibility, timing and price before travelling.",
          },
        ],
      },
    },
  },
  {
    kind: "city",
    number: "14000",
    slug: "serrurier-caen",
    coverage: "network",
    postalCodes: ["14000"],
    content: {
      fr: {
        title: "Serrurier Caen",
        keyword: "serrurier caen",
        intro:
          "Caen a perdu 60 % de ses logements en 1944. Le centre qu'on prend pour de l'ancien est une reconstruction de 1948-1963 : pierre de Caen en façade, mais des portes et des serrures d'après-guerre, pensées à un seul point. Les portes vraiment anciennes se concentrent au Vaugueux, place Saint-Sauveur et rue Écuyère. Autour, les grands ensembles des années 1950-70 relèvent d'une tout autre mécanique.",
        landmarks: [
          "Château de Caen",
          "Abbaye aux Hommes",
          "Abbaye aux Dames",
          "Mémorial de Caen",
          "Bassin Saint-Pierre et le port de plaisance",
          "CHU Côte de Nacre",
        ],
        neighborhoods: [
          "Saint-Jean",
          "Le Vaugueux",
          "Vaucelles",
          "Chemin Vert",
          "La Guérinière",
          "Venoix",
        ],
        localContext: [
          "Le centre de Caen a été rebâti entre 1948 et 1963 : îlots néo-haussmanniens de cinq à six étages, façades en pierre de Caen, menuiseries d'après-guerre. Les huisseries d'origine y sont plus étroites que les standards actuels, et un multipoint ne s'y pose pas sans adaptation.",
          "Au sud, la Guérinière (1955-1961) et la Grâce de Dieu (1961-1964) ; à l'ouest, les huit tours du Chemin Vert, bâties en 1969-1970 et réhabilitées jusqu'en 2023, rues de Bourgogne et de Champagne. Serrures multipoints récentes, halls sous interphone et badge Vigik.",
        ],
        commonJobs: [
          "Remplacement d'une serrure à un point sur porte palière d'immeuble de la Reconstruction.",
          "Réglage d'un multipoint qui ne verrouille plus en haut, dans une tour réhabilitée du Chemin Vert.",
          "Changement de cylindre à la relocation d'un studio étudiant près du campus 1, à la rentrée.",
        ],
        faq: [
          {
            question:
              "Ma façade est en pierre : ma serrure est-elle forcément ancienne ?",
            answer:
              "Non, et c'est la confusion la plus fréquente à Caen. En centre-ville, la pierre de taille habille un immeuble reconstruit après 1948. La porte et la serrure datent de l'après-guerre : souvent un point unique, dans une huisserie plus étroite que les standards actuels.",
          },
          {
            question:
              "Puis-je changer l'aspect de ma porte sur rue dans le centre ?",
            answer:
              "Caen est classée site patrimonial remarquable depuis 2021, sur 712 hectares couvrant le centre ancien, la ville classique, la ville reconstruite et les faubourgs. Modifier l'aspect extérieur d'une porte visible de la rue suppose une déclaration préalable et l'avis de l'Architecte des Bâtiments de France. Remplacer le cylindre, non.",
          },
          {
            question:
              "Dans une tour du Chemin Vert, seul le point haut ne se verrouille plus.",
            answer:
              "Sur les huit tours du Chemin Vert, réhabilitées jusqu'en 2023, ce défaut relève presque toujours du réglage et non du remplacement : un vantail qui s'affaisse sur ses paumelles, ou une tringlerie désalignée. Le diagnostic se fait porte ouverte, avant toute pièce.",
          },
          {
            question:
              "J'ai une porte ancienne au Vaugueux, faut-il tout remplacer ?",
            answer:
              "Rarement. Au Vaugueux, épargné en 1944, les vantaux sont ceux de maisons à pans de bois ; place Saint-Sauveur, ceux des hôtels classiques du XVIIIe. Dans les deux cas le coffre d'origine se conserve souvent et seul le cylindre change. Un bloc moderne aux cotes standard abîme le vantail.",
          },
        ],
      },
      en: {
        title: "Locksmith Caen",
        keyword: "locksmith caen",
        intro:
          "Caen lost 60% of its housing in 1944. The centre that looks old is a 1948-1963 reconstruction: pierre de Caen on the façades, but post-war doors and locks, designed around a single point. Genuinely old doors are concentrated in Le Vaugueux, on place Saint-Sauveur and rue Écuyère. Around them, the estates of the 1950s-70s run on entirely different mechanics.",
        landmarks: [
          "Château de Caen",
          "Abbaye aux Hommes",
          "Abbaye aux Dames",
          "Mémorial de Caen",
          "Bassin Saint-Pierre and the marina",
          "CHU Côte de Nacre",
        ],
        neighborhoods: [
          "Saint-Jean",
          "Le Vaugueux",
          "Vaucelles",
          "Chemin Vert",
          "La Guérinière",
          "Venoix",
        ],
        localContext: [
          "The centre of Caen was rebuilt between 1948 and 1963: neo-Haussmannian blocks of five to six storeys, pierre de Caen façades, post-war joinery. The original door frames there are narrower than today's standards, and a multi-point lock cannot be fitted without adapting the doorway.",
          "To the south, la Guérinière (1955-1961) and la Grâce de Dieu (1961-1964); to the west, the eight Chemin Vert towers, built in 1969-1970 and refurbished through to 2023, on rue de Bourgogne and rue de Champagne. Recent multi-point locks, entrance halls on interphone and Vigik.",
        ],
        commonJobs: [
          "Replacing a single-point lock on a flat entrance door in a Reconstruction block.",
          "Adjusting a multi-point lock that no longer engages at the top, in a refurbished Chemin Vert tower.",
          "Cylinder change when a student studio near campus 1 is re-let at the September intake.",
        ],
        faq: [
          {
            question: "My façade is stone — does that mean my lock is old?",
            answer:
              "No, and this is the most common confusion in Caen. In the city centre, dressed stone fronts a building rebuilt after 1948. The door and the lock date from the post-war years: often a single point, in a frame narrower than today's standards.",
          },
          {
            question:
              "Can I change the appearance of my street-facing door in the centre?",
            answer:
              "Caen has been a site patrimonial remarquable since 2021, across 712 hectares covering the old centre, the classical city, the rebuilt city and the faubourgs. Altering how a street-facing door looks requires a déclaration préalable and sign-off from the Architecte des Bâtiments de France. Replacing the cylinder does not.",
          },
          {
            question:
              "In a Chemin Vert tower, only the top point no longer locks.",
            answer:
              "On the eight Chemin Vert towers, refurbished through to 2023, this fault is almost always a matter of adjustment rather than replacement: a leaf sagging on its hinges, or a misaligned linkage. The diagnosis is made with the door open, before any part is ordered.",
          },
          {
            question:
              "I have an old door in Le Vaugueux — does everything need replacing?",
            answer:
              "Rarely. In Le Vaugueux, spared in 1944, the leaves are those of timber-framed houses; on place Saint-Sauveur, those of the 18th-century classical hôtels particuliers. In both cases the original lock case can often be kept and only the cylinder changed. A modern standard-sized body damages the leaf.",
          },
        ],
      },
    },
  },
];
