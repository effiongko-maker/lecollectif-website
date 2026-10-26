import Link from "next/link";
import { cn } from "@/lib/utils";
import { brandMark, siteConfig } from "@/lib/site";

type BrandMarkProps = {
  className?: string;
  /** Called when the homepage link is activated (e.g. close mobile menu) */
  onNavigate?: () => void;
  /** Compact sizing for scrolled header states */
  compact?: boolean;
  /** Placement drives restrained header vs. statement footer sizing */
  placement?: "header" | "footer";
};

/**
 * Primary brand mark.
 * Uses the official logo when `brandMark.src` is set; otherwise a text fallback
 * sized for the same navigation footprint.
 */
export function BrandMark({
  className,
  onNavigate,
  compact = false,
  placement = "header",
}: BrandMarkProps) {
  const isFooter = placement === "footer";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      onClick={onNavigate}
      className={cn(
        "inline-flex shrink-0 items-center transition-editorial hover:opacity-75",
        className,
      )}
    >
      {brandMark.src ? (
        <img
          src={isFooter ? "/brand/logo-horizontal-white.svg" : brandMark.src}
          alt={brandMark.alt}
          width={isFooter ? 847 : brandMark.width}
          height={isFooter ? 210 : brandMark.height}
          className={cn(
            "block h-auto w-[170px] max-w-full object-contain object-left transition-editorial sm:w-[220px] md:w-[260px]",
            isFooter
              ? // Slightly larger than header; restrained within compact footer
                "max-h-[5.25rem] md:max-h-[5.5rem]"
              : compact
                ? // Scrolled — larger presence, still inside existing bar
                  "max-h-14 md:max-h-[4.25rem]"
                : // Default header — max presence that fits md:h-24 without crowding
                  "max-h-[4.15rem] md:max-h-[5rem]",
          )}
        />
      ) : (
        <span
          className={cn(
            "font-display font-normal tracking-[-0.02em] transition-editorial",
            isFooter
              ? "text-4xl text-background md:text-5xl"
              : "text-foreground",
            !isFooter &&
              (compact
                ? "text-[1.25rem] md:text-[1.375rem]"
                : "text-[1.375rem] md:text-[1.625rem]"),
          )}
        >
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
