interface SectionContainerProps {
  id?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  children: React.ReactNode;
  fullScreen?: boolean;
  width?: string;
  outerClassName?: string;
  innerClassName?: string;
  position?: "relative" | "absolute" | "static";
  verticalPadding?: boolean;
}

const SectionContainer = ({
  id,
  ariaLabel = "",
  ariaLabelledBy = "",
  children,
  fullScreen,
  width = "w-full",
  outerClassName = "",
  innerClassName = "",
  position = "relative",
  verticalPadding,
  ...rest
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={outerClassName}>
      <div
        className={`${width} mx-auto ${verticalPadding ? "py-20 space-y-20" : "py-16 space-y-16"} ${
          fullScreen ? "min-h-[100dvh] h-full w-full" : undefined
        } ${position} ${innerClassName}`}
        {...rest}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
