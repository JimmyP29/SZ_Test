import "./styles.scss";
import { FC, useEffect, ReactNode } from "react";
import ReactModal from "react-modal";

type TBodySize = Pick<
  React.CSSProperties,
  | "width"
  | "height"
  | "minHeight"
  | "minWidth"
  | "maxHeight"
  | "maxWidth"
  | "overflow"
>;
export interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  className?: string;
  isFullScreen?: boolean;
  header?: string;
  headerComponent?: ReactNode;
  bodySize?: TBodySize;
  children?: ReactNode;
}

export const Modal: FC<IModalProps> = ({
  children,
  onClose,
  isFullScreen,
  isOpen,
  bodySize,
  header,
  headerComponent,
  className,
}) => {
  useEffect(() => {
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    <ReactModal
      ariaHideApp={false}
      className={`sz-modal${isFullScreen ? " sz-modal_full-screen" : ""}${
        className ? ` ${className}` : ""
      }`}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="sz-modal__overlay"
      shouldCloseOnOverlayClick
      style={{ content: bodySize }}
    >
      <div className="sz-modal__header-container">
        {header && <div className="sz-modal__header-text">{header}</div>}
        {headerComponent}
      </div>
      {children}
    </ReactModal>
  );
};
