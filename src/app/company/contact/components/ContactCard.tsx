import CardContainer from "@/components/global/CardContainer";
import { contactSchema } from "../contactData";

const ContactCard = ({ icon, title, text, link, button }: contactSchema) => {
  return (
    <CardContainer className="px-8 py-12 w-full space-y-6 relative">
      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--text)] border p-4 rounded-full bg-black text-2xl">
        {icon}
      </span>
      <h2 className="text-2xl text-[var(--text)]">{title}</h2>
      {text && <p className="text-[var(--secondary-text)]">{text}</p>}
      {button && <button></button>}
      {link && (
        <a href={link.linkHref} className="text-blue-500 hover:underline">
          {link.linkText}
        </a>
      )}
    </CardContainer>
  );
};

export default ContactCard;
