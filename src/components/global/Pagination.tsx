interface PaginationProps {
  count: number;
  className?: string;
}

const Pagination = ({ count, className = "" }: PaginationProps) => {
  return (
    <div
      className={`mt-6 flex items-center gap-2 ${className}`}
      aria-label="Partner testimonials pagination"
      role="list">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} role="listitem" className="h-1 w-10 rounded-full bg-slate-300" />
      ))}
    </div>
  );
};

export default Pagination;
