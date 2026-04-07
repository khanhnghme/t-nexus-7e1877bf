import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  type Locale,
  type Translations,
  getLocaleFromPath,
  getTranslations,
  localizedPath as buildLocalizedPath,
  stripLocalePrefix,
  ALL_LOCALES,
  DEFAULT_LOCALE,
} from '@/lib/i18n';

interface LanguageContextValue {
  /** Current active locale */
  locale: Locale;
  /** Full translations object for the current locale */
  translations: Translations;
  /** Build a localized path for the current locale */
  localizedPath: (path: string) => string;
  /** Build a path for a specific locale (for language toggle) */
  pathForLocale: (locale: Locale) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const SITE_URL = 'https://t-nexus.io.vn';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const t = useMemo(() => getTranslations(locale), [locale]);

  const lp = useMemo(
    () => (path: string) => buildLocalizedPath(path, locale),
    [locale],
  );

  const pathForLocale = useMemo(
    () => (targetLocale: Locale) => {
      const canonical = stripLocalePrefix(location.pathname);
      return buildLocalizedPath(canonical, targetLocale);
    },
    [location.pathname],
  );

  // Side effect: update <html lang> attribute
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Side effect: inject hreflang <link> tags for SEO
  useEffect(() => {
    const HEAD_ID = 'i18n-hreflang';

    // Remove existing hreflang tags
    document.querySelectorAll(`link[data-i18n="${HEAD_ID}"]`).forEach((el) => el.remove());

    const canonical = stripLocalePrefix(location.pathname);

    ALL_LOCALES.forEach((loc) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = loc;
      link.href = `${SITE_URL}${buildLocalizedPath(canonical, loc)}`;
      link.dataset.i18n = HEAD_ID;
      document.head.appendChild(link);
    });

    // x-default → EN (default)
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = `${SITE_URL}${buildLocalizedPath(canonical, DEFAULT_LOCALE)}`;
    xDefault.dataset.i18n = HEAD_ID;
    document.head.appendChild(xDefault);

    return () => {
      document.querySelectorAll(`link[data-i18n="${HEAD_ID}"]`).forEach((el) => el.remove());
    };
  }, [location.pathname, locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, translations: t, localizedPath: lp, pathForLocale }),
    [locale, t, lp, pathForLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/**
 * Hook to access the current locale and translations.
 */
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback for non-localized routes (dashboard, etc.)
    return {
      locale: DEFAULT_LOCALE,
      translations: getTranslations(DEFAULT_LOCALE),
      localizedPath: (p: string) => p,
      pathForLocale: (loc: Locale) => buildLocalizedPath('/', loc),
    };
  }
  return ctx;
}
