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
    label: "Costs & Budget",
    color: "#e0608a",
    bgColor: "rgba(243,122,166,0.07)",
    borderColor: "rgba(243,122,166,0.55)",
    items: [
      {
        q: "How much does a website cost?",
        a: "Every project is different, so the cost depends on what the business actually needs. Before pricing anything, we prefer to understand the goal, the scope, and what solution makes sense for each case.\n\nWe aim to be clear from the start — defined budgets, no surprise costs halfway through the project.",
      },
      {
        q: "Do you charge by the hour or by project?",
        a: "We work with fixed project budgets and a defined scope.\n\nWe don't want clients feeling uncertain about how much they'll end up paying, so we try to make everything as clear as possible from day one.",
      },
    ],
  },
  {
    label: "Process & Communication",
    color: "#3a7cc4",
    bgColor: "rgba(100,160,240,0.07)",
    borderColor: "rgba(100,160,240,0.45)",
    items: [
      {
        q: "How do you know what kind of website I need?",
        a: "Before talking about design or development, we try to understand the business, the industry, and what the website needs to achieve.\n\nSome projects need something more comprehensive while others work perfectly with a simple, clear solution. We'd rather recommend what actually makes sense than sell unnecessary complexity.",
      },
      {
        q: "Do I need to know about technology to work with you?",
        a: "Not at all.\n\nWe explain everything in plain language and guide you through the whole process. The goal isn't to overwhelm you with technical jargon — it's to help you make clear, confident decisions for your project.",
      },
      {
        q: "What do you need to get started?",
        a: "Usually just an initial conversation to understand the project, the business, and what you're looking for.\n\nFrom there, we organize goals, ideas, references, and define the clearest path forward in a structured way.",
      },
      {
        q: "How long does it take to build a website?",
        a: "It depends on the type of project and its scope, but we always try to work with realistic timelines and maintain clear communication throughout the process.\n\nSimple websites can come together relatively quickly; larger projects require more stages and planning.",
      },
      {
        q: "What if I don't like the design?",
        a: "The process is designed for collaboration — we validate decisions together before moving too far forward, precisely to avoid that.\n\nWe keep constant communication, share progress, and adjust details during development so the final result truly represents the business.",
      },
      {
        q: "Can I request changes during the project?",
        a: "Yes, absolutely.\n\nMany projects evolve as they're built, so we try to keep the process flexible and human. Depending on the change, we evaluate together the best way to implement it.",
      },
    ],
  },
  {
    label: "About the Project",
    color: "#9040b0",
    bgColor: "rgba(180,100,220,0.07)",
    borderColor: "rgba(180,100,220,0.45)",
    items: [
      {
        q: "Is the website built from scratch or do you use templates?",
        a: "It depends on what the project needs.\n\nSometimes a simpler solution makes sense; other times a custom build is the right call. What matters to us is that the solution is useful, clear, and coherent with the business.",
      },
      {
        q: "What's the difference between a landing page and a full website?",
        a: "A landing page is usually designed to communicate something specific or convert around a single goal.\n\nA full website typically has more sections, more information, and a broader structure to represent a business, brand, or project more comprehensively. The best option depends on what each case needs to communicate.",
      },
      {
        q: "Should I go simple or more complex?",
        a: "The best solution isn't always the biggest or the most complex one.\n\nA simple, well-thought-out, well-executed project often performs far better than something loaded with unnecessary features. We try to find the right balance for each business and each stage.",
      },
      {
        q: "Does my business really need a website?",
        a: "Not every business needs exactly the same thing.\n\nIn some cases, a website can really help build trust, showcase services, attract clients, or centralize important information. In others, a simpler solution might already be enough. That's why we prefer to understand each situation first before recommending anything.",
      },
    ],
  },
  {
    label: "After Launch",
    color: "#b06020",
    bgColor: "rgba(220,130,60,0.07)",
    borderColor: "rgba(220,130,60,0.45)",
    items: [
      {
        q: "What happens after the website goes live?",
        a: "We don't like disappearing after delivering a project.\n\nWe keep supporting, helping, and answering questions so clients feel comfortable using their website and growing it over time.",
      },
      {
        q: "Do you offer support or maintenance?",
        a: "Yes.\n\nWe can provide maintenance, improvements, updates, or support based on what each project needs after it's launched.",
      },
      {
        q: "Will I be dependent on you to manage my website?",
        a: "That's the opposite of what we aim for.\n\nWe want every client to understand how their project works and have full clarity over what they're using. We believe in transparency and avoiding unnecessary dependency.",
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

export default function FAQSectionEN() {
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
            FAQ
          </p>
          <h2 className="mt-4 max-w-xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
            Everything you wanted to know.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500">
            Common questions about how we work, what we do, and what you can expect from each project.
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
