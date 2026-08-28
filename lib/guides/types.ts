import type { Locale } from "@/lib/i18n";

export type GuideFaq = { question: string; answer: string };

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: string[];
};

export type GuideContent = {
  title: string;
  keyword: string;
  /** Meta description and card blurb — one sentence. */
  summary: string;
  /** Standfirst under the H1. */
  lead: string;
  /**
   * The whole guide in four bullets, rendered above the table of contents.
   * Client instruction 28/08/2026 (adjustment brief §1): the guides read as too
   * long and dense for someone on a phone in a hurry. Rather than cut the body
   * — the length is what makes these pages rank and what answer engines quote —
   * the answer moves to the top, so a reader gets it in fifteen seconds and the
   * depth stays available underneath for anyone who wants it.
   */
  keyTakeaways: string[];
  sections: GuideSection[];
  faq: GuideFaq[];
};

/**
 * Long-form guides are the AEO/GEO engine (CLAUDE.md §4/§5): plain server-
 * rendered HTML, real headings, a real FAQ block feeding FAQPage schema. They
 * exist to be quotable by an answer engine, which means the content has to be
 * genuinely useful even to someone who never calls.
 */
export type Guide = {
  slug: string;
  /** ISO date, rendered as "updated on" and used for freshness signals. */
  updated: string;
  /** Slugs of the guides linked at the foot of the page. */
  related: string[];
  content: Record<Locale, GuideContent>;
};

export type LocalizedGuide = GuideContent & {
  slug: string;
  updated: string;
  related: string[];
};
