import FormContainer from "@/components/auth/FormContainer";
import { Metadata } from "next";

import background from "@/assets/backgrounds/signup-form-background.jpeg";

export const metadata: Metadata = {
  title: "Signup | AtlasNote",
  description:
    "Create your AtlasNote account today. Start capturing knowledge, collaborating in real time, and exploring AI-powered productivity tools built for modern teams.",
};

const SignupPage = () => {
  return (
    <FormContainer background={background}>
      <></>
    </FormContainer>
  );
};

export default SignupPage;
