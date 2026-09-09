import { ProjectCard, ProjectCardCompact } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredProjects, otherProjects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-pad relative border-t border-line bg-bg-alt"
    >
      <div className="shell">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Selected work"
          description="Platforms, admin panels and product interfaces I have built and maintained. Links are shown only where a public URL exists."
        />

        {/* Featured */}
        <ul className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={i * 70} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>

        {/* Additional work */}
        <Reveal className="mt-14 flex items-center gap-4">
          <h3 className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            More work
          </h3>
          <span aria-hidden="true" className="hairline flex-1" />
        </Reveal>

        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          {otherProjects.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={i * 60} className="h-full">
              <ProjectCardCompact project={project} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
