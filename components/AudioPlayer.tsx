import React from 'react';
import { Article } from '../types';

interface AudioPlayerProps {
  article: Article;
}

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);

const AudioPlayer: React.FC<AudioPlayerProps> = ({ article }) => {
  if (!article.audioUrl) return null;

  const isSpotifyLink = article.audioUrl.includes('open.spotify.com/episode/');
  let spotifyEmbedUrl = '';

  if (isSpotifyLink) {
    try {
      const url = new URL(article.audioUrl);
      const episodeId = url.pathname.split('/').pop();
      if (episodeId) {
        spotifyEmbedUrl = `https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator&theme=0`;
      }
    } catch (error) {
      console.error("Invalid Spotify URL", error);
      return null;
    }
  }

  // Trunca o resumo para evitar que textos longos quebrem o layout.
  const truncatedSummary = article.summary.length > 180
    ? article.summary.substring(0, 180) + '...'
    : article.summary;

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col">
      <h3 className="text-white font-bold text-lg mb-2 uppercase">{article.category}</h3>
      <p className="text-gray-300 font-semibold text-base mb-2">{article.title}</p>
      <p className="text-gray-400 text-sm mb-4">
        {truncatedSummary}
      </p>
      {isSpotifyLink && spotifyEmbedUrl ? (
        <>
          <iframe
            style={{ borderRadius: '12px' }}
            src={spotifyEmbedUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`Spotify Player for ${article.title}`}
          ></iframe>
          <div className="text-center mt-3">
            <a
                href={article.audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-gray-400 hover:text-teal-400 transition-colors duration-200"
                aria-label="Ouvir este episódio no Spotify"
            >
                <LinkIcon />
                Problemas para carregar? Ouça no Spotify
            </a>
          </div>
        </>
      ) : (
        <audio controls className="w-full">
          <source src={article.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default AudioPlayer;