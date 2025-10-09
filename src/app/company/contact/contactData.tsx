import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export type contactSchema = {
  icon: React.ReactNode;
  title: string;
  text?: string;
  link?: { linkText: string; linkHref: string };
  button?: { buttonText: string; buttonHref: string };
};

export const contactData: contactSchema[] = [
  { icon: <FaPhoneAlt />, title: "Call Us", link: { linkText: "123-456-789", linkHref: "#" } },
  {
    icon: <FaMessage />,
    title: "Chat Live",
    text: "We are available Monday to Friday, 9-5 BST",
    button: { buttonText: "Start Chat", buttonHref: "#" },
  },
  {
    icon: <MdEmail />,
    title: "Ask A Question",
    text: "Fill out our form and we'll get back to you in 24 hours.",
    button: { buttonText: "Get Started", buttonHref: "#" },
  },
];
