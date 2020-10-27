import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = (props) => {
  const { children, onClose } = props;
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal-sjh">
      <div className="modal__container">
        <button onClick={onClose} className="modal__close-button">X</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
