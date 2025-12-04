import React from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import rehypeRaw from "rehype-raw";
import { customDirectives } from "~/markdown-directives";

interface MarkdownViewerProps {
  content: string;
  className?: string;
}

const components: Components = {
  div: ({ className, children }) => {
    if (!className) return <div>{children}</div>;
    if (className.includes("md-markdown-")) {
      const splitted = className.split("-");
      const id = splitted[2];
      return <div>Obsah markdownu s id: {id}</div>;
    }

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
      case "md-markdown":
        const ahoj = "Ahoj";
        return <div>{ahoj}</div>;
      default:
        return <div>{children}</div>;
    }
  },
  h1: ({ children }) => <h1 className="my-4 text-3xl font-bold">{children}</h1>,
  h2: ({ children }) => (
    <h2 className="my-3 text-2xl font-semibold">{children}</h2>
  ),
  p: ({ children }) => <p className="my-2">{children}</p>,

  code: ({ className, children }) => {
    const text = React.Children.toArray(children)
      .map((child) => (typeof child === "string" ? child : ""))
      .join("");

    const isBlock = text.includes("\n");

    if (isBlock) {
      return (
        <pre className="dark:bg-background-dark-card my-2 rounded bg-gray-100 p-3">
          <code className={className}>{text}</code>
        </pre>
      );
    } else {
      return (
        <code className="dark:bg-background-dark-card rounded bg-gray-200 p-1">
          {text}
        </code>
      );
    }
  },
};

export default function MarkdownViewer({
  content,
  className,
}: MarkdownViewerProps) {
  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
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
