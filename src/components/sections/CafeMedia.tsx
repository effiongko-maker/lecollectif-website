import Image from "next/image";
import { cn } from "@/lib/utils";

type CafeMediaProps = {
  alt: string;
  /** Set when conceptual photography or renders are supplied */
  src?: string | null;
  /** CSS object-position for cover crop within the frame */
  objectPosition?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Dedicated Glass Café media frame.
 * Accepts future photography/renders via `src` without layout changes.
 * Without `src`, renders an intentional architectural treatment (no empty-box look, no labels).
 */
export function CafeMedia({
  alt,
  src,
  objectPosition = "center center",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className,
}: CafeMediaProps) {
  return (
    <figure
      className={cn(
        "group/cafe-media relative w-full overflow-hidden bg-stone",
        "aspect-[4/5] sm:aspect-[5/6]",
        // Desktop: fixed panel height so the full image fits the viewport with section padding
        "lg:aspect-auto lg:h-[min(58svh,32rem)] xl:h-[min(60svh,34rem)]",
        className,
      )}
    >
      {/* Architectural outer frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 z-20 border border-foreground/[0.08] md:inset-5 lg:inset-6"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 z-20 border border-background/30 md:inset-5 lg:inset-6"
        style={{
          clipPath: "inset(0 0 calc(100% - 1px) 0)",
        }}
      />

      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          quality={95}
          priority={priority}
          sizes={sizes}
          style={{ objectPosition }}
          className="object-cover media-atmospheric transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cafe-media:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover/cafe-media:scale-100"
        />
      ) : (
        <CafeArchitecturalField alt={alt} />
      )}
    </figure>
  );
}

function CafeArchitecturalField({ alt }: { alt: string }) {
  return (
    <div className="absolute inset-0" role="img" aria-label={alt}>
      {/* Base field — warm stone with depth */}
      <div className="absolute inset-0 bg-[#e2d9cc]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_22%_18%,#f8f3eb_0%,transparent_48%),radial-gradient(ellipse_at_88%_82%,#cfc4b4_0%,transparent_52%)]" />

      {/* Primary light plane */}
      <div
        className={cn(
          "cafe-plane absolute inset-y-[8%] left-[6%] w-[54%]",
          "bg-[#f4efe7]/90",
          "shadow-[inset_0_0_80px_rgba(255,255,255,0.35)]",
        )}
      />

      {/* Glass / reflection plane */}
      <div
        className={cn(
          "cafe-plane cafe-plane-delayed absolute inset-y-[14%] left-[28%] w-[42%] -rotate-[2deg]",
          "border border-background/60 bg-background/25",
          "shadow-[inset_1px_0_0_rgba(255,255,255,0.35)]",
        )}
      />

      {/* Second translucent layer */}
      <div
        className={cn(
          "cafe-plane cafe-plane-slow absolute right-[8%] top-[10%] h-[56%] w-[40%] rotate-[2deg]",
          "border border-background/40 bg-[#f7f2ea]/40",
        )}
      />

      {/* Horizontal reflection band */}
      <div className="absolute inset-x-[8%] top-[42%] h-[14%] bg-gradient-to-r from-[#f7f2ea]/10 via-[#f7f2ea]/55 to-transparent" />

      {/* Charcoal architectural mass — threshold / evening weight */}
      <div className="absolute bottom-0 right-0 h-[46%] w-[44%] bg-surface-dark" />
      <div className="absolute bottom-[46%] right-0 h-px w-[44%] bg-background/30" />
      <div className="absolute bottom-0 right-[44%] h-[46%] w-px bg-background/15" />

      {/* Interior aperture on dark mass */}
      <div className="absolute bottom-[16%] right-[12%] h-[18%] w-[22%] border border-background/20 bg-background/5" />

      {/* Structural lines */}
      <div className="absolute inset-y-[8%] left-[34%] w-px bg-foreground/12" />
      <div className="absolute left-[6%] right-[8%] top-[26%] h-px bg-foreground/[0.08]" />
      <div className="absolute bottom-[28%] left-[10%] h-px w-12 bg-accent/55" />

      {/* Soft grain for material presence */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--foreground) 14%, transparent) 1px, transparent 0)",
          backgroundSize: "13px 13px",
        }}
      />

      {/* Hover lift on abstract field */}
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cafe-media:bg-background/5 motion-reduce:transition-none" />
    </div>
  );
}
