import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationZHTW from './translations/translationZHTW.json'
import translationZHCN from './translations/translationZHCN.json'
import translationEN from './translations/translationEN.json'


i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'zhtw',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {

      zhtw: {
        translation: translationZHTW
      },
      zhcn: {
        translation: translationZHCN
      },
      en: {
        translation: translationEN
      }
    }
  });

export default i18n;
