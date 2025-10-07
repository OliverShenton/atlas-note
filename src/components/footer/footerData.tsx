import { FaDiscord, FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const footerNavData = [
  {
    column: "Product",
    list: [
      { label: "Features", href: "/product/features" },
      { label: "Pricing", href: "/product/pricing" },
      { label: "Changelog", href: "/product/changelog" },
      { label: "Status", href: "/product/status" },
    ],
  },
  {
    column: "Company",
    list: [
      { label: "About", href: "/company/about" },
      { label: "Blog", href: "/company/blog" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
];

export const footerSocialData = [
  {
    icon: <FaGithub />,
    label: "Github",
    href: "https://github.com/OliverShenton/atlas-note",
    style: "bg-[#000]",
  },
  { icon: <FaXTwitter />, label: "X", href: "http://www.x.com", style: "bg-[#000]" },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olivershenton/",
    style: "bg-[#0077b5]",
  },
  { icon: <FaDiscord />, label: "Discord", href: "http://www.discord.com", style: "bg-[#7289da]" },
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    href: "http://www.facebook.com",
    style: "bg-[#1877f2]",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "http://www.instagram.com",
    style: "bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf]",
  },
];
