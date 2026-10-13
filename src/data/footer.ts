import { headerNav } from "./navigation";
import { services } from "./services";

export type FooterLink = {
  id: string;
  label: string;
  href: string;
  placeholder?: boolean;
};

export type FooterGroup = {
  id: string;
  title: string;
  links: FooterLink[];
};

export const footer = {
  description:
    "A contemporary dental practice built around prevention, clear communication and thoughtful, patient-focused care for the whole family.",
  groups: [
    {
      id: "explore",
      title: "Explore",
      links: headerNav.map((item) => ({
        id: item.id,
        label: item.label,
        href: item.href,
      })),
    },
    {
      id: "treatments",
      title: "Treatments",
      links: services.map((service) => ({
        id: service.id,
        label: service.title,
        href: service.href,
      })),
    },
  ] satisfies FooterGroup[],
  legal: [
    { id: "privacy", label: "Privacy Policy", href: "#", placeholder: true },
    { id: "terms", label: "Terms of Service", href: "#", placeholder: true },
  ] satisfies FooterLink[],
} as const;
