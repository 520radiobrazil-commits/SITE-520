import React, { useState, useEffect } from 'react';
import { parseBrazilianDate, formatTimeAgo } from '../services/geminiService';

const XIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
);
const FacebookIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);
const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);

interface BrasileiraoTableProps {
  currentTime: Date;
}

// Define um timestamp estático para a última atualização dos dados da tabela.
const TABLE_LAST_UPDATED = '02/11/2025 - 22:00';

const BrasileiraoTable: React.FC<BrasileiraoTableProps> = ({ currentTime }) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const timeAgo = formatTimeAgo(parseBrazilianDate(TABLE_LAST_UPDATED), currentTime);

  const teams = [
    { pos: 1, name: 'Palmeiras', pj: 30, sg: '+29', pts: 65, zone: 'libertadores' },
    { pos: 2, name: 'Flamengo', pj: 30, sg: '+43', pts: 64, zone: 'libertadores' },
    { pos: 3, name: 'Cruzeiro', pj: 31, sg: '+23', pts: 60, zone: 'libertadores' },
    { pos: 4, name: 'Mirassol', pj: 31, sg: '+21', pts: 56, zone: 'libertadores' },
    { pos: 5, name: 'Bahia', pj: 31, sg: '+7', pts: 52, zone: 'sulamericana' },
    { pos: 6, name: 'Botafogo', pj: 31, sg: '+13', pts: 48, zone: 'sulamericana' },
    { pos: 7, name: 'Fluminense', pj: 31, sg: '0', pts: 47, zone: 'sulamericana' },
    { pos: 8, name: 'São Paulo', pj: 31, sg: '+2', pts: 44, zone: 'none' },
    { pos: 9, name: 'Vasco da Gama', pj: 31, sg: '+6', pts: 42, zone: 'none' },
    { pos: 10, name: 'Corinthians', pj: 31, sg: '-1', pts: 42, zone: 'none' },
    { pos: 11, name: 'Grêmio', pj: 31, sg: '-7', pts: 39, zone: 'none' },
    { pos: 12, name: 'Ceará', pj: 31, sg: '0', pts: 38, zone: 'none' },
    { pos: 13, name: 'Atlético-MG', pj: 30, sg: '-5', pts: 37, zone: 'none' },
    { pos: 14, name: 'RB Bragantino', pj: 31, sg: '-14', pts: 36, zone: 'none' },
    { pos: 15, name: 'Internacional', pj: 31, sg: '-8', pts: 36, zone: 'none' },
    { pos: 16, name: 'Santos', pj: 30, sg: '-12', pts: 33, zone: 'none' },
    { pos: 17, name: 'Vitória', pj: 31, sg: '-19', pts: 31, zone: 'rebaixamento' },
    { pos: 18, name: 'Fortaleza', pj: 30, sg: '-17', pts: 28, zone: 'rebaixamento' },
    { pos: 19, name: 'Juventude', pj: 31, sg: '-34', pts: 26, zone: 'rebaixamento' },
    { pos: 20, name: 'Sport Recife', pj: 30, sg: '-27', pts: 17, zone: 'rebaixamento' },
  ];

  const getRowClass = (zone: string) => {
    switch (zone) {
      case 'libertadores':
        return 'bg-blue-900/30';
      case 'sulamericana':
        return 'bg-green-900/30';
      case 'rebaixamento':
        return 'bg-red-900/30';
      default:
        return 'bg-gray-800';
    }
  };
  
  const generateShareText = () => {
      const top5 = teams.slice(0, 5).map(team => `${team.pos}. ${team.name} - ${team.pts} pts`).join('\n');
      return `Confira a classificação do Brasileirão 2025 na RADIO520.COM.BR! 🏆\n\n${top5}\n\n#Brasileirao #Futebol #RADIO520`;
  };

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(generateShareText());

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
  };


  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider">🏆 Brasileirão 2025</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-white">
            <thead>
            <tr className="bg-gray-900 text-left text-gray-400">
                <th className="p-2 font-semibold text-center">#</th>
                <th className="p-2 font-semibold">Time</th>
                <th className="p-2 font-semibold text-center hidden sm:table-cell">PJ</th>
                <th className="p-2 font-semibold text-center hidden sm:table-cell">SG</th>
                <th className="p-2 font-semibold text-center">Pts</th>
            </tr>
            </thead>
            <tbody>
            {teams.map((team) => (
                <tr key={team.pos} className={`border-b border-gray-700/50 ${getRowClass(team.zone)}`}>
                <td className="p-2 font-medium text-center">{team.pos}</td>
                <td className="p-2 font-semibold">{team.name}</td>
                <td className="p-2 text-center hidden sm:table-cell">{team.pj}</td>
                <td className="p-2 text-center hidden sm:table-cell">{team.sg}</td>
                <td className="p-2 font-bold text-center">{team.pts}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-gray-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span>Libertadores</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
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
        </div>
      </div>
    </div>
  );
};

export default BrasileiraoTable;