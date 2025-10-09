import { RouterButton } from "@/components/global/Button";
import CustomHr from "@/components/global/CustomHr";
import SectionContainer from "@/components/global/SectionContainer";
import SectionTitle from "@/components/global/SectionTitle";

const ContactSection = () => {
  return (
    <SectionContainer id="careers-contact-section">
      <CustomHr opaque />
      <SectionTitle
        title="Dont See A Role That Fits?"
        titleSize="text-3xl"
        subtitle="Reach out to us and we'll find the right fit for you."
      />
      <RouterButton className="text-center border max-w-fit px-6 mx-auto" href="/company/contact">
        Contact
      </RouterButton>
    </SectionContainer>
  );
};

export default ContactSection;
