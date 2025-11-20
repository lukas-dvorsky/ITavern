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
}

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ title, children }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }));

    if (!open) return null;

    return (
      <div
        className="fixed inset-0 flex cursor-auto items-center justify-center bg-black/20 text-xl"
        onClick={() => setOpen(false)}
      >
        <div
          className="relative flex flex-col justify-center gap-12 bg-white p-4 text-black"
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

export default Modal;
