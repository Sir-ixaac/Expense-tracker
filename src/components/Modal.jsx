
import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative z-10 w-full max-w-lg bg-white rounded shadow p-4">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
