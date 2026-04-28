import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "@/components/WhyUs";
import MissionVision from "@/components/MissionVision";
import PromoSection from "@/components/PromoSection";
import EducationSection from "@/components/EducationSection";
import ContactFooter from "@/components/ContactFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <ServicesSection />
        <WhyUs />
        <MissionVision />
        <PromoSection />
        <EducationSection />
        <ContactFooter />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
