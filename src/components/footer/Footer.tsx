import Image from "next/image";
import CustomHr from "../global/CustomHr";
import logo from "@/app/favicon.ico";
import { LinkButton } from "../global/Button";
import { footerNavData, footerSocialData } from "./footerData";

const currentYear = new Date().getFullYear();

const hoverStyle = "hover:text-[var(--text)] hover:underline transition-all duration-200";

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-[var(--text)]/10 w-full h-full">
      <div className="max-w-[96rem] mx-auto py-12 space-y-12">
        <div className="flex">
          {/* Left */}
          <div className="flex-1 space-y-4">
            <a href="/" className="flex items-center space-x-4">
              <Image src={logo} alt="AtlasNote logo" width={40} height={40} />
              <p id="logo-name" className="text-2xl text-[var(--text)] font-bold">
                AtlasNote
              </p>
            </a>
            <p className="text-lg text-[var(--secondary-text)]">
              Docs that answer back. Built for modern times.
            </p>
            <p className="text-base text-[var(--secondary-text)]">
              For more information, please ready our privacy policy.
            </p>
          </div>

          {/* Right */}
          <div className="flex-1">
            <div className="flex gap-20 justify-end text-center">
              {footerNavData.map((item) => (
                <div key={item.column} className="space-y-4">
                  <h3 className="text-lg text-[var(--text)] font-semibold">{item.column}</h3>
                  <div className="flex flex-col space-y-4 text-[var(--secondary-text)]">
                    {item.list.map((link) => (
                      <a key={link.label} href={link.href} className={hoverStyle}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="text-center space-y-4">
                <h3 className="text-lg text-[var(--text)] font-semibold">Socials</h3>
                <div className="grid grid-cols-3 gap-8">
                  {footerSocialData.map((item) => (
                    <LinkButton
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      className={`${item.style} text-2xl text-[var(--text)] hover:text-[var(--secondary-text)]`}>
                      {item.icon}
                    </LinkButton>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <CustomHr opaque />

        {/* Bottom */}
        <div className="flex items-center justify-between text-[var(--secondary-text)]">
          <p>Copyright &copy; {currentYear} AtlasNote. All rights reserved.</p>
          <div className="space-x-8">
            <a href="/legal/privacy" className={hoverStyle}>
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/legal/terms" className={hoverStyle}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
