"use client";

import React, {
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import MarkdownEditor, { type MarkdownEditorRef } from "./MarkdownEditor";
import MarkdownViewer from "./MarkdownViewer";
import GridLayout from "../../Layout/GridLayout";
import { MdDelete, MdOutlinePreview } from "react-icons/md";
import { LuSeparatorHorizontal } from "react-icons/lu";
import { IoMdMove } from "react-icons/io";
import type { MarkdownBlock } from "./MarkdownList";
import { api } from "~/trpc/react";
import type { DraggableProvided } from "@hello-pangea/dnd";
import { FaSave } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

interface MarkdownBlockProps {
  mdb: MarkdownBlock;
  lectureId: number;
  userId: string;
  isAdmin: boolean;
  provided: DraggableProvided;
  editModeEnabled: boolean;
  items: MarkdownBlock[];
  setItems: Dispatch<SetStateAction<MarkdownBlock[]>>;
}

function MarkdownBlockView(props: MarkdownBlockProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [editView, setEditView] = useState<"vertical" | "horizontal">(
    "horizontal",
  );
  const MdRef = useRef<MarkdownEditorRef>(null);

  const updateOrderMutation = api.lectures.updateOrder.useMutation();
  const { data, refetch } = api.lectures.getMarkdownBlock.useQuery(
    props.mdb.id,
  );
  const updateMarkdown = api.lectures.udpateMarkdownBlock.useMutation({
    onSuccess: () => {
      setShowPreview(false);
      toast.success("Položka úspěšně změněna.");
      void refetch();
    },
    onError: () => {
      toast.error("Něco se nepovedlo. Prosím kontaktujte podporu.");
    },
  });

  function handleSave() {
    if (MdRef.current) {
      updateMarkdown.mutate({
        id: Number(data?.id),
        name: MdRef.current.getName(),
        userId: props.userId,
        content: MdRef.current.getMarkdown(),
      });
    }
  }

  return (
    <GridLayout>
      {showPreview && props.editModeEnabled ? (
        <MarkdownEditor
          ref={MdRef}
          name={data?.name ?? ""}
          markdown={data?.content ?? ""}
          className={props.editModeEnabled ? "col-span-11" : "col-span-12"}
          id={String(data?.id)}
          userId={props.userId}
          view={editView}
        />
      ) : (
        <MarkdownViewer
          content={data?.content ?? ""}
          className={props.editModeEnabled ? "col-span-11" : "col-span-12"}
        />
      )}
      {props.isAdmin && props.editModeEnabled && (
        <div
          className={`border-l-accent flex h-full flex-col items-center gap-4 border-l-2 p-4 ${!props.editModeEnabled && "border-none"}`}
        >
          <MdDelete
            size={24}
            className="cursor-pointer"
            onClick={() => {
              const potvrzeni = window.confirm(
                "Opravdu chcete smazat tento blok z teto lekce?",
              );
              if (!potvrzeni) return;

              const newItems = props.items.filter((b) => b.id !== data?.id);
              props.setItems(newItems);

              const newOrder = newItems.map((b) => b.id);

              updateOrderMutation.mutate({
                lectureId: props.lectureId,
                order: newOrder,
              });
            }}
          />
          <MdOutlinePreview
            size={24}
            className="cursor-pointer"
            onClick={() => {
              if (
                showPreview === true &&
                MdRef.current?.getMarkdown() !== data?.content
              ) {
                if (
                  window.confirm(
                    `Chcete uložit změny v ${data?.name}? Uložením změníte vzhled na všech lekcích. Prosím zvažte jestli náhodou nechcete block nakopírovat než přepsat. Dík.`,
                  )
                ) {
                  handleSave();
                  setShowPreview(!showPreview);
                }
              } else {
                setShowPreview(!showPreview);
              }
            }}
          />
          {showPreview && (
            <>
              <LuSeparatorHorizontal
                size={24}
                className="cursor-pointer"
                onClick={() => {
                  if (editView === "horizontal") {
                    setEditView("vertical");
                  } else {
                    setEditView("horizontal");
                  }
                }}
              />
              <IoRefresh
                size={24}
                className="cursor-pointer"
                onClick={() => {
                  if (data?.content != null) {
                    MdRef.current?.setName(data?.name);
                    MdRef.current?.setMarkdown(data?.content);
                  }
                }}
              />
            </>
          )}
          <div
            {...props.provided.dragHandleProps}
            className={`flex items-center ${
              props.isAdmin && props.editModeEnabled
                ? ""
                : "pointer-events-none opacity-0"
            }`}
          >
            <IoMdMove size={24} />
          </div>
          <FaSave
            size={24}
            className="mt-auto cursor-pointer"
            onClick={() => {
              if (
                showPreview === true &&
                MdRef.current?.getMarkdown() !== data?.content
              ) {
                if (
                  window.confirm(
                    `Chcete uložit změny v ${data?.name}? Uložením změníte vzhled na všech lekcích. Prosím zvažte jestli náhodou nechcete block nakopírovat než přepsat. Dík.`,
                  )
                ) {
                  handleSave();
                }
              }
            }}
          />
          <Toaster />
        </div>
      )}
    </GridLayout>
  );
}

export default MarkdownBlockView;
