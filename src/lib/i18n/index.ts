// i18n module — Notion-style URL-based localization
import { en, type Translations } from './en';
import { vi } from './vi';

export type Locale = 'en' | 'vi';

export const DEFAULT_LOCALE: Locale = 'en';

// Only non-default locales need a URL prefix
export const LOCALE_PREFIXES: Locale[] = ['vi'];

export const ALL_LOCALES: Locale[] = ['en', ...LOCALE_PREFIXES];

const translations: Record<Locale, Translations> = { en, vi };

/**
 * Detect locale from URL pathname.
 * - /vi/... → 'vi'
 * - everything else → 'en'
 */
export function getLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.split('/')[1]; // e.g. 'vi', 'auth', ''
  if (LOCALE_PREFIXES.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Build a localized path.
 * - localizedPath('/auth', 'en') → '/auth'
 * - localizedPath('/auth', 'vi') → '/vi/auth'
 * - localizedPath('/', 'vi')     → '/vi'
 */
export function localizedPath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) {
    return path;
  }
  // For non-default locale, prefix with /<locale>
  if (path === '/') return `/${locale}`;
  return `/${locale}${path}`;
}

/**
 * Strip locale prefix from pathname to get the canonical path.
 * - /vi/auth → /auth
 * - /vi      → /
 * - /auth    → /auth
 */
export function stripLocalePrefix(pathname: string): string {
  for (const prefix of LOCALE_PREFIXES) {
    if (pathname === `/${prefix}`) return '/';
    if (pathname.startsWith(`/${prefix}/`)) {
      return pathname.slice(prefix.length + 1);
    }
  }
  return pathname;
}

/**
 * Get the full translation object for a locale.
 */
export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
}

export type { Translations };
