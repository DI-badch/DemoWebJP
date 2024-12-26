import { type Edge } from "@xyflow/react";

export const initialEdges: Edge[] = [
  { id: "python->env", source: "python", target: "env", animated: true },
  {
    id: "python->async",
    source: "python",
    target: "async",
    animated: true,
  },
  {
    id: "python->module",
    source: "python",
    target: "module",
    animated: true,
  },
  { id: "python->oop", source: "python", target: "oop", animated: true },
  {
    id: "python->concurrency",
    source: "python",
    target: "concurrency",
    animated: true,
  },
  {
    id: "python->db",
    source: "python",
    target: "db",
  },
  {
    id: "db->sql",
    source: "db",
    target: "sql",
    animated: true,
  },
  {
    id: "sql->sql-design",
    source: "sql",
    target: "sql-design",
    animated: true,
  },
  {
    id: "sql->sql-query",
    source: "sql",
    target: "sql-query",
    animated: true,
  },
  {
    id: "db->nosql",
    source: "db",
    target: "nosql",
    animated: true,
  },
  {
    id: "db->api",
    source: "db",
    target: "api",
  },
  {
    id: "api->rest",
    source: "api",
    target: "rest",
    animated: true,
  },
  {
    id: "api->jwt",
    source: "api",
    target: "jwt",
    animated: true,
  },
  {
    id: "api->security",
    source: "api",
    target: "security",
  },
  {
    id: "security->cors",
    source: "security",
    target: "cors",
    animated: true,
  },
  {
    id: "security->ssl",
    source: "security",
    target: "ssl",
    animated: true,
  },
  {
    id: "security->sql-inject",
    source: "security",
    target: "sql-inject",
    animated: true,
  },
  {
    id: "auth->cookie",
    source: "auth",
    target: "cookie",
    animated: true,
  },
  {
    id: "auth->oauth",
    source: "auth",
    target: "oauth",
    animated: true,
  },
  {
    id: "security->auth",
    source: "security",
    target: "auth",
  },
  {
    id: "auth->azure",
    source: "auth",
    target: "azure",
  },
  {
    id: "azure->appservice",
    source: "azure",
    target: "appservice",
    animated: true,
  },
  {
    id: "azure->function",
    source: "azure",
    target: "function",
    animated: true,
  },
];
