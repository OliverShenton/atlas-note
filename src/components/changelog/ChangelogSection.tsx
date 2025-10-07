import SectionContainer from "../global/SectionContainer";

interface ChangelogSectionProps {
  title: string;
  main: React.ReactNode;
}

const ChangelogSection = ({ title, main }: ChangelogSectionProps) => {
  return (
    <SectionContainer ariaLabelledBy={title} width="max-w-5xl">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="space-y-6">{main}</div>
      </div>
    </SectionContainer>
  );
};

export default ChangelogSection;
