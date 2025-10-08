export type BillingCycle = "monthly" | "yearly";

interface FeaturedBillingCycleProps {
  value: BillingCycle;
  onChange: (v: BillingCycle) => void;
}

const FeaturedBillingCycle = ({ value, onChange }: FeaturedBillingCycleProps) => {
  const baseStyle =
    "w-full text-center min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer";
  const inactiveStyle =
    "bg-transparent text-[var(--secondary-text)] border-[var(--secondary-text)] hover:text-[var(--text)] hover:border-[var(--text)]";
  const activeStyle = "bg-[#222] text-[var(--text)] border-[var(--text)]";

  return (
    <div className="flex gap-8 w-1/2 mx-auto">
      <button
        onClick={() => onChange("monthly")}
        className={`border ${baseStyle} ${value === "monthly" ? activeStyle : inactiveStyle}`}>
        Monthly
      </button>
      <button
        onClick={() => onChange("yearly")}
        className={`border ${baseStyle} ${value === "yearly" ? activeStyle : inactiveStyle}`}>
        Yearly
      </button>
    </div>
  );
};

export default FeaturedBillingCycle;
