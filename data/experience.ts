export type Role = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  /** ISO dates for structured data / <time> elements. */
  startISO: string;
  endISO?: string;
  points: string[];
  stack: string[];
};

/**
 * Roles exactly as listed on the résumé, most recent first.
 * Responsibilities are drawn from the résumé's "relevant experience" list.
 */
export const experience: Role[] = [
  {
    company: "DivTech System",
    title: "Full Stack Developer",
    location: "Surat, India",
    start: "Feb 2025",
    end: "Present",
    current: true,
    startISO: "2025-02",
    points: [
      "Integrate REST APIs using Axios, handling GET, POST, PUT and DELETE requests across application modules.",
      "Manage React application state with useState and useReducer to keep complex UI flows predictable.",
      "Build responsive interfaces that adapt cleanly from small mobile screens to large desktop displays.",
      "Fix bugs and maintain existing features as part of ongoing application support.",
    ],
    stack: ["React.js", "Next.js", "JavaScript", "Axios", "Tailwind CSS"],
  },
  {
    company: "IT Futurz",
    title: "Full Stack Developer",
    location: "Surat, India",
    start: "July 2025",
    end: "Feb 2026",
    current: false,
    startISO: "2025-07",
    endISO: "2026-02",
    points: [
      "Developed the PicknDelivery admin panel, including dashboard components, data tables and forms.",
      "Implemented dynamic API integrations for fetching and updating operational data.",
      "Built responsive, user-friendly admin interfaces to improve day-to-day workflow efficiency.",
    ],
    stack: ["React.js", "Material UI", "Axios", "REST APIs"],
  },
  {
    company: "DivTech System",
    title: "Full Stack Developer",
    location: "Surat, India",
    start: "Dec 2023",
    end: "June 2025",
    current: false,
    startISO: "2023-12",
    endISO: "2025-06",
    points: [
      "Developed responsive UI screens with Tailwind CSS and Material UI component libraries.",
      "Implemented form handling and validation using React Hook Form.",
      "Worked in an Agile setup, tracking and managing tasks through Trello.",
      "Handled bug fixing and application maintenance across active client projects.",
    ],
    stack: ["React.js", "React Hook Form", "Material UI", "Tailwind CSS", "Trello"],
  },
];
