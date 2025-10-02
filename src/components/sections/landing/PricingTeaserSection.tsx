"use client";

import { Button } from "@/components/global/Button";
import SectionContainer from "@/components/global/SectionContainer";
import SectionTitle from "@/components/global/SectionTitle";
import PricingCard from "@/components/pricing/PricingCard";
import { Billingcycle, pricingData } from "@/data/landing/pricingData";
import { useState } from "react";

const PricingTeaserSection = () => {
  const [billingCycle, setBillingCycle] = useState<Billingcycle>("monthly");

  return (
    <SectionContainer
      id="pricing-teaser-section"
      width="max-w-5xl"
      className="bg-gradient-to-t from-[#fdfdfd] to-[#eeeee8]">
      <SectionTitle
        title="Plans & Pricing"
        subtitle="Choose the plan that fits your team. Scale as you grow. Simply and transparently."
      />
      <div className="flex items-center gap-4 max-w-xl mx-auto">
        <Button
          id="pay-monthly-button"
          onClick={() => setBillingCycle("monthly")}
          className={`border border-slate-200 ${
            billingCycle === "monthly"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-100 text-gray-600"
          }`}>
          Pay Monthly
        </Button>
        <p className="text-slate-500 text-sm">or</p>
        <Button
          id="pay-yearly-button"
          onClick={() => setBillingCycle("yearly")}
          className={`border border-slate-200 ${
            billingCycle === "yearly"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-100 text-gray-600"
          }`}>
          Pay Yearly
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {pricingData.map((p) => (
          <PricingCard
            key={p.plan}
            plan={p.plan}
            priceMonthly={p.priceMonthly}
            priceYearly={p.priceYearly}
            features={p.features}
            button={p.button}
            highlight={p.highlight}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default PricingTeaserSection;
