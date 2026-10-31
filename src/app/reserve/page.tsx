import type { Metadata } from "next";
import { PreOpeningNotice } from "@/components/booking/PreOpeningNotice";
import { isPreOpening, preOpeningNotices } from "@/lib/pre-opening";
import { ReserveFlow } from "@/components/booking/ReserveFlow";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reserve a Table",
  description: preOpeningNotices.reserve,
  openGraph: {
    title: `Reserve a Table · ${siteConfig.name}`,
    description: preOpeningNotices.reserve,
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
  },
};

export default function ReservePage() {
  if (isPreOpening) return <PreOpeningNotice journey="reserve" />;

  return <ReserveFlow />;
}
