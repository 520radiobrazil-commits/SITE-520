import React, { useState, useCallback, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import AdPlaceholder from './components/AdPlaceholder';
import AudioPlayer from './components/AudioPlayer';
import MostViewed from './components/MostViewed';
import ArticleDetail from './components/ArticleDetail';
import AboutUs from './components/AboutUs';
import PromotionalAd from './components/PromotionalAd';
import AnimatedBanner from './components/AnimatedBanner';
import { MOCK_ARTICLES } from './constants';
import { Article } from './types';

function App() {
  const [articles, setArticles] = useState<Article[]>(() => {
    // Use a new key to reset the old, unrealistic view counts.
    const VIEWS_STORAGE_KEY = 'article_views_v2';
    try {
      const storedViews = localStorage.getItem(VIEWS_STORAGE_KEY);
      const viewsMap: { [key: number]: number } = storedViews ? JSON.parse(storedViews) : {};

      const initialArticles = MOCK_ARTICLES.map(article => ({
        ...article,
        // Prioritize views from storage, otherwise default to 0.
        views: viewsMap[article.id] || 0,
      }));

      return initialArticles.sort((a, b) => {
        const dateB = new Date(b.date).getTime();
        const dateA = new Date(a.date).getTime();
        if (dateB !== dateA) return dateB - dateA;
        return b.id - a.id;
      });
    } catch (error) {
      console.error("Failed to load articles from localStorage", error);
      // Fallback to mock articles if localStorage fails
      return [...MOCK_ARTICLES].sort((a, b) => {
        const dateB = new Date(b.date).getTime();
        const dateA = new Date(a.date).getTime();
        if (dateB !== dateA) return dateB - dateA;
        return b.id - a.id;
      });
    }
  });

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showingAboutPage, setShowingAboutPage] = useState(false);
  const [isRadioPlaying, setIsRadioPlaying] = useState(false);

  
  const radioRef = useRef<HTMLAudioElement>(null);
  const radioStreamUrl = 'https://servidor40.brlogic.com:7054/live';

  useEffect(() => {
    // Radio autoplay is not reliable and often blocked by browsers.
    // It will now start only with user interaction.
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleToggleRadio = useCallback(() => {
    const audio = radioRef.current;
    if (!audio) return;
  
    if (isRadioPlaying) {
      audio.pause();
      setIsRadioPlaying(false);
    } else {
      // For live streams, it's good practice to ensure the source is set before playing.
      if (audio.src !== radioStreamUrl) {
          audio.src = radioStreamUrl;
      }
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
  
  // Find the special audio article to be displayed in the sidebar player
  const audioArticle = articles.find(a => a.audioUrl);

  // Filter out the audio article from the main list to avoid duplication
  const mainContentArticlesBase = audioArticle
    ? articles.filter(a => a.id !== audioArticle.id)
    : articles;

  // Prioritize the explicitly featured article
  const explicitFeaturedArticle = mainContentArticlesBase.find(a => a.isFeatured);
  const nonFeaturedArticles = mainContentArticlesBase.filter(a => !a.isFeatured);

  const mainContentArticles = explicitFeaturedArticle 
      ? [explicitFeaturedArticle, ...nonFeaturedArticles] 
      : mainContentArticlesBase;

  const articlesToDisplay = selectedCategory
    ? mainContentArticles.filter(article => article.category === selectedCategory)
    : mainContentArticles;

  const featuredArticle = articlesToDisplay[0];
  const otherArticles = articlesToDisplay.slice(1);

  const handleArticleSelect = useCallback((article: Article) => {
    const VIEWS_STORAGE_KEY = 'article_views_v2';
    setShowingAboutPage(false);
  
    const newViews = (article.views || 0) + 1;
    const updatedArticle = { ...article, views: newViews };
    setSelectedArticle(updatedArticle);
  
    setArticles(prevArticles =>
      prevArticles.map(a =>
        a.id === article.id ? { ...a, views: newViews } : a
      )
    );
  
    try {
      const storedViews = localStorage.getItem(VIEWS_STORAGE_KEY);
      const viewsMap: { [key: number]: number } = storedViews ? JSON.parse(storedViews) : {};
      viewsMap[article.id] = newViews;
      localStorage.setItem(VIEWS_STORAGE_KEY, JSON.stringify(viewsMap));
    } catch (error) {
      console.error("Failed to update views in localStorage", error);
    }
  
    window.scrollTo(0, 0);
  }, []);
  
  const handleGoBack = useCallback(() => {
    setSelectedArticle(null);
  }, []);
  
  const handleCategorySelect = useCallback((category: string) => {
    setShowingAboutPage(false);
    setSelectedCategory(category);
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  }, []);

  const handleGoHome = useCallback(() => {
    setShowingAboutPage(false);
    setSelectedCategory(null);
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  }, []);
  
  const handleShowAbout = useCallback(() => {
    setSelectedArticle(null);
    setSelectedCategory(null);
    setShowingAboutPage(true);
    window.scrollTo(0, 0);
  }, []);
  
  let activeNavItem = selectedCategory;
  if(showingAboutPage) {
    activeNavItem = 'SOBRE NÓS';
  } else if (!selectedArticle && !selectedCategory) {
    activeNavItem = 'HOME';
  }

  const renderMainContent = () => {
    if (selectedArticle) {
      return <ArticleDetail article={selectedArticle} onGoBack={handleGoBack} />;
    }
    if (showingAboutPage) {
      return <AboutUs onGoBack={handleGoHome} />;
    }
    return (
      <>
        <AnimatedBanner />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {featuredArticle ? (
              <>
                <FeaturedArticle article={featuredArticle} onSelect={handleArticleSelect} />
                
                {/* Promotional Banner */}
                <div className="my-8">
                  <a href="mailto:520radiobrazil@gmail.com">
                    <img 
                      src="https://public-rf-upload.minhawebradio.net/249695/ad/32dc318f7254d01a058188801d808ff5.png" 
                      alt="Banner de Contato" 
                      className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} onSelect={handleArticleSelect} />
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
            <MostViewed articles={articles} onSelectArticle={handleArticleSelect} />
            
            <a 
              href="https://radiosnet.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img 
                src="https://img.radios.com.br/divulgue/app-radiosnet-200x200-a.jpg" 
                alt="Baixe o App RadiosNet" 
                className="w-full h-auto"
              />
            </a>

            <AdPlaceholder width="w-full" height="h-60" />
          </aside>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
      <Header 
        onSelectCategory={handleCategorySelect} 
        onGoHome={handleGoHome}
        onShowAbout={handleShowAbout}
        activeNavItem={activeNavItem}
        isRadioPlaying={isRadioPlaying}
        onToggleRadio={handleToggleRadio}
      />
      
      {/* Modern Divider */}
      <div className="h-px w-full bg-gradient-to-r from-gray-900 via-teal-500/50 to-gray-900"></div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderMainContent()}
      </main>
      <Footer onShowAbout={handleShowAbout}/>
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