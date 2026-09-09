import type { ReactNode } from "react";

/**
 * A compact, consistent icon system for the technology list.
 *
 * Technologies with a widely recognised mark get a simplified vector glyph;
 * the rest fall back to a monogram in the mono typeface. Both variants share
 * the same badge geometry so the grid always reads as one designed set.
 */

type Entry = {
  /**
   * Brand colour. Marks whose brand colour is near-white (Next.js, GitHub)
   * use `var(--fg)` instead so they stay legible in both themes.
   */
  color: string;
  glyph?: ReactNode;
  mono?: string;
};

const s = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const REACT_GLYPH = (
  <svg {...s} className="h-full w-full">
    <ellipse cx="12" cy="12" rx="9.6" ry="3.9" />
    <ellipse cx="12" cy="12" rx="9.6" ry="3.9" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9.6" ry="3.9" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.9" fill="currentColor" stroke="none" />
  </svg>
);

const NEXT_GLYPH = (
  <svg {...s} className="h-full w-full">
    <circle cx="12" cy="12" r="9.4" />
    <path d="M8.8 16.4V7.8l7.2 9.1" />
    <path d="M15.3 7.8v5.4" />
  </svg>
);

const TAILWIND_GLYPH = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C13.4 10.85 14.53 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.6 7.15 14.47 6 12 6ZM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.4 16.85 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.6 13.15 9.47 12 7 12Z" />
  </svg>
);

const REDUX_GLYPH = (
  <svg {...s} className="h-full w-full">
    <circle cx="12" cy="5.6" r="2.1" />
    <circle cx="5.9" cy="16.4" r="2.1" />
    <circle cx="18.1" cy="16.4" r="2.1" />
    <path d="M9.9 5.9C5.9 6.8 3.3 9.6 4.4 13.6M14.3 6.4c3.5 2.1 4.7 5.6 2.4 8.6M7.9 17.6c2.6 1.5 6 1.2 8.2-.9" />
  </svg>
);

const GIT_GLYPH = (
  <svg {...s} className="h-full w-full">
    <rect
      x="4.2"
      y="4.2"
      width="15.6"
      height="15.6"
      rx="2.4"
      transform="rotate(45 12 12)"
    />
    <circle cx="12" cy="8.4" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="15.4" cy="11.6" r="1.5" fill="currentColor" stroke="none" />
    <path d="M12 9.9v3.6M12.9 11.9h1" />
  </svg>
);

const GITHUB_GLYPH = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const NODE_GLYPH = (
  <svg {...s} className="h-full w-full">
    <path d="M12 2.6 20.4 7.4v9.2L12 21.4 3.6 16.6V7.4L12 2.6Z" />
    <path d="M9.6 14.4c0 .9.9 1.5 2.4 1.5s2.4-.6 2.4-1.5c0-2-4.6-1-4.6-2.9 0-.9.9-1.4 2.2-1.4 1.3 0 2.2.5 2.3 1.3" />
  </svg>
);

const MONGO_GLYPH = (
  <svg {...s} className="h-full w-full">
    <path d="M12 2.6c3.2 3 4.8 5.9 4.8 8.9 0 3.7-2.3 6.2-3.9 7.1L12 21.4l-.9-2.8c-1.6-.9-3.9-3.4-3.9-7.1 0-3 1.6-5.9 4.8-8.9Z" />
    <path d="M12 5.4v12.9" />
  </svg>
);

const SHIELD = (letters: string) => (
  <svg viewBox="0 0 24 24" className="h-full w-full">
    <path
      d="M3.6 2.6h16.8l-1.5 17L12 21.7 5.1 19.6l-1.5-17Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <text
      x="12"
      y="14.6"
      textAnchor="middle"
      fontSize="8"
      fontWeight="700"
      fill="currentColor"
      fontFamily="var(--font-mono-stack, monospace)"
    >
      {letters}
    </text>
  </svg>
);

const SUPABASE_GLYPH = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
    <path d="M12.9 1.8v8.4h6.6c.9 0 1.4 1 .8 1.7l-9.2 10.5c-.7.8-2 .2-2-.9v-8.4H2.5c-.9 0-1.4-1-.8-1.7L10.9.9c.7-.8 2-.2 2 .9Z" />
  </svg>
);

