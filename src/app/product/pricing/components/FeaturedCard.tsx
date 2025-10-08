import CustomHr from "@/components/global/CustomHr";
import { RouterButton } from "@/components/global/Button";

interface PricingSchema {
  billing: "monthly" | "yearly";
  cardColor: string;
  planType: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  button: { buttonText: string; buttonHref: string };
  highlight: boolean;
}

const FeaturedCard = ({
  billing,
  cardColor,
  planType,
  button: { buttonText, buttonHref },
  features,
  priceMonthly,
  priceYearly,
}: PricingSchema) => {
  const isYearly = billing === "yearly";
  const displayPrice = isYearly ? priceYearly : priceMonthly;
  const unitLabel = isYearly ? "/yr" : "/mo";

  return (
    <article className="relative p-8 rounded-lg w-full bg-gradient-to-br from-[#111] via-[#222] to-[#111] text-center overflow-hidden text-[var(--text)] shadow-md shadow-white/5">
      <div className={`absolute left-0 top-0 w-1/2 h-1/2 rounded-full blur-3xl z-0 ${cardColor}`} />
      <div className="space-y-8 z-10 relative">
        <h2 className="text-base font-semibold">{planType}</h2>

        <p className="text-xl">
          $ <span className="text-5xl font-bold">{displayPrice}</span> {unitLabel}
        </p>

        <RouterButton
          href={buttonHref}
          className="border border-[var(--secondary-text)] hover:border-[var(--text)] bg-[#222]">
          {buttonText}
        </RouterButton>
        <CustomHr opaque />
        <div className="space-y-4 pl-4 text-left text-[var(--secondary-text)]">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </div>
      </div>
    </article>
  );
};

export default FeaturedCard;
