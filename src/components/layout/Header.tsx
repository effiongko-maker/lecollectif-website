"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/layout/BrandMark";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Link";
import { cn } from "@/lib/utils";
import { ctaNav, mainNav } from "@/lib/site";

type HeaderProps = {
  className?: string;
};

function NavItemLink({
  href,
  label,
  className,
  onClick,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center py-1 text-nav text-foreground-muted transition-editorial",
        "hover:text-foreground",
        className,
      )}
    >
      <span>{label}</span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-foreground/35",
          "transition-transform duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:scale-x-100 group-focus-visible:scale-x-100",
          "motion-reduce:transition-none",
        )}
      />
    </Link>
  );
}

/**
 * Global primary navigation — architectural, editorial, hospitality-oriented.
 */
export function Header({ className }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/80 transition-editorial",
        scrolled ? "bg-background/92 backdrop-blur-md" : "bg-background",
        className,
      )}
    >
      <Container
        width="wide"
        className={cn(
          "flex items-center justify-between gap-8 transition-[height] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          scrolled ? "h-[4.25rem] md:h-[4.75rem]" : "h-[4.75rem] md:h-24",
        )}
      >
        <BrandMark compact={scrolled} onNavigate={closeMenu} />

        <nav
          className="hidden items-center gap-9 lg:flex xl:gap-11"
          aria-label="Primary"
        >
          {mainNav.map((item) => (
            <NavItemLink key={item.href} href={item.href} label={item.label} />
          ))}

          <ButtonLink
            href={ctaNav.href}
            variant="secondary"
            size="sm"
            className="ml-2 min-h-10 px-5"
          >
            {ctaNav.label}
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center text-nav text-foreground transition-editorial hover:opacity-70 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-haspopup="dialog"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="flex h-5 w-6 flex-col justify-between py-0.5">
            <span className="block h-[1.5px] w-full bg-current" />
            <span className="block h-[1.5px] w-full bg-current" />
            <span className="block h-[1.5px] w-full bg-current" />
          </span>
        </button>
      </Container>

      <div
        ref={panelRef}
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        {...(!open ? { inert: true } : {})}
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-background lg:hidden",
          "transition-[opacity,transform] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "motion-reduce:translate-y-0 motion-reduce:transition-none",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <Container
          width="wide"
          className="flex h-[4.75rem] items-center justify-between"
        >
          <BrandMark onNavigate={closeMenu} />
          <button
            ref={closeRef}
            type="button"
            className="inline-flex min-h-11 items-center justify-center text-nav text-foreground transition-editorial hover:opacity-70"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            Close
          </button>
        </Container>

        <Container
          width="wide"
          className="flex flex-1 flex-col justify-between pb-12 pt-6"
        >
          <nav aria-label="Mobile primary" className="flex flex-col">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-border/70 py-5 text-menu text-foreground transition-editorial hover:opacity-60 motion-reduce:transition-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-10">
            <ButtonLink
              href={ctaNav.href}
              variant="secondary"
              size="md"
              className="w-full sm:w-auto"
              onClick={closeMenu}
            >
              {ctaNav.label}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
