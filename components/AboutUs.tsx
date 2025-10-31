import React from 'react';

interface AboutUsProps {
  onGoBack: () => void;
}

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const AboutUs: React.FC<AboutUsProps> = ({ onGoBack }) => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
        <button onClick={onGoBack} className="mb-8 inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
            <ArrowLeftIcon />
            <span>Voltar</span>
        </button>

        <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                    src="https://public-rf-upload.minhawebradio.net/249695/ad/1ccbd4ef8fcc652a7e0c5c0e6215d5ae.jpeg" 
                    alt="RADIO520 Logo" 
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-700"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">SOBRE NÓS</h1>
                    <div className="h-1 w-24 bg-teal-500 mx-auto md:mx-0 rounded-full"></div>
                </div>
            </div>

            <div className="mt-8 prose prose-invert lg:prose-xl text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                    A Rádio 520 é mais que uma rádio — é uma plataforma global, uma comunidade apaixonada por esportes, música e informação de qualidade.
                </p>
                <p>
                    Nascemos com o propósito de conectar pessoas através da energia do rádio moderno: dinâmico, interativo e totalmente conectado ao digital.
                </p>
                <p>
                    Nosso time é formado por comunicadores, repórteres e produtores que vivem o que falam — gente que entende o jogo dentro e fora dos campos, quadras e pistas. Da análise técnica à resenha descontraída, a 520 entrega conteúdo com credibilidade, estilo e personalidade.
                </p>
                <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-400">
                    Aqui, o ouvinte não é só audiência: é parte da conversa.
                </blockquote>
                <p>
                    A cada programa, a cada flash ao vivo, a cada trilha sonora, a Rádio 520 mostra por que o rádio continua sendo o meio mais humano e vibrante de todos.
                </p>
                <p className="font-bold text-teal-300 text-xl">
                    📻 Rádio 520 — emoção, ritmo e informação em tempo real.
                </p>
            </div>
        </div>
    </div>
  );
};

export default AboutUs;
