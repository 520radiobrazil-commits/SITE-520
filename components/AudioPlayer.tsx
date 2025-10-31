import React from 'react';
import { Article } from '../types';

interface AudioPlayerProps {
  article: Article;
}

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

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-white font-bold text-lg mb-2 uppercase">{article.category}</h3>
      <p className="text-gray-300 text-sm mb-4">{article.title}</p>
      {isSpotifyLink && spotifyEmbedUrl ? (
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