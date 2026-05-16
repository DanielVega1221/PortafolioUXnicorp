"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

type Locale = "es" | "en";

interface LaParteHumanaSectionProps {
  locale: Locale;
}

const contentByLocale = {
  es: {
    eyebrow: "El equipo",
    intro: "Con el tiempo, UXnicorp fue creciendo, cambiando y encontrando su propia identidad.",
    paragraph1:
      "Pasaron personas, proyectos y etapas que nos ayudaron a entender cómo queríamos trabajar y qué tipo de vínculo queríamos construir con quienes confían en nosotros.",
    paragraph2:
      "Hoy seguimos siendo un equipo chico, cercano y muy involucrado en cada proyecto. Nos gusta saber que detrás de cada web hay personas reales, negocios reales y años de esfuerzo que merecen ser tratados con respeto.",
    quote: "Nos importa más que el proyecto funcione que mostrar cuánto sabemos.",
  },
  en: {
    eyebrow: "The team",
    intro: "Over time, UXnicorp grew, changed and found its own identity.",
    paragraph1:
      "People, projects and stages passed that helped us understand how we wanted to work and what kind of relationship we wanted with the people who trust us.",
    paragraph2:
      "Today we're still a small, close-knit team, very involved in every project. We like knowing that behind every website there are real people, real businesses and years of effort that deserve to be treated with respect.",
    quote: "We care more about the project working than about showing how much we know.",
  },
} as const;

export default function LaParteHumanaSection({ locale }: LaParteHumanaSectionProps) {
  const c = contentByLocale[locale];

  return (
    <motion.section
      className="px-6 py-16 md:px-8 md:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-[1220px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr] md:gap-20">

          <div className="flex flex-col justify-between gap-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
              {c.eyebrow}
            </p>
            <blockquote
              className="rounded-3xl p-6 md:p-8"
              style={{
                background: "rgba(253,232,242,0.65)",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              <p className="text-[1.02rem] font-semibold leading-relaxed text-gray-800">
                {c.quote}
              </p>
            </blockquote>
          </div>

          <div className="flex flex-col justify-center gap-5">
            <p className="text-[1.35rem] font-bold leading-snug tracking-[-0.025em] text-gray-900 md:text-[1.55rem]">
              {c.intro}
            </p>
            <p className="text-[0.97rem] leading-relaxed text-gray-600">
              {c.paragraph1}
            </p>
            <p className="text-[0.97rem] leading-relaxed text-gray-600">
              {c.paragraph2}
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
