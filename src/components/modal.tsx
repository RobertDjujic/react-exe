import { ReactNode } from "react";
import Button from "./button";
import IconClose from "../assets/icons/icon-close";

type ModalProps = {
  children?: ReactNode;
  title: string;
  onClose: () => void;
  modal: boolean;
};

const Modal = ({ children, title, onClose, modal }: ModalProps) => {
  return (
    <>
      <div className={modal ? "modal__overlay" : ""} onClick={onClose}></div>
      <div className={modal ? "modal" : "modal--disabled"}>
        <div className="modal__header">
          <h1>{title}</h1>
          <IconClose onClick={onClose} />
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          <Button text="OK" />
          <Button color="red" text="Cancel" onClick={onClose} />
        </div>
      </div>
    </>
  );
};

export default Modal;
