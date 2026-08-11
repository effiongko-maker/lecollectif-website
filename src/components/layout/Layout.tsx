import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type StackProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
};

const stackGaps = {
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-10",
  xl: "gap-16",
} as const;

const stackAlign = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

export function Stack({
  as: Comp = "div",
  gap = "md",
  align = "stretch",
  className,
  ...props
}: StackProps) {
  return (
    <Comp
      className={cn(
        "flex flex-col",
        stackGaps[gap],
        stackAlign[align],
        className,
      )}
      {...props}
    />
  );
}

type GridProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg" | "xl";
};

const gridCols = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

const gridGaps = {
  sm: "gap-4 md:gap-6",
  md: "gap-6 md:gap-8",
  lg: "gap-8 md:gap-12",
  xl: "gap-10 md:gap-16",
} as const;

export function Grid({
  as: Comp = "div",
  cols = 2,
  gap = "md",
  className,
  ...props
}: GridProps) {
  return (
    <Comp
      className={cn("grid", gridCols[cols], gridGaps[gap], className)}
      {...props}
    />
  );
}

type SplitProps = HTMLAttributes<HTMLDivElement> & {
  reverse?: boolean;
  gap?: "md" | "lg" | "xl";
  align?: "start" | "center" | "end";
  /** Editorial asymmetry — stacks to one column on mobile */
  ratio?: "equal" | "content-media" | "media-content";
};

const splitGaps = {
  md: "gap-8 lg:gap-12",
  lg: "gap-10 lg:gap-16",
  xl: "gap-12 lg:gap-24",
} as const;

const splitAlign = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
} as const;

const splitRatios = {
  equal: "lg:grid-cols-2",
  "content-media": "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
  "media-content": "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]",
} as const;

/** Two-column editorial layout — intentionally asymmetrical when needed. */
export function Split({
  reverse = false,
  gap = "lg",
  align = "center",
  ratio = "equal",
  className,
  ...props
}: SplitProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1",
        splitRatios[ratio],
        splitGaps[gap],
        splitAlign[align],
        reverse && "lg:[&>*:first-child]:order-2",
        className,
      )}
      {...props}
    />
  );
}
