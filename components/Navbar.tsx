"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/Icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks, sectionIds, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /*
   * Scroll state: sticky-bar treatment, reading progress and the active
   * section, all in one rAF-throttled loop.
   *
   * The active section is resolved by asking which section spans a probe line
   * just below the header, rather than by intersection ratio: a very tall
   * section (Projects on mobile) never occupies a large enough fraction of the
   * viewport to cross a ratio threshold, which left the indicator stale.
   */
  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;

        setScrolled(y > 12);
        setProgress(max > 0 ? Math.min(1, y / max) : 0);

        const probe = 96;
        let current = sectionIds[0];

        if (max > 0 && y >= max - 2) {
          // Bottom of the page: the last section is the one being read.
          current = sectionIds[sectionIds.length - 1];
        } else {
          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (!el) continue;
            const { top, bottom } = el.getBoundingClientRect();
            if (top <= probe && bottom > probe) {
              current = id;
              break;
            }
          }
        }

        // Returning the identical value lets React bail out of the re-render.
        setActive((prev) => (prev === current ? prev : current));
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  /* Mobile panel: escape to close, click-away, and focus return. */
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !panelRef.current?.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="shell">
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between gap-4 md:h-18"
        >
          <Link
            href="#home"
            onClick={close}
            className="group flex items-center gap-2.5 rounded-md text-fg"
          >
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-[10px] border border-line bg-surface-2 font-mono text-[13px] font-bold text-accent transition-colors duration-200 group-hover:border-accent/50"
            >
              MP
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-tight">
                {site.name}
              </span>
              <span className="mt-1 hidden text-[11px] font-medium tracking-wide text-faint sm:block">
                {site.role}
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-fg"
                        : "text-muted hover:text-fg",
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="#contact"
              className="hidden rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-fg transition-opacity duration-200 hover:opacity-90 sm:inline-flex"
            >
              Hire Me
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-lg border border-line bg-surface text-fg transition-colors duration-200 hover:border-accent/50 lg:hidden"
            >
              {open ? (
                <CloseIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="shell flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-medium transition-colors duration-200",
                    isActive
                      ? "bg-accent-soft text-fg"
                      : "text-muted hover:bg-surface hover:text-fg",
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-accent"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              href="#contact"
              onClick={close}
              className="flex items-center justify-center rounded-lg bg-accent px-4 py-3 text-[15px] font-semibold text-accent-fg"
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>

      {/* Reading progress */}
      <div
        aria-hidden="true"
        className="h-px w-full origin-left bg-gradient-to-r from-accent to-accent-2 transition-none"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
