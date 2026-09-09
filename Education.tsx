import { CapIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="section-pad relative"
    >
      <div className="shell">
        <SectionHeading
          id="education-title"
          eyebrow="Education"
          title="Academic background"
        />

        <ul className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {education.map((item, i) => (
            <Reveal as="li" key={item.degree + item.institution} delay={i * 70}>
              <article className="card card-hover flex h-full flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-xl border border-line bg-accent-soft text-accent">
                    <CapIcon className="size-5" />
                  </span>
                  <span className="rounded-md border border-line px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-faint">
                    {item.level}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold leading-snug text-fg">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.institution}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-5">
                  <p className="rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 font-mono text-xs text-muted">
                    <time dateTime={item.startISO}>{item.period}</time>
                  </p>
                  {item.detail ? (
                    <p className="rounded-lg bg-accent-soft px-2.5 py-1.5 font-mono text-xs font-semibold text-accent">
                      {item.detail}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
