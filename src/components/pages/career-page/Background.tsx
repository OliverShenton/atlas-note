import Image from "next/image";

import background from "@/assets/backgrounds/careerPageHeroBackground.jpeg";

const Background = () => {
  return (
    <Image
      src={background}
      alt="hero background"
      aria-hidden="true"
      fill
      className="absolute inset-0"
    />
  );
};

export default Background;
