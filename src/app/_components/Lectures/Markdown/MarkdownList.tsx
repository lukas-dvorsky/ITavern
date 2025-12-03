// MarkdownList.tsx
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

interface MarkdownListProps {
  lectureId: number;
  isAdmin: boolean;
  userId: string;
}

export default function MarkdownList({
  lectureId,
  isAdmin,
  userId,
}: MarkdownListProps) {
  // ==== [ API ] ====
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

  // ==== [ STATES ] ====
  const [editModeEnabled, setEditModeEnabled] = useState(false);
  const [waitToReorder, setWait] = useState(false);

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

    const newItems = Array.from(LecturesMdBlocks.data);
    newItems.splice(sourceIndex, 1);
    newItems.splice(destinationIndex, 0, movedItem);

    updateBlockOrder.mutate({
      lectureId: movedItem.lectureId,
      blockId: movedItem.blockId,
      oldOrder: sourceIndex,
      newOrder: destinationIndex,
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
      {isAdmin && (
        <div className="col-span-2 col-start-11 mb-4 flex gap-2">
          <ToggleButton
            title="Editační mód"
            icon={<MdEdit size={18} />}
            actionActive={() => {
              setEditModeEnabled(true);
            }}
            actionDisabled={() => {
              setEditModeEnabled(false);
            }}
          />
        </div>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="markdownList">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="col-span-12"
            >
              {isAdmin &&
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
                  isDragDisabled={!isAdmin || !editModeEnabled || waitToReorder}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="flex flex-col items-center gap-4 border-b border-gray-200 py-3"
                    >
                      {isAdmin && editModeEnabled && index === 0 && (
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
                        isAdmin={isAdmin}
                        lectureId={lectureId}
                        userId={userId}
                        provided={provided}
                        refetch={LecturesMdBlocks.refetch}
                      />

                      {isAdmin && editModeEnabled && (
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
