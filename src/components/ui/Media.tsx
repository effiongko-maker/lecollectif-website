import Image from "next/image";
import { cn } from "@/lib/utils";

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[21/9]",
  hero: "aspect-[16/10]",
  full: "aspect-auto min-h-[55vh] md:min-h-[78vh]",
} as const;

export type MediaAspect = keyof typeof aspectMap;

type MediaBaseProps = {
  alt: string;
  aspect?: MediaAspect;
  className?: string;
  frameClassName?: string;
  placeholderLabel?: string;
};

type ImageMediaProps = MediaBaseProps & {
  kind?: "image";
  src?: string;
  priority?: boolean;
  sizes?: string;
};

type VideoMediaProps = MediaBaseProps & {
  kind: "video";
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
};

export type MediaProps = ImageMediaProps | VideoMediaProps;

/**
 * Immersive media frame for photography, renders, conceptual imagery, or video.
 * Swap assets later without restructuring surrounding layout.
 */
export function Media(props: MediaProps) {
  const {
    alt,
    aspect = "video",
    className,
    frameClassName,
    placeholderLabel = "Visual forthcoming",
  } = props;

  const isVideo = props.kind === "video";
  const imageSrc = !isVideo ? props.src : undefined;

  return (
    <figure
      className={cn(
        "group relative w-full overflow-hidden bg-background-secondary",
        aspectMap[aspect],
        frameClassName,
      )}
    >
      {isVideo ? (
        <video
          className={cn(
            "absolute inset-0 h-full w-full object-cover media-atmospheric",
            className,
          )}
          src={props.src}
          poster={props.poster}
          autoPlay={props.autoPlay}
          muted={props.muted ?? true}
          loop={props.loop}
          controls={props.controls}
          playsInline
          aria-label={alt}
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority={"priority" in props ? props.priority : undefined}
          sizes={
            "sizes" in props && props.sizes
              ? props.sizes
              : "(min-width: 1024px) 80vw, 100vw"
          }
          className={cn(
            "object-cover media-atmospheric media-reveal",
            className,
          )}
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-start justify-end bg-stone p-6 md:p-10",
            className,
          )}
          role="img"
          aria-label={alt}
        >
          <span className="mb-4 block h-px w-10 bg-foreground/20" aria-hidden />
          <span className="text-eyebrow text-ink-subtle">{placeholderLabel}</span>
        </div>
      )}
    </figure>
  );
}

/** Edge-to-edge visual plane for large atmospheric sections. */
export function FullBleedMedia(props: MediaProps) {
  const { frameClassName, aspect = "hero", ...rest } = props;

  if (rest.kind === "video") {
    return (
      <Media
        {...rest}
        aspect={aspect}
        frameClassName={cn("w-screen max-w-[100vw] rounded-none", frameClassName)}
      />
    );
  }

  return (
    <Media
      {...rest}
      aspect={aspect}
      sizes="100vw"
      frameClassName={cn("w-screen max-w-[100vw] rounded-none", frameClassName)}
    />
  );
}
