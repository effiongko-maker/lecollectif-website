import type { Metadata } from "next";
import { VisitClosing } from "@/components/sections/VisitClosing";
import { VisitExpect } from "@/components/sections/VisitExpect";
import { VisitHero } from "@/components/sections/VisitHero";
import { VisitHours } from "@/components/sections/VisitHours";
import { VisitLocation } from "@/components/sections/VisitLocation";

export const metadata: Metadata = {
  title: "Visit",
  description: "Find Le CollectiF at No. 2 River Benue Street, Maitama, Abuja. The destination has not opened yet; opening details will follow.",
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
