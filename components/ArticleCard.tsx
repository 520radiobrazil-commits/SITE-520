import React from 'react';
import { Article } from '../types';
import { formatShortDate, formatFullDateTime, calculateReadTime } from '../utils/time';
import LikeButton from './LikeButton';

interface ArticleCardProps {
  article: Article;
  onSelect: (article: Article) => void;
  currentTime: Date;
  onUpdateLikes: (articleId: number, newLikes: number) => void;
}

const ArrowRightIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const ClockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onSelect, currentTime, onUpdateLikes }) => {
  const displayDate = article.updatedAt || article.publishedAt;
  const dateLabel = article.updatedAt ? 'Atualizado' : 'Publicado';
  const readTime = calculateReadTime(article.content);
  
  return (
    <div 
        onClick={() => onSelect(article)}
        className="bg-gray-800 rounded-lg overflow-hidden flex flex-col group transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer">
      <div className="relative overflow-hidden">
        <img className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" src={article.imageUrl} alt={article.title} />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">{article.category}</p>
        <h3 className="text-white font-bold text-lg leading-tight mb-2 flex-grow group-hover:text-teal-300 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{article.summary}</p>
        <div className="text-xs text-gray-400 mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>Por {article.author}</span>
            <span className="text-gray-600">&bull;</span>
            <time dateTime={displayDate} title={formatFullDateTime(displayDate)} className="cursor-help">
                {dateLabel} em {formatShortDate(displayDate)}
            </time>
            {readTime && (
              <>
                <span className="text-gray-600">&bull;</span>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>{readTime}</span>
                </div>
              </>
            )}
        </div>
        <div className="mt-auto flex items-center justify-between gap-2">
            <LikeButton 
                articleId={article.id}
                initialLikes={article.likes || 0}
                onUpdateLikes={onUpdateLikes}
            />
            <button
                onClick={(e) => { e.stopPropagation(); onSelect(article); }}
                className="flex-grow flex items-center justify-center text-sm font-semibold bg-teal-500 hover:bg-teal-400 text-gray-900 px-4 py-2 rounded-md transition-colors duration-200"
            >
                LEIA MAIS
                <ArrowRightIcon className="w-4 h-4 ml-1" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;