"use client";

import { useState } from "react";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { SelectionHighlight } from "@/components/hero/SelectionHighlight";

const NAV_LINKS = [
  { label: "Servicios", href: "/servicios" },
  { label: "Casos", href: "/casos" },
];

const HERO_POINTS = [
  "Analizamos tu web (sin costo)",
  "Entendemos el negocio antes de diseñar",
  "Precio fijo, sin sorpresas",
];

const VISUAL_BADGES = [
  {
    label: "Diseño",
    angle: "-42deg",
    counterAngle: "42deg",
    radius: "184px",
    duration: "30s",
  },
  {
    label: "Código",
    angle: "78deg",
    counterAngle: "-78deg",
    radius: "188px",
    duration: "30s",
  },
  {
    label: "Estrategia",
    angle: "198deg",
    counterAngle: "-198deg",
    radius: "178px",
    duration: "30s",
  },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6">
        <HeroNavbar
          links={NAV_LINKS}
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((open) => !open)}
          onCloseMenu={() => setMenuOpen(false)}
        />
      </div>

      <section className="relative overflow-hidden pt-[96px] md:pt-[112px] min-h-[100svh] md:min-h-0 flex flex-col md:block">
        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-6 pb-16 pt-8 flex-1 md:flex-none md:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.8fr)] md:gap-8 md:px-8 md:pb-4 md:pt-2">
          <div className="flex max-w-[38rem] flex-col justify-center gap-4 md:gap-4.5">
            <h1 className="text-[2.65rem] font-extrabold leading-[0.94] tracking-[-0.06em] text-gray-900 md:text-[3.85rem] lg:text-[4.1rem]">
              Tu web puede
              <br />
              <SelectionHighlight color="#F37AA6">funcionar mejor.</SelectionHighlight>
              <br />
              Te mostramos cómo.
            </h1>

            <p className="max-w-[31rem] text-[0.98rem] leading-relaxed text-gray-500 md:text-[1.02rem]">
              Somos tres. Diseño, código y estrategia — todo adentro, sin subcontratar.
              <br />
              <span className="font-medium text-gray-700">Hablás directo con quien hace el trabajo.</span>
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
                href="#ux-score"
                className="rounded-full bg-[#F37AA6] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#e0658f]"
              >
                Analizar mi web
              </a>
              <a
                href="#casos"
                className="text-sm font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-gray-900"
              >
                Ver casos reales →
              </a>
            </div>

            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/60 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="flex -space-x-2">
                {["bg-[#F37AA6]", "bg-[#E0A6D8]", "bg-[#CADEF9]"].map((color, index) => (
                  <span key={index} className={`h-6 w-6 rounded-full border-2 border-white ${color}`} />
                ))}
              </span>
              <p className="text-[0.78rem] leading-tight text-gray-600">
                <span className="font-semibold text-gray-800">Equipo de 3 en Argentina.</span>
                <br />
                Hablás directo con quien programa.
              </p>
            </div>
          </div>

          <HeroVisual badges={VISUAL_BADGES} />
        </div>
      </section>
    </>
  );
}
