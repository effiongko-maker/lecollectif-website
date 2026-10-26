"use client";

import { useMemo, useState } from "react";
import { RequestSubmit } from "@/components/booking/RequestSubmit";
import { FlowNav } from "@/components/booking/FlowNav";
import { FlowShell } from "@/components/booking/FlowShell";
import { OrderSummary } from "@/components/booking/OrderSummary";
import { PaymentBoundaryStep } from "@/components/booking/PaymentBoundary";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { TextLink } from "@/components/ui/Link";
import { flowIntros, reserveFlowSteps } from "@/lib/flows";
import { createPaymentBoundary } from "@/lib/payments/boundary";
import { conversionActions } from "@/lib/site";

type ReserveStep = (typeof reserveFlowSteps)[number]["id"];

type ReserveState = {
  date: string;
  time: string;
  guests: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
};

const initialState: ReserveState = {
  date: "",
  time: "",
  guests: "",
  fullName: "",
  email: "",
  phone: "",
  notes: "",
};

export function ReserveFlow() {
  const intro = flowIntros.reserve;
  const [step, setStep] = useState<ReserveStep>("date");
  const [data, setData] = useState<ReserveState>(initialState);

  const summaryRows = useMemo(
    () => [
      { label: "Date", value: data.date || "—" },
      { label: "Time", value: data.time || "—" },
      { label: "Guests", value: data.guests || "—" },
      { label: "Name", value: data.fullName || "—" },
      { label: "Email", value: data.email || "—" },
      { label: "Phone", value: data.phone || "—" },
    ],
    [data],
  );

  const boundary = createPaymentBoundary("reserve");

  function update<K extends keyof ReserveState>(
    key: K,
    value: ReserveState[K],
  ) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <FlowShell
      eyebrow={intro.eyebrow}
      headline={intro.headline}
      supporting={intro.supporting}
      steps={reserveFlowSteps.filter(s => s.id !== "payment" && s.id !== "confirmation")}
      currentStepId={step}
    >
      {step === "date" ? (
        <div>
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Preferred date
          </h2>
          <div className="mt-6 max-w-sm">
            <Field label="Date" htmlFor="reserve-date">
              <Input
                id="reserve-date"
                type="date"
                value={data.date}
                onChange={(e) => update("date", e.target.value)}
                required
              />
            </Field>
          </div>
          <FlowNav
            onContinue={() => setStep("time")}
            continueDisabled={!data.date}
          />
        </div>
      ) : null}

      {step === "time" ? (
        <div>
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Preferred time
          </h2>
          <div className="mt-6 max-w-sm">
            <Field label="Time" htmlFor="reserve-time">
              <Input
                id="reserve-time"
                type="time"
                value={data.time}
                onChange={(e) => update("time", e.target.value)}
                required
              />
            </Field>
          </div>
          <FlowNav
            onBack={() => setStep("date")}
            onContinue={() => setStep("guests")}
            continueDisabled={!data.time}
          />
        </div>
      ) : null}

      {step === "guests" ? (
        <div>
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Number of guests
          </h2>
          <div className="mt-6 max-w-sm">
            <Field label="Guests" htmlFor="reserve-guests">
              <Input
                id="reserve-guests"
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
            onBack={() => setStep("time")}
            onContinue={() => setStep("details")}
            continueDisabled={!data.guests || Number(data.guests) < 1}
          />
        </div>
      ) : null}

      {step === "details" ? (
        <div>
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Contact details
          </h2>
          <div className="mt-6 flex flex-col gap-8">
            <Field label="Full name" htmlFor="reserve-name">
              <Input
                id="reserve-name"
                value={data.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                autoComplete="name"
                required
              />
            </Field>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Field label="Email address" htmlFor="reserve-email">
                <Input
                  id="reserve-email"
                  type="email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  autoComplete="email"
                  required
                />
              </Field>
              <Field label="Phone number" htmlFor="reserve-phone">
                <Input
                  id="reserve-phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  autoComplete="tel"
                  required
                />
              </Field>
            </div>
            <Field label="Notes (optional)" htmlFor="reserve-notes">
              <Textarea
                id="reserve-notes"
                value={data.notes}
                onChange={(e) => update("notes", e.target.value)}
                rows={4}
                placeholder="Occasion, preferences, or anything we should know..."
              />
            </Field>
          </div>
          <FlowNav
            onBack={() => setStep("guests")}
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
            Review reservation
          </h2>
          <p className="mt-3 text-body text-foreground-muted">
            Review your details, then send a reservation request.
          </p>
          <div className="mt-6">
            <OrderSummary title="Reservation summary" rows={summaryRows} />
          </div>
          <RequestSubmit type="reservation" details={data} />
        </div>
      ) : null}

      {step === "payment" ? (
        <PaymentBoundaryStep
          boundary={boundary}
          summaryRows={summaryRows}
          onBack={() => setStep("review")}
          onContinue={() => setStep("confirmation")}
        />
      ) : null}

      {step === "confirmation" ? (
        <div className="border-y border-border py-10 md:py-12">
          <h2 className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
            Your reservation is ready for payment.
          </h2>
          <p className="mt-4 max-w-md text-body-lg text-foreground-muted">
            Your table request has been prepared. A deposit or payment step will
            complete this reservation once a payment provider is connected.
          </p>
          <div className="mt-6">
            <OrderSummary title="Reservation summary" rows={summaryRows} />
          </div>
          <div className="mt-8">
            <TextLink
              href={conversionActions.enquire.href}
              withArrow
              className="text-button tracking-[0.1em]"
            >
              Speak with us instead
            </TextLink>
          </div>
        </div>
      ) : null}
    </FlowShell>
  );
}
