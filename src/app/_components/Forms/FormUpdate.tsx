import React, { useRef } from "react";
import Modal, { type ModalHandle } from "../Modals/Modal";
import { FaRegEdit } from "react-icons/fa";

interface FormUpdateProps {
  buttonTitle?: string;
  children: React.ReactNode;
  apiUpdate: (data: Record<string, unknown>) => void;
}

function FormUpdate(props: FormUpdateProps) {
  const modalRef = useRef<ModalHandle>(null);
  return (
    <form
      data-form-type="update"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const obj: Record<string, unknown> = {};
        data.forEach((value, key) => {
          obj[key] = value;
        });

        props.apiUpdate(obj);
        modalRef.current?.close();
      }}
    >
      <Modal ref={modalRef} title="Update" autoWidth={true}>
        {props.children}
        <button
          className="col-span-2 col-start-11 cursor-pointer self-end rounded-lg bg-blue-500 py-4 text-white"
          type="submit"
        >
          {`Upravit ->`}
        </button>
      </Modal>
      <button
        type="button"
        className="dark:hover:bg-background-dark cursor-pointer rounded-md p-2 hover:bg-gray-200"
        onClick={(e) => {
          e.stopPropagation();
          modalRef.current?.open();
        }}
      >
        {props.buttonTitle ?? <FaRegEdit />}
      </button>
    </form>
  );
}

export default FormUpdate;
