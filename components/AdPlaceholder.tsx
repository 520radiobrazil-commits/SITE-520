
import React from 'react';

interface AdPlaceholderProps {
  width: string;
  height: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ width, height }) => {
  return (
    <div className={`bg-gray-700 border-2 border-dashed border-gray-500 flex items-center justify-center ${width} ${height} rounded-lg`}>
      <div className="text-center text-gray-400">
        <p className="font-semibold">Publicidade</p>
        <p className="text-sm">{width.replace('w-', '')} x {height.replace('h-', '')}</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;