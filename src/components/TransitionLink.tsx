"use client";

import { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { usePageTransition } from "./TransitionProvider";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export default function TransitionLink({
  href,
  children,
  className,
  style,
  onClick,
  ...rest
}: Props) {
  const { navigate } = usePageTransition();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (onClick) onClick(e);
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (!href.startsWith("/")) return;
    e.preventDefault();
    navigate(href);
  }

  return (
    <a href={href} className={className} style={style} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}