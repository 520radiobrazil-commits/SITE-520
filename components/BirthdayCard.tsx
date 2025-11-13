import React from 'react';

const BirthdayCakeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10.9 2 10 2.9 10 4c0 .55.22 1.05.59 1.41L12 7l1.41-1.59c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2zm-2.09 7.03C9.42 9.01 9 9.47 9 10v2c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2c0-.53-.42-.99-.91-.97-.4-.02-.59.29-.59.29L12 11l-1.41-1.68s-.19-.31-.59-.29zM4 15h16c.55 0 1 .45 1 1v2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-2c0-.55.45-1 1-1z" />
    </svg>
);

const BirthdayCard: React.FC = () => {
    const imageUrl = "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/11/lando_norris-e1732205769891.jpg?w=1200&h=1200&crop=1";
    const name = "LANDO NORRIS";
    const headline = "comemora 26 anos liderando o Mundial";
    const text1 = "O piloto da McLaren vive uma das fases mais brilhantes da carreira e sopra as velinhas como líder do campeonato. Aos 26 anos, Lando Norris combina talento, consistência e aquela confiança tranquila que virou marca registrada no paddock.";
    const text2 = "Na temporada atual, o britânico tem mostrado ritmo forte, corridas sólidas e uma maturidade que colocou seu nome de vez na disputa pelo título. A equipe também vive grande momento, entregando um carro competitivo e permitindo que Norris brilhe ainda mais.";
    const text3 = "Hoje, o grid inteiro celebra, mas a pressão também aumenta: o líder do Mundial tá inspirado.";
    const footerText = "Rádio quinhentos e vinte — onde a velocidade vira notícia.";

    return (
        <div className="bg-gray-800 rounded-lg p-4 border border-yellow-400/30 shadow-lg shadow-yellow-500/10">
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider flex items-center">
                <BirthdayCakeIcon className="h-5 w-5 mr-2 text-yellow-400"/>
                Aniversariante do Dia
            </h3>
            <div className="relative rounded-lg overflow-hidden mb-4">
                <img src={imageUrl} alt={`Homenagem de aniversário para ${name}`} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                     <h4 className="text-2xl font-black text-white leading-tight drop-shadow-lg">
                        {name}
                    </h4>
                     <p className="text-yellow-300 font-semibold text-sm drop-shadow-md">{headline}</p>
                </div>
            </div>
            <div className="text-gray-300 text-sm space-y-3">
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
            </div>
            <p className="text-center text-yellow-400 text-xs font-bold italic mt-4 border-t border-gray-700 pt-3">
                {footerText}
            </p>
        </div>
    );
};

export default BirthdayCard;
