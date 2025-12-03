"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import GridLayout from "../Layout/GridLayout";

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  autoWidth?: boolean;
  modalHeight?: string;
}

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ title, children, autoWidth, modalHeight = "auto" }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }));

    if (!open) return null;

    const widthClass = "col-span-10 col-start-2 lg:col-span-8 lg:col-start-3";

    return (
      <div
        className="fixed inset-0 z-50 grid h-full w-full cursor-auto grid-cols-12 place-items-center bg-black/50 text-xl backdrop-blur-sm"
        onClick={() => setOpen(false)}
        style={{ overflowY: "auto" }}
      >
        <div className={`${widthClass} ${modalHeight} my-8 w-full`}>
          <div
            className="relative z-50 w-full rounded-lg bg-white p-6 shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
            style={{ minHeight: "200px" }}
          >
            <button
              className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-900"
              onClick={() => setOpen(false)}
              aria-label="Zavřít"
            >
              <TfiClose size={24} />
            </button>

            {title && (
              <span className="text-4xl font-bold text-gray-900">{title}</span>
            )}

            <GridLayout className="mt-4 w-full">{children}</GridLayout>
          </div>
        </div>
      </div>
    );
  },
);

Modal.displayName = "Modal";

export default Modal;
