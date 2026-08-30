"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("UXnicorp global error:", error);

  return (
    <html lang="es">
      <body style={{ margin: 0 }}>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            background:
              "radial-gradient(ellipse 90% 48% at 72% 20%, rgba(224,166,216,0.70) 0%, rgba(202,222,249,0.72) 38%, rgba(254,224,214,0.66) 72%, rgba(255,255,255,0) 100%), #ffffff",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          }}
        >
          <div style={{ maxWidth: 420, textAlign: "center" }}>
            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.98,
                color: "#111827",
                margin: 0,
                marginBottom: "1rem",
              }}
            >
              Algo salió mal
            </h1>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#4b5563",
                margin: 0,
                marginBottom: "2rem",
              }}
            >
              Ocurrió un error inesperado. Volvé a intentar o andá a la página principal.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
              <button
                onClick={reset}
                style={{
                  padding: "0.7rem 1.4rem",
                  borderRadius: "99px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#fff",
                  background: "linear-gradient(135deg, #F37AA6 0%, #E0A6D8 100%)",
                }}
              >
                Reintentar
              </button>
              <Link
                href="/"
                style={{
                  padding: "0.7rem 1.4rem",
                  borderRadius: "99px",
                  border: "1px solid rgba(0,0,0,0.12)",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#111827",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.72)",
                }}
              >
                Ir al inicio
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}