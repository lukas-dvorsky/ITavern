"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import { TfiClose } from "react-icons/tfi";

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  autoWidth: boolean;
}

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ title, children, autoWidth }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }));

    if (!open) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex cursor-auto items-center justify-center bg-black/20 text-xl"
        onClick={() => setOpen(false)}
      >
        <div
          className={`text-text relative z-50 flex flex-col justify-center gap-12 overflow-y-scroll bg-white p-4 ${!autoWidth && "w-4/5"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <TfiClose size={32} />
          </button>
          {title && <span className="text-2xl">{title}</span>}
          <div className="flex w-full flex-col justify-between gap-12 p-5">
            {children}
          </div>
        </div>
      </div>
    );
  },
);

Modal.displayName = "Modal";

export default Modal;
