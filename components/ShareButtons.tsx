import React, { useState } from 'react';
import { Article } from '../types';

const TwitterIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085 4.923 4.923 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.44 14.307-14.305 0-.218-.005-.436-.013-.652a10.194 10.194 0 002.488-2.548z" /></svg>
);
const FacebookIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);
const LinkedInIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
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
  const encodedSummary = encodeURIComponent(article.summary);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`,
    email: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`,
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
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-sky-500 hover:text-white transition-colors duration-200" aria-label="Compartilhar no Twitter">
            <TwitterIcon />
        </a>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200" aria-label="Compartilhar no Facebook">
            <FacebookIcon />
        </a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-blue-700 hover:text-white transition-colors duration-200" aria-label="Compartilhar no LinkedIn">
            <LinkedInIcon />
        </a>
        <a href={shareLinks.email} className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full text-gray-300 hover:bg-gray-500 hover:text-white transition-colors duration-200" aria-label="Compartilhar por E-mail">
            <MailIcon />
        </a>
        <button onClick={handleCopyLink} className="flex items-center text-sm font-semibold bg-gray-700 text-gray-300 px-4 py-2 rounded-full hover:bg-teal-500 hover:text-gray-900 transition-colors duration-200" aria-label="Copiar link do artigo">
            <LinkIcon />
            <span className="ml-2">{copyStatus}</span>
        </button>
    </div>
  );
};

export default ShareButtons;