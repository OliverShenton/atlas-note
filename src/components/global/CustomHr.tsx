const CustomHr = ({ opaque }: { opaque?: boolean }) => {
  return (
    <hr
      className={`text-[var(--secondary-text)] rounded-full w-full ${
        opaque ? "opacity-10" : undefined
      }`}
    />
  );
};

export default CustomHr;
