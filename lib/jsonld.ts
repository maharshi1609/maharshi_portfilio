import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { seo, site, siteUrl } from "@/data/site";
import { skillGroups } from "@/data/skills";

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

/** Only real, résumé-provided profile URLs end up in sameAs. */
const sameAs = [site.github, site.linkedin].filter(
  (url): url is string => Boolean(url),
);

const knowsAbout = Array.from(
  new Set(skillGroups.flatMap((group) => group.skills)),
);

const person = {
  "@type": "Person",
  "@id": personId,
  name: site.name,
  jobTitle: site.role,
  description: site.summary,
  url: `${siteUrl}/`,
  image: `${siteUrl}${site.avatar}`,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: site.region,
    addressCountry: site.country,
  },
  knowsAbout,
  ...(sameAs.length ? { sameAs } : {}),
  alumniOf: education.map((item) => ({
    "@type": "EducationalOrganization",
    name: item.institution,
  })),
  worksFor: {
    "@type": "Organization",
    name: experience[0].company,
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationLocation: {
      "@type": "City",
      name: "Surat",
    },
    skills: knowsAbout.join(", "),
  },
};

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: `${siteUrl}/`,
  name: seo.title,
  description: seo.description,
  inLanguage: "en",
  publisher: { "@id": personId },
};

const profilePage = {
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profile`,
  url: `${siteUrl}/`,
  name: seo.title,
  description: seo.description,
  isPartOf: { "@id": websiteId },
  about: { "@id": personId },
  mainEntity: { "@id": personId },
};

const projectList = {
  "@type": "ItemList",
  "@id": `${siteUrl}/#projects`,
  name: `Projects by ${site.name}`,
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      "@id": `${siteUrl}/#project-${project.slug}`,
      name: project.title,
      description: project.description,
      keywords: project.tags.join(", "),
      creator: { "@id": personId },
      ...(project.website ? { url: project.website } : {}),
    },
  })),
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [person, website, profilePage, projectList],
};
