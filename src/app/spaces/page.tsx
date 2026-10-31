import type { Metadata } from "next";
import { SpacesBusinessSupport } from "@/components/sections/SpacesBusinessSupport";
import { SpacesClosing } from "@/components/sections/SpacesClosing";
import { SpacesHero } from "@/components/sections/SpacesHero";
import { SpacesIntro } from "@/components/sections/SpacesIntro";
import { SpacesTypes } from "@/components/sections/SpacesTypes";

export const metadata: Metadata = {
  title: "Spaces",
  description: "Explore the coworking spaces, private offices and meeting rooms planned for Le CollectiF in Maitama, Abuja.",
};

export default function SpacesPage() {
  return (
    <>
      <SpacesHero />
      <SpacesIntro />
      <SpacesTypes />
      <SpacesBusinessSupport />
      <SpacesClosing />
    </>
  );
}
