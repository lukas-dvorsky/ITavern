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

export interface MarkdownBlock {
  id: number;
  content: string | null;
  name: string;
}

interface MarkdownListProps {
  blocks: MarkdownBlock[];
  lectureId: number;
  isAdmin: boolean;
  userId: string;
}

export default function MarkdownList({
  blocks,
  lectureId,
  isAdmin,
  userId,
}: MarkdownListProps) {
  const [items, setItems] = useState(blocks);
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  const updateOrderMutation = api.lectures.updateOrder.useMutation();

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const newItems = [...items];
    const [removed] = newItems.splice(result.source.index, 1);
    if (!removed) return;
    newItems.splice(result.destination.index, 0, removed);

    setItems(newItems);

    const newOrder = newItems.map((i) => i.id);

    await updateOrderMutation.mutateAsync({
      lectureId,
      order: newOrder,
    });
  };

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
              {isAdmin && editModeEnabled && items.length === 0 && (
                <MarkdownAddButton
                  addToIndex={0}
                  lectureId={lectureId}
                  userId={userId}
                />
              )}
              {items.map((mdb, index) => (
                <Draggable
                  key={mdb.id}
                  draggableId={mdb.id.toString()}
                  index={index}
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
                        />
                      )}
                      <MarkdownBlockView
                        mdb={mdb}
                        editModeEnabled={editModeEnabled}
                        isAdmin={isAdmin}
                        items={items}
                        lectureId={lectureId}
                        userId={userId}
                        provided={provided}
                        setItems={setItems}
                      />

                      {isAdmin && editModeEnabled && (
                        <MarkdownAddButton
                          addToIndex={index + 1}
                          lectureId={lectureId}
                          userId={userId}
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
