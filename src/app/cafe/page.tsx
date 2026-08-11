import type { Metadata } from "next";
import { CafeAtmosphere } from "@/components/sections/CafeAtmosphere";
import { CafeClosing } from "@/components/sections/CafeClosing";
import { CafeExperience } from "@/components/sections/CafeExperience";
import { CafeHero } from "@/components/sections/CafeHero";
import { CafePhilosophy } from "@/components/sections/CafePhilosophy";
import { CafeWithin } from "@/components/sections/CafeWithin";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Glass Café",
  description: `A considered space for coffee, conversation, informal meetings and time to linger at ${siteConfig.name}.`,
};

export default function CafePage() {
  return (
    <>
      <CafeHero />
      <CafePhilosophy />
      <CafeExperience />
      <CafeAtmosphere />
      <CafeWithin />
      <CafeClosing />
    </>
  );
}
