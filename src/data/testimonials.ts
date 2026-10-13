export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  detail: string;
  rating?: number;
  avatar: string;
};

export const testimonialsSection = {
  label: "Patient feedback",
  heading: "Experiences that matter.",
  note: "Placeholder testimonials for this template — not verified patient reviews.",
} as const;

export const testimonials: Testimonial[] = [
  {
    id: "avery",
    quote:
      "I used to put off the dentist for years. The team explained every step before they did it, and I left genuinely relaxed. That had never happened before.",
    name: "Avery Thompson",
    detail: "Patient since 2021",
    rating: 5,
    avatar: "/images/patient-1.jpg",
  },
  {
    id: "jordan",
    quote:
      "They set out a clear plan with honest costs and no pressure at all. Six months on, my check-ups are quick and completely painless.",
    name: "Jordan Lee",
    detail: "Implant patient",
    rating: 5,
    avatar: "/images/patient-2.jpg",
  },
  {
    id: "riley",
    quote:
      "My children ask when their next visit is, which says everything. Warm, patient and genuinely good with nervous little ones.",
    name: "Riley Morgan",
    detail: "Family patient",
    rating: 5,
    avatar: "/images/patient-3.jpg",
  },
];
