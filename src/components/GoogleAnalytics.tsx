"use client";

import { useEffect } from "react";
import Script from "next/script";

const GA_ID = "G-W66QC955GW";

export default function GoogleAnalytics() {
  useEffect(() => {
    // Grant consent immediately if user already accepted in a previous session
    if (localStorage.getItem("uxnicorp_cookie_consent") === "accepted") {
      grantConsent();
    }

    function grantConsent() {
      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          ad_storage:              "granted",
          ad_user_data:            "granted",
          ad_personalization:      "granted",
          analytics_storage:       "granted",
          functionality_storage:   "granted",
          personalization_storage: "granted",
        });
      }
    }

    function revokeConsent() {
      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          ad_storage:              "denied",
          ad_user_data:            "denied",
          ad_personalization:      "denied",
          analytics_storage:       "denied",
          functionality_storage:   "denied",
          personalization_storage: "denied",
        });
      }
    }

    window.addEventListener("cookieConsentAccepted", grantConsent);
    window.addEventListener("cookieConsentRejected", revokeConsent);
    return () => {
      window.removeEventListener("cookieConsentAccepted", grantConsent);
      window.removeEventListener("cookieConsentRejected", revokeConsent);
    };
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
