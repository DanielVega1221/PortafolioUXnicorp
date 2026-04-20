"use client";

import { ReactNode, CSSProperties, MouseEvent } from "react";
import { usePageTransition } from "./TransitionProvider";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function TransitionLink({
  href,
  children,
  className,
  style,
  onClick,
}: Props) {
  const { navigate } = usePageTransition();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (onClick) onClick(e);
    // Let browser handle modifier-key clicks (new tab, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    // Only intercept internal links
    if (!href.startsWith("/")) return;
    e.preventDefault();
    navigate(href);
  }

  return (
    <a href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  );
}
