import type { Metadata } from "next";
import { VisitClosing } from "@/components/sections/VisitClosing";
import { VisitExpect } from "@/components/sections/VisitExpect";
import { VisitHero } from "@/components/sections/VisitHero";
import { VisitHours } from "@/components/sections/VisitHours";
import { VisitLocation } from "@/components/sections/VisitLocation";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `Visit ${siteConfig.name} at No. 2 River Benue Street, Maitama, Abuja — a place to work, meet, gather and unwind.`,
};

export default function VisitPage() {
  return (
    <>
      <VisitHero />
      <VisitLocation />
      <VisitHours />
      <VisitExpect />
      <VisitClosing />
    </>
  );
}
