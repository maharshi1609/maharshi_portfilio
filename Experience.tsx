import { BriefcaseIcon, PinIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechIcon } from "@/components/TechIcon";
import { TimelineRail } from "@/components/TimelineRail";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-pad relative border-t border-line bg-bg-alt"
    >
      <div className="shell">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I've been building"
          description="Full stack roles across product and client work in Surat, India."
        />

        <ol className="relative mt-12 lg:mt-16">
          {/* Timeline rail — drawn on scroll */}
          <TimelineRail className="absolute left-[13px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent/50 via-line to-transparent sm:left-[15px]" />

          {experience.map((role, i) => (
            <Reveal
              as="li"
              key={`${role.company}-${role.startISO}`}
              delay={i * 80}
              className="relative pl-10 pb-8 last:pb-0 sm:pl-14"
            >
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 grid size-7 place-items-center rounded-full border border-line bg-bg sm:size-8"
              >
                <span
                  className={
                    role.current
                      ? "size-2.5 rounded-full bg-accent ring-4 ring-accent/20"
                      : "size-2.5 rounded-full bg-line-strong"
                  }
                />
              </span>

              <article className="card card-hover p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="t-h3 font-semibold text-fg">{role.title}</h3>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="inline-flex items-center gap-1.5 font-medium text-accent">
                        <BriefcaseIcon className="size-4" />
                        {role.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-muted">
                        <PinIcon className="size-4" />
                        {role.location}
                      </span>
                    </p>
                  </div>

                  <p className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted">
                    <time dateTime={role.startISO}>{role.start}</time>
                    <span aria-hidden="true">–</span>
                    {role.endISO ? (
                      <time dateTime={role.endISO}>{role.end}</time>
                    ) : (
                      <span className="font-semibold text-accent">
                        {role.end}
                      </span>
                    )}
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.25 size-1.5 shrink-0 rounded-full bg-accent/70"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
                  {role.stack.map((tech) => (
                    <li
                      key={tech}
                      className="group inline-flex items-center gap-1.5 rounded-md border border-line bg-surface-2 px-2 py-1 text-[11px] font-medium text-muted"
                    >
                      <TechIcon name={tech} className="size-4 rounded-[4px]" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
