import React, { useRef } from "react";
import Modal, { type ModalHandle } from "../Modals/Modal";
import LecturePermissionList from "./LecturePermissionList";

interface LecturePermissionEditProps extends React.HTMLAttributes<HTMLButtonElement> {
  lectureId: number;
}

function LecturePermissionEdit(props: LecturePermissionEditProps) {
  const modalRef = useRef<ModalHandle>(null);
  return (
    <>
      <button
        className={`${props.className} bg-background-card dark:border-background-dark dark:bg-background-dark-card flex cursor-pointer items-center justify-center gap-4 rounded-sm border border-gray-400 px-2 py-1`}
        onClick={() => {
          modalRef.current?.open();
        }}
      >
        Editace práv
      </button>
      <Modal ref={modalRef} title="Editace práv">
        <LecturePermissionList lectureId={props.lectureId} />
      </Modal>
    </>
  );
}

export default LecturePermissionEdit;
