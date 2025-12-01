"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";
import MarkdownSelectItem from "./MarkdownSelectItem";
import MarkdownViewer from "./MarkdownViewer";
import type { MarkdownAddButtonProps } from "./MarkdownAddButton";
import SearchBar from "../../Navigation/SearchBar";

function MarkdownSelectList({
  userId,
  addToIndex,
  lectureId,
  ...props
}: MarkdownAddButtonProps & React.HTMLAttributes<HTMLDivElement>) {
  const markdownBlocks = api.lectures.getMarkdownBlocks.useQuery();
  const [viewerContent, setViewerContent] = useState("");

  return (
    <div {...props}>
      <div className="bg-background max-h-96 overflow-y-scroll rounded-md pl-2">
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
                userId={userId}
                key={mdb.id}
                mdb={mdb}
                setViewerContent={setViewerContent}
                addToIndex={addToIndex}
                lectureId={lectureId}
              />
            ))
        }
      />
    </div>
  );
}

export default MarkdownSelectList;
