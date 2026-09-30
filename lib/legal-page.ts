import type { Metadata } from "next";
import type { Locale } from "./i18n";
import { getLegalDocument } from "./legal";
import { legalPath, type LegalKind } from "./legal-routes";

export function legalMetadata(locale: Locale, kind: LegalKind): Metadata {
  const document = getLegalDocument(locale,kind);
  return { title: document.title, description: document.description, alternates: { canonical: legalPath(locale,kind), languages: { en: legalPath("en",kind), es: legalPath("es",kind), de: legalPath("de",kind), fr: legalPath("fr",kind), "x-default": legalPath("en",kind) } } };
}
