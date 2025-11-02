import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import Comments from './Comments';
import ShareButtons from './ShareButtons';
import { parseBrazilianDate, formatTimeAgo } from '../services/geminiService';

interface ArticleDetailProps {
  article: Article;
  onGoBack: () => void;
  currentTime: Date;
}

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onGoBack, currentTime }) => {
  const timeAgo = formatTimeAgo(parseBrazilianDate(article.date), currentTime);

  // Efeito para atualizar meta tags para compartilhamento social
  useEffect(() => {
    const defaultTitle = "RADIO520.COM.BR - Esportes e Notícias";
    const defaultDescription = "RADIO520.COM.BR é sua fonte de notícias esportivas, com artigos, vídeos, podcasts e muito mais.";
    const defaultImage = "https://public-rf-upload.minhawebradio.net/249695/ad/1ccbd4ef8fcc652a7e0c5c0e6215d5ae.jpeg";
    
    const updateMetaTag = (attrName: string, attrValue: string, content: string) => {
        let element = document.querySelector(`meta[${attrName}='${attrValue}']`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attrName, attrValue);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };

    const setArticleTags = () => {
        const title = article.ogTitle || article.title;
        const description = article.ogDescription || article.summary;
        const image = article.ogImageUrl || article.imageUrl;
        
        document.title = `${article.title} | RADIO520.COM.BR`;
        updateMetaTag('name', 'description', article.summary); // Standard description uses summary
        // Open Graph
        updateMetaTag('property', 'og:title', title);
        updateMetaTag('property', 'og:description', description);
        updateMetaTag('property', 'og:image', image);
        updateMetaTag('property', 'og:type', 'article');
        // Twitter
        updateMetaTag('name', 'twitter:card', 'summary_large_image');
        updateMetaTag('name', 'twitter:title', title);
        updateMetaTag('name', 'twitter:description', description);
        updateMetaTag('name', 'twitter:image', image);
    };

    const setDefaultTags = () => {
        document.title = defaultTitle;
        updateMetaTag('name', 'description', defaultDescription);
        // Open Graph
        updateMetaTag('property', 'og:title', defaultTitle);
        updateMetaTag('property', 'og:description', defaultDescription);
        updateMetaTag('property', 'og:image', defaultImage);
        updateMetaTag('property', 'og:type', 'website');
        // Twitter
        updateMetaTag('name', 'twitter:card', 'summary_large_image');
        updateMetaTag('name', 'twitter:title', defaultTitle);
        updateMetaTag('name', 'twitter:description', defaultDescription);
        updateMetaTag('name', 'twitter:image', defaultImage);
    };

    setArticleTags();

    // Função de limpeza para resetar as tags quando o componente desmontar
    return () => {
        setDefaultTags();
    };
}, [article]);

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
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
                <span>Por {article.author}</span>
                <span className="text-gray-600">&bull;</span>
                <span>Atualizado {timeAgo}</span>
            </div>
        </header>

        <div className="my-8">
          <ShareButtons article={article} />
        </div>

        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
             {article.videoUrl ? (
                <video key={article.videoUrl} className="w-full aspect-video object-cover" controls autoPlay muted loop playsInline>
                    <source src={article.videoUrl} type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
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

        <div className="mt-12">
            <a href="https://www.amazon.com.br/dp/B0CDCLWBCX/" target="_blank" rel="noopener noreferrer">
                <img 
                    src="https://public-rf-upload.minhawebradio.net/249695/slider/cdc8d9e95a560b11b1f12b0fa79305de.jpg" 
                    alt="Banner Promocional Amazon" 
                    className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                />
            </a>
        </div>
      </article>

      <hr className="my-12 border-gray-700" />
      
      <Comments articleId={article.id} />
    </div>
  );
};

export default ArticleDetail;