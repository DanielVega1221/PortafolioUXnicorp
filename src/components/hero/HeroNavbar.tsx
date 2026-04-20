"use client";
import { AnimatePresence, motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import { BrandMark } from "@/components/hero/BrandMark";

type NavLink = {
  label: string;
  href: string;
};

type HeroNavbarProps = {
  links: NavLink[];
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  contactLabel?: string;
};

export function HeroNavbar({
  links,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  contactLabel = "Contacto",
}: HeroNavbarProps) {
  return (
    <div className="mx-auto max-w-[1280px] rounded-[28px] border border-white/60 bg-white/72 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <nav className="relative z-20 flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 font-bold tracking-tight text-gray-900"
        >
          <BrandMark size={26} />
          <span className="text-[1.1rem]">UXnicorp</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-8 text-[0.95rem] font-medium text-gray-600">
            {links.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <TransitionLink href={link.href} className="transition-colors hover:text-gray-900">
                    {link.label}
                  </TransitionLink>
                ) : (
                  <a href={link.href} className="transition-colors hover:text-gray-900">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-700"
          >
            {contactLabel}
          </a>
        </div>

        <button
          className="rounded-lg p-2 transition hover:bg-black/5 md:hidden"
          onClick={onToggleMenu}
          aria-label="Abrir menú"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            transition={{ duration: 0.22 }}
            className="mb-1 block h-0.5 w-5 origin-center bg-gray-800"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            className="mb-1 block h-0.5 w-5 bg-gray-800"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            transition={{ duration: 0.22 }}
            className="block h-0.5 w-5 origin-center bg-gray-800"
          />
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/5 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5 pt-3">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.06, duration: 0.22 }}
                >
                  {link.href.startsWith("/") ? (
                    <TransitionLink
                      href={link.href}
                      onClick={onCloseMenu}
                      className="block rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-black/5"
                    >
                      {link.label}
                    </TransitionLink>
                  ) : (
                    <a
                      href={link.href}
                      onClick={onCloseMenu}
                      className="block rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-black/5"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.a
                href="#contacto"
                onClick={onCloseMenu}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 + links.length * 0.06, duration: 0.22 }}
                className="mt-2 block rounded-full bg-gray-900 px-5 py-2.5 text-center text-sm font-medium text-white"
              >
                {contactLabel}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}