import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const widths = {
  narrow: "max-w-narrow",
  content: "max-w-content",
  wide: "max-w-wide",
  full: "max-w-full",
} as const;

export type ContainerWidth = keyof typeof widths;

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "main" | "header" | "footer" | "nav";
  width?: ContainerWidth;
  /** Remove horizontal gutters (for full-bleed nesting). */
  flush?: boolean;
};

export function Container({
  as: Comp = "div",
  width = "wide",
  flush = false,
  className,
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full",
        widths[width],
        !flush && "px-[var(--gutter)]",
        className,
      )}
      {...props}
    />
  );
}
