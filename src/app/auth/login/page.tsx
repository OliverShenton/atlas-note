import FormContainer from "@/components/auth/FormContainer";
import { Metadata } from "next";

import background from "@/assets/backgrounds/login-form-background.jpeg";
import FormInput from "@/components/auth/FormInput";
import { Button } from "@/components/global/Button";
import CustomHr from "@/components/global/CustomHr";

export const metadata: Metadata = {
  title: "Login | AtlasNote",
  description:
    "Join AtlasNote and help shape the future of collaborative knowledge. We're building powerful tools that combine AI, real-time collaboration, and beautiful design—so teams everywhere can think, create, and grow together. Explore open roles and start your journey with us.",
};

const LoginPage = () => {
  return (
    <FormContainer background={background}>
      <h1 className="uppercase underline font-bold text-3xl text-white text-center">Login</h1>
      <FormInput label="Email" />
      <FormInput label="Password" />
      <Button title="Login" onClick={() => {}}>
        Login
      </Button>
      <CustomHr />
    </FormContainer>
  );
};

export default LoginPage;
