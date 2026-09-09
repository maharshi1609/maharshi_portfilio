export type Project = {
  slug: string;
  title: string;
  /** Company or client, only where the résumé names one. */
  org?: string;
  tagline: string;
  description: string;
  highlights: string[];
  /**
   * Badges. Where the résumé names the technology explicitly it is listed as
   * a technology; otherwise the badges describe the work that was delivered.
   * Nothing here is inferred beyond what the résumé states.
   */
  tags: string[];
  /** Only set when a real, résumé-provided URL exists. */
  website?: string;
  websiteLabel?: string;
  /** Only set when a real repository URL exists. */
  repo?: string;
  featured: boolean;
  monogram: string;
  /** Two hues used for the generated card artwork. */
  hues: [number, number];
};

export const projects: Project[] = [
  {
    slug: "my-jobhunter-ai",
    title: "My Jobhunter AI",
    tagline: "AI-powered career platform",
    description:
      "An AI-powered career platform covering the full journey from sign-up to mentorship, with separate user, mentor and admin workflows.",
    highlights: [
      "User registration and account verification flow",
      "Resume upload plus AI-assisted resume generation",
      "Interview preparation and mentor functionality",
      "Google Meet-based mentoring sessions",
    ],
    tags: [
      "User Verification",
      "Resume Upload",
      "AI Resume Generation",
      "Interview Prep",
      "Google Meet",
      "Admin Workflows",
    ],
    website: "https://myjobhunter.ai",
    websiteLabel: "myjobhunter.ai",
    featured: true,
    monogram: "JH",
    hues: [214, 190],
  },
  {
    slug: "models-girls-review",
    title: "Models Girls Review",
    tagline: "Next.js redesign & MUI theming",
    description:
      "Redesigned and enhanced an existing Next.js and React.js application by implementing a complete UI theme with Material UI, while keeping existing functionality intact.",
    highlights: [
      "Complete UI theme built with Material UI (MUI)",
      "Reusable, customised UI components",
      "Responsive layouts and styling across the app",
      "Frontend improvements, component updates and bug fixes",
    ],
    tags: [
      "Next.js",
      "React.js",
      "Material UI",
      "Reusable Components",
      "Responsive Layouts",
      "Maintenance",
    ],
    featured: true,
    monogram: "MR",
    hues: [231, 262],
  },
  {
    slug: "girls-review",
    title: "Girls Review",
    tagline: "XenForo platform & integrations",
    description:
      "Worked across a XenForo-based platform: local environment setup, database management, third-party integrations and scraper-driven data workflows.",
    highlights: [
      "Local server setup with WAMP and MySQL / phpMyAdmin administration",
      "Location-based data display and platform configuration",
      "Twilio SMS service integration",
      "Scraper-based workflows for data collection and message processing",
    ],
    tags: ["XenForo", "WAMP", "MySQL", "phpMyAdmin", "Twilio SMS", "Web Scraping"],
    website: "https://girlsreview.nl",
    websiteLabel: "girlsreview.nl",
    featured: true,
    monogram: "GR",
    hues: [196, 172],
  },
  {
    slug: "pickndelivery-admin",
    title: "PicknDelivery Admin Panel",
    org: "IT Futurz",
    tagline: "Operations dashboard",
    description:
      "An admin panel for managing PicknDelivery operations, built around dynamic data and a workflow-first interface.",
    highlights: [
      "Dynamic API integrations for fetching and updating data",
      "Data tables, forms and dashboard components",
      "Responsive, user-friendly admin interfaces",
      "Focused on improving admin workflow efficiency",
    ],
    tags: [
      "Admin Panel",
      "API Integration",
      "Data Tables",
      "Forms",
      "Dashboard UI",
      "Responsive UI",
    ],
    featured: true,
    monogram: "PD",
    hues: [24, 45],
  },
  {
    slug: "visa-application",
    title: "Visa Application Website",
    tagline: "Document-heavy application flow",
    description:
      "A fully responsive visa application platform with complete UI development and API integration, built to streamline document submission.",
    highlights: [
      "Secure file and image uploads",
      "Camera access for in-browser document capture",
      "Dynamic forms across the submission process",
      "Smooth experience across all device sizes",
    ],
    tags: [
      "Responsive UI",
      "API Integration",
      "Secure File Upload",
      "Camera Capture",
      "Dynamic Forms",
    ],
    featured: false,
    monogram: "VA",
    hues: [205, 233],
  },
  {
    slug: "xgsm",
    title: "XGSM Website",
    tagline: "E-commerce storefront & admin",
    description:
      "An e-commerce website for iPhone sales together with its admin panel, covering both the storefront and content management side.",
    highlights: [
      "Fully responsive UI screens for the storefront",
      "API integration for product listing and orders",
      "User management and related operations",
      "Admin-side content management features",
    ],
    tags: [
      "E-commerce",
      "Admin Panel",
      "Product Listing",
      "Orders",
      "User Management",
      "Responsive UI",
    ],
    featured: false,
    monogram: "XG",
    hues: [258, 288],
  },
  {
    slug: "sassy-escort",
    title: "Sassy Escort",
    tagline: "Form validation & data integrity",
    description:
      "Implemented form validation to guarantee data integrity and give users real-time feedback as they complete forms.",
    highlights: [
      "Validation built with JavaScript and React Hook Form",
      "Real-time inline feedback for users",
      "Consistent data integrity across submissions",
    ],
    tags: ["JavaScript", "React Hook Form", "Form Validation", "Real-time Feedback"],
    featured: false,
    monogram: "SE",
    hues: [340, 12],
  },
  {
    slug: "flirtbate",
    title: "Flirtbate",
    tagline: "Responsive layout engineering",
    description:
      "Created responsive layouts and improved functionality using a focused set of well-established npm packages.",
    highlights: [
      "Layouts built with CSS Flexbox, Grid and media queries",
      "Form handling with Formik and Yup validation schemas",
      "Material UI components and Axios for data fetching",
    ],
    tags: [
      "CSS Flexbox",
      "CSS Grid",
      "Media Queries",
      "Formik",
      "Yup",
      "Material UI",
      "Axios",
    ],
    featured: false,
    monogram: "FB",
    hues: [162, 195],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
