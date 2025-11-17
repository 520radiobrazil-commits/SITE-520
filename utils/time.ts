// A new utility file for centralized, robust date and time formatting.

/**
 * Formats an ISO date string into a full, localized date-time string,
 * including the weekday. Ideal for tooltips.
 * Example: "domingo, 9 de novembro de 2025, 21:30"
 * @param isoString The date in ISO 8601 format.
 * @param locale The locale for formatting (e.g., 'pt-BR').
 * @param timeZone The target timezone (e.g., 'America/Sao_Paulo').
 * @returns A formatted date-time string or an error message.
 */
export function formatFullDateTime(isoString: string, locale = 'pt-BR', timeZone = 'America/Sao_Paulo'): string {
  const dt = new Date(isoString);
  if (isNaN(dt.getTime())) {
    console.error(`Invalid date string provided to formatFullDateTime: "${isoString}"`);
    return "Data inválida";
  }
  return new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone,
  }).format(dt);
}

/**
 * Formats an ISO date string into a short, localized date-time string.
 * Example: "11/11/2025 às 07:39"
 * @param isoString The date in ISO 8601 format.
 * @param locale The locale for formatting (e.g., 'pt-BR').
 * @param timeZone The target timezone (e.g., 'America/Sao_Paulo').
 * @returns A formatted short date-time string or an error message.
 */
export function formatShortDateTime(isoString: string, locale = 'pt-BR', timeZone = 'America/Sao_Paulo'): string {
  const dt = new Date(isoString);
  if (isNaN(dt.getTime())) {
    console.error(`Invalid date string provided to formatShortDateTime: "${isoString}"`);
    return "Data inválida";
  }
  const formatted = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone,
  }).format(dt);
  // Intl returns "dd/MM/yyyy, HH:mm", we want "dd/MM/yyyy às HH:mm"
  return formatted.replace(', ', ' às ');
}

/**
 * Formats an ISO date string into a short, localized date string (without time).
 * Example: "11/11/2025"
 * @param isoString The date in ISO 8601 format.
 * @param locale The locale for formatting (e.g., 'pt-BR').
 * @param timeZone The target timezone (e.g., 'America/Sao_Paulo').
 * @returns A formatted short date string or an error message.
 */
export function formatShortDate(isoString: string, locale = 'pt-BR', timeZone = 'America/Sao_Paulo'): string {
  const dt = new Date(isoString);
  if (isNaN(dt.getTime())) {
    console.error(`Invalid date string provided to formatShortDate: "${isoString}"`);
    return "Data inválida";
  }
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone,
  }).format(dt);
}


/**
 * Formats an ISO date string into a relative time string (e.g., "há 5 minutos").
 * Uses Intl.RelativeTimeFormat for accurate, localized output.
 * @param isoString The date in ISO 8601 format.
 * @param now The current date to compare against. Defaults to new Date().
 * @returns A relative time string or an error message.
 */
export function formatRelativeTime(isoString: string, now = new Date()): string {
  const published = new Date(isoString);
  if (isNaN(published.getTime())) {
    console.error(`Invalid date string provided to formatRelativeTime: "${isoString}"`);
    return "Tempo desconhecido";
  }
  const diffSeconds = (published.getTime() - now.getTime()) / 1000;

  // Intl.RelativeTimeFormat handles localization and pluralization automatically.
  const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });

  // Find the biggest unit to represent the difference
  if (Math.abs(diffSeconds) < 60) {
    return rtf.format(Math.round(diffSeconds), 'second');
  }
  const diffMinutes = diffSeconds / 60;
  if (Math.abs(diffMinutes) < 60) {
    return rtf.format(Math.round(diffMinutes), 'minute');
  }
  const diffHours = diffMinutes / 60;
  if (Math.abs(diffHours) < 24) {
    return rtf.format(Math.round(diffHours), 'hour');
  }
  const diffDays = diffHours / 24;
  if (Math.abs(diffDays) < 7) {
    return rtf.format(Math.round(diffDays), 'day');
  }
  const diffWeeks = diffDays / 7;
  if (Math.abs(diffWeeks) < 4.345) { // Average weeks in month
    return rtf.format(Math.round(diffWeeks), 'week');
  }
  const diffMonths = diffDays / 30.44; // Average days in month
  if (Math.abs(diffMonths) < 12) {
    return rtf.format(Math.round(diffMonths), 'month');
  }
  const diffYears = diffDays / 365.25;
  return rtf.format(Math.round(diffYears), 'year');
}

/**
 * Captures the current system time and returns it as a standardized ISO string.
 * This function should be used to timestamp new articles upon publication in a real system.
 * @returns The current time as an ISO 8601 formatted string.
 */
export function capturePublicationTimestamp(): string {
  return new Date().toISOString();
}

/**
 * Generates a realistic, past-facing ISO timestamp dynamically.
 * This is useful for "last updated" fields on static content to keep them looking fresh.
 * @param options - An object with days, hours, and/or minutes to subtract from the current time.
 * @returns A past date as an ISO 8601 formatted string.
 */
export function generateDynamicPastDateISO(options: { days?: number; hours?: number; minutes?: number }): string {
  const now = new Date();
  if (options.days) {
    now.setDate(now.getDate() - options.days);
  }
  if (options.hours) {
    now.setHours(now.getHours() - options.hours);
  }
  if (options.minutes) {
    now.setMinutes(now.getMinutes() - options.minutes);
  }
  // Add some random seconds to make it more realistic
  now.setSeconds(now.getSeconds() - Math.floor(Math.random() * 60));
  return now.toISOString();
}

/**
 * Calculates the estimated reading time for a given text.
 * @param text The content to be measured.
 * @param wpm Words per minute reading speed. Defaults to 200.
 * @returns A formatted string like "Leitura de 5 min" or an empty string if no text.
 */
export function calculateReadTime(text: string, wpm = 200): string {
  if (!text || typeof text !== 'string') {
    return '';
  }
  // Matches words (sequences of non-whitespace characters)
  const words = text.trim().match(/\S+/g)?.length || 0;
  if (words === 0) {
    return '';
  }
  
  const minutes = Math.ceil(words / wpm);
  
  if (minutes <= 1) {
    return "Leitura de 1 min";
  }
  
  return `Leitura de ${minutes} min`;
}