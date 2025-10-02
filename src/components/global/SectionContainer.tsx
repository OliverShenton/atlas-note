interface SectionContainerProps {
  id?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  children: React.ReactNode;
  fullScreen?: boolean;
  width?: string;
  verticalSpacing?: number;
  className?: string;
  position?: "relative" | "absolute" | "static";
}

const SectionContainer = ({
  id,
  ariaLabel = "",
  ariaLabelledBy = "",
  children,
  fullScreen,
  width = "w-full",
  verticalSpacing,
  className = "",
  position = "relative",
}: SectionContainerProps) => {
  return (
    <section id={id} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} className={className}>
      <div
        className={`${width} space-y-${verticalSpacing} mx-auto py-40 ${
          fullScreen ? "min-h-[100dvh] h-full w-full" : undefined
        } ${position}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
