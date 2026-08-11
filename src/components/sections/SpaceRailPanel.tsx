import Link from "next/link";
import { SpaceMedia } from "@/components/sections/SpaceMedia";
import { cn } from "@/lib/utils";
import type { SpaceOffering } from "@/lib/spaces";

type SpaceRailPanelProps = {
  offering: SpaceOffering;
  className?: string;
  /** Subtle vertical offset for editorial rhythm */
  offset?: "none" | "up" | "down";
};

/**
 * Homepage destination panel — teases a space without long product copy.
 */
export function SpaceRailPanel({
  offering,
  className,
  offset = "none",
}: SpaceRailPanelProps) {
  const headingId = `space-rail-${offering.id}-heading`;

  return (
    <article
      className={cn(
        "group relative min-w-[78%] snap-center sm:min-w-[58%] md:min-w-0",
        offset === "up" && "md:mt-0 lg:-mt-5",
        offset === "down" && "md:mt-6 lg:mt-10",
        className,
      )}
    >
      <Link
        href={offering.href}
        className="relative flex flex-col gap-4 focus-visible:outline-foreground md:gap-5"
        aria-labelledby={headingId}
      >
        <div className="relative overflow-hidden">
          <SpaceMedia
            type={offering.type}
            alt={offering.media.alt}
            src={offering.media.src}
            aspect="portrait"
            placeholderLabel={offering.media.placeholderLabel}
            showPlaceholderLabel={false}
            objectPosition={offering.media.objectPosition}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 55vw, 80vw"
          />

          <span
            aria-hidden
            className="pointer-events-none absolute left-4 top-4 h-px w-0 bg-accent/65 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-9 group-focus-visible:w-9 motion-reduce:transition-none md:left-5 md:top-5"
          />
        </div>

        <div className="flex flex-col gap-2 transition-editorial group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none">
          <p className="text-eyebrow text-ink-subtle">{offering.index}</p>

          <div className="flex items-baseline justify-between gap-3">
            <h3
              id={headingId}
              className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground"
            >
              {offering.name}
            </h3>
            <span
              aria-hidden
              className="translate-x-0 text-nav text-foreground/45 transition-editorial group-hover:translate-x-1 group-hover:text-foreground group-focus-visible:translate-x-1 group-focus-visible:text-foreground motion-reduce:transform-none"
            >
              →
            </span>
          </div>

          <p className="text-small text-foreground-muted">{offering.teaser}</p>
        </div>
      </Link>
    </article>
  );
}
