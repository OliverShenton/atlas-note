import { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import CultureSection from "./components/CultureSection";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  title: "Careers | AtlasNote",
  description:
    "Join AtlasNote and help shape the future of collaborative knowledge. We're building powerful tools that combine AI, real-time collaboration, and beautiful design—so teams everywhere can think, create, and grow together. Explore open roles and start your journey with us.",
};

const CareerPage = () => {
  return (
    <>
      <HeroSection />
      <CultureSection />
      <ContactSection />
    </>
  );
};

export default CareerPage;
