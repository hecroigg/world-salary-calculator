import type { Country } from "./countries";
import type { Locale } from "./i18n";

type Localized = Record<Locale,string>;
const notes:Record<string,Localized> = {
  spain:{en:"The legal figure is €1,221 in 14 payments (€17,094 a year).",es:"La cifra legal es de 1.221 € en 14 pagas (17.094 € anuales).",de:"Der gesetzliche Betrag beträgt 1.221 € in 14 Zahlungen (17.094 € jährlich).",fr:"Le montant légal est de 1 221 € sur 14 versements (17 094 € par an)."},
  portugal:{en:"The national minimum is normally paid in 14 salary payments.",es:"El salario mínimo se abona normalmente en 14 pagas.",de:"Der Mindestlohn wird üblicherweise in 14 Zahlungen gezahlt.",fr:"Le minimum national est normalement versé en 14 paiements."},
  "united-kingdom":{en:"Rate for workers aged 21+ from April 2026.",es:"Tipo para trabajadores de 21 años o más desde abril de 2026.",de:"Satz für Beschäftigte ab 21 Jahren seit April 2026.",fr:"Taux pour les salariés de 21 ans et plus depuis avril 2026."},
  italy:{en:"No national statutory minimum; collective agreements set wage floors.",es:"No existe un mínimo nacional; los convenios fijan los salarios mínimos.",de:"Kein nationaler Mindestlohn; Tarifverträge legen Untergrenzen fest.",fr:"Pas de minimum national ; les conventions fixent les planchers."},
  austria:{en:"No national statutory minimum; collective agreements apply.",es:"No existe un mínimo nacional; se aplican convenios colectivos.",de:"Kein nationaler Mindestlohn; Kollektivverträge gelten.",fr:"Pas de minimum national ; les conventions collectives s’appliquent."},
  switzerland:{en:"No national minimum; some cantons and sectors set one.",es:"No existe un mínimo nacional; algunos cantones y sectores sí lo fijan.",de:"Kein nationaler Mindestlohn; einzelne Kantone und Branchen haben eigene Sätze.",fr:"Pas de minimum national ; certains cantons et secteurs en fixent un."},
  denmark:{en:"No national statutory minimum; collective bargaining sets wage floors.",es:"No existe un mínimo nacional; la negociación colectiva fija los salarios.",de:"Kein nationaler Mindestlohn; Tarifverhandlungen bestimmen Untergrenzen.",fr:"Pas de minimum national ; les conventions fixent les planchers."},
  sweden:{en:"No national statutory minimum; collective agreements apply.",es:"No existe un mínimo nacional; se aplican convenios colectivos.",de:"Kein nationaler Mindestlohn; Tarifverträge gelten.",fr:"Pas de minimum national ; les conventions collectives s’appliquent."},
  norway:{en:"No single national minimum; statutory rates exist in selected sectors.",es:"No existe un mínimo nacional único; hay tipos legales en algunos sectores.",de:"Kein einheitlicher Mindestlohn; gesetzliche Sätze gelten in bestimmten Branchen.",fr:"Pas de minimum national unique ; certains secteurs ont des taux légaux."},
  finland:{en:"No national statutory minimum; collective agreements apply.",es:"No existe un mínimo nacional; se aplican convenios colectivos.",de:"Kein nationaler Mindestlohn; Tarifverträge gelten.",fr:"Pas de minimum national ; les conventions collectives s’appliquent."},
  "united-states":{en:"Federal minimum; state and local minimum wages may be higher.",es:"Mínimo federal; los mínimos estatales y locales pueden ser superiores.",de:"Bundesmindestlohn; bundesstaatliche und lokale Sätze können höher sein.",fr:"Minimum fédéral ; les minimums d’État et locaux peuvent être supérieurs."},
  canada:{en:"Minimum wages are set by provinces and territories; there is no single national employee rate.",es:"Los mínimos los fijan provincias y territorios; no hay un único tipo nacional.",de:"Mindestlöhne werden von Provinzen und Territorien festgelegt; es gibt keinen einheitlichen Satz.",fr:"Les provinces et territoires fixent les minimums ; il n’existe pas de taux national unique."},
};

export const countryNote = (country:Country,locale:Locale) => notes[country.id]?.[locale] ?? country.note;
