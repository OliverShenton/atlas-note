"use client";

import { RouterButton } from "@/components/global/Button";
import SectionContainer from "@/components/global/SectionContainer";

const linkData = [
  { l: "Pricing", href: "product/pricing", color: "bg-red-500" },
  { l: "Changelog", href: "product/changelog", color: "bg-yellow-500" },
  { l: "Status", href: "product/status", color: "bg-yellow-500" },
  { l: "Login", href: "auth/login", color: "bg-red-500" },
  { l: "Signup", href: "auth/signup", color: "bg-red-500" },
  { l: "Career", href: "company/career", color: "bg-yellow-500" },
  // { l: "App", href: "/app" },
  // { l: "App/Demo", href: "/app/demo" },
  // { l: "API", href: "/api" },
  { l: "Legal/Privacy", href: "legal/privacy", color: "bg-green-500" },
  { l: "Legal/Terms", href: "legal/terms", color: "bg-green-500" },
];

const HeroSection = () => {
  return (
    <SectionContainer id="hero-section" width="max-w-7xl">
      <div className="flex gap-4">
        {linkData.map((link) => (
          <RouterButton
            key={link.l}
            title={link.l}
            href={link.href}
            className={`border ${link.color}`}>
            {link.l}
          </RouterButton>
        ))}
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
