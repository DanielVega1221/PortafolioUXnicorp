import TransitionLink from "@/components/TransitionLink";

type Locale = "es" | "en";

interface NosotrosPageHeaderProps {
  locale: Locale;
}

const contentByLocale = {
  es: {
    backHref: "/",
    backLabel: "Volver",
    eyebrow: "Nuestra historia",
    titleLine1: "UXnicorp nació entre amigos",
    titleLine2: "que querían trabajar distinto.",
    description:
      "Empezamos desarrollando proyectos freelance y con el tiempo entendimos que lo que más valorábamos no era solo programar, sino la forma de hacerlo: con honestidad, cercanía y entendiendo realmente a quienes confían en nosotros.",
    whyTitle: "¿Por qué existimos?",
    whyText:
      "Veíamos clientes confundidos, presupuestos inflados y mucho lenguaje técnico innecesario. La mayoría no necesitaba más complejidad, necesitaba más claridad. Eso fue lo que nos hizo decir \"hagámoslo nosotros\".",
  },
  en: {
    backHref: "/en",
    backLabel: "Back",
    eyebrow: "Our story",
    titleLine1: "UXnicorp started between friends",
    titleLine2: "who wanted to work differently.",
    description:
      "We started as freelancers and over time we realized that what we valued most wasn't just building things, but how we did it: honestly, with closeness and truly understanding the people who trusted us.",
    whyTitle: "Why do we exist?",
    whyText:
      "We saw confused clients, inflated budgets and a lot of unnecessary technical jargon. Most people didn't need more complexity, they needed more clarity. That's what made us say \"let's do this ourselves\".",
  },
} as const;

export default function NosotrosPageHeader({ locale }: NosotrosPageHeaderProps) {
  const c = contentByLocale[locale];

  return (
    <>
      <TransitionLink href={c.backHref} className="brand-back-link">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M9 2.5L5 7l4 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {c.backLabel}
      </TransitionLink>

      <div className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
          {c.eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
          {c.titleLine1}
          <br />
          {c.titleLine2}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500">
          {c.description}
        </p>

        <div
          className="mt-10 max-w-2xl rounded-2xl p-6 md:p-8"
          style={{
            background: "rgba(243,122,166,0.07)",
            border: "1px solid rgba(243,122,166,0.18)",
          }}
        >
          <p
            className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.22em]"
            style={{ color: "#e0608a" }}
          >
            {c.whyTitle}
          </p>
          <p className="text-[0.97rem] leading-relaxed text-gray-700">
            {c.whyText}
          </p>
        </div>
      </div>
    </>
  );
}
