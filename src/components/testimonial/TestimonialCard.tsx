import { TestimonialUserSchema } from "@/data/landing/testimonialData";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonialcard = ({ quote, author, logo, meta, highlight, link }: TestimonialUserSchema) => {
  return (
    <article className="bg-white shadow-sm shadow-black/5 hover:shadow-md hover:shadow-black/50 transition-shadow duration-300">
      <div className="flex flex-col p-6 space-y-6 pointer-events-none h-full">
        <FaQuoteLeft className="text-gray-500 text-3xl" />
        <p className="flex-1 px-4 text-lg text-slate-700 text-balance max-w-prose leading-relaxed">
          {quote}
        </p>
        <hr className="text-slate-300 rounded-xl" />
        <div className="flex items-center gap-4">
          <Image
            src={author.avatar}
            alt={author.avatarAlt}
            width={30}
            height={30}
            className="flex-1"
          />
          <div className="flex-4 leading-tight">
            <p className="font-medium text-slate-900">{author.name}</p>
            <span className="text-xs text-slate-700">
              {author.role} | {author.company}
            </span>
            <span className="text-xs text-slate-500 flex items-center">
              {meta?.industry} • {meta?.location}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Testimonialcard;
