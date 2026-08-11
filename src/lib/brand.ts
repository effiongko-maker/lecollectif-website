/**
 * Brand differentiation for Le CollectiF.
 *
 * Visual identity must read as hospitality, lifestyle, and architecture —
 * never as corporate technology or business-services chrome (even though
 * the logo shares a gold/yellow family with unrelated brands).
 *
 * Prefer place and experience over service lists.
 * Prefer typography, whitespace, and imagery over gold.
 * Accent colour lives in --lc-accent / --accent — change that one token later.
 */
export const brandDirection = {
  feel: [
    "premium members’ club",
    "contemporary boutique hotel",
    "design-led hospitality space",
    "architectural destination",
    "sophisticated cultural / social venue",
  ],
  avoid: [
    "technology company aesthetics",
    "consulting / corporate services layouts",
    "conventional coworking SaaS patterns",
    "dashboard grids, icon grids, pill clusters",
    "black-and-gold identity",
    "gold-dominant or gold-on-white / gold-on-black repetition",
  ],
  gold: {
    role: "accent-only",
    token: "--lc-accent",
    allowed: [
      "fine rules",
      "selected typography details",
      "hover states",
      "subtle navigation details",
      "occasional CTA emphasis",
      "rare brand moments",
    ],
    forbidden: [
      "primary backgrounds",
      "large gold surfaces",
      "default / dominant CTA fills",
      "gold headings + borders + icons + buttons in one section",
    ],
  },
} as const;
