export type AboutPrinciple = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const about = {
  label: "About the practice",
  heading: "A thoughtful approach to your dental health.",
  body: [
    "Morrow Dental is a contemporary practice built around prevention, careful diagnosis and clear communication. We take the time to understand your concerns before we recommend anything.",
    "Your care begins with a conversation. We assess, explain what we find and set out a plan you can understand — then support you through it at a pace that feels right.",
  ],
  image: {
    src: "/images/about-consult.jpg",
    alt: "A dentist examining a patient during a consultation in a bright dental clinic",
  },
  secondaryImage: {
    src: "/images/about-diagnostic.jpg",
    alt: "A dentist using diagnostic equipment during a detailed examination",
  },
  principles: [
    {
      id: "prevention",
      icon: "shield",
      title: "Prevention first",
      description:
        "We focus on protecting your natural teeth and catching problems early.",
    },
    {
      id: "communication",
      icon: "chat",
      title: "Clear communication",
      description:
        "Plain explanations, honest options and transparent costs at every step.",
    },
    {
      id: "individual-care",
      icon: "heart-pulse",
      title: "Individualised care",
      description:
        "Treatment planned around your priorities, never a standard script.",
    },
  ] satisfies AboutPrinciple[],
  cta: {
    label: "Meet the dental team",
    href: "#team",
  },
} as const;
