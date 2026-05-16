import TransitionLink from "@/components/TransitionLink";

type Locale = "es" | "en";

type CasesPageHeaderProps = {
  locale: Locale;
};

const contentByLocale = {
  es: {
    backHref: "/",
    backLabel: "Volver",
    eyebrow: "Casos reales",
    titleLine1: "Proyectos que",
    titleLine2: "resolvieron algo real.",
    description:
      "No mostramos mockups ni demos. Cada caso ac\u00E1 fue un problema concreto de alguien \u2014 y lo que hicimos para resolverlo.",
  },
  en: {
    backHref: "/en",
    backLabel: "Back",
    eyebrow: "Real cases",
    titleLine1: "Projects that",
    titleLine2: "solved something real.",
    description:
      "We don't show mockups or demos. Every case here was a real problem someone had - and what we did to solve it.",
  },
} as const;

export default function CasesPageHeader({ locale }: CasesPageHeaderProps) {
  const content = contentByLocale[locale];

  return (
    <>
      <TransitionLink href={content.backHref} className="brand-back-link">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M9 2.5L5 7l4 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {content.backLabel}
      </TransitionLink>

      <div className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">{content.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
          {content.titleLine1}
          <br />
          {content.titleLine2}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500">{content.description}</p>
      </div>
    </>
  );
}
