
import React from 'react';
import { Button } from '@/components/ui/button';

interface FlowSidebarProps {
  onAddNode: (type: string, label: string) => void;
  onSave: () => void;
  onRestore: () => void;
  onReset: () => void;
}

const FlowSidebar: React.FC<FlowSidebarProps> = ({
  onAddNode,
  onSave,
  onRestore,
  onReset
}) => {
  return (
    <div className="w-64 bg-white p-4 border-l border-gray-200 flex flex-col">
      <h3 className="text-lg font-medium mb-4">Add Node</h3>
      
      <div className="space-y-2 mb-6">
        <Button 
          className="w-full justify-start"
          variant="outline"
          onClick={() => onAddNode('header', 'New Header')}
        >
          Header
        </Button>
        
        <Button 
          className="w-full justify-start"
          variant="outline"
          onClick={() => onAddNode('person', 'New Person')}
        >
          Person
        </Button>
        
        <Button 
          className="w-full justify-start"
          variant="outline"
          onClick={() => onAddNode('instrument', 'New Instrument')}
        >
          Instrument
        </Button>
        
        <Button 
          className="w-full justify-start"
          variant="outline"
          onClick={() => onAddNode('evidence', 'New Evidence')}
        >
          Evidence
        </Button>
        
        <Button 
          className="w-full justify-start"
          variant="outline"
          onClick={() => onAddNode('note', 'New Note')}
        >
          Note
        </Button>
      </div>
      
      <div className="mt-auto space-y-2">
        <Button 
          className="w-full"
          variant="default"
          onClick={onSave}
        >
          Save
        </Button>
        
        <Button 
          className="w-full"
          variant="outline"
          onClick={onRestore}
        >
          Restore
        </Button>
        
        <Button 
          className="w-full"
          variant="destructive"
          onClick={onReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default FlowSidebar;
