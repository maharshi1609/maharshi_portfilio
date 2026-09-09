"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/Icons";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setVisible(window.scrollY > window.innerHeight * 0.9);
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-xl border border-line bg-bg/85 text-muted shadow-lg backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:text-fg sm:bottom-7 sm:right-7",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUpIcon className="size-4.5" />
    </button>
  );
}
