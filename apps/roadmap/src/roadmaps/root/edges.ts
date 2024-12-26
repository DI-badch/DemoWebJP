import { type Edge } from "@xyflow/react";

export const initialEdges: Edge[] = [
  { id: "html->seo", source: "html", target: "seo", animated: true },
  { id: "html->css", source: "html", target: "css" },
  { id: "css->boxModel", source: "css", target: "box-model", animated: true },
  { id: "css->flexGrid", source: "css", target: "Layout", animated: true },
  {
    id: "css->responsive",
    source: "css",
    target: "responsive",
    animated: true,
  },
  {
    id: "css->positioning",
    source: "css",
    target: "positioning",
    animated: true,
  },
  { id: "css->cssInJs", source: "css", target: "css-in-js", animated: true },
  { id: "css->tailwind", source: "css", target: "tailwind", animated: true },

  { id: "css->javascript", source: "css", target: "javascript" },
  {
    id: "javascript->ES6",
    source: "javascript",
    target: "ES6",
    animated: true,
  },
  {
    id: "javascript->eventLoop",
    source: "javascript",
    target: "event-loop",
    animated: true,
  },
  {
    id: "javascript->modules",
    source: "javascript",
    target: "modules",
    animated: true,
  },
  {
    id: "javascript->promise",
    source: "javascript",
    target: "promise",
    animated: true,
  },
  {
    id: "javascript->fetch",
    source: "javascript",
    target: "fetch",
    animated: true,
  },

  { id: "javascript->storage", source: "javascript", target: "storage" },
  { id: "storage->buildtools", source: "storage", target: "build-tools" },
  { id: "buildtools->typescript", source: "build-tools", target: "typescript" },
  { id: "react->vdom", source: "react", target: "vdom", animated: true },
  {
    id: "react->performanceReact",
    source: "react",
    target: "performance-react",
    animated: true,
  },
  { id: "typescript->react", source: "typescript", target: "react" },
  {
    id: "react->stateManagement",
    source: "react",
    target: "state-management",
    animated: true,
  },
  { id: "react->nextjs", source: "react", target: "nextjs" },
  { id: "nextjs->websocket", source: "nextjs", target: "websocket" },
  { id: "websocket->security", source: "websocket", target: "security" },
  { id: "security->xss", source: "security", target: "xss", animated: true },
];
