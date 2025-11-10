import React from 'react';

// Note: The live Google AdSense functionality has been replaced with a static
// placeholder. The placeholder publisher ID ("ca-pub-XXXXXXXXXXXXXXXX") causes
// script errors. To enable live ads, a valid AdSense script must be added back
// to index.html, and this component should be updated to render the ad tag.

interface AdPlaceholderProps {
  width: string;
  height: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ width, height }) => {
  return (
    // This outer div maintains the layout space and shows a placeholder style
    // in case the ad script is blocked or fails to load an ad.
    <div className={`bg-gray-800 flex items-center justify-center ${width} ${height} rounded-lg text-gray-500 overflow-hidden`}>
      <div className="flex items-center justify-center h-full w-full border-2 border-dashed border-gray-600">
          <span className="text-sm">Publicidade</span>
      </div>
    </div>
  );
};

export default AdPlaceholder;