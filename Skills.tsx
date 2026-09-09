import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechIcon } from "@/components/TechIcon";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-pad relative"
    >
      <div className="shell">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Technologies I work with"
          description="An end-to-end toolkit: React and Next.js at the front, Node.js, Express and databases behind them."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal as="li" key={group.id} delay={i * 60}>
              <div
                className={cn(
                  "card card-hover h-full p-5 sm:p-6",
                  group.primary && "border-line-strong",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-fg">
                    {group.title}
                  </h3>
                  {/*
                    Primary groups are badged; the rest carry no label. A
                    "Support" badge on Backend/Database would read as a
                    contradiction next to the Full Stack Developer title.
                  */}
                  {group.primary ? (
                    <span className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                      Core
                    </span>
                  ) : null}
                </div>

                <p className="mt-1.5 text-sm text-muted">{group.blurb}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 text-[13px] font-medium text-muted transition-colors duration-200 hover:border-accent/40 hover:text-fg"
                    >
                      <TechIcon name={skill} className="size-5 rounded-[5px]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
