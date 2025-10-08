export type Billingcycle = "monthly" | "yearly";

export interface PricingSchema {
  cardColor: string;
  planType: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  button: { buttonText: string; buttonHref: string };
  highlight: boolean;
}

export const featuredData: PricingSchema[] = [
  {
    cardColor: "bg-red-500/25",
    planType: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      "1 workspace",
      "50 blocks",
      "Basic AI queries",
      "Community support",
      "No credit card required",
    ],
    button: {
      buttonText: "Start for free",
      buttonHref: "/auth/signup",
    },
    highlight: false,
  },
  {
    cardColor: "bg-green-500/25",
    planType: "Professional",
    priceMonthly: 20,
    priceYearly: 200,
    features: [
      "Unlimited blocks",
      "Advanced AI search",
      "Real-time collaboration",
      "Role-based access",
      "Priority support",
    ],
    button: {
      buttonText: "Start Pro",
      buttonHref: "/signup?plan=pro",
    },
    highlight: true,
  },
  {
    cardColor: "bg-blue-500/25",
    planType: "Enterprise",
    priceMonthly: 50,
    priceYearly: 500,
    features: [
      "Everything in Pro",
      "SSO (Single Sign-On)",
      "Audit logs",
      "SLA (Service Level Agreement)",
      "Onboarding support",
      "Custom integration",
      "Dedicated account manager",
    ],
    button: {
      buttonText: "Contact Sales",
      buttonHref: "/company/contact",
    },
    highlight: false,
  },
];

export const comparisonTableData = [
  { feature: "Workspaces", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Blocks", free: "50", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "AI queries", free: "Basic", pro: "Advanced", enterprise: "Advanced + custom tuning" },
  { feature: "Collaboration", free: "No", pro: "Yes", enterprise: "Yes" },
  { feature: "Role-based access", free: "No", pro: "Yes", enterprise: "Yes + granular policies" },
  { feature: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated + SLA" },
  { feature: "Compliance", free: "—", pro: "—", enterprise: "SSO, Audit logs" },
  { feature: "Custom integrations", free: "—", pro: "—", enterprise: "Yes" },
];

import logo1 from "@/assets/images/pricing-social-proof-logos/image-1.png";
import logo2 from "@/assets/images/pricing-social-proof-logos/image-2.png";
import logo3 from "@/assets/images/pricing-social-proof-logos/image-3.png";

export const socialProofData = [
  { logo: logo1, name: "NovaReach Technologies" },
  { logo: logo2, name: "LumenRoot BioSystems" },
  { logo: logo1, name: "Atlasyn Dynamics" },
  { logo: logo1, name: "Halcyon Forge Industries" },
  { logo: logo1, name: "Vireo Quantum" },
  { logo: logo1, name: "EmberVale Studios" },
  { logo: logo1, name: "Zephyra Aeronautics" },
  { logo: logo1, name: "Everline Financial" },
];
