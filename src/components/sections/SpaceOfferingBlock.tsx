import Link from "next/link";
import { ButtonLink } from "@/components/ui/Link";
import { SpaceMedia } from "@/components/sections/SpaceMedia";
import { cn } from "@/lib/utils";
import {
  getSpaceConversionAction,
  type SpaceOffering,
} from "@/lib/spaces";

type SpaceOfferingBlockProps = {
  offering: SpaceOffering;
  className?: string;
  /** Visual prominence for the primary offering */
  featured?: boolean;
};

/**
 * Editorial space offering — open composition, not a SaaS card.
 * CTA mode is resolved from offering data + conversionActions.
 */
export function SpaceOfferingBlock({
  offering,
  className,
  featured = false,
}: SpaceOfferingBlockProps) {
  const cta = getSpaceConversionAction(offering);
  const headingId = `space-${offering.id}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className={cn(
        "group relative",
        featured
          ? "flex flex-col gap-7 md:gap-8 lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-12 xl:gap-16"
          : "flex flex-col gap-5 md:gap-6",
        className,
      )}
    >
      <Link
        href={offering.href}
        className="relative block overflow-hidden focus-visible:outline-foreground"
        aria-labelledby={headingId}
      >
        <SpaceMedia
          type={offering.type}
          alt={offering.media.alt}
          src={offering.media.src}
          aspect={offering.media.aspect}
          placeholderLabel={offering.media.placeholderLabel}
          sizes={
            featured
              ? "(min-width: 1024px) 70vw, 100vw"
              : "(min-width: 1024px) 40vw, 100vw"
          }
        />
        <span
          aria-hidden
          className="pointer-events-none absolute left-5 top-5 h-px w-0 bg-accent/60 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-10 motion-reduce:transition-none md:left-7 md:top-7"
        />
      </Link>

      <div
        className={cn(
          "flex flex-col",
          featured ? "max-w-xl gap-5 md:gap-6 lg:pb-2" : "max-w-md gap-4",
        )}
      >
        <div className="transition-editorial group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none">
          <h3
            id={headingId}
            className={cn(
              "font-display font-normal tracking-[-0.02em] text-foreground",
              featured ? "text-h2" : "text-h3",
            )}
          >
            <Link
              href={offering.href}
              className="transition-editorial hover:opacity-70"
            >
              {offering.name}
            </Link>
          </h3>
        </div>

        <p
          className={cn(
            "text-foreground-muted",
            featured ? "text-body-lg" : "text-body",
          )}
        >
          {offering.description}
        </p>

        <div className="pt-1">
          <ButtonLink
            href={cta.href}
            variant={offering.ctaMode === "book" ? "primary" : "secondary"}
            size="sm"
            className="min-h-11"
            aria-label={`${cta.label} — ${offering.name}`}
          >
            {cta.label}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
