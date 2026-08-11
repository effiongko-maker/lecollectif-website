import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "li" | "section";
  padded?: boolean;
  /** Prefer false — avoid boxed SaaS cards as the default pattern */
  bordered?: boolean;
  surfaced?: boolean;
  interactive?: boolean;
};

/**
 * Editorial content block. Open by default.
 * Use surfaces/borders only when they clarify interaction or hierarchy.
 */
export function Card({
  as: Comp = "article",
  className,
  padded = true,
  bordered = false,
  surfaced = false,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <Comp
      className={cn(
        "rounded-none",
        surfaced && "bg-surface",
        bordered && "border border-border",
        padded && "py-6 md:py-8",
        interactive && "transition-editorial hover:border-foreground/20",
        className,
      )}
      {...props}
    />
  );
}

type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn("mb-5 flex flex-col gap-3", className)} {...props} />;
}

type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h2" | "h3" | "h4";
};

export function CardTitle({
  as: Comp = "h3",
  className,
  ...props
}: CardTitleProps) {
  return <Comp className={cn("text-h3 text-foreground", className)} {...props} />;
}

type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p className={cn("text-body text-foreground-muted", className)} {...props} />
  );
}
