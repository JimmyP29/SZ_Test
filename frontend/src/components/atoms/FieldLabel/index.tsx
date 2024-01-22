import "./styles.scss";
import React, { FC, ReactNode } from "react";

export interface IFieldLabel {
  id: string;
  children: ReactNode;
  label?: ReactNode;
  bottomText?: string;
  hasError?: boolean;
  displayLabel?: string | boolean;
  className?: string;
}

export const FieldLabel: FC<IFieldLabel> = ({
  children,
  label,
  bottomText,
  id,
  hasError,
  displayLabel = true,
  className,
}) => (
  <label
    className={`sz-field-label${hasError ? " sz-field-label_error" : ""}${
      className ? ` ${className}` : ""
    }`}
    htmlFor={id}
  >
    <div className="sz-field-label__title">{displayLabel ? label : ""}</div>
    {children}
    <div className="sz-field-label__bottom-text">{bottomText}</div>
  </label>
);
