import { FaDiscord, FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LinkButton } from "../global/Button";

const footerData = [
  {
    title: "Product",
    list: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Company",
    list: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    list: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms & Conditions", href: "/legal/terms" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
  },
];

const socialData = [
  { icon: <FaGithub />, label: "Github", href: "/", style: "bg-[#000]" },
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

const Footer = () => {
  return (
    <footer className="bg-slate-100 border-t border-[var(--text)]/10 px-4 py-12 space-y-4 z-50">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Brand */}
        <div className="flex-1">
          <h3 className="font-bold text-xl text-slate-900">AtlasNote</h3>
          <p className="text-slate-600 mt-2 text-sm">
            Docs that answer back. Built for modern teams.
          </p>
          <p className="text-slate-400 mt-6 text-xs">© 2025 AtlasNote. All rights reserved.</p>
        </div>

        {/* Product */}
        <div className="flex-1 flex justify-center">
          {footerData.map((data, idx) => (
            <div key={idx} className="space-y-2 flex-1">
              <h4 className="text-[var(--text)] text-lg font-semibold">{data.title}</h4>
              <ul className="text-[var(--secondary-text)] text-sm space-y-2">
                {data.list.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="hover:text-blue-500">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="flex-1 flex-col space-y-2">
          <h4 className="text-[var(--text)] text-lg font-semibold">Our Socials</h4>
          <div className="grid grid-cols-3 gap-2 text-white w-fit">
            {socialData.map((social) => (
              <LinkButton
                key={social.label}
                title={social.label}
                target="_blank"
                href={social.href}
                className={social.style}>
                {social.icon}
              </LinkButton>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
