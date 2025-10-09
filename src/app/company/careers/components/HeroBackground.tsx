import Image from "next/image";

import heroBackground from "../assets/hero-background.jpeg";

const HeroBackground = () => {
  return (
    <Image
      src={heroBackground}
      alt="hero background"
      aria-hidden="true"
      fill
      className="absolute inset-0"
    />
  );
};

export default HeroBackground;
