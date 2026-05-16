import TransitionLink from "@/components/TransitionLink";

type Locale = "es" | "en";

type CasesFooterCtaProps = {
  locale: Locale;
};

const contentByLocale = {
  es: {
    title: "\u00BFTu proyecto podr\u00EDa ser el pr\u00F3ximo?",
    description: "Contanos qu\u00E9 ten\u00E9s en mente. Arrancamos con un an\u00E1lisis gratis.",
    buttonLabel: "Hablemos",
    href: "/#contacto",
  },
  en: {
    title: "Could your project be next?",
    description: "Tell us what you have in mind. We start with a free analysis.",
    buttonLabel: "Let's talk",
    href: "/en#contacto",
  },
} as const;

export default function CasesFooterCta({ locale }: CasesFooterCtaProps) {
  const content = contentByLocale[locale];

  return (
    <div className="brand-cta-card">
      <div>
        <h3 className="brand-cta-card__title">{content.title}</h3>
        <p className="brand-cta-card__desc">{content.description}</p>
      </div>
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
    </div>
  );
}
