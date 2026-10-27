"use client";

import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import { RequestSubmit } from "@/components/booking/RequestSubmit";
import { FlowNav } from "@/components/booking/FlowNav";
import { FlowShell } from "@/components/booking/FlowShell";
import { OrderSummary } from "@/components/booking/OrderSummary";
import { PaymentBoundaryStep } from "@/components/booking/PaymentBoundary";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { TextLink } from "@/components/ui/Link";
import {
  bookDurationOptions,
  bookFlowSteps,
  bookSpaceOptions,
  flowIntros,
} from "@/lib/flows";
import { createPaymentBoundary } from "@/lib/payments/boundary";
import { conversionActions } from "@/lib/site";
import { cn } from "@/lib/utils";

type BookStep = (typeof bookFlowSteps)[number]["id"];

type BookState = {
  spaceId: string;
  date: string;
  startTime: string;
  duration: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
};

const initialState: BookState = {
  spaceId: "",
  date: "",
  startTime: "",
  duration: "",
  fullName: "",
  email: "",
  phone: "",
  notes: "",
};

export function BookFlow({ presetSpace = "" }: { presetSpace?: string }) {
  const intro = flowIntros.book;
  const spaceButtons = useRef<(HTMLButtonElement | null)[]>([]);

  const [step, setStep] = useState<BookStep>(
    presetSpace && bookSpaceOptions.some((s) => s.id === presetSpace)
      ? "date"
      : "space",
  );
  const [data, setData] = useState<BookState>({
    ...initialState,
    spaceId:
      presetSpace && bookSpaceOptions.some((s) => s.id === presetSpace)
        ? presetSpace
        : "",
  });

  const spaceName =
    bookSpaceOptions.find((s) => s.id === data.spaceId)?.name ?? "—";
  const durationLabel =
    bookDurationOptions.find((d) => d.value === data.duration)?.label ?? "—";

  const summaryRows = useMemo(
    () => [
      { label: "Space", value: spaceName },
      { label: "Date", value: data.date || "—" },
      { label: "Start time", value: data.startTime || "—" },
      { label: "Duration", value: durationLabel },
      { label: "Name", value: data.fullName || "—" },
      { label: "Email", value: data.email || "—" },
      { label: "Phone", value: data.phone || "—" },
    ],
    [data, durationLabel, spaceName],
  );

  const boundary = createPaymentBoundary("book");

  function update<K extends keyof BookState>(key: K, value: BookState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleSpaceKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = bookSpaceOptions.length - 1;
    let next: number;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown": next = (index + 1) % bookSpaceOptions.length; break;
      case "ArrowLeft":
      case "ArrowUp": next = (index + last) % bookSpaceOptions.length; break;
      case "Home": next = 0; break;
      case "End": next = last; break;
      default: return;
    }
    event.preventDefault();
    update("spaceId", bookSpaceOptions[next].id);
    spaceButtons.current[next]?.focus();
  }

  function goTo(next: BookStep) {
    setStep(next);
  }

  return (
    <FlowShell
      eyebrow={intro.eyebrow}
      headline={intro.headline}
      supporting={intro.supporting}
      steps={bookFlowSteps.filter(s => s.id !== "payment" && s.id !== "confirmation")}
      currentStepId={step}
    >
      {step === "space" ? (
        <div>
          <h2 className="text-ui-title text-foreground">
            Choose your space.
          </h2>
          <p className="mt-3 max-w-md text-body text-foreground-muted">
            Start by choosing the setting that best fits what you have in mind.
          </p>

          <fieldset className="mt-8">
            <legend className="sr-only">Available spaces</legend>
            <div
              className="flex flex-col gap-3"
              role="radiogroup"
              aria-label="Choose a space"
            >
              {bookSpaceOptions.map((space, index) => {
                const selected = data.spaceId === space.id;
                return (
                  <button
                      key={space.id}
                      type="button"
                      role="radio"
                      ref={(node) => { spaceButtons.current[index] = node; }}
                      tabIndex={selected || (!data.spaceId && index === 0) ? 0 : -1}
                      aria-checked={selected}
                      onKeyDown={(event) => handleSpaceKeyDown(event, index)}
                      onClick={() => update("spaceId", space.id)}
                      className={cn(
                        "group flex w-full items-start gap-4 border px-5 py-5 text-left transition-editorial md:px-6 md:py-6",
                        selected
                          ? "border-foreground/55 bg-surface"
                          : "border-border bg-transparent hover:border-foreground/30 hover:bg-background-secondary/50",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-editorial",
                          selected
                            ? "border-foreground bg-foreground"
                            : "border-foreground/35 bg-transparent group-hover:border-foreground/55",
                        )}
                      >
                        {selected ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-background" />
                        ) : null}
                      </span>

                      <span className="flex min-w-0 flex-1 flex-col gap-1">
                        <span className="flex items-baseline justify-between gap-4">
                          <span className="text-card text-foreground">
                            {space.name}
                          </span>
                          {selected ? (
                            <span className="shrink-0 text-eyebrow text-ink-subtle">
                              Selected
                            </span>
                          ) : null}
                        </span>
                        <span className="text-body text-foreground-muted">
                          {space.description}
                        </span>
                      </span>
                    </button>
                );
              })}
            </div>
          </fieldset>

          <FlowNav
            onContinue={() => goTo("date")}
            continueDisabled={!data.spaceId}
          />
        </div>
      ) : null}

      {step === "date" ? (
        <div>
          <h2 className="text-ui-title text-foreground">
            Preferred date
          </h2>
          <div className="mt-6 max-w-sm">
            <Field label="Date" htmlFor="book-date">
              <Input
                id="book-date"
                type="date"
                value={data.date}
                onChange={(e) => update("date", e.target.value)}
                required
              />
            </Field>
          </div>
          <FlowNav
            onBack={() => goTo("space")}
            onContinue={() => goTo("time")}
            continueDisabled={!data.date}
          />
        </div>
      ) : null}

      {step === "time" ? (
        <div>
          <h2 className="text-ui-title text-foreground">
            Time & duration
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Field label="Start time" htmlFor="book-time">
              <Input
                id="book-time"
                type="time"
                value={data.startTime}
                onChange={(e) => update("startTime", e.target.value)}
                required
              />
            </Field>
            <Field label="Duration" htmlFor="book-duration">
              <Select
                id="book-duration"
                value={data.duration}
                onChange={(e) => update("duration", e.target.value)}
                required
              >
                <option value="" disabled>
                  Select duration
                </option>
                {bookDurationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Field>
          </div>
          <FlowNav
            onBack={() => goTo("date")}
            onContinue={() => goTo("details")}
            continueDisabled={!data.startTime || !data.duration}
          />
        </div>
      ) : null}

      {step === "details" ? (
        <div>
          <h2 className="text-ui-title text-foreground">
            Booking details
          </h2>
          <div className="mt-6 flex flex-col gap-8">
            <Field label="Full name" htmlFor="book-name">
              <Input
                id="book-name"
                value={data.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                autoComplete="name"
                required
              />
            </Field>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Field label="Email address" htmlFor="book-email">
                <Input
                  id="book-email"
                  type="email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  autoComplete="email"
                  required
                />
              </Field>
              <Field label="Phone number" htmlFor="book-phone">
                <Input
                  id="book-phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  autoComplete="tel"
                  required
                />
              </Field>
            </div>
            <Field label="Notes (optional)" htmlFor="book-notes">
              <Textarea
                id="book-notes"
                value={data.notes}
                onChange={(e) => update("notes", e.target.value)}
                rows={4}
                placeholder="Anything we should know..."
              />
            </Field>
          </div>
          <FlowNav
            onBack={() => goTo("time")}
            onContinue={() => goTo("review")}
            continueDisabled={
              !data.fullName || !data.email || !data.phone
            }
          />
        </div>
      ) : null}

      {step === "review" ? (
        <div>
          <h2 className="text-ui-title text-foreground">
            Review booking
          </h2>
          <p className="mt-3 text-body text-foreground-muted">
            Review your details, then send a booking request.
          </p>
          <div className="mt-6">
            <OrderSummary rows={summaryRows} />
          </div>
          <RequestSubmit type="workspace" details={data} />
        </div>
      ) : null}

      {step === "payment" ? (
        <PaymentBoundaryStep
          boundary={boundary}
          summaryRows={summaryRows}
          onBack={() => goTo("review")}
          onContinue={() => goTo("confirmation")}
        />
      ) : null}

      {step === "confirmation" ? (
        <div className="border-y border-border py-10 md:py-12">
          <h2 className="text-ui-title text-foreground">
            Your booking is ready for payment.
          </h2>
          <p className="mt-4 max-w-md text-body-lg text-foreground-muted">
            Your details have been prepared. Secure payment will complete this
            booking once a payment provider is connected.
          </p>
          <div className="mt-6">
            <OrderSummary rows={summaryRows} />
          </div>
          <div className="mt-8">
            <TextLink
              href={conversionActions.enquire.href}
              withArrow
              className="text-button"
            >
              Speak with us instead
            </TextLink>
          </div>
        </div>
      ) : null}
    </FlowShell>
  );
}
