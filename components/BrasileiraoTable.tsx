import React, { useState, useEffect } from 'react';
import { formatRelativeTime, generateDynamicPastDateISO } from '../utils/time';

const XIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
);
const FacebookIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);
const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);
const BlueskyIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><title>Bluesky</title><path d="M16.596 3.823c.184.223.362.45.534.681.566.75 1.088 1.53 1.56 2.342.378.65.71 1.32.99 2.01.448 1.103.772 2.25.96 3.42.183 1.13.23 2.28.14 3.42-.09 1.17-.31 2.33-.66 3.47-.36 1.12-.84 2.2-1.44 3.23-.52.88-1.13 1.7-1.8 2.48-.62.7-1.3 1.33-2.03 1.9-3.1 2.45-7.25 3.4-11.23 2.02C1.22 21.84 0 20.01 0 17.89c0-.68.16-1.34.46-1.95.4-.8.95-1.5 1.6-2.15.68-.64 1.4-1.2 2.2-1.7.5-.3.9-.68 1.4-.95.12-.07.25-.13.37-.2.09-.05.18-.1.28-.15.22-.1.44-.2.66-.28.4-.17.8-.3 1.2-.4.4-.1.8-.2 1.2-.25.4-.05.8-.1 1.2-.1.82-.02 1.65-.02 2.47 0 .4.02.8.02 1.2.07.4.05.8.12 1.2.22.4.1.8.22 1.2.37.4.15.8.32 1.17.52l.25.12c.1.06.2.1.3.16.12.06.24.13.36.2.5.28.98.6 1.45.95.8.5 1.53 1.07 2.2 1.7.68.65 1.23 1.35 1.6 2.15.3.6.46 1.27.46 1.95 0 1.2-.5 2.3-1.3 3.1-.8.8-1.9 1.3-3.1 1.3-.4 0-.8 0-1.2-.08-.4-.05-.8-.13-1.2-.23-.4-.1-.8-.23-1.18-.38-.4-.15-.78-.32-1.16-.52-.1-.05-.18-.1-.28-.15-.1-.05-.2-.1-.3-.15-.25-.1-.48-.2-.72-.3-.4-.14-.8-.26-1.2-.35-.8-.2-1.6-.26-2.4-.2-1.6.1-3.2.5-4.7 1.1-.3.12-.6.25-.86.4l-.18.1c-.05.02-.1.05-.15.08-.1.05-.2.1-.3.15-.1.05-.2.1-.3.16-.12.06-.23.13-.35.2-.5.28-.95.6-1.4.95-.8.5-1.5 1.07-2.18 1.7-.65.65-1.2 1.35-1.58 2.15-.3.6-.46 1.27-.46 1.95 0 2.12 1.22 3.95 3.63 4.92 3.98 1.6 8.84.47 12.4-2.3C21.72 20.44 24 16.5 24 11.95c0-1.1-.16-2.2-.47-3.25-.3-.98-.7-1.93-1.2-2.83-.5-.9-1.08-1.75-1.73-2.55-.18-.22-.36-.45-.54-.67a.4.4 0 00-.47-.13z"/></svg>
);

interface BrasileiraoTableProps {
  currentTime: Date;
}

