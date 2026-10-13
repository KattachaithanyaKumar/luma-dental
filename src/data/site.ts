import { theme } from "./theme";

export type SocialId = "instagram" | "facebook" | "linkedin";

export type SocialLink = {
  id: SocialId;
  label: string;
  href: string;
};

export const site = {
  name: "Morrow Dental",
  shortName: "Morrow",
  tagline: "Contemporary dental care",
  description:
    "Morrow Dental is a contemporary dental practice offering preventive, restorative and cosmetic dentistry with clear communication and personalised, patient-focused care.",
  url: "https://morrowdental.example.com",
  themeColor: theme.colors.teal,
  email: "hello@morrowdental.example.com",
  social: [
    {
      id: "instagram",
      label: "Morrow Dental on Instagram",
      href: "https://www.instagram.com/",
    },
    {
      id: "facebook",
      label: "Morrow Dental on Facebook",
      href: "https://www.facebook.com/",
    },
    {
      id: "linkedin",
      label: "Morrow Dental on LinkedIn",
      href: "https://www.linkedin.com/",
    },
  ] satisfies SocialLink[],
} as const;

export type Site = typeof site;
