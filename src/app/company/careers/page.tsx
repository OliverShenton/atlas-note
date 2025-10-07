import SectionContainer from "@/components/global/SectionContainer";
import Hero from "@/components/pages/career-page/Hero";
import Perks from "@/components/pages/career-page/Perks";
import WhyJoinUs from "@/components/pages/career-page/WhyJoinUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | AtlasNote",
  description:
    "Join AtlasNote and help shape the future of collaborative knowledge. We're building powerful tools that combine AI, real-time collaboration, and beautiful design—so teams everywhere can think, create, and grow together. Explore open roles and start your journey with us.",
};

const CareerPage = () => {
  return (
    <SectionContainer id="career-page">
      <Hero />
      <WhyJoinUs />
      <Perks />
    </SectionContainer>
  );
};

export default CareerPage;
