"use client";

import SectionContainer from "@/components/global/SectionContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { featuredData } from "../pricingData";
import FeaturedCard from "./FeaturedCard";
import FeaturedBillingCycle from "./FeaturedBillingCycle";
import { useState } from "react";

const FeaturedSection = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <SectionContainer id="pricing-featured-section" width="max-w-6xl" innerClassName="space-y-16">
      <div className="absolute inset-0 rounded-full bg-white/3 blur-3xl -z-10" />
      <SectionTitle
        title="Plans & Pricing"
        subtitle="Choose the plan that fits your team. Scale as you grow. Simply and transparently."
        tagText="Pricing"
        tagColor="bg-gradient-to-br from-blue-500 to-cyan-500"
      />
      <FeaturedBillingCycle value={billing} onChange={setBilling} />
      <div className="flex gap-8 z-10">
        {featuredData.map((item) => (
          <FeaturedCard
            key={item.planType}
            billing={billing}
            cardColor={item.cardColor}
            planType={item.planType}
            button={item.button}
            features={item.features}
            highlight={item.highlight}
            priceMonthly={item.priceMonthly}
            priceYearly={item.priceYearly}
          />
        ))}
      </div>
      <p className="text-sm text-center text-[var(--secondary-text)]">
        Money back guarentee if you cancel within 10 days.
      </p>
    </SectionContainer>
  );
};

export default FeaturedSection;
