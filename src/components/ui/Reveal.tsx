"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "li";
  id?: string;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
};

/**
 * Scroll entrance reveal — calm and hospitality-oriented.
 * Reduced motion is handled in CSS (content remains visible).
 */
export function Reveal({ children, className, delay = 0, as: Component = "div", id }: RevealProps) {
  const ref = useRef<HTMLDivElement | HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      id={id}
      ref={(node: HTMLDivElement | HTMLLIElement | null) => { ref.current = node; }}
      className={cn("reveal-base", visible && "reveal-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
