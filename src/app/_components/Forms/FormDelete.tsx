import React, { useRef, useState } from "react";
import Modal, { type ModalHandle } from "../Modal";
import { MdDelete } from "react-icons/md";

interface FormDeleteProps {
  buttonTitle?: string;
  children?: React.ReactNode;
  apiDelete: (data: Record<string, any>) => void;
}

function FormDelete(props: FormDeleteProps) {
  const modalRef = useRef<ModalHandle>(null);
  return (
    <form
      data-form-type="delete"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const obj: Record<string, any> = {};
        data.forEach((value, key) => {
          obj[key] = value;
        });

        props.apiDelete(obj);
        modalRef.current?.close();
      }}
    >
      <Modal ref={modalRef}>
        {props.children}
        <button
          className="w-36 cursor-pointer self-center rounded-lg bg-red-500 py-4 text-white"
          type="submit"
        >
          {`SMAZAT`}
        </button>
      </Modal>
      <button
        type="button"
        className="cursor-pointer rounded-md p-2 hover:bg-gray-200"
        onClick={(e) => {
          e.stopPropagation();
          modalRef.current?.open();
        }}
      >
        {props.buttonTitle ? props.buttonTitle : <MdDelete />}
      </button>
    </form>
  );
}

export default FormDelete;
