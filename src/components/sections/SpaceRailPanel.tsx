import Link from "next/link";
import { SpaceMedia } from "@/components/sections/SpaceMedia";
import { cn } from "@/lib/utils";
import type { SpaceOffering } from "@/lib/spaces";

type SpaceRailPanelProps = {
  offering: SpaceOffering;
  className?: string;
};

/**
 * Homepage destination panel — teases a space without long product copy.
 */
export function SpaceRailPanel({
  offering,
  className,
}: SpaceRailPanelProps) {
  const headingId = `space-rail-${offering.id}-heading`;

  return (
    <article
      className={cn(
        "group relative w-full snap-center",
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
            aspect="hero"
            placeholderLabel={offering.media.placeholderLabel}
            showPlaceholderLabel={false}
            objectPosition={offering.media.objectPosition}
            sizes="(min-width: 1472px) 440px, (min-width: 768px) 30vw, 91vw"
          />

          <span
            aria-hidden
            className="pointer-events-none absolute left-4 top-4 h-px w-0 bg-accent/65 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-9 group-focus-visible:w-9 motion-reduce:transition-none md:left-5 md:top-5"
          />
        </div>

        <div className="flex flex-col gap-2 transition-editorial group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none">
          <p className="text-eyebrow text-ink-subtle">{offering.index}</p>

          <div className="flex min-h-[2lh] items-baseline justify-between gap-3 lg:min-h-[1lh]">
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
