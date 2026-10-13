export type PatientCarePrinciple = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const patientCare = {
  label: "Patient-first care",
  heading: "Your comfort is part of the treatment.",
  body: "A visit to the dentist can feel like a lot to arrange. Our team is here to make the experience easier — at every stage, from your first question to your last follow-up.",
  image: {
    src: "/images/care-comfort.jpg",
    alt: "A dentist carrying out a careful, comfortable examination",
  },
  principles: [
    {
      id: "listen",
      icon: "chat",
      title: "We listen to your concerns.",
      description:
        "Your history, worries and priorities guide everything that follows.",
    },
    {
      id: "explain",
      icon: "checklist",
      title: "We explain the options and costs.",
      description:
        "Clear choices and transparent pricing, with no pressure to decide.",
    },
    {
      id: "next-steps",
      icon: "heart-pulse",
      title: "We help you understand the next steps.",
      description:
        "A written plan and all the time you need to ask questions.",
    },
  ] satisfies PatientCarePrinciple[],
} as const;
