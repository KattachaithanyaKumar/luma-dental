export type OpeningHour = {
  id: string;
  label: string;
  value: string;
};

export const contact = {
  demo: true,
  phone: {
    display: "+91 40 4000 1234",
    href: "tel:+914040001234",
  },
  email: {
    display: "hello@morrowdental.example.com",
    href: "mailto:hello@morrowdental.example.com",
  },
  address: {
    line1: "Road No. 12, Banjara Hills, Suite 302",
    line2: "Hyderabad, Telangana 500034",
    short: "Banjara Hills, Hyderabad",
    full: "Road No. 12, Banjara Hills, Suite 302, Hyderabad, Telangana 500034",
  },
  hours: [
    { id: "weekdays", label: "Monday – Friday", value: "9:30 – 19:00" },
    { id: "saturday", label: "Saturday", value: "10:00 – 14:00" },
    { id: "sunday", label: "Sunday", value: "Closed" },
  ] satisfies OpeningHour[],
  map: {
    embedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=78.4092%2C17.3876%2C78.4692%2C17.4376&layer=mapnik&marker=17.4126%2C78.4392",
    destinationUrl:
      "https://www.google.com/maps/search/?api=1&query=Road+No.+12%2C+Banjara+Hills%2C+Hyderabad%2C+Telangana+500034",
    image: {
      src: "/images/clinic-room.jpg",
      alt: "A bright, modern treatment room at the Morrow Dental practice",
    },
  },
} as const;

export type Contact = typeof contact;
