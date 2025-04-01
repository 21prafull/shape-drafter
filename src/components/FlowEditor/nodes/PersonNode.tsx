
import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

interface PersonData {
  label: string;
  role?: 'grantor' | 'grantee';
}

const PersonNode = ({ data }: NodeProps<PersonData>) => {
  const bgColor = data.role === 'grantor' ? 'bg-orange-100' : 'bg-green-100';
  const borderColor = data.role === 'grantor' ? 'border-orange-500' : 'border-green-500';
  
  return (
    <div className={`px-4 py-2 shadow-md rounded-md ${bgColor} border-2 ${borderColor} min-w-[120px]`}>
      <div className="font-bold">{data.label}</div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
    </div>
  );
};

export default memo(PersonNode);
