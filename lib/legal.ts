import type { Locale } from "./i18n";
import type { LegalKind } from "./legal-routes";

type Section = { heading: string; paragraphs: string[] };
export type LegalDocument = { title: string; description: string; intro: string; sections: Section[] };

const email = "linkedlab.info@gmail.com";

const documents: Record<Locale, Record<LegalKind, LegalDocument>> = {
  en: {
    privacy: { title: "Privacy Policy", description: "How Net Salary Map processes and protects personal data.", intro: "This policy explains what information is processed when you use Net Salary Map and the choices available to you.", sections: [
      { heading: "Controller and contact", paragraphs: [`Net Salary Map is an independent informational project operated by Héctor Fàbrega Roig. Privacy enquiries can be sent to ${email}.`] },
      { heading: "Data we process", paragraphs: ["Salary figures and calculator options are processed locally in your browser and are not sent to us. We may process technical security logs supplied by our hosting provider and, only after consent, aggregated usage data through Google Analytics.", "If you contact us, we process the email address and information you choose to provide in order to answer you."] },
      { heading: "Purposes and legal bases", paragraphs: ["Essential storage is used to remember privacy choices and provide the service. Security logs rely on our legitimate interest in protecting the website. Analytics relies on consent and is disabled until consent is given. Contact messages are processed to respond to your request."] },
      { heading: "Providers, transfers and retention", paragraphs: ["Cloudflare provides hosting and security. Google provides optional analytics after consent and AdSense's certified advertising-consent platform. If our site is approved for ads, Google may process advertising data subject to the choices made in its consent message. Providers may process data outside the EEA under their published safeguards. Local analytics preferences are stored in your browser until cleared."] },
      { heading: "Your rights", paragraphs: ["Depending on your location, you may request access, correction, deletion, restriction, portability or object to processing. You may withdraw analytics consent at any time through Cookie settings. You may also complain to your competent data-protection authority."] },
      { heading: "Updates", paragraphs: ["We may update this policy when the service, providers or legal requirements change. The current version is dated 30 September 2026."] },
    ] },
    cookies: { title: "Cookie Policy", description: "Cookie and local-storage choices on Net Salary Map.", intro: "Net Salary Map uses only essential browser storage by default. Analytics and advertising are optional.", sections: [
      { heading: "Necessary storage", paragraphs: ["We store your consent choice under “net-salary-map-consent-v1”. It is necessary to remember whether optional analytics may load and cannot be disabled through the preference panel."] },
      { heading: "Optional analytics", paragraphs: ["If you accept analytics and a Google Analytics measurement ID is configured, Google Analytics may set identifiers such as _ga to produce aggregated usage statistics. The script is not loaded before consent."] },
      { heading: "Optional advertising", paragraphs: ["The AdSense publisher tag loads so the published Google-certified consent platform can present its message. In the EEA, UK and Switzerland, Google's CMP manages advertising purposes and advertising storage separately from our optional analytics preferences. Declining advertising consent does not restrict access to calculators or guides. Ad serving also requires Google to approve this site."] },
      { heading: "Manage or withdraw consent", paragraphs: ["Use Cookie settings to change optional analytics at any time and Google advertising choices to revisit the Google consent message where offered. Rejecting analytics prevents future loading and the site attempts to remove Google Analytics cookies from this domain."] },
      { heading: "Browser controls", paragraphs: ["You can also delete or block cookies and local storage in your browser. Blocking essential storage may cause the consent banner to reappear."] },
    ] },
    legal: { title: "Legal Notice", description: "Operator, terms of use and liability information for Net Salary Map.", intro: "Net Salary Map is a free informational salary-estimation service.", sections: [
      { heading: "Operator", paragraphs: [`Website: netsalarymap.online. Operator and content owner: Héctor Fàbrega Roig. Contact: ${email}.`] },
      { heading: "Informational purpose", paragraphs: ["Calculations are estimates based on documented default assumptions. They are not payroll, tax, legal or financial advice and do not replace an official calculation or professional review."] },
      { heading: "Accuracy and availability", paragraphs: ["We work to keep rates and sources current, but tax rules may change and individual results depend on facts not captured by the calculator. We do not guarantee uninterrupted availability or that every estimate matches a payslip."] },
      { heading: "Intellectual property", paragraphs: ["The website design, original text and code are protected by applicable intellectual-property rules. Official source materials remain the property of their respective public bodies."] },
      { heading: "External links and liability", paragraphs: ["Links to tax authorities and other third parties are provided for verification. We do not control their content. To the extent permitted by law, the operator is not liable for decisions made solely from an estimate shown here."] },
    ] },
    contact: { title: "Contact", description: "Contact Net Salary Map about corrections, privacy or partnerships.", intro: "We welcome corrections and clear, source-backed feedback.", sections: [
      { heading: "Email", paragraphs: [`Write to ${email}. Please include the country, tax year, page URL and an official source when reporting a calculation issue.`] },
      { heading: "What you can contact us about", paragraphs: ["Data corrections, broken links, privacy requests, accessibility problems, partnerships and general feedback."] },
      { heading: "Important", paragraphs: ["We cannot provide personalised tax or legal advice. Do not send tax identification numbers, payslips, bank details or other unnecessary sensitive information."] },
    ] },
  },
  es: {
    privacy: { title: "Política de privacidad", description: "Cómo trata y protege los datos personales Net Salary Map.", intro: "Esta política explica qué información se trata al utilizar Net Salary Map y las opciones disponibles.", sections: [
      { heading: "Responsable y contacto", paragraphs: [`Net Salary Map es un proyecto informativo independiente operado por Héctor Fàbrega Roig. Las consultas de privacidad pueden enviarse a ${email}.`] },
      { heading: "Datos que tratamos", paragraphs: ["El salario y las opciones de la calculadora se procesan localmente en tu navegador y no se nos envían. Podemos tratar registros técnicos de seguridad proporcionados por el alojamiento y, solo con consentimiento, datos agregados mediante Google Analytics.", "Si nos escribes, tratamos el correo y la información que decidas proporcionar para responderte."] },
      { heading: "Finalidades y bases jurídicas", paragraphs: ["El almacenamiento necesario recuerda tus preferencias y permite prestar el servicio. Los registros de seguridad responden al interés legítimo de proteger la web. Las analíticas se basan en tu consentimiento y permanecen desactivadas hasta que lo otorgues."] },
      { heading: "Proveedores, transferencias y conservación", paragraphs: ["Cloudflare presta alojamiento y seguridad. Google proporciona analítica opcional tras tu consentimiento y la plataforma certificada de consentimiento publicitario de AdSense. Si Google aprueba el sitio, el tratamiento publicitario dependerá de las elecciones realizadas en su mensaje. Estos proveedores pueden tratar datos fuera del EEE según las garantías publicadas."] },
      { heading: "Tus derechos", paragraphs: ["Puedes solicitar acceso, rectificación, supresión, limitación, portabilidad u oposición cuando corresponda. Puedes retirar el consentimiento desde Configurar cookies y reclamar ante la autoridad de protección de datos competente."] },
      { heading: "Actualizaciones", paragraphs: ["Podemos actualizar esta política si cambian el servicio, los proveedores o las obligaciones legales. Versión vigente: 30 de septiembre de 2026."] },
    ] },
    cookies: { title: "Política de cookies", description: "Cookies y almacenamiento local utilizados por Net Salary Map.", intro: "Por defecto solo utilizamos almacenamiento imprescindible. Las analíticas y la publicidad son opcionales.", sections: [
      { heading: "Almacenamiento necesario", paragraphs: ["Guardamos tu elección bajo “net-salary-map-consent-v1”. Es necesario para recordar si pueden cargarse analíticas opcionales."] },
      { heading: "Analíticas opcionales", paragraphs: ["Si aceptas y se configura un identificador de Google Analytics, este servicio puede crear identificadores como _ga para generar estadísticas agregadas. El script no se carga antes del consentimiento."] },
      { heading: "Publicidad opcional", paragraphs: ["La etiqueta del editor de AdSense se carga para que Google pueda mostrar su plataforma certificada de consentimiento. En el EEE, Reino Unido y Suiza, la CMP de Google gestiona los fines publicitarios y las cookies de anuncios al margen de nuestras preferencias de analítica opcional. Rechazar publicidad no impide utilizar las calculadoras o guías. Además, Google debe aprobar el sitio antes de servir anuncios."] },
      { heading: "Gestionar o retirar el consentimiento", paragraphs: ["Usa Configurar cookies para modificar la analítica opcional y Preferencias de publicidad de Google para revisar el consentimiento publicitario cuando esté disponible. Al rechazar las analíticas, se impiden nuevas cargas y se intentan eliminar sus cookies."] },
      { heading: "Controles del navegador", paragraphs: ["También puedes eliminar o bloquear cookies y almacenamiento local desde el navegador. Si bloqueas lo necesario, el aviso puede volver a aparecer."] },
    ] },
    legal: { title: "Aviso legal", description: "Titularidad, condiciones de uso y responsabilidad de Net Salary Map.", intro: "Net Salary Map es un servicio gratuito de estimación salarial con finalidad informativa.", sections: [
      { heading: "Titular", paragraphs: [`Web: netsalarymap.online. Titular y responsable de contenidos: Héctor Fàbrega Roig. Contacto: ${email}.`] },
      { heading: "Finalidad informativa", paragraphs: ["Los cálculos son estimaciones basadas en supuestos predeterminados y documentados. No constituyen asesoramiento laboral, fiscal, jurídico o financiero ni sustituyen un cálculo oficial."] },
      { heading: "Exactitud y disponibilidad", paragraphs: ["Trabajamos para mantener las tarifas y fuentes actualizadas, pero las normas cambian y el resultado individual depende de datos que la calculadora puede no recoger. No garantizamos que la estimación coincida con una nómina."] },
      { heading: "Propiedad intelectual", paragraphs: ["El diseño, los textos originales y el código están protegidos por la normativa aplicable. Los materiales oficiales pertenecen a sus respectivos organismos."] },
      { heading: "Enlaces y responsabilidad", paragraphs: ["Los enlaces externos permiten comprobar la metodología. No controlamos esos contenidos. Dentro de los límites legales, el titular no responde de decisiones tomadas únicamente a partir de una estimación."] },
    ] },
    contact: { title: "Contacto", description: "Contacta con Net Salary Map para correcciones, privacidad o colaboraciones.", intro: "Agradecemos las correcciones y comentarios respaldados por fuentes claras.", sections: [
      { heading: "Correo electrónico", paragraphs: [`Escribe a ${email}. Para avisar de un error incluye país, año fiscal, URL y una fuente oficial.`] },
      { heading: "Motivos de contacto", paragraphs: ["Correcciones de datos, enlaces rotos, solicitudes de privacidad, accesibilidad, colaboraciones y comentarios generales."] },
      { heading: "Importante", paragraphs: ["No ofrecemos asesoramiento fiscal o jurídico personalizado. No envíes números fiscales, nóminas, datos bancarios ni información sensible innecesaria."] },
    ] },
  },
  de: {
    privacy: { title: "Datenschutzerklärung", description: "Verarbeitung und Schutz personenbezogener Daten bei Net Salary Map.", intro: "Diese Erklärung beschreibt, welche Informationen bei der Nutzung von Net Salary Map verarbeitet werden.", sections: [
      { heading: "Verantwortlicher und Kontakt", paragraphs: [`Net Salary Map ist ein unabhängiges Informationsprojekt von Héctor Fàbrega Roig. Datenschutzanfragen: ${email}.`] },
      { heading: "Verarbeitete Daten", paragraphs: ["Gehaltsangaben und Rechneroptionen werden lokal im Browser verarbeitet und nicht an uns gesendet. Möglich sind technische Sicherheitsprotokolle des Hosters und – nur nach Einwilligung – aggregierte Nutzungsdaten über Google Analytics.", "Bei einer Kontaktaufnahme verarbeiten wir deine E-Mail-Adresse und freiwillig übermittelte Angaben zur Beantwortung."] },
      { heading: "Zwecke und Rechtsgrundlagen", paragraphs: ["Notwendige Speicherung merkt sich Datenschutzeinstellungen. Sicherheitsprotokolle beruhen auf unserem berechtigten Interesse am Schutz der Website. Analysen beruhen auf Einwilligung und bleiben bis dahin deaktiviert."] },
      { heading: "Dienstleister, Übermittlung und Dauer", paragraphs: ["Cloudflare stellt Hosting und Sicherheit bereit. Google liefert nach Einwilligung optionale Analysen. Eine Verarbeitung außerhalb des EWR kann auf Grundlage der veröffentlichten Garantien erfolgen. Einstellungen bleiben bis zur Löschung im Browser gespeichert."] },
      { heading: "Deine Rechte", paragraphs: ["Je nach Anwendbarkeit bestehen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit und Widerspruch. Die Einwilligung kann jederzeit über die Cookie-Einstellungen widerrufen werden."] },
      { heading: "Änderungen", paragraphs: ["Diese Erklärung kann bei Änderungen des Dienstes oder der Rechtslage angepasst werden. Stand: 30. September 2026."] },
    ] },
    cookies: { title: "Cookie-Richtlinie", description: "Cookies und lokale Speicherung bei Net Salary Map.", intro: "Standardmäßig nutzt Net Salary Map nur notwendige Speicherung. Analyse und Werbung sind freiwillig.", sections: [
      { heading: "Optionale Werbung", paragraphs: ["Das AdSense-Publisher-Tag wird geladen, damit Googles zertifizierte Einwilligungsplattform die entsprechende Meldung anzeigen kann. Im EWR, im Vereinigten Königreich und in der Schweiz verwaltet Googles CMP Werbezwecke und Werbespeicherung getrennt von der optionalen Analyse-Einstellung. Ohne Website-Freigabe durch Google werden keine Anzeigen geschaltet."] },
      { heading: "Notwendige Speicherung", paragraphs: ["Die Auswahl wird unter “net-salary-map-consent-v1” gespeichert. Dies ist erforderlich, um zu merken, ob optionale Analyse geladen werden darf."] },
      { heading: "Optionale Analyse", paragraphs: ["Nach Zustimmung und bei konfigurierter Mess-ID kann Google Analytics Kennungen wie _ga setzen, um aggregierte Statistiken zu erstellen. Vor der Zustimmung wird das Skript nicht geladen."] },
      { heading: "Einwilligung verwalten", paragraphs: ["Über Cookie-Einstellungen kann die Analyse-Einwilligung geändert werden; über die Google-Werbeeinstellungen lässt sich die gesonderte Werbeeinwilligung bei Verfügbarkeit erneut aufrufen. Die Ablehnung der Analyse verhindert neue Ladevorgänge."] },
      { heading: "Browser-Einstellungen", paragraphs: ["Cookies und lokale Daten können auch im Browser gelöscht oder blockiert werden. Dann kann der Hinweis erneut erscheinen."] },
    ] },
    legal: { title: "Impressum und rechtliche Hinweise", description: "Anbieter, Nutzung und Haftung von Net Salary Map.", intro: "Net Salary Map ist ein kostenloser Informationsdienst zur Gehaltsschätzung.", sections: [
      { heading: "Anbieter", paragraphs: [`Website: netsalarymap.online. Anbieter und inhaltlich verantwortlich: Héctor Fàbrega Roig. Kontakt: ${email}.`] },
      { heading: "Informationszweck", paragraphs: ["Berechnungen sind Schätzungen auf Grundlage dokumentierter Standardannahmen. Sie sind keine Lohnabrechnung sowie keine Steuer-, Rechts- oder Finanzberatung."] },
      { heading: "Richtigkeit und Verfügbarkeit", paragraphs: ["Wir bemühen uns um aktuelle Sätze und Quellen. Vorschriften können sich ändern und persönliche Umstände können abweichen. Eine Übereinstimmung mit der tatsächlichen Abrechnung wird nicht garantiert."] },
      { heading: "Urheberrecht", paragraphs: ["Design, eigene Texte und Code sind nach den geltenden Regeln geschützt. Amtliche Quellen bleiben Eigentum der jeweiligen Stellen."] },
      { heading: "Externe Links und Haftung", paragraphs: ["Externe Links dienen der Überprüfung. Für fremde Inhalte besteht keine Kontrolle. Im gesetzlich zulässigen Umfang wird nicht für Entscheidungen gehaftet, die allein auf einer Schätzung beruhen."] },
    ] },
    contact: { title: "Kontakt", description: "Net Salary Map zu Korrekturen, Datenschutz oder Kooperationen kontaktieren.", intro: "Quellengestützte Korrekturen und Hinweise sind willkommen.", sections: [
      { heading: "E-Mail", paragraphs: [`Schreibe an ${email}. Bei Rechenfehlern bitte Land, Steuerjahr, Seiten-URL und eine amtliche Quelle nennen.`] },
      { heading: "Kontaktgründe", paragraphs: ["Datenkorrekturen, defekte Links, Datenschutzanfragen, Barrierefreiheit, Kooperationen und allgemeines Feedback."] },
      { heading: "Wichtig", paragraphs: ["Wir geben keine persönliche Steuer- oder Rechtsberatung. Bitte keine Steuer-ID, Gehaltsabrechnungen, Bankdaten oder unnötige sensible Angaben senden."] },
    ] },
  },
  fr: {
    privacy: { title: "Politique de confidentialité", description: "Traitement et protection des données personnelles par Net Salary Map.", intro: "Cette politique décrit les informations traitées lors de l’utilisation de Net Salary Map.", sections: [
      { heading: "Responsable et contact", paragraphs: [`Net Salary Map est un projet d’information indépendant exploité par Héctor Fàbrega Roig. Questions de confidentialité : ${email}.`] },
      { heading: "Données traitées", paragraphs: ["Les montants de salaire et options sont calculés localement dans votre navigateur et ne nous sont pas envoyés. Des journaux techniques de sécurité peuvent être fournis par l’hébergeur et, uniquement après consentement, des données agrégées peuvent être mesurées avec Google Analytics.", "Si vous nous contactez, nous traitons votre adresse e-mail et les informations volontairement transmises pour répondre."] },
      { heading: "Finalités et bases juridiques", paragraphs: ["Le stockage nécessaire mémorise vos préférences. Les journaux reposent sur notre intérêt légitime à sécuriser le site. Les analyses reposent sur le consentement et restent désactivées avant celui-ci."] },
      { heading: "Prestataires, transferts et conservation", paragraphs: ["Cloudflare fournit l’hébergement et la sécurité. Google fournit l’analyse facultative après consentement ainsi que sa plateforme certifiée de consentement publicitaire AdSense. Si le site est approuvé, les données publicitaires sont traitées selon les choix effectués dans le message Google. Des traitements hors EEE peuvent avoir lieu selon les garanties publiées. Le choix reste dans votre navigateur jusqu’à sa suppression."] },
      { heading: "Vos droits", paragraphs: ["Selon le droit applicable, vous pouvez demander accès, rectification, effacement, limitation, portabilité ou opposition. Le consentement peut être retiré dans les paramètres des cookies."] },
      { heading: "Mises à jour", paragraphs: ["Cette politique peut évoluer avec le service ou la réglementation. Version du 30 septembre 2026."] },
    ] },
    cookies: { title: "Politique des cookies", description: "Cookies et stockage local utilisés par Net Salary Map.", intro: "Par défaut, seul le stockage nécessaire est utilisé. L’analyse et la publicité sont facultatives.", sections: [
      { heading: "Publicité facultative", paragraphs: ["La balise AdSense de l’éditeur est chargée pour permettre à la plateforme de consentement certifiée de Google d’afficher son message. Dans l’EEE, au Royaume-Uni et en Suisse, la CMP Google gère les finalités publicitaires séparément du choix d’analyse facultative. La diffusion d’annonces exige aussi l’approbation du site par Google."] },
      { heading: "Stockage nécessaire", paragraphs: ["Le choix est enregistré sous “net-salary-map-consent-v1” afin de mémoriser si l’analyse facultative peut être chargée."] },
      { heading: "Analyse facultative", paragraphs: ["Après acceptation et si un identifiant Google Analytics est configuré, ce service peut créer des identifiants comme _ga pour produire des statistiques agrégées. Le script n’est pas chargé avant le consentement."] },
      { heading: "Gérer ou retirer le consentement", paragraphs: ["Les paramètres des cookies permettent de modifier le choix d’analyse facultative. Le lien des préférences publicitaires Google permet de revoir le consentement publicitaire lorsqu’il est disponible. Un refus des analyses bloque leur chargement ultérieur."] },
      { heading: "Réglages du navigateur", paragraphs: ["Vous pouvez également supprimer ou bloquer cookies et stockage local dans le navigateur. La bannière peut alors réapparaître."] },
    ] },
    legal: { title: "Mentions légales", description: "Éditeur, conditions d’utilisation et responsabilité de Net Salary Map.", intro: "Net Salary Map est un service gratuit d’estimation salariale à titre informatif.", sections: [
      { heading: "Éditeur", paragraphs: [`Site : netsalarymap.online. Éditeur et responsable du contenu : Héctor Fàbrega Roig. Contact : ${email}.`] },
      { heading: "Finalité informative", paragraphs: ["Les calculs sont des estimations fondées sur des hypothèses par défaut documentées. Ils ne constituent ni une fiche de paie ni un conseil fiscal, juridique ou financier."] },
      { heading: "Exactitude et disponibilité", paragraphs: ["Nous cherchons à maintenir les taux et sources à jour, mais les règles évoluent et les situations individuelles diffèrent. Aucune correspondance exacte avec une fiche de paie n’est garantie."] },
      { heading: "Propriété intellectuelle", paragraphs: ["Le design, les textes originaux et le code sont protégés. Les documents officiels restent la propriété de leurs organismes."] },
      { heading: "Liens et responsabilité", paragraphs: ["Les liens externes servent à vérifier la méthodologie. Leur contenu n’est pas sous notre contrôle. Dans les limites légales, l’éditeur n’est pas responsable des décisions fondées uniquement sur une estimation."] },
    ] },
    contact: { title: "Contact", description: "Contacter Net Salary Map pour une correction, la confidentialité ou un partenariat.", intro: "Les corrections accompagnées de sources claires sont les bienvenues.", sections: [
      { heading: "E-mail", paragraphs: [`Écrivez à ${email}. Pour signaler une erreur, indiquez le pays, l’année fiscale, l’URL et une source officielle.`] },
      { heading: "Sujets", paragraphs: ["Corrections de données, liens cassés, demandes de confidentialité, accessibilité, partenariats et remarques générales."] },
      { heading: "Important", paragraphs: ["Nous ne fournissons pas de conseil fiscal ou juridique personnalisé. N’envoyez pas d’identifiant fiscal, fiche de paie, coordonnées bancaires ou données sensibles inutiles."] },
    ] },
  },
};

export const getLegalDocument = (locale: Locale, kind: LegalKind) => documents[locale][kind];
