
import { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  NodeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';

import HeaderNode from './nodes/HeaderNode';
import PersonNode from './nodes/PersonNode';
import InstrumentNode from './nodes/InstrumentNode';
import EvidenceNode from './nodes/EvidenceNode';
import NoteNode from './nodes/NoteNode';
import FlowSidebar from './FlowSidebar';

// Define custom node types
const nodeTypes: NodeTypes = {
  header: HeaderNode,
  person: PersonNode,
  instrument: InstrumentNode,
  evidence: EvidenceNode,
  note: NoteNode,
};

// Initial nodes setup
const initialNodes: Node[] = [
  {
    id: '1',
    type: 'header',
    position: { x: 250, y: 5 },
    data: { label: 'Document Title' },
  },
  {
    id: '2',
    type: 'person',
    position: { x: 100, y: 100 },
    data: { label: 'Grantor', role: 'grantor' },
  },
  {
    id: '3',
    type: 'person',
    position: { x: 400, y: 100 },
    data: { label: 'Grantee', role: 'grantee' },
  },
  {
    id: '4',
    type: 'instrument',
    position: { x: 250, y: 200 },
    data: { label: 'Instrument' },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '2', target: '4' },
  { id: 'e1-3', source: '3', target: '4' },
];

const FlowEditor = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Handle new connections between nodes
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  // Add new node from sidebar
  const onAddNode = useCallback((nodeType: string, label: string) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type: nodeType,
      position: { 
        x: Math.random() * 300 + 50, 
        y: Math.random() * 300 + 50 
      },
      data: { label },
    };
    
    setNodes((nds) => nds.concat(newNode));
  }, [nodes, setNodes]);

  // Save flow to localStorage
  const onSave = useCallback(() => {
    localStorage.setItem('flow-nodes', JSON.stringify(nodes));
    localStorage.setItem('flow-edges', JSON.stringify(edges));
  }, [nodes, edges]);

  // Restore flow from localStorage
  const onRestore = useCallback(() => {
    const savedNodes = localStorage.getItem('flow-nodes');
    const savedEdges = localStorage.getItem('flow-edges');
    
    if (savedNodes) {
      setNodes(JSON.parse(savedNodes));
    }
    
    if (savedEdges) {
      setEdges(JSON.parse(savedEdges));
    }
  }, [setNodes, setEdges]);

  // Reset flow to initial state
  const onReset = useCallback(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [setNodes, setEdges]);

  return (
    <div className="flex h-screen w-full">
      <div className="flex-grow h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-gray-50"
        >
          <Controls />
          <MiniMap />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
      <FlowSidebar 
        onAddNode={onAddNode} 
        onSave={onSave} 
        onRestore={onRestore} 
        onReset={onReset} 
      />
    </div>
  );
};

export default FlowEditor;
