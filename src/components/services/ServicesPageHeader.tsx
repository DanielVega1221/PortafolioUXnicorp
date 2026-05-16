import TransitionLink from "@/components/TransitionLink";
import { CurrencyToggle } from "@/app/servicios/CurrencyToggle";

type Locale = "es" | "en";

type ServicesPageHeaderProps = {
  locale: Locale;
};

const contentByLocale = {
  es: {
    backHref: "/",
    backLabel: "Volver",
    eyebrow: "Servicios",
    titleLine1: "Lo que hacemos,",
    titleLine2: "cómo y cuánto cuesta.",
    description:
      "Tres tipos de proyecto. Precios reales. Cada página tiene el detalle completo de etapas, qué incluye y qué no.",
  },
  en: {
    backHref: "/en",
    backLabel: "Back",
    eyebrow: "Services",
    titleLine1: "What we do,",
    titleLine2: "how and how much it costs.",
    description:
      "Three types of project. Real pricing. Each page has the full detail of stages, what's included and what's not.",
  },
} as const;

export default function ServicesPageHeader({ locale }: ServicesPageHeaderProps) {
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

      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">{content.eyebrow}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h1 className="max-w-2xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </h1>
          <CurrencyToggle />
        </div>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-500">{content.description}</p>
      </div>
    </>
  );
}
