import React, { useState, useCallback, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import AdPlaceholder from './components/AdPlaceholder';
import AudioPlayer from './components/AudioPlayer';
import TrendingTopics from './components/TrendingTopics';
import ArticleDetail from './components/ArticleDetail';
import PromotionalAd from './components/PromotionalAd';
import AnimatedBanner from './components/AnimatedBanner';
import { MOCK_ARTICLES } from './constants';
import { Article } from './types';
import { getAiSummary } from './services/geminiService';

const AiSummaryModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  summary: string;
  isLoading: boolean;
  articleTitle: string;
}> = ({ isOpen, onClose, summary, isLoading, articleTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[60] p-4" onClick={onClose}>
      <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl transform transition-all" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-xl font-bold text-white">Resumo com IA</h3>
          <p className="text-sm text-gray-400 mt-1">Para: "{articleTitle}"</p>
        </div>
        <div className="p-6 min-h-[200px] flex items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center text-gray-300">
                <svg className="animate-spin h-8 w-8 text-teal-400 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p>Gerando resumo...</p>
            </div>
          ) : (
            <div className="text-gray-200 whitespace-pre-wrap space-y-2">
              {summary.split('\n').map((line, index) => <p key={index}>{line}</p>)}
            </div>
          )}
        </div>
        <div className="p-4 bg-gray-800/50 border-t border-gray-700 rounded-b-xl text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-teal-500 text-gray-900 font-semibold rounded-md hover:bg-teal-400 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};


function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [isRadioPlaying, setIsRadioPlaying] = useState(false);
  const [siteViews, setSiteViews] = useState(0);

  
  const radioRef = useRef<HTMLAudioElement>(null);
  const radioStreamUrl = 'https://servidor40.brlogic.com:7054/live';

  useEffect(() => {
    // Site-wide view counter
    try {
      const currentCount = localStorage.getItem('siteViewCount');
      let newCount = currentCount ? parseInt(currentCount, 10) + 1 : 1;
      if (isNaN(newCount)) newCount = 1; // Sanity check
      localStorage.setItem('siteViewCount', newCount.toString());
      setSiteViews(newCount);
    } catch (error) {
        console.error("Failed to update site view count:", error);
        setSiteViews(1);
    }

    const audio = radioRef.current;
    if (audio) {
      audio.load();
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsRadioPlaying(true);
          })
          .catch(error => {
            console.log("Autoplay was prevented by the browser. User interaction is required to start the radio.", error);
            setIsRadioPlaying(false);
          });
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleToggleRadio = useCallback(() => {
    const audio = radioRef.current;
    if (!audio) return;
  
    if (isRadioPlaying) {
      audio.pause();
      setIsRadioPlaying(false);
    } else {
      audio.load(); // Essential for live streams
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio is playing.
            setIsRadioPlaying(true);
          })
          .catch(error => {
            console.error("Audio play failed:", error);
            // Revert state if play fails.
            setIsRadioPlaying(false);
          });
      }
    }
  }, [isRadioPlaying]);


  const sortedArticles = [...MOCK_ARTICLES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const articlesToDisplay = selectedCategory
    ? sortedArticles.filter(article => article.category === selectedCategory)
    : sortedArticles;

  const featuredArticle = articlesToDisplay[0];
  const otherArticles = articlesToDisplay.slice(1);
  const audioArticle = MOCK_ARTICLES.find(a => a.audioUrl);
  
  const trendingTopics = [...new Set(MOCK_ARTICLES.map(a => a.category))]
    .map(category => `#${category.replace(/\s+/g, '')}`);

  const handleArticleSelect = useCallback((article: Article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  }, []);
  
  const handleGoBack = useCallback(() => {
    setSelectedArticle(null);
  }, []);
  
  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category);
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  }, []);

  const handleGoHome = useCallback(() => {
    setSelectedCategory(null);
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  }, []);

  const handleSummarize = useCallback(async (article: Article) => {
    setCurrentArticle(article);
    setIsModalOpen(true);
    setIsSummaryLoading(true);
    setModalContent('');
    
    try {
      const summary = await getAiSummary(article);
      setModalContent(summary);
    } catch (error) {
      setModalContent('Falha ao gerar o resumo. Por favor, tente novamente.');
    } finally {
      setIsSummaryLoading(false);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
      <Header 
        onSelectCategory={handleCategorySelect} 
        onGoHome={handleGoHome}
        selectedCategory={selectedCategory}
        isRadioPlaying={isRadioPlaying}
        onToggleRadio={handleToggleRadio}
        siteViews={siteViews}
      />
      
      {/* Modern Divider */}
      <div className="h-px w-full bg-gradient-to-r from-gray-900 via-teal-500/50 to-gray-900"></div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedArticle ? (
          <ArticleDetail article={selectedArticle} onGoBack={handleGoBack} />
        ) : (
          <>
            <AnimatedBanner />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                {featuredArticle ? (
                  <>
                    <FeaturedArticle article={featuredArticle} onSelect={handleArticleSelect} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {otherArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} onSummarize={handleSummarize} onSelect={handleArticleSelect} />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-96 bg-gray-800 rounded-lg">
                    <p className="text-gray-400 text-lg">Nenhum artigo encontrado nesta categoria.</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-8">
                <PromotionalAd />
                {audioArticle && <AudioPlayer article={audioArticle} />}
                <TrendingTopics topics={trendingTopics} />
                <AdPlaceholder width="w-full" height="h-60" />
              </aside>
            </div>
          </>
        )}
      </main>
      <Footer />
      <AiSummaryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        summary={modalContent}
        isLoading={isSummaryLoading}
        articleTitle={currentArticle?.title || ''}
      />
      <audio ref={radioRef} preload="none" crossOrigin="anonymous">
        {/* Provide multiple source types for better browser compatibility with live streams */}
        <source src={radioStreamUrl} type="audio/aac" />
        <source src={radioStreamUrl} type="audio/aacp" />
        <source src={radioStreamUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;