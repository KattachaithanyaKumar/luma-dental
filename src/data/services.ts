export type Treatment = {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  image: {
    src: string;
    alt: string;
  };
};

export const treatments = {
  label: "Treatments",
  heading: "Care for every stage of your smile.",
  description:
    "Preventive, restorative and cosmetic dentistry under one roof — with clear advice at every step and no treatment recommended without a reason.",
} as const;

export const services: Treatment[] = [
  {
    id: "general-dentistry",
    number: "01",
    title: "General Dentistry",
    description:
      "Check-ups, fillings and day-to-day dental care that keeps your mouth healthy and comfortable.",
    href: "#treatment-general-dentistry",
    icon: "stethoscope",
    image: {
      src: "/images/treatment-care.jpg",
      alt: "A dentist carrying out a routine dental check-up",
    },
  },
  {
    id: "preventive-dentistry",
    number: "02",
    title: "Preventive Dentistry",
    description:
      "Professional cleaning, hygiene guidance and early detection to stop problems before they start.",
    href: "#treatment-preventive-dentistry",
    icon: "shield",
    image: {
      src: "/images/hero-clinical.jpg",
      alt: "A dentist examining a patient's teeth during a preventive appointment",
    },
  },
  {
    id: "dental-implants",
    number: "03",
    title: "Dental Implants",
    description:
      "Replacing missing teeth with a natural-looking result, planned carefully from the first consultation.",
    href: "#treatment-dental-implants",
    icon: "layers",
    image: {
      src: "/images/about-consult.jpg",
      alt: "A dentist discussing an implant treatment plan with a patient",
    },
  },
  {
    id: "cosmetic-dentistry",
    number: "04",
    title: "Cosmetic Dentistry",
    description:
      "Considered improvements to the shape, shade and balance of your smile, guided by your preferences.",
    href: "#treatment-cosmetic-dentistry",
    icon: "sparkles",
    image: {
      src: "/images/hero-support.jpg",
      alt: "A dentist discussing cosmetic treatment options with a patient",
    },
  },
  {
    id: "teeth-whitening",
    number: "05",
    title: "Teeth Whitening",
    description:
      "Safe, gradual whitening that brightens your smile while keeping the result convincingly natural.",
    href: "#treatment-teeth-whitening",
    icon: "sun",
    image: {
      src: "/images/clinical-review.jpg",
      alt: "A dentist reviewing the shade of a patient's teeth",
    },
  },
  {
    id: "orthodontics",
    number: "06",
    title: "Orthodontics",
    description:
      "Modern alignment options for adults and children, focused on comfort as much as the end result.",
    href: "#treatment-orthodontics",
    icon: "ruler",
    image: {
      src: "/images/patient-1.jpg",
      alt: "A patient following orthodontic treatment at Morrow Dental",
    },
  },
  {
    id: "restorative-dentistry",
    number: "07",
    title: "Restorative Dentistry",
    description:
      "Crowns, bridges and repairs that restore comfort, function and confidence in your smile.",
    href: "#treatment-restorative-dentistry",
    icon: "heart-pulse",
    image: {
      src: "/images/clinical-procedure.jpg",
      alt: "A dentist carrying out a restorative dental procedure",
    },
  },
  {
    id: "emergency-dental-care",
    number: "08",
    title: "Emergency Dental Care",
    description:
      "Prompt appointments when something hurts, breaks or simply cannot wait any longer.",
    href: "#treatment-emergency-dental-care",
    icon: "clock",
    image: {
      src: "/images/care-comfort.jpg",
      alt: "A dentist assessing a patient's urgent dental concern",
    },
  },
];

export const serviceOptions = services.map((service) => service.title);
