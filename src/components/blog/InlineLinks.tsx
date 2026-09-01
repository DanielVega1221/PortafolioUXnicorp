import type { ReactNode } from "react";
import TransitionLink from "@/components/TransitionLink";

const INLINE_LINK_RE = /(\[[^\[\]]+\]\([^)]+\))/;

export function renderInlineLinks(content: string | undefined): ReactNode[] {
  return (content ?? "").split(INLINE_LINK_RE).map((part, i) => {
    if (!part) return null;
    const match = part.match(/^\[([^\[\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <TransitionLink
          key={i}
          href={match[2]}
          style={{
            color: "#974c67",
            fontWeight: 600,
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          }}
        >
          {match[1]}
        </TransitionLink>
      );
    }
    return <span key={i}>{part}</span>;
  });
}