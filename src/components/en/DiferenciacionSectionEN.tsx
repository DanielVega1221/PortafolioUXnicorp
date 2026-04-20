"use client";

import React from "react";
import { Users, MessageCircle, Code, ScanSearch, Heart } from "lucide-react";
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

const items = [
  {
    icon: Users,
    acento: "The speed",
    titulo: "We reply in hours, not days.",
    texto: "When you have a question or an urgent change, you don't wait a week. We get back to you the same day.",
    cardBg: "rgba(253,232,242,0.65)",
    iconBg: "rgba(243,122,166,0.15)",
    iconColor: "#e0608a",
    acentoColor: "#e0608a",
  },
  {
    icon: MessageCircle,
    acento: "Honesty",
    titulo: "If it doesn't make sense, we tell you.",
    texto: "Before charging. Before starting. If we see the project won't work, we say so.",
    cardBg: "rgba(202,222,249,0.55)",
    iconBg: "rgba(100,160,240,0.15)",
    iconColor: "#3a7cc4",
    acentoColor: "#3a7cc4",
  },
  {
    icon: Code,
    acento: "Ownership",
    titulo: "The code is yours.",
    texto: "No weird licenses or proprietary platforms. What we build you can take anywhere.",
    cardBg: "rgba(224,166,216,0.45)",
    iconBg: "rgba(180,100,220,0.15)",
    iconColor: "#9040b0",
    acentoColor: "#9040b0",
  },
  {
    icon: ScanSearch,
    acento: "The process",
    titulo: "We understand first. Then we design.",
    texto: "We don't open Figma until we understand the problem. Design is a consequence, not the starting point.",
    cardBg: "rgba(254,224,214,0.65)",
    iconBg: "rgba(220,130,60,0.15)",
    iconColor: "#b06020",
    acentoColor: "#b06020",
  },
  {
    icon: Heart,
    acento: "Commitment",
    titulo: "After delivery, we stay.",
    texto: "The 30 days post-launch are ours too. We don't disappear when we hand it over.",
    cardBg: "rgba(219,201,201,0.5)",
    iconBg: "rgba(180,130,120,0.15)",
    iconColor: "#8a5050",
    acentoColor: "#8a5050",
  },
];

export default function DiferenciacionSectionEN() {
  return (
    <motion.section
      id="diferenciacion"
      className="px-6 py-20 md:px-8 md:py-28"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="mx-auto max-w-[1220px]">

        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
            Why we&apos;re different
          </p>
          <h2 className="mt-4 max-w-xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
            This is who we are.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500">
            No agency fluff. What you see is what you get.
          </p>
        </div>

        <motion.div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }} variants={listVariants}>
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
                  display: "grid",
                  gridTemplateColumns: "4rem 1fr",
                  gap: "0 2rem",
                  alignItems: "center",
                }}
              >
                <div style={{ width: "4rem", height: "4rem", borderRadius: "1.1rem", background: item.iconBg, border: "1px solid rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={20} style={{ color: item.iconColor, strokeWidth: 1.75 }} />
                </div>
                <div>
                  <span style={{ display: "block", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: item.acentoColor, marginBottom: "0.35rem", opacity: 0.9 }}>
                    {item.acento}
                  </span>
                  <h3 style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.03em", color: "#111", margin: "0 0 0.4rem 0" }}>
                    {item.titulo}
                  </h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(50,40,40,0.52)", margin: 0, maxWidth: "640px" }}>
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
