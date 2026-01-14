"use client";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import MarkdownAddButton from "./MarkdownAddButton";
import { api } from "~/trpc/react";
import GridLayout from "../../Layout/GridLayout";
import ToggleButton from "../../UI/ToggleButton";
import MarkdownBlockView from "./MarkdownBlockView";
import { MdEdit } from "react-icons/md";
import type { LectureMarkdown, MarkdownBlock } from "generated/prisma";
import toast from "react-hot-toast";
import type {
  QueryObserverResult,
  RefetchOptions,
} from "@tanstack/react-query";
import InputCheckbox from "../../UI/InputCheckbox";
import LecturePermissionEdit from "../Permissions/LecturePermissionEdit";

export interface LectureBlockItem extends LectureMarkdown {
  block: MarkdownBlock;
}

type LecturesData = LectureBlockItem[] | undefined;
export type RefetchMarkdownBlocks = (
  options?: RefetchOptions,
) => Promise<QueryObserverResult<LecturesData, unknown>>;

export interface MarkdownAddButtonProps {
  addToIndex: number;
  lectureId: number;
  userId: string;
  refetch: RefetchMarkdownBlocks;
}

interface MarkdownListProps extends React.HTMLAttributes<HTMLDivElement> {
  lectureId: number;
  userId: string;
  isLecturePublic: boolean;
  createdBy: string;
}

export default function MarkdownList({
  lectureId,
  userId,
  isLecturePublic,
  createdBy,
}: MarkdownListProps) {
  // ==== [ API ] ====
  // const lecture = api.lectures.getLecture.useQuery(lectureId);
  const permisionType =
    api.lectures.getUserPermissionTypeonLecture.useQuery(lectureId);
  const LecturesMdBlocks = api.block.getLectureBlocks.useQuery(lectureId);
  const updateBlockOrder = api.block.reorderBlocks.useMutation({
    onSuccess: async () => {
      toast.success("Pořadí bloků bylo změněno.");
      await LecturesMdBlocks.refetch();
      setWait(false);
    },
    onError: async () => {
      toast.error("Chyba při změně pořadí.");
      setWait(true);
    },
  });
  /*   const updateLecturePublic = api.lectures.setLecturePublic.useMutation({
    onSuccess: async () => {
      if (lecturePublic) {
        toast.success("Lekce byla úspěšně schována.");
      } else {
        toast.success("Lekce je viditelná pro všechny.");
      }
      setLecturePublic(!lecturePublic);
    },
    onError: async () => {
      toast.error("Chyba nastavování viditelnosti lekce.");
    },
  }); */

  // ==== [ STATES ] ====
  const [editModeEnabled, setEditModeEnabled] = useState(false);
  const [waitToReorder, setWait] = useState(false);
  const [lecturePublic, setLecturePublic] = useState(isLecturePublic);

  // ==== [ FUNCTIONS ] ====
  const onDragEnd = async (result: DropResult) => {
    setWait(true);
    const { source, destination } = result;

    if (!destination || LecturesMdBlocks.data === undefined) {
      setWait(false);
      return;
    }

    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    const movedItem = LecturesMdBlocks.data[sourceIndex];

    if (!movedItem) {
      setWait(false);
      return;
    }

    const oldOrder = sourceIndex + 1;
    const newOrder = destinationIndex + 1;

    updateBlockOrder.mutate({
      lectureId: movedItem.lectureId,
      blockId: movedItem.blockId,
      oldOrder: oldOrder,
      newOrder: newOrder,
    });
  };

  if (LecturesMdBlocks.isLoading) {
    return (
      <GridLayout>
        <p className="col-span-12 my-20 text-center text-xl">
          Načítání obsahu...
        </p>
      </GridLayout>
    );
  }

  if (LecturesMdBlocks.isError) {
    return (
      <GridLayout>
        <p className="col-span-12 my-20 text-center text-xl text-red-600">
          Chyba při načítání obsahu: {LecturesMdBlocks.error?.message}
        </p>
      </GridLayout>
    );
  }

  return (
    <GridLayout>
      {permisionType.data !== "NONE" && (
        <GridLayout className="col-span-12 mb-4 flex gap-2">
          <InputCheckbox
            initialValue={lecturePublic}
            label="Viditelný všem uživatelům?"
            className="col-span-2"
            disabled={permisionType.data === "MINIMAL"}
            disabledMessage="Nemáte právo na editaci této lekce."
            onChange={() => {
              /*               updateLecturePublic.mutate({
                isPublic: !lecturePublic,
                lectureId: lectureId,
                userId: userId,
              }); */
            }}
          />
          {/*           {permisionType.data === "ADMIN" && (
            <LecturePermissionEdit lectureId={lectureId} />
          )} */}
          <ToggleButton
            title="Editační mód"
            className="col-span-2 col-start-11"
            icon={<MdEdit size={18} />}
            actionActive={() => {
              setEditModeEnabled(true);
            }}
            actionDisabled={() => {
              setEditModeEnabled(false);
            }}
          />
        </GridLayout>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="markdownList">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="col-span-12"
            >
              {permisionType.data !== "NONE" &&
                editModeEnabled &&
                LecturesMdBlocks.data?.length === 0 && (
                  <MarkdownAddButton
                    addToIndex={0}
                    lectureId={lectureId}
                    userId={userId}
                    refetch={LecturesMdBlocks.refetch}
                  />
                )}
              {LecturesMdBlocks.data?.map((mdb, index) => (
                <Draggable
                  key={mdb.block.id}
                  draggableId={mdb.block.id.toString()}
                  index={index}
                  isDragDisabled={
                    permisionType.data === "NONE" ||
                    !editModeEnabled ||
                    waitToReorder
                  }
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="dark:border-background-dark/80 flex flex-col items-center gap-4 border-b border-gray-200 py-3"
                    >
                      {permisionType.data !== "NONE" &&
                        editModeEnabled &&
                        index === 0 && (
                          <MarkdownAddButton
                            addToIndex={0}
                            lectureId={lectureId}
                            userId={userId}
                            refetch={LecturesMdBlocks.refetch}
                          />
                        )}
                      <MarkdownBlockView
                        mdb={mdb.block}
                        editModeEnabled={editModeEnabled}
                        isAdmin={permisionType.data !== "NONE"}
                        lectureId={lectureId}
                        userId={userId}
                        provided={provided}
                        refetch={LecturesMdBlocks.refetch}
                      />

                      {permisionType.data !== "NONE" && editModeEnabled && (
                        <MarkdownAddButton
                          addToIndex={index + 1}
                          lectureId={lectureId}
                          userId={userId}
                          refetch={LecturesMdBlocks.refetch}
                        />
                      )}
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </GridLayout>
  );
}
