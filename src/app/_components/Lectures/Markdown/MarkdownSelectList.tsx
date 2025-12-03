"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";
import MarkdownSelectItem from "./MarkdownSelectItem";
import MarkdownViewer from "./MarkdownViewer";
import type { MarkdownAddButtonProps } from "./MarkdownAddButton";
import SearchBar from "../../Navigation/SearchBar";
import type { ModalHandle } from "../../Modals/Modal";

interface MarkdownSelectListProps extends MarkdownAddButtonProps {
  modalRef: React.RefObject<ModalHandle | null>;
}

function MarkdownSelectList({
  userId,
  addToIndex,
  lectureId,
  modalRef,
  ...props
}: MarkdownSelectListProps & React.HTMLAttributes<HTMLDivElement>) {
  const markdownBlocks = api.block.getMarkdownBlocks.useQuery();
  const [viewerContent, setViewerContent] = useState("");

  return (
    <div {...props}>
      <div className="bg-background h-96 overflow-y-auto rounded-md px-4 inset-shadow-xs">
        <MarkdownViewer content={viewerContent} />
      </div>
      <SearchBar
        filterFunction={(searchFor) =>
          markdownBlocks.data
            ?.filter((mdb) =>
              mdb.name?.toLowerCase().includes(searchFor.toLowerCase()),
            )
            .map((mdb) => (
              <MarkdownSelectItem
                refetch={props.refetch}
                userId={userId}
                key={mdb.id}
                mdb={mdb}
                setViewerContent={setViewerContent}
                addToIndex={addToIndex}
                lectureId={lectureId}
                modalRef={modalRef}
              />
            ))
        }
      />
    </div>
  );
}

export default MarkdownSelectList;
