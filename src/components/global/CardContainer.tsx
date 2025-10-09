const CardContainer = ({ children, ...rest }: React.HTMLProps<HTMLElement>) => {
  return (
    <article className={`bg-gradient-to-br from-[#111] via-[#222] to-[#111] ${rest.className}`}>
      {children}
    </article>
  );
};

export default CardContainer;
