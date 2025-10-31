import React, { useEffect } from 'react';

// Extend the Window interface to include the adsbygoogle property
// This prevents TypeScript errors when accessing window.adsbygoogle
declare global {
  interface Window {
    adsbygoogle?: object[];
  }
}

interface AdPlaceholderProps {
  width: string;
  height: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ width, height }) => {
  useEffect(() => {
    try {
      // The adsbygoogle array is initialized by the AdSense script.
      // Pushing an empty object requests that an ad be displayed in an ad unit.
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense script error:', err);
    }
  }, []);

  return (
    // This outer div maintains the layout space and shows a placeholder style
    // in case the ad script is blocked or fails to load an ad.
    <div className={`bg-gray-800 flex items-center justify-center ${width} ${height} rounded-lg text-gray-500 overflow-hidden`}>
        <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', height: '100%' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // IMPORTANT: Replace with your Publisher ID
            data-ad-slot="YYYYYYYYYY"          // IMPORTANT: Replace with your Ad Slot ID
            data-ad-format="auto"
            data-full-width-responsive="true"
        >
          {/* This content is a fallback but AdSense will typically fill the container */}
          <div className="flex items-center justify-center h-full w-full border-2 border-dashed border-gray-600">
              <span className="text-sm">Publicidade</span>
          </div>
        </ins>
    </div>
  );
};

export default AdPlaceholder;
