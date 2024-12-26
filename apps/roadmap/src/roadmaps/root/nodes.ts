import { BuiltInNode, Position } from "@xyflow/react";
import { createStaticNode, createSelectableNode } from "../../utils";

export const initialNodes: BuiltInNode[] = [
  createStaticNode({
    id: "http/https",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "HTTP/HTTPS" },
  }),
  createSelectableNode({
    id: "http",
    type: "output",
    position: { x: 200, y: -30 },
    data: { label: "HTTP " },
    targetPosition: Position.Left,
  }),
  createSelectableNode({
    id: "https",
    type: "output",
    position: { x: 200, y: 30 },
    data: { label: "HTTPS " },
    targetPosition: Position.Left,
  }),
  createStaticNode({
    id: "css",
    position: { x: 0, y: 100 },
    data: { label: "CSS" },
  }),
  createSelectableNode({
    id: "css-layout",
    type: "output",
    position: { x: -200, y: 70 },
    data: { label: "CSS Layout" },
  }),
  createSelectableNode({
    id: "build-tools",
    type: "output",
    position: { x: -200, y: 130 },
    data: { label: "Build Tools" },
  }),
  createSelectableNode({
    id: "storage",
    position: { x: 0, y: 200 },
    data: { label: "Browser Storage" },
  }),
  createStaticNode({
    id: "git",
    position: { x: 0, y: 300 },
    data: { label: "Git" },
  }),
  createSelectableNode({
    id: "git-commands",
    type: "output",
    position: {
      x: 200,
      y: 270,
    },
    data: { label: "Commands" },
  }),
  createSelectableNode({
    id: "git-flow",
    type: "output",
    position: {
      x: 200,
      y: 360,
    },
    data: { label: "Feature Flow" },
  }),
  createSelectableNode({
    id: "cicd",
    position: { x: 0, y: 400 },
    data: { label: "CI/CD" },
  }),
  createSelectableNode({
    id: "polling",
    type: "output",
    position: { x: 0, y: 500 },
    data: { label: "Polling" },
  }),
];
