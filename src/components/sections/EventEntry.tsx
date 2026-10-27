import { TextLink } from "@/components/ui/Link";
import {
  getEventConversionAction,
  type CollectifEvent,
} from "@/lib/events";
import { cn } from "@/lib/utils";

type EventEntryProps = {
  event: CollectifEvent;
  className?: string;
  /** Quieter treatment for archive listings */
  muted?: boolean;
};

/**
 * Editorial event entry — date, title, meta and conversion CTA.
 * Not a generic booking card.
 */
export function EventEntry({ event, className, muted = false }: EventEntryProps) {
  const cta = getEventConversionAction(event);

  return (
    <article
      id={event.slug}
      className={cn(
        "group/event grid grid-cols-1 gap-5 border-t border-border py-8 sm:py-10",
        "md:grid-cols-[minmax(0,9.5rem)_minmax(0,1fr)_auto] md:items-start md:gap-8 lg:gap-12",
        muted && "opacity-90",
        className,
      )}
    >
      <div className="flex flex-col gap-1 md:pt-1">
        <time className="text-body-sm text-foreground">
          {event.dateLabel}
        </time>
        {event.timeLabel ? (
          <p className="text-small text-ink-subtle">{event.timeLabel}</p>
        ) : null}
      </div>

      <div className="min-w-0 max-w-xl">
        <p className="text-eyebrow text-ink-subtle">{event.categoryLabel}</p>
        <h3 className="mt-3 text-card text-foreground">
          {event.title}
        </h3>
        <p className="mt-3 text-body text-foreground-muted">{event.summary}</p>
        <p className="mt-4 text-small text-ink-subtle">{event.location}</p>
      </div>

      <div className="md:pt-1 md:justify-self-end">
        <TextLink
          href={cta.href}
          withArrow
          className="text-button"
        >
          {cta.label}
        </TextLink>
      </div>
    </article>
  );
}
