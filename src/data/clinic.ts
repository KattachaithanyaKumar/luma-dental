export type ClinicPromise = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const clinic = {
  label: "Why patients choose Morrow",
  promises: [
    {
      id: "preventive",
      icon: "shield",
      title: "Preventive & restorative care",
      description:
        "Routine examinations and treatment that keeps small problems small.",
    },
    {
      id: "planning",
      icon: "clipboard",
      title: "Personalised treatment planning",
      description:
        "Options explained in plain language, with costs before you decide.",
    },
    {
      id: "equipment",
      icon: "scan",
      title: "Modern clinical equipment",
      description:
        "Contemporary tools that support accurate assessment and comfortable care.",
    },
    {
      id: "consultations",
      icon: "chat",
      title: "Patient-focused consultations",
      description:
        "Unhurried appointments that always leave room for your questions.",
    },
  ] satisfies ClinicPromise[],
} as const;
