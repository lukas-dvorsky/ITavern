"use client";

import type { MarkdownBlock } from "generated/prisma";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdCopyAll } from "react-icons/md";
import type { MarkdownAddButtonProps } from "./MarkdownAddButton";
import { api } from "~/trpc/react";

interface MarkdownSelectItemProps {
  mdb: MarkdownBlock;
  setViewerContent: React.Dispatch<React.SetStateAction<string>>;
}

function MarkdownSelectItem(
  props: MarkdownSelectItemProps & MarkdownAddButtonProps,
) {
  const lectureOrderQuery = api.lectures.getLectureOrder.useQuery(
    props.lectureId,
  );

  const updateOrderMutation = api.lectures.updateOrder.useMutation({
    onSuccess: () => {
      window.location.reload();
    },
  });

  const handleAdd = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!lectureOrderQuery.data) return;

    const currentOrder: number[] = JSON.parse(
      lectureOrderQuery.data.order,
    ) as number[];

    const index = props.addToIndex ?? currentOrder.length;

    currentOrder.splice(index, 0, props.mdb.id);

    try {
      await updateOrderMutation.mutateAsync({
        lectureId: props.lectureId,
        order: currentOrder,
      });
    } catch (err) {
      console.error("Chyba při přidávání blocku:", err);
    }
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
        <MdCopyAll className="hover:bg-background h-6 w-6" />
      </div>
    </div>
  );
}

export default MarkdownSelectItem;
