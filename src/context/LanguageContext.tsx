import React, { createContext, useContext, useState } from 'react';
import { Lang, TranslationKey, translations } from '../utils/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ID',
  setLang: () => {},
  t: (key) => translations.ID[key],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ID');

  const t = (key: TranslationKey): string => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}