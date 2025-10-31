import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onSummarize: (article: Article) => void;
  onSelect: (article: Article) => void;
}

const ArrowRightIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


const ArticleCard: React.FC<ArticleCardProps> = ({ article, onSummarize, onSelect }) => {
    const handleSummarizeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSummarize(article);
  };
  
  return (
    <div 
        onClick={() => onSelect(article)}
        className="bg-gray-800 rounded-lg overflow-hidden flex flex-col group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={article.imageUrl} alt={article.title} />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">{article.category}</p>
        <h3 className="text-white font-bold text-lg leading-tight mb-2 flex-grow group-hover:text-teal-300 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{article.summary}</p>
        <div className="mt-auto">
            <button
                onClick={handleSummarizeClick}
                className="w-full flex items-center justify-center text-sm font-semibold bg-teal-500 hover:bg-teal-400 text-gray-900 px-4 py-2 rounded-md transition-colors duration-200"
            >
                LEIA MAIS
                <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;