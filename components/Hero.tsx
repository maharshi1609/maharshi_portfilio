import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroParallax } from "@/components/HeroParallax";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
} from "@/components/Icons";
import { TechIcon } from "@/components/TechIcon";
import { site } from "@/data/site";
import { coreStack } from "@/data/skills";

/** Drives the CSS entrance stagger — see `hero-in` in globals.css. */
const step = (i: number) => ({ "--hero-i": i }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="glow-orb left-1/2 top-[-12rem] h-[26rem] w-[26rem] -translate-x-1/2 sm:h-[34rem] sm:w-[34rem]" />
        <div className="glow-orb right-[-8rem] top-[18rem] h-[20rem] w-[20rem] opacity-60" />
      </div>

      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* ------------------------------ Copy ------------------------------ */}
          <div className="max-w-2xl">
            <p
              data-hero
              style={step(0)}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-muted"
            >
              <PinIcon className="size-3.5 text-accent" />
              {site.location}
              <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
              <span className="text-fg">Open to opportunities</span>
            </p>

            <h1 data-hero style={step(1)} id="hero-title" className="mt-6">
              <span className="block text-lg font-medium text-muted sm:text-xl">
                {site.headline}
              </span>{" "}
              <span className="t-display mt-2 block font-semibold text-gradient">
                Full Stack Developer
              </span>
            </h1>

            <p data-hero style={step(2)} className="t-lead mt-5 max-w-xl text-muted">
              {site.tagline}
            </p>

            {/* Actions */}
            <div data-hero style={step(3)} className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-opacity duration-200 hover:opacity-90"
              >
                View Projects
                <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong bg-surface px-5 py-3 text-sm font-semibold text-fg transition-colors duration-200 hover:border-accent/60"
              >
                <MailIcon className="size-4" />
                Contact Me
              </Link>

              {site.github ? (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  className="grid size-11 place-items-center rounded-xl border border-line bg-surface text-muted transition-colors duration-200 hover:border-accent/60 hover:text-fg"
                >
                  <GithubIcon className="size-4.5" />
                </a>
              ) : null}

              {site.linkedin ? (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in a new tab)"
                  className="grid size-11 place-items-center rounded-xl border border-line bg-surface text-muted transition-colors duration-200 hover:border-accent/60 hover:text-fg"
                >
                  <LinkedinIcon className="size-4.5" />
                </a>
              ) : null}
            </div>

            {/* Core stack */}
            <div data-hero style={step(4)} className="mt-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                Core stack
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {coreStack.map((tech) => (
                  <li
                    key={tech}
                    className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-2.5 py-1.5 text-xs font-medium text-muted transition-colors duration-200 hover:border-accent/40 hover:text-fg"
                  >
                    <TechIcon name={tech} className="size-5 rounded-[5px]" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ----------------------------- Visual ----------------------------- */}
          <div data-hero style={step(2)} className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Parallax target — kept separate from the entrance tween. */}
            <HeroParallax className="relative">
              {/* Accent frame offset behind the portrait */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[26px] border border-line bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 sm:-inset-4"
              />

              <div className="card relative overflow-hidden rounded-[22px] p-2">
                {/* Editor-style chrome */}
                <div className="flex items-center gap-2 px-2 pb-2 pt-1">
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-line-strong" />
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-line-strong" />
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-line-strong" />
                  <span className="ml-2 font-mono text-[11px] text-faint">
                    maharshi-patel.tsx
                  </span>
                </div>

                <div className="relative aspect-square overflow-hidden rounded-[16px] bg-surface-2">
                  <Image
                    src={site.avatar}
                    alt={site.avatarAlt}
                    fill
                    priority
                    sizes="(max-width: 1023px) 90vw, 440px"
                    className="object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
                  />

                  {/* Name plate */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-xl border border-line bg-bg/70 px-3.5 py-2.5 backdrop-blur-md">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-fg">
                        {site.name}
                      </p>
                      <p className="truncate text-[11px] text-muted">
                        {site.role}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-accent-soft px-2 py-1 font-mono text-[10px] font-semibold text-accent">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                      REACT
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating accents */}
              <div
                aria-hidden="true"
                className="animate-float absolute -left-4 top-1/3 hidden rounded-xl border border-line bg-bg/85 px-3 py-2.5 shadow-lg backdrop-blur-md sm:block"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-faint">
                  Builds with
                </p>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <TechIcon name="React.js" className="size-6" />
                  <TechIcon name="Next.js" className="size-6" />
                  <TechIcon name="TypeScript" className="size-6" />
                </div>
              </div>

              {/* Sits above the card so it never collides with the name plate. */}
              <div
                aria-hidden="true"
                className="animate-float absolute -right-4 -top-5 hidden rounded-xl border border-line bg-bg/85 px-3.5 py-2.5 shadow-lg backdrop-blur-md sm:block"
                style={{ animationDelay: "-3.5s" }}
              >
                <p className="font-mono text-[11px] text-muted">
                  <span className="text-accent">const</span> role ={" "}
                  <span className="text-accent-2">&quot;fullstack&quot;</span>
                  <span className="animate-caret text-fg">|</span>
                </p>
              </div>
            </HeroParallax>
          </div>
        </div>
      </div>
    </section>
  );
}
