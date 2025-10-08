import React from "react";

export type BaseButton = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
};

export type Button = React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButton;

export type RouterButton = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseButton;

export type LinkButton = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseButton & {
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
  };
