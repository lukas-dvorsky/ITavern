"use client";

import { forwardRef, useImperativeHandle, useState, useEffect } from "react";
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

    useEffect(() => {
      const htmlElement = document.documentElement;
      const bodyElement = document.body;

      if (open) {
        htmlElement.style.overflow = "hidden";
        bodyElement.style.overflow = "hidden";
      } else {
        htmlElement.style.overflow = "";
        bodyElement.style.overflow = "";
      }

      return () => {
        htmlElement.style.overflow = "";
        bodyElement.style.overflow = "";
      };
    }, [open]);

    useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
    }));

    if (!open) return null;

    const widthClass = "col-span-10 col-start-2 lg:col-span-8 lg:col-start-3";

    return (
      <div
        className="fixed inset-0 z-60 flex h-screen w-full cursor-auto items-center justify-center bg-black/50 text-xl backdrop-blur-sm"
        onClick={() => setOpen(false)}
      >
        <div className="grid w-full grid-cols-12">
          <div
            className={`${widthClass} ${modalHeight} my-4 w-full`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="custom-scrollbar bg-background dark:bg-background-dark-card relative z-50 max-h-[calc(100vh-2rem)] w-full overflow-y-auto rounded-lg p-6 shadow-2xl transition-all duration-300"
              style={{ minHeight: "200px" }}
            >
              <button
                className="dark:text-text-dark-mode absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-900"
                onClick={() => setOpen(false)}
                aria-label="Zavřít"
              >
                <TfiClose size={24} />
              </button>

              {title && (
                <span className="dark:text-text-dark-mode-soft text-4xl font-bold text-gray-900">
                  {title}
                </span>
              )}

              <GridLayout className="mt-4 w-full">{children}</GridLayout>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

Modal.displayName = "Modal";

export default Modal;
