"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Single place where GSAP is configured, so plugins are registered exactly
 * once and every animation inherits the same easing and timing language.
 */

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: "power3.out",
  duration: 0.8,
});

ScrollTrigger.config({
  // Bar-jitter on mobile address-bar resize is worse than a slightly stale
  // measurement, so ignore resize events caused purely by that.
  ignoreMobileResize: true,
});

if (typeof window !== "undefined") {
  // next/font swaps faces in after first paint; re-measure so triggers that
  // were positioned against fallback metrics stay accurate.
  document.fonts?.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
}

/** Shared entrance distance, kept consistent across the site. */
export const RISE = 26;

export { gsap, ScrollTrigger };
