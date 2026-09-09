import { ContactForm } from "@/components/ContactForm";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-pad relative border-t border-line bg-bg-alt"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb left-[-6rem] bottom-[-6rem] h-[22rem] w-[22rem] opacity-70" />
      </div>

      <div className="shell relative">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's build something"
          description="Open to Full Stack Developer roles and React.js / Next.js projects. The quickest way to reach me is email."
        />

        {/*
          Grid items default to `min-width: auto`, so a single nowrap string
          (the email address) would set a track floor wider than a 320px
          viewport and break `truncate`. `*:min-w-0` opts the items out.
        */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8 *:min-w-0">
          {/* Details */}
          <div className="grid content-start gap-4 *:min-w-0">
            <Reveal>
              <div className="card p-5 sm:p-6">
                <p className="text-lg font-semibold text-fg">{site.name}</p>
                <p className="mt-1 text-sm text-accent">{site.role}</p>

                <ul className="mt-6 space-y-3">
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="group flex items-center gap-3.5 rounded-xl border border-line bg-surface-2 p-3.5 transition-colors duration-200 hover:border-accent/50"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                        <MailIcon className="size-4.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] uppercase tracking-wider text-faint">
                          Email
                        </span>
                        <span className="block truncate text-sm font-medium text-fg">
                          {site.email}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="group flex items-center gap-3.5 rounded-xl border border-line bg-surface-2 p-3.5 transition-colors duration-200 hover:border-accent/50"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                        <PhoneIcon className="size-4.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] uppercase tracking-wider text-faint">
                          Phone
                        </span>
                        <span className="block truncate text-sm font-medium text-fg">
                          {site.phone}
                        </span>
                      </span>
                    </a>
                  </li>

                  <li className="flex items-center gap-3.5 rounded-xl border border-line bg-surface-2 p-3.5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                      <PinIcon className="size-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] uppercase tracking-wider text-faint">
                        Location
                      </span>
                      <span className="block truncate text-sm font-medium text-fg">
                        {site.location}
                      </span>
                    </span>
                  </li>
                </ul>

                {site.github || site.linkedin ? (
                  <div className="mt-6 flex items-center gap-2.5 border-t border-line pt-5">
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
                ) : null}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={90}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
