export interface ButtonProps {
  children?: string,
  type?: "primary"|"success"|"warning"|"danger"|"info",
  size?: "default"|"small"|"large",
  disabled?: boolean,
  circle?: boolean,
  icon?: "icon-search"|"icon-unfold"|"icon-comment",
  onClick?: () => void;
}

