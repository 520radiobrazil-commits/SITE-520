import React from 'react';
import { Article } from '../types';
import { formatShortDateTime, formatFullDateTime } from '../utils/time';

interface MostViewedProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  currentTime: Date;
}

const MostViewed: React.FC<MostViewedProps> = ({ articles, onSelectArticle, currentTime }) => {
  // Fix: Sort articles by views, handling cases where views might be undefined by treating them as 0.
  const mostViewedArticles = [...articles]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5); // Show top 5

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Mais Vistos</h3>
      {mostViewedArticles.length > 0 ? (
        <ul className="space-y-2">
          {mostViewedArticles.map((article, index) => {
            const displayDate = article.updatedAt || article.publishedAt;
            const dateLabel = article.updatedAt ? 'Atualizado' : 'Publicado';
            return (
              <li key={article.id}>
                <button
                  onClick={() => onSelectArticle(article)}
                  className="w-full text-left p-2 rounded-md hover:bg-gray-700/50 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-black text-gray-600 group-hover:text-teal-400 transition-colors duration-200">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-white font-semibold leading-tight group-hover:text-teal-300 transition-colors duration-200">
                        {article.title}
                      </p>
                      <div className="text-gray-400 text-xs mt-1">
                          <time dateTime={displayDate} title={formatFullDateTime(displayDate)} className="cursor-help">
                              {dateLabel} em {formatShortDateTime(displayDate)}
                          </time>
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">Não há artigos populares no momento.</p>
      )}
    </div>
  );
};

export default MostViewed;