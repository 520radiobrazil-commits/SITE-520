import { Article } from './types';

// Helper function to generate realistic, sequential past dates
const generateTimestamps = (count: number) => {
  const now = new Date();
  const timestamps = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(now);
    // Subtract hours incrementally to create a realistic timeline of posts
    const hoursToSubtract = i * 4 + Math.floor(Math.random() * 3);
    d.setHours(d.getHours() - hoursToSubtract);
    d.setMinutes(d.getMinutes() - Math.floor(Math.random() * 60));
    timestamps.push(d.toISOString());
  }
  return timestamps;
};

const articleTimestamps = generateTimestamps(31);

export const MOCK_ARTICLES: Article[] = [
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
        imageUrl: 'https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/11/comissao-tecnica-selecao-brasileira-aspect-ratio-512-320.jpg',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[0],
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
        imageUrl: 'https://s3.amazonaws.com/assets-fluminense/uploads%2F1763079275527-54922240216_29117bfc3d_c.jpg',
        author: 'Análise 520',
        publishedAt: articleTimestamps[1],
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
        imageUrl: 'https://s2-oglobo.glbimg.com/hfjWmOY9u5eFjuyT1azA-7hEp_w=/0x0:544x429/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/G/g/WByYZVSWOvlggo8yJmOA/g5qndsfxyae3qxv.jpg',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[2],
        updatedAt: new Date(new Date(articleTimestamps[1]).getTime() + (1000 * 60 * 30)).toISOString(),
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
        publishedAt: articleTimestamps[3],
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
        publishedAt: articleTimestamps[4],
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
        imageUrl: 'https://static.independentespanol.com/2025/11/13/03/MAGIC-KNICKS_92360.jpg?width=1200&height=900&fit=crop',
        author: 'Análise 520',
        publishedAt: articleTimestamps[5], 
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
        imageUrl: 'https://conteudo.imguol.com.br/c/esporte/4f/2025/11/12/deyverson-marcou-em-atletico-mg-x-fortaleza-duelo-do-brasileirao-1762998183176_v2_750x421.jpg',
        author: 'Análise 520',
        publishedAt: articleTimestamps[6], 
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
        imageUrl: 'https://www.atptour.com/-/media/images/news/2025/11/12/15/05/auger-aliassime-turin-2025-wednesday-1.jpg',
        author: 'Análise 520',
        publishedAt: articleTimestamps[7], 
        isFeatured: true,
        views: 10500,
        likes: 320,
        hashtags: ['#ATPFinals', '#Tênis', '#AugerAliassime', '#Shelton'],
    },
    {
        id: 38,
        category: 'LIGA 520',
        title: 'Thunder atropela Warriors e confirma força no Oeste',
        slug: 'thunder-atropela-warriors-e-confirma-forca-no-oeste',
        summary: 'O Oklahoma City Thunder não tomou conhecimento do Golden State Warriors, vencendo por 126 a 102 e reafirmando seu ótimo momento na temporada com uma atuação dominante.',
        content: `O Oklahoma City Thunder não tomou conhecimento do Golden State Warriors na noite desta terça-feira (11), vencendo por 126 a 102 em casa e reafirmando o ótimo momento na temporada. Foi uma atuação dominante do início ao fim — intensidade, rotação bem ajustada e um ataque que não deu descanso pra defesa californiana.

O time de Shai Gilgeous-Alexander, mais uma vez o cérebro e o motor do Thunder, ditou o ritmo do jogo com leitura apurada e um controle absurdo do pace. Ao redor dele, a juventude e energia do elenco de OKC fizeram a diferença: o time marcou forte, correu em transição e matou bolas importantes pra abrir vantagem ainda no terceiro quarto.

Do outro lado, os Warriors viveram uma noite pra esquecer. Mesmo com lampejos de Gary Payton II e o esforço de Gui Santos, a equipe mostrou fragilidade na defesa e pouca criatividade no ataque sem o brilho habitual de suas estrelas. A diferença física e a velocidade do Thunder pesaram — e muito.

O técnico Steve Kerr até tentou mexer nas rotações, apostando em Trayce Jackson-Davis e na movimentação da segunda unidade, mas o time não conseguiu reagir. O placar final refletiu bem o que foi a partida: domínio total do Thunder, que chega a 10 vitórias e apenas 1 derrota na temporada.

Com o resultado, o Oklahoma City se consolida entre as forças do Oeste e manda um recado claro: a era das promessas acabou, esse time já é realidade. Já o Golden State precisa achar respostas rápido se quiser seguir competitivo num Oeste cada vez mais equilibrado.`,
        imageUrl: 'https://okcthunderwire.usatoday.com/gcdn/authoring/authoring-images/2024/11/28/SOKC/76635499007-usatsi-24866913.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp',
        author: 'Análise 520',
        publishedAt: articleTimestamps[8],
        isFeatured: true,
        views: 11200,
        likes: 278,
        hashtags: ['#NBA', '#Thunder', '#Warriors', '#Basquete'],
    },
    {
        id: 37,
        category: 'RADIO520 NEWS',
        title: 'PAULISTÃO 2026: novo formato, datas e bastidores do torneio mais tradicional do país',
        slug: 'paulistao-2026-novo-formato-datas-bastidores',
        summary: 'A FPF definiu o novo formato do Paulistão 2026, que abandona os grupos por um sistema de liga com oito jogos na primeira fase. Os oito melhores avançam para o mata-mata.',
        content: `Os presidentes e representantes dos 16 clubes participantes do Paulistão 2026 se reuniram nesta terça-feira (11), no salão nobre da Mercado Livre Arena Pacaembu, para definir os detalhes da próxima edição do campeonato. O encontro marcou o Conselho Técnico da Federação Paulista e apresentou mudanças importantes no formato de disputa.

<strong>Novo modelo de competição</strong>

O Paulistão 2026 deixará de lado o formato tradicional de grupos e passará a ser disputado em um sistema de liga, com cada equipe realizando oito jogos na primeira fase. A ideia é aumentar o equilíbrio técnico e garantir confrontos diretos entre os principais clubes logo nas rodadas iniciais.

Os oito melhores colocados avançam para as quartas de final, que serão disputadas em jogo único, assim como as semifinais. A final ainda tem definição pendente: pode ser realizada em uma ou duas partidas, a depender da liberação de uma data extra no calendário.

Os dois últimos colocados serão rebaixados para a Série A2 do Campeonato Paulista.

<strong>Calendário</strong>

O torneio está previsto para começar em meados de janeiro e terminar no início de março de 2026. A competição será realizada em 11 datas, com a possibilidade de uma 12ª para a grande decisão. A federação pretende ajustar o calendário para que o Paulistão se encaixe nas novas diretrizes nacionais e internacionais do futebol.

<strong>Participantes e confrontos</strong>

Os 16 clubes confirmados terão confrontos equilibrados desde o início. O novo modelo garante clássicos logo na fase inicial — o que promete movimentar as torcidas e aumentar o interesse do público já nas primeiras rodadas.

Além dos quatro grandes — Corinthians, Palmeiras, São Paulo e Santos —, equipes tradicionais do interior como Bragantino, Ponte Preta, Mirassol, Novorizontino, Ituano, Guarani, Botafogo-SP, Portuguesa, Santo André, São Bernardo, Água Santa e Noroeste completam a lista.

<strong>Bastidores e repercussão</strong>

O clima do Conselho Técnico foi de consenso entre os dirigentes. A proposta de um formato mais dinâmico foi bem recebida por quem busca um campeonato mais emocionante e competitivo, sem longas fases de classificação.
Representantes dos clubes destacaram que o novo modelo traz mais relevância para cada jogo e reforça a tradição do Paulistão como o estadual mais disputado do país.

A federação também anunciou novidades operacionais, incluindo melhorias no uso do VAR e o impedimento semiautomático, que será implementado a partir das fases eliminatórias.

<strong>Expectativa</strong>

Com calendário enxuto, formato inspirado em competições internacionais e clássicos logo de cara, o Paulistão 2026 promete ser um torneio de alto nível técnico e com muita emoção desde a rodada 1.

A Rádio 520 vai acompanhar de perto todas as novidades, bastidores e reações dos clubes ao novo modelo do campeonato paulista.`,
        imageUrl: 'https://jpimg.com.br/uploads/2025/11/paulistao-2026-750x450.jpg',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[9], 
        isFeatured: true,
        views: 9500,
        likes: 195,
        hashtags: ['#Paulistão2026', '#FutebolPaulista', '#FPF'],
    },
    {
        id: 36,
        category: 'ACE 520',
        title: 'Carlos Alcaraz entra para a história com 50 vitórias sobre top 10',
        slug: 'carlos-alcaraz-entra-para-a-historia-com-50-vitorias-sobre-top-10',
        summary: 'O espanhol Carlos Alcaraz, aos 22 anos, se tornou o homem mais jovem a alcançar 50 vitórias contra jogadores do top 10, um feito que não acontecia desde Boris Becker.',
        content: `O espanhol Carlos Alcaraz segue colecionando marcas impressionantes no circuito mundial. Aos 22 anos, ele se tornou o homem mais jovem a alcançar 50 vitórias contra jogadores do top 10, um feito que não acontecia desde Boris Becker.

A marca reforça o domínio e a consistência do tenista, que vem se consolidando como uma das maiores estrelas da nova geração. Carismático, explosivo em quadra e dono de um estilo de jogo vibrante, Alcaraz tem conquistado fãs no mundo todo — e provado que o futuro do tênis já é o presente.

A conquista foi destacada pelo perfil especializado The Tennis Letter, que celebrou o feito nas redes sociais:

“Carlos Alcaraz se torna o homem mais jovem a conquistar 50 vitórias sobre top 10 desde Boris Becker. Apenas 22 anos, fazendo coisas inacreditáveis.”

Com essa marca, Alcaraz reforça seu status entre os gigantes do esporte e mostra que a nova era do tênis tem um novo líder — jovem, ousado e espanhol.

📻 Rádio 520 — Esporte, música e atitude.
Siga a 520 no X e fique por dentro das maiores histórias do esporte mundial.`,
        imageUrl: 'https://pbs.twimg.com/media/G5fGjEdbcAQ_H_N?format=jpg&name=large',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[10], 
        isFeatured: true,
        views: 8800,
        likes: 410,
        hashtags: ['#Alcaraz', '#Tênis', '#ATP', '#Recorde'],
    },
    {
        id: 35,
        category: 'POP NEWS',
        title: 'Roxette anuncia dois shows no Brasil em 2026',
        slug: 'roxette-anuncia-dois-shows-no-brasil-em-2026',
        summary: 'Turnê “Live – Back Again” marca o retorno triunfal de um dos nomes mais amados do pop mundial.',
        content: `O lendário Roxette está oficialmente de volta aos palcos — e o Brasil já está no mapa da turnê! O duo sueco, agora formado por Per Gessle e a cantora Lena Philipsson, confirmou duas apresentações no país em abril de 2026, dentro da turnê “Roxette: Live – Back Again”.

A nova formação celebra o legado do grupo que marcou gerações com hits como “It Must Have Been Love”, “Listen to Your Heart” e “The Look”, prometendo uma viagem nostálgica pelos anos dourados do pop, com uma produção moderna e cheia de emoção.

Segundo Gessle, a ideia é revisitar a energia original do Roxette, mas com uma nova abordagem, unindo clássicos e versões repaginadas que dialogam com o público atual. Lena Philipsson, uma das grandes vozes da Suécia, assume os vocais femininos em homenagem à inesquecível Marie Fredriksson, falecida em 2019.

O anúncio deixou os fãs em êxtase e reacendeu a chama de um dos nomes mais icônicos do pop internacional. Os detalhes sobre cidades, datas e venda de ingressos devem ser divulgados nas próximas semanas.

🎶 “O Roxette sempre teve uma conexão especial com o público brasileiro. Estamos empolgados para sentir essa energia novamente”, disse Per Gessle em nota oficial.`,
        imageUrl: 'https://www.estadao.com.br/resizer/v2/CUOUNI7A4JEZZAOMDNCPGEBFBQ.jpg?quality=80&auth=ecf8ffe515dff0fb38b87c777c2b4421036766812cfb0df1e8c2c5b8eba2d215&width=380',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[11],
        isFeatured: true,
        views: 520,
        likes: 95,
        hashtags: ['#Roxette', '#ShowNoBrasil', '#PopNews', '#Música'],
    },
    {
        id: 34,
        category: 'RADIO520 FASHION LEAGUE',
        title: 'AC Milan e Rossignol lançam coleção de ski que une estilo e performance',
        slug: 'ac-milan-rossignol-lancam-colecao-ski-estilo-performance',
        summary: 'O AC Milan se uniu à marca de equipamentos de inverno Rossignol para lançar uma coleção de ski que celebra a herança do clube com design moderno, combinando conforto e estilo.',
        content: `O AC Milan, sempre ligado no lifestyle além do futebol, se juntou à marca de equipamentos de inverno Rossignol para lançar uma coleção de ski que é puro estilo. A linha completa celebra a herança do clube e aposta em design moderno, pensada tanto para quem curte esportes de montanha quanto para momentos de lazer.

As peças trazem a identidade clássica do time, com o vermelho e preto predominando em jaquetas, calças e acessórios, e contam com detalhes que ressaltam a parceria, como logos visíveis da Rossignol e do AC Milan. Além da funcionalidade para quem enfrenta a neve, o destaque é a combinação de conforto e estilo, mostrando que moda e esportes podem caminhar juntos.

Para conferir toda a coleção, o AC Milan disponibilizou detalhes no link oficial acmi.land/ACM--Rossignol.

Se você curte esportes e moda, essa collab é perfeita para se inspirar e atualizar o guarda-roupa de inverno com atitude e personalidade.`,
        imageUrl: 'https://pbs.twimg.com/media/G5ZnidTXkAA9Q51?format=jpg&name=large',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[12],
        isFeatured: true,
        views: 1200,
        likes: 112,
        hashtags: ['#ACMilan', '#Rossignol', '#Fashion', '#Ski'],
    },
    {
        id: 19,
        category: 'PODCASTS 520',
        title: 'CORPINHO NO SHAPE PARA AS FESTAS. AINDA DÁ TEMPO?',
        slug: 'corpinho-no-shape-para-as-festas-ainda-da-tempo',
        summary: 'Neste episódio, Lu Skylark traz dicas práticas e reais pra quem quer dar aquele gás nas próximas semanas — alimentação equilibrada, treino com propósito e rotina que cabe no seu dia.',
        content: `Neste episódio, Lu Skylark traz dicas práticas e reais pra quem quer dar aquele gás nas próximas semanas — alimentação equilibrada, treino com propósito e rotina que cabe no seu dia. Nada de loucura, só foco, energia boa e autocuidado pra você chegar nas festas leve, confiante e cheio de disposição.

🌿 Vem com a gente e descubra como pequenas mudanças agora podem transformar seu fim de ano!`,
        imageUrl: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/staging/podcast_uploaded_episode400/42373070/42373070-1762867572566-14c8d66981609.jpg',
        audioUrl: 'https://open.spotify.com/episode/7zuoyrHDwK4A4DgQ7l26q1',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[13],
        isFeatured: false,
        views: 150,
        likes: 25,
        hashtags: ['#Saude', '#Fitness', '#BemEstar', '#Podcast'],
    },
    {
        id: 33,
        category: 'VOLTA RÁPIDA',
        title: 'Fórmula 3: Taito Kato é confirmado pela ART Grand Prix para a temporada 2026',
        slug: 'formula-3-taito-kato-confirmado-art-grand-prix-temporada-2026',
        summary: 'O piloto japonês Taito Kato foi anunciado oficialmente como novo piloto da ART Grand Prix para disputar a Fórmula 3 em 2026, reforçando a continuidade do trabalho entre piloto e equipe.',
        content: `O japonês Taito Kato foi anunciado oficialmente como novo piloto da ART Grand Prix para disputar a Fórmula 3 em 2026. O anúncio foi feito nas redes sociais da categoria nesta terça-feira (11).

Com a chegada de Kato, a equipe francesa completa sua formação para o próximo campeonato, restando apenas duas vagas em aberto no grid da F3.

Kato chega à categoria após uma boa temporada na FRECA (Formula Regional European Championship by Alpine), também correndo pela ART, o que reforça a continuidade do trabalho entre piloto e equipe.

“Estou muito animado com os novos desafios que nos esperam no próximo ano!”, declarou o jovem piloto.

A Fórmula 3 é o primeiro grande passo na #RoadToF1, o caminho das promessas do automobilismo rumo à Fórmula 1.`,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3MG4QSIBjbXzITfvtBoZeBlZNdrT8LvrfA&s',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[14],
        isFeatured: false,
        views: 1500,
        likes: 150,
        hashtags: ['#F3', '#ARTGrandPrix', '#TaitoKato', '#RoadToF1'],
    },
    {
        id: 32,
        category: 'FUTEBOL SHOW 520',
        title: 'América-MG vence Chapecoense fora de casa e respira na tabela',
        slug: 'america-mg-vence-chapecoense-fora-de-casa-e-respira-na-tabela',
        summary: 'Na noite de segunda-feira (10), o América-MG conquistou uma vitória importante sobre a Chapecoense por 1 a 0, na Arena Condá, pela trigésima sexta rodada do Brasileirão Série B.',
        content: `Na noite de segunda-feira (10), o América-MG conquistou uma vitória importante sobre a Chapecoense por 1 a 0, na Arena Condá, pela trigésima sexta rodada do Brasileirão Série B. O único gol da partida foi marcado por Willian Bigode aos 6 minutos do segundo tempo, garantindo os três pontos para o Coelho.

O resultado encerrou uma sequência instável da equipe mineira e dá fôlego na reta final do campeonato. Com o triunfo, o América chegou aos 45 pontos e subiu para a décima terceira posição, afastando-se da zona de rebaixamento.

Já a Chapecoense, que briga na parte de cima da tabela, perdeu a chance de se aproximar ainda mais do G-4. O Verdão do Oeste estaciona nos 58 pontos, caindo para o quarto lugar e vendo a disputa pelo acesso esquentar nas rodadas finais.`,
        imageUrl: 'https://pbs.twimg.com/media/G5bb9GSW0AA5Nyn?format=jpg&name=large',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[15],
        isFeatured: false,
        views: 10500,
        likes: 180,
        hashtags: ['#SérieB', '#AméricaMG', '#Chapecoense', '#Futebol'],
    },
    {
        id: 31,
        category: 'LIGA 520',
        title: 'Eagles vencem Packers em jogo truncado e assumem protagonismo defensivo',
        slug: 'eagles-vencem-packers-em-jogo-truncado-e-assumem-protagonismo-defensivo',
        summary: 'Em uma noite gelada no Lambeau Field, o Philadelphia Eagles mostrou maturidade e venceu o Green Bay Packers por 10 a 7, em uma partida marcada por defesas sólidas e pouca inspiração ofensiva.',
        content: `Em uma noite gelada no Lambeau Field, o Philadelphia Eagles mostrou maturidade e venceu o Green Bay Packers por 10 a 7, em uma partida marcada por defesas sólidas e pouca inspiração ofensiva. O duelo, válido pela 10ª rodada da NFL, reforçou a força dos Eagles mesmo longe de casa.

O primeiro tempo foi de estudo. As duas equipes se anularam ofensivamente, com marcações agressivas e pouca produção aérea. Só no terceiro quarto o placar saiu do zero, com Jake Elliott acertando um field goal de 33 jardas e colocando os Eagles na frente. No último período, DeVonta Smith brilhou em uma rota precisa para touchdown, ampliando para 10 a 0. O Packers ainda reagiu com um belo drive liderado por Jordan Love, que encontrou Josh Jacobs na end zone, mas já era tarde.

Jalen Hurts foi discreto, mas eficiente: completou passes curtos, administrou o relógio e evitou turnovers. Do outro lado, Love sofreu com a pressão — foi sackado três vezes e terminou com 176 jardas aéreas, sem grandes lampejos. A defesa dos Eagles, comandada por Haason Reddick e Darius Slay, foi o grande destaque, controlando as corridas e forçando erros.

Com o resultado, o Philadelphia chega a 7 vitórias e 2 derrotas na temporada, consolidando a liderança na conferência. Já o Green Bay, agora com 5-3-1, precisa reagir rápido se quiser se manter vivo na briga por playoffs.`,
        imageUrl: 'https://classic.exame.com/wp-content/uploads/2024/09/000_36FL9ND.jpg',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[16],
        isFeatured: true,
        views: 15500,
        likes: 512,
        hashtags: ['#NFL', '#Eagles', '#Packers', '#FutebolAmericano'],
    },
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
        publishedAt: articleTimestamps[17],
        isFeatured: true,
        views: 12300,
        likes: 215,
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
        publishedAt: articleTimestamps[18],
        isFeatured: true,
        views: 11500,
        likes: 388,
        hashtags: ['#RealMadrid', '#Rodrygo', '#PremierLeague', '#MercadoDaBola'],
    },
    {
        id: 28,
        category: 'REPÓRTER 520',
        title: 'Seleção Brasileira desembarca em Londres para os últimos amistosos de 2024',
        slug: 'selecao-brasileira-desembarca-em-londres-para-ultimos-amistosos-de-2024',
        summary: 'Comandados de Carlo Ancelotti se apresentam em Londres para os amistosos contra Senegal e Tunísia, fechando a temporada de 2024.',
        content: `Os convocados da Seleção Brasileira começaram a chegar neste domingo (9) em Londres, capital da Inglaterra, para os dois últimos compromissos do ano. Sob o comando do técnico Carlo Ancelotti, o Brasil vai disputar dois amistosos que encerram a temporada 2024 e servem como preparação para a Copa do Mundo de 2026.

O primeiro jogo será no próximo sábado (15), contra o Senegal, no Emirates Stadium, às 13h (horário de Brasília). Já o segundo confronto acontece no dia 18, diante da Tunísia, às 16h30 (de Brasília), em Lille, na França.

Entre os primeiros a desembarcar em solo inglês estão o goleiro Bento (Al-Nassr, da Arábia Saudita) e o atacante Richarlison, que atua no Tottenham e mora em Londres. Membros da comissão técnica também chegaram à capital britânica no sábado (8), onde acompanharam partidas da Premier League.

Nesta segunda-feira (10), Ancelotti comanda o primeiro treino da equipe no Centro de Treinamento do Arsenal, dando início à reta final da preparação. Os jogadores que atuam no Brasil devem se apresentar na terça-feira (11).`,
        imageUrl: 'https://static.wixstatic.com/media/ab590b_61abd4ccf2ab4b5f9148291974f807f7~mv2.jpg/v1/fill/w_764,h_463,al_c,lg_1,q_80/ab590b_61abd4ccf2ab4b5f9148291974f807f7~mv2.jpg',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[19],
        isFeatured: true,
        views: 9200,
        likes: 190,
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
        imageUrl: 'https://i.cbc.ca/ais/5ac4ed65-c25f-4dbe-8605-a36319800041,1762733126819/full/max/0/default.jpg?im=Crop%2Crect%3D%2C406%2C7795%2C4384%29%3B',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[20],
        isFeatured: false,
        views: 8500,
        likes: 210,
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

A decisão da <strong>Moto2 2024</strong> acontece no <strong>Circuito Ricardo Tormo</strong>, em Valência, no próximo fim de semana. E, se tudo correr dentro do esperado, o Brasil pode voltar a ver um campeão mundial nas pistas do Mundial de Motovelocidade.`,
        imageUrl: 'https://cdn.crash.net/2025-11/doigo-moreira-moto2-2025-portugal.jpg?width=1600&aspect_ratio=16:9',
        author: 'Equipe RADIO520',
        publishedAt: articleTimestamps[21],
        isFeatured: false,
        views: 17200,
        likes: 640,
        hashtags: ['#Moto2', '#DiogoMoreira', '#Motovelocidade'],
    },
    {
        id: 25,
        category: 'SUPERSET 520',
        title: 'Praia Clube domina Joinville Vôlei e vence por 3 a 1 na Superliga Feminina',
        slug: 'praia-clube-domina-joinville-volei-e-vence-por-3-a-1-na-superliga-feminina',
        summary: 'O Praia Clube confirmou o favoritismo e derrotou o Joinville Vôlei por 3 sets a 1, mantendo a invencibilidade na competição após reagir com autoridade.',
        content: `O Praia Clube confirmou o favoritismo e derrotou o Joinville Vôlei por 3 sets a 1 (22/25, 25/20, 25/17 e 25/19) neste domingo (9), em Uberlândia, pela 4ª rodada da Superliga Feminina 2024. Mesmo saindo atrás no placar, o time mineiro reagiu com autoridade e manteve a invencibilidade na competição.

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
        publishedAt: articleTimestamps[22],
        isFeatured: false,
        views: 13450,
        likes: 289,
        hashtags: ['#Volei', '#Superliga', '#PraiaClube'],
    },
    {
        id: 24,
        category: 'VOLTA RÁPIDA',
        title: 'Lando Norris domina o GP de São Paulo e amplia liderança no Mundial de F1 2024',
        slug: 'lando-norris-domina-gp-sao-paulo-e-amplia-lideranca-f1-2024',
        summary: 'Britânico da McLaren vence em Interlagos com autoridade e se aproxima do título da temporada.',
        content: `O britânico Lando Norris foi o grande nome do fim de semana em Interlagos. O piloto da McLaren conquistou uma vitória dominante no GP de São Paulo de 2024, disputado neste domingo (9), e ampliou ainda mais sua vantagem na liderança do Campeonato Mundial de Pilotos.

Sob forte calor e diante de 304 mil torcedores, Norris controlou a prova do início ao fim, cruzando a linha de chegada 9,9 segundos à frente de Kimi Antonelli (Mercedes). O italiano de 19 anos subiu ao pódio pela segunda vez na temporada, enquanto Max Verstappen (Red Bull) completou em terceiro após uma impressionante recuperação — o holandês havia largado dos boxes.

Com o resultado, Norris chega a 389 pontos, abrindo 52 de vantagem para Verstappen. A McLaren também manteve a ponta no Mundial de Construtores, somando agora 612 pontos, seguida por Mercedes e Red Bull.

<strong>Caos na largada e domínio absoluto da McLaren</strong>

A corrida começou agitada: o brasileiro Gabriel Bortoleto (Sauber) abandonou logo na primeira curva após toque com Lance Stroll (Aston Martin), o que provocou a entrada do safety car. Depois da relargada, Norris manteve a liderança sem ser ameaçado.

Oscar Piastri, companheiro de equipe, cruzou em quinto mesmo após uma penalidade de 10 segundos por toque em Antonelli, garantindo pontos valiosos para a McLaren.

Entre os abandonos estiveram Lewis Hamilton e Charles Leclerc, ambos da Ferrari, que enfrentaram problemas mecânicos e acidentes.

<strong>Resultado final – GP de São Paulo 2024</strong>

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
        publishedAt: articleTimestamps[23],
        isFeatured: false,
        views: 28950,
        likes: 1204,
        hashtags: ['#F1', '#LandoNorris', '#GPBrasil'],
    },
    {
        id: 23,
        category: 'FUTEBOL SHOW 520',
        title: 'Ceará vence o Corinthians em Itaquera e respira na luta contra o rebaixamento',
        slug: 'ceara-vence-corinthians-em-itaquera-e-respira-na-luta-contra-rebaixamento',
        summary: 'Gol de Antonio Galeano define a partida na Neo Química Arena; Timão perde invencibilidade em casa e Vozão ganha fôlego na luta contra o rebaixamento.',
        content: `O Ceará conquistou uma vitória fundamental na luta contra o rebaixamento ao bater o Corinthians por 1 a 0, neste domingo (9), na Neo Química Arena, pela trigésima terceira rodada do Brasileirão Betano 2024. O único gol da partida foi marcado por Antonio Galeano, ainda no primeiro tempo, após rápido contra-ataque.

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
        publishedAt: articleTimestamps[24],
        isFeatured: false,
        views: 16780,
        likes: 350,
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
        publishedAt: articleTimestamps[25],
        isFeatured: false,
        views: 14500,
        likes: 402,
        hashtags: ['#SeleçãoBrasileira', '#Ancelotti', '#Futebol'],
    },
    {
        id: 21,
        category: 'FUTEBOL SHOW 520',
        title: 'Palmeiras vence o Juventude fora de casa e reassume a liderança do Brasileirão',
        slug: 'palmeiras-vence-juventude-fora-de-casa-e-reassume-lideranca-brasileirao',
        summary: 'O Palmeiras voltou ao topo do Brasileirão Betano 2024. Com atuação sólida e eficiente, o time de Abel Ferreira venceu o Juventude por 2 a 0 no Alfredo Jaconi e reassumiu a liderança do campeonato. Bruno Rodrigues e Felipe Anderson marcaram os gols da partida.',
        content: `Verdão faz 2 a 0 em Caxias do Sul, chega a 65 pontos e ultrapassa o Flamengo; Bruno Rodrigues e Felipe Anderson marcam os gols da vitória

O Palmeiras está novamente na liderança do Brasileirão Betano 2024. Neste domingo (2), o time comandado por Abel Ferreira venceu o Juventude por 2 a 0, em Caxias do Sul, e chegou a 65 pontos, ultrapassando o Flamengo, que soma 64.

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
        publishedAt: articleTimestamps[26],
        isFeatured: false,
        views: 18542,
        likes: 899,
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
        publishedAt: articleTimestamps[27],
        isFeatured: false,
        views: 16230,
        likes: 753,
        ogTitle: 'Sinner soberano em Paris',
        ogDescription: 'O número 1 do mundo confirma o domínio em Paris — veja na Rádio 520.',
        ogImageUrl: 'https://radio520.com.br/img/sinner-paris.jpg',
        hashtags: ['#Sinner', '#Tênis', '#ATPParis'],
    },
];