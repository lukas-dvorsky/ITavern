"use client";

import React, { useRef } from "react";
import { TfiPlus } from "react-icons/tfi";
import Modal, { type ModalHandle } from "../../Modals/Modal";
import MarkdownSelectList from "./MarkdownSelectList";
import InputText from "../../UI/InputText";
import FormCreate from "../../Forms/FormCreate";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";
import type { RefetchMarkdownBlocks } from "./MarkdownList";

export interface MarkdownAddButtonProps {
  addToIndex: number;
  lectureId: number;
  userId: string;
  refetch: RefetchMarkdownBlocks;
}

function MarkdownAddButton(props: MarkdownAddButtonProps) {
  // ==== [ API ] ====
  const createBlockConnectLecture =
    api.block.createBlockConnectToLecture.useMutation({
      onSuccess: async () => {
        toast.success("Položka úspěšně vytvořená a přidána do lekce.");
        await props.refetch();
      },
      onError: () => {
        toast.error("Chyba při vytváření položky.");
      },
    });

  // ==== [ STATES ] ====
  const modalRef = useRef<ModalHandle>(null);

  return (
    <div className="bg-accent dark:bg-accent-dark dark:hover:bg-accent hover:bg-accent-light relative my-2 h-1 w-full cursor-pointer rounded-full">
      <div
        className="text-background absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-inherit"
        onClick={() => {
          modalRef.current?.open();
        }}
      >
        <TfiPlus />
      </div>
      <Modal ref={modalRef} title="Vyber markdown">
        <div className="col-span-12">
          <FormCreate
            buttonTitle="Vytvorit novy blok"
            formTitle="Novy blok"
            buttonClassName="bg-primary-light dark:bg-primary-dark text-background hover:bg-primary"
            apiCreate={(formData) => {
              createBlockConnectLecture.mutate({
                order: props.addToIndex,
                lectureId: props.lectureId,
                name: formData.name as string,
                userId: props.userId,
              });
            }}
          >
            <InputText
              dbKey="name"
              focus={true}
              className="col-span-6 col-start-1 py-8 pl-4"
              defaultValue={{ createDefault: "Nazev" }}
              minChars={2}
              label="Nazev"
            ></InputText>
          </FormCreate>
        </div>
        <MarkdownSelectList
          refetch={props.refetch}
          className="col-span-12"
          userId={props.userId}
          addToIndex={props.addToIndex}
          lectureId={props.lectureId}
          modalRef={modalRef}
        />
      </Modal>
    </div>
  );
}

export default MarkdownAddButton;
