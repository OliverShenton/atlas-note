import SectionContainer from "@/components/global/SectionContainer";
import { socialProofData } from "../pricingData";
import Image from "next/image";

const SocialProofSection = () => {
  return (
    <SectionContainer id="pricing-social-proof-section" className="bg-[#383837]">
      <div className="grid grid-cols-4 items-center gap-8 justify-evenly max-w-6xl mx-auto text-center">
        {socialProofData.map((item) => (
          <div key={item.name} className="flex flex-col items-center -space-y-4">
            <Image src={item.logo} alt={item.name} width={150} height={150} loading="lazy" />
            <p className="text-base text-[var(--secondary-text)]">{item.name}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default SocialProofSection;
