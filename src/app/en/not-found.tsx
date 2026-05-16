import type { Metadata } from "next";
import TransitionLink from "@/components/TransitionLink";

export const metadata: Metadata = {
  title: "404 - Page not found",
  description:
    "The page you requested does not exist or has moved. Return to the UXnicorp homepage to continue.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "none",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function NotFoundEN() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        padding: "2rem 1rem",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "860px",
          borderRadius: "2rem",
          border: "1px solid rgba(255,255,255,0.65)",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.74) 100%)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 24px 60px rgba(20, 20, 35, 0.14)",
          padding: "2rem",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#c460a0",
            fontWeight: 700,
            marginBottom: "0.75rem",
          }}
        >
          Error 404
        </p>

        <h1
          style={{
            fontSize: "clamp(1.9rem, 5vw, 3rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#121219",
            marginBottom: "0.9rem",
          }}
        >
          This page does not exist.
        </h1>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.65,
            color: "#4a4a58",
            maxWidth: "62ch",
            marginBottom: "1.7rem",
          }}
        >
          The link may be broken or the URL may have changed. Head back to home
          to keep exploring our services and case studies.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.8rem",
            alignItems: "center",
          }}
        >
          <TransitionLink
            href="/en"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              borderRadius: "0.9rem",
              background: "linear-gradient(135deg, #F37AA6 0%, #C460A0 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.92rem",
              padding: "0.72rem 1.2rem",
              boxShadow: "0 8px 24px rgba(196,96,160,0.34)",
            }}
          >
            Back to home
            <span aria-hidden>{"->"}</span>
          </TransitionLink>

          <TransitionLink
            href="/en#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.9rem",
              background: "rgba(18,18,25,0.05)",
              color: "#222",
              fontWeight: 600,
              fontSize: "0.92rem",
              padding: "0.72rem 1.2rem",
              border: "1px solid rgba(18,18,25,0.09)",
            }}
          >
            Contact us
          </TransitionLink>
        </div>
      </section>
    </main>
  );
}
