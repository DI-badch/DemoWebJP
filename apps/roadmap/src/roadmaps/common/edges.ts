import { type Edge } from "@xyflow/react";

export const initialEdges: Edge[] = [
  { id: "http/https->css", source: "http/https", target: "css" },
  {
    id: "http/https->http",
    source: "http/https",
    target: "http",
    animated: true,
  },
  {
    id: "http/https->https",
    source: "http/https",
    target: "https",
    animated: true,
  },
  { id: "css->storage", source: "css", target: "storage" },
  {
    id: "css->css-layout",
    source: "css",
    target: "css-layout",
    animated: true,
  },
  {
    id: "css->build-tools",
    source: "css",
    target: "build-tools",
    animated: true,
  },
  { id: "storage->git", source: "storage", target: "git" },
  { id: "git->cicd", source: "git", target: "cicd" },
  {
    id: "git->git-commands",
    source: "git",
    target: "git-commands",
    animated: true,
  },
  {
    id: "git->git-flow",
    source: "git",
    target: "git-flow",
    animated: true,
  },
  { id: "cicd->polling", source: "cicd", target: "polling" },
];
