import { createFileRoute } from "@tanstack/react-router";
import { Roadmap } from "../components/roadmap";
import { initialEdges } from "../roadmaps/common/edges";
import { initialNodes } from "../roadmaps/common/nodes";

export const Route = createFileRoute("/common")({
  component: CommonRoadmap,
});

export function CommonRoadmap() {
  return <Roadmap initialEdges={initialEdges} initialNodes={initialNodes} />;
}
