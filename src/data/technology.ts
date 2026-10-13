export type TechnologyHighlight = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const technology = {
  label: "Clinical technology",
  heading: "Modern tools. Clearer treatment decisions.",
  body: "Modern equipment helps us assess accurately, plan carefully and show you exactly what we see — so you can make decisions about your care with confidence.",
  image: {
    src: "/images/tech-imaging.jpg",
    alt: "A dental monitor displaying a digital X-ray alongside modern clinical equipment",
  },
  highlights: [
    {
      id: "imaging",
      icon: "scan",
      title: "Digital imaging",
      description:
        "Clear images that help us diagnose precisely and explain findings to you.",
    },
    {
      id: "diagnostics",
      icon: "microscope",
      title: "Modern diagnostic equipment",
      description:
        "Contemporary instruments that support careful, comfortable assessment.",
    },
    {
      id: "planning",
      icon: "clipboard",
      title: "Clear treatment planning",
      description:
        "Findings turned into a plan you can understand before you decide.",
    },
  ] satisfies TechnologyHighlight[],
  note: "Technology details are demonstration content for this template.",
} as const;
