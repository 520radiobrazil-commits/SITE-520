import React, { useState, useEffect } from 'react';

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const PlayIcon = () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const PauseIcon = () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4H6V20H10V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 4H14V20H18V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
);


interface HeaderProps {
  onSelectCategory: (category: string) => void;
  onGoHome: () => void;
  onShowAbout: () => void;
  activeNavItem: string | null;
  isRadioPlaying: boolean;
  onToggleRadio: () => void;
  siteViews: number;
}

const Header: React.FC<HeaderProps> = ({ onSelectCategory, onGoHome, onShowAbout, activeNavItem, isRadioPlaying, onToggleRadio, siteViews }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navItems = ['HOME', 'FUTEBOL SHOW 520', 'SUPERSET 520', 'LIGA 520', 'VOLTA RÁPIDA', 'ACE 520', 'PODCASTS 520', 'SOBRE NÓS'];

  const handleNavClick = (item: string) => {
    if (item === 'HOME') {
      onGoHome();
    } else if (item === 'SOBRE NÓS') {
        onShowAbout();
    }
    else {
      onSelectCategory(item);
    }
    setIsMenuOpen(false); // Close mobile menu on navigation
  };
  
  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div onClick={onGoHome} className="flex items-center cursor-pointer z-50">
              <img src="https://public-rf-upload.minhawebradio.net/249695/ad/1ccbd4ef8fcc652a7e0c5c0e6215d5ae.jpeg" alt="RADIO520 Logo" className="h-14 w-auto" />
              <div className="ml-3 flex flex-col">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-white leading-tight">
                  RADIO520
                </h1>
                <span className="text-sm font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent tracking-tight -mt-1">
                  .COM.BR
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 py-2 transition-colors duration-300 text-sm font-medium focus:outline-none ${
                    activeNavItem === item ? 'text-teal-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                  { activeNavItem === item &&
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-teal-400 rounded-full"></span>
                  }
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4 z-50">
                {/* Site Views Counter */}
                {siteViews > 0 && (
                    <div className="flex items-center space-x-1.5 text-sm text-gray-400" title="Total de visitas ao site">
                        <EyeIcon />
                        <span className="font-mono font-medium">{siteViews.toLocaleString()}</span>
                    </div>
                )}
               {/* Radio Player Button */}
                <button
                    onClick={onToggleRadio}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-500 group ${
                        isRadioPlaying
                        ? 'border border-teal-500 bg-teal-500/10 shadow-lg shadow-teal-500/20'
                        : 'border border-gray-700 hover:border-teal-500 hover:bg-gray-800'
                    }`}
                    aria-label={isRadioPlaying ? 'Pausar rádio' : 'Ouvir rádio ao vivo'}
                >
                    <div className={`relative flex items-center justify-center w-5 h-5 transition-colors ${isRadioPlaying ? 'text-teal-400' : 'text-gray-300 group-hover:text-white'}`}>
                    {isRadioPlaying ? <PauseIcon /> : <PlayIcon />}
                    </div>
                    <span className={`text-xs font-bold tracking-wider uppercase transition-colors ${isRadioPlaying ? 'text-teal-400' : 'text-gray-300 group-hover:text-white'}`}>
                    {isRadioPlaying ? 'AO VIVO' : 'RÁDIO'}
                    </span>
                    {isRadioPlaying && (
                        <div className="relative flex items-center justify-center w-2 h-2 ml-1">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
                        </div>
                    )}
                </button>
              
              {/* Desktop Search */}
              <div className="hidden md:flex items-center justify-end">
                <div className={`relative transition-all duration-300 ${isSearchOpen ? 'w-48' : 'w-6'}`}>
                    <input 
                        type="text" 
                        placeholder="Buscar..."
                        className={`w-full h-9 bg-gray-700 text-white rounded-full pl-10 pr-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${isSearchOpen ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors">
                        <SearchIcon />
                    </button>
                </div>
              </div>
              
              {/* Mobile Menu Button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-400 hover:text-white transition-colors duration-200">
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full pt-20">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`w-full py-4 text-2xl font-bold transition-colors duration-200 ${
                activeNavItem === item ? 'text-teal-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;