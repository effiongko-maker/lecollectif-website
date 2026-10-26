import Link from "next/link";
import { BrandMark } from "@/components/layout/BrandMark";
import { Container } from "@/components/layout/Container";
import { Rule } from "@/components/ui/Rule";
import { cn } from "@/lib/utils";
import {
  footerBrandLine,
  footerLegalLinks,
  footerNavColumns,
  siteConfig,
  type FooterNavLink,
} from "@/lib/site";

type FooterProps = {
  className?: string;
};

function FooterLink({ link }: { link: FooterNavLink }) {
  const className =
    "text-nav text-background/75 transition-editorial hover:text-background";

  if (link.href) {
    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <span className="text-nav text-background/65" aria-disabled="true">
      {link.label}
    </span>
  );
}

/**
 * Global footer — hospitality close with useful navigation density.
 */
export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("bg-surface-dark text-background", className)}>
      <Container width="wide" className="py-12 md:py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.7fr)] lg:gap-16 xl:gap-20">
          {/* Brand */}
          <div className="flex max-w-sm flex-col items-start">
            <BrandMark placement="footer" className="hover:opacity-90" />
            <Rule accent short className="mt-5 opacity-45" />
            <p className="mt-5 text-body-lg text-background/70">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 text-nav text-background/65">
              {siteConfig.location}
            </p>
            <p className="mt-6 font-display text-[1.25rem] leading-snug tracking-[-0.02em] text-background/70">
              {footerBrandLine}
            </p>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-10 md:grid-cols-4 md:gap-x-6 lg:gap-x-8">
            {footerNavColumns.map((column) => (
              <nav key={column.id} aria-label={column.label}>
                <p className="text-eyebrow text-background/65">{column.label}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
                {column.note ? (
                  <p className="mt-5 max-w-[11rem] text-small text-background/65">
                    {column.note}
                  </p>
                ) : null}
              </nav>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-background/10">
        <Container
          width="wide"
          className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5"
        >
          <p className="text-small text-background/65">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {footerLegalLinks.map((link) => (
              <li key={link.label}>
                <FooterLink link={link} />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
