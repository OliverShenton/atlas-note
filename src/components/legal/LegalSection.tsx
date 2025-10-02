import SectionContainer from "../global/SectionContainer";

interface LegalSectionProps {
  title: string;
  date: string;
  sidebar: React.ReactNode;
  main: React.ReactNode;
}

const LegalSection = ({ title, date, sidebar, main }: LegalSectionProps) => {
  return (
    <SectionContainer ariaLabelledBy={title} width="max-w-5xl">
      <div className="flex">
        <div className="flex-1">{sidebar}</div>
        <div className="flex-3 space-y-4">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-[var(--secondary-text)]">Effective date: {date}</p>
          <div className="space-y-6">{main}</div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LegalSection;
