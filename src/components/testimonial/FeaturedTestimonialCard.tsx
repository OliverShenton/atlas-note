import { TestimonialPartnerSchema } from "@/data/landing/testimonialData";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const FeaturedTestimonialCard = ({ quote, company, logo, impact }: TestimonialPartnerSchema) => {
  return (
    <article className="bg-white rounded-xl flex overflow-hidden">
      <div className="flex flex-col flex-2 p-12 space-y-6">
        <FaQuoteLeft className="text-gray-500 text-3xl" />
        <div className="flex-1 px-4 space-y-6">
          <p className="text-2xl text-slate-700 text-balance max-w-prose leading-relaxed">
            {quote}
          </p>
          {impact.map((i) => (
            <p key={i} className="text-lg border-l-4 border-slate-500 px-4">
              {i}
            </p>
          ))}
        </div>
        <p className="text-end text-3xl text-slate-900 font-bold">{company}</p>
      </div>
      <div className="flex-1">
        <Image src={logo.src} alt={logo.alt} className="bg-center bg-cover h-full w-full" />
      </div>
    </article>
  );
};

export default FeaturedTestimonialCard;
