import React from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import rehypeRaw from "rehype-raw";
import { customDirectives } from "~/markdown-directives";
import Link from "next/link";

interface MarkdownViewerProps {
  content: string;
}

const components: Components = {
  div: ({ className, children }) => {
    if (!className) return <div>{children}</div>;
    switch (className) {
      case "md-note":
        return (
          <div className="my-4 rounded border-l-4 border-blue-500 bg-blue-100 p-4 text-blue-800">
            {children}
          </div>
        );
      case "md-warning":
        return (
          <div className="my-4 rounded border-l-4 border-red-500 bg-red-100 p-4 font-semibold text-red-700">
            {children}
          </div>
        );
      case "md-info":
        return (
          <div className="my-4 rounded border-l-4 border-green-600 bg-green-100 p-4 text-green-800">
            {children}
          </div>
        );
      case "md-title":
        return (
          <h1 className="my-6 text-4xl font-extrabold text-purple-600">
            {children}
          </h1>
        );
      default:
        return <div>{children}</div>;
    }
  },
  h1: ({ children }) => <h1 className="my-4 text-3xl font-bold">{children}</h1>,
  h2: ({ children }) => (
    <h2 className="my-3 text-2xl font-semibold">{children}</h2>
  ),
  p: ({ children }) => <p className="my-2">{children}</p>,

  code: ({ node, className, children }) => {
    const text = String(children);
    const isBlock = text.includes("\n");

    if (isBlock) {
      return (
        <pre className="my-2 rounded bg-gray-100 p-3">
          <code className={className}>{text}</code>
        </pre>
      );
    } else {
      return <code className="rounded bg-gray-200 p-1">{text}</code>;
    }
  },
};

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkDirective, customDirectives]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
