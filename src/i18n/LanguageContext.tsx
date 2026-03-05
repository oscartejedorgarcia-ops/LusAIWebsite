import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useCases as englishUseCases } from '../data/useCases';
import { translationPacks } from './translations';
import { Locale } from './types';

const STORAGE_KEY = 'lusai_locale';
const SUPPORTED_LOCALES: Locale[] = ['en', 'es', 'pt'];

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const isLocale = (value: string): value is Locale => SUPPORTED_LOCALES.includes(value as Locale);

const detectInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && isLocale(stored)) {
    return stored;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith('es')) {
    return 'es';
  }

  if (browserLanguage.startsWith('pt')) {
    return 'pt';
  }

  return 'en';
};

function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(detectInitialLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  const { locale, setLocale } = context;
  const translation = translationPacks[locale];

  const localizedUseCases = englishUseCases.map((useCase) => ({
    ...useCase,
    ...translation.useCases[useCase.id]
  }));

  return {
    locale,
    setLocale,
    translation,
    localizedUseCases
  };
}

export default LanguageProvider;
