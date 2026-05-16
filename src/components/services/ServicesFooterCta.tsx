import TransitionLink from "@/components/TransitionLink";

type Locale = "es" | "en";

type ServicesFooterCtaProps = {
  locale: Locale;
};

const contentByLocale = {
  es: {
    title: "No ves lo que necesitás?",
    description: "Contanos qué tenés en mente. Si tiene sentido, lo armamos a medida.",
    buttonLabel: "Hablemos",
    href: "/#contacto",
    guarantee: "Primera reunión sin costo ni compromiso",
  },
  en: {
    title: "Don't see what you need?",
    description: "Tell us what you have in mind. If it makes sense, we'll scope it out.",
    buttonLabel: "Let's talk",
    href: "/en#contacto",
    guarantee: "First meeting — no cost, no commitment",
  },
} as const;

export default function ServicesFooterCta({ locale }: ServicesFooterCtaProps) {
  const content = contentByLocale[locale];

  return (
    <div className="brand-cta-card mt-12">
      <div>
        <h3 className="brand-cta-card__title">{content.title}</h3>
        <p className="brand-cta-card__desc">{content.description}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
        <TransitionLink href={content.href} className="brand-cta-card__btn">
          {content.buttonLabel}
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path
              d="M2 6.5h9M8 3.5l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </TransitionLink>
        <p style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.75)", margin: 0 }}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1L2 3v3c0 2.2 1.5 3.8 3.5 4.4C7.5 9.8 9 8.2 9 6V3L5.5 1z" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.75)" strokeWidth="0.9" strokeLinejoin="round" />
            <path d="M3.8 5.5l1.2 1.2 2.2-2" stroke="rgba(255,255,255,0.9)" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {content.guarantee}
        </p>
      </div>
    </div>
  );
}
