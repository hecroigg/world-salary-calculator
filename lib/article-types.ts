import type { Locale } from "./i18n";
import type { PrecisionOptions } from "./tax-engine";

export type ArticleLocale = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  faq: { question: string; answer: string }[];
  facts?: { label: string; value: string; detail?: string }[];
};

export type ArticleExample = {
  countryId: string;
  gross: number;
  period: "monthly" | "annual";
  hours?: number;
  precision?: PrecisionOptions;
};

export type ArticleSource = {
  label: Record<Locale, string>;
  url: string;
};

export type ArticleDetails = {
  countries: string[];
  examples: ArticleExample[];
  sources: ArticleSource[];
};
