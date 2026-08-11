import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import {
  controlBase,
  controlSizes,
  controlVariants,
} from "@/lib/controls";

export type ButtonVariant = keyof typeof controlVariants;
export type ButtonSize = keyof typeof controlSizes;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  ...props
}: ButtonProps) {
  const isText = variant === "text";

  return (
    <button
      type={type}
      className={cn(
        controlBase,
        controlVariants[variant],
        !isText && controlSizes[size],
        isText && "min-h-11 text-nav normal-case tracking-[0.04em]",
        fullWidth && "w-full",
        className,
      )}
      {...props}
    />
  );
}
