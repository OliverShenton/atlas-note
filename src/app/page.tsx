import CallToActionSection from "@/components/sections/landing/CallToActionSection";
import DemoSection from "@/components/sections/landing/DemoSection";
import FeaturesSection from "@/components/sections/landing/FeaturesSection";
import HeroSection from "@/components/sections/landing/HeroSection";
import PricingTeaserSection from "@/components/sections/landing/PricingTeaserSection";
import ProblemSection from "@/components/sections/landing/ProblemSection";
import TestimonialSection from "@/components/sections/landing/TestimonialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AtlasNote",
  description:
    "AtlasNote lets teams capture knowledge as living documents. It combines a Notion-style editor (blocks, slash commands, rich embeds) with AI retrieval-augmented search, offline-first UX, and real-time collaboration. Think “docs that answer back.",
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
