import "./styles.scss";
import React, { FC } from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  primaryColor?: TButtonPrimaryColor;
  variant?: TButtonVariant;
  size?: TButtonSize;
  fullWidth?: boolean;
}

export type TButtonPrimaryColor = "green" | "purple" | "blue";
export type TButtonSize = "large" | "medium" | "small";
export type TButtonVariant = "primary" | "secondary" | "ghost";

export const Button: FC<IButtonProps> = ({
  children,
  size = "large",
  primaryColor = "green",
  variant = "primary",
  fullWidth,
  className,
  ...rest
}) => (
  <button
    className={`button button_size-${size} button_variant-${variant}${
      fullWidth ? " button_full-width" : ""
    } button_color-${primaryColor}${className ? ` ${className}` : ""}`}
    {...rest}
  >
    <div className="button__content">{children}</div>
  </button>
);
