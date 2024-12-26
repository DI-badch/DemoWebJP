import { createFileRoute } from "@tanstack/react-router";
import { Roadmap } from "../components/roadmap";
import { initialEdges } from "../roadmaps/backend/edges";
import { initialNodes } from "../roadmaps/backend/nodes";

export const Route = createFileRoute("/backend")({
  component: BackendRoadmap,
});

export function BackendRoadmap() {
  return <Roadmap initialEdges={initialEdges} initialNodes={initialNodes} />;
}
