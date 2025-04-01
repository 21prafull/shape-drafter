
import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

const InstrumentNode = ({ data }: NodeProps) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-purple-100 border-2 border-purple-500 min-w-[130px]">
      <div className="font-bold">{data.label}</div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
    </div>
  );
};

export default memo(InstrumentNode);
