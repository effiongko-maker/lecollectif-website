"use client";

import { useMemo, useState } from "react";
import { RequestSubmit } from "@/components/booking/RequestSubmit";
import { FlowNav } from "@/components/booking/FlowNav";
import { FlowShell } from "@/components/booking/FlowShell";
import { OrderSummary } from "@/components/booking/OrderSummary";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { TextLink } from "@/components/ui/Link";
import { flowIntros, hostEventTypes, hostFlowSteps } from "@/lib/flows";
import { conversionActions } from "@/lib/site";

type HostStep = (typeof hostFlowSteps)[number]["id"];

type HostState = {
  eventType: string;
  eventTitle: string;
  date: string;
  time: string;
  guests: string;
  requirements: string;
  fullName: string;
  email: string;
  phone: string;
};

const initialState: HostState = {
  eventType: "",
  eventTitle: "",
  date: "",
  time: "",
  guests: "",
  requirements: "",
  fullName: "",
  email: "",
  phone: "",
};

/**
 * Host an Event — quotation-led request flow.
 * No fixed pricing or checkout; payment follows review & approval later.
 */
export function HostFlow() {
  const intro = flowIntros.host;
  const [step, setStep] = useState<HostStep>("event");
  const [data, setData] = useState<HostState>(initialState);

  const eventTypeLabel =
    hostEventTypes.find((t) => t.value === data.eventType)?.label ?? "—";

  const summaryRows = useMemo(
    () => [
      { label: "Type", value: eventTypeLabel },
      { label: "Title", value: data.eventTitle || "—" },
      { label: "Date", value: data.date || "—" },
      { label: "Time", value: data.time || "—" },
      { label: "Guests", value: data.guests || "—" },
      { label: "Name", value: data.fullName || "—" },
      { label: "Email", value: data.email || "—" },
      { label: "Phone", value: data.phone || "—" },
    ],
    [data, eventTypeLabel],
  );

  function update<K extends keyof HostState>(key: K, value: HostState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <FlowShell
      eyebrow={intro.eyebrow}
      headline={intro.headline}
      supporting={intro.supporting}
      steps={hostFlowSteps}
      currentStepId={step}
    >
      {step === "event" ? (
        <div>
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Event details
          </h2>
          <div className="mt-6 flex flex-col gap-8">
            <Field label="Event type" htmlFor="host-type">
              <Select
                id="host-type"
                value={data.eventType}
                onChange={(e) => update("eventType", e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a type
                </option>
                {hostEventTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Working title" htmlFor="host-title">
              <Input
                id="host-title"
                value={data.eventTitle}
                onChange={(e) => update("eventTitle", e.target.value)}
                placeholder="What are you planning?"
                required
              />
            </Field>
          </div>
          <FlowNav
            onContinue={() => setStep("schedule")}
            continueDisabled={!data.eventType || !data.eventTitle}
          />
        </div>
      ) : null}

      {step === "schedule" ? (
        <div>
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Preferred date & time
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Field label="Date" htmlFor="host-date">
              <Input
                id="host-date"
                type="date"
                value={data.date}
                onChange={(e) => update("date", e.target.value)}
                required
              />
            </Field>
            <Field label="Time" htmlFor="host-time">
              <Input
                id="host-time"
                type="time"
                value={data.time}
                onChange={(e) => update("time", e.target.value)}
                required
              />
            </Field>
          </div>
          <FlowNav
            onBack={() => setStep("event")}
            onContinue={() => setStep("guests")}
            continueDisabled={!data.date || !data.time}
          />
        </div>
      ) : null}

      {step === "guests" ? (
        <div>
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Number of guests
          </h2>
          <div className="mt-6 max-w-sm">
            <Field label="Guests" htmlFor="host-guests">
              <Input
                id="host-guests"
                type="number"
                min={1}
                step={1}
                inputMode="numeric"
                value={data.guests}
                onChange={(e) => update("guests", e.target.value)}
                required
              />
            </Field>
          </div>
          <FlowNav
            onBack={() => setStep("schedule")}
            onContinue={() => setStep("requirements")}
            continueDisabled={!data.guests || Number(data.guests) < 1}
          />
        </div>
      ) : null}

      {step === "requirements" ? (
        <div>
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Requirements
          </h2>
          <p className="mt-3 text-body text-foreground-muted">
            Share anything that will help us prepare a thoughtful quotation —
            atmosphere, timing, equipment, or hospitality needs.
          </p>
          <div className="mt-6">
            <Field label="Requirements" htmlFor="host-requirements">
              <Textarea
                id="host-requirements"
                value={data.requirements}
                onChange={(e) => update("requirements", e.target.value)}
                rows={5}
                placeholder="Tell us what the gathering needs..."
                required
              />
            </Field>
          </div>
          <FlowNav
            onBack={() => setStep("guests")}
            onContinue={() => setStep("details")}
            continueDisabled={!data.requirements.trim()}
          />
        </div>
      ) : null}

      {step === "details" ? (
        <div>
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Contact details
          </h2>
          <div className="mt-6 flex flex-col gap-8">
            <Field label="Full name" htmlFor="host-name">
              <Input
                id="host-name"
                value={data.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                autoComplete="name"
                required
              />
            </Field>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Field label="Email address" htmlFor="host-email">
                <Input
                  id="host-email"
                  type="email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  autoComplete="email"
                  required
                />
              </Field>
              <Field label="Phone number" htmlFor="host-phone">
                <Input
                  id="host-phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  autoComplete="tel"
                  required
                />
              </Field>
            </div>
          </div>
          <FlowNav
            onBack={() => setStep("requirements")}
            onContinue={() => setStep("review")}
            continueDisabled={
              !data.fullName || !data.email || !data.phone
            }
          />
        </div>
      ) : null}

      {step === "review" ? (
        <div>
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Review request
          </h2>
          <p className="mt-3 text-body text-foreground-muted">
            Hosted events are quotation-led. There is no fixed price at this
            stage — we review your request before any payment.
          </p>
          <div className="mt-6 flex flex-col gap-6">
            <OrderSummary title="Request summary" rows={summaryRows} />
            {data.requirements ? (
              <div className="border border-border px-5 py-6 md:px-6">
                <p className="text-eyebrow text-ink-subtle">Requirements</p>
                <p className="mt-4 text-body text-foreground-muted">
                  {data.requirements}
                </p>
              </div>
            ) : null}
          </div>
          <RequestSubmit type="event" details={data} />
        </div>
      ) : null}

      {step === "submitted" ? (
        <div className="border-y border-border py-10 md:py-12">
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Request received.
          </h2>
          <p className="mt-4 max-w-md text-body-lg text-foreground-muted">
            Thank you. We&apos;ll review your gathering and follow up with a
            quotation. Payment is only arranged after approval.
          </p>

          <ol className="mt-8 flex flex-col gap-3 border border-border px-5 py-6 text-body text-foreground-muted md:px-6">
            <li>01 — Quotation</li>
            <li>02 — Approval</li>
            <li>03 — Payment</li>
          </ol>

          <div className="mt-6">
            <OrderSummary title="Request summary" rows={summaryRows} />
          </div>

          <div className="mt-8">
            <TextLink
              href={conversionActions.enquire.href}
              withArrow
              className="text-button tracking-[0.1em]"
            >
              Ask a question
            </TextLink>
          </div>
        </div>
      ) : null}
    </FlowShell>
  );
}
