import { visit } from "unist-util-visit";

export const customDirectives = () => (tree: any) => {
  visit(tree, (node) => {
    // containerDirective = :::name ... :::
    if (node.type === "containerDirective") {
      const data = node.data || (node.data = {});
      data.hName = "div"; // převede na <div>
      data.hProperties = { className: `md-${node.name}` };
    }
  });
};
