import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TreatmentsSection } from "@/components/sections/TreatmentsSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { PatientCareSection } from "@/components/sections/PatientCareSection";
import { PatientJourneySection } from "@/components/sections/PatientJourneySection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AppointmentCTASection } from "@/components/sections/AppointmentCTASection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <TreatmentsSection />
      <TechnologySection />
      <PatientCareSection />
      <PatientJourneySection />
      <TeamSection />
      <TestimonialsSection />
      <AppointmentCTASection />
      <ContactSection />
    </>
  );
}
