interface SectionTitleProps {
  title: string;
  titleSize?: string;
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
  titleSize = "text-6xl",
  subtitle,
  tagText,
  tagColor = "base",
  tagGradientDirection = "to-br",
  position = "center",
}: SectionTitleProps) => {
  return (
    <div className={`text-[var(--text)] space-y-4 relative ${positionVariants[position]}`}>
      {tagText && (
        <p
          className={`px-5 py-2 rounded-full text-sm w-fit mx-auto tracking-wide ${tagColor} ${tagGradientDirectionVariants[tagGradientDirection]}`}>
          {tagText}
        </p>
      )}
      <h2 className={`${titleSize} font-bold`}>{title}</h2>
      {subtitle && <p className="text-[var(--secondary-text)] leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
