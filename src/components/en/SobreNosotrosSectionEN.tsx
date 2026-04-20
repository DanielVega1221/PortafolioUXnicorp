"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const colListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.28 } },
};

const colVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.78, ease: EASE } },
};

const MANIFESTO = [
  {
    index: "01",
    belief: "Data first, then design.",
    sub: "We don't open Figma. We start with questions.",
  },
  {
    index: "02",
    belief: "Real code. No shortcuts.",
    sub: "Every project is built from scratch. No templates, no patches.",
  },
  {
    index: "03",
    belief: "You talk to the people doing the work.",
    sub: "No middlemen. The designer and the developer are both on the call.",
  },
];

export default function SobreNosotrosSectionEN() {
  return (
    <motion.section
      id="nosotros"
      className="relative overflow-hidden px-6 py-20 md:px-8 md:py-28"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div aria-hidden className="pointer-events-none absolute -left-[160px] top-[5%] h-[520px] w-[520px] rounded-full" style={{ background: "radial-gradient(circle, rgba(224,166,216,0.28) 0%, rgba(224,166,216,0) 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute -right-[100px] bottom-[10%] h-[420px] w-[420px] rounded-full" style={{ background: "radial-gradient(circle, rgba(202,222,249,0.32) 0%, rgba(202,222,249,0) 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute left-[38%] top-[-80px] h-[300px] w-[300px] rounded-full" style={{ background: "radial-gradient(circle, rgba(254,224,214,0.38) 0%, rgba(254,224,214,0) 70%)" }} />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        <motion.div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1fr] md:gap-10 lg:gap-14" variants={colListVariants}>

          <motion.div className="flex flex-col" variants={colVariants}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
              About Us
            </p>
            <h2 className="mt-4 text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
              We build websites that
              <br />
              make sense.
              <br />
              <span className="text-[#F37AA6]">And actually work.</span>
            </h2>
            <p className="mt-5 max-w-[30rem] text-[1.01rem] leading-relaxed text-gray-500">
              We don&apos;t promise to transform your vision. We analyze what you have,
              detect where the friction is, and solve it with data,
              purposeful design, and custom development.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-300" />
              <p className="text-[0.82rem] text-gray-400">
                Argentina · 100% remote
              </p>
            </div>
          </motion.div>

          <motion.div className="w-full" variants={colVariants}>
            <div
              className="relative w-full overflow-hidden rounded-[36px] border border-white/80 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-8"
              style={{ background: "linear-gradient(155deg, rgba(255,255,255,0.92) 0%, rgba(254,224,214,0.18) 45%, rgba(224,166,216,0.14) 100%)" }}
            >
              <p className="mb-6 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-gray-400">
                How we work
              </p>

              <div className="flex flex-col gap-0">
                {MANIFESTO.map((item, i) => (
                  <div key={item.index}>
                    <div className="flex items-start gap-4 py-5">
                      <span
                        className="select-none text-[2.6rem] font-black leading-none tracking-tighter"
                        style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(243,122,166,0.3)" }}
                      >
                        {item.index}
                      </span>
                      <div className="pt-1">
                        <p className="text-[1.05rem] font-bold leading-tight tracking-[-0.02em] text-gray-900">
                          {item.belief}
                        </p>
                        <p className="mt-1.5 text-[0.82rem] leading-relaxed text-gray-500">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                    {i < MANIFESTO.length - 1 && <div className="h-px bg-black/6" />}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-black/6 pt-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/logo.png" alt="UXnicorp" className="h-7 w-auto opacity-70" />
                <p className="text-[0.72rem] text-gray-400">
                  ARG · Buenos Aires · Córdoba · Catamarca
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
}
