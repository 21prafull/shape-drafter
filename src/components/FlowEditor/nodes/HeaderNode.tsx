
import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

const HeaderNode = ({ data }: NodeProps) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-blue-500 min-w-[150px]">
      <div className="font-bold text-lg text-center">{data.label}</div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
    </div>
  );
};

export default memo(HeaderNode);
