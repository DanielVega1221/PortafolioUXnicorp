"use client";

import TransitionLink from "@/components/TransitionLink";
import { Globe, ShoppingCart, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: EASE } },
};

const SERVICIOS = [
  {
    icon: Globe,
    titulo: "Landing Page",
    desc: "Tu presencia online que realmente convierte.",
    color: "#F37AA6",
    bg: "rgba(243,122,166,0.08)",
  },
  {
    icon: ShoppingCart,
    titulo: "E-commerce",
    desc: "Tienda propia. Sin comisiones de terceros.",
    color: "#8b4fb8",
    bg: "rgba(224,166,216,0.15)",
  },
  {
    icon: LayoutDashboard,
    titulo: "Sistema / App",
    desc: "Software a medida para problemas reales.",
    color: "#3a7cc4",
    bg: "rgba(202,222,249,0.3)",
  },
];

export default function ServiciosSection() {
  return (
    <motion.section
      id="servicios"
      className="px-6 py-20 md:px-8 md:py-28"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="mx-auto max-w-[1220px]">

        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
            Servicios
          </p>
          <h2 className="mt-4 max-w-xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
            Cada proyecto empieza por el negocio,
            <br />
            no por el diseño.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500">
            Antes de diseñar, entendemos qué necesita tu negocio. Diseño, desarrollo y copy en un solo equipo — sin tercerizar nada.
          </p>
          <TransitionLink href="/servicios" className="mt-4 inline-block text-sm font-medium text-[#F37AA6] underline underline-offset-4 hover:text-[#e0608a]">
            Ver precios, tiempos y qué incluye cada uno
          </TransitionLink>
        </div>

        <motion.div className="grid gap-5 md:grid-cols-3" variants={listVariants}>
          {SERVICIOS.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.titulo}
                className="rounded-[1.5rem] p-7"
                style={{ background: s.bg, border: "1px solid rgba(255,255,255,0.7)" }}
                variants={itemVariants}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(255,255,255,0.7)" }}>
                  <Icon size={22} style={{ color: s.color }} />
                </div>
                <h3 className="text-[1.15rem] font-bold tracking-tight text-gray-900">
                  {s.titulo}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-gray-500">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
}

