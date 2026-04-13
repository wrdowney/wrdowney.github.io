import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Will Downey",
  EMAIL: "wdowney20@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Software engineer building mobile apps, UI systems, and developer tooling.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "A snapshot of my recent software engineering work.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Selected projects across UI tooling, data visualization, and web apps.",
};

export const SOCIALS: Socials = [
  // { 
  //   NAME: "twitter-x",
  //   HREF: "https://twitter.com/willdowney",
  // },
  { 
    NAME: "github",
    HREF: "https://github.com/wrdowney"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/widowney",
  }
];
