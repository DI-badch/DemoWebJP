import { createFileRoute } from '@tanstack/react-router'
import { initialEdges } from "../roadmaps/frontend/edges";
import { initialNodes } from "../roadmaps/frontend/nodes";
import { Roadmap } from "../components/roadmap";

export const Route = createFileRoute('/frontend')({
  component: FrontendRoadmap,
})

export function FrontendRoadmap() {
  return <Roadmap initialEdges={initialEdges} initialNodes={initialNodes} />;
}