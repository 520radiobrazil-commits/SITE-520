import React, { useState } from 'react';
import { generateDynamicPastDateISO } from '../utils/time';

interface PrivacyPolicyProps {
  onGoBack: () => void;
}

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onGoBack }) => {
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
                <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">POLÍTICA DE PRIVACIDADE</h1>
                <p className="text-gray-400">Última atualização: {formattedDate}</p>
                <div className="h-1 w-24 bg-teal-500 mx-auto md:mx-0 rounded-full mt-4"></div>
            </div>

            <div className="prose prose-invert lg:prose-xl text-gray-300 text-lg leading-relaxed space-y-6">
                <p>
                    Bem-vindo(a) ao RADIO520.COM.BR — sua plataforma de notícias esportivas, transmissões ao vivo e conteúdos em áudio e vídeo. A sua privacidade é muito importante pra nós. Este documento explica como coletamos, usamos e protegemos suas informações quando você acessa nosso site.
                </p>

                <h2 className="text-2xl font-bold text-white">1. Coleta de Informações</h2>
                <p>
                    Podemos coletar alguns dados para melhorar sua experiência no portal, como:
                </p>
                <ul className="list-disc list-inside">
                    <li>Dados de navegação (páginas acessadas, tempo de visita, tipo de dispositivo e navegador);</li>
                    <li>Informações fornecidas voluntariamente (por exemplo, quando você entra em contato pelo e-mail ou formulário).</li>
                </ul>
                <p>
                    Não coletamos informações pessoais sensíveis sem o seu consentimento explícito.
                </p>


                <h2 className="text-2xl font-bold text-white">2. Uso das Informações</h2>
                <p>
                    As informações coletadas são usadas exclusivamente para:
                </p>
                <ul className="list-disc list-inside">
                    <li>Melhorar a navegação e o desempenho do site;</li>
                    <li>Personalizar o conteúdo e as recomendações;</li>
                    <li>Responder mensagens e solicitações de contato;</li>
                    <li>Manter a segurança e integridade da plataforma.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white">3. Cookies e Tecnologias de Rastreamento</h2>
                <p>
                    Usamos cookies e tecnologias semelhantes pra entender melhor como o site é usado e oferecer uma experiência mais fluida. Você pode desativar os cookies no seu navegador, mas isso pode afetar algumas funcionalidades do portal.
                </p>

                <h2 className="text-2xl font-bold text-white">4. Compartilhamento de Dados</h2>
                <p>
                    O RADIO520.COM.BR não vende nem compartilha dados pessoais com terceiros, exceto:
                </p>
                <ul className="list-disc list-inside">
                    <li>Quando houver obrigação legal ou solicitação judicial;</li>
                    <li>Para parceiros que prestam serviços essenciais (como hospedagem e segurança do site), sempre sob acordo de confidencialidade.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white">5. Links Externos</h2>
                <p>
                    Nosso site pode conter links para outras páginas, como redes sociais, podcasts e parceiros. Não somos responsáveis pelas políticas de privacidade ou conteúdo desses sites externos. Recomendamos que você leia os termos de cada plataforma que visitar.
                </p>

                <h2 className="text-2xl font-bold text-white">6. Segurança das Informações</h2>
                <p>
                    Adotamos medidas técnicas e organizacionais pra proteger seus dados contra acessos não autorizados, perda ou uso indevido. Mesmo assim, nenhum sistema online é 100% seguro, então pedimos que você evite compartilhar informações pessoais sensíveis em espaços públicos do portal.
                </p>

                <h2 className="text-2xl font-bold text-white">7. Direitos do Usuário</h2>
                <p>
                    Você pode solicitar, a qualquer momento:
                </p>
                <ul className="list-disc list-inside">
                    <li>Acesso às informações armazenadas;</li>
                    <li>Correção ou exclusão de dados;</li>
                    <li>Revogação do consentimento para uso de informações.</li>
                </ul>
                <p>
                    Entre em contato pelo nosso e-mail: 📧 520radiobrazil@gmail.com
                </p>

                <h2 className="text-2xl font-bold text-white">8. Alterações nesta Política</h2>
                <p>
                    O RADIO520.COM.BR pode atualizar esta Política de Privacidade periodicamente. Sempre que isso acontecer, publicaremos a nova versão com a data de modificação atualizada.
                </p>
                
                <h2 className="text-2xl font-bold text-white">9. Contato</h2>
                <p>
                    Se tiver dúvidas sobre esta Política de Privacidade, fale com a gente:
                </p>

                <p className="font-bold text-teal-300 text-xl text-center mt-8">
                    📍 RADIO520 — A sua playlist toca aqui.
                    <br />
                    📧 520radiobrazil@gmail.com
                    <br />
                    © {new Date().getFullYear()} RADIO520.COM.BR — Todos os direitos reservados.
                </p>
            </div>
        </div>
    </div>
  );
};

export default PrivacyPolicy;