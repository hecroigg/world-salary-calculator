import type { Locale } from "./i18n";
import type { ArticleDetails, ArticleLocale, ArticleSource } from "./article-types";
import { groupOne, type GroupOneId } from "./article-data/new-group-one";
import { groupTwo, type GroupTwoId } from "./article-data/new-group-two";
import { groupThree, type GroupThreeId } from "./article-data/new-group-three";

export type NewArticleId = GroupOneId | GroupTwoId | GroupThreeId;

export const newArticleIds: NewArticleId[] = [
  "spain-2000",
  "france-3000",
  "netherlands-4000",
  "uk-40000",
  "usa-100000",
  "canada-70000",
  "switzerland-100000",
  "germany-netherlands",
  "spain-portugal",
  "gross-for-3000-net",
  "europe-minimum-wages",
  "twelve-fourteen-payments",
];

export const newArticles = {
  ...groupOne,
  ...groupTwo,
  ...groupThree,
} satisfies Record<NewArticleId, Record<Locale, ArticleLocale>>;

const label = (en: string, es: string, de: string, fr: string): Record<Locale, string> => ({ en, es, de, fr });
const source = (url: string, en: string, es: string, de: string, fr: string): ArticleSource => ({ url, label: label(en, es, de, fr) });

const commonSources = {
  spainTax: source("https://sede.agenciatributaria.gob.es/Sede/irpf.html", "Spanish Tax Agency: personal income tax", "Agencia Tributaria: IRPF", "Spanische Steuerbehörde: IRPF", "Agence fiscale espagnole : IRPF"),
  spainMinimum: source("https://www.boe.es/eli/es/rd/2026/02/18/126", "BOE: 2026 Spanish minimum wage decree", "BOE: Real Decreto del SMI 2026", "BOE: spanische Mindestlohnverordnung 2026", "BOE : décret espagnol sur le minimum 2026"),
  franceTax: source("https://www.service-public.gouv.fr/particuliers/vosdroits/F1419", "Service Public: 2026 income-tax scale", "Service Public: baremo fiscal 2026", "Service Public: Einkommensteuertarif 2026", "Service Public : barème de l’impôt 2026"),
  netherlandsTax: source("https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/boxen_en_tarieven/box_1/box_1", "Belastingdienst: 2026 Box 1 rates", "Belastingdienst: tramos Box 1 de 2026", "Belastingdienst: Box-1-Tarife 2026", "Belastingdienst : taux Box 1 2026"),
  netherlandsMinimum: source("https://www.government.nl/topics/minimum-wage/amount-of-the-minimum-wage", "Government.nl: 2026 minimum wage", "Gobierno neerlandés: salario mínimo 2026", "Niederländische Regierung: Mindestlohn 2026", "Gouvernement néerlandais : minimum 2026"),
  ukTax: source("https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027", "HMRC: 2026/27 rates and thresholds", "HMRC: tipos y límites 2026/27", "HMRC: Sätze und Grenzen 2026/27", "HMRC : taux et seuils 2026/27"),
  ukMinimum: source("https://www.gov.uk/national-minimum-wage-rates", "GOV.UK: National Minimum Wage rates", "GOV.UK: salario mínimo nacional", "GOV.UK: gesetzliche Mindestlohnsätze", "GOV.UK : taux du salaire minimum"),
  irs: source("https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill", "IRS: 2026 brackets and standard deduction", "IRS: tramos y deducción estándar 2026", "IRS: Tarifstufen und Standardabzug 2026", "IRS : tranches et déduction standard 2026"),
  fica: source("https://www.irs.gov/taxtopics/tc751", "IRS: Social Security and Medicare withholding", "IRS: retención de Social Security y Medicare", "IRS: Social-Security- und Medicare-Abzug", "IRS : retenues Social Security et Medicare"),
  canadaTax: source("https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html", "Canada Revenue Agency: 2026 federal and provincial brackets", "CRA: tramos federales y provinciales 2026", "CRA: Bundes- und Provinztarife 2026", "ARC : tranches fédérales et provinciales 2026"),
  canadaPayroll: source("https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan/t4127-jan-payroll-deductions-formulas-computer-programs.html", "CRA: 2026 payroll formulas, CPP and EI", "CRA: fórmulas de nómina, CPP y EI 2026", "CRA: Lohnformeln, CPP und EI 2026", "ARC : formules de paie, RPC et AE 2026"),
  swissTax: source("https://www.estv.admin.ch/estv/de/home/direkte-bundessteuer/direkte-bundessteuer-natuerliche-personen/abzuege-ansaetze-tarife.html", "Swiss Federal Tax Administration: 2026 rates", "Administración fiscal suiza: tarifas 2026", "Eidgenössische Steuerverwaltung: Tarife 2026", "Administration fédérale : barèmes 2026"),
  swissSocial: source("https://www.bsv.admin.ch/en/contributions-overview", "Swiss Social Insurance Office: contribution overview", "Seguridad Social suiza: cotizaciones", "Bundesamt für Sozialversicherungen: Beiträge", "Office fédéral des assurances sociales : cotisations"),
  germanyTax: source("https://www.bmf-steuerrechner.de/", "German Finance Ministry: official income-tax calculator", "Ministerio de Finanzas alemán: calculadora fiscal", "Bundesfinanzministerium: Steuerrechner", "Ministère allemand des Finances : calculateur"),
  germanyMinimum: source("https://www.bmas.de/DE/Arbeit/Arbeitsrecht/Mindestlohn/mindestlohn.html", "German Labour Ministry: 2026 minimum wage", "Ministerio de Trabajo alemán: mínimo 2026", "BMAS: Mindestlohn 2026", "Ministère allemand du Travail : minimum 2026"),
  portugalTax: source("https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs68.aspx", "Portuguese Tax Authority: IRS rates", "Autoridad Tributaria portuguesa: tramos IRS", "Portugiesische Steuerbehörde: IRS-Tarife", "Autorité fiscale portugaise : taux IRS"),
  portugalMinimum: source("https://portugal.gov.pt/en/gc25/communication/news/whats-new-in-2026", "Portuguese Government: 2026 minimum wage", "Gobierno portugués: salario mínimo 2026", "Portugiesische Regierung: Mindestlohn 2026", "Gouvernement portugais : minimum 2026"),
};

