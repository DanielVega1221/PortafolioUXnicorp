"use client";

import React from "react";
import { Lightbulb, MessageSquare, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.28 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: EASE } },
};

type Locale = "es" | "en";

interface FilosofiaSectionProps {
  locale: Locale;
}

const headerByLocale = {
  es: {
    eyebrow: "Cómo pensamos",
    title: "La filosofía detrás de cada proyecto.",
    description:
      "No son valores corporativos. Son las decisiones concretas que tomamos cada vez que arrancamos algo nuevo.",
  },
  en: {
    eyebrow: "How we think",
    title: "The philosophy behind every project.",
    description:
      "These aren't corporate values. They're the concrete decisions we make every time we start something new.",
  },
} as const;

const itemsByLocale = {
  es: [
    {
      icon: Lightbulb,
      acento: "Entender antes de construir",
      titulo: "No todo necesita una solución enorme.",
      texto:
        "Antes de proponer algo, intentamos entender qué necesita realmente cada negocio. Si algo no hace falta, te lo decimos antes de cotizarlo.",
      cardBg: "rgba(254,224,214,0.65)",
      iconBg: "rgba(220,130,60,0.12)",
      iconColor: "#b06020",
      acentoColor: "#b06020",
    },
    {
      icon: MessageSquare,
      acento: "Hablar claro",
      titulo: "Sin términos raros, sin humo.",
      texto:
        "Explicamos todo de manera simple y directa. Sin esconder procesos detrás de tecnicismos ni hacer que algo parezca más complejo para justificar el precio.",
      cardBg: "rgba(224,166,216,0.45)",
      iconBg: "rgba(180,100,220,0.12)",
      iconColor: "#9040b0",
      acentoColor: "#9040b0",
    },
    {
      icon: Heart,
      acento: "Acompañar de verdad",
      titulo: "No entregamos y desaparecemos.",
      texto:
        "Acompañamos, proponemos ideas y ayudamos incluso en cosas que muchas veces no forman parte del proyecto. Porque nos importa que les funcione.",
      cardBg: "rgba(253,232,242,0.65)",
      iconBg: "rgba(243,122,166,0.12)",
      iconColor: "#e0608a",
      acentoColor: "#e0608a",
    },
    {
      icon: Users,
      acento: "Construir relaciones",
      titulo: "Somos parte del proceso, no un proveedor más.",
      texto:
        "Trabajamos mejor cuando hay confianza y comunicación real. Nos gusta sentir que estamos del mismo lado que quienes confían en nosotros.",
      cardBg: "rgba(202,222,249,0.55)",
      iconBg: "rgba(100,160,240,0.12)",
      iconColor: "#3a7cc4",
      acentoColor: "#3a7cc4",
    },
  ],
  en: [
    {
      icon: Lightbulb,
      acento: "Understand before building",
      titulo: "Not every project needs a huge solution.",
      texto:
        "Before proposing anything, we try to understand what each business actually needs. If something isn't necessary, we say so before quoting it.",
      cardBg: "rgba(254,224,214,0.65)",
      iconBg: "rgba(220,130,60,0.12)",
      iconColor: "#b06020",
      acentoColor: "#b06020",
    },
    {
      icon: MessageSquare,
      acento: "Speak plainly",
      titulo: "No jargon, no smoke.",
      texto:
        "We explain everything simply and directly. Without hiding processes behind technical terms or making things seem more complex to justify the price.",
      cardBg: "rgba(224,166,216,0.45)",
      iconBg: "rgba(180,100,220,0.12)",
      iconColor: "#9040b0",
      acentoColor: "#9040b0",
    },
    {
      icon: Heart,
      acento: "Genuinely accompany",
      titulo: "We don't deliver and disappear.",
      texto:
        "We accompany, suggest ideas and help even with things that often aren't part of the project. Because we care that it actually works for you.",
      cardBg: "rgba(253,232,242,0.65)",
      iconBg: "rgba(243,122,166,0.12)",
      iconColor: "#e0608a",
      acentoColor: "#e0608a",
    },
    {
      icon: Users,
      acento: "Build relationships",
      titulo: "We're part of the process, not just a vendor.",
      texto:
        "We work best when there's trust and real communication. We like feeling that we're on the same side as the people who trust us.",
      cardBg: "rgba(202,222,249,0.55)",
      iconBg: "rgba(100,160,240,0.12)",
      iconColor: "#3a7cc4",
      acentoColor: "#3a7cc4",
    },
  ],
} as const;

export default function FilosofiaSection({ locale }: FilosofiaSectionProps) {
  const h = headerByLocale[locale];
  const items = itemsByLocale[locale];

  return (
    <motion.section
      className="px-6 py-20 md:px-8 md:py-28"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto max-w-[1220px]">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
            {h.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
            {h.title}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500">
            {h.description}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-3 md:grid-cols-2"
          variants={listVariants}
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                style={{
                  borderRadius: "1.5rem",
                  padding: "2rem 2.5rem",
                  background: item.cardBg,
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "0.875rem",
                    background: item.iconBg,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={item.iconColor} strokeWidth={1.8} />
                </span>
                <div>
                  <p
                    className="mb-1 text-[0.7rem] font-bold uppercase tracking-[0.2em]"
                    style={{ color: item.acentoColor }}
                  >
                    {item.acento}
                  </p>
                  <p className="mb-2 text-[1.05rem] font-bold leading-snug text-gray-900">
                    {item.titulo}
                  </p>
                  <p className="text-[0.92rem] leading-relaxed text-gray-600">
                    {item.texto}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
