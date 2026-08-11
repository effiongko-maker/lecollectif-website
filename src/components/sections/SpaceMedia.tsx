import Image from "next/image";
import { cn } from "@/lib/utils";
import type { SpaceOfferingType } from "@/lib/spaces";
import type { MediaAspect } from "@/components/ui/Media";

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[21/9]",
  hero: "aspect-[16/10]",
  full: "aspect-auto min-h-[55vh] md:min-h-[78vh]",
} as const;

type SpaceMediaProps = {
  type: SpaceOfferingType;
  alt: string;
  src?: string;
  aspect: MediaAspect;
  placeholderLabel: string;
  /** Hide corner label on architectural placeholders (e.g. homepage rail) */
  showPlaceholderLabel?: boolean;
  objectPosition?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Intentional architectural media for space offerings.
 * Swap `src` for photography/renders later without layout changes.
 */
export function SpaceMedia({
  type,
  alt,
  src,
  aspect,
  placeholderLabel,
  showPlaceholderLabel = true,
  objectPosition = "center center",
  sizes = "(min-width: 1024px) 60vw, 100vw",
  className,
  priority = false,
}: SpaceMediaProps) {
  return (
    <figure
      className={cn(
        "group/media relative w-full overflow-hidden bg-background-secondary",
        aspectMap[aspect],
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectPosition }}
          className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/media:scale-100"
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/media:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/media:scale-100"
          role="img"
          aria-label={alt}
        >
          <SpacePlaceholder
            type={type}
            label={placeholderLabel}
            showLabel={showPlaceholderLabel}
          />
        </div>
      )}
    </figure>
  );
}

function SpacePlaceholder({
  type,
  label,
  showLabel,
}: {
  type: SpaceOfferingType;
  label: string;
  showLabel: boolean;
}) {
  return (
    <div className="absolute inset-0 bg-stone">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--foreground) 10%, transparent) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      {type === "coworking" ? (
        <>
          <div className="absolute inset-y-[12%] left-[8%] w-[44%] bg-surface" />
          <div className="absolute inset-y-[18%] right-[10%] w-[34%] bg-surface-dark" />
          <div className="absolute bottom-[28%] left-[8%] right-[10%] h-px bg-foreground/15" />
          <div className="absolute left-[30%] top-[12%] bottom-[28%] w-px bg-foreground/10" />
          <div className="absolute left-[14%] top-[22%] h-px w-12 bg-accent/50" />
        </>
      ) : null}

      {type === "private_office" ? (
        <>
          <div className="absolute inset-[14%_18%_22%_18%] bg-surface" />
          <div className="absolute inset-[22%_26%_30%_26%] border border-foreground/12" />
          <div className="absolute left-[18%] right-[18%] top-[14%] h-px bg-foreground/10" />
          <div className="absolute bottom-[26%] left-[26%] h-px w-8 bg-accent/45" />
        </>
      ) : null}

      {type === "meeting_room" ? (
        <>
          <div className="absolute inset-y-[16%] left-[10%] right-[10%] bg-background-secondary" />
          <div className="absolute inset-y-[28%] left-[18%] right-[18%] bg-surface-dark/90" />
          <div className="absolute left-[10%] right-[10%] top-[40%] h-px bg-background/20" />
          <div className="absolute bottom-[22%] right-[18%] h-px w-10 bg-accent/45" />
        </>
      ) : null}

      {showLabel ? (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
          <span className="text-eyebrow text-ink-subtle">{label}</span>
        </div>
      ) : null}
    </div>
  );
}
