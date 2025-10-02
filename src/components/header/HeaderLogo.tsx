import Image from "next/image";
import { RouterButton } from "../global/Button";

import logo from "@/app/favicon.ico";

const HeaderLogo = () => {
  return (
    <RouterButton
      id="header-logo"
      title="Home"
      href="/"
      className="w-min group flex items-center gap-2">
      <Image
        src={logo}
        alt="Header logo"
        className="group-hover:scale-110 transition-transform duration-300"
      />
      <div className="flex flex-col text-uppercase transition-transform duration-300 text-sm text-[var(--secondary-text)] group-hover:text-[var(--text)] font-[var(--font-quintessential)]">
        <h1 className="ml-0">ATLAS</h1>
        <h1 className="ml-4">NOTE</h1>
      </div>
    </RouterButton>
  );
};

export default HeaderLogo;
