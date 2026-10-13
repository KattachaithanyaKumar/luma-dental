export type OpeningHour = {
  id: string;
  label: string;
  value: string;
};

export const contact = {
  demo: true,
  phone: {
    display: "+1 (555) 012-3456",
    href: "tel:+15550123456",
  },
  email: {
    display: "hello@morrowdental.example.com",
    href: "mailto:hello@morrowdental.example.com",
  },
  address: {
    line1: "218 Harbour Street, Suite 4",
    line2: "Riverside, CA 92501",
    short: "Riverside, California",
    full: "218 Harbour Street, Suite 4, Riverside, CA 92501",
  },
  hours: [
    { id: "weekdays", label: "Monday – Friday", value: "8:00 – 18:00" },
    { id: "saturday", label: "Saturday", value: "9:00 – 14:00" },
    { id: "sunday", label: "Sunday", value: "Closed" },
  ] satisfies OpeningHour[],
  map: {
    embedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-117.4262%2C33.9333%2C-117.3662%2C33.9733&layer=mapnik&marker=33.9533%2C-117.3962",
    destinationUrl:
      "https://www.google.com/maps/search/?api=1&query=Riverside+California",
    image: {
      src: "/images/clinic-room.jpg",
      alt: "A bright, modern treatment room at the Morrow Dental practice",
    },
  },
} as const;

export type Contact = typeof contact;
