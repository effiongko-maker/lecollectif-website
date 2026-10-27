import NextLink from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import type { ButtonSize, ButtonVariant } from "@/components/ui/Button";
import {
  controlBase,
  controlSizes,
  controlVariants,
} from "@/lib/controls";

type TextLinkProps = ComponentProps<typeof NextLink> & {
  subtle?: boolean;
  /** Rare accent hover — do not use as the default link style */
  accent?: boolean;
  /** Directional cue for editorial CTAs */
  withArrow?: boolean;
};

/** Sophisticated editorial link — animated underline, not default browser chrome. */
export function TextLink({
  className,
  subtle = false,
  accent = false,
  withArrow = false,
  children,
  ...props
}: TextLinkProps) {
  return (
    <NextLink
      className={cn(
        "link-editorial transition-editorial",
        subtle && "text-foreground-muted hover:text-foreground",
        !subtle && !accent && "text-foreground",
        accent && "text-foreground hover:text-accent",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {withArrow ? (
        <span aria-hidden className="translate-y-px text-[0.85em]">
          →
        </span>
      ) : null}
    </NextLink>
  );
}

type ButtonLinkProps = ComponentProps<typeof NextLink> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

/** Link styled as a control. Prefer primary / secondary / text; reserve accent. */
export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonLinkProps) {
  const isText = variant === "text";

  return (
    <NextLink
      className={cn(
        controlBase,
        controlVariants[variant],
        !isText && controlSizes[size],
        isText && "min-h-11 text-nav normal-case",
        fullWidth && "w-full",
        className,
      )}
      {...props}
    />
  );
}
