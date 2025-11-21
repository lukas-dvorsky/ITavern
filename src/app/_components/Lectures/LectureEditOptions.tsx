"use client";

import React from "react";
import { api } from "~/trpc/react";

interface LectureEditOptionsProps {
  id: string;
  markdown: string;
}

function LectureEditOptions(props: LectureEditOptionsProps) {
  const updateMarkdown = api.lectures.udpateMarkdown.useMutation();

  return (
    <div>
      {/* Set is public */}
      <button
        onClick={() => {
          updateMarkdown.mutate({
            id: Number(props.id),
            markdown: props.markdown,
          });
        }}
      >
        Update
      </button>
    </div>
  );
}

export default LectureEditOptions;
