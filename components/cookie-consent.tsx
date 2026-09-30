"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { legalPath } from "@/lib/legal-routes";

type Consent = { analytics: boolean };

const STORAGE_KEY = "net-salary-map-consent-v1";
const gaId = process.env.NEXT_PUBLIC_GA_ID;

const copy: Record<Locale, {
  title: string; body: string; accept: string; reject: string; manage: string;
  save: string; necessary: string; necessaryCopy: string; analytics: string;
  analyticsCopy: string; settings: string; policy: string;
}> = {
  en: { title: "Your privacy matters", body: "We use necessary storage to remember your choice. Optional analytics help us improve the calculator and are loaded only with your consent.", accept: "Accept all", reject: "Reject optional", manage: "Manage", save: "Save choices", necessary: "Necessary", necessaryCopy: "Required for privacy preferences and core site functions.", analytics: "Analytics", analyticsCopy: "Anonymous usage measurement with Google Analytics.", settings: "Cookie settings", policy: "Cookie policy" },
  es: { title: "Tu privacidad importa", body: "Usamos almacenamiento necesario para recordar tu elección. Las analíticas opcionales nos ayudan a mejorar la calculadora y solo se cargan con tu consentimiento.", accept: "Aceptar todo", reject: "Rechazar opcionales", manage: "Gestionar", save: "Guardar selección", necessary: "Necesarias", necessaryCopy: "Imprescindibles para las preferencias de privacidad y el funcionamiento básico.", analytics: "Analíticas", analyticsCopy: "Medición anónima del uso mediante Google Analytics.", settings: "Configurar cookies", policy: "Política de cookies" },
  de: { title: "Deine Privatsphäre ist wichtig", body: "Notwendige Speicherung merkt sich deine Auswahl. Optionale Analysen helfen uns, den Rechner zu verbessern, und werden nur mit deiner Einwilligung geladen.", accept: "Alle akzeptieren", reject: "Optionale ablehnen", manage: "Verwalten", save: "Auswahl speichern", necessary: "Notwendig", necessaryCopy: "Erforderlich für Datenschutzeinstellungen und grundlegende Funktionen.", analytics: "Analyse", analyticsCopy: "Anonyme Nutzungsmessung mit Google Analytics.", settings: "Cookie-Einstellungen", policy: "Cookie-Richtlinie" },
  fr: { title: "Votre vie privée compte", body: "Un stockage nécessaire mémorise votre choix. Les analyses facultatives nous aident à améliorer le calculateur et ne sont chargées qu’avec votre consentement.", accept: "Tout accepter", reject: "Refuser les options", manage: "Gérer", save: "Enregistrer", necessary: "Nécessaires", necessaryCopy: "Requis pour les préférences de confidentialité et les fonctions essentielles.", analytics: "Analyse", analyticsCopy: "Mesure anonyme de l’utilisation avec Google Analytics.", settings: "Paramètres des cookies", policy: "Politique des cookies" },
};

function currentLocale(): Locale {
  if (typeof window === "undefined") return "en";
  if (window.location.pathname.startsWith("/es/")) return "es";
  if (window.location.pathname.startsWith("/de/")) return "de";
  if (window.location.pathname.startsWith("/fr/")) return "fr";
  return "en";
}

function clearAnalyticsCookies() {
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (name === "_ga" || name?.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.netsalarymap.online; SameSite=Lax`;
    }
  }
}

export function CookieConsent() {
  const [locale, setLocale] = useState<Locale>("en");
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    setLocale(currentLocale());
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Consent;
        setConsent({ analytics: Boolean(parsed.analytics) });
        setAnalytics(Boolean(parsed.analytics));
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
    setReady(true);
  }, []);

  const persist = (next: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    if (!next.analytics) clearAnalyticsCookies();
    setConsent(next);
    setAnalytics(next.analytics);
    setSettings(false);
  };

  if (!ready) return null;
  const t = copy[locale];

  return <>
    {consent?.analytics && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    {!consent || settings ? (
      <div className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,.24)] sm:bottom-5 sm:p-6" role="dialog" aria-label={t.title}>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-lg font-black text-slate-950">{t.title}</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">{t.body}</p>
            <a className="mt-2 inline-flex text-sm font-bold text-blue-700 underline" href={legalPath(locale,"cookies")}>{t.policy}</a>
          </div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <button type="button" className="rounded-xl border px-4 py-2 text-sm font-bold" onClick={() => setSettings(value => !value)}>{t.manage}</button>
            <button type="button" className="rounded-xl border px-4 py-2 text-sm font-bold" onClick={() => persist({analytics:false})}>{t.reject}</button>
            <button type="button" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white" onClick={() => persist({analytics:true})}>{t.accept}</button>
          </div>
        </div>
        {settings ? <div className="mt-5 grid gap-3 border-t pt-5 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4"><div className="flex items-center justify-between"><b>{t.necessary}</b><span className="text-xs font-bold text-emerald-700">ON</span></div><p className="mt-1 text-xs leading-5 text-slate-600">{t.necessaryCopy}</p></div>
          <label className="rounded-xl bg-slate-50 p-4"><span className="flex items-center justify-between"><b>{t.analytics}</b><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="size-5 accent-blue-600" /></span><span className="mt-1 block text-xs leading-5 text-slate-600">{t.analyticsCopy}</span></label>
          <button type="button" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white sm:col-span-2" onClick={() => persist({analytics})}>{t.save}</button>
        </div> : null}
      </div>
    ) : (
      <button type="button" className="fixed bottom-3 left-3 z-50 rounded-full border bg-white px-3 py-2 text-xs font-bold text-slate-600 shadow-lg" onClick={() => setSettings(true)}>{t.settings}</button>
    )}
  </>;
}
