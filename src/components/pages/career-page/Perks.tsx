import SectionContainer from "@/components/global/SectionContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { perksData } from "@/data/company/careerData";

const Perks = () => {
  return (
    <SectionContainer verticalPadding verticalSpacing="space-y-20">
      <SectionTitle
        title="Benefits that support your best work."
        subtitle="From flexible hours to generous leave and learning stipends, we design our perks to help you stay healthy, grow your skills, and trhive inside and outside of work."
        section="Perks"
        sectionType="perks"
      />
      <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto">
        {perksData.map((perk) => (
          <article className={`${perk.background} p-4 rounded-xl text-center space-y-4 text-white`}>
            <h2 className="text-lg font-bold">{perk.title}</h2>
            <p>{perk.desc}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Perks;
