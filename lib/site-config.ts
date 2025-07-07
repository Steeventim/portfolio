export const siteConfig = {
  name: "Timnou Steeve | Software Developer",
  description:
    "Online Creator and educator about React, Tailwind, Next.js and TypeScript. Passionate about creating innovative web applications and AI integration.",
  url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ogImage: "/og-image.jpg",
  creator: "Timnou Steeve",
  keywords: [
    "Timnou Steeve",
    "Software Developer",
    "React Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer",
    "Frontend Developer",
    "JavaScript",
    "AI Integration",
    "OpenAI",
    "Cameroon Developer",
  ] as string[],
  links: {
    github: "https://github.com/Steeventim",
    linkedin: "https://linkedin.com/in/timnou-steeve",
    twitter: "https://twitter.com/steeventim",
  },
} as const;

export type SiteConfig = typeof siteConfig;
