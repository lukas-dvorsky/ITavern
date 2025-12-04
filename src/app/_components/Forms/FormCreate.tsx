import React, { useRef } from "react";
import Modal, { type ModalHandle } from "../Modals/Modal";
import { FiPlusSquare } from "react-icons/fi";

interface FormCreateProps {
  buttonTitle?: string;
  children: React.ReactNode;
  apiCreate: (data: Record<string, unknown>) => void;
  formTitle?: string;
  modalHeight?: string;
  buttonClassName?: string;
}

function FormCreate(props: FormCreateProps) {
  const modalRef = useRef<ModalHandle>(null);
  return (
    <form
      data-form-type="create"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const obj: Record<string, unknown> = {};
        data.forEach((value, key) => {
          obj[key] = value;
        });

        props.apiCreate(obj);
        modalRef.current?.close();
      }}
    >
      <Modal
        ref={modalRef}
        title={props.formTitle ?? "Create"}
        autoWidth={true}
        modalHeight={props.modalHeight}
      >
        {props.children}
        <button
          className="col-span-2 col-start-11 cursor-pointer self-end rounded-lg bg-blue-500 py-4 text-white"
          type="submit"
        >
          {`Vytvořit ->`}
        </button>
      </Modal>
      <button
        type="button"
        className={`${props.buttonClassName} dark:hover:bg-background-dark h-full cursor-pointer rounded-md p-2 hover:bg-gray-200`}
        onClick={(e) => {
          e.stopPropagation();
          modalRef.current?.open();
        }}
      >
        {props.buttonTitle ?? <FiPlusSquare />}
      </button>
    </form>
  );
}

export default FormCreate;
