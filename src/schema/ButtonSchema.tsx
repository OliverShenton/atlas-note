export interface BaseButton {
  id?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export interface Button extends BaseButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface RouterButton extends BaseButton {
  href: string;
}

export interface LinkButton extends BaseButton {
  href: string;
  target: "_blank" | "_self" | "_parent" | "_top";
}
