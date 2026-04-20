"use client";

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

const pasos = [
  {
    num: "01",
    titulo: "First call, no cost",
    texto: "We look at what you need, what you have today, and whether it makes sense to work together. No commitment. No sales pitch.",
    featured: true,
    bg: "linear-gradient(135deg, #F37AA6 0%, #E0A6D8 100%)",
    textColor: "#fff",
    subColor: "rgba(255,255,255,0.75)",
    numDecorColor: "rgba(255,255,255,0.12)",
    tagBg: "rgba(255,255,255,0.2)",
    tagColor: "#fff",
  },
  {
    num: "02",
    titulo: "Proposal and plan",
    texto: "If we move forward, we present scope, timelines and budget. Everything in writing. No surprises, no costs that appear later.",
    featured: false,
    bg: "rgba(202,222,249,0.55)",
    textColor: "#1a1a1a",
    subColor: "#4a5568",
    numDecorColor: "rgba(100,140,200,0.12)",
    tagBg: "rgba(255,255,255,0.5)",
    tagColor: "#3b6fa0",
  },
  {
    num: "03",
    titulo: "Design and validation",
    texto: "We design the structure and visuals with you. We iterate until it's right before writing a single line of code.",
    featured: false,
    bg: "rgba(224,166,216,0.45)",
    textColor: "#1a1a1a",
    subColor: "#4a5568",
    numDecorColor: "rgba(180,100,170,0.12)",
    tagBg: "rgba(255,255,255,0.5)",
    tagColor: "#8b4a80",
  },
  {
    num: "04",
    titulo: "Development and QA",
    texto: "We build, test and fix. You see real progress along the way — we don't disappear and come back with a finished product you never saw.",
    featured: false,
    bg: "rgba(254,224,214,0.65)",
    textColor: "#1a1a1a",
    subColor: "#4a5568",
    numDecorColor: "rgba(220,130,80,0.12)",
    tagBg: "rgba(255,255,255,0.5)",
    tagColor: "#b05a30",
  },
  {
    num: "05",
    titulo: "Launch and follow-up",
    texto: "Deploy, config and analytics. And after launch we keep monitoring — we don't vanish when we deliver.",
    featured: false,
    bg: "rgba(219,201,201,0.5)",
    textColor: "#1a1a1a",
    subColor: "#4a5568",
    numDecorColor: "rgba(150,120,120,0.12)",
    tagBg: "rgba(255,255,255,0.5)",
    tagColor: "#7a5555",
  },
];

export default function ProcesoSectionEN() {
  return (
    <motion.section
      id="proceso"
      className="px-6 py-20 md:px-8 md:py-28"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="mx-auto max-w-[1220px]">

        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
            How we work
          </p>
          <h2 className="mt-4 max-w-xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
            Straight to it.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500">
            Five steps from first call to launch day — and beyond.
          </p>
        </div>

        <motion.div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "auto auto auto", gap: "1.25rem" }} variants={listVariants}>
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.num}
              variants={itemVariants}
              style={{
                gridColumn: i === 0 ? "1 / -1" : undefined,
                position: "relative",
                borderRadius: "1.5rem",
                padding: paso.featured ? "2.5rem 2.75rem" : "2rem 2.25rem",
                background: paso.bg,
                overflow: "hidden",
                minHeight: paso.featured ? "200px" : "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: paso.featured ? "0 8px 40px rgba(243,122,166,0.25)" : "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              <span aria-hidden="true" style={{ position: "absolute", right: "-0.5rem", bottom: "-1.5rem", fontSize: "clamp(7rem, 14vw, 11rem)", fontWeight: 900, lineHeight: 1, color: paso.numDecorColor, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>
                {paso.num}
              </span>
              <span style={{ display: "inline-block", width: "fit-content", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: paso.tagBg, color: paso.tagColor, padding: "0.3rem 0.8rem", borderRadius: "99px", marginBottom: "1rem", backdropFilter: "blur(6px)" }}>
                Step {paso.num}
              </span>
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ fontSize: paso.featured ? "clamp(1.3rem, 2.5vw, 1.7rem)" : "1.1rem", fontWeight: 800, lineHeight: 1.2, color: paso.textColor, marginBottom: "0.6rem", letterSpacing: "-0.02em" }}>
                  {paso.titulo}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: paso.subColor, maxWidth: paso.featured ? "560px" : "100%" }}>
                  {paso.texto}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-[0.78rem] text-gray-400">
          * The first meeting is always free. If after talking it doesn&apos;t make sense to move forward, that&apos;s completely fine.
        </p>

      </div>
    </motion.section>
  );
}
