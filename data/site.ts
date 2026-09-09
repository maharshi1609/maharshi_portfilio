/**
 * Single source of truth for identity, contact details and navigation.
 * Every value here comes from the résumé — nothing is invented.
 */

// TODO: replace with the real production domain once deployed, or set
// NEXT_PUBLIC_SITE_URL in the environment. Used for canonical/OG/sitemap URLs.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://maharshipatel.dev"
).replace(/\/$/, "");

export const site = {
  name: "Maharshi Patel",
  role: "Full Stack Developer",
  location: "Surat, India",
  region: "Gujarat",
  country: "IN",
  email: "maharship0792@gmail.com",
  phone: "+91 9328287152",
  phoneHref: "+919328287152",

  headline: "Hi, I'm Maharshi Patel",
  tagline:
    "Building responsive, scalable and user-focused web experiences with React.js and Next.js.",

  summary:
    "Full Stack Developer specializing in React.js and Next.js, with experience in API integration, responsive UI development, state management and form handling, together with backend and database work using Node.js, Express.js, MongoDB and MySQL.",

  /**
   * TODO: add your profile URLs here. Buttons render only when a URL is set,
   * so no placeholder or fake links are ever shown.
   */
  github: "" as string,
  linkedin: "" as string,

  // Replace public/profile.png to change the hero photo.
  avatar: "/profile.png",
  avatarAlt:
    "Portrait of Maharshi Patel, Full Stack Developer based in Surat, India",
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const sectionIds = navLinks.map((l) => l.href.slice(1));

export const seo = {
  title: "Maharshi Patel | Full Stack Developer | React.js & Next.js",
  description:
    "Maharshi Patel is a Full Stack Developer from Surat specializing in React.js, Next.js, JavaScript, TypeScript, responsive web development, API integration and Node.js.",
  keywords: [
    "Maharshi Patel",
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material UI",
    "Responsive Web Development",
    "API Integration",
    "Full Stack Developer Surat",
  ],
} as const;
