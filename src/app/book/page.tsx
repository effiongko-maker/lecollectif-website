import type { Metadata } from "next";
import { Suspense } from "react";
import { BookFlow } from "@/components/booking/BookFlow";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Space",
  description: `Find your space at ${siteConfig.name} — choose the setting, date and time that work for you.`,
};

export default function BookPage() {
  return (
    <Suspense fallback={<div className="bg-background py-20" aria-hidden />}>
      <BookFlow />
    </Suspense>
  );
}
