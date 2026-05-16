import React from "react";
import TransitionLink from "@/components/TransitionLink";

type Locale = "es" | "en";

const content = {
  es: {
    sectionLabel: "Más que un proyecto",
    planCuidado: {
      label: "Mantenimiento mensual",
      title: "Plan Cuidado",
      desc: "Actualizaciones, backups y soporte técnico continuo. Tu sitio siempre al día, sin que tengas que preocuparte.",
      items: ["Actualizaciones de contenido", "Backups automáticos", "Soporte técnico prioritario"],
      price: "$30.000 ARS/mes",
      priceNote: "aprox. 20 USD/mes",
      cta: "Consultanos",
      href: "/#contacto",
    },
    referidos: {
      label: "Plan Referidos",
      title: "Recomendanos y ganás.",
      desc: "Recomendanos a alguien y tanto vos como esa persona reciben un 10% de descuento en su próximo proyecto.",
      items: ["10% de descuento para vos", "10% de descuento para quien recomendás"],
      note: "* No incluye el Plan Cuidado.",
      cta: "Consultar condiciones",
      href: "/#contacto",
    },
    garantia: {
      label: "Sin riesgo",
      badge: "Garantía",
      title: "Primera reunión sin costo ni compromiso.",
      desc: "Si después de hablar no ves que tiene sentido, no hay problema. Así de simple.",
      cta: "Agendá una reunión",
      href: "/#contacto",
    },
  },
  en: {
    sectionLabel: "More than a project",
    planCuidado: {
      label: "Monthly maintenance",
      title: "Care Plan",
      desc: "Updates, backups and ongoing support. Your site always up to date, without the stress.",
      items: ["Content updates", "Automatic backups", "Priority technical support"],
      price: "$20 USD/month",
      priceNote: "approx. $30,000 ARS/month",
      cta: "Contact us",
      href: "/en#contacto",
    },
    referidos: {
      label: "Referral Program",
      title: "Refer us and earn.",
      desc: "Recommend us to someone and both of you get 10% off your next project.",
      items: ["10% off for you", "10% off for who you refer"],
      note: "* Does not apply to the Care Plan.",
      cta: "Ask about it",
      href: "/en#contacto",
    },
    garantia: {
      label: "Zero risk",
      badge: "Guarantee",
      title: "First meeting — no cost, no commitment.",
      desc: "If after talking you don't see the value, no problem. Simple as that.",
      cta: "Book a meeting",
      href: "/en#contacto",
    },
  },
} as const;

export default function ServiciosExtrasSection({ locale }: { locale: Locale }) {
  const c = content[locale];

  return (
    <div style={{ marginTop: "3rem", marginBottom: "0.5rem" }}>
      <p
        style={{
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#9ca3af",
          marginBottom: "1rem",
        }}
      >
        {c.sectionLabel}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        <div
          style={{
            borderRadius: "1.5rem",
            padding: "1.75rem 2rem",
            background: "rgba(219,201,201,0.4)",
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8a5050",
              margin: "0 0 0.6rem 0",
            }}
          >
            {c.planCuidado.label}
          </p>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: "#111",
              margin: "0 0 0.5rem 0",
              letterSpacing: "-0.03em",
            }}
          >
            {c.planCuidado.title}
          </h3>
          <p style={{ fontSize: "0.82rem", color: "#4a5568", lineHeight: 1.55, margin: "0 0 1rem 0" }}>
            {c.planCuidado.desc}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 1rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
            }}
          >
            {c.planCuidado.items.map((item) => (
              <li
                key={item}
                style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.8rem", color: "#374151" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" fill="rgba(138,80,80,0.12)" />
                  <path d="M3.5 6l1.75 1.75L8.5 4" stroke="#8a5050" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "1.25rem", marginTop: "auto" }}>
            <span style={{ fontSize: "1rem", fontWeight: 800, color: "#8a5050" }}>{c.planCuidado.price}</span>
            <span style={{ fontSize: "0.72rem", color: "#9ca3af" }}>{c.planCuidado.priceNote}</span>
          </div>
          <TransitionLink
            href={c.planCuidado.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.5rem 1rem",
              borderRadius: "0.65rem",
              background: "rgba(138,80,80,0.1)",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "#8a5050",
              textDecoration: "none",
              alignSelf: "flex-start",
            }}
          >
            {c.planCuidado.cta}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 5h7M6 2.5l2.5 2.5L6 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </TransitionLink>
        </div>

        <div
          style={{
            borderRadius: "1.5rem",
            padding: "1.75rem 2rem",
            background: "rgba(202,222,249,0.5)",
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#3a7cc4",
              margin: "0 0 0.6rem 0",
            }}
          >
            {c.referidos.label}
          </p>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: "#111",
              margin: "0 0 0.5rem 0",
              letterSpacing: "-0.03em",
            }}
          >
            {c.referidos.title}
          </h3>
          <p style={{ fontSize: "0.82rem", color: "#4a5568", lineHeight: 1.55, margin: "0 0 1rem 0" }}>
            {c.referidos.desc}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 0.6rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
            }}
          >
            {c.referidos.items.map((item) => (
              <li
                key={item}
                style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.8rem", color: "#374151" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" fill="rgba(58,124,196,0.12)" />
                  <path d="M3.5 6l1.75 1.75L8.5 4" stroke="#3a7cc4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "0.72rem", color: "#9ca3af", margin: "0 0 1.25rem 0", marginTop: "auto" }}>
            {c.referidos.note}
          </p>
          <TransitionLink
            href={c.referidos.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.5rem 1rem",
              borderRadius: "0.65rem",
              background: "rgba(58,124,196,0.1)",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "#3a7cc4",
              textDecoration: "none",
              alignSelf: "flex-start",
            }}
          >
            {c.referidos.cta}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 5h7M6 2.5l2.5 2.5L6 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </TransitionLink>
        </div>

        <div
          style={{
            borderRadius: "1.5rem",
            padding: "1.75rem 2rem",
            background: "rgba(253,232,242,0.55)",
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
            <p
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#e0608a",
                margin: 0,
              }}
            >
              {c.garantia.label}
            </p>
            <span
              style={{
                padding: "0.15rem 0.5rem",
                borderRadius: "0.35rem",
                background: "rgba(224,96,138,0.12)",
                fontSize: "0.58rem",
                fontWeight: 800,
                color: "#e0608a",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {c.garantia.badge}
            </span>
          </div>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: "#111",
              margin: "0 0 0.5rem 0",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            {c.garantia.title}
          </h3>
          <p
            style={{
              fontSize: "0.82rem",
              color: "#4a5568",
              lineHeight: 1.55,
              margin: "0 0 1.5rem 0",
              marginTop: "auto",
              flex: 1,
            }}
          >
            {c.garantia.desc}
          </p>
          <TransitionLink
            href={c.garantia.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.5rem 1rem",
              borderRadius: "0.65rem",
              background: "rgba(224,96,138,0.1)",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "#e0608a",
              textDecoration: "none",
              alignSelf: "flex-start",
            }}
          >
            {c.garantia.cta}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 5h7M6 2.5l2.5 2.5L6 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
