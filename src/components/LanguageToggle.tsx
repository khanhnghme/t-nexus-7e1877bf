import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

interface LanguageToggleProps {
  /** 'light' for dark backgrounds (landing footer), 'default' for white backgrounds */
  variant?: 'light' | 'default';
}

const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  vi: 'VI',
};

export default function LanguageToggle({ variant = 'default' }: LanguageToggleProps) {
  const { locale, pathForLocale } = useLanguage();
  const navigate = useNavigate();

  const isLight = variant === 'light';

  const switchTo = (targetLocale: Locale) => {
    if (targetLocale === locale) return;
    navigate(pathForLocale(targetLocale));
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        borderRadius: 6,
        padding: '4px 8px',
        fontSize: 13,
        fontWeight: 500,
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <Globe
        size={14}
        style={{
          color: isLight ? 'rgba(255,255,255,0.5)' : '#a5a29a',
          flexShrink: 0,
        }}
      />
      {(['en', 'vi'] as Locale[]).map((loc, i) => (
        <span key={loc}>
          {i > 0 && (
            <span
              style={{
                margin: '0 2px',
                color: isLight ? 'rgba(255,255,255,0.2)' : '#d3d1cb',
              }}
            >
              |
            </span>
          )}
          <button
            onClick={() => switchTo(loc)}
            style={{
              background: 'none',
              border: 'none',
              padding: '2px 4px',
              borderRadius: 4,
              cursor: loc === locale ? 'default' : 'pointer',
              fontSize: 13,
              fontWeight: loc === locale ? 700 : 400,
              color: loc === locale
                ? isLight
                  ? '#ffffff'
                  : '#37352f'
                : isLight
                  ? 'rgba(255,255,255,0.45)'
                  : '#a5a29a',
              transition: 'color 0.15s, background 0.15s',
            }}
            onMouseEnter={(e) => {
              if (loc !== locale) {
                e.currentTarget.style.color = isLight ? 'rgba(255,255,255,0.8)' : '#37352f';
                e.currentTarget.style.background = isLight ? 'rgba(255,255,255,0.08)' : 'rgba(55,53,47,0.06)';
              }
            }}
            onMouseLeave={(e) => {
              if (loc !== locale) {
                e.currentTarget.style.color = isLight ? 'rgba(255,255,255,0.45)' : '#a5a29a';
                e.currentTarget.style.background = 'none';
              }
            }}
          >
            {LOCALE_LABELS[loc]}
          </button>
        </span>
      ))}
    </div>
  );
}
