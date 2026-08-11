import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Rule } from "@/components/ui/Rule";
import type { FlowStepMeta } from "@/lib/flows";
import { cn } from "@/lib/utils";

type FlowShellProps = {
  eyebrow: string;
  headline: string;
  supporting?: string;
  steps: FlowStepMeta[];
  currentStepId: string;
  children: ReactNode;
  className?: string;
};

/**
 * Editorial shell for multi-step transactional journeys.
 */
export function FlowShell({
  eyebrow,
  headline,
  supporting,
  steps,
  currentStepId,
  children,
  className,
}: FlowShellProps) {
  const currentIndex = Math.max(
    0,
    steps.findIndex((step) => step.id === currentStepId),
  );

  return (
    <section className={cn("bg-background", className)}>
      <Container width="wide" className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-eyebrow text-ink-subtle">{eyebrow}</p>
          <Rule short className="mt-4" />
          <h1 className="mt-6 font-display text-display-lg font-normal tracking-[-0.02em] text-foreground">
            {headline}
          </h1>
          {supporting ? (
            <p className="mt-4 max-w-lg text-body-lg text-foreground-muted">
              {supporting}
            </p>
          ) : null}

          <ol
            className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-y border-border py-4"
            aria-label="Progress"
          >
            {steps.map((step, index) => {
              const state =
                index < currentIndex
                  ? "complete"
                  : index === currentIndex
                    ? "current"
                    : "upcoming";

              return (
                <li
                  key={step.id}
                  className={cn(
                    "text-eyebrow",
                    state === "current" && "text-foreground",
                    state === "complete" && "text-foreground-muted",
                    state === "upcoming" && "text-ink-subtle",
                  )}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  <span className="mr-1.5 tabular-nums opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step.label}
                </li>
              );
            })}
          </ol>

          <div className="mt-10 md:mt-12">{children}</div>
        </div>
      </Container>
    </section>
  );
}
