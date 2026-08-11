import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Rule } from "@/components/ui/Rule";

type EyebrowProps = HTMLAttributes<HTMLParagraphElement> & {
  withRule?: boolean;
  /** Gold rule — extremely rare; do not combine with other accent treatments nearby */
  accentRule?: boolean;
};

export function Eyebrow({
  className,
  withRule = false,
  accentRule = false,
  children,
  ...props
}: EyebrowProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className={cn("text-eyebrow text-ink-subtle", className)} {...props}>
        {children}
      </p>
      {withRule ? <Rule short accent={accentRule} /> : null}
    </div>
  );
}

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "display-xl" | "display-lg" | "h1" | "h2" | "h3";
};

const headingSizes = {
  "display-xl": "text-display-xl",
  "display-lg": "text-display-lg",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
} as const;

export function Heading({
  as: Comp = "h2",
  size = "h2",
  className,
  ...props
}: HeadingProps) {
  return (
    <Comp
      className={cn("font-display text-foreground", headingSizes[size], className)}
      {...props}
    />
  );
}

type ProseProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: "lg" | "md" | "sm";
  muted?: boolean;
};

const proseSizes = {
  lg: "text-body-lg",
  md: "text-body",
  sm: "text-small",
} as const;

export function Prose({
  size = "md",
  muted = true,
  className,
  ...props
}: ProseProps) {
  return (
    <p
      className={cn(
        proseSizes[size],
        muted ? "text-foreground-muted" : "text-foreground",
        className,
      )}
      {...props}
    />
  );
}
