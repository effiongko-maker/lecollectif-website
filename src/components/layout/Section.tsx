import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, type ContainerWidth } from "@/components/layout/Container";

const tones = {
  default: "bg-background text-foreground",
  secondary: "bg-background-secondary text-foreground",
  surface: "bg-surface text-foreground",
  dark: "bg-surface-dark text-background",
  transparent: "bg-transparent",
  /** @deprecated Prefer semantic tones; kept for existing call sites */
  ivory: "bg-background text-foreground",
  cream: "bg-surface text-foreground",
  stone: "bg-stone text-foreground",
  charcoal: "bg-surface-dark text-background",
} as const;

const spacing = {
  none: "",
  sm: "section-space-sm",
  md: "section-space-md",
  lg: "section-space-lg",
  xl: "section-space-xl",
} as const;

export type SectionTone = keyof typeof tones;
export type SectionSpacing = keyof typeof spacing;

type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "aside" | "header" | "footer";
  tone?: SectionTone;
  spacing?: SectionSpacing;
  container?: boolean;
  containerWidth?: ContainerWidth;
  fullBleed?: boolean;
  children?: ReactNode;
};

/**
 * Vertical section with generous hospitality rhythm.
 * Use `fullBleed` for edge-to-edge media; otherwise prefer container widths.
 */
export function Section({
  as: Comp = "section",
  tone = "default",
  spacing: space = "md",
  container = true,
  containerWidth = "wide",
  fullBleed = false,
  className,
  children,
  ...props
}: SectionProps) {
  const content =
    container && !fullBleed ? (
      <Container width={containerWidth}>{children}</Container>
    ) : (
      children
    );

  return (
    <Comp
      className={cn(tones[tone], spacing[space], fullBleed && "w-full", className)}
      {...props}
    >
      {content}
    </Comp>
  );
}
