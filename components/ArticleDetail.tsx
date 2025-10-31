import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import Comments from './Comments';
import ShareButtons from './ShareButtons';

interface ArticleDetailProps {
  article: Article;
  onGoBack: () => void;
}

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
);

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onGoBack }) => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const incrementViewCount = () => {
        try {
            const countsRaw = localStorage.getItem('articleViewCounts');
            const counts = countsRaw ? JSON.parse(countsRaw) : {};
            const currentCount = counts[article.id] || 0;
            const newCount = currentCount + 1;
            counts[article.id] = newCount;
            localStorage.setItem('articleViewCounts', JSON.stringify(counts));
            setViewCount(newCount);
        } catch (error) {
            console.error("Failed to update view count:", error);
            // Set to 1 if there's an error, as it's the first view
            setViewCount(1);
        }
    };

    incrementViewCount();
  }, [article.id]);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <button onClick={onGoBack} className="mb-8 inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
        <ArrowLeftIcon />
        <span>Voltar</span>
      </button>

      <article>
        <header className="mb-6">
            <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-2">{article.category}</p>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-x-3 text-sm text-gray-400">
                <span>By {article.author}</span>
                <span className="text-gray-600">&middot;</span>
                <span>{article.date}</span>
                {viewCount > 0 && (
                    <>
                        <span className="text-gray-600">&middot;</span>
                        <div className="flex items-center space-x-1.5" title={`${viewCount.toLocaleString()} visualizações`}>
                            <EyeIcon />
                            <span>{viewCount.toLocaleString()}</span>
                        </div>
                    </>
                )}
            </div>
        </header>

        <div className="my-8">
          <ShareButtons article={article} />
        </div>

        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
             {article.videoUrl ? (
                <video key={article.videoUrl} className="w-full aspect-video object-cover" controls autoPlay muted loop playsInline>
                    <source src={article.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover" />
            )}
        </div>


        <div className="prose prose-invert lg:prose-xl text-gray-300 text-lg leading-relaxed space-y-6">
            {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, '<br />') }} />
            ))}
        </div>
      </article>

      <hr className="my-12 border-gray-700" />
      
      <Comments articleId={article.id} />
    </div>
  );
};

export default ArticleDetail;
