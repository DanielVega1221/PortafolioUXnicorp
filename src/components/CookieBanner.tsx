"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "uxnicorp_cookie_consent";

export type ConsentValue = "accepted" | "rejected" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const isEN = pathname?.startsWith("/en");

  const t = {
    text: isEN
      ? "We use cookies to analyse traffic via Google Analytics. No personal data is sold or shared."
      : "Usamos cookies para analizar el tráfico con Google Analytics. No vendemos ni compartimos datos personales.",
    accept: isEN ? "Accept" : "Aceptar",
    reject: isEN ? "Reject" : "Rechazar",
    policy: isEN ? "Privacy policy" : "Política de privacidad",
    policyHref: isEN ? "/en/privacy-policy" : "/politica-de-privacidad",
  };

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentValue;
    if (!stored) {
      // Small delay so the page loads before the banner appears
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
    setConsent(stored);
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookieConsentAccepted"));
  }

  function handleReject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setConsent("rejected");
    setVisible(false);
    window.dispatchEvent(new Event("cookieConsentRejected"));
  }

  if (!visible || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={isEN ? "Cookie consent" : "Consentimiento de cookies"}
      className="fixed bottom-4 left-1/2 z-[9999] w-[calc(100%-2rem)] max-w-[560px] -translate-x-1/2 md:bottom-6"
      style={{
        animation: "cookieFadeUp 0.4s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      <style>{`
        @keyframes cookieFadeUp {
          from { opacity: 0; transform: translateX(-50%) translateY(16px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
      <div
        className="rounded-2xl px-5 py-4 shadow-xl"
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow:
            "0 8px 40px rgba(0,0,0,0.10), 0 1.5px 6px rgba(243,122,166,0.10)",
        }}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          {/* Text */}
          <p className="flex-1 text-[0.8rem] leading-relaxed text-gray-600">
            {t.text}{" "}
            <Link
              href={t.policyHref}
              className="font-semibold text-[#e0608a] underline-offset-2 hover:underline"
            >
              {t.policy}
            </Link>
            .
          </p>

          {/* Buttons */}
          <div className="flex shrink-0 gap-2">
            <button
              onClick={handleReject}
              className="rounded-xl border px-4 py-2 text-xs font-semibold text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-800"
              style={{ borderColor: "rgba(0,0,0,0.12)" }}
            >
              {t.reject}
            </button>
            <button
              onClick={handleAccept}
              className="rounded-xl px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, #F37AA6 0%, #C460A0 100%)",
              }}
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
