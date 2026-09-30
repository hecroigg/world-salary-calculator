import type { Locale } from "./i18n";

export const faqLabels:Record<Locale,{question:string;answer:string}> = {
  en:{question:"What can change this estimate?",answer:"Residence, family status, age, benefits, regional rules, tax credits and payroll timing can all change the final amount."},
  es:{question:"¿Qué puede cambiar esta estimación?",answer:"La residencia, situación familiar, edad, beneficios, reglas regionales, deducciones y el momento del pago pueden cambiar el importe final."},
  de:{question:"Was kann die Schätzung verändern?",answer:"Wohnort, Familie, Alter, Leistungen, regionale Regeln, Freibeträge und Abrechnungszeitpunkt können den Endbetrag verändern."},
  fr:{question:"Qu’est-ce qui peut modifier l’estimation ?",answer:"Résidence, situation familiale, âge, avantages, règles régionales, crédits et calendrier de paie peuvent modifier le montant final."},
};
