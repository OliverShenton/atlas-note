import SectionContainer from "@/components/global/SectionContainer";
import Background from "./Background";

const Hero = () => {
  return (
    <SectionContainer verticalPadding>
      <Background />
      <div className="relative flex flex-col items-center justify-center w-full h-full space-y-8">
        <div className="font-bold text-7xl space-x-4 flex">
          <h1 id="logo-name">AtlasNote</h1>
          <span>Careers</span>
        </div>
        <p className="text-2xl text-[var(--secondary-text)]">
          Your future could be just around the corner!
        </p>
      </div>
    </SectionContainer>
  );
};

export default Hero;
