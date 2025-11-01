import React from 'react';

const BrasileiraoTable: React.FC = () => {
  const teams = [
    { pos: 1, name: 'Palmeiras', pj: 29, sg: '+27', pts: 62, zone: 'libertadores' },
    { pos: 2, name: 'Flamengo', pj: 29, sg: '+40', pts: 61, zone: 'libertadores' },
    { pos: 3, name: 'Cruzeiro', pj: 30, sg: '+21', pts: 57, zone: 'libertadores' },
    { pos: 4, name: 'Mirassol', pj: 30, sg: '+21', pts: 55, zone: 'libertadores' },
    { pos: 5, name: 'Bahia', pj: 30, sg: '+6', pts: 49, zone: 'sulamericana' },
    { pos: 6, name: 'Fluminense', pj: 30, sg: '+2', pts: 47, zone: 'sulamericana' },
    { pos: 7, name: 'Botafogo', pj: 30, sg: '+13', pts: 47, zone: 'sulamericana' },
    { pos: 8, name: 'Vasco', pj: 30, sg: '+8', pts: 42, zone: 'none' },
    { pos: 9, name: 'São Paulo', pj: 30, sg: '0', pts: 41, zone: 'none' },
    { pos: 10, name: 'Corinthians', pj: 30, sg: '-3', pts: 39, zone: 'none' },
    { pos: 11, name: 'Grêmio', pj: 30, sg: '-5', pts: 39, zone: 'none' },
    { pos: 12, name: 'RB Bragantino', pj: 30, sg: '-13', pts: 36, zone: 'none' },
    { pos: 13, name: 'Atlético-MG', pj: 29, sg: '-5', pts: 36, zone: 'none' },
    { pos: 14, name: 'Ceará', pj: 30, sg: '-2', pts: 35, zone: 'none' },
    { pos: 15, name: 'Internacional', pj: 30, sg: '-8', pts: 35, zone: 'none' },
    { pos: 16, name: 'Santos', pj: 29, sg: '-12', pts: 32, zone: 'none' },
    { pos: 17, name: 'Vitória', pj: 30, sg: '-17', pts: 31, zone: 'rebaixamento' },
    { pos: 18, name: 'Fortaleza', pj: 29, sg: '-17', pts: 27, zone: 'rebaixamento' },
    { pos: 19, name: 'Juventude', pj: 30, sg: '-32', pts: 26, zone: 'rebaixamento' },
    { pos: 20, name: 'Sport', pj: 29, sg: '-24', pts: 17, zone: 'rebaixamento' },
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
    </div>
  );
};

export default BrasileiraoTable;
