"use client";

import { useEffect, useState } from "react";

type GoogleFc = {
  callbackQueue?: { push: (callback: { CONSENT_API_READY: () => void }) => number };
  showRevocationMessage?: () => void;
};
type GoogleFcWindow = Window & { googlefc?: GoogleFc };

/** Google-certified EU advertising choices, separate from our Analytics opt-in. */
export function GooglePrivacyButton({ label }: { label: string }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const host = window as GoogleFcWindow;
    host.googlefc ||= {};
    const queue = host.googlefc.callbackQueue ||= ([] as Array<{ CONSENT_API_READY: () => void }>);
    queue.push({CONSENT_API_READY: () => setReady(true)});
  }, []);
  if (!ready) return null;

  return <button type="button" className="mt-2 ml-3 inline-flex text-sm font-bold text-blue-700 underline" onClick={() => {
    (window as GoogleFcWindow).googlefc?.showRevocationMessage?.();
  }}>{label}</button>;
}
