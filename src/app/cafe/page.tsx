import type { Metadata } from "next";
import { CafeAtmosphere } from "@/components/sections/CafeAtmosphere";
import { CafeClosing } from "@/components/sections/CafeClosing";
import { CafeExperience } from "@/components/sections/CafeExperience";
import { CafeHero } from "@/components/sections/CafeHero";
import { CafePhilosophy } from "@/components/sections/CafePhilosophy";
import { CafeWithin } from "@/components/sections/CafeWithin";

export const metadata: Metadata = {
  title: "The Glass Café",
  description: "Discover the planned Glass Café at Le CollectiF in Maitama, Abuja.",
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
