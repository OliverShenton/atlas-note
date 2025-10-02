interface Author {
  name: string;
  role: string;
  company: string;
  avatar: StaticImageData;
  avatarAlt: string;
}

interface Logo {
  src: string;
  alt: string;
}

interface Meta {
  industry: string;
  teamSize: string;
  location: string;
}

interface Link {
  href: string;
  label: string;
}

export interface TestimonialUserSchema {
  quote: string;
  author: Author;
  logo: Logo;
  meta?: Meta;
  highlight?: boolean;
  link?: Link;
}

import avatar1 from "@/assets/images/testimonial-avatars/avatar-1.png";
import avatar2 from "@/assets/images/testimonial-avatars/avatar-2.png";
import avatar3 from "@/assets/images/testimonial-avatars/avatar-3.png";
import avatar4 from "@/assets/images/testimonial-avatars/avatar-4.png";
import avatar5 from "@/assets/images/testimonial-avatars/avatar-5.png";
import avatar6 from "@/assets/images/testimonial-avatars/avatar-6.png";
import avatar7 from "@/assets/images/testimonial-avatars/avatar-7.png";
import avatar8 from "@/assets/images/testimonial-avatars/avatar-8.png";
import { StaticImageData } from "next/image";

export const testimonialUserData: TestimonialUserSchema[] = [
  {
    quote:
      "AtlasNote's grounded answers with citations cut our onboarding time dramatically. New hires find the right runbooks in minutes of rummaging through chat threads.",
    author: {
      name: "Maya Chen",
      role: "Head of Product",
      company: "Northwind Labs",
      avatar: avatar1,
      avatarAlt: "Portrait of Maya Chen, Head of Product at Northwind Labs",
    },
    logo: { src: "", alt: "Northwind Labs logo" },
    meta: { industry: "B2B SaaS", teamSize: "85", location: "London" },
    highlight: true,
    link: { href: "", label: "How we use citations" },
  },
  {
    quote:
      "Realtime editing stayed silky even on hotel Wi-Fi. the offline cache saved my flight notes and synced flawlessly when we landed.",
    author: {
      name: "Tomás Álvarez",
      role: "Engineering Manager",
      company: "QuantaCloud",
      avatar: avatar2,
      avatarAlt: "Portrait of Tomás Álvarez, Engineering Manager at QuantaCloud",
    },
    logo: { src: "", alt: "QuantaCloud logo" },
    meta: { industry: "Cloud Infra", teamSize: "120", location: "Madrid" },
    highlight: true,
  },
  {
    quote:
      "Slash commands, quick block transforms, and clean typography made our spec reviews faster and far less painful for design and engineering.",
    author: {
      name: "Lila Patel",
      role: "Design Lead",
      company: "Ember Studio",
      avatar: avatar3,
      avatarAlt: "Portrait of Lila Patel, Design Lead at Ember Studio",
    },
    logo: { src: "", alt: "Ember Studio logo" },
    meta: { industry: "Design Agency", teamSize: "24", location: "Manchester" },
    highlight: true,
  },
  {
    quote:
      "We finally have one source of truth. Roles, audit logs, and expiring public links let us share safely with contractors.",
    author: {
      name: "Gregor Novak",
      role: "CTO",
      company: "Helios Robotics",
      avatar: avatar4,
      avatarAlt: "Portrait of Gregor Novak, CTO at Helios Robotics",
    },
    logo: { src: "", alt: "Helios Robotics logo" },
    meta: { industry: "Robotics", teamSize: "60", location: "Berlin" },
    highlight: true,
  },
  {
    quote:
      "Ask Atlas surfaces answers from community docs with page-level citations. Moderators love how easy it is to verify and update sources.",
    author: {
      name: "Amara Yusuf",
      role: "Research Coordinator",
      company: "OpenSource Collective",
      avatar: avatar5,
      avatarAlt: "Portrait of Amara Yusuf, Research Coordinator at OpenSource Collective",
    },
    logo: { src: "", alt: "OpenSource Collective logo" },
    meta: { industry: "Open Source", teamSize: "40", location: "Remote" },
  },
  {
    quote:
      "The editor feels instant. Server actions plus optimistic UI made commenting and mentions feel like chat—without losing structure.",
    author: {
      name: "Hannah Fischer",
      role: "Program Manager",
      company: "Voyage Health",
      avatar: avatar6,
      avatarAlt: "Portrait of Hannah Fischer, Program Manager at Voyage Health",
    },
    logo: { src: "", alt: "Voyage Health logo" },
    meta: { industry: "Healthtech", teamSize: "150", location: "Zurich" },
  },
  {
    quote:
      "We hooked webhooks to our CI and publish release notes straight from AtlasNote pages. Zero copy-paste. Zero stale docs.",
    author: {
      name: "Jason Kim",
      role: "Developer Relations",
      company: "ByteForge",
      avatar: avatar7,
      avatarAlt: "Portrait of Jason Kim, Developer Relations at ByteForge",
    },
    logo: { src: "", alt: "ByteForge logo" },
    meta: { industry: "DevTools", teamSize: "55", location: "Seoul" },
    link: { href: "", label: "Our API workflow" },
  },
  {
    quote:
      "Usage analytics showed us which playbooks were ignored. We trimmed noise and search success rates jumped.",
    author: {
      name: "Sofia Rossi",
      role: "COO",
      company: "FinEdge",
      avatar: avatar8,
      avatarAlt: "Portrait of Sofia Rossi, COO at FinEdge",
    },
    logo: { src: "", alt: "FinEdge logo" },
    meta: { industry: "Fintech", teamSize: "200", location: "Milan" },
  },
];

