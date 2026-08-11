type ClassValue = string | false | null | undefined;

/** Join class names, omitting falsy values. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
