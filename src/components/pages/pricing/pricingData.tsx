export type Billingcycle = "monthly" | "yearly";

export interface PricingSchema {
  planType: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  button: { buttonText: string; buttonHref: string; buttonColor: string };
  highlight: boolean;
}

export const pricingData: PricingSchema[] = [
  {
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
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    highlight: false,
  },
  {
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
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
    highlight: true,
  },
  {
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
      buttonHref: "/contact",
      buttonColor: "bg-amber-500 hover:bg-amber-600",
    },
    highlight: false,
  },
];

export const comparisonFeatures = [
  { feature: "Workspaces", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Blocks", free: "50", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "AI queries", free: "Basic", pro: "Advanced", enterprise: "Advanced + custom tuning" },
  { feature: "Collaboration", free: "No", pro: "Yes", enterprise: "Yes" },
  { feature: "Role-based access", free: "No", pro: "Yes", enterprise: "Yes + granular policies" },
  { feature: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated + SLA" },
  { feature: "Compliance", free: "—", pro: "—", enterprise: "SSO, Audit logs" },
  { feature: "Custom integrations", free: "—", pro: "—", enterprise: "Yes" },
];

export const socialProof = [
  { logo: "", name: "NovaReach Technologies" },
  { logo: "", name: "LumenRoot BioSystems" },
  { logo: "", name: "Atlasyn Dynamics" },
  { logo: "", name: "Halcyon Forge Industries" },
  { logo: "", name: "Vireo Quantum" },
  { logo: "", name: "EmberVale Studios" },
  { logo: "", name: "Zephyra Aeronautics" },
  { logo: "", name: "Everline Financial" },
];
