export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  /** Primary groups are given more visual weight in the grid. */
  primary: boolean;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    blurb: "The core of my day-to-day work.",
    primary: true,
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "jQuery",
      "AJAX",
    ],
  },
  {
    id: "state",
    title: "State Management",
    blurb: "Keeping complex UI state predictable.",
    primary: true,
    skills: [
      "Redux Toolkit",
      "Context API",
      "React Hooks",
      "useState",
      "useReducer",
    ],
  },
  {
    id: "ui",
    title: "UI & Styling",
    blurb: "Design systems and component libraries.",
    primary: true,
    skills: ["Tailwind CSS", "Material UI", "Bootstrap"],
  },
  {
    id: "tools",
    title: "Tools",
    blurb: "Everyday build and collaboration tooling.",
    primary: true,
    skills: ["Git", "GitHub", "VS Code", "npm", "yarn", "Vite", "Axios"],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "The server-side half of the stack.",
    primary: false,
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "database",
    title: "Database",
    blurb: "Relational and hosted data layers.",
    primary: false,
    skills: ["MySQL", "Supabase"],
  },
];

/** Highlighted in the hero marquee — the primary development profile. */
export const coreStack = [
  "Next.js",
  "React.js",
  "JavaScript",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "Material UI",
  "HTML5",
  "CSS3",
  "Axios",
  "Git",
  "GitHub",
];

export const softSkills = [
  "Time Management",
  "Team Collaboration",
  "Problem-solving",
  "Communication",
];
