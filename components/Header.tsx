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

interface HeaderProps {
  onSelectCategory: (category: string) => void;
  onGoHome: () => void;
  onShowAbout: () => void;
  activeNavItem: string | null;
  isRadioPlaying: boolean;
  onToggleRadio: () => void;
  currentTime: Date;
}

const navLinks = [
    { label: 'HOME', category: 'HOME' },
    { label: 'FUTEBOL', category: 'FUTEBOL SHOW 520' },
    { label: 'VÔLEI', category: 'SUPERSET 520' },
    { label: 'NFL', category: 'LIGA 520' },
    { label: 'F1', category: 'VOLTA RÁPIDA' },
    { label: 'TÊNIS', category: 'ACE 520' },
    { label: 'PODCASTS', category: 'PODCASTS 520' },
    { label: 'SOBRE NÓS', category: 'SOBRE NÓS' },
];

const Header: React.FC<HeaderProps> = ({ onSelectCategory, onGoHome, onShowAbout, activeNavItem, isRadioPlaying, onToggleRadio, currentTime }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [displayTime, setDisplayTime] = useState('');

  useEffect(() => {
    if (currentTime) {
      // Get weekday: e.g., 'sex.'
      const weekdayRaw = new Intl.DateTimeFormat('pt-BR', {
        weekday: 'short',
        timeZone: 'America/Sao_Paulo',
      }).format(currentTime);

      // Get time: e.g., '21:30'
      const timeRaw = new Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Sao_Paulo',
      }).format(currentTime);

      // Format weekday: 'sex.' -> 'SEX'
      const weekdayFormatted = weekdayRaw.replace(/[.,]/g, '').toUpperCase();
      
      setDisplayTime(`${weekdayFormatted} ${timeRaw}`);
    }
  }, [currentTime]);

  const handleNavClick = (category: string) => {
    if (category === 'HOME') {
      onGoHome();
    } else if (category === 'SOBRE NÓS') {
        onShowAbout();
    }
    else {
      onSelectCategory(category);
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
            <div className="flex items-center z-50">
                <div onClick={onGoHome} className="flex items-center cursor-pointer">
                    <img src="https://public-rf-upload.minhawebradio.net/249695/ad/1ccbd4ef8fcc652a7e0c5c0e6215d5ae.jpeg" alt="RADIO520 Logo" className="h-14 w-auto" />
                    <div className="ml-3">
                        <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-white leading-none">
                        RADIO520
                        </h1>
                        <span className="block text-sm font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                        .COM.BR
                        </span>
                    </div>
                </div>
                 <div className="ml-10 pl-4 sm:ml-12 sm:pl-4 border-l border-gray-700">
                    <p className="text-xs font-bold tracking-wider text-gray-300">{displayTime}</p>
                    <p className="text-xs text-gray-500">São Paulo</p>
                </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.category)}
                  className={`relative px-4 py-2 transition-colors duration-300 text-sm font-medium focus:outline-none ${
                    activeNavItem === link.category ? 'text-teal-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  { activeNavItem === link.category &&
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-teal-400 rounded-full"></span>
                  }
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4 z-50">
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
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.category)}
              className={`w-full py-4 text-2xl font-bold transition-colors duration-200 ${
                activeNavItem === link.category ? 'text-teal-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;