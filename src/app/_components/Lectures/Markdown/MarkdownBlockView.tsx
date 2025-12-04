"use client";

import React, { useRef, useState } from "react";
import MarkdownEditor, { type MarkdownEditorRef } from "./MarkdownEditor";
import MarkdownViewer from "./MarkdownViewer";
import GridLayout from "../../Layout/GridLayout";
import { MdDelete, MdOutlinePreview } from "react-icons/md";
import { LuSeparatorHorizontal } from "react-icons/lu";
import { IoMdMove } from "react-icons/io";
import { api } from "~/trpc/react";
import type { DraggableProvided } from "@hello-pangea/dnd";
import { FaSave } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import type { MarkdownBlock } from "generated/prisma";
import type { RefetchMarkdownBlocks } from "./MarkdownList";

interface MarkdownBlockProps {
  mdb: MarkdownBlock;
  lectureId: number;
  userId: string;
  isAdmin: boolean;
  provided: DraggableProvided;
  editModeEnabled: boolean;
  refetch: RefetchMarkdownBlocks;
}

function MarkdownBlockView(props: MarkdownBlockProps) {
  // ==== [ API ] ====
  const removeLectureBlock = api.block.removeBlockFromLecture.useMutation({
    onSuccess: async () => {
      toast.success(`Položka ${props.mdb.name} úspěšně odebrána z lekce.`);
      await props.refetch();
    },
    onError: () => {
      toast.error(`Nastala chyba při odebírání ${props.mdb.name} z lekce.`);
    },
  });

  const updateBlock = api.block.updateBlock.useMutation({
    onSuccess: async () => {
      toast.success(`Položka byla úspěšně upravena.`);
      await props.refetch();
    },
    onError: () => {
      toast.error(`Nastala chyba při upravování položky ${props.mdb.name}.`);
    },
  });

  // ==== [ HOOKS ] ====
  const [showPreview, setShowPreview] = useState(false);
  const [editView, setEditView] = useState<"vertical" | "horizontal">(
    "horizontal",
  );
  const MdRef = useRef<MarkdownEditorRef>(null);

  async function handleSave() {
    if (MdRef.current) {
      await updateBlock.mutateAsync({
        blockId: props.mdb.id,
        name: MdRef.current.getName(),
        userId: props.userId,
        content: MdRef.current.getMarkdown(),
      });
    }
  }

  const handleDelete = () => {
    const potvrzeni = window.confirm(
      "Opravdu chcete smazat tento blok z teto lekce?",
    );
    if (!potvrzeni) return;

    removeLectureBlock.mutate({
      lectureId: props.lectureId,
      blockId: props.mdb.id,
    });
  };

  return (
    <GridLayout>
      {showPreview && props.editModeEnabled ? (
        <MarkdownEditor
          ref={MdRef}
          name={props.mdb.name ?? ""}
          markdown={props.mdb.content ?? ""}
          className={props.editModeEnabled ? "col-span-11" : "col-span-12"}
          id={String(props.mdb.id)}
          userId={props.userId}
          view={editView}
        />
      ) : (
        <MarkdownViewer
          content={props.mdb.content ?? ""}
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
            onClick={handleDelete}
          />
          <MdOutlinePreview
            size={24}
            className="cursor-pointer"
            onClick={async () => {
              if (
                showPreview === true &&
                MdRef.current?.getMarkdown() !== props.mdb.content
              ) {
                if (
                  window.confirm(
                    `Chcete uložit změny v ${props.mdb.name}? Uložením změníte vzhled na všech lekcích. Prosím zvažte jestli náhodou nechcete block nakopírovat než přepsat. Dík.`,
                  )
                ) {
                  await handleSave();
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
                  if (props.mdb.content != null) {
                    MdRef.current?.setName(props.mdb.name);
                    MdRef.current?.setMarkdown(props.mdb.content);
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
            onClick={async () => {
              if (
                showPreview === true &&
                MdRef.current?.getMarkdown() !== props.mdb.content
              ) {
                if (
                  window.confirm(
                    `Chcete uložit změny v ${props.mdb.name}? Uložením změníte vzhled na všech lekcích. Prosím zvažte jestli náhodou nechcete block nakopírovat než přepsat. Dík.`,
                  )
                ) {
                  await handleSave();
                }
              }
            }}
          />
        </div>
      )}
    </GridLayout>
  );
}

export default MarkdownBlockView;
