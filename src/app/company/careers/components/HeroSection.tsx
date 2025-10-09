import SectionContainer from "@/components/global/SectionContainer";
import HeroBackground from "./HeroBackground";

const HeroSection = () => {
  return (
    <SectionContainer id="careers-hero-section" verticalPadding>
      <HeroBackground />
      <div className="relative flex flex-col items-center justify-center w-full h-full space-y-8 text-[var(--text)] py-10">
        <div className="font-bold text-7xl space-x-4 flex">
          <h1 id="logo-name">AtlasNote</h1>
          <span>Careers</span>
        </div>
        <p className="text-2xl text-[var(--secondary-text)] max-w-3xl mx-auto text-center">
          We're building tools that empower small businesses to scale their digital presence. Our
          team thrives on curiosity, creativity, and good coffee.
        </p>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
