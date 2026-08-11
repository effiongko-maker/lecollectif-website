/**
 * Control styles — architectural hospitality, not SaaS chrome.
 *
 * Primary = charcoal (default conversion).
 * Accent = selective gold emphasis — use rarely, never as the default CTA set.
 * Ghost / text = editorial navigation and quiet actions.
 */
export const controlVariants = {
  primary:
    "bg-surface-dark text-background hover:bg-charcoal-soft active:bg-charcoal-soft/90 focus-visible:outline-foreground disabled:bg-foreground-muted/30 disabled:text-background/70",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-foreground/35 active:bg-background-secondary/60 focus-visible:outline-foreground disabled:border-border disabled:text-foreground-muted",
  /** Selective gold emphasis — not the default primary */
  accent:
    "border border-accent/55 bg-transparent text-foreground hover:border-accent hover:bg-accent-subtle active:bg-accent-subtle focus-visible:outline-foreground disabled:border-border disabled:text-foreground-muted",
  ghost:
    "bg-transparent text-foreground hover:text-foreground-muted active:text-foreground-muted focus-visible:outline-foreground disabled:text-foreground-muted/50",
  outline:
    "border border-background/30 bg-transparent text-background hover:border-background/65 active:bg-background/5 focus-visible:outline-background disabled:opacity-40",
  text: "bg-transparent px-0 text-foreground link-editorial disabled:text-foreground-muted/50",
} as const;

export const controlSizes = {
  sm: "min-h-11 px-5 text-button",
  md: "min-h-12 px-7 text-button",
  lg: "min-h-14 px-9 text-button",
} as const;

export const controlBase =
  "inline-flex items-center justify-center gap-2 rounded-none font-sans transition-editorial disabled:pointer-events-none";
