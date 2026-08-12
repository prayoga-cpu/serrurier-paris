import type { Guide } from "@/lib/guides/types";

export const EVITER_ARNAQUE: Guide = {
  slug: "eviter-arnaque-serrurier-paris",
  updated: "2026-08-12",
  related: ["prix-serrurier-paris", "porte-claquee-que-faire"],
  content: {
    fr: {
      title: "Éviter les arnaques de serrurier à Paris",
      keyword: "arnaque serrurier paris",
      summary:
        "Comment fonctionne l'arnaque au dépannage serrurerie, les signaux d'alerte avant l'intervention, ce que la loi impose et les recours si la facture a déjà explosé.",
      lead: "La serrurerie d'urgence est l'un des secteurs les plus signalés à la DGCCRF. Ce guide décrit le mécanisme complet d'une arnaque type, les questions à poser avant qu'un artisan se déplace, et ce que vous pouvez faire si vous avez déjà payé une facture abusive.",
      sections: [
        {
          heading: "Pourquoi ce secteur concentre autant d'abus",
          paragraphs: [
            "Une arnaque a besoin de trois ingrédients : l'urgence, l'asymétrie d'information et l'absence d'alternative immédiate. Le dépannage serrurerie les réunit tous les trois. Vous êtes dehors, il est tard, vous n'avez aucune idée de ce que coûte l'ouverture d'une porte, et le premier numéro qui répond a un avantage écrasant sur vous.",
            "Les enquêtes menées par la DGCCRF sur le dépannage à domicile relèvent régulièrement des anomalies chez une large majorité des professionnels contrôlés, la serrurerie figurant parmi les activités les plus signalées. Il ne s'agit donc pas de quelques brebis galeuses : c'est un modèle économique, industrialisé, qui vit de la panique.",
            "La conséquence pratique est simple : la question n'est pas « ce serrurier est-il honnête ? », question à laquelle vous ne pouvez pas répondre à 23 h. La question est « ai-je obtenu un engagement de prix vérifiable avant que quiconque touche à ma porte ? ». Le reste de ce guide sert à obtenir cet engagement.",
          ],
        },
        {
          heading: "Le mécanisme d'une arnaque type, étape par étape",
          paragraphs: [
            "Le schéma est presque toujours identique, et le reconnaître suffit souvent à s'en extraire.",
          ],
          list: [
            "Une annonce en ligne affiche un tarif d'appel irréaliste — « ouverture à partir de 39 € » — et une adresse locale qui n'existe pas physiquement.",
            "Le numéro renvoie vers une plateforme téléphonique, pas vers un artisan. L'opérateur reste vague sur le prix : « ça dépend, le technicien évaluera sur place ».",
            "La plateforme dispatche un intervenant payé à la commission sur le montant final. Sa rémunération dépend donc directement du gonflement de votre facture.",
            "Sur place, la porte est percée alors qu'une ouverture non destructive était possible. Le perçage crée un besoin : la serrure est désormais à remplacer.",
            "Le remplacement est facturé avec un cylindre bas de gamme vendu au prix d'un modèle certifié, plus main-d'œuvre, plus déplacement, plus majoration horaire.",
            "Le paiement est exigé immédiatement par carte, souvent sans facture détaillée, parfois sans devis signé — ce qui est illégal.",
          ],
        },
        {
          heading: "Les signaux d'alerte, avant même qu'on se déplace",
          paragraphs: [
            "Tous ces signaux se détectent au téléphone, c'est-à-dire au moment où renoncer ne vous coûte encore rien.",
          ],
          list: [
            "Refus de donner un prix, même sous forme de fourchette, avant le déplacement.",
            "Refus d'envoyer un devis écrit par SMS, e-mail ou WhatsApp avant l'intervention.",
            "Tarif d'appel spectaculairement bas, systématiquement suivi d'un « mais ça dépend de la serrure ».",
            "Interlocuteur incapable de donner le nom exact de l'entreprise, son SIRET ou son adresse.",
            "Insistance sur le paiement par carte et refus de préciser la méthode d'ouverture envisagée.",
            "Annonce qui affiche une adresse dans votre arrondissement alors que l'entreprise est un centre d'appel national.",
          ],
        },
        {
          heading: "Ce que la loi impose, et que beaucoup ignorent",
          paragraphs: [
            "L'arrêté du 24 janvier 2017 encadre la publicité des prix des prestations de dépannage, réparation et entretien dans le bâtiment — serrurerie comprise. Il impose la remise d'un devis écrit et détaillé avant l'exécution des travaux, mentionnant notamment le décompte des matériaux et de la main-d'œuvre, les frais de déplacement et le caractère gratuit ou payant du devis. Au-delà de 150 € TTC, l'obligation de devis vaut de toute façon pour toute prestation de service.",
            "Un professionnel qui intervient à votre domicile conclut par ailleurs un contrat « hors établissement ». Le droit de rétractation de 14 jours s'applique en principe, avec une exception importante : les travaux d'entretien ou de réparation urgents que vous avez expressément sollicités en sont exclus, mais uniquement pour ce qui était strictement nécessaire à l'urgence. Tout ce qui va au-delà — un blindage vendu dans la foulée, un cylindre haut de gamme proposé sur le pas de la porte — reste soumis au délai de rétractation.",
            "Enfin, une facture détaillée doit vous être remise. Sur le plan pratique, c'est votre meilleure protection : un professionnel qui refuse d'écrire ce qu'il facture vous dit tout ce qu'il y a à savoir sur lui.",
          ],
        },
        {
          heading: "Les quatre questions à poser au téléphone",
          paragraphs: [
            "Elles prennent trente secondes et éliminent la quasi-totalité des intermédiaires abusifs. Une entreprise sérieuse répond aux quatre sans hésiter.",
          ],
          list: [
            "« Quel est le montant total TTC, déplacement et main-d'œuvre compris, pour une ouverture de porte claquée ? » Un ordre de grandeur ferme doit pouvoir être donné.",
            "« Pouvez-vous me l'envoyer par écrit avant de venir ? » Un SMS ou un message WhatsApp suffit, et vous donne une trace.",
            "« Quelle méthode envisagez-vous, et dans quel cas passeriez-vous au perçage ? » La réponse doit être : le perçage en dernier recours, annoncé avant.",
            "« Quel est le nom exact de l'entreprise et son SIRET ? » Vérifiable en quelques secondes sur l'annuaire des entreprises.",
          ],
        },
        {
          heading: "Pendant l'intervention : trois règles simples",
          paragraphs: [
            "D'abord, ne laissez pas commencer sans devis signé si le montant dépasse ce qui vous a été annoncé au téléphone. Un écart entre l'annonce et le devis présenté sur le palier est le moment de dire non — pas après.",
            "Ensuite, méfiez-vous du perçage présenté comme inévitable. Sur une porte claquée, l'ouverture non destructive fonctionne dans la grande majorité des cas. Un professionnel compétent explique pourquoi il ne peut pas faire autrement, s'il ne peut réellement pas.",
            "Enfin, ne payez pas sans facture détaillée. Si l'on vous présente un terminal de paiement avant un document écrit, l'ordre des choses est inversé, et c'est délibéré.",
          ],
        },
        {
          heading: "Vous avez déjà payé une facture abusive : les recours",
          paragraphs: [
            "Rien n'est perdu, mais il faut agir vite et par écrit. Commencez par réclamer la facture détaillée si vous ne l'avez pas, puis contestez par lettre recommandée avec accusé de réception, en citant l'écart entre le prix annoncé et le montant facturé, et l'absence éventuelle de devis préalable.",
            "Signalez ensuite l'entreprise sur SignalConso, la plateforme de la DGCCRF : les signalements alimentent les contrôles et sont pris au sérieux. Si l'entreprise adhère à un dispositif de médiation de la consommation, saisissez le médiateur, gratuit pour vous. En cas de manœuvre frauduleuse caractérisée, un dépôt de plainte reste possible.",
            "Prévenez aussi votre assurance habitation si l'intervention faisait suite à une effraction : certains contrats couvrent les frais de serrurerie, et l'assureur a un intérêt direct à examiner une facture anormale.",
          ],
        },
      ],
      faq: [
        {
          question:
            "Un serrurier peut-il refuser de donner un prix au téléphone ?",
          answer:
            "Il peut légitimement refuser de s'engager au centime près sans avoir vu la porte, mais il ne peut pas refuser toute fourchette : le prix d'une ouverture de porte claquée standard est parfaitement connu de la profession. Un refus total de chiffrer, même approximativement, est le signal d'alerte le plus fiable qui existe dans ce secteur.",
        },
        {
          question:
            "Le perçage de la serrure est-il normal sur une porte claquée ?",
          answer:
            "Non, c'est l'exception. Une porte simplement claquée, sans tour de clé, s'ouvre le plus souvent sans dégât. Le perçage devient légitime sur une serrure verrouillée à plusieurs tours, un cylindre cassé ou un mécanisme bloqué — et il doit alors vous être annoncé, expliqué et chiffré avant d'être réalisé.",
        },
        {
          question:
            "Puis-je refuser de payer si la facture ne correspond pas au devis ?",
          answer:
            "Vous devez payer ce qui a été convenu, pas ce qui a été ajouté unilatéralement. Si la facture dépasse le devis signé sans avenant accepté par vous, contestez par écrit, réglez le montant du devis et refusez le surplus. Conservez tout : devis, facture, SMS, échanges WhatsApp.",
        },
        {
          question:
            "Comment vérifier qu'une entreprise de serrurerie existe vraiment ?",
          answer:
            "Demandez son SIRET et vérifiez-le sur l'annuaire officiel des entreprises. Une entreprise réelle a un numéro, une adresse et une activité déclarée. Une adresse qui correspond à une boîte aux lettres ou un numéro introuvable dans les registres publics indique que votre interlocuteur n'est pas celui qui interviendra.",
        },
      ],
    },
    en: {
      title: "Avoiding locksmith scams in Paris",
      keyword: "locksmith scam paris",
      summary:
        "How the emergency locksmith scam works, the warning signs before anyone travels, what French law requires, and your options if the invoice has already exploded.",
      lead: "Emergency locksmithing is one of the most reported sectors to the French consumer authority. This guide sets out how a typical scam works end to end, the questions to ask before anyone comes out, and what you can do if you've already paid an abusive invoice.",
      sections: [
        {
          heading: "Why this sector attracts so much abuse",
          paragraphs: [
            "A scam needs three ingredients: urgency, an information gap, and no immediate alternative. Emergency locksmithing supplies all three. You're outside, it's late, you have no idea what opening a door costs, and the first number that answers holds an overwhelming advantage over you.",
            "Investigations by the DGCCRF, the French consumer authority, regularly find irregularities at a large majority of the home-repair businesses they inspect, with locksmithing among the most reported activities. This isn't a few bad apples: it's an industrialised business model that runs on panic.",
            'The practical consequence is simple. The question isn\'t "is this locksmith honest?" — you can\'t answer that at 11pm. The question is "do I have a verifiable price commitment before anyone touches my door?" The rest of this guide is about getting that commitment.',
          ],
        },
        {
          heading: "How a typical scam works, step by step",
          paragraphs: [
            "The pattern is nearly always identical, and recognising it is usually enough to get out of it.",
          ],
          list: [
            'An online ad shows an unrealistic headline price — "openings from €39" — and a local address that doesn\'t physically exist.',
            'The number routes to a call platform, not a tradesperson. The operator stays vague on price: "it depends, the technician will assess on site".',
            "The platform dispatches someone paid on commission from the final amount. Their pay therefore depends directly on inflating your invoice.",
            "On site the door is drilled when a non-destructive opening was possible. Drilling manufactures a need: the lock now has to be replaced.",
            "The replacement is billed with a low-grade cylinder priced like a certified one, plus labour, plus call-out, plus an out-of-hours surcharge.",
            "Payment is demanded immediately by card, often with no itemised invoice and sometimes with no signed quote — which is illegal.",
          ],
        },
        {
          heading: "Warning signs, before anyone even travels",
          paragraphs: [
            "All of these are detectable on the phone — while walking away still costs you nothing.",
          ],
          list: [
            "Refusing to give any price, even as a range, before travelling.",
            "Refusing to send a written quote by text, email or WhatsApp before the work.",
            'A spectacularly low headline rate, always followed by "but it depends on the lock".',
            "An operator who can't give the company's exact name, registration number or address.",
            "Pressure to pay by card, and refusal to say what opening method is planned.",
            "An ad showing an address in your arrondissement when the business is a national call centre.",
          ],
        },
        {
          heading: "What French law requires, and many people don't know",
          paragraphs: [
            "The order of 24 January 2017 governs price transparency for repair, maintenance and emergency work in the building trades, locksmithing included. It requires a detailed written quote before work starts, itemising materials and labour, travel costs, and whether the quote itself is chargeable. Above €150 including VAT, a written quote is required for any service anyway.",
            'A tradesperson working at your home is also concluding an "off-premises" contract. A 14-day right of withdrawal applies in principle, with one important exception: urgent repair or maintenance work you expressly requested is excluded — but only for what was strictly necessary to deal with the emergency. Anything beyond that, such as reinforcement sold on the spot or a premium cylinder offered on the doorstep, keeps the withdrawal period.',
            "Finally, you must be given an itemised invoice. In practice that's your best protection: a professional who won't put in writing what they're charging has told you everything you need to know.",
          ],
        },
        {
          heading: "Four questions to ask on the phone",
          paragraphs: [
            "They take thirty seconds and eliminate almost every abusive intermediary. A serious business answers all four without hesitating.",
          ],
          list: [
            '"What\'s the total price including VAT, travel and labour, for opening a slammed door?" A firm order of magnitude should be available.',
            '"Can you send that to me in writing before you come?" A text or WhatsApp message is enough, and gives you a record.',
            '"What method do you plan to use, and in what case would you drill?" The answer should be: drilling as a last resort, announced beforehand.',
            '"What\'s the exact company name and registration number?" Verifiable in seconds on the public business register.',
          ],
        },
        {
          heading: "During the job: three simple rules",
          paragraphs: [
            "First, don't let work start without a signed quote if the amount exceeds what you were told on the phone. A gap between the phone quote and the paper presented on your landing is the moment to say no — not afterwards.",
            "Second, be wary of drilling presented as unavoidable. On a slammed door, non-destructive opening works in the large majority of cases. A competent professional explains why they can't do otherwise, if they genuinely can't.",
            "Third, don't pay without an itemised invoice. If a card terminal appears before a written document, the order has been reversed, and that's deliberate.",
          ],
        },
        {
          heading: "You've already paid an abusive invoice: what to do",
          paragraphs: [
            "Nothing is lost, but act quickly and in writing. Start by demanding the itemised invoice if you don't have it, then dispute it by recorded-delivery letter, citing the gap between the price quoted and the amount billed, and any absence of a prior quote.",
            "Report the business on SignalConso, the DGCCRF's reporting platform: reports feed inspections and are taken seriously. If the business subscribes to a consumer mediation scheme, refer the matter to the mediator, which is free to you. Where there's clear fraud, a criminal complaint remains possible.",
            "Tell your home insurer too if the work followed a break-in: some policies cover locksmith costs, and the insurer has a direct interest in examining an abnormal invoice.",
          ],
        },
      ],
      faq: [
        {
          question: "Can a locksmith refuse to give a price on the phone?",
          answer:
            "They can legitimately decline to commit to the exact cent without seeing the door, but they can't refuse any range at all: the price of a standard slammed-door opening is well known across the trade. A blanket refusal to quote, even approximately, is the single most reliable warning sign in this sector.",
        },
        {
          question: "Is drilling the lock normal on a slammed door?",
          answer:
            "No, it's the exception. A door that has simply pulled shut, without the key being turned, usually opens without damage. Drilling becomes legitimate on a door deadlocked with several turns, a broken cylinder or a jammed mechanism — and even then it must be explained and priced before it's carried out.",
        },
        {
          question:
            "Can I refuse to pay if the invoice doesn't match the quote?",
          answer:
            "You owe what was agreed, not what was added unilaterally. If the invoice exceeds the signed quote with no variation you accepted, dispute it in writing, pay the quoted amount and refuse the excess. Keep everything: quote, invoice, texts, WhatsApp messages.",
        },
        {
          question: "How do I check a locksmith business actually exists?",
          answer:
            "Ask for its SIRET registration number and check it on the official business register. A real business has a number, an address and a declared activity. An address that turns out to be a mailbox, or a number that can't be found in public records, tells you the person you're speaking to isn't the one who'll turn up.",
        },
      ],
    },
  },
};
