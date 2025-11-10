// A new utility file for centralized, robust date and time formatting.

/**
 * Formats an ISO date string into a full, localized date-time string,
 * including the weekday. Ideal for tooltips.
 * Example: "domingo, 9 de novembro de 2025, 21:30"
 * @param isoString The date in ISO 8601 format.
 * @param locale The locale for formatting (e.g., 'pt-BR').
 * @param timeZone The target timezone (e.g., 'America/Sao_Paulo').
 * @returns A formatted date-time string.
 */
export function formatFullDateTime(isoString: string, locale = 'pt-BR', timeZone = 'America/Sao_Paulo'): string {
  const dt = new Date(isoString);
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
 * Formats an ISO date string into a relative time string (e.g., "há 5 minutos").
 * Uses Intl.RelativeTimeFormat for accurate, localized output.
 * @param isoString The date in ISO 8601 format.
 * @param now The current date to compare against. Defaults to new Date().
 * @returns A relative time string.
 */
export function formatRelativeTime(isoString: string, now = new Date()): string {
  const published = new Date(isoString);
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
