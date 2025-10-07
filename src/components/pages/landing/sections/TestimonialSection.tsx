import Testimonialcard from "@/components/testimonial/TestimonialCard";
import SectionContainer from "@/components/global/SectionContainer";
import { testimonialPartnerData, testimonialUserData } from "@/data/landing/testimonialData";
import FeaturedTestimonialCard from "@/components/testimonial/FeaturedTestimonialCard";
import Pagination from "@/components/global/Pagination";

const TestimonialSection = () => {
  return (
    <SectionContainer id="testimonial-section" width="max-w-7xl">
      {/* <SectionTitle title="Loved by product teams" subtitle="Real stories from real users." /> */}
      <div className="space-y-2">
        <h2 className="text-slate-700 text-lg">Testimonials</h2>
        <p className="text-slate-900 text-5xl">Don't take our word for it!</p>
        <p className="text-slate-900 text-5xl">Hear it from our partners.</p>
      </div>
      <div>
        {testimonialPartnerData.map((t, idx) => (
          <div key={idx}>
            <FeaturedTestimonialCard
              quote={t.quote}
              company={t.company}
              logo={t.logo}
              impact={t.impact}
            />
          </div>
        ))}
      </div>
      <Pagination count={testimonialPartnerData.length} />
      <p className="text-slate-900 text-5xl">Or from our users.</p>
      <div className="grid grid-cols-3 gap-8">
        {testimonialUserData.slice(0, 6).map((t) => (
          <Testimonialcard
            key={t.quote}
            quote={t.quote}
            author={t.author}
            logo={t.logo}
            meta={t.meta}
            highlight={t.highlight}
            link={t.link}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default TestimonialSection;
