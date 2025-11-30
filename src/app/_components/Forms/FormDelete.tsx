import React, { useRef } from "react";
import Modal, { type ModalHandle } from "../Modals/Modal";
import { MdDelete } from "react-icons/md";

interface FormDeleteProps {
  buttonTitle?: string;
  children?: React.ReactNode;
  apiDelete: (data: Record<string, unknown>) => void;
}

function FormDelete(props: FormDeleteProps) {
  const modalRef = useRef<ModalHandle>(null);
  return (
    <form
      data-form-type="delete"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const obj: Record<string, unknown> = {};
        data.forEach((value, key) => {
          obj[key] = value;
        });

        props.apiDelete(obj);
        modalRef.current?.close();
      }}
    >
      <Modal ref={modalRef} autoWidth={true}>
        {props.children}
        <button
          className="bg-danger w-36 cursor-pointer self-center rounded-lg py-4 text-white"
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
        {props.buttonTitle ?? <MdDelete />}
      </button>
    </form>
  );
}

export default FormDelete;
