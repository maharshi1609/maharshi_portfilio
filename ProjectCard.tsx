import { ExternalIcon, GithubIcon } from "@/components/Icons";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Generated cover artwork. No screenshots are invented — each project gets a
 * deterministic gradient keyed to its own hues, plus its monogram.
 */
function ProjectArt({
  project,
  className,
  compact = false,
}: {
  project: Project;
  className?: string;
  /** Thumbnail size — the corner labels don't fit, so they're dropped. */
  compact?: boolean;
}) {
  const [h1, h2] = project.hues;
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-xl border border-line",
        className,
      )}
      style={{
        backgroundImage: `radial-gradient(120% 120% at 12% 8%, hsl(${h1} 82% 58% / 0.28), transparent 58%), radial-gradient(110% 110% at 92% 96%, hsl(${h2} 82% 58% / 0.22), transparent 55%), linear-gradient(160deg, var(--surface-2), var(--surface))`,
      }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span
          className={cn(
            "font-mono font-bold tracking-tighter",
            compact ? "text-xl sm:text-2xl" : "text-5xl sm:text-6xl",
          )}
          style={{ color: `hsl(${h1} 80% 66%)`, opacity: 0.9 }}
        >
          {project.monogram}
        </span>
      </div>
      {!compact ? (
        <>
          <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            {project.tagline}
          </span>
          <span className="absolute bottom-3 right-3 font-mono text-[10px] text-faint">
            {"</>"}
          </span>
        </>
      ) : null}
    </div>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {project.website ? (
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-accent px-3.5 py-2 text-[13px] font-semibold text-accent-fg transition-opacity duration-200 hover:opacity-90"
        >
          Visit Site
          <ExternalIcon className="size-3.5" />
          <span className="sr-only">
            {project.title} (opens in a new tab)
          </span>
        </a>
      ) : (
        <span
          aria-disabled="true"
          title="This project has no public link"
          className="inline-flex min-h-10 cursor-not-allowed items-center gap-2 rounded-lg border border-dashed border-line px-3.5 py-2 text-[13px] font-medium text-faint"
        >
          No public link
        </span>
      )}

      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-line-strong bg-surface px-3.5 py-2 text-[13px] font-semibold text-fg transition-colors duration-200 hover:border-accent/60"
        >
          <GithubIcon className="size-4" />
          Code
          <span className="sr-only">
            for {project.title} (opens in a new tab)
          </span>
        </a>
      ) : null}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-line bg-surface-2 px-2 py-1 text-[11px] font-medium text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden p-4 sm:p-5">
      <ProjectArt project={project} className="aspect-video w-full" />

      <div className="flex flex-1 flex-col p-1 pt-5">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="t-h3 font-semibold text-fg">{project.title}</h3>
          {project.org ? (
            <span className="rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">
              {project.org}
            </span>
          ) : null}
        </div>

        {project.websiteLabel ? (
          <p className="mt-1.5 font-mono text-xs text-faint">
            {project.websiteLabel}
          </p>
        ) : null}

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2.5 text-[13px] leading-relaxed text-muted">
              <span
                aria-hidden="true"
                className="mt-1.75 size-1.5 shrink-0 rounded-full bg-accent/70"
              />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-5 space-y-4 border-t border-line pt-5">
          <Tags tags={project.tags} />
          <Links project={project} />
        </div>
      </div>
    </article>
  );
}

export function ProjectCardCompact({ project }: { project: Project }) {
  return (
    <article className="card card-hover flex h-full flex-col p-4 sm:p-5">
      <div className="flex items-start gap-4">
        <ProjectArt
          project={project}
          compact
          className="size-16 shrink-0 sm:size-20"
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-semibold text-fg sm:text-base">
            {project.title}
          </h3>
          {project.org ? (
            <p className="mt-1 text-[11px] font-semibold text-accent">
              {project.org}
            </p>
          ) : null}
          <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
            {project.description}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Tags tags={project.tags} />
      </div>

      {/* Progressive disclosure — no JavaScript required. */}
      <details className="group/details mt-4 border-t border-line pt-4">
        <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-md text-[13px] font-semibold text-accent transition-opacity duration-200 hover:opacity-80">
          <span className="group-open/details:hidden">View details</span>
          <span className="hidden group-open/details:inline">Hide details</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="size-3.5 transition-transform duration-200 group-open/details:rotate-180"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>

        <ul className="mt-3 space-y-2">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2.5 text-[13px] leading-relaxed text-muted">
              <span
                aria-hidden="true"
                className="mt-1.75 size-1.5 shrink-0 rounded-full bg-accent/70"
              />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <Links project={project} />
        </div>
      </details>
    </article>
  );
}
