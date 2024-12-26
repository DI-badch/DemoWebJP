import { BuiltInNode } from "@xyflow/react";

export function createStaticNode(props: BuiltInNode): BuiltInNode {
  return {
    ...props,
    selectable: false,
    style: {
      color: "#1E293B",
      border: "2px solid #1E293B",
    },
  };
}

export function createSelectableNode(props: BuiltInNode): BuiltInNode {
  return {
    ...props,
    style: {
      backgroundColor: "#1E293B",
      color: "#7DD3FC",
    },
  };
}