const VITE_GLYPH = (
  <svg {...s} className="h-full w-full">
    <path d="M2.8 5.2 12 21.6l9.2-16.4L12 7.1 2.8 5.2Z" />
  </svg>
);

const VSCODE_GLYPH = (
  <svg {...s} className="h-full w-full">
    <path d="M17.4 2.8 7.2 12l10.2 9.2 3.4-1.7V4.5l-3.4-1.7Z" />
    <path d="M3 9.1 6 7l11.4 9.9M3 14.9 6 17l11.4-9.9" />
  </svg>
);

const MYSQL_GLYPH = (
  <svg {...s} className="h-full w-full">
    <ellipse cx="12" cy="6.2" rx="7.4" ry="3" />
    <path d="M4.6 6.2v11.6c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3V6.2" />
    <path d="M4.6 12c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3" />
  </svg>
);

const REGISTRY: Record<string, Entry> = {
  "React.js": { color: "#61DAFB", glyph: REACT_GLYPH },
  "React Hooks": { color: "#61DAFB", glyph: REACT_GLYPH },
  "Context API": { color: "#61DAFB", mono: "Ctx" },
  useState: { color: "#61DAFB", mono: "uS" },
  useReducer: { color: "#61DAFB", mono: "uR" },
  "Next.js": { color: "var(--fg)", glyph: NEXT_GLYPH },
  JavaScript: { color: "#F7DF1E", mono: "JS" },
  TypeScript: { color: "#3178C6", mono: "TS" },
  HTML5: { color: "#E34F26", glyph: SHIELD("5") },
  CSS3: { color: "#1572B6", glyph: SHIELD("3") },
  jQuery: { color: "#0769AD", mono: "jQ" },
  AJAX: { color: "#4C8DFF", mono: "AJ" },
  "Redux Toolkit": { color: "#764ABC", glyph: REDUX_GLYPH },
  "Tailwind CSS": { color: "#38BDF8", glyph: TAILWIND_GLYPH },
  "Material UI": { color: "#007FFF", mono: "MUI" },
  Bootstrap: { color: "#7952B3", mono: "B" },
  "Node.js": { color: "#5FA04E", glyph: NODE_GLYPH },
  "Express.js": { color: "#94A3B8", mono: "ex" },
  MongoDB: { color: "#47A248", glyph: MONGO_GLYPH },
  MySQL: { color: "#00758F", glyph: MYSQL_GLYPH },
  Supabase: { color: "#3ECF8E", glyph: SUPABASE_GLYPH },
  Git: { color: "#F05033", glyph: GIT_GLYPH },
  GitHub: { color: "var(--fg)", glyph: GITHUB_GLYPH },
  "VS Code": { color: "#0098FF", glyph: VSCODE_GLYPH },
  npm: { color: "#CB3837", mono: "npm" },
  yarn: { color: "#2C8EBB", mono: "y" },
  Vite: { color: "#A855F7", glyph: VITE_GLYPH },
  Axios: { color: "#8B5CF6", mono: "ax" },
};

function initials(name: string) {
  const cleaned = name.replace(/[^A-Za-z0-9 ]/g, " ").trim();
  const parts = cleaned.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2);
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function TechIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const entry = REGISTRY[name];
  const color = entry?.color ?? "var(--accent)";
  const label = entry?.mono ?? (entry?.glyph ? null : initials(name));

  return (
    <span
      aria-hidden="true"
      style={{ color }}
      className={`grid size-7 shrink-0 place-items-center rounded-[7px] border border-line bg-surface-2 text-[10px] font-bold tracking-tight opacity-90 transition-opacity duration-200 group-hover:opacity-100 ${className}`}
    >
      {entry?.glyph ? (
        <span className="block size-4.25">{entry.glyph}</span>
      ) : (
        <span className="font-mono leading-none">{label}</span>
      )}
    </span>
  );
}

export function techColor(name: string) {
  return REGISTRY[name]?.color ?? "var(--accent)";
}
