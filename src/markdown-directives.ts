import type { Node } from "unist";
import { visit } from "unist-util-visit";

interface ContainerDirectiveNode extends Node {
  type: "containerDirective";
  name: string;
  data?: {
    hName?: string;
    hProperties?: Record<string, unknown>;
  };
}

export const customDirectives = () => (tree: Node) => {
  visit(tree, (node: Node) => {
    if (node.type === "containerDirective") {
      const containerNode = node as ContainerDirectiveNode;

      const data = containerNode.data ?? (containerNode.data = {});
      data.hName = "div";
      data.hProperties = { className: `md-${containerNode.name}` };
    }
  });
};
