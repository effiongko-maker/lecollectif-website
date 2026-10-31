import type { Metadata } from "next";
import { PreOpeningNotice } from "@/components/booking/PreOpeningNotice";
import { isPreOpening, preOpeningNotices } from "@/lib/pre-opening";
import { EnquireFormSection } from "@/components/sections/EnquireFormSection";
import { EnquireIntro } from "@/components/sections/EnquireIntro";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enquire",
  description: preOpeningNotices.enquire,
  openGraph: {
    title: `Enquire · ${siteConfig.name}`,
    description: preOpeningNotices.enquire,
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
  },
};

export default function EnquirePage() {
  if (isPreOpening) return <PreOpeningNotice journey="enquire" />;

  return (
    <>
      <EnquireIntro />
      <EnquireFormSection />
    </>
  );
}
