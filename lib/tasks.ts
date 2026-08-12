import type { Locale } from "@/lib/i18n";

export type TaskFaq = { question: string; answer: string };

export type TaskContent = {
  title: string;
  keyword: string;
  summary: string;
  lead: string;
  /** "This is your situation if…" — how a panicking visitor self-identifies. */
  symptoms: string[];
  /** What to do in the next five minutes. */
  doNow: string[];
  /** What makes it worse — the part that saves people money. */
  avoid: string[];
  /** How the job actually goes, once we're there. */
  howWeFix: string[];
  faq: TaskFaq[];
};

/**
 * Task pages sit between a service page and a guide.
 *
 * A guide answers "how does this work"; a service page answers "what do you
 * sell". Neither matches what someone actually types at 2am, which is the
 * symptom: "porte claquée", "clé cassée dans la serrure". These pages target
 * that query — short, transactional, priced, with the call one tap away.
 *
 * `serviceSlug` links the task to its service so the price comes from one grid
 * (lib/pricing.ts) and can never drift from /tarifs.
 */
export type Task = {
  slug: string;
  serviceSlug: string;
  guideSlug?: string;
  content: Record<Locale, TaskContent>;
};

export type LocalizedTask = TaskContent & {
  slug: string;
  serviceSlug: string;
  guideSlug?: string;
};

