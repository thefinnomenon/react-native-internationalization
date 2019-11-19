import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const fallbackLanguage = {languageTag: 'en', isRTL: false};
const defaultLanguage =
  RNLocalize.findBestAvailableLanguage(['en', 'pt']) || fallbackLanguage;

import en from '../locales/en.json';
import pt from '../locales/pt.json';

i18n.use(initReactI18next).init({
  lng: defaultLanguage.languageTag,
  resources: {
    en: {translation: en},
    pt: {translation: pt},
  },
  nsSeparator: false,
  keySeparator: false,
  fallbackLng: false,
  debug: true,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});

export default i18n;
