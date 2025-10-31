
import React from 'react';

interface TrendingTopicsProps {
  topics: string[];
}

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ topics }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-white font-bold text-lg mb-4">Trending Now</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => (
          <a
            key={index}
            href="#"
            className="bg-gray-700 text-teal-300 text-sm font-medium px-3 py-1 rounded-full hover:bg-gray-600 transition-colors"
          >
            {topic}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
