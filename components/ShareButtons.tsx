import React, { useState } from 'react';
import { Article } from '../types';

const XIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
);
const FacebookIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);
const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);
const TelegramIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Telegram</title><path d="M.436 11.832c-1.031.39-1.028 1.045.21 1.41l4.464 1.392 2.035 6.42c.322 1.016 1.385.968 1.82.043l2.843-6.08L18.604 21.1c.78.59 1.765.112 1.86-1.002L23.95 2.158c.11-1.21-.94-1.8-1.874-1.287L.436 11.832z"/></svg>
);
const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" /></svg>
);

interface ShareButtonsProps {
  article: Article;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ article }) => {
  const [copyStatus, setCopyStatus] = useState('Copiar Link');
  
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(article.title);

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopyStatus('Copiado!');
      setTimeout(() => setCopyStatus('Copiar Link'), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      setCopyStatus('Falha ao copiar');
       setTimeout(() => setCopyStatus('Copiar Link'), 2000);
    });
  };

  return (
    <div className="flex items-center flex-wrap gap-3">
        <span className="text-sm font-semibold text-gray-300 mr-2">Compartilhe este artigo:</span>
        <a href={shareLinks.x} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-black hover:text-white transition-colors duration-200" aria-label="Compartilhar no X">
            <XIcon />
        </a>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200" aria-label="Compartilhar no Facebook">
            <FacebookIcon />
        </a>
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-green-500 hover:text-white transition-colors duration-200" aria-label="Compartilhar no WhatsApp">
            <WhatsAppIcon />
        </a>
        <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-sky-400 hover:text-white transition-colors duration-200" aria-label="Compartilhar no Telegram">
            <TelegramIcon />
        </a>
        <button onClick={handleCopyLink} className="flex items-center text-sm font-semibold bg-gray-700 text-gray-300 px-4 py-2 rounded-full hover:bg-teal-500 hover:text-gray-900 transition-colors duration-200" aria-label="Copiar link do artigo">
            <LinkIcon />
            <span className="ml-2">{copyStatus}</span>
        </button>
    </div>
  );
};

export default ShareButtons;