const BrasileiraoTable: React.FC<BrasileiraoTableProps> = ({ currentTime }) => {
  const [currentUrl, setCurrentUrl] = useState('');
  // Gera o timestamp de atualização e o ano atual apenas uma vez na montagem do componente
  // para garantir consistência e evitar que os valores mudem em re-renderizações.
  const [lastUpdatedISO] = useState(() => generateDynamicPastDateISO({ hours: 2 }));
  const [currentYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const timeAgo = formatRelativeTime(lastUpdatedISO, currentTime);

  const teams = [
    { pos: 1, name: 'Palmeiras', pj: 32, sg: '+30', pts: 68, zone: 'libertadores' },
    { pos: 2, name: 'Flamengo', pj: 32, sg: '+44', pts: 68, zone: 'libertadores' },
    { pos: 3, name: 'Cruzeiro', pj: 33, sg: '+24', pts: 64, zone: 'libertadores' },
    { pos: 4, name: 'Mirassol', pj: 33, sg: '+21', pts: 59, zone: 'libertadores' },
    { pos: 5, name: 'Bahia', pj: 33, sg: '+4', pts: 53, zone: 'pre-libertadores' },
    { pos: 6, name: 'Botafogo', pj: 33, sg: '+16', pts: 52, zone: 'pre-libertadores' },
    { pos: 7, name: 'Fluminense', pj: 33, sg: '+1', pts: 51, zone: 'sulamericana' },
    { pos: 8, name: 'São Paulo', pj: 33, sg: '+1', pts: 45, zone: 'sulamericana' },
    { pos: 9, name: 'Atlético-MG', pj: 32, sg: '0', pts: 43, zone: 'sulamericana' },
    { pos: 10, name: 'Vasco da Gama', pj: 33, sg: '+1', pts: 42, zone: 'sulamericana' },
    { pos: 11, name: 'RB Bragantino', pj: 33, sg: '-12', pts: 42, zone: 'sulamericana' },
    { pos: 12, name: 'Ceará', pj: 33, sg: '+1', pts: 42, zone: 'sulamericana' },
    { pos: 13, name: 'Corinthians', pj: 33, sg: '-3', pts: 42, zone: 'none' },
    { pos: 14, name: 'Grêmio', pj: 33, sg: '-8', pts: 40, zone: 'none' },
    { pos: 15, name: 'Internacional', pj: 33, sg: '-9', pts: 37, zone: 'none' },
    { pos: 16, name: 'Vitória', pj: 33, sg: '-18', pts: 35, zone: 'none' },
    { pos: 17, name: 'Santos', pj: 32, sg: '-15', pts: 33, zone: 'rebaixamento' },
    { pos: 18, name: 'Juventude', pj: 33, sg: '-30', pts: 32, zone: 'rebaixamento' },
    { pos: 19, name: 'Fortaleza', pj: 32, sg: '-17', pts: 30, zone: 'rebaixamento' },
    { pos: 20, name: 'Sport Recife', pj: 32, sg: '-31', pts: 17, zone: 'rebaixamento' },
  ];

  const getRowClass = (zone: string) => {
    switch (zone) {
      case 'libertadores':
        return 'bg-green-600/20';
      case 'pre-libertadores':
        return 'bg-cyan-500/20';
      case 'sulamericana':
        return 'bg-yellow-500/20';
      case 'rebaixamento':
        return 'bg-red-600/20';
      default:
        return 'bg-gray-800';
    }
  };
  
  const generateShareText = () => {
      const top5 = teams.slice(0, 5).map(team => `${team.pos}. ${team.name} - ${team.pts} pts`).join('\n');
      return `Confira a classificação do Brasileirão ${currentYear} na RADIO520.COM.BR! 🏆\n\n${top5}\n\n#Brasileirao #Futebol #RADIO520`;
  };

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(generateShareText());

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
    bluesky: `https://bsky.app/intent/compose?text=${encodedText}%20${encodedUrl}`,
  };


  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">🏆 Brasileirão {currentYear}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-white">
            <thead>
            <tr className="bg-gray-900 text-left text-gray-400">
                <th className="p-2 font-semibold text-center">#</th>
                <th className="p-2 font-semibold">Time</th>
                <th className="p-2 font-semibold text-center hidden sm:table-cell">P</th>
                <th className="p-2 font-semibold text-center hidden sm:table-cell">+/-</th>
                <th className="p-2 font-semibold text-center">Pts</th>
            </tr>
            </thead>
            <tbody>
            {teams.map((team) => (
                <tr key={team.pos} className={`border-b border-gray-700/50 ${getRowClass(team.zone)}`}>
                <td className="p-2 font-medium text-center">{team.pos}</td>
                <td className="p-2 font-semibold">
                    {team.name}
                </td>
                <td className="p-2 text-center hidden sm:table-cell">{team.pj}</td>
                <td className="p-2 text-center hidden sm:table-cell">{team.sg}</td>
                <td className="p-2 font-bold text-center">{team.pts}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-gray-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span>Libertadores</span>
        </div>
         <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
          <span>Pré-Libertadores</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span>Sul-Americana</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span>Rebaixamento</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700/50">
        <div className="text-center text-xs text-gray-500 mb-3">
          Atualizado {timeAgo}
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-xs font-semibold text-gray-400">Compartilhar:</span>
          <a href={shareLinks.x} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full text-gray-300 hover:bg-black hover:text-white transition-colors duration-200" aria-label="Compartilhar no X">
              <XIcon />
          </a>
          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200" aria-label="Compartilhar no Facebook">
              <FacebookIcon />
          </a>
          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full text-gray-300 hover:bg-green-500 hover:text-white transition-colors duration-200" aria-label="Compartilhar no WhatsApp">
              <WhatsAppIcon />
          </a>
          <a href={shareLinks.bluesky} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full text-gray-300 hover:bg-sky-500 hover:text-white transition-colors duration-200" aria-label="Compartilhar no Bluesky">
              <BlueskyIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrasileiraoTable;