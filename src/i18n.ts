import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    saveMissing: true,
    initImmediate: false,
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    react: {
      wait: true,
      useSuspense: false
    }
  });

export default i18n;
