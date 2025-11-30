"use client";

import React, { useState, useImperativeHandle, forwardRef } from "react";
import MarkdownViewer from "./MarkdownViewer";
import GridLayout from "../../Layout/GridLayout";
import TextareaAutosize from "react-textarea-autosize";

export interface MarkdownEditorProps {
  id: string;
  markdown: string;
  name: string;
  userId: string;
  className?: string;
  view?: "horizontal" | "vertical";
}

export interface MarkdownEditorRef {
  getMarkdown: () => string;
  getName: () => string;
  setMarkdown: (newMarkdown: string) => void;
  setName: (newName: string) => void;
}

const MarkdownEditor = forwardRef<MarkdownEditorRef, MarkdownEditorProps>(
  (props, ref) => {
    const [markdown, setMarkdown] = useState(props.markdown);
    const [name, setName] = useState(props.name);

    useImperativeHandle(ref, () => ({
      getMarkdown: () => markdown,
      getName: () => name,
      setMarkdown: (newMarkdown: string) => {
        setMarkdown(newMarkdown);
      },
      setName: (newName: string) => {
        setName(newName);
      },
    }));

    return (
      <div className={`flex h-full flex-col justify-center ${props.className}`}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 rounded border p-2"
        />
        <GridLayout>
          {/* EDITOR */}
          <div
            className={`custom-scrollbar min-h-full p-4 ${props.view === "horizontal" ? "col-span-6" : "col-span-12"}`}
          >
            <TextareaAutosize
              className="custom-scrollbar w-full resize-none p-4 text-lg outline-none"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          </div>

          {/* PREVIEW */}
          <div
            className={`custom-scrollbar h-full p-4 ${props.view === "horizontal" ? "col-span-6" : "col-span-12"}`}
          >
            <MarkdownViewer content={markdown} />
          </div>
        </GridLayout>
      </div>
    );
  },
);

MarkdownEditor.displayName = "MarkdownEditor";

export default MarkdownEditor;
