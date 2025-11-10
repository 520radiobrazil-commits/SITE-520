import { Article } from './types';

// As datas de publicação agora são timestamps ISO 8601 estáticos para representar
// momentos de publicação reais e fixos, conforme solicitado. Em um sistema real,
// estes valores seriam gerados no momento da publicação por uma função como
// a `capturePublicationTimestamp` presente em `utils/time.ts`.

export const MOCK_ARTICLES: Article[] = [
    {
        id: 30,
        category: 'REPÓRTER 520',
        title: 'Brasil empata com Zâmbia, leva gol olímpico, mas termina em primeiro no grupo do Mundial Sub-17',
        slug: 'brasil-empata-com-zambia-mas-termina-em-primeiro-grupo-mundial-sub-17',
        summary: 'A Seleção Brasileira Sub-17 empatou com a Zâmbia por 1 a 1 e, mesmo com o tropeço, garantiu a primeira colocação do Grupo H no Mundial da categoria, avançando para o mata-mata.',
        content: `A Seleção Brasileira Sub-17 empatou por 1 a 1 com a Zâmbia, nesta segunda-feira (10), pela terceira rodada da fase de grupos da Copa do Mundo Sub-17, disputada em Doha, no Catar.

Os africanos saíram na frente com um gol olímpico de Kalimina, ainda no primeiro tempo. O Brasil reagiu na segunda etapa e buscou o empate com Dell, após jogada de Ângelo pela direita.

Mesmo com o empate, o resultado foi suficiente para garantir o primeiro lugar do Grupo H. Brasil e Zâmbia terminaram empatados com sete pontos, mas a seleção brasileira ficou à frente pelo saldo de gols — 11 contra 5. Antes do duelo decisivo, a equipe comandada por Carlos Eduardo Patetuci já havia goleado Honduras (7 a 0) e Indonésia (4 a 0).

Durante o jogo, o Brasil encontrou dificuldades diante da marcação intensa dos africanos. O goleiro João Pedro teve atuação decisiva, evitando o que seria o segundo gol da Zâmbia. O empate veio apenas aos 35 minutos do segundo tempo, garantindo a liderança do grupo e a tranquilidade na classificação.

Com o fim da fase de grupos, o Brasil agora aguarda a definição dos confrontos da próxima fase do torneio. O formato do mata-mata reúne os dois melhores de cada grupo e os oito melhores terceiros colocados, totalizando 32 seleções.`,
        imageUrl: 'https://www.olimpiadatododia.com.br/wp-content/uploads/2025/11/brasil-zambia-copa-mundo-sub-17.png',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-10T15:10:00Z',
        isFeatured: true,
        views: 12300,
        hashtags: ['#SeleçãoSub17', '#MundialSub17', '#Futebol'],
    },
    {
        id: 29,
        category: 'MATCHDAY 520',
        title: 'Rodrygo pode deixar o Real Madrid e mira a Premier League',
        slug: 'rodrygo-pode-deixar-real-madrid-e-mira-premier-league',
        summary: 'O atacante brasileiro do Real Madrid avalia propostas da Premier League para a janela de janeiro, buscando mais minutos em campo após a chegada de novos reforços no clube espanhol.',
        content: `O atacante Rodrygo pode estar de saída do Real Madrid. De acordo com informações da imprensa espanhola, o brasileiro vem sendo pouco aproveitado pelo técnico Carlo Ancelotti e deve avaliar novas possibilidades na janela de transferências de janeiro.

Embora o jogador não esteja oficialmente no mercado, o clube merengue está disposto a ouvir propostas. Caso decida sair, Rodrygo deve priorizar uma transferência para a Premier League, onde há clubes interessados em contar com o futebol do atacante.

Rodrygo chegou ao Real Madrid em 2019, vindo do Santos, e conquistou títulos importantes, como a Liga dos Campeões, o Campeonato Espanhol e o Mundial de Clubes da FIFA. No entanto, a chegada de novos nomes ofensivos ao elenco — como Kylian Mbappé e Endrick — acabou reduzindo seu espaço na equipe titular.

A expectativa é de que as conversas sobre o futuro do atacante ganhem força nas próximas semanas, à medida que se aproxima a reabertura do mercado europeu.`,
        imageUrl: 'https://i.guim.co.uk/img/media/562c32efdd39dda57994df2f43454bbdde30d52f/0_0_3832_2300/master/3832.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e0d401c5d920d9145d056dc28d324aaa',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-10T14:55:00Z',
        isFeatured: true,
        views: 11500,
        hashtags: ['#RealMadrid', '#Rodrygo', '#PremierLeague', '#MercadoDaBola'],
    },
    {
        id: 28,
        category: 'REPÓRTER 520',
        title: 'Seleção Brasileira desembarca em Londres para os últimos amistosos de 2025',
        slug: 'selecao-brasileira-desembarca-em-londres-para-ultimos-amistosos-de-2025',
        summary: 'Comandados de Carlo Ancelotti se apresentam em Londres para os amistosos contra Senegal e Tunísia, fechando a temporada de 2025.',
        content: `Os convocados da Seleção Brasileira começaram a chegar neste domingo (9) em Londres, capital da Inglaterra, para os dois últimos compromissos do ano. Sob o comando do técnico Carlo Ancelotti, o Brasil vai disputar dois amistosos que encerram a temporada 2025 e servem como preparação para a Copa do Mundo de 2026.

O primeiro jogo será no próximo sábado (15), contra o Senegal, no Emirates Stadium, às 13h (horário de Brasília). Já o segundo confronto acontece no dia 18, diante da Tunísia, às 16h30 (de Brasília), em Lille, na França.

Entre os primeiros a desembarcar em solo inglês estão o goleiro Bento (Al-Nassr, da Arábia Saudita) e o atacante Richarlison, que atua no Tottenham e mora em Londres. Membros da comissão técnica também chegaram à capital britânica no sábado (8), onde acompanharam partidas da Premier League.

Nesta segunda-feira (10), Ancelotti comanda o primeiro treino da equipe no Centro de Treinamento do Arsenal, dando início à reta final da preparação. Os jogadores que atuam no Brasil devem se apresentar na terça-feira (11).`,
        imageUrl: 'https://static.wixstatic.com/media/ab590b_61abd4ccf2ab4b5f9148291974f807f7~mv2.jpg/v1/fill/w_764,h_463,al_c,lg_1,q_80/ab590b_61abd4ccf2ab4b5f9148291974f807f7~mv2.jpg',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-10T11:30:00Z',
        isFeatured: true,
        views: 9200,
        hashtags: ['#SeleçãoBrasileira', '#Futebol', '#Ancelotti'],
    },
    {
        id: 27,
        category: 'REPÓRTER 520',
        title: 'Atlético Ottawa é campeão da Canadian Premier League com gol de bicicleta em meio à neve',
        slug: 'atletico-ottawa-e-campeao-da-canadian-premier-league-com-gol-de-bicicleta-em-meio-a-neve',
        summary: 'Filial do Atlético de Madrid no Canadá conquista título inédito da Canadian Premier League em final marcada por forte nevasca e um golaço de bicicleta.',
        content: `O Atlético Ottawa, filial do Atlético de Madrid no Canadá, viveu um dia histórico ao conquistar o título da Canadian Premier League em condições bem diferentes das tradicionais. A final foi disputada debaixo de uma forte nevasca, que chegou a interromper o jogo logo no início.

Os próprios jogadores precisaram ajudar na remoção do gelo com pás para que a bola pudesse rolar novamente. E valeu a pena: a partida terminou com um golaço de bicicleta, selando o título em grande estilo.

O triunfo consolida o projeto do clube espanhol no futebol canadense, que segue em crescimento nos últimos anos. Com a conquista, o Atlético Ottawa reforça sua posição como uma das equipes mais fortes do país e mostra que o espírito “colchonero” atravessou o Atlântico — e resistiu até ao frio intenso de Ottawa.`,
        imageUrl: 'https://i.cbc.ca/ais/5ac4ed65-c25f-4dbe-8605-a36319800041,1762733126819/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C406%2C7795%2C4384%29%3B',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-09T22:00:00Z',
        isFeatured: false,
        views: 8500,
        hashtags: ['#FutebolCanadense', '#AtléticoOttawa', '#CPL'],
    },
    {
        id: 26,
        category: 'VOLTA RÁPIDA',
        title: 'Moreira vence e fica a um passo do título da Moto2',
        slug: 'moreira-vence-e-fica-a-um-passo-do-titulo-da-moto2',
        summary: 'O brasileiro Diogo Moreira venceu o GP de Portugal e ficou a um passo do título da Moto2, abrindo 24 pontos de vantagem para a etapa final em Valência.',
        content: `O brasileiro <strong>Diogo Moreira</strong> deu um passo gigante rumo ao título da <strong>Moto2</strong> neste domingo (9), ao vencer o <strong>Grande Prêmio de Portugal</strong>, em Portimão. A vitória colocou o piloto da <strong>Italtrans Racing Team</strong> com <strong>24 pontos de vantagem</strong> sobre <strong>Manuel Gonzalez</strong> (Liqui Moly Dynavolt Intact GP), restando apenas a etapa decisiva em <strong>Valência</strong>, no próximo fim de semana.

Largando da <strong>pole position</strong>, Moreira fez uma corrida sólida e estratégica. Ele perdeu a liderança nas voltas iniciais para o holandês <strong>Collin Veijer</strong> (Red Bull KTM Ajo), mas manteve a calma e reassumiu a ponta nas voltas finais — justamente no momento em que mais precisava pontuar.

Veijer ficou com o segundo lugar e conquistou seu <strong>primeiro pódio na Moto2</strong>, enquanto o colombiano <strong>David Alonso</strong> (CFMOTO Inde Aspar Team) completou o top 3, marcando o <strong>terceiro pódio consecutivo</strong> da temporada.

Com o sexto lugar, Gonzalez manteve vivas as chances matemáticas de título, mas agora depende de um verdadeiro milagre em Valência: precisa vencer e torcer para que Moreira não chegue entre os 14 primeiros.

A <strong>Fantic Racing</strong> também teve motivos pra comemorar — com <strong>Aron Canet</strong> em quarto e <strong>Barry Baltus</strong> em quinto, a equipe garantiu o <strong>título de construtores</strong> da categoria.

A decisão da <strong>Moto2 2025</strong> acontece no <strong>Circuito Ricardo Tormo</strong>, em Valência, no próximo fim de semana. E, se tudo correr dentro do esperado, o Brasil pode voltar a ver um campeão mundial nas pistas do Mundial de Motovelocidade.`,
        imageUrl: 'https://cdn.crash.net/2025-11/doigo-moreira-moto2-2025-portugal.jpg?width=1600&aspect_ratio=16:9',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-10T14:40:00Z',
        isFeatured: false,
        views: 17200,
        hashtags: ['#Moto2', '#DiogoMoreira', '#Motovelocidade'],
    },
    {
        id: 25,
        category: 'SUPERSET 520',
        title: 'Praia Clube domina Joinville Vôlei e vence por 3 a 1 na Superliga Feminina',
        slug: 'praia-clube-domina-joinville-volei-e-vence-por-3-a-1-na-superliga-feminina',
        summary: 'O Praia Clube confirmou o favoritismo e derrotou o Joinville Vôlei por 3 sets a 1, mantendo a invencibilidade na competição após reagir com autoridade.',
        content: `O Praia Clube confirmou o favoritismo e derrotou o Joinville Vôlei por 3 sets a 1 (22/25, 25/20, 25/17 e 25/19) neste domingo (9), em Uberlândia, pela 4ª rodada da Superliga Feminina 2025. Mesmo saindo atrás no placar, o time mineiro reagiu com autoridade e manteve a invencibilidade na competição.

O Joinville surpreendeu no primeiro set, aproveitando erros do Praia e impondo um ritmo agressivo no saque e na defesa. Mas, a partir do segundo set, o equilíbrio se quebrou: o time da casa ajustou o passe, explorou bem as jogadas rápidas com as centrais e contou com grande atuação da ponteira dominicana Brayelin Martínez, principal destaque da partida.

O técnico do Praia, Paulo Coco, elogiou a postura do grupo após o jogo:

<blockquote>“Sabíamos que o Joinville vinha embalado e com muita energia. Foi importante manter a calma depois do primeiro set. A equipe reagiu bem e mostrou maturidade”, afirmou.</blockquote>

Do lado catarinense, o treinador Henrique Furtado reconheceu a superioridade das adversárias:

<blockquote>“Fizemos um bom primeiro set, mas o volume e a regularidade do Praia pesaram. Vamos seguir evoluindo”, disse.</blockquote>

Nas redes, torcedores do Praia destacaram a consistência do time:

<blockquote>“Depois que engrenou, o Praia foi avassalador”, escreveu um fã em um grupo de discussão.</blockquote><blockquote>Já entre os torcedores de Joinville, o sentimento foi de otimismo com a entrega da equipe: “Perdemos, mas mostramos que podemos competir de igual pra igual com as favoritas”.</blockquote>

Com o resultado, o Praia Clube chega a 11 pontos e se mantém entre os líderes da Superliga. O Joinville, com 3 pontos, segue na parte intermediária da tabela.

O próximo compromisso do Praia será contra o Barueri, fora de casa. Já o Joinville volta à quadra diante do Fluminense, buscando reabilitação.`,
        imageUrl: 'https://s2-ge.glbimg.com/3hFHHQ1W8PAR_LLa7hb5ielgG3Q=/0x0:1911x1274/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/Q/N/ULlLSWTAWYxwXXa50tCQ/54912632321-5f0da1c9fe-k.jpg',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-09T19:30:00Z',
        isFeatured: false,
        views: 13450,
        hashtags: ['#Volei', '#Superliga', '#PraiaClube'],
    },
    {
        id: 24,
        category: 'VOLTA RÁPIDA',
        title: 'Lando Norris domina o GP de São Paulo e amplia liderança no Mundial de F1 2025',
        slug: 'lando-norris-domina-gp-sao-paulo-e-amplia-lideranca-f1-2025',
        summary: 'Britânico da McLaren vence em Interlagos com autoridade e se aproxima do título da temporada.',
        content: `O britânico Lando Norris foi o grande nome do fim de semana em Interlagos. O piloto da McLaren conquistou uma vitória dominante no GP de São Paulo de 2025, disputado neste domingo (9), e ampliou ainda mais sua vantagem na liderança do Campeonato Mundial de Pilotos.

Sob forte calor e diante de 304 mil torcedores, Norris controlou a prova do início ao fim, cruzando a linha de chegada 9,9 segundos à frente de Kimi Antonelli (Mercedes). O italiano de 19 anos subiu ao pódio pela segunda vez na temporada, enquanto Max Verstappen (Red Bull) completou em terceiro após uma impressionante recuperação — o holandês havia largado dos boxes.

Com o resultado, Norris chega a 389 pontos, abrindo 52 de vantagem para Verstappen. A McLaren também manteve a ponta no Mundial de Construtores, somando agora 612 pontos, seguida por Mercedes e Red Bull.

<strong>Caos na largada e domínio absoluto da McLaren</strong>

A corrida começou agitada: o brasileiro Gabriel Bortoleto (Sauber) abandonou logo na primeira curva após toque com Lance Stroll (Aston Martin), o que provocou a entrada do safety car. Depois da relargada, Norris manteve a liderança sem ser ameaçado.

Oscar Piastri, companheiro de equipe, cruzou em quinto mesmo após uma penalidade de 10 segundos por toque em Antonelli, garantindo pontos valiosos para a McLaren.

Entre os abandonos estiveram Lewis Hamilton e Charles Leclerc, ambos da Ferrari, que enfrentaram problemas mecânicos e acidentes.

<strong>Resultado final – GP de São Paulo 2025</strong>

Lando Norris (McLaren) – 1h28m45s392
Kimi Antonelli (Mercedes) – +9.980s
Max Verstappen (Red Bull) – +10.684s
George Russell (Mercedes) – +14.803s
Oscar Piastri (McLaren) – +14.422s
Oliver Bearman (Haas) – +27.611s
Liam Lawson (Red Bull) – +48.378s
Isack Hadjar (Racing Bulls) – +49.017s
Nico Hulkenberg (Haas) – +49.522s
Pierre Gasly (Alpine) – +49.994s

<strong>Declarações e clima em Interlagos</strong>

“O carro estava perfeito e o público brasileiro fez essa corrida ser especial. Interlagos sempre entrega algo inesquecível”, disse Norris após a vitória.

O evento ainda contou com a presença de Thiaguinho, que cantou o Hino Nacional, e recorde de público no autódromo paulistano.

Agora, restando apenas duas etapas – Las Vegas e Abu Dhabi, Norris está cada vez mais perto do título mundial.`,
        imageUrl: 'https://veja.abril.com.br/wp-content/uploads/2025/11/000_83JC74B.jpg?crop=1&resize=1212,909',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-10T15:05:00Z',
        isFeatured: false,
        views: 28950,
        hashtags: ['#F1', '#LandoNorris', '#GPBrasil'],
    },
    {
        id: 23,
        category: 'FUTEBOL SHOW 520',
        title: 'Ceará vence o Corinthians em Itaquera e respira na luta contra o rebaixamento',
        slug: 'ceara-vence-corinthians-em-itaquera-e-respira-na-luta-contra-rebaixamento',
        summary: 'Gol de Antonio Galeano define a partida na Neo Química Arena; Timão perde invencibilidade em casa e Vozão ganha fôlego na luta contra o rebaixamento.',
        content: `O Ceará conquistou uma vitória fundamental na luta contra o rebaixamento ao bater o Corinthians por 1 a 0, neste domingo (9), na Neo Química Arena, pela trigésima terceira rodada do Brasileirão Betano 2025. O único gol da partida foi marcado por Antonio Galeano, ainda no primeiro tempo, após rápido contra-ataque.

Com o resultado, o Vozão chegou a 38 pontos, ganhando fôlego na briga para se manter na elite. Já o Corinthians, que vinha em boa fase, perdeu a chance de encostar no G-8 e permanece com 42 pontos, em 10º.

<strong>O jogo</strong>

O primeiro tempo começou equilibrado, mas o Ceará se mostrou mais perigoso nas transições ofensivas. Aos <strong>31 minutos</strong>, Antonio Galeano recebeu cruzamento de Pedro Henrique e finalizou no canto direito, sem chances para o goleiro Felipe Longo.

O Corinthians até chegou a balançar as redes com <strong>Gustavo Henrique</strong>, mas o gol foi anulado pelo VAR por impedimento. A partir daí, o time paulista teve mais posse, mas pouco poder de infiltração.

Na etapa final, o técnico corintiano tentou mudar o panorama com as entradas de Ángel Romero e Gui Negão, mas o sistema defensivo do Ceará, bem postado com Willian Machado e Fabiano Souza, conseguiu segurar a pressão. Nos minutos finais, o goleiro Bruno Ferreira apareceu com boas defesas, garantindo os três pontos para os visitantes.

<strong>Destaques da partida</strong>

<strong>Antonio Galeano (Ceará)</strong> – Decisivo, marcou o gol da vitória e foi o jogador mais perigoso do ataque.
<strong>Bruno Ferreira (Ceará)</strong> - Seguro, fez defesas importantes e passou confiança à defesa.
<strong>Rodrigo Garro (Corinthians)</strong> – Tentou organizar o time e criou as principais jogadas ofensivas do Timão.

Com o resultado, o Ceará sobe para a 12ª posição, respirando fora do Z-4. O Corinthians se mantém em 10º, e vê o sonho de vaga na Copa Sul-Americana ameaçado.`,
        imageUrl: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/11/galeano-ceara-e1762719156989.jpg?w=419&h=283&crop=0',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-08T20:15:00Z',
        isFeatured: false,
        views: 16780,
        hashtags: ['#Ceará', '#Corinthians', '#Brasileirão'],
    },
    {
        id: 22,
        category: 'REPÓRTER 520',
        title: 'Ancelotti convoca Seleção para amistosos de novembro com novidades e polêmicas',
        slug: 'ancelotti-convoca-selecao-para-amistosos-de-novembro-com-novidades-e-polemicas',
        summary: 'Luciano Juba ganha primeira chance, Richarlison é mantido e nomes como Thiago Silva e Pedro ficam de fora da lista de Ancelotti.',
        content: `O técnico Carlo Ancelotti divulgou nesta segunda-feira (3) a lista de convocados da Seleção Brasileira para a última Data Fifa do ano, com amistosos contra Senegal (dia 15, em Londres) e Tunísia (dia 18, em Lille). A convocação trouxe estreias, retornos e algumas decisões contestadas.

Entre os destaques, o lateral Luciano Juba, do Bahia, foi chamado pela primeira vez e celebrou nas redes o “sonho de vestir a Amarelinha”. Outro nome que volta a aparecer é o volante Fabinho, agora no Al-Ittihad. No ataque, Vitor Roque, do Palmeiras, segue entre os jovens observados para o ciclo até a Copa de 2026.

Mas o que mais repercutiu foi a manutenção de nomes questionados, como Richarlison e Hugo Souza, e a ausência de veteranos como Thiago Silva e Philippe Coutinho. Nas redes, torcedores reagiram com ironia à convocação, apontando “empresários fortes” por trás de algumas escolhas — crítica que vem se repetindo desde o início da gestão Ancelotti.

<strong>🧠 Análise – por Equipe RADIO520, setorista da Seleção Brasileira</strong>

A convocação de Ancelotti reflete um momento de transição sem ruptura. O treinador parece querer manter uma base conhecida, mesmo que parte dela não viva boa fase nos clubes. Richarlison, por exemplo, tem números modestos no Tottenham, mas segue como homem de confiança do técnico. Já o chamado de Hugo Souza, reserva no Flamengo, expõe um olhar mais interno para o grupo do que para o desempenho recente.

O lado positivo está na abertura a novos nomes, como Luciano Juba e Vitor Roque, que trazem vitalidade e fome de espaço num elenco envelhecido em setores-chave. Ainda assim, a ausência de jogadores como Pedro, Rafael (São Paulo) e até Endrick, em boa fase no Real Madrid, levanta dúvidas sobre os critérios da comissão.

Ancelotti deve usar os dois amistosos para definir as últimas peças do elenco rumo à Copa de 2026, mas, pela reação da torcida, a Seleção chega em novembro com mais desconfiança do que empolgação.`,
        imageUrl: 'https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/11/O-tecnico-da-Selecao-Brasileira-Carlo-Ancelotti-scaled-aspect-ratio-512-320.jpg',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-08T12:00:00Z',
        isFeatured: false,
        views: 14500,
        hashtags: ['#SeleçãoBrasileira', '#Ancelotti', '#Futebol'],
    },
    {
        id: 21,
        category: 'FUTEBOL SHOW 520',
        title: 'Palmeiras vence o Juventude fora de casa e reassume a liderança do Brasileirão',
        slug: 'palmeiras-vence-juventude-fora-de-casa-e-reassume-lideranca-brasileirao',
        summary: 'O Palmeiras voltou ao topo do Brasileirão Betano 2025. Com atuação sólida e eficiente, o time de Abel Ferreira venceu o Juventude por 2 a 0 no Alfredo Jaconi e reassumiu a liderança do campeonato. Bruno Rodrigues e Felipe Anderson marcaram os gols da partida.',
        content: `Verdão faz 2 a 0 em Caxias do Sul, chega a 65 pontos e ultrapassa o Flamengo; Bruno Rodrigues e Felipe Anderson marcam os gols da vitória

O Palmeiras está novamente na liderança do Brasileirão Betano 2025. Neste domingo (2), o time comandado por Abel Ferreira venceu o Juventude por 2 a 0, em Caxias do Sul, e chegou a 65 pontos, ultrapassando o Flamengo, que soma 64.

Com uma postura dominante desde o início, o Verdão controlou o ritmo da partida e mostrou maturidade para lidar com as condições do jogo e o gramado pesado do Alfredo Jaconi. A equipe paulista teve mais posse de bola, criou as melhores oportunidades e foi precisa nas finalizações.

O primeiro gol saiu aos 24 minutos da etapa inicial. Bruno Rodrigues recebeu ótimo passe de Raphael Veiga e finalizou com categoria para abrir o placar. No segundo tempo, aos 16 minutos, Felipe Anderson ampliou após jogada pelo lado direito com Khellven, definindo o resultado.

Defensivamente, o Palmeiras teve mais uma atuação segura. O goleiro Carlos Miguel foi o destaque da partida, com defesas importantes e ótima leitura de jogo. Ele recebeu nota 9.7 no Sofascore, a mais alta da rodada até o momento.

O Juventude, por outro lado, segue em situação crítica. A equipe de Thiago Carpini estacionou nos 26 pontos e ocupa a décima nona colocação, dentro da zona de rebaixamento. O time gaúcho teve dificuldades para reagir e praticamente não incomodou o gol palmeirense.

<strong>DESTAQUES INDIVIDUAIS</strong>

Carlos Miguel (Palmeiras) – Nota 9.7. Melhor em campo, decisivo e seguro durante todo o jogo.
Felipe Anderson – Nota 8.5. Ativo no meio-campo, autor do segundo gol.
Bruno Rodrigues – Nota 8.0. Abriu o placar e deu trabalho à defesa do Juventude.
Bruno Fuchs – Nota 8.2. Firme na defesa e com boa saída de bola.

<strong>NÚMEROS DO JOGO</strong>
Estatística: Juventude / Palmeiras
Posse de bola: 42% / 58%
Finalizações: 7 / 14
Chutes no gol: 2 / 6
Escanteios: 4 / 6
Cartões amarelos: 3 / 0

<strong>SITUAÇÃO NA TABELA</strong>

Com a vitória, o Palmeiras chegou a 65 pontos em 30 jogos, com 21 vitórias, 2 empates e 7 derrotas, além de saldo de +29 gols. O Flamengo é o segundo, com 64 pontos e saldo +43.
O Juventude é o décimo nono colocado, com 26 pontos e saldo de -34.

<strong>PRÓXIMOS JOGOS</strong>

Palmeiras x Athletico-PR — Quarta-feira (5), às 21h30, no Allianz Parque
Cruzeiro x Juventude — Quinta-feira (6), às 19h, no Mineirão.`,
        imageUrl: 'https://lncimg.lance.com.br/cdn-cgi/image/width=850,quality=75,format=webp/uploads/2025/11/palmeiras_x_juventude-1920x1280.jpg',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-07T19:45:00Z',
        isFeatured: false,
        views: 18542,
        hashtags: ['#Palmeiras', '#Brasileirão', '#Futebol'],
    },
    {
        id: 20,
        category: 'ACE 520',
        title: 'Sinner soberano em Paris: a coroação de um número 1 em plena forma',
        slug: 'sinner-soberano-em-paris-a-coroacao-de-um-numero-1-em-plena-forma',
        summary: 'Jannik Sinner fecha o ano como o homem a ser batido após dominar o Masters 1000 de Paris. Confira análise completa na Rádio 520.',
        content: `Jannik Sinner viveu um domingo daqueles que marcam uma carreira. O italiano conquistou o Masters 1000 de Paris, vencendo Felix Auger-Aliassime numa final de altíssimo nível técnico e emocional. Mais do que um troféu — o quinto Masters 1000 da trajetória —, o título devolve a Sinner o posto de número 1 do mundo, coroando uma temporada que tem sido pura consistência, maturidade e agressividade tática.

O jogo começou equilibrado, com o canadense tentando se impor no saque e explorando o forehand pesado. Mas Sinner respondeu no estilo que o tornou um fenômeno: devoluções profundas, movimentação impecável e uma leitura de jogo quase cirúrgica. A partir do segundo set, o italiano ditou o ritmo, acelerou quando precisou e mostrou aquele controle emocional de quem entende o tamanho do momento.

O que impressiona em Sinner é o combo mentalidade + execução. Ele não se apressa, não se desorganiza e, quando encontra a brecha, ataca com convicção. O resultado é o reflexo de uma evolução monstruosa, sustentada por um físico cada vez mais preparado e um repertório de jogadas que poucos no circuito conseguem acompanhar.

Com o título em Paris, Sinner fecha o ano como o homem a ser batido. E não é só por causa do ranking: é pela solidez, pela fome competitiva e pela maturidade de quem aprendeu a lidar com a pressão de ser favorito.

Se antes havia dúvida sobre quem seria o próximo grande dominador do circuito, o ATP de Paris serviu como resposta: Jannik Sinner chegou ao topo — e, do jeito que está jogando, parece disposto a ficar por lá um bom tempo.`,
        imageUrl: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/11/sinner-paris.jpg?w=1200&h=900&crop=1',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-07T11:20:00Z',
        isFeatured: false,
        views: 16230,
        ogTitle: 'Sinner soberano em Paris',
        ogDescription: 'O número 1 do mundo confirma o domínio em Paris — veja na Rádio 520.',
        ogImageUrl: 'https://radio520.com.br/img/sinner-paris.jpg',
        hashtags: ['#Sinner', '#Tênis', '#ATPParis'],
    },
    {
        id: 19,
        category: 'PODCASTS 520',
        title: 'Barrinhas de Cereal: Aliadas ou Vilãs do seu Treino?',
        slug: 'barrinhas-de-cereal-aliadas-ou-vilas-do-seu-treino',
        summary: 'Neste episódio do Viva Melhor, Lu Skylark fala sobre as famosas barrinhas de cereal.',
        content: `No novo episódio do podcast Viva Melhor, a especialista Lu Skylark mergulha no universo das barrinhas de cereal, um lanche popular entre praticantes de atividades físicas. Será que elas são realmente benéficas para o seu treino?

Lu explica que a resposta depende muito da composição da barrinha e do momento em que é consumida. "Nem toda barrinha é igual. Algumas são ricas em açúcares e gorduras, funcionando mais como um doce do que como um suplemento", alerta.

Durante o bate-papo, ela dá dicas práticas para escolher as melhores opções:

**Pré-treino:** Busque barrinhas com carboidratos de rápida absorção para fornecer energia imediata. Frutas secas e um pouco de mel na composição são boas escolhas.

**Pós-treino:** O foco deve ser na recuperação muscular. Barrinhas com maior teor de proteínas, como as que contêm whey protein ou fontes vegetais, são ideais.

**Cuidado com os rótulos:** Fique de olho em ingredientes como xarope de milho, gordura hidrogenada e excesso de conservantes. Quanto mais natural a lista de ingredientes, melhor.

O episódio é um guia completo para quem quer usar as barrinhas de cereal de forma inteligente, transformando-as em verdadeiras aliadas para alcançar mais energia, performance e equilíbrio na rotina de treinos. Dê o play e descubra como fazer escolhas mais saudáveis!`,
        imageUrl: 'https://images.unsplash.com/photo-1599599810694-b5b37304c357?q=80&w=1200&auto=format&fit=crop',
        audioUrl: 'https://open.spotify.com/episode/7nKI5Fdpn0XdRwdvhdcAa3?si=bAGsFTWDRrmRYgrLg',
        author: 'Equipe RADIO520',
        publishedAt: '2025-11-06T16:00:00Z',
        isFeatured: false,
        views: 9800,
        hashtags: ['#Saúde', '#Nutrição', '#Podcast'],
    },
];