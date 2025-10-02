import { PricingSchema } from "@/data/landing/pricingData";
import { RouterButton } from "../global/Button";

// interface PricingCardProps {
//   planType: string;
//   planWho: string;
//   priceMonthly: string;
//   priceYearly: string;
//   features: string[];
//   buttontext: string;
//   buttonHref: string;
//   highlight: boolean;
// }

const PricingCard = ({
  plan,
  priceMonthly,
  priceYearly,
  features,
  button: { buttonText, buttonHref, buttonColor },
  highlight,
}: PricingSchema) => {
  return (
    <article
      className={`relative rounded-xl px-6 pt-10 pb-6 flex flex-col gap-5 w-full border shadow-sm shadow-black hover:shadow-lg transition-all duration-300 ${
        highlight
          ? "border-yellow-500 shadow-yellow-500 bg-gradient-to-br from-neutral-50 to-neutral-100"
          : "border-slate-200 shadow-slate-200 bg-gradient-to-b from-slate-50 to-slate-100"
      }`}>
      {highlight && (
        <p className="absolute -top-5 translate-x-1/2 left-2 text-center border border-yellow-500 px-4 py-2 rounded-full bg-yellow-500 text-white z-10 font-bold">
          Recommended
        </p>
      )}
      <h3 className="text-lg text-center text-slate-900 font-semibold">{plan}</h3>
      <p className="font-bold text-center text-lg">
        $
        {priceMonthly && (
          <>
            <span className="text-4xl">{priceMonthly}</span>/mo
          </>
        )}
        {priceYearly && (
          <>
            <span className="text-4xl">{priceYearly}</span>/yr
          </>
        )}
      </p>
      <ul className="space-y-2 px-4 text-slate-500 text-sm flex-1">
        {features.map((f) => (
          <li key={f}>✅ {f}</li>
        ))}
      </ul>
      <hr className="text-slate-200" />
      <RouterButton id={buttonText} href={buttonHref} className={`text-white ${buttonColor}`}>
        {buttonText}
      </RouterButton>
      <div className="text-[12px] text-slate-500 text-center">
        <p>30-day free trial</p>
        <p>Cancel anytime</p>
      </div>
    </article>
  );
};

export default PricingCard;
