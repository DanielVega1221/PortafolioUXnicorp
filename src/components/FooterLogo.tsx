"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function FooterLogo({ locale }: { locale: "es" | "en" }) {
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog");
  const isHomePage = pathname === "/" || pathname === "/en";

  const [homeHref, setHomeHref] = useState(() =>
    isBlog && typeof document !== "undefined"
      ? document.cookie.match(/(?:^|;\s*)user-locale=([^;]*)/)?.[1] === "en"
        ? "/en"
        : "/"
      : locale === "en"
        ? "/en"
        : "/"
  );

  useEffect(() => {
    if (isBlog) {
      const match = document.cookie.match(/(?:^|;\s*)user-locale=([^;]*)/);
      const id = setTimeout(() => setHomeHref(match?.[1] === "en" ? "/en" : "/"), 0);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => setHomeHref(locale === "en" ? "/en" : "/"), 0);
    return () => clearTimeout(id);
  }, [pathname, locale, isBlog]);

  return (
    <Link
      href={homeHref}
      onClick={
        isHomePage
          ? (e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          : undefined
      }
      className="flex items-center gap-2.5"
    >
      <Image
        src="/brand/logo.png"
        alt="UXnicorp logo"
        width={36}
        height={36}
        sizes="36px"
      />
      <span
        className="text-2xl font-black tracking-[-0.04em] text-gray-900"
        style={{ letterSpacing: "-0.04em" }}
      >
        UXNICORP
      </span>
    </Link>
  );
}