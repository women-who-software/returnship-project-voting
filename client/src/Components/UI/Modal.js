import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  const element = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(element);

    return function cleanup() {
      modalRoot.removeChild(element);
    };
  }, [modalRoot, element]);

  return createPortal(children, element);
}

const Modal = ({ children, toggle, open }) => {
  return (
    <Portal>
      {open && (
        <div className="modal__wrapper" onClick={toggle}>
          <div
            className="modal__body"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal__body-close-btn" onClick={toggle}>
              &times;
            </div>
            {children}
          </div>
        </div>
      )}
    </Portal>
  );
}

export { Modal };
