import { contact } from "./contact";
import { services } from "./services";

export type AppointmentFieldLabels = {
  name: string;
  phone: string;
  email: string;
  date: string;
  treatment: string;
  notes: string;
};

export type AppointmentFormContent = {
  title: string;
  description: string;
  disclaimer: string;
  successTitle: string;
  successBody: string;
  submitLabel: string;
  submittingLabel: string;
  resetLabel: string;
  fields: AppointmentFieldLabels;
  treatments: string[];
};

export const appointmentForm: AppointmentFormContent = {
  title: "Request an appointment",
  description:
    "Share a few details and our front desk will follow up to confirm a time that suits you.",
  disclaimer:
    "This is a demonstration form for a website template. Submitting it does not create a real appointment and no information is sent or stored.",
  successTitle: "Request received — in this demo",
  successBody:
    "In a live practice this request would reach the front desk. Nothing has actually been submitted here.",
  submitLabel: "Send request",
  submittingLabel: "Sending…",
  resetLabel: "Submit another request",
  fields: {
    name: "Full name",
    phone: "Phone number",
    email: "Email address",
    date: "Preferred date",
    treatment: "Treatment of interest",
    notes: "Anything we should know?",
  },
  treatments: ["Not sure yet", ...services.map((service) => service.title)],
};

export const appointmentCta = {
  label: "Book your visit",
  heading: "Let's take the next step toward better dental health.",
  description:
    "Book a consultation to discuss your concerns, understand your options, and plan your care.",
  primaryLabel: "Request an Appointment",
  secondaryLabel: "Call the Clinic",
  secondaryHref: contact.phone.href,
  secondaryPhone: contact.phone.display,
} as const;

export type AppointmentCta = typeof appointmentCta;
