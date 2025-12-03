import type { MarkdownBlock } from "generated/prisma";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdCopyAll } from "react-icons/md";
import type { MarkdownAddButtonProps } from "./MarkdownAddButton";
import type { ModalHandle } from "../../Modals/Modal";
import { api } from "~/trpc/react";
import toast, { Toaster } from "react-hot-toast";
import type { RefetchMarkdownBlocks } from "./MarkdownList";

interface MarkdownSelectItemProps {
  mdb: MarkdownBlock;
  modalRef: React.RefObject<ModalHandle | null>;
  setViewerContent: React.Dispatch<React.SetStateAction<string>>;
}

function MarkdownSelectItem(
  props: MarkdownSelectItemProps & MarkdownAddButtonProps,
) {
  // ==== [ API ] ====
  const connectBlock = api.block.connectBlockToLecture.useMutation({
    onSuccess: async () => {
      toast.success("Položka úspěšně přiřazena do lekce.");
      await props.refetch();
    },
    onError: async () => {
      toast.error("Chyba při přiřazování položky do lekce.");
    },
  });

  const createBlockConnectLecture =
    api.block.createBlockConnectToLecture.useMutation({
      onSuccess: async () => {
        toast.success("Položka úspěšně zkopírována a přidána do lekce.");
        await props.refetch();
      },
      onError: () => {
        toast.error("Chyba při kopírování položky.");
      },
    });

  // ==== [ FUNCTIONS ] ====
  const handleAdd = async (e: React.MouseEvent) => {
    e.stopPropagation();
    connectBlock.mutate({
      blockId: props.mdb.id,
      lectureId: props.lectureId,
      order: props.addToIndex + 1,
    });
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    createBlockConnectLecture.mutate({
      lectureId: props.lectureId,
      name: props.mdb.name + "_copy",
      order: props.addToIndex + 1,
      userId: props.userId,
    });
  };

  return (
    <div
      className="hover:bg-background flex cursor-pointer justify-between p-4"
      onClick={() => {
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
      <Toaster />
    </div>
  );
}

export default MarkdownSelectItem;
