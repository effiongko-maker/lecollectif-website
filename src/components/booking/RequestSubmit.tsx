"use client";
import { Button } from "@/components/ui/Button";
export function RequestSubmit({ type: _type, details: _details }: { type: string; details: Record<string,string> }) {
  return <div className="mt-8 space-y-4">
    <Button type="button" disabled>Submissions temporarily unavailable</Button>
    <p role="status" className="text-body">This is a preview of Le CollectiF. Online enquiries and booking requests are not active yet. Please email info@lecollectif.ng directly.</p>
    <p className="text-small text-foreground-muted">Availability and any payment will be confirmed separately.</p>
  </div>;
}
