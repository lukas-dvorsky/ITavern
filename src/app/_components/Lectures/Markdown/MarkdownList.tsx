"use client";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import MarkdownViewer from "./MarkdownViewer";
import MarkdownAddButton from "./MarkdownAddButton";
import { api } from "~/trpc/react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoMdMove } from "react-icons/io";
import { useRouter } from "next/navigation";

export interface MarkdownBlock {
  id: number;
  content: string | null;
}

interface MarkdownListProps {
  blocks: MarkdownBlock[];
  lectureId: number;
  isAdmin: boolean;
}

export default function MarkdownList({
  blocks,
  lectureId,
  isAdmin,
}: MarkdownListProps) {
  const [items, setItems] = useState(blocks);
  const [editModeEnabled, setEditModeEnabled] = useState(false);
  const router = useRouter();

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
    <div className="w-full">
      {isAdmin && (
        <div className="mb-4 flex gap-4">
          <input
            type="checkbox"
            name="markdown-edit-mode"
            checked={editModeEnabled}
            onChange={(e) => setEditModeEnabled(e.target.checked)}
          />
          <label htmlFor="markdown-edit-mode">Editační mód</label>
        </div>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="markdownList">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
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
                        />
                      )}
                      <div className="flex w-full items-start justify-between">
                        <MarkdownViewer content={mdb.content ?? ""} />

                        <div
                          className={`border-l-accent flex items-center gap-4 border-l-2 p-4 ${!editModeEnabled && "border-none"}`}
                        >
                          {isAdmin && editModeEnabled && (
                            <>
                              <MdDelete
                                size={24}
                                className="cursor-pointer"
                                onClick={async () => {
                                  const potvrzeni = window.confirm(
                                    "Opravdu chcete smazat tento blok z teto lekce?",
                                  );
                                  if (!potvrzeni) return;

                                  const newItems = items.filter(
                                    (b) => b.id !== mdb.id,
                                  );
                                  setItems(newItems);

                                  const newOrder = newItems.map((b) => b.id);

                                  try {
                                    await updateOrderMutation.mutateAsync({
                                      lectureId,
                                      order: newOrder,
                                    });
                                  } catch (err) {
                                    console.error("Chyba při mazání:", err);
                                    setItems(items);
                                  }
                                }}
                              />

                              <FaRegEdit
                                size={24}
                                className="cursor-pointer"
                                onClick={() =>
                                  router.push(`/markdown-edit/${mdb.id}`)
                                }
                              />
                            </>
                          )}

                          <div
                            {...provided.dragHandleProps}
                            className={`flex items-center ${
                              isAdmin && editModeEnabled
                                ? ""
                                : "pointer-events-none opacity-0"
                            }`}
                          >
                            <IoMdMove size={24} />
                          </div>
                        </div>
                      </div>

                      {isAdmin && editModeEnabled && (
                        <MarkdownAddButton
                          addToIndex={index + 1}
                          lectureId={lectureId}
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
    </div>
  );
}
