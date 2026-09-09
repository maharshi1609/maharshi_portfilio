import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/Icons";
import { navLinks, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-bg">
      <div className="shell py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Identity */}
          <div>
            <Link href="#home" className="inline-flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-[10px] border border-line bg-surface-2 font-mono text-[13px] font-bold text-accent"
              >
                MP
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[15px] font-semibold text-fg">
                  {site.name}
                </span>
                <span className="text-[12px] text-muted">{site.role}</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Building responsive, scalable and user-focused web experiences
              with React.js and Next.js.
            </p>

            {site.github || site.linkedin ? (
              <div className="mt-5 flex items-center gap-2.5">
                {site.github ? (
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile (opens in a new tab)"
                    className="grid size-10 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors duration-200 hover:border-accent/60 hover:text-fg"
                  >
                    <GithubIcon className="size-4" />
                  </a>
                ) : null}
                {site.linkedin ? (
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile (opens in a new tab)"
                    className="grid size-10 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors duration-200 hover:border-accent/60 hover:text-fg"
                  >
                    <LinkedinIcon className="size-4" />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Navigate
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Reach out */}
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  <MailIcon className="size-4 shrink-0" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
                >
                  <PhoneIcon className="size-4 shrink-0" />
                  {site.phone}
                </a>
              </li>
              <li className="pt-1 text-sm text-muted">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-[13px] text-faint">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-faint">
            Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
