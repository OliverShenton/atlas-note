interface SectionContainerProps {
  id?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  children: React.ReactNode;
  fullScreen?: boolean;
  width?: string;
  className?: string;
  position?: "relative" | "absolute" | "static";
  verticalSpacing?: string;
  verticalPadding?: boolean;
}

const SectionContainer = ({
  id,
  ariaLabel = "",
  ariaLabelledBy = "",
  children,
  fullScreen,
  width = "w-full",
  className = "",
  position = "relative",
  verticalSpacing = "space-y-16",
  verticalPadding = true,
}: SectionContainerProps) => {
  return (
    <section id={id} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} className={className}>
      <div
        className={`${width} mx-auto ${verticalSpacing} ${verticalPadding ? "py-20" : "py-10"} ${
          fullScreen ? "min-h-[100dvh] h-full w-full" : undefined
        } ${position}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
