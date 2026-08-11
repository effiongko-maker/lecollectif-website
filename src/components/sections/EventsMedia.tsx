import Image from "next/image";
import { cn } from "@/lib/utils";

type EventsMediaProps = {
  alt: string;
  src?: string | null;
  objectPosition?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Immersive after-hours photographic media frame.
 * Swap `src` for official event photography without layout changes.
 */
export function EventsMedia({
  alt,
  src,
  objectPosition = "center center",
  sizes = "(min-width: 1024px) 58vw, 100vw",
  priority = false,
  className,
}: EventsMediaProps) {
  return (
    <figure
      className={cn(
        "group/events-media relative w-full overflow-hidden bg-[#2a211b]",
        "aspect-[4/5] sm:aspect-[5/6]",
        // Matched to Café feature panel proportions — dark/evening counterpart
        "lg:aspect-auto lg:h-[min(58svh,32rem)] xl:h-[min(60svh,34rem)]",
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
          className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/events-media:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover/events-media:scale-100"
        />
      ) : (
        <div
          className="absolute inset-0 bg-[#2a211b]"
          role="img"
          aria-label={alt}
        />
      )}
    </figure>
  );
}
