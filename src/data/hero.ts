export type HeroImage = {
  src: string;
  alt: string;
};

export const hero = {
  eyebrow: "Contemporary dental care",
  headline: "Better dental care starts with feeling understood.",
  supporting:
    "From routine preventive care to advanced restorative treatments, we combine modern dentistry with a thoughtful, personal approach to every smile.",
  primaryCta: {
    label: "Book an Appointment",
  },
  secondaryCta: {
    label: "Explore Our Treatments",
    href: "#treatments",
  },
  disciplines: "Preventive · Restorative · Cosmetic Dentistry",
  image: {
    src: "/images/hero-clinical.jpg",
    alt: "A dentist carrying out a routine examination on a patient in a modern dental clinic",
  } satisfies HeroImage,
  supportImage: {
    src: "/images/hero-support.jpg",
    alt: "A dentist explaining treatment options to a patient holding a mirror",
  } satisfies HeroImage,
  trust: {
    icon: "shield",
    label: "Patient-first care",
    value: "Clear plans, honest costs and unhurried appointments.",
  },
} as const;
