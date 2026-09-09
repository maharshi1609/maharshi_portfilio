"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * The vertical rail behind the experience timeline. It draws downwards, tied to
 * scroll position, so the line appears to trace the roles as they are read.
 */
export function TimelineRail({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const list = el?.parentElement;
    if (!el || !list) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(el, { scaleY: 1 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: list,
            start: "top 78%",
            end: "bottom 65%",
            scrub: 0.4,
          },
        },
      );
    });

    return () => mm.revert();
  }, []);

  return <span ref={ref} aria-hidden="true" className={className} />;
}
