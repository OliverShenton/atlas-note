import SectionContainer from "@/components/global/SectionContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { contactData } from "../contactData";
import ContactCard from "./ContactCard";

const ContactSection = () => {
  return (
    <SectionContainer
      id="contact-page-contact-section"
      width="max-w-7xl"
      innerClassName="space-y-30">
      <SectionTitle
        title="Get In Touch"
        subtitle="We'd love to hear from you!"
        tagText="Contact Us"
        tagColor="bg-indigo-600"
      />
      <div className="flex gap-8">
        {contactData.map((item) => (
          <ContactCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            text={item.text}
            link={item.link}
            button={item.button}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
