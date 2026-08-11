import { cn } from "@/lib/utils";

type HeroCompositionProps = {
  className?: string;
};

/**
 * Abstract architectural composition for the homepage hero.
 * Suggests space, light and day→evening transition without photography or logo redraw.
 */
export function HeroComposition({ className }: HeroCompositionProps) {
  return (
    <div
      className={cn(
        "relative isolate h-full w-full overflow-hidden bg-background-secondary",
        className,
      )}
      aria-hidden
    >
      {/* Soft paper texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Day plane — warm light field */}
      <div className="absolute inset-y-[8%] left-[6%] w-[52%] bg-surface" />

      {/* Transitional stone plane */}
      <div className="absolute inset-y-[18%] left-[38%] w-[28%] bg-stone" />

      {/* Evening plane — deeper architectural mass */}
      <div className="absolute inset-y-[10%] right-[5%] w-[42%] bg-surface-dark" />

      {/* Horizontal shelf / floor line */}
      <div className="absolute bottom-[22%] left-[6%] right-[5%] h-px bg-foreground/15" />

      {/* Vertical structural lines */}
      <div className="absolute inset-y-[8%] left-[28%] w-px bg-foreground/12" />
      <div className="absolute inset-y-[10%] right-[32%] w-px bg-background/20" />

      {/* Elevated light aperture */}
      <div className="absolute left-[12%] top-[16%] h-[18%] w-[22%] border border-foreground/10 bg-background/70" />

      {/* Circular geometry — restrained emblem echo, not a logo */}
      <div className="absolute right-[14%] top-[28%] aspect-square w-[38%] rounded-full border border-background/25" />
      <div className="absolute right-[20%] top-[36%] aspect-square w-[26%] rounded-full border border-background/15" />

      {/* Sparse gold micro-accent */}
      <div className="absolute bottom-[34%] left-[12%] h-px w-10 bg-accent/55" />

      {/* Quiet gathering mark on the dark plane */}
      <div className="absolute bottom-[30%] right-[16%] h-16 w-px bg-background/25" />
      <div className="absolute bottom-[30%] right-[16%] h-px w-12 bg-background/25" />
    </div>
  );
}
