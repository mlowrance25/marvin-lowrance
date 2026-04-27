import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Marvin Lowrance",
  EMAIL: "lowrancemarvin@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 4,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Marvin Lowrance",
  DESCRIPTION: "Engineering Leader, Technical Architect, and Founder. 8 years as a professional baseball player. Building software that transforms how cities, health organizations, and institutions operate.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/marvinlowrance",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/marvinlowrance",
  }
];
