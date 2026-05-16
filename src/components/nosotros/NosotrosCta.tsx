import TransitionLink from "@/components/TransitionLink";

type Locale = "es" | "en";

interface NosotrosCtaProps {
  locale: Locale;
}

const contentByLocale = {
  es: {
    title: "Si sentís que podemos ayudarte,",
    titleLine2: "nos encantaría conocer tu proyecto.",
    subtitle:
      "Creemos que los mejores proyectos nacen cuando hay confianza, claridad y ganas reales de construir algo útil juntos.",
    primaryLabel: "Hablemos",
    primaryHref: "/#contacto",
    secondaryLabel: "Ver servicios →",
    secondaryHref: "/servicios",
  },
  en: {
    title: "If you feel we can help you,",
    titleLine2: "we'd love to hear about your project.",
    subtitle:
      "We believe the best projects are born when there's trust, clarity and a genuine desire to build something useful together.",
    primaryLabel: "Let's talk",
    primaryHref: "/en#contacto",
    secondaryLabel: "See services →",
    secondaryHref: "/en/servicios",
  },
} as const;

export default function NosotrosCta({ locale }: NosotrosCtaProps) {
  const c = contentByLocale[locale];

  return (
    <section className="px-6 pb-20 pt-8 md:px-8 md:pb-28 md:pt-8">
      <div className="mx-auto max-w-[1220px]">
        <div
          className="rounded-3xl px-8 py-14 text-center md:px-16 md:py-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(243,122,166,0.10) 0%, rgba(224,166,216,0.12) 50%, rgba(202,222,249,0.14) 100%)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.04)",
          }}
        >
          <h2 className="mx-auto max-w-2xl text-[1.9rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-gray-900 md:text-[2.4rem]">
            {c.title}
            <br />
            {c.titleLine2}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[0.97rem] leading-relaxed text-gray-500">
            {c.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <TransitionLink
              href={c.primaryHref}
              className="rounded-full bg-[#F37AA6] px-6 py-3 text-sm font-semibold text-gray-900 shadow-md transition-colors hover:bg-[#e0658f]"
            >
              {c.primaryLabel}
            </TransitionLink>
            <TransitionLink
              href={c.secondaryHref}
              className="text-sm font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-gray-900"
            >
              {c.secondaryLabel}
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
