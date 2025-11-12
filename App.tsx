import React, { useState, useCallback, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import AdPlaceholder from './components/AdPlaceholder';
import AudioPlayer from './components/AudioPlayer';
import MostLiked from './components/MostViewed';
import ArticleDetail from './components/ArticleDetail';
import AboutUs from './components/AboutUs';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import PromotionalAd from './components/PromotionalAd';
import AnimatedBanner from './components/AnimatedBanner';
import BrasileiraoTable from './components/BrasileiraoTable';
import YouTubePlayer from './components/YouTubePlayer';
import { MOCK_ARTICLES } from './constants';
import { Article } from './types';


function App() {
  const [articles, setArticles] = useState<Article[]>(() => {
    // Sort articles by published date and keep only the 12 most recent.
    return [...MOCK_ARTICLES].sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      if (dateB !== dateA) return dateB - dateA;
      return b.id - a.id; // Fallback sort by ID for articles with the same timestamp
    }).slice(0, 12);
  });

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showingAboutPage, setShowingAboutPage] = useState(false);
  const [showingTermsPage, setShowingTermsPage] = useState(false);
  const [showingPrivacyPage, setShowingPrivacyPage] = useState(false);
  const [isRadioPlaying, setIsRadioPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  
  const radioRef = useRef<HTMLAudioElement>(null);
  const radioStreamUrl = 'https://servidor40.brlogic.com:7054/live';
  
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute for relative time consistency
    return () => clearInterval(timerId);
  }, []);

  const handleToggleRadio = useCallback(() => {
    const audio = radioRef.current;
    if (!audio) return;
  
    if (isRadioPlaying) {
      audio.pause();
      setIsRadioPlaying(false);
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // O áudio está tocando.
            setIsRadioPlaying(true);
          })
          .catch(error => {
            console.error("Falha ao tocar áudio:", error);
            // Reverte o estado se a reprodução falhar.
            setIsRadioPlaying(false);
          });
      }
    }
  }, [isRadioPlaying]);

  const handleUpdateLikes = (articleId: number, newLikes: number) => {
    setArticles(prevArticles => 
      prevArticles.map(article => 
        article.id === articleId ? { ...article, likes: newLikes } : article
      )
    );
  };
  
  // Encontra o artigo especial de áudio para ser exibido no player da barra lateral
  const audioArticle = articles.find(a => a.audioUrl);

  // Determina quais artigos serão exibidos no conteúdo principal.
  // Se uma categoria estiver selecionada, filtra todos os artigos por essa categoria.
  // Caso contrário (na página inicial), exibe todos os artigos.
  const articlesToDisplay = selectedCategory
    ? articles.filter(article => article.category === selectedCategory)
    : articles;

  // O primeiro artigo da lista ordenada é sempre o destaque principal.
  const featuredArticle = articlesToDisplay[0];

  // Todos os outros artigos (a partir do segundo) são exibidos abaixo.
  const otherArticles = articlesToDisplay.slice(1);


  const handleArticleSelect = useCallback((article: Article) => {
    setShowingAboutPage(false);
    setShowingTermsPage(false);
    setShowingPrivacyPage(false);
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  }, []);
  
  const handleGoBack = useCallback(() => {
    setSelectedArticle(null);
  }, []);
  
  const handleCategorySelect = useCallback((category: string) => {
    setShowingAboutPage(false);
    setShowingTermsPage(false);
    setShowingPrivacyPage(false);
    setSelectedCategory(category);
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  }, []);

  const handleGoHome = useCallback(() => {
    setShowingAboutPage(false);
    setShowingTermsPage(false);
    setShowingPrivacyPage(false);
    setSelectedCategory(null);
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  }, []);
  
  const handleShowAbout = useCallback(() => {
    setSelectedArticle(null);
    setSelectedCategory(null);
    setShowingTermsPage(false);
    setShowingPrivacyPage(false);
    setShowingAboutPage(true);
    window.scrollTo(0, 0);
  }, []);

  const handleShowTerms = useCallback(() => {
    setSelectedArticle(null);
    setSelectedCategory(null);
    setShowingAboutPage(false);
    setShowingPrivacyPage(false);
    setShowingTermsPage(true);
    window.scrollTo(0, 0);
  }, []);

  const handleShowPrivacy = useCallback(() => {
    setSelectedArticle(null);
    setSelectedCategory(null);
    setShowingAboutPage(false);
    setShowingTermsPage(false);
    setShowingPrivacyPage(true);
    window.scrollTo(0, 0);
  }, []);
  
  let activeNavItem = selectedCategory;
  if(showingAboutPage) {
    activeNavItem = 'SOBRE NÓS';
  } else if (showingTermsPage || showingPrivacyPage) {
    activeNavItem = null; // Nenhum item de navegação ativo para páginas institucionais
  } else if (!selectedArticle && !selectedCategory) {
    activeNavItem = 'HOME';
  }

  const renderMainContent = () => {
    if (selectedArticle) {
      return <ArticleDetail article={selectedArticle} onGoBack={handleGoBack} currentTime={currentTime} onUpdateLikes={handleUpdateLikes} />;
    }
    if (showingAboutPage) {
      return <AboutUs onGoBack={handleGoHome} />;
    }
    if (showingTermsPage) {
      return <TermsOfService onGoBack={handleGoHome} />;
    }
    if (showingPrivacyPage) {
      return <PrivacyPolicy onGoBack={handleGoHome} />;
    }
    return (
      <>
        <AnimatedBanner />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-8">
            {featuredArticle ? (
              <>
                <FeaturedArticle article={featuredArticle} onSelect={handleArticleSelect} currentTime={currentTime} onUpdateLikes={handleUpdateLikes} />
                
                {/* Banner Promocional */}
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
                    <ArticleCard key={article.id} article={article} onSelect={handleArticleSelect} currentTime={currentTime} onUpdateLikes={handleUpdateLikes} />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-96 bg-gray-800 rounded-lg">
                <p className="text-gray-400 text-lg">Nenhum artigo encontrado nesta categoria.</p>
              </div>
            )}
          </div>

          {/* Barra Lateral */}
          <aside className="lg:col-span-4 space-y-8">
            <PromotionalAd />
            <YouTubePlayer />
            {audioArticle && <AudioPlayer article={audioArticle} />}
            <BrasileiraoTable currentTime={currentTime} />
            <MostLiked articles={articles} onSelectArticle={handleArticleSelect} currentTime={currentTime} />
            
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
        currentTime={currentTime}
      />
      
      {/* Divisor Moderno */}
      <div className="h-px w-full bg-gradient-to-r from-gray-900 via-teal-500/50 to-gray-900"></div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        {renderMainContent()}
      </main>
      <Footer onShowAbout={handleShowAbout} onShowTerms={handleShowTerms} onShowPrivacy={handleShowPrivacy} />
      <audio ref={radioRef} src={radioStreamUrl} preload="none" crossOrigin="anonymous">
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}

export default App;