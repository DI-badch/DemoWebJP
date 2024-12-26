import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Edge,
  BuiltInNode,
  BackgroundVariant,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { useAtom } from "jotai";
import { sidebarAtom } from "../states";
import { references } from "../references";
import { ReactNode } from "@tanstack/react-router";

interface RoadmapProps {
  initialNodes: BuiltInNode[];
  initialEdges: Edge[];
  onNodeClick?: (e: React.MouseEvent) => void;
}
export function Roadmap({
  initialNodes,
  initialEdges,
  onNodeClick,
}: RoadmapProps) {
  const [, setSidebarState] = useAtom(sidebarAtom);
  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      // colorMode="dark"
      nodes={nodes}
      edges={edges}
      draggable={false}
      nodesDraggable={false}
      nodesConnectable={false}
      onNodeClick={(e: React.MouseEvent) => {
        onNodeClick && onNodeClick(e);
        const relatedReference = references.find(
          (item) => item.id === (e.target as ReactNode).dataset?.id
        );
        setSidebarState({
          open: !!relatedReference?.references?.length,
          references: relatedReference?.references ?? [],
        });
      }}
      fitView
    >
      <Background variant={BackgroundVariant.Lines} />
      <Controls />
    </ReactFlow>
  );
}
