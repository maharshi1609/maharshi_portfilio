"use client";

import { useCallback, useLayoutEffect } from "react";
import { MoonIcon, SunIcon } from "@/components/Icons";

const STORAGE_KEY = "mp-theme";

/**
 * The active theme lives on <html> as a class, set before paint by the boot
 * script in the root layout. Both icons are rendered and CSS picks the right
 * one, so there is no state, no hydration mismatch and no icon flash.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  // Strict Mode's development remount resets the attributes React manages on
  // <html>, dropping the class the boot script set. Re-applying it before paint
  // keeps dev matching production; in production this is a no-op.
  useLayoutEffect(() => {
    try {
      const light = localStorage.getItem(STORAGE_KEY) === "light";
      document.documentElement.classList.toggle("light", light);
    } catch {
      /* storage unavailable — keep the server-rendered dark default */
    }
  }, []);

  const toggle = useCallback(() => {
    const isLight = document.documentElement.classList.toggle("light");
    try {
      localStorage.setItem(STORAGE_KEY, isLight ? "light" : "dark");
    } catch {
      /* storage can be unavailable — the toggle still works for this visit */
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle between light and dark theme"
      title="Toggle theme"
      className={`grid size-10 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors duration-200 hover:border-accent/50 hover:text-fg ${className}`}
    >
      <SunIcon className="size-4.5 theme-dark-only" />
      <MoonIcon className="size-4.5 theme-light-only" />
    </button>
  );
}
