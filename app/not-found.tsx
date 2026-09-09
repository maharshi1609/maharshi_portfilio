import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, MailIcon } from "@/components/Icons";
import { navLinks, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for does not exist on Maharshi Patel's portfolio.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex flex-1 items-center overflow-hidden py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="glow-orb left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2" />
      </div>

      <div className="shell relative">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Error 404
          </p>

          <p
            aria-hidden="true"
            className="mt-4 font-mono text-7xl font-bold tracking-tighter text-gradient sm:text-8xl"
          >
            404
          </p>

          <h1 className="t-h2 mt-4 font-semibold text-fg">Page not found</h1>

          <p className="t-lead mt-4 text-muted">
            That URL doesn&apos;t exist here. Head back to the homepage, or jump
            straight to a section.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-opacity duration-200 hover:opacity-90"
            >
              Back to home
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong bg-surface px-5 py-3 text-sm font-semibold text-fg transition-colors duration-200 hover:border-accent/60"
            >
              <MailIcon className="size-4" />
              Email me
            </a>
          </div>

          <nav aria-label="Site sections" className="mt-10">
            <ul className="flex flex-wrap justify-center gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className="inline-flex rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] font-medium text-muted transition-colors duration-200 hover:border-accent/50 hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
