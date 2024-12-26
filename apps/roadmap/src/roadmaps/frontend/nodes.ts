import { BuiltInNode, Position } from "@xyflow/react";
import { createStaticNode, createSelectableNode } from "../../utils";

export const initialNodes: BuiltInNode[] = [
  createStaticNode({
    id: "html",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "HTML" },
    targetPosition: Position.Bottom,
  }),
  createSelectableNode({
    id: "seo",
    position: { x: -200, y: -30 },
    data: { label: "SEO" },
    targetPosition: Position.Bottom,
  }),
  createStaticNode({
    id: "css",
    position: { x: 0, y: 150 },
    data: { label: "CSS" },
  }),
  createSelectableNode({
    id: "box-model",
    type: "output",
    position: { x: -200, y: 100 },
    data: { label: "Box Model" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "Layout",
    type: "output",
    position: { x: -200, y: 150 },
    data: { label: "Layout" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "responsive",
    type: "output",

    position: { x: -200, y: 200 },
    data: { label: "Responsive" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "positioning",
    type: "output",

    position: { x: 200, y: 100 },
    data: { label: "Positioning" },
    targetPosition: Position.Left,
  }),
  createSelectableNode({
    id: "tailwind",
    type: "output",

    position: { x: 200, y: 200 },
    data: { label: "Tailwind" },
    targetPosition: Position.Left,
  }),
  createStaticNode({
    id: "javascript",
    position: { x: 0, y: 350 },
    data: { label: "Javascript" },
  }),
  createSelectableNode({
    id: "ES6",
    type: "output",

    position: { x: -200, y: 300 },
    data: { label: "ES6" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "event-loop",
    type: "output",

    position: { x: -200, y: 350 },
    data: { label: "Event Loop" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "modules",
    type: "output",

    position: { x: -200, y: 400 },
    data: { label: "Modules" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "promise",
    type: "output",

    position: { x: 200, y: 300 },
    data: { label: "Promise" },
    targetPosition: Position.Left,
  }),
  createSelectableNode({
    id: "fetch",
    type: "output",
    position: { x: 200, y: 350 },
    data: { label: "Fetch" },
    targetPosition: Position.Left,
  }),
  createSelectableNode({
    id: "validate",
    type: "output",
    position: { x: 200, y: 400 },
    data: { label: "Validate" },
    targetPosition: Position.Left,
  }),
  createSelectableNode({
    id: "typescript",
    position: { x: 0, y: 650 },
    data: { label: "Typescript" },
  }),
  createStaticNode({
    id: "react",
    position: { x: 0, y: 750 },
    data: { label: "ReactJS" },
  }),
  createSelectableNode({
    id: "vdom",
    type: "output",
    position: { x: -200, y: 750 },
    data: { label: "VDOM" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "performance-react",
    type: "output",
    position: { x: 200, y: 725 },
    data: { label: "Performance" },
    targetPosition: Position.Left,
  }),
  createSelectableNode({
    id: "state-management",
    type: "output",
    position: { x: 200, y: 775 },
    data: { label: "State management" },
    targetPosition: Position.Left,
  }),
  createSelectableNode({
    id: "build-tools",
    position: { x: 0, y: 525 },
    data: { label: "Build Tool" },
  }),
  createSelectableNode({
    id: "nextjs",
    position: { x: 0, y: 850 },
    data: { label: "NextJS" },
  }),
  createSelectableNode({
    id: "storage",
    position: { x: 0, y: 435 },
    data: { label: "Storage" },
  }),
  createSelectableNode({
    id: "websocket",
    position: { x: 0, y: 950 },
    data: { label: "Websocket" },
  }),
  createStaticNode({
    id: "security",
    position: { x: 0, y: 1050 },
    data: { label: "Security" },
  }),
  createSelectableNode({
    id: "xss",
    type: "output",
    position: { x: 200, y: 1050 },
    data: { label: "XSS" },
    targetPosition: Position.Left,
  }),
];
