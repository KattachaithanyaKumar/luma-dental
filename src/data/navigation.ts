import { services } from "./services";

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const headerNav: NavItem[] = [
  { id: "home", label: "Home", href: "#top" },
  { id: "treatments", label: "Treatments", href: "#treatments" },
  { id: "patient-info", label: "Patient Information", href: "#patient-info" },
  { id: "team", label: "Our Team", href: "#team" },
  { id: "contact", label: "Contact", href: "#contact" },
];

/** Items shown in the desktop "Treatments" dropdown. */
export const treatmentMenu: NavItem[] = services.map((service) => ({
  id: service.id,
  label: service.title,
  href: service.href,
}));

export const primaryCta = {
  label: "Book an Appointment",
} as const;
