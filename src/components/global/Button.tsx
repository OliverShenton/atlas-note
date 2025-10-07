import {
  Button as ButtonProps,
  RouterButton as RouterButtonProps,
  LinkButton as LinkButtonProps,
} from "@/schema/ButtonSchema";
import Link from "next/link";

const baseStyle =
  "w-full text-center min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer";

export const Button = ({ id, children, className = "", title }: ButtonProps) => {
  return (
    <button id={id} title={title} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
};

export const LinkButton = ({
  id,
  children,
  className = "",
  href,
  target,
  title,
}: LinkButtonProps) => {
  return (
    <a
      id={id}
      href={href}
      title={title}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className={`${baseStyle} ${className}`}>
      {children}
    </a>
  );
};

export const RouterButton = ({ id, children, className = "", href, title }: RouterButtonProps) => {
  return (
    <Link id={id} href={href} title={title} className={`${baseStyle} ${className}`}>
      {children}
    </Link>
  );
};
