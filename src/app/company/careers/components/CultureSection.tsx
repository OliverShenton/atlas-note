import SectionContainer from "@/components/global/SectionContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { cultureData } from "../careerData";
import Image from "next/image";

const CultureSection = () => {
  return (
    <SectionContainer id="careers-culture-section" width="max-w-7xl">
      <SectionTitle
        title="Build Your Career With Us"
        titleSize="text-4xl"
        subtitle="Join a team that values growth and innovation."
        position="left"
      />
      <div className="grid grid-cols-4 gap-8">
        {cultureData.map((item) => (
          <Image key={item.src} src={item} alt="Culture" className="shadow-md shadow-white/5" />
        ))}
      </div>
      <p className="text-[var(--secondary-text)] leading-relaxed max-w-5xl mx-auto text-center text-xl border border-white/5 p-4">
        At AtlasNote, we believe great ideas thrive in an environment where people feel empowered to
        experiment, collaborate, and grow together. Our culture is built on curiosity, respect, and
        the joy of creating meaningful work with great people. Whether we’re solving challenges side
        by side, sharing a laugh over coffee, or celebrating team wins, we approach every day with
        creativity and purpose. Here, you’ll find a place that values individuality, fosters
        learning, and encourages you to push the boundaries of what’s possible.
      </p>
    </SectionContainer>
  );
};

export default CultureSection;
