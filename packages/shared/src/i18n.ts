import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationJA from './locales/ja/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJA,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    whitelist: ['ja', 'en'],
    load: 'languageOnly',
    nonExplicitWhitelist: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
    nsSeparator: '|',
  });

export { i18n };
