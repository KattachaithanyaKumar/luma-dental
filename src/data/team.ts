export type TeamMember = {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  image: string;
  profileHref?: string;
};

export const teamSection = {
  label: "Our team",
  heading: "Meet the people behind your care.",
  description:
    "A small clinical team covering family check-ups, restorative work, cosmetic care and alignment — and who will remember your name.",
  note: "Demonstration profiles for this template. Names, roles and photographs are placeholders.",
} as const;

export const team: TeamMember[] = [
  {
    id: "mara-ellison",
    name: "Dr. Mara Ellison",
    role: "General & Family Dentistry",
    focus: "Preventive care",
    bio: "Leads the practice with a calm, unhurried approach and a focus on prevention over reaction.",
    image: "/images/team-1.jpg",
  },
  {
    id: "daniel-okafor",
    name: "Dr. Daniel Okafor",
    role: "Implant & Restorative Dentistry",
    focus: "Restorative care",
    bio: "Guides patients through rebuilding missing or damaged teeth with careful, staged planning.",
    image: "/images/team-2.jpg",
  },
  {
    id: "sofia-ramirez",
    name: "Dr. Sofia Ramirez",
    role: "Cosmetic & Whitening",
    focus: "Cosmetic care",
    bio: "Refines the shape and shade of a smile while keeping every result convincingly natural.",
    image: "/images/team-3.jpg",
  },
  {
    id: "hana-sato",
    name: "Dr. Hana Sato",
    role: "Orthodontics",
    focus: "Alignment",
    bio: "Works with adults and children on comfortable, modern alignment from the first visit onward.",
    image: "/images/team-4.jpg",
  },
];
