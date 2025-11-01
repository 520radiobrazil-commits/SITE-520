import React from 'react';
import { Article } from '../types';

interface MostViewedProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

const MostViewed: React.FC<MostViewedProps> = ({ articles, onSelectArticle }) => {
  const mostViewedArticles = [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5); // Show top 5

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">Mais Vistos</h3>
      {mostViewedArticles.length > 0 ? (
        <ul className="space-y-2">
          {mostViewedArticles.map((article, index) => (
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
                     <span className="text-gray-400 text-xs font-bold uppercase tracking-wider block mt-1">
                      {article.views.toLocaleString('pt-BR')} visualizações
                    </span>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">Não há artigos populares no momento.</p>
      )}
    </div>
  );
};

export default MostViewed;
