import { FC, ReactNode } from "react";
import "./styles.scss";

interface ICard {
  children: ReactNode;
  className?: string;
}

const Card: FC<ICard> = ({ children, className }) => (
  <div className={`card${className ? ` ${className}` : ""}`}>{children}</div>
);

export default Card;
