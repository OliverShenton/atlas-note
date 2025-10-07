interface SectionTitleProps {
  title: string;
  subtitle: string;
  tagText?: string;
  tagColor?: string;
  tagGradientDirection?: "to-tr" | "to-tl" | "to-br" | "to-bl";
  position?: "left" | "center" | "right";
}

const tagGradientDirectionVariants = {
  "to-tr": "bg-gradient-to-tr",
  "to-tl": "bg-gradient-to-tl",
  "to-br": "bg-gradient-to-br",
  "to-bl": "bg-gradient-to-bl",
};

const positionVariants = {
  left: "text-left justify-left",
  center: "text-center",
  right: "text-right justify-right",
};

const SectionTitle = ({
  title,
  subtitle,
  tagText,
  tagColor = "base",
  tagGradientDirection = "to-br",
  position = "center",
}: SectionTitleProps) => {
  return (
    <div className={`text-[var(--text)] space-y-4 relative ${positionVariants[position]}`}>
      <p
        className={`px-5 py-2 rounded-full text-sm w-fit mx-auto tracking-wide ${tagColor} ${tagGradientDirectionVariants[tagGradientDirection]}`}>
        {tagText}
      </p>
      <h2 className="text-6xl font-bold">{title}</h2>
      <p className="text-[var(--secondary-text)] leading-relaxed">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;

// interface SectionTitleProps {
//   section: string;
//   title: string;
//   subtitle: string;
//   sectionType: "none" | "problem" | "features" | "whyJoinUs" | "perks" | "pricing";
//   direction?: "left" | "right" | "center";
// }

// const sectionTypeVariants = {
//   none: "from-neutral-950 via-neutral-900 to-neutral-950",
//   problem: "from-red-500 via-pink-500 to-rose-500",
//   features: "from-indigo-500 via-violet-500 to-purple-500",
//   whyJoinUs: "from-green-500 to-emerald-500",
//   perks: "from-pink-500 to-orange-400",
//   pricing: "from-blue-500 to-cyan-500",
// };

// const directionVariants = {

// const SectionTitle = ({
//   section,
//   title,
//   subtitle,
//   sectionType,
//   direction = "center",
// }: SectionTitleProps) => {
//   return (
//     <div className="flex text-center gap-16 items-center max-w-xl mx-auto z-10 pointer-events-none">
//       {/* <div className="border-2 border-gray-500 w-25 rounded-xl" /> */}
//       <div className="flex flex-1 flex-col gap-4">
//         <p
//           className={`px-5 py-2 rounded-full w-fit mx-auto text-sm bg-gradient-to-br ${sectionTypeVariants[sectionType]} text-white tracking-wide`}>
//           {section}
//         </p>
//         <h2 className="text-5xl text-slate-900 font-bold">{title}</h2>
//         <p className="text-base text-slate-700 leading-relaxed">{subtitle}</p>
//       </div>
//       {/* <div className="border-2 border-gray-500 w-25 rounded-xl" /> */}
//     </div>
//   );
// };

// export default SectionTitle;
