"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Scrubbed parallax on the hero portrait — it drifts upward slightly as the
 * hero scrolls away, which needs a scroll-linked value that CSS cannot express.
 *
 * The hero's entrance animation is deliberately CSS-only (see `hero-in` in
 * globals.css) so the LCP content never waits on this bundle; this component
 * only adds motion that is invisible until the user scrolls.
 */
export function HeroParallax({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.closest("section");
    if (!el || !section) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(el, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
