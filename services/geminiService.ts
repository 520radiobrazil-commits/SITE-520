// Este arquivo agora contém funções utilitárias compartilhadas.

/**
 * Analisa uma string de data no formato "dd/MM/yyyy - HH:mm".
 * @param dateString A string de data para analisar.
 * @returns Um objeto Date.
 */
export const parseBrazilianDate = (dateString: string): Date => {
  const parts = dateString.split(' - ');
  if (parts.length !== 2) return new Date(0); // Data inválida

  const datePart = parts[0];
  const timePart = parts[1];

  const dateSegments = datePart.split('/');
  const timeSegments = timePart.split(':');

  if (dateSegments.length !== 3 || timeSegments.length !== 2) return new Date(0);

  const [day, month, year] = dateSegments.map(Number);
  const [hours, minutes] = timeSegments.map(Number);

  // O mês no Date do JavaScript é baseado em zero (0-11)
  return new Date(year, month - 1, day, hours, minutes);
};

/**
 * Formata a diferença de tempo entre duas datas em uma string relativa (ex: "há 5 minutos").
 * @param articleDate A data do artigo.
 * @param currentTime A data/hora atual para comparar.
 * @returns Uma string representando o tempo relativo.
 */
export const formatTimeAgo = (articleDate: Date, currentTime: Date): string => {
  const diffMs = currentTime.getTime() - articleDate.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return 'agora mesmo';
  if (diffMins < 60) return `há ${diffMins} minuto${diffMins > 1 ? 's' : ''}`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `há ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return 'ontem';
  return `há ${diffDays} dia${diffDays > 1 ? 's' : ''}`;
};

/**
 * Gera uma string de data no formato "dd/MM/yyyy - HH:mm" relativa à hora atual.
 * @param daysAgo Número de dias no passado.
 * @param hoursAgo Número de horas no passado.
 * @param minutesAgo Número de minutos no passado.
 * @returns Uma string de data formatada.
 */
export const getRelativeDateString = (daysAgo: number, hoursAgo: number = 0, minutesAgo: number = 0): string => {
    const now = new Date();
    now.setDate(now.getDate() - daysAgo);
    now.setHours(now.getHours() - hoursAgo);
    now.setMinutes(now.getMinutes() - minutesAgo);
    
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
};
