import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  /** Wired to the section's aria-labelledby. */
  id?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
        <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
        {eyebrow}
      </p>
      <h2 id={id} className="t-h2 font-semibold text-fg">
        {title}
      </h2>
      {description ? (
        <p className="t-lead mt-4 text-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}
