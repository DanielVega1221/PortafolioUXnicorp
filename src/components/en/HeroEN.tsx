"use client";

import { useState } from "react";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { SelectionHighlight } from "@/components/hero/SelectionHighlight";

const NAV_LINKS = [
  { label: "Services", href: "/en/servicios" },
  { label: "Cases", href: "/en/casos" },
  { label: "About", href: "/en/about" },
];

const HERO_POINTS = [
  "Clear budgets from the start",
  "You talk directly to the people who build it",
  "Every site built around your business and real goals",
];

const VISUAL_BADGES = [
  { label: "Design", angle: "-42deg", counterAngle: "42deg", radius: "184px", duration: "30s" },
  { label: "Code", angle: "78deg", counterAngle: "-78deg", radius: "188px", duration: "30s" },
  { label: "Strategy", angle: "198deg", counterAngle: "-198deg", radius: "178px", duration: "30s" },
];

export default function HeroEN() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6">
        <HeroNavbar
          links={NAV_LINKS}
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((open) => !open)}
          onCloseMenu={() => setMenuOpen(false)}
          contactLabel="Contact"
        />
      </div>

      <section className="relative overflow-hidden pt-[96px] md:pt-[96px] min-h-[100svh] md:min-h-0 flex flex-col md:block">
        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-6 pb-16 pt-8 flex-1 md:flex-none md:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.8fr)] md:gap-8 md:px-8 md:pb-4 md:pt-2">
          <div className="flex max-w-[38rem] flex-col justify-center gap-4 md:gap-3.5">
            <div className="inline-flex w-fit items-center rounded-full border border-[#F37AA6]/30 bg-[#F37AA6]/8 px-3.5 py-1.5 text-[0.76rem] font-medium tracking-wide text-gray-600">
              Design that converts. Code that lasts.
            </div>
            <h1 className="text-[2.65rem] font-extrabold leading-[0.94] tracking-[-0.06em] text-gray-900 md:text-[3.85rem]">
              We design and build
              <br />
              websites around
              <br />
              <SelectionHighlight color="#F37AA6">the business behind them.</SelectionHighlight>
            </h1>

            <p className="max-w-[31rem] text-[0.98rem] leading-relaxed text-gray-500 md:text-[1.02rem]">
              We get involved from day one: we understand your industry, propose real solutions and build thinking about your business.
            </p>

            <ul className="grid gap-1.5 text-[0.9rem] text-gray-600">
              {HERO_POINTS.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F37AA6]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#contacto"
                className="rounded-full bg-[#F37AA6] px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-md transition-colors hover:bg-[#e0658f]"
              >
                Let&apos;s talk about your project
              </a>
              <a
                href="#casos"
                className="text-sm font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-gray-900"
              >
                See real cases →
              </a>
            </div>

            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/60 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="flex -space-x-2">
                {["bg-[#F37AA6]", "bg-[#E0A6D8]", "bg-[#CADEF9]"].map((color, index) => (
                  <span key={index} className={`h-6 w-6 rounded-full border-2 border-white ${color}`} />
                ))}
              </span>
              <p className="text-[0.78rem] leading-tight text-gray-600">
                <span className="font-semibold text-gray-800">You talk directly to the people who build it.</span>
                <br />
                Argentina · 100% remote
              </p>
            </div>
          </div>

          <HeroVisual badges={VISUAL_BADGES} />
        </div>
      </section>
    </>
  );
}
