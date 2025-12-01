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
      <GridLayout
        className="fixed inset-0 z-50 cursor-auto bg-black/20 text-xl"
        onClick={() => setOpen(false)}
      >
        <GridLayout className="col-span-8 col-start-3">
          <div
            className={`text-text relative z-50 col-span-12 my-4 overflow-y-scroll bg-white p-4 ${autoWidth ?? ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <TfiClose size={32} />
            </button>
            {title && <span className="text-4xl font-bold">{title}</span>}
            <GridLayout className="w-full">{children}</GridLayout>
          </div>
        </GridLayout>
      </GridLayout>
    );
  },
);

Modal.displayName = "Modal";

export default Modal;