export const newArticleDetails: Record<NewArticleId, ArticleDetails> = {
  "spain-2000": { countries: ["spain"], examples: [{ countryId: "spain", gross: 2_000, period: "monthly", hours: 40 }], sources: [commonSources.spainTax, commonSources.spainMinimum] },
  "france-3000": { countries: ["france"], examples: [{ countryId: "france", gross: 3_000, period: "monthly", hours: 35 }], sources: [commonSources.franceTax] },
  "netherlands-4000": { countries: ["netherlands"], examples: [{ countryId: "netherlands", gross: 4_000, period: "monthly", hours: 40 }], sources: [commonSources.netherlandsTax, commonSources.netherlandsMinimum] },
  "uk-40000": { countries: ["united-kingdom"], examples: [{ countryId: "united-kingdom", gross: 40_000, period: "annual", hours: 37.5 }], sources: [commonSources.ukTax, commonSources.ukMinimum] },
  "usa-100000": { countries: ["united-states"], examples: [{ countryId: "united-states", gross: 100_000, period: "annual", hours: 40, precision: { filingStatus: "single", stateRate: 0 } }], sources: [commonSources.irs, commonSources.fica] },
  "canada-70000": { countries: ["canada"], examples: [{ countryId: "canada", gross: 70_000, period: "annual", hours: 40, precision: { province: "ontario" } }], sources: [commonSources.canadaTax, commonSources.canadaPayroll] },
  "switzerland-100000": { countries: ["switzerland"], examples: [{ countryId: "switzerland", gross: 100_000, period: "annual", hours: 40, precision: { canton: "average" } }], sources: [commonSources.swissTax, commonSources.swissSocial] },
  "germany-netherlands": { countries: ["germany", "netherlands"], examples: [{ countryId: "germany", gross: 50_000, period: "annual", hours: 40 }, { countryId: "netherlands", gross: 50_000, period: "annual", hours: 40 }], sources: [commonSources.germanyTax, commonSources.netherlandsTax] },
  "spain-portugal": { countries: ["spain", "portugal"], examples: [{ countryId: "spain", gross: 40_000, period: "annual", hours: 40 }, { countryId: "portugal", gross: 40_000, period: "annual", hours: 40 }], sources: [commonSources.spainTax, commonSources.portugalTax, commonSources.spainMinimum, commonSources.portugalMinimum] },
  "gross-for-3000-net": { countries: ["germany", "spain", "france", "netherlands"], examples: [{ countryId: "germany", gross: 56_418.871, period: "annual" }, { countryId: "spain", gross: 50_760.723, period: "annual" }, { countryId: "france", gross: 57_187.216, period: "annual" }, { countryId: "netherlands", gross: 43_941.726, period: "annual" }], sources: [commonSources.germanyTax, commonSources.spainTax, commonSources.franceTax, commonSources.netherlandsTax] },
  "europe-minimum-wages": { countries: ["germany", "spain", "france", "netherlands", "united-kingdom", "portugal"], examples: [], sources: [commonSources.germanyMinimum, commonSources.spainMinimum, commonSources.netherlandsMinimum, commonSources.ukMinimum, commonSources.portugalMinimum] },
  "twelve-fourteen-payments": { countries: ["spain", "portugal"], examples: [{ countryId: "spain", gross: 33_600, period: "annual" }, { countryId: "portugal", gross: 25_200, period: "annual" }], sources: [commonSources.spainTax, commonSources.spainMinimum, commonSources.portugalTax, commonSources.portugalMinimum] },
};
