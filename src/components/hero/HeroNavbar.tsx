"use client";
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
        <TransitionLink
          href="/"
          className="flex items-center gap-3 font-bold tracking-tight text-gray-900"
        >
          <BrandMark size={26} />
          <span className="text-[1.1rem]">UXnicorp</span>
        </TransitionLink>

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
          aria-expanded={menuOpen}
        >
          <span
            className="mb-1 block h-0.5 w-5 origin-center bg-gray-800 transition-transform duration-200"
            style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : undefined }}
          />
          <span
            className="mb-1 block h-0.5 w-5 bg-gray-800 transition-[opacity,transform] duration-150"
            style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : undefined }}
          />
          <span
            className="block h-0.5 w-5 origin-center bg-gray-800 transition-transform duration-200"
            style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : undefined }}
          />
        </button>
      </nav>

      <div
        className="grid overflow-hidden border-black/5 transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden"
        style={{ gridTemplateRows: menuOpen ? "1fr" : "0fr" }}
        aria-hidden={!menuOpen}
      >
        <div className="min-h-0 overflow-hidden">
          {menuOpen && (
            <div className="flex flex-col gap-1 border-t border-black/5 px-5 pb-5 pt-3">
              {links.map((link) => (
                <div key={link.label}>
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
                </div>
              ))}
              <a
                href="#contacto"
                onClick={onCloseMenu}
                className="mt-2 block rounded-full bg-gray-900 px-5 py-2.5 text-center text-sm font-medium text-white"
              >
                {contactLabel}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}