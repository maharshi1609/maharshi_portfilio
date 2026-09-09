"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { RISE, gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Stagger, in milliseconds, applied as the tween's delay. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Scroll-triggered entrance, driven by GSAP + ScrollTrigger.
 *
 * The hidden starting state lives in CSS (`.js .reveal`) rather than in JS, so
 * there is no flash of un-animated content before GSAP takes over — and with no
 * JavaScript, nothing is hidden in the first place.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const mm = gsap.matchMedia();

    /** Drop the compositor hint once it has served its purpose. */
    const settle = () => gsap.set(node, { willChange: "auto" });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(node, { opacity: 1, y: 0 });
      settle();
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        node,
        { opacity: 0, y: RISE },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay: delay / 1000,
          onComplete: settle,
          scrollTrigger: {
            trigger: node,
            start: "top 88%",
            once: true,
          },
        },
      );
    });

    return () => mm.revert();
  }, [delay]);

  return (
    <Tag ref={ref} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}
