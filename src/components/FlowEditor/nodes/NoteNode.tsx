
import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

const NoteNode = ({ data }: NodeProps) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-gray-100 border-2 border-gray-500 min-w-[130px]">
      <div className="font-bold">{data.label}</div>
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
    </div>
  );
};

export default memo(NoteNode);
