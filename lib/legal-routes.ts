import type { Locale } from "./i18n";

export type LegalKind = "privacy" | "cookies" | "legal" | "contact";

export const legalSlugs: Record<Locale, Record<LegalKind, string>> = {
  en: { privacy: "privacy", cookies: "cookies", legal: "legal", contact: "contact" },
  es: { privacy: "privacidad", cookies: "cookies", legal: "aviso-legal", contact: "contacto" },
  de: { privacy: "datenschutz", cookies: "cookies", legal: "impressum", contact: "kontakt" },
  fr: { privacy: "confidentialite", cookies: "cookies", legal: "mentions-legales", contact: "contact" },
};

export const legalNavLabels: Record<Locale, Record<LegalKind,string>> = {
  en:{privacy:"Privacy Policy",cookies:"Cookie Policy",legal:"Legal Notice",contact:"Contact"},
  es:{privacy:"Política de privacidad",cookies:"Política de cookies",legal:"Aviso legal",contact:"Contacto"},
  de:{privacy:"Datenschutzerklärung",cookies:"Cookie-Richtlinie",legal:"Impressum",contact:"Kontakt"},
  fr:{privacy:"Politique de confidentialité",cookies:"Politique des cookies",legal:"Mentions légales",contact:"Contact"},
};

export const legalPath = (locale: Locale, kind: LegalKind) => `${locale === "en" ? "" : `/${locale}`}/${legalSlugs[locale][kind]}`;
export const legalKindFromSlug = (locale: Locale, slug: string) => (Object.entries(legalSlugs[locale]).find(([, value]) => value === slug)?.[0] as LegalKind | undefined);
