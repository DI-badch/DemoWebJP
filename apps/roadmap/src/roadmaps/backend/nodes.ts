import { BuiltInNode, Position } from "@xyflow/react";
import { createStaticNode, createSelectableNode } from "../../utils";

export const initialNodes: BuiltInNode[] = [
  createStaticNode({
    id: "python",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "Python" },
  }),
  createSelectableNode({
    id: "env",
    type: "output",
    position: { x: -200, y: -30 },
    data: { label: "Local Environment" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "async",
    type: "output",
    position: { x: -200, y: 30 },
    data: { label: "Async" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    type: "output",
    id: "module",
    position: { x: -200, y: 90 },
    data: { label: "Module" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    type: "output",
    id: "concurrency",
    position: { x: 200, y: -30 },
    data: { label: "Concurrency" },
    targetPosition: Position.Left,
  }),
  createSelectableNode({
    type: "output",
    id: "oop",
    position: { x: 200, y: 30 },
    data: { label: "OOP" },
    targetPosition: Position.Left,
  }),
  createStaticNode({
    id: "db",
    position: { x: 0, y: 200 },
    data: { label: "Database" },
  }),
  createStaticNode({
    id: "sql",
    position: { x: -200, y: 200 },
    data: { label: "SQL" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "nosql",
    type: "output",
    position: { x: 200, y: 200 },
    data: { label: "NoSQL" },
    targetPosition: Position.Left,
  }),
  createSelectableNode({
    type: "output",
    id: "sql-design",
    position: { x: -300, y: 270 },
    data: { label: "Design Relation" },
  }),
  createSelectableNode({
    type: "output",
    id: "sql-query",
    position: { x: -130, y: 270 },
    data: { label: "Query" },
  }),
  createStaticNode({
    id: "api",
    position: { x: 0, y: 350 },
    data: { label: "API" },
  }),
  createSelectableNode({
    id: "rest",
    type: "output",
    position: {
      x: 200,
      y: 320,
    },
    targetPosition: Position.Left,
    data: { label: "RESTFull" },
  }),
  createSelectableNode({
    id: "jwt",
    type: "output",
    position: {
      x: 200,
      y: 400,
    },
    data: { label: "JWT" },
    targetPosition: Position.Left,
  }),
  createStaticNode({
    id: "security",
    position: { x: 0, y: 470 },
    data: { label: "Security" },
  }),
  createSelectableNode({
    id: "cors",
    type: "output",
    position: {
      x: -200,
      y: 380,
    },
    data: { label: "CORS" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "sql-inject",
    type: "output",
    position: {
      x: -200,
      y: 440,
    },
    data: { label: "SQL Injection" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "ssl",
    type: "output",
    position: {
      x: -200,
      y: 500,
    },
    data: { label: "SSL/TLS" },
    targetPosition: Position.Right,
  }),
  createStaticNode({
    id: "auth",
    position: {
      x: 0,
      y: 550,
    },
    data: { label: "Auth" },
  }),
  createSelectableNode({
    id: "cookie",
    type: "output",
    position: {
      x: 200,
      y: 500,
    },
    data: { label: "Cookie Based" },
    targetPosition: Position.Left,
  }),
  createSelectableNode({
    id: "oauth",
    type: "output",
    position: {
      x: 200,
      y: 560,
    },
    data: { label: "OAuth" },
    targetPosition: Position.Left,
  }),
  createStaticNode({
    id: "azure",
    position: {
      x: 0,
      y: 650,
    },
    data: { label: "Azure" },
  }),
  createSelectableNode({
    id: "appservice",
    type: "output",
    position: {
      x: -200,
      y: 600,
    },
    data: { label: "App Service" },
    targetPosition: Position.Right,
  }),
  createSelectableNode({
    id: "function",
    type: "output",
    position: {
      x: -200,
      y: 660,
    },
    data: { label: "Function" },
    targetPosition: Position.Right,
  }),
];
