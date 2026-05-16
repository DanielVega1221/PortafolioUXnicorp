import type { ReactNode } from "react";

type SelectionHighlightProps = {
  children: ReactNode;
  color: string;
};

export function SelectionHighlight({ children, color }: SelectionHighlightProps) {
  const corner = "absolute h-[7px] w-[7px] border-[2px] hidden md:block";

  return (
    <span
      className="relative mt-1 inline-block whitespace-normal md:whitespace-nowrap"
      style={{ color, padding: "1px 10px 3px" }}
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ border: `2px solid ${color}` }}
      />
      <span aria-hidden className={`${corner} left-[-3px] top-[-3px]`} style={{ borderColor: color, background: "#fff" }} />
      <span aria-hidden className={`${corner} right-[-3px] top-[-3px]`} style={{ borderColor: color, background: "#fff" }} />
      <span aria-hidden className={`${corner} bottom-[-3px] left-[-3px]`} style={{ borderColor: color, background: "#fff" }} />
      <span aria-hidden className={`${corner} bottom-[-3px] right-[-3px]`} style={{ borderColor: color, background: "#fff" }} />
    </span>
  );
}