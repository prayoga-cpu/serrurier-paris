import { BRAND_NAME, DOMAIN, EMAIL, PHONE_DISPLAY } from "@/lib/config";
import type { Locale } from "@/lib/i18n";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalPageContent = {
  keyword: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

// Everything here is either standard boilerplate that doesn't depend on
// unconfirmed client facts, or publicly known third-party info (Vercel's own
// hosting address). Anything that DOES depend on an unconfirmed fact — legal
// form, SIRET, registered address, named legal representative, payment
// methods, the designated consumer mediator — is marked pending rather than
// invented. See CLAUDE.md §0/§12 (B1, SIRET, "which domain is live").
const LAST_UPDATED = "26 juillet 2026";
const LAST_UPDATED_EN = "26 July 2026";

export function getMentionsLegalesContent(lang: Locale): LegalPageContent {
  if (lang === "en") {
    return {
      keyword: "legal notice locksmith paris",
      title: "Legal notice",
      intro: `Last updated: ${LAST_UPDATED_EN}.`,
      sections: [
        {
          heading: "Site publisher",
          paragraphs: [
            `This site is published by ${BRAND_NAME}, an independent locksmith tradesperson operating in Paris, France.`,
            "Legal form and SIRET (business registration) number: pending client confirmation, to be published here once available.",
            "Registered address: pending client confirmation.",
          ],
          list: [`Phone: ${PHONE_DISPLAY}`, `Email: ${EMAIL}`],
        },
        {
          heading: "Publication director",
          paragraphs: ["Pending client confirmation."],
        },
        {
          heading: "Hosting",
          paragraphs: [
            `This site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (vercel.com).`,
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            `Unless stated otherwise, all content on this site (text, logo, visual identity) is the property of ${BRAND_NAME} and may not be reproduced without prior written consent.`,
          ],
        },
        {
          heading: "Hyperlinks",
          paragraphs: [
            "This site may contain links to third-party sites. We are not responsible for the content or privacy practices of sites we do not operate.",
          ],
        },
        {
          heading: "Personal data",
          paragraphs: [
            "Personal data collected through this site is processed as described in our Privacy Policy.",
          ],
        },
      ],
    };
  }

  return {
    keyword: "mentions légales serrurier paris",
    title: "Mentions légales",
    intro: `Dernière mise à jour : ${LAST_UPDATED}.`,
    sections: [
      {
        heading: "Éditeur du site",
        paragraphs: [
          `Le présent site est édité par ${BRAND_NAME}, artisan serrurier indépendant exerçant à Paris.`,
          "Forme juridique et numéro SIRET : en attente de confirmation client, seront publiés ici dès leur communication.",
          "Adresse du siège : en attente de confirmation client.",
        ],
        list: [`Téléphone : ${PHONE_DISPLAY}`, `Email : ${EMAIL}`],
      },
      {
        heading: "Directeur de la publication",
        paragraphs: ["En attente de confirmation client."],
      },
      {
        heading: "Hébergement",
        paragraphs: [
          "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis (vercel.com).",
        ],
      },
      {
        heading: "Propriété intellectuelle",
        paragraphs: [
          `Sauf mention contraire, l'ensemble des contenus présents sur ce site (textes, logo, identité visuelle) est la propriété de ${BRAND_NAME} et ne peut être reproduit sans autorisation écrite préalable.`,
        ],
      },
      {
        heading: "Liens hypertextes",
        paragraphs: [
          "Ce site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables du contenu ou des pratiques de confidentialité des sites que nous n'exploitons pas.",
        ],
      },
      {
        heading: "Données personnelles",
        paragraphs: [
          "Les données personnelles collectées via ce site sont traitées conformément à notre politique de confidentialité.",
        ],
      },
    ],
  };
}

export function getCgvContent(lang: Locale): LegalPageContent {
  if (lang === "en") {
    return {
      keyword: "terms of service locksmith paris",
      title: "Terms of service",
      intro: `Last updated: ${LAST_UPDATED_EN}. These terms govern quote requests and jobs booked with ${BRAND_NAME}, whether made through this site or by phone.`,
      sections: [
        {
          heading: "Scope",
          paragraphs: [
            "These terms apply to all locksmith services requested through this site or by phone, for private individuals, businesses, and property management companies (syndics).",
          ],
        },
        {
          heading: "Quotes and pricing",
          paragraphs: [
            "Prices shown on this site are starting prices for the standard case. The exact price is confirmed by phone before travel, and agreed with the customer before any work begins — see /tarifs for the current price list.",
            "In accordance with French regulations in force since 24/01/2017, a written quote is provided for any job exceeding €150, and must be accepted before work starts.",
          ],
        },
        {
          heading: "Payment",
          paragraphs: [
            "Payment terms and accepted methods are communicated at the time of the quote. Pending confirmation for publication here.",
          ],
        },
        {
          heading: "Right of withdrawal",
          paragraphs: [
            "Under Article L221-28 of the French Consumer Code, the standard 14-day withdrawal right does not apply to urgent repair or maintenance work explicitly requested by the customer to be carried out immediately.",
            "For non-urgent work booked in advance, applicable withdrawal terms, if any, are communicated at the time of the quote.",
          ],
        },
        {
          heading: "Guarantee",
          paragraphs: [
            "Installations are covered by a guarantee. Exact terms and duration are communicated with your written quote.",
          ],
        },
        {
          heading: "Liability and insurance",
          paragraphs: [
            "The tradesperson carries professional liability insurance for the work performed.",
          ],
        },
        {
          heading: "Complaints and mediation",
          paragraphs: [
            "Any complaint should first be addressed directly to us via /contact. Details of the designated consumer mediator, as required under French law, will be published here once confirmed.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by French law. In the event of a dispute that cannot be resolved amicably, the competent French courts will have jurisdiction.",
          ],
        },
      ],
    };
  }

  return {
    keyword: "cgv serrurier paris",
    title: "Conditions générales de vente",
    intro: `Dernière mise à jour : ${LAST_UPDATED}. Les présentes conditions régissent les demandes de devis et interventions réalisées par ${BRAND_NAME}, que la demande soit effectuée via ce site ou par téléphone.`,
    sections: [
      {
        heading: "Champ d'application",
        paragraphs: [
          "Les présentes conditions s'appliquent à toute prestation de serrurerie demandée via ce site ou par téléphone, pour les particuliers, commerçants, entreprises et syndics de copropriété.",
        ],
      },
      {
        heading: "Devis et tarifs",
        paragraphs: [
          "Les prix affichés sur ce site sont des tarifs de départ pour le cas standard. Le tarif exact est confirmé par téléphone avant le déplacement, puis validé avec le client avant toute intervention — voir la grille tarifaire sur /tarifs.",
          "Conformément à la réglementation en vigueur depuis le 24/01/2017, un devis écrit est fourni pour toute intervention dépassant 150€, et doit être accepté avant le début des travaux.",
        ],
      },
      {
        heading: "Modalités de paiement",
        paragraphs: [
          "Les modalités et moyens de paiement acceptés sont communiqués lors de l'établissement du devis. En attente de confirmation pour publication ici.",
        ],
      },
      {
        heading: "Droit de rétractation",
        paragraphs: [
          "Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation de 14 jours ne s'applique pas aux travaux d'urgence ou de dépannage expressément demandés par le client pour une exécution immédiate.",
          "Pour une intervention planifiée non urgente, les conditions de rétractation applicables, le cas échéant, sont communiquées lors de l'établissement du devis.",
        ],
      },
      {
        heading: "Garantie",
        paragraphs: [
          "Nos installations sont couvertes par une garantie. Les conditions et la durée exactes sont communiquées avec votre devis écrit.",
        ],
      },
      {
        heading: "Responsabilité et assurance",
        paragraphs: [
          "L'artisan est couvert par une assurance responsabilité civile professionnelle pour les interventions réalisées.",
        ],
      },
      {
        heading: "Réclamations et médiation",
        paragraphs: [
          "Toute réclamation doit d'abord nous être adressée directement via /contact. Les coordonnées du médiateur de la consommation compétent, dont la désignation est obligatoire, seront publiées ici dès confirmation.",
        ],
      },
      {
        heading: "Droit applicable",
        paragraphs: [
          "Les présentes conditions sont soumises au droit français. En cas de litige non résolu à l'amiable, les tribunaux français compétents seront seuls saisis.",
        ],
      },
    ],
  };
}

export function getPrivacyContent(lang: Locale): LegalPageContent {
  if (lang === "en") {
    return {
      keyword: "privacy policy locksmith paris",
      title: "Privacy policy",
      intro: `Last updated: ${LAST_UPDATED_EN}. This policy explains how ${BRAND_NAME} collects and uses personal data submitted through ${DOMAIN}.`,
      sections: [
        {
          heading: "Data controller",
          paragraphs: [
            `${BRAND_NAME} is the data controller for information collected through this site. Business registration (SIRET) is pending client confirmation, to be published once available.`,
          ],
          list: [`Contact: ${EMAIL}`, `Phone: ${PHONE_DISPLAY}`],
        },
        {
          heading: "Data we collect",
          paragraphs: [
            "Through the quote-request and contact forms, we collect:",
          ],
          list: [
            "Full name",
            "Phone number",
            "Email address (optional on the quote form)",
            "Service address",
            "Any message or details you provide",
          ],
        },
        {
          heading: "Why we collect it",
          paragraphs: [
            "To respond to quote requests and contact messages, and to organise the service you request. We do not sell or rent your data to third parties.",
          ],
        },
        {
          heading: "Legal basis",
          paragraphs: [
            "Processing is based on pre-contractual steps taken at your request (preparing a quote) and our legitimate interest in responding to enquiries.",
          ],
        },
        {
          heading: "Cookies and analytics",
          paragraphs: [
            "No analytics or tracking tool is currently active on this site. If an audience-measurement tool (e.g. Google Analytics) is enabled in the future, a consent banner compliant with CNIL guidance will be put in place beforehand.",
          ],
        },
        {
          heading: "Retention",
          paragraphs: [
            "Data is kept for as long as needed to handle your request, and for a maximum of 3 years after our last contact, unless a longer period is required by law (e.g. invoicing records).",
          ],
        },
        {
          heading: "Who receives it",
          paragraphs: [
            `${BRAND_NAME} and our hosting provider (Vercel Inc.). Data is not shared with any other third party.`,
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Under GDPR, you have the right to access, correct, delete, restrict, or object to the processing of your data, and to data portability. To exercise these rights, contact us:",
          ],
          list: [EMAIL],
        },
        {
          heading: "Security",
          paragraphs: [
            "We take reasonable technical measures to protect the data you share with us against unauthorised access, loss, or misuse.",
          ],
        },
      ],
    };
  }

  return {
    keyword: "politique de confidentialité serrurier paris",
    title: "Politique de confidentialité",
    intro: `Dernière mise à jour : ${LAST_UPDATED}. Cette politique explique comment ${BRAND_NAME} collecte et utilise les données personnelles transmises via ${DOMAIN}.`,
    sections: [
      {
        heading: "Responsable du traitement",
        paragraphs: [
          `${BRAND_NAME} est responsable du traitement des données collectées via ce site. Le numéro SIRET est en attente de confirmation client et sera publié dès sa communication.`,
        ],
        list: [`Contact : ${EMAIL}`, `Téléphone : ${PHONE_DISPLAY}`],
      },
      {
        heading: "Données collectées",
        paragraphs: [
          "Via les formulaires de devis et de contact, nous collectons :",
        ],
        list: [
          "Nom complet",
          "Numéro de téléphone",
          "Adresse email (optionnelle sur le formulaire de devis)",
          "Adresse d'intervention",
          "Tout message ou précision que vous transmettez",
        ],
      },
      {
        heading: "Finalités",
        paragraphs: [
          "Pour répondre à vos demandes de devis et de contact, et organiser l'intervention demandée. Vos données ne sont ni vendues ni louées à des tiers.",
        ],
      },
      {
        heading: "Base légale",
        paragraphs: [
          "Le traitement repose sur les mesures précontractuelles prises à votre demande (préparation d'un devis) et sur notre intérêt légitime à répondre à vos demandes.",
        ],
      },
      {
        heading: "Cookies et mesure d'audience",
        paragraphs: [
          "Aucun outil de mesure d'audience ou de suivi n'est actuellement actif sur ce site. Si un outil de mesure d'audience (par exemple Google Analytics) venait à être activé, un bandeau de consentement conforme aux recommandations de la CNIL serait mis en place au préalable.",
        ],
      },
      {
        heading: "Durée de conservation",
        paragraphs: [
          "Les données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 3 ans après notre dernier contact, sauf obligation légale de conservation plus longue (ex. pièces comptables).",
        ],
      },
      {
        heading: "Destinataires",
        paragraphs: [
          `${BRAND_NAME} et notre hébergeur (Vercel Inc.). Aucune donnée n'est partagée avec un autre tiers.`,
        ],
      },
      {
        heading: "Vos droits",
        paragraphs: [
          "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition, et de portabilité de vos données. Pour exercer ces droits, contactez-nous :",
        ],
        list: [EMAIL],
      },
      {
        heading: "Sécurité",
        paragraphs: [
          "Nous prenons des mesures techniques raisonnables pour protéger les données que vous nous transmettez contre tout accès non autorisé, perte ou usage abusif.",
        ],
      },
    ],
  };
}
