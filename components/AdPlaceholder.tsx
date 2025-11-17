import React, { useEffect } from 'react';

// Informa ao TypeScript sobre a existência do objeto adsbygoogle no window
declare global {
  interface Window {
    adsbygoogle?: object[];
  }
}

interface AdPlaceholderProps {
  slot: string;
  format?: string;
  responsive?: boolean;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  slot,
  format = 'auto',
  responsive = true
}) => {

  useEffect(() => {
    // Tenta carregar o anúncio. O script do AdSense procura por elementos com a classe .adsbygoogle
    // e os preenche. O .push({}) na array adsbygoogle aciona essa verificação.
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Erro ao carregar o anúncio do AdSense:", err);
    }
  }, [slot]); // Re-executa se o slot do anúncio mudar

  return (
    // Um contêiner para o anúncio. O AdSense ajustará o tamanho.
    <div className="w-full flex flex-col items-center justify-center bg-gray-800/50 rounded-lg text-center my-4 overflow-hidden" style={{ minHeight: '280px' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-3940256099942544" // Este é um ID de editor de TESTE
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      ></ins>
       <span className="text-xs text-gray-600 mt-1">Publicidade</span>
    </div>
  );
};

export default AdPlaceholder;