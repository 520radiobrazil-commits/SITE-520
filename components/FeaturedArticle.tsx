import React from 'react';
import { Article } from '../types';
import { parseBrazilianDate, formatTimeAgo, formatFullDateTime } from '../services/geminiService';

interface FeaturedArticleProps {
  article: Article;
  onSelect: (article: Article) => void;
  currentTime: Date;
}

const ArrowRightIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article, onSelect, currentTime }) => {
  const articleDate = parseBrazilianDate(article.date);
  const timeAgo = formatTimeAgo(articleDate, currentTime);
  const fullDateTime = formatFullDateTime(articleDate);

  return (
    <div 
      onClick={() => onSelect(article)}
      className="relative mb-8 rounded-lg overflow-hidden shadow-2xl bg-gray-800 transition-all duration-300 ease-in-out hover:shadow-teal-500/20 hover:-translate-y-1 cursor-pointer"
    >
      {article.isFeatured && (
        <div className="absolute top-4 right-4 bg-teal-500 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-lg shadow-teal-500/50 z-10">
            Destaque
        </div>
      )}
      {article.videoUrl ? (
        <video
          key={article.videoUrl}
          className="w-full aspect-video object-cover"
          controls
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={article.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover" />
      )}
      <div className="p-6">
        <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-2">{article.category}</p>
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
          {article.title}
        </h2>
        <p className="text-gray-300 text-base lg:text-lg mb-6">{article.summary}</p>
         <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">
                <span>Por {article.author} &bull; </span>
                <time dateTime={articleDate.toISOString()} title={fullDateTime} className="cursor-help">
                    Atualizado {timeAgo}
                </time>
            </div>
            <div className="flex items-center space-x-2">
                <div
                    className="inline-flex items-center justify-center text-sm font-semibold bg-teal-500 hover:bg-teal-400 text-gray-900 px-5 py-2.5 rounded-md transition-colors duration-200"
                >
                    LEIA MAIS
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;