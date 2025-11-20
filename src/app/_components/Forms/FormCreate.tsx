import React, { useRef, useState } from "react";
import Modal, { type ModalHandle } from "../Modal";
import { FiPlusSquare } from "react-icons/fi";

interface FormCreateProps {
  buttonTitle?: string;
  children: React.ReactNode;
  apiCreate: (data: Record<string, any>) => void;
}

function FormCreate(props: FormCreateProps) {
  const modalRef = useRef<ModalHandle>(null);
  return (
    <form
      data-form-type="create"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const obj: Record<string, any> = {};
        data.forEach((value, key) => {
          obj[key] = value;
        });

        props.apiCreate(obj);
        modalRef.current?.close();
      }}
    >
      <Modal ref={modalRef} title="Create">
        {props.children}
        <button
          className="w-36 cursor-pointer self-end rounded-lg bg-blue-500 py-4 text-white"
          type="submit"
        >
          {`Vytvořit ->`}
        </button>
      </Modal>
      <button
        type="button"
        className="h-full cursor-pointer rounded-md p-2 hover:bg-gray-200"
        onClick={(e) => {
          e.stopPropagation();
          modalRef.current?.open();
        }}
      >
        {props.buttonTitle ? props.buttonTitle : <FiPlusSquare />}
      </button>
    </form>
  );
}

export default FormCreate;
