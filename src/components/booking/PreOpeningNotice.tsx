import { Container } from "@/components/layout/Container";
import { Rule } from "@/components/ui/Rule";
import { enquirePageContent } from "@/lib/enquire";
import { preOpeningNotices } from "@/lib/pre-opening";
import { transactionalFlows } from "@/lib/transactional";
import { cn } from "@/lib/utils";

type PreOpeningNoticeProps = {
  journey: keyof typeof preOpeningNotices;
};

/** Static route presentation: no inactive form controls or contact actions. */
export function PreOpeningNotice({ journey }: PreOpeningNoticeProps) {
  const centred = journey === "enquire";
  const { eyebrow, headline } = centred
    ? enquirePageContent.intro
    : transactionalFlows[journey];
  const headingId = `${journey}-pre-opening-heading`;

  return (
    <section aria-labelledby={headingId} className="bg-background">
      <Container
        width="wide"
        className={centred ? "py-14 md:py-16 lg:py-20" : "py-12 md:py-16 lg:py-20"}
      >
        <div className={cn("mx-auto max-w-2xl", centred && "text-left md:text-center")}>
          <p className={cn("text-eyebrow text-ink-subtle", centred && "hero-reveal hero-delay-1")}>
            {eyebrow}
          </p>
          <Rule short className={cn("mt-4", centred && "hero-reveal hero-delay-1 md:mx-auto")} />
          <h1
            id={headingId}
            className={cn(
              "mt-6 text-foreground",
              centred ? "text-display-xl hero-reveal hero-delay-2" : "text-display-lg",
            )}
          >
            {headline}
          </h1>
          <p
            className={cn(
              "max-w-lg text-body-lg text-foreground-muted",
              centred ? "mt-5 hero-reveal hero-delay-3 md:mx-auto" : "mt-4",
            )}
          >
            {preOpeningNotices[journey]}
          </p>
        </div>
      </Container>
    </section>
  );
}
