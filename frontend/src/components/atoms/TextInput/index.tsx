import "./styles.scss";
import { FC, InputHTMLAttributes, ReactNode } from "react";

export interface ITextInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "className" | "onBlur"
  > {
  id: string;
  onChange: (value: string, id: string) => void;
  onBlur?: (value: string, id: string) => void;
  value?: string;
  hasError?: boolean;
  className?: string;
  icon?: ReactNode;
}

export const TextInput: FC<ITextInputProps> = ({
  id,
  onChange,
  onBlur,
  type = "text",
  disabled,
  hasError,
  icon,
  className,
  ...rest
}) => (
  <div
    className={`sz-text-input${hasError ? " sz-text-input_error" : ""}${
      disabled ? " sz-text-input_disabled" : ""
    }${className ? ` ${className}` : ""}`}
  >
    <input
      className={`sz-text-input__input-element`}
      onChange={(event) => onChange && onChange(event.target.value, id)}
      onBlur={(event) => onBlur && onBlur(event.target.value, id)}
      type={type}
      id={id}
      disabled={disabled}
      {...rest}
    />
    {icon}
  </div>
);
