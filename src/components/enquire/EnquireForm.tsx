"use client";

import { useId, useState, type FormEvent } from "react";
import { RequestSubmit } from "@/components/booking/RequestSubmit";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { enquirePageContent, enquireTopics } from "@/lib/enquire";
import { cn } from "@/lib/utils";

type EnquireFormProps = {
  className?: string;
};

/**
 * Editorial enquiry form — reviewed details are sent through the server email endpoint.
 */
export function EnquireForm({ className }: EnquireFormProps) {
  const formId = useId();
  const [topic, setTopic] = useState("");
  const { fields } = enquirePageContent.form;
  const [details, setDetails] = useState<Record<string,string> | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDetails(Object.fromEntries(new FormData(event.currentTarget).entries()) as Record<string,string>);
  }


  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      onChange={(event) => { if (event.target instanceof Element && event.target.hasAttribute("name")) setDetails(null); }}
      noValidate={false}
      className={cn("flex flex-col gap-8 md:gap-9", className)}
    >
      <Field label={fields.topic.label} htmlFor={fields.topic.id}>
        <Select id={fields.topic.id} name="topic" required defaultValue="" onChange={(event) => setTopic(event.target.value)}>
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
            required={topic !== "general"}
            autoComplete="off"
          />
        </Field>

        <Field label={fields.time.label} htmlFor={fields.time.id}>
          <Input
            id={fields.time.id}
            name="time"
            type="time"
            required={topic !== "general"}
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
          required={topic !== "general"}
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
        <button type="submit" className="border border-foreground px-6 py-3 text-button">Review enquiry</button>
        {details && <RequestSubmit type="enquiry" details={details} />}

      </div>
    </form>
  );
}
