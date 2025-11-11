import React, { useState } from 'react';
import { generateDynamicPastDateISO } from '../utils/time';

interface TermsOfServiceProps {
  onGoBack: () => void;
}

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onGoBack }) => {
  // Gera um timestamp dinâmico para garantir que a data seja sempre recente e plausível.
  const [lastUpdatedISO] = useState(() => generateDynamicPastDateISO({ days: 25 }));
  
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
  }).format(new Date(lastUpdatedISO));

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
        <button onClick={onGoBack} className="mb-8 inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
            <ArrowLeftIcon />
            <span>Voltar</span>
        </button>

        <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
            <div className="text-center md:text-left mb-8">
                <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">TERMOS DE SERVIÇO</h1>
                <p className="text-gray-400">Última atualização: {formattedDate}</p>
                <div className="h-1 w-24 bg-teal-500 mx-auto md:mx-0 rounded-full mt-4"></div>
            </div>

            <div className="prose prose-invert lg:prose-xl text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                    Bem-vindo(a) ao RADIO520.COM.BR, plataforma digital dedicada à divulgação de notícias esportivas, transmissões de rádio e conteúdos em áudio e vídeo. Ao acessar ou utilizar nossos serviços, você concorda com os termos descritos abaixo. Recomendamos que leia atentamente este documento antes de continuar navegando.
                </p>

                <h2 className="text-2xl font-bold text-white">1. Aceitação dos Termos</h2>
                <p>
                    Ao acessar o site RADIO520.COM.BR, o usuário declara estar ciente e de acordo com as condições aqui estabelecidas. Caso não concorde com algum dos termos, solicitamos que não utilize o portal.
                </p>

                <h2 className="text-2xl font-bold text-white">2. Conteúdo e Responsabilidade</h2>
                <p>
                    Todo o conteúdo publicado no RADIO520.COM.BR, incluindo textos, imagens, áudios, vídeos e transmissões ao vivo, tem caráter informativo e editorial. Apesar do cuidado com a veracidade e atualização das informações, não garantimos que todos os dados estejam sempre completos ou isentos de erros. O portal não se responsabiliza por decisões tomadas com base nas informações divulgadas.
                </p>

                <h2 className="text-2xl font-bold text-white">3. Direitos Autorais</h2>
                <p>
                    O conteúdo deste site é protegido por direitos autorais e pertence ao RADIO520.COM.BR ou a seus parceiros.
                </p>

                <h2 className="text-2xl font-bold text-white">4. Uso da Plataforma</h2>
                <p>
                    O usuário compromete-se a utilizar o site de forma ética e responsável, abstendo-se de:
                </p>
                <ul className="list-disc list-inside">
                    <li>Realizar comentários ofensivos, discriminatórios ou que incitem ódio;</li>
                    <li>Tentar violar a segurança, modificar códigos ou interferir no funcionamento do portal;</li>
                    <li>Utilizar o conteúdo do site para fins comerciais sem permissão.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white">5. Links Externos</h2>
                <p>
                    O RADIO520.COM.BR pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas desses sites.
                </p>

                <h2 className="text-2xl font-bold text-white">6. Privacidade</h2>
                <p>
                    As informações pessoais fornecidas pelos usuários são tratadas conforme nossa [Política de Privacidade]. Não compartilhamos dados com terceiros sem consentimento, exceto quando exigido por lei.
                </p>

                <h2 className="text-2xl font-bold text-white">7. Modificações nos Termos</h2>
                <p>
                    O RADIO520.COM.BR reserva-se o direito de alterar estes Termos de Serviço a qualquer momento. As atualizações serão publicadas nesta página, acompanhadas da data de modificação.
                </p>

                <h2 className="text-2xl font-bold text-white">8. Contato</h2>
                <p>
                    Em caso de dúvidas, entre em contato conosco pelo e-mail: 📧 520radiobrazil@gmail.com
                </p>

                <p className="font-bold text-teal-300 text-xl text-center mt-8">
                    📍RADIO520 — A sua playlist toca aqui.
                    <br />
                    Todos os direitos reservados © {new Date().getFullYear()}
                </p>
            </div>
        </div>
    </div>
  );
};

export default TermsOfService;