import React, { useState, useEffect } from 'react';

const phrases = [
  "TUDO SOBRE SEU ESPORTE FAVORITO",
  "EVERYTHING ABOUT YOUR FAVORITE SPORT",
  "TOUT SUR VOTRE SPORT PRÉFÉRÉ",
  "ALLES ÜBER DEINEN LIEBLINGSSPORT",
  "TUTTO SUL TUO SPORT PREFERITO",
  "关于你最喜欢的运动的一切"
];

const AnimatedBanner: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // Controls the fade effect

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true); // Start fade-out

      // Wait for fade-out to complete before changing text
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsFading(false); // Start fade-in
      }, 500); // This duration should match the CSS transition duration

    }, 4000); // Time each phrase is displayed

    return () => clearInterval(intervalId);
  }, []);

  return (
    // Reduced padding (py-3), margin (mb-6), and a subtle background
    <div className="bg-gray-800/50 text-center py-3 mb-6 rounded-md overflow-hidden">
      <h2 
        // Changed text color to teal, reduced font size (text-sm/base) and weight (font-bold)
        className={`text-teal-400 font-bold text-sm sm:text-base uppercase tracking-wider transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        style={{ minHeight: '24px' }} // Adjusted min-height for new font size
      >
        {phrases[index]}
      </h2>
    </div>
  );
};

export default AnimatedBanner;
