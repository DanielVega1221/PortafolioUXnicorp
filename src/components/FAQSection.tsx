"use client";

import React, { useState, useCallback, memo, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.28 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

type FAQItem = {
  q: string;
  a: string;
};

type Category = {
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  items: FAQItem[];
};

const categories: Category[] = [
  {
    label: "Costos y presupuesto",
    color: "#e0608a",
    bgColor: "rgba(243,122,166,0.07)",
    borderColor: "rgba(243,122,166,0.55)",
    items: [
      {
        q: "¿Cuánto cuesta hacer una página web?",
        a: "Cada proyecto es distinto, así que el costo depende de lo que realmente necesite el negocio. Antes de presupuestar, preferimos entender bien el objetivo, el alcance y qué solución tiene sentido para cada caso.\n\nIntentamos ser claros desde el inicio, con presupuestos definidos y sin costos sorpresa a mitad del proyecto.",
      },
      {
        q: "¿Cobran por hora o por proyecto?",
        a: "Trabajamos con presupuestos por proyecto y alcance definido.\n\nNo nos gusta que un cliente sienta incertidumbre sobre cuánto va a terminar pagando, así que intentamos dejar todo lo más claro posible desde el comienzo.",
      },
    ],
  },
  {
    label: "Proceso y comunicación",
    color: "#3a7cc4",
    bgColor: "rgba(100,160,240,0.07)",
    borderColor: "rgba(100,160,240,0.45)",
    items: [
      {
        q: "¿Cómo saben qué tipo de web necesito?",
        a: "Antes de hablar de diseño o desarrollo, intentamos entender el negocio, el rubro y qué objetivo tiene la web.\n\nHay proyectos que necesitan algo más completo y otros que funcionan perfectamente con una solución simple y clara. Preferimos recomendar lo que realmente tiene sentido antes que vender complejidad innecesaria.",
      },
      {
        q: "¿Tengo que saber de tecnología para trabajar con ustedes?",
        a: "No.\n\nIntentamos explicar todo de forma simple y acompañar durante todo el proceso. La idea no es llenarte de términos técnicos ni hacerte sentir perdido, sino ayudarte a tomar decisiones claras para tu proyecto.",
      },
      {
        q: "¿Qué necesitan para empezar?",
        a: "Generalmente una primera charla para entender el proyecto, el negocio y qué estás buscando.\n\nA partir de ahí organizamos objetivos, ideas, referencias y definimos el mejor camino para avanzar de forma clara y ordenada.",
      },
      {
        q: "¿Cuánto tarda desarrollar una web?",
        a: "Depende del tipo de proyecto y el alcance, pero siempre intentamos trabajar con tiempos realistas y mantener una comunicación clara durante todo el proceso.\n\nHay webs simples que pueden resolverse relativamente rápido y proyectos más grandes que requieren más etapas y planificación.",
      },
      {
        q: "¿Qué pasa si no me gusta el diseño?",
        a: "El proceso está pensado para trabajar en conjunto y validar decisiones antes de avanzar demasiado, justamente para evitar eso.\n\nNos gusta mantener comunicación constante, mostrar avances y ajustar detalles durante el desarrollo para que el resultado realmente represente al negocio.",
      },
      {
        q: "¿Puedo pedir cambios durante el proyecto?",
        a: "Sí, claro.\n\nMuchos proyectos evolucionan mientras se desarrollan, así que intentamos mantener un proceso flexible y humano. Dependiendo del cambio, evaluamos juntos cómo implementarlo de la mejor manera.",
      },
    ],
  },
  {
    label: "Sobre el proyecto",
    color: "#9040b0",
    bgColor: "rgba(180,100,220,0.07)",
    borderColor: "rgba(180,100,220,0.45)",
    items: [
      {
        q: "¿La web se hace desde cero o usan plantillas?",
        a: "Depende de lo que necesite el proyecto.\n\nHay casos donde una solución más simple tiene sentido y otros donde conviene desarrollar algo más personalizado. Lo importante para nosotros es que la solución sea útil, clara y coherente con el negocio.",
      },
      {
        q: "¿Qué diferencia hay entre una landing page y una web completa?",
        a: "Una landing page suele estar pensada para comunicar algo puntual o convertir sobre un objetivo específico.\n\nUna web completa generalmente tiene más secciones, información y estructura para representar de forma más amplia a un negocio, marca o proyecto. La mejor opción depende de qué necesite comunicar cada caso.",
      },
      {
        q: "¿Conviene hacer algo simple o algo más complejo?",
        a: "La mejor solución no siempre es la más grande o la más compleja.\n\nMuchas veces un proyecto simple, bien pensado y bien ejecutado funciona muchísimo mejor que algo lleno de funciones innecesarias. Intentamos encontrar el equilibrio correcto para cada negocio y cada etapa.",
      },
      {
        q: "¿Mi negocio realmente necesita una página web?",
        a: "No todos los negocios necesitan exactamente lo mismo.\n\nEn algunos casos una web puede ayudar muchísimo a transmitir confianza, mostrar servicios, conseguir clientes o centralizar información importante. En otros, quizá una solución más simple ya alcanza. Por eso preferimos entender primero cada situación antes de recomendar algo.",
      },
    ],
  },
  {
    label: "Después del lanzamiento",
    color: "#b06020",
    bgColor: "rgba(220,130,60,0.07)",
    borderColor: "rgba(220,130,60,0.45)",
    items: [
      {
        q: "¿Qué pasa después de publicar la web?",
        a: "No nos gusta desaparecer después de entregar un proyecto.\n\nSeguimos acompañando, ayudando y resolviendo dudas para que el cliente pueda sentirse cómodo usando su web y haciéndola crecer con el tiempo.",
      },
      {
        q: "¿Dan soporte o mantenimiento?",
        a: "Sí.\n\nPodemos acompañar con mantenimiento, mejoras, actualizaciones o soporte según lo que necesite cada proyecto después de publicado.",
      },
      {
        q: "¿Voy a depender de ustedes para manejar mi web?",
        a: "La idea es todo lo contrario.\n\nIntentamos que cada cliente entienda cómo funciona su proyecto y pueda tener claridad sobre lo que está usando. Nos gusta trabajar desde la transparencia y evitar generar dependencia innecesaria.",
      },
    ],
  },
];

type FAQItemProps = {
  item: FAQItem;
  id: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
  color: string;
  bgColor: string;
  borderColor: string;
  isLast: boolean;
};

const FAQItemRow = memo(function FAQItemRow({
  item, id, isOpen, onToggle, color, bgColor, borderColor, isLast,
}: FAQItemProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.height = `${el.scrollHeight}px`;
    } else {
      const timer = setTimeout(() => {
        el.style.height = "0px";
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        borderBottom: isLast ? "none" : "1px solid rgba(0,0,0,0.07)",
        borderLeft: isOpen ? `3px solid ${borderColor}` : "3px solid transparent",
        background: isOpen ? bgColor : "transparent",
        transition: "background 0.3s ease, border-left-color 0.3s ease",
      }}
    >
      <button
        onClick={() => onToggle(id)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="text-[0.95rem] font-semibold leading-snug transition-colors duration-300 md:text-[1rem]"
          style={{ color: isOpen ? color : "#111827" }}
        >
          {item.q}
        </span>
        <span
          className="flex-shrink-0 text-xl font-light leading-none"
          style={{
            display: "inline-block",
            color: isOpen ? color : "#9ca3af",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s ease",
          }}
        >
          +
        </span>
      </button>
      <div
        ref={panelRef}
        style={{
          height: "0px",
          overflow: "hidden",
        }}
        aria-hidden={!isOpen}
      >
        <div
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.3s ease, transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="px-6 pb-6 pt-0">
            {item.a.split("\n\n").map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="text-sm leading-relaxed text-gray-500"
                style={{ marginTop: pIdx > 0 ? "0.75rem" : 0 }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => setOpenId((prev) => (prev === id ? null : id)), []);

  return (
    <motion.section
      id="faq"
      className="px-6 py-20 md:px-8 md:py-28"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mx-auto max-w-[1220px]">

        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
            Preguntas frecuentes
          </p>
          <h2 className="mt-4 max-w-xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
            Todo lo que querías saber.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500">
            Preguntas comunes sobre cómo trabajamos, qué hacemos y qué podés esperar de cada proyecto.
          </p>
        </div>

        <div className="mx-auto max-w-[860px]">
          <motion.div
            className="flex flex-col gap-12"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {categories.map((cat, catIdx) => (
              <div key={catIdx}>
                <motion.p
                  variants={itemVariants}
                  className="mb-4 text-xs font-semibold uppercase tracking-[0.22em]"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </motion.p>

                <div className="rounded-2xl border border-gray-200/70 overflow-hidden">
                  {cat.items.map((item, itemIdx) => (
                    <FAQItemRow
                      key={`${catIdx}-${itemIdx}`}
                      item={item}
                      id={`${catIdx}-${itemIdx}`}
                      isOpen={openId === `${catIdx}-${itemIdx}`}
                      onToggle={toggle}
                      color={cat.color}
                      bgColor={cat.bgColor}
                      borderColor={cat.borderColor}
                      isLast={itemIdx === cat.items.length - 1}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}
