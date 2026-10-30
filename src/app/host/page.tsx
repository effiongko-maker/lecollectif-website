import type { Metadata } from "next";
import { PreOpeningNotice } from "@/components/booking/PreOpeningNotice";
import { isPreOpening, preOpeningNotices } from "@/lib/pre-opening";
import { HostFlow } from "@/components/booking/HostFlow";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Host an Event",
  description: preOpeningNotices.host,
  openGraph: {
    title: `Host an Event · ${siteConfig.name}`,
    description: preOpeningNotices.host,
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
  },
};

export default function HostPage() {
  if (isPreOpening) return <PreOpeningNotice journey="host" />;

  return <HostFlow />;
}
