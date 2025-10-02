interface SectionTitleProps {
  section: string;
  title: string;
  subtitle: string;
  sectionType: "problem" | "features";
}

const sectionTypeVariants = {
  problem: "from-red-500 via-pink-500 to-rose-500",
  features: "from-indigo-500 via-violet-500 to-purple-500",
};

const SectionTitle = ({ section, title, subtitle, sectionType }: SectionTitleProps) => {
  return (
    <div className="flex text-center gap-16 items-center max-w-xl mx-auto z-10 pointer-events-none">
      {/* <div className="border-2 border-gray-500 w-25 rounded-xl" /> */}
      <div className="flex flex-1 flex-col gap-4">
        <p
          className={`px-5 py-2 rounded-full w-fit mx-auto border border-slate-200 text-sm bg-gradient-to-br ${sectionTypeVariants[sectionType]} text-white tracking-wide`}>
          {section}
        </p>
        <h2 className="text-5xl text-slate-900 font-bold">{title}</h2>
        <p className="text-base text-slate-700 leading-relaxed">{subtitle}</p>
      </div>
      {/* <div className="border-2 border-gray-500 w-25 rounded-xl" /> */}
    </div>
  );
};

export default SectionTitle;
