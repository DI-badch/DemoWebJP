import { createFileRoute } from "@tanstack/react-router";
import { Roadmap } from "../components/roadmap";
import { initialEdges } from "../roadmaps/root/edges";
import { initialNodes } from "../roadmaps/root/nodes";

export const Route = createFileRoute("/root")({
  component: RootRoadmap,
});

export function RootRoadmap() {
  return <Roadmap initialEdges={initialEdges} initialNodes={initialNodes} />;
}
