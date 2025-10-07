import Image, { StaticImageData } from "next/image";

interface FormContainerProps {
  children: React.ReactNode;
  background: StaticImageData;
}

const FormContainer = ({ children, background }: FormContainerProps) => {
  return (
    <form className="relative rounded-xl overflow-hidden p-8">
      {/* Form backgrounds */}
      <Image
        src={background}
        alt="Form Background"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Form content */}
      <div className="relative z-10 space-y-4">{children}</div>
    </form>
  );
};

export default FormContainer;
