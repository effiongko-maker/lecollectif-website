import type { Metadata } from "next";
import { EnquireFormSection } from "@/components/sections/EnquireFormSection";
import { EnquireIntro } from "@/components/sections/EnquireIntro";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enquire",
  description: `Tell us what you're planning at ${siteConfig.name} — we'll help you find the right space.`,
};

export default function EnquirePage() {
  return (
    <>
      <EnquireIntro />
      <EnquireFormSection />
    </>
  );
}
