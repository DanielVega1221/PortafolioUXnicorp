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
    titulo: "Primera charla, sin costo",
    texto:
      "Vemos qué necesitás, qué tenés hoy y si tiene sentido trabajar juntos. Sin compromiso. Sin venderte nada.",
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
    titulo: "Propuesta y plan",
    texto:
      "Si avanzamos, te presentamos alcance, tiempos y presupuesto. Todo por escrito. Sin sorpresas ni costos que aparecen después.",
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
    titulo: "Diseño y validación",
    texto:
      "Diseñamos la estructura y el visual con vos. Iteramos hasta que esté bien antes de escribir una línea de código.",
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
    titulo: "Desarrollo y QA",
    texto:
      "Construimos, testeamos y corregimos. Vas viendo avances reales — no aparecemos al final con algo terminado que nunca viste.",
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
    titulo: "Lanzamiento y seguimiento",
    texto:
      "Deploy, configuración y analíticas. Seguimos monitoreando después del lanzamiento: el cierre del proyecto es el inicio del acompañamiento, no el final.",
    featured: false,
    bg: "rgba(219,201,201,0.5)",
    textColor: "#1a1a1a",
    subColor: "#4a5568",
    numDecorColor: "rgba(150,120,120,0.12)",
    tagBg: "rgba(255,255,255,0.5)",
    tagColor: "#7a5555",
  },
];

export default function ProcesoSection() {
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
            Cómo trabajamos
          </p>
          <h2 className="mt-4 max-w-xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
            Sin vueltas.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500">
            Cinco pasos desde la primera charla hasta el día que está online — y después.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
          variants={listVariants}
        >
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.num}
              variants={itemVariants}
              className={i === 0 ? "md:col-span-2" : ""}
              style={{
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
                boxShadow: paso.featured
                  ? "0 8px 40px rgba(243,122,166,0.25)"
                  : "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "-0.5rem",
                  bottom: "-1.5rem",
                  fontSize: "clamp(7rem, 14vw, 11rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: paso.numDecorColor,
                  userSelect: "none",
                  pointerEvents: "none",
                  letterSpacing: "-0.05em",
                }}
              >
                {paso.num}
              </span>

              <span
                style={{
                  display: "inline-block",
                  width: "fit-content",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  background: paso.tagBg,
                  color: paso.tagColor,
                  padding: "0.3rem 0.8rem",
                  borderRadius: "99px",
                  marginBottom: "1rem",
                  backdropFilter: "blur(6px)",
                }}
              >
                Paso {paso.num}
              </span>

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    fontSize: paso.featured ? "clamp(1.3rem, 2.5vw, 1.7rem)" : "1.1rem",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: paso.textColor,
                    marginBottom: "0.6rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {paso.titulo}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: paso.subColor,
                    maxWidth: paso.featured ? "560px" : "100%",
                  }}
                >
                  {paso.texto}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-[0.78rem] text-gray-400">
          * La primera reunión es siempre sin costo. Si después de hablar no tiene sentido avanzar, no hay ningún problema.
        </p>

      </div>
    </motion.section>
  );
}
