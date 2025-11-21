"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { api } from "~/trpc/react";
import MarkdownViewer from "./MarkdownViewer";

interface MarkdownEditorProps {
  id: string;
  markdown: string;
}

function MarkdownEditor(props: MarkdownEditorProps) {
  const router = useRouter();
  const [markdown, setMarkdown] = useState(props.markdown);

  const updateMarkdown = api.lectures.udpateMarkdown.useMutation({
    onSuccess: () => router.push(`/lecture/${props.id}`),
  });

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* EDITOR */}
      <div className="h-full w-1/2">
        <textarea
          className="custom-scrollbar h-full w-full resize-none overflow-auto p-4 text-lg outline-none"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />

        <button
          className="absolute top-4 right-8 rounded bg-blue-600 px-4 py-2 text-2xl text-white"
          onClick={() =>
            updateMarkdown.mutate({
              id: Number(props.id),
              markdown,
            })
          }
        >
          Update
        </button>
      </div>

      {/* PREVIEW */}
      <div className="custom-scrollbar text- h-full w-1/2 overflow-auto p-4">
        <MarkdownViewer content={markdown} />
      </div>
    </div>
  );
}

export default MarkdownEditor;
