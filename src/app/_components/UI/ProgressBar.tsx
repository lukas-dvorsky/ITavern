import React, { useRef } from "react";
import type { ModalHandle } from "../Modals/Modal";
import Modal from "../Modals/Modal";

interface IProgressBarModal {
  modalTitle: string;
  modalContent: React.ReactElement;
}

interface IProgressBar extends React.HTMLAttributes<HTMLDivElement> {
  max: number;
  count: number;
  hoverText?: string;
  modalSettings: IProgressBarModal;
}

function ProgressBar(props: IProgressBar) {
  const progress = Math.round((props.count * 100) / props.max) + "%";

  const modalRef = useRef<ModalHandle>(null);

  if (props.max === 0) {
    return;
  }

  return (
    <div className={`${props.className} flex items-center gap-6`}>
      <div className="dark:bg-background-dark-card group relative h-2 w-full overflow-hidden rounded-lg">
        <div
          style={{ width: progress }}
          className={`${props.max === props.count ? "bg-amber-400" : "bg-accent"} w-1/2`}
        >
          &nbsp;
        </div>
        {props.hoverText && props.count != 0 && (
          <span
            onClick={() => {
              if (!props.modalSettings) return;
              modalRef.current?.open();
            }}
            className="absolute inset-0 flex items-center justify-center text-[0.5rem] opacity-0 transition-opacity group-hover:opacity-100 hover:cursor-pointer"
          >
            {props.hoverText}
          </span>
        )}
      </div>
      <span>{progress}</span>
      {props.modalSettings && (
        <Modal ref={modalRef} title={props.modalSettings.modalTitle}>
          {props.modalSettings.modalContent ?? <></>}
        </Modal>
      )}
    </div>
  );
}

export default ProgressBar;
