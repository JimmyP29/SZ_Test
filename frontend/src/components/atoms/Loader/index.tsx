import "./styles.scss";
import { FC } from "react";

export interface LoaderProps {
  color?: "green" | "purple" | "white";
  size?: "large" | "medium" | "small";
  className?: string;
}

export const Loader: FC<LoaderProps> = ({
  color = "green",
  size = "medium",
}) => {
  const className = `loader loader_color_${color} loader_size_${size}`;

  return (
    <div className={className}>
      <div className="loader__animation">
        <div className="loader__bounce__1" />
        <div className="loader__bounce__2" />
        <div className="loader__bounce__3" />
      </div>
    </div>
  );
};
