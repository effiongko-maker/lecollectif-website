"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { enquirePageContent, enquireTopics } from "@/lib/enquire";
import { cn } from "@/lib/utils";

type EnquireFormProps = {
  className?: string;
};

/**
 * Editorial enquiry form — interactions only; no backend submission yet.
 */
export function EnquireForm({ className }: EnquireFormProps) {
  const formId = useId();
  const { fields, submitLabel, reassurance, received } = enquirePageContent.form;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "border-y border-border py-12 text-left md:py-14 md:text-center",
          className,
        )}
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-h3 font-normal tracking-[-0.02em] text-foreground">
          Enquiry received.
        </p>
        <p className="mt-4 text-body-lg text-foreground-muted">{received}</p>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      noValidate={false}
      className={cn("flex flex-col gap-8 md:gap-9", className)}
    >
      <Field label={fields.topic.label} htmlFor={fields.topic.id}>
        <Select id={fields.topic.id} name="topic" required defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {enquireTopics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </Select>
      </Field>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-9">
        <Field label={fields.date.label} htmlFor={fields.date.id}>
          <Input
            id={fields.date.id}
            name="date"
            type="date"
            required
            autoComplete="off"
          />
        </Field>

        <Field label={fields.time.label} htmlFor={fields.time.id}>
          <Input
            id={fields.time.id}
            name="time"
            type="time"
            required
            autoComplete="off"
          />
        </Field>
      </div>

      <Field label={fields.people.label} htmlFor={fields.people.id}>
        <Input
          id={fields.people.id}
          name="people"
          type="number"
          inputMode="numeric"
          min={1}
          step={1}
          required
          autoComplete="off"
        />
      </Field>

      <Field label={fields.name.label} htmlFor={fields.name.id}>
        <Input
          id={fields.name.id}
          name="fullName"
          type="text"
          autoComplete="name"
          required
        />
      </Field>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-9">
        <Field label={fields.email.label} htmlFor={fields.email.id}>
          <Input
            id={fields.email.id}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </Field>

        <Field label={fields.phone.label} htmlFor={fields.phone.id}>
          <Input
            id={fields.phone.id}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </Field>
      </div>

      <Field label={fields.message.label} htmlFor={fields.message.id}>
        <Textarea
          id={fields.message.id}
          name="message"
          placeholder={fields.message.placeholder}
          required
          rows={5}
        />
      </Field>

      <div className="flex flex-col items-start gap-4 border-t border-border pt-8 md:items-center md:text-center">
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="min-h-12 tracking-[0.1em]"
        >
          {submitLabel}
          <span aria-hidden>→</span>
        </Button>
        <p className="text-small text-ink-subtle">{reassurance}</p>
      </div>
    </form>
  );
}
