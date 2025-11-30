"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";
import MarkdownSelectItem from "./MarkdownSelectItem";
import MarkdownViewer from "./MarkdownViewer";
import type { MarkdownAddButtonProps } from "./MarkdownAddButton";
import SearchBar from "../../Navigation/SearchBar";

function MarkdownSelectList(props: MarkdownAddButtonProps) {
  const markdownBlocks = api.lectures.getMarkdownBlocks.useQuery();
  const [viewerContent, setViewerContent] = useState("");

  return (
    <>
      <div className="bg-background max-h-60 overflow-y-scroll rounded-md pl-2">
        <MarkdownViewer content={viewerContent}></MarkdownViewer>
      </div>
      <SearchBar
        filterFunction={(searchFor) =>
          markdownBlocks.data
            ?.filter((mdb) =>
              mdb.name?.toLowerCase().includes(searchFor.toLowerCase()),
            )
            .map((mdb) => (
              <MarkdownSelectItem
                key={mdb.id}
                mdb={mdb}
                setViewerContent={setViewerContent}
                addToIndex={props.addToIndex}
                lectureId={props.lectureId}
              />
            ))
        }
      />
    </>
  );
}

export default MarkdownSelectList;
