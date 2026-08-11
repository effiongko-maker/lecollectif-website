import type { Metadata } from "next";
import { SpacesClosing } from "@/components/sections/SpacesClosing";
import { SpacesHero } from "@/components/sections/SpacesHero";
import { SpacesIntro } from "@/components/sections/SpacesIntro";
import { SpacesTypes } from "@/components/sections/SpacesTypes";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spaces",
  description: `Thoughtfully considered spaces at ${siteConfig.name} for focused work, private collaboration and purposeful gatherings.`,
};

export default function SpacesPage() {
  return (
    <>
      <SpacesHero />
      <SpacesIntro />
      <SpacesTypes />
      <SpacesClosing />
    </>
  );
}
