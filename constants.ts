import { Article } from './types';

// Helper para criar datas recentes dinamicamente
const generateRecentDate = (daysAgo: number, hour: number, minute: number): string => {
  const date = new Date(); // Utiliza a data atual como base
  date.setDate(date.getDate() - daysAgo);
  date.setHours(hour, minute, Math.floor(Math.random() * 60)); // Adiciona segundos aleatórios
  return date.toISOString();
};


export const MOCK_ARTICLES: Article[] = [
    {
        id: 57,
        category: 'REPÓRTER 520',
        title: 'GABRIEL MAGALHÃES É CORTADO DO AMISTOSO DA SELEÇÃO BRASILEIRA',
        slug: 'gabriel-magalhaes-cortado-amistoso-selecao-brasileira',
        summary: 'O zagueiro Gabriel Magalhães, do Arsenal, foi cortado do amistoso da Seleção Brasileira contra a Tunísia devido a uma lesão na coxa. Ancelotti não convocará um substituto.',
        content: `O clima em Londres deu aquela azedada pra Seleção Brasileira. O zagueiro Gabriel Magalhães, do Arsenal, sentiu a coxa direita e tá oficialmente fora do amistoso contra a Tunísia. O defensor deixou a preparação e já retorna ao clube inglês pra continuar o tratamento.

A lesão tirou Gabriel da lista às vésperas do jogo, e Carlo Ancelotti decidiu não chamar ninguém pro lugar dele — vai com o que tem mesmo. A comissão técnica entende que o grupo atual segura bem a bronca pro compromisso da Data Fifa.

O corte do defensor é um baque, já que Gabriel vinha de boa fase no Arsenal e tinha moral na Seleção. Agora, o foco do jogador é se recuperar o quanto antes pra voltar ao ritmo na Premier League.

A cobertura completa da Seleção em Londres você acompanha aqui, no Repórter 520, na Rádio 520.`,
        imageUrl: 'https://p2.trrsf.com/image/fget/cf/500/0/images.terra.com/2025/11/16/gab-1hbd9bzuzcokj.jpg',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(0, 11, 0),
        isFeatured: true,
        views: 18500,
        likes: 980,
        hashtags: ['#SeleçãoBrasileira', '#GabrielMagalhães', '#Futebol', '#Lesão'],
    },
    {
        id: 56,
        category: 'FUTEBOL SHOW 520',
        title: 'RB Bragantino domina, Atlético-MG perde a mão e Massa Bruta vence com autoridade em Bragança',
        slug: 'rb-bragantino-domina-atletico-mg-vence-com-autoridade-braganca',
        summary: 'O RB Bragantino venceu o Atlético-MG por 2 a 0 em Bragança, com gols de Lucas Barbosa e Gustavo Marques. Com um jogador a mais após a expulsão de Igor Gomes, o Massa Bruta controlou o jogo e garantiu a vitória.',
        content: `O RB Bragantino fez o Estádio Nabi Abi Chedid ferver na noite deste domingo e bateu o Atlético Mineiro por 2 a 0, em duelo válido pela décima sétima rodada… opa, não: Rodada 37 do Brasileirão Betano. Foi jogo grande, clima de decisão e um roteiro daqueles: gol cedo no segundo tempo, expulsão, pressão e defesa segurando tudo.

O Massa Bruta abriu o placar aos 55 minutos com Lucas Barbosa, após jogadaça de Juninho Capixaba, que tabelou, levou no fundo e deixou o atacante na boa. Quatro minutos depois, o golpe final: Gustavo Marques mandou pra rede e matou qualquer reação do Galo.

A partir daí, o Atlético até tentou reorganizar a casa, mas tudo ruiu aos 75 min: Igor Gomes, que já não fazia partida brilhante, foi expulso por falta dura, deixando o time mineiro sem força pra reagir.

No finaaal do game, quem brilhou mesmo foi Cleiton: seguro, rápido nas saídas e com leitura absurda das jogadas, o goleiro do Bragantino fechou o gol e saiu com a melhor nota da partida (8.2).

<strong>Destaques da partida</strong>
<ul>
    <li>Cleiton (RB Bragantino): melhor em campo, paredão total.</li>
    <li>Gustavo Marques e Jhon Jhon: dupla afiada, com assistência e gol.</li>
    <li>Guilherme Arana: tentou liderar o Galo, mas esbarrou no descontrole coletivo.</li>
</ul>

<strong>Momento do jogo</strong>
A expulsão de Igor Gomes aos 75 minutos praticamente encerrou quaisquer chances de reação do Atlético. O Bragantino, que já controlava o ritmo, só administrou até o apito final.

<strong>Como fica a tabela</strong>
Com o resultado, o RB Bragantino sobe para 44 pontos, brigando por vaga em competições internacionais. O Atlético-MG estaciona nos 42, ainda vivo na disputa, mas pressionado pela reta final.

<strong>Próximos desafios</strong>
<ul>
    <li>RB Bragantino: segue na briga pelas cabeças e ainda tenta fechar o campeonato com moral.</li>
    <li>Atlético-MG: precisa reencontrar organização urgente para não deixar escapar vaga no G8.</li>
</ul>`,
        imageUrl: 'https://s2-ge.glbimg.com/aBYuN3gORb7g52h7Q9-J2JZiX_M=/0x0:1600x1067/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc822806663f488aa253bbcb03c80ec5/internal_photos/bs/2022/E/4/LdE6bWQgA1e2YpX25XQw/agif22051122112415.jpg',
        author: 'Análise 520',
        publishedAt: generateRecentDate(0, 10, 0),
        isFeatured: true,
        views: 19800,
        likes: 1050,
        hashtags: ['#Brasileirão', '#RBBragantino', '#AtléticoMG', '#Futebol'],
    },
    {
        id: 55,
        category: 'PÓDIO 520',
        title: 'Lucas Pinheiro faz história e se torna o primeiro brasileiro campeão em etapa da Copa do Mundo de Esqui Alpino',
        slug: 'lucas-pinheiro-historia-esqui-alpino',
        summary: 'O esquiador Lucas Pinheiro fez história ao se tornar o primeiro brasileiro a vencer uma etapa da Copa do Mundo de Esqui Alpino, com uma performance dominante na Finlândia.',
        content: `O esporte brasileiro amanheceu com um feito simplesmente gigante neste domingo. O esquiador Lucas Pinheiro escreveu seu nome na história ao conquistar uma vitória inédita para o país: ele se tornou o primeiro brasileiro campeão de uma etapa da Copa do Mundo de Esqui Alpino.

A conquista rolou em Levi, na Finlândia, durante a prova de Slalom. Lucas mandou super bem nas duas descidas e garantiu o melhor tempo na soma geral — performance de gente grande, mostrando que o Brasil também sabe brilhar no gelo.

A vitória não é só um marco pessoal, mas um recado pro mundo: o Brasil segue abrindo caminho em modalidades onde, por anos, ninguém imaginava ver nossa bandeira no topo.

O Time Brasil celebrou o resultado nas redes sociais com uma mensagem que resumiu o sentimento de todo mundo que acompanha esportes olímpicos: “É o Brasil rasgando a neve e mostrando que não existe limite pra nossa bandeira!”

A foto oficial do momento, publicada pelo Time Brasil, é da Getty Images.`,
        imageUrl: 'https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2024/02/10/2024-02-10t150442z_1_lynxmpelaf08e_rtroptp_4_alpine-skiing-men.jpg?itok=aL2wdkH4',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(0, 8, 30),
        isFeatured: true,
        views: 24500,
        likes: 1650,
        hashtags: ['#EsquiAlpino', '#LucasPinheiro', '#EsportesDeInverno', '#TimeBrasil'],
    },
    {
        id: 54,
        category: 'ACE 520',
        title: 'Sinner conquista segundo ATP Finals seguido e consolida domínio na nova geração',
        slug: 'sinner-conquista-segundo-atp-finals-seguido-e-consolida-dominio-na-nova-geracao',
        summary: 'Jannik Sinner vence Carlos Alcaraz, conquista o bicampeonato do ATP Finals em Turim e consolida seu domínio na nova geração do tênis masculino.',
        content: `Jannik Sinner confirmou, neste domingo, a fase dominante que vive no circuito ao conquistar seu segundo título consecutivo do Nitto ATP Finals, derrotando Carlos Alcaraz por 7-6 e 7-5, em Turim. O resultado consolida a temporada mais consistente da carreira do italiano e reforça sua ascensão como nome central da nova era do tênis masculino.

A partida foi marcada pelo equilíbrio, mas também pela evolução técnica de Sinner — especialmente no saque, ponto que se tornou alvo de ajustes após a eliminação no US Open. As mudanças surtiram efeito: mais potência, maior precisão e controle emocional nos momentos decisivos. O desempenho permitiu que o italiano atravessasse o torneio sem perder sets, algo raro no evento que reúne os oito melhores da temporada.

Mesmo diante de um adversário que costuma elevar o nível em jogos grandes, Sinner ditou o ritmo. Nos ralis longos, conseguiu assumir a iniciativa com agressividade controlada; nos pontos curtos, mostrou frieza para executar. A leitura tática, somada à solidez mental, empurrou o número 2 do mundo para novo título em casa — com a torcida italiana transformando o Pala Alpitour em um ambiente quase intransponível.

Alcaraz também deixou bons sinais. O espanhol apresentou melhora no piso indoor ao longo do torneio, mas ainda encontra dificuldades para manter intensidade e regularidade nesse tipo de superfície. A derrota, embora dura, faz parte do processo de adaptação do jogador mais jovem do Top 5.

O circuito observa atentamente essa rivalidade, que já é tratada como o eixo competitivo da geração pós-Big 3. E se ambos têm potencial para polarizar o topo do ranking pelos próximos anos, o momento atual aponta para uma liderança clara: Sinner está um passo à frente, técnica e mentalmente.

Com o bicampeonato em Turim, o italiano fecha a temporada no auge, mais maduro, mais completo — e cada vez mais favorito a comandar a nova era do tênis.`,
        imageUrl: 'https://c.files.bbci.co.uk/23a9/live/eb0ee790-a51a-11ef-8901-a18a6eb097bd.jpg',
        author: 'Análise 520',
        publishedAt: generateRecentDate(0, 7, 0),
        isFeatured: true,
        views: 23000,
        likes: 1400,
        hashtags: ['#ATPFinals', '#Tênis', '#Sinner', '#Alcaraz'],
    },
    {
        id: 53,
        category: 'VOLTA RÁPIDA',
        title: 'Brasil no topo: Diogo Moreira comemora título mundial ao som de “Charlie Brown”, clássico de Benito de Paula',
        slug: 'diogo-moreira-comemora-titulo-mundial-charlie-brown',
        summary: 'O motociclismo brasileiro vive um momento histórico com a conquista do primeiro título mundial de Diogo Moreira na Moto2. Veja o vídeo da comemoração, celebrada ao som de "Charlie Brown" e com homenagens à Seleção Brasileira.',
        content: `O motociclismo brasileiro vive um momento que muda a história do esporte no país. <strong>Diogo Moreira</strong> conquistou o primeiro título mundial do Brasil, encerrando sua temporada da Moto2 com uma performance sólida em Valência — e uma comemoração absolutamente brasileira dentro do paddock.

A festa que tomou conta do box teve como trilha sonora “Charlie Brown”, clássico de Benito de Paula, num clima que misturava emoção, saudade e identidade nacional. Enquanto a música ecoava, a equipe celebrava com bandeiras e abraços, transformando o momento em uma cena marcante para os fãs.

O tom patriótico ficou ainda mais forte quando os membros da equipe apareceram usando camisas da Seleção Brasileira de futebol, todas com a icônica camisa 10 nas costas — homenageando quatro lendas eternas: Pelé, Ronaldo, Ronaldinho e Neymar.

E claro, o campeão também entrou na onda: Diogo, que compete com o número 10, vestiu uma camisa da Seleção personalizada com “MOREIRA 10”. A imagem viralizou imediatamente, simbolizando um elo perfeito entre o título nas motos e a tradição do futebol brasileiro.

Aos 20 anos, Moreira encerra uma temporada que o coloca num patamar histórico. Sua consistência e maturidade ao longo do ano pavimentam não só um título inédito, mas também a expectativa por uma nova geração de pilotos brasileiros em ascensão — justamente às vésperas do retorno do Mundial ao Brasil em 2026.

Um campeão mundial.<br>
Um novo “camisa 10”.<br>
E um dia que colocou o Brasil no topo das motos.`,
        imageUrl: 'https://pbs.twimg.com/media/G539Wp0WUAASsDL?format=jpg&name=large',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(1, 14, 0),
        isFeatured: true,
        views: 21000,
        likes: 1250,
        hashtags: ['#DiogoMoreira', '#Moto2', '#CampeãoMundial', '#Motociclismo'],
    },
    {
        id: 52,
        category: 'RÁDIO 520 POP NEWS',
        title: 'Da polêmica ao pódio: MotoGP transforma Ana Peleteiro em recado vivo à mídia espanhola',
        slug: 'motogp-ana-peleteiro-polemica-podio',
        summary: 'A atleta espanhola Ana Peleteiro deu a bandeirada final na sprint da MotoGP em Valência, um gesto visto como homenagem após meses de atritos com a imprensa espanhola e debates sobre racismo no esporte.',
        content: `A sprint da MotoGP em Valência contou com um momento especial neste fim de semana: a atleta espanhola <strong>Ana Peleteiro</strong> foi a responsável por acenar a bandeirada final da prova, gesto que rapidamente ganhou destaque nas redes e na imprensa local. Para muitos fãs, a presença da medalhista olímpica não foi apenas uma participação simbólica, mas também uma forma de homenagem em meio ao período turbulento que ela viveu nos últimos meses.

Peleteiro esteve envolvida recentemente em uma série de atritos com a imprensa espanhola. O episódio mais marcante ocorreu durante o Campeonato Europeu Indoor de Atletismo, quando a atleta criticou publicamente a <strong>RTVE/Teledeporte</strong> por priorizar a transmissão de uma partida de futebol feminino no horário em que competiria. A queixa repercutiu amplamente e gerou resposta de profissionais da emissora, que alegaram que a atleta teria se recusado a atender uma equipe de reportagem no local.

Além disso, Peleteiro se tornou alvo de ataques e polêmicas nas redes sociais ao comentar episódios de <strong>racismo</strong> na Espanha. A atleta expôs mensagens ofensivas que recebeu e precisou se posicionar novamente quando um vídeo antigo, editado fora de contexto, voltou a circular e gerou acusações infundadas. Ela denunciou o “linchamento virtual” e reforçou a importância de discussões sérias sobre representatividade e respeito no esporte.

Com esse cenário, a escolha de Ana Peleteiro para dar a bandeirada final em Valência ganhou outra camada de significado. Para muitos, a MotoGP enviou um gesto claro de apoio e reconhecimento à atleta, que segue se destacando não apenas pelos resultados esportivos, mas também por sua postura firme diante de temas sensíveis.

A participação de Peleteiro tornou o encerramento da sprint ainda mais simbólico, marcando um encontro entre dois mundos esportivos e reforçando sua força como figura pública na Espanha.`,
        imageUrl: 'https://estaticos-cdn.prensaiberica.es/clip/45c94026-408a-4c77-85cf-e6dee9ded336_16-9-discover-aspect-ratio_default_0.jpg',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(1, 18, 45),
        isFeatured: true,
        views: 13500,
        likes: 680,
        hashtags: ['#MotoGP', '#AnaPeleteiro', '#EsporteEspanhol', '#Representatividade'],
    },
    {
        id: 51,
        category: 'ACE 520',
        title: 'Sinner domina e carimba vaga na final em Turim',
        slug: 'sinner-domina-e-carimba-vaga-na-final-em-turim',
        summary: 'Jannik Sinner veio simplesmente insano na semi do ATP Finals em Turim. O italiano atropelou Alex de Minaur por 2 sets a 0, mantendo a energia lá em cima e mostrando por que tá no top-2 do mundo.',
        content: `Jannik Sinner veio simplesmente insano na semi do ATP Finals em Turim. O italiano atropelou Alex de Minaur por 2 sets a 0, mantendo a energia lá em cima e mostrando por que tá no top-2 do mundo.

Mesmo com De Minaur correndo em tudo quanto é canto — como sempre — Sinner controlou o jogo do início ao fim. Mandou ver no saque (foram 7 aces e só 0 dupla falta, zero vacilo), encaixou 75% do primeiro serviço e ainda ganhou 84 dos 147 pontos totais do duelo. Traduzindo: foi soberano.

No return, outro show: Sinner converteu 3 quebras, aproveitou quase metade dos pontos nas devoluções e não deixou o australiano respirar. De Minaur até tentou variar, mas ficou preso nos próprios erros e não conseguiu encaixar ritmo.

Sinner agora segue vivão, cheio de confiança, e já mira o título no domingão. O garoto tá jogando em modo final boss — e não parece disposto a tirar o pé.`,
        imageUrl: 'https://www.atptour.com/-/media/images/news/2023/11/18/sinner-turin-2023-sf-saturday.jpg',
        author: 'Análise 520',
        publishedAt: generateRecentDate(1, 17, 20),
        isFeatured: true,
        views: 18000,
        likes: 850,
        hashtags: ['#ATPFinals', '#Tênis', '#Sinner', '#Turim'],
    },
    {
        id: 50,
        category: 'FUTEBOL SHOW 520',
        title: 'Brasil vence Senegal em Londres com boa atuação coletiva e brilho da nova geração',
        slug: 'brasil-vence-senegal-em-londres-com-boa-atuacao-coletiva',
        summary: 'A Seleção Brasileira venceu Senegal por 2 a 0 em amistoso em Londres, com gols de Estêvão e Casemiro. A equipe mostrou bom volume ofensivo e segurança defensiva, consolidando a preparação para os próximos compromissos.',
        content: `A Seleção Brasileira fez bem o dever de casa no amistoso desta tarde em Londres e levou a melhor sobre Senegal por 2 a 0, num jogo em que a molecada mostrou personalidade e os veteranos deram a firmeza necessária pra controlar o ritmo.

O placar saiu dos pés de <strong>Estêvão</strong>, aos 28 minutos, numa chegada rápida pela direita, e foi ampliado por <strong>Casemiro</strong>, aos 35, aproveitando sobra dentro da área. Depois disso, o Brasil administrou sem sofrer — Senegal até teve posse maior (53%), mas não conseguiu transformar isso em perigo real.

Nos números, o Brasil comandou as ações ofensivas:
<ul>
    <li>14 finalizações, sendo 6 no gol,</li>
    <li>duas bolas na trave,</li>
    <li>26 toques na área adversária,</li>
    <li>e duas grandes chances criadas.</li>
</ul>

A defesa também foi segura: apenas um chute no alvo senegalês e nenhum grande erro atrás.

Mesmo com equilíbrio nas divididas e tackles, a Seleção mostrou mais qualidade no terço final e mais precisão nas transições. O meio-campo brasileiro acertou 288 passes, mantendo dinamismo sem perder intensidade.

Com esse resultado, o Brasil segue firme na preparação para os próximos compromissos da Data FIFA e alimenta a expectativa em cima da nova geração — Estêvão, mais uma vez, entregou presença, ímpeto e decisão.`,
        imageUrl: 'https://conteudo.imguol.com.br/c/esporte/9d/2024/06/11/estevao-comemora-gol-em-amistoso-da-selecao-brasileira-contra-senegal-1718134701987_v2_4x3.jpg',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(2, 15, 0),
        isFeatured: true,
        views: 22000,
        likes: 1100,
        hashtags: ['#SeleçãoBrasileira', '#Futebol', '#Amistoso', '#Estêvão'],
    },
    {
        id: 49,
        category: 'REPÓRTER 520',
        title: 'Brasil avança no Mundial Sub-17 com show do goleiro João Pedro',
        slug: 'brasil-avanca-mundial-sub-17-show-goleiro-joao-pedro',
        summary: 'O goleiro João Pedro foi o herói da classificação do Brasil no Mundial Sub-17, defendendo três pênaltis contra o Paraguai. A Seleção agora enfrenta a França nas oitavas de final.',
        content: `O Brasil tá vivíssimo no Mundial Sub-17 — e muito disso passa por um nome: <strong>João Pedro</strong>. O goleiro brilhou demais ao pegar três cobranças na disputa de pênaltis contra o Paraguai, garantindo a vaga da Seleção para as oitavas de final.

No tempo normal, o jogo foi equilibrado, tenso, daquele jeito que faz qualquer torcedor suar frio. Mas quando a decisão foi pra marca da cal, João Pedro simplesmente ligou o modo muralha e decidiu.

Com a classificação carimbada, a Seleção Brasileira agora se prepara para encarar a <strong>França</strong> na próxima fase. A promessa é de jogão — e o clima na base é de pura confiança.`,
        imageUrl: 'https://conteudo.imguol.com.br/c/esporte/a5/2023/11/24/joao-pedro-goleiro-sub-17-brasil-1700840134015_v2_1x1.jpg',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(2, 11, 30),
        isFeatured: true,
        views: 19500,
        likes: 950,
        hashtags: ['#SeleçãoSub17', '#MundialSub17', '#Futebol', '#JoãoPedro'],
    },
    {
        id: 48,
        category: 'RADIO520 FASHION LEAGUE',
        title: 'Ferrari e Puma celebram 20 anos com coleção especial inspirada em Las Vegas',
        slug: 'ferrari-puma-20-anos-colecao-las-vegas',
        summary: 'A Ferrari e a Puma estão comemorando 20 anos de parceria com uma coleção exclusiva para o GP de Las Vegas. A linha homenageia o carro SF-1000 e mistura a herança da Scuderia com a estética moderna da Puma, reforçando a conexão entre moda e automobilismo.',
        content: `A parceria entre Ferrari e Puma está completando <strong>duas décadas</strong>, e claro que esse marco não ia passar batido no universo onde performance e estilo andam lado a lado. Para celebrar os <strong>20 anos de colaboração</strong>, as duas marcas prepararam uma coleção exclusiva que será apresentada no GP de Las Vegas, trazendo aquele mix perfeito de herança, tecnologia e estética racing que a dupla domina.

A peça central da coleção é um macacão especial que presta homenagem ao lendário <strong>SF-1000</strong>, carro utilizado pela Ferrari no GP de Mugello em 2020 — aquele mesmo que marcou o milésimo GP da Scuderia na Fórmula 1. A releitura volta com um toque moderno, cores vibrantes e aquele acabamento premium que já virou assinatura da Puma nas linhas de motorsport.

Além do macacão, a coleção inclui itens lifestyle pensados para os fãs que querem levar um pouco do espírito Ferrari para o dia a dia em Vegas ou em qualquer rolê com pegada fashion-esportiva. O drop traz camisetas, jaquetas e acessórios que unem o vermelho icônico da equipe com elementos gráficos contemporâneos.

A chegada da coleção em um dos GPs mais chamativos do calendário não é coincidência — Vegas virou o palco ideal para testar o apelo fashion da Fórmula 1, e a Ferrari chega com força total para mostrar que tradição também pode ser hype.

Na 520, a gente segue acompanhando tudo de perto, porque quando moda e automobilismo se cruzam desse jeito… simplesmente não tem como passar despercebido.`,
        imageUrl: 'https://pbs.twimg.com/media/G5tCptpXoAAyv3r?format=jpg&name=large',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(2, 9, 0),
        isFeatured: true,
        views: 11000,
        likes: 350,
        hashtags: ['#Ferrari', '#Puma', '#F1', '#LasVegasGP', '#Fashion'],
    },
    {
        id: 47,
        category: 'RADIO520 NEWS',
        title: 'Mbappé atinge 400 gols e iguala marca de Pelé: um novo capítulo da história',
        slug: 'mbappe-400-gols-iguala-pele',
        summary: 'Kylian Mbappé se tornou o jogador mais jovem a alcançar 400 gols na carreira, igualando a marca de Pelé. Aos 26 anos, o craque francês continua a redefinir recordes e solidifica seu domínio no futebol mundial.',
        content: `Kylian Mbappé segue escrevendo sua própria lore no futebol mundial. Nesta quinta (13), o craque francês bateu mais um marco absurdo: tornou-se o jogador mais jovem a alcançar <strong>400 gols</strong> na carreira, feito que só tinha sido visto antes com… ele mesmo, o Rei Pelé.

O lance viralizou nas redes sociais depois que o Madrid Zone soltou o post comparando as duas lendas. Mbappé, que segue acumulando gols como quem coleciona figurinhas raras, vive um momento insanamente dominante — e não é só hype, é entrega dentro de campo.

No amistoso mais recente pela França, o camisa 10 dropou <strong>2 gols e 1 assistência</strong>, levou Man of the Match e manteve o padrão “modo carreira no talo”. Cada partida parece confirmar que ele está puxando a régua da geração inteira pra cima.

A comparação com Pelé sempre rende debate, mas a real é que Mbappé não tá só seguindo passos — ele tá reescrevendo capítulos. E aos 26 anos, já acumula números que muitos só chegam quando vão se aposentar.

O futebol tá em outra rotação — e Mbappé tá no comando.`,
        imageUrl: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/mbappe_franca-e1717975983593.jpg?w=1200&h=630&crop=1',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(3, 22, 15),
        isFeatured: true,
        views: 25000,
        likes: 1500,
        hashtags: ['#Mbappé', '#Futebol', '#França', '#Recorde'],
    },
    {
        id: 46,
        category: 'FUTEBOL SHOW 520',
        title: 'Seleção Brasileira inicia trabalhos em Londres com foco total nos amistosos',
        slug: 'selecao-brasileira-inicia-trabalhos-em-londres-com-foco-total-nos-amistosos',
        summary: 'A Seleção Brasileira já está em Londres para os amistosos contra Senegal e Tunísia. Ancelotti testa Éder Militão na lateral e foca em ajustes táticos no CT do Arsenal.',
        content: `A Seleção Brasileira já tá naquele clima de missão em Londres, se preparando pros amistosos contra Senegal e Tunísia. O grupo se apresentou na capital inglesa e começou os trabalhos no Centro de Treinamento do Arsenal, uma estrutura que todo jogador sonha em usar — e que agora virou casa do Brasil nessa Data Fifa.

Carlo Ancelotti saiu satisfeito das primeiras atividades, inclusive com os erros. Segundo o técnico, esse é justamente o momento de testar, ajustar e “errar pra aprender” antes da pressão real da temporada 2026. Clima leve, mas com foco.

No primeiro dia, <strong>22 jogadores</strong> chegaram e <strong>14 foram a campo</strong>. O destaque ficou para um teste diferente: Ancelotti colocou <strong>Éder Militão atuando como lateral-direito</strong>, buscando opções novas pro setor que ainda não tá 100% fechado.

O treino mesclou movimentação leve com exercícios táticos. Quem tava lá sentiu o ritmo: dinâmica rápida, intensidade alta e aquele padrão Ancelotti de cobrança, mas sempre na boa.

A preparação segue firme até o duelo contra <strong>Senegal, sábado</strong>, no Emirates Stadium, em Londres. Depois, o Brasil viaja até Lille, na França, pra enfrentar a <strong>Tunísia na terça-feira</strong>, fechando o calendário de amistosos do ano.

A Rádio 520 segue acompanhando tudo de perto pra trazer cada detalhe dessa semana de treinos na Inglaterra. Fica ligado!`,
        imageUrl: 'https://c.lance.com.br/uploads/2024/06/comissao-tecnica-selecao-brasileira-aspect-ratio-512-320.jpg',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(3, 19, 0),
        isFeatured: true,
        views: 9300,
        likes: 290,
        hashtags: ['#SeleçãoBrasileira', '#Futebol', '#Ancelotti'],
    },
    {
        id: 45,
        category: 'SUPERSET 520',
        title: 'Fluminense supera Sorocaba em jogo equilibrado pela Superliga Feminina',
        slug: 'fluminense-supera-sorocaba-jogo-equilibrado-superliga-feminina',
        summary: 'O Fluminense venceu o Renasce Voleibol Sorocaba em um jogo equilibrado pela Superliga Feminina, mostrando consistência nos momentos decisivos para garantir a vitória.',
        content: `Em partida válida pela quinta rodada da Superliga Feminina, o Fluminense venceu o Renasce Voleibol Sorocaba ao mostrar mais consistência nos momentos decisivos e maior eficiência nas ações de saque e virada de bola. O confronto, disputado na noite desta quinta-feira, terminou com 106 pontos a 98 para a equipe tricolor na soma geral, indicando um duelo equilibrado, mas controlado pelo time carioca nas passagens-chave.

O Fluminense construiu sua vitória a partir de um serviço mais agressivo e produtivo. Foram 48 pontos obtidos em ações de saque, contra 40 do adversário, além de cinco aces — mais que o dobro dos dois registrados por Sorocaba. Mesmo cometendo sete erros no fundamento, o Flu se manteve mais regular que o rival, que terminou o jogo com dez falhas no saque.

Na recepção, Sorocaba apresentou melhor percentual geral (59%), mas não conseguiu transformar essa vantagem em superioridade no placar. O Fluminense se sobressaiu ao capitalizar melhor as oportunidades geradas pelo sistema defensivo adversário, mantendo fluidez e controle do ritmo durante quase todo o duelo.

Outro ponto que pesou foi a gestão emocional e tática da partida. Sorocaba precisou utilizar nove tempos técnicos ao longo do jogo, sinalizando maior dificuldade para reorganizar a equipe diante da pressão tricolor. Já o Fluminense demonstrou estabilidade, limitando oscilações e mantendo regularidade mesmo quando o adversário emendou sua melhor sequência de pontos, um run de seis bolas consecutivas.

Com a vitória, o Fluminense confirma seu bom momento na competição e mostra evolução no padrão coletivo. Já o Renasce Sorocaba sai de quadra com alguns pontos positivos em desempenho, mas ainda em busca de mais firmeza nos momentos de decisão.

A Rádio 520 segue acompanhando a Superliga Feminina com cobertura completa e análises aprofundadas de cada rodada.`,
        imageUrl: 'https://s2-ge.glbimg.com/aTq3b-Y7j1l_p_l4F5_Qj3E_q8M=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc822806663f488aa253bbcb03c80ec5/internal_photos/bs/2023/11/22/Vf0cAlRGiICZAvDIgNlA/fluminense-x-bluvolei-pela-superliga-feminina-de-volei-foto-mailson-santana-fluminense-fc.jpg',
        author: 'Análise 520',
        publishedAt: generateRecentDate(3, 17, 30),
        isFeatured: true,
        views: 13250,
        likes: 380,
        hashtags: ['#Volei', '#SuperligaFeminina', '#Fluminense'],
    },
    {
        id: 44,
        category: 'MATCHDAY 520',
        title: 'Irlanda 2 x 0 Portugal: Parrott decide, Ronaldo é expulso e clima pesa para o lado português',
        slug: 'irlanda-2-x-0-portugal-parrott-decide-ronaldo-expulso',
        summary: 'A seleção portuguesa tropeçou feio em Dublin, perdendo por 2 a 0 para a Irlanda. Troy Parrott marcou os dois gols e Cristiano Ronaldo foi expulso, complicando a situação para Portugal nas Eliminatórias da Copa.',
        content: `A seleção portuguesa tropeçou feio em Dublin nesta décima terceira rodada das Eliminatórias da Copa do Mundo. Jogando no Aviva Stadium, Portugal tomou um 2 a 0 seco da Irlanda, com Troy Parrott chamando a responsa e marcando duas vezes ainda no primeiro tempo. Resultado que, sinceramente, ninguém tava prevendo — 85% da galera nas enquetes apostava na vitória portuguesa.

<strong>Como foi o jogo</strong>

O roteiro começou a virar cedo. Aos 17 minutos, Parrott aproveitou assistência de Liam Scales e abriu o placar. A Irlanda cresceu no jogo, venceu a maioria dos duelos e não deixou Portugal respirar. A situação complicou de vez aos 45, quando Dara O’Shea encontrou Parrott de novo, e o atacante colocou 2 a 0 na conta.

O segundo tempo virou praticamente missão impossível depois da expulsão de Cristiano Ronaldo — lance revisado no VAR e, depois de muita treta, cartão vermelho por conduta violenta aos 61 minutos. A partir daí, Portugal virou um time tenso, acelerado demais e incapaz de transformar posse em perigo real.

O Sofascore cravou: Dara O’Shea foi o melhor em campo, nota 8.4, comandando a defesa irlandesa com muita autoridade.

<strong>Análise tática</strong>

O técnico Heimir Hallgrímsson entregou o famoso “game plan perfeito”: bloco médio, pressão coordenada e transições rápidas — do jeitinho que mais machuca a defesa portuguesa quando não tá num dia inspirado.

Portugal, por outro lado, sofreu com amplitude baixa, laterais pouco produtivos e meio-campo travado. João Félix e Bernardo Silva não conseguiram criar, e as substituições de Martínez não mudaram o clima do jogo.

<strong>Repercussão pós-jogo</strong>

A imprensa portuguesa caiu matando: a expulsão de CR7 virou trending no país, e a falta de maturidade emocional do time foi tema dominante. Nas redes, torcedores dividiram opinião entre “inaceitável” e “dia atípico”.

Do lado irlandês, euforia total. Troy Parrott virou herói instantâneo, e a mídia local chamou a atuação de “uma das mais intensas da equipe nos últimos anos”.

<strong>O que esse resultado muda</strong>

Mesmo com a derrota, Portugal segue líder do Grupo F, mas a Irlanda encosta e mantém vivo o sonho da classificação. E, cá entre nós, esse 2 a 0 dá um gás monstro pro vestiário irlandês e liga o alerta vermelho em Lisboa.

<strong>Prognóstico</strong>

Se Portugal quiser confirmar a vaga sem drama, vai precisar revisar o controle emocional e reorganizar o ataque — especialmente se Cristiano Ronaldo pegar suspensão ampliada. Já a Irlanda, se repetir essa intensidade, chega fortíssima pros últimos dois jogos.`,
        imageUrl: 'https://s2-oglobo.glbimg.com/hfjWmOY9u5eFjuyT1azA-7hEp_w=/0x0:544x429/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/11/18/WByYZVSWOvlggo8yJmOA/g5qndsfxyae3qxv.jpg',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(4, 14, 0),
        updatedAt: generateRecentDate(4, 14, 30),
        isFeatured: true,
        views: 18000,
        likes: 650,
        hashtags: ['#Eliminatórias', '#Portugal', '#Irlanda', '#CristianoRonaldo'],
    },
    {
        id: 43,
        category: 'REPÓRTER 520',
        title: 'Oscar cogita aposentadoria após detectar anomalias cardíacas; família pede que ele deixe o futebol',
        slug: 'oscar-cogita-aposentadoria-anomalias-cardiacas',
        summary: 'O meia Oscar, ex-Chelsea e Seleção Brasileira, foi hospitalizado com anomalias cardíacas e sua carreira pode estar em risco. A família pediu para que ele se afaste do futebol, e a aposentadoria já é avaliada.',
        content: `O meia brasileiro Oscar, ex-Chelsea e ex-Seleção Brasileira, pode estar chegando ao fim da sua trajetória nos gramados. Segundo informações divulgadas inicialmente pelo Daily Mail, o jogador foi hospitalizado nesta semana após apresentar anomalias cardíacas, acendendo um alerta geral no seu entorno.

Fontes próximas ao atleta confirmam que a família pediu para que ele se afaste do futebol imediatamente, priorizando a saúde. A possibilidade de aposentadoria já estaria sendo avaliada com seriedade pelo estafe do jogador.

Oscar, atualmente no São Paulo, vinha sendo peça importante na temporada, mas a descoberta do problema cardíaco interrompeu de forma brusca sua rotina esportiva. No clube, o clima é de preocupação e cuidado — ninguém fala em retorno aos treinos neste momento.

A situação reacende o debate sobre saúde cardíaca em atletas de alto rendimento, um tema que vem ganhando cada vez mais espaço no futebol mundial. Casos recentes mostraram que, por mais preparado que o atleta esteja, o corpo sempre fala antes.

A Rádio 520 segue acompanhando o caso de perto e atualiza você assim que novas informações forem confirmadas.`,
        imageUrl: 'https://pbs.twimg.com/media/G5oWEAaWcAAX-tJ?format=jpg&name=medium',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(4, 11, 10),
        isFeatured: true,
        views: 15000,
        likes: 780,
        hashtags: ['#Oscar', '#Futebol', '#SãoPauloFC', '#Saúde'],
    },
    {
        id: 42,
        category: 'VOLTA RÁPIDA',
        title: 'Audi apresenta o conceito do carro R26 e pilotos já conferem de perto o modelo para 2026',
        slug: 'audi-apresenta-conceito-carro-r26-pilotos-conferem-modelo-2026',
        summary: 'A Audi revelou o conceito R26 para sua estreia na F1 em 2026, com os pilotos Nico e Gabs já avaliando o protótipo. A novidade vem junto com o anúncio da Revolut como patrocinadora principal, mostrando que a equipe chega para competir.',
        content: `A Audi segue acelerando no processo de estreia na Fórmula 1 e, depois de anunciar a fintech Revolut como nova patrocinadora principal para 2026, soltou mais um capítulo quente dessa construção: Nico e Gabs, dupla que vai comandar o time na pista, já deram aquela conferida no R26, o conceito do carro que devem pilotar na próxima temporada.

A equipe divulgou imagens dos dois observando cada detalhe do protótipo em um evento fechado, reforçando o clima de expectativa em torno do primeiro carro da Audi na era F1 moderna. O visual segue a estética clássica da marca, com prata predominante e toques de vermelho que remetem à identidade esportiva da montadora. O clima no evento era de pura curiosidade técnica — todo mundo de olho nos detalhes aerodinâmicos e nas soluções que a Audi vem desenvolvendo para encarar o grid.

Esse movimento chega logo após o anúncio de que a parceria com a Stake termina em 2026, abrindo espaço para a Revolut assumir o naming rights da equipe justamente no ano de estreia. A presença de uma gigante global do setor financeiro dá ainda mais peso ao projeto, que já nasce com um mix de tradição e inovação.

Com os pilotos envolvidos desde cedo na avaliação do carro e grandes marcas colando seu nome no projeto, a Audi indica que não está entrando na Fórmula 1 apenas para participar — ela quer competir de verdade.

A Rádio 520 segue colada em cada passo dessa caminhada rumo a 2026, trazendo todos os detalhes do R26, da equipe e dos bastidores desse debut tão esperado no mundial.`,
        imageUrl: 'https://pbs.twimg.com/media/G5m4sjKXsAAmbXN?format=jpg&name=medium',
        author: 'Equipe RADIO520',
        publishedAt: generateRecentDate(4, 9, 0),
        isFeatured: true,
        views: 9800,
        likes: 250,
        hashtags: ['#F1', '#Audi', '#R26', '#Revolut'],
    },
    {
        id: 41,
        category: 'LIGA 520',
        title: 'NBA – Orlando Magic domina o último quarto e vence o New York Knicks por 124 a 107',
        slug: 'nba-orlando-magic-domina-ultimo-quarto-vence-new-york-knicks',
        summary: 'O Orlando Magic venceu o New York Knicks por 124 a 107, com uma performance dominante no último quarto. Liderados por Anthony Black e Jalen Suggs, o time da Flórida aproveitou os erros dos Knicks para garantir a vitória no Madison Square Garden.',
        content: `O Orlando Magic construiu uma vitória sólida sobre o New York Knicks na noite desta quarta-feira, fechando o confronto em 124 a 107, no Madison Square Garden. O resultado foi definido principalmente no último período, quando a equipe da Flórida impôs ritmo mais intenso, força física e melhor execução tática.

<strong>Black e Suggs comandam a arrancada</strong>

O Magic acelerou o jogo no quarto decisivo e contou com uma atuação eficiente de Anthony Black, protagonista da virada de ritmo. O armador converteu infiltrações importantes, controlou o pace e distribuiu bem as posses em momento de maior pressão.

Jalen Suggs também teve participação determinante, aparecendo nos dois lados da quadra: marcou bolas de três, buscou rebotes ofensivos e foi responsável por ações que quebraram a sequência defensiva dos Knicks.

Além deles, Desmond Bane manteve alto aproveitamento no perímetro e ajudou a espaçar o ataque, enquanto Wendell Carter Jr. foi decisivo no trabalho físico dentro do garrafão, garantindo posses e cavando faltas em momentos-chave.

<strong>Knicks dependem de Brunson e sofrem com erros</strong>

Do outro lado, o Knicks novamente encontrou dificuldade para dividir a criação ofensiva. Jalen Brunson foi o principal responsável pela manutenção da competitividade da equipe, anotando lances de infiltração, floaters e arremessos contestados. Porém, a atuação não foi suficiente diante da instabilidade coletiva.

Karl-Anthony Towns alternou bons momentos com desperdícios de posse e cometeu faltas importantes, especialmente no início do último quarto. A equipe de Nova York também sofreu com turnovers — repetidos ao longo de toda a parcial final — que acabaram convertidos em pontos do adversário.

<strong>Momento decisivo</strong>

A arrancada do Magic ganhou corpo a partir dos 9 minutos restantes no quarto período. Após cesta de Anthony Black abrindo vantagem em 95 a 81, o Knicks desperdiçou duas posses ofensivas seguidas. O Magic aproveitou cada erro, ampliou a distância e passou a controlar o jogo até o fim.

<strong>Eficiência e defesa ajustada</strong>

O Orlando se destacou pela consistência nas trocas defensivas e pela agressividade nas infiltrações. A equipe forçou Towns para decisões difíceis no perímetro, limitou espaços de arremesso e explorou a transição sempre que recuperava a bola.

<strong>Resumo</strong>

Magic vence por 124 a 107

Anthony Black, Jalen Suggs e Desmond Bane lideram ofensiva decisiva

Knicks dependem de Jalen Brunson e sofrem com turnovers

Karl-Anthony Towns tem atuação irregular e com faltas determinantes.`,
        imageUrl: 'https://static.independentespanol.com/2024/01/17/03/MAGIC-KNICKS_92360.jpg?width=1200&height=900&fit=crop',
        author: 'Análise 520',
        publishedAt: generateRecentDate(5, 23, 30),
        isFeatured: true,
        views: 11800,
        likes: 310,
        hashtags: ['#NBA', '#OrlandoMagic', '#NewYorkKnicks', '#Basquete'],
    },
    {
        id: 40,
        category: 'FUTEBOL SHOW 520',
        title: 'Atlético-MG e Fortaleza empatam em 3 a 3 no Mineirão em jogo elétrico e com hat-trick de Deyverson',
        slug: 'atletico-mg-e-fortaleza-empatam-em-3-a-3-no-mineirao-com-hat-trick-de-deyverson',
        summary: 'Atlético-MG e Fortaleza entregaram um dos jogos mais movimentados da rodada. O empate por 3 a 3 refletiu o caos controlado que marcou a partida: domínio mineiro no primeiro tempo, reação do Fortaleza na etapa final e um hat-trick de Deyverson que roubou a cena.',
        content: `Atlético-MG e Fortaleza entregaram um dos jogos mais movimentados da rodada, na noite desta quarta-feira, no Mineirão. O empate por 3 a 3 refletiu bem o caos controlado que marcou a partida: domínio mineiro no primeiro tempo, reação do Fortaleza na etapa final e um hat-trick de Deyverson que roubou a cena em Belo Horizonte.

O Galo abriu o placar cedo, aos 8 minutos, com Hulk finalizando no canto direito após cruzamento de Rony. O time mineiro seguiu mais organizado e ampliou nos acréscimos da primeira etapa, quando Vitor Hugo apareceu no centro da área para completar de cabeça o cruzamento de Bernard.

Na volta do intervalo, parecia que o Atlético controlaria a noite sem sustos. Só parecia. Logo aos 47, Deyverson diminuiu aproveitando bola viva na área. Mesmo assim, o Galo não baixou o ritmo e chegou ao terceiro gol aos 61 minutos: Dudu recebeu na área e bateu no canto para fazer 3 a 1.

A virada de chave do Fortaleza começou aos 62 minutos, quando o VAR confirmou o pênalti de Ruan Tressoldi sobre Gastón Ávila. Deyverson converteu e recolocou o time na disputa. A partir daí, o Fortaleza cresceu, ganhou volume e passou a empurrar o Atlético para trás. A equipe foi feita nos ajustes à beira do campo, com substituições certeiras e uma leitura clara do jogo por parte da comissão técnica, dando mais profundidade pelos lados e explorando a bola aérea.

O empate veio aos 93 minutos. Mancuso puxou a jogada pela direita, achou Deyverson no centro da área, e o atacante finalizou com tranquilidade para fechar seu hat-trick e decretar o 3 a 3.

Nos minutos finais, o jogo virou um toma-lá-dá-cá. Fausto Vera acertou a trave pelo Atlético, enquanto Mancuso tentou de longe pelo Fortaleza. Nada que mudasse o placar.

<strong>Situação na tabela</strong>

Com o empate, o Atlético-MG perde a chance de se aproximar da parte de cima e segue preso no bloco intermediário, oscilando entre o grupo que olha para Libertadores e o que começa a se preocupar com aproximação indesejada. O ataque produz, mas a defesa mantém um padrão de vacilo que pesa semana após semana.

O Fortaleza valoriza o resultado. O ponto fora de casa, ainda mais revertendo um 3 a 1 contra, dá moral para o elenco e reforça a força competitiva do time. A atuação de Deyverson recoloca o atacante entre os destaques do campeonato e ajuda a equipe a se manter viva na briga por vaga em competição internacional.`,
        imageUrl: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/deyverson-cuiaba-fortaleza-brasileirao-e1699831932972.jpg?w=1220&h=674&crop=1',
        author: 'Análise 520',
        publishedAt: generateRecentDate(5, 21, 45),
        isFeatured: true,
        views: 12500,
        likes: 450,
        hashtags: ['#Brasileirão', '#AtléticoMG', '#Fortaleza', '#Futebol', '#Deyverson'],
    },
    {
        id: 39,
        category: 'ACE 520',
        title: 'Auger-Aliassime supera Shelton em grande atuação e mantém chances no ATP Finals',
        slug: 'auger-aliassime-supera-shelton-em-grande-atuacao-e-mantem-chances-no-atp-finals',
        summary: 'O canadense Felix Auger-Aliassime mostrou força e controle emocional para vencer o norte-americano Ben Shelton, por 2 sets a 1, mantendo-se vivo na briga por uma vaga nas semifinais do ATP Finals 2025.',
        content: `O canadense Felix Auger-Aliassime mostrou força e controle emocional para vencer o norte-americano Ben Shelton nesta quarta-feira (12), em Turim, pela segunda rodada do ATP Finals 2025. Em uma partida eletrizante, o número 8 do mundo superou o quinto colocado do ranking por 7/6 (6), 4/6 e 7/5, em 2h35 de jogo.

O duelo foi equilibrado do início ao fim, com ambos apostando na potência do saque e na pressão constante em cima da devolução. Auger-Aliassime foi mais consistente nos momentos decisivos, salvando break points importantes e aproveitando as falhas do adversário na reta final do terceiro set.

Nos números, o canadense foi levemente superior: 9 aces, 80% de aproveitamento no primeiro saque e 74% dos pontos ganhos com o segundo serviço. Shelton, por sua vez, marcou 7 aces, mas viu o rendimento cair nos games de maior pressão — especialmente quando sacava para forçar o tie-break no último set.

A vitória mantém Auger-Aliassime vivo na briga por vaga nas semifinais, mostrando evolução no piso rápido indoor e mais confiança após uma temporada irregular. Shelton, que vinha de boa estreia, precisará reagir na última rodada para continuar sonhando com a classificação.`,
        imageUrl: 'https://www.atptour.com/-/media/images/news/2023/11/15/auger-aliassime-turin-2023-wednesday-1.jpg',
        author: 'Análise 520',
        publishedAt: generateRecentDate(6, 18, 0),
        isFeatured: false,
        views: 10500,
        likes: 290,
        hashtags: ['#ATPFinals', '#Tênis', '#AugerAliassime', '#Shelton'],
    }
];