"use client";

import React, { useRef } from "react";
import { TfiPlus } from "react-icons/tfi";
import Modal, { type ModalHandle } from "../../Modals/Modal";
import MarkdownSelectList from "./MarkdownSelectList";

export interface MarkdownAddButtonProps {
  addToIndex: number;
  lectureId: number;
}

function MarkdownAddButton(props: MarkdownAddButtonProps) {
  const modalRef = useRef<ModalHandle>(null);

  return (
    <div className="bg-accent hover:bg-accent-light relative my-2 h-1 w-full cursor-pointer rounded-full">
      <div className="text-background absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-inherit">
        <TfiPlus
          onClick={() => {
            modalRef.current?.open();
          }}
        />
      </div>
      <Modal ref={modalRef} title="Vyber markdown" autoWidth={false}>
        <div className="w-16">
          <button>Vytvorit</button>
        </div>
        <MarkdownSelectList
          addToIndex={props.addToIndex}
          lectureId={props.lectureId}
        ></MarkdownSelectList>
      </Modal>
    </div>
  );
}

export default MarkdownAddButton;
