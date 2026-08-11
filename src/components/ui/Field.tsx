import type {
  HTMLAttributes,
  LabelHTMLAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label className={cn("text-eyebrow text-foreground-muted", className)} {...props} />
  );
}

const fieldBase =
  "w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-3 font-sans text-body text-foreground placeholder:text-ink-subtle transition-editorial hover:border-foreground/30 focus:border-foreground focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = "text", ...props }: InputProps) {
  return <input type={type} className={cn(fieldBase, className)} {...props} />;
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, rows = 5, ...props }: TextareaProps) {
  return (
    <textarea
      rows={rows}
      className={cn(fieldBase, "min-h-32 resize-y", className)}
      {...props}
    />
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

/** Native select — same editorial underline treatment as Input. */
export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        fieldBase,
        "cursor-pointer appearance-none bg-[length:0.7rem] bg-[right_0.1rem_center] bg-no-repeat pr-6",
        "bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 fill=%22none%22%3E%3Cpath stroke=%22%236a6560%22 stroke-width=%221.2%22 d=%22m1 1.5 5 5 5-5%22/%3E%3C/svg%3E')]",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

type FieldProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  children?: ReactNode;
};

/** Field wrapper for future contact / booking forms. */
export function Field({
  label,
  htmlFor,
  hint,
  error,
  className,
  children,
  ...props
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {hint && !error ? (
        <p className="text-small text-ink-subtle">{hint}</p>
      ) : null}
      {error ? (
        <p className="text-small text-foreground" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
