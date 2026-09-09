import {
  CodeIcon,
  DeviceIcon,
  LayersIcon,
  PlugIcon,
  SparkIcon,
} from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";
import { softSkills } from "@/data/skills";

const pillars = [
  {
    icon: CodeIcon,
    title: "React.js & Next.js",
    body: "Component-driven interfaces built with React and Next.js, from single screens to full application flows.",
  },
  {
    icon: PlugIcon,
    title: "API Integration",
    body: "REST integration with Axios across GET, POST, PUT and DELETE requests, wired into real product workflows.",
  },
  {
    icon: DeviceIcon,
    title: "Responsive Design",
    body: "Layouts that hold up from 320px phones to large desktop displays, with no horizontal scroll or broken spacing.",
  },
  {
    icon: LayersIcon,
    title: "State Management",
    body: "Predictable state with Redux Toolkit, Context API, and the useState / useReducer hooks.",
  },
];

const facts = [
  { label: "Role", value: site.role },
  { label: "Based in", value: site.location },
  { label: "Working since", value: "December 2023" },
  { label: "Education", value: "B.E. Computer Science" },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-pad relative"
    >
      <div className="shell">
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title="A full stack developer focused on the details that ship"
          description={site.summary}
        />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
          {/* Pillars */}
          <ul className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal as="li" key={pillar.title} delay={i * 70}>
                  <div className="card card-hover h-full p-5 sm:p-6">
                    <span className="grid size-11 place-items-center rounded-xl border border-line bg-accent-soft text-accent">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-fg">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {pillar.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          {/* Quick facts + soft skills */}
          <div className="grid gap-4 content-start">
            <Reveal delay={120}>
              <div className="card p-5 sm:p-6">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  At a glance
                </h3>
                <dl className="mt-4 divide-y divide-line">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
                    >
                      <dt className="text-sm text-muted">{fact.label}</dt>
                      <dd className="text-right text-sm font-medium text-fg">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={190}>
              <div className="card p-5 sm:p-6">
                <h3 className="flex items-center gap-2 text-base font-semibold text-fg">
                  <SparkIcon className="size-4 text-accent" />
                  Beyond the code
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-xs font-medium text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Day-to-day work runs through Agile task management in Trello,
                  close collaboration with the team, and steady maintenance of
                  live applications.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
