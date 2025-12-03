// MarkdownSelectItem.tsx (Finální verze)
import type { MarkdownBlock } from "generated/prisma";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdCopyAll } from "react-icons/md";
import type { MarkdownAddButtonProps } from "./MarkdownAddButton";
import type { ModalHandle } from "../../Modals/Modal";

interface MarkdownSelectItemProps {
  mdb: MarkdownBlock;
  userId: string;
  setViewerContent: React.Dispatch<React.SetStateAction<string>>;
  modalRef: React.RefObject<ModalHandle | null>;
}

function MarkdownSelectItem(
  props: MarkdownSelectItemProps & MarkdownAddButtonProps,
) {
  // Žádné lokální useQuery pro pořadí!
  // const updateOrderMutation = api.lectures.updateOrder.useMutation();
  // const copyMarkdownBlock = api.lectures.createMarkdownBlock.useMutation();

  const handleAdd = async (e: React.MouseEvent) => {
    e.stopPropagation();

    // try {
    //   await updateOrderMutation.mutateAsync({
    //     lectureId: props.lectureId,
    //     order: currentOrder,
    //   });
    //   await props.refetch();
    //   props.modalRef.current?.close(); // Zavřít modal
    // } catch (err) {
    //   console.error("Chyba při přidávání blocku:", err);
    // }
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();

    // try {
    //   const newBlock = await copyMarkdownBlock.mutateAsync({
    //     content: props.mdb.content ?? undefined,
    //     name: `${props.mdb.name}_copy`,
    //     userId: props.userId,
    //   });

    //   props.modalRef.current?.close(); // Zavřít modal
    // } catch (err) {
    //   console.error("Chyba při kopírování blocku:", err);
    // }
  };

  return (
    <div
      className="hover:bg-background flex cursor-pointer justify-between p-4"
      onClick={() => {
        // Zobrazení v prohlížeči (OK)
        props.setViewerContent(String(props.mdb.content));
      }}
    >
      <span>{props.mdb.name}</span>
      <div className="flex items-center justify-center gap-4">
        <FaArrowAltCircleRight
          className="hover:bg-background-card h-6 w-6"
          onClick={handleAdd}
        />
        <MdCopyAll
          className="hover:bg-background h-6 w-6"
          onClick={handleCopy}
        />
      </div>
    </div>
  );
}

export default MarkdownSelectItem;
