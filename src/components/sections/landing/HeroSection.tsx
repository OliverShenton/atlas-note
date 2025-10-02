"use client";

import { RouterButton } from "@/components/global/Button";
import SectionContainer from "@/components/global/SectionContainer";

const linkData = [
  { l: "Pricing", href: "/pricing" },
  { l: "Changelog", href: "/changelog" },
  { l: "Status", href: "/status" },
  { l: "Login", href: "/login" },
  { l: "Signup", href: "/signup" },
  { l: "Onboarding", href: "/onboarding" },
  { l: "App", href: "/app" },
  { l: "App/Demo", href: "/app/demo" },
  { l: "API", href: "/api" },
  { l: "Legal/Privacy", href: "legal/privacy" },
  { l: "Legal/Terms", href: "legal/terms" },
];

const HeroSection = () => {
  return (
    <SectionContainer id="hero-section" width="max-w-7xl">
      <div className="flex gap-4">
        {linkData.map((link) => (
          <RouterButton key={link.l} title={link.l} href={link.href} className="border">
            {link.l}
          </RouterButton>
        ))}
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