export const TASKS: Task[] = [
  {
    slug: "porte-claquee",
    serviceSlug: "ouverture-de-porte",
    guideSlug: "porte-claquee-que-faire",
    content: {
      fr: {
        title: "Porte claquée",
        keyword: "porte claquée paris",
        summary:
          "La porte s'est refermée avec les clés à l'intérieur : ouverture sans dégât dans la grande majorité des cas.",
        lead: "Une porte simplement claquée n'est retenue que par le pêne demi-tour. Dans la grande majorité des cas, elle s'ouvre sans dégât et sans rien remplacer — à condition de ne pas l'avoir aggravée avant notre arrivée.",
        symptoms: [
          "Vous avez tiré la porte derrière vous sans tourner la clé.",
          "Les clés sont visibles à l'intérieur, sur le meuble ou dans la serrure.",
          "La poignée s'abaisse normalement mais la porte reste retenue.",
        ],
        doNow: [
          "Vérifiez qu'aucun double n'est accessible : conjoint, colocataire, voisin, gardien, agence si vous êtes en location.",
          "Regardez les autres accès sans prendre de risque : porte de service, fenêtre restée entrouverte. Ne passez jamais par une façade ou un balcon voisin.",
          "Si un enfant en bas âge ou une personne vulnérable est seul à l'intérieur, appelez le 18 ou le 112 : les pompiers sont prioritaires et plus rapides.",
          "Appelez-nous en précisant que la porte est claquée et non fermée à clé : c'est ce qui permet de vous annoncer un tarif ferme au téléphone.",
        ],
        avoid: [
          "N'essayez pas la carte de fidélité : sur une porte moderne elle échoue presque toujours et peut tordre le pêne, transformant une ouverture simple en réparation.",
          "Ne forcez pas la poignée ni le cylindre, et ne démontez rien.",
          "N'acceptez pas un intervenant qui refuse de vous annoncer un prix avant de se déplacer.",
        ],
        howWeFix: [
          "L'artisan identifie le type de serrure, puis ouvre par la méthode la moins destructive : crochetage, radiographie par la tranche, ou action sur le cylindre. Une ouverture de porte claquée prend généralement quinze à trente minutes.",
          "Le perçage n'intervient pas sur ce type de cas, sauf si la porte a été forcée avant notre arrivée ou si le mécanisme est déjà cassé. Dans ce cas, il vous est annoncé et chiffré avant, jamais présenté comme un fait accompli.",
        ],
        faq: [
          {
            question: "Faut-il changer la serrure après une porte claquée ?",
            answer:
              "Non, si l'ouverture s'est faite sans dégât. Une serrure intacte reste une serrure intacte. Se voir proposer un remplacement « par sécurité » juste après une ouverture propre n'a aucune justification technique.",
          },
          {
            question: "Vous demandez un justificatif de domicile ?",
            answer:
              "Oui, systématiquement : pièce d'identité, facture ou attestation. C'est la règle élémentaire qui empêche d'ouvrir la porte de quelqu'un d'autre — et elle protège votre logement quand vous n'êtes pas là.",
          },
        ],
      },
      en: {
        title: "Door shut behind you",
        keyword: "locked out paris",
        summary:
          "The door has closed with the keys inside: opened without damage in the large majority of cases.",
        lead: "A door that has simply pulled shut is held only by the latch. In the large majority of cases it opens with no damage and nothing replaced — provided it hasn't been made worse before we arrive.",
        symptoms: [
          "You pulled the door behind you without turning the key.",
          "The keys are visible inside, on a surface or still in the lock.",
          "The handle moves normally but the door stays held.",
        ],
        doNow: [
          "Check no spare is reachable: partner, flatmate, neighbour, caretaker, agency if you rent.",
          "Look at other ways in without taking risks: side door, a window left ajar. Never go across a façade or a neighbour's balcony.",
          "If a young child or vulnerable adult is alone inside, call 18 or 112: the fire service takes priority and is faster.",
          "Call us and say the door is latched rather than locked: that's what lets us quote a firm price on the phone.",
        ],
        avoid: [
          "Don't try the loyalty card: on a modern door it almost always fails and can bend the latch, turning a simple opening into a repair.",
          "Don't force the handle or the cylinder, and don't dismantle anything.",
          "Don't accept anyone who refuses to quote a price before travelling.",
        ],
        howWeFix: [
          "The tradesperson identifies the lock type, then opens by the least destructive method: picking, shimming via the edge of the door, or working the cylinder. A latched door usually takes fifteen to thirty minutes.",
          "Drilling doesn't come into this kind of job, unless the door was forced before we arrived or the mechanism is already broken. In that case it's explained and priced first, never presented as a done deal.",
        ],
        faq: [
          {
            question: "Does the lock need changing afterwards?",
            answer:
              'No, if the opening was damage-free. An intact lock is still an intact lock. Being offered a replacement "to be safe" right after a clean opening has no technical justification.',
          },
          {
            question: "Do you ask for proof of address?",
            answer:
              "Yes, always: ID, a bill or a tenancy document. It's the basic rule that stops someone else's door being opened — and it protects your home when you're not there.",
          },
        ],
      },
    },
  },
  {
    slug: "cle-cassee-dans-la-serrure",
    serviceSlug: "ouverture-de-porte",
    content: {
      fr: {
        title: "Clé cassée dans la serrure",
        keyword: "clé cassée dans la serrure",
        summary:
          "Extraction du fragment et diagnostic du cylindre, avant de décider s'il faut le remplacer.",
        lead: "Une clé cassée dans le cylindre est une situation où chaque tentative supplémentaire coûte cher : la plupart des remplacements de cylindre facturés dans ce cas auraient pu être évités si personne n'avait insisté.",
        symptoms: [
          "Un morceau de clé est resté dans le cylindre, l'autre est dans votre main.",
          "La clé s'est rompue en tournant, souvent sur une serrure qui forçait déjà depuis quelque temps.",
          "Le fragment est visible dans la fente, ou entièrement enfoncé.",
        ],
        doNow: [
          "Arrêtez immédiatement toute tentative : chaque essai enfonce le fragment plus loin.",
          "Ne mettez ni lubrifiant en aérosol ni huile de cuisine : cela colle la limaille et complique l'extraction.",
          "Notez si la porte est ouverte ou fermée : ce n'est pas la même intervention ni le même tarif.",
          "Appelez-nous en décrivant la marque du cylindre si elle est lisible sur la têtière.",
        ],
        avoid: [
          "N'essayez pas d'extraire le fragment avec une pince à épiler ou une aiguille : c'est le geste qui le pousse au fond.",
          "N'utilisez pas de colle pour récupérer le morceau, méthode fréquemment conseillée en ligne et qui condamne le cylindre à coup sûr.",
          "Ne forcez pas la seconde clé dans le cylindre par-dessus le fragment.",
        ],
        howWeFix: [
          "L'artisan extrait le fragment avec un outil dédié — extracteur à crochet — puis teste le cylindre. Si le mécanisme n'a pas souffert, l'intervention s'arrête là : la clé est refaite, le cylindre reste en place.",
          "Si la rupture vient d'une usure du cylindre, ce qui est fréquent, le remplacement est proposé et chiffré avant d'être réalisé. Une clé qui casse est presque toujours le symptôme d'un mécanisme fatigué, rarement d'un accident isolé.",
        ],
        faq: [
          {
            question: "Le cylindre est-il forcément à remplacer ?",
            answer:
              "Non. Dans une bonne partie des cas, l'extraction suffit et le cylindre est réutilisable. Le remplacement se justifie quand le mécanisme est usé ou endommagé par les tentatives d'extraction — d'où l'importance de ne rien tenter avant.",
          },
          {
            question: "Combien coûte l'extraction ?",
            answer:
              "Elle relève du tarif d'ouverture de porte, annoncé au téléphone avant le déplacement. Si un remplacement de cylindre s'avère nécessaire, il fait l'objet d'un montant distinct, validé avec vous avant la pose.",
          },
        ],
      },
      en: {
        title: "Key snapped in the lock",
        keyword: "broken key in lock paris",
        summary:
          "Extracting the fragment and checking the cylinder, before deciding whether it needs replacing.",
        lead: "A key snapped in the cylinder is a situation where every extra attempt costs money: most of the cylinder replacements billed in these cases could have been avoided if nobody had persisted.",
        symptoms: [
          "Part of the key is left in the cylinder, the rest is in your hand.",
          "The key broke while turning, often on a lock that had been stiff for a while.",
          "The fragment is visible in the slot, or pushed fully in.",
        ],
        doNow: [
          "Stop trying immediately: each attempt pushes the fragment deeper.",
          "Don't use aerosol lubricant or cooking oil: it binds the filings and makes extraction harder.",
          "Note whether the door is open or closed: they're different jobs at different prices.",
          "Call us and describe the cylinder brand if it's readable on the faceplate.",
        ],
        avoid: [
          "Don't try to pull the fragment out with tweezers or a needle: that's what drives it to the back.",
          "Don't use glue to retrieve the piece — a common online tip that reliably destroys the cylinder.",
          "Don't force the spare key in on top of the fragment.",
        ],
        howWeFix: [
          "The tradesperson removes the fragment with a proper key extractor, then tests the cylinder. If the mechanism is unharmed the job stops there: the key is cut again and the cylinder stays.",
          "If the break came from a worn cylinder, which is common, replacement is proposed and priced before it happens. A key that snaps is nearly always the symptom of a tired mechanism rather than an isolated accident.",
        ],
        faq: [
          {
            question: "Does the cylinder always need replacing?",
            answer:
              "No. In a good share of cases extraction is enough and the cylinder is reusable. Replacement is justified when the mechanism is worn or damaged by extraction attempts — which is why not trying first matters.",
          },
          {
            question: "What does extraction cost?",
            answer:
              "It falls under the door-opening price, quoted on the phone before travel. If a cylinder replacement turns out to be needed, it's a separate amount, agreed with you before fitting.",
          },
        ],
      },
    },
  },
  {
    slug: "serrure-bloquee",
    serviceSlug: "changement-de-serrure",
    content: {
      fr: {
        title: "Serrure bloquée",
        keyword: "serrure bloquée que faire",
        summary:
          "Diagnostic avant remplacement : une serrure qui bloque est souvent une porte à régler, pas un mécanisme mort.",
        lead: "Une serrure qui refuse de tourner n'est pas toujours une serrure à changer. Sur une porte multipoints en particulier, le blocage vient le plus souvent d'un réglage — et un réglage coûte une fraction d'un remplacement.",
        symptoms: [
          "La clé entre mais ne tourne pas, ou tourne en forçant nettement.",
          "Sur une multipoints, un seul point ne se verrouille plus, en haut ou en bas.",
          "La porte doit être soulevée ou poussée pour que la serrure accepte de tourner.",
        ],
        doNow: [
          "Arrêtez de forcer : c'est ce qui casse la clé ou la tringlerie et fait basculer un réglage vers un remplacement complet.",
          "Testez porte ouverte : si le mécanisme fonctionne parfaitement porte ouverte mais bloque une fois fermée, le problème est l'alignement, pas la serrure.",
          "Regardez si la porte frotte au sol ou sur le dormant : un vantail affaissé est la cause la plus fréquente.",
          "Décrivez-nous ces deux tests au téléphone : ils déterminent l'intervention et donc le tarif annoncé.",
        ],
        avoid: [
          "Ne mettez pas de dégrippant en aérosol dans un cylindre : il dissout le lubrifiant d'origine et le mécanisme se grippe durablement.",
          "N'insistez pas avec une pince ou une clé de rechange plus rigide.",
          "N'acceptez pas un remplacement de serrure complète sans qu'un diagnostic ait été fait devant vous.",
        ],
        howWeFix: [
          "L'artisan teste le mécanisme porte ouverte puis fermée, contrôle l'alignement des gâches, le jeu des paumelles et l'état de la tringlerie. Dans une large part des cas, un réglage des gâches ou un relevage du vantail suffit.",
          "Si le mécanisme est réellement hors service — cylindre grippé de l'intérieur, tringlerie rompue, coffre endommagé — le remplacement est chiffré avant, avec le choix du matériel expliqué plutôt qu'imposé.",
        ],
        faq: [
          {
            question:
              "Ma multipoints ne verrouille plus en haut, faut-il tout changer ?",
            answer:
              "Presque jamais. Quand un seul point ne prend plus, la cause est mécanique : porte affaissée, gâche désalignée, tringlerie à régler. Le réglage coûte une fraction du remplacement, et nous ne proposons une serrure neuve que si le mécanisme est réellement mort.",
          },
          {
            question: "Le dégrippant peut-il régler le problème ?",
            answer:
              "Sur un cylindre, non : les aérosols dissolvent le lubrifiant d'origine et aggravent le grippage à moyen terme. Un lubrifiant sec au graphite ou au PTFE est adapté ; c'est ce que l'artisan utilise après nettoyage.",
          },
        ],
      },
      en: {
        title: "Jammed lock",
        keyword: "lock jammed paris",
        summary:
          "Diagnosis before replacement: a jamming lock is often a door needing adjustment, not a dead mechanism.",
        lead: "A lock that won't turn isn't always a lock to change. On a multi-point door especially, jamming usually comes from adjustment — and adjustment costs a fraction of replacement.",
        symptoms: [
          "The key goes in but won't turn, or turns only with clear force.",
          "On a multi-point lock, one point no longer engages, top or bottom.",
          "The door has to be lifted or pushed before the lock will turn.",
        ],
        doNow: [
          "Stop forcing: that's what snaps the key or the linkage and turns an adjustment into a full replacement.",
          "Test it with the door open: if the mechanism works perfectly open but jams closed, the problem is alignment, not the lock.",
          "Check whether the door catches on the floor or the frame: a dropped leaf is the most frequent cause.",
          "Describe those two tests on the phone: they determine the job, and therefore the price we quote.",
        ],
        avoid: [
          "Don't spray aerosol releasing agent into a cylinder: it dissolves the original lubricant and the mechanism seizes for good.",
          "Don't persist with pliers or a stiffer spare key.",
          "Don't accept a full lock replacement without a diagnosis done in front of you.",
        ],
        howWeFix: [
          "The tradesperson tests the mechanism with the door open and then closed, checks keep alignment, hinge play and the state of the linkage. In a large share of cases, adjusting the keeps or lifting the leaf is enough.",
          "If the mechanism is genuinely finished — a cylinder seized internally, broken linkage, a damaged case — replacement is priced first, with the hardware choice explained rather than imposed.",
        ],
        faq: [
          {
            question:
              "My multi-point lock won't engage at the top — replace everything?",
            answer:
              "Almost never. When a single point stops engaging, the cause is mechanical: dropped door, misaligned keep, linkage needing adjustment. Adjustment costs a fraction of replacement, and we only propose a new lock if the mechanism is genuinely dead.",
          },
          {
            question: "Will releasing spray fix it?",
            answer:
              "On a cylinder, no: aerosols dissolve the original lubricant and make seizing worse over time. A dry graphite or PTFE lubricant is the right product, and it's what the tradesperson uses after cleaning.",
          },
        ],
      },
    },
  },
  {
    slug: "cle-perdue",
    serviceSlug: "changement-de-serrure",
    guideSlug: "serrurerie-assurance-habitation",
    content: {
      fr: {
        title: "Clé perdue ou volée",
        keyword: "clé perdue que faire",
        summary:
          "Remplacement du cylindre pour neutraliser tous les jeux en circulation, sans changer toute la serrure.",
        lead: "Une clé perdue n'est un problème que si elle peut être rattachée à une adresse. La bonne réponse est presque toujours le remplacement du cylindre seul : plus rapide et bien moins cher qu'une serrure complète, pour le même résultat.",
        symptoms: [
          "Vous avez perdu un jeu de clés, ou il vous a été volé.",
          "Les clés portaient une étiquette, une adresse, ou étaient dans un sac avec vos papiers.",
          "Un ancien locataire, un ancien salarié ou un prestataire n'a jamais rendu son jeu.",
        ],
        doNow: [
          "Évaluez le risque réel : des clés perdues sans aucun lien avec votre adresse sont beaucoup moins urgentes que des clés volées avec vos papiers.",
          "Prévenez votre assurance habitation : beaucoup de contrats couvrent le remplacement du cylindre dans ce cas précis.",
          "Si vous êtes locataire, informez l'agence ou le bailleur avant l'intervention pour éviter toute contestation à l'état des lieux.",
          "Faites remplacer le cylindre sans attendre si l'adresse était identifiable.",
        ],
        avoid: [
          "Ne vous contentez pas de « faire attention » quelques jours : c'est exactement le délai que met une clé volée à être utilisée.",
          "N'acceptez pas un remplacement de serrure complète si seul le cylindre est en cause.",
          "Ne laissez pas de double chez un voisin sans savoir où il est rangé.",
        ],
        howWeFix: [
          "Le cylindre est la pièce dans laquelle la clé tourne : le remplacer neutralise instantanément tous les jeux existants, sans toucher au reste du mécanisme ni à la porte. L'intervention prend en général moins de trente minutes.",
          "C'est aussi l'occasion de passer sur une clé protégée : la reproduction devient impossible sans carte de propriété, ce qui règle durablement la question des doubles en circulation.",
        ],
        faq: [
          {
            question: "Cylindre ou serrure complète ?",
            answer:
              "Le cylindre suffit dans la grande majorité des cas, si le reste du mécanisme est sain. La serrure complète ne se justifie que si le coffre ou le pêne sont endommagés. Les deux options vous sont chiffrées avant toute pose.",
          },
          {
            question: "Mon assurance rembourse-t-elle ?",
            answer:
              "Souvent, via une garantie spécifique perte ou vol de clés, parfois incluse d'office et parfois en option. Vérifiez vos conditions générales : nous fournissons systématiquement un devis et une facture détaillés, qui sont les pièces demandées.",
          },
        ],
      },
      en: {
        title: "Keys lost or stolen",
        keyword: "lost keys paris locksmith",
        summary:
          "Replacing the cylinder to neutralise every key in circulation, without changing the whole lock.",
        lead: "Lost keys are only a problem if they can be tied to an address. The right answer is nearly always replacing the cylinder alone: faster and far cheaper than a complete lock, for the same result.",
        symptoms: [
          "You've lost a set of keys, or they've been stolen.",
          "The keys carried a tag, an address, or were in a bag with your documents.",
          "A former tenant, employee or contractor never returned their set.",
        ],
        doNow: [
          "Assess the real risk: keys lost with no link to your address are far less urgent than keys stolen along with your papers.",
          "Tell your home insurer: many policies cover cylinder replacement in exactly this case.",
          "If you rent, inform the agency or landlord before the work to avoid any dispute at the check-out inventory.",
          "Have the cylinder replaced without delay if the address was identifiable.",
        ],
        avoid: [
          "Don't settle for \"being careful\" for a few days: that's precisely how long a stolen key takes to be used.",
          "Don't accept a complete lock replacement if only the cylinder is at issue.",
          "Don't leave a spare with a neighbour without knowing where it's kept.",
        ],
        howWeFix: [
          "The cylinder is the part the key turns in: replacing it instantly neutralises every existing key, without touching the rest of the mechanism or the door. The job usually takes under thirty minutes.",
          "It's also the moment to move to a protected key: copying becomes impossible without the ownership card, which settles the question of keys in circulation for good.",
        ],
        faq: [
          {
            question: "Cylinder or complete lock?",
            answer:
              "The cylinder is enough in the large majority of cases, if the rest of the mechanism is sound. A complete lock is only justified if the case or the bolt is damaged. Both options are priced before anything is fitted.",
          },
          {
            question: "Will my insurance reimburse it?",
            answer:
              "Often, through a specific lost-or-stolen-keys guarantee, sometimes included and sometimes optional. Check your policy wording: we always provide a detailed quote and invoice, which are the documents asked for.",
          },
        ],
      },
    },
  },
  {
    slug: "rideau-metallique-bloque",
    serviceSlug: "securisation-locaux-pro",
    content: {
      fr: {
        title: "Rideau métallique bloqué",
        keyword: "rideau métallique bloqué paris",
        summary:
          "Déblocage de rideau de commerce, serrure, verrou au sol ou tablier, avec intervention hors horaires d'ouverture.",
        lead: "Un rideau bloqué, c'est une journée de chiffre d'affaires en jeu. C'est aussi la situation où l'on casse le plus de matériel en insistant : un tablier faussé coûte bien plus cher qu'une serrure de rideau remplacée à temps.",
        symptoms: [
          "La serrure du rideau tourne dans le vide ou refuse de tourner.",
          "Le verrou au sol est arraché, tordu, ou ne se dégage plus de son logement.",
          "Le tablier se soulève de travers, coince à mi-hauteur, ou le moteur force sans monter.",
        ],
        doNow: [
          "Coupez l'alimentation d'un rideau motorisé plutôt que d'insister sur la commande : le moteur est ce qui fausse le tablier.",
          "Ne tirez pas à plusieurs sur la manivelle ou le bas du tablier.",
          "Photographiez la serrure et la têtière : la marque du matériel accélère nettement le diagnostic au téléphone.",
          "Appelez-nous en précisant s'il s'agit d'un rideau manuel ou motorisé, et si le commerce doit ouvrir dans la journée.",
        ],
        avoid: [
          "Ne forcez pas un rideau à moitié ouvert : le tablier se vrille et la réparation change d'ordre de grandeur.",
          "Ne percez pas la serrure vous-même, c'est le geste qui condamne aussi la têtière.",
          "N'attendez pas la veille d'une réouverture pour traiter un rideau qui accroche depuis des semaines.",
        ],
        howWeFix: [
          "L'artisan libère d'abord l'accès, puis diagnostique la cause : serrure de rideau, verrou au sol, axe, ou tablier déformé. Le déblocage et le remplacement éventuel de la fermeture sont chiffrés séparément avant intervention.",
          "Pour un commerce, la pose définitive se planifie hors horaires d'ouverture quand c'est possible. Le créneau et l'éventuel supplément horaire figurent au devis, jamais découverts sur la facture.",
        ],
        faq: [
          {
            question: "Pouvez-vous intervenir avant l'ouverture du commerce ?",
            answer:
              "Oui, c'est la demande la plus fréquente. La sécurisation d'urgence se fait à tout moment, et la réparation définitive se planifie tôt le matin, en soirée ou le week-end selon votre activité, avec le créneau écrit au devis.",
          },
          {
            question: "Faut-il remplacer tout le rideau ?",
            answer:
              "Rarement. Dans la plupart des cas seul l'organe de fermeture est en cause — serrure de rideau ou verrou au sol — et se remplace seul. Le tablier n'est concerné que s'il a été faussé, généralement par des tentatives d'ouverture en force.",
          },
        ],
      },
      en: {
        title: "Jammed roller shutter",
        keyword: "roller shutter repair paris",
        summary:
          "Freeing a shop shutter — lock, ground bolt or curtain — with work scheduled outside opening hours.",
        lead: "A jammed shutter means a day's takings at risk. It's also the situation where the most hardware gets broken by persisting: a buckled curtain costs far more than a shutter lock replaced in time.",
        symptoms: [
          "The shutter lock turns without catching, or won't turn at all.",
          "The ground bolt is torn out, bent, or won't come free of its housing.",
          "The curtain lifts crooked, sticks halfway, or the motor strains without rising.",
        ],
        doNow: [
          "Cut the power to a motorised shutter rather than pressing the control again: the motor is what buckles the curtain.",
          "Don't have several people pull on the crank or the bottom of the curtain.",
          "Photograph the lock and faceplate: the hardware brand speeds up diagnosis on the phone considerably.",
          "Call us and say whether the shutter is manual or motorised, and whether the shop has to open that day.",
        ],
        avoid: [
          "Don't force a half-open shutter: the curtain twists and the repair moves into another price bracket.",
          "Don't drill the lock yourself — that's what takes the faceplate with it.",
          "Don't wait until the eve of a reopening to deal with a shutter that has been catching for weeks.",
        ],
        howWeFix: [
          "The tradesperson frees the access first, then diagnoses the cause: shutter lock, ground bolt, barrel, or a deformed curtain. Freeing it and any replacement of the closing mechanism are priced separately before the work.",
          "For a shop, the permanent fitting is scheduled outside opening hours where possible. The slot and any out-of-hours surcharge are in the quote, never discovered on the invoice.",
        ],
        faq: [
          {
            question: "Can you come before the shop opens?",
            answer:
              "Yes, it's the most frequent request. Emergency securing happens at any hour, and the permanent repair is scheduled early morning, evening or weekend depending on your trading, with the slot written into the quote.",
          },
          {
            question: "Does the whole shutter need replacing?",
            answer:
              "Rarely. In most cases only the closing mechanism is at fault — shutter lock or ground bolt — and it's replaced on its own. The curtain is only involved if it has been buckled, usually by attempts to force it open.",
          },
        ],
      },
    },
  },
];

export function getTask(slug: string): Task | undefined {
  return TASKS.find((task) => task.slug === slug);
}

export function localizeTask(task: Task, lang: Locale): LocalizedTask {
  return {
    slug: task.slug,
    serviceSlug: task.serviceSlug,
    guideSlug: task.guideSlug,
    ...task.content[lang],
  };
}

export function getLocalizedTasks(lang: Locale): LocalizedTask[] {
  return TASKS.map((task) => localizeTask(task, lang));
}

export function getLocalizedTask(
  slug: string,
  lang: Locale,
): LocalizedTask | undefined {
  const task = getTask(slug);
  return task ? localizeTask(task, lang) : undefined;
}

/** Tasks that route to a given service — rendered on that service's page. */
export function getTasksForService(
  serviceSlug: string,
  lang: Locale,
): LocalizedTask[] {
  return TASKS.filter((t) => t.serviceSlug === serviceSlug).map((t) =>
    localizeTask(t, lang),
  );
}