export interface TestimonialPartnerSchema {
  quote: string;
  company: string;
  logo: { src: StaticImageData; alt: string };
  impact: string[];
}

import company1 from "@/assets/images/testimonial-avatars/company-1.jpeg";
import company2 from "@/assets/images/testimonial-avatars/company-2.jpeg";
import company3 from "@/assets/images/testimonial-avatars/company-3.jpeg";
import company4 from "@/assets/images/testimonial-avatars/company-4.jpeg";

export const testimonialPartnerData: TestimonialPartnerSchema[] = [
  {
    quote:
      "Grounded answers with page-level citations cut onboarding from weeks to days. Search success sits above 90%, and new hires rely on a single, trusted source of truth.",
    company: "Northwind Labs",
    logo: { src: company1, alt: "Northwind Labs" },
    impact: [
      "-58% time to onboard new PMs (internal benchmark, demo data)",
      "94% search success rate across runbooks (demo data)",
    ],
  },
  {
    quote:
      "Realtime editing stayed fast on hotel Wi-Fi, and offline cache meant nothing was lost in transit. Our teams finally collaborate without merge conflicts or stale docs.",
    company: "QuantaCloud",
    logo: { src: company2, alt: "QuantaCloud" },
    impact: [
      "0 merge conflicts in shared notes since rollout (demo data)",
      "2x faster incident runbook updates (demo data)",
    ],
  },
  {
    quote:
      "Slash commands and clean typography shortened spec reviews noticeably. Designers and engineers iterate in one place, with comments that feel instant.",
    company: "Ember Studio",
    logo: { src: company3, alt: "Ember Studio" },
    impact: [
      "-40% time on design spec reviews (demo data)",
      "3x faster first-draft doc creation (demo data)",
    ],
  },
  {
    quote:
      "We finally operate from a single source of truth. Roles, audit logs, and expiring links make contractor access safe—and compliance reviews far less painful.",
    company: "Helios Robotics",
    logo: { src: company4, alt: "Helios Robotics" },
    impact: [
      "-35% time-to-approve external access requests (demo data)",
      "Audit findings closed in one review cycle (demo narrative)",
    ],
  },
];
