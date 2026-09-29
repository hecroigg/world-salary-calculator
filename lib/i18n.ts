import type { Country } from "./countries";

export type Locale = "en" | "es" | "de" | "fr";

type CountryLocale = {
  names: Record<Locale, string>;
  slugs: Record<Locale, string>;
};

const localized: Record<string, CountryLocale> = {
  germany: { names: { en: "Germany", es: "Alemania", de: "Deutschland", fr: "Allemagne" }, slugs: { en: "germany", es: "alemania", de: "deutschland", fr: "allemagne" } },
  spain: { names: { en: "Spain", es: "España", de: "Spanien", fr: "Espagne" }, slugs: { en: "spain", es: "espana", de: "spanien", fr: "espagne" } },
  france: { names: { en: "France", es: "Francia", de: "Frankreich", fr: "France" }, slugs: { en: "france", es: "francia", de: "frankreich", fr: "france" } },
  portugal: { names: { en: "Portugal", es: "Portugal", de: "Portugal", fr: "Portugal" }, slugs: { en: "portugal", es: "portugal", de: "portugal", fr: "portugal" } },
  italy: { names: { en: "Italy", es: "Italia", de: "Italien", fr: "Italie" }, slugs: { en: "italy", es: "italia", de: "italien", fr: "italie" } },
  netherlands: { names: { en: "Netherlands", es: "Países Bajos", de: "Niederlande", fr: "Pays-Bas" }, slugs: { en: "netherlands", es: "paises-bajos", de: "niederlande", fr: "pays-bas" } },
  belgium: { names: { en: "Belgium", es: "Bélgica", de: "Belgien", fr: "Belgique" }, slugs: { en: "belgium", es: "belgica", de: "belgien", fr: "belgique" } },
  luxembourg: { names: { en: "Luxembourg", es: "Luxemburgo", de: "Luxemburg", fr: "Luxembourg" }, slugs: { en: "luxembourg", es: "luxemburgo", de: "luxemburg", fr: "luxembourg" } },
  austria: { names: { en: "Austria", es: "Austria", de: "Österreich", fr: "Autriche" }, slugs: { en: "austria", es: "austria", de: "oesterreich", fr: "autriche" } },
  switzerland: { names: { en: "Switzerland", es: "Suiza", de: "Schweiz", fr: "Suisse" }, slugs: { en: "switzerland", es: "suiza", de: "schweiz", fr: "suisse" } },
  "united-kingdom": { names: { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", fr: "Royaume-Uni" }, slugs: { en: "united-kingdom", es: "reino-unido", de: "vereinigtes-koenigreich", fr: "royaume-uni" } },
  ireland: { names: { en: "Ireland", es: "Irlanda", de: "Irland", fr: "Irlande" }, slugs: { en: "ireland", es: "irlanda", de: "irland", fr: "irlande" } },
  denmark: { names: { en: "Denmark", es: "Dinamarca", de: "Dänemark", fr: "Danemark" }, slugs: { en: "denmark", es: "dinamarca", de: "daenemark", fr: "danemark" } },
  sweden: { names: { en: "Sweden", es: "Suecia", de: "Schweden", fr: "Suède" }, slugs: { en: "sweden", es: "suecia", de: "schweden", fr: "suede" } },
  norway: { names: { en: "Norway", es: "Noruega", de: "Norwegen", fr: "Norvège" }, slugs: { en: "norway", es: "noruega", de: "norwegen", fr: "norvege" } },
  finland: { names: { en: "Finland", es: "Finlandia", de: "Finnland", fr: "Finlande" }, slugs: { en: "finland", es: "finlandia", de: "finnland", fr: "finlande" } },
  poland: { names: { en: "Poland", es: "Polonia", de: "Polen", fr: "Pologne" }, slugs: { en: "poland", es: "polonia", de: "polen", fr: "pologne" } },
  "czech-republic": { names: { en: "Czech Republic", es: "República Checa", de: "Tschechien", fr: "République tchèque" }, slugs: { en: "czech-republic", es: "republica-checa", de: "tschechien", fr: "republique-tcheque" } },
  greece: { names: { en: "Greece", es: "Grecia", de: "Griechenland", fr: "Grèce" }, slugs: { en: "greece", es: "grecia", de: "griechenland", fr: "grece" } },
  hungary: { names: { en: "Hungary", es: "Hungría", de: "Ungarn", fr: "Hongrie" }, slugs: { en: "hungary", es: "hungria", de: "ungarn", fr: "hongrie" } },
  romania: { names: { en: "Romania", es: "Rumanía", de: "Rumänien", fr: "Roumanie" }, slugs: { en: "romania", es: "rumania", de: "rumaenien", fr: "roumanie" } },
  croatia: { names: { en: "Croatia", es: "Croacia", de: "Kroatien", fr: "Croatie" }, slugs: { en: "croatia", es: "croacia", de: "kroatien", fr: "croatie" } },
  bulgaria: { names: { en: "Bulgaria", es: "Bulgaria", de: "Bulgarien", fr: "Bulgarie" }, slugs: { en: "bulgaria", es: "bulgaria", de: "bulgarien", fr: "bulgarie" } },
  "united-states": { names: { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", fr: "États-Unis" }, slugs: { en: "united-states", es: "estados-unidos", de: "vereinigte-staaten", fr: "etats-unis" } },
  canada: { names: { en: "Canada", es: "Canadá", de: "Kanada", fr: "Canada" }, slugs: { en: "canada", es: "canada", de: "kanada", fr: "canada" } },
};

export const countryName = (country: Country, locale: Locale) => localized[country.id].names[locale];

export function localizedPath(country: Country, locale: Locale) {
  const slug = localized[country.id].slugs[locale];
  if (locale === "es") return `/es/salario/${slug}`;
  if (locale === "de") return `/de/gehalt/${slug}`;
  if (locale === "fr") return `/fr/salaire/${slug}`;
  return `/salary/${slug}`;
}

export function countryFromLocalizedSlug(countries: Country[], locale: Locale, slug: string) {
  return countries.find((country) => localized[country.id].slugs[locale] === slug) ?? countries[0];
}
