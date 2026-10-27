import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ButtonLink, TextLink } from "@/components/ui/Link";
import { Rule } from "@/components/ui/Rule";
import {
  collectifEvents,
  getEventBySlug,
  getEventConversionAction,
} from "@/lib/events";
import { siteConfig } from "@/lib/site";

type EventDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return collectifEvents.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return { title: "Event" };
  }

  return {
    title: event.title,
    description: event.summary,
  };
}

/**
 * Lightweight editorial event detail — wires View Event CTAs
 * into the shared conversion architecture without inventing payments.
 */
export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();

  const cta = getEventConversionAction(
    event.ctaMode === "view"
      ? { ...event, ctaMode: "enquire", accessMode: "enquiry" }
      : event,
  );

  return (
    <section
      aria-labelledby="event-detail-heading"
      className="bg-background"
    >
      <div className="section-space-lg">
        <Container width="content">
          <TextLink href="/events" className="text-button">
            ← All events
          </TextLink>

          <p className="mt-10 text-eyebrow text-ink-subtle">
            {event.categoryLabel}
          </p>
          <Rule short className="mt-5" />

          <h1
            id="event-detail-heading"
            className="mt-7 text-display-lg text-foreground"
          >
            {event.title}
          </h1>

          <div className="mt-6 flex flex-col gap-2 text-body text-foreground-muted">
            <p>
              {event.dateLabel}
              {event.timeLabel ? ` · ${event.timeLabel}` : ""}
            </p>
            <p>{event.location}</p>
          </div>

          <p className="mt-8 max-w-xl text-body-lg text-foreground-muted">
            {event.summary}
          </p>

          <p className="mt-6 max-w-xl text-body text-foreground-muted">
            Part of the gathering programme at {siteConfig.name}. Further
            details are confirmed closer to the date.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <ButtonLink href={cta.href} variant="primary" size="md">
              {cta.label}
            </ButtonLink>
            <TextLink
              href="/events#upcoming"
              withArrow
              className="text-button"
            >
              Back to programme
            </TextLink>
          </div>
        </Container>
      </div>
    </section>
  );
}
