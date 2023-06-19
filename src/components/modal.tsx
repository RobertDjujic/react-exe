import { ReactNode, useEffect } from "react";
import Button from "./button";
import IconClose from "../assets/icons/icon-close";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  title: string;
};

const Modal = ({ children, isOpen, onClose, onSuccess, title }: ModalProps) => {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName(
      "body"
    )[0] as HTMLBodyElement;
    if (isOpen) {
      bodyElement.style.overflow = "hidden";
    } else {
      bodyElement.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div>
          <div className="modal__overlay" onClick={onClose}></div>
          <div className="modal">
            <div className="modal__header">
              <div className="modal__header__title">{title}</div>
              <IconClose className="modal__header__icon" onClick={onClose} />
            </div>
            <div className="modal__body">{children}</div>
            <div className="modal__footer">
              {onSuccess && <Button onClick={onSuccess} text="Okay" />}
              <Button color="red" onClick={onClose} text="Cancel" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
