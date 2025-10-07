import CallToActionSection from "@/components/pages/landing/sections/CallToActionSection";
import DemoSection from "@/components/pages/landing/sections/DemoSection";
import FeaturesSection from "@/components/pages/landing/sections/FeaturesSection";
import HeroSection from "@/components/pages/landing/sections/HeroSection";
import PricingTeaserSection from "@/components/pages/landing/sections/PricingTeaserSection";
import ProblemSection from "@/components/pages/landing/sections/ProblemSection";
import TestimonialSection from "@/components/pages/landing/sections/TestimonialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AtlasNote",
  description:
    "AtlasNote lets teams capture knowledge as living documents. It combines a Notion-style editor (blocks, slash commands, rich embeds) with AI retrieval-augmented search, offline-first UX, and real-time collaboration. Think “docs that answer back”.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <ProblemSection /> */}
      {/* <FeaturesSection /> */}
      {/* <DemoSection /> */}
      {/* <TestimonialSection /> */}
      {/* <PricingTeaserSection /> */}
      {/* <CallToActionSection /> */}
    </>
  );
}